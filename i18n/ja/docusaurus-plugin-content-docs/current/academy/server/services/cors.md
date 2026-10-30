---
id: cors
title: CORS
sidebar_label: CORS
---

アプリケーションにおける CORS の設定。

## はじめに

CORS（Cross Origin Resource Sharing）は、別のアドレスから共有されるリソースを統合できるかどうかをブラウザが検証するプロセスです。

次の場合に実装されます:

- webpack サーバーを使ったフロントエンド層の開発時。たとえば ReactJS や VueJS などのモダンな技術を用いた Web インターフェース（Web サイトまたは Web アプリケーション）の開発。
- フロントエンドのアドレスがサービスのアドレスと異なる場合。たとえば、サービスが `http://localhost:9000` で実行され、フロントエンドが `http://localhost:3000` で実行される場合。
- 本番環境で、たとえばサービスが独自のサブドメイン `api.example.com` で実行され、フロントエンドが `www.example.com` で実行される場合。

> CORS の詳細:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno は CORS の統合をシンプルかつ即座に行えるよう準備されています。

## 設定

CORS の設定は、環境に応じてアプリケーションの設定ファイルで行います。

そのためには、開発中のアプリケーション内で環境設定ファイルまで移動します。この例では、次の場所にある開発環境用ファイルを使用します:

- 📂 `config/_development.json`

CORS の設定がまだ存在しないことを確認し、存在しない場合は設定ファイル（JSON 形式）の末尾に設定パラメータを追加します:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> CORS の設定は配列であり、複数の異なる CORS ルールをサポートします。

### オリジン

`origins` パラメータには、サービスと統合されるフロントエンドのアドレスのリストを指定します。

### 本番環境

本番環境では、フロントエンドがオンラインで動作するアドレスをオリジンとして定義する必要があります。

`cors` の定義を含むアプリケーション設定ファイルは、環境に応じて異なる必要があります。

アプリケーション設定ファイルは次のとおりです:

- 📂 `config/_production.json`

CORS 設定の例:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://my-project.com", "https://www.my-project.com" ]
        }
    ]
    ...
}
```

アプリケーション設定ファイルは Netuno の環境設定に応じて `_production.json` となり、その環境設定は `netuno/config.js` ファイルにあります:

```javascript title="netuno/config.js"
config.env = 'production'
```

## ヘッダー（HTTP ヘッダー）

標準ヘッダー（HTTP プロトコルのヘッダー）は次のとおりです:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

標準ヘッダーをカスタマイズするには、`header` 設定パラメータを追加します。例:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

上記の例では、標準で定義されていた他のすべてのヘッダーではなく、`Authorization` のみをヘッダーで受け入れます。

標準定義を置き換えるなど、ヘッダーに新しい定義を追加できます。

## 手動設定

Netuno の自動メカニズムを使用する代わりに、CORS を手動で設定することもできます。

Netuno アプリケーションで次のファイルを変更するだけです:

- `📂 server/core/_request_url.js`

そして次のコードを使用します:

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.my-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

上記のコードでは、`if` がオリジンアドレス（`Origin`）に応じて 'Headers' を制限していることに注意してください。

使用するアドレスに合わせて調整することを忘れないでください。

> この方法では、アプリケーションのすべてのサービスとアドレスが CORS ヘッダーをサポートするようになります。

### 分離されたサービスのみ

特定のサービスに対してのみヘッダーを有効にしてセキュリティレベルを高めたい場合は、次のファイルで同じコードロジックを使用します:

- `📂 server/core/_service_config.js`

次のファイルの代わりに:

- `📂 server/core/_request_url.js`

## まとめ

CORS を設定すると、Netuno は `origins` として設定されたアドレスに対して、標準ヘッダー（HTTP プロトコルのヘッダー）を自動的に返します。

標準の `headers` はカスタマイズおよび変更できます。

複数の CORS ルールを設定できます。

Netuno は CORS ルールの手動設定もプログラムでサポートしていますが、アプリケーション設定に統合された自動メカニズムを使用する方が望ましいです。