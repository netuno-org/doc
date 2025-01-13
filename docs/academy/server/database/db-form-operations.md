---
id: db-form-operations
title: Form and Database Operations
sidebar_label: DB Form
---

## IN DEVELOPMENT

Please note that this is an experimental phase, so each new version of Netuno may have major changes, and backward compatibility is not guaranteed.

## Before You Starting

Before proceeding, check that there are notions of SQL, relationships between tables such as `Many To One`, `One To Many` and so on. Furthermore, prior knowledge of Netuno's Forms and how they are organized is necessary to get the most out of the Query object.

> `DB Form` is only available on Netuno from version `v7:20240606.1441`.

## Introduction

In software development we often need to search for information in databases and doing this using pure SQL makes things massive and stressful. Query turns building SQL queries into an intuitive, stress-free experience. With it, you can create powerful queries using user-friendly methods that abstract the complexity of raw SQL delivering a query development approach that aligns with your flow of thought.

## How it works

At the heart of Query is the ability to structure SQL commands using objects and methods. Instead of writing raw SQL queries directly, Query allows you to use an object-oriented engine to programmatically define queries. Each query is represented as an object. You create instances of query classes that encapsulate different parts of SQL like selection, filtering, grouping, etc.

## Practical Examples of Use

The `DB Form` is accessible from the `_db.form("form")` resource, once invoked you have in your hands the base that can be configured using the methods and objects available in it.

### Search All

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

In the example above we make a query for the `people` table relating it to two other tables, `job` and `netuno_user`, where `job` being related through the `link` method and `netuno_user` through the `join` method. It is possible to observe that `link` is much more simplified than `join`, this is because `link` reuses the Netuno `Form` relationship to map the relationship while `join` only uses the information provided in the method. It is also possible to understand the other methods and objects used, such as:

- `where` : Object provided to assemble conditions for a table.
- `link` : Method that relates the main table to another table using the Netuno `Form` criteria.
- `join` : Method that receives a relationship object between tables.
- `manyToOne` : Object that defines the type of relationship between tables, in this case a `Many To One` relationship.
- `debug` : Method that determines whether the constructed query will be printed to the console.
- `get` : Method that defines which fields will be returned in the operation.
- `distinct` : Method that determines whether the `DISTINCT` command will be applied to the query.
- `all` : Method that executes the query and returns the results in list form.

> The `link` method should only be used when the tables already have a relationship through Netuno's `Form`.

### Get First Record

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
At the end of the example above we invoke the `first()` method, this returns the first occurrence found when executing the query, if it does not find any, it will return `null`.

### Result With Pagination

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
> The page number in the Pagination object starts from 1, so the example above is equivalent to: `offset = 0` and `limit = 10`. 

At the end of the example above, we invoke the `page()` method passing as a parameter the `pagination` object that has the pagination preferences. This will return a page object with the equivalent attributes, example:

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

### Insert New Records

```
const result = _db.form(
    'people'
)
.set("name", "Caio Andrade")
.set("email", "caio@mail.com")
.insert();
```

### Update Records

With DB Form you are able to update the records of a query in a simple way.

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

> `Warning`. The method `update` will update all query result records, so build your operation correctly to avoid inconsistencies..

> You can also use other methods to filter like `order()`, `limit()` to improve your queries.

### Delete Records

The Query object allows you to delete the records returned by the query in a simple and intuitive way.

```
_db.form(
    `people`
)
.link(
    'job',
    _db.where('code').equal('trainee')
).delete();
```
> `Warning`. The method `delete()` will delete all records of the query result.

> You can also use other methods to filter like `order()`, `limit()` to improve your queries.

## Relationship Operators

Below are the types of relationship operators supported by `Where`:

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

