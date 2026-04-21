---
id: remote
title: Remote - Cliente HTTP
---

## Introdução

Muitas vezes, em nossas aplicações, precisamos fazer requisições HTTP para serviços externos. Isso pode ser feito utilizando o recurso `_remote`.

Para fazer chamadas HTTP internamente para outros serviços ou servidores internos no computador, ou para chamar algum serviço na internet, a utilização do recurso Remote é essencial.

> Veja documentação do recurso [Remote](/docs/library/resources/remote).

Inclusive podemos enviar e receber dados em JSON e fazer upload ou download de arquivos.

## Pedido HTTP

### Iniciar a Requisição

Para podermos realizar uma chamada HTTP, devemos primeiramente inicia-la, para isso utilizaremos o método init do _remote e então guardaremos o resultado desta operação em uma variável chamada remote para que assim tenhamos como referenciar a requisição:

```js
const remote = _remote.init();
```

### Enviar JSON

Para enviar dados no formato JSON precisamos sinalizar o tipo de conteúdo como JSON:

A forma simples de fazer isso é utilizando o método `asJSON()`, por exemplo:

```js
const remote = _remote.init().asJSON();

remote.setURL("http://exemplo.com");

remote.post({ dados: 'exemplo', json: true});
```

Assim os dados vão ser enviados como JSON para os métodos HTTP de POST e de PUT, mas para GET e DELETE os dados são sempre enviados na querystring porque para estes métodos não é suportado pelo protocolo HTTP conter corpo com dados.

### Métodos HTTP

Não precisamos indicar explicitamente no cabeçalho da chamada o seu método HTTP, para isso a nossa referência da chamada possui uma função própria para cada tipo de método HTTP:

```js
const remote = _remote.init();

remote.setURL("http://exemplo.com");

remote.get(); // para chamadas GET
remote.post(); // para chamadas POST
remote.put(); // para chamadas PUT
remote.delete(); // para chamadas DELETE
```

#### Cabeçalho HTTP

Para configurar os parâmetros do cabeçalho HTTP podemos definir as chaves com o método `getHeader()`, por exemplo:

```js
const remote = _remote.init();
remote.getHeader().set("CHAVE", "VALOR");
```

#### URL da Requisição

Para indicar a URL da requisição basta passar como o primeiro parâmetro das funções dos respectivos métodos HTTP:

```js
const remote = _remote.init().asJSON();

remote.get("http://exemplo.com"); // para chamadas GET
remote.post("http://exemplo.com"); // para chamadas POST
remote.put("http://exemplo.com"); // para chamadas PUT
remote.delete("http://exemplo.com"); // para chamadas DELETE
```

#### Adicionando dados à requisição

Caso precise adicionar dados ao corpo do pedido, basta passar os mesmos como segundo parâmetro da função do respectivo método:

```js
const remote = _remote.init().asJSON();

remote.get("http://exemplo.com", {"user_id": 1}); // para chamadas GET
remote.post("http://exemplo.com", {"user_id": 1}); // para chamadas POST
remote.put("http://exemplo.com", {"user_id": 1}); // para chamadas PUT
remote.delete("http://exemplo.com", {"user_id": 1}); // para chamadas DELETE
```

## Resposta

Depois de receber a resposta da requisição podemos ler seus dados utilizando o método `json` ou `content`:

```js
const remote = _remote.init().asJSON();

const response = remote.get("http://exemplo.com", {"user_id": 1}); // para chamadas GET
const response = remote.post("http://exemplo.com", {"user_id": 1}); // para chamadas POST
const response = remote.put("http://exemplo.com", {"user_id": 1}); // para chamadas PUT
const response = remote.delete("http://exemplo.com", {"user_id": 1}); // para chamadas DELETE

if (response.ok()) {
    _log.info("response", response.json());
} else {
    _log.info("failed "+ response.statusCode(), response.content());
}
```

Com o método `json()` obtemos o array ou o objeto fornecido como Values.

Com o método `content()` obtemos conteúdo em texto crú.

## Conclusão

Com o recurso [Remote](/docs/library/resources/remote) podemos integrar APIs externas, podemos exportar, importar ou sincronizar dados.

Inclusive podemos integrar serviços implementados em outras tecnologias, o que permite realizar operações específicas fornecidas por outras linguagens.
