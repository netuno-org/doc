---
id: FTPConfig
title: FTPConfig
sidebar_label: FTPConfig
---

Definição da configuração do FTP.

---

## getConnectTimeout

---

#### <span style={{color: '#008000'}}>getConnectTimeout</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Retorna tempo limite de conexão do objeto atual.

##### Retorno

( _int_ )

Tempo limite de conexão do objeto atual.

---

## getHost

---

#### <span style={{color: '#008000'}}>getHost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o host do objeto atual.

##### Retorno

( _string_ )

Host do objeto atual.

---

## getPassword

---

#### <span style={{color: '#008000'}}>getPassword</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna a palavra-passe do objeto atual.

##### Retorno

( _string_ )

Palavra-passe do objeto atual.

---

## getPort

---

#### <span style={{color: '#008000'}}>getPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Retorna a porta do objeto atual.

##### Retorno

( _int_ )

Porta do objeto atual.

---

## getUsername

---

#### <span style={{color: '#008000'}}>getUsername</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o utilizador do objeto atual.

##### Retorno

( _string_ )

Utilizador do objeto atual.

---

## isDebug

---

#### <span style={{color: '#008000'}}>isDebug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se está com debug ativo ou não.

##### Retorno

( _boolean_ )

Se está com debug ativo ou não.

---

## isEnabled

---

#### <span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna o estado do objeto, se está ou não ativado.

##### Retorno

( _boolean_ )

Resultado se o objeto está ativo ou não.

---

## isPassiveMode

---

#### <span style={{color: '#008000'}}>isPassiveMode</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o modo passivo está ativo no objeto atual.

##### Retorno

( _boolean_ )

Se está ativo ou inactivo no objeto atual.

---

## isSSL

---

#### <span style={{color: '#008000'}}>isSSL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o SSL está ativo no objeto atual.

##### Retorno

( _boolean_ )

Se está ativo ou inactivo no objeto atual.

---

## isSecureImplicit

---

#### <span style={{color: '#008000'}}>isSecureImplicit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o FTPS implícito está ativo no objeto atual.

##### Retorno

( _boolean_ )

Se está ativo ou inactivo no objeto atual.

---

## isTLS

---

#### <span style={{color: '#008000'}}>isTLS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o TSL está ativo no objeto atual.

##### Retorno

( _boolean_ )

Se está ativo ou inactivo no objeto atual.

---

## setConnectTimeout

---

#### <span style={{color: '#008000'}}>setConnectTimeout</span>(<span style={{color: '#FF8000'}}>conectionTimeout</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define tempo limite de conexão do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conectionTimeout** | _int_ | Tempo limite de conexão a ser definido. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setDebug

---

#### <span style={{color: '#008000'}}>setDebug</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define se está ou não ativado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto atual.

---

## setEnabled

---

#### <span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define o estado do objeto, se está ou não ativado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto atual.

---

## setHost

---

#### <span style={{color: '#008000'}}>setHost</span>(<span style={{color: '#FF8000'}}>host</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define o host do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **host** | _string_ | Host a ser definido. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setPassiveMode

---

#### <span style={{color: '#008000'}}>setPassiveMode</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define se o modo passivo está ativo ou inactivo no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se está ativo ou inactivo. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setPassword

---

#### <span style={{color: '#008000'}}>setPassword</span>(<span style={{color: '#FF8000'}}>password</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define a palavra-passe do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **password** | _string_ | Palavra-passe a ser definida. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setPort

---

#### <span style={{color: '#008000'}}>setPort</span>(<span style={{color: '#FF8000'}}>porta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define a porta do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **porta** | _int_ | Porta a ser definida. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setSSL

---

#### <span style={{color: '#008000'}}>setSSL</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define se o SSL está ativo ou inactivo no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se está ativo ou inactivo. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setSecureImplicit

---

#### <span style={{color: '#008000'}}>setSecureImplicit</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define se o FTPS implícito está ativo ou inactivo no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se está ativo ou inactivo. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setTLS

---

#### <span style={{color: '#008000'}}>setTLS</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define se o TSL está ativo ou inactivo no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se está ativo ou inactivo. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

## setUsername

---

#### <span style={{color: '#008000'}}>setUsername</span>(<span style={{color: '#FF8000'}}>username</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Define o utilizador do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **username** | _string_ | Utilizador a ser definido. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Retorna o objeto atual.

---

