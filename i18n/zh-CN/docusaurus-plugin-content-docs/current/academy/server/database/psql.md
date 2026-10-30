---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## 简介

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> 是最常用的开源对象关系型数据库之一。

## 安装

有关如何安装 PostgreSQL 的信息。

#### Ubuntu

在终端中执行：

```shell
sudo apt install postgresql
```

#### Windows

安装数据库服务器：

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL Database Download</a>。

安装 PostgreSQL 客户端 <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>。

## 客户端

连接到 PostgreSQL 以在数据库服务器上执行管理命令。

#### Ubuntu

在终端中执行：

```shell
sudo -u postgres psql
```

#### Windows

安装并使用 <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>。

## 创建用户

在连接到 PostgreSQL 客户端后执行以下命令：

```sql
create user 应用用户 with password 'S3cR3t';
```

## 创建数据库

在连接到 PostgreSQL 客户端后执行以下命令：

```sql
create database 应用数据库 with owner 应用用户;
```

> 要退出请使用命令：`\q`

## 配置数据库

使用 PostgreSQL 客户端应用程序连接到刚刚创建的新数据库。

#### Ubuntu

在终端中执行以下命令：

```shell
sudo -u postgres psql 应用数据库
```

#### Windows

安装并使用 <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>。

### 安装 UUID 扩展

需要在 PostgreSQL 中安装用于生成 UUID 的扩展。

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## 配置应用

根据环境编辑应用的配置文件：

- `config/_development.json`

PostgreSQL 的配置示例：

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "应用数据库",
            "username": "应用用户",
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
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "应用数据库",
            "username": "应用用户",
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