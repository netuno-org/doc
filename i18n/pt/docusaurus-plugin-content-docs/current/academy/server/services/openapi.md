---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definição do esquema de serviços.

## Introdução

OpenAPI é uma especificação que padroniza os serviços que são oferecidos pelas APIs REST, ajuda a entender como os serviços estão definidos, como endereço, inputs e outputs.

Permite a geração de interface de testes e geração automática de clientes para ser integrado com outras tecnologias.

> Mais sobre <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Ativação e Configuração

Para ativar e configurar a OpenAPI na sua aplicação no Netuno é necessário editar o ficheiro de configuração da aplicação referente ao ambiente que está a utilizar, como:

- `📂 config/_development.json`
- `📂 config/_production.json`

Insira e ajuste os seguintes parâmetros:

```
...
    "openapi": {
        "host": "http://minha-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://minha-app.local.netu.no:9000/services",
                "description": "Desenvolvimento Local"
            }
        ]
    },
...
```

Certifique que as configurações fazem sentido, no exemplo acima é para o ambiente de _development_.

> Em produção, convém utilizar `https`.

### _openapi.json nos Serviços

Na raíz dos serviços, configure o ficheiro `_openapi.json`.

O caminho completo dentro da aplicação é:

- `📂 server/services/_openapi.json`

O conteúdo deste ficheiro será como este exemplo:

```
{
  "info": {
    "title": "Minha Aplicação",
    "description": "REST API da Minha Aplicação utilize com Moderação.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Ajuste o título e a descrição para o que faz sentido no seu caso.

## Input

Ao configurar ficheiros _schema_ de inputs, permite ao Netuno realizar a validação dos parâmetros recebidos ao compará-los com as regras do JSON Schema.

> Mais sobre o <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Caso haja alguma falha na validação é impedida a execução do serviço e é apresentado um erro no `log` do Netuno e, para quem consome o serviço é retornado o HTTP Status Code **400** (_Bad Request_).

Para configurar as regras dos parâmetros de input é necessário criar um ficheiro com a extensão `in.json` junto ao ficheiro de código do serviço, o nome deve ser o mesmo.

- O serviço `detalhe.js` teria que ter o ficheiro `detalhe.in.json`.
- O serviço `detalhe.post.js` teria que ter o ficherio `detalhe.post.in.json`.
- O serviço `detalhe/post.js` teria que ter o ficherio `detalhe/post.in.json`.

Exemplo de conteúdo do `in.json`:

```
{
    "tags":[
      "serviços de produto"
    ],
    "summary": "Detalhe do Produto",
    "description": "É obtido todos os campos de detalhe do produto especificado.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

O Netuno tem o suporte de alguns tipos adicionais que não são suportados pelo JSON Schema, como `string-not-empty`, `array-not-empty`, `id` e o `uid` (ou `uuid` ou ainda `guid`).

> Mais sobre esta especificação em <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Output

Ao configurar ficheiros _schema_ de outputs, permite ao Netuno realizar a validação dos parâmetros enviados ao compará-los com as regras do JSON Chema.

> Mais sobre o <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Caso haja alguma falha na validação o output é enviado na mesma para quem consome o serviço mas, as mensagens de falhas de validação são apresentadas no `log` do Netuno.

Para configurar as regras dos parâmetros de output é necessário criar um ficheiro com a extensão `out.200.json` junto ao ficheiro de código do serviço, o nome deve ser o mesmo do serviço.

Onde o **200** é o HTTP Status Code que vai na resposta, para suportar múltiplos HTTP Status Code basta acrescentar mais ficheiros JSON com o número diferente.

Alguns exemplos:
- O serviço `guardar.js` teria que ter o ficheiro `guardar.out.200.json`.
- O serviço `guardar.post.js` teria que ter o ficherio `guardar.post.out.200.json`.
- O serviço `guardar/post.js` teria que ter o ficherio `guardar/post.out.200.json`.

Exemplo de conteúdo do `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "result": {
        "type": "boolean"
      }
    },
    "required": [
      "result"
    ]
}
```

O Netuno tem o suporte de alguns tipos adicionais que não são suportados pelo JSON Schema, como `string-not-empty`, `array-not-empty`, `id` e o `uid` (ou `uuid` ou ainda `guid`).

> Mais sobre esta especificação em <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Importação de Schema

O Netuno suporta importar _schemas_, o que permite reutilizar parte do _schema_ em múltipos JSONs.

> Ao importar _schemas_ evita repetição de código.

Crie a pasta `_schema` na raíz da pasta dos serviços, em:

- `📂 server/services/_schema`

Agora na configuração do JSON é possível importar _schemas_ com o parâmetro `_schema` no JSON, por exemplo:

```
{
    "summary": "Apagar Produtos",
    "description": "Permite eliminar definitivamente produtos.",
    "_schema": "get/only-code.in"
}
```

Isto quer dizer que vai ser importado o ficheiro `_schema/get/only-code.in.json` onde está o parâmetro `_schema`.

## Especificação e Testes

Para gerar a especificação completa de todos os serviços que suportam OpenAPI com JSON Schema, acesse por exemplo:

- http://localhost:9000/services/_openapi

Vai ser apresentado um JSON com toda a especificação.

Para testar, copie todo o JSON gerado.

Abra o Editor do Swagger: https://editor.swagger.io/

Apague o conteúdo que houver do lado esquerdo e cole o JSON e, responda sim na pergunta de conversão de JSON para YAML.

Com a interface gerada do lado direito é possível entender melhor todos os serviços disponíveis e realizar testes.

Também permite gerar automaticamente clientes para outras tecnologias.

## Programaticamente

Na pasta `_schema` podemos utilizar arquivos `.js` que serão executados junto com a geração da definição da OpenAI, mas também no processo de validação de input e output dos serviços.

Através da programação do schema podemos gerar validações dinâmicas, por exemplo:
- Apenas aceitar um código que existe na base de dados.
- Com o `UID` obtém o registro em base de dados e partilha com os serviços.
- Caso seja `POST` ou `PUT` gera um tipo de schema diferente do que é gerado no caso do `DELETE`.

### Exemplo com Lista de Valores

Imagine que temos um serviço que recebe o código de uma determinada categoria.

Não podemos receber qualquer valor como código, por que pode ser um valor que não corresponde a um código válido de categoria.

Então podemos restringir que os códigos aceites são apenas os que estão cadastrados em base de dados.

Cria-se o schema em: `server/services/_schema/categoria/codigos.js`

```javascript
const dbCategorias = _db.query("SELECT codigo FROM categoria")

const listaCodigos = _val.list()

for (const dbCategoria of dbCategorias) {
    listaCodigos.add(dbCategoria.getString("codigo"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listaCodigos
    )
```

> No `listaCodigos` vai conter todos os códigos de categorias registrados na base de dados.

No serviço podemos ter o seguinte `JSON` que utiliza o schema `categoria/codigos`:

```json
{
  "summary": "Lista os Produtos na Categoria",
  "description": "Obtém todos os produtos associados a uma determinada categoria.",
  "type": "object",
  "properties": {
    "categoria": {
      "type": "object",
      "properties": {
        "codigo": {
          "_schema": "categoria/codigos"
        }
      },
      "required": [
        "codigo"
      ]
    }
  },
  "required": [
    "categoria"
  ]
}
```

Desta forma conseguimos garantir que apenas executa o serviço se o código for válido.

### Exemplo com Objeto Global

Imagine que temos diversos serviços que recebem o `UID` do cliente e em cada serviço temos que aceder à base de dados para obter o os dados do cliente relacionado com o seu `UID`.

Podemos centralizar isso num schema programado que através do `UID` do cliente recebido, obtém os dados do cliente em base de dados, e armazena em um objeto global que é acessível no código dos serviços.

Assim os dados do cliente são sempre carregados globalmente e automaticamente quando recebemos um `UID` de cliente.

Criamos um schema programado em: `server/services/_schema/cliente.js`

```javascript
const cliente = _req.getValues('cliente', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbCliente = _db.get('cliente', cliente.getString("uid"))
    
    if (dbClient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'cliente-nao-encontrado')
        )
        _service.cancel()
    }
    
    _val.global().set('cliente', dbCliente)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> Com o `_service.isGeneratingOpenAPIDefinition()` podemos validar se é a geração da definição do OpenAPI, caso contrário é uma execução de um pedido HTTP.
> 
> Caso o `UID` do cliente não seja encontrado, então retorna o 404 e interrompe a execução do serviço.
> 
> Repare que utilizamos o `_val.global()`, que permite partilhar dados globalmente entre todos os arquivos de código que forem executados no processamento do pedido HTTP.

No seguimento do exemplo, temos um serviço que lista as compras realizadas pelo cliente.

Temos a validação de input para o serviço em: `server/services/cliente/compras/post.in.json`

```json
{
    "summary": "Lista de Compras",
    "description": "Lista as compras realizadas pelo cliente.",
    "type": "object",
    "properties": {
        "cliente": {
            "_schema": "cliente"
        }
    },
    "required": [
        "cliente"
    ]
}
```

> Repare que o valor do `"_schema"` do cliente é o nome do arquivo de código que programamos no schema anteriormente. 

E no código do serviço das compras de clientes em: `server/services/cliente/compras/post.js`

```javascript
const dbCliente = _val.global().getValues('cliente')
...
```

Através do `_val.global()` obtemos os dados do cliente na base de dados que foi carregado pelo código do schema automaticamente.

### Exemplo com Método HTTP

Podemos retornar um schema diferente para cada tipo de método HTTP.

Por exemplo podemos gerar um schema por código para operações de criar, editar ou remover portas de rede:

- Caso seja POST realiza a operação de criação, então não contém o UID mas exige o nome e número de porta.
- Caso seja PUT realiza a operação de edição, precisa exigir o UID, o nome e o número da porta de rede.
- Quando for PUT ou DELETE precisa do UID para realizar as respectivas operações de edição e remoção. 

```javascript
const properties = _val.map()
const required = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    properties.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    required.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    properties
        .set(
            'name',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    required
        .add('name')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        properties
    )
    .set(
        'required',
        required
    )
```

## Conclusão

Com o suporte da OpenAPI podemos criar regras de validação utilizando o JSON Schema, o que oferece as seguintes vantagens:

- Garantir maior segurança dos dados que são injetados nos serviços. 
- Alerta em `log` caso o output do serviço não seja como foi especificado.
- Gera facilmente uma interface de navegação nos serviços e de testes.
