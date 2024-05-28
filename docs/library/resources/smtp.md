---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Feature of sending e-mail by SMTP.

---

## attachment

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">attachment</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[File](../../objects/File)_ | The file. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">attachment</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">contentId</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[File](../../objects/File)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">attachment</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">contentId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">inline</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[File](../../objects/File)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |
| **inline** | _boolean_ | Whether or not to be injected into the content. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">attachment</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[Storage](../../resources/storage)_ | The file. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">attachment</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">contentId</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[Storage](../../resources/storage)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">attachment</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">contentId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">inline</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[Storage](../../resources/storage)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |
| **inline** | _boolean_ | Whether or not to be injected into the content. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## bcc

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">bcc</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets whoever receives a hidden copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a blind copy.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">bcc</span>(<span style="color: #FF8000">bcc</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bcc** | _string_ | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## cc

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">cc</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets whoever receives a copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a copy.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">cc</span>(<span style="color: #FF8000">cc</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cc** | _string_ | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## config

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">config</span>() : <span style="font-weight: normal; font-style: italic;">[SMTPConfig](../../objects/SMTPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Return

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Configuration object loaded from received data.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTPConfig](../../objects/SMTPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Configuration object loaded from received data.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[SMTPConfig](../../objects/SMTPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SMTPConfig](../../objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## emptyMail

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">emptyMail</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## enabled

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## from

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">from</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the sender's e-mail address.

##### Return

( _string_ )

The e-mail address of the sender.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">from</span>(<span style="color: #FF8000">from</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | The e-mail address of the sender. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## getBcc

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getBcc</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets whoever receives a hidden copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a blind copy.

---

## getCc

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getCc</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets whoever receives a copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a copy.

---

## getConfig

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getConfig</span>() : <span style="font-weight: normal; font-style: italic;">[SMTPConfig](../../objects/SMTPConfig)</span>
##### Description

Gets the configuration that is being used.

##### Return

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Object of the active configuration.

---

## getFrom

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getFrom</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the sender's e-mail address.

##### Return

( _string_ )

The e-mail address of the sender.

---

## getHTML

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getHTML</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the HTML of the e-mail body.

##### Return

( _string_ )

The HTML that will go in the e-mail.

---

## getMultipartSubtype

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getMultipartSubtype</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Return

( _string_ )

The multipart subtype.

---

## getReplyTo

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getReplyTo</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets who should receive the email reply.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a reply.

---

## getSubject

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getSubject</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the title of the email.

##### Return

( _string_ )

The title that will go in the e-mail.

---

## getSubjectPrefix

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getSubjectPrefix</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the prefix of the e-mail title.

##### Return

( _string_ )

The prefix of the title that will go in the e-mail.

---

## getText

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getText</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the body text of the e-mail.

##### Return

( _string_ )

The text that will go in the e-mail.

---

## getTo

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">getTo</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the recipient's e-mail address.

##### Return

( _string_ )

The recipient's e-mail address.

---

## html

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">html</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">html</span>(<span style="color: #FF8000">html</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ |   |

##### Return

( _[SMTP](../../resources/smtp)_ )


---

## init

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _[SMTP](../../resources/smtp)_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configKey</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Starts a new instance of SMTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the SMTP configuration that will be used. |

##### Return

( _[SMTP](../../resources/smtp)_ )

The new instance of the SMTP resource based on the specified SMTP configuration.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[SMTPConfig](../../objects/SMTPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Starts a new instance of SMTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SMTPConfig](../../objects/SMTPConfig)_ | Configuration that will be used. |

##### Return

( _[SMTP](../../resources/smtp)_ )

The new instance of the SMTP resource based on the defined configuration.

---

## isEnabled

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">mail</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## multipartSubtype

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">multipartSubtype</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">multipartSubtype</span>(<span style="color: #FF8000">html</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ |   |

##### Return

( _[SMTP](../../resources/smtp)_ )


---

## replyTo

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">replyTo</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">replyTo</span>(<span style="color: #FF8000">replyTo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **replyTo** | _string_ |   |

##### Return

( _[SMTP](../../resources/smtp)_ )


---

## send

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">send</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Performs the sending of the e-mail.

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">send</span>(<span style="color: #FF8000">mail</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **mail** | _org.netuno.psamata.mail.Mail_ |   |

##### Return

( _void_ )


---

## setBcc

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setBcc</span>(<span style="color: #FF8000">bcc</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bcc** | _string_ | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setCc

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setCc</span>(<span style="color: #FF8000">cc</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cc** | _string_ | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setConfig

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setConfig</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[SMTPConfig](../../objects/SMTPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SMTPConfig](../../objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setEnabled

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setFrom

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setFrom</span>(<span style="color: #FF8000">from</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | The e-mail address of the sender. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setHTML

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setHTML</span>(<span style="color: #FF8000">html</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines the HTML of the e-mail body.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ | The HTML that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setMultipartSubtype

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setMultipartSubtype</span>(<span style="color: #FF8000">multipartSubtype</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **multipartSubtype** | _string_ | The multipart subtype. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setReplyTo

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setReplyTo</span>(<span style="color: #FF8000">replyTo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines who should be replied to the email.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **replyTo** | _string_ | The e-mail of who will receive the e-mail as a reply. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setSubject

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setSubject</span>(<span style="color: #FF8000">subject</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subject** | _string_ | The title that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setSubjectPrefix

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setSubjectPrefix</span>(<span style="color: #FF8000">subjectPrefix</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines the prefix of the e-mail title.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subjectPrefix** | _string_ | The prefix of the title that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setText

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setText</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The text that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## setTo

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">setTo</span>(<span style="color: #FF8000">to</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **to** | _string_ | The recipient's e-mail address. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## subject

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">subject</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the title of the email.

##### Return

( _string_ )

The title that will go in the e-mail.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">subject</span>(<span style="color: #FF8000">subject</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subject** | _string_ | The title that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## subjectPrefix

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">subjectPrefix</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">subjectPrefix</span>(<span style="color: #FF8000">subjectPrefix</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subjectPrefix** | _string_ |   |

##### Return

( _[SMTP](../../resources/smtp)_ )


---

## text

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">text</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the body text of the e-mail.

##### Return

( _string_ )

The text that will go in the e-mail.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">text</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The text that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## to

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">to</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the recipient's e-mail address.

##### Return

( _string_ )

The recipient's e-mail address.

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">to</span>(<span style="color: #FF8000">to</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **to** | _string_ | The recipient's e-mail address. |

##### Return

( _[SMTP](../../resources/smtp)_ )

Current SMTP object.

---

## with

---

#### <span style="font-weight: normal">_smtp</span>.<span style="color: #008000">with</span>(<span style="color: #FF8000">imap</span>: <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>) : <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **imap** | _[IMAP](../../resources/imap)_ |   |

##### Return

( _[SMTP](../../resources/smtp)_ )


---

