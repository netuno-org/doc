---
id: server
title: サーバー
sidebar_label: サーバー
---

バックエンドとAPIの開発。

## サーバーフォルダー

`📂 server` フォルダーには、アプリケーションのバックエンドを構成するファイルとフォルダーの集合が含まれています。

`📂 server` フォルダー内のすべては、統合、API、データベース、セキュリティと認証、Cronジョブなど、バックエンドサーバーの処理で使用されます。

## フォルダー構造

`📂 server` フォルダーには次の構造があります:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## アクション

`📂 actions` では、バックオフィス向けに自動生成されるフォームのCRUD操作に、必要に応じたカスタムアクション（_フック_）を追加できます。データ構造に応じて、ここでデータへのさまざまな介入が可能です。

たとえば、顧客を削除するときはその顧客のすべての注文を削除する必要があり、新しい商品を作成するときは別のシステムと統合する必要があります。つまり、データに直接関係する開発はここで行えます。

アクションはデータベースの `トリガー` に着想を得ていますが、コード実行レベルで機能します。

したがって、データの作成、変更、削除時に特定の操作をプログラミングできます。

## コンポーネント

`📂 components` は、バックオフィスのフォームでカスタムフィールドタイプを定義するために使用され、データ操作自体を実行できます。

スクリプトを通じてコンポーネントを作成し、アプリケーションに特定の新しいフィールドタイプを提供できます。

## コア

`📂 core` フォルダーでは、HTTPリクエストの処理フローにコードを注入できます。

また、さまざまなサービス間などでコードを共有するためにも使用されます。

`_config.js` は、各HTTPリクエストで設定が読み込まれた後に実行され、アプリケーションの `📂 config` フォルダーにある環境設定スクリプトの後に実行されます。

`_init.js` は、アプリケーションが初めて初期化されるときに何らかの命令を注入するために使用されます。

### HTTPリクエストの処理

アプリケーションの任意のURLへのHTTPリクエストの処理フローでは、それぞれのスクリプトが実行されます:

- `_request_start.js` は、HTTPリクエストがNetunoサーバーに到達したときに実行されます。
- `_request_url.js` は、URLがNetunoによって処理されるときに実行され、URLを別の宛先に変更できます。
- `_request_close.js` は、HTTPリクエストへの応答が閉じられるときに実行されます。
- `_request_end.js` は、HTTPリクエストが完全に完了したときに実行されます。
- `_request_error.js` は、HTTPリクエストの処理でエラーが発生したときに実行されます。

### APIサービスの処理

アプリケーションの任意のAPIサービスの処理フローでは、次のスクリプトが実行されます:

- `_service_config.js` は、サービスの実行を開始する前に実行され、サービスの実行設定などを定義するために使用されます。サービスを実行できるかどうかを定義でき、つまりAPIサービスへのアクセスにおけるセキュリティ制御です。
- `_service_start.js` は、何らかのサービスの処理が開始されるとすぐに実行されます。
- `_service_end.js` は、何らかのサービスの処理が終了した後に実行されます。
- `_service_error.js` は、何らかのサービスの処理でエラーが発生したときに実行されます。

## サービス - API

アプリケーションのAPIを構成するサービスは、`📂 services` フォルダーで作成されます。

サービスは、JavaScript、Python、Java、Kotlin、Ruby、Groovyなど、さまざまな言語で記述できます。

Netunoはポリグロットであるため、任意のスクリプトファイルをサポートされている別のプログラミング言語に変更でき、言語に応じたファイル拡張子があれば十分です。

使用するプログラミング言語に応じた追加設定は不要で、プログラミング言語に対応する正しい拡張子でサービスファイルを作成するだけです。

## セットアップ

`📂 setup` フォルダーには、Netunoエンジンによって自動生成され、データベーススキーマを定義するコードが置かれます。また、アプリケーションの動作に不可欠なデータの読み込みを配置する場所でもあります。

`_start.js` スクリプトは、データベース構築処理を開始する前に実行されます。

`_end.js` スクリプトは、データベース構築処理が終了した後に実行されます。

データ構造の構築に応じて、Netunoはここ `📂 setup` フォルダーに、データ構造全体を新しいデータベースで再作成するために必要なコード、またはアプリケーションが実行される可能性のある別のデータベースで不足しているものを再作成するために必要なコードを自動的に作成します。

 ## テンプレート

`📂 templates` フォルダーには、Netunoサーバーによって生成されるアプリケーションのバックオフィスページのHTMLコンテンツが含まれています。

`📂 dev` フォルダーには、開発者向け構築モードでワークスペースを変更できる `dashboard.html` ファイルが含まれています。

テンプレートのルートにある `dashboard.html` には、バックオフィスの一般的なワークスペースのHTMLが含まれています。

### ネイティブテンプレート

`📂 _` フォルダーでは、任意の汎用テンプレートを置き換えられます。つまり、Netunoの標準テンプレートを変更できます。

- [Netunoのネイティブテンプレートはこちらにあります。](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

フォルダー名やファイル名がこのフォルダー内のネイティブテンプレートの名前と一致する場合、ネイティブテンプレートの代わりにこのフォルダーにあるテンプレートが使用されます。

つまり、置き換えるには、ネイティブテンプレートと同じ構造を `📂 _` フォルダー内に複製するだけです。

### スクリプト

スクリプトテンプレートは、次の目的でページの末尾にJavaScriptコードファイルを挿入します:

1. `scripts.html` **バックオフィス**ページの末尾にJavaScriptコードを追加します。
2. `scripts_dev.html` **開発者向け構築エリア**ページの末尾にJavaScriptコードを追加します。
3. `scripts_login.html` **ログイン**ページの末尾にJavaScriptコードを追加します。

### スタイル

スタイルテンプレートは、次の目的でページの先頭にスタイルファイルを挿入します:

1. `styles.html` **バックオフィス**ページの先頭にCSSコードを追加します。
2. `styles_dev.html` **開発者向け構築エリア**ページの先頭にCSSコードを追加します。
3. `styles_login.html` **ログイン**ページの先頭にCSSコードを追加します。