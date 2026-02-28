---
id: imap
title: IMAP
sidebar_label: IMAP
---

Mailbox query capability through IMAP.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Closes and terminates the connection to the current IMAP folder.

##### Return

( _void_ )


---

## config

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Configuration object loaded from received data.

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>connect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
##### Description

Makes the connection to the IMAP server.

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

IMAPClient object.

---

## deletedSize

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>deletedSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Deletes messages from an IMAP folder and returns the size (in bytes) of deleted messages.

##### Return

( _int_ )

Size (in bytes) of deleted messages.

---

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>getClient</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.mail.IMAPClient</span>
##### Description

Returns the IMAPClient object where the resource settings are located.

##### Return

( _org.netuno.psamata.mail.IMAPClient_ )

IMAPClient object.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>
##### Description

Gets the configuration that is being used.

##### Return

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Object of the active configuration.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
##### Description

Starts a new instance of IMAP using the IMAP configuration of the `default` key.

##### Return

( _[IMAP](/docs/library/resources/imap)_ )

The new instance of the IMAP resource based on the `default` IMAP configuration.

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>mail</span>(<span style={{color: '#FF8000'}}>position</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.mail.Mail</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>mails</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;org.netuno.psamata.mail.Mail&gt;</span>
##### Description

Returns all messages contained in the folder.

##### Return

( _java.util.List_ )

Message list.

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>mails</span>(<span style={{color: '#FF8000'}}>start</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>start</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;org.netuno.psamata.mail.Mail&gt;</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>newSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the size (in bytes) of new (unread) messages in an IMAP folder.

##### Return

( _int_ )

Size (in bytes) of messages new unread messages.

---

## openFolder

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>openFolder</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>openFolder</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>write</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>setConfig</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAPConfig](/docs/library/objects/IMAPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>size</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the size (in bytes) of messages in an IMAP folder.

##### Return

( _int_ )

The size (in bytes) of messages.

---

## unreadSize

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>unreadSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the size (in bytes) of all unread messages in an IMAP folder.

##### Return

( _int_ )

Size (in bytes) of unread messages.

---

## with

---

#### <span style={{fontWeight: 'normal'}}>_imap</span>.<span style={{color: '#008000'}}>with</span>(<span style={{color: '#FF8000'}}>smtp</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](/docs/library/resources/smtp)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](/docs/library/resources/imap)</span>
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

