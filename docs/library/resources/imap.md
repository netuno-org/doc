---
id: imap
title: IMAP
sidebar_label: IMAP
---

Mailbox query capability through IMAP.

---

## close

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Return

( _void_ )


---

## config

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>() : <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Configuration object loaded from received data.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Configuration object loaded from received data.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _[IMAP](../../resources/imap)_ )

Current IMAP object.

---

## connect

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">connect</span>() : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Return

( _[IMAP](../../resources/imap)_ )


---

## deletedSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">deletedSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## enabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[IMAP](../../resources/imap)_ )

Current IMAP object.

---

## getClient

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getClient</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.IMAPClient</span>
##### Return

( _org.netuno.psamata.mail.IMAPClient_ )


---

## getConfig

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getConfig</span>() : <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>
##### Description

Gets the configuration that is being used.

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Object of the active configuration.

---

## getMail

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getMail</span>(<span style="color: #FF8000">position</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **position** | _int_ |   |

##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## getMails

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getMails</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getMails</span>(<span style="color: #FF8000">start</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">end</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **start** | _int_ |   |
| **end** | _int_ |   |

##### Return

( _java.util.List_ )


---

## init

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Starts a new instance of IMAP using the IMAP configuration of the `default` key.

##### Return

( _[IMAP](../../resources/imap)_ )

The new instance of the IMAP resource based on the `default` IMAP configuration.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configKey</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Starts a new instance of IMAP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the IMAP configuration that will be used. |

##### Return

( _[IMAP](../../resources/imap)_ )

The new instance of the IMAP resource based on the specified IMAP configuration.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Starts a new instance of IMAP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuration that will be used. |

##### Return

( _[IMAP](../../resources/imap)_ )

The new instance of the IMAP resource based on the defined configuration.

---

## isEnabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mail</span>(<span style="color: #FF8000">position</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **position** | _int_ |   |

##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## mails

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mails</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mails</span>(<span style="color: #FF8000">start</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">end</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **start** | _int_ |   |
| **end** | _int_ |   |

##### Return

( _java.util.List_ )


---

## newSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">newSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## openFolder

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">openFolder</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[IMAP](../../resources/imap)_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">openFolder</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">write</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **write** | _boolean_ |   |

##### Return

( _[IMAP](../../resources/imap)_ )


---

## setConfig

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">setConfig</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _[IMAP](../../resources/imap)_ )

Current IMAP object.

---

## setEnabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[IMAP](../../resources/imap)_ )

Current IMAP object.

---

## size

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">size</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## unreadSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">unreadSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## with

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">with</span>(<span style="color: #FF8000">smtp</span>: <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **smtp** | _[SMTP](../../resources/smtp)_ |   |

##### Return

( _[IMAP](../../resources/imap)_ )


---

