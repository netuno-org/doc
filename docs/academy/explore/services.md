---
id: services
title: Services
sidebar_label: Services
---

REST web services in Netuno are JavaScript scripts executed on the server (Back-end) that allow you to interact directly with the application's database. Through them, it is possible to:

* Read data from the database
* Insert new records
* Update existing data
* Delete data
* Execute complex logic involving calculations or data processing.
* Integrate with external systems.

Each service is accessed through a URL (endpoint), which allows web interfaces (Front-end), mobile applications, or other external systems to consume your application's data in a secure and standardized way.

#### Prerequisites

* Have basic knowledge of _**JavaScript, React.js**_ and _**HTML**_.
* Familiarity with SQL and with an application's folder structure.
* It is recommended to have basic knowledge of **Forms**, **Fields**, and **Relationships**.

If you have questions about these steps, see:

* [Forms](/docs/academy/ui/forms)
* [Fields](/docs/academy/ui/fields)
* [Relationships between forms](/docs/academy/ui/relationships-between-forms)



## Getting Started

We will use a work hour tracking application, where the goal is to calculate the total hours worked by each worker.

**Application structure:**

![application structure diagram](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
The **id** field is automatically created and managed by Netuno in all tables, so it does not need to be defined manually.
:::

Netuno application services are located in the **server/services/** folder.

#### Folder Structure

```text
my-app/
└── server/
    └── services/
        ├── workers.js   ← service file
        └──... 
```

## Create Service

Within **server/services/**, create a new file that will define your service URL. For this example, name the file `workers.js`.

:::tip
- Use only **lowercase** letters.
- If the name is compound, separate the words with a **hyphen (-)**.
- Examples: **workers.js**, **hours-report.js**, **entry-records.js**.
:::


## Query the Database

Netuno provides the global **_db** object to interact natively with the database.

To execute a SQL query, we use the `_db.query()` method.


```javascript
// Performs a SQL query that groups the total hours by worker
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start_time, work_record.end_time)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);
```

:::note Understanding the SQL query

* **INNER JOIN**: Joins the worker and work_record tables using the worker_id foreign key.

* **DATEDIFF(HOUR, start_time, end_time)**: Calculates the difference in hours between the start and end times.

* **SUM(...) AS total**: Sums all processed hours for each worker.

* **WHERE ... active = true**: Filters the query to consider only workers and work records that have not been deleted (active).

* **GROUP BY worker.name**: Groups the sums by each worker's name.

* **ORDER BY total ASC**: Sorts the final result from lowest to highest number of hours worked.
:::

## Process the Data

The `_db.query()` method returns data in Netuno's internal format.

To send a clean JSON response, you must transform this data using the global **_val.list()** (for arrays) and **_val.map()** (for objects) objects.

```javascript
// Creates an empty list to store the processed data
const list = _val.list();

// Iterates over each record returned by the SQL query
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))   // Extracts the name as text
            .set("total", dbRecord.getInt("total"))    // Extracts the total as an integer
    );
}
```
### Methods Used

| Resource | Description |
|---------|-----------|
| **_val.list()** | Creates a list (equivalent to an Array in JS). |
| **_val.map()** | Creates a key-value object (equivalent to an Object or JSON). |
| **.add(...)** | Adds a new item to the end of the list. |
| **.set("key", value)** | Defines a new property and its corresponding value in the map. |
| **.getString("column")** | Extracts the value of the specified column formatted as Text (String). |
| **.getInt("column")** | Extracts the value of the specified column formatted as an integer (Integer). |

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
// 1. Queries the total hours worked by each active worker
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start_time, work_record.end_time)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);

// 2. Creates the data structure for the response
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

After creating and configuring your service in Netuno, it will be ready to be used and tested directly in the browser or integrated into other applications.

#### Access Methods

The service can be consumed using:

- **Browser:** For quick tests of GET methods.

- **HTTP Clients:** Tools such as Postman, Insomnia, or Thunder Client.

- **Front-end:** Through fetch requests or libraries such as Axios.

#### URL Structure

By default, Netuno automatically maps files created in the services folder to web addresses.

If running locally on the default port, the address will follow this pattern:

http://localhost:9000/services/workers



:::info How does routing work?
Netuno uses an automatic file system-based routing system:

**Source Folder:** All files inside server/services/ become routes.

**Mapping:** The **workers.js** file is converted to the **/services/workers** endpoint.

**Extensions:** Note that the **.js** extension is omitted from the URL. Optionally, you can use the **.netuno** suffix (e.g., /services/workers.netuno), but accessing without an extension is the recommended default because it is cleaner.
:::

**Example HTTP response:**
If there is compatible data in your database, the response returned by the server will be similar to this:

```json
[
    {
        "name": "Eleanor Smith",
        "total": 40
    },
    {
        "name": "Charles Brown",
        "total": 35
    },
    {
        "name": "Mary Johnson",
        "total": 45
    }
]
```

## System Global Objects

During service development in Netuno, we will often use native objects that facilitate communication with the database, request control, and information output.

These objects are preconfigured instances ready for use in your server scripts **(files .js)**. They eliminate the need to import external libraries for fundamental tasks such as SQL queries or reading parameters.

| Object | Description |
|--------|-----------|
| **_db**| Execute database operations (query, insert, update, delete). |
| **_val** | Creation and manipulation of data structures (list, map). |
| **_out** | Sending responses to the user (JSON, HTML...). |
| **_req** | Access to parameters sent in the user request (GET, POST). |
| **_log**| Logging error or debugging messages to the server console. |



If you have difficulties or suggestions for improvement, please get in touch.

Our team and community are ready to help.

Happy coding!