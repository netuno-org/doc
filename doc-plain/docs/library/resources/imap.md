---
id: imap
title: IMAP
sidebar_label: IMAP
---

Mailbox query capability through IMAP.

---

## close

---

#### _imap.close() : void
##### Description

Closes and terminates the connection to the current IMAP folder.

##### Return

( _void_ )


---

## config

---

#### _imap.config() : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Starts a new configuration of its own.

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Configuration object loaded from received data.

---

#### _imap.config(config: [Values](/docs/library/objects/Values)) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Configuration definition data structure. |

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Configuration object loaded from received data.

---

#### _imap.config(config: [IMAPConfig](/docs/library/objects/IMAPConfig)) : [IMAP](/docs/library/resources/imap)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[IMAPConfig](/docs/library/objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP object.

---

## connect

---

#### _imap.connect() : [IMAP](/docs/library/resources/imap)
##### Description

Makes the connection to the IMAP server.

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

IMAPClient object.

---

## deletedSize

---

#### _imap.deletedSize() : int
##### Description

Deletes messages from an IMAP folder and returns the size (in bytes) of deleted messages.

##### Return

( _int_ )

Size (in bytes) of deleted messages.

---

## enabled

---

#### _imap.enabled() : boolean
##### Return

( _boolean_ )


---

#### _imap.enabled(enabled: boolean) : [IMAP](/docs/library/resources/imap)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP object.

---

## getClient

---

#### _imap.getClient() : org.netuno.psamata.mail.IMAPClient
##### Description

Returns the IMAPClient object where the resource settings are located.

##### Return

( _org.netuno.psamata.mail.IMAPClient_ )

IMAPClient object.

---

## getConfig

---

#### _imap.getConfig() : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Description

Gets the configuration that is being used.

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Object of the active configuration.

---

## init

---

#### _imap.init() : [IMAP](/docs/library/resources/imap)
##### Description

Starts a new instance of IMAP using the IMAP configuration of the `default` key.

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

The new instance of the IMAP resource based on the `default` IMAP configuration.

---

#### _imap.init(configKey: string) : [IMAP](/docs/library/resources/imap)
##### Description

Starts a new instance of IMAP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the IMAP configuration that will be used. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

The new instance of the IMAP resource based on the specified IMAP configuration.

---

#### _imap.init(config: [IMAPConfig](/docs/library/objects/IMAPConfig)) : [IMAP](/docs/library/resources/imap)
##### Description

Starts a new instance of IMAP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[IMAPConfig](/docs/library/objects/IMAPConfig)_ | Configuration that will be used. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

The new instance of the IMAP resource based on the defined configuration.

---

## isEnabled

---

#### _imap.isEnabled() : boolean
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### _imap.mail(position: int) : org.netuno.psamata.mail.Mail
##### Description

Returns a specific message in the IMAP folder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **position** | _int_ | Message index |

##### Return

( _org.netuno.psamata.mail.Mail_ )

Message.

---

## mails

---

#### _imap.mails() : java.util.List
##### Description

Returns all messages contained in the folder.

##### Return

( _java.util.List_ )

Message list.

---

#### _imap.mails(start: int, start: int) : java.util.List
##### Description

Returns a specific range of messages contained in the IMAP folder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **start** | _int_ | First message index |
| **start** | _int_ | Index of last message. |

##### Return

( _java.util.List_ )

Message list.

---

## newSize

---

#### _imap.newSize() : int
##### Description

Returns the size (in bytes) of new (unread) messages in an IMAP folder.

##### Return

( _int_ )

Size (in bytes) of messages new unread messages.

---

## openFolder

---

#### _imap.openFolder(name: string) : [IMAP](/docs/library/resources/imap)
##### Description

Opens the server's INBOX folder (reading mode).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | INBOX folder name. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP feature.

---

#### _imap.openFolder(name: string, write: boolean) : [IMAP](/docs/library/resources/imap)
##### Description

Opens the server's INBOX folder, however, specifying whether it is in writing mode or not.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | INBOX folder name. |
| **write** | _boolean_ | Whether or not it is in writing mode. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP feature.

---

## setConfig

---

#### _imap.setConfig(config: [IMAPConfig](/docs/library/objects/IMAPConfig)) : [IMAP](/docs/library/resources/imap)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[IMAPConfig](/docs/library/objects/IMAPConfig)_ | Definition of the new configuration. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP object.

---

## setEnabled

---

#### _imap.setEnabled(enabled: boolean) : [IMAP](/docs/library/resources/imap)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP object.

---

## size

---

#### _imap.size() : int
##### Description

Returns the size (in bytes) of messages in an IMAP folder.

##### Return

( _int_ )

The size (in bytes) of messages.

---

## unreadSize

---

#### _imap.unreadSize() : int
##### Description

Returns the size (in bytes) of all unread messages in an IMAP folder.

##### Return

( _int_ )

Size (in bytes) of unread messages.

---

## with

---

#### _imap.with(smtp: [SMTP](/docs/library/resources/smtp)) : [IMAP](/docs/library/resources/imap)
##### Description

Defines a new SMTP configuration different from the current one.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **smtp** | _[SMTP](/docs/library/resources/smtp)_ | SMTP configuration to be used. |

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

Current IMAP feature.

---

