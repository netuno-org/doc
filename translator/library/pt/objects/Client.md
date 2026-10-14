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

## cancel

---

#### <span style={{color: '#008000'}}>cancel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Cancela o streaming em curso deste cliente. Pode ser invocado dentro do próprio callback que recebe os tokens ou a partir de outro processo que tenha acesso a esta instância. O streaming é interrompido de imediato, a ligação é fechada e não são executadas mais chamadas a ferramentas.

##### Como Usar

```javascript
// Interrompe o streaming a partir do próprio callback
let total = 0

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))

    total++
    if (total > 100) {
        client.cancel()
    }
})
```

##### Retorno

( _boolean_ )

Verdadeiro se o cancelamento foi registado agora, falso se o streaming já tinha sido cancelado.

---

## cancelStream

---

#### <span style={{color: '#008000'}}>cancelStream</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Cancela o streaming registado com a chave indicada, mesmo que esteja a decorrer noutro pedido. A chave é definida com o método `streamKey` antes de iniciar o streaming.

##### Como Usar

```javascript
// Serviço que para o streaming iniciado noutro pedido
const cancelado = _ai.client().cancelStream('conversa-'+ _user.code())
_out.json(_val.map().set('cancelled', cancelado))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave do streaming definida previamente com `streamKey`. |

##### Retorno

( _boolean_ )

Verdadeiro se existia um streaming ativo com essa chave e o cancelamento foi registado agora.

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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |

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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |

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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
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
|   |   |  |
|   |   | O `content` é normalmente texto, mas nas mensagens de `user` pode ser uma lista de partes, que é como se enviam imagens, ficheiros e áudio: |
|   |   | - `type: 'text'` com o campo `text` |
|   |   | - `type: 'image_url'` com o campo `image_url`, que leva o `url` e opcionalmente o `detail` (`low`, `high` ou `auto`). O `url` aceita um endereço público ou uma data URL com o conteúdo em base64 |
|   |   | - `type: 'file'` com o campo `file`, que leva o `file_data` numa data URL, por exemplo um PDF, ou em alternativa o `file_id` de um ficheiro já carregado no fornecedor, e opcionalmente o `filename` |
|   |   | - `type: 'input_audio'` com o campo `input_audio`, que leva o `data` em base64 simples, sem prefixo, e o `format`, `wav` ou `mp3` |

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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |

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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
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

## getStreamKey

---

#### <span style={{color: '#008000'}}>getStreamKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a chave que identifica o streaming deste cliente.

##### Como Usar

```javascript
_out.print(client.getStreamKey())
```

##### Retorno

( _string_ )

Chave do streaming ou nulo se não estiver definida.

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

## invokeTool

---

#### <span style={{color: '#008000'}}>invokeTool</span>(<span style={{color: '#FF8000'}}>toolName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>arguments</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **toolName** | _string_ |   |
| **arguments** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## isCancelled

---

#### <span style={{color: '#008000'}}>isCancelled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o streaming em curso deste cliente foi cancelado. O estado é reposto sempre que um novo streaming é iniciado.

##### Como Usar

```javascript
if (client.isCancelled()) {
    _log.info('Streaming cancelado.')
}
```

##### Retorno

( _boolean_ )

Verdadeiro se o streaming foi cancelado.

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

## isStreaming

---

#### <span style={{color: '#008000'}}>isStreaming</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se existe um streaming ativo registado com a chave indicada.

##### Como Usar

```javascript
if (client.isStreaming('conversa-'+ _user.code())) {
    _log.info('Já existe um streaming a decorrer.')
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave do streaming definida previamente com `streamKey`. |

##### Retorno

( _boolean_ )

Verdadeiro se existe um streaming ativo com essa chave.

---

## isUsageTracking

---

#### <span style={{color: '#008000'}}>isUsageTracking</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se a contagem de tokens em streaming está ativa.

##### Como Usar

```javascript
if (client.isUsageTracking()) {
    _log.info('Os tokens do streaming vão ser contabilizados.')
}
```

##### Retorno

( _boolean_ )

Verdadeiro se a contagem de tokens em streaming está ativa.

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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **mensagens** | _[Values](/docs/library/objects/Values)_ | Lista de mensagens da conversa. O `content` pode ser texto ou, nas mensagens de `user`, uma lista de partes com `type` `text`, `image_url`, `file` ou `input_audio`. |
| **opcoes** | _[Values](/docs/library/objects/Values)_ | Opções adicionais, com os mesmos nomes da API: |
|   |   | - Geração: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (texto ou lista de textos) |
|   |   | - Limites: `max_tokens`, `max_completion_tokens` |
|   |   | - Raciocínio e formato: `reasoning_effort` (`none` a `max`), `verbosity` (`low`, `medium`, `high`), `response_format` para a resposta em JSON (`text`, `json_object` ou `json_schema`) |
|   |   | - Ferramentas: `parallel_tool_calls`, ignorado se não houver ferramentas configuradas |
|   |   | - Diagnóstico: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identificação e infraestrutura: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
| **aoToken** | _java.util.function.Consumer_ | Callback invocado para cada token recebido, recebendo o fragmento da resposta como argumento. |
| **callbackFerramenta** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invocado antes de cada execução de ferramenta. Retorne null para execução normal ou um Values para sobrepor o resultado. |

##### Retorno

( _void_ )


---

## streamKey

---

#### <span style={{color: '#008000'}}>streamKey</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Descrição

Define a chave que identifica o streaming deste cliente, permitindo cancelá-lo a partir de outro pedido ou processo através do método `cancelStream`. A chave é registada quando o streaming arranca e removida quando termina. Se já existir um streaming ativo com a mesma chave, esse streaming anterior é cancelado.

##### Como Usar

```javascript
client.streamKey('conversa-'+ _user.code())

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave única que identifica o streaming. Use nulo ou vazio para não registar o streaming. |

##### Retorno

( _[Client](/docs/library/objects/Client)_ )

A própria instância do cliente, permitindo encadear chamadas.

---

## usage

---

#### <span style={{color: '#008000'}}>usage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Obtém os tokens consumidos na última execução de `chat`, `stream` ou `embeddings`, somando todos os pedidos feitos ao fornecedor, incluindo os ciclos de chamadas a ferramentas.

Os contadores são normalizados e têm sempre o mesmo significado, independentemente do fornecedor:
- `input`: tokens de entrada, incluindo sempre os que vieram da cache
- `output`: tokens gerados
- `cached`: tokens de entrada lidos da cache
- `cache_write`: tokens de entrada escritos na cache
- `reasoning`: tokens de raciocínio, já incluídos no `output`
- `audio_input`: tokens de áudio enviados, já incluídos no `input`
- `audio_output`: tokens de áudio gerados, já incluídos no `output`
- `total`: total de tokens
- `requests`: número de pedidos feitos ao fornecedor
- `raw`: contadores originais tal como o fornecedor os devolveu no último pedido

Em streaming os contadores só ficam disponíveis no fim, porque o fornecedor envia-os no último fragmento.

##### Como Usar

```javascript
const resposta = client.chat(messages)

const tokens = client.usage()
_log.info('Entrada: '+ tokens.getLong('input')
    +' | Saída: '+ tokens.getLong('output')
    +' | Cache: '+ tokens.getLong('cached'))
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com os contadores de tokens normalizados da última execução.

---

#### <span style={{color: '#008000'}}>usage</span>(<span style={{color: '#FF8000'}}>resposta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Normaliza os contadores de tokens de uma resposta devolvida por qualquer fornecedor, aceitando a resposta completa do `chat`, um fragmento do `stream`, a resposta dos `embeddings` ou apenas o objeto de contadores.

Reconhece as várias formas usadas pelas APIs, por exemplo `prompt_tokens` e `completion_tokens` (OpenAI), `input_tokens` e `output_tokens` (Anthropic), `promptTokenCount` e `candidatesTokenCount` (Google) ou `prompt_eval_count` e `eval_count` (Ollama), assim como as várias formas de indicar a cache: `prompt_tokens_details.cached_tokens`, `cache_read_input_tokens`, `cachedContentTokenCount` ou `prompt_cache_hit_tokens`.

##### Como Usar

```javascript
const resposta = client.chat(messages)
const tokens = client.usage(resposta)

_out.json(tokens.toJSON())
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **resposta** | _[Values](/docs/library/objects/Values)_ | Resposta, fragmento de streaming ou objeto de contadores a normalizar. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com os contadores de tokens normalizados, todos a zero se a resposta não os incluir.

---

## usageTracking

---

#### <span style={{color: '#008000'}}>usageTracking</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Descrição

Ativa ou desativa a contagem de tokens em streaming, que por omissão está ativa.

Quando está ativa é enviado o parâmetro `stream_options.include_usage` para que o fornecedor devolva os contadores no último fragmento. Desative apenas se o fornecedor não suportar esse parâmetro.

##### Como Usar

```javascript
client.usageTracking(false)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Verdadeiro para pedir os contadores de tokens em streaming. |

##### Retorno

( _[Client](/docs/library/objects/Client)_ )

A própria instância do cliente, permitindo encadear chamadas.

---

