---
id: jwt
title: JWT Token
sidebar_label: JWT Token
---

## Introduction

JWT or Json Web Token is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

Common used when a frontend application is developed with ReactJS, Angular JS, VueJS and others.
The Backend will provide a REST API to provide dynamic data application.

Usually an API Rest will stay in a different subdomain of the website, which implies configuration of [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

This will happen because browsers can block the use of services and other types of resources at external addresses in order to prevent attacks to obtain confidential data.

## How to enable CORS in Netuno

In the user Netuno application just change the file `📂 server/core/_request_url.js`

The following code can be used:

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

Pay attention that in the above code `if` will retrench the 'Headers' according to the original address(`Origin`).

Just remember to adjust for the address you are going to use.

> In this case, all the services and addresses of your application will support CORS Headers.

#### CORS - only for Specific Services

If the user wants to increase the security level by activating the Headers only for specific services, then use the same code logic but in the file:

- `📂 server/core/_service_config.js`

Instead of the file:

- `📂 server/core/_request_url.js`

## Activation and Setup

To activate and configure JWT Token on your Netuno application will be needed to make a file edition on the configure application folder, related to user environment, see below:

- `📂 config/_development.json`
- `📂 config/_production.json`

Enter and adjust the following parameters:

```
    ...
    "auth": {
        "jwt": {
            "enabled": true,
            "secret": "ThisSecretMustContains32Chars!!!",
            "expires": {
                "access": 1440,
                "refresh": 1440
            }
        }
    },
    ...
```

In the `secret` parameter, place a complex and random character `string` as it is the key that will guarantee the security of the JWT Token encryption.

The `expires` parameters defined in minutes, as example: `60` equals 1 hour and `1440` equals one day.

### Access Groups

Additionally, the `groups` parameter can be passed, which defines the code of the User Groups that can authenticate with JWT, for example:

```
    ...
    "auth": {
        "jwt": {
            ...
            "groups": ["customer", "supplier"],
            ...
        }
    },
    ...
```

In the example above, only users who belong to the Customers group, with the group code being `customer`, or Suppliers, with the group code being `supplier`, can authenticate with JWT.

## How to obtain Token Access

To obtain Token Access, Netuno offers the service `_auth` which will validated th authentication, if Auth successful, return Access Token and Refresh Token.

This Token access can be obtained as can be seen below 👇

[How To Access Token](https://swimlanes.io/#jVNRb9MwEH73rzj1CaSmQ4B4iAZoCEZboTK2TEh7idzk2pi5drAvzTrEf+fspN0yKoFfIvu+u/vuuy+kSGMKU9sCWTgrCvQeMnuLRghx7qwhNCV8uiN0RmoNyTtYIDWGsXUthLGEqehfPLqtKpDRWDSkrEmFOOkf/UkuG6re/2jpLbkGhbjiwsqs4YtdKwOSu1xI71vrSiglSc79JSCe+Bk1PlDY4CiFUYnb0Vg8xOo+cx8Tv4+QH3JP9+S/Kx5rieA45AyW3fSR0CWuHPqqezkQ6lrKKFVOIRTa4m5eLT8X6quaz67vryeTyYAh12k0MTAMPwzEHg+Fsp8vbz7OXpv1N7rJ5k/rRFhOuzrq8AGlQzcA4F2tuGCuQrFXb16Ec1yO09MkeSwI5AtLaqUKGXaX7/URC/aG8lBb79VSY/AJxg0ji7Q7bJ0qSVBIE7TkHaC2NYspPexsA63y1RhW1nGq3NQaB9Z4dsAn0ieMTwL++ZjTqLINwdLJ4hbJCzEz3AhhmmUXMEVZoov3x8YNPVdWa9t67nLGrrNO3cehUugUg7+39f+GEec8BpN0h9GPjgtqFal1nFjArdSqBEUc7RzXqxizenAwObR8Dz8LGgrLCABmFcKsRc1yRKkDqnZ27eRmw5D2iY2PDvSPlf8B)

As an example in how to obtain Token Access from
[fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API):

```
let token = null;

yield fetch("http://localhost:9000/services/_auth", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        username: payload.username,
        password: payload.password,
        jwt: true
    })
}).then((response) => {
	if (response.status != 403) {
        raiseInvalidLogin();
        return null;
    }
    if (response.status != 200) {
    	console.log(`Autenticação falhou com o status ${response.status}`);
    	raiseRequestFailed();
        return null;
    }
    return response.json();
}).then((res) => {
    token = res;
}).catch((error)=> {
	console.log(error);
	raiseConnectionError();
});

if (token && token.result === true) {
	console.log(`Meu Acccess Token: ${token.access_token}`);
	console.log(`Meu Refresh Token: ${token.refresh_token}`);
	sessionStorage.setItem("token", JSON.stringify(token));
}
```

If you notice `token` will be stored in Session Storage so it is recommended to use the [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) instead of [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) when sensible data.

## How to manage Token Access

To run scheduled services, as they require previous authentication in Netune applications, you should pass Token Access in the HTTP protocol Header:

`Authorization: Bearer eyJhbGciOiJIUzU...`

Example of how to run a scheduled service done through the frontend using [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API):

```
const token = JSON.parse(sessionStorage.getItem("token"));

let data = null;

yield fetch("http://localhost:9000/services/meu-servico-programado-a-medida", {
    method: 'post',
    credentials: 'include',
    headers: {
        'Authorization': `${token.token_type} ${token.access_token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        meuParametro1: '...',
        meuParametro2: '...'
    })
}).then((response) => {
    if (response.status != 200) {
    	console.log(`Serviço falhou com o status ${response.status}.`);
    	raiseRequestFailed();
        return null;
    }
    return response.json();
}).then((res) => {
    data = res;
}).catch((error)=> {
	console.log(error);
	raiseConnectionError();
});

if (data === true) {
	console.log(`Dados de resposta do meu serviço:`, data);
}
```

Please Note that the HTTP Headers in the `Authorization` parameter is used as `token_type` and the `access_token` obtain by the object JWT Token stored in [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage).
