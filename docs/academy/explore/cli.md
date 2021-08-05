---
id: cli
title: Command Line
sidebar_label: Command Line
---

Before you start developing, take a look at the available commands.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `help` | Allows you to view all the commands available from Netuno |
| `version` | Allows you to view the current version of Netuno |

#### List Available Commands
```shell
./netuno help
```
#### View Netuno version
```shell
./netuno version
```
<br>

## Install
Before starting developing you need to install Netuno 
<br>To help you install Netuno go to [Installation ](https://doc.netuno.org/docs/en/installation/)

#### Details 

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `checksum` | Allows you to update checksum stored to all bundle files |
| `force`           | Allows you to force override all local changes |
| `graal=true/false` | Allows you define if you want to use GraalVM to best performance your apps |
| `path=[Directory]`| Allows you to set the install path |
| `remove` | Remove all Netuno files|
| `version=[version]`| Allows you to select the version of Netuno that should be install, "latest" for the current version in development|
| `yes` | Allows you to answer all question with an YES and be sure that your changes can be destroyed|

#### Example of how to update checksum

```shell
./netuno install checksum
```
#### Example of how to force all local changes

```shell
./netuno install force
```

#### Example of how to desactive GraalVM 

```shell
./netuno install graal=false
```

> GraalVM by default is enabled and downloaded automatically on Netuno installation.

#### Example of how to set the install path

```shell
./netuno install path ='netunoDir'
```
#### Example of how to remove all Netuno files.

```shell
./netuno install remove
```

#### Example of how to select the version of Netuno that should be install

```shell
./netuno install version='latest'
```

#### Example of  how to reply as YES to all questions 

```shell
./netuno install yes 
```

<br>

## Server

Start the Netuno server to start developing your applications.

```shell
./netuno server
```

> The default port is 9000. <br>
> After starting up the server you only need to access through the link : http://localhost:9000/

#### Details

By default, the Netuno directory is set to the webapp name, the webapp folder is where all the files for its operation are located.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `app=[appname]` | Allows to define which application should be started 
| `host=[IP/Host Name]` | Allows you to change the host name of Netuno |
| `launch=true/false` | Allows you to define if Netuno initializes the link in the browser |
| `npm` | Allows you to run 'npm watch' into the App to auto build the frontend|
| `port=[Number]` | It allows defining the initialization port of the server |
| `secret=[password]` | Allows you to define a password to acess the server remote management|
| `web=[directory]` | Allows you change the default web home folder |


> When you change the directory name, you need to change the folder name to the desired name, as the name will only be changed in the Netuno code.

#### Example of how to start the server of a certain application

```shell
./netuno server app=myapp
```

#### Example of how to change the hostname

```shell
./netuno server host=localhost
```

#### Example of how to define if Netuno initializes the link in the browser

```shell
./netuno server launch=false
```

>By default the Netuno opens the browser and initializes the link

#### Example to run npm to auto build the frontend

```shell
./netuno server npm
```

#### Example of how to change the port
```shell
./netuno server port=10000
```

#### Example of how to define a password to acess the server remote management

```shell
./netuno server secret='p#ssw@rd'
```

#### Example of how to change the default web home folder

```shell
./netuno server web=webapp
```

<br>

## License

To start developing you just need to register.

```shell
./netuno license
```

> There are currently three licenses: Community, Standard and Enterprise

#### Details

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `create , change` | Allows you to create or change the license	 |
| `key` | Allows you to view the license key |
| `mail=[your@mail.com]` | Allows you to set the account email address |
| `type=[community/standard/enterprise]`| Allows you to set the license type|

#### Example of how to create a license

```shell
./netuno license create
```

#### Example of how to visualize the license key 

```shell
./netuno license key
```
#### Example of how to set your mail and license type

```shell
./netuno license mail='your_email@gmail.com' type='community'
```

<br>

## Application

Create your applications easily.

```shell
./netuno app
```

> After the creation of the application if you want to see where the application folder is you can go to the webapp folder, then the apps folder and there you will find the application folder.

#### Details
By default,Netuno has a demo application that starts when the Netuno server is started.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `database=[database name]` | Allows you to define the name of the database |
| `engine=[name]` | Allows you to define the type of database |
| `host=[address]` | Allows you to define the database address |
| `language=[language]`  | Allows you to define the language |
| `locale=[language]` |  Allows you to define the application locale |
| `name=[name]`  | Allows you to create an application or rebuild an existing application |
| `password=[password]`  | Allows to set a password for the database |
| `port=[number]`  | Allows you to define the database port |
| `username=[name]`  | Allows to define the username of the database |

#### Example of how to pre-define the database name

```shell
./netuno app database=employee
```

> The database name may contain number and letters, if the name has more than one word it should be separated as follows. <br>
 Ex: employee_db

#### Example of how to pre-define the database type

```shell
./netuno app engine=pg
```
> These are the accepted database types: <br>PostgreSQL - pg <br>
 MariaDB - mariadb <br>
 Microsoft SQL Server - mssql <br>
 H2 Database - h2 <br>

#### Example of how to pre-define the database server address

```shell
./netuno app host=localhost
```

#### Example of language and locale pre-setting

```shell
./netuno app language=en_US locale=en_US
```
>The following languages exist: <br>
 Portuguese - pt_PT<br>
 Brazilian - en_BR <br>
 English - en_US <br>
 Spanish - es_ES <br>


#### Example of how to create an application or rebuild an existing application

```shell
./netuno app name=demo
```

#### Example of how to pre-define the database password

```shell
./netuno app password=secret
```

#### Example of the pre-defined database port

```shell
./netuno app port=5432
```
> By default, the PostgreSql port is 5432<br/>
  By default, the MariaDB port is 3306<br/>
  By default, the Microsoft SQL Server port is 1433

#### Example of how to define the database user name

```shell
./netuno app username=root
```
