---
id: sending-emails
title: メール送信
sidebar_label: メール送信
---
## 始める前に

作業を進める前に、_**JavaScript**_ の基本を理解しており、[アカデミー](/docs/academy/overview) で利用可能なステップバイステップの手順を通じて Netuno の基本をすでに把握していることを確認してください。

## メール送信のデモ

Netuno を使えば、添付ファイルや本文に埋め込んだ画像（署名などに便利）を含むメールをとても簡単に送信できます。

Netuno に付属する **demo** アプリケーション（デモアプリケーション）には、さまざまな言語での実装例が多数含まれており、次の場所にある `mail-send` サービスを使ったメール送信の例も含まれています：

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## 設定
最初のステップは、Netuno がメール送信に使用する SMTP アカウントを設定することです。

設定するには、開発中のアプリケーション内で環境設定ファイルまで移動します。この例では、次の場所にある開発環境ファイルを使用します：

* `config/_development.json`

SMTP の設定がまだ存在しないことを確認し、まだない場合は設定ファイル（JSON 形式）の末尾に SMTP 設定パラメータを追加します：

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Gmail 用に設定する場合は、アスタリスクのみをご自身の認証情報に置き換え、Gmail アカウントの設定で SMTP 接続を有効にしてください。それ以外の場合は、すべてのパラメータを SMTP アカウントのものに置き換えてください。

変更を保存した後、Netuno を再起動するだけで設定変更が反映されます。`default` という名前が示すとおり、これがメール送信のデフォルト設定です。

```json
...
    "default": {
        ...
    }
...
```

SMTP アカウントは複数追加できますが、デフォルトとして定義できるのは 1 つだけです。

SMTP アカウントをさらに追加するには、デフォルト SMTP 設定ブロックを繰り返し、`default` という名前を任意の別名に変更するだけです。たとえば：

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

上記の例と同様の設定により、コード内で次のように呼び出したときに `default` アカウントを使用できます：

```javascript
const smtp = _smtp.init()
```

また、`test` 設定を使用するには、次のように設定名を `_smtp.init()` 関数のパラメータとして追加するだけです：

```javascript
const smtp = _smtp.init("test")
```

> 設定名をパラメータとして追加しない場合は、常にデフォルトアカウントが使用されます。

## コードの詳細
次に、Netuno が提供するサンプルコードを注意深く見ていきましょう。ここでは JavaScript で、次のように構成されています：

SMTP の初期化：

```javascript
const smtp = _smtp.init()
```

> 別の設定で初期化することもできます。例：`_smtp.init("test")`

smtp 変数に `.to` を追加すると、メールの宛先アドレスを定義します。複数の宛先の場合は「;」または「,」で区切るだけです：

```javascript
smtp.to = '*****@gmail.com'
```

`.from` を追加すると、メールの送信者アドレスを定義します：

```javascript
smtp.from = '*****@gmail.com'
```

`.cc` を追加すると、メールの CC 宛先アドレスを定義します。複数の CC 宛先の場合は「;」または「,」で区切るだけです：

```javascript
smtp.cc = '*****@gmail.com'
```

`.bcc` も同様で、BCC 宛先（非表示のコピー）を定義します：

```javascript
smtp.bcc = '*****@gmail.com'
```

`.subject` を追加すると、メールの件名を定義します：

```javascript
smtp.subject = 'Netunoのテスト'
```

`.text` を追加すると、プレーンテキストの本文を定義します：

```javascript
smtp.text = 'このメールを受け取りましたか？'
```

`.html` を追加すると、HTML 形式のメール本文を定義します：

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
このメールを受け取りましたか？</p>
</div>`
```

画像を添付ファイルとして追加するには（上記の例のように）次のように追加します。HTML では画像（`img`）の `src` 属性に、接頭辞として `cid:`（**C**ontent **ID**）を指定し、その直後に `attachment` 関数で添付ファイルを追加するときに定義する `cid` を指定します（下記の例のように）。

メールに添付する画像を追加するには、次のように smtp 変数に `.attachment` を追加します：

```javascript
smtp.attachment(
    "logo.png", // ファイル
    "image/png", // ファイル形式
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // ファイルの場所
    "logo" // "cid:logo" で定義された変数名
)   
```

> `cid`（**C**ontent **ID**）は、添付されている画像をメールの HTML 本文に埋め込む場合にのみ必要であることに注意してください。

HTML に埋め込まない添付ファイル（文書など）を追加する場合は、次のようにします：

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

最後に、メール送信を実行するには次のコードを追加するだけです：

```javascript
smtp.send()
```

最後に、すべてが正しく設定されていれば、次のようなメールを受信します：

![メール送信1.png](/docs/assets/envio-emails1.png)

> お使いのメールクライアントによっては、上記の画像と表示が異なる場合があることに注意してください。

## テンプレートを使った完全な例

上記の例のように、コードの途中に HTML コンテンツを記述するのはあまり美しくありません：

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
このメールを受け取りましたか？</p>
</div>`
```

これを避け、コードをよりクリーンで美しく保つには、HTML コンテンツを次のようにテンプレートとしてインポートします：

`smtp.html = _template.getOutput('email/contact', data)`

この例では、アプリケーション設定の SMTP 設定は次のようになります：

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MY.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "ウェブサイトからのお問い合わせ - ",
            "from": "noreply@MY.DOMAIN.com",
            "to": "info@MY.DOMAIN.com",
            "username": "noreply@MY.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
...
```

以下は、`server/services/contact.js` ファイルに置ける完全なサービスコードの例で、どのように使用できるかを示しています：

```
const name = _req.getString("name")
const email = _req.getString("email")
const subject = _req.getString("subject")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = subject

smtp.text = "HTML コンテンツ。"

const data = _val.map()
      .set("name", name)
      .set("email", email)
      .set("subject", subject)
      .set("message", message)

smtp.html = _template.getOutput('email/contact', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("result", true)
)
```

> テンプレートの相対パスには `.html` 拡張子を付ける必要はありません。また、オプションでテンプレートに情報を渡すこともできます。

テンプレートの HTML コンテンツは、`server/templates/` フォルダ内に置く別ファイルで定義する必要があります。このパスはアプリケーションのルートフォルダを基準に解決されます。 

上記の例に従うと、サンプルテンプレートファイルは次の場所に置かれます：

- `server/templates/email/contact.html`

このファイルの内容例は次のとおりです：

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      ウェブサイトからのお問い合わせ
    </h1>
    <p>名前: _{&data=name}</p>
    <p>メール: _{data=email}</p>
    <p>件名: _{&data=subject}</p>
    <p>_{&data=message}</p>
  </div>
</div>

```

テンプレートに `_{data=...}` でデータを注入するとき、HTML の特殊文字をエンコードする必要がある場合は `&` が追加され、`_{&data=...}` になります。`=` の後ろの `...` の部分には、注入する内容のキーを指定します。

## 詳細設定

環境設定 `config/_*.json` では、さらに多くの詳細設定を利用できます。

コード内で使用される `smtp` のプロパティ（`.from`、`.to`、`.cc`、`.bcc`、`.subject`、`.text`、`.html`）は、設定内で次のように事前定義できます：

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "デフォルトの件名...",
        "text": "デフォルトの内容... 問題ありません！",
        "html": "<p>デフォルトの内容... <b>問題ありません！</b></p>"
        ...
    }
...
```

> `.from` を事前に定義しておくと非常に便利です。通常、メール送信は常に同じアドレスから行われるためです。

その他の設定も可能です。以下に完全な一覧を示します：

| パラメータ    | 型   | デフォルト      | 説明    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | メール送信を有効または無効にします。 |
| `debug` | boolean | false | デバッグモードを有効にします。サーバーとの通信の詳細を示すメッセージが表示されます。 |
| `protocol` | string |  | プロトコルの種類（smtp または smtps）を定義します。 |
| `host` | string |  | SMTP サーバーの名前または IP。 |
| `port` | integer | 465 | SMTP サーバーのポート番号。 |
| `ssl` | boolean | true | SSL を有効にします。 |
| `tls` | boolean | false | TLS を有効にします。 |
| `socketFactoryFallback` | boolean | true | Socket の生成に失敗した場合、ネイティブの java.net.Socket が使用されます。 |
| `socketFactoryClass` | string |  | SMTP 用の Socket を生成するために使用される、javax.net.SocketFactory インターフェースを実装したクラスを定義します。 |
| `socketFactoryPort` | integer |  | Socket が使用するポートを定義します。 |
| `quitWait` | boolean | false | 有効にすると QUIT コマンド後にサーバーの応答を待ちます。無効にすると QUIT コマンド後すぐにサーバーとの接続を切断します。 |
| `authMechanisms` | string |  | 認証メカニズムの一覧。デフォルトは「LOGIN PLAIN DIGEST-MD5 NTLM」で、すべてのメカニズムをサポートします。 |
| `authNTLMDomain` | string |  | NTLM 認証のドメイン。 |
| `username` | string |  | サーバー認証時のユーザーを定義します。 |
| `html` | string |  | メールの HTML コンテンツ。 |
| `password` | string |  | サーバー認証時のパスワードを定義します。 |
| `from` | string |  | 送信者のメールアドレス。 |
| `to` | string |  | 受信者のメールアドレス。「;」または「,」で区切って複数のメールを追加できます。 |
| `cc` | strinf |  | コピーを受け取る受信者のメールアドレス。「;」または「,」で区切って複数のメールを追加できます。 |
| `bcc` | string |  | 非表示のコピーを受け取る受信者のメールアドレス。「;」または「,」で区切って複数のメールを追加できます。 |
| `subjectPrefix` |  | string | メール件名にプレフィックスを定義します。これにより、送信されるすべてのメールにプレフィックスが付きます。 |
| `subject` | string |  | メールの件名。 |
| `text` | string |  | メールのプレーンテキスト本文。 |

ご不明な点がある場合は、ページ末尾に記載されている方法でお気軽にお問い合わせください。

良い開発を！