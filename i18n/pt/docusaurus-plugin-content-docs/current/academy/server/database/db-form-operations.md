---
id: db-form-operations
title: Form e as Operações de Base de Dados
sidebar_label: DB Form
---

## Antes de Começar

Antes de proceder certifique-se de que tem noções de SQL, relacionamento entre tabelas tais como "um para muitos" e "muitos para um".

Além disso, é necessário conhecimento prévio sobre os `Forms` do Netuno e como são organizados para conseguir extrair o maximo do DB Form.

## Introdução

Em desenvolvimento de software muitas vezes precisamos buscar informações em banco de dados e fazer isso usando SQL puro torna as coisas algo massivo e extressante. O Query transforma a construção de consultas SQL em uma experiência intuitiva e livre de estresse. Com ele, você pode criar consultas poderosas usando métodos amigáveis que abstraem a complexidade do SQL bruto entregando uma abordagem de desenvolvimento de consultas que se alinha ao seu fluxo de pensamento. 

## Como Funciona

No coração do DB Form está a capacidade de estruturar comandos SQL utilizando objetos e métodos. Em vez de escrever os comandos SQL diretamente, o DB Form permite que você use um mecanismo orientado a objetos para definir consultas e operações de forma programática.

Cada consulta ou operação de base de dados é representada como um objeto.

Você cria instâncias de classes de consulta que encapsulam diferentes partes do SQL, como seleção, filtragem, agrupamento, etc. E também executa as operações de deletar, inserir e atualizar registros.

## Inicialização

Tudo começa com a inicialização do DB Form que precisa saber qual será o nome de formulário base ou principal que será utilizado, ou seja, os formulários no Netuno representam sempre tabelas em base de dados, portanto é o mesmo que dizer qual é a tabela base ou a tabela principal. 

Nete exemplo iniciamos o DB Form a partir do formulário/tabela `people`:

```javascript
const dbFormPeople = _db.form("people")
```

Com o DB Form iniciado podemos realizar consultas ou operações.

## Consulta Simples

O DB Form fornece dois métodos muito comuns para obtenção de dados, além da paginação e resultados distintos, são eles:

- `all` - Todos os registros como uma lista.
- `first` - Obtém apenas o primeiro registro.

Veja os exemplos a seguir.

Para obter todas as pessoas:

```javascript
const dbPeoples = _db.form("people")
    .all()
```

Para obter apenas uma pessoa:

```javascript
const dbPeople = _db.form("people")
    .first()
```

## Filtros e Condições

Com o where podemos filtrar os dados que respeitam determinadas condições.

Veja alguns exemplos:

```js
const dbPeople = _db.form("people")
    .where(_db.where("people_user_id").equals(_user.id))
    .first()
```

```js
const dbPeoples = _db.form("people")
    .where(
        _db.where("type").in(_val.list().add("client").add("admin"))
            .and("email").notEqual(null)
    ).all()
```

## Comparações Where

O `_db.where` fornece o objeto [Where](/docs/library/objects/Where) que suporta as seguintes operações de comparação:

Comparações com os operadores numéricos e textuais:

-  `equal(...)` ou `equals(...)` - Verifica a igualdade, é o `=`.
-  `notEqual(...)` ou `notEquals(...)` - Se é diferente do valor passado, é o `<>`.
-  `greaterThan(...)` - Se é maior que o valor passado, é o `>`.
-  `lessThan(...)` - Se é menor que o valor passado, é o `<`.
-  `greaterOrEqualsThan(...)` - Se é maior ou igual ao valor passado, é o `>=`.
-  `lessOrEqualsThan(...)` - Se é menor ou igual ao valor passado, é o `<=`.

Condições de texto com o operador `LIKE`:

-  `startsWith('text')` - Se inicia com o determinado prefixo, é o `LIKE '...%'`.
-  `endsWith('text')` - Se termina com o determinado sufixo, é o `LIKE '%...'`.
-  `contains('text')` - Se contém o termo, é o `LIKE '%...%'`..

Condições com listas com o operador `IN`:

-  `in(_val.list()...)` - Se é igual a algum valor da lista, é a condição `IN (...)`.
-  `notIn(_val.list()...)` - Se não é igual a nenhum valor da lista, é a condição `NOT IN (...)`.

## Exemplos Práticos de Consulta

O `DB Form` é acessível a partir do recurso `_db.form('form')`, uma vez invocado tens em mãos a consulta base que pode ser configurada usando os métodos e objetos disponíveis no mesmo.

### Muitos para Um e Resultados Distintos

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('jail')
        .and(
             _db.where('email').contains('jai')
             .or('email').endsWith('com')
         )
    )
    .link('job', _db.where('code').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'people_user_id',  
            _db.where('mail').startsWith('jai')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('people')
            )
        )
    )
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("people.uid", "people_uid")
    .debug(true)
    .distinct(true)

const results = query.all();
```

No exemplo acima fazemos uma consulta para a tabela `people` relacionando com mais outras duas tabelas, `job` e `netuno_user`, onde `job` sendo relacionado através do método `link` e `netuno_user` por meio do `join`. É possível observar que o `link` é muito mais simplificado que o `join` isto é pq o `link` reaproveita o relacionamento do `Form` do Netuno para mapear a relação enquanto o `join` utiliza somente as informações fornecidas no método. Tambem é possivel perceber os demais métodos e objetos utilizados como:

- `where` : Objeto fornecido para montar condições para uma tabela.
- `link` : Método que relaciona a tabela principal com uma outra tabela usando os critérios do `Form` do Netuno.
- `join` : Método que recebe um objeto de relação entre tabelas.
- `get` : Método que define quais campos serão retornados na consulta.
- `manyToOne` : Objeto que define o tipo de relação entre tabelas, nesse caso um relacionamento do tipo `Many To One`.
- `debug` : Método que determina se a consulta construída será impressa no console.
- `distinct` : Método que determina se o comando `DISTINCT` será aplicado a consulta.
- `all` : Método que executa a consulta e retorna os resultados em forma de lista.

> O metodo `link` somente deve ser usado quando as tabelas já possuem relação por meio do `Form` do Netuno.

### Primeiro Registro com Relacionamento e Ordenação

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('jail')
        .and('email').in(
            _val.list().add('first@mail.com').add('second@mail.com'))
    )
    .link('job')
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("job.code", "job_code")
    .order('people.age', 'desc')
    .debug(true)

const firstResult = query.first();
```
Ao final do exemplo acima invocamos o método `first()`, este retorna a primeira ocorrência encontrada na execução na consulta, caso não encontre nunhuma,  retornará `null`.

### Paginação

```javascript
const query = _db.form('people')
    .link(
        'job', 
        _db.link('task')
    )
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("job.code", "job_code")
    .group("people.id")
    .debug(true)

const page = query.page(_db.pagination(1, 10));
```

> O número da página no objeto Pagination inicia a partir de 1, então o exemplo acima é equivalente há: `offset = 0` e `limit = 10`.  

Ao final do exemplo acima invocamos o método `page()` passando como parâmetro o objeto `pagination` que possui as preferências da paginação. Este retornará um objeto página com os atributos equivalentes, exemplo:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"job_code": "trainee",
			"people_active": true,
			"people_name": "Junior Freitas"
		},
		{
			"job_code": "manager",
			"people_active": true,
			"people_name": "Caio Andrade"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Inserir Registros

Para inserir dados na base de dados utilizamos o método `insert`, por exemplo:

```javascript
const dbPeopleInserted = _db.form("people")
    .set("name", "Caio Andrade")
    .set("email", "caio@mail.com")
    .insert();
```

Com o resultado do `insert` podemos obter o id do registro que foi inserido na base de dados.

Portanto, no `dbPeopleInserted` obtém-se o `id` do registro inserido da seguinte forma:

```javascript
_log.info("People ID Inserted: "+ dbPeopleInserted.getInt('id'))
```

## Editar Registros

Através do objeto DB Form você pode atualizar os registros da consulta de forma fácil e intuitiva.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .set("name", "new name")
    .set("email", "mynewemail@mail.com")
    .update();
```

> `Importante`. O método `update()` irá atualizar todas a ocorrências da consulta, então atenção ao utilizar este.

> Alé disso você pode usar outros métodos combinado como `order()` e `limit()` para melhorar suas consultas.

## Deletar Registos

O DB Form também permite que você apagar registros retornados na consulta de forma simples.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .delete();
```

> `Importante`. O método `delete()` irá deletar todas as ocorrências da consulta, então atenção ao usar este.

> Assim como os demais é possível combinar outros métodos como `order()` e `limit()` para melhorar os resultados.


