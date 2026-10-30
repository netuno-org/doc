---
id: cors
title: CORS
sidebar_label: CORS
---

CORS configuration in the application.

## Introduction

CORS (Cross-Origin Resource Sharing) is a validation process that browsers perform to validate whether they can integrate resources shared by another address.

It is implemented when:

- When developing the frontend layer with the webpack server, such as developing web interfaces (website or web application) using modern technologies like ReactJS and VueJS.
- The frontend address is different from the services address, for example, when services run at `http://localhost:9000` and the frontend runs at `http://localhost:3000`.
- In production, for example, services run on their own subdomain `api.example.com` and the frontend at `www.example.com`.

> More about CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno is prepared to perform CORS integration simply and immediately.

## Configuration

CORS configuration is performed in the application configuration file, depending on the environment.

To do this, navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check whether CORS configurations already exist; if not, add the configuration parameters at the end of the configuration file (in JSON format):

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

> CORS configuration is an array and supports several distinct CORS rules.

### Origins

The `origins` parameter is the list of frontend addresses that will be integrated with the services.

### Production

In production, we must define as origins the addresses where the frontend will run online.

The application configuration file where the `cors` definition is located should be different depending on the environment.

The application configuration file should be:

- 📂 `config/_production.json`

Example of CORS configuration:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://my-project.com", "https://www.my-project.com" ]
        }
    ]
    ...
}
```

The application configuration file is `_production.json` according to Netuno's environment configuration, which is in the file `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Header (HTTP Header)

The default header (HTTP protocol header) is:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

To customize the default header, add the `header` configuration parameter, for example:

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

In the example above, only `Authorization` will be accepted in the header instead of all the others that were defined by default.

You can add new definitions to the header, as well as replace the default definition.

## Manually

CORS can also be configured manually instead of using Netuno's automatic mechanism.

In your Netuno application, simply change the file:

- `📂 server/core/_request_url.js`

And use the following code:

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.my-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Note that in the code above, the `if` restricts the 'Headers' according to the origin address (`Origin`).

Remember to adjust it to the addresses you will use.

> This way, all services and addresses in your application will support CORS Headers.

### Only for Isolated Services

If you want to increase the security level by enabling Headers only for specific services, then use this same code logic in the file:

- `📂 server/core/_service_config.js`

Instead of the file:

- `📂 server/core/_request_url.js`

## Conclusion

When CORS is configured, Netuno will automatically respond with the default header (HTTP protocol header) for the addresses configured as `origins`.

The default `headers` can be customized and changed.

You can configure several CORS rules.

Although Netuno supports manual configuration of CORS rules programmatically, it is preferable to use the automatic mechanism integrated into the application configuration.