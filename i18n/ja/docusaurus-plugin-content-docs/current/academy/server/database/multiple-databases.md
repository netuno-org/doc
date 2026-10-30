---
id: multiple-databases
title: 複数のデータベース
sidebar_label: 複数のデータベース
---

## 複数のデータベースへの接続

Netuno では、アプリケーションを複数のデータベースに接続できます。

これにより、複数の接続と異なる種類のデータベースを通じてデータを操作できます。

Netuno は次のデータベースへの接続をサポートしています:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _（近日対応）_

## デフォルトデータベース

アプリケーションが正しく動作するには、常にデフォルト（標準）として設定されたデータベースが必要です。

アプリケーションの設定は次のファイルに保存されることに注意してください:

```
/web/app/YOUR_APP/config/_development.json
/web/app/YOUR_APP/config/_production.json
/web/app/YOUR_APP/config/_YOUR_ENVIRONMENT.json
```

そこには、次のような _default_ データベース接続の設定があります:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

したがって、他のデータベースへの接続をさらに追加するには、この設定を繰り返し、_default_ という名前を任意の名前に変更するだけです。

たとえば、デフォルトデータベースが PostgreSQL にあるアプリケーションがあり、さらに WordPress の MariaDB データベース（_website-wp_）と、.Net/C# アプリケーションの Microsoft SQL Server データベース（_app-dotnet-mssql_）にも接続する必要があるとします...

このアプリケーションをこれらの複数のデータベースに接続するための設定は次のようになります:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "website-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

これらの各アプリケーションと通信するには、次のように _db リソースを使用するだけです:

```
var dbDefault = _db.init()

var dbWebsiteWP = _db.init("website-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

各変数には、アプリケーションの設定で定義された接続を識別するキーに対応するデータベースに関連付けられた *_db* リソースのインスタンスが含まれます。

このように、これらの変数を使用して、クエリ、挿入、更新、削除などのデータベース操作を実行できます。

データベース操作の詳細については、リソースのドキュメントを参照してください: [_db](/docs/library/resources/db)