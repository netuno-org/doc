---
id: sending-emails
title: Envío de correos electrónicos
sidebar_label: Envío de correos electrónicos
---
## Antes de empezar

Antes de proceder, asegúrese de que tiene nociones básicas de _**JavaScript**_ y de que ya tiene las nociones básicas de Netuno con el paso a paso disponible en la [Academia](/docs/academy/overview).

## Demostración del envío de correos electrónicos

Con Netuno es muy sencillo enviar correos electrónicos, ya sea con archivos adjuntos o imágenes incrustadas en el propio contenido (útil en el caso de firmas).

La aplicación que viene con Netuno denominada **demo** (aplicación de demostración) contiene bastantes ejemplos de las posibles implementaciones de código en varios lenguajes, incluida la demostración del envío de correos electrónicos mediante el servicio `mail-send` que se encuentra en:

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

## Configuración
El primer paso será configurar la cuenta SMTP que Netuno utilizará para el envío de correos electrónicos.

Para hacerlo, navegue dentro de la aplicación que está desarrollando hasta el archivo de configuración de entorno. En este ejemplo, utilizaremos el archivo de entorno de desarrollo localizado en:

* `config/_development.json`

Compruebe si ya no existen configuraciones para el SMTP; si no existen todavía, entonces al final del archivo de configuración (en formato JSON) añada los parámetros de configuración del SMTP:

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

Si está configurando para Gmail, sustituya solo los asteriscos por sus credenciales y active la conexión SMTP en la configuración de su cuenta de Gmail. En caso contrario, sustituya todos los parámetros por los de su cuenta SMTP.

Después de guardar los cambios, basta con reiniciar Netuno para que asuma los cambios de la configuración. Siendo estas las configuraciones predeterminadas para el envío de correos electrónicos, como indica el nombre `default`.

```json
...
    "default": {
        ...
    }
...
```

Puede añadir más cuentas de SMTP, pero solo una podrá definirse como predeterminada.

Para añadir más cuentas de SMTP basta con repetir el bloque de configuración del SMTP predeterminado y cambiar el nombre `default` por otro nombre a su elección, por ejemplo:

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
        "prueba": {
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

Una configuración similar al ejemplo anterior permitirá utilizar la cuenta `default` cuando se llame de la siguiente forma en el código:

```javascript
const smtp = _smtp.init()
```

Y para utilizar la configuración `prueba` basta con añadir el nombre de la configuración como parámetro a la función `_smtp.init()` de la siguiente forma:

```javascript
const smtp = _smtp.init("prueba")
```

> Si no se añade un nombre de configuración como parámetro, se utilizará siempre la cuenta predeterminada.

## Código detallado
Vamos a analizar ahora con atención el código de ejemplo que Netuno proporciona. En este caso es en JavaScript y está estructurado de la siguiente forma:

Inicialización del SMTP:

```javascript
const smtp = _smtp.init()
```

> Recuerde que puede iniciarse con otra configuración, por ejemplo: `_smtp.init("prueba")`

Añadiendo `.to` a la variable smtp se define la dirección del destinatario del correo electrónico; en el caso de múltiples destinatarios basta con separarlos por ‘;‘ o ‘,‘:

```javascript
smtp.to = '*****@gmail.com'
```

Añadiendo `.from` se define la dirección del remitente del correo electrónico:

```javascript
smtp.from = '*****@gmail.com'
```

Añadiendo `.cc` se define la dirección de los destinatarios en copia del correo electrónico; en el caso de múltiples destinatarios en copia basta con separarlos por ‘;‘ o ‘,‘:

```javascript
smtp.cc = '*****@gmail.com'
```

Lo mismo ocurre con `.bcc`, en el que se definen los destinatarios en copia pero de forma oculta:

```javascript
smtp.bcc = '*****@gmail.com'
```

Añadiendo `.subject` se define el asunto del correo electrónico:

```javascript
smtp.subject = 'Prueba de Netuno'
```

Añadiendo `.text` se define el contenido en texto plano:

```javascript
smtp.text = '¿Has recibido este correo electrónico?'
```

Añadiendo `.html` se define el contenido del correo en HTML:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
¿Has recibido este correo electrónico?</p>
</div>`
```

Para añadir una imagen como archivo adjunto se añade (como se ejemplifica arriba); en el HTML se define en las imágenes (`img`) en el atributo `src` el `cid:` (**C**ontent **ID**) como prefijo y justo después el `cid` que se define al añadir archivos adjuntos con la función `attachment` (como se ejemplifica abajo).

Para añadir la imagen adjunta al correo electrónico se añade `.attachment` a la variable smtp de la siguiente forma:

```javascript
smtp.attachment(
    "logo.png", // Archivo
    "image/png", // Formato del archivo
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Ubicación del archivo
    "logo" // Nombre de la variable definida en "cid:logo"
)   
```

> Tenga en cuenta que el `cid` (**C**ontent **ID**) solo es necesario para incrustar imágenes que están adjuntas en el contenido HTML del correo electrónico.

Para añadir un archivo adjunto sin incrustarlo en el HTML (caso de documentos) se procede de la siguiente forma:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Por último, para enviar el correo electrónico basta con insertar el siguiente código:

```javascript
smtp.send()
```

Por último, si todo está configurado correctamente, recibirá un correo electrónico similar al siguiente:

![envio-correos1.png](/docs/assets/envio-emails1.png)

> Tenga en cuenta que, según su cliente de correo electrónico, podrá diferir de la imagen anterior.

## Ejemplo completo con plantilla

Colocar contenido HTML en medio del código no es muy elegante, como se ejemplificó anteriormente:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
¿Has recibido este correo electrónico?</p>
</div>`
```

Para evitar esto y mantener el código más limpio y elegante, el contenido HTML debe importarse como una plantilla, de la siguiente forma:

`smtp.html = _template.getOutput('correo/contacto', datos)`

En este ejemplo, la configuración del SMTP en la configuración de la aplicación sería así:

```
...
    "smtp": {
        "contacto": {
            "enabled": true,
            "host": "MI.SERVIDOR.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Contacto del sitio web - ",
            "from": "noreply@MI.DOMINIO.com",
            "to": "info@MI.DOMINIO.com",
            "username": "noreply@MI.DOMINIO.com",
            "password": "S3gr3d0"
        }
    },
...
```

Observe a continuación cómo puede utilizarse en este ejemplo de código de servicio completo, que podría quedar en el archivo `server/services/contacto.js`:

```
const nombre = _req.getString("nombre")
const correo = _req.getString("correo")
const asunto = _req.getString("asunto")
const mensaje = _req.getString("mensaje")

const smtp = _smtp.init("contacto")

smtp.subject = asunto

smtp.text = "Contenido en HTML."

const datos = _val.map()
      .set("nombre", nombre)
      .set("correo", correo)
      .set("asunto", asunto)
      .set("mensaje", mensaje)

smtp.html = _template.getOutput('correo/contacto', datos)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/imagenes/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("resultado", true)
)
```

> En la ruta relativa de la plantilla no es necesario poner la extensión `.html`, y tenga en cuenta que opcionalmente es posible pasar información dentro de la plantilla.

El contenido HTML de la plantilla debe definirse dentro de un archivo aparte que debe estar dentro de la carpeta `server/templates/`; esta ruta se encuentra a partir de la carpeta raíz de la aplicación.

Siguiendo el ejemplo mostrado anteriormente, entonces el archivo de plantilla de ejemplo quedará aquí:

- `server/templates/correo/contacto.html`

El contenido de ejemplo de este archivo podrá ser:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contacto del sitio web
    </h1>
    <p>Nombre: _{&data=nombre}</p>
    <p>Correo: _{data=correo}</p>
    <p>Asunto: _{&data=asunto}</p>
    <p>_{&data=mensaje}</p>
  </div>
</div>

```

Cuando se inyectan datos en la plantilla con `_{data=...}`, el `&` se añade cuando debe realizarse la codificación de los caracteres especiales en HTML, quedando `_{&data=...}`, y a continuación del `=` en lugar de los `...` está la clave del contenido que se inyectará.

## Configuraciones avanzadas

Las configuraciones de entorno `config/_*.json` permiten muchas más configuraciones avanzadas.

Las propiedades de `smtp` utilizadas en el código como `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` y `.html`, pueden definirse en la configuración para que queden predefinidas por defecto de la siguiente forma:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Título predeterminado...",
        "text": "Contenido predeterminado... ¡ok!",
        "html": "<p>Contenido predeterminado... <b>¡ok!</b></p>"
        ...
    }
...
```

> Predefinir el .from es bastante útil, ya que normalmente el envío de correos se hace siempre desde la misma dirección.

También son posibles otras configuraciones. A continuación se muestra una lista completa de las mismas:

| PARÁMETRO    | TIPO   | PREDETERMINADO      | DESCRIPCIÓN    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Activa y desactiva el envío de correo. |
| `debug` | boolean | false | Habilita el modo debug, que mostrará mensajes que detallan la comunicación con el servidor. |
| `protocol` | string |  | Define el tipo de protocolo, smtp o smtps. |
| `host` | string |  | Nombre o IP del servidor de SMTP. |
| `port` | integer | 465 | Número del puerto del servidor SMTP. |
| `ssl` | boolean | true | Activa el SSL. |
| `tls` | boolean | false | Activa el TLS |
| `socketFactoryFallback` | boolean | true | Si falla la generación del Socket, entonces se utilizará el socket nativo java.net.Socket. |
| `socketFactoryClass` | string |  | Define una clase que implementa la interfaz javax.net.SocketFactory que se utilizará para generar los sockets para el SMTP. |
| `socketFactoryPort` | integer |  | Define el puerto que deben utilizar los sockets. |
| `quitWait` | boolean | false | Si se activa, espera la respuesta del servidor tras el comando QUIT; si se desactiva, desconecta enseguida la conexión con el servidor tras el comando QUIT. |
| `authMechanisms` | string |  | Lista de mecanismos de autenticación; por defecto es “LOGIN PLAIN DIGEST-MD5 NTLM”, así soporta todos los mecanismos. |
| `authNTLMDomain` | string |  | Dominio de autenticación de NTLM. |
| `username` | string |  | Define el usuario en la autenticación con el servidor. |
| `html` | string |  | Contenido en HTML del correo electrónico. |
| `password` | string |  | Define la contraseña en la autenticación con el servidor. |
| `from` | string |  | Dirección de correo electrónico de quien envía. |
| `to` | string |  | Dirección de correo electrónico de quien debe recibir; se pueden añadir más correos separados por “;” o “,”. |
| `cc` | strinf |  | Dirección de correo electrónico de quien debe recibir una copia; se pueden añadir más correos separados por “;” o “,”. |
| `bcc` | string |  | Dirección de correo electrónico de quien debe recibir una copia oculta; se pueden añadir más correos separados por “;” o “,”. |
| `subjectPrefix` |  | string | Define un prefijo en el asunto del correo electrónico, así garantiza que todos los correos enviados tienen el prefijo. |
| `subject` | string |  | Asunto del correo electrónico. |
| `text` | string |  | Contenido en texto del correo electrónico en texto plano. |

Si tiene alguna duda, no dude en contactarnos a través de los medios presentados al final de la página.

¡Buen desarrollo!