---
id: SMTPConfig
title: SMTPConfig
sidebar_label: SMTPConfig
---

Definição da configuração do SMTP.

---

## getAuthMechanisms

---

#### <span style={{color: '#008000'}}>getAuthMechanisms</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns which authentication mechanisms are being used in the current configuration.

##### Return

( _string_ )

Authentication mechanisms used in the current configuration.

---

## getAuthNTLMDomain

---

#### <span style={{color: '#008000'}}>getAuthNTLMDomain</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the NTLM domain used in the current configuration.

##### Return

( _string_ )

The NTLM domain.

---

## getBcc

---

#### <span style={{color: '#008000'}}>getBcc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns email addresses in the BCC (Blind Carbon Copy) field.

##### Return

( _string_ )

The email addresses.

---

## getCc

---

#### <span style={{color: '#008000'}}>getCc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns email addresses in the CC (Carbon Copy) field

##### Return

( _string_ )

The email addresses.

---

## getFrom

---

#### <span style={{color: '#008000'}}>getFrom</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the sender email address of the current configuration.

##### Return

( _string_ )

Email address.

---

## getHTML

---

#### <span style={{color: '#008000'}}>getHTML</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the HTML code of the email message.

##### Return

( _string_ )

The HTML code.

---

## getHost

---

#### <span style={{color: '#008000'}}>getHost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the current configuration host.

##### Return

( _string_ )

Host of the current configuration.

---

## getMultipartSubtype

---

#### <span style={{color: '#008000'}}>getMultipartSubtype</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the subtype of the multipart email message.

##### Return

( _string_ )

Message subtype.

---

## getPassword

---

#### <span style={{color: '#008000'}}>getPassword</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the current configuration password.

##### Return

( _string_ )

Password.

---

## getPort

---

#### <span style={{color: '#008000'}}>getPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the current configuration port.

##### Return

( _int_ )

Port of the current configuration.

---

## getProtocol

---

#### <span style={{color: '#008000'}}>getProtocol</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the protocol used in the current configuration.

##### Return

( _string_ )

Current configuration protocol name.

---

## getReplyTo

---

#### <span style={{color: '#008000'}}>getReplyTo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the email addresses specified in the Reply-To field.

##### Return

( _string_ )

The email addresses.

---

## getSocketFactoryClass

---

#### <span style={{color: '#008000'}}>getSocketFactoryClass</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the socketFactory class of the current configuration.

##### Return

( _string_ )

Current configuration socketFactory class name

---

## getSocketFactoryPort

---

#### <span style={{color: '#008000'}}>getSocketFactoryPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the socketFactory port of the current configuration.

##### Return

( _int_ )

Current configuration socketFactory port.

---

## getSubject

---

#### <span style={{color: '#008000'}}>getSubject</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the email message subject.

##### Return

( _string_ )

The email subject.

---

## getSubjectPrefix

---

#### <span style={{color: '#008000'}}>getSubjectPrefix</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the email message subject prefix.

##### Return

( _string_ )

The subject prefix.

---

## getText

---

#### <span style={{color: '#008000'}}>getText</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the text of the email message.

##### Return

( _string_ )

The text message.

---

## getTo

---

#### <span style={{color: '#008000'}}>getTo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the recipient's email address from the current configuration.

##### Return

( _string_ )

Email address.

---

## getUsername

---

#### <span style={{color: '#008000'}}>getUsername</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the current configuration username.

##### Return

( _string_ )

Username.

---

## isDebug

---

#### <span style={{color: '#008000'}}>isDebug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the current object is in debug mode active.

##### Return

( _boolean_ )

Whether it is active or not.

---

## isEnabled

---

#### <span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the current configuration is active.

##### Return

( _boolean_ )

Whether it is active or not.

---

## isQuitWait

---

#### <span style={{color: '#008000'}}>isQuitWait</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether in the current configuration the client should wait for the server's response to the QUIT command before closing the connection.

##### Return

( _boolean_ )

Whether or not to wait for a response.

---

## isSSL

---

#### <span style={{color: '#008000'}}>isSSL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether SSL is enabled in the current configuration.

##### Return

( _boolean_ )

Whether or not it is active.

---

## isSocketFactoryFallback

---

#### <span style={{color: '#008000'}}>isSocketFactoryFallback</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the configuration should attempt to use the system default SocketFactory if the specified SocketFactory fails.

##### Return

( _boolean_ )

Whether or not it will be used.

---

## isTLS

---

#### <span style={{color: '#008000'}}>isTLS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether TLS is enabled in the current configuration.

##### Return

( _boolean_ )

Whether or not it is active.

---

## setAuthMechanisms

---

#### <span style={{color: '#008000'}}>setAuthMechanisms</span>(<span style={{color: '#FF8000'}}>authMechanisms</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setAuthNTLMDomain</span>(<span style={{color: '#FF8000'}}>authNTLMDomain</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setBcc</span>(<span style={{color: '#FF8000'}}>bcc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setCc</span>(<span style={{color: '#FF8000'}}>cc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setDebug</span>(<span style={{color: '#FF8000'}}>debug</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setFrom</span>(<span style={{color: '#FF8000'}}>from</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setHTML</span>(<span style={{color: '#FF8000'}}>html</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setHost</span>(<span style={{color: '#FF8000'}}>host</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setMultipartSubtype</span>(<span style={{color: '#FF8000'}}>multipartSubtype</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setPassword</span>(<span style={{color: '#FF8000'}}>password</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setPort</span>(<span style={{color: '#FF8000'}}>port</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setProtocol</span>(<span style={{color: '#FF8000'}}>protocol</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setQuitWait</span>(<span style={{color: '#FF8000'}}>quitWait</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setReplyTo</span>(<span style={{color: '#FF8000'}}>replyTo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setSSL</span>(<span style={{color: '#FF8000'}}>ssl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setSocketFactoryClass</span>(<span style={{color: '#FF8000'}}>socketFactoryClass</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setSocketFactoryFallback</span>(<span style={{color: '#FF8000'}}>ssl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setSocketFactoryPort</span>(<span style={{color: '#FF8000'}}>socketFactoryPort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setSubject</span>(<span style={{color: '#FF8000'}}>subject</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setSubjectPrefix</span>(<span style={{color: '#FF8000'}}>subjectPrefix</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setTLS</span>(<span style={{color: '#FF8000'}}>ssl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setText</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setTo</span>(<span style={{color: '#FF8000'}}>to</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

#### <span style={{color: '#008000'}}>setUsername</span>(<span style={{color: '#FF8000'}}>username</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](/docs/library/objects/SMTPConfig)</span>
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

