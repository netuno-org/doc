---
id: remote
title: Remote
sidebar_label: Remote
---

## Como fazer chamadas HTTP no Netuno

### Introdução
Muitas vezes, em nossas aplicações, precisamos fazer requisições HTTP para serviços externos. Isso pode ser feito utilizando o **_remote**.

### Chamadas HTTP no Netuno
#### Iniciando a requisição
Para que possamos realizar uma chamada HTTP no Netuno, devemos primeiramente inicia-la, para isso utilizaremos o método init do objeto do Netuno _remote e então guardaremos o resultado desta operação em uma variável chamada remote para que assim tenhamos como referenciar a requisição:

```js
const remote = _remote.init();
```

#### Indicado o método da requisição
No Netuno não precisamos indicar explicitamente no cabeçalho da chamada o seu método HTTP, para isso a nossa referência da chamada possui uma função para cada método HTTP:

```js
const remote = _remote.init();

remote.post(); // para chamadas POST
remote.get(); // para chamadas GET
remote.put(); // para chamadas PUT
remote.delete(); // para chamadas DELETE

```

#### Editando cabeçalhos HTTP
```js
const remote = _remote.init();
remote.getHeader().set("HEADER",”VALOR”);
```

#### Indicando a URL da requisição
Para indicar a URL da requisição basta que passemos ela como o primeiro parâmetro da função:

```js
const remote = _remote.init();

remote.post(“http://exemplo.com”); // para chamadas POST
remote.get(“http://exemplo.com”); // para chamadas GET
remote.put(“http://exemplo.com”); // para chamadas PUT
remote.delete(“http://exemplo.com”); // para chamadas DELETE
```

#### Adicionando dados à requisição
Caso precise adicionar dados ao corpo da chamada, basta passar os mesmos como segundo parâmetro da função:

```js
const remote = _remote.init();

remote.post(“http://exemplo.com”, {“user_id”: 1}); // para chamadas POST
remote.get(“http://exemplo.com”, {“user_id”: 1}); // para chamadas GET
remote.put(“http://exemplo.com”, {“user_id”: 1}); // para chamadas PUT
remote.delete(“http://exemplo.com”, {“user_id”: 1}); // para chamadas DELETE
```

#### Lendo a resposta da requisição
Depois de receber a resposta da requisição podemos ler seus dados utilizando o método **getContent**:

```js
const remote = _remote.init();

const response = remote.post(“http://exemplo.com”, {“user_id”: 1}); // para chamadas POST
const response = remote.get(“http://exemplo.com”, {“user_id”: 1}); // para chamadas GET
const response = remote.put(“http://exemplo.com”, {“user_id”: 1}); // para chamadas PUT
const response = remote.delete(“http://exemplo.com”, {“user_id”: 1}); // para chamadas DELETE

_log.info(“response”, response.getContent())
```
