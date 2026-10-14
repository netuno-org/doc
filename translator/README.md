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

Type the language number and press Enter. The script prints how many files
need translating (`X de Y ficheiros para traduzir.`), then each translated
file, and `Tradução concluída.` ("Translation complete.") at the end.

Only files whose Portuguese source changed since the last run are translated
(see [Incremental translation](#incremental-translation)). To translate every
file again, add `--force`:

```bash
npm run translate -- --force
```

```bash
bun run translate --force
```

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
- The `library/objects` and `library/resources` folders are not translated:
  they are copied from a reference folder (see
  [Library (objects and resources)](#library-objects-and-resources)).
- Only files whose source changed are rewritten, and they are **overwritten**
  without confirmation. Commit before running, so you can review the changes
  with `git diff`.
- Do not choose `Português`: source and destination would be the same folder,
  and the original files would be rewritten.

## Library (objects and resources)

The `library/objects` and `library/resources` pages are generated from the
Netuno API, so they are copied instead of translated. The reference copies
live in `library/`, one folder per language:

```
library/
  en/objects/
  en/resources/
  pt/objects/
  pt/resources/
```

On every run, for each of `objects` and `resources`, the script uses
`library/<code>/<folder>` if it exists, or `library/en/<folder>` otherwise,
and copies it to:

| Language | Destination |
|---|---|
| English | `docs/library/<folder>` |
| Others | `i18n/<code>/docusaurus-plugin-content-docs/current/library/<folder>` |

- The destination folder is **deleted and replaced**, so it always matches the
  reference folder. Make changes in `library/<code>/`, not in the
  destination, or they are lost on the next run.
- To give a language its own version, create `library/<code>/objects` and/or
  `library/<code>/resources`. A missing folder falls back to `en`.
- `library/pt/` is the Portuguese reference. The script never writes to
  `i18n/pt`.
- If neither `library/<code>/<folder>` nor `library/en/<folder>` exists, the
  script stops with `Pasta de consulta não encontrada` before deleting
  anything.
- These files don't use the translation hashes: copying doesn't call the API.

## Incremental translation

For each language, `hashes/<code>.json` (for example `hashes/ro.json`) maps
every source file to the SHA-256 hash of its Portuguese content. A file is
translated only when:

- its hash differs from the one in the table (the Portuguese file changed),
- it isn't in the table yet (new file), or
- its translated file doesn't exist.

Notes:

- Commit `hashes/<code>.json` together with the translations. Otherwise, the
  next run on another machine translates everything again.
- The first run for a language has no table, so it translates every file.
- Changing the prompt or the model in `src/llm/index.ts` doesn't change the
  hashes. Run with `--force` (or delete `hashes/<code>.json`) to translate
  everything again.
- Manual fixes to a translated file are kept until its Portuguese source
  changes.
- If a file fails (for example `A tradução perdeu referências protegidas`),
  the other files are still translated. The failed file isn't recorded in the
  table, so the next run retries only it. The script lists the failed files
  and exits with code 1.
- The table is saved after each file, so stopping the script with Ctrl+C
  keeps the progress made so far.
- When a source file is renamed or deleted, its entry is removed from the
  table and a warning is printed. The old translated file is **not** deleted.

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
| Source and destination folders | `src/index.ts` |
| Copied library folders (`LIBRARY_FOLDERS`) | `src/library/index.ts` |
| Reference library folders | `library/<code>/` |
| Number of files translated in parallel (`CONCURRENCY`, 30) | `src/index.ts` |
| Model and prompt | `src/llm/index.ts` |
| Translation hashes | `hashes/<code>.json` |
