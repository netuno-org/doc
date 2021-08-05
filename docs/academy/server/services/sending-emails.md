---
id: sending-emails
title: Sending Emails
sidebar_label: Sending Emails
---
## Before we begin
Before proceeding make sure you have the basics in _**JavaScript**_ and that you already have the Netuno basics with the step-by-step available at [Academy](/docs/en/academy/overview/).

## Sending emails with Netuno

With Netuno it is quite simple to send emails, either with attachments or images embedded in the content itself (useful in the case of signatures).

The application that comes with Netuno denominated **demo** (demonstration application) contains many examples of possible code implementations in various languages, including the demonstration of sending e-mails through the service `mail-send` that is located in:

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
The first step will be to configure the SMTP account that Netuno will use for sending emails.

To do so, navigate within the application you are developing to the environment configuration file. In this example we will use the development environment file located at:

* `config/_development.json`

At the end of the configuration file (in JSON format) add the SMTP configuration parameters:

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

If you're setting up for Gmail, just replace the asterisks with your credentials and enable the SMTP connection in your Gmail account settings. Otherwise, replace all parameters with your SMTP account settings.

After saving the changes, simply restart Netuno to assume the configuration changes. These are the default settings for sending emails as indicated by the name `default`.

```json
...
    "default": {
        ...
    }
...
```

You can add more SMTP accounts, but only one can be set as default.

To add more SMTP accounts just repeat the default SMTP configuration block and change the `default` name to another name of your choice, for example:

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

A configuration similar to the example above will allow you to use the `default` account when it is called in the code as follows:

```javascript
var smtp = _smtp.init()
```

And to use the `test` configuration just add the name of the configuration as a parameter to the `_smtp.init()` function as follows:

```javascript
var smtp = _smtp.init("test")
```

> If you do not add a configuration name as parameter, the default account will always be used.

## Detailed Code
Let's now take a closer look at the example code provided by Netuno. In this case it is in JavaScript and is structured as follows:

SMTP Initialization:

```javascript
var smtp = _smtp.init()
```

> Remember you can start with another configuration, for example: `_smtp.init("test")`

By adding `.to` to the smtp variable the email recipient's address is set, in case of multiple recipients just separate by `;` or `,`:

```javascript
smtp.to = '*****@gmail.com'
```

By adding `.from` you set the email's sender address:

```javascript
smtp.from = '*****@gmail.com'
```

By adding `.cc` you set the address of recipients in copy of the email, in case of multiple recipients in copy just separate them with `;` or `,`:

```javascript
smtp.cc = '*****@gmail.com'
```

The same is valid for `.bcc` where you define the recipients in copy but in a hidden way:

```javascript
smtp.bcc = '*****@gmail.com'
```

By adding `.subject` defines the subject of the email:

```javascript
smtp.subject = 'Test from Netuno'
```

Adding `.text` defines the content in plain text:

```javascript
smtp.text = 'Did you receive this email?'
```

By adding `.html` you define the email's HTML content:

```javascript
smtp.html = '<div>'
smtp.html += '<img src="cid:logo" width="200" />'
smtp.html += '<p>Did you receive this email?</p>'
smtp.html += '</div>'
```

To add an image as an attachment you add (as exemplified above), in the HTML you set on the images (`img`) in the `src` attribute the `cid:` (**C**ontent **ID**) as a prefix and then the `cid` which is set when adding attachments with the `attachment` function (as exemplified below).

To add the attached image to the email add `.attachment` to the smtp variable as shown below:

```javascript
smtp.attachment(
    "logo.png", // File
    "image/png", // File format
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // File location
    "logo" // Variable name defined in .cid:
)   
```

> Note that `cid` (**C**ontent **ID**) is only necessary for embedding images in the HTML content of the email.

To add an attachment without being embedded in the HTML (in the case of documents), proceed as below:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

To submit the email just enter the following code:

```javascript
smtp.send()
```

Finally, if everything has been set up correctly, you will receive an email similar to the following:

![envio-emails1.png](assets/envio-emails1.png)

> Note that depending on your email client it may differ from the image above.

## Full Example with Template

Putting HTML content in the middle of code is not very elegant, as exemplified above:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Did you receive this email?</p>
</div>`
```

To avoid this and keep the code cleaner and more elegant, the HTML content should be imported as a template, in the following way:

`smtp.html = _template.getOutput('email/contact', data)`

In this example the SMTP configuration in the application configuration, would look like this:

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MY.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Contact Website - ",
            "from": "noreply@MY.DOMAIN.com",
            "to": "info@MY.DOMAIN.com",
            "username": "noreply@MY.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
...
```

Notice below how it can be used in this example of a full service code, which may be in the file `server/services/contact.js`:

```
const name = _req.getString("name")
const email = _req.getString("email")
const subject = _req.getString("subject")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = subject

smtp.text = "Content in HTML."

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

> In the relative path to the template it is not necessary to put the `.html` extension, and note that you can optionally pass information into the template.

The HTML content of the template should be defined within a separate file which should be in the `server/templates/` folder, this path is found from the application root folder.

Following the example shown above, then the example template file will be here:

- `server/templates/email/contact.html`

The example content of the file could be:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contact Website
    </h1>
    <p>Name: _{&data=name}</p>
    <p>Email: _{data=email}</p>
    <p>Title: _{&data=subject}</p>
    <p>_{&data=message}</p>
  </div>
</div>

```

When data is injected into the template with `_{data=...}` the `&` is added when the special HTML character encoding is to be performed, becoming `_{&data=...}`, and following the `=` in place of the `...` is the key of the content that will be injected.

## Advanced Configurations

The `config/_*.json` environment settings allow for many more advanced configurations.

The `smtp` properties used in code such as `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text`, and `.html` can be predefined by default as follows:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Default Title...",
        "text": "Default content... ok!",
        "html": "<p>Default content... <b>ok!</b></p>"
        ...
    }
...
```

> Pre-defining .from is very useful since emails are usually sent from the same address.

Other settings are also available. A complete list of these is given below:

| PARAMETER    | TYPE   | STANDARD      | DESCRIPTION    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Activates and deactivates the sending of emails. |
| `debug` | boolean | false | Enables debug mode, which will display messages detailing the communication with the server. |
| `protocol` | string |  | Defines the type of protocol, smtp or smtps. |
| `host` | string |  | Name or IP of the SMTP server. |
| `port` | integer | 465 | SMTP server port number. |
| `ssl` | boolean | true | Enables SSL. |
| `tls` | boolean | false | Enables TLS |
| `socketFactoryFallback` | boolean | true | If the Socket generation fails then the native java.net.Socket socket will be used. |
| `socketFactoryClass` | string |  | Defines a class that implements the javax.net.SocketFactory interface that will be used to generate the socket for the SMTP. |
| `socketFactoryPort` | integer |  | Defines the port to be used by the sockets. |
| `quitWait` | boolean | false | If activated, it waits for the server's response after the QUIT command, and if deactivated, it immediately disconnects the connection to the server after the QUIT command. |
| `authMechanisms` | string |  | Authentication mechanism list, by default is "LOGIN PLAIN DIGEST-MD5 NTLM", so it supports all mechanisms. |
| `authNTLMDomain` | string |  | NTLM authentication domain. |
| `username` | string |  | Defines the user in the server authentication. |
| `html` | string |  | Email's HTML content.|
| `password` | string |  | Sets the password in the server authentication. |
| `from` | string |  | Sender's email address. |
| `to` | string |  | E-mail address of who should receive, more mails can be added separated by ";" or ",". |
| `cc` | strinf |  | E-mail address from whom you should receive a copy, more mails can be added separated by ";" or ",". |
| `bcc` | string |  | E-mail address of those who should receive a hidden copy, more mails may be added separated by ";" or ",". |
| `subjectPrefix` |  | string | Sets a prefix to the title of the email, thus ensuring that all emails sent have the prefix. |
| `subject` | string |  | E-mail subject. |
| `text` | string |  | E-mail text content in plain text. |

If you have any questions, please do not hesitate to contact us through the means presented at the bottom of the page.

Good development!
