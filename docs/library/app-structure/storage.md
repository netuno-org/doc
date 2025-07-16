---
id: storage
title: Storage
sidebar_label: Storage
---

Files integrated into the code or database.

## General Storage

The `📂 storage` folder is intended to securely store general files that are useful in the application's processing.

## Folder Structure

The `📂 storage` folder has the following structure:

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

It's not practical to store files directly in the database, as it compromises backups and data synchronization, considerably increasing the size of the database due to the space taken up by many files.

Therefore, for any data form that has a file or image upload field, the final file is organized and saved here, and only the final file name is saved in the database field.

If the data structure contains files, then to perform a full application backup, you must back up this folder in addition to the database backup.

## General File System

The `📂 filesystem` folder allows you to organize, with access restrictions, general files that are useful to the
application.

Any file that is directly useful in the application code should be stored here.

The restrictions are divided into:

### Private

The `📂 private` folder should only be read or written to by authenticated users in the application.

### Public

The `📂 public` folder is useful for external access.

### Server

The `📂 server` folder only allows reading and writing from the application's internal code.

Therefore, no internal or external users can access its contents.

Its contents are only accessible through the code.
