---
id: FileVectorStore
title: AI FileVectorStore
sidebar_label: AI FileVectorStore
---

Armazenamento vetorial baseado em ficheiro JSON local.

Permite guardar, pesquisar e gerir documentos com os seus embeddings vetoriais em coleções persistidas num único ficheiro JSON. Suporta pesquisa por similaridade coseno, filtragem por metadados e inserção em lote com controlo de concorrência por bloqueio de ficheiro.

Indicado para desenvolvimento, prototipagem ou aplicações com volumes reduzidos de documentos. O ficheiro de armazenamento é criado automaticamente na primeira inicialização, por omissão em `storage/vector_store.json`.

```javascript
const vector = _ai.vector('default')
const client = _ai.client()
const chunker = _ai.contextRetrievalChunker()

// Criar a coleção se ainda não existir
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768)
}

// Recolher todos os ficheiros Markdown recursivamente
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

#### <span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>metadados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Insere ou atualiza um documento numa coleção com um ID explícito. Se a coleção ainda não existir, é criada automaticamente com as dimensões do embedding fornecido. Se já existir um documento com o mesmo ID, o conteúdo, embedding e metadados são substituídos.

##### Como Usar

```javascript
const options = _val.init()
    .set('encoding_format', 'float')
    .set('dimensions', 768)

const embeddingResponse = client.embeddings('embeddinggemma:latest', 'Texto do documento.', options)
const embedding = embeddingResponse.get('data').get(0).get('embedding')

vector.add('netuno', 'doc-001', embedding, 'Texto do documento.', _val.map().set('fonte', 'web'))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção onde o documento será inserido. |
| **id** | _string_ | Identificador único do documento. Se nulo ou vazio, é gerado automaticamente um UUID. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | Lista de valores numéricos que representam o vetor do documento. |
| **texto** | _string_ | Conteúdo textual do documento a guardar. |
| **metadados** | _[Values](/docs/library/objects/Values)_ | Objeto com metadados arbitrários associados ao documento, utilizável para filtragem em pesquisas. Pode ser nulo. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>metadados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Insere ou atualiza um documento numa coleção com um ID gerado automaticamente. Se a coleção ainda não existir, é criada automaticamente com as dimensões do embedding fornecido. Se já existir um documento com o mesmo ID, o conteúdo, embedding e metadados são substituídos.

##### Como Usar

```javascript
const options = _val.init()
    .set('encoding_format', 'float')
    .set('dimensions', 768)

const embeddingResponse = client.embeddings('embeddinggemma:latest', 'Texto do documento.', options)
const embedding = embeddingResponse.get('data').get(0).get('embedding')

vector.add('netuno', embedding, 'Texto do documento.', _val.map().set('fonte', 'web'))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção onde o documento será inserido. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | Lista de valores numéricos que representam o vetor do documento. |
| **texto** | _string_ | Conteúdo textual do documento a guardar. |
| **metadados** | _[Values](/docs/library/objects/Values)_ | Objeto com metadados arbitrários associados ao documento, utilizável para filtragem em pesquisas. Pode ser nulo. |

##### Retorno

( _void_ )


---

## addBatch

---

#### <span style={{color: '#008000'}}>addBatch</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>documentos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Insere ou atualiza múltiplos documentos numa coleção numa única transação atómica. Se algum documento falhar, toda a operação é revertida. Cada item da lista deve ser um objeto com os campos `text` (obrigatório), `embedding` (obrigatório), `id` (opcional, gerado automaticamente se ausente) e `metadata` (opcional).

##### Como Usar

```javascript
const options = _val.init().set('encoding_format', 'float').set('dimensions', 768)

const documentos = _val.list()

const textos = _val.list().add('Primeiro documento.').add('Segundo documento.')
const embeddingResponse = client.embeddings('embeddinggemma:latest', textos, options)

const data = embeddingResponse.get('data')

for (let i = 0; i < data.size(); i++) {
    const item = data.get(i)

    documentos.add(
        _val.map()
            .set('text', textos.get(i))
            .set('embedding', item.get('embedding'))
            .set('metadata', _val.map().set('index', i))
    )
}

vector.addBatch('netuno', documentos)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção onde os documentos serão inseridos. |
| **documentos** | _[Values](/docs/library/objects/Values)_ | Lista de documentos. Cada item deve conter: `text` (texto do documento), `embedding` (vetor numérico), `id` (opcional) e `metadata` (opcional). |

##### Retorno

( _void_ )


---

## collectionExists

---

#### <span style={{color: '#008000'}}>collectionExists</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se uma coleção existe no ficheiro de armazenamento.

##### Como Usar

```javascript
if (!vector.collectionExists('netuno')) {
    vector.createCollection('netuno', 768)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção a verificar. |

##### Retorno

( _boolean_ )

Verdadeiro se a coleção existe, falso caso contrário.

---

## count

---

#### <span style={{color: '#008000'}}>count</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Retorna o número total de documentos numa coleção no ficheiro de armazenamento. Retorna 0 se a coleção não existir.

##### Como Usar

```javascript
const total = vector.count('netuno')
_log.info('Total de documentos indexados: ' + total)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção a contar. |

##### Retorno

( _int_ )

Número total de documentos na coleção. Retorna 0 se a coleção não existir ou estiver vazia.

---

## createCollection

---

#### <span style={{color: '#008000'}}>createCollection</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dimensoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Cria explicitamente uma coleção com um número fixo de dimensões no ficheiro de armazenamento. Se a coleção já existir, a operação é ignorada silenciosamente e retorna `false`. Normalmente não é necessário chamar este método diretamente, pois a coleção é criada automaticamente na primeira chamada a `add` ou `addBatch`.

##### Como Usar

```javascript
if (!vector.collectionExists('netuno')) {
    const criada = vector.createCollection('netuno', 768)
    _log.info('Coleção criada: ' + criada)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção a criar. |
| **dimensoes** | _int_ | Número de dimensões dos vetores desta coleção. Deve ser maior que zero e consistente com o modelo de embeddings utilizado. |

##### Retorno

( _boolean_ )

Verdadeiro se a coleção foi criada, falso se já existia.

---

## delete

---

#### <span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Remove um documento específico de uma coleção pelo seu ID. Se o documento ou a coleção não existirem, a operação é ignorada silenciosamente.

##### Como Usar

```javascript
vector.delete('netuno', 'doc-001')
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção que contém o documento. |
| **id** | _string_ | Identificador único do documento a remover. |

##### Retorno

( _void_ )


---

## deleteCollection

---

#### <span style={{color: '#008000'}}>deleteCollection</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Remove uma coleção inteira e todos os seus documentos do ficheiro de armazenamento. Se a coleção não existir, a operação é ignorada silenciosamente.

##### Como Usar

```javascript
vector.deleteCollection('netuno')
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção a remover. |

##### Retorno

( _void_ )


---

## getProvider

---

#### <span style={{color: '#008000'}}>getProvider</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## init

---

#### <span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## isInitialized

---

#### <span style={{color: '#008000'}}>isInitialized</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## listCollections

---

#### <span style={{color: '#008000'}}>listCollections</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Lista todas as coleções existentes no ficheiro de armazenamento, incluindo o número de dimensões e o total de documentos em cada uma.

##### Como Usar

```javascript
const colecoes = vector.listCollections()

for (const c of colecoes) {
    _log.info(c.get('name') + ' | dims: ' + c.get('dimensions') + ' | docs: ' + c.get('count'))
}
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de coleções, cada uma com os campos: `name` (nome da coleção), `dimensions` (número de dimensões) e `count` (total de documentos).

---

## provider

---

#### <span style={{color: '#008000'}}>provider</span>(<span style={{color: '#FF8000'}}>provider</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.vector.VectorStore</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **provider** | _string_ |   |

##### Retorno

( _org.netuno.tritao.ai.vector.VectorStore_ )


---

## search

---

#### <span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>topK</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Pesquisa os documentos mais similares ao embedding fornecido numa coleção, utilizando distância coseno. Retorna os `topK` documentos mais próximos, ordenados por pontuação de similaridade decrescente.

##### Como Usar

```javascript
const resultados = store.search('artigos', embedding, 5)

for (const r of resultados) {
    _log.info('Score: ' + r.get('score') + ' | ' + r.get('text'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção onde a pesquisa será realizada. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | Vetor de consulta para comparação com os documentos armazenados. |
| **topK** | _int_ | Número máximo de resultados a retornar. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de documentos correspondentes, cada um com os campos: `id`, `text`, `embedding`, `metadata`, `score` (0.0–1.0) e `timestamp`.

---

#### <span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>colecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>topK</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Pesquisa os documentos mais similares ao embedding fornecido numa coleção, com filtragem adicional por metadados. O filtro é aplicado como correspondência exata por igualdade de valor em cada chave. Retorna os `topK` documentos mais próximos que satisfaçam o filtro, ordenados por pontuação de similaridade decrescente.

##### Como Usar

```javascript
const options = _val.init().set('encoding_format', 'float').set('dimensions', 768)
const queryEmbedding = client.embeddings('embeddinggemma:latest', 'O que é o Netuno?', options)
    .get('data').get(0).get('embedding')

const filtro = _val.map().set('fonte', 'pdf')

const resultados = vector.search('netuno', queryEmbedding, 5, filtro)

for (const r of resultados) {
    _log.info('Score: ' + r.get('score') + ' | ' + r.get('text'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colecao** | _string_ | Nome da coleção onde a pesquisa será realizada. |
| **embedding** | _[Values](/docs/library/objects/Values)_ | Vetor de consulta para comparação com os documentos armazenados. |
| **topK** | _int_ | Número máximo de resultados a retornar. |
| **filtro** | _[Values](/docs/library/objects/Values)_ | Objeto de metadados para filtrar os resultados. Apenas documentos cujos metadados contenham todos os pares chave-valor iguais são retornados. Pode ser nulo para desativar a filtragem. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de documentos correspondentes, cada um com os campos: `id`, `text`, `embedding`, `metadata`, `score` (0.0–1.0) e `timestamp`.

---

