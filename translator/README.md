# translator

Automatically translates the Docusaurus documentation from Portuguese,
using the DeepSeek API.

## Requirements

- [Bun](https://bun.com) 1.4 or later
- A DeepSeek API key

## Installation

```bash
cd translator
bun install
```

Copy `.env.example` to `.env` and fill in the key:

```bash
cp .env.example .env
```

```env
DEEPSEEK_API_KEY=sk-...
```

`.env` is listed in `.gitignore` and must never be committed.

## Usage

From the project root (`doc/`):

```bash
npm run translate
```

Or from inside the `translator/` folder:

```bash
bun run translate
```

The script asks for the target language (the prompts are in Portuguese):

```
Escolha o idioma de destino:

1. English
2. Português
3. Español
...

Idioma:
```

Type the language number and press Enter. Each translated file is printed to
the terminal, and `Tradução concluída.` ("Translation complete.") is shown at
the end.

The script must run with `translator/` as the current directory, because the
source and destination paths are resolved relative to it. Both commands above
already take care of that.

## Source and destination

Portuguese is always the source language.

| Language | Source | Destination |
|---|---|---|
| English | `i18n/pt/docusaurus-plugin-content-docs/current` | `docs/` |
| Others | `i18n/pt/` | `i18n/<code>/` |

- `.md`, `.mdx` and `.json` files are translated.
- The `library/objects` and `library/resources` folders are skipped.
- Destination files are **overwritten** without confirmation. Commit before
  running, so you can review the changes with `git diff`.
- Do not choose `Português`: source and destination would be the same folder,
  and the original files would be rewritten.

## What is and isn't translated

The translator (`src/llm/index.ts`) translates text, comments and example
names (for example `minha_aplicacao` → `my_application`), including inside
code blocks and commands.

These are never changed:

- link and image targets (`![alt](/docs/assets/image.png)`)
- `src` and `href` attributes
- `import` / `require` paths in MDX
- Netuno and external library API, command and parameter names
- lines whose comment starts with `// _` (for example `// _DO_NOT_TRANSLATE`)

Before the text is sent to the model, links, images and imports are replaced
with placeholders (`%%URL_0%%`, `%%URL_1%%`, ...). The original values are
restored afterwards. If the model drops a placeholder, the file is not written
and the script fails with the error
`A tradução perdeu referências protegidas` ("The translation lost protected
references").

## After translating

1. Review the changes with `git diff`.
2. Make sure the site builds:

   ```bash
   npm run build
   ```

## Configuration

| What | Where |
|---|---|
| Available languages | `src/menu/index.ts` |
| Source and destination folders, skipped folders | `src/index.ts` |
| Number of files translated in parallel (`CONCURRENCY`, 30) | `src/index.ts` |
| Model and prompt | `src/llm/index.ts` |
