---
id: ContextRetrievalChunker
title: AI ContextRetrievalChunker
sidebar_label: AI ContextRetrievalChunker
---

Text chunking utility for context retrieval in RAG (Retrieval-Augmented Generation) pipelines.

Splits Markdown documents into controlled-size chunks with configurable overlap, preserving heading structure and code blocks for better semantic retrieval quality.

**Key features:**
- Preserves heading hierarchy (H1-H6)
- Protects code blocks from being broken
- Default chunk size: 512 characters
- Default overlap: 50 characters
- Smart breaks at semantic boundaries (headings, paragraphs)

```javascript
// Basic example
const chunker = _ai.contextRetrievalChunker()
const chunks = chunker.markdown(markdownDocument)

for (const chunk of chunks) {
    _log.info(`Chunk ${chunk.get('index')}: ${chunk.get('heading')}`)
    _log.info(`Text: ${chunk.get('text')}`)
}

```

---

## markdown

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a Markdown document into text chunks using the default chunk size (512 characters) and overlap (50 characters). Each chunk preserves the nearest Markdown heading as context and respects code block boundaries.

##### How To Use

```javascript
const chunks = chunker.markdown('# Title\n\nDocument content...')

for (const chunk of chunks) {
    _log.info(chunk.get('text'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **markdown** | _string_ | Text in Markdown format to split into chunks. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks, each with the fields: `index` (position in the sequence), `start` (starting position in the original text), `heading` (nearest Markdown heading) and `text` (chunk content, with context heading prepended if needed).

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Splits a Markdown document into text chunks with configurable chunk size and overlap. Cuts are made preferably at Markdown headings, paragraphs or spaces, always avoiding splitting inside code blocks. When a chunk does not start with a heading, the nearest heading is automatically prepended to preserve semantic context.

##### How To Use

```javascript
// Chunks of 1024 characters with overlap of 100
const chunks = chunker.markdown(markdown, 1024, 100)

for (const chunk of chunks) {
    _log.info('--- Chunk ' + chunk.get('index'))
    _log.info('Heading: ' + chunk.get('heading'))
    _log.info(chunk.get('text'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **markdown** | _string_ | Text in Markdown format to split into chunks. |
| **chunkSize** | _int_ | Maximum number of characters per chunk. Default value: 512. |
| **overlap** | _int_ | Number of overlapping characters between consecutive chunks, to preserve context continuity. Default value: 50. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of chunks, each with the fields: `index` (position in the sequence), `start` (starting position in the original text), `heading` (nearest Markdown heading) and `text` (chunk content, with context heading prepended if needed).

---

