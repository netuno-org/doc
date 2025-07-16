---
sidebar_position: 1
id: folders-overview
title: Folders Overview
sidebar_label: Overview
---
Explore and learn about the application folders and files.

## Structure

From the root folder where Netuno is installed, we can find the `📂 apps` folder.

Inside the `📂 apps` folder is where all the applications available on the Netuno platform are located.

Some applications can be created locally, while others can be external, for example, applications that
are clones of GIT repositories.

See the complete structure of a newly created application from the Netuno root folder:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>minha_app</b>/</span>
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

> The 'apps' folder contains all the applications available on Netuno.

Initially, this folder already contains the 'demo' application, which, as the name suggests, is a demonstration of Netuno's features.

When a new application is created, a new folder is added containing the same hierarchy of subfolders, as shown above.

## Main Folders

Within the application folder, we have the main folders, each with a specific purpose.

The main folders are:

- [📂 config](config) - General settings;
- [📂 dbs](dbs) - Database-related items;
- [📂 docs](docs) - Documentation and other documents in general;
- [📂 public](public) - Public content available directly via URL, such as images, JavaScript, and CSS;
- [📂 server](server) - Backend code, such as services, jobs, templates, reports, and the entire API in general.
- [📂 storage](storage) - Organization of files related to data or used in code.
- [📂 ui](ui) - Backoffice user interface, frontend code such as dashboards and other features.
- 