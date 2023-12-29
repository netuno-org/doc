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

Starts a new configuration of its own.

##### Return

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Configuration object loaded from received data.

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

#### _imap.config(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _[IMAP](../../resources/IMAP)_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _[IMAP](../../resources/IMAP)_ )

Current IMAP object.

---

## connect

---

#### _imap.connect() : _[IMAP](../../resources/IMAP)_
##### Return

( _[IMAP](../../resources/IMAP)_ )


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

#### _imap.enabled(enabled: _boolean_) : _[IMAP](../../resources/IMAP)_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _[IMAP](../../resources/IMAP)_ )

Current IMAP object.

---

## getClient

---

#### _imap.getClient() : _org.netuno.psamata.mail.IMAPClient_
##### Return

( _org.netuno.psamata.mail.IMAPClient_ )


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

#### _imap.getMail(arg0: _int_) : _org.netuno.psamata.mail.Mail_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## getMails

---

#### _imap.getMails() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _imap.getMails(arg0: _int_, arg1: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _java.util.List_ )


---

## init

---

#### _imap.init() : _[IMAP](../../resources/IMAP)_
##### Description

Starts a new instance of IMAP using the IMAP configuration of the `default` key.

##### Return

( _[IMAP](../../resources/IMAP)_ )

The new instance of the IMAP resource based on the `default` IMAP configuration.

---

#### _imap.init(configKey: string) : _[IMAP](../../resources/IMAP)_
##### Description

Starts a new instance of IMAP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the IMAP configuration that will be used. |

##### Return

( _[IMAP](../../resources/IMAP)_ )

The new instance of the IMAP resource based on the specified IMAP configuration.

---

#### _imap.init(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _[IMAP](../../resources/IMAP)_
##### Description

Starts a new instance of IMAP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuration that will be used. |

##### Return

( _[IMAP](../../resources/IMAP)_ )

The new instance of the IMAP resource based on the defined configuration.

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

#### _imap.mail(arg0: _int_) : _org.netuno.psamata.mail.Mail_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## mails

---

#### _imap.mails() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _imap.mails(arg0: _int_, arg1: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _java.util.List_ )


---

## newSize

---

#### _imap.newSize() : _int_
##### Return

( _int_ )


---

## openFolder

---

#### _imap.openFolder(arg0: string) : _[IMAP](../../resources/IMAP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[IMAP](../../resources/IMAP)_ )


---

#### _imap.openFolder(arg0: string, arg1: _boolean_) : _[IMAP](../../resources/IMAP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _[IMAP](../../resources/IMAP)_ )


---

## setConfig

---

#### _imap.setConfig(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _[IMAP](../../resources/IMAP)_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _[IMAP](../../resources/IMAP)_ )

Current IMAP object.

---

## setEnabled

---

#### _imap.setEnabled(enabled: _boolean_) : _[IMAP](../../resources/IMAP)_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _[IMAP](../../resources/IMAP)_ )

Current IMAP object.

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

#### _imap.with(arg0: _[SMTP](../../resources/SMTP)_) : _[IMAP](../../resources/IMAP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[SMTP](../../resources/SMTP)_ |   |

##### Return

( _[IMAP](../../resources/IMAP)_ )


---

