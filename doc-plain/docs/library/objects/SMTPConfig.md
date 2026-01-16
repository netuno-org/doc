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
##### Description

Returns which authentication mechanisms are being used in the current configuration.

##### Return

( _string_ )

Authentication mechanisms used in the current configuration.

---

## getAuthNTLMDomain

---

#### getAuthNTLMDomain() : string
##### Description

Returns the NTLM domain used in the current configuration.

##### Return

( _string_ )

The NTLM domain.

---

## getBcc

---

#### getBcc() : string
##### Description

Returns email addresses in the BCC (Blind Carbon Copy) field.

##### Return

( _string_ )

The email addresses.

---

## getCc

---

#### getCc() : string
##### Description

Returns email addresses in the CC (Carbon Copy) field

##### Return

( _string_ )

The email addresses.

---

## getFrom

---

#### getFrom() : string
##### Description

Returns the sender email address of the current configuration.

##### Return

( _string_ )

Email address.

---

## getHTML

---

#### getHTML() : string
##### Description

Returns the HTML code of the email message.

##### Return

( _string_ )

The HTML code.

---

## getHost

---

#### getHost() : string
##### Description

Returns the current configuration host.

##### Return

( _string_ )

Host of the current configuration.

---

## getMultipartSubtype

---

#### getMultipartSubtype() : string
##### Description

Returns the subtype of the multipart email message.

##### Return

( _string_ )

Message subtype.

---

## getPassword

---

#### getPassword() : string
##### Description

Returns the current configuration password.

##### Return

( _string_ )

Password.

---

## getPort

---

#### getPort() : int
##### Description

Returns the current configuration port.

##### Return

( _int_ )

Port of the current configuration.

---

## getProtocol

---

#### getProtocol() : string
##### Description

Returns the name of the protocol used in the current configuration.

##### Return

( _string_ )

Current configuration protocol name.

---

## getReplyTo

---

#### getReplyTo() : string
##### Description

Returns the email addresses specified in the Reply-To field.

##### Return

( _string_ )

The email addresses.

---

## getSocketFactoryClass

---

#### getSocketFactoryClass() : string
##### Description

Returns the socketFactory class of the current configuration.

##### Return

( _string_ )

Current configuration socketFactory class name

---

## getSocketFactoryPort

---

#### getSocketFactoryPort() : int
##### Description

Returns the socketFactory port of the current configuration.

##### Return

( _int_ )

Current configuration socketFactory port.

---

## getSubject

---

#### getSubject() : string
##### Description

Returns the email message subject.

##### Return

( _string_ )

The email subject.

---

## getSubjectPrefix

---

#### getSubjectPrefix() : string
##### Description

Returns the email message subject prefix.

##### Return

( _string_ )

The subject prefix.

---

## getText

---

#### getText() : string
##### Description

Returns the text of the email message.

##### Return

( _string_ )

The text message.

---

## getTo

---

#### getTo() : string
##### Description

Returns the recipient's email address from the current configuration.

##### Return

( _string_ )

Email address.

---

## getUsername

---

#### getUsername() : string
##### Description

Returns the current configuration username.

##### Return

( _string_ )

Username.

---

## isDebug

---

#### isDebug() : boolean
##### Description

Returns whether the current object is in debug mode active.

##### Return

( _boolean_ )

Whether it is active or not.

---

## isEnabled

---

#### isEnabled() : boolean
##### Description

Returns whether the current configuration is active.

##### Return

( _boolean_ )

Whether it is active or not.

---

## isQuitWait

---

#### isQuitWait() : boolean
##### Description

Returns whether in the current configuration the client should wait for the server's response to the QUIT command before closing the connection.

##### Return

( _boolean_ )

Whether or not to wait for a response.

---

## isSSL

---

#### isSSL() : boolean
##### Description

Returns whether SSL is enabled in the current configuration.

##### Return

( _boolean_ )

Whether or not it is active.

---

## isSocketFactoryFallback

---

#### isSocketFactoryFallback() : boolean
##### Description

Returns whether the configuration should attempt to use the system default SocketFactory if the specified SocketFactory fails.

##### Return

( _boolean_ )

Whether or not it will be used.

---

## isTLS

---

#### isTLS() : boolean
##### Description

Returns whether TLS is enabled in the current configuration.

##### Return

( _boolean_ )

Whether or not it is active.

---

## setAuthMechanisms

---

#### setAuthMechanisms(authMechanisms: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines which authentication mechanisms will be used in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **authMechanisms** | _string_ | Authentication mechanisms to be used in the current configuration. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setAuthNTLMDomain

---

#### setAuthNTLMDomain(authNTLMDomain: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the NTLM domain in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **authNTLMDomain** | _string_ | The NTLM domain. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setBcc

---

#### setBcc(bcc: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the email addresses in the BCC (Blind Carbon Copy) field.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bcc** | _string_ | The email addresses. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setCc

---

#### setCc(cc: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines email addresses in the CC (Carbon Copy) field.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cc** | _string_ | The email addresses. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setDebug

---

#### setDebug(debug: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines whether the current object is in debug mode active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **debug** | _boolean_ | Whether it is active or not. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setEnabled

---

#### setEnabled(enabled: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines whether the current configuration is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or not. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setFrom

---

#### setFrom(from: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the sender email address of the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | Email address. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setHTML

---

#### setHTML(html: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the HTML code that will build the body of the email message.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ | The HTML code. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setHost

---

#### setHost(host: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the host of the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Host to be defined. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setMultipartSubtype

---

#### setMultipartSubtype(multipartSubtype: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the subtype of the multipart email message.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **multipartSubtype** | _string_ | Message subtype. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setPassword

---

#### setPassword(password: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the current configuration password.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ | Password. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setPort

---

#### setPort(port: int) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the port of the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **port** | _int_ | Port to be defined. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setProtocol

---

#### setProtocol(protocol: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the protocol used in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **protocol** | _string_ | Protocol to be defined. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setQuitWait

---

#### setQuitWait(quitWait: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines whether in the current configuration the client must wait for the server's response to the QUIT command before closing the connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **quitWait** | _boolean_ | Whether or not to wait for a response. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setReplyTo

---

#### setReplyTo(replyTo: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the email addresses specified in the Reply-To field.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **replyTo** | _string_ | The email addresses. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setSSL

---

#### setSSL(ssl: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines whether SSL is enabled in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ssl** | _boolean_ | Whether or not it is active. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setSocketFactoryClass

---

#### setSocketFactoryClass(socketFactoryClass: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the name of the class to be used in the current configuration's SocketFactory.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **socketFactoryClass** | _string_ | Name of the class to be used in the current configuration's SocketFactory. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setSocketFactoryFallback

---

#### setSocketFactoryFallback(ssl: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines whether the configuration should attempt to use the system default SocketFactory if the specified SocketFactory fails.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ssl** | _boolean_ | Whether or not it will be used. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setSocketFactoryPort

---

#### setSocketFactoryPort(socketFactoryPort: int) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the port to be used in the current configuration's SocketFactory.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **socketFactoryPort** | _int_ | Port to be used in the current configuration's SocketFactory. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setSubject

---

#### setSubject(subject: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the email message subject.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subject** | _string_ | The email subject. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setSubjectPrefix

---

#### setSubjectPrefix(subjectPrefix: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the email message subject prefix.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subjectPrefix** | _string_ | The subject prefix. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setTLS

---

#### setTLS(ssl: boolean) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines whether TLS is enabled in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ssl** | _boolean_ | Whether or not it is active. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setText

---

#### setText(text: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the text of the email message.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The text message. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setTo

---

#### setTo(to: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the recipient's email address of the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **to** | _string_ | Email address. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

## setUsername

---

#### setUsername(username: string) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Defines the current configuration username.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **username** | _string_ | Username. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Current SMTPConfig object.

---

