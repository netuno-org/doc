import OpenAI from "openai";

import { LIBRARY_FOLDERS } from "../library";

export const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

type Props = {
  content: string;
  language: string;
};

// Fenced code blocks are left untouched by the protection step,
// so example paths inside code are still translated by the model.
const FENCE = /(```[\s\S]*?```|~~~[\s\S]*?~~~)/g;

// References to real files/pages that must never change.
const PROTECT_PATTERNS: RegExp[] = [
  /(?<=\]\()[^)\s]+/g,                                   // ![alt](url) and [label](url)
  /(?<=^[ \t]*\[[^\]]+\]:[ \t]*)\S+/gm,                  // [ref]: url
  /(?<=\b(?:src|href)=\{?["'])[^"']+(?=["'])/g,          // <img src="..."> / <a href="...">
  /(?<=^[ \t]*import\s[^;\n]*?\bfrom\s+["'])[^"']+/gm,   // MDX: import X from '...'
  /(?<=^[ \t]*import\s+["'])[^"']+/gm,                   // MDX: import '...'
  /(?<=require\(\s*["'])[^"']+(?=["'])/g,                // require('...')
];

const PLACEHOLDER = /%%URL_(\d+)%%/g;

// http://, https://, mailto:, ...: their anchors don't come from our headings
const EXTERNAL = /^[a-z][a-z0-9+.-]*:/i;

// Library pages are copied, not translated, so their anchors stay as they are
const LIBRARY = new RegExp(`/library/(?:${LIBRARY_FOLDERS.join("|")})/`);

export function protectReferences(content: string) {
  const references: string[] = [];

  // The same reference always gets the same placeholder, so the model
  // can't lose one by merging repeated links
  function protect(reference: string) {
    let index = references.indexOf(reference);

    if (index === -1) {
      index = references.push(reference) - 1;
    }

    return `%%URL_${index}%%`;
  }

  const protectedContent = content
    .split(FENCE)
    .map((part, index) => {
      // split() with a capture group puts the fenced blocks at odd indexes
      if (index % 2 === 1) return part;

      return PROTECT_PATTERNS.reduce(
        (text, pattern) =>
          text.replace(pattern, (match) => {
            const anchorIndex = match.indexOf("#");

            if (anchorIndex === -1 || EXTERNAL.test(match) || LIBRARY.test(match)) {
              return protect(match);
            }

            // Internal anchors follow the translated headings, so the model sees them
            const anchor = match.slice(anchorIndex);

            return anchorIndex === 0
              ? anchor
              : protect(match.slice(0, anchorIndex)) + anchor;
          }),
        part,
      );
    })
    .join("");

  return { protectedContent, references };
}

function restoreReferences(content: string, references: string[]) {
  const missing = references
    .map((_, index) => `%%URL_${index}%%`)
    .filter((placeholder) => !content.includes(placeholder));

  if (missing.length > 0) {
    throw new Error(
      `A tradução perdeu referências protegidas: ${missing.join(", ")}`,
    );
  }

  return content.replace(
    PLACEHOLDER,
    (match: string, index: string) => references[Number(index)] ?? match,
  );
}

async function translateOnce({
  content,
  language,
}: Props): Promise<string> {
  const { protectedContent, references } = protectReferences(content);

  const response = await deepseek.chat.completions.create({
    model: "deepseek-flash",
    reasoning_effort: "low",
    temperature: 0.1,
    messages: [
      {
        role: "system",
        content: `
You are a professional technical documentation translator.

Translate ALL applicable content to ${language}.

Your goal is to produce documentation that looks as if it was originally
written in ${language}, including example names used inside commands,
code examples, paths, variables, functions, tables, and identifiers.

PROTECTED PLACEHOLDERS (HIGHEST PRIORITY):
The document contains placeholders in the form %%URL_<number>%%
(for example %%URL_0%%, %%URL_12%%).
They stand for real files, images and pages that exist on disk.
- Copy every placeholder EXACTLY as it is, in the same position.
- Never translate, rename, reformat, merge, split or remove a placeholder.
- Never replace a placeholder with a URL or a path.

ANCHORS:
A link target may contain a heading anchor: "#text" right after a
placeholder (%%URL_3%%#campos-comuns) or alone ([label](#organização)).
The anchor is generated from a Portuguese heading, so it MUST be translated
to the anchor Docusaurus generates from that heading translated to ${language}:
- lowercase
- spaces become "-"
- punctuation is removed (. , : ; ( ) ? ! ' " / etc.)
- accented letters and non-Latin scripts are kept as they are: never
  remove accents (é stays é, ç stays ç, ã stays ã)
- digits are kept

Examples when translating to English:
#campos-comuns -> #common-fields
%%URL_2%%#7-arranque-automático-do-website-opcional -> %%URL_2%%#7-automatic-website-startup-optional
#infojson-e-configjson -> #infojson-and-configjson

Example when translating to French (accents kept):
#7-arranque-automático-do-website-opcional -> #7-démarrage-automatique-du-site-web-facultatif

- When the heading is in this document, the anchor MUST match the slug of
  its translated heading exactly.
- Translate the same anchor the same way everywhere in the document.
- Keep the placeholder before the anchor unchanged.
- Never translate a heading anchor written explicitly as {#anchor}, nor
  links pointing to it.

GENERAL RULES:
- Translate all human-readable text naturally.
- Preserve the exact Markdown and MDX structure.
- Do not summarize, omit, explain, or add content.
- Return only the translated document.
- Maintain terminology consistently throughout the entire document.

MARKDOWN / MDX:
Translate:
- headings
- paragraphs
- lists
- tables
- table names
- table headers
- captions
- admonitions
- link labels (the text inside [ ], never the target inside ( ))
- image alt text (the text inside ![ ], never the target inside ( ))
- bold and italic text
- inline code when it contains user-defined examples
- example identifiers written inside backticks
- example identifiers written inside bold text

Do NOT translate:
- link and image targets (except the #anchor part, see ANCHORS)
- src / href attribute values
- MDX import / require paths
- front matter keys and the values of: id, slug, sidebar_position, image
- heading anchors written as {#anchor}

USER-DEFINED EXAMPLES:
User-defined example names MUST also be translated.

This includes identifiers such as:
- variable names
- function names
- parameter names
- class names
- object names
- example application names
- example database table names
- example field names
- example directory names
- example file names when their name is descriptive
- CLI argument values
- snake_case identifiers
- kebab-case identifiers
- camelCase identifiers
- PascalCase identifiers

Examples:

Portuguese:
minha_aplicacao
app-vendas
gestao_rh
minhaapp

When translating, these SHOULD be localized to equivalent identifiers
in the target language while preserving their naming convention.

For example, when translating to English:

minha_aplicacao -> my_application
app-vendas -> app-sales
gestao_rh -> hr_management
minhaapp -> myapp

The exact translation can vary according to context, but the identifier
must be translated.

CODE:
- Translate comments.
- Translate user-defined variables.
- Translate user-defined function names.
- Translate user-defined parameters.
- Translate user-defined classes.
- Translate user-defined properties when they are examples.
- Translate user-facing string literals.
- Translate example identifiers even when they appear inside code fences.
- Translate example identifiers even when they appear inside inline code.
- Update EVERY occurrence of a translated identifier consistently.
- Preserve the programming language syntax.
- The resulting code example must remain syntactically valid.

COMMANDS:
Preserve the executable, framework command, and command syntax.

Example:

./netuno app name=minha_aplicacao

When translating to English:

./netuno app name=my_application

Here:
- "./netuno" must NOT change
- "app" must NOT change because it is a Netuno command
- "name" must NOT change because it is a Netuno parameter
- "minha_aplicacao" MUST be translated because it is a user-defined value

PATHS:
Paths shown as examples (in prose, inline code, code blocks and commands)
describe what the reader will create, so their user-defined segments
are translated.

Example:

apps/minhaapp

When translating to English:

apps/myapp

Preserve framework-defined or system-defined path segments.

If "apps" is a framework directory, keep "apps".
If "minhaapp" is the example application name, translate "minhaapp".

Paths that reference files of THIS documentation site (images, assets,
other pages, imports) are real files and must NEVER change. These are
normally already replaced by %%URL_n%% placeholders; if any such path
is still visible (for example starting with /docs/, /img/, @site/,
./ or ../ and ending in .png, .jpg, .jpeg, .gif, .svg, .webp, .md,
.mdx, .js, .jsx, .ts, .tsx or .json), copy it unchanged.

EXTERNAL / FRAMEWORK IDENTIFIERS:
Do NOT translate:
- programming language keywords
- framework API names
- library API names
- external library names
- package names
- imports
- module names
- built-in functions
- CLI executable names
- framework command names
- framework parameter names
- URLs
- environment variable names
- HTTP methods
- protocol names

Examples that normally must remain unchanged:
Netuno
React
Node.js
Bun
JSON
HTTP
GET
POST
npm
OpenAI
useState
console.log

PROTECTED CODE:
Any line whose comment starts exactly with:

// _

is protected.

Do NOT translate or modify that comment.

Example:

// _DO_NOT_TRANSLATE

must remain exactly:

// _DO_NOT_TRANSLATE

If a line or identifier is explicitly marked as protected using "// _",
preserve the protected content exactly.

JSON:
- Preserve JSON syntax.
- Preserve technical/configuration keys.
- Never translate the values of: slug, type, position, id.
- Translate human-readable values.
- Translate example identifiers used as values.
- Keep the resulting JSON valid.

CONSISTENCY IS CRITICAL:
If an identifier is translated once, translate every reference to the same
identifier consistently throughout the document.

For example, if:

minha_aplicacao -> my_application

then every occurrence of "minha_aplicacao" in prose, code, inline code,
commands and example paths must become "my_application".

IMPORTANT:
Do not assume that text inside backticks, code fences, paths, snake_case,
kebab-case or camelCase must be preserved.

Determine whether it is:
1. a placeholder %%URL_n%% -> copy it exactly (translate a #anchor after it)
2. a reference to a real file of this site -> preserve it
3. a framework/system/external identifier -> preserve it
4. a user-defined example identifier -> translate it

Return ONLY the translated content.
        `.trim(),
      },
      {
        role: "user",
        content: protectedContent,
      },
    ],
  });

  const translatedContent =
    response.choices[0]?.message.content;

  if (!translatedContent) {
    throw new Error("DeepSeek não retornou conteúdo.");
  }

  return restoreReferences(
    unwrapFence(content, translatedContent),
    references,
  );
}

const WRAPPING_FENCE = /^\s*(```|~~~)[\w-]*\r?\n([\s\S]*?)\r?\n\1\s*$/;

// The model sometimes returns the whole document inside a ```mdx block,
// which hides the front matter and the imports
function unwrapFence(source: string, translated: string) {
  const match = translated.match(WRAPPING_FENCE);

  if (!match || WRAPPING_FENCE.test(source)) {
    return translated;
  }

  return match[2] + "\n";
}

const ATTEMPTS = 3;

// The model sometimes drops a placeholder, a new attempt usually keeps them all
async function translate(props: Props): Promise<string> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await translateOnce(props);
    } catch (error) {
      if (attempt >= ATTEMPTS) {
        throw error;
      }
    }
  }
}

export default translate;