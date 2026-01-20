---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Resource of sending e-mail by SMTP.

---

## attachment

---

#### _smtp.attachment(name: string, type: string, file: [File](/docs/library/objects/File)) : [SMTP](/docs/library/resources/smtp)
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[File](/docs/library/objects/File)_ | The file. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: [File](/docs/library/objects/File), contentId: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[File](/docs/library/objects/File)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: [File](/docs/library/objects/File), contentId: string, inline: boolean) : [SMTP](/docs/library/resources/smtp)
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[File](/docs/library/objects/File)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |
| **inline** | _boolean_ | Whether or not to be injected into the content. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: [Storage](/docs/library/resources/storage)) : [SMTP](/docs/library/resources/smtp)
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[Storage](/docs/library/resources/storage)_ | The file. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: [Storage](/docs/library/resources/storage), contentId: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[Storage](/docs/library/resources/storage)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: [Storage](/docs/library/resources/storage), contentId: string, inline: boolean) : [SMTP](/docs/library/resources/smtp)
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the attachment. |
| **type** | _string_ | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| **file** | _[Storage](/docs/library/resources/storage)_ | The file. |
| **contentId** | _string_ | The attachment ID to be used in HTML content as `<img src="cid:attachment"/>`. |
| **inline** | _boolean_ | Whether or not to be injected into the content. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## bcc

---

#### _smtp.bcc() : string
##### Description

Gets whoever receives a hidden copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a blind copy.

---

#### _smtp.bcc(bcc: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bcc** | _string_ | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## cc

---

#### _smtp.cc() : string
##### Description

Gets whoever receives a copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a copy.

---

#### _smtp.cc(cc: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cc** | _string_ | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## config

---

#### _smtp.config() : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Starts a new configuration of its own.

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Configuration object loaded from received data.

---

#### _smtp.config(config: [Values](/docs/library/objects/Values)) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Configuration definition data structure. |

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Configuration object loaded from received data.

---

#### _smtp.config(config: [SMTPConfig](/docs/library/objects/SMTPConfig)) : [SMTP](/docs/library/resources/smtp)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SMTPConfig](/docs/library/objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## emptyMail

---

#### _smtp.emptyMail() : org.netuno.psamata.mail.Mail
##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## enabled

---

#### _smtp.enabled() : boolean
##### Return

( _boolean_ )


---

#### _smtp.enabled(enabled: boolean) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## from

---

#### _smtp.from() : string
##### Description

Gets the sender's e-mail address.

##### Return

( _string_ )

The e-mail address of the sender.

---

#### _smtp.from(from: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | The e-mail address of the sender. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## getBcc

---

#### _smtp.getBcc() : string
##### Description

Gets whoever receives a hidden copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a blind copy.

---

## getCc

---

#### _smtp.getCc() : string
##### Description

Gets whoever receives a copy of the e-mail.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a copy.

---

## getConfig

---

#### _smtp.getConfig() : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Description

Gets the configuration that is being used.

##### Return

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Object of the active configuration.

---

## getFrom

---

#### _smtp.getFrom() : string
##### Description

Gets the sender's e-mail address.

##### Return

( _string_ )

The e-mail address of the sender.

---

## getHTML

---

#### _smtp.getHTML() : string
##### Description

Gets the HTML of the e-mail body.

##### Return

( _string_ )

The HTML that will go in the e-mail.

---

## getMultipartSubtype

---

#### _smtp.getMultipartSubtype() : string
##### Description

Gets the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Return

( _string_ )

The multipart subtype.

---

## getReplyTo

---

#### _smtp.getReplyTo() : string
##### Description

Gets who should receive the email reply.

##### Return

( _string_ )

The e-mail of who will receive the e-mail as a reply.

---

## getSubject

---

#### _smtp.getSubject() : string
##### Description

Gets the title of the email.

##### Return

( _string_ )

The title that will go in the e-mail.

---

## getSubjectPrefix

---

#### _smtp.getSubjectPrefix() : string
##### Description

Gets the prefix of the e-mail title.

##### Return

( _string_ )

The prefix of the title that will go in the e-mail.

---

## getText

---

#### _smtp.getText() : string
##### Description

Gets the body text of the e-mail.

##### Return

( _string_ )

The text that will go in the e-mail.

---

## getTo

---

#### _smtp.getTo() : string
##### Description

Gets the recipient's e-mail address.

##### Return

( _string_ )

The recipient's e-mail address.

---

## html

---

#### _smtp.html() : string
##### Return

( _string_ )


---

#### _smtp.html(html: string) : [SMTP](/docs/library/resources/smtp)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ |   |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )


---

## init

---

#### _smtp.init() : [SMTP](/docs/library/resources/smtp)
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

#### _smtp.init(configKey: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Starts a new instance of SMTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the SMTP configuration that will be used. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

The new instance of the SMTP resource based on the specified SMTP configuration.

---

#### _smtp.init(config: [SMTPConfig](/docs/library/objects/SMTPConfig)) : [SMTP](/docs/library/resources/smtp)
##### Description

Starts a new instance of SMTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SMTPConfig](/docs/library/objects/SMTPConfig)_ | Configuration that will be used. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

The new instance of the SMTP resource based on the defined configuration.

---

## isEnabled

---

#### _smtp.isEnabled() : boolean
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## mail

---

#### _smtp.mail() : org.netuno.psamata.mail.Mail
##### Return

( _org.netuno.psamata.mail.Mail_ )


---

## multipartSubtype

---

#### _smtp.multipartSubtype() : string
##### Return

( _string_ )


---

#### _smtp.multipartSubtype(html: string) : [SMTP](/docs/library/resources/smtp)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ |   |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )


---

## replyTo

---

#### _smtp.replyTo() : string
##### Return

( _string_ )


---

#### _smtp.replyTo(replyTo: string) : [SMTP](/docs/library/resources/smtp)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **replyTo** | _string_ |   |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )


---

## send

---

#### _smtp.send() : void
##### Description

Performs the sending of the e-mail.

##### Return

( _void_ )


---

#### _smtp.send(mail: org.netuno.psamata.mail.Mail) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **mail** | _org.netuno.psamata.mail.Mail_ |   |

##### Return

( _void_ )


---

## setBcc

---

#### _smtp.setBcc(bcc: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bcc** | _string_ | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setCc

---

#### _smtp.setCc(cc: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cc** | _string_ | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setConfig

---

#### _smtp.setConfig(config: [SMTPConfig](/docs/library/objects/SMTPConfig)) : [SMTP](/docs/library/resources/smtp)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SMTPConfig](/docs/library/objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setEnabled

---

#### _smtp.setEnabled(enabled: boolean) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setFrom

---

#### _smtp.setFrom(from: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | The e-mail address of the sender. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setHTML

---

#### _smtp.setHTML(html: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines the HTML of the e-mail body.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **html** | _string_ | The HTML that will go in the e-mail. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setMultipartSubtype

---

#### _smtp.setMultipartSubtype(multipartSubtype: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **multipartSubtype** | _string_ | The multipart subtype. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setReplyTo

---

#### _smtp.setReplyTo(replyTo: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines who should be replied to the email.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **replyTo** | _string_ | The e-mail of who will receive the e-mail as a reply. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setSubject

---

#### _smtp.setSubject(subject: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subject** | _string_ | The title that will go in the e-mail. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setSubjectPrefix

---

#### _smtp.setSubjectPrefix(subjectPrefix: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines the prefix of the e-mail title.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subjectPrefix** | _string_ | The prefix of the title that will go in the e-mail. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setText

---

#### _smtp.setText(text: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The text that will go in the e-mail. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## setTo

---

#### _smtp.setTo(to: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **to** | _string_ | The recipient's e-mail address. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## subject

---

#### _smtp.subject() : string
##### Description

Gets the title of the email.

##### Return

( _string_ )

The title that will go in the e-mail.

---

#### _smtp.subject(subject: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subject** | _string_ | The title that will go in the e-mail. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## subjectPrefix

---

#### _smtp.subjectPrefix() : string
##### Return

( _string_ )


---

#### _smtp.subjectPrefix(subjectPrefix: string) : [SMTP](/docs/library/resources/smtp)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subjectPrefix** | _string_ |   |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )


---

## text

---

#### _smtp.text() : string
##### Description

Gets the body text of the e-mail.

##### Return

( _string_ )

The text that will go in the e-mail.

---

#### _smtp.text(text: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The text that will go in the e-mail. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## to

---

#### _smtp.to() : string
##### Description

Gets the recipient's e-mail address.

##### Return

( _string_ )

The recipient's e-mail address.

---

#### _smtp.to(to: string) : [SMTP](/docs/library/resources/smtp)
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **to** | _string_ | The recipient's e-mail address. |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )

Current SMTP object.

---

## with

---

#### _smtp.with(imap: [IMAP](/docs/library/resources/imap)) : [SMTP](/docs/library/resources/smtp)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **imap** | _[IMAP](/docs/library/resources/imap)_ |   |

##### Return

( _[SMTP](/docs/library/resources/smtp)_ )


---

