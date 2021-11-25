---
id: websocket
title: WebSocket
sidebar_label: WebSocket
---

## Introdução

Com WebSocket é possível estabelecer uma conexão permanente entre o servidor e o browser do cliente.

Isto quer dizer que a qualquer momento o browser poderá utilizar a conexão estabelecidade via WebSocket para enviar dados para o servidor sem ser obrigatório obter uma resposta, e o mesmo acontece para o servidor que poderá contactar o browser do cliente enviando dados de forma imediata.

> A comunicação é realizada instantaneamente e a qualquer momento é possível transitar dados de um lado para o outro de forma independente.

É muito útil para realizar operações de realtime com comunicações imediatas sem qualquer atraso de delay.

Por exemplo é muito utilizado desde soluções de chats até jogos, ou seja quando existe a necessidade de realizar comunicação o mais imediata possível. 

De forma simplificada a diferença entre a comunicação clássica HTTP e o WebSocket:

![classic-http-vs-websoket](/docs/assets/academy/server/services/websocket/comparison-pt.svg)

Do lado do servidor é criado um `endpoint`, endereço que permite estabelecer conexões atrás de WebSocket.

O servidor tem a capacidade de enviar dados apenas para uma conexão específica, ou seja é possível enviar novas mensagens para um participante do chat em específico.

Também o servidor pode fazer `broadcast` que é o envio de dados para todas as conexões ativas num determinado endereço, ou seja quando é enviado uma mensagem para todos os participantes em uma sala de chat.

## Ativação e Configuração

Para ativar e configurar o WebSocket na sua aplicação no Netuno é necessário editar o ficheiro de configuração da aplicação referente ao ambiente que está a utilizar, como:

- `📂 config/_development.json`
- `📂 config/_production.json`

Insira e ajuste os seguintes parâmetros:

```js
    ...
    "ws": {
        "endpoints": [
            {
                "name": "pool",
                "enabled": true,
                "sendTimeout": 10000,
                "idleTimeout": 0,
                "maxText": 15000,
                "public": "/ws/pool",
                "path": "/",
                "service": "/services/ws/pool"
            },
            {
                "name": "room",
                "enabled": true,
                "sendTimeout": 10000,
                "idleTimeout": 0,
                "maxText": 15000,
                "public": "/ws/room/",
                "path": "/{uid}",
                "service": "/services/ws/room"
            }
        ]
    },
    ...
```

##### endpoints

É um array que permite definir que o servidor vai suportar WebSocket através da configuração de múltiplos endereços públicos específicos (_endpoints_), então cada endpoint é um endereço público que suporta receber conexões via WebSockets dos browsers.

##### name

Nome de identificação do endpoint.

##### enabled

Permite ativar e desativar o endpoint, o padrão é `true` (ativo).

##### sendTimeout

Limite de tempo máximo para enviar uma mensagem para os clientes, o padrão é `60000` milissegundos, ou seja equivale a 1 minuto.

##### idleTimeout

Limite de tempo máximo para a inatividade na conexão, o padrão é `300000` milissegundos, ou seja equivale a 5 minutos.

##### maxText

Limite em bytes para o tamanho máximo do comprimento da mensagem, o padrão é `1048576` equivalente a 1 megabyte.

##### public

Endereço público que permitirá receber as conexões via WebSocket vinda dos browsers.

##### path

Define a parte final do caminho do endereço público, pode ser dinâmico, o que permite criar por exemplos múltiplos canais separados, por exemplo é útil para criar múltiplas salas.

##### service

Serviço da aplicação que irá gerir as conexões via WebSocket.

## Serviço para os Endpoints

### PUT

É excutado o serviço configurado com o método `PUT` quando uma nova conexão é estabelecida, por exemplo:

- `server/services/ws/room/put.js`

```js
const uidRoom = _ws.path().getString("uid")
const dbRoom = _db.get('room', uidRoom)

if (dbRoom == null) {
    _log.warn(`Invalid room ${uidRoom}.`)
    _ws.close()
} else {
    _log.info(`New WebSocket Session: ${_ws.sessionId()}`)
}
```

> Normalmente o `_ws.sessionId()` é guardado em base de dados para ser utilizado em futuras comunicacões.

### POST

Se a mensagem recebida, no formato JSON, não conter o caminho de um serviço específicado (`service`), então executa este serviço genérico:

- `server/services/ws/room/post.js`

```js
_log.info(`The session ${_ws.sessionId()} sent this message: ${_ws.message()}`)
```

### DELETE

É executado quando acontece uma desconexão do browser do cliente.

- `server/services/ws/room/delete.js`

```js
_log.info(`Session ${_ws.sessionId()} has disconnected.`)
```

## Comunicação

### sendService

Executa o serviço e envia o output gerado para um cliente específico conectado através do WebSocket, utiliza o ID de conexão do cliente (`sessionId`).

##### Exemplo

Este código deve ficar no método PUT para o serviço do endpoint (`service`), por que está a ser utilizado o `_ws.sessionId()` diretamente, o este identificador da sessão estivesse guardado em base de dados o `sendService` poderia ser executado em qualquer outro serviço.

```js
const uid = _ws.path().getString("uid")
_ws.sendService(
        _ws.sessionId(), // Identificação da conexão do WebSocket.
        _val.map() // Parametrização do serviço que será executado.
            .set("service", "/services/room/participant/new")
            .set(
                "data", // Parâmetros que são passados para o serviço através do _req.
                _val.map()
                    .set("uid", uid)
            )
    )
```

Ou seja, na configuração o `path` que está configurado no `endpoint` tem o valor `/{uid}`, assim permite o cliente conectar através do endereço público:

- `/ws/room/d641f095-30eb-4025-a39c-b2e3e497eab7`

Então o valor da constante do `uid` será `d641f095-30eb-4025-a39c-b2e3e497eab7`.

Com isto será executado o serviço que fica na URL `/services/room/participant/new` e o valor do `uid` é passado.

O `uid` pode ser obtido no código serviço que é executado como um parámetro no pedido HTTP, por exemplo:

```js
// No código do Serviço da App: /server/services/room/participant/new.js
const uid = _req.getString('uid')
```

### broadcastService

Para realizar o broadcasta é preciso o nome do endpoint do WebSocket, e definicar o caminho (`path`) se aplicável, e o serviço que será executado.

O output do serviço será enviado para todas as conexões ativas no endpoint.

##### Exemplo

```js
_ws.broadcastService(
        "admin", // Nome do endpoint do WebSocket.
        "/", // Caminho configurado no endpoint (path).
        _val.map() // Parametrização do serviço que será executado.
            .set("service", "/services/room/participants")
    )
```

Como no exemplo 

## WS Client - NPM

Para realizar facilmente a integração com o frontend, é disponibilizado o módulo do NPM:

- https://www.npmjs.com/package/@netuno/ws-client

Comando de instalação: `npm i -S @netuno/ws-client`

```js
_ws.config({
    url: 'ws://localhost:9000/ws/example',
    servicesPrefix: '/services',
    method: 'GET',
    autoReconnect: true,
    connect: (event) => {
        console.info('WebSocket Connected', event);
    },
    close: (event) => {
        console.warn('WebSocket Closed', event);
    },
    error: (error) => {
        console.error('WebSocket Error', error);
    },
    message: (data, event) => {
        console.debug('WebSocket Message', data);
    }
});
```

## NGINX Proxy Reverso

No NGINX o proxy reverso pode ser configurado desta forma:

```
    location /ws {
        proxy_pass http://localhost:9000;
        proxy_set_header Host minha-app.local.netu.no;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_http_version 1.1;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
        add_header X-Frame-Options "";
    }
```

> Na linha 3 onde define o `Host` deve ser ajustado a parte da `minha-app` para o nome da aplicação no Netuno que suporta WebSocket.

