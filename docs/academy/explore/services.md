---
id: services
title: Services
sidebar_label: Services
---

REST web services in Netuno are JavaScript scripts executed on the server (back-end) that allow direct interaction with the application's database. Through them, it is possible to:

* Read data from the database
* Insert new records
* Update existing data
* Remove data
* Execute complex logic involving calculations or data processing.

* Integrate with external systems.

Each service is accessed through a URL (endpoint), which allows web interfaces (front-end), mobile applications, or other external systems to consume your application's data securely and in a standardized way.

#### Prerequisites

* Basic knowledge of **JavaScript, React.js**, and **HTML**.

* Familiarity with SQL and the folder structure of an application.

* Basic knowledge of **Forms**, **Fields**, and **Relationships** is recommended.

If you have any questions about these steps, please refer to:

* [Forms](/docs/academy/ui/forms)
* [Fields](/docs/academy/ui/fields)
* [Relationships between forms](/docs/academy/ui/relationships-between-forms)


## First Steps

We will use a work time tracking application, where the goal is to calculate the total hours worked by each employee.

**Application Structure:**

![application-structure-en.png](/docs/assets/academy/explore/services-web-rest/application-structure-en.png)

:::note
The **id** field is automatically created and managed by Netuno in all tables; it is not necessary to define it manually.

:::

The services of a Netuno application are located in the **server/services/** folder.

#### Folder Structure

```text
my-app/
└── server/
    └── services/
        ├── workers.js   ← service file
        └──... 
```

## Creating a Service

Inside the **server/services/** folder, create a new file that will define the URL of your service. For this example, name the file `workers.js`.

:::tip
- Use only **lowercase** letters.

- If the name is compound, separate the words with a **hyphen (-)**.

- Examples: **workers.js**, **hours-report.js**, **entry-registration.js**.

:::
## Querying the Database

Netuno provides the global object **_db** to interact natively with the database.

To execute an SQL query, we use the `_db.query()` method.

```javascript
// Performs an SQL query that groups the total hours per worker
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, record."start", record."end")) AS total
    FROM worker INNER JOIN record
        ON worker.id = record.worker_id
    WHERE worker.active = true AND record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);
```
:::note Understanding the SQL query

* **INNER JOIN**: Joins the worker and record tables using the foreign key worker_id.

* **DATEDIFF(HOUR, start, end)**: Calculates the difference in hours between the start and end times.

* **SUM(...) AS total**: Sums all processed hours for each worker.

* **WHERE ... active = true**: Filters the search to consider only workers and records that have not been deleted (active).

* **GROUP BY worker.name**: Groups the sums by the name of each worker.

* **ORDER BY total ASC**: Sorts the final result from the smallest to the largest number of hours worked.
:::

## Processing the Data

The `_db.query()` method returns the data in an internal Neptune format.

To send a clean response in JSON format, it is necessary to transform this data using the global objects **_val.list()** (for arrays) and **_val.map()** (for objects).

```javascript 
// Creates an empty list to store the processed data
const list = _val.list();

// Iterates over each record returned by the SQL query
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))
            .set("total", dbRecord.getInt("total"))
    );
}

_out.json(list);
```
### Methods Used

| Resource | Description |
|---------|-----------|
| **_val.list()** | Creates a list (equivalent to an Array in JS). |
| **_val.map()** | Creates a key-value object (equivalent to an Object or JSON). |
| **.add(...)** | Adds a new item to the end of the list. |
| **.set("chave", valor)** | Sets a new property and its respective value in the map. |
| **.getString("coluna")** | Extracts the value of the specified column formatted as Text (String). |
| **.getInt("coluna")** | Extracts the value of the specified column formatted as an integer (Integer). |


## Data Return

The **_out** object is used to send the processed list to the client in JSON format.

```javascript
// Sends the list as an HTTP response in JSON format
_out.json(list);
```

## Practical Example

In this final step, we consolidate all the concepts learned to create a functional service.

The complete code below queries the database to calculate the total hours worked and returns this data formatted as JSON.

```javascript
// 1. Query the total hours worked by each active worker
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, record."start", record."end")) AS total
    FROM worker INNER JOIN record
        ON worker.id = record.worker_id
    WHERE worker.active = true AND record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);

// 2. Create the data structure for the response
const list = _val.list();

// 3. Processes and maps the results
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))
            .set("total", dbRecord.getInt("total"))
    );
}
// 4. Returns the data in JSON format
_out.json(list);
```
### Accessing the Service

After creating and configuring your service in Netuno, it will be ready to be used and tested directly through the browser or integrated into other applications.

#### Access Methods

The service can be consumed using:

- **Browser:** For quick tests of GET methods.

- **HTTP Clients:** Tools such as Postman, Insomnia, or Thunder Client.

- **Front-end:** Through fetch requests or libraries such as Axios.

#### URL Structure

By default, Netuno automatically maps files created in the services folder to web addresses.

If running locally on the default port, the address will follow this model:

http://localhost:9000/services/workers

:::info How does routing work?
Netuno uses an automatic routing system based on the file system:

**Source Folder:** All files within server/services/ become routes.

**Mapping:** The file **workers.js** is converted to the endpoint **/services/workers**.

**Extensions:** Note that the **.js** extension is omitted from the URL. Optionally, the **.netuno** suffix can be used (example: /services/workers.netuno), but access without an extension is the recommended default for cleaner results.
:::

**Example of an HTTP response:**

If there is compatible data in your database, the response returned by the server will be similar to this:

```json
[
    {
        "name": "Leonor Santos",
        "total": 40
    },
    {
        "name": "Carlos Alves",
        "total": 35
    },
    {
        "name": "Maria Oliveira",
        "total": 45
    }
]
```

## Global System Objects

During service development in Netuno, we will frequently use native objects that facilitate communication with the database, request control, and information output.

These objects are pre-configured instances ready for use in your server scripts (.js files). They eliminate the need to import external libraries for fundamental tasks such as SQL queries or reading parameters.

| Object | Description |
|--------|-----------|
| **_db**| Execute database operations (query, insert, update, delete). |
| **_val** | Creation and manipulation of data structures (list, map). |
| **_out** | Sending responses to the user (JSON, HTML...). |
| **_req** | Access to parameters sent in the user's request (GET, POST). |
| **_log**| Log of error or debugging messages in the server console.|

If you have any difficulties or suggestions for improvement, please contact us.

Our team and community are ready to help.

Good development!

