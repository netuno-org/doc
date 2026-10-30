---
id: multiple-databases
title: 多个数据库
sidebar_label: 多个数据库
---

## 连接到多个数据库

Netuno 允许一个应用程序连接到多个数据库。

这样您就可以通过多个不同的连接和不同类型的数据库来操作数据。

Netuno 支持连接到如下数据库：

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _（即将推出）_

## 默认数据库

要让应用程序正常运行，始终需要有一个配置为 default（默认）的数据库。

请记住，应用程序的配置保存在以下文件中：

```
/web/app/你的应用/config/_development.json
/web/app/你的应用/config/_production.json
/web/app/你的应用/config/_你的环境.json
```

在那里您可以找到 _default_ 数据库连接的配置，如下所示：

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "数据库",
            "username": "用户"
        }
    },
    ...
```

因此，要添加更多到其他数据库的连接，只需重复这份配置，把 _default_ 这个名字换成其他想要的名字即可。

例如，假设您有一个应用程序，其默认数据库位于 PostgreSQL，但同时还必须连接到 WordPress 的一个 MariaDB 数据库（_网站-wp_），以及另一个 .Net/C# 应用程序的 Microsoft SQL Server 数据库（_应用-dotnet-mssql_）……

要让这个应用程序能够连接到这些多个数据库，其配置将是这样：

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "数据库",
            "username": "用户"
        },
        "网站-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "数据库",
            "username": "用户"
        },
        "应用-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "数据库",
            "username": "用户"
        }
    },
    ...
```

要与这些应用程序中的每一个通信，只需按如下方式使用 _db 资源：

```
var dbDefault = _db.init()

var db网站WP = _db.init("网站-wp")

var db应用DotNet = _db.init("应用-dot-net")
```

每个变量都包含一个 *_db* 资源实例，它与应用程序配置中定义的连接标识键相对应的数据库关联。

这样，使用这些变量，您就可以执行数据库操作，如查询、插入、更新和删除。

有关数据库操作的更多信息，请参阅该资源的文档：[_db](/docs/library/resources/db)