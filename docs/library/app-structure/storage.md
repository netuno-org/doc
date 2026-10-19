---
id: storage
title: Storage
sidebar_label: Storage
---

Files integrated into code or in the database.

## General Storage

The `📂 storage` folder is intended to securely store general files that are useful in the application's processing.

## Folder Structure

The `📂 storage` folder contains the following structure:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Database

The `📂 database` folder is used to store files or images related to the database.

Storing files directly in the database is not practical, because they compromise backups and data synchronization, considerably increasing the database size due to the space occupied by many files in general.

Therefore, for any data form that has a file or image upload field, the final file is organized and stored here, and only the final file name is saved in the database field.

If the data structure contains files, then to perform a full backup of the application, you must back up this folder in addition to the database backup.

## General File System

The `📂 filesystem` folder allows organizing, with access restrictions, the general files that are useful for the application.

Any file that is directly useful in the application code should be stored here.

The restrictions are divided into:

### Private

The `📂 private` folder should only be accessed for reading or writing by users authenticated in the application.

### Public

The `📂 public` folder is useful for external access.

### Server

The `📂 server` folder only allows reading and writing from the application's internal code.

Therefore, no internal or external user accesses its content.

Its content is only accessible through code.