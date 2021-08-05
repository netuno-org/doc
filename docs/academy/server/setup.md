---
id: setup
title: Data Setup
sidebar_label: Data Setup
---

## Introduction

With Netuno the development of the applications goes first through the construction of the database, through the construction of the forms and fields.

And when you work as a team or need to move the application development to another environment, you need to create a backup of the database accompanied by the code.

Thus at the destination it will be necessary to reconfigure the database and so the application can be run as it was developed at its source.

The problem with this process is the effort of always remembering to create a new backup every time there is a change in the database. And the more people involved in development and/or the more environments there are to publish the application, the more complicated this process becomes.

So Netuno to solve this problem brings a system of application *setup*, where it automatically generates the structure of the database (*schema*), and additionally allows the loading of the initial data to be programmed manually through additional *scripts*.

It also allows you to change the type of database server ensuring that *setup* will run normally and the application without any problems. This means that the application can be developed on H2DataBase and with the automatically generated schemas so you may be able to change the database connection of the application to PostgreSQL or MariaDB. On the first run of the application over the new database everything will be reconstructed, regardless of the change of database server type.

It then allows the database to be completely changed without having any impact on the development already carried out.

The _setup_ program files are inside the application folder on:

- `server/setup`

## Setup configuration in applications

In the environment settings of the applications that remain in:

- `/apps/MY_APP/config/_development.json`
- `/apps/MY_APP/config/_production.json`

You will be able to manipulate the setup behavior through the settings:

```
    ...
    "setup": {
        "enabled": true,
        "schema": {
            "auto_create": true,
            "execution": true
        },
        "scripts": {
            "execution": true
        }
    },
    ...
```

##### enabled: boolean | default true

Defines whether the setup is active or not, and so enables or disables the execution of data setup operations the first time the application is run.

##### schema.auto_create: boolean | default true

Allows Netuno to know whether or not to generate the database schema files whenever any form or field is created or changed.

##### schema.execution: boolean | default true

Controls whether or not the schema should be executed during the setup operations performed on the first run of the application.

##### scripts.execution: boolean | default true

Enables or disables the execution of additional scripts during setup operations performed on the first run of the application.

## Schema

During the creation or modification of the forms and fields in Netuno web interface the schema files will be generated within the setup folder as follows:

`server/setup/_schema-FORM_NAME.js`

Where there should be a *_schema-\*\*\*.js* file for each form in the application.

These files should not be changed manually because they are generated automatically by Netuno.

Therefore, if you change the content of these files, in a next generation of the schemas they will be replaced automatically and the changes made directly to the files will be lost.

For the automatic generation of the database schema to be executed you must make sure that the __schema.auto_create__ configuration is active, and that the __setup__ folder exists within the __server__ folder.

## Scripts

Custom code scripts are files located in the __setup__ folder that do not start with *\_*.

The main purpose of these scripts is to load the data ensuring that the database contains the minimum information necessary for the correct functioning of the application.

So when the application is reconfigured in another environment it will be automatically loaded with the initial data and ready to start being used.

To perform these data loading operations you must use the functions of resource *_db*.

The __scripts__ are executed after the __schemas__ are executed.

##### _db.insertIfNotExists

And, to save the trouble of performing database queries, to check whether or not data __insert__ can be done, Netuno provides the __insertIfNotExists__ function.

This function checks whether the data exists exactly as it is defined in the database, if it does not then creates it.

An example of its use is to load the fields __Code__ and __Name__ of the form __Type of Territory__, where the name of the table is __type\_territory__ and has the columns __code__ and __name__, for this it will be enough to create the file `MY_APP/server/setup/type.js` with the following content:

```
_db.insertIfNotExists("type_territory", _val.init()
    .set("code", "1001")
    .set("name", "Portugal Continental")
)
_db.insertIfNotExists("type_territory", _val.init()
    .set("code", "1002")
    .set("name", "Madeira")
)
_db.insertIfNotExists("type_territory", _val.init()
    .set("code", "1003")
    .set("name", "Açores")
)
```

## Processing Cycle

As previously explained, *setup* is only executed on the first run of the application.

And it's execution order is:

1. *_start* - runs the *start* file located on::
..`MY_APP/server/setup/_start.js`
2. *netuno_db* - executes the creation of the *Tables*, *Fields* and loading of data required for the operation of Netuno in a database, that is, all the tables that start with:
..`netuno_***`
3. *_schema-\** - Executes all *schemas* scripts, which are the scripts that start with *_schema-*, which contains for example the commands for creating the forms, reports and fields, in:
..`MY_APP/server/setup/_schema-\*\*\*.js`
4. *scripts* - executes the custom *scripts* files, which are all script files that do not start with *_* and will probably contain the __inserts__ of initial data needed, for example:
..`MY_APP/server/setup/meu-script-com-inserts.js`
5. *_end* - executes the *end* file that's on:
..`MY_APP/server/setup/_end.js`

That is, it is allowed to create custom code in the *start* and *end* scripts to perform some operations that make sense to be executed before the setup or even when it is completed.

It is important to emphasize that this processing cycle is executed every time the application is run for the first time, which is why it is necessary to make sure of the existence of then data before it is created.

Make sure the following *environmental settings* are active to allow this process to run in the `MY_APP/config/_development.json` or `MY_APP/config/_production.json` files depending on the environment:

* Enables or disables completely the execution of any setup operation:
..`setup.enabled = true|false`
* Enables or disables the execution of *_schemas-*:
..`setup.schema.execution = true|false`
* Enables or disables the execution of *scripts*:
..`setup.scripts.execution = true|false`

## Conclusion

The *setup* process of applications in Netuno has as main functions:

* *netuno_db*: ensures that the tables and fields required for Netuno to operate are well defined in the database that is being run.
* *_schema-*: automatically generates the entire structure of forms and reports with their respective fields, which allows you to ensure the entire consistency of the structure of the application database, especially when the application is run with a new empty database.
* *scripts*: perform database operations to ensure that the application contains the mandatory data previously loaded each time it is run for the first time.

This way Netuno allows applications to work in new environments, even if you change the type of database, ensuring the correct operation of the application without the need to perform __backups__ and __restore__ of the database.

Additionally allowing all automatically and manually generated configuration code to be versioned with GIT, for example.
