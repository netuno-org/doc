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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>batch</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DBBatch](../objects/DBBatch)</span>
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

( _[DBBatch](../objects/DBBatch)_ )

Batch execution manager.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>batch</span>(<span style={{color: '#FF8000'}}>sqlCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DBBatch](../objects/DBBatch)</span>
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

( _[DBBatch](../objects/DBBatch)_ )

Batch execution manager.

---

## checkExists

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>checkExists</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CheckExists](../objects/CheckExists)</span>
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

( _[CheckExists](../objects/CheckExists)_ )


---

## column

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>column</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
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

( _[Column](../objects/Column)_ )


---

## config

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

Configuration of the connection to the database being used.

---

## date

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>date</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Description

Gets the current date to be used in database operations.

##### Return

( _java.sql.Date_ )

Current date.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>date</span>(<span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Description

Through the long number that identifies the exact date, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _java.lang.Long_ | Long number for the exact date. |

##### Return

( _java.sql.Date_ )

New object of type: _java.sql.Date_

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>date</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>date</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>date</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Data structure that should be deleted based on your ID or UID. |

##### Return

( _int_ )

Number of records affected by deletion.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Data structure that should be deleted based on your ID or UID. |

##### Return

( _int_ )

Number of records affected by deletion.

---

## deleteMany

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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
| **dataItems** | _[Ljava.lang.Object;[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the deletion for each object inside the list.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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
| **dataItems** | _[Values](../objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the deletion for each object inside the list.

---

## escape

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>escape</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>escapeEnd</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the end encoding for defining names in the database, usually quotes (**"**).

##### Return

( _string_ )

End of names in database.

---

## escapeStart

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>escapeStart</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the start encoding for defining names in the database, usually quotes (**"**).

##### Return

( _string_ )

Beginning of names in database.

---

## execute

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>sqlCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>sqlCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **params** | _[Ljava.lang.Object;[]_ | The sequence of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>sqlCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>sqlCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **params** | _[Values](../objects/Values)_ | List of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

## find

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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
| **params** | _[Values](../objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _java.util.List_ )

List of data records found.

---

## findFirst

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>findFirst</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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
| **params** | _[Values](../objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _[Values](../objects/Values)_ )

Record line data found.

---

## findQuery

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>findQuery</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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
| **params** | _[Values](../objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( _string_ )

The query with the parameters ready to be used.

---

## form

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>form</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Description

Returns a new Operation object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |

##### Return

( _[Operation](../objects/Operation)_ )

A new Operation object

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>form</span>(<span style={{color: '#FF8000'}}>formName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formName** | _string_ |   |
| **where** | _[Where](../objects/Where)_ |   |

##### Return

( _[Operation](../objects/Operation)_ )


---

## get

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

The item data found or null if it does not exist.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

The item data found or null if it does not exist.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

Configuration of the connection to the database being used.

---

## getKey

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>getKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

## index

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>index</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Index](../objects/Index)</span>
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

( _[Index](../objects/Index)_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DB](../resources/db)</span>
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

( _[DB](../resources/db)_ )

The new database feature that uses another database.

---

## insert

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insert</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insert</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )


---

## insertIfNotExists

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insertIfNotExists</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insertIfNotExists</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

## insertMany

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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
| **dataItems** | _[Ljava.lang.Object;[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

An array with the IDs to the inserted data.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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
| **dataItems** | _[Values](../objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

An array with the IDs to the inserted data.

---

## isH2

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>isH2</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the connected database is H2 Database.

##### Return

( _boolean_ )

If it is H2 Database.

---

## isH2DataBase

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>isH2DataBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the connected database is H2 Database.

##### Return

( _boolean_ )

If it is H2 Database.

---

## isMariaDB

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>isMariaDB</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the connected database is MariaDB.

##### Return

( _boolean_ )

If it is MariaDB.

---

## isPG

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>isPG</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the connected database is PostgreSQL.

##### Return

( _boolean_ )

If it is PostgreSQL.

---

## isPostgreSQL

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>isPostgreSQL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the connected database is PostgreSQL.

##### Return

( _boolean_ )

If it is PostgreSQL.

---

## key

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>key</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Returns a relationship with a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Name of the form to be related. |

##### Return

( _[Link](../objects/Link)_ )

Objeto Link.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](../objects/Where)_ |   |

##### Return

( _[Link](../objects/Link)_ )


---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>, <span style={{color: '#FF8000'}}>link</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](../objects/Where)_ |   |
| **link** | _[Link](../objects/Link)_ |   |

##### Return

( _[Link](../objects/Link)_ )


---

## manyToOne

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>manyToOne</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Returns a new Many To One relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |
| **column** | _string_ | Column name. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Many To One relationship.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>manyToOne</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](../objects/Where)_ |   |

##### Return

( _[Relationship](../objects/Relationship)_ )


---

## oneToMany

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>oneToMany</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Returns a new One To Many relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |
| **column** | _string_ | Column name. |

##### Return

( _[Relationship](../objects/Relationship)_ )

One To Many relationship.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>oneToMany</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](../objects/Where)_ |   |

##### Return

( _[Relationship](../objects/Relationship)_ )


---

## pagination

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>pagination</span>(<span style={{color: '#FF8000'}}>page</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>pageSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.pagination.Pagination</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>param</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _string_ )


---

## query

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>query</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>query</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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
| **params** | _[Ljava.lang.Object;[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>query</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>query</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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
| **params** | _[Values](../objects/Values)_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

## queryFirst

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>queryFirst</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>queryFirst</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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
| **params** | _[Ljava.lang.Object;[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>queryFirst</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>queryFirst</span>(<span style={{color: '#FF8000'}}>query</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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
| **params** | _[Values](../objects/Values)_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](../objects/Values)_ )

The first data record obtained with the direct database query.

---

## sanitize

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sanitize</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sanitizeBoolean</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sanitizeFloat</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sanitizeInt</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sanitizeName</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sanitizePath</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

## search

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DBSearchResult](../objects/DBSearchResult)</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Data to carry out the search. |

##### Return

( _[DBSearchResult](../objects/DBSearchResult)_ )

Object of type DBSearchResult.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>, <span style={{color: '#FF8000'}}>wildcards</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DBSearchResult](../objects/DBSearchResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |
| **wildcards** | _boolean_ |   |

##### Return

( _[DBSearchResult](../objects/DBSearchResult)_ )


---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DBSearchResult](../objects/DBSearchResult)</span>
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
| **data** | _[Values](../objects/Values)_ | Data to carry out the search. |

##### Return

( _[DBSearchResult](../objects/DBSearchResult)_ )

Object of type DBSearchResult.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>, <span style={{color: '#FF8000'}}>wildcards</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DBSearchResult](../objects/DBSearchResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |
| **wildcards** | _boolean_ |   |

##### Return

( _[DBSearchResult](../objects/DBSearchResult)_ )


---

## sequence

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>sequence</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
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

( _[Sequence](../objects/Sequence)_ )


---

## store

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>store</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>store</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

## table

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>table</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Table](../objects/Table)</span>
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

( _[Table](../objects/Table)_ )


---

## time

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>time</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Description

Gets the current time to be used in database operations.

##### Return

( _java.sql.Time_ )

Current time.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>time</span>(<span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Description

Through the long number that identifies the exact time, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _java.lang.Long_ | Long number referring to the exact time. |

##### Return

( _java.sql.Time_ )

New object of type: _java.sql.Time_

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>time</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>time</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>time</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>timestamp</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Description

Gets the current date and time to be used in database operations.

##### Return

( _java.sql.Timestamp_ )

Current date and time.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>timestamp</span>(<span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Description

Through the long number that identifies the exact time, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _java.lang.Long_ | Long number referring to the exact time. |

##### Return

( _java.sql.Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>timestamp</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>timestamp</span>(<span style={{color: '#FF8000'}}>instant</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>timestamp</span>(<span style={{color: '#FF8000'}}>localDateTime</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toFloat</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toInt</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toIntSequence</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toRawName</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toRawPath</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>toString</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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
| **data** | _[Values](../objects/Values)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

## updateMany

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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
| **dataItems** | _[Ljava.lang.Object;[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the update for each object inside the list.

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dataItems</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
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
| **dataItems** | _[Values](../objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _int[]_ )

Array with number of records affected by the update for each object inside the list.

---

## where

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>where</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Returns a new Where object ready to be configured.

##### Return

( _[Where](../objects/Where)_ )

A new Where object

---

#### <span style={{fontWeight: 'normal'}}>_db</span>.<span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Returns a new Where object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column name. |

##### Return

( _[Where](../objects/Where)_ )

A new Where object

---

