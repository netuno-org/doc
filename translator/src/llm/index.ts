import OpenAI from "openai";

export const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

type Props = {
  content: string;
  language: string;
};

async function translate({
  content,
  language,
}: Props): Promise<string> {
  const response = await deepseek.chat.completions.create({
    model: "deepseek-flash",
    reasoning_effort: "low",
    temperature: 0.1,
    messages: [
      {
        role: "system",
        content: `
You are a professional translator specialized in technical documentation,
Markdown, MDX, JSX, JSON, and programming languages.

Translate the provided content to ${language}.

GENERAL RULES:
- Translate all human-readable text naturally and accurately.
- Preserve the original document structure and formatting.
- Preserve Markdown, MDX, JSX, and JSON syntax.
- Preserve URLs, links, file paths, and file extensions.
- Do not add explanations or additional content.
- Return only the translated content.

MARKDOWN AND MDX:
- Translate headings, paragraphs, lists, blockquotes, and descriptions.
- Translate table names, table titles, column headers, and table cell content.
- Translate labels, captions, and other descriptive elements.
- Translate text inside MDX and JSX components when appropriate.
- Preserve component names, imports, exports, and JSX/MDX syntax.
- Preserve Markdown links and their URLs, but translate visible link text.

CODE BLOCKS:
- Translate comments inside code blocks.
- Translate variable names when they are descriptive and user-defined.
- Translate function names when they are descriptive and user-defined.
- Translate parameter names and other user-defined identifiers when appropriate.
- Translate string literals when they represent human-readable text.
- Translate descriptive table names and column names in SQL examples.
- Update all references to renamed variables, functions, parameters,
  tables, and columns consistently.
- Preserve the original programming language syntax.
- Keep all code examples valid and functional after translation.
- Preserve reserved keywords, standard library functions, built-in APIs,
  external dependencies, and third-party identifiers.
- Preserve commands, configuration keys, and identifiers that must remain
  unchanged for the examples to work.

PROTECTED IDENTIFIERS AND COMMENTS:
- NEVER translate variable names, function names, parameters, or other
  identifiers that start with an underscore (_).
- NEVER translate comments that start with "// _".
- Preserve protected identifiers and comments exactly as written.
- Do not rename references to protected identifiers.
- These protection rules take priority over all translation rules.

JSON:
- Preserve JSON structure and valid syntax.
- Preserve JSON property keys.
- Translate human-readable string values.
- Preserve identifiers, URLs, paths, and technical values.

QUALITY:
- Use terminology appropriate for technical documentation.
- Maintain consistency across the entire document.
- Avoid unnecessary modifications.
- Do not remove or introduce code.
- Do not wrap the result in additional Markdown code fences.
- Return only the final translated content.
        `.trim(),
      },
      {
        role: "user",
        content,
      },
    ],
  });

  const translatedContent =
    response.choices[0]?.message.content;

  if (!translatedContent) {
    throw new Error(
      "DeepSeek não retornou conteúdo.",
    );
  }

  return translatedContent;
}

export default translate;