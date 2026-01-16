---
id: IMAPConfig
title: IMAPConfig
sidebar_label: IMAPConfig
---

Configuring IMAP Configuration.

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

## getHost

---

#### getHost() : string
##### Description

Returns the current configuration host.

##### Return

( _string_ )

Host of the current configuration.

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

#### setAuthMechanisms(authMechanisms: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines which authentication mechanisms will be used in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **authMechanisms** | _string_ | Authentication mechanisms to be used in the current configuration. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setAuthNTLMDomain

---

#### setAuthNTLMDomain(authNTLMDomain: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the NTLM domain in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **authNTLMDomain** | _string_ | The NTLM domain. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setDebug

---

#### setDebug(debug: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines whether the current object is in debug mode active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **debug** | _boolean_ | Whether it is active or not. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setEnabled

---

#### setEnabled(enabled: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines whether the current configuration is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or not. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setHost

---

#### setHost(host: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the host of the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Host to be defined. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setPassword

---

#### setPassword(password: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the current configuration password.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ | Password. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setPort

---

#### setPort(port: int) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the port of the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **port** | _int_ | Port to be defined. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setProtocol

---

#### setProtocol(protocol: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the protocol used in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **protocol** | _string_ | Protocol to be defined. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setQuitWait

---

#### setQuitWait(quitWait: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines whether in the current configuration the client must wait for the server's response to the QUIT command before closing the connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **quitWait** | _boolean_ | Whether or not to wait for a response. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setSSL

---

#### setSSL(ssl: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines whether SSL is enabled in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ssl** | _boolean_ | Whether or not it is active. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setSocketFactoryClass

---

#### setSocketFactoryClass(socketFactoryClass: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the name of the class to be used in the current configuration's SocketFactory.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **socketFactoryClass** | _string_ | Name of the class to be used in the current configuration's SocketFactory. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setSocketFactoryFallback

---

#### setSocketFactoryFallback(ssl: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines whether the configuration should attempt to use the system default SocketFactory if the specified SocketFactory fails.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ssl** | _boolean_ | Whether or not it will be used. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setSocketFactoryPort

---

#### setSocketFactoryPort(socketFactoryPort: int) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the port to be used in the current configuration's SocketFactory.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **socketFactoryPort** | _int_ | Port to be used in the current configuration's SocketFactory. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current SMTPConfig object.

---

## setTLS

---

#### setTLS(ssl: boolean) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines whether TLS is enabled in the current configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ssl** | _boolean_ | Whether or not it is active. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

## setUsername

---

#### setUsername(username: string) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Defines the current configuration username.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **username** | _string_ | Username. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Current IMAPConfig object.

---

