---
id: cors
title: CORS
sidebar_label: CORS
---

## Introdução

O CORS (Cross Origin Resource Sharing) é um processo de validação que os browsers fazem para validar se podem integrar os recursos partilhados por outro endereço.

É implementado quando:

- No desenvolvimento da camada do frontend com o servidor do webpack, como o desenvolvimento de interfaces web (websites e aplicações web) utilizando tecnologias modernas como ReactJS e VueJS.
- O endereço do frontend é diferente do endereço dos serviços, por exemplo quando os serviços são executados no endereço http://localhost:9000 e o frontend é executado no endereço http://localhost:3000, ou em produção os serviços executam em subdominio próprio api.exemplo.com e o frontend em www.exemplo.com.

> Mais sobre o CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

O Netuno está preparado para realizar a integração do CORS de forma simples e rápida.

## Configuração

A configuração CORS é realizada no ficheiro de configuração da aplicação, de acordo com o ambiente.

Para o fazer, navegue dentro da aplicação que está a desenvolver até ao ficheiro de configuração de ambiente. Neste exemplo, iremos utilizar o ficheiro de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existem configurações do CORS, se não existir adicione no fim do ficheiro de configuração (em formato JSON) os parâmetros de configuração:

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

> A configuração do CORS é um array e suporta várias regras de CORS distintas.

##### Origins

No parâmetro `origins` é a lista de endereços do frontend que será integrado com os serviços.

## Cabeçalho (Header HTTP)

O cabeçalho padrão (Header do protocolo HTTP) é:

```
Access-Control-Allow-Origin: http://minha-origem.localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Para customizar o cabeçalho padrão acrescente o parâmetro de configuração `header`, por exemplo:

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

No exemplo acima vai apenas aceitar no header o `Authorization` em vez de todos os outros que estavam definidos por padrão.

Pode acrescentar novas definições no header como, substituir a definição padrão.

## Manualmente

De forma manual também pode ser configurado o CORS, em vez de utilizar o mecanismo automático do Netuno.

Na sua aplicação do Netuno basta alterar o ficheiro:

- `📂 server/core/_request_url.js`

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

> Desta forma, todos os serviços e endereços da sua aplicação passam a suportar os Headers de CORS.

#### Apenas para Serviços Isolados

Se pretender aumentar o nível de segurança ativando os Headers apenas para serviços específicos, então utilize esta mesma lógica de código mas no ficheiro:

- `📂 server/core/_service_config.js`

Em vez do ficheiro:

- `📂 server/core/_request_url.js`

## Conclusão

Quando configurado o CORS, o Netuno automaticamente vai responder com o cabeçalho (Header do protocolo HTTP) padrão para os endereços configurados como `origins`.

Os `headers` padrão podem ser customizados e alterados.

Pode cofigurar diversas regras de CORS.

Apesar do Netuno suportar a configuração manual das regras do CORS, programaticamente, é preferível utilizar o mecanismo automático integrado na configuração da aplicação.