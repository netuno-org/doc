---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Feature of sending e-mail by SMTP.

---

## attachment

---

#### _smtp.attachment(name: string, type: string, file: _[File](../../objects/File)_) : _[SMTP](../../resources/SMTP)_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[File](../../objects/File)_ | The file. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[File](../../objects/File)_, contentId: string) : _[SMTP](../../resources/SMTP)_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[File](../../objects/File)_ | The file. |
| contentId | string | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[File](../../objects/File)_, contentId: string, inline: _boolean_) : _[SMTP](../../resources/SMTP)_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[File](../../objects/File)_ | The file. |
| contentId | string | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |
| inline | _boolean_ | Whether or not to be injected into the content. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[Storage](../../resources/Storage)_) : _[SMTP](../../resources/SMTP)_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[Storage](../../resources/Storage)_ | The file. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[Storage](../../resources/Storage)_, contentId: string) : _[SMTP](../../resources/SMTP)_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[Storage](../../resources/Storage)_ | The file. |
| contentId | string | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[Storage](../../resources/Storage)_, contentId: string, inline: _boolean_) : _[SMTP](../../resources/SMTP)_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[Storage](../../resources/Storage)_ | The file. |
| contentId | string | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |
| inline | _boolean_ | Whether or not to be injected into the content. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## bcc

---

#### _smtp.bcc() : string
##### Description

Gets whoever receives a hidden copy of the e-mail.

##### Return

( string )

The e-mail of who will receive the e-mail as a blind copy.

---

#### _smtp.bcc(bcc: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bcc | string | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## cc

---

#### _smtp.cc() : string
##### Description

Gets whoever receives a copy of the e-mail.

##### Return

( string )

The e-mail of who will receive the e-mail as a copy.

---

#### _smtp.cc(cc: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cc | string | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## config

---

#### _smtp.config() : _[SMTPConfig](../../objects/SMTPConfig)_
##### Description

Starts a new configuration of its own.

##### Return

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Configuration object loaded from received data.

---

#### _smtp.config(config: _[Values](../../objects/Values)_) : _[SMTPConfig](../../objects/SMTPConfig)_
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Configuration object loaded from received data.

---

#### _smtp.config(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _[SMTP](../../resources/SMTP)_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## emptyMail

---

#### _smtp.emptyMail() : _org.netuno.psamata.mail.Mail_
##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## enabled

---

#### _smtp.enabled() : _boolean_
##### Return

( _boolean_ )


---

#### _smtp.enabled(enabled: _boolean_) : _[SMTP](../../resources/SMTP)_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## from

---

#### _smtp.from() : string
##### Description

Gets the sender's e-mail address.

##### Return

( string )

The e-mail address of the sender.

---

#### _smtp.from(from: string) : _[SMTP](../../resources/SMTP)_
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| from | string | The e-mail address of the sender. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## getBcc

---

#### _smtp.getBcc() : string
##### Description

Gets whoever receives a hidden copy of the e-mail.

##### Return

( string )

The e-mail of who will receive the e-mail as a blind copy.

---

## getCc

---

#### _smtp.getCc() : string
##### Description

Gets whoever receives a copy of the e-mail.

##### Return

( string )

The e-mail of who will receive the e-mail as a copy.

---

## getConfig

---

#### _smtp.getConfig() : _[SMTPConfig](../../objects/SMTPConfig)_
##### Description

Gets the configuration that is being used.

##### Return

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Object of the active configuration.

---

## getFrom

---

#### _smtp.getFrom() : string
##### Description

Gets the sender's e-mail address.

##### Return

( string )

The e-mail address of the sender.

---

## getHTML

---

#### _smtp.getHTML() : string
##### Description

Gets the HTML of the e-mail body.

##### Return

( string )

The HTML that will go in the e-mail.

---

## getMultipartSubtype

---

#### _smtp.getMultipartSubtype() : string
##### Description

Gets the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Return

( string )

The multipart subtype.

---

## getReplyTo

---

#### _smtp.getReplyTo() : string
##### Description

Gets who should receive the email reply.

##### Return

( string )

The e-mail of who will receive the e-mail as a reply.

---

## getSubject

---

#### _smtp.getSubject() : string
##### Description

Gets the title of the email.

##### Return

( string )

The title that will go in the e-mail.

---

## getSubjectPrefix

---

#### _smtp.getSubjectPrefix() : string
##### Description

Gets the prefix of the e-mail title.

##### Return

( string )

The prefix of the title that will go in the e-mail.

---

## getText

---

#### _smtp.getText() : string
##### Description

Gets the body text of the e-mail.

##### Return

( string )

The text that will go in the e-mail.

---

## getTo

---

#### _smtp.getTo() : string
##### Description

Gets the recipient's e-mail address.

##### Return

( string )

The recipient's e-mail address.

---

## html

---

#### _smtp.html() : string
##### Return

( string )


---

#### _smtp.html(arg0: string) : _[SMTP](../../resources/SMTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[SMTP](../../resources/SMTP)_ )


---

## init

---

#### _smtp.init() : _[SMTP](../../resources/SMTP)_
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _[SMTP](../../resources/SMTP)_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

#### _smtp.init(configKey: string) : _[SMTP](../../resources/SMTP)_
##### Description

Starts a new instance of SMTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the SMTP configuration that will be used. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

The new instance of the SMTP resource based on the specified SMTP configuration.

---

#### _smtp.init(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _[SMTP](../../resources/SMTP)_
##### Description

Starts a new instance of SMTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Configuration that will be used. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

The new instance of the SMTP resource based on the defined configuration.

---

## isEnabled

---

#### _smtp.isEnabled() : _boolean_
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### _smtp.mail() : _org.netuno.psamata.mail.Mail_
##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## multipartSubtype

---

#### _smtp.multipartSubtype() : string
##### Return

( string )


---

#### _smtp.multipartSubtype(arg0: string) : _[SMTP](../../resources/SMTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[SMTP](../../resources/SMTP)_ )


---

## replyTo

---

#### _smtp.replyTo() : string
##### Return

( string )


---

#### _smtp.replyTo(arg0: string) : _[SMTP](../../resources/SMTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[SMTP](../../resources/SMTP)_ )


---

## send

---

#### _smtp.send() : _void_
##### Description

Performs the sending of the e-mail.

##### Return

( _void_ )


---

#### _smtp.send(arg0: _org.netuno.psamata.mail.Mail_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.psamata.mail.Mail_ |   |

##### Return

( _void_ )


---

## setBcc

---

#### _smtp.setBcc(bcc: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bcc | string | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setCc

---

#### _smtp.setCc(cc: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cc | string | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setConfig

---

#### _smtp.setConfig(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _[SMTP](../../resources/SMTP)_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setEnabled

---

#### _smtp.setEnabled(enabled: _boolean_) : _[SMTP](../../resources/SMTP)_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setFrom

---

#### _smtp.setFrom(from: string) : _[SMTP](../../resources/SMTP)_
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| from | string | The e-mail address of the sender. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setHTML

---

#### _smtp.setHTML(html: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines the HTML of the e-mail body.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| html | string | The HTML that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setMultipartSubtype

---

#### _smtp.setMultipartSubtype(multipartSubtype: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| multipartSubtype | string | The multipart subtype. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setReplyTo

---

#### _smtp.setReplyTo(replyTo: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines who should be replied to the email.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| replyTo | string | The e-mail of who will receive the e-mail as a reply. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setSubject

---

#### _smtp.setSubject(subject: string) : _[SMTP](../../resources/SMTP)_
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| subject | string | The title that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setSubjectPrefix

---

#### _smtp.setSubjectPrefix(subjectPrefix: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines the prefix of the e-mail title.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| subjectPrefix | string | The prefix of the title that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setText

---

#### _smtp.setText(text: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | The text that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## setTo

---

#### _smtp.setTo(to: string) : _[SMTP](../../resources/SMTP)_
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| to | string | The recipient's e-mail address. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## subject

---

#### _smtp.subject() : string
##### Description

Gets the title of the email.

##### Return

( string )

The title that will go in the e-mail.

---

#### _smtp.subject(subject: string) : _[SMTP](../../resources/SMTP)_
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| subject | string | The title that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## subjectPrefix

---

#### _smtp.subjectPrefix() : string
##### Return

( string )


---

#### _smtp.subjectPrefix(arg0: string) : _[SMTP](../../resources/SMTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[SMTP](../../resources/SMTP)_ )


---

## text

---

#### _smtp.text() : string
##### Description

Gets the body text of the e-mail.

##### Return

( string )

The text that will go in the e-mail.

---

#### _smtp.text(text: string) : _[SMTP](../../resources/SMTP)_
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | The text that will go in the e-mail. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## to

---

#### _smtp.to() : string
##### Description

Gets the recipient's e-mail address.

##### Return

( string )

The recipient's e-mail address.

---

#### _smtp.to(to: string) : _[SMTP](../../resources/SMTP)_
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| to | string | The recipient's e-mail address. |

##### Return

( _[SMTP](../../resources/SMTP)_ )

Current SMTP object.

---

## with

---

#### _smtp.with(arg0: _[IMAP](../../resources/IMAP)_) : _[SMTP](../../resources/SMTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[IMAP](../../resources/IMAP)_ |   |

##### Return

( _[SMTP](../../resources/SMTP)_ )


---

