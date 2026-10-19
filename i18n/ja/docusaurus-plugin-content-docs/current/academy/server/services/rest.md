---
id: rest
title: REST - Webサービス
sidebar_label: REST - Webサービス
---

## はじめに

REST リクエストとは、サーバーで処理されたデータの情報を返すオンラインアドレスです。サーバー側には、データベースと連携し、安全性と信頼性が求められるデータのビジネスロジックが含まれています。

> 詳細は <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a> をご覧ください

REST API の構築は Netuno のサービスに基づいて行われます。

## ALL

Netuno で任意の HTTP メソッドに応答するサービスを作成するには：

- `📂 server/services/watashi-no-sabisu.js`

ブラウザでは、このサービスは次のアドレスで全種類のリクエストに対して実行されます：

- http://localhost:9000/services/watashi-no-sabisu

## GET

GET タイプのアドレスは、通常、一覧表示やデータ取得の操作に使用されます。

Netuno で GET メソッドのみに応答するサービスを作成するには、次のいずれかの形式を使用します：

- `📂 server/services/ichiran/get.js`
- `📂 server/services/ichiran.get.js`

ブラウザでは、このサービスは次のアドレスで GET リクエストのみに対して実行されます：

- GET http://localhost:9000/services/ichiran

## POST

POST タイプのアドレスは、通常、新しいデータを作成または生成する操作に使用されます。

Netuno で POST メソッドのみに応答するサービスを作成するには、次のいずれかの形式でコードファイルを作成します：

- `📂 server/services/sakusei/post.js`
- `📂 server/services/sakusei.post.js`

このサービスは、次のアドレスで POST リクエストのみに対して実行されます：

- POST http://localhost:9000/services/sakusei

## PUT

PUT タイプのアドレスは、通常、データレコードを変更する操作に使用されます。

Netuno で PUT メソッドのみに応答するサービスを作成するには、次のいずれかの形式でコードファイルを作成します：

- `📂 server/services/koshin/put.js`
- `📂 server/services/koshin.put.js`

このサービスは、次のアドレスで PUT リクエストのみに対して実行されます：

- PUT http://localhost:9000/services/koshin

## DELETE

DELETE タイプのアドレスは、通常、データレコードを削除する操作に使用されます。

Netuno で DELETE メソッドのみに応答するサービスを作成するには、次のいずれかの形式でコードファイルを作成します：

- `📂 server/services/sakujo/delete.js`
- `📂 server/services/sakujo.delete.js`

このサービスは、次のアドレスで DELETE リクエストのみに対して実行されます：

- DELETE http://localhost:9000/services/sakujo

## OPTIONS

フロントエンドとの統合では、CORS の検証プロセス中にブラウザが OPTIONS タイプの呼び出しを行います。

> 詳細は <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a> をご覧ください。

Netuno で OPTIONS メソッドのみに応答するサービスを作成するには、次のいずれかの形式でコードファイルを作成します：

- `📂 server/services/ichiran-suru/options.js`
- `📂 server/services/ichiran-suru.options.js`

外部のフロントエンド（Web サイトなど）と統合するすべてのサービスに実装する必要があります。

通常使用されるコード：

```javascript
_out.json(_val.map().set("result", true))
```

このサービスは、次のアドレスで OPTIONS リクエストに対して実行されます：

- OPTIONS http://localhost:9000/services/ichiran-suru

## クライアントとテストの実行

特定のメソッドタイプでサービスをテストするには、REST API をテストする専用プログラムを使用できます。例：

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

ターミナルで `curl` コマンドを使用すると、任意の種類のテストを実行できます。

コンソール/コマンドラインから GET を送信します：

```
curl http://localhost:9000/services/hozon
```

`-X` でメソッドタイプを指定できます：

```
curl -X POST -F 'namae=Tesuto' -F 'email=email@rei.com' http://localhost:9000/services/hozon
```

> `-F` パラメータは Content-Type: `multipart/form-data` で送信します

パラメータを送信する別の方法：

```
curl -X POST -d 'namae=Tesuto' -d 'email=email@rei.com' http://localhost:9000/services/hozon
```

次のように連結することもできます：

```
curl -X POST -d 'namae=Tesuto&email=email@rei.com' http://localhost:9000/services/hozon
```

> `-d` パラメータは Content-Type: `application/x-www-form-urlencoded` で送信します

### JSON

JSON 形式で送信するには、コンテンツタイプを指定する必要があります：

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"namae": "Tesuto", "email": "email@rei.com"}' \
    http://localhost:9000/services/hozon
```

> `-H` はヘッダー（_HEADER_）のパラメータ設定を定義します

### アップロード

ファイルをアップロードするには：

```
curl -X POST -F 'gazou=@/home/riyousha/fairu.jpg' http://localhost:9000/services/hozon
```

## Service Client - NPM

フロントエンドとの統合を簡単に行うために、NPM モジュールが提供されています：

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

インストールコマンド：`npm i -S @netuno/service-client`

次のようにサービスのアドレスを定義すると：

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

フロントエンドと統合されたサービスを実行できます。例：

```
  _service({
      url: "/services/watashi-no-sabisu",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("サービス応答", response.json);
          }
      },
      fail: (e) => {
          console.log("サービスエラー", e);
      }
  });
```

## まとめ

サービスを目的の HTTP メソッドタイプのみに制限できます。

フロントエンドと統合するには、最も低いレベルでは `fetch` を使用して行えます。

実装を迅速かつ標準化するために、NPM モジュール [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client) が提供されています。