---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## はじめに

<a href="https://mariadb.org/" target="_blank">MariaDB</a> は **MySQL** 互換の革新的なオープンソースリレーショナルデータベースです。

## インストール

MariaDB のインストール方法。

#### Ubuntu

ターミナルで実行します:

```shell
sudo apt install mariadb-server
```

#### Windows

MariaDB をダウンロードしてインストールします:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB のダウンロード</a>

## クライアント

MariaDB に接続して、データベースサーバーの管理コマンドを実行します。

#### Ubuntu

ターミナルで実行します:

```shell
sudo mariadb
```

#### Windows

アプリ `Command Prompt MariaDB` を開き、次を実行します:

```shell
mariadb -u root -p
```

または `MySQL Client` または `MariaDB Client` を検索します。

## データベースの作成

MariaDB クライアントに接続した状態で、次のコマンドを実行します:

```sql
CREATE DATABASE アプリ_db
```

## ユーザーの作成

MariaDB クライアントに接続した状態で、次のコマンドを実行します:

```sql
CREATE USER 'アプリ_ユーザー'@'localhost' IDENTIFIED BY 'S3cR3t';
```

作成したデータベースに対するユーザーの全般的なアクセス権を付与するには、次を実行します:

```sql
GRANT ALL PRIVILEGES ON アプリ_db.* TO 'アプリ_ユーザー'@'localhost';
```

アクセス権限を更新します:

```sql
FLUSH PRIVILEGES;
```

> 終了するには、コマンド `\q` を使用します

## アプリケーションの設定

環境に応じてアプリケーションの設定ファイルを編集します:

- `config/_development.json`

MariaDB のデータベース設定例:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "アプリ_db",
            "username": "アプリ_ユーザー",
            "password": "S3cR3t"
        }
    },
    ...
}
```

次のような高度な設定も使用できます:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "アプリ_db",
            "username": "アプリ_ユーザー",
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

> HikariCP を使用した[データベース接続設定](/docs/academy/server/database/hikaricp-database-connection-pool)について詳しくはこちらをご覧ください。