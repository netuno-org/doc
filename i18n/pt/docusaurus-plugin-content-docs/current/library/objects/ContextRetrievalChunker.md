---
id: ContextRetrievalChunker
title: AI ContextRetrievalChunker
sidebar_label: AI ContextRetrievalChunker
---

Utilitário de divisão de texto em blocos (chunks) para recuperação de contexto em pipelines RAG (Retrieval-Augmented Generation).

Permite dividir documentos Markdown em blocos de tamanho controlado, com sobreposição configurável, preservando a estrutura de cabeçalhos e blocos de código para melhor qualidade de recuperação semântica.

**Características principais:**
- Preserva a hierarquia de cabeçalhos (H1-H6)
- Protege blocos de código contra quebras
- Tamanho de chunk padrão: 512 caracteres
- Sobreposição padrão: 50 caracteres
- Quebras inteligentes em limites semânticos (cabeçalhos, parágrafos)

```javascript
// Exemplo básico
const chunker = _ai.contextRetrievalChunker()
const chunks = chunker.markdown(documentoMD)

for (const chunk of chunks) {
    _log.info(`Chunk ${chunk.get('index')}: ${chunk.get('heading')}`)
    _log.info(`Texto: ${chunk.get('text')}`)
}

```

---

## markdown

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento Markdown em blocos de texto utilizando os valores predefinidos de tamanho de bloco (512 caracteres) e sobreposição (50 caracteres). Cada bloco preserva o cabeçalho Markdown mais próximo como contexto e respeita os limites de blocos de código.

##### Como Usar

```javascript
const chunks = chunker.markdown('# Título\n\nConteúdo do documento...')

for (const chunk of chunks) {
    _log.info(chunk.get('text'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **markdown** | _string_ | Texto em formato Markdown a dividir em blocos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos, cada um com os campos: `index` (posição na sequência), `start` (posição inicial no texto original), `heading` (cabeçalho Markdown mais próximo) e `text` (conteúdo do bloco, com cabeçalho de contexto prefixado se necessário).

---

#### <span style={{color: '#008000'}}>markdown</span>(<span style={{color: '#FF8000'}}>markdown</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tamanhodoBloco</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>sobreposicao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Divide um documento Markdown em blocos de texto com tamanho de bloco e sobreposição configuráveis. Os cortes são feitos preferencialmente em cabeçalhos Markdown, parágrafos ou espaços, evitando sempre cortar dentro de blocos de código. Quando um bloco não começa por um cabeçalho, o cabeçalho mais próximo é automaticamente prefixado para preservar o contexto semântico.

##### Como Usar

```javascript
// Blocos de 1024 caracteres com sobreposição de 100
const chunks = chunker.markdown(markdown, 1024, 100)

for (const chunk of chunks) {
    _log.info('--- Chunk ' + chunk.get('index'))
    _log.info('Heading: ' + chunk.get('heading'))
    _log.info(chunk.get('text'))
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **markdown** | _string_ | Texto em formato Markdown a dividir em blocos. |
| **tamanhodoBloco** | _int_ | Número máximo de caracteres por bloco. Valor predefinido: 512. |
| **sobreposicao** | _int_ | Número de caracteres de sobreposição entre blocos consecutivos, para preservar continuidade de contexto. Valor predefinido: 50. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de blocos, cada um com os campos: `index` (posição na sequência), `start` (posição inicial no texto original), `heading` (cabeçalho Markdown mais próximo) e `text` (conteúdo do bloco, com cabeçalho de contexto prefixado se necessário).

---

