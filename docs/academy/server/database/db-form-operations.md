---
id: db-form-operations
title: Form and Database Operations
sidebar_label: DB Form
---

## Before You Start

Before proceeding, become familiar with SQL, table relationships such as one-to-many and many-to-one, and how Netuno Forms are organized. This background will help you use DB Form safely and effectively.

## Introduction

Applications often need to query and modify database records. DB Form provides a fluent, object-oriented API for building these operations without writing every SQL statement directly.

## How It Works

Each DB Form operation starts from a Netuno Form, which represents a database table. Methods then add filters, relationships, selected columns, grouping, ordering, and other options before a terminal method queries or changes the matching records.

## Initialization

Pass the base Form name to `_db.form()`. For a Form named `people`:

```javascript
const dbFormPeople = _db.form('people')
```

## Simple Query

The two most common retrieval methods are:

- `all()` returns all matching records as a list.
- `first()` returns the first matching record, or `null` when there is none.

```javascript
const people = _db.form('people').all()
const person = _db.form('people').first()
```

## Filters and Conditions

Use `where()` to restrict the records returned or changed by an operation:

```javascript
const person = _db.form('people')
    .where(_db.where('people_user_id').equals(_user.id))
    .first()
```

Conditions can be combined:

```javascript
const people = _db.form('people')
    .where(
        _db.where('type').in(_val.list().add('client').add('admin'))
            .and('email').notEqual(null)
    )
    .all()
```

## Where Comparisons

`_db.where()` returns a [Where object](/docs/library/objects/Where) with these comparison methods:

- `equal(value)` or `equals(value)` — equals (`=`).
- `notEqual(value)` or `notEquals(value)` — does not equal (`<>`).
- `greaterThan(value)` — greater than (`>`).
- `lessThan(value)` — less than (`<`).
- `greaterOrEqualsThan(value)` — greater than or equal to (`>=`).
- `lessOrEqualsThan(value)` — less than or equal to (`<=`).
- `startsWith(text)` — matches `text%` with `LIKE`.
- `endsWith(text)` — matches `%text` with `LIKE`.
- `contains(text)` — matches `%text%` with `LIKE`.
- `in(values)` — matches any value with `IN`.
- `notIn(values)` — excludes all values with `NOT IN`.

## Practical Query Examples

The `DB Form` is accessible from the `_db.form("form")` resource, once invoked you have in your hands the base that can be configured using the methods and objects available in it.

### Many-to-One Relationships and Distinct Results

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

### First Record with a Relationship and Ordering

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
At the end of the example above we invoke the `first()` method, this returns the first occurrence found when executing the query, if it does not find any, it will return `null`.

### Pagination

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
> The page number in the Pagination object starts from 1, so the example above is equivalent to: `offset = 0` and `limit = 10`. 

At the end of the example above, we invoke the `page()` method passing as a parameter the `pagination` object that has the pagination preferences. This will return a page object with the equivalent attributes, example:

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

## Insert Records

To insert data into the database, we use the `insert` method, for example:

```javascript
const dbPeopleInserted = _db.form("people")
    .set("name", "Caio Andrade")
    .set("email", "caio@mail.com")
    .insert();
```

With the result of `insert`, we can obtain the ID of the record that was inserted into the database.

Therefore, in `dbPeopleInserted`, the ID of the inserted record is obtained as follows:

```javascript
_log.info("People ID Inserted: "+ dbPeopleInserted.getInt('id'))
```

## Update Records

With DB Form you are able to update the records of a query in a simple way.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .set("name", "New Name")
    .set("email", "my-new-email@mail.com")
    .update();
```

> `Warning`. The method `update` will update all query result records, so build your operation correctly to avoid inconsistencies..

> You can also use other methods to filter like `order()`, `limit()` to improve your queries.

## Delete Records

The Query object allows you to delete the records returned by the query in a simple and intuitive way.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .delete();
```
> `Warning`. The method `delete()` will delete all records of the query result.

> You can also use other methods to filter like `order()`, `limit()` to improve your queries.

