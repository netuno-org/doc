---
id: IMAPConfig
title: IMAPConfig
sidebar_label: IMAPConfig
---

Definição da configuração do IMAP.

---

## getAuthMechanisms

---

#### getAuthMechanisms() : string
##### Descrição

Retorna quais mecanismos de autenticação estão sendo usados na configuração atual.

##### Retorno

( _string_ )

Mecanismos de autenticação usados na configuração atual.

---

## getAuthNTLMDomain

---

#### getAuthNTLMDomain() : string
##### Descrição

Retorna o domínio do NTLM usado na configuração atual.

##### Retorno

( _string_ )

Domínio do NTLM.

---

## getHost

---

#### getHost() : string
##### Descrição

Retorna o host da configuração atual.

##### Retorno

( _string_ )

Host da configuração atual.

---

## getPassword

---

#### getPassword() : string
##### Descrição

Retorna a palavra-passe da configuração atual.

##### Retorno

( _string_ )

Palavra-passe.

---

## getPort

---

#### getPort() : int
##### Descrição

Retorna a porta da configuração atual.

##### Retorno

( _int_ )

Porta da configuração atual.

---

## getProtocol

---

#### getProtocol() : string
##### Descrição

Retorna o nome do protocolo usado na configuração atual.

##### Retorno

( _string_ )

Nome do protocolo da configuração atual.

---

## getSocketFactoryClass

---

#### getSocketFactoryClass() : string
##### Descrição

Retorna a classe do socketFactory da configuração atual.

##### Retorno

( _string_ )

Nome da classe do socketFactory da configuração atual.

---

## getSocketFactoryPort

---

#### getSocketFactoryPort() : int
##### Descrição

Retorna a porta do socketFactory da configuração atual.

##### Retorno

( _int_ )

Porta da classe do socketFactory da configuração atual.

---

## getUsername

---

#### getUsername() : string
##### Descrição

Retorna o utilizador da configuração atual.

##### Retorno

( _string_ )

Utilizador.

---

## isDebug

---

#### isDebug() : boolean
##### Descrição

Retorna se o objeto atual está com o modo de debug ativo.

##### Retorno

( _boolean_ )

Se está ativo ou não.

---

## isEnabled

---

#### isEnabled() : boolean
##### Descrição

Retorna se a configuração atual está ativa.

##### Retorno

( _boolean_ )

Se está ativa ou não.

---

## isQuitWait

---

#### isQuitWait() : boolean
##### Descrição

Retorna se na configuração atual o cliente deve esperar pela resposta do servidor ao comando QUIT antes de fechar a conexão.

##### Retorno

( _boolean_ )

Se deve ou não esperar pela resposta.

---

## isSSL

---

#### isSSL() : boolean
##### Descrição

Retorna se o SSL está ativo na configuração atual.

##### Retorno

( _boolean_ )

Se está ou não ativo.

---

## isSocketFactoryFallback

---

#### isSocketFactoryFallback() : boolean
##### Descrição

Retorna se a configuração deve tentar usar a SocketFactory padrão do sistema se a SocketFactory especificada falhar.

##### Retorno

( _boolean_ )

Se vai ou não ser usada.

---

## isTLS

---

#### isTLS() : boolean
##### Descrição

Retorna se o TLS está ativo na configuração atual.

##### Retorno

( _boolean_ )

Se está ou não ativo.

---

## setAuthMechanisms

---

#### setAuthMechanisms(authMechanisms: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setAuthNTLMDomain(authNTLMDomain: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setDebug(debug: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setEnabled(ativo: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setHost(host: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setPassword(palavraPasse: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setPort(porta: int) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setProtocol(protocolo: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setQuitWait(quitWait: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setSSL(ssl: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setSocketFactoryClass(socketFactoryClass: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setSocketFactoryFallback(ssl: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setSocketFactoryPort(socketFactoryPort: int) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setTLS(ssl: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

#### setUsername(utilizador: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
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

