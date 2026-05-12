---
id: Client
title: AI Client
sidebar_label: AI Client
---

Artificial intelligence client resource.

Allows integration with AI providers compatible with the OpenAI API, supporting chat, streaming, embeddings and MCP (Model Context Protocol) tools.

```javascript
const client = _ai.client('openai')
client.model('gpt-4o')

const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const result = client.chat(messages)
_out.json(result)
```

---

## chat

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation explicitly specifying the model to use, overriding the default configured model.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const response = client.chat('gpt-4o-mini', messages)
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation explicitly specifying the model to use, with additional options, overriding the default configured model.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

const response = client.chat('gpt-4o-mini', messages, options)
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation explicitly specifying the model to use, with additional options and MCP tool support via callback, overriding the default configured model.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

const response = client.chat('gpt-4o-mini', messages, options, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation explicitly specifying the model to use, with MCP tool support via callback, overriding the default configured model.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'What time is it?'))

const response = client.chat('gpt-4o-mini', messages, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation with the configured AI model, sending a list of messages and returning the full response.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'system').set('content', 'You are a helpful assistant.'))
    .add(_val.map().set('role', 'user').set('content', 'What is the capital of Portugal?'))

const response = client.chat(messages)
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. Each message must have the fields `role` (system, user, assistant) and `content`. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response, including choices, usage and other metadata.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation with the configured AI model, with additional options such as temperature and max_tokens.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map()
    .set('temperature', 0.7)
    .set('max_tokens', 200)

const response = client.chat(messages, options)
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation with the configured AI model, with additional options and MCP tool support via callback.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

const response = client.chat(messages, options, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

#### <span style={{color: '#008000'}}>chat</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Runs a conversation with the configured AI model with MCP tool support via callback. The callback is invoked before each tool call, allowing you to intercept or override the result.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'What time is it?'))

const response = client.chat(messages, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null // null = let the client execute normally
})
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the full API response.

---

## embeddings

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates a vector embedding for a text input using the configured model.

##### How To Use

```javascript
const result = client.embeddings('The sky is blue.')
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _string_ | Text input for which the embedding will be generated. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors and usage metadata.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates a vector embedding for a text input by explicitly specifying the model to use.

##### How To Use

```javascript
const result = client.embeddings('text-embedding-3-small', 'The sky is blue.')
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the embeddings model to use, for example: `text-embedding-3-small`. |
| **input** | _string_ | Text input for which the embedding will be generated. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors and usage metadata.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates a vector embedding for a text input by explicitly specifying the model and additional options.

##### How To Use

```javascript
const options = _val.map().set('dimensions', 512)

const result = client.embeddings('text-embedding-3-small', 'The sky is blue.', options)
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the embeddings model to use, for example: `text-embedding-3-small`. |
| **input** | _string_ | Text input for which the embedding will be generated. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `dimensions` (number of vector dimensions), `encoding_format` (`float` or `base64`), `user` (end-user identifier). |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors and usage metadata.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>inputs</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates vector embeddings for multiple text inputs by explicitly specifying the model to use. The list must contain text values only.

##### How To Use

```javascript
const texts = _val.list()
    .add('The sky is blue.')
    .add('The grass is green.')

const result = client.embeddings('text-embedding-3-small', texts)
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the embeddings model to use, for example: `text-embedding-3-small`. |
| **inputs** | _[Values](/docs/library/objects/Values)_ | List of text inputs. Each element must be a plain text string. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors for each text and usage metadata.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>inputs</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates vector embeddings for multiple text inputs by explicitly specifying the model to use and additional options. The list must contain text values only.

##### How To Use

```javascript
const texts = _val.list()
    .add('The sky is blue.')
    .add('The grass is green.')

const options = _val.map().set('dimensions', 512)

const result = client.embeddings('text-embedding-3-small', texts, options)
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the embeddings model to use, for example: `text-embedding-3-small`. |
| **inputs** | _[Values](/docs/library/objects/Values)_ | List of text inputs. Each element must be a plain text string. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `dimensions` (number of vector dimensions), `encoding_format` (`float` or `base64`), `user` (end-user identifier). |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors for each text and usage metadata.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>inputs</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates vector embeddings for multiple text inputs using the configured model. The list must contain text values only.

##### How To Use

```javascript
const texts = _val.list()
    .add('The sky is blue.')
    .add('The grass is green.')

const result = client.embeddings(texts)
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inputs** | _[Values](/docs/library/objects/Values)_ | List of text inputs. Each element must be a plain text string. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors for each text and usage metadata.

---

#### <span style={{color: '#008000'}}>embeddings</span>(<span style={{color: '#FF8000'}}>inputs</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates vector embeddings for multiple text inputs using the configured model, with additional options. The list must contain text values only.

##### How To Use

```javascript
const texts = _val.list()
    .add('The sky is blue.')
    .add('The grass is green.')

const options = _val.map().set('dimensions', 512)

const result = client.embeddings(texts, options)
_out.json(result.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inputs** | _[Values](/docs/library/objects/Values)_ | List of text inputs. Each element must be a plain text string. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `dimensions` (number of vector dimensions), `encoding_format` (`float` or `base64`), `user` (end-user identifier). |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the API response, including the generated vectors for each text and usage metadata.

---

## getMaxToolLoops

---

#### <span style={{color: '#008000'}}>getMaxToolLoops</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Gets the configured maximum number of tool call loops.

##### How To Use

```javascript
const maxLoops = client.getMaxToolLoops()
_out.print(maxLoops)
```

##### Return

( _int_ )

Maximum number of tool loops.

---

## instance

---

#### <span style={{color: '#008000'}}>instance</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.openai.client.OpenAIClient</span>
##### Description

Gets the internal OpenAI client instance for advanced direct use with the underlying library.

##### How To Use

```javascript
const openAIClient = client.instance()
```

##### Return

( _com.openai.client.OpenAIClient_ )

OpenAI client instance.

---

## isInitialized

---

#### <span style={{color: '#008000'}}>isInitialized</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the AI client was successfully initialized for the configured provider.

##### How To Use

```javascript
if (!client.isInitialized()) {
    _log.error('Client not initialized.')
}
```

##### Return

( _boolean_ )

True if the client is initialized.

---

## maxToolLoops

---

#### <span style={{color: '#008000'}}>maxToolLoops</span>(<span style={{color: '#FF8000'}}>maxLoops</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Sets the maximum number of tool call cycles (tool loops) during a conversation. Prevents infinite loops when the model keeps invoking tools successively.

##### How To Use

```javascript
client.maxToolLoops(5)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **maxLoops** | _int_ | Maximum number of tool loops. Must be at least 1. |

##### Return

( _boolean_ )

True if the value was applied successfully, false if the value is invalid.

---

## mcp

---

#### <span style={{color: '#008000'}}>mcp</span>(<span style={{color: '#FF8000'}}>configs</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Configures the MCP (Model Context Protocol) servers to use in chat and stream operations. Each server exposes tools that the model can invoke automatically during the conversation. Tools are available with the prefix `serverName__toolName`.

Supported transport types:
- `remote`: connects to an MCP server via HTTP Streamable (SSE/HTTP)
- `stdio`: starts a local process and communicates via stdin/stdout

##### How To Use

```javascript
// Remote MCP server via HTTP
const servers = _val.list()
    .add(
        _val.map()
            .set('type', 'remote')
            .set('name', 'myServer')
            .set('url', 'https://mcp.example.com')
            .set('endpoint', '/mcp')
            .set('headers',
                _val.map().set('Authorization', 'Bearer YOUR_TOKEN')
            )
    )

client.mcp(servers)

const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Use the available tool.'))

const response = client.chat(messages)
_out.json(response.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configs** | _[Values](/docs/library/objects/Values)_ | List of MCP server configurations. Each entry is an object with the following fields: |
|   |   |  |
|   |   | **Common fields:** |
|   |   | - `type` _(required)_: transport type — `remote` or `stdio` |
|   |   | - `name` _(optional)_: server name, used as a prefix for tools. If omitted, it is auto-generated |
|   |   |  |
|   |   | **For `type: remote`:** |
|   |   | - `url` _(required)_: base URL of the MCP server, e.g. `https://mcp.example.com` |
|   |   | - `endpoint` _(optional)_: MCP endpoint path. Default: `/mcp` |
|   |   | - `headers` _(optional)_: object with additional HTTP headers, e.g. `Authorization` |
|   |   |  |
|   |   | **For `type: stdio`:** |
|   |   | - `command` _(required)_: command to execute |
|   |   | - `args` _(optional)_: list of command arguments |
|   |   | - `env` _(optional)_: object with environment variables |

##### Return

( _void_ )


---

## model

---

#### <span style={{color: '#008000'}}>model</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Sets the AI model to use in chat, stream and embeddings operations. The model is validated against the list of available models on the provider.

##### How To Use

```javascript
const ok = client.model('gpt-4o')
if (!ok) {
    _log.error('Invalid or unavailable model.')
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use, for example: `gpt-4o`. |

##### Return

( _boolean_ )

True if the model is valid and was set, false otherwise.

---

## models

---

#### <span style={{color: '#008000'}}>models</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Lists all models available on the configured AI provider.

##### How To Use

```javascript
const models = client.models()
_out.json(modelos.toJSON())
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of available models, each as an object with its metadata.

---

## provider

---

#### <span style={{color: '#008000'}}>provider</span>(<span style={{color: '#FF8000'}}>provider</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Switches the AI provider and reinitializes the client with the new provider settings defined in the application configuration file.

##### How To Use

```javascript
const switched = client.provider('anthropic')
if (switched) {
    _log.info('Provider switched successfully.')
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **provider** | _string_ | Name of the AI provider as defined in the application settings. |

##### Return

( _boolean_ )

True if the provider was switched successfully, false otherwise.

---

## stream

---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation explicitly specifying the model to use, overriding the default configured model, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Tell me a short story.'))

client.stream('gpt-4o-mini', messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation explicitly specifying the model to use, with MCP tool support via callback, overriding the default configured model, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'What time is it?'))

client.stream('gpt-4o-mini', messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation explicitly specifying the model to use, with additional options, overriding the default configured model, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

client.stream('gpt-4o-mini', messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>model</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation explicitly specifying the model to use, with additional options and MCP tool support via callback, overriding the default configured model, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

client.stream('gpt-4o-mini', messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **model** | _string_ | Identifier of the model to use in this call. |
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation with the configured AI model, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Tell me a short story.'))

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation with the configured AI model, with MCP tool support via callback, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'What time is it?'))

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation with the configured AI model, with additional options, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

client.stream(messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>stream</span>(<span style={{color: '#FF8000'}}>messages</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>onToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>toolCallback</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.ai.client.Client$ToolCallback</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Runs a streaming conversation with the configured AI model, with additional options and MCP tool support via callback, processing each token as it is generated.

##### How To Use

```javascript
const messages = _val.list()
    .add(_val.map().set('role', 'user').set('content', 'Hello!'))

const options = _val.map().set('temperature', 0.7)

client.stream(messages, options, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
}, (toolName, args, mcpClient, tool) => {
    _log.info('Tool invoked: ' + toolName)
    return null
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options: `temperature` (0.0–2.0), `max_tokens`, `top_p`. |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _void_ )


---

