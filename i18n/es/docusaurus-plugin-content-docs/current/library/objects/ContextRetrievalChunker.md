---
id: ContextRetrievalChunker
title: AI ContextRetrievalChunker
sidebar_label: AI ContextRetrievalChunker
---

Text chunking utility for context retrieval in RAG (Retrieval-Augmented Generation) pipelines.

Splits Markdown documents, plain text or text extracted from PDF into controlled-size chunks with configurable overlap, preserving the document structure for better semantic retrieval quality.

**Key features:**
- Structural segmentation: headings, paragraphs, code blocks, tables, lists and quotes are recognised and never split arbitrarily
- Hierarchical context: every block carries the full heading tree (`# Guide > ## Install > ### Windows`)
- Budget in characters or in real tokens (BPE `cl100k_base` / `o200k_base`)
- Code blocks larger than the budget are split by lines with the fence reopened in each part
- Tables larger than the budget repeat the header row in each part
- Sentence-aware overlap, never in the middle of a word
- No text loss: every block of the document belongs to exactly one chunk
- Deterministic: the same input always produces the same chunks and the same `id` values, which makes re-ingestion idempotent

```javascript
// Basic example
const chunker = _ai.contextRetrievalChunker()
const chunks = chunker.markdown(markdownDocument)

for (const chunk of chunks.listOfValues()) {
    _log.info(`Chunk ${chunk.getInt('index')}: ${chunk.getString('breadcrumb')}`)
    _log.info(`Text: ${chunk.getString('text')}`)
}

// Budget in real tokens and ingestion into the vector store
const client = _ai.client()
const vector = _ai.vector('default')

const blocks = _ai.contextRetrievalChunker()
    .unit('tokens')
    .chunkSize(320)
    .overlap(48)
    .source('manual-v1')
    .markdown(markdownDocument)

for (const block of blocks.listOfValues()) {
    const response = client.embeddings('embeddinggemma:latest', block.getString('text'))
    const embedding = response.getValues('data').getValues(0).getValues('embedding')
    vector.add('netuno', block.getString('id'), embedding, block.getString('text'), block.getValues('metadata'))
}

```

---

## chunk

---

#### <span style={{color: '#008000'}}>chunk</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a document into chunks, automatically detecting whether the content is Markdown or running text. This is the entry point to use when the content origin is not known upfront.

##### How To Use

```javascript
const chunks = chunker.chunk(content)

for (const chunk of chunks.listOfValues()) {
    _log.info(chunk.getString('text'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Text to split into chunks. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

#### <span style={{color: '#008000'}}>chunk</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **chunkSize** | _int_ |   |
| **overlap** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>chunk</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a document into chunks with options, automatically detecting whether the content is Markdown or running text.

##### How To Use

```javascript
const chunks = chunker.chunk(content, _val.map()
    .set('unit', 'tokens')
    .set('chunkSize', 320)
    .set('overlap', 48))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Text to split into chunks. |
| **options** | _[Values](/docs/library/objects/Values)_ | Options overriding the instance configuration. See the full list in `markdown`. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

## chunkSize

---

#### <span style={{color: '#008000'}}>chunkSize</span>(<span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets the maximum size of each chunk, in the unit chosen with `unit`. Default value: 1024 characters, or 256 when the unit is `tokens` and the size was not set explicitly.

##### How To Use

```javascript
const chunks = chunker.chunkSize(1500).markdown(document)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **chunkSize** | _int_ | Maximum size of each chunk, clamped to [32, 200000]. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## contextualize

---

#### <span style={{color: '#008000'}}>contextualize</span>(<span style={{color: '#FF8000'}}>client</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>, <span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunks</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Fills the `context` field of each chunk with a retrieval note, generated by the model from the whole document, and rebuilds the `text` field with that note included. This is the *contextual retrieval* technique: a chunk that only says "the value went up 3%" also comes to say which company and which quarter it is about, which greatly reduces retrieval misses.

The note has two parts, because a query arrives in two shapes. Two or three sentences situate the chunk by naming the product, the task and the conditions it takes for granted, which answers whoever describes the problem in their own words. Then a line of terms gathers the exact vocabulary: names, identifiers, configuration keys, commands, error codes, acronyms with what they stand for, synonyms and, on documents not written in English, the English term next to the original. That is what finds whoever pastes an error message or the name of a parameter.

It is a paid operation: it makes one model call per chunk. Run it during ingestion only, never per request.

The calls are sequential on purpose, because `Client` keeps session and token accounting state that is not safe to share across parallel calls. An error on one chunk does not stop the rest: it is logged, that chunk's `context` stays empty and processing continues.

Accepted options: `model`, `temperature` (0 by default, so the result is reproducible), `documentMaxChars` (truncates very large documents), `template` (placeholders `{document}`, `{chunk}`, `{breadcrumb}` and `{heading}`), `system` (system message), `skipIfPresent` (does not redo chunks that already have context) and `failFast`.

##### How To Use

```javascript
const client = _ai.client()
const chunks = chunker.markdown(document)

chunker.contextualize(client, document, chunks)

for (const chunk of chunks.listOfValues()) {
    _log.info(chunk.getString('context'))
    // text already includes the context, it is what should be embedded
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **client** | _[Client](/docs/library/objects/Client)_ | AI client used to generate the context. |
| **document** | _string_ | The whole document, the same one the chunks came from. |
| **chunks** | _[Values](/docs/library/objects/Values)_ | List of chunks returned by `markdown`, `text`, `pdf` or `chunk`. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The same list of chunks, with `context` and `text` updated.

---

#### <span style={{color: '#008000'}}>contextualize</span>(<span style={{color: '#FF8000'}}>client</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>, <span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunks</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Fills the `context` field of each chunk with options. See the full description and option list in `contextualize`.

##### How To Use

```javascript
chunker.contextualize(client, document, chunks, _val.map()
    .set('model', 'gpt-4o-mini')
    .set('documentMaxChars', 40000))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **client** | _[Client](/docs/library/objects/Client)_ | AI client used to generate the context. |
| **document** | _string_ | The whole document, the same one the chunks came from. |
| **chunks** | _[Values](/docs/library/objects/Values)_ | List of chunks returned by `markdown`, `text`, `pdf` or `chunk`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Context generation options. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The same list of chunks, with `context` and `text` updated.

---

## countTokens

---

#### <span style={{color: '#008000'}}>countTokens</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Counts the tokens of a text with the encoding configured in `encoding`, using the same BPE algorithm the models use. Useful to budget prompts and to check that a chunk fits the embedding model limit.

##### How To Use

```javascript
_log.info('Tokens: '+ chunker.countTokens(text))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text to measure. |

##### Return

( _int_ )

Number of tokens in the text.

---

#### <span style={{color: '#008000'}}>countTokens</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Counts the tokens of a text with a specific encoding, or with the encoding inferred from a model name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text to measure. |
| **encoding** | _string_ | Encoding name, such as `cl100k_base` or `o200k_base`, or a model name. |

##### Return

( _int_ )

Number of tokens in the text.

---

## embed

---

#### <span style={{color: '#008000'}}>embed</span>(<span style={{color: '#FF8000'}}>embed</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets what goes into the `text` field, which is always the string meant to be embedded. The `content` field always keeps the real chunk and is what a search should return.

- `full`, the default: context header, generated context and chunk body
- `context`: header and generated context only, leaving the body out
- `content`: body only, with no header and no context

The `context` mode indexes the generated note instead of the chunk. The note is dense prose, while the body carries code blocks, table pipes and markup that dilute the vector. In exchange, an exact term that exists in the body but not in the note stops being searchable, so this mode only makes sense after running `contextualize`. While the context is still empty the body is used anyway, so a heading is never indexed on its own.

##### How To Use

```javascript
// Index the context, return the real text
const chunks = chunker.embed('context').markdown(document)
chunker.contextualize(client, document, chunks)

for (const chunk of chunks.listOfValues()) {
    const response = client.embeddings(model, chunk.getString('text'))
    const embedding = response.getValues('data').getValues(0).getValues('embedding')
    vector.add('docs', chunk.getString('id'), embedding, chunk.getString('content'), metadata)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **embed** | _string_ | `full`, `context` or `content`. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## encoding

---

#### <span style={{color: '#008000'}}>encoding</span>(<span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets the encoding used for token counting: `cl100k_base` (default), `o200k_base`, `p50k_base`, `r50k_base`, or the name of an OpenAI model, from which the encoding is inferred.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **encoding** | _string_ | Encoding or model name. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## getChunkSize

---

#### <span style={{color: '#008000'}}>getChunkSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getEmbed

---

#### <span style={{color: '#008000'}}>getEmbed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getEncoding

---

#### <span style={{color: '#008000'}}>getEncoding</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getMetadata

---

#### <span style={{color: '#008000'}}>getMetadata</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getMinChunkSize

---

#### <span style={{color: '#008000'}}>getMinChunkSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getOverlap

---

#### <span style={{color: '#008000'}}>getOverlap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getSource

---

#### <span style={{color: '#008000'}}>getSource</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUnit

---

#### <span style={{color: '#008000'}}>getUnit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## headingPath

---

#### <span style={{color: '#008000'}}>headingPath</span>(<span style={{color: '#FF8000'}}>headingPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets whether the context header uses the full heading tree, enabled by default, or only the nearest heading. The full tree gives much better retrieval on documents with nested sections, because a chunk under `### Windows` also keeps `# Guide` and `## Install`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **headingPath** | _boolean_ | Use the full tree or only the nearest heading. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## isHeadingPath

---

#### <span style={{color: '#008000'}}>isHeadingPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isPrependHeading

---

#### <span style={{color: '#008000'}}>isPrependHeading</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isSplitOnHeadings

---

#### <span style={{color: '#008000'}}>isSplitOnHeadings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStripDataUri

---

#### <span style={{color: '#008000'}}>isStripDataUri</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStripHtmlComments

---

#### <span style={{color: '#008000'}}>isStripHtmlComments</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## markdown

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a Markdown document into chunks, using the instance configuration.

The document is first segmented into atomic blocks, respecting the markup: headings, paragraphs, code blocks, tables, lists and quotes. A `# comment` inside a code block is never mistaken for a heading, because detection is done with markup state. The blocks are then packed up to the budget, preferring to start at a heading.

Every chunk carries the heading tree in effect, prepended to the `text` field, which substantially improves semantic retrieval on documents with nested sections.

##### How To Use

```javascript
const chunks = chunker.markdown('# Title\n\nDocument content...')

for (const chunk of chunks.listOfValues()) {
    _log.info(chunk.getString('breadcrumb') +' -> '+ chunk.getInt('tokens') +' tokens')
    _log.info(chunk.getString('text'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **markdown** | _string_ | Text in Markdown format to split into chunks. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks, each with the fields: `id` (stable identifier, suitable for idempotent reindexing), `hash` (content digest), `index` and `total` (position and total), `start` and `end` (positions in the normalized text), `length` and `tokens` (size in characters and in tokens), `heading` and `headingLevel` (nearest heading and level), `path` (heading tree as a list), `breadcrumb` (the same tree as text), `sections` (every section the chunk touches), `header` (the rendered context header), `content` (chunk body), `context` (retrieval note, situating sentences plus terms, filled in by `contextualize`), `text` (the string to embed, composed according to `embed`), `embed` (the mode used), `type` (`markdown`, `text` or `pdf`), `blocks` (block types present), `overlap` (characters repeated from the previous chunk), `page` (the page the chunk starts on) and `pages` (every page the chunk spans), both only on paginated PDF, `metadata` (configured metadata) and `synthetic` (true when the body is not a literal slice of the source, because a code fence was reopened or a table header repeated).

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a Markdown document into chunks with explicit size and overlap, in the unit configured with `unit`.

##### How To Use

```javascript
// Chunks of 1500 characters with overlap of 200
const chunks = chunker.markdown(markdown, 1500, 200)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **markdown** | _string_ | Text in Markdown format to split into chunks. |
| **chunkSize** | _int_ | Maximum size of each chunk. |
| **overlap** | _int_ | Overlap between consecutive chunks, clamped to half the chunk size. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a Markdown document into chunks with options, overriding the instance configuration for this call only.

Accepted options: `chunkSize`, `overlap`, `minChunkSize`, `unit` (`chars` or `tokens`), `embed` (`full`, `context` or `content`), `encoding`, `prependHeading`, `headingPath`, `splitOnHeadings`, `stripDataUri`, `stripHtmlComments`, `source` and `metadata`.

##### How To Use

```javascript
const chunks = chunker.markdown(markdown, _val.map()
    .set('unit', 'tokens')
    .set('chunkSize', 320)
    .set('overlap', 48)
    .set('source', 'manual-v1')
    .set('metadata', _val.map().set('language', 'en')))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **markdown** | _string_ | Text in Markdown format to split into chunks. |
| **options** | _[Values](/docs/library/objects/Values)_ | Options overriding the instance configuration. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

## metadata

---

#### <span style={{color: '#008000'}}>metadata</span>(<span style={{color: '#FF8000'}}>metadata</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets metadata applied to every chunk, copied into the `metadata` field and ready to pass straight to `vector.add`.

##### How To Use

```javascript
const chunks = chunker
    .metadata(_val.map().set('source', 'manual').set('version', 3))
    .markdown(document)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **metadata** | _[Values](/docs/library/objects/Values)_ | Metadata applied to every chunk. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## minChunkSize

---

#### <span style={{color: '#008000'}}>minChunkSize</span>(<span style={{color: '#FF8000'}}>minChunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets the minimum size of a chunk. Chunks below this value are absorbed by a neighbour, to avoid orphan micro-chunks that pollute the vector store. Default value: a quarter of the chunk size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **minChunkSize** | _int_ | Minimum size of a chunk. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## overlap

---

#### <span style={{color: '#008000'}}>overlap</span>(<span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets the overlap between consecutive chunks, in the unit chosen with `unit`. The overlap is built from the trailing sentences of the previous chunk, never mid-word, and is clamped to half the chunk size. Default value: 128 characters.

##### How To Use

```javascript
const chunks = chunker.chunkSize(1500).overlap(200).markdown(document)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **overlap** | _int_ | Overlap between consecutive chunks, clamped to half the chunk size. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## pdf

---

#### <span style={{color: '#008000'}}>pdf</span>(<span style={{color: '#FF8000'}}>pdfText</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits text extracted from a PDF into chunks, first applying the cleanup specific to this source: joining words hyphenated at the end of a line, removing headers and footers repeated across pages, and removing lines that are just the page number. When the text carries page separators, each chunk also gets the `page` field.

##### How To Use

```javascript
const text = _pdf.toText(_storage.filesystem('server', 'docs', 'manual.pdf'))
const chunks = chunker.source('manual.pdf').pdf(text)

for (const chunk of chunks.listOfValues()) {
    _log.info('Page '+ chunk.getInt('page') +': '+ chunk.getString('content'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pdfText** | _string_ | Text extracted from a PDF. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

#### <span style={{color: '#008000'}}>pdf</span>(<span style={{color: '#FF8000'}}>pdfText</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pdfText** | _string_ |   |
| **chunkSize** | _int_ |   |
| **overlap** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>pdf</span>(<span style={{color: '#FF8000'}}>pdfText</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits text extracted from a PDF into chunks with options. See the accepted options in `markdown`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pdfText** | _string_ | Text extracted from a PDF. |
| **options** | _[Values](/docs/library/objects/Values)_ | Options overriding the instance configuration. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

## prependHeading

---

#### <span style={{color: '#008000'}}>prependHeading</span>(<span style={{color: '#FF8000'}}>prependHeading</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets whether the context header is prepended to the `text` field of each chunk. Enabled by default. The `content` field always keeps the chunk body without the header.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **prependHeading** | _boolean_ | Whether to prepend the context header. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## source

---

#### <span style={{color: '#008000'}}>source</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets the document source identifier, used to build the `id` of each chunk. With the same source and the same content the `id` values are always the same, which allows reindexing a document without duplicating records in the vector store.

##### How To Use

```javascript
const chunks = chunker.source('manual-v1').markdown(document)
// id -> manual-v1#0-3f2a1c9d
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _string_ | Document source identifier. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## splitOnHeadings

---

#### <span style={{color: '#008000'}}>splitOnHeadings</span>(<span style={{color: '#FF8000'}}>splitOnHeadings</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets whether a new chunk preferably starts at a heading, enabled by default. This is what aligns chunks with the document sections.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitOnHeadings** | _boolean_ | Whether to preferably break at headings. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## stripDataUri

---

#### <span style={{color: '#008000'}}>stripDataUri</span>(<span style={{color: '#FF8000'}}>stripDataUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets whether images embedded as `data:` URIs are reduced to their content type, enabled by default. A single base64 PNG can take hundreds of thousands of characters with no semantic value at all.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **stripDataUri** | _boolean_ | Whether to reduce embedded images. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## stripHtmlComments

---

#### <span style={{color: '#008000'}}>stripHtmlComments</span>(<span style={{color: '#FF8000'}}>stripHtmlComments</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets whether HTML comments are removed from the Markdown, enabled by default. Comments inside code blocks are always preserved.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **stripHtmlComments** | _boolean_ | Whether to remove HTML comments. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

## text

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits running text into chunks, packing whole paragraphs and cutting by sentences only when a paragraph goes over the budget. Numbered titles, in the `3.1 Install` shape, are recognised as headings and feed the context tree.

##### How To Use

```javascript
const chunks = chunker.text(plainText)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Running text to split into chunks. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ |   |
| **chunkSize** | _int_ |   |
| **overlap** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits running text into chunks with options. See the accepted options in `markdown`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Running text to split into chunks. |
| **options** | _[Values](/docs/library/objects/Values)_ | Options overriding the instance configuration. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks. See the field descriptions in `markdown`.

---

## unit

---

#### <span style={{color: '#008000'}}>unit</span>(<span style={{color: '#FF8000'}}>unit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Sets the budget unit: `chars` for characters or `tokens` for real tokens, counted with the same BPE algorithm the models use. Measuring in tokens is what guarantees no chunk goes over the embedding model limit.

When switching to `tokens` without having set `chunkSize` and `overlap` explicitly, the defaults become 256 and 32 tokens.

##### How To Use

```javascript
const chunks = chunker.unit('tokens').chunkSize(320).markdown(document)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **unit** | _string_ | `chars` or `tokens`. |

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

The instance itself, to chain configuration calls.

---

