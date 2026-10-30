---
id: db-query-execute
title: Query and Execute - Direct Commands in Database
sidebar_label: Query & Execute
---

## Before You Start

To understand this tutorial as effectively as possible, we recommend making sure you have basic knowledge of _**JavaScript, SQL**_ and know how to create services in Netuno.

If you do not know how to create services, go to [REST Web Services](/docs/academy/server/services/rest).

## Creating Queries

Netuno provides functions aimed at creating database queries. In this tutorial, we will briefly present and describe the effect of each one, as well as best practices for achieving the best results.

### _db.query('SELECT * FROM ...')

This function allows you to return data from a query.

```javascript
_out.json(
  _db.query('SELECT * FROM table_name')
)
```

> Note that the _out.json() function allows the service data to be displayed on screen when the service is called in the browser.

This function also accepts arguments, which are passed directly through the service call. For example, imagine we have the service _select-all.js_; it will be called via _**http://localhost:9000/services/select-all.netuno**_, where the arguments to pass are placed after the call following a question mark:

```
http://localhost:9000/services/select-all.netuno?argument1=1&argument2=name
```

> Note that to send multiple arguments, simply separate them with an ampersand (&).

### Query with Parameters

Finally, simply declare this variable in the query as follows:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM table_name WHERE id = ? AND name = ?', 
        _req.getInt("argument1"), _req.getString("argument2")
    )
)
```

> In place of the '?' (question marks), the corresponding parameter will be injected according to its order.

## Query with Parameters and PostgreSQL and H2Database Types

However, H2Database and PostgreSQL support a simple conversion syntax, so we can assign types to parameters as follows:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM table_name WHERE id = ?::int AND name = ?::varchar', 
    _req.getInt("id"), _req.getString("name")
  )
)
```

## H2Database and PostgreSQL Parameter Types

As you may have noticed earlier, when executing a query with arguments, you must define their types. Below is a list of all variable types and the most appropriate type for each:

* Suitable for integer parameters:
    * **?::int**
* Suitable for decimal number parameters:
    * **?::float**
 * Suitable for globally/universally unique identifier parameters, better known as GUIDs or UUIDs:
    * **?::uuid**
 * Suitable for generic text parameters, strings:
    * **?::varchar**
    * **?::text**
 * Suitable for date-type parameters:
    * **?::date**
 * Suitable for time-type parameters:
    *  **?::time**
 * Suitable for parameters with date and time:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

This function allows you to execute a database command, such as updates, inserts, and deletes.

Returns the number of records affected by the executed command.

```javascript
// Insert example:
const nRecordsInserted = _db.execute(
    "INSERT INTO table_name(id, active, name) " + 
    "VALUES(nextval('table_name_id'), ?::int, ?::varchar)", 
    1, name
)

// Update example:
const nRecordsUpdated = _db.execute(
    "UPDATE table_name SET name = ?::varchar WHERE id = ?::int",
    _req.getString("name"), _req.getInt("id")
)

// Delete example:
const nRecordsDeleted = _db.execute(
    "DELETE FROM table_name WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Note:** When performing an insert, make sure the active field is equal to 1; otherwise, it will not appear in the result.

## Example of Data Interaction

We will now present recommended guidelines so you can achieve the best possible results.

## Query First

See below how to get the first row of the query; it will be null if no row is returned.

```javascript
// Select the data:
const dbResult = _db.queryFirst(
    'SELECT name FROM table_name WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbResult) {
    // HTTP status code:
    _header.status(404)
    // Error indication:
    _out.json(
        _val.map()
            .set('error', 'id-not-found')
    )
    // Stops the service execution:
    _exec.stop()
}
```

## Validate the Number of Records

When performing a database selection where the result is unique, to access the data, you should proceed as follows:

Note that this is just a simple example that ensures at least 1 result is returned and avoids an error if there is no result.

```javascript
// Data selection:
var dbResults = _db.query(
  'SELECT name FROM table_name WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let name = null;
// Ensures that data exists, and the greater-than symbol
// (result.length > 1) can be used if there is more than
// one record:
if (dbResults.size() >= 1) {
  // To access the name value directly, simply:
  name = dbResults.get(0).getString('name');
}
```

## Looping Through Records

If the selection returns multiple results, you can use the 'for' loop to retrieve the data as follows:

```javascript
// Execute the query
const dbResults = _db.query('SELECT id, name FROM table_name');

// Initialize the variable so it can receive values
const items = _val.init();

// Iterate through all results to receive each value separately
for (const dbResult of dbResults) {
    items.push(
        _val.map()
            .set("uid", dbResult.getString("uid"))
            .set("name", dbResult.getString("name"))
    );
}

// Sends the new data list to the data output:
_out.json(items);
```

If you have any questions, do not hesitate to contact us; see the instructions in the footer of this website.

Happy coding!