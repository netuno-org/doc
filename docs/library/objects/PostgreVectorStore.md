---
id: PostgreVectorStore
title: AI PostgreVectorStore
sidebar_label: AI PostgreVectorStore
---

Vector storage based on PostgreSQL with the pgvector extension.

Allows storing, searching and managing documents with their vector embeddings in provider-isolated collections. Supports cosine similarity search, metadata filtering and batch insertion with atomic transaction.

The `pgvector` extension is verified and installed automatically if not present. Support tables are created automatically on first initialization.

```javascript
const vector = _ai.vector('default')
const client = _ai.client()
const chunker = _ai.contextRetrievalChunker()

// Create the collection if it does not yet exist
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768)
}

// Recursively collect all Markdown files
const files = collectFiles(_app.folder(_app.pathStorage() + '/netuno_docs'))

for (const path of files) {
    const file = _app.file(path)
    if (file.exists()) {
        const content = file.input().readAllAndClose()
        const chunks = chunker.markdown(content, 1500 * 3, 400)
        for (const chunk of chunks) {
            const options = _val.init()
                .set('encoding_format', 'float')
                .set('dimensions', 768)
            const embeddingResponse = client.embeddings(
                'embeddinggemma:latest',
                chunk.get('text'),
                options
            )
            const embedding = embeddingResponse.get('data').get(0).get('embedding')
            vector.add('netuno', embedding, chunk.get('text'), null)
        }
    }
}

function collectFiles(folder) {
    const list = _val.list()
    folder.list().forEach(item => {
        if (item.isDirectory()) {
            collectFiles(item).forEach(f => list.add(f))
        } else {
            const path = item.fullPath()
            if (path.endsWith('.md') || path.endsWith('.mdx')) {
                list.add(path)
            }
        }
    })
    return list
}
```

---

## add

---

#### <span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>metadata</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Inserts or updates a document in a collection with an explicit ID. If the collection does not yet exist, it is created automatically with the dimensions of the provided embedding. If a document with the same ID already exists, the content, embedding and metadata are updated.

##### How To Use

```javascript
const options = _val.init()
    .set('encoding_format', 'float')
    .set('dimensions', 768)

const embeddingResponse = client.embeddings('embeddinggemma:latest', 'Document text.', options)
const embedding = embeddingResponse.get('data').get(0).get('embedding')

vector.add('netuno', 'doc-001', embedding, 'Document text.', _val.map().set('source', 'web'))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection where the document will be inserted. |
| **id** | _string_ | Unique identifier of the document. If null or empty, a UUID is auto-generated. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | List of numeric values representing the document vector. |
| **text** | _string_ | Textual content of the document to store. |
| **metadata** | _[Values](/docs/library/objects/Values)_ | Object with arbitrary metadata associated with the document, usable for filtering in searches. Can be null. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>metadata</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Inserts or updates a document in a collection with an auto-generated ID. If the collection does not yet exist, it is created automatically with the dimensions of the provided embedding. If a document with the same ID already exists, the content, embedding and metadata are updated.

##### How To Use

```javascript
const options = _val.init()
    .set('encoding_format', 'float')
    .set('dimensions', 768)

const embeddingResponse = client.embeddings('embeddinggemma:latest', 'Document text.', options)
const embedding = embeddingResponse.get('data').get(0).get('embedding')

vector.add('netuno', embedding, 'Document text.', _val.map().set('source', 'web'))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection where the document will be inserted. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | List of numeric values representing the document vector. |
| **text** | _string_ | Textual content of the document to store. |
| **metadata** | _[Values](/docs/library/objects/Values)_ | Object with arbitrary metadata associated with the document, usable for filtering in searches. Can be null. |

##### Return

( _void_ )


---

## addBatch

---

#### <span style={{color: '#008000'}}>addBatch</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>documents</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Inserts or updates multiple documents in a collection in a single atomic transaction. If any document fails, the entire operation is rolled back. Each item in the list must be an object with the fields `text` (required), `embedding` (required), `id` (optional, auto-generated if absent) and `metadata` (optional).

##### How To Use

```javascript
const options = _val.init().set('encoding_format', 'float').set('dimensions', 768)

const documents = _val.list()

const texts = _val.list().add('First document.').add('Second document.')
const embeddingResponse = client.embeddings('embeddinggemma:latest', texts, options)

const data = embeddingResponse.get('data')
for (let i = 0; i < data.size(); i++) {
    const item = data.get(i)
    documents.add(
        _val.map()
            .set('text', texts.get(i))
            .set('embedding', item.get('embedding'))
            .set('metadata', _val.map().set('index', i))
    )
}

vector.addBatch('netuno', documents)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection where the documents will be inserted. |
| **documents** | _[Values](/docs/library/objects/Values)_ | List of documents. Each item must contain: `text` (document text), `embedding` (numeric vector), `id` (optional) and `metadata` (optional). |

##### Return

( _void_ )


---

## collectionExists

---

#### <span style={{color: '#008000'}}>collectionExists</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether a collection exists for the configured provider.

##### How To Use

```javascript
if (!store.collectionExists('articles')) {
    store.createCollection('articles', 1536)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection to check. |

##### Return

( _boolean_ )

True if the collection exists, false otherwise.

---

## count

---

#### <span style={{color: '#008000'}}>count</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the total number of documents in a collection for the configured provider.

##### How To Use

```javascript
const total = store.count('articles')
_log.info('Total documents: ' + total)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection to count. |

##### Return

( _int_ )

Total number of documents in the collection. Returns 0 if the collection does not exist or is empty.

---

## createCollection

---

#### <span style={{color: '#008000'}}>createCollection</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dimensions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Explicitly creates a collection with a fixed number of dimensions. If the collection already exists, the operation is silently ignored and returns `false`. Normally there is no need to call this method directly, as the collection is created automatically on the first call to `add` or `addBatch`.

##### How To Use

```javascript
const created = store.createCollection('articles', 1536)
if (created) {
    _log.info('Collection created successfully.')
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection to create. |
| **dimensions** | _int_ | Number of dimensions of the vectors in this collection. Must be greater than zero and consistent with the embeddings model used. |

##### Return

( _boolean_ )

True if the collection was created, false if it already existed.

---

## delete

---

#### <span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Removes a specific document from a collection by its ID. If the ID does not exist, the operation is silently ignored.

##### How To Use

```javascript
store.delete('articles', 'doc-001')
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection containing the document. |
| **id** | _string_ | Unique identifier of the document to remove. |

##### Return

( _void_ )


---

## deleteCollection

---

#### <span style={{color: '#008000'}}>deleteCollection</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Removes an entire collection and all its documents. The operation is cascading: deleting the collection automatically deletes all associated documents.

##### How To Use

```javascript
store.deleteCollection('articles')
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection to remove. |

##### Return

( _void_ )


---

## getProvider

---

#### <span style={{color: '#008000'}}>getProvider</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## init

---

#### <span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## isInitialized

---

#### <span style={{color: '#008000'}}>isInitialized</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## listCollections

---

#### <span style={{color: '#008000'}}>listCollections</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Lists all existing collections for the configured provider, including the number of dimensions and the total number of documents in each one.

##### How To Use

```javascript
const collections = store.listCollections()

for (const c of collections) {
    _log.info(c.get('name') + ' | dims: ' + c.get('dimensions') + ' | docs: ' + c.get('count'))
}
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of collections, each with the fields: `name` (collection name), `dimensions` (number of dimensions) and `count` (total number of documents).

---

## provider

---

#### <span style={{color: '#008000'}}>provider</span>(<span style={{color: '#FF8000'}}>provider</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.vector.VectorStore</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **provider** | _string_ |   |

##### Return

( _org.netuno.tritao.ai.vector.VectorStore_ )


---

## search

---

#### <span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>topK</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Searches for the most similar documents to the provided embedding in a collection, using cosine distance. Returns the `topK` closest documents, ordered by descending similarity score.

##### How To Use

```javascript
const results = store.search('articles', embedding, 5)

for (const r of results) {
    _log.info('Score: ' + r.get('score') + ' | ' + r.get('text'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection where the search will be performed. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | Query vector to compare against stored documents. |
| **topK** | _int_ | Maximum number of results to return. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of matching documents, each with the fields: `id`, `text`, `embedding`, `metadata`, `score` (0.0–1.0) and `timestamp`.

---

#### <span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>collection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>topK</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Searches for the most similar documents to the provided embedding in a collection, with additional metadata filtering. The filter is applied as exact JSON subset matching (PostgreSQL `@>` operator). Returns the `topK` closest documents that satisfy the filter, ordered by descending similarity score.

##### How To Use

```javascript
const filter = _val.map().set('source', 'pdf')

const results = store.search('articles', embedding, 5, filter)

for (const r of results) {
    _log.info('Score: ' + r.get('score') + ' | ' + r.get('text'))
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **collection** | _string_ | Name of the collection where the search will be performed. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | Query vector to compare against stored documents. |
| **topK** | _int_ | Maximum number of results to return. |
| **filter** | _[Values](/docs/library/objects/Values)_ | Metadata object to filter results. Only documents whose metadata contains all key-value pairs of the filter are returned. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of matching documents, each with the fields: `id`, `text`, `embedding`, `metadata`, `score` (0.0–1.0) and `timestamp`.

---

