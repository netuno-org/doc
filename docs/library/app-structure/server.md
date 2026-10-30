---
id: server
title: Server
sidebar_label: Server
---

Backend and API development.

## Server Folder

The `📂 server` folder contains a set of files and folders that form the application's backend.

Everything in the `📂 server` folder is used in backend server processing, such as integrations, API,
database, security and authentication, Cron Jobs, among many others.

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

In `📂 actions`, custom actions tailored (_hooks_) can be added to the CRUD operations of the forms 
automatically generated for the backoffice; depending on the data structure, significant data handling can be
done here.

For example, when deleting a customer, it is necessary to remove all their orders, or when creating a new product it must 
be integrated with another system. In short, any development directly related to data can be done
here.

Actions are inspired by database `triggers`, but at the code execution level.

Therefore, specific operations can be programmed for creating, updating, and deleting data.

## Components

`📂 components` is used to define custom field types in backoffice forms, which 
can perform their own data manipulation.

Components can be created through scripts to provide a new specific field type in the application.

## Core

The `📂 core` folder allows code injection into the HTTP request processing flow.

It is also used to share code among the various services and others.

`_config.js` is executed after the configuration is loaded on each HTTP request; it is executed after the environment 
configuration script located in the application's `📂 config` folder.

`_init.js` is used to inject some instruction when the application is initialized for the first time.

### HTTP Request Processing

In the HTTP request processing flow for any application URL, the respective scripts are executed:

- `_request_start.js` is executed when the HTTP request reaches the Netuno server.
- `_request_url.js` is executed when the URL is processed by Netuno; the URL can be changed to another destination.
- `_request_close.js` is executed when the HTTP request response is closed.
- `_request_end.js` is executed when the HTTP request is definitively completed.
- `_request_error.js` is executed when an error occurs in HTTP request processing.

### API Services Processing

In the processing flow of any application API service, the following scripts are executed:

- `_service_config.js` is executed before starting the service execution; it is used to define the service execution 
settings, among other things. It can define whether or not the service can be executed, that is, an 
access security control for the API service.
- `_service_start.js` is executed as soon as a service starts being processed.
- `_service_end.js` is executed after the processing of a service is finished.
- `_service_error.js` is executed when an error occurs while processing a service.

## Services - API

It is in the `📂 services` folder that the services that make up the application API are created. 

Services can be written in various languages: JavaScript, Python, Java, Kotlin, Ruby, or Groovy.

Since Netuno is polyglot, any script file can be changed to another supported programming language;
the files just need to have the extension corresponding to the language.

No additional configuration is required depending on the programming language used; you just need to create the service 
file with the correct extension corresponding to the programming language.

## Setup

The `📂 setup` folder contains the code automatically generated by the Netuno engine that defines the database 
schemas, and it is also where we can place the data loading that is essential for the application to work.

The `_start.js` script is executed before starting the database build process.

The `_end.js` script is executed after the database build process is finished.

Based on the construction of the data structure, Netuno automatically creates here in the `📂 setup` folder the code 
necessary for the entire data structure to be recreated in a new database, or to recreate anything missing in 
another database where the application may eventually run.

 ## Templates

The `📂 templates` folder contains the HTML content of the application's backoffice pages, which are generated by the Netuno
server.

The `📂 dev` folder contains the `dashboard.html` file, which allows changing the workspace in the developer 
construction mode.

The `dashboard.html` at the root of the templates contains the HTML of the general backoffice workspace.

### Native Templates

In the `📂 _` folder, any general template can be replaced, meaning Netuno's default templates can be 
changed.

- [Here are Netuno's native templates.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

If the name of folders and/or files matches those of the native templates inside this folder, then the template 
located in this folder is used instead of the native template.

In other words, you just need to replicate the same structure as the native template inside the `📂 _` folder to replace it.

### Scripts

The script templates inject JavaScript code files at the end of the pages for the following purpose:

1. `scripts.html` add JavaScript code at the end of the **backoffice** page.
2. `scripts_dev.html` add JavaScript code at the end of the **developer construction area** page.
3. `scripts_login.html` add JavaScript code at the end of the **login** page.

### Styles

The style templates inject style files at the beginning of the pages for the following purpose:

1. `styles.html` add CSS code at the beginning of the **backoffice** page.
2. `styles_dev.html` add CSS code at the beginning of the **developer construction area** page.
3. `styles_login.html` add CSS code at the beginning of the **login** page.