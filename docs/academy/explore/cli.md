---
id: cli
title: Command Line
sidebar_label: Command Line
---


The Netuno command-line interface is the primary tool for managing your development environment. Through it, you can query system information, manage applications, and quickly configure the server.

#### Requirements

- **Terminal:** You must have a terminal (Command Prompt, PowerShell, or Bash) open in the root folder where Netuno was installed.

These are the initial commands to verify that your environment is ready for use.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `help` | Allows you to view all the commands available from Netuno |
| `version` | Allows you to view the current version of Netuno |

#### List Available Commands

If you have questions about which operations you can perform, use the help command. It will return a complete list of functions.

```shell
./netuno help
```
#### View Netuno version

It is essential to know which version you are using to ensure compatibility with specific scripts and modules

```shell
./netuno version
```

## Install

Before starting development, it is necessary to install the Netuno engine in your environment. For more information, visit our [Installation](/docs/get-started/installation) page.

This section details the parameters that can be used during the installation process to automate or optimize the process.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `checksum` | Updates the checksum code of all files in the installed package. |
| `force`           | Forces the replacement of all files, even if there are local changes. |
| `graal=true/false` | Defines the use of GraalVM to obtain higher performance when running applications. |
| `path=[Directory]`| Manually defines the path (folder) where Netuno will be installed. |
| `remove` | Completely removes all files related to Netuno from the system.|
| `version=[version]`| Selects a specific version to install. Use the latest version for the development version|
| `yes` | Automatically answers "YES" to all confirmations, ignoring warnings about data loss.|

#### Example of how to update checksum:

```shell
./netuno install checksum
```
#### Example of how to force all local changes:

```shell
./netuno install force
```

#### Example of how to desactive GraalVM:

```shell
./netuno install graal=false
```

> GraalVM is active by default and is automatically downloaded during Netuno installation.

#### Example of how to define the installation path:

```shell
./netuno install path ='netunoDir'
```
#### Example of how to remove all Netuno folders:

```shell
./netuno install remove
```

#### Example of how to select the Netuno version to be installed:

```shell
./netuno install version='latest'
```

#### Example of how to reply as YES to all questions:

```shell
./netuno install yes 
```

## Server

After completing the installation, start the server to begin developing your applications.

To start the server with default settings, run the following command in the Netuno root folder:

```shell
./netuno server
```

> By default, the server uses port 9000. Once the terminal indicates that the system is ready, you can access the management panel via the link: http://localhost:9000/

This section details the parameters that can be used during the server startup process.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `app=[appname]` | Specifically defines which application should be launched | 
| `host=[IP/Host Name]` | Allows you to change the Netuno hostname |
| `launch=true/false` | Defines whether Netuno should automatically open the browser |
| `npm` | Automatically executes the 'npm watch' command to compile the app's frontend in real time |
| `port=[Number]` | Defines the server's startup port |
| `secret=[password]` | Defines a security password to allow remote access to the server's management|
| `web=[directory]` | Changes the default project root folder (web home) |


By default, Netuno uses the **'webapp'** folder to store all files essential to its operation.

**Caution when changing the directory:** If you use the parameter web=[folder] to change the name of the root folder, remember that you must also physically rename the folder in your file system. The command only instructs the Netuno code on where to look for the files; it does not automatically rename folders.

#### Example of how to start the server for a specific application:

```shell
./netuno server app=myapp
```

#### Example of how to change the hostname:

```shell
./netuno server host=localhost
```

#### Example of how to set whether Netuno starts the browser automatically:

```shell
./netuno server launch=false
```

>By default, Netuno opens the browser and initializes the link http://localhost:9000.

#### Example of how to run npm to automatically build the frontend

```shell
./netuno server npm
```

#### Example of how to change the port
```shell
./netuno server port=10000
```

#### Example of how to define a password to acess the server remote management:

```shell
./netuno server secret='p#ssw@rd'
```

#### Example of how to change the default web folder:

```shell
./netuno server web=webapp
```

## License

To start developing with Netuno, you need to register your environment.

To manage your license, use the base command:

```shell
./netuno license
```

> Currently, Netuno offers three license types: **Community, Standard, and Enterprise**.

This section details the available actions to configure or query your license.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `create , change` | Starts the process to create a new license or change the current one |
| `key` | Displays the active license key in your environment |
| `mail=[your@mail.com]` | Sets the email address associated with the license account |
| `type=[community/standard/enterprise]`| Sets the license type|

#### Example of how to create a license

```shell
./netuno license create
```

#### Example of how to visualize the license key:

```shell
./netuno license key
```
#### Example of how to define your email and license type:

```shell
./netuno license mail='your_email@gmail.com' type='community'
```

## Application

With the server configured and the license active, you can expand your ecosystem by creating new solutions.

```shell
./netuno app
```

The generated files will be automatically organized within the Netuno folder structure.

To access or edit your application files, navigate to the following path from the system root: **webapp/apps/[your_app_name]**

#### Folder Structure

- **webapp**: This is the root folder containing all the essential files for Netuno to function.

- **apps**: This is the specific folder where all developed or demonstration applications are stored.

- **[your_app_name]**: This is the exclusive folder for the application you just created.

By default, Netuno has a demonstration application that is displayed when the Netuno server starts.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `database=[database name]` | Defines the database name |
| `engine=[name]` | Defines the database type |
| `host=[address]` | Defines the database address |
| `language=[language]`  | Defines the application language |
| `locale=[language]` |  Defines the application's local language |
| `name=[name]`  | Allows you to create an application or rebuild an existing one |
| `password=[password]`  | Defines a password for the database |
| `port=[number]`  | Defines the database port |
| `username=[name]`  | Defines the database username |

#### Example of how to define the database name:

```shell
./netuno app database=employee
```

> The database name can contain numbers and letters; if the name has more than one word, it must be separated by "_", as follows.
>
> **Example:** employee_db

#### Example of how to define the database type:

```shell
./netuno app engine=pg
```
These are the accepted database types: 
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Example of how to define the database server address:

```shell
./netuno app host=localhost
```

#### Example of how to define the language and locale:

```shell
./netuno app language=en_US locale=en_US
```
The following languages exist:
> - Portuguese - pt_PT
> - Brazilian - en_BR
> - English - en_US
> - Spanish - es_ES


#### Example of how to create or rebuild an application Existing:

```shell
./netuno app name=demo
```

#### Example of how to set the database password:

```shell
./netuno app password=secret
```

#### Example of how to set the database port:

```shell
./netuno app port=5432
```
By default, the ports correspond to:

> - PostgreSQL - **5432**
> - MariaDB - **3306**
> - Microsoft SQL Server - **1433**

#### Example of how to set the database username:

```shell
./netuno app username=root
```
