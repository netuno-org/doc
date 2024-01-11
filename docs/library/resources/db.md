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

#### _db.all(table: string) : _java.util.List_
##### Description

Selects all the data from a table.

##### How To Use

```javascript
_db.all('client');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string | Table's name where the query is going to be executed. |

##### Return

( _java.util.List_ )

The data found on the table or null if it does not exist.

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

( _[CheckExists](../../objects/CheckExists)_ )


---

## column

---

#### _db.column() : _[Column](../../objects/Column)_
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

#### _db.date() : _java.sql.Date_
##### Description

Gets the current date to be used in database operations.

##### Return

( _java.sql.Date_ )

Current date.

---

#### _db.date(time: _java.lang.Long_) : _java.sql.Date_
##### Description

Through the long number that identifies the exact date, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _java.lang.Long_ | Long number for the exact date. |

##### Return

( _java.sql.Date_ )

New object of type: _java.sql.Date_

---

#### _db.date(text: string) : _java.sql.Date_
##### Description

With the text content you get the date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Text containing date in the format: `yyyy-MM-dd` |

##### Return

( _java.sql.Date_ )

Date obtained from the text.

---

#### _db.date(instant: _java.time.Instant_) : _java.util.Date_
##### Description

Using the Instant object, it creates a new Date object with java.sql.**Date.from**, to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| instant | _java.time.Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _java.util.Date_ )

New object of type: _java.util.Date_

---

#### _db.date(localDateTime: _java.time.LocalDate_) : _java.sql.Date_
##### Description

Using the LocalDateTime object, it creates a new Date object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localDateTime | _java.time.LocalDate_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _java.sql.Date_ )

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

#### _db.delete(table: string, data: _java.util.Map_) : _int_
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
| data | _java.util.Map_ | Data structure that should be deleted based on your ID or UID. |

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

#### _db.deleteMany(table: string, dataItems: _[Ljava.lang.Object;[]_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _[Ljava.lang.Object;[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

Array with number of records affected by the deletion for each object inside the list.

---

#### _db.deleteMany(table: string, dataItems: _java.util.List_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _java.util.List_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

Array with number of records affected by the deletion for each object inside the list.

---

#### _db.deleteMany(table: string, dataItems: _[Values](../../objects/Values)_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _[Values](../../objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

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

#### _db.execute(sqlCommand: string, params: _[Ljava.lang.Object;[]_) : _int_
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
| params | _[Ljava.lang.Object;[]_ | The sequence of parameter values that are injected into the command. |

##### Return

( _int_ )

Number of lines affected by the executed command.

---

#### _db.execute(sqlCommand: string, params: _java.util.List_) : _int_
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
| params | _java.util.List_ | List of parameter values that are injected into the command. |

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

#### _db.find(table: string, params: _[Values](../../objects/Values)_) : _java.util.List_
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

( _java.util.List_ )

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

#### _db.findQuery(table: string, params: _[Values](../../objects/Values)_) : string
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
| table | string | Table name. |
| params | _[Values](../../objects/Values)_ | Query definition, supports limiting columns (_columns_), adding conditions (_where_), ordering (_order_), among others. |

##### Return

( string )

The query with the parameters ready to be used.

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

( _[Index](../../objects/Index)_ )


---

## init

---

#### _db.init(key: string) : _[DB](../../resources/DB)_
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

( _[DB](../../resources/DB)_ )

The new database feature that uses another database.

---

## insert

---

#### _db.insert(table: string, data: _java.util.Map_) : _int_
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
| data | _java.util.Map_ | Object with the data structure to be inserted. |

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

#### _db.insertIfNotExists(table: string, data: _java.util.Map_) : _int_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| data | _java.util.Map_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

#### _db.insertIfNotExists(table: string, data: _[Values](../../objects/Values)_) : _int_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| data | _[Values](../../objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

## insertMany

---

#### _db.insertMany(table: string, dataItems: _[Ljava.lang.Object;[]_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _[Ljava.lang.Object;[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

An array with the IDs to the inserted data.

---

#### _db.insertMany(table: string, dataItems: _java.util.List_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _java.util.List_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

An array with the IDs to the inserted data.

---

#### _db.insertMany(table: string, dataItems: _[Values](../../objects/Values)_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _[Values](../../objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

An array with the IDs to the inserted data.

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

## param

---

#### _db.param(type: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string |   |

##### Return

( string )


---

## query

---

#### _db.query(query: string) : _java.util.List_
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
| query | string | Command that will be executed on the database to get records. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: _[Ljava.lang.Object;[]_) : _java.util.List_
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
| params | _[Ljava.lang.Object;[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: _java.util.List_) : _java.util.List_
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
| params | _java.util.List_ | List of parameter values that will be injected into the database query. |

##### Return

( _java.util.List_ )

List of data obtained with the direct query to the database.

---

#### _db.query(query: string, params: _[Values](../../objects/Values)_) : _java.util.List_
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

( _java.util.List_ )

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

#### _db.queryFirst(query: string, params: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
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
| params | _[Ljava.lang.Object;[]_ | List of parameter values that will be injected into the database query. |

##### Return

( _[Values](../../objects/Values)_ )

The first data record obtained with the direct database query.

---

#### _db.queryFirst(query: string, params: _java.util.List_) : _[Values](../../objects/Values)_
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
| params | _java.util.List_ | List of parameter values that will be injected into the database query. |

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

#### _db.save(table: string, uid: _int_, data: _java.util.Map_) : _int_
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
| table | string | Table's name in the database. |
| uid | _int_ | Record's UID to be deleted. |
| data | _java.util.Map_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.save(table: string, uid: _int_, data: _[Values](../../objects/Values)_) : _int_
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
| table | string | Table's name in the database. |
| uid | _int_ | Record's UID to be deleted. |
| data | _[Values](../../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.save(table: string, uid: string, data: _java.util.Map_) : _int_
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
| table | string | Table's name in the database. |
| uid | string | Record's UID to be deleted. |
| data | _java.util.Map_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

#### _db.save(table: string, uid: string, data: _[Values](../../objects/Values)_) : _int_
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
| table | string | Table's name in the database. |
| uid | string | Record's UID to be deleted. |
| data | _[Values](../../objects/Values)_ | Object with data structure that should be maintained. |

##### Return

( _int_ )

Number of records affected by the deletion.

---

## search

---

#### _db.search(table: string, data: _java.util.Map_) : _[DBSearchResult](../../objects/DBSearchResult)_
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
| table | string | Name of the table in the database that should obtain the data. |
| data | _java.util.Map_ | Data to carry out the search. |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )

Object of type DBSearchResult.

---

#### _db.search(table: string, data: _java.util.Map_, wildcards: _boolean_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |
| data | _java.util.Map_ |   |
| wildcards | _boolean_ |   |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(table: string, data: _[Values](../../objects/Values)_) : _[DBSearchResult](../../objects/DBSearchResult)_
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
| table | string | Name of the table in the database that should obtain the data. |
| data | _[Values](../../objects/Values)_ | Data to carry out the search. |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )

Object of type DBSearchResult.

---

#### _db.search(table: string, data: _[Values](../../objects/Values)_, wildcards: _boolean_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |
| data | _[Values](../../objects/Values)_ |   |
| wildcards | _boolean_ |   |

##### Return

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

## sequence

---

#### _db.sequence() : _[Sequence](../../objects/Sequence)_
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

( _[Sequence](../../objects/Sequence)_ )


---

## store

---

#### _db.store(table: string, data: _java.util.Map_) : _int_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| data | _java.util.Map_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

#### _db.store(table: string, data: _[Values](../../objects/Values)_) : _int_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| data | _[Values](../../objects/Values)_ | Object with the data structure to be inserted. |

##### Return

( _int_ )

ID of the data that was inserted or ID of the existing data.

---

## table

---

#### _db.table() : _[Table](../../objects/Table)_
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

( _[Table](../../objects/Table)_ )


---

## time

---

#### _db.time() : _java.sql.Time_
##### Description

Gets the current time to be used in database operations.

##### Return

( _java.sql.Time_ )

Current time.

---

#### _db.time(time: _java.lang.Long_) : _java.sql.Time_
##### Description

Through the long number that identifies the exact time, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _java.lang.Long_ | Long number referring to the exact time. |

##### Return

( _java.sql.Time_ )

New object of type: _java.sql.Time_

---

#### _db.time(text: string) : _java.sql.Time_
##### Description

With the text content you get the time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Text containing time in the format: `HH:mm:ss` |

##### Return

( _java.sql.Time_ )

Time obtained from the text.

---

#### _db.time(instant: _java.time.Instant_) : _java.util.Date_
##### Description

Using the Instant object, it creates a new Date object with java.sql.**Time.from**, to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| instant | _java.time.Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _java.util.Date_ )

New object of type: _java.util.Date_

---

#### _db.time(localDateTime: _java.time.LocalTime_) : _java.sql.Time_
##### Description

Using the LocalDateTime object, it creates a new Time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localDateTime | _java.time.LocalTime_ | Object of type: _java.time.LocalDateTime_ |

##### Return

( _java.sql.Time_ )

New object of type: _java.sql.Time_

---

## timestamp

---

#### _db.timestamp() : _java.sql.Timestamp_
##### Description

Gets the current date and time to be used in database operations.

##### Return

( _java.sql.Timestamp_ )

Current date and time.

---

#### _db.timestamp(time: _java.lang.Long_) : _java.sql.Timestamp_
##### Description

Through the long number that identifies the exact time, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _java.lang.Long_ | Long number referring to the exact time. |

##### Return

( _java.sql.Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### _db.timestamp(text: string) : _java.sql.Timestamp_
##### Description

With the text content you get the date and time object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Text containing date and time in the format: `yyyy-MM-dd HH:mm:ss` |

##### Return

( _java.sql.Timestamp_ )

Date and time obtained from the text.

---

#### _db.timestamp(instant: _java.time.Instant_) : _java.sql.Timestamp_
##### Description

Using the Instant object, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| instant | _java.time.Instant_ | Object of type: _java.time.Instant_ |

##### Return

( _java.sql.Timestamp_ )

New object of type: _java.sql.Timestamp_

---

#### _db.timestamp(localDateTime: _java.time.LocalDateTime_) : _java.sql.Timestamp_
##### Description

Using the LocalDateTime object, it creates a new Timestamp object to be used in database operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localDateTime | _java.time.LocalDateTime_ | Object of type: _java.time.LocalDateTime_ |

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
| text | string | Number that will be checked if it's float to use in the query. |

##### Return

( string )

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
| text | string | Number that will be checked if it's integer to use in the query. |

##### Return

( string )

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
| text | string | Numbers that will be checked if they are integers to use in the query. |

##### Return

( string )

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
| text | string | Name that will be checked to be used as table name or column name. |

##### Return

( string )

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
| text | string | String that will be checked to be used as path in queries to the DB. |

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
| text | string | String that will be verified to be used directly in queries to the DB. |

##### Return

( string )

Content that is safe to use directly in query as string/varchar/text.

---

## update

---

#### _db.update(table: string, id: _int_, data: _java.util.Map_) : _int_
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
| data | _java.util.Map_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, id: _int_, data: _[Values](../../objects/Values)_) : _int_
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
| data | _[Values](../../objects/Values)_ | Object with the data structure that is to be maintained. |

##### Return

( _int_ )

Number of records affected by the update.

---

#### _db.update(table: string, uid: string, data: _java.util.Map_) : _int_
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
| data | _java.util.Map_ | Object with data structure that should be maintained. |

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

#### _db.update(table: string, data: _java.util.Map_) : _int_
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
| data | _java.util.Map_ | Object with the data structure that is to be maintained. |

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

#### _db.updateMany(table: string, dataItems: _[Ljava.lang.Object;[]_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _[Ljava.lang.Object;[]_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

Array with number of records affected by the update for each object inside the list.

---

#### _db.updateMany(table: string, dataItems: _java.util.List_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _java.util.List_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

Array with number of records affected by the update for each object inside the list.

---

#### _db.updateMany(table: string, dataItems: _[Values](../../objects/Values)_) : _[I_
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
| table | string | Name of the table in the database that should receive the data to be entered. |
| dataItems | _[Values](../../objects/Values)_ | Array or list of objects with the data structure to be inserted. |

##### Return

( _[I_ )

Array with number of records affected by the update for each object inside the list.

---

