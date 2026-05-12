---
id: ai
title: AI - Inteligência Artificial
sidebar_label: AI - Inteligência Artificial
---

Recurso para integração com serviços de Inteligência Artificial, permitindo o uso de clientes de IA para geração de texto e embeddings, bem como o uso de vector stores para armazenamento e pesquisa semântica.

**Exemplo de configuração:**
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

O `ContextRetrievalChunker` permite dividir texto em fragmentos para indexação e recuperação contextual.

```javascript
// Exemplo de uso do cliente de IA com o fornecedor padrão
const client = _ai.client();
const response = client.chat('Hello, how can I help?');
_log.info('Response: ' + response);

```
```javascript
// Exemplo de uso do vector store
const vector = _ai.vector();

if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

```

---

## client

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>client</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Descrição

Obtém o cliente de IA utilizando o fornecedor padrão (`default`) definido na configuração.

##### Como Usar

```javascript
const client = _ai.client();
const resposta = client.chat('Olá!');
_log.info('Resposta: ' + resposta);
```

##### Retorno

( _[Client](/docs/library/objects/Client)_ )

Instância do cliente de IA configurado com o fornecedor padrão.

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>client</span>(<span style={{color: '#FF8000'}}>fornecedor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Descrição

Obtém o cliente de IA para um fornecedor específico.

##### Como Usar

```javascript
// Usar fornecedor específico
const client = _ai.client('anthropic');
const resposta = client.chat('Qual é a capital de Portugal?');
_log.info('Resposta: ' + resposta);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fornecedor** | _string_ | Nome do fornecedor de IA configurado em `ai.client` no ficheiro de configuração da aplicação. |

##### Retorno

( _[Client](/docs/library/objects/Client)_ )

Instância do cliente de IA configurado para o fornecedor especificado.

---

## contextRetrievalChunker

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>contextRetrievalChunker</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Cria uma nova instância de `ContextRetrievalChunker`, um utilitário para dividir texto em fragmentos (chunks) adequados para indexação em vector stores e recuperação contextual em pipelines de RAG (Retrieval-Augmented Generation).

O chunker deve ser usado na fase de ingestão de documentos: o texto é dividido em fragmentos, cada fragmento é convertido em embedding com `client.embeddings` e armazenado no vector store com `vector.add`. 

##### Como Usar

```javascript
// Fase de ingestão: dividir documento em fragmentos e indexar no vector store
const chunker = _ai.contextRetrievalChunker();
const client = _ai.client();
const vector = _ai.vector('default');

if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

const documento = 'Texto longo do documento que será dividido em fragmentos...';
const fragmentos = chunker.chunk(documento);

for (let i = 0; i < fragmentos.size(); i++) {
    const fragmento = fragmentos.get(i);
    const options = _val.init().set('encoding_format', 'float');
    const embeddingResponse = client.embeddings('embeddinggemma:latest', fragmento, options);
    const embedding = embeddingResponse.get('data').get(0).get('embedding');
    const metadata = _val.init().set('source', 'documento').set('index', i);
    vector.add('netuno', 'fragmento-' + i, embedding, fragmento, metadata);
}
_log.info('Indexados ' + fragmentos.size() + ' fragmentos.');
```

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

Nova instância de `ContextRetrievalChunker` para fragmentação de texto em pipelines de RAG.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[AI](/docs/library/resources/ai)</span>
##### Retorno

( _[AI](/docs/library/resources/ai)_ )


---

## vector

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>vector</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.vector.VectorStore</span>
##### Descrição

Obtém o vector store utilizando o fornecedor padrão (`default`).

##### Como Usar

```javascript
const vector = _ai.vector();
const client = _ai.client();

// Criar a coleção se ainda não existir (768 é a dimensão do modelo de embedding)
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

// Gerar o embedding da pergunta e pesquisar os documentos mais relevantes
const options = _val.init().set('encoding_format', 'float');
const embeddingResponse = client.embeddings('embeddinggemma:latest', 'O que é o Netuno?', options);
const questionEmbedding = embeddingResponse.get('data').get(0).get('embedding');

const docs = vector.search('netuno', questionEmbedding, 10);
for (const doc of docs) {
    _log.info('Score: ' + doc.get('score') + ' | ' + doc.get('content'));
}
```

##### Retorno

( _org.netuno.tritao.ai.vector.VectorStore_ )

Instância do vector store configurado com o fornecedor padrão.

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>vector</span>(<span style={{color: '#FF8000'}}>fornecedor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.vector.VectorStore</span>
##### Descrição

Obtém o vector store para um fornecedor específico.

##### Como Usar

```javascript
const vector = _ai.vector('default');
const client = _ai.client();

// Criar a coleção se ainda não existir (768 é a dimensão do modelo de embedding)
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768);
}

// Registar ferramenta MCP que usa o vector store para RAG
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

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fornecedor** | _string_ | Nome do fornecedor de vector store configurado em `ai.vector` no ficheiro de configuração da aplicação. |

##### Retorno

( _org.netuno.tritao.ai.vector.VectorStore_ )

Instância do vector store para o fornecedor especificado. Utiliza `FileVectorStore` para o motor `file` e `PostgreVectorStore` para os motores `pg`, `postgres` ou `postgresql`.

---

## vectorConfig

---

#### <span style={{fontWeight: 'normal'}}>_ai</span>.<span style={{color: '#008000'}}>vectorConfig</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

