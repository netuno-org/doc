---
id: cors
title: CORS
sidebar_label: CORS
---

Configuración de CORS en la aplicación.

## Introducción

CORS (Cross Origin Resource Sharing) es un proceso de validación que los navegadores realizan para validar si pueden
integrar los recursos compartidos por otra dirección.

Se implementa cuando:

- En el desarrollo de la capa de frontend con el servidor de webpack, como el desarrollo de interfaces web
(sitio web o aplicación web) utilizando tecnologías modernas como ReactJS y VueJS.
- La dirección del frontend es diferente de la dirección de los servicios, por ejemplo, cuando los servicios se ejecutan en
la dirección `http://localhost:9000` y el frontend se ejecuta en la dirección `http://localhost:3000`.
- En producción, por ejemplo, los servicios se ejecutan en un subdominio propio `api.ejemplo.com` y el frontend en
`www.ejemplo.com`.

> Más sobre CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno está preparado para realizar la integración de CORS de forma sencilla e inmediata.

## Configuración

La configuración de CORS se realiza en el archivo de configuración de la aplicación, según el entorno.

Para ello, navegue dentro de la aplicación que está desarrollando hasta el archivo de configuración de entorno.
En este ejemplo, utilizaremos el archivo de entorno de desarrollo localizado en:

- 📂 `config/_development.json`

Compruebe si ya existen configuraciones de CORS; si no existen, añada al final del archivo de configuración (en
formato JSON) los parámetros de configuración:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> La configuración de CORS es un array y admite varias reglas de CORS distintas.

### Orígenes

El parámetro `origins` contiene la lista de direcciones del frontend que se integrará con los servicios.

### Producción

En producción tenemos que definir como orígenes las direcciones en las que el frontend funcionará online.

El archivo de configuración de la aplicación donde está la definición de `cors` deberá ser diferente según el entorno.

El archivo de configuración de la aplicación deberá ser:

- 📂 `config/_production.json`

Ejemplo de la configuración de CORS:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://mi-proyecto.com", "https://www.mi-proyecto.com" ]
        }
    ]
    ...
}
```

El archivo de configuración de la aplicación es `_production.json` según la configuración de entorno de Netuno, que
está en el archivo `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Encabezado (Header HTTP)

El encabezado estándar (Header del protocolo HTTP) es:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Para personalizar el encabezado estándar, añada el parámetro de configuración `header`, por ejemplo:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

En el ejemplo anterior, solo se aceptará en el header el `Authorization` en lugar de todos los demás que estaban definidos
por defecto.

Puede añadir nuevas definiciones en el header, así como sustituir la definición estándar.

## Manualmente

CORS también se puede configurar de forma manual, en lugar de utilizar el mecanismo automático de Netuno.

En su aplicación de Netuno basta con modificar el archivo:

- `📂 server/core/_request_url.js`

Y utilizar el siguiente código:

```javascript title="server/core/_request_url.js"
const origenCabeceraHttp = _header.getString("Origin", "null")

if (origenCabeceraHttp == 'https://www.mi-app.com'
	|| origenCabeceraHttp == 'http://localhost'
	|| origenCabeceraHttp == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", origenCabeceraHttp)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Observe que en este código anterior el `if` restringe los 'Headers' de acuerdo con la dirección de origen (`Origin`).

Recuerde ajustarlo a las direcciones que vaya a utilizar.

> De esta forma, todos los servicios y direcciones de su aplicación pasarán a admitir los Headers de CORS.

### Solo para Servicios Aislados

Si desea aumentar el nivel de seguridad activando los Headers solo para servicios específicos, utilice
esta misma lógica de código en el archivo:

- `📂 server/core/_service_config.js`

En lugar del archivo:

- `📂 server/core/_request_url.js`

## Conclusión

Cuando CORS está configurado, Netuno responderá automáticamente con el encabezado (Header del protocolo HTTP)
estándar para las direcciones configuradas como `origins`.

Los `headers` estándar se pueden personalizar y modificar.

Puede configurar diversas reglas de CORS.

Aunque Netuno admite la configuración manual de las reglas de CORS, programáticamente, es preferible utilizar el
mecanismo automático integrado en la configuración de la aplicación.