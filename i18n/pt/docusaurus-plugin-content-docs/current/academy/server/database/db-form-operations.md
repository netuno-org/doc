---
id: db-form-operations
title: Form e as Operações de Base de Dados
sidebar_label: DB Form
---

## EM DESENVOLVIMENTO

Atenção, em fase experimental, portanto a cada nova versão do Netuno pode haver grandes alterações, não é garantida a retrocompatibilidade.

## Antes de Começar

Antes de proceder certifique-se de que tem noções de SQL, relacionamento entre tabelas tais como `Many To One`, `One To Many` e etc. Além disso é necessario conhecimento prévio sobre os `Forms` do Netuno e como são organizados para conseguir extrair o maximo do objeto `Query`.

> O `Query` esta disponível no Netuno somente apartir da versão `v7:20240606.1441`

## Introdução

Em desenvolvimento de software muitas vezes precisamos buscar informações em banco de dados e fazer isso usando SQL puro torna as coisas algo massivo e extressante. O Query transforma a construção de consultas SQL em uma experiência intuitiva e livre de estresse. Com ele, você pode criar consultas poderosas usando métodos amigáveis que abstraem a complexidade do SQL bruto entregando uma abordagem de desenvolvimento de consultas que se alinha ao seu fluxo de pensamento. 

## Como Funciona

No coração do Query está a capacidade de estruturar comandos SQL utilizando objetos e métodos. Em vez de escrever consultas SQL brutas diretamente, o Query permite que você use um mecanismo orientado a objetos para definir consultas de forma programática. Cada consulta é representada como um objeto. Você cria instâncias de classes de consulta que encapsulam diferentes partes do SQL, como seleção, filtragem, agrupamento, etc.

## Exemplos Práticos de Consultas

O Objeto `Query` é acessivel apartir do recurso `_form`, uma vez invocado tens em mãos a consulta base que pode ser configurada usando os metodos e objetos disponíveis no mesmo.

### Buscar Todos

```
const query = _form.query(
    'people',
    _form.where('name', _form.startsWith('jail'))
    .and(
         _form.where('email', _form.contains('jai'))
         .or('email', _form.endsWith('com'))
     )
)
.link('job', _form.where('code', 'manager'))
.join(
    _form.manyToOne(
        'netuno_user', 
        'people_user_id',  
        _form.where('mail', _form.startsWith('jai'))
    ).join(
        _form.manyToOne(
            'netuno_group',
            'group_id',
            _form.where('code', 'people')
        )
    )
)
.fields(
    _form.field("people.name", "people_name"),
    _form.field("people.active", "people_active"),
    _form.field("people.uid", "people_uid")
)
.debug(true)
.distinct(true)

const results = query.all();
```

No exemplo acima fazemos uma consulta para a tabela `people` relacionando com mais outras duas tabelas, `job` e `netuno_user`, onde `job` sendo relacionado através do método `link` e `netuno_user` por meio do `join`. É possível observar que o `link` é muito mais simplificado que o `join` isto é pq o `link` reaproveita o relacionamento do `Form` do Netuno para mapear a relação enquanto o `join` utiliza somente as informações fornecidas no método. Tambem é possivel perceber os demais métodos e objetos utilizados como:

- `where` : Objeto fornecido para montar condições para uma tabela.
- `link` : Método que relaciona a tabela principal com uma outra tabela usando os critérios do `Form` do Netuno.
- `join` : Método que recebe um objeto de relação entre tabelas.
- `manyToOne` : Objeto que define o tipo de relação entre tabelas, nesse caso um relacionamento do tipo `Many To One`.
- `fields` : Método que recebe os campos (colunas) que serão retornadas na consulta.
- `field` : Objeto que representa o campo (coluna) que será retornado.
- `debug` : Método que determina se a consulta construída será impressa no console.
- `distinct` : Método que determina se o comando `DISTINCT` será aplicado a consulta.
- `all` : Método que executa a consulta e retorna os resultados em forma de lista.

> O metodo `link` somente deve ser usado quando as tabelas já possuem relação por meio do `Form` do Netuno.

### Obter o Primeiro Registo

```
const query = _form.query(
    'people',
    _form.where('name', _form.startsWith('jail'))
    .and('email', _form.in(
        _val.list().add('first@mail.com').add('second@mail.com')
        )
    )
)
.link('job')
.fields(
    _form.field("people.name", "people_name"),
    _form.field("people.active", "people_active"),
    _form.field("job.code", "job_code")
)
.order('people.age', 'desc')
.debug(true)

const firstResult = query.first();
```
Ao final do exemplo acima invocamos o método `first()`, este retorna a primeira ocorrência encontrada na execução na consulta, caso não encontre nunhuma,  retornará `null`.

### Resultado Com Paginação

```
const query = _form.query(
    'people'
)
.link(
    'job', 
    _form.link('task')
)
.fields(
    _form.field("people.name", "people_name"),
    _form.field("people.active", "people_active"),
    _form.field("job.code", "job_code")
)
.group("people.id")
.debug(true)

const page = query.page(_form.pagination(1,10));
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
const result = _form.query(
    'people'
).insert(
    _val.map()
        .set("name", "Caio Andrade")
        .set("email", "caio@mail.com")
);
```

### Atualizar Registos

Através do objeto Query você pode atualizar o registos da consulta de forma fácil e intuitiva.

```
_form.query(
    'people',
)
.link(
    'job',
    _form.where('code', 'trainee')
).updateFirst(
    _val.map()
        .set("name", "new name")
        .set("email", "mynewemail@mail.com")
);
```

> O método `updateFirst()` atualiza o primeiro resultado da lista de registos da consulta. 

Através do objeto Query também é possivel atualizar todos as ocorrências da consulta.

```
_form.query(
    'people',
)
.link(
    'job',
    _form.where('code', 'trainee')
).updateAll(
    _val.map()
       .set("active", false)
);
```

> `Importante`. O método `updateAll()` irá atualizar todas a ocorrências da consulta, então atenção ap utilizar este.

> Alé disso você pode usar outros métodos combinado como `order()` e `limit()` para melhorar suas consultas.

### Deletar Registos

O objeto Query também permite que você delete registos retornados na consulta de forma simples.

```
_form.query(
    `people`
)
.link(
    'job',
    _form.where('code', 'trainee')
).deleteFirst();
```
> O método `deleteFirst()` deleta o primeira resultado da lista de registos. 

Além disso é possivel também deletar todas as ocorrências da consulta.

```
_form.query(
    `people`
)
.link(
    'job',
    _form.where('code', 'trainee')
).deleteAll();
```
> `Importante`. O método `deleteAll()` irá deletar todas as ocorrências da consulta, então atenção ao usar este.

> Assim como os demais é possível combinar outros métodos como `order()` e `limit()` para melhorar os resultados.

## Operadores de Relação

No objeto `Where` as relações são definidas por meio dos operadores de relação que são acessíveis apartir do recurso `_form`, segue abaixo os tipos de operadores de relação suportados pelo `Where`:
-  `_form.startsWith('valor')`
-  `_form.endsWith('valor')`
-  `_form.contains('valor')`
-  `_form.in(_val.list())`
-  `_form.greaterThan(valor)`
-  `_form.lessThan(valor)`
-  `_form.greaterOrEqualsThan(valor)`
-  `_form.lessOrEqualsThan(valor)`
-  `_form.different(valor)`

> Para comparações exatas o valor pode ser passado diretamente no objeto `Where` `_form.where('campo', 'valor')`

