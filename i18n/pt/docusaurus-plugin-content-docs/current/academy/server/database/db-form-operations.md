---
id: db-form-operations
title: Form e as Operações de Base de Dados
sidebar_label: DB Form
---

## EM DESENVOLVIMENTO

Atenção, em fase experimental, portanto a cada nova versão do Netuno pode haver grandes alterações, não é garantida a retrocompatibilidade.

## Antes de Começar

Antes de proceder certifique-se de que tem noções de SQL, relacionamento entre tabelas tais como `Many To One`, `One To Many` e etc. Além disso é necessario conhecimento prévio sobre os `Forms` do Netuno e como são organizados para conseguir extrair o maximo do `DB Form`.

> O `DB Form` esta disponível no Netuno somente apartir da versão `v7:20240606.1441`

## Introdução

Em desenvolvimento de software muitas vezes precisamos buscar informações em banco de dados e fazer isso usando SQL puro torna as coisas algo massivo e extressante. O Query transforma a construção de consultas SQL em uma experiência intuitiva e livre de estresse. Com ele, você pode criar consultas poderosas usando métodos amigáveis que abstraem a complexidade do SQL bruto entregando uma abordagem de desenvolvimento de consultas que se alinha ao seu fluxo de pensamento. 

## Como Funciona

No coração do Query está a capacidade de estruturar comandos SQL utilizando objetos e métodos. Em vez de escrever consultas SQL brutas diretamente, o Query permite que você use um mecanismo orientado a objetos para definir consultas de forma programática. Cada consulta é representada como um objeto. Você cria instâncias de classes de consulta que encapsulam diferentes partes do SQL, como seleção, filtragem, agrupamento, etc.

## Exemplos Práticos de Consultas

O `DB Form` é acessivel apartir do recurso `_db.form('form')`, uma vez invocado tens em mãos a consulta base que pode ser configurada usando os metodos e objetos disponíveis no mesmo.

### Buscar Todos

```
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
.get("people.name", "people_name"),
.get("people.active", "people_active"),
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

### Obter o Primeiro Registo

```
const query = _db.form('people')
.where(
    _db.where('name').startsWith('jail')
    .and('email').in(
        _val.list().add('first@mail.com').add('second@mail.com'))
)
.link('job')
.get("people.name", "people_name"),
.get("people.active", "people_active"),
.get("job.code", "job_code")
.order('people.age', 'desc')
.debug(true)

const firstResult = query.first();
```
Ao final do exemplo acima invocamos o método `first()`, este retorna a primeira ocorrência encontrada na execução na consulta, caso não encontre nunhuma,  retornará `null`.

### Resultado Com Paginação

```
const query = _db.form(
    'people'
)
.link(
    'job', 
    _db.link('task')
)
.get("people.name", "people_name"),
.get("people.active", "people_active"),
.get("job.code", "job_code")
.group("people.id")
.debug(true)

const page = query.page(_db.pagination(1,10));
```
> O numero da página no objeto Pagination inicia apartir de 1, então o exemplo acima é equivalente há: `offset = 0` e `limit = 10`.  

Ao final do exemplo acima invocamos o metodo `page()` passando como parâmetro o objeto `pagination` que possui as preferências da paginação. Este retornará um objeto página com os atributos equivalentes, exemplo:

```
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

### Guardar Registos

```
const result = _db.form(
    'people'
)
.set("name", "Caio Andrade")
.set("email", "caio@mail.com")
.insert();
```

### Atualizar Registos

Através do objeto DB Form você pode atualizar o registos da consulta de forma fácil e intuitiva.

```
_db.form(
    'people',
)
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

### Deletar Registos

O DB Form também permite que você delete registos retornados na consulta de forma simples.

```
_db.form(
    `people`
)
.link(
    'job',
    _db.where('code').equal('trainee')
).delete();
```

> `Importante`. O método `delete()` irá deletar todas as ocorrências da consulta, então atenção ao usar este.

> Assim como os demais é possível combinar outros métodos como `order()` e `limit()` para melhorar os resultados.

## Operadores de Relação

No objeto `Where` as relações são definidas por meio dos operadores de relação, segue abaixo os tipos de operadores de relação suportados pelo `Where`:
-  `equal('value')`
-  `startsWith('value')`
-  `endsWith('value')`
-  `contains('value')`
-  `in(_val.list())`
-  `notIn(_val.list())`
-  `greaterThan(value)`
-  `lessThan(value)`
-  `greaterOrEqualsThan(value)`
-  `lessOrEqualsThan(value)`
-  `different(value)`

