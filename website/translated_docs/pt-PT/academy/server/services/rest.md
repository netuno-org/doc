---
id: rest
title: Serviços Web REST
sidebar_label: Serviços Web REST
---

## Introdução

Os pedidos REST são endereços online que retornam informação de dados processados no servidor, que contém a lógica de negócio dos dados que exigem segurança e fiabilidade, com integração da base de dados.

> Mais sobre <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

A construção da API REST é feita com base nos Serviços do Netuno.

### ALL

Para criar um serviço no Netuno que responda a qualquer tipo de método HTTP:

- `📂 server/services/meu-servico.js`

No browser, este serviço será executado para todos os tipos de pedidos no endereço:

- http://localhost:9000/services/meu-servico

### GET

Os endereços do tipo GET são normalmente utilizados para operações de listagem ou de obtenção de dados.

Para criar um serviço no Netuno que responda apenas para o tipo de método GET, utilize uma destas formas:

- `📂 server/services/lista/get.js`
- `📂 server/services/lista.get.js`

No browser, este serviço será executado apenas para o tipo de pedido GET no endereço:

- GET http://localhost:9000/services/lista

### POST

Os endereços do tipo POST são normalmente utilizados para operações que guardam dados.

Para criar um serviço no Netuno que responda apenas para o tipo de método POST, crie o arquivo de código utilizando uma destas formas:

- `📂 server/services/guardar/post.js`
- `📂 server/services/guardar.post.js`

Este serviço será executado apenas para o tipo de pedido POST no endereço:

- POST http://localhost:9000/services/guardar

### PUT

Os endereços do tipo PUT são normalmente utilizados para operações que cria novos registos de dados.

Para criar um serviço no Netuno que responda apenas para o tipo de método PUT, crie o arquivo de código utilizando uma destas formas:

- `📂 server/services/criar/put.js`
- `📂 server/services/criar.put.js`

Este serviço será executado apenas para o tipo de pedido PUT no endereço:

- PUT http://localhost:9000/services/criar

### DELETE

Os endereços do tipo DELETE são normalmente utilizados para operações que eliminam novos registos de dados.

Para criar um serviço no Netuno que responda apenas para o tipo de método DELETE, crie o arquivo de código utilizando uma destas formas:

- `📂 server/services/eliminar/delete.js`
- `📂 server/services/eliminar.delete.js`

Este serviço será executado apenas para o tipo de pedido DELETE no endereço:

- DELETE http://localhost:9000/services/eliminar

### OPTIONS

Na integração com o frontend, durante o processo de validação do CORS, o browser realiza a chamada do tipo OPTIONS.

> Mais sobre <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Para criar um serviço no Netuno que responda apenas para o tipo de método OPTIONS, crie o arquivo de código utilizando uma destas formas:

- `📂 server/services/listar/options.js`
- `📂 server/services/listar.options.js`

Deve ser implementado para todos os serviços que são integrados em frontend externo, como website.

Código normalmente utilizado:

```javascript
_out.json(_val.map().set("result", true))
```

Este serviço será executado para o tipo de pedido OPTIONS no endereço:

- OPTIONS http://localhost:9000/services/listar

## Executar Testes

Para executar testes aos serviços com o tipo de método específico, pode utilizar programas próprios que realizam testes sobre API REST, como:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

### CURL

Com o comando `curl` no terminal pode realizar qualquer tipo de teste.

A partir da consola/linha de comandos envia um GET:

```
curl http://localhost:9000/services/guardar
```

Com o `-X` pode específicar o tipo de método:

```
curl -X POST -F 'nome=Test' -F 'email=email@exemplo.com' http://localhost:9000/services/guardar
```

> O parâmetro `-F` envia com o Content-Type: `multipart/form-data`

Outra forma de enviar parâmetros:

```
curl -X POST -d 'nome=Test' -d 'email=email@exemplo.com' http://localhost:9000/services/guardar
```

Pode ser concatenado da seguinte forma:

```
curl -X POST -d 'nome=Test&email=email@exemplo.com' http://localhost:9000/services/guardar
```

> O parâmetro `-d` envia com o Content-Type: `application/x-www-form-urlencoded`

#### JSON

Para enviar em formato JSON é necessário especificar o tipo de conteúdo:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nome": "Test", "email": "email@exemplo.com"}' \
    http://localhost:9000/services/guardar
```

> O `-H` define a parametrização do cabeçalho (_HEADER_)

### Upload

Para realizar o upload de ficheiros:

```
curl -X POST -F 'image=@/home/utilizador/ficheiro.jpg' http://localhost:9000/services/guardar
```

## Service Client - NPM

Para realizar facilmente a integração com o frontend, é disponibilizado o módulo do NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Comando de instalação: `npm i -S @netuno/service-client`

Ao definir o endereço dos serviços, como:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Poderá executar serviços integrados com o frontend, como por exemplo:

```
  _service({
      url: "/services/meu-servico",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Service Response", response.json);
          }
      },
      fail: (e) => {
          console.log("Service Error", e);
      }
  });
```

## Conclusão

É suportado restringir os serviços apenas ao tipo de método HTTP pretendido.

Para integrar com o frontend pode ser feito ao mais baixo nível utilizando o `fetch`.

Para agilizar e padronizar a implementação é disponibilizado o módulo NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).
