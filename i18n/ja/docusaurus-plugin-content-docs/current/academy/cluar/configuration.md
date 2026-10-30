---
sidebar_position: 3
id: configuration
title: 設定
sidebar_label: 設定
---

> 以下のプロセスは Linux 開発環境向けです。

## 1. アプリ名

プロジェクトのフォルダ（アプリ名）を、小文字、数字、アンダースコアのみを使って名前変更します。

## 2. 設定ファイル

アプリのルートからサンプル設定ファイルをコピーします：

```
cp config/sample.json config/_development.json
```

本番環境の場合は、代わりに次を使用します：

```
cp config/sample.json config/_production.json
```

次に、JSON のルートにある `name` プロパティを、手順 1 で選択したアプリ名に変更します。

> `config/_development.js` と `config/_production.js` はプロジェクトに既に存在し、動的／プログラム的な設定に使用されます — 通常はこれらを編集する必要はありません。編集するのは対応する `.json` ファイルです。

## 3. データベース

CLUAR は PostgreSQL データベースへの接続が必要です。[設定方法はこちら](https://doc.netuno.org/pt/docs/academy/server/database/psql/)。

`config/_development.json`（または `_production.json`）で `db.default` を見つけ、データベースの情報に置き換えます：

```json
"db": {"default": {
    "password": "Your-DB-SeCr3t-Her3",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. JWT シークレット

`auth.jwt.secret` に、認証の安全性を確保するために使用される **32 文字** のランダムなシークレットを設定します：

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "ThisSecretMustContains32Chars!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> シークレットは[ランダムコード生成ツール](https://www.random.org/passwords/)で生成することをおすすめします。

## 5. Altcha（reCAPTCHA の代替）

CLUAR は [Altcha](https://altcha.org/) をサポートしています — Google reCAPTCHA の代替で、外部サービスに依存せず、訪問者のデータも収集しない、プルーフ・オブ・ワーク（*proof-of-work*）ベースの仕組みです。ログインとユーザー登録で使用されます。

`.json` の異なる場所に 2 つのスイッチがあります：

```json
"auth": {
    "altcha": {
        "enabled": false,
        "admin": {
            "enabled": false
        }
    }
}
```

- `auth.altcha.enabled` — サーバー側（Netuno）で Altcha の検証を有効にします。これが `true` でない場合、ウェブサイトに Altcha が表示されても検証されません。
- `auth.altcha.admin.enabled` — **Netuno のバックオフィス**（ポート `9000`）のログインでも Altcha を有効にします。ウェブサイトのログインとは別です。

```json
"settings": {
    "cluar": {
        "website": {
            "auth": {
                "altcha": {
                    "enabled": false,
                    "admin": {
                        "enabled": false
                    }
                }
            }
        }
    }
}
```

- `settings.cluar.website.auth.altcha` — ウェブサイト側の同じオプションを反映します。サイトのログイン／登録フォームに Altcha ウィジェットを表示するかどうかを制御します。

> Altcha を機能させるには、**両方**で `enabled: true` を有効にします — サーバーは検証する必要があり、ウェブサイトはウィジェットを表示する必要があります。

## 6. CLUAR の設定

`settings.cluar` でウェブサイトの設定を調整します：

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "ウェブサイト名",
            "analytics": null,
            "mapbox": {
                "dark": false,
                "accessToken": null
            },
            "services": {
                "api": "http://localhost:9000/services/"
            },
            "auth": {"providers": {
                "discord": false,
                "facebook": false,
                "github": false,
                "google": false
            }}
        },
        "uglifyjs": false
    }
}
```

- `website.url` — ウェブサイトが実行される URL。
- `website.name` — ウェブサイト名。
- `website.services.api` — ウェブサイトが利用する Netuno のサービス API の URL。
- `website.auth.providers` — ソーシャルログイン方法（Discord、Facebook、GitHub、Google）を有効／無効にします。
- `uglifyjs` — ウェブサイトのコードを圧縮（minify）するかどうかを制御します。

## 7. ウェブサイトの自動起動（任意）

ウェブサイトは、`commands` リストを通じて Netuno サーバーと一緒に自動起動できます：

```json
"commands": [
    {
        "path": "website",
        "command": "bun run dev",
        "install": "bun install",
        "enabled": true
    }
]
```

`"path": "website"` のエントリで `enabled` を `true` に設定するだけです。これにより、`./netuno server app=cluar` を実行すると、別のターミナルで手動で起動しなくてもウェブサイトも一緒に起動します。

## 次のステップ

アプリの設定が完了したら、[実行](/docs/academy/cluar/execution)に進みます。