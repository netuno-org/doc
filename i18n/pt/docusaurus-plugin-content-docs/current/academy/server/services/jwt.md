---
id: jwt
title: JWT - JSON Web Token
sidebar_label: JWT - JSON Web Token
---

## Introdução

O JWT (Json Web Token) é um padrão para garantir a segurança e contexto da autenticação em aplicações web, onde o frontend se encontra desacoplado do backend.

É comum ser utilizado quando o frontend de uma aplicação web é desenvolvida em ReactJS, AngularJS, VueJS, etc... e o backend proporciona uma API REST para fornecer os dados dinâmicos da aplicação.

A API REST do backend permite aos serviços privados obterem o contexto de autenticação associado ao utilizador autenticado através do JWT Token.

![jwt-flow](/docs/assets/academy/server/services/jwt/flow-pt.png)

Normalmente a API REST fica num subdomínio diferente do website, o que implica configurações de [CORS (Cross-Origin Resource Sharing)](cors).

Isto acontece devido aos browsers bloquearem a utilização de serviços e outros tipos de recursos em endereços externos, com o objetivo de evitar ataques de obtenção de dados confidenciais.

## Ativação e Configuração

Para ativar e configurar o JWT Token na sua aplicação no Netuno é necessário editar o ficheiro de configuração da aplicação referente ao ambiente que está a utilizar, como:

- `📂 config/_development.json`
- `📂 config/_production.json`

Insira e ajuste os seguintes parâmetros:

```
    ...
    "auth": {
        "jwt": {
            "enabled": true,
            "secret": "SegredoTemQueTer32Characteres!!!",
            "expires": {
                "access": 1440,
                "refresh": 1440
            }
        }
    },
    ...
```

No parâmetro `secret` coloque uma sequência de caracteres complexa e aleatória, visto ser a chave que vai garantir a segurança da encriptação do JWT Token.

Os parâmetros de `expires` são definidos em minutos, por exemplo: `60` equivale a 1 hora e `1440` a um dia.

### Acesso Restrito à Grupos

Adicionalmente pode ser passado o parâmetro `groups`, que define o código dos Grupos de utilizadores que podem autenticar com JWT, por exemplo:

```
    ...
    "auth": {
        "jwt": {
            ...
            "groups": ["cliente", "fornecedor"],
            ...
        }
    },
    ...
```

No exemplo acima, apenas os utilizadores que pertendem ao grupo dos Clientes, sendo o código do grupo `cliente`, ou dos Fornecedores, sendo o código do grupo `fornecedor`, apenas estes podem autenticar com JWT. 

## Como Obter o Access Token

Para obter o Access Token o Netuno fornece o serviço `_auth` que valida a autenticação e, se a mesma for bem sucedida, devolve o Access Token e o Refresh Token.

O Access Token é obtido da seguinte forma:

<script dangerouslySetInnerHTML={{ __html: `alert('a');window.addEventListener("message", function(e) {debugger;var i = e.data.split(":")[1];var h = e.data.split(":")[2];if (e.data.split(":")[0] == "swimlanes-io" && i && h) {document.getElementById("__sw-io-" + i).setAttribute("style","height:" + h + "px");}}, false);`}}></script>
<div id="__sw-io-lVPwE">
    <iframe style={{border:'none', width:'100%', height:'100%'}} scrolling="no" src="https://cdn.swimlanes.io/dist/embeded.html#lVPLbtNAFN3PV1xlXacVIBaRAAURaLOAgNxNN/Zg3zoD9lxnHm5axAfwF3SFWPAV/rHeGcdNKIsKLyzPfc055x5rcjgDsdhi4Z0EAoumU/0vgpLgPTqvaSZEfhzDBdrjTHq3fvXlyr1wxmMuxEJ3SmquJgulLMMboaZKafBO1eqGYwYQWmntFZlyJvI8F98E8DPxPFfLBiczmJTYTY6G8Fg7hsX32PTWkHaoS1hsHfcRJC93GGHetkxD6Ein/wEGHfHkAAuylL6izhgDf3/CS4N2DUPsLzCyYII2cyETbsbr5frzu0J9UMuz85vz6XQ64uMJvnZcEzS4j8XB+/Z08+TizdkzXX10F+nyoDtWZO66jbRfozRoxhxuW8VjMhVGPH1+Ep4de7GnCgkzf6jGPX8xr8hI6H9DS9b2fzqsAYcFG9h4WW88moNFo0XdUd0pVqv/CQ2WqpRHUFBDPMGE3qatH/igQZ8MB0paQ5WRDaudyGRoZ7grXuJgDMjmUdqd6MAkTlGWDIKzp2m6YuMwnsorJgSXZBoZLmPOczYbGfaQU6RnMGgF/y7mv+yxkiY43aF/TATOc2FEHWBB19/WoYDb+ttRUz5HqWLtoeWtUx2zRuBfBrVTRSjFXfOhQcm71jteTSCvYC/n9PGl3wE=#lVPwE"></iframe>
</div>

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
	console.log(`Expira em: ${token.expires_in} minutos`);
	sessionStorage.setItem("token", JSON.stringify(token));
}
```

Repare que o `token` deverá ficar guardado como sessão, portanto é preferível utilizar a [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) em vez do [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) quando se tratar de informação sensível.

Com o `refresh_token` é possível gerar um novo `token` antes do tempo e expiração (`expires_in` em minutos).

## Como Utilizar o Access Token

Para executar serviços programados à medida que exijam autenticação prévia em aplicações Netuno, deve passar o Access Token no Header do protocolo HTTP:

`Authorization: Bearer eyJhbGciOiJIUzU...`

Exemplo de como executar um serviço programado à medida através do frontend utilizando o [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API):

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

## Atualização (Refresh Token)

Para atualizar o token deve chamar novamente o serviço `_auth`, mas além do parâmetro do `jwt: true` é necessário passar também o parâmetro do `refresh_token` com o valor recebido na autenticação bem sucedida anterior.

A atualização do token deve ser feita antes do tempo de expiração (`expires_in` em minutos).

Por exemplo:

```
let token = null;

yield fetch("http://localhost:9000/services/_auth", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        refresh_token: token.refresh_token,
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
	console.log(`Meu Novo Acccess Token: ${token.access_token}`);
	console.log(`Meu Novo Refresh Token: ${token.refresh_token}`);
    console.log(`Expira em: ${token.expires_in} minutos`);
	sessionStorage.setItem("token", JSON.stringify(token));
}
```

Ao obter o novo token deve passar a utiliza-lo, ao invés do anterior (antigo) nas próximas chamadas de serviços.

## Auth Client - NPM

Para facilmente realizar a integração com o frontend é disponibilizado o módulo do NPM:

- [@netuno/auth-client](https://www.npmjs.com/package/@netuno/auth-client)

Comando de instalação: `npm i -S @netuno/auth-client`

Este módulo depende do [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client), ao definir o endereço dos serviços, como:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Com isto poderá efetuar o login:

```
    _auth.login({
        username: "admin",
        password: "secret",
        success: ()=> {
            alert("Success.");
        },
        fail: ()=> {
            alert("Fail.");
        }
    });
```

E para atualizar o token:

```
    _auth.refreshToken({
        success: ()=> {
            alert("Success.");
        },
        fail: ()=> {
            alert("Fail.");
        }
    });
```

Por fim, para terminar a sessão:

```
_auth.logout();
```

## Conclusão

De forma simples, é possível configurar e ativar a autenticação com JWT (Json Web Token) nas aplicações.

A integração do JWT no frontend pode ser feito ao mais baixo nível utilizando diretamente o `fetch`.

Para agilizar e padronizar a implementação é disponibilizado o módulo NPM [@netuno/auth-client](https://www.npmjs.com/package/@netuno/auth-client).
