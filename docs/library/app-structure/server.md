---
id: server
title: Server
sidebar_label: Server
---

Backend and API Development.

## Server Folder

The `📂 server` folder contains a set of files and folders that make up the application's backend.

Everything in the `📂 server` folder is used for backend server processing, such as integrations, API,
database, security and authentication, Cron Jobs, and much more.

## Folder Structure

The `📂 server` folder has the following structure:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

In `📂 actions`, you can add custom actions (_hooks_) to the CRUD operations of forms
automatically generated for the back office. Depending on the data structure, many data interventions can be
performed here.

For example, when reviewing a customer, it is necessary to delete all their orders, or when creating a new product, it must
be integrated with another system. In short, any development directly related to data can be done
here.

Actions are inspired by database triggers, but at the code execution level.

Therefore, specific operations can be programmed for creating, modifying, and deleting data.

## Components

`📂 components` are used to define custom field types in back office forms, which
can perform data manipulation themselves.

Components can be created through scripts to provide a new, specific field type in the application.

## Core

The `📂 core` folder allows code injection into the HTTP request processing flow.

It is also used to share code between different services and others.

`_config.js` is executed after the configuration is loaded for each HTTP request. It is executed after the environment configuration script found in the application's `📂 config` folder.

`_init.js` is used to inject instructions when the application is initialized for the first time.

### HTTP Request Processing

The corresponding scripts are executed in the HTTP request processing flow for any URL in the application:

- `_request_start.js` is executed when the HTTP request arrives at the Netuno server.
- `_request_url.js` is executed when the URL is processed by Netuno; the URL can be changed to another destination.
- `_request_close.js` is executed when the HTTP request response is closed. - `_request_end.js` is executed when the HTTP request is definitively completed.
- `_request_error.js` is executed when an error occurs while processing the HTTP request.

### API Service Processing

The following scripts are executed in the processing flow of any application's API service:

- `_service_config.js` is executed before starting the service execution. It is used to define the service execution settings, among other things. It can be used to define whether or not the service can be executed, i.e., a security control over access to the API service.
- `_service_start.js` is executed as soon as a service begins processing.
- `_service_end.js` is executed after a service has finished processing.
- `_service_error.js` is executed when an error occurs while processing a service.

## Services - API

The services that make up the application API are created in the `📂 services` folder.

Services can be written in various languages: Javascript, Python, Java, Kotlin, Ruby, or Groovy.

Since Netuno is polyglot, any script file can be modified to another supported programming language;
the file extension simply matches the language.

No additional configuration is required depending on the programming language used; simply create the service file with the correct extension corresponding to the programming language.

## Setup

The `📂 setup` folder contains the code automatically generated by the Netuno engine that defines the database schemas.

It is also where we can place the data loading, which is essential for the application to function.

The `_start.js` script is executed before the database construction process begins.

The `_end.js` script is executed after the database construction process is complete.

As the data structure is built, Netuno automatically creates the code in the `📂 setup` folder
necessary for the entire data structure to be recreated in a new database, or to recreate any missing code in
another database where the application may eventually run.

## Templates

The `📂 templates` folder contains the HTML content of the application's backoffice pages, which are generated by the Netuno server.

The `📂 dev` folder contains the `dashboard.html` file, which allows you to change the workspace in developer
build mode.

The `dashboard.html` folder, located in the templates root, contains the HTML for the general backoffice workspace.

### Native Templates

In the `📂 _` folder, any general template can be replaced, meaning Netuno's default templates can be
changed.

- [Here are Netuno's native templates.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

If the folder and/or file names match those of the native templates within this folder, then the template found in this folder will be used instead of the native template.

In other words, simply replicate the same structure of the native template within the `📂 _` folder to replace it.
