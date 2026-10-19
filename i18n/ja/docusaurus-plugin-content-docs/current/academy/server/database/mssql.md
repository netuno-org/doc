---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Docker での MSSQL 設定

Docker がすでにインストールされていると仮定して、次のコマンドで Microsoft Container Registry からコンテナイメージをダウンロードするだけです:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

新しいコンテナを起動するには、次のコマンドを実行します:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

パラメータ *-e 'SA\_PASSWORD=Secret123'* の *Secret123* の部分が、ユーザー *sa* のパスワードになります。

パスワードは MSSQL の最小セキュリティ基準を満たすために少なくとも 8 文字含む必要があることに注意してください。そうでない場合、コンテナは初期化されません。

コンテナの初期化後、MSSQL が正しく動作していることを確認してください。そのためには、*NPM* を使用して *mssql* コマンドをインストールできます:

```
npm install mssql -g
```

これで、ターミナルから MSSQL に接続するコマンドを実行できます:

```
mssql -u sa -p Secret123
```

注意！パスワードを変更した場合は、*Secret123* をコンテナで設定した _sa_ のパスワードに置き換えてください。

## 新しいアプリケーションの作成

Netuno で Microsoft SQL Server に接続する新しいアプリケーションを作成するには、Netuno で新しいアプリケーションを作成する通常の手順に従い、データベースエンジンとして MSSQL を選択します。

次のチュートリアルの手順に従ってください:

MSSQL データベースエンジンを選択すると、MSSQL データベースへの接続に必要な情報の入力が求められます。

例:

![アプリ作成](/docs/assets/academy/server/database/mssql/app-create.jpg)

## アプリケーション設定の変更

アプリケーションが MSSQL で動作し、MSSQL をアプリケーションの主要データベースとして使用するようにするには、次の環境設定を変更します:

```
/web/app/あなたのアプリ/config/_development.json
/web/app/あなたのアプリ/config/_production.json
/web/app/あなたのアプリ/config/_あなたの環境.json
```

設定は次のように行います:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

主要データベースではなく代替データベースとして接続したい場合は、_"default"_ をこの接続に希望する名前に変更してください。

## インスタンス

MSSQLSRV の特定のインスタンスに接続する必要がある場合は、接続設定に `instance` の値を追加します。例:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "私のインスタンス名",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```