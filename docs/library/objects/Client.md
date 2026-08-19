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

## cancel

---

#### <span style={{color: '#008000'}}>cancel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Cancels the ongoing streaming of this client. It can be invoked inside the callback that receives the tokens or from another process that has access to this instance. The streaming is interrupted immediately, the connection is closed and no more tool calls are executed.

##### How To Use

```javascript
// Interrupts the streaming from the callback itself
let total = 0

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))

    total++
    if (total > 100) {
        client.cancel()
    }
})
```

##### Return

( _boolean_ )

True if the cancellation was registered now, false if the streaming was already cancelled.

---

## cancelStream

---

#### <span style={{color: '#008000'}}>cancelStream</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Cancels the streaming registered with the given key, even if it is running in another request. The key is defined with the `streamKey` method before starting the streaming.

##### How To Use

```javascript
// Service that stops the streaming started in another request
const cancelled = _ai.client().cancelStream('conversation-'+ _user.code())
_out.json(_val.map().set('cancelled', cancelled))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Streaming key previously defined with `streamKey`. |

##### Return

( _boolean_ )

True if there was an active streaming with that key and the cancellation was registered now.

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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |

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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |

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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
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
|   |   |  |
|   |   | The `content` is usually text, but on the `user` messages it can be a list of parts, which is how images, files and audio are sent: |
|   |   | - `type: 'text'` with the `text` field |
|   |   | - `type: 'image_url'` with the `image_url` field, which takes the `url` and optionally the `detail` (`low`, `high` or `auto`). The `url` accepts a public address or a data URL with the content in base64 |
|   |   | - `type: 'file'` with the `file` field, which takes the `file_data` in a data URL, a PDF for example, or instead the `file_id` of a file already uploaded to the provider, and optionally the `filename` |
|   |   | - `type: 'input_audio'` with the `input_audio` field, which takes the `data` in plain base64, without a prefix, and the `format`, `wav` or `mp3` |

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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |

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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
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

## getStreamKey

---

#### <span style={{color: '#008000'}}>getStreamKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the key that identifies this client streaming.

##### How To Use

```javascript
_out.print(client.getStreamKey())
```

##### Return

( _string_ )

Streaming key or null if it is not defined.

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

## invokeTool

---

#### <span style={{color: '#008000'}}>invokeTool</span>(<span style={{color: '#FF8000'}}>toolName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>arguments</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **toolName** | _string_ |   |
| **arguments** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isCancelled

---

#### <span style={{color: '#008000'}}>isCancelled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the ongoing streaming of this client was cancelled. The state is reset whenever a new streaming is started.

##### How To Use

```javascript
if (client.isCancelled()) {
    _log.info('Streaming cancelled.')
}
```

##### Return

( _boolean_ )

True if the streaming was cancelled.

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

## isStreaming

---

#### <span style={{color: '#008000'}}>isStreaming</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether there is an active streaming registered with the given key.

##### How To Use

```javascript
if (client.isStreaming('conversation-'+ _user.code())) {
    _log.info('There is already a streaming running.')
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Streaming key previously defined with `streamKey`. |

##### Return

( _boolean_ )

True if there is an active streaming with that key.

---

## isUsageTracking

---

#### <span style={{color: '#008000'}}>isUsageTracking</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the token counting on streaming is enabled.

##### How To Use

```javascript
if (client.isUsageTracking()) {
    _log.info('The streaming tokens will be counted.')
}
```

##### Return

( _boolean_ )

True if the token counting on streaming is enabled.

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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
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
| **messages** | _[Values](/docs/library/objects/Values)_ | List of conversation messages. The `content` can be text or, on the `user` messages, a list of parts with `type` `text`, `image_url`, `file` or `input_audio`. |
| **options** | _[Values](/docs/library/objects/Values)_ | Additional options, with the same names as the API: |
|   |   | - Generation: `temperature` (0.0–2.0), `top_p`, `frequency_penalty` (-2.0–2.0), `presence_penalty` (-2.0–2.0), `seed`, `n`, `stop` (text or list of texts) |
|   |   | - Limits: `max_tokens`, `max_completion_tokens` |
|   |   | - Reasoning and format: `reasoning_effort` (`none` to `max`), `verbosity` (`low`, `medium`, `high`), `response_format` for the answer in JSON (`text`, `json_object` or `json_schema`) |
|   |   | - Tools: `parallel_tool_calls`, ignored when there are no tools configured |
|   |   | - Diagnostics: `logprobs`, `top_logprobs` (0–20) |
|   |   | - Identification and infrastructure: `user`, `safety_identifier`, `prompt_cache_key`, `store`, `service_tier` |
| **onToken** | _java.util.function.Consumer_ | Callback invoked for each token received, receiving the response chunk as argument. |
| **toolCallback** | _org.netuno.tritao.ai.client.Client$ToolCallback_ | Callback invoked before each tool execution. Return null for normal execution or a Values to override the result. |

##### Return

( _void_ )


---

## streamKey

---

#### <span style={{color: '#008000'}}>streamKey</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Description

Sets the key that identifies this client streaming, allowing it to be cancelled from another request or process through the `cancelStream` method. The key is registered when the streaming starts and removed when it ends. If a streaming is already active with the same key, that previous streaming is cancelled.

##### How To Use

```javascript
client.streamKey('conversation-'+ _user.code())

client.stream(messages, (chunk) => {
    _out.print(chunk.get('choices').get(0).get('delta').get('content'))
})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Unique key that identifies the streaming. Use null or empty to not register the streaming. |

##### Return

( _[Client](/docs/library/objects/Client)_ )

The client instance itself, allowing chained calls.

---

## usage

---

#### <span style={{color: '#008000'}}>usage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets the tokens consumed in the last `chat`, `stream` or `embeddings` execution, summing every request made to the provider, including the tool call loops.

The counters are normalized and always have the same meaning, whatever the provider is:
- `input`: input tokens, always including the ones that came from the cache
- `output`: generated tokens
- `cached`: input tokens read from the cache
- `cache_write`: input tokens written to the cache
- `reasoning`: reasoning tokens, already included in `output`
- `audio_input`: audio tokens sent, already included in `input`
- `audio_output`: audio tokens generated, already included in `output`
- `total`: total tokens
- `requests`: number of requests made to the provider
- `raw`: original counters exactly as the provider returned them on the last request

On streaming the counters are only available at the end, because the provider sends them in the last chunk.

##### How To Use

```javascript
const response = client.chat(messages)

const tokens = client.usage()
_log.info('Input: '+ tokens.getLong('input')
    +' | Output: '+ tokens.getLong('output')
    +' | Cache: '+ tokens.getLong('cached'))
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the normalized token counters of the last execution.

---

#### <span style={{color: '#008000'}}>usage</span>(<span style={{color: '#FF8000'}}>response</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Normalizes the token counters of a response returned by any provider, accepting the full `chat` response, a `stream` chunk, the `embeddings` response or just the counters object.

It recognizes the several forms used by the APIs, for example `prompt_tokens` and `completion_tokens` (OpenAI), `input_tokens` and `output_tokens` (Anthropic), `promptTokenCount` and `candidatesTokenCount` (Google) or `prompt_eval_count` and `eval_count` (Ollama), as well as the several forms of reporting the cache: `prompt_tokens_details.cached_tokens`, `cache_read_input_tokens`, `cachedContentTokenCount` or `prompt_cache_hit_tokens`.

##### How To Use

```javascript
const response = client.chat(messages)
const tokens = client.usage(response)

_out.json(tokens.toJSON())
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **response** | _[Values](/docs/library/objects/Values)_ | Response, streaming chunk or counters object to normalize. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the normalized token counters, all zero if the response does not include them.

---

## usageTracking

---

#### <span style={{color: '#008000'}}>usageTracking</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Client](/docs/library/objects/Client)</span>
##### Description

Enables or disables the token counting on streaming, which is enabled by default.

When enabled the `stream_options.include_usage` parameter is sent so that the provider returns the counters in the last chunk. Only disable it if the provider does not support that parameter.

##### How To Use

```javascript
client.usageTracking(false)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | True to request the token counters on streaming. |

##### Return

( _[Client](/docs/library/objects/Client)_ )

The client instance itself, allowing chained calls.

---

