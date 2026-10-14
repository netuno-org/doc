---
id: ContextRetrievalChunker
title: AI ContextRetrievalChunker
sidebar_label: AI ContextRetrievalChunker
---

Utilitário de divisão de texto em blocos (chunks) para recuperação de contexto em pipelines RAG (Retrieval-Augmented Generation).

Divide documentos Markdown, texto simples ou texto extraído de PDF em blocos de tamanho controlado, com sobreposição configurável, preservando a estrutura do documento para melhor qualidade de recuperação semântica.

**Características principais:**
- Segmentação estrutural: cabeçalhos, parágrafos, blocos de código, tabelas, listas e citações são reconhecidos e nunca partidos ao acaso
- Contexto hierárquico: cada bloco recebe a árvore completa de cabeçalhos (`# Guia > ## Instalação > ### Windows`)
- Orçamento em caracteres ou em tokens reais (BPE `cl100k_base` / `o200k_base`)
- Blocos de código maiores que o limite são partidos por linhas com a marcação reaberta em cada parte
- Tabelas maiores que o limite repetem o cabeçalho em cada parte
- Sobreposição semântica por frases, nunca a meio de uma palavra
- Sem perda de texto: todos os blocos do documento pertencem exatamente a um chunk
- Determinístico: a mesma entrada produz sempre os mesmos chunks e os mesmos `id`, o que permite reingestão idempotente

```javascript
// Exemplo básico
const chunker = _ai.contextRetrievalChunker()
const chunks = chunker.markdown(documentoMD)

for (const chunk of chunks.listOfValues()) {
    _log.info(`Chunk ${chunk.getInt('index')}: ${chunk.getString('breadcrumb')}`)
    _log.info(`Texto: ${chunk.getString('text')}`)
}

// Orçamento em tokens reais e ingestão no vector store
const client = _ai.client()
const vector = _ai.vector('default')

const blocos = _ai.contextRetrievalChunker()
    .unit('tokens')
    .chunkSize(320)
    .overlap(48)
    .source('manual-v1')
    .markdown(documentoMD)

for (const bloco of blocos.listOfValues()) {
    const resposta = client.embeddings('embeddinggemma:latest', bloco.getString('text'))
    const embedding = resposta.getValues('data').getValues(0).getValues('embedding')
    vector.add('netuno', bloco.getString('id'), embedding, bloco.getString('text'), bloco.getValues('metadata'))
}

```

---

## chunk

---

#### <span style={{color: '#008000'}}>chunk</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento em blocos, detetando automaticamente se o conteúdo é Markdown ou texto corrido. É o ponto de entrada a usar quando a origem do conteúdo não é conhecida à partida.

##### Como Usar

```javascript
const chunks = chunker.chunk(conteudo)

for (const chunk of chunks.listOfValues()) {
    _log.info(chunk.getString('text'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Texto a dividir em blocos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

#### <span style={{color: '#008000'}}>chunk</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **chunkSize** | _int_ |   |
| **overlap** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>chunk</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento em blocos com opções, detetando automaticamente se o conteúdo é Markdown ou texto corrido.

##### Como Usar

```javascript
const chunks = chunker.chunk(conteudo, _val.map()
    .set('unit', 'tokens')
    .set('chunkSize', 320)
    .set('overlap', 48))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Texto a dividir em blocos. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções que sobrepõem a configuração da instância. Ver a lista completa em `markdown`. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

## chunkSize

---

#### <span style={{color: '#008000'}}>chunkSize</span>(<span style={{color: '#FF8000'}}>tamanhoDoBloco</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define o tamanho máximo de cada bloco, na unidade escolhida em `unit`. Valor predefinido: 1024 caracteres, ou 256 quando a unidade é `tokens` e o tamanho não foi definido explicitamente.

##### Como Usar

```javascript
const chunks = chunker.chunkSize(1500).markdown(documento)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tamanhoDoBloco** | _int_ | Tamanho máximo de cada bloco, limitado a [32, 200000]. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## contextualize

---

#### <span style={{color: '#008000'}}>contextualize</span>(<span style={{color: '#FF8000'}}>cliente</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>, <span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>blocos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Preenche o campo `context` de cada bloco com uma nota de recuperação, gerada pelo modelo a partir do documento completo, e reconstrói o campo `text` com essa nota incluída. É a técnica de *contextual retrieval*: um bloco que diz apenas "o valor subiu 3%" passa a dizer também de que empresa e de que trimestre se trata, o que reduz muito as falhas de recuperação.

A nota tem duas partes, porque uma pesquisa chega em duas formas. Duas ou três frases situam o bloco nomeando o produto, a tarefa e as condições que o bloco dá como garantidas, para responder a quem descreve o problema por palavras suas. A seguir, uma linha de termos reúne o vocabulário exato: nomes, identificadores, chaves de configuração, comandos, códigos de erro, siglas com o respetivo significado, sinónimos e, em documentos que não estejam em inglês, o termo inglês ao lado do original. É isto que encontra quem cola uma mensagem de erro ou o nome de um parâmetro.

É uma operação paga: faz uma chamada ao modelo por bloco. Correr apenas na fase de ingestão, nunca por pedido.

As chamadas são sequenciais de propósito, porque o `Client` mantém estado de sessão e de contabilização de tokens que não é seguro partilhar entre chamadas em paralelo. Um erro num bloco não interrompe os restantes: fica registado no log, o `context` desse bloco fica vazio e o processamento continua.

Opções aceites: `model`, `temperature` (0 por omissão, para o resultado ser reproduzível), `documentMaxChars` (trunca documentos muito grandes), `template` (marcadores `{document}`, `{chunk}`, `{breadcrumb}` e `{heading}`), `system` (mensagem de sistema), `skipIfPresent` (não repete blocos que já tenham contexto) e `failFast`.

##### Como Usar

```javascript
const client = _ai.client()
const chunks = chunker.markdown(documento)

chunker.contextualize(client, documento, chunks)

for (const chunk of chunks.listOfValues()) {
    _log.info(chunk.getString('context'))
    // text já inclui o contexto, é o que se deve embeber
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cliente** | _[Client](/docs/library/objects/Client)_ | Cliente de IA usado para gerar o contexto. |
| **documento** | _string_ | Documento completo, o mesmo que originou os blocos. |
| **blocos** | _[Values](/docs/library/objects/Values)_ | Lista de blocos devolvida por `markdown`, `text`, `pdf` ou `chunk`. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

A mesma lista de blocos, com `context` e `text` atualizados.

---

#### <span style={{color: '#008000'}}>contextualize</span>(<span style={{color: '#FF8000'}}>cliente</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>, <span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>blocos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Preenche o campo `context` de cada bloco com opções. Ver a descrição completa e a lista de opções em `contextualize`.

##### Como Usar

```javascript
chunker.contextualize(client, documento, chunks, _val.map()
    .set('model', 'gpt-4o-mini')
    .set('documentMaxChars', 40000))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cliente** | _[Client](/docs/library/objects/Client)_ | Cliente de IA usado para gerar o contexto. |
| **documento** | _string_ | Documento completo, o mesmo que originou os blocos. |
| **blocos** | _[Values](/docs/library/objects/Values)_ | Lista de blocos devolvida por `markdown`, `text`, `pdf` ou `chunk`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções da geração de contexto. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

A mesma lista de blocos, com `context` e `text` atualizados.

---

## countTokens

---

#### <span style={{color: '#008000'}}>countTokens</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Conta os tokens de um texto com a codificação configurada em `encoding`, usando o mesmo algoritmo BPE dos modelos. Útil para orçamentar prompts e para verificar que um bloco cabe no limite do modelo de embeddings.

##### Como Usar

```javascript
_log.info('Tokens: '+ chunker.countTokens(texto))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto a medir. |

##### Retorno

( _int_ )

Número de tokens do texto.

---

#### <span style={{color: '#008000'}}>countTokens</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>codificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Conta os tokens de um texto com uma codificação específica, ou com a codificação deduzida do nome de um modelo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto a medir. |
| **codificacao** | _string_ | Nome da codificação, como `cl100k_base` ou `o200k_base`, ou nome de um modelo. |

##### Retorno

( _int_ )

Número de tokens do texto.

---

## embed

---

#### <span style={{color: '#008000'}}>embed</span>(<span style={{color: '#FF8000'}}>embeber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define o que entra no campo `text`, que é sempre a cadeia destinada a ser embebida. O campo `content` mantém sempre o bloco real e é o que uma pesquisa deve devolver.

- `full`, predefinido: cabeçalho de contexto, contexto gerado e corpo do bloco
- `context`: apenas cabeçalho e contexto gerado, deixando o corpo de fora
- `content`: apenas o corpo, sem cabeçalho nem contexto

O modo `context` indexa a nota gerada em vez do bloco. A nota é prosa densa, enquanto o corpo traz blocos de código, canos de tabelas e marcação que diluem o vetor. Em troca, um termo exato que exista no corpo e não na nota deixa de ser pesquisável, por isso este modo só faz sentido depois de correr `contextualize`. Enquanto o contexto estiver vazio, o corpo é usado na mesma, para não se indexar um cabeçalho sozinho.

##### Como Usar

```javascript
// Indexar o contexto, devolver o texto real
const chunks = chunker.embed('context').markdown(documento)
chunker.contextualize(client, documento, chunks)

for (const chunk of chunks.listOfValues()) {
    const resposta = client.embeddings(modelo, chunk.getString('text'))
    const embedding = resposta.getValues('data').getValues(0).getValues('embedding')
    vector.add('docs', chunk.getString('id'), embedding, chunk.getString('content'), metadados)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **embeber** | _string_ | `full`, `context` ou `content`. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## encoding

---

#### <span style={{color: '#008000'}}>encoding</span>(<span style={{color: '#FF8000'}}>codificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define a codificação usada na contagem de tokens: `cl100k_base` (predefinida), `o200k_base`, `p50k_base`, `r50k_base`, ou o nome de um modelo OpenAI, de onde a codificação é deduzida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codificacao** | _string_ | Nome da codificação ou do modelo. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## getChunkSize

---

#### <span style={{color: '#008000'}}>getChunkSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## getEmbed

---

#### <span style={{color: '#008000'}}>getEmbed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getEncoding

---

#### <span style={{color: '#008000'}}>getEncoding</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getMetadata

---

#### <span style={{color: '#008000'}}>getMetadata</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getMinChunkSize

---

#### <span style={{color: '#008000'}}>getMinChunkSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## getOverlap

---

#### <span style={{color: '#008000'}}>getOverlap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## getSource

---

#### <span style={{color: '#008000'}}>getSource</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUnit

---

#### <span style={{color: '#008000'}}>getUnit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## headingPath

---

#### <span style={{color: '#008000'}}>headingPath</span>(<span style={{color: '#FF8000'}}>arvoreDeCabecalhos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define se o cabeçalho de contexto usa a árvore completa de cabeçalhos, ativo por omissão, ou apenas o cabeçalho mais próximo. A árvore completa dá muito melhor recuperação em documentos com secções aninhadas, porque um bloco sob `### Windows` mantém também `# Guia` e `## Instalação`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arvoreDeCabecalhos** | _boolean_ | Usar a árvore completa ou apenas o cabeçalho mais próximo. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## isHeadingPath

---

#### <span style={{color: '#008000'}}>isHeadingPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isPrependHeading

---

#### <span style={{color: '#008000'}}>isPrependHeading</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isSplitOnHeadings

---

#### <span style={{color: '#008000'}}>isSplitOnHeadings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isStripDataUri

---

#### <span style={{color: '#008000'}}>isStripDataUri</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isStripHtmlComments

---

#### <span style={{color: '#008000'}}>isStripHtmlComments</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## markdown

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento Markdown em blocos, usando a configuração da instância.

O documento é primeiro segmentado em blocos atómicos, respeitando a marcação: cabeçalhos, parágrafos, blocos de código, tabelas, listas e citações. Um `# comentário` dentro de um bloco de código nunca é confundido com um cabeçalho, porque a deteção é feita com estado de marcação. Os blocos são depois agrupados até ao orçamento, preferindo começar num cabeçalho.

Cada bloco recebe a árvore de cabeçalhos em vigor, prefixada ao campo `text`, o que melhora substancialmente a recuperação semântica em documentos com secções aninhadas.

##### Como Usar

```javascript
const chunks = chunker.markdown('# Título\n\nConteúdo do documento...')

for (const chunk of chunks.listOfValues()) {
    _log.info(chunk.getString('breadcrumb') +' -> '+ chunk.getInt('tokens') +' tokens')
    _log.info(chunk.getString('text'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **markdown** | _string_ | Texto em formato Markdown a dividir em blocos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos, cada um com os campos: `id` (identificador estável, próprio para reindexação idempotente), `hash` (resumo do conteúdo), `index` e `total` (posição e total), `start` e `end` (posições no texto normalizado), `length` e `tokens` (tamanho em caracteres e em tokens), `heading` e `headingLevel` (cabeçalho mais próximo e nível), `path` (lista da árvore de cabeçalhos), `breadcrumb` (a mesma árvore em texto), `sections` (todas as secções que o bloco toca), `header` (cabeçalho de contexto já renderizado), `content` (corpo do bloco), `context` (nota de recuperação, frases de situação mais termos, preenchida por `contextualize`), `text` (a cadeia a embeber, composta segundo `embed`), `embed` (modo usado), `type` (`markdown`, `text` ou `pdf`), `blocks` (tipos de bloco presentes), `overlap` (caracteres repetidos do bloco anterior), `page` (página em que o bloco começa) e `pages` (todas as páginas que o bloco atravessa), ambos apenas em PDF paginado, `metadata` (metadados configurados) e `synthetic` (verdadeiro quando o corpo não é uma fatia literal da origem, por reabertura de marcação de código ou repetição de cabeçalho de tabela).

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tamanhoDoBloco</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>sobreposicao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento Markdown em blocos com tamanho e sobreposição explícitos, na unidade configurada em `unit`.

##### Como Usar

```javascript
// Blocos de 1500 caracteres com sobreposição de 200
const chunks = chunker.markdown(markdown, 1500, 200)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **markdown** | _string_ | Texto em formato Markdown a dividir em blocos. |
| **tamanhoDoBloco** | _int_ | Tamanho máximo de cada bloco. |
| **sobreposicao** | _int_ | Sobreposição entre blocos consecutivos, limitada a metade do tamanho do bloco. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento Markdown em blocos com opções, que sobrepõem a configuração da instância apenas nesta chamada.

Opções aceites: `chunkSize`, `overlap`, `minChunkSize`, `unit` (`chars` ou `tokens`), `embed` (`full`, `context` ou `content`), `encoding`, `prependHeading`, `headingPath`, `splitOnHeadings`, `stripDataUri`, `stripHtmlComments`, `source` e `metadata`.

##### Como Usar

```javascript
const chunks = chunker.markdown(markdown, _val.map()
    .set('unit', 'tokens')
    .set('chunkSize', 320)
    .set('overlap', 48)
    .set('source', 'manual-v1')
    .set('metadata', _val.map().set('idioma', 'pt')))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **markdown** | _string_ | Texto em formato Markdown a dividir em blocos. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções que sobrepõem a configuração da instância. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

## metadata

---

#### <span style={{color: '#008000'}}>metadata</span>(<span style={{color: '#FF8000'}}>metadados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define metadados aplicados a todos os blocos, copiados para o campo `metadata` e prontos a passar diretamente a `vector.add`.

##### Como Usar

```javascript
const chunks = chunker
    .metadata(_val.map().set('origem', 'manual').set('versao', 3))
    .markdown(documento)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metadados** | _[Values](/docs/library/objects/Values)_ | Metadados aplicados a todos os blocos. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## minChunkSize

---

#### <span style={{color: '#008000'}}>minChunkSize</span>(<span style={{color: '#FF8000'}}>tamanhoMinimo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define o tamanho mínimo de um bloco. Blocos abaixo deste valor são absorvidos por um vizinho, para evitar micro-blocos órfãos que poluem o vector store. Valor predefinido: um quarto do tamanho do bloco.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tamanhoMinimo** | _int_ | Tamanho mínimo de um bloco. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## overlap

---

#### <span style={{color: '#008000'}}>overlap</span>(<span style={{color: '#FF8000'}}>sobreposicao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define a sobreposição entre blocos consecutivos, na unidade escolhida em `unit`. A sobreposição é construída a partir das últimas frases do bloco anterior, nunca a meio de uma palavra, e é limitada a metade do tamanho do bloco. Valor predefinido: 128 caracteres.

##### Como Usar

```javascript
const chunks = chunker.chunkSize(1500).overlap(200).markdown(documento)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sobreposicao** | _int_ | Sobreposição entre blocos consecutivos, limitada a metade do tamanho do bloco. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## pdf

---

#### <span style={{color: '#008000'}}>pdf</span>(<span style={{color: '#FF8000'}}>textoDoPdf</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide texto extraído de um PDF em blocos, aplicando antes a limpeza específica desta origem: junção de palavras cortadas por hífen no fim da linha, remoção de cabeçalhos e rodapés repetidos entre páginas, e remoção de linhas que são apenas o número da página. Quando o texto traz separadores de página, cada bloco recebe também o campo `page`.

##### Como Usar

```javascript
const texto = _pdf.toText(_storage.filesystem('server', 'docs', 'manual.pdf'))
const chunks = chunker.source('manual.pdf').pdf(texto)

for (const chunk of chunks.listOfValues()) {
    _log.info('Página '+ chunk.getInt('page') +': '+ chunk.getString('content'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **textoDoPdf** | _string_ | Texto extraído de um PDF. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

#### <span style={{color: '#008000'}}>pdf</span>(<span style={{color: '#FF8000'}}>pdfText</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pdfText** | _string_ |   |
| **chunkSize** | _int_ |   |
| **overlap** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>pdf</span>(<span style={{color: '#FF8000'}}>textoDoPdf</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide texto extraído de um PDF em blocos com opções. Ver a lista de opções aceites em `markdown`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **textoDoPdf** | _string_ | Texto extraído de um PDF. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções que sobrepõem a configuração da instância. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

## prependHeading

---

#### <span style={{color: '#008000'}}>prependHeading</span>(<span style={{color: '#FF8000'}}>prefixarCabecalho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define se o cabeçalho de contexto é prefixado ao campo `text` de cada bloco. Ativo por omissão. O campo `content` mantém sempre o corpo do bloco sem o cabeçalho.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **prefixarCabecalho** | _boolean_ | Prefixar ou não o cabeçalho de contexto. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## source

---

#### <span style={{color: '#008000'}}>source</span>(<span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define o identificador da origem do documento, usado para construir o `id` de cada bloco. Com a mesma origem e o mesmo conteúdo os `id` são sempre iguais, o que permite reindexar um documento sem duplicar registos no vector store.

##### Como Usar

```javascript
const chunks = chunker.source('manual-v1').markdown(documento)
// id -> manual-v1#0-3f2a1c9d
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **origem** | _string_ | Identificador da origem do documento. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## splitOnHeadings

---

#### <span style={{color: '#008000'}}>splitOnHeadings</span>(<span style={{color: '#FF8000'}}>cortarNosCabecalhos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define se um novo bloco começa preferencialmente num cabeçalho, ativo por omissão. É isto que alinha os blocos com as secções do documento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cortarNosCabecalhos** | _boolean_ | Cortar ou não preferencialmente nos cabeçalhos. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## stripDataUri

---

#### <span style={{color: '#008000'}}>stripDataUri</span>(<span style={{color: '#FF8000'}}>removerDataUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define se as imagens embebidas em `data:` são reduzidas ao tipo de conteúdo, ativo por omissão. Um único PNG em base64 pode ocupar centenas de milhares de caracteres sem qualquer valor semântico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **removerDataUri** | _boolean_ | Reduzir ou não as imagens embebidas. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## stripHtmlComments

---

#### <span style={{color: '#008000'}}>stripHtmlComments</span>(<span style={{color: '#FF8000'}}>removerComentarios</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define se os comentários HTML são removidos do Markdown, ativo por omissão. Comentários dentro de blocos de código são sempre preservados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **removerComentarios** | _boolean_ | Remover ou não os comentários HTML. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

## text

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide texto corrido em blocos, agrupando parágrafos inteiros e cortando por frases apenas quando um parágrafo ultrapassa o orçamento. Títulos numerados, no formato `3.1 Instalação`, são reconhecidos como cabeçalhos e alimentam a árvore de contexto.

##### Como Usar

```javascript
const chunks = chunker.text(textoSimples)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto corrido a dividir em blocos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>chunkSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>overlap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **chunkSize** | _int_ |   |
| **overlap** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide texto corrido em blocos com opções. Ver a lista de opções aceites em `markdown`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto corrido a dividir em blocos. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções que sobrepõem a configuração da instância. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos. Ver a descrição dos campos em `markdown`.

---

## unit

---

#### <span style={{color: '#008000'}}>unit</span>(<span style={{color: '#FF8000'}}>unidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)</span>
##### Descrição

Define a unidade de medida do orçamento: `chars` para caracteres ou `tokens` para tokens reais, contados com o mesmo algoritmo BPE dos modelos. Medir em tokens é o que garante que nenhum bloco ultrapassa o limite do modelo de embeddings.

Quando se passa para `tokens` sem ter definido `chunkSize` e `overlap` explicitamente, os valores predefinidos passam a 256 e 32 tokens.

##### Como Usar

```javascript
const chunks = chunker.unit('tokens').chunkSize(320).markdown(documento)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **unidade** | _string_ | `chars` ou `tokens`. |

##### Retorno

( _[ContextRetrievalChunker](/docs/library/objects/ContextRetrievalChunker)_ )

A própria instância, para encadear configurações.

---

