---
id: SSHConfig
title: SSHConfig
sidebar_label: SSHConfig
---

Definição da configuração do SSH.

---

## getConnectTimeout

---

#### <span style="color: #008000">getConnectTimeout</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Retorna o tempo limite de conexão do objeto atual.

##### Retorno

( _int_ )

Tempo limite de conexão do objeto atual.

---

## getHost

---

#### <span style="color: #008000">getHost</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o host do objeto atual.

##### Retorno

( _string_ )

Host do objeto atual.

---

## getPassword

---

#### <span style="color: #008000">getPassword</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna a palavra-passe do objeto atual.

##### Retorno

( _string_ )

Palavra-passe do objeto atual.

---

## getPort

---

#### <span style="color: #008000">getPort</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Retorna a porta do objeto atual.

##### Retorno

( _int_ )

Porta do objeto atual.

---

## getPublicKey

---

#### <span style="color: #008000">getPublicKey</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna a chave pública do objeto atual.

##### Retorno

( _string_ )

Chave pública do objeto atual.

---

## getUsername

---

#### <span style="color: #008000">getUsername</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o utilizador do objeto atual.

##### Retorno

( _string_ )

Utilizador do objeto atual.

---

## isCompression

---

#### <span style="color: #008000">isCompression</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se a compactação está ativa no objeto atual.

##### Retorno

( _boolean_ )

Se está ou não ativa no objeto atual.

---

## isDebug

---

#### <span style="color: #008000">isDebug</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o objeto atual está em modo debug.

##### Retorno

( _boolean_ )

Se o objeto atual está em modo debug ou não.

---

## isEnabled

---

#### <span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o objeto atual está ativo.

##### Retorno

( _boolean_ )

Se o objeto atual está ativo ou não.

---

## setCompression

---

#### <span style="color: #008000">setCompression</span>(<span style="color: #FF8000">compactacao</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Define se a compactação está ativa no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **compactacao** | _boolean_ | Se está ou não ativa no objeto atual. |

##### Retorno

( _void_ )


---

## setConnectTimeout

---

#### <span style="color: #008000">setConnectTimeout</span>(<span style="color: #FF8000">tempoLimite</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define o tempo limite de conexão do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tempoLimite** | _int_ | Tempo limite de conexão a ser definido no objeto atual. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

## setDebug

---

#### <span style="color: #008000">setDebug</span>(<span style="color: #FF8000">debug</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define se o objeto atual está em modo debug.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **debug** | _boolean_ | Se o objeto atual está em modo debud ou não. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

## setEnabled

---

#### <span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define se o objeto atual está ativo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se o objeto atual está ativo ou não. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

## setHost

---

#### <span style="color: #008000">setHost</span>(<span style="color: #FF8000">host</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define o host do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **host** | _string_ | Host a ser definido no objeto atual. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

## setPassword

---

#### <span style="color: #008000">setPassword</span>(<span style="color: #FF8000">palavraPasse</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define a palavra-passe do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **palavraPasse** | _string_ | Palavra-passe a ser definida no objeto atual. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

## setPort

---

#### <span style="color: #008000">setPort</span>(<span style="color: #FF8000">porta</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define a porta do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **porta** | _int_ | Porta a ser definida no objeto atual. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

## setPublicKey

---

#### <span style="color: #008000">setPublicKey</span>(<span style="color: #FF8000">chavePublica</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Define a chave pública do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chavePublica** | _string_ | Chave pública a ser definida no objeto atual. |

##### Retorno

( _void_ )


---

## setUsername

---

#### <span style="color: #008000">setUsername</span>(<span style="color: #FF8000">utilizador</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHConfig](../../objects/SSHConfig)</span>
##### Descrição

Define o utilizador do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | Utilizador a ser definido no objeto atual. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto SSHConfig atual.

---

