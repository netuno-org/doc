---
id: sending-emails
title: Sending Emails
sidebar_label: Sending Emails
---
## Before You Begin

Before proceeding, make sure you have basic knowledge of _**JavaScript**_ and that you already know the Netuno basics through the step-by-step guide available in the [Academy](/docs/academy/overview).

## Email Sending Demonstration

With Netuno, sending emails is very simple, whether with attachments or images embedded in the content itself (useful for signatures).

The application that comes with Netuno called **demo** (demonstration application) contains several examples of possible code implementations in various languages, including a demonstration of sending emails through the `mail-send` service located at:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration
The first step is to configure the SMTP account that Netuno will use to send emails.

To do so, navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

* `config/_development.json`

Check whether SMTP settings do not already exist; if they do not exist yet, then at the end of the configuration file (in JSON format) add the SMTP configuration parameters:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

If you are configuring for Gmail, replace only the asterisks with your credentials and enable the SMTP connection in your Gmail account settings. Otherwise, replace all parameters with those of your SMTP account.

After saving the changes, simply restart Netuno to apply the configuration changes. These are the default settings for sending emails, as indicated by the name `default`.

```json
...
    "default": {
        ...
    }
...
```

You can add more SMTP accounts, but only one can be defined as the default.

To add more SMTP accounts, simply repeat the default SMTP configuration block and replace the name `default` with another name of your choice, for example:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

A configuration similar to the example above will allow you to use the `default` account when it is called as follows in the code:

```javascript
const smtp = _smtp.init()
```

And to use the `test` configuration, simply add the configuration name as a parameter to the `_smtp.init()` function as follows:

```javascript
const smtp = _smtp.init("test")
```

> If you do not add a configuration name as a parameter, the default account will always be used.

## Detailed Code
Let's now carefully analyze the example code provided by Netuno. In this case, it is in JavaScript and is structured as follows:

SMTP initialization:

```javascript
const smtp = _smtp.init()
```

> Remember that you can initialize with another configuration, for example: `_smtp.init("test")`

By adding `.to` to the smtp variable, you define the email recipient's address; for multiple recipients, simply separate them with ';' or ',':

```javascript
smtp.to = '*****@gmail.com'
```

By adding `.from`, you define the email sender's address:

```javascript
smtp.from = '*****@gmail.com'
```

By adding `.cc`, you define the addresses of email copy recipients; for multiple copy recipients, simply separate them with ';' or ',':

```javascript
smtp.cc = '*****@gmail.com'
```

The same applies to `.bcc`, where you define recipients in blind copy:

```javascript
smtp.bcc = '*****@gmail.com'
```

By adding `.subject`, you define the email subject:

```javascript
smtp.subject = 'Netuno Test'
```

By adding `.text`, you define the content as plain text:

```javascript
smtp.text = 'Did you receive this email?'
```

By adding `.html`, you define the email content in HTML:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Did you receive this email?</p>
</div>`
```

To add an image as an attachment, add it (as shown above); in the HTML, the `cid:` (**C**ontent **ID**) prefix is set in the `src` attribute of images (`img`), followed by the `cid` defined when adding attachments with the `attachment` function (as shown below).

To add the image attached to the email, add `.attachment` to the smtp variable as follows:

```javascript
smtp.attachment(
    "logo.png", // File
    "image/png", // File format
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // File location
    "logo" // Name of the variable defined in "cid:logo"
)   
```

> Note that the `cid` (**C**ontent **ID**) is only necessary to embed images that are attached in the HTML content of the email.

To add an attachment without embedding it in the HTML (as in the case of documents), proceed as follows:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Finally, to submit the email sending, simply insert the following code:

```javascript
smtp.send()
```

Finally, if everything is configured correctly, you will receive an email similar to the following:

![email-sending1.png](/docs/assets/envio-emails1.png)

> Note that depending on your email client, it may differ from the image above.

## Complete Example with Template

Putting HTML content in the middle of the code is not very elegant, as shown above:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Did you receive this email?</p>
</div>`
```

To avoid this and keep the code cleaner and more elegant, the HTML content should be imported as a template, as follows:

`smtp.html = _template.getOutput('email/contact', data)`

In this example, the SMTP configuration in the application configuration would be as follows:

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MY.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Website Contact - ",
            "from": "noreply@MY.DOMAIN.com",
            "to": "info@MY.DOMAIN.com",
            "username": "noreply@MY.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
...
```

Notice below how it can be used in this complete service code example, which could be placed in the file `server/services/contact.js`:

```
const name = _req.getString("name")
const email = _req.getString("email")
const subject = _req.getString("subject")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = subject

smtp.text = "HTML content."

const data = _val.map()
      .set("name", name)
      .set("email", email)
      .set("subject", subject)
      .set("message", message)

smtp.html = _template.getOutput('email/contact', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("result", true)
)
```

> In the template's relative path, it is not necessary to include the `.html` extension, and note that you can optionally pass information into the template.

The template's HTML content must be defined in a separate file that must be inside the `server/templates/` folder; this path is found from the application's root folder.

Following the example shown above, the example template file will be here:

- `server/templates/email/contact.html`

The example content of this file could be:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Website Contact
    </h1>
    <p>Name: _{&data=name}</p>
    <p>Email: _{data=email}</p>
    <p>Title: _{&data=subject}</p>
    <p>_{&data=message}</p>
  </div>
</div>

```

When data is injected into the template with `_{data=...}`, the `&` is added when special-character HTML encoding should be performed, resulting in `_{&data=...}`, and after the `=` in place of `...` is the key of the content to be injected.

## Advanced Settings

The environment configurations `config/_*.json` allow many more advanced settings.

The `smtp` properties used in code such as `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text`, and `.html` can be defined in the configuration to be predefined by default as follows:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Default subject...",
        "text": "Default content... ok!",
        "html": "<p>Default content... <b>ok!</b></p>"
        ...
    }
...
```

> Predefining `.from` is quite useful, since emails are normally always sent from the same address.

Other configurations are also possible. Below is a complete list of them:

| PARAMETER    | TYPE   | DEFAULT      | DESCRIPTION    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Enables and disables email sending. |
| `debug` | boolean | false | Enables debug mode, which displays messages detailing communication with the server. |
| `protocol` | string |  | Defines the protocol type, smtp or smtps. |
| `host` | string |  | SMTP server name or IP. |
| `port` | integer | 465 | SMTP server port number. |
| `ssl` | boolean | true | Enables SSL. |
| `tls` | boolean | false | Enables TLS. |
| `socketFactoryFallback` | boolean | true | If Socket generation fails, the native java.net.Socket will be used. |
| `socketFactoryClass` | string |  | Defines a class that implements the javax.net.SocketFactory interface that will be used to generate sockets for SMTP. |
| `socketFactoryPort` | integer |  | Defines the port that should be used by the sockets. |
| `quitWait` | boolean | false | If enabled, waits for the server response after the QUIT command; if disabled, disconnects from the server immediately after the QUIT command. |
| `authMechanisms` | string |  | List of authentication mechanisms; by default it is “LOGIN PLAIN DIGEST-MD5 NTLM”, thus supporting all mechanisms. |
| `authNTLMDomain` | string |  | NTLM authentication domain. |
| `username` | string |  | Defines the user for authentication with the server. |
| `html` | string |  | HTML content of the email. |
| `password` | string |  | Defines the password for authentication with the server. |
| `from` | string |  | Email address of the sender. |
| `to` | string |  | Email address of the recipient; more emails can be added, separated by “;” or “,”. |
| `cc` | string |  | Email address of the recipient who should receive a copy; more emails can be added, separated by “;” or “,”. |
| `bcc` | string |  | Email address of the recipient who should receive a blind copy; more emails can be added, separated by “;” or “,”. |
| `subjectPrefix` | string |  | Defines a prefix for the email subject, thus ensuring that all sent emails have the prefix. |
| `subject` | string |  | Email subject. |
| `text` | string |  | Plain-text content of the email. |

If you have any questions, do not hesitate to contact us through the means presented at the end of the page.

Happy development!