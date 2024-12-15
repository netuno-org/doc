---
id: cors
title: CORS
sidebar_label: CORS
---

## Introduction

In this section, we will explain what _Cross-Origin Resource Sharing_ (CORS) is, describe some common examples of cross-origin resource sharing.

CORS is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). 

However, it also provides potential for cross-domain based attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against Cross-Origin attacks such as _Cross-Site Request Forgery_ (CSRF).

When should be implemented:

- During the frontend development layer with the webpack server, such as the development of web interfaces (websites and web applications) using modern technologies such as ReactJS and VueJS.
- The frontend address is different from the services address, for example when the services run at http://localhost:9000 and the frontend runs at http://localhost:3000, or in development the services run in a subdomain api.example.com and the frontend at www.example.com.

> More about CORS:
> - <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Cross-origin resource sharing</a>
> - <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">Mozilla Developers</a>

_Netuno_ is well prepared to perform the CORS integration in a fast and simple way.

## Settings

The CORS configuration is performed in the application's settings file, according to the environment.

To do this, navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located in:

- 📂 `config/_development.json`

Check that there are no more CORS configurations, if not, add the configuration parameters at the end of the configuration file (in JSON format):

```
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

> CORS configuration is an array and supports several different rules.

##### Origins

`origins` parameter is the the address list of the frontend that will be fully integrated with our services.

## Header HTTP

The Header (HTTP protocol):

```
Access-Control-Allow-Origin: http://my-origin.localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

To customize the default header add the configuration parameter `header`, for example:

```
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

In the example above you will only accept `Authorization` in the header instead of all the others that were defined by default.

New definitions can be added into the header like, replace the standard definition.

## Configure Manually

CORS can also be configured manually, instead of using _Netuno_ automatic mechanism.

In your _Netuno_ app just change the bellow folder:

- `📂 server/core/_request_url.js`

And use the following code:

```js
var httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.my-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Note that in this code above, `if` restricts 'Headers' according to the origin address (` Origin`).

Remember to adjust for the addresses you are going to use.

> All services and addresses of your application will now support CORS Headers.

#### Apenas para Serviços Isolados

To increase the security level by activating the Headers only for specific services, then use this same code logic but in the file:

- `📂 server/core/_service_config.js`

Instead of:

- `📂 server/core/_request_url.js`

## Conclusion

When CORS is configured, _Netuno_ will automatically answer with the default header (HTTP Protocol Header) for aconfigured ddresses as `origins`.

Note that: Standard headers can be customized and changed.

Also can be configured several CORS rules.

Although _Netuno_ supports the manual configuration of the CORS rules, programmatically, it is better to use the auto-integrated mechanism in the application settings.