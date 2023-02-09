---
id: imap
title: IMAP
sidebar_label: IMAP
---

Mailbox query capability through IMAP.

---

## close

---

#### _imap.close() : _void_
##### Return

( _void_ )


---

## config

---

#### _imap.config() : _[IMAPConfig](../../objects/IMAPConfig)_
##### Description

Gets the configuration that is being used.

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Object of the active configuration.

---

#### _imap.config(config: _[Values](../../objects/Values)_) : _[IMAPConfig](../../objects/IMAPConfig)_
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Configuration object loaded from received data.

---

#### _imap.config(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _IMAP_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _IMAP_ )

Current SMTP object.

---

## connect

---

#### _imap.connect() : _IMAP_
##### Return

( _IMAP_ )


---

## deletedSize

---

#### _imap.deletedSize() : _int_
##### Return

( _int_ )


---

## enabled

---

#### _imap.enabled() : _boolean_
##### Return

( _boolean_ )


---

#### _imap.enabled(enabled: _boolean_) : _IMAP_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _IMAP_ )

Current SMTP object.

---

## getClient

---

#### _imap.getClient() : _IMAPClient_
##### Return

( _IMAPClient_ )


---

## getConfig

---

#### _imap.getConfig() : _[IMAPConfig](../../objects/IMAPConfig)_
##### Description

Gets the configuration that is being used.

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Object of the active configuration.

---

## getMail

---

#### _imap.getMail(arg0: _int_) : _Mail_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Mail_ )


---

## getMails

---

#### _imap.getMails() : _List_
##### Return

( _List_ )


---

#### _imap.getMails(arg0: _int_, arg1: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _List_ )


---

## init

---

#### _imap.init() : _IMAP_
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _IMAP_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

#### _imap.init(configKey: string) : _IMAP_
##### Description

Starts a new instance of SMTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the SMTP configuration that will be used. |

##### Return

( _IMAP_ )

The new instance of the SMTP resource based on the specified SMTP configuration.

---

#### _imap.init(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _IMAP_
##### Description

Starts a new instance of SMTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuration that will be used. |

##### Return

( _IMAP_ )

The new instance of the SMTP resource based on the defined configuration.

---

## isEnabled

---

#### _imap.isEnabled() : _boolean_
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### _imap.mail(arg0: _int_) : _Mail_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Mail_ )


---

## mails

---

#### _imap.mails() : _List_
##### Return

( _List_ )


---

#### _imap.mails(arg0: _int_, arg1: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _List_ )


---

## newSize

---

#### _imap.newSize() : _int_
##### Return

( _int_ )


---

## openFolder

---

#### _imap.openFolder(arg0: string) : _IMAP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _IMAP_ )


---

#### _imap.openFolder(arg0: string, arg1: _boolean_) : _IMAP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _IMAP_ )


---

## setConfig

---

#### _imap.setConfig(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _IMAP_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _IMAP_ )

Current SMTP object.

---

## setEnabled

---

#### _imap.setEnabled(enabled: _boolean_) : _IMAP_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _IMAP_ )

Current SMTP object.

---

## size

---

#### _imap.size() : _int_
##### Return

( _int_ )


---

## unreadSize

---

#### _imap.unreadSize() : _int_
##### Return

( _int_ )


---

## with

---

#### _imap.with(arg0: _SMTP_) : _IMAP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _SMTP_ |   |

##### Return

( _IMAP_ )


---

