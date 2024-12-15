---
sidebar_position: 5
id: service
title: Service
---

With Netuno you can create _Web Services_ and build any kind of complex **APIs <a href="https://www.codecademy.com/articles/what-is-rest" target="_blank">REST</a>**.

Services (_<a href="https://whatis.techtarget.com/definition/Web-server" target="_blank">Web Services</a>_) are used to perform online data integration, where one web system can exchange information with another.

It also provide data to the frontend (_web pages_) asynchronously, allowing the frontend to load the visual part of the web page faster and then get the dynamic information through integration with services (_<a href="https://economictimes.indiatimes.com/definition/web-server" target="_blank">Web Services</a>_).

As will not wait for the whole page to load instead the server will quickly send the structure of the page that will be presented and processed dynamic data gradually, delivering the best **User Experience**.

## The Editor

To create a service on Netuno you will need a code editor.

Is recommended <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a> as is a freeware source-code editor, fast, quite simple and intuitive.

However, if you choose any other code editor it will work in a similar way.

## How to Open Demo Application

In Visual Studio Code by clicking on the left on the first file where you have the option **Open Folder**.

Browse the file system to the folder where you have Netuno installed.

Inside the Netuno root folder find the folder:

* `📂 /apps/demo`

And when then inside the folder **demo** click on **Open**.

>Note that the folder and file structure of the application **demo** has been loaded on the left-hand side.

## Creating a Service

The services are processed by the server, so to create a service you must expand the folders and go to the folder:

* `📂 server/services`

Now just right-click on the `📂 services` folder and choose the **New File** option.

The name of the new file should be `📂 workers.js`, we will create a service with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>.

All you need to do now is to _Code_ our service, which will be as below:

```js
/**
*** Formats the past object in JSON and performs its output.
*/
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, record.start, record.end)) AS total
    FROM worker INNER JOIN record
        ON worker.id = record.worker_id
    WHERE worker.active = true AND record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);

const list = _val.list();

for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))
            .set("total", dbRecord.getInt("total"))
    );
}

_out.json(list);
```

The `_db.query` receives a string with a database query and performs its execution by transforming the obtained data into a list of objects of type key/value, i.e. column/data.

The `_out.json` performs the output (_data output_) for the browser type `ContentType: application/json` and formats the past object to be structured as an object <a href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>.

## Run the Service

To run the service just open in the browser the address of the service that was created which will be:

* <a href="http://localhost:9000/services/workers" target="_blank">http://localhost:9000/services/workers</a>

In this case we recommend the <a href="https://www.mozilla.org/" target="_blank">Firefox</a> browser because it allows a better visualization of the <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> object.
