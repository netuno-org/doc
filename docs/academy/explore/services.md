---
id: services
title: Services
sidebar_label: Services
---

## Before you start

Before creating Web REST services make sure you know how to create **Forms, Fields** and **Relationships**, in case you don't know it visit the following links:

* [Forms](academy/explore/graphical-interface/forms.md)
* [Fields](academy/explore/graphical-interface/fields.md)
* [Form relationships](academy/explore/graphical-interface/relationships-between-forms.md)

It is also advisable that, before starting this tutorial, you make sure you have the basics in _**JavaScript, React.js**_ and _**HTML**_.

## What do the services allow?

Web REST services allow you to interact directly with the database allowing you to read data, record new data, delete data and even updates.

Therefore, to demonstrate the creation of a service we will use a simple example: an application in which workers register the entry and exit time in which there is a service that calculates the total number of hours performed by the worker.

The following is an image of the structure of the application:

![servicos-web-rest1.png](assets/servicos-web-rest1.png)

>Note: It isn't necessary to create the id field because Netuno creates it automatically after the table is created.

## First steps
The first step will be to create the service, for that, using the text editor _Atom_, we will go to the services folder as shown in the following image:

![servicos-web-rest2.png](assets/servicos-web-rest2.png)

> In this example the app has been called 'registerhours', in your case it will be the same structure but with the name you gave to your application.

## Creating the service

When we enter this folder we will create a file ending in _.js_ with a name suitable for the service.

In this example we will name the file _'records.js'_.

> As a standard, the name of the service is written in lowercase letters, and if necessary more than one word, separated by hyphens (-)

In this example we will calculate total hours per worker, that is, calculate the total number of hours performed by the worker based on the entry and exit times.

We will also add data beforehand so that we can get results.

So the first step is to create the database call as follows:

```javascript
/*
  To call the service, if you haven't changed the port,
  go to the link 'http://localhost:9000/services/records.netuno'
*/

// To perform a simple query we use _db.query() which is a Netuno function
var records = _db.query(''+
  ' SELECT DISTINCT '+
  '   worker.name, '+
  '   SUM(DATEDIFF(HOUR, record.entry_time, record.exit_time)) AS total '+
  ' FROM record INNER JOIN worker '+
  '   ON record.worker_id = worker.id '+
  ' GROUP BY worker.name'
);

// To view on screen the results of the query when calling the registry.netuno service
// we use _out.json(variable)
_out.json(records)
```

> Any service is called by replacing the '.js' extension with '.netuno' or simply by the name of the service without '.js'


If you have followed all the previous steps, the call to service will show something like the following on the screen:

(Note that depending on your browser and the data you entered there may be differences)

![servicos-web-rest3.png](assets/servicos-web-rest3.png)

The next step will be to process the data so that we can make the accounts.

By replacing the following code:

```javascript

// To view on screen the results of the query when calling the registry.netuno service
// we use _out.json(variable)
_out.json(records)
```

The following code excerpt demonstrates what is required for this purpose:

```javascript
// Initialize the variable so that it may receive values
var processedResults = _val.init();

// Iteration by all records to receive each worker, the respective date and time
if (records) {

  for(var index = 0; index < records.size(); index++){
    
      var record = records.get(index);
      
      var item = _val.init()
          .set("worker", record.getString("nome"))
          .set("workerHours", record.getInt("total"))

      processedResults.push(item);

  }
}

// Display on screen the values
_out.json(processedResults);
```

If you have any questions, please do not hesitate to contact us through the means presented at the bottom of the page.

Good development!
