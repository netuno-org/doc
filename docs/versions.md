---
id: versions
title: Versions
sidebar_label: Versions
---

_Netuno_ will start with the deafult version installation.

Other versions of _Netuno_ can be installed and also can be upgraded for new versions.

## Version Installation

Follow the command below to install the specific version. Note that the user has to add (`version`)
 to the installation command.

For example:

```
./netuno install version=DESIRED_VERSION_INFO
```

_Netuno_ will start the upgrade process installing the indicated version.

See below the list of available versions.

## Latest (_in development_)

To install the latest version of Netuno that is under development.

#### Linux ou MacOS X

Choose one of the following **Installation** options:

* Download com o *WGET*:

```plaintext

mkdir -p netuno-latest && cd netuno-latest && wget https://www.netuno.org/netuno-latest.jar -O netuno.jar && java -jar netuno.jar install version=latest

```

* Download com o *cURL*:

```plaintext

mkdir -p netuno-latest && cd netuno-latest && curl https://www.netuno.org/netuno-latest.jar > netuno.jar && java -jar netuno.jar install version=latest

```

#### Windows

In Windows open the terminal of **PowerShell** and go to the start menu and type: `powershell`.

Copy and paste the command below and follow the **Installation** instructions:

```plaintext

md netuno-latest; cd netuno-latest; Invoke-WebRequest -Uri "https://www.netuno.org/netuno-latest.jar" -OutFile "netuno.jar"; java -jar netuno.jar install version=latest

```

## Available Versions

Here is the list of available versions for installation with the command:

```
./netuno install version=7:20210208.1437
```

## Available Versions

All Netuno versions are available in:

- [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

To install a specific version run the following command:

```
./netuno install version=7:20020129.1745
```

> Change the `version`'s argument to the version that you wnat to isntall.

## Legacy versions (before open-source)

These versions won't be available after 2022, please update your Netuno to the latest open-source version.

### 7:20210429.1738

Major performance improvements with the resolution of memory leakage with GraalVM, resulting in low memory and CPU consumption overall, more on:

- [LinkedHashMap memory leak](https://github.com/oracle/graal/issues/3260)

More convenient `dev` user access recovery.

The conflict of `multiselect` fields on forms with the `_db.insert` command has been resolved.

The `File` object has the new `changeName` method.

The integration issues with **RabbitMQ** for RPC-like queues have been solved.

Visual Studio Code Server has been experimentally integrated, for example just add the parameter `code` when starting the Netuno server when developing a specific app:

- `./netuno server app=myapp code`.

The JWT Conflict with Sessions has also been resolved.

##### Resources

`_user` and `_group` have better error reporting when used without authentication.

`_env` has the new `sleep` method.

`_server` has the new `shutdown` method.

### 7:20210319.1747

The applications are now in the `apps` folder in Netuno's root directory, they will automatically be moved from `./web/apps` to `./apps`.

Improved overall execution errors and added better file and line indication.

New `./netuno stats` command to view the latest hardware consumption metrics.

Fixed issue on MacOS that made `bin-unix` scripts fail to detect Netuno's server port number.

Started cross support for WebSockets.

Several overall performance improvements.

The `File` class has the new `isFile` and `isFolder` methods, the `InputStream` with the new `readAllAndClose` method, the `OutputStream` with the new `writeAndClose` and `writeFileAndClose` methods, support for the _fluent interface_ directly available in the resources: `_app`, `_storage` and `_os`.

Improved database connection failure errors.

##### Resources

New `_cors` resource to easily manipulate CORS (Cross-Origin Resource Sharing).

New `_server` resource that provides information and future interactions with the server.

New experimental resource `_rabbitmq`, for integrations with RabbitMQ, it currently supports RPC and Work queues.

Resource `_xml` with `transform`, `save` and `output`.

Resource `_smtp` supports setting the _subtype_ of _multipart_, default is `mixed`.

##### Configuration

Remote now supports setting the `urlPrefix` parameter as an alternative to `url` to avoid mistakes.

The server now supports an identification name configuration, can be used in communications and is obtained by the `_server` resource.

The server now experimentally supports the configuration of a folder to store sessions on disk.

In the applications, configuration of CORS (Cross-Origin Resource Sharing) sources and headers is now supported along with the new `_cors` resource.

### 7:20210208.1437

Supports the new GraalVM 21.

##### Search in Forms

When editing or even deleting a record the page is kept in the search.

##### Database

Fixed the problem when entering data with pre-defined ID.

##### Services

When authentication (`_auth`) with JWT receives an OPTIONS call (_CORS/Preflight_) it returns 200 OK.

The `_auth` service when authenticated by JWT returns the refresh token expiration time: `refresh_expires_in`.

##### Resources

The `_xls.read` supports cells with errors.

The `_random` supports a new initialization with a string of symbols, letters and/or numbers, which should be used when generating random strings, can be redefined later in the same initialized object.

The `_user` supports searching directly by `username` and `e-mail`.

When `_user` or `_group` is created it returns the ID, and returns boolean in case of update and delete.

The `_mail` supports adding attachments in `inline` mode.

##### Setup Scripts

When exporting data form through code generation, in development mode it avoids the blank values of date (_time_), timestamp and time (_time_).

[Download Manual](https://www.netuno.org/netuno-v7-20210208_1437.zip) _(GraalVM 21.0.0)_

### 7:20201222.1802

##### Forms

Items entered with MultiSelect become active.

In data management with the popup of relations with other forms the issue that caused the loss of the context of the main record and allowed the management of other unrelated data will be resolved.

Image Fields and Files now automatically remove old files to avoid wasting disk space.

##### Database

With data manipulation functions such as `_db.update`, `_db.insert`, `_db.delete` and others can be manipulate all fields and records without form validations.

The `_db.search` allows you to turn off auto-generated wildcards allowing to perform exact searches, also `_db.insertIfNotExists` checks better for existing records.

Support for MSSQLSRV (Microsoft SQL Server) instances added.

Data objects of type `Values` have new functions to get SQL types such as date, timestamp and time.

##### Resources

The `_remote` feature allows you to use addresses with invalid certificates and in the response returns the URL that was used.

New `_monitor` feature allows you to get hardware performance data.

##### Scripts

The server-side scripts for apps have been simplified, like the configuration and startup scripts.

[Download Manual](https://www.netuno.org/netuno-v7-20201222_1802.zip) _(GraalVM 20.3.0)_

### 7:20201124.1246

##### Monitor and Alerts

[Performance monitoring lets you trigger alerts.](/docs/en/library/advanced/monitor-alerts) Also:

- Better calculations and demonstration of CPU and memory in logs.
- Processes occupied and available disk space.

##### Installation and Upgrade

`./update` script to perform the **Upgrade**.

Checks _GraalVM_ version and updates if necessary.

Removes obsolete jars in `web/WEB-INF/lib`.

[Download Manual](https://www.netuno.org/netuno-v7-20201124_1246.zip) _(GraalVM 20.3.0)_

### 7:20201027.0921

##### Open API

It is possible to extend the schema definition with scripts, allowing for example the creation of constraints with allowed values which can be obtained and updated with the database.

##### Database

Resource `_db` supports `batch` execution it allows to schedule this execution by multiple consecutive database operations such as `update`, `insert` and `delete`.

##### Forms

New search functionality that allows you to select multiple records to disable or mass delete.

[Download Manual](https://www.netuno.org/netuno-v7-20201027_0921.zip) _(GraalVM 20.2.0)_

### 7:20200917.1521

Evolved improvements in the **clone** of apps that allows better customization throughout the process and also better replication control with **CockroachDB**.

Fixed memory leak with files that were left open.

[Download Manual](https://www.netuno.org/netuno-v7-20200917_1521.zip) _(GraalVM 20.1.0)_

### 7:20200815.1932

Jetty version upgrade and HTTP2 support added.

Integration with [HikariCP - DB Connection Pool](/docs/en/library/advanced/hikaricp-database-connection-pool/), better database connection management.

##### Resources

The management of groups (`_group`) and users (`_user`) with the new `firstByName` and `createIfNotExists` functions.

The operating system resource, `_os`, with new functions for managing files (`file`) and folders (`folder`).

The `_storage` resource has a new function for processing folders (`folder`).

[Download Manual](https://www.netuno.org/netuno-v7-20200815_1932.zip) _(GraalVM 20.1.0)_

### 7:20200731.1756

Improvements in CRON Jobs.

Supports the installation for **ARM**.

##### Resources

Automatisms to facilitate programming in the manipulation of files and folders, with recursive copy and delete.

Optimizations of **Remote** and implemented support for binary download.

[Download Manual](https://www.netuno.org/netuno-v7-20200731_1756.zip) _(GraalVM 20.1.0)_

### 7:20200626.1623

Supports the customization of the default translation texts in the apps.

Optimization of CRON Jobs.

Controls to manage the export of forms in different formats and new export of data in the script to automate database loading.

The implemented mechanism automatically clears the context of scripts, to avoid conflicts with service scripts with form action scripts in database. 

[Download Manual](https://www.netuno.org/netuno-v7-20200626_1623.zip) _(GraalVM 20.0.0)_

### 7:20200522.1720

Memory performance optimizations in general.

Evolution of the mapping of apps with domains (host), and customization of URL prefixes, such as services, admin and public

New hardware performance monitor.

[Download Manual](https://www.netuno.org/netuno-v7-20200522_1720.zip) _(GraalVM 20.0.0)_

### 7:20200429.1436

##### Database

Resource `_db` added `findFirst` method.

##### OpenAPI

For the definition of the properties new types were created:
  - `string-not-empty`
  - `array-not-empty`
  - `id`
  - `uid`
  
##### Apps

Updating NPM packages and restructuring React, containers and components in `ui`.

[Download Manual](https://www.netuno.org/netuno-v7-20200429_1436.zip) _(GraalVM 20.0.0)_

## 2002 to March 2020

**Please Note** 

From version **1** to version **6** have been discontinued and are no longer distributed.

From version **7** the compiled versions are no longer distributed until March 2020.

Please install the latest versions available above.