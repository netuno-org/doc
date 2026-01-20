---
id: SMTPConfig
title: SMTPConfig
sidebar_label: SMTPConfig
---

Definição da configuração do SMTP.

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

## getBcc

---

#### getBcc() : string
##### Descrição

Retorna os endereços de e-mail no campo BCC (Blind Carbon Copy).

##### Retorno

( _string_ )

Endereços de e-mail.

---

## getCc

---

#### getCc() : string
##### Descrição

Retorna os endereços de e-mail no campo CC (Carbon Copy).

##### Retorno

( _string_ )

Endereços de e-mail.

---

## getFrom

---

#### getFrom() : string
##### Descrição

Retorna o endereço de email do remetente da configuração atual.

##### Retorno

( _string_ )

Endereço de e-mail.

---

## getHTML

---

#### getHTML() : string
##### Descrição

Retorna o código HTML da mensagem de e-mail.

##### Retorno

( _string_ )

Código HTML.

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

## getMultipartSubtype

---

#### getMultipartSubtype() : string
##### Descrição

Retorna o subtipo da mensagem multipart do e-mail.

##### Retorno

( _string_ )

Subtipo da mensagem.

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

## getReplyTo

---

#### getReplyTo() : string
##### Descrição

Retorna os endereços de e-mail especificados no campo Reply-To.

##### Retorno

( _string_ )

Endereços de e-mail.

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

## getSubject

---

#### getSubject() : string
##### Descrição

Retorna o assunto da mensagem de e-mail.

##### Retorno

( _string_ )

Assunto da mensagem.

---

## getSubjectPrefix

---

#### getSubjectPrefix() : string
##### Descrição

Retorna o prefixo do assunto da mensagem do e-mail.

##### Retorno

( _string_ )

Prefixo do assunto.

---

## getText

---

#### getText() : string
##### Descrição

Retorna o texto da mensagem de e-mail.

##### Retorno

( _string_ )

texto da mensagem.

---

## getTo

---

#### getTo() : string
##### Descrição

Retorna o endereço de email do destinatário da configuração atual.

##### Retorno

( _string_ )

Endereço de e-mail.

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

#### setAuthMechanisms(authMechanisms: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define quais mecanismos de autenticação serão usados na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **authMechanisms** | _string_ | Mecanismos de autenticação a serem usados na configuração atual. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setAuthNTLMDomain

---

#### setAuthNTLMDomain(authNTLMDomain: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o domínio do NTLM na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **authNTLMDomain** | _string_ | Domínio do NTLM. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setBcc

---

#### setBcc(bcc: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define os endereços de e-mail no campo BCC (Blind Carbon Copy).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bcc** | _string_ | Endereços de e-mail. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setCc

---

#### setCc(cc: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define os endereços de e-mail no campo CC (Carbon Copy).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cc** | _string_ | Endereços de e-mail. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setDebug

---

#### setDebug(debug: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define se o objeto atual está com o modo de debug ativo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **debug** | _boolean_ | Se está ativo ou não. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setEnabled

---

#### setEnabled(ativo: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define se a configuração atual está ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se está ativa ou não. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setFrom

---

#### setFrom(remetente: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o endereço de email do remetente da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **remetente** | _string_ | Endereço de email. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setHTML

---

#### setHTML(html: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o código HTML que irá construir o corpo da mensagem de e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ | Código HTML. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setHost

---

#### setHost(host: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o host da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **host** | _string_ | Host a ser definido. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setMultipartSubtype

---

#### setMultipartSubtype(subtipo: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o subtipo da mensagem multipart de e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subtipo** | _string_ | Subtipo da mensagem. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setPassword

---

#### setPassword(palavraPasse: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define a palavra-passe da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **palavraPasse** | _string_ | Palavra-pase. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setPort

---

#### setPort(porta: int) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define a porta da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **porta** | _int_ | Porta a ser definida. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setProtocol

---

#### setProtocol(protocolo: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o protocolo usado na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **protocolo** | _string_ | Protocolo a ser definido. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setQuitWait

---

#### setQuitWait(quitWait: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define se na configuração atual do cliente deve esperar pela resposta do servidor ao comando QUIT antes de fechar a conexão.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **quitWait** | _boolean_ | Se deve ou não esperar pela resposta. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setReplyTo

---

#### setReplyTo(replicaPara: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define os endereços de e-mail especificados no campo Reply-To.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **replicaPara** | _string_ | Endereços de e-mail. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setSSL

---

#### setSSL(ssl: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define se o SSL está ativo na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ssl** | _boolean_ | Se está ou não ativo. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setSocketFactoryClass

---

#### setSocketFactoryClass(socketFactoryClass: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o nome da classe a ser usada no SocketFactory da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **socketFactoryClass** | _string_ | Nome da classe a ser usada no SocketFactory da configuração atual. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setSocketFactoryFallback

---

#### setSocketFactoryFallback(ssl: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define se a configuração deve tentar usar a SocketFactory padrão do sistema se a SocketFactory especificada falhar.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ssl** | _boolean_ | Se vai ou não ser usada. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setSocketFactoryPort

---

#### setSocketFactoryPort(socketFactoryPort: int) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define a porta a ser usada no SocketFactory da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **socketFactoryPort** | _int_ | Porta a ser usada no SocketFactory da configuração atual. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setSubject

---

#### setSubject(assunto: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o assunto da mensagem de e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **assunto** | _string_ | Assunto da mensagem. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setSubjectPrefix

---

#### setSubjectPrefix(prefixoAssunto: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o prefixo do assunto da mensagem de e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **prefixoAssunto** | _string_ | Prefixo do assunto. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setTLS

---

#### setTLS(ssl: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define se o TLS está ativo na configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ssl** | _boolean_ | Se está ou não ativo. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setText

---

#### setText(texto: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o texto da mensagem de e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto da mensagem. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setTo

---

#### setTo(destinatario: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o endereço de email do destinatário da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **destinatario** | _string_ | Endereço de email. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

## setUsername

---

#### setUsername(utilizador: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Define o utilizador da configuração atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | Utilizador. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto SMTPConfig atual.

---

