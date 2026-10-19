---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

サービスのスキーマ定義。

## はじめに

OpenAPI は、REST API が提供するサービスを標準化する仕様であり、サービスの定義内容、アドレス、入力、出力を理解するのに役立ちます。

テスト用インターフェースの生成や、他の技術と統合するためのクライアントの自動生成を可能にします。

> <a href="https://www.openapis.org/" target="_blank">OpenAPI</a> の詳細はこちら。

## 有効化と設定

Netuno のアプリケーションで OpenAPI を有効化および設定するには、使用している環境に対応するアプリケーション設定ファイルを編集する必要があります。例:

- `📂 config/_development.json`
- `📂 config/_production.json`

次のパラメータを挿入して調整します:

```
...
    "openapi": {
        "host": "http://my-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://my-app.local.netu.no:9000/services",
                "description": "ローカル開発"
            }
        ]
    },
...
```

設定が妥当であることを確認してください。上記の例は _development_ 環境向けです。

> 本番環境では `https` を使用することをおすすめします。

### サービス内の _openapi.json

サービスのルートに `_openapi.json` ファイルを設定します。

アプリケーション内の完全なパスは次のとおりです:

- `📂 server/services/_openapi.json`

このファイルの内容は次の例のようになります:

```
{
  "info": {
    "title": "マイアプリケーション",
    "description": "マイアプリケーションのREST APIです。ご利用はほどほどに。",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

タイトルと説明は、ご自身のケースに合わせて調整してください。

## 入力

入力の _schema_ ファイルを設定すると、Netuno は受信したパラメータを JSON Schema のルールと比較して検証できます。

> <a href="https://json-schema.org/" target="blank">JSON Schema</a> の詳細はこちら。

検証に失敗した場合、サービスの実行は阻止され、Netuno の `log` にエラーが表示されます。また、サービスを利用する側には HTTP ステータスコード **400**（_Bad Request_）が返されます。

入力パラメータのルールを設定するには、サービスのコードファイルと同じ場所に、同じ名前で拡張子 `in.json` のファイルを作成する必要があります。

- サービス `detail.js` には `detail.in.json` ファイルが必要です。
- サービス `detail.post.js` には `detail.post.in.json` ファイルが必要です。
- サービス `detail/post.js` には `detail/post.in.json` ファイルが必要です。

`in.json` の内容例:

```
{
    "tags":[
      "商品サービス"
    ],
    "summary": "商品詳細",
    "description": "指定された商品の詳細フィールドをすべて取得します。",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno は、JSON Schema ではサポートされていない追加の型（`string-not-empty`、`array-not-empty`、`id`、`uid`（または `uuid`、`guid`））をサポートしています。

> この仕様の詳細は <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a> をご覧ください。

## 出力

出力の _schema_ ファイルを設定すると、Netuno は送信されたパラメータを JSON Schema のルールと比較して検証できます。

> <a href="https://json-schema.org/" target="blank">JSON Schema</a> の詳細はこちら。

検証に失敗した場合でも出力はそのままサービス利用者に送信されますが、検証失敗のメッセージが Netuno の `log` に表示されます。

出力パラメータのルールを設定するには、サービスのコードファイルと同じ場所に、サービスと同じ名前で拡張子 `out.200.json` のファイルを作成する必要があります。

ここで **200** はレスポンスに含まれる HTTP ステータスコードです。複数の HTTP ステータスコードをサポートするには、異なる番号の JSON ファイルを追加するだけです。

例:
- サービス `save.js` には `save.out.200.json` ファイルが必要です。
- サービス `save.post.js` には `save.post.out.200.json` ファイルが必要です。
- サービス `save/post.js` には `save/post.out.200.json` ファイルが必要です。

`out.200.json` の内容例:

```
{
    "type": "object",
    "properties": {
      "result": {
        "type": "boolean"
      }
    },
    "required": [
      "result"
    ]
}
```

Netuno は、JSON Schema ではサポートされていない追加の型（`string-not-empty`、`array-not-empty`、`id`、`uid`（または `uuid`、`guid`））をサポートしています。

> この仕様の詳細は <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a> をご覧ください。

## スキーマのインポート

Netuno は _schemas_ のインポートをサポートしており、_schema_ の一部を複数の JSON で再利用できます。

> _schemas_ をインポートすると、コードの重複を避けられます。

サービスフォルダのルートに `_schema` フォルダを作成します:

- `📂 server/services/_schema`

これで JSON 設定では、JSON 内の `_schema` パラメータで _schemas_ をインポートできます。例:

```
{
    "summary": "商品を削除",
    "description": "商品を完全に削除できます。",
    "_schema": "get/only-code.in"
}
```

これは、`_schema` パラメータがある `_schema/get/only-code.in.json` ファイルがインポートされることを意味します。

## 仕様とテスト

OpenAPI と JSON Schema をサポートするすべてのサービスの完全な仕様を生成するには、たとえば次にアクセスします:

- http://localhost:9000/services/_openapi

すべての仕様を含む JSON が表示されます。

テストするには、生成された JSON 全体をコピーします。

Swagger Editor を開きます: https://editor.swagger.io/

左側にある内容を削除して JSON を貼り付け、JSON から YAML への変換に関する質問に「はい」と答えます。

右側に生成されたインターフェースで、利用可能なすべてのサービスをよりよく理解し、テストを実行できます。

また、他の技術向けのクライアントを自動生成することもできます。

## プログラムによる定義

`_schema` フォルダでは、OpenAPI 定義の生成時だけでなく、サービスの入力および出力の検証プロセスでも実行される `.js` ファイルを使用できます。

スキーマをプログラムすることで、たとえば次のような動的な検証を生成できます:
- データベースに存在するコードのみを受け入れる。
- `UID` を使ってデータベースのレコードを取得し、サービスと共有する。
- `POST` または `PUT` の場合は、`DELETE` の場合に生成されるものとは異なる種類のスキーマを生成する。

### 値リストの例

あるカテゴリのコードを受け取るサービスがあるとします。

コードとして任意の値を受け取ることはできません。なぜなら、有効なカテゴリコードに対応しない値である可能性があるからです。

そこで、受け入れるコードをデータベースに登録されているものだけに制限できます。

スキーマは `server/services/_schema/category/codes.js` に作成します:

```javascript
const dbCategories = _db.query("SELECT code FROM category")

const codeList = _val.list()

for (const dbCategory of dbCategories) {
    codeList.add(dbCategory.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        codeList
    )
```

> `codeList` には、データベースに登録されているすべてのカテゴリコードが含まれます。

サービスでは、スキーマ `category/codes` を使用する次の `JSON` を記述できます:

```json
{
  "summary": "カテゴリ内の商品一覧",
  "description": "指定されたカテゴリに関連付けられたすべての商品を取得します。",
  "type": "object",
  "properties": {
    "category": {
      "type": "object",
      "properties": {
        "code": {
          "_schema": "category/codes"
        }
      },
      "required": [
        "code"
      ]
    }
  },
  "required": [
    "category"
  ]
}
```

これにより、コードが有効な場合にのみサービスが実行されることを保証できます。

### グローバルオブジェクトの例

顧客の `UID` を受け取るサービスが複数あり、各サービスでデータベースにアクセスして、その `UID` に関連する顧客データを取得する必要があるとします。

これを、受信した顧客の `UID` を使ってデータベースから顧客データを取得し、サービスのコードからアクセスできるグローバルオブジェクトに格納するプログラム済みスキーマに集約できます。

これにより、顧客の `UID` を受け取ったときに、顧客データが常に自動的にグローバルへ読み込まれます。

プログラム済みスキーマを `server/services/_schema/customer.js` に作成します:

```javascript
const customer = _req.getValues('customer', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbCustomer = _db.get('customer', customer.getString("uid"))
    
    if (dbCustomer == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'customer-not-found')
        )
        _service.cancel()
    }
    
    _val.global().set('customer', dbCustomer)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> `_service.isGeneratingOpenAPIDefinition()` を使うと、OpenAPI 定義の生成中かどうかを検証できます。そうでない場合は HTTP リクエストの実行です。
> 
> 顧客の `UID` が見つからない場合は 404 を返し、サービスの実行を中断します。
> 
> ここでは `_val.global()` を使用しており、HTTP リクエストの処理中に実行されるすべてのコードファイル間でデータをグローバルに共有できます。

例の続きとして、顧客が行った購入を一覧表示するサービスがあります。

サービスの入力検証は `server/services/customer/purchases/post.in.json` にあります:

```json
{
    "summary": "購入一覧",
    "description": "顧客が行った購入を一覧表示します。",
    "type": "object",
    "properties": {
        "customer": {
            "_schema": "customer"
        }
    },
    "required": [
        "customer"
    ]
}
```

> 顧客の `"_schema"` の値は、先ほどスキーマでプログラムしたコードファイルの名前です。

そして、顧客の購入サービスのコードは `server/services/customer/purchases/post.js` にあります:

```javascript
const dbCustomer = _val.global().getValues('customer')
...
```

`_val.global()` を通じて、スキーマのコードによって自動的に読み込まれたデータベース内の顧客データを取得します。

### HTTPメソッドの例

HTTP メソッドの種類ごとに異なるスキーマを返せます。

たとえば、ネットワークポートの作成、編集、削除の操作に対してコードでスキーマを生成できます:

- `POST` の場合は作成操作を行うため、UID は含まず、名前とポート番号を要求します。
- `PUT` の場合は編集操作を行うため、UID、名前、ネットワークポート番号を要求する必要があります。
- `PUT` または `DELETE` の場合は、それぞれ編集および削除操作を行うために UID が必要です。

```javascript
const properties = _val.map()
const required = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    properties.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    required.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    properties
        .set(
            'name',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    required
        .add('name')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        properties
    )
    .set(
        'required',
        required
    )
```

## 動画

OpenAPI と統合された API を開発する方法の例を示す動画をいくつか紹介します:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube 動画プレーヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## まとめ

OpenAPI のサポートにより、JSON Schema を使用して検証ルールを作成でき、次の利点があります:

- サービスに注入されるデータの安全性をより高められます。
- サービスの出力が指定どおりでない場合に `log` で警告します。
- サービスを閲覧およびテストするためのインターフェースを簡単に生成できます。