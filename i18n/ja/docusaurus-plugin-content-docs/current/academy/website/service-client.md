---
sidebar_position: 4
id: service-client
title: HTTPサービスとREST API向けクライアント
sidebar_label: サービス向けクライアント
---

## はじめに

Netunoのテクノロジーエコシステムでは、npmでいくつかのモジュールが提供されています。たとえば:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> [Service ClientのGitリポジトリ](https://github.com/netuno-org/service-client)も参照してください。

このモジュールは、Netunoで開発されたサービス、つまりNetunoアプリケーション内の`server/services`フォルダにあるバックエンドで開発されたREST APIのエンドポイントとの統合を行うためのものです。

サービスの開発では、次のようなプログラムをよく使用します:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

これらはサービスへのHTTPリクエストをテストするために使用します。

フロントエンドのコードでこれらのサービスと統合するには、fetch、requests、AXIOSなど、さまざまなものを使用できます。

しかし、Netunoは独自のクライアントを提供しており、JavaScriptフロントエンドの開発でもNode.jsバックエンドでも動作します。

Netunoがサービス向けの独自のHTTPクライアント実装を提供する理由は、より実用的にしてコード実装を簡素化し、開発の俊敏性を高めるためです。

## インストール

サービス向けクライアントのインストールは、他のモジュールをインストールする場合と同じです。

`package.json`ファイルがある場所でインストールコマンドを実行します:

```bash
bun add @netuno/service-client
```

## インポート

モダンJavaScript開発でサービス向けクライアントをインポートするには:

```js
import _service from '@netuno/service-client';
```

クラシックJavaScript開発でサービス向けクライアントをインポートするには:

```js
const _service = require('@netuno/service-client');
```

コード内の内部名は`_service`であることに注意してください。

> Netunoはデフォルトで、エコシステム内のリソースやツールなど、内部的なものまたは特有のものであることを示す接頭辞として`_`を使用します。

したがって、標準に従うため常に`_service`という名前を使用する必要があります。

## 設定

設定はグローバルに行います。設定を一度だけ定義し、全体コードの開始位置で実行するのが適切です。

最小構成の設定は次のとおりです:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

つまり、サービスのアドレスのプレフィックスを定義します。これにより毎回完全なURLを指定する必要がなくなり、サービスの呼び出しではURLの残りの部分だけを指定できます。

### 完全な設定

すべてのサービス呼び出しに既定値を設定できます。個々のサービス呼び出しではこれらの値を上書きできます。

設定できるすべてのパラメータは次のとおりです:

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

URLのグローバルプレフィックスです。

#### url

プレフィックスに追加されるURL部分で、サービス固有のアドレスです。

#### method

HTTPリクエストで使用するHTTPメソッドです。デフォルトは`GET`です。

#### credentials

HTTP呼び出しにおける認証情報の動作を定義します:

- `omit` - 認証情報を送信も受信もしません。
- `same-origin` - 同一ドメインへのリクエストの場合にのみ認証情報を送信して含めます。
- `include` - ドメインが異なる場合でも常に認証情報を含めます。

デフォルト値は`include`です。これは標準的な開発で最も理にかなっているためです。バックエンドが同一ドメインにあるかどうかはアーキテクチャによって異なり、ローカル開発では本番環境と異なることがあるため、予期しない動作を避けるために`include`の使用を推奨します。

#### headers

`headers`ではHTTPヘッダーのキーと値を定義できます。

デフォルトでは、JSON形式でデータを送受信するように定義されています。

#### start

HTTPリクエストの開始時に実行される`callback`関数です。

#### success

HTTPリクエストがバックエンドサーバーで正常に実行されたときに実行される`callback`関数です。

レスポンスの内容は関数の最初の引数で取得できます。

#### fail

HTTPリクエストでエラーが発生したときに実行される`callback`関数です。

エラーの詳細は関数の最初の引数で取得できます。

#### end

HTTPリクエストが完了したときに実行される`callback`関数です。

成功またはエラーに関係なく常に実行されます。

## 使用方法

HTTPリクエストでサービスを実行するには、サービスの要件を設定するパラメータの値を定義します。

`data`キーではデータ自体、つまりバックエンドサービスに送信するすべてのデータパラメータを送信します。

基本的なリクエストの例を次に示します:

```js
import _service from '@netuno/service-client';

_service({
  url: "my-service",
  data: { id: 1, example: "こんにちはバックエンド。" },
  start: () => {
    console.log("リクエストを開始します。");
  },
  success: (response) => {
    if (response.text) {
      console.info("テキストで応答しました:", response.text);
    }
    if (response.json) {
      console.info("JSONで応答しました:", response.json);
    }
  },
  fail: (error) => {
    console.error("エラーで失敗しました:", error);
  },
  end: () => {
    console.log("リクエストが完了しました。");
  }
});
```

最終的なURLには、全体設定でグローバルに定義されたプレフィックスが考慮されます。

HTTPメソッドが定義されていないため、全体設定で定義された既定のメソッドで送信されます。既定では`GET`です。

### シンプル

`POST`タイプのリクエストを実行する簡単な例:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "product",
  data: { name: "麦わら帽子", quantity: 20 },
  success: ({json}) => {
    console.info("商品が正常に作成されました:", json);
  },
  fail: (error) => {
    console.error("商品の作成に失敗しました:", error);
  }
});
```

### フォーム

フォームを使用する場合、FormDataクラスにフォームの内容を読み込むことができます。例を次に示します:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("form"));
_service({
  method: "PUT",
  url: "customer",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("顧客が正常に更新されました。");
    } else {
      alert("無効なレスポンスです。");
    }
  },
  fail: (e) => {
    console.log("エラー", e);
  }
});
```

### アップロード

`FormData`クラスを使用してファイルをアップロードする簡単な例:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('file', document.getElementById("fileField").files[0]);
formData.append('otherField', '値...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('ファイルが正常にアップロードされました。');
  },
  fail: (e) => {
    console.log("レスポンスエラー", e);
  }
});
```

### ダウンロード

ページのコンテキストに統合して、サービスによって動的に生成されたファイルをダウンロードできます。

#### BLOB - バイナリラージオブジェクト

バイナリレスポンスをダウンロードするには、基本パラメータで`blob`を`true`に設定します。すると、レスポンスの`blob`で生成されたバイト列を取得できます。

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // レスポンスがバイナリであることを定義します。
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("無効なレスポンスです。");
    }
  },
  fail: (e) => {
    console.log("エラー", e);
  }
});
```

#### カスタムファイル

ファイル名と種類はフロントエンドでカスタマイズできます。この処理では依存関係[DownloadJS](https://www.npmjs.com/package/downloadjs)が非常に便利です。

依存関係[DownloadJS](https://www.npmjs.com/package/downloadjs)をインストールします:

```shell
bun add downloadjs
```

コードでは次のように使用できます:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/report/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "report.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("エラー", e);
  }
});

_service({
  url: "/services/report/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "report.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("エラー", e);
  }
});
```

### サービス用URL

サービスURLを生成する必要がある状況があります。たとえば、HTMLやCSSに組み込む必要があるリソースを提供するサービスがある場合です。

わかりやすい例はアバターです。ユーザーがアバター画像を設定し、それを表示するために次のように最終URLを生成できます:

```js
const avatarLink = _service.url(`/profile/avatar?uid=${user.uid}`)
```

生成されたURLは、HTMLやCSSのプロパティ（backgroundなど）に注入できます。

### React & Ant.Design

ReactとAnt.Designをよく使用するため、いくつか役立つヒントを紹介します。

一般的なインポート:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

処理状態を定義します:

```js
const [loading, setLoading] = useState(false);
```

フォームを保存するイベントの実装です。入力された値をJSON形式のオブジェクトとして送信します:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'エラー',
      description: 'データを保存できませんでした。'
    });
  };
  _service({
    url: '/services/customer',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: '成功',
          description: 'データが正常に保存されました。'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("サービス呼び出しに失敗しました。", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

Ant.Designのフォームコンポーネントでは、先に実装したイベントでデータを送信するアクションのプロパティを定義します。例:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### アップロード

Ant.DesignのフォームとFormDataを使用してファイルをアップロードする完全な例を次に示します:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("file", values.file.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "file/save",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: 'フォーム',
          description: 'データが正常に保存されました。'
        });
      },
      fail: (e) => {
        console.error("アップロードフォームに失敗しました", e);
        notification.error({
          title: 'フォーム',
          description: 'データを保存できませんでした。'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="タイトル" name="title"
        rules={[{ required: true, message: 'タイトルを入力してください。' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="ファイル" name="file"
        rules={[{ required: true, message: 'ファイルを選択してください。' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>アップロード</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          保存
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
```

## まとめ

Service Clientは、データやファイルを取得・送信するためのバックエンドとの統合を迅速化します。

これらの操作には他のネイティブメソッドや別の依存関係を使用することもできますが、Service Clientは統合を容易かつ迅速にするために開発されており、柔軟で非常に直感的です。

NetunoがエコシステムでService Clientを提供する主な目的は、開発が明確かつ迅速であることを保証することです。

Service Clientを使用して問題を見つけた場合は、プロジェクトの[Issues](https://github.com/netuno-org/service-client/issues)で報告してください。

⭐ プロジェクトのGitHubでスターを付けることを忘れないでください:

- [netuno-org/service-client](https://github.com/netuno-org/service-client)。