---
id: Client
title: AI Client
sidebar_label: AI Client
---

Recurso de cliente de inteligência artificial.

Permite integrar com fornecedores de IA compatíveis com a API OpenAI, suportando chat, streaming, embeddings e ferramentas MCP (Model Context Protocol).

```javascript
const client = _ai.client('openai')
client.model('gpt-4o')

const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const result = client.chat(messages)
_out.json(result)
```

---

## chat

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa especificando explicitamente o modelo a utilizar, sobrepondo o modelo configurado por omissão.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const resposta = client.chat('gpt-4o-mini', messages)
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa especificando explicitamente o modelo a utilizar, com opções adicionais, sobrepondo o modelo configurado por omissão.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

const resposta = client.chat('gpt-4o-mini', messages, options)
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa especificando explicitamente o modelo a utilizar, com opções adicionais e suporte a ferramentas MCP via callback, sobrepondo o modelo configurado por omissão.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

const resposta = client.chat('gpt-4o-mini', messages, options, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa especificando explicitamente o modelo a utilizar, com suporte a ferramentas MCP via callback, sobrepondo o modelo configurado por omissão.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Que horas são?'))

const resposta = client.chat('gpt-4o-mini', messages, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa com o modelo de IA configurado, enviando uma lista de mensagens e retornando a resposta completa.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'system').set('content', 'És um assistente útil.'))
    .add(_val.map().set('role', 'user').set('content', 'Qual é a capital de Portugal?'))

const resposta = client.chat(messages)
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. Cada mensagem deve ter os campos `role` (system, user, assistant) e `content`. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API, incluindo choices, usage e demais metadados.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa com o modelo de IA configurado, com opções adicionais como temperatura e max_tokens.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map()
    .set('temperature', 0.7)
    .set('max_tokens', 200)

const resposta = client.chat(messages, options)
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa com o modelo de IA configurado, com opções adicionais e suporte a ferramentas MCP via callback.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

const resposta = client.chat(messages, options, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma conversa com o modelo de IA configurado com suporte a ferramentas MCP via callback. O callback é invocado antes de cada chamada a uma ferramenta, permitindo interceptar ou sobrepor o resultado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Que horas são?'))

const resposta = client.chat(messages, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null // null = deixa o cliente executar normalmente
})
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta completa da API.

---

## embeddings

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera um embedding vetorial para um texto de entrada utilizando o modelo configurado.

##### Como Usar

```javascript
const resultado = client.embeddings('O céu é azul.')
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _string_ | Texto de entrada para o qual será gerado o embedding. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados e metadados de uso.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera um embedding vetorial para um texto de entrada especificando explicitamente o modelo a utilizar.

##### Como Usar

```javascript
const resultado = client.embeddings('text-embedding-3-small', 'O céu é azul.')
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo de embeddings a utilizar, por exemplo: `text-embedding-3-small`. |
| **input** | _string_ | Texto de entrada para o qual será gerado o embedding. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados e metadados de uso.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera um embedding vetorial para um texto de entrada especificando explicitamente o modelo e opções adicionais.

##### Como Usar

```javascript
const opcoes = _val.map().set('dimensions', 512)

const resultado = client.embeddings('text-embedding-3-small', 'O céu é azul.', opcoes)
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo de embeddings a utilizar, por exemplo: `text-embedding-3-small`. |
| **input** | _string_ | Texto de entrada para o qual será gerado o embedding. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `dimensions` (número de dimensões do vetor), `encoding_format` (`float` ou `base64`), `user` (identificador do utilizador). |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados e metadados de uso.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>entradas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera embeddings vetoriais para múltiplos textos de entrada especificando explicitamente o modelo a utilizar. A lista deve conter apenas valores de texto.

##### Como Usar

```javascript
const textos = _val.list()
    .add('O céu é azul.')
    .add('A relva é verde.')

const resultado = client.embeddings('text-embedding-3-small', textos)
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo de embeddings a utilizar, por exemplo: `text-embedding-3-small`. |
| **entradas** | _[Values](/docs/library/objects/Values)_ | Lista de textos de entrada. Cada elemento deve ser um texto simples. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados para cada texto e metadados de uso.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>entradas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera embeddings vetoriais para múltiplos textos de entrada especificando explicitamente o modelo a utilizar e opções adicionais. A lista deve conter apenas valores de texto.

##### Como Usar

```javascript
const textos = _val.list()
    .add('O céu é azul.')
    .add('A relva é verde.')

const opcoes = _val.map().set('dimensions', 512)

const resultado = client.embeddings('text-embedding-3-small', textos, opcoes)
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo de embeddings a utilizar, por exemplo: `text-embedding-3-small`. |
| **entradas** | _[Values](/docs/library/objects/Values)_ | Lista de textos de entrada. Cada elemento deve ser um texto simples. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `dimensions` (número de dimensões do vetor), `encoding_format` (`float` ou `base64`), `user` (identificador do utilizador). |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados para cada texto e metadados de uso.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>entradas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera embeddings vetoriais para múltiplos textos de entrada utilizando o modelo configurado. A lista deve conter apenas valores de texto.

##### Como Usar

```javascript
const textos = _val.list()
    .add('O céu é azul.')
    .add('A relva é verde.')

const resultado = client.embeddings(textos)
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entradas** | _[Values](/docs/library/objects/Values)_ | Lista de textos de entrada. Cada elemento deve ser um texto simples. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados para cada texto e metadados de uso.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>entradas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera embeddings vetoriais para múltiplos textos de entrada utilizando o modelo configurado, com opções adicionais. A lista deve conter apenas valores de texto.

##### Como Usar

```javascript
const textos = _val.list()
    .add('O céu é azul.')
    .add('A relva é verde.')

const opcoes = _val.map().set('dimensions', 512)

const resultado = client.embeddings(textos, opcoes)
_out.json(resultado.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entradas** | _[Values](/docs/library/objects/Values)_ | Lista de textos de entrada. Cada elemento deve ser um texto simples. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `dimensions` (número de dimensões do vetor), `encoding_format` (`float` ou `base64`), `user` (identificador do utilizador). |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com a resposta da API, incluindo os vetores gerados para cada texto e metadados de uso.

---

## getMaxToolLoops

---

#### <span style={{color: '#008000'}}>getMaxToolLoops</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Obtém o número máximo de ciclos de chamadas a ferramentas configurado.

##### Como Usar

```javascript
const maxCiclos = client.getMaxToolLoops()
_out.print(maxCiclos)
```

##### Retorno

( _int_ )

Número máximo de ciclos de ferramentas.

---

## instance

---

#### <span style={{color: '#008000'}}>instance</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.openai.client.OpenAIClient</span>
##### Descrição

Obtém a instância interna do cliente OpenAI para uso avançado direto com a biblioteca subjacente.

##### Como Usar

```javascript
const openAIClient = client.instance()
```

##### Retorno

( _com.openai.client.OpenAIClient_ )

Instância do cliente OpenAI.

---

## isInitialized

---

#### <span style={{color: '#008000'}}>isInitialized</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o cliente de IA foi inicializado com sucesso para o fornecedor configurado.

##### Como Usar

```javascript
if (!client.isInitialized()) {
    _log.error('Cliente não inicializado.')
}
```

##### Retorno

( _boolean_ )

Verdadeiro se o cliente está inicializado.

---

## maxToolLoops

---

#### <span style={{color: '#008000'}}>maxToolLoops</span>(<span style={{color: '#FF8000'}}>maxCiclos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Define o número máximo de ciclos de chamadas a ferramentas (tool loops) durante uma conversa. Evita ciclos infinitos quando o modelo continua a invocar ferramentas sucessivamente.

##### Como Usar

```javascript
client.maxToolLoops(5)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **maxCiclos** | _int_ | Número máximo de ciclos de ferramentas. Deve ser pelo menos 1. |

##### Retorno

( _boolean_ )

Verdadeiro se o valor foi aplicado com sucesso, falso se o valor for inválido.

---

## mcp

---

#### <span style={{color: '#008000'}}>mcp</span>(<span style={{color: '#FF8000'}}>configuracoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Configura os servidores MCP (Model Context Protocol) a utilizar nas operações de chat e stream. Cada servidor expõe ferramentas que o modelo pode invocar automaticamente durante a conversa. As ferramentas ficam disponíveis com o prefixo `nomeDoServidor__nomeDaFerramenta`.

Tipos de transporte suportados:
- `remote`: liga a um servidor MCP via HTTP Streamable (SSE/HTTP)
- `stdio`: inicia um processo local e comunica via stdin/stdout

##### Como Usar

```javascript
// Servidor MCP remoto via HTTP
const servidores = _val.list()
    .add(
        _val.map()
            .set('type', 'remote')
            .set('name', 'meuServidor')
            .set('url', 'https://mcp.exemplo.com')
            .set('endpoint', '/mcp')
            .set('headers',
                _val.map().set('Authorization', 'Bearer SEU_TOKEN')
            )
    )

client.mcp(servidores)

const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Usa a ferramenta disponível.'))

const resposta = client.chat(messages)
_out.json(resposta.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configuracoes** | _[Values](/docs/library/objects/Values)_ | Lista de configurações de servidores MCP. Cada entrada é um objeto com os seguintes campos: |
|   |   |  |
|   |   | **Campos comuns:** |
|   |   | - `type` _(obrigatório)_: tipo de transporte — `remote` ou `stdio` |
|   |   | - `name` _(opcional)_: nome do servidor, usado como prefixo nas ferramentas. Se omitido, é gerado automaticamente |
|   |   |  |
|   |   | **Para `type: remote`:** |
|   |   | - `url` _(obrigatório)_: URL base do servidor MCP, por exemplo `https://mcp.exemplo.com` |
|   |   | - `endpoint` _(opcional)_: caminho do endpoint MCP. Por omissão: `/mcp` |
|   |   | - `headers` _(opcional)_: objeto com cabeçalhos HTTP adicionais, por exemplo `Authorization` |
|   |   |  |
|   |   | **Para `type: stdio`:** |
|   |   | - `command` _(obrigatório)_: comando a executar |
|   |   | - `args` _(opcional)_: lista de argumentos do comando |
|   |   | - `env` _(opcional)_: objeto com variáveis de ambiente |

##### Retorno

( _void_ )


---

## model

---

#### <span style={{color: '#008000'}}>model</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Define o modelo de IA a utilizar nas operações de chat, stream e embeddings. O modelo é validado contra a lista de modelos disponíveis no fornecedor.

##### Como Usar

```javascript
const ok = client.model('gpt-4o')
if (!ok) {
    _log.error('Modelo inválido ou não disponível.')
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a utilizar, por exemplo: `gpt-4o`. |

##### Retorno

( _boolean_ )

Verdadeiro se o modelo é válido e foi definido, falso caso contrário.

---

## models

---

#### <span style={{color: '#008000'}}>models</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Lista todos os modelos disponíveis no fornecedor de IA configurado.

##### Como Usar

```javascript
const modelos = client.models()
_out.json(modelos.toJSON())
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de modelos disponíveis, cada um como um objeto com os seus metadados.

---

## provider

---

#### <span style={{color: '#008000'}}>provider</span>(<span style={{color: '#FF8000'}}>fornecedor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Muda o fornecedor de IA e reinicializa o cliente com as configurações do novo fornecedor definidas no ficheiro de configuração da aplicação.

##### Como Usar

```javascript
const trocou = client.provider('anthropic')
if (trocou) {
    _log.info('Fornecedor alterado com sucesso.')
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fornecedor** | _string_ | Nome do fornecedor de IA conforme definido nas configurações da aplicação. |

##### Retorno

( _boolean_ )

Verdadeiro se o fornecedor foi trocado com sucesso, falso caso contrário.

---

## stream

---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming especificando explicitamente o modelo a utilizar, sobrepondo o modelo configurado por omissão, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Conte-me uma história curta.'))

client.stream('gpt-4o-mini', messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming especificando explicitamente o modelo a utilizar, com suporte a ferramentas MCP via callback, sobrepondo o modelo configurado por omissão, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Que horas são?'))

client.stream('gpt-4o-mini', messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming especificando explicitamente o modelo a utilizar, com opções adicionais, sobrepondo o modelo configurado por omissão, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

client.stream('gpt-4o-mini', messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>modelo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming especificando explicitamente o modelo a utilizar, com opções adicionais e suporte a ferramentas MCP via callback, sobrepondo o modelo configurado por omissão, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

client.stream('gpt-4o-mini', messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **modelo** | _string_ | Identificador do modelo a usar nesta chamada. |
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming com o modelo de IA configurado, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Conte-me uma história curta.'))

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming com o modelo de IA configurado, com suporte a ferramentas MCP via callback, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Que horas são?'))

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming com o modelo de IA configurado, com opções adicionais, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

client.stream(messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>mensagens</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opcoes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>aoToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>callbackFerramenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Executa uma conversa em streaming com o modelo de IA configurado, com opções adicionais e suporte a ferramentas MCP via callback, processando cada token à medida que é gerado.

##### Como Usar

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Olá!'))

const options = _val.map().set('temperature', 0.7)

client.stream(messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Ferramenta invocada: ' + toolName)
    return null
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _void_ )


---

