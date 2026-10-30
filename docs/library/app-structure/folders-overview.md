---
sidebar_position: 1
id: folders-overview
title: Folders Overview
sidebar_label: Overview
---

Explore and get to know the folders and files of the applications.

## Structure

Starting from the root where Netuno is installed, we can find the `📂 apps` folder.

Inside the `📂 apps` folder is where all applications available on the Netuno platform are located.

There are applications that can be created locally while others can be external, for example applications that
are clones of GIT repositories.

See from the Netuno root the complete structure of a newly created application:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>my_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> The `apps` folder contains all applications available in Netuno.

Initially in this folder there is already the `demo` application, which as the name indicates is a **demo**
_nstration_ of Netuno features.

When a new application is created, a new folder is added containing the same hierarchy of subfolders, as was
presented above.

## Main Folders

Inside the application folder we have the main folders, where each one of them has a specific purpose.

The main folders are:

- [📂 config](config) - General configurations;
- [📂 dbs](dbs) - Things related to the database;
- [📂 docs](docs) - Documentation and other documents in general;
- [📂 public](public) - Public content available directly through URL, such as images, JavaScript and CSS;
- [📂 server](server) - Backend code, such as services, jobs, templates, reports, and the entire API in general.
- [📂 storage](storage) - Organization of files that are related to data or that are used in code.
- [📂 ui](ui) - Backoffice user interface, frontend code such as dashboards and other features.