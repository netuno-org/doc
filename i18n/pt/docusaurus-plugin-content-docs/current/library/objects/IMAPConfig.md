---
id: IMAPConfig
title: IMAPConfig
sidebar_label: IMAPConfig
---

Definição da configuração do IMAP.

---

## getAuthMechanisms

---

#### <span style={{color: '#008000'}}>getAuthMechanisms</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna quais mecanismos de autenticação estão sendo usados na configuração atual.

##### Retorno

( _string_ )

Mecanismos de autenticação usados na configuração atual.

---

## getAuthNTLMDomain

---

#### <span style={{color: '#008000'}}>getAuthNTLMDomain</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o domínio do NTLM usado na configuração atual.

##### Retorno

( _string_ )

Domínio do NTLM.

---

## getHost

---

#### <span style={{color: '#008000'}}>getHost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o host da configuração atual.

##### Retorno

( _string_ )

Host da configuração atual.

---

## getPassword

---

#### <span style={{color: '#008000'}}>getPassword</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna a palavra-passe da configuração atual.

##### Retorno

( _string_ )

Palavra-passe.

---

## getPort

---

#### <span style={{color: '#008000'}}>getPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Retorna a porta da configuração atual.

##### Retorno

( _int_ )

Porta da configuração atual.

---

## getProtocol

---

#### <span style={{color: '#008000'}}>getProtocol</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome do protocolo usado na configuração atual.

##### Retorno

( _string_ )

Nome do protocolo da configuração atual.

---

## getSocketFactoryClass

---

#### <span style={{color: '#008000'}}>getSocketFactoryClass</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna a classe do socketFactory da configuração atual.

##### Retorno

( _string_ )

Nome da classe do socketFactory da configuração atual.

---

## getSocketFactoryPort

---

#### <span style={{color: '#008000'}}>getSocketFactoryPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Retorna a porta do socketFactory da configuração atual.

##### Retorno

( _int_ )

Porta da classe do socketFactory da configuração atual.

---

## getUsername

---

#### <span style={{color: '#008000'}}>getUsername</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o utilizador da configuração atual.

##### Retorno

( _string_ )

Utilizador.

---

## isDebug

---

#### <span style={{color: '#008000'}}>isDebug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o objeto atual está com o modo de debug ativo.

##### Retorno

( _boolean_ )

Se está ativo ou não.

---

## isEnabled

---

#### <span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se a configuração atual está ativa.

##### Retorno

( _boolean_ )

Se está ativa ou não.

---

## isQuitWait

---

#### <span style={{color: '#008000'}}>isQuitWait</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se na configuração atual o cliente deve esperar pela resposta do servidor ao comando QUIT antes de fechar a conexão.

##### Retorno

( _boolean_ )

Se deve ou não esperar pela resposta.

---

## isSSL

---

#### <span style={{color: '#008000'}}>isSSL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o SSL está ativo na configuração atual.

##### Retorno

( _boolean_ )

Se está ou não ativo.

---

## isSocketFactoryFallback

---

#### <span style={{color: '#008000'}}>isSocketFactoryFallback</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se a configuração deve tentar usar a SocketFactory padrão do sistema se a SocketFactory especificada falhar.

##### Retorno

( _boolean_ )

Se vai ou não ser usada.

---

## isTLS

---

#### <span style={{color: '#008000'}}>isTLS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o TLS está ativo na configuração atual.

##### Retorno

( _boolean_ )

Se está ou não ativo.

---

## setAuthMechanisms

---

#### <span style={{color: '#008000'}}>setAuthMechanisms</span>(<span style={{color: '#FF8000'}}>authMechanisms</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define quais mecanismos de autenticação serão usados na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **authMechanisms** | _string_ | Mecanismos de autenticação a serem usados na configuração atual. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setAuthNTLMDomain

---

#### <span style={{color: '#008000'}}>setAuthNTLMDomain</span>(<span style={{color: '#FF8000'}}>authNTLMDomain</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define o domínio do NTLM na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **authNTLMDomain** | _string_ | Domínio do NTLM. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setDebug

---

#### <span style={{color: '#008000'}}>setDebug</span>(<span style={{color: '#FF8000'}}>debug</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define se o objeto atual está com o modo de debug ativo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **debug** | _boolean_ | Se está ativo ou não. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setEnabled

---

#### <span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define se a configuração atual está ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se está ativa ou não. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setHost

---

#### <span style={{color: '#008000'}}>setHost</span>(<span style={{color: '#FF8000'}}>host</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define o host da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **host** | _string_ | Host a ser definido. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setPassword

---

#### <span style={{color: '#008000'}}>setPassword</span>(<span style={{color: '#FF8000'}}>palavraPasse</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define a palavra-passe da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **palavraPasse** | _string_ | Palavra-pase. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setPort

---

#### <span style={{color: '#008000'}}>setPort</span>(<span style={{color: '#FF8000'}}>porta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define a porta da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **porta** | _int_ | Porta a ser definida. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setProtocol

---

#### <span style={{color: '#008000'}}>setProtocol</span>(<span style={{color: '#FF8000'}}>protocolo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define o protocolo usado na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **protocolo** | _string_ | Protocolo a ser definido. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setQuitWait

---

#### <span style={{color: '#008000'}}>setQuitWait</span>(<span style={{color: '#FF8000'}}>quitWait</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define se na configuração atual do cliente deve esperar pela resposta do servidor ao comando QUIT antes de fechar a conexão.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **quitWait** | _boolean_ | Se deve ou não esperar pela resposta. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setSSL

---

#### <span style={{color: '#008000'}}>setSSL</span>(<span style={{color: '#FF8000'}}>ssl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define se o SSL está ativo na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ssl** | _boolean_ | Se está ou não ativo. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setSocketFactoryClass

---

#### <span style={{color: '#008000'}}>setSocketFactoryClass</span>(<span style={{color: '#FF8000'}}>socketFactoryClass</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define o nome da classe a ser usada no SocketFactory da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **socketFactoryClass** | _string_ | Nome da classe a ser usada no SocketFactory da configuração atual. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setSocketFactoryFallback

---

#### <span style={{color: '#008000'}}>setSocketFactoryFallback</span>(<span style={{color: '#FF8000'}}>ssl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define se a configuração deve tentar usar a SocketFactory padrão do sistema se a SocketFactory especificada falhar.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ssl** | _boolean_ | Se vai ou não ser usada. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setSocketFactoryPort

---

#### <span style={{color: '#008000'}}>setSocketFactoryPort</span>(<span style={{color: '#FF8000'}}>socketFactoryPort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define a porta a ser usada no SocketFactory da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **socketFactoryPort** | _int_ | Porta a ser usada no SocketFactory da configuração atual. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto SMTPConfig atual.

---

## setTLS

---

#### <span style={{color: '#008000'}}>setTLS</span>(<span style={{color: '#FF8000'}}>ssl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define se o TLS está ativo na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ssl** | _boolean_ | Se está ou não ativo. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

## setUsername

---

#### <span style={{color: '#008000'}}>setUsername</span>(<span style={{color: '#FF8000'}}>utilizador</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Descrição

Define o utilizador da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | Utilizador. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto IMAPConfig atual.

---

