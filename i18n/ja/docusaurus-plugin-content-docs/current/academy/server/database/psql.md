---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## はじめに

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> は、最も広く利用されているオープンソースのオブジェクトリレーショナルデータベースのひとつです。

## インストール

PostgreSQL のインストール方法について説明します。

#### Ubuntu

ターミナルで実行します:

```shell
sudo apt install postgresql
```

#### Windows

データベースサーバーをインストールします:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL Database Download</a>

PostgreSQL クライアント <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a> をインストールします。

## クライアント

データベースサーバーで管理コマンドを実行するために PostgreSQL に接続します。

#### Ubuntu

ターミナルで実行します:

```shell
sudo -u postgres psql
```

#### Windows

<a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a> をインストールして使用します。

## ユーザーの作成

PostgreSQL クライアントに接続した状態で、次のコマンドを実行します:

```sql
create user app_user with password 'S3cR3t';
```

## データベースの作成

PostgreSQL クライアントに接続した状態で、次のコマンドを実行します:

```sql
create database app_db with owner app_user;
```

> 終了するには次のコマンドを使用します: `\q`

## データベースの設定

PostgreSQL のクライアントアプリケーションを使用して、作成した新しいデータベースに接続します。

#### Ubuntu

ターミナルで次のコマンドを実行します:

```shell
sudo -u postgres psql app_db
```

#### Windows

<a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a> をインストールして使用します。

### UUID 拡張機能のインストール

UUID を生成するための拡張機能を PostgreSQL にインストールする必要があります。

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## アプリケーションの設定

環境に応じてアプリケーションの設定ファイルを編集します:

- `config/_development.json`

PostgreSQL 向けの設定例:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t"
        }
    },
    ...
}
```

次のような高度な設定を使用することもできます:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
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