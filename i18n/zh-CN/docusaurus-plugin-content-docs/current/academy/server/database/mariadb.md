---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## 简介

<a href="https://mariadb.org/" target="_blank">MariaDB</a> 是一款创新的开源关系型数据库，兼容 **MySQL**。

## 安装

如何安装 MariaDB。

#### Ubuntu

在终端中执行：

```shell
sudo apt install mariadb-server
```

#### Windows

下载并安装 MariaDB：

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB 下载</a>

## 客户端

连接到 MariaDB，以便在数据库服务器上执行管理命令。

#### Ubuntu

在终端中执行：

```shell
sudo mariadb
```

#### Windows

打开 `Command Prompt MariaDB` 应用并执行：

```shell
mariadb -u root -p
```

或者查找 `MySQL Client` 或 `MariaDB Client`。

## 创建数据库

在连接到 MariaDB 客户端后，执行以下命令：

```sql
CREATE DATABASE app_db
```

## 创建用户

在连接到 MariaDB 客户端后，执行以下命令：

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'S3cR3t';
```

要授予该用户在已创建的数据库中的通用访问权限，请执行：

```sql
GRANT ALL PRIVILEGES ON app_db.* TO 'app_user'@'localhost';
```

刷新访问权限：

```sql
FLUSH PRIVILEGES;
```

> 要退出，请使用命令：`\q`

## 配置应用

根据环境编辑应用的配置文件：

- `config/_development.json`

MariaDB 的数据库配置示例：

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t"
        }
    },
    ...
}
```

也可以使用高级配置，例如：

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> 了解更多关于[使用 HikariCP 连接数据库的配置](/docs/academy/server/database/hikaricp-database-connection-pool)。