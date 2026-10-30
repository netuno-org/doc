---
id: db-form-operations
title: Form and Database Operations
sidebar_label: DB Form
---

## Before You Begin

Before proceeding, make sure you have a grasp of SQL and table relationships such as "one-to-many" and "many-to-one".

In addition, prior knowledge of Netuno `Forms` and how they are organized is required to get the most out of DB Form.

## Introduction

In software development, we often need to retrieve information from a database, and doing so using raw SQL makes things somewhat massive and stressful. Query turns building SQL queries into an intuitive, stress-free experience. With it, you can create powerful queries using friendly methods that abstract the complexity of raw SQL and deliver a query development approach that aligns with your thought process.

## How It Works

At the heart of DB Form is the ability to structure SQL commands using objects and methods. Instead of writing SQL commands directly, DB Form lets you use an object-oriented mechanism to define queries and operations programmatically.

Each query or database operation is represented as an object.

You create instances of query classes that encapsulate different parts of SQL, such as selection, filtering, grouping, etc. You also perform operations to delete, insert, and update records.

## Initialization

Everything starts with initializing DB Form, which needs to know the name of the base or main form that will be used. In other words, forms in Netuno always represent database tables, so this is the same as specifying the base table or main table.

In this example, we initialize DB Form from the `people` form/table:

```javascript
const dbFormPeople = _db.form("people")
```

Once DB Form is initialized, we can perform queries or operations.

## Simple Query

DB Form provides two very common methods for retrieving data, in addition to pagination and distinct results, which are:

- `all` - All records as a list.
- `first` - Gets only the first record.

See the following examples.

To get all people:

```javascript
const dbPeopleList = _db.form("people")
    .all()
```

To get only one person:

```javascript
const dbPeople = _db.form("people")
    .first()
```

## Filters and Conditions

With `where`, we can filter data that meets certain conditions.

See some examples:

```js
const dbPeople = _db.form("people")
    .where(_db.where("people_user_id").equals(_user.id))
    .first()
```

```js
const dbPeopleList = _db.form("people")
    .where(
        _db.where("type").in(_val.list().add("client").add("admin"))
            .and("email").notEqual(null)
    ).all()
```

## Where Comparisons

`_db.where` provides the [Where](/docs/library/objects/Where) object, which supports the following comparison operations:

Comparisons with numeric and textual operators:

-  `equal(...)` or `equals(...)` - Checks equality; it is `=`.
-  `notEqual(...)` or `notEquals(...)` - Whether it is different from the passed value; it is `<>`.
-  `greaterThan(...)` - Whether it is greater than the passed value; it is `>`.
-  `lessThan(...)` - Whether it is less than the passed value; it is `<`.
-  `greaterOrEqualsThan(...)` - Whether it is greater than or equal to the passed value; it is `>=`.
-  `lessOrEqualsThan(...)` - Whether it is less than or equal to the passed value; it is `<=`.

Text conditions with the `LIKE` operator:

-  `startsWith('text')` - Whether it starts with the given prefix; it is `LIKE '...%'`.
-  `endsWith('text')` - Whether it ends with the given suffix; it is `LIKE '%...'`.
-  `contains('text')` - Whether it contains the term; it is `LIKE '%...%'`.

Conditions with lists using the `IN` operator:

-  `in(_val.list()...)` - Whether it is equal to any value in the list; it is the `IN (...)` condition.
-  `notIn(_val.list()...)` - Whether it is not equal to any value in the list; it is the `NOT IN (...)` condition.

## Practical Query Examples

`DB Form` is accessible from the `_db.form('form')` resource; once invoked, you have the base query at hand, which can be configured using the methods and objects available in it.

### Many-to-One and Distinct Results

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('joh')
        .and(
             _db.where('email').contains('joh')
             .or('email').endsWith('com')
         )
    )
    .link('job', _db.where('code').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'people_user_id',  
            _db.where('mail').startsWith('joh')
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

In the example above, we query the `people` table, relating it to two other tables, `job` and `netuno_user`, where `job` is related through the `link` method and `netuno_user` through `join`. You can see that `link` is much simpler than `join`; this is because `link` reuses the Netuno `Form` relationship to map the relation, while `join` uses only the information provided in the method. You can also see the other methods and objects used, such as:

- `where` : Object provided to build conditions for a table.
- `link` : Method that relates the main table to another table using the Netuno `Form` criteria.
- `join` : Method that receives a table relationship object.
- `get` : Method that defines which fields will be returned in the query.
- `manyToOne` : Object that defines the type of relationship between tables; in this case, a `Many To One` relationship.
- `debug` : Method that determines whether the built query will be printed to the console.
- `distinct` : Method that determines whether the `DISTINCT` command will be applied to the query.
- `all` : Method that executes the query and returns the results as a list.

> The `link` method should only be used when the tables already have a relationship through the Netuno `Form`.

### First Record with Relationship and Sorting

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('joh')
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
At the end of the example above, we invoke the `first()` method. It returns the first occurrence found when the query is executed; if none is found, it returns `null`.

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

> The page number in the Pagination object starts at 1, so the example above is equivalent to: `offset = 0` and `limit = 10`.  

At the end of the example above, we invoke the `page()` method, passing as a parameter the `pagination` object that holds the pagination preferences. It returns a page object with the equivalent attributes, for example:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"job_code": "trainee",
			"people_active": true,
			"people_name": "James Smith"
		},
		{
			"job_code": "manager",
			"people_active": true,
			"people_name": "John Smith"
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
    .set("name", "John Smith")
    .set("email", "john@mail.com")
    .insert();
```

With the result of `insert`, we can get the ID of the record that was inserted into the database.

Therefore, from `dbPeopleInserted`, you get the `id` of the inserted record as follows:

```javascript
_log.info("Inserted People ID: "+ dbPeopleInserted.getInt('id'))
```

## Edit Records

Through the DB Form object, you can update the query records easily and intuitively.

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

> `Important`. The `update()` method will update all occurrences of the query, so be careful when using it.

> In addition, you can use other methods combined, such as `order()` and `limit()`, to improve your queries.

## Delete Records

DB Form also lets you delete records returned by the query in a simple way.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .delete();
```

> `Important`. The `delete()` method will delete all occurrences of the query, so be careful when using it.

> As with the others, you can combine other methods such as `order()` and `limit()` to improve the results.