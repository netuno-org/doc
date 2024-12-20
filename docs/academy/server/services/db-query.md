---
id: db-query
title: Database Query
sidebar_label: DB Query
---

## Before you start

In order to understand this tutorial as effectively as possible, we advise you to make sure you have some basic knowledge in _**JavaScript, SQL**_ and know how to create services on Netuno

If you do not know how to create services please visit [Web REST Services](rest).

## Query Creation

Netuno brings with it functions directed to the creation of queries to the database, and in this tutorial we will briefly present and describe the effect of each and also good practices to obtain the best result.

### _db.query('SELECT * FROM ...')

This function allows you to return data from a querie.

```javascript
_out.json(
  _db.query('SELECT * FROM table_name')
)
```

> Note that the _out.json() function is only shown to allow the display of the service data on the screen when calling it in the browser

This function also allows the acceptance of arguments, which are passed directly by the call to the service, as for example, let's imagine that we have the service _select-all.js_, the call to the same will be made by _**http://localhost:9000/services/select-all.netuno**_ in which the arguments to pass are placed after the call after a question mark:

```
http://localhost:9000/services/select-all.netuno?argument1=1&argument2=name
```

> Note that to send multiple arguments just separate them by a commercial 'e' (&)

### Query with parameters

And finally, it is enough to make the declaration of this variable in the querie as follows:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM table_name WHERE id = ? AND name = ?',
    _req.getInt("argument1"), _req.getString("argument2")
  )
)
```

> In place of '?' (question marks) the corresponding parameter will be injected according to its order.

### Query with PostgreSQL and H2DataBase parameters and types

H2Database and PostgreSQL support a simple conversion syntax, and so we can assign types to the parameters as follows:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM table_name WHERE id = ?::int AND name = ?::varchar',
     _req.getInt("id"), _req.getString("name")
  )
)
```

## H2Database and PostgreSQL parameters and types

As you may have noticed earlier, when you want to execute a query with arguments you have to define the type of arguments. Here is a list of all the types of variables and which type is most suitable for each:

* Suitable for integer parameters:
    * **?::int**
* Suitable for decimal number parameters:
    * **?::float**
 * Suitable for global/universal unique identifier parameters better known as guids or uuid:
    * **?::uuid**
 * Suitable for generic text parameters, strings:
    * **?::varchar**
    * **?::text**
 * Suitable for date type parameters:
    * **?::date**
 * Suitable for time type parameters:
    *  **?::time**
 * Suitable for parameters with date and time:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

This function allows you to execute database commands, such as updates, inserts and deletes.

Returns the number of records affected by the command and executed, and in the case of the query will be the total of records.

```javascript
// Insert example:
const nRecordsInserted = _db.execute(
    "INSERT INTO table_name(id, active, name) " +
    "VALUES(nextval('table_name'), ?::int, ?::varchar)",
    1, _req.getString("name") 
)

// Update example:
const nRecordsUpdated = _db.execute(
    "UPDATE tabela_nome SET name = ?::varchar WHERE id = ?::int",
    _req.getString("name"), _req.getInt("id")
)

// Delete example:
const nRecordsDeleted = _db.execute(
    "DELETE FROM table_name WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Note:** When making an insert check if the active field is equal to 1 otherwise it will not appear in the result. 

## Example of Interaction with Data

We will now present recommended standards so that you may get the best possible results.

## Query First

See below how to get the query's first row, or is null if it has no rows.

```javascript
// Data selection:
const dbResult = _db.queryFirst(
    'SELECT name FROM table_name WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbResult) {
    // HTTP status code:
    _header.status(404)
    // Indication of the error:
    _out.json(
        _val.map()
            .set('error', 'id-not-found')
    )
    // Finish the service execution:
    _exec.stop()
}
```

### Validate the amount of records

When you make a database selection in which the result is unique, to access the data it is convenient to proceed as **follows**:

Note that this is just a simple example that ensures that at least 1 result is returned and avoids errors if there is no result.

```javascript
// Data selection:
const dbResults = _db.query(
  'SELECT name FROM table_name WHERE id = ?::int',
  _req.getInt("id")
)

let name = null;
// Ensures that there is data, and 
// the greater symbol (result.length > 1) can be used 
// if there is more than one record:
if (dbResults.size() >= 1) {
  // To access the value of the name directly you'll Loop-interaction of records just have to:
  name = dbResults.get(0).getString('name');
}
```

## Loop-interaction of records

If the result of the selection are **multiple results**, you can interact with the 'for' cycle to obtain the data as follows:

```javascript
// Run the query
const dbRecords = _db.query('SELECT * FROM tabela_nome');

// Initialize the variable so that it may receive values
const items = _val.list();

// Iteration by all results to receive each separate value
for (const dbRecord of dbRecords) {
    items.push(
        _val.map()
            .set("uid", dbRecord.getString("uid"))
            .set("name", dbRecord.getString("name"))
    );
}

// Sends in the output the new data list:
_out.json(items);
```

If you have any questions please do not hesitate to contact us, more indications in this website footer.

Good development!
