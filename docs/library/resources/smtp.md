---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Feature of sending e-mail by SMTP.

---

## attachment

---

#### _smtp.attachment(name: string, type: string, file: _[File](../../objects/File)_) : _SMTP_
##### Description

Add attachment file to e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | The name of the attachment. |
| type | string | The content type of the attachment, for example image/png, text/html, application/zip, and many others... |
| file | _[File](../../objects/File)_ | The file. |

##### Return

( _SMTP_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[File](../../objects/File)_, contentId: string) : _SMTP_
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

( _SMTP_ )

Current SMTP object.

---

#### _smtp.attachment(name: string, type: string, file: _[File](../../objects/File)_, contentId: string, inline: _boolean_) : _SMTP_
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

( _SMTP_ )

Current SMTP object.

---

## config

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

## init

---

#### _smtp.init() : _SMTP_
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _SMTP_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

#### _smtp.init(configKey: string) : _SMTP_
##### Description

Starts a new instance of SMTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the SMTP configuration that will be used. |

##### Return

( _SMTP_ )

The new instance of the SMTP resource based on the specified SMTP configuration.

---

#### _smtp.init(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _SMTP_
##### Description

Starts a new instance of SMTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Configuration that will be used. |

##### Return

( _SMTP_ )

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

## send

---

#### _smtp.send() : _void_
##### Description

Performs the sending of the e-mail.

##### Return

( _void_ )


---

## setBcc

---

#### _smtp.setBcc(bcc: string) : _SMTP_
##### Description

Defines who receives a hidden copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bcc | string | The e-mail of who will receive the e-mail as a blind copy. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setCc

---

#### _smtp.setCc(cc: string) : _SMTP_
##### Description

Defines who receives a copy of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cc | string | The e-mail of who will receive the e-mail as a copy. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setConfig

---

#### _smtp.setConfig(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _SMTP_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Definition of the new configuration. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setEnabled

---

#### _smtp.setEnabled(enabled: _boolean_) : _SMTP_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setFrom

---

#### _smtp.setFrom(from: string) : _SMTP_
##### Description

Sets the sender's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| from | string | The e-mail address of the sender. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setHTML

---

#### _smtp.setHTML(html: string) : _SMTP_
##### Description

Defines the HTML of the e-mail body.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| html | string | The HTML that will go in the e-mail. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setMultipartSubtype

---

#### _smtp.setMultipartSubtype(multipartSubtype: string) : _SMTP_
##### Description

Defines the multipart subtype such as `mixed`,` alternative`, `digest` and` parallel`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| multipartSubtype | string | The multipart subtype. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setSubject

---

#### _smtp.setSubject(subject: string) : _SMTP_
##### Description

Sets the title of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| subject | string | The title that will go in the e-mail. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setSubjectPrefix

---

#### _smtp.setSubjectPrefix(subjectPrefix: string) : _SMTP_
##### Description

Defines the prefix of the e-mail title.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| subjectPrefix | string | The prefix of the title that will go in the e-mail. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setText

---

#### _smtp.setText(text: string) : _SMTP_
##### Description

Defines the body text of the e-mail.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | The text that will go in the e-mail. |

##### Return

( _SMTP_ )

Current SMTP object.

---

## setTo

---

#### _smtp.setTo(to: string) : _SMTP_
##### Description

Sets the recipient's e-mail address.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| to | string | The recipient's e-mail address. |

##### Return

( _SMTP_ )

Current SMTP object.

---

