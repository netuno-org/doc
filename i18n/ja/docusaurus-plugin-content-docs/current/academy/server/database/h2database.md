---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## はじめに

H2Database の大きな利点は、データベースサーバーを必要とせず、アプリケーションに組み込んで動作できることです。

> H2Database は開発およびテスト目的にのみ推奨されます。本番環境では、より堅牢な別の種類のデータベースを使用する必要があります。

## 推奨事項と制限

H2Database では、データベースファイルにアクセスできるのは単一のプロセスだけです。

したがって、ファイルを操作したり Web コンソールからアクセスしたりする場合は、Netuno の実行を停止する必要があります。

## データベースファイル

H2Database のデータベースファイルは、アプリケーション内にある `dbs` フォルダーに保存されます。例:

- `apps/my_app/dbs`

データベース名を変更する場合は、ファイル名を変更し、アプリケーションの設定を修正します。たとえば _development_ 環境では:

- `config/_development.json`

修正はデータベース接続設定の部分で行います:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "my_db",
            "username": ""
        }
    }
    ...
```

## Web コンソール

データベースに直接アクセスする必要がある場合があります。その場合は H2Database の Web コンソールを使用できます。

Web コンソールは、H2Database の _jar_ を次のように直接実行すると起動します:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Netuno のルートディレクトリにいることを前提としています。

利用可能なオプションを表示するには:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Netuno のポート **9000** で Web コンソールを起動し、外部 IP からのアクセスを許可します:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> 複数のプロセスがデータベースファイルを操作しないように、事前に Netuno の実行を停止してください。

データベースに接続するための JDBC URL は次のとおりです:

`jdbc:h2:./apps/my_app/dbs/my_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> `my_app` の部分をアプリ名に、`my_db` を対応するデータベース名に置き換えてください。

認証ではユーザー `sa` を使用しますが、パスワードは設定されていません。


### アクセスをリセットする

特に `dev` ユーザーへのアクセスを失った場合に必要です。

上記の説明に従って H2Database の Web コンソールからアクセスします。

アクセスを再作成するには、たとえば `netuno_user` テーブルのデータを削除します:

- `delete from netuno_user`
 
これにより、Netuno が次回起動したときに、デフォルトのパスワードでユーザーが再作成されます。