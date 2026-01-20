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

#### _db.all(table: string) : java.util.List
##### Description

Selects all the data from a table.

##### How To Use

```javascript
_db.all('client');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Table's name where the query is going to be executed. |

##### Return

( _java.util.List_ )

The data found on the table or null if it does not exist.

---

## batch

---

#### _db.batch() : [DBBatch](/docs/library/objects/DBBatch)
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

( _[DBBatch](/docs/library/objects/DBBatch)_ )

Batch execution manager.

---

#### _db.batch(sqlCommand: string) : [DBBatch](/docs/library/objects/DBBatch)
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
| **sqlCommand** | _string_ | SQL command that will be used as the basis for all interactions. |

##### Return

( _[DBBatch](/docs/library/objects/DBBatch)_ )

Batch execution manager.

---

## checkExists

---

#### _db.checkExists() : [CheckExists](/docs/library/objects/CheckExists)
##### Description

Checks if sequences, tables, columns and indexes exist in the database.

##### How To Use

```javascript
if (!_db.checkExists().table("client")) {
    _db.table().create(
        "client",
        _db.column().setName("id").setType("int").setPrimaryKey(true),
        _db.column().setName("name").setType("varchar").setNotNull(true).setDefault()
    );
}
```

##### Return

( _[CheckExists](/docs/library/objects/CheckExists)_ )


---

## column

---

#### _db.column() : [Column](/docs/library/objects/Column)
##### Description

Performs the manipulation of columns in the database.

##### How To Use

```javascript
if (!_db.checkExists().column("client", "description")) {
    _db.column().rename(
        "client", // Table
        "description", // Old Name
        "name" // New Name
    );
}
```

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## config

---

#### _db.config() : [Values](/docs/library/objects/Values)
##### Description

Gets the connection configuration to the database being used.
The connection details are defined in the application environment configuration document, more information in the [Multiple Databases](../../academy/server/database/tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_Config = _db.getConfig()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_Config.toJSON()}\n`)

const db_OTHER_Config = _db.init("countries").getConfig()
_out.print(`The OTHER DB connection is: ${db_OTHER_Config.toJSON()}\n`)

```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Configuration of the connection to the database being used.

---

## date

---

#### _db.date() : java.sql.Date
##### Description

Gets the current date to be used in database operations.

##### Return

( _java.sql.Date_ )

Current date.

---

#### _db.date(time: long) : java.sql.Date
##### Description

Through the long number that identifies the exact date, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _long_ | Long number for the exact date. |

##### Return

( _java.sql.Date_ )

New object of type: _java.sql.Date_

---

#### _db.date(text: string) : java.sql.Date
##### Description

With the text content you get the date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text containing date in the format: `yyyy-MM-dd` |

##### Return

( _java.sql.Date_ )

Date obtained from the text.

---

#### _db.date(instant: java.time.Instant) : java.util.Date
##### Description

Using the Instant object, it creates a new Date object with java.sql.**Date.from**, to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _java.util.Date_ )

New object of type: _java.util.Date_

---

#### _db.date(localDateTime: java.time.LocalDate) : java.sql.Date
##### Description

Using the LocalDateTime object, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDate_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _java.sql.Date_ )

New object of type: _java.sql.Date_

---

## delete

---

#### _db.delete(table: string, id: int) : int
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
| **table** | _string_ | Table's name in the database. |
| **id** | _int_ | Record's ID to be deleted. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.delete(table: string, uid: string) : int
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
| **table** | _string_ | Table's name in the database. |
| **uid** | _string_ | Record's UID to be deleted. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.delete(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
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
| **table** | _string_ | Table name in the database. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data structure that should be deleted based on your ID or UID. |

##### Return

( _int_ )

Number of records affected by deletion.

---

#### _db.delete(table: string, data: [Values](/docs/library/objects/Values)) : int
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
| **table** | _string_ | Table name in the database. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data structure that should be deleted based on your ID or UID. |

##### Return

( _int_ )

Number of records affected by deletion.

---

## deleteMany

---

#### _db.deleteMany(table: string, dataItems: java.lang.Object[]) : int[]
##### Description

Executes the update of multiple rows into a table of an Array of Objects or a List of Values. It's necessary that the object has id or uid for the data that will be updated.

##### How To Use

```javascript
var deletedData = _db.deleteMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('id', 1)
        )
        .add(_val.map()
            .set('id', 2)
        )
);
_out.json({deletedData: deletedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _java.lang.Object[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the deletion for each object inside the list.

---

#### _db.deleteMany(table: string, dataItems: java.util.List) : int[]
##### Description

Executes the update of multiple rows into a table of an Array of Objects or a List of Values. It's necessary that the object has id or uid for the data that will be updated.

##### How To Use

```javascript
var deletedData = _db.deleteMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('id', 1)
        )
        .add(_val.map()
            .set('id', 2)
        )
);
_out.json({deletedData: deletedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _java.util.List_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the deletion for each object inside the list.

---

#### _db.deleteMany(table: string, dataItems: [Values](/docs/library/objects/Values)) : int[]
##### Description

Executes the update of multiple rows into a table of an Array of Objects or a List of Values. It's necessary that the object has id or uid for the data that will be updated.

##### How To Use

```javascript
var deletedData = _db.deleteMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('id', 1)
        )
        .add(_val.map()
            .set('id', 2)
        )
);
_out.json({deletedData: deletedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _[Values](/docs/library/objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the deletion for each object inside the list.

---

## escape

---

#### _db.escape(data: string) : string
##### Description

It guarantees the encoding to define names in the database, usually quotation marks (**"**).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _string_ | Name that needs to be used in the database, such as table or column name |

##### Return

( _string_ )

Safe name to use in databases, as in tables and columns.

---

## escapeEnd

---

#### _db.escapeEnd() : string
##### Description

Gets the end encoding for defining names in the database, usually quotes (**"**).

##### Return

( _string_ )

End of names in database.

---

## escapeStart

---

#### _db.escapeStart() : string
##### Description

Gets the start encoding for defining names in the database, usually quotes (**"**).

##### Return

( _string_ )

Beginning of names in database.

---

## execute

---

#### _db.execute(sqlCommand: string) : int
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
| **sqlCommand** | _string_ | SQL command that will be executed directly on the database. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: java.lang.Object[]) : int
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
| **sqlCommand** | _string_ | SQL command that will be executed directly on the database. |
| **params** | _java.lang.Object[]_ | The sequence of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: java.util.List) : int
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
| **sqlCommand** | _string_ | SQL command that will be executed directly on the database. |
| **params** | _java.util.List_ | List of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: [Values](/docs/library/objects/Values)) : int
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
| **sqlCommand** | _string_ | SQL command that will be executed directly on the database. |
| **params** | _[Values](/docs/library/objects/Values)_ | List of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

## find

---

#### _db.find(table: string, params: [Values](/docs/library/objects/Values)) : java.util.List
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
| **table** | _string_ | Table name. |
| **params** | _[Values](/docs/library/objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _java.util.List_ )

List of data records found.

---

## findFirst

---

#### _db.findFirst(table: string, params: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
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
| **table** | _string_ | Table name. |
| **params** | _[Values](/docs/library/objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Record line data found.

---

## findQuery

---

#### _db.findQuery(table: string, params: [Values](/docs/library/objects/Values)) : string
##### Description

From an object that has the structure similar to an SQL query, it generates a query to make a selection.
Build the query compatible with any type of database.
Allows conditions, ordering, avoids SQL Injection, among others.
Example that demonstrates how to define columns, conditions, ordering and pagination:

##### How To Use

```javascript
const record = _db.findQuery(
    "pessoa",
    _val.map()
        .set(
            "where",
            _val.map()
                .set("email", "pessoa@e-mail.exemplo")
        )
)

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Table name. |
| **params** | _[Values](/docs/library/objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _string_ )

The query with the parameters ready to be used.

---

## form

---

#### _db.form(tableName: string) : [Operation](/docs/library/objects/Operation)
##### Description

Returns a new Operation object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

A new Operation object

---

#### _db.form(formName: string, where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formName** | _string_ |   |
| **where** | _[Where](/docs/library/objects/Where)_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## get

---

#### _db.get(table: string, id: int) : [Values](/docs/library/objects/Values)
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
| **table** | _string_ | Name of the table in the database that should obtain the data. |
| **id** | _int_ | Record ID that should get the data. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The item data found or null if it does not exist.

---

#### _db.get(table: string, uid: string) : [Values](/docs/library/objects/Values)
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
| **table** | _string_ | Name of the table in the database that should obtain the data. |
| **uid** | _string_ | Record UID that should get the data. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The item data found or null if it does not exist.

---

## getConfig

---

#### _db.getConfig() : [Values](/docs/library/objects/Values)
##### Description

Gets the connection configuration to the database being used.
The connection details are defined in the application environment configuration document, more information in the [Multiple Databases](../../academy/server/database/tutorials/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_Config = _db.getConfig()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_Config.toJSON()}\n`)

const db_OTHER_Config = _db.init("countries").getConfig()
_out.print(`The OTHER DB connection is: ${db_OTHER_Config.toJSON()}\n`)

```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Configuration of the connection to the database being used.

---

## getKey

---

#### _db.getKey() : string
##### Description

Gets the name of the database connection configuration being used.
The connection details must be defined in the application environment configuration document, more information in the [Multiple Databases](../../academy/server/database/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_ConnectionName = _db.getKey()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_ConnectionName}\n`)

const db_OTHER_ConnectionName = _db.init("countries").getKey()
_out.print(`The OTHER DB connection is: ${db_OTHER_ConnectionName}\n`)

```

##### Return

( _string_ )

Name of the connection configuration to the database being used.

---

## getVersion

---

#### _db.getVersion() : float
##### Description

Get the database version number.

##### How To Use

```javascript
if (_db.isMariaDB() && _db.version() > 10.5) {
    // The database is MariaDB and the version is higher than 10.5.
}
```

##### Return

( _float_ )

The version of the database in numeric format, for example: 10.5

---

## index

---

#### _db.index() : [Index](/docs/library/objects/Index)
##### Description

Performs the manipulation of indexes in the database.

##### How To Use

```javascript
if (!_db.checkExists().index("client", "name")) {
   _db.index().create(
       "client", // Table Name
       "name" // Column Name
   ); // The index client_name_idx will be created.
}
```

##### Return

( _[Index](/docs/library/objects/Index)_ )


---

## init

---

#### _db.init(key: string) : [DB](/docs/library/resources/db)
##### Description

Starts a new DB resource for the connection name that is passed.
The connection details must be defined in the application's environment configuration document, more information in the [Multiple Databases](../../academy/server/database/multiple-databases) tutorial.

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
| **key** | _string_ | Base connection name defined in the application's environment configurations. |

##### Return

( _[DB](/docs/library/resources/db)_ )

The new database feature that uses another database.

---

## insert

---

#### _db.insert(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
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
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with the data structure to be inserted. |

##### Return

( _int_ )


---

#### _db.insert(table: string, data: [Values](/docs/library/objects/Values)) : int
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
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )


---

## insertIfNotExists

---

#### _db.insertIfNotExists(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
##### Description

Executes the insertion of a value if it does not exist or returns the ID if it already exists.

##### How To Use

```javascript
var insertedData = _db.insertIfNotExists(
    'worker',
    _val.map()
        .set('name','Netuno')
);
_out.json({insertedData: insertedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

#### _db.insertIfNotExists(table: string, data: [Values](/docs/library/objects/Values)) : int
##### Description

Executes the insertion of a value if it does not exist or returns the ID if it already exists.

##### How To Use

```javascript
var insertedData = _db.insertIfNotExists(
    'worker',
    _val.map()
        .set('name','Netuno')
);
_out.json({insertedData: insertedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

## insertMany

---

#### _db.insertMany(table: string, dataItems: java.lang.Object[]) : int[]
##### Description

Executes the insertion of multiple rows into a table of an Array of Objects or a List of Values.

##### How To Use

```javascript
_db.insertMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('name','Netuno')
        )
        .add(_val.map()
            .set('name','Sitana')
        )
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _java.lang.Object[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

An array with the IDs to the inserted data.

---

#### _db.insertMany(table: string, dataItems: java.util.List) : int[]
##### Description

Executes the insertion of multiple rows into a table of an Array of Objects or a List of Values.

##### How To Use

```javascript
_db.insertMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('name','Netuno')
        )
        .add(_val.map()
            .set('name','Sitana')
        )
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _java.util.List_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

An array with the IDs to the inserted data.

---

#### _db.insertMany(table: string, dataItems: [Values](/docs/library/objects/Values)) : int[]
##### Description

Executes the insertion of multiple rows into a table of an Array of Objects or a List of Values.

##### How To Use

```javascript
_db.insertMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('name','Netuno')
        )
        .add(_val.map()
            .set('name','Sitana')
        )
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _[Values](/docs/library/objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

An array with the IDs to the inserted data.

---

## isH2

---

#### _db.isH2() : boolean
##### Description

Checks whether the connected database is H2 Database.

##### Return

( _boolean_ )

If it is H2 Database.

---

## isH2DataBase

---

#### _db.isH2DataBase() : boolean
##### Description

Checks whether the connected database is H2 Database.

##### Return

( _boolean_ )

If it is H2 Database.

---

## isMariaDB

---

#### _db.isMariaDB() : boolean
##### Description

Checks whether the connected database is MariaDB.

##### Return

( _boolean_ )

If it is MariaDB.

---

## isPG

---

#### _db.isPG() : boolean
##### Description

Checks whether the connected database is PostgreSQL.

##### Return

( _boolean_ )

If it is PostgreSQL.

---

## isPostgreSQL

---

#### _db.isPostgreSQL() : boolean
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
The connection details must be defined in the application environment configuration document, more information in the [Multiple Databases](../../academy/server/database/multiple-databases) tutorial.

##### How To Use

```javascript
_header.contentTypePlain()

const db_DEFAULT_ConnectionName = _db.getKey()
_out.print(`The DEFAULT DB connection is: ${db_DEFAULT_ConnectionName}\n`)

const db_OTHER_ConnectionName = _db.init("countries").getKey()
_out.print(`The OTHER DB connection is: ${db_OTHER_ConnectionName}\n`)

```

##### Return

( _string_ )

Name of the connection configuration to the database being used.

---

## link

---

#### _db.link(formLink: string) : [Link](/docs/library/objects/Link)
##### Description

Returns a relationship with a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Name of the form to be related. |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Objeto Link.

---

#### _db.link(formLink: string, where: [Where](/docs/library/objects/Where)) : [Link](/docs/library/objects/Link)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](/docs/library/objects/Where)_ |   |

##### Return

( _[Link](/docs/library/objects/Link)_ )


---

#### _db.link(formLink: string, where: [Where](/docs/library/objects/Where), link: [Link](/docs/library/objects/Link)) : [Link](/docs/library/objects/Link)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](/docs/library/objects/Where)_ |   |
| **link** | _[Link](/docs/library/objects/Link)_ |   |

##### Return

( _[Link](/docs/library/objects/Link)_ )


---

## manyToOne

---

#### _db.manyToOne(tableName: string, column: string) : [Relationship](/docs/library/objects/Relationship)
##### Description

Returns a new Many To One relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |
| **column** | _string_ | Column name. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Many To One relationship.

---

#### _db.manyToOne(tableName: string, column: string, where: [Where](/docs/library/objects/Where)) : [Relationship](/docs/library/objects/Relationship)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](/docs/library/objects/Where)_ |   |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )


---

## oneToMany

---

#### _db.oneToMany(tableName: string, column: string) : [Relationship](/docs/library/objects/Relationship)
##### Description

Returns a new One To Many relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |
| **column** | _string_ | Column name. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

One To Many relationship.

---

#### _db.oneToMany(tableName: string, column: string, where: [Where](/docs/library/objects/Where)) : [Relationship](/docs/library/objects/Relationship)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](/docs/library/objects/Where)_ |   |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )


---

## page

---

#### _db.page(page: int, pageSize: int) : org.netuno.tritao.db.form.pagination.Pagination
##### Description

Returns the object for pagination configuration when using Query's page() method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _int_ | Page number. |
| **pageSize** | _int_ | Number of elements per page. |

##### Return

( _org.netuno.tritao.db.form.pagination.Pagination_ )

Objeto Pagination.

---

## pagination

---

#### _db.pagination(page: int, pageSize: int) : org.netuno.tritao.db.form.pagination.Pagination
##### Description

Returns the object for pagination configuration when using Query's page() method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _int_ | Page number. |
| **pageSize** | _int_ | Number of elements per page. |

##### Return

( _org.netuno.tritao.db.form.pagination.Pagination_ )

Objeto Pagination.

---

## param

---

#### _db.param(type: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _string_ )


---

## query

---

#### _db.query(query: string) : java.util.List
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
| **query** | _string_ | Command that will be executed on the database to get records. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: java.lang.Object[]) : java.util.List
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
| **query** | _string_ | Command that will be executed on the database to get records. |
| **params** | _java.lang.Object[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: java.util.List) : java.util.List
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
| **query** | _string_ | Command that will be executed on the database to get records. |
| **params** | _java.util.List_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: [Values](/docs/library/objects/Values)) : java.util.List
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
| **query** | _string_ | Command that will be executed on the database to get records. |
| **params** | _[Values](/docs/library/objects/Values)_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

## queryFirst

---

#### _db.queryFirst(query: string) : [Values](/docs/library/objects/Values)
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
| **query** | _string_ | Command that will be executed on the database to get the record. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: java.lang.Object[]) : [Values](/docs/library/objects/Values)
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
| **query** | _string_ | Command that will be executed on the database to get the record. |
| **params** | _java.lang.Object[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: java.util.List) : [Values](/docs/library/objects/Values)
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
| **query** | _string_ | Command that will be executed on the database to get the record. |
| **params** | _java.util.List_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
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
| **query** | _string_ | Command that will be executed on the database to get the record. |
| **params** | _[Values](/docs/library/objects/Values)_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

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
| **data** | _string_ | Information that needs to be used in a SQL Injection risk database. |

##### Return

( _string_ )

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
| **data** | _string_ | Information that needs to be used as boolean (true or false) in a database with the risk of SQL Injection. |

##### Return

( _string_ )

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
| **data** | _string_ | Information that needs to be used as a decimal number in a database with risk of SQL Injection. |

##### Return

( _string_ )

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
| **data** | _string_ | Information that needs to be used as an integer in a database with risk of SQL Injection. |

##### Return

( _string_ )

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
| **data** | _string_ | Information that needs to be used as a table or column name in a database with the risk of SQL Injection. |

##### Return

( _string_ )

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
| **data** | _string_ | Information that needs to be used as a path (table.name) in a database with the risk of SQL Injection. |

##### Return

( _string_ )

Content as a safe path (table.name) to use directly in queries.

---

## save

---

#### _db.save(table: string, uid: int, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
##### Description

Executes the insertion or update of a record in the database based on the UID.

##### How To Use

```javascript
// Executa a eliminação através do uid

const uid = "1d8722f4-fa28-4a08-8098-6dd5cab1b212";

const result = _db.save(
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
| **table** | _string_ | Table's name in the database. |
| **uid** | _int_ | Record's UID to be deleted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.save(table: string, uid: int, data: [Values](/docs/library/objects/Values)) : int
##### Description

Executes the insertion or update of a record in the database based on the UID.

##### How To Use

```javascript
// Executa a eliminação através do uid

const uid = "1d8722f4-fa28-4a08-8098-6dd5cab1b212";

const result = _db.save(
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
| **table** | _string_ | Table's name in the database. |
| **uid** | _int_ | Record's UID to be deleted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.save(table: string, uid: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
##### Description

Executes the insertion or update of a record in the database based on the UID.

##### How To Use

```javascript
// Executa a eliminação através do uid

const uid = "1d8722f4-fa28-4a08-8098-6dd5cab1b212";

const result = _db.save(
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
| **table** | _string_ | Table's name in the database. |
| **uid** | _string_ | Record's UID to be deleted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.save(table: string, uid: string, data: [Values](/docs/library/objects/Values)) : int
##### Description

Executes the insertion or update of a record in the database based on the UID.

##### How To Use

```javascript
// Executa a eliminação através do uid

const uid = "1d8722f4-fa28-4a08-8098-6dd5cab1b212";

const result = _db.save(
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
| **table** | _string_ | Table's name in the database. |
| **uid** | _string_ | Record's UID to be deleted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

## search

---

#### _db.search(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [DBSearchResult](/docs/library/objects/DBSearchResult)
##### Description

Performs a search on a table returning an object of type DBSearchResult.

##### How To Use

```javascript
var query = _db.search(
   'worker',
   _val.map()
       .set('active','1'));

_out.json({data: query.getResults(),total: query.getTotal()});
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should obtain the data. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data to carry out the search. |

##### Return

( _[DBSearchResult](/docs/library/objects/DBSearchResult)_ )

Object of type DBSearchResult.

---

#### _db.search(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, wildcards: boolean) : [DBSearchResult](/docs/library/objects/DBSearchResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **wildcards** | _boolean_ |   |

##### Return

( _[DBSearchResult](/docs/library/objects/DBSearchResult)_ )


---

#### _db.search(table: string, data: [Values](/docs/library/objects/Values)) : [DBSearchResult](/docs/library/objects/DBSearchResult)
##### Description

Performs a search on a table returning an object of type DBSearchResult.

##### How To Use

```javascript
var query = _db.search(
   'worker',
   _val.map()
       .set('active','1'));

_out.json({data: query.getResults(),total: query.getTotal()});
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should obtain the data. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data to carry out the search. |

##### Return

( _[DBSearchResult](/docs/library/objects/DBSearchResult)_ )

Object of type DBSearchResult.

---

#### _db.search(table: string, data: [Values](/docs/library/objects/Values), wildcards: boolean) : [DBSearchResult](/docs/library/objects/DBSearchResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **wildcards** | _boolean_ |   |

##### Return

( _[DBSearchResult](/docs/library/objects/DBSearchResult)_ )


---

## sequence

---

#### _db.sequence() : [Sequence](/docs/library/objects/Sequence)
##### Description

Performs the manipulation of sequences in a database.

##### How To Use

```javascript
if (!_db.checkExists().sequence("client", "name")) {
   _db.index().create(
       "client", // Table's name
       "name" // Table's name
   ); // The index client_name_idx will be created.
}
```

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## store

---

#### _db.store(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
##### Description


Performs an update of a value if it exists based on a primary key or an insert when no data exists with the same primary key. This type of operation is useful when it is not possible to use IDs in certain operations.

##### How To Use

```javascript
// If there is some data on table worker with the name field (the primary key on this table) // equal to the added all the data will be updated// If there isn't it will instead be insertedvar storedData = _db.store(
    'worker',
    _val.map()
        .set('name','Netuno')
);
_out.json({storedData: storedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

#### _db.store(table: string, data: [Values](/docs/library/objects/Values)) : int
##### Description


Performs an update of a value if it exists based on a primary key or an insert when no data exists with the same primary key. This type of operation is useful when it is not possible to use IDs in certain operations.

##### How To Use

```javascript
// If there is some data on table worker with the name field (the primary key on this table) // equal to the added all the data will be updated// If there isn't it will instead be insertedvar storedData = _db.store(
    'worker',
    _val.map()
        .set('name','Netuno')
);
_out.json({storedData: storedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

## table

---

#### _db.table() : [Table](/docs/library/objects/Table)
##### Description

Checks if sequences, tables, columns and indexes exist in the database.

##### How To Use

```javascript
if (!_db.checkExists().table("client")) {
    _db.table().create(
        "client",
        _db.column().setName("id").setType("int").setPrimaryKey(true),
        _db.column().setName("name").setType("varchar").setNotNull(true).setDefault()
    );
}
```

##### Return

( _[Table](/docs/library/objects/Table)_ )


---

## time

---

#### _db.time() : java.sql.Time
##### Description

Gets the current time to be used in database operations.

##### Return

( _java.sql.Time_ )

Current time.

---

#### _db.time(time: long) : java.sql.Time
##### Description

Through the long number that identifies the exact time, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _long_ | Long number referring to the exact time. |

##### Return

( _java.sql.Time_ )

New object of type: _java.sql.Time_

---

#### _db.time(text: string) : java.sql.Time
##### Description

With the text content you get the time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text containing time in the format: `HH:mm:ss` |

##### Return

( _java.sql.Time_ )

Time obtained from the text.

---

#### _db.time(instant: java.time.Instant) : java.util.Date
##### Description

Using the Instant object, it creates a new Date object with java.sql.**Time.from**, to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _java.util.Date_ )

New object of type: _java.util.Date_

---

#### _db.time(localDateTime: java.time.LocalTime) : java.sql.Time
##### Description

Using the LocalDateTime object, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalTime_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _java.sql.Time_ )

New object of type: _java.sql.Time_

---

## timestamp

---

#### _db.timestamp() : java.sql.Timestamp
##### Description

Gets the current date and time to be used in database operations.

##### Return

( _java.sql.Timestamp_ )

Current date and time.

---

#### _db.timestamp(time: long) : java.sql.Timestamp
##### Description

Through the long number that identifies the exact time, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _long_ | Long number referring to the exact time. |

##### Return

( _java.sql.Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### _db.timestamp(text: string) : java.sql.Timestamp
##### Description

With the text content you get the date and time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text containing date and time in the format: `yyyy-MM-dd HH:mm:ss` |

##### Return

( _java.sql.Timestamp_ )

Date and time obtained from the text.

---

#### _db.timestamp(instant: java.time.Instant) : java.sql.Timestamp
##### Description

Using the Instant object, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **instant** | _java.time.Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _java.sql.Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### _db.timestamp(localDateTime: java.time.LocalDateTime) : java.sql.Timestamp
##### Description

Using the LocalDateTime object, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localDateTime** | _java.time.LocalDateTime_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _java.sql.Timestamp_ )

New object of type: _java.sql.Timestamp_

---

## toFloat

---

#### _db.toFloat(text: string) : string
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
| **text** | _string_ | Number that will be checked if it's float to use in the query. |

##### Return

( _string_ )

Content that is safe to use directly in query as a number with decimal places (_float_).

---

## toInt

---

#### _db.toInt(text: string) : string
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
| **text** | _string_ | Number that will be checked if it's integer to use in the query. |

##### Return

( _string_ )

Content that is safe to use directly in query as number/integer.

---

## toIntSequence

---

#### _db.toIntSequence(text: string) : string
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
| **text** | _string_ | Numbers that will be checked if they are integers to use in the query. |

##### Return

( _string_ )

Sequential numeric content that is safe to use directly in query.

---

## toRawName

---

#### _db.toRawName(text: string) : string
##### Description

It certifies that the content passed is a valid name to be used in direct queries to the database, if it is not then an error is returned.
For example valid if the name is in the format to be a name of `table_name` or of` column_name`.

##### How To Use

```javascript
var toRawName = _db.toRawName('worker.name')
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Name that will be checked to be used as table name or column name. |

##### Return

( _string_ )

Returns the name that is safe to use directly in queries.

---

## toRawPath

---

#### _db.toRawPath(text: string) : string
##### Description

It certifies that the content passed is a valid path to be used in direct queries to the database, if it is not then an error is returned.
For example, valid if the path is compatible with `table_name`.`column_name`.

##### How To Use

```javascript
var rawPath = _db.toRawPath('worker.name')
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | String that will be checked to be used as path in queries to the DB. |

##### Return

( _string_ )

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

( _string_ )

Content that is safe to use directly in query as string/varchar/text.

---

#### _db.toString(text: string) : string
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
| **text** | _string_ | String that will be verified to be used directly in queries to the DB. |

##### Return

( _string_ )

Content that is safe to use directly in query as string/varchar/text.

---

## update

---

#### _db.update(table: string, id: int, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
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
| **table** | _string_ | Name of the table containing the records that must be updated. |
| **id** | _int_ | ID of the registry that will be affected by the update. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, id: int, data: [Values](/docs/library/objects/Values)) : int
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
| **table** | _string_ | Name of the table containing the records that must be updated. |
| **id** | _int_ | ID of the registry that will be affected by the update. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, uid: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
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
| **table** | _string_ | Name of the table containing the records that must be updated. |
| **uid** | _string_ | UID of the record that will be affected by the update. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, uid: string, data: [Values](/docs/library/objects/Values)) : int
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
| **table** | _string_ | Name of the table containing the records that must be updated. |
| **uid** | _string_ | UID of the record that will be affected by the update. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : int
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
| **table** | _string_ | Name of the table containing the records that must be updated. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, data: [Values](/docs/library/objects/Values)) : int
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
| **table** | _string_ | Name of the table containing the records that must be updated. |
| **data** | _[Values](/docs/library/objects/Values)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

## updateMany

---

#### _db.updateMany(table: string, dataItems: java.lang.Object[]) : int[]
##### Description

Executes the update of multiple rows into a table of an Array of Objects or a List of Values. It's necessary that the object has id or uid for the data that will be updated.

##### How To Use

```javascript
var updatedData = _db.updateMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('id', 1)
            .set('name','Netuno')
        )
        .add(_val.map()
            .set('id', 2)
            .set('name','Sitana')
        )
);
_out.json({updatedData: updatedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _java.lang.Object[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the update for each object inside the list.

---

#### _db.updateMany(table: string, dataItems: java.util.List) : int[]
##### Description

Executes the update of multiple rows into a table of an Array of Objects or a List of Values. It's necessary that the object has id or uid for the data that will be updated.

##### How To Use

```javascript
var updatedData = _db.updateMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('id', 1)
            .set('name','Netuno')
        )
        .add(_val.map()
            .set('id', 2)
            .set('name','Sitana')
        )
);
_out.json({updatedData: updatedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _java.util.List_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the update for each object inside the list.

---

#### _db.updateMany(table: string, dataItems: [Values](/docs/library/objects/Values)) : int[]
##### Description

Executes the update of multiple rows into a table of an Array of Objects or a List of Values. It's necessary that the object has id or uid for the data that will be updated.

##### How To Use

```javascript
var updatedData = _db.updateMany(
    'worker',
    _val.list()
        .add(_val.map()
            .set('id', 1)
            .set('name','Netuno')
        )
        .add(_val.map()
            .set('id', 2)
            .set('name','Sitana')
        )
);
_out.json({updatedData: updatedData})
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table in the database that should receive the data to be entered. |
| **dataItems** | _[Values](/docs/library/objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the update for each object inside the list.

---

## version

---

#### _db.version() : float
##### Description

Get the database version number.

##### How To Use

```javascript
if (_db.isMariaDB() && _db.version() > 10.5) {
    // The database is MariaDB and the version is higher than 10.5.
}
```

##### Return

( _float_ )

The version of the database in numeric format, for example: 10.5

---

## where

---

#### _db.where() : [Where](/docs/library/objects/Where)
##### Description

Returns a new Where object ready to be configured.

##### Return

( _[Where](/docs/library/objects/Where)_ )

A new Where object

---

#### _db.where(column: string) : [Where](/docs/library/objects/Where)
##### Description

Returns a new Where object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column name. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

A new Where object

---

