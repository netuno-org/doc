---
id: db
title: DB
sidebar_label: DB
---

Datasource loading resource.
This resource allows you to load the datasource that suits you best, supports connection to MariaDB, MSSQLServer, PostgreSQL, H2 and Oracle.

```javascript
// Be careful when entering parameters in queries,
// you must not use the string concatenation
// to ensure security against SQL Injection as it follows:

const NOK = _db.query(
  'select * from client where id = '+ _req.getString('id')
);

// WARNING: The above example is incorrect.
// Follow the pattern below to ensure safety
// when injecting parameters:

const OK = _db.query(
  'select * from client where id = ?', _val.list().add( _req.getString('id') )
);
```

---

## all

---

#### _db.all(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

## batch

---

#### _db.batch() : _[DBBatch](../../objects/DBBatch)_
##### Description

Starts batch processing of database executions.

##### How To Use

```javascript
const batchParameters = _db.batch(`
        insert into product(id, uid, name, price, active)
        values(nextval('product_id'), ?, ?, ?, true)
    `)
    .put(_uid.generate(), "Netuno Batch 1", 3.2)
    .put(_uid.generate(), "Netuno Batch 2", 5.4)
const results = batchParameters.execute()
```

##### Return

( _[DBBatch](../../objects/DBBatch)_ )

Batch execution manager.

---

#### _db.batch(sqlCommand: string) : _[DBBatch](../../objects/DBBatch)_
##### Description

Starts the batch processing of executions in the database, based on a single command that will be executed multiple times with variation of the data.

##### How To Use

```javascript
const batchParameters = _db.batch(`
        insert into product(id, uid, name, price, active)
        values(nextval('product_id'), ?, ?, ?, true)
    `)
    .put(_uid.generate(), "Netuno Batch 1", 3.2)
    .put(_uid.generate(), "Netuno Batch 2", 5.4)
const results = batchParameters.execute()
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sqlCommand | string | SQL command that will be used as the basis for all interactions. |

##### Return

( _[DBBatch](../../objects/DBBatch)_ )

Batch execution manager.

---

## checkExists

---

#### _db.checkExists() : _[CheckExists](../../objects/CheckExists)_
##### Return

( _[CheckExists](../../objects/CheckExists)_ )


---

## column

---

#### _db.column() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

## config

---

#### _db.config() : _[Values](../../objects/Values)_
##### Description

Gets the connection configuration to the database being used.
The connection details are defined in the application environment configuration document, more information in the [Multiple Databases](../../tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_Config = _db.getConfig()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_Config.toJSON()}\n`)

const db_OTHER_Config = _db.init("countries").getConfig()
_out.print(`The OTHER DB connection is: ${db_OTHER_Config.toJSON()}\n`)

```

##### Return

( _[Values](../../objects/Values)_ )

Configuration of the connection to the database being used.

---

## date

---

#### _db.date() : _Date_
##### Description

Gets the current date to be used in database operations.

##### Return

( _Date_ )

Current date.

---

#### _db.date(time: _Long_) : _Date_
##### Description

Through the long number that identifies the exact date, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _Long_ | Long number for the exact date. |

##### Return

( _Date_ )

New object of type: _java.sql.Date_

---

#### _db.date(text: string) : _Date_
##### Description

With the text content you get the date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Text containing date in the format: `yyyy-MM-dd` |

##### Return

( _Date_ )

Date obtained from the text.

---

#### _db.date(instant: _Instant_) : _Date_
##### Description

Using the Instant object, it creates a new Date object with java.sql.**Date.from**, to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| instant | _Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _Date_ )

New object of type: _java.util.Date_

---

#### _db.date(localDateTime: _LocalDate_) : _Date_
##### Description

Using the LocalDateTime object, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localDateTime | _LocalDate_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _Date_ )

New object of type: _java.sql.Date_

---

## delete

---

#### _db.delete(table: string, id: _int_) : _int_
##### Description

Performs the deletion of records in the database based on the ID.

##### How To Use

```javascript
// Performs data deletion via ID

const id = 1;

const result = _db.delete(
    "client",
    id
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table's name in the database. |
| id | _int_ | Record's ID to be deleted. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.delete(table: string, uid: string) : _int_
##### Description

Performs the deletion of records in the database based on the UID.

##### How To Use

```javascript
// Executa a eliminação através do uid

const uid = "1d8722f4-fa28-4a08-8098-6dd5cab1b212";

const result = _db.delete(
    "client",
    uid
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table's name in the database. |
| uid | string | Record's UID to be deleted. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.delete(table: string, data: _Map_) : _int_
##### Description

Performs the deletion of records in the database based on the ID or UID passed on the data object.

##### How To Use

```javascript
// Performs data deletion via ID or UID

const result = _db.delete(
    "client",
    _val.map().set("id", 1)
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table name in the database. |
| data | _Map_ | Data structure that should be deleted based on your ID or UID. |

##### Return

( _int_ )

Number of records affected by deletion.

---

#### _db.delete(table: string, data: _[Values](../../objects/Values)_) : _int_
##### Description

Performs the deletion of records in the database based on the ID or UID passed on the data object.

##### How To Use

```javascript
// Performs data deletion via ID or UID

const result = _db.delete(
    "client",
    _val.map().set("id", 1)
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table name in the database. |
| data | _[Values](../../objects/Values)_ | Data structure that should be deleted based on your ID or UID. |

##### Return

( _int_ )

Number of records affected by deletion.

---

## deleteMany

---

#### _db.deleteMany(arg0: string, arg1: _Object[]_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Return

( _int[]_ )


---

#### _db.deleteMany(arg0: string, arg1: _List_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Return

( _int[]_ )


---

#### _db.deleteMany(arg0: string, arg1: _[Values](../../objects/Values)_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _int[]_ )


---

## escape

---

#### _db.escape(data: string) : string
##### Description

It guarantees the encoding to define names in the database, usually quotation marks (**"**).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Name that needs to be used in the database, such as table or column name |

##### Return

( string )

Safe name to use in databases, as in tables and columns.

---

## escapeEnd

---

#### _db.escapeEnd() : string
##### Description

Gets the end encoding for defining names in the database, usually quotes (**"**).

##### Return

( string )

End of names in database.

---

## escapeStart

---

#### _db.escapeStart() : string
##### Description

Gets the start encoding for defining names in the database, usually quotes (**"**).

##### Return

( string )

Beginning of names in database.

---

## execute

---

#### _db.execute(sqlCommand: string) : _int_
##### Description

Execute commands directly on the database, commands such as inserts and updates can be executed as required.

##### How To Use

```javascript
const rowsAffected = _db.execute(`
    insert into product(id, uid, name, price, active)
    values(nextval('product_id'), '${_uid.generate()}', '${_db.sanitize('Netuno Insert Test 1')}', 3.2, true)
`)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sqlCommand | string | SQL command that will be executed directly on the database. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: _Object[]_) : _int_
##### Description

Execute commands directly on the database, commands such as inserts and updates can be executed as required.

##### How To Use

```javascript
const rowsAffected = _db.execute(`
    insert into product(id, uid, name, price, active)
    values(nextval('product_id'), ?, ?, ?, true)
`, _uid.generate(), "Netuno Insert Test 1", 3.2)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sqlCommand | string | SQL command that will be executed directly on the database. |
| params | _Object[]_ | The sequence of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: _List_) : _int_
##### Description

Execute commands directly on the database, commands such as inserts and updates can be executed as required.

##### How To Use

```javascript
const rowsAffected = _db.execute(`
    insert into product(id, uid, name, price, active)
    values(nextval('product_id'), ?, ?, ?, true)
    `, _val.list()
        .add(_uid.generate())
        .add("Netuno Insert Test 1")
        .add(3.2)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sqlCommand | string | SQL command that will be executed directly on the database. |
| params | _List_ | List of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: _[Values](../../objects/Values)_) : _int_
##### Description

Execute commands directly on the database, commands such as inserts and updates can be executed as required.

##### How To Use

```javascript
const rowsAffected = _db.execute(`
    insert into product(id, uid, name, price, active)
    values(nextval('product_id'), ?, ?, ?, true)
    `, _val.list()
        .add(_uid.generate())
        .add("Netuno Insert Test 1")
        .add(3.2)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sqlCommand | string | SQL command that will be executed directly on the database. |
| params | _[Values](../../objects/Values)_ | List of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

## find

---

#### _db.find(table: string, params: _[Values](../../objects/Values)_) : _List_
##### Description

From an object that has the structure similar to an SQL query, you get a list of the data found in the search conditions.
Build the query compatible with any type of database.
Allows conditions, ordering, avoids SQL Injection, among others.
Example that demonstrates how to define columns, conditions, ordering and pagination:

##### How To Use

```javascript
const list = _db.find(
    "pessoa",
    _val.map()
        .set(
            "columns",
            _val.list()
                .add("uid")
                .add(
                    _val.map()
                        .set("name", "John")
                        .set("surname", "Lennon")
                    )
                .add("email")
        )
        .set(
            "where",
            _val.map()
                .set("grupo", 1)
                .set(
                    "email",
                    _val.map()
                        .set("operator", "like")
                        .set("value", "%@e-mail.sample")
                 )
        )
        .set(
            "order",
            _val.list()
                .add("name")
                .add("surname")
        )
        .set("limit", 10)
        .set("offset", 5)
)
_out.json(
    list
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table name. |
| params | _[Values](../../objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _List_ )

List of data records found.

---

## findFirst

---

#### _db.findFirst(table: string, params: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Description

From an object that has the structure similar to an SQL query, you get a list of the data found in the search conditions.
Build the query compatible with any type of database.
Allows conditions, ordering, avoids SQL Injection, among others.
Example that demonstrates how to define columns, conditions, ordering and pagination:

##### How To Use

```javascript
const record = _db.findFirst(
    "pessoa",
    _val.map()
        .set(
            "where",
            _val.map()
                .set("email", "pessoa@e-mail.exemplo")
        )
)
_out.json(
    record
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table name. |
| params | _[Values](../../objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _[Values](../../objects/Values)_ )

Record line data found.

---

## findQuery

---

#### _db.findQuery(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

## get

---

#### _db.get(table: string, id: _int_) : _[Values](../../objects/Values)_
##### Description

Obtains the record data from the database through the name of the table and the ID.

##### How To Use

```javascript
// All registry data with the given ID.

const dbClientRecord = _db.get(
    "client",
    100
)

_out.json(dbClientRecord);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table in the database that should obtain the data. |
| id | _int_ | Record ID that should get the data. |

##### Return

( _[Values](../../objects/Values)_ )

The item data found or null if it does not exist.

---

#### _db.get(table: string, uid: string) : _[Values](../../objects/Values)_
##### Description

Obtains the record data from the database through the name of the table and the UID.

##### How To Use

```javascript
// All registry data with the given UID.

const dbClientRecord = _db.get(
    "client",
    "cbe8bd5a-98c9-48b2-bbac-6a11ac46f2a8"
)

_out.json(dbClientRecord);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table in the database that should obtain the data. |
| uid | string | Record UID that should get the data. |

##### Return

( _[Values](../../objects/Values)_ )

The item data found or null if it does not exist.

---

## getConfig

---

#### _db.getConfig() : _[Values](../../objects/Values)_
##### Description

Gets the connection configuration to the database being used.
The connection details are defined in the application environment configuration document, more information in the [Multiple Databases](../../tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_Config = _db.getConfig()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_Config.toJSON()}\n`)

const db_OTHER_Config = _db.init("countries").getConfig()
_out.print(`The OTHER DB connection is: ${db_OTHER_Config.toJSON()}\n`)

```

##### Return

( _[Values](../../objects/Values)_ )

Configuration of the connection to the database being used.

---

## getKey

---

#### _db.getKey() : string
##### Description

Gets the name of the database connection configuration being used.
The connection details must be defined in the application environment configuration document, more information in the [Multiple Databases](../../tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_ConnectionName = _db.getKey()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_ConnectionName}\n`)

const db_OTHER_ConnectionName = _db.init("countries").getKey()
_out.print(`The OTHER DB connection is: ${db_OTHER_ConnectionName}\n`)

```

##### Return

( string )

Name of the connection configuration to the database being used.

---

## index

---

#### _db.index() : _[Index](../../objects/Index)_
##### Return

( _[Index](../../objects/Index)_ )


---

## init

---

#### _db.init(key: string) : _DB_
##### Description

Starts a new DB resource for the connection name that is passed.
The connection details must be defined in the application's environment configuration document, more information in the [Multiple Databases](../../tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
// Run a query in another database                                                                                              

const dbCountries = _db.init('countries')

const countries = dbCountries.query('select code, name from country')

_out.json(countries)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Base connection name defined in the application's environment configurations. |

##### Return

( _DB_ )

The new database feature that uses another database.

---

## insert

---

#### _db.insert(table: string, data: _Map_) : _int_
##### Description

Executes the insertion of new data in the database and returns the id of the same.

##### How To Use

```javascript
// Executes the insertion of new record and returns the ID

const id = _db.insert(
    "client",
    _val.map()
        .set("name", "Sitana"),
        .set("mail", "admin@sitana.pt")
);

_out.json(
    _val.map().set("id", id)
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table in the database that should receive the data to be entered. |
| data | _Map_ | Object with the data structure to be inserted. |

##### Return

( _int_ )


---

#### _db.insert(table: string, data: _[Values](../../objects/Values)_) : _int_
##### Description

Executes the insertion of new data in the database and returns the id of the same.

##### How To Use

```javascript
// Executes the insertion of new record and returns the ID

const id = _db.insert(
    "client",
    _val.map()
        .set("name", "Sitana"),
        .set("mail", "admin@sitana.pt")
);

_out.json(
    _val.map().set("id", id)
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table in the database that should receive the data to be entered. |
| data | _[Values](../../objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )


---

## insertIfNotExists

---

#### _db.insertIfNotExists(arg0: string, arg1: _Map_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Return

( _int_ )


---

#### _db.insertIfNotExists(arg0: string, arg1: _[Values](../../objects/Values)_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _int_ )


---

## insertMany

---

#### _db.insertMany(arg0: string, arg1: _Object[]_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Return

( _int[]_ )


---

#### _db.insertMany(arg0: string, arg1: _List_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Return

( _int[]_ )


---

#### _db.insertMany(arg0: string, arg1: _[Values](../../objects/Values)_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _int[]_ )


---

## isH2

---

#### _db.isH2() : _boolean_
##### Description

Checks whether the connected database is H2 Database.

##### Return

( _boolean_ )

If it is H2 Database.

---

## isH2DataBase

---

#### _db.isH2DataBase() : _boolean_
##### Description

Checks whether the connected database is H2 Database.

##### Return

( _boolean_ )

If it is H2 Database.

---

## isMariaDB

---

#### _db.isMariaDB() : _boolean_
##### Description

Checks whether the connected database is MariaDB.

##### Return

( _boolean_ )

If it is MariaDB.

---

## isPG

---

#### _db.isPG() : _boolean_
##### Description

Checks whether the connected database is PostgreSQL.

##### Return

( _boolean_ )

If it is PostgreSQL.

---

## isPostgreSQL

---

#### _db.isPostgreSQL() : _boolean_
##### Description

Checks whether the connected database is PostgreSQL.

##### Return

( _boolean_ )

If it is PostgreSQL.

---

## key

---

#### _db.key() : string
##### Description

Gets the name of the database connection configuration being used.
The connection details must be defined in the application environment configuration document, more information in the [Multiple Databases](../../tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_ConnectionName = _db.getKey()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_ConnectionName}\n`)

const db_OTHER_ConnectionName = _db.init("countries").getKey()
_out.print(`The OTHER DB connection is: ${db_OTHER_ConnectionName}\n`)

```

##### Return

( string )

Name of the connection configuration to the database being used.

---

## query

---

#### _db.query(arg0: string) : _List_
##### Description

Run a SQL query directly on the database. Be very careful with SQL Injection.

##### How To Use

```javascript
const safeMaxAmount = _db.toFloat(_req.getString("max_amount"))

_out.json(
    _db.query(`
        select * from product
        where price < ${safeMaxAmount}
    `)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: _Object[]_) : _List_
##### Description

Run a SQL query directly on the database. Be very careful with SQL Injection.

##### How To Use

```javascript
_out.json(
    _db.query(`
        select * from product
        where price < ?
    `, _req.getString("max_price"))
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get records. |
| params | _Object[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: _List_) : _List_
##### Description

Run a SQL query directly on the database. Be very careful with SQL Injection.

##### How To Use

```javascript
_out.json(
    _db.query(`
        select * from product
        where price < ?
    `, _req.getString("max_price"))
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get records. |
| params | _List_ | List of parameter values that will be injected into the database query. |

##### Return

( _List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: _[Values](../../objects/Values)_) : _List_
##### Description

Run a SQL query directly on the database. Be very careful with SQL Injection.

##### How To Use

```javascript
_out.json(
    _db.query(`
        select * from product
        where price < ?
    `, _req.getString("max_price"))
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get records. |
| params | _[Values](../../objects/Values)_ | List of parameter values that will be injected into the database query. |

##### Return

( _List_ )

List of data obtained with the direct query to the database.

---

## queryFirst

---

#### _db.queryFirst(query: string) : _[Values](../../objects/Values)_
##### Description

Run an SQL query directly on the database and get only the first record. Be very careful with SQL Injection.

##### How To Use

```javascript
const productFound = _db.queryFirst(`
    select * from product
    where name like '%${_db.sanitize(_req.getString('term'))}%'
`)
_log.info('The first product found:', productFound)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get the record. |

##### Return

( _[Values](../../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: _Object[]_) : _[Values](../../objects/Values)_
##### Description

Run an SQL query directly on the database and get only the first record. Be very careful with SQL Injection.

##### How To Use

```javascript
const productFound = _db.queryFirst(`
    select * from product
    where name like ?
`, `%${_req.getString('term')}%`)
_log.info('The first product found:', productFound)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get the record. |
| params | _Object[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](../../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: _List_) : _[Values](../../objects/Values)_
##### Description

Run an SQL query directly on the database and get only the first record. Be very careful with SQL Injection.

##### How To Use

```javascript
const productFound = _db.queryFirst(`
    select * from product
    where name like ?
`, `%${_req.getString('term')}%`)
_log.info('The first product found:', productFound)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get the record. |
| params | _List_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](../../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Description

Run an SQL query directly on the database and get only the first record. Be very careful with SQL Injection.

##### How To Use

```javascript
const productFound = _db.queryFirst(`
    select * from product
    where name like ?
`, `%${_req.getString('term')}%`)
_log.info('The first product found:', productFound)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| query | string | Command that will be executed on the database to get the record. |
| params | _[Values](../../objects/Values)_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](../../objects/Values)_ )

The first data record obtained with the direct database query.

---

## sanitize

---

#### _db.sanitize(data: string) : string
##### Description

It certifies that the content is safe to inject in a direct query to the database, prevents SQL Injection attacks.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Information that needs to be used in a SQL Injection risk database. |

##### Return

( string )

Safe content to use directly in queries.

---

## sanitizeBoolean

---

#### _db.sanitizeBoolean(data: string) : string
##### Description

It certifies that the content is safe to inject as boolean (true or false) in a direct query to the database, preventing SQL Injection attacks.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Information that needs to be used as boolean (true or false) in a database with the risk of SQL Injection. |

##### Return

( string )

Content like Boolean (true or false) safe to use directly in queries.

---

## sanitizeFloat

---

#### _db.sanitizeFloat(data: string) : string
##### Description

It certifies that the content is safe to inject as a decimal number in a direct query to the database, prevents SQL Injection attacks.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Information that needs to be used as a decimal number in a database with risk of SQL Injection. |

##### Return

( string )

Content as a safe decimal number to use directly in queries.

---

## sanitizeInt

---

#### _db.sanitizeInt(data: string) : string
##### Description

It certifies that the content is safe to inject as an integer in a direct query to the database, prevents SQL Injection attacks.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Information that needs to be used as an integer in a database with risk of SQL Injection. |

##### Return

( string )

Content as a safe integer to use directly in queries.

---

## sanitizeName

---

#### _db.sanitizeName(data: string) : string
##### Description

It certifies that the content is safe to inject as a table or column name in a direct query to the database, preventing SQL Injection attacks.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Information that needs to be used as a table or column name in a database with the risk of SQL Injection. |

##### Return

( string )

Content such as table or column name safe to use directly in queries.

---

## sanitizePath

---

#### _db.sanitizePath(data: string) : string
##### Description

It certifies that the content is safe to inject as a table name path followed by a period and then the column name (table.column), in direct query to the database, prevents SQL Injection attacks.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string | Information that needs to be used as a path (table.name) in a database with the risk of SQL Injection. |

##### Return

( string )

Content as a safe path (table.name) to use directly in queries.

---

## save

---

#### _db.save(arg0: string, arg1: _int_, arg2: _Map_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |
| arg2 | _Map_ |   |

##### Return

( _int_ )


---

#### _db.save(arg0: string, arg1: _int_, arg2: _[Values](../../objects/Values)_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( _int_ )


---

#### _db.save(arg0: string, arg1: string, arg2: _Map_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _Map_ |   |

##### Return

( _int_ )


---

#### _db.save(arg0: string, arg1: string, arg2: _[Values](../../objects/Values)_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( _int_ )


---

## search

---

#### _db.search(arg0: string, arg1: _Map_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(arg0: string, arg1: _Map_, arg2: _boolean_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |
| arg2 | _boolean_ |   |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(arg0: string, arg1: _[Values](../../objects/Values)_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(arg0: string, arg1: _[Values](../../objects/Values)_, arg2: _boolean_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |
| arg2 | _boolean_ |   |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

## sequence

---

#### _db.sequence() : _[Sequence](../../objects/Sequence)_
##### Return

( _[Sequence](../../objects/Sequence)_ )


---

## store

---

#### _db.store(arg0: string, arg1: _Map_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Return

( _int_ )


---

#### _db.store(arg0: string, arg1: _[Values](../../objects/Values)_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _int_ )


---

## table

---

#### _db.table() : _[Table](../../objects/Table)_
##### Return

( _[Table](../../objects/Table)_ )


---

## time

---

#### _db.time() : _Time_
##### Description

Gets the current time to be used in database operations.

##### Return

( _Time_ )

Current time.

---

#### _db.time(time: _Long_) : _Time_
##### Description

Through the long number that identifies the exact time, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _Long_ | Long number referring to the exact time. |

##### Return

( _Time_ )

New object of type: _java.sql.Time_

---

#### _db.time(text: string) : _Time_
##### Description

With the text content you get the time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Text containing time in the format: `HH:mm:ss` |

##### Return

( _Time_ )

Time obtained from the text.

---

#### _db.time(instant: _Instant_) : _Date_
##### Description

Using the Instant object, it creates a new Date object with java.sql.**Time.from**, to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| instant | _Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _Date_ )

New object of type: _java.util.Date_

---

#### _db.time(localDateTime: _LocalTime_) : _Time_
##### Description

Using the LocalDateTime object, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localDateTime | _LocalTime_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _Time_ )

New object of type: _java.sql.Time_

---

## timestamp

---

#### _db.timestamp() : _Timestamp_
##### Description

Gets the current date and time to be used in database operations.

##### Return

( _Timestamp_ )

Current date and time.

---

#### _db.timestamp(time: _Long_) : _Timestamp_
##### Description

Through the long number that identifies the exact time, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _Long_ | Long number referring to the exact time. |

##### Return

( _Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### _db.timestamp(text: string) : _Timestamp_
##### Description

With the text content you get the date and time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Text containing date and time in the format: `yyyy-MM-dd HH:mm:ss` |

##### Return

( _Timestamp_ )

Date and time obtained from the text.

---

#### _db.timestamp(instant: _Instant_) : _Timestamp_
##### Description

Using the Instant object, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| instant | _Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### _db.timestamp(localDateTime: _LocalDateTime_) : _Timestamp_
##### Description

Using the LocalDateTime object, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localDateTime | _LocalDateTime_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _Timestamp_ )

New object of type: _java.sql.Timestamp_

---

## toFloat

---

#### _db.toFloat(arg0: string) : string
##### Description

Ensures that it is a valid number with decimal places to be used directly in a query avoiding SQL Injection.

##### How To Use

```javascript
const safeMaxAmount = _db.toFloat(_req.getString("max_amount"))

_out.json(
    _db.query(`
        select * from product
        where price < ${safeMaxAmount}
    `)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Content that is safe to use directly in query as a number with decimal places (_float_).

---

## toInt

---

#### _db.toInt(arg0: string) : string
##### Description

Ensures that it is a valid integer to be used directly in a query avoiding SQL Injection.

##### How To Use

```javascript
const safeID = _db.toInt(_req.getString("id"))

_out.json(
    _db.query(`
        select * from client
        where id = ${safeID}
    `)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Content that is safe to use directly in query as number/integer.

---

## toIntSequence

---

#### _db.toIntSequence(arg0: string) : string
##### Description

It ensures that it is a sequence of numbers separated by commas to be used directly in a query avoiding SQL Injection.

##### How To Use

```javascript
// Ensures that the sequence of IDs looks something like:// 3,5,600,1000
const safeIDs = _db.toIntSequence(_req.getString("ids"))

_out.json(
    _db.query(`
        select * from client
        where id in (${safeIDs})
    `)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Sequential numeric content that is safe to use directly in query.

---

## toRawName

---

#### _db.toRawName(arg0: string) : string
##### Description

It certifies that the content passed is a valid name to be used in direct queries to the database, if it is not then an error is returned.
For example valid if the name is in the format to be a name of `table_name` or of` column_name`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Returns the name that is safe to use directly in queries.

---

## toRawPath

---

#### _db.toRawPath(arg0: string) : string
##### Description

It certifies that the content passed is a valid path to be used in direct queries to the database, if it is not then an error is returned.
For example, valid if the path is compatible with `table_name`.`column_name`.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Returns the path that is safe to use directly in queries.

---

## toString

---

#### _db.toString() : string
##### Description

Ensures that it is a valid string to be used directly in a query avoiding SQL Injection.

##### How To Use

```javascript
// Avoid SQL Injection                                                                                                          

const safeName = _db.toString(_req.getString('name'))

_out.json(
    _db.query(`                                                                                                                 
        select * from client                                                                                                    
        where name = '${safeName}'                                                                                              
    `)
)
```

##### Return

( string )

Content that is safe to use directly in query as string/varchar/text.

---

#### _db.toString(arg0: string) : string
##### Description

Ensures that it is a valid string to be used directly in a query avoiding SQL Injection.

##### How To Use

```javascript
// Avoid SQL Injection                                                                                                          

const safeName = _db.toString(_req.getString('name'))

_out.json(
    _db.query(`                                                                                                                 
        select * from client                                                                                                    
        where name = '${safeName}'                                                                                              
    `)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Content that is safe to use directly in query as string/varchar/text.

---

## update

---

#### _db.update(table: string, id: _int_, data: _Map_) : _int_
##### Description

Performs the update of existing data according to the id that comes in the data that is passed.

##### How To Use

```javascript
var result = _db.update(
    "client",
    1, // ID of the registry that will be affected.
    _val.map()
        .set("name", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table containing the records that must be updated. |
| id | _int_ | ID of the registry that will be affected by the update. |
| data | _Map_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, uid: _int_, data: _[Values](../../objects/Values)_) : _int_
##### Description

Performs the update of existing data according to the id that comes in the data that is passed.

##### How To Use

```javascript
var uid = "98502cff-d1e1-4efc-8efe-840320925316";

var result = _db.update(
    "client",
    uid,
    _val.map()
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table containing the records that must be updated. |
| uid | _int_ | UID of the record that will be affected by the update. |
| data | _[Values](../../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, uid: string, data: _Map_) : _int_
##### Description

Performs the update of existing data according to the id that comes in the data that is passed.

##### How To Use

```javascript
var uid = "98502cff-d1e1-4efc-8efe-840320925316";

var result = _db.update(
    "client",
    uid,
    _val.map()
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table containing the records that must be updated. |
| uid | string | UID of the record that will be affected by the update. |
| data | _Map_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, uid: string, data: _[Values](../../objects/Values)_) : _int_
##### Description

Performs the update of existing data according to the id that comes in the data that is passed.

##### How To Use

```javascript
var uid = "98502cff-d1e1-4efc-8efe-840320925316";

var result = _db.update(
    "client",
    uid,
    _val.map()
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table containing the records that must be updated. |
| uid | string | UID of the record that will be affected by the update. |
| data | _[Values](../../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, data: _Map_) : _int_
##### Description

Performs the update of existing data according to the id that comes in the data that is passed.

##### How To Use

```javascript
var result = _db.update(
    "client",
    _val.map()
        .set("id", 1)
        .set("name", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table containing the records that must be updated. |
| data | _Map_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, data: _[Values](../../objects/Values)_) : _int_
##### Description

Performs the update of existing data according to the id that comes in the data that is passed.

##### How To Use

```javascript
var result = _db.update(
    "client",
    _val.map()
        .set("id", 1)
        .set("name", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Name of the table containing the records that must be updated. |
| data | _[Values](../../objects/Values)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

## updateMany

---

#### _db.updateMany(arg0: string, arg1: _Object[]_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Return

( _int[]_ )


---

#### _db.updateMany(arg0: string, arg1: _List_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Return

( _int[]_ )


---

#### _db.updateMany(arg0: string, arg1: _[Values](../../objects/Values)_) : _int[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _int[]_ )


---

