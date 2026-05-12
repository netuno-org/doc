---
id: ai
title: AI - Artificial Intelligence
sidebar_label: AI - Artificial Intelligence
---

Resource for integration with Artificial Intelligence services, enabling the use of AI clients for text generation and embeddings, as well as vector stores for semantic storage and search.

**Configuration example:**
```json
"ai": {
    "client": {
        "default": {
            "url": "http://127.0.0.1:11434/v1",
            "key": "ollama"
        }
    },
    "vector": {
        "default": {
            "engine": "file",
            "path": "vector_store.json"
        }
        "pg": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "netuno_vector",
            "username": "netuno_user",
            "password": "your_password"
        }
    }
}
```

The `ContextRetrievalChunker` allows splitting text into fragments for indexing and contextual retrieval.

```javascript
// Example using the AI client with the default provider
const client = _ai.client();
const response = client.chat('Hello, how can I help?');
_log.info('Response: ' + response);

```
```javascript
// Example using the vector store
const vector = _ai.vector();

if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

```

---

## client

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>client</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Description

Gets the AI client using the default provider (`default`) defined in configuration.

##### How To Use

```javascript
const client = _ai.client();
const response = client.chat('Hello!');
_log.info('Response: ' + response);
```

##### Return

( _[Client](/docs/library/objects/Client)_ )

AI client instance configured with the default provider.

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>client</span>(<span style={{color: '#FF8000'}}>provider</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Description

Gets the AI client for a specific provider.

##### How To Use

```javascript
// Use a specific provider
const client = _ai.client('anthropic');
const response = client.chat('What is the capital of Portugal?');
_log.info('Response: ' + response);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **provider** | _string_ | Name of the AI provider configured under `ai.client` in the application configuration file. |

##### Return

( _[Client](/docs/library/objects/Client)_ )

AI client instance configured for the specified provider.

---

## contextRetrievalChunker

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>contextRetrievalChunker</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Description

Creates a new `ContextRetrievalChunker` instance, a utility for splitting text into chunks suitable for indexing in vector stores and contextual retrieval in RAG (Retrieval-Augmented Generation) pipelines.

The chunker should be used during the document ingestion phase: the text is split into chunks, each chunk is converted into an embedding with `client.embeddings` and stored in the vector store with `vector.add`. 

##### How To Use

```javascript
// Ingestion phase: split document into chunks and index in the vector store
const chunker = _ai.contextRetrievalChunker();
const client = _ai.client();
const vector = _ai.vector('default');

if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

const document = 'Long document text that will be split into chunks...';
const chunks = chunker.chunk(document);

for (let i = 0; i < chunks.size(); i++) {
    const chunk = chunks.get(i);
    const options = _val.init().set('encoding_format', 'float');
    const embeddingResponse = client.embeddings('embeddinggemma:latest', chunk, options);
    const embedding = embeddingResponse.get('data').get(0).get('embedding');
    const metadata = _val.init().set('source', 'document').set('index', i);
    vector.add('netuno', 'chunk-' + i, embedding, chunk, metadata);
}
_log.info('Indexed ' + chunks.size() + ' chunks.');
```

##### Return

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

New `ContextRetrievalChunker` instance for text chunking in RAG pipelines.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[AI](/docs/library/resources/ai)</span>
##### Return

( _[AI](/docs/library/resources/ai)_ )


---

## vector

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>vector</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.vector.VectorStore</span>
##### Description

Gets the vector store using the default provider (`default`).

##### How To Use

```javascript
const vector = _ai.vector();
const client = _ai.client();

// Create the collection if it does not exist yet (768 is the embedding model dimension)
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

// Generate the question embedding and search for the most relevant documents
const options = _val.init().set('encoding_format', 'float');
const embeddingResponse = client.embeddings('embeddinggemma:latest', 'What is Netuno?', options);
const questionEmbedding = embeddingResponse.get('data').get(0).get('embedding');

const docs = vector.search('netuno', questionEmbedding, 10);
for (const doc of docs) {
    _log.info('Score: ' + doc.get('score') + ' | ' + doc.get('content'));
}
```

##### Return

( _org.netuno.tritao.ai.vector.VectorStore_ )

Vector store instance configured with the default provider.

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>vector</span>(<span style={{color: '#FF8000'}}>provider</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.vector.VectorStore</span>
##### Description

Gets the vector store for a specific provider.

##### How To Use

```javascript
const vector = _ai.vector('default');
const client = _ai.client();

// Create the collection if it does not exist yet (768 is the embedding model dimension)
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

// Register an MCP tool that uses the vector store for RAG
const schema = _val.init()
    .set('type', 'object')
    .set('properties', _val.init()
        .set('input', _val.init().set('type', 'string'))
        .set('topk', _val.init().set('type', 'number'))
    )
    .set('required', ['input']);

_mcp.registerTool(
    'retrieve-documentation',
    'Retrieves the most relevant documentation segments by computing cosine similarity between the query embedding and stored vectors.',
    schema,
    function(params) {
        const options = _val.init().set('encoding_format', 'float');
        const question = params.getString('input');
        const embeddingResponse = client.embeddings('embeddinggemma:latest', question, options);
        const questionEmbedding = embeddingResponse.get('data').get(0).get('embedding');
        const topk = params.getInt('topk', 40);
        const docs = vector.search('netuno', questionEmbedding, topk);
        return _val.init().set('success', true).set('message',
            _val.init().set('retrieved-documents', docs)
        );
    }
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **provider** | _string_ | Name of the vector store provider configured under `ai.vector` in the application configuration file. |

##### Return

( _org.netuno.tritao.ai.vector.VectorStore_ )

Vector store instance for the specified provider. Uses `FileVectorStore` for the `file` engine and `PostgreVectorStore` for the `pg`, `postgres`, or `postgresql` engines.

---

## vectorConfig

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>vectorConfig</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

