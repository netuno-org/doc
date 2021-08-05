---
id: jwt
title: JWT Token
sidebar_label: JWT Token
---

## Introdução

O JWT (Json Web Token) é um padrão para garantir a segurança e contexto da autenticação em aplicações web onde a frontend se encontra desacoplado da backend.

É comum ser utilizado quando a frontend de uma aplicação web é desenvolvida em ReactJS, AngularJS, VueJS, etc... e a backend proporciona uma API REST para fornecer os dados dinâmicos da aplicação.

A API REST da backend permite aos serviços privados obterem o contexto de autenticação associado ao utilizador autenticado através do JWT Token.

<iframe frameborder="0" style="width:100%;height:300px;" src="https://www.draw.io/?lightbox=1&highlight=000000&layers=1&nav=1&title=introducao-overview.drawio#R7VhZj9s2EP41epQhi7720cc6RZC2i26apE8FLY5kdilRpSgf%2BfUdStRl2Vln4wQLpAusTQ5nhsd883FohyzjwxtF0%2B2vkoFwfI8dHLJyfH9IJjP8MpJjKRlPR6UgUpxZpUbwyD%2BDFXpWmnMGWUdRSyk0T7vCQCYJBLojo0rJfVctlKI7a0oj6AkeAyr60o%2Bc6a3dhe818l%2BAR1s7s%2B%2FZgZhWulaQbSmT%2B5aI3DtkqaTUZSs%2BLEGYs6uOpbRbXxit16Ug0dcYeNH0w%2B%2FjWAP709WrKdGz%2B9i1scj0sdovMNy%2B7UqltzKSCRX3jXShZJ4wMF497DU676RMUThE4T%2Bg9dHGkuZaomirY2FH4cD1p1b7L%2BNq4I9td3WwrovOseokWh0%2FtTttM9Nv7IpeZZhpJZ%2Fq2OGxL0IuxFIKqYodEzaGGRvVmq2Rmb8hkwmOlKdkjubi4VtRJnMVwBdOvMIwVRHoL%2BiRGiKYWiBjwD2hnQJBNd9110EtxqNar8EBNiwUvgIW49LvjorczvRAFUWJzMweQe24syTOfFr0HX8icCuLDTYi03gwg4v5RvDAKJSjuJBaoW2kKmFSuCTSDJrWHTZyzQX%2FjIlj5sb%2Ftx%2Ff4%2Bd7DFMy6EFXw0F3kUYFjxJsBxgmwKAudqA0x%2BSe24GYM1aCGjKcZ1O4MqhJJU90cazjhTNeoUTQDYgFDZ6iIgFaMAmLvxomZg44OGfIyfpvOKGTvRfzs48C690bDD3fpvDVwLDeHswGG1cusSbHk37lQoZhhoA9RVa9qJeDbfp6OGj6Mg6afjMHhbMAguAcB21m49HY%2Bwk5aHaJg56nH8V3SBnXM09NN3KjeER1QV9E8YJ1NoY5SvbpW7b4yMRCwY7T2JBNw10948qWBgFk2d%2B6ND67VJycM%2FlTMN30Oaa7G58wlH8b4ht13RLyo3hv2AN4hYJQFitsAj75N5fVgJsVnDZHheE4PTSDDW5OgLZWaAYJOw%2ByWlbOeuJDPS%2Bxqw1p0F3sEmmIF7nzG%2ByvWOZ%2Bvx%2FEPNlSl6bpIJDx5SlftIMVZJDspNjxopwA9O%2F9ATTQbx8dH0PozZMoF1RV3Q85VE3QwWDQT8P9lmt4TMuN7%2FH9c5KTWVq%2BSEJ%2BMHdVr%2FCkMAvPkv4kmMEm7NxzxmEkaJZVV0r1nDAdPCwe2PbF1OzdFBezrXp72ZTwbTm4b94%2Fw5FV2bbePrXw5ncB%2BfZUmVyVKob1Xn%2Bm0JT%2FyEzBCWRfaZ5ieU%2FLe7ip3BNZ7ELnyRmTYqX9%2B9s0PfNkBsYZvXmahSFMztdWbHq38bxemt0gg8j0taXQ8Nx1c3LQyCmpafK4%2BFGkfcin5YQ2dXYtfWcqhgeZcc2lGd1IrTHWV5USxWTzKobeuYDa9ay2WptffebmJPx1wJLRAF%2BYScgxeKrMgzWjGovEtZFnBvw044Gbc9d3BU%2BwLFsTc5ApZUIGT26etL6AuTKFxKU7yoWpYNyhPxukSXQLQPiz5wBRabTxUMluDwf%2Ffzj04VB%2FIBRS84rQ4G45%2B55AGJI%2BEsgZZiBfTwzYbX5eLKvW5jdacv8f"></iframe>

Normalmente a API Rest fica num subdomínio diferente do website, o que implica configurações de [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS).

Isto acontece porque os browsers bloqueiam a utilização de serviços e outros tipos de recursos em endereços externos com o objetivo de evitar ataques de obtenção de dados confidenciais.

## Ativar o CORS no Netuno

Na sua aplicação do Netuno basta alterar o ficheiro `📂 server/core/_request_url.js`

E utilizar o seguinte código:

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

Repare que neste código acima o `if` restringe os 'Headers' de acordo com o endereço de origem (`Origin`).

Lembre-se de ajustar para os endereços que vai utilizar.

> Desta forma todos os serviços e endereços da sua aplicação passam a suportar os Headers de CORS.

#### CORS apenas para Serviços Isolados

Se pretender aumentar o nível de segurança ativando os Headers apenas para serviços específicos, então utilize esta mesma lógica de código mas no ficheiro:

- `📂 server/core/_service_config.js`

Em vez do ficheiro:

- `📂 server/core/_request_url.js`

## Ativação e Configuração

Para ativar e configurar o JWT Token na sua aplicação no Netuno é preciso editar o ficheiro de configuração da aplicação referente ao ambiente que está a utilizar, como:

- `📂 config/_development.json`
- `📂 config/_production.json`

Insira e ajuste os seguintes parâmetros:

```
    ...
    "jwt": {
        "enabled": true,
        "secret": "@MyComp1exSecr3t",
        "access_expires": 60,
        "refresh_expires": 1440,
        "algorithm": "HS512"
    },
    ...
```

No parâmetro `secret` coloque uma sequência de caracteres complexa e aleatória visto ser a chave que vai garantir a segurança da encriptação do JWT Token.

Os parâmetros de `expires` são definidos em minutos, por exemplo: `60` equivale a 1 hora e `1440` a um dia.

No `algorithm` são suportados os seguintes mecanismos:

- [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) com [SHA-2](https://en.wikipedia.org/wiki/SHA-2): `ES256`, `ES384` ou `ES512`
- [HMAC](https://en.wikipedia.org/wiki/HMAC) com [SHA-2](https://en.wikipedia.org/wiki/SHA-2): `HS256`, `HS384` ou `HS512`
- [RSASSA-PSS](https://en.wikipedia.org/wiki/Probabilistic_signature_scheme) com [SHA-2](https://en.wikipedia.org/wiki/SHA-2): `PS256`, `PS384` ou `PS512`
- [RSASSA-PKCS1](https://en.wikipedia.org/wiki/PKCS_1) com [SHA-2](https://en.wikipedia.org/wiki/SHA-2): `RS256`, `RS384` ou `RS512`

## Como Obter o Access Token

Para obter o Access Token o Netuno fornece o serviço `_auth` que valida a autenticação e, se a mesma for bem sucedida, devolve o Access Token e o Refresh Token.

O Access Token é obtido da seguinte forma:

<script>window.addEventListener("message", function(e) {var i = e.data.split(":")[1];var h = e.data.split(":")[2];if (e.data.split(":")[0] == "swimlanes-io" && i && h) {document.getElementById("__sw-io-" + i).setAttribute("style","height:" + h + "px");}}, false);</script><div id="__sw-io-lVPwE"><iframe style="border:none; width:100%; height:100%" scrolling="no" src="https://cdn.swimlanes.io/dist/embeded.html#lVPLbtNAFN3PV1xlXacVIBaRAAURaLOAgNxNN/Zg3zoD9lxnHm5axAfwF3SFWPAV/rHeGcdNKIsKLyzPfc055x5rcjgDsdhi4Z0EAoumU/0vgpLgPTqvaSZEfhzDBdrjTHq3fvXlyr1wxmMuxEJ3SmquJgulLMMboaZKafBO1eqGYwYQWmntFZlyJvI8F98E8DPxPFfLBiczmJTYTY6G8Fg7hsX32PTWkHaoS1hsHfcRJC93GGHetkxD6Ein/wEGHfHkAAuylL6izhgDf3/CS4N2DUPsLzCyYII2cyETbsbr5frzu0J9UMuz85vz6XQ64uMJvnZcEzS4j8XB+/Z08+TizdkzXX10F+nyoDtWZO66jbRfozRoxhxuW8VjMhVGPH1+Ep4de7GnCgkzf6jGPX8xr8hI6H9DS9b2fzqsAYcFG9h4WW88moNFo0XdUd0pVqv/CQ2WqpRHUFBDPMGE3qatH/igQZ8MB0paQ5WRDaudyGRoZ7grXuJgDMjmUdqd6MAkTlGWDIKzp2m6YuMwnsorJgSXZBoZLmPOczYbGfaQU6RnMGgF/y7mv+yxkiY43aF/TATOc2FEHWBB19/WoYDb+ttRUz5HqWLtoeWtUx2zRuBfBrVTRSjFXfOhQcm71jteTSCvYC/n9PGl3wE=#lVPwE"></iframe></div>

Exemplo de como obter o Access Token através do [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API):

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

Repare que o `token` ficará guardado na Session Storage portanto é preferível utilizar a [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) em vez do [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) quando se tratar de informação sensível.

## Como Utilizar o Access Token

Para executar serviços programados à medida que exijam autenticação prévia em aplicações Netuno, deverá passar o Access Token no Header do protocolo HTTP:

`Authorization: Bearer eyJhbGciOiJIUzU...`

Exemplo de como executar um serviço programado à medida através da frontend utilizando o [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API):

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

Repare que, nos Headers do HTTP, no parâmetro `Authorization` é utilizado o `token_type` e o `access_token` obtidos do objeto JWT Token guardado na [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage).
