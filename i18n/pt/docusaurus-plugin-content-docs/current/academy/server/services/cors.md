---
id: cors
title: CORS
sidebar_label: CORS
---

Configuração de CORS na aplicação.

## Introdução

O CORS (Cross Origin Resource Sharing) é um processo de validação que os navegadores fazem para validar se podem 
integrar os recursos partilhados por outro endereço.

É implementado quando:

- No desenvolvimento da camada do frontend com o servidor do webpack, como o desenvolvimento de interfaces web 
(website ou aplicação web) utilizando tecnologias modernas como ReactJS e VueJS.
- O endereço do frontend é diferente do endereço dos serviços, por exemplo, quando os serviços são executados no 
endereço `http://localhost:9000` e o frontend é executado no endereço `http://localhost:3000`.
- Em produção, por exemplo, os serviços executam em subdomínio próprio `api.exemplo.com` e o frontend em
`www.exemplo.com`.

> Mais sobre o CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

O Netuno está preparado para realizar a integração do CORS de forma simples e imediata.

## Configuração

A configuração CORS é realizada no arquivo de configuração da aplicação, consoante o ambiente.

Para o fazer, navegue dentro da aplicação que está a desenvolver até ao arquivo de configuração de ambiente. 
Neste exemplo, iremos utilizar o arquivo de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existem configurações do CORS, se não existir adicione no fim do arquivo de configuração (em 
formato JSON) os parâmetros de configuração:

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

> A configuração do CORS é um array e suporta várias regras de CORS distintas.

### Origens

No parâmetro `origins` é a lista de endereços do frontend que será integrado com os serviços.

### Produção

Em produção temos que definir como origens os endereços em que o frontend funcionará online.

O arquivo de configuração da aplicação onde fica a definição de `cors` deverá ser diferente, conforme o ambiente.

O arquivo de configuração da aplicação deverá ser:

- 📂 `config/_production.json`

Exemplo da configuração de CORS:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://meu-projeto.com", "https://www.meu-projeto.com" ]
        }
    ]
    ...
}
```

O arquivo de configuração da aplicação é o `_production.json` conforme a configuração de ambiente do Netuno, que 
fica no arquivo `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Cabeçalho (Header HTTP)

O cabeçalho padrão (Header do protocolo HTTP) é:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Para customizar o cabeçalho padrão acrescente o parâmetro de configuração `header`, por exemplo:

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

No exemplo acima vai apenas aceitar no header o `Authorization` em vez de todos os outros que estavam definidos 
por padrão.

Pode acrescentar novas definições no header como, substituir a definição padrão.

## Manualmente

De forma manual também pode ser configurado o CORS, em vez de utilizar o mecanismo automático do Netuno.

Na sua aplicação do Netuno basta alterar o arquivo:

- `📂 server/core/_request_url.js`

E utilizar o seguinte código:

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.minha-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Repare que neste código acima o `if` restringe os 'Headers' de acordo com endereço de origem (`Origin`).

Lembre-se de ajustar para os endereços que vai utilizar.

> Desta forma, todos os serviços e endereços da sua aplicação passam a suportar os Headers de CORS.

### Apenas para Serviços Isolados

Se pretender aumentar o nível de segurança ativando os Headers apenas para serviços específicos, então utilize 
esta mesma lógica de código no arquivo:

- `📂 server/core/_service_config.js`

Em vez do arquivo:

- `📂 server/core/_request_url.js`

## Conclusão

Quando configurado o CORS, o Netuno automaticamente vai responder com o cabeçalho (Header do protocolo HTTP) 
padrão para os endereços configurados como `origins`.

Os `headers` padrão podem ser customizados e alterados.

Pode cofigurar diversas regras de CORS.

Apesar do Netuno suportar a configuração manual das regras do CORS, programaticamente, é preferível utilizar o 
mecanismo automático integrado na configuração da aplicação.
