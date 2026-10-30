---
id: import
title: インポート
sidebar_label: インポート
---

## はじめに

開発を行う際には、複数のコードファイルを相互に連携させて、機能を整理し、再利用して重複を避け、便利な関数を一元化して保守を容易にする必要があります。これにより全体のコード行数が減り、結果としてバグも大幅に減少します。

そこで、便利なコードを別のコードファイルに一元化し、他のファイルからインポートして簡単に再利用できるようにします。

ここでは、Netuno がコードの再利用を実現するために提供するいくつかのソリューションを紹介します。

## ポリグロットコア

Netuno がサポートする任意のプログラミング言語で、アプリケーションの `server/core` フォルダにある任意のコードファイルをインポートできます。

Netuno が提供する簡易な方法は、コードのインポート用の特別なコメント形式を使用することです。コメント行の先頭に `_core:` を付け、その後にアプリケーションの `server/core` フォルダからのコードファイルのパスを記述します。

たとえば、次のコードファイルをインポートするには：

- `server/core/例/ファイル`

> ファイルには、使用するプログラミング言語に応じた拡張子が必要です。

任意のコードファイルの先頭で別のファイルをインポートできます。たとえば、サービス内などです。

JavaScript、Groovy、Kotlin の場合：

```javascript
// _core: exemplo/arquivo

...
```

Python および Ruby の場合：

```python
# _core: 例/ファイル

...
```

> この特別なインポートコメントではファイル拡張子を記述する必要はありません。Netuno が自動的に検出します。

インポートされたファイルで宣言された変数、定数、関数、クラスなどは、先頭にこの種類のコメントを記述してインポートするファイルで利用できます。

複数のファイルをインポートするには、他のファイルのパスを指定したインポートコメントを繰り返します。

JavaScript、Groovy、Kotlin で複数のファイルをインポートする場合：

```javascript
// _core: exemplo/arquivo1
// _core: exemplo/arquivo2
// _core: exemplo/arquivo3

...
```

Python および Ruby で複数のファイルをインポートする場合：

```python
# _core: 例/ファイル1
# _core: 例/ファイル2
# _core: 例/ファイル3

...
```

## Exec リソース

`_exec` リソースを使用すると、実行中いつでもコードをインポートできます。

> インポートされたコードファイルで宣言された変数、定数、関数、クラスなどを利用できます。

### core

コードファイルのインポートをプログラムから実行するには、この場合は `📁 server/core` フォルダ内で：

```javascript
_exec.core('パス/ファイル')
```

> ファイル拡張子を記述する必要はありません。Netuno が自動的に検出します。

### services

コードファイルのインポートをプログラムから実行するには、この場合は `📁 server/services` フォルダ内で：

```javascript
_exec.service('パス/ファイル')
```

> ファイル拡張子を記述する必要はありません。Netuno が自動的に検出します。

## JavaScript

Netuno は JavaScript での開発に基盤を提供しており、最もよく使用される言語です。特に JavaScript ではフロントエンドとバックエンドの両方をプログラミングできるため、同じプログラミング言語でフルスタック開発を行えます。

Netuno はコードを解析し、`import` (ECMAScript Modules) または `require` (CommonJS) のどちらが使用されているかを自動的に検出します。

> `import` と `require` のパターンを混在させないでください。どちらか一方を使用する必要があります。

これにより、コードファイルでは常に `.js` 拡張子を使用できます。`import` を含む命令を使用すると、Netuno は ECMAScript Modules として処理するため、`export default` を使用できます。

> `import` はモダンな標準であるため、可能な限り使用することをお勧めします。

### コードをインポート

ネイティブインポートを使用する場合、前述の例とは異なり、CommonJS (`require`) または ECMAScript Modules (`import`) の標準に基づいて明示的にエクスポートされたものだけがインポートされます。

`📁 server` フォルダには `package.json` ファイルがあり、次の記述が必要です：

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

これにより、任意のコードファイルから別のコードファイルをインポートできます。たとえば：

```js title="server/services/プロフィール/取得.js"
import プロフィール from "#core/lib/プロフィール.js";

const dbプロフィール = プロフィール.ログイン取得();
```

`import` を使用するため、インポートされるファイルでは `export default` を使用します：

```js title="server/core/lib/プロフィール.js"
import {_db, _user} from "@netuno/server-types";

export default {
  ログイン取得: () => {
    return _db.form("プロフィール")
      .where(_db.where("プロフィール_ユーザー_id").equal(_user.id))
      .first();
  }
};
```

> 同じアプリケーションまたはプロジェクト内で、異なるファイルや異なる状況であっても `import` (ECMAScript Modules) と `require` (CommonJS) を混在させることはお勧めしません。常に均一な標準を採用する方が望ましいです。
> `import` はモダンな方法であるため、使用をお勧めします。

代わりに、`import` (ECMAScript Modules) ではなく `require` (CommonJS) を使用する場合：

```js title="server/services/プロフィール/取得.js"
const プロフィール = require("#core/lib/プロフィール.js");

const dbプロフィール = プロフィール.ログイン取得();
```

`require` を使用するため、インポートされるファイルでは `module.exports` を使用します：

```js title="server/core/lib/プロフィール.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  ログイン取得: () => {
    return _db.form("プロフィール")
      .where(_db.where("プロフィール_ユーザー_id").equal(_user.id))
      .first();
  }
};
```

### コードの自動補完と検証

エディタに統合されたコード検証付きの自動補完機能を利用するには、アプリケーションの `📁 server` フォルダで [サーバー型定義](https://www.npmjs.com/package/@netuno/server-types) をインストールする必要があります。

> サーバー型定義 (`@netuno/server-types`) は、ポリグロットローコードプログラミングのすべてのリソースを TypeScript で定義したもので、エディタが Netuno のポリグロットローコードフレームワークが提供するすべての機能を検出できるようにします。ただし TypeScript であるため、JavaScript コードの補助としてのみ機能します。

`📁 server` フォルダ内で [サーバー型定義](https://www.npmjs.com/package/@netuno/server-types) をインストールします：

```bash
bun add @netuno/server-types
```

これにより、一般的なコードで Netuno フレームワークが提供する利用可能なポリグロットローコードリソースをインポートできます。たとえば、次のサービスコードです：

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const 名前 = _req.getString("名前");

_db.form("製品")
  .set("名前", 名前)
  .insert();

_out.json(
  _val.map()
    .set("名前", 名前)
    .set("結果", true)
);
```

エディタがコードを検証および自動補完することに注目してください。これは非常に便利で、開発を大幅に効率化します。

> 一部のエディタでは、`📁 server` フォルダをコードのルートとして検出するために設定/有効化が必要な場合があります。たとえば、Visual Studio Code では自動的に検出されますが、WebStorm では `server` フォルダを右クリックし、`Mark Directory As > Resource Root` をクリックしてプロジェクトを再度開く必要があります。

## JS & NPM - 外部依存関係

アプリケーション内の `📁 server` フォルダで、`package.json` がある場所に **NPM** の外部依存関係をインストールできます。

ただし、前述の推奨とは異なり、外部ライブラリをインポートするには `require` を使用します。この場合、プロジェクト内部ファイルの `import` と混在させることができます。あまり美しくはありませんが、可能です。

依存関係を追加するには、`bun add` コマンドでインストールするだけです。

たとえば、`momentjs` をインストールできます：

- `bun add moment`

依存関係をインポートするには `require` を使用します。例は次のとおりです：

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

`dayjs` を使用した別の例です。まずインストールします：

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

`date-fns` を使用した完全な例です。まずインストールします：

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import プロフィール from "#core/lib/プロフィール.js";

const dbプロフィール = プロフィール.ログイン取得();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> 外部ライブラリへの依存は例外的な状況です。通常、必要なものは Netuno のポリグロットローコードフレームワークにすべて揃っています。

### NodeJS のネイティブモジュール

GraalVM は NodeJS のネイティブモジュールと完全には互換性がないため、回避策として、これらのモジュールの代替ソリューションを実装する外部依存関係を使用して互換性を高めることができます。

ネイティブモジュールであるかのように互換性を提供する代替の外部依存関係をいくつかインストールできます。

NodeJS のネイティブモジュールを置き換える代替として使用されるモジュールと、それぞれのインストールコマンドの一覧は次のとおりです：

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

これらのモジュールはアプリケーション内の `📁 server` フォルダにインストールする必要があります。これらの代替モジュールを使用することで、NodeJS のネイティブモジュールとの互換性が提供されます。

## まとめ

コードはさまざまな方法で整理できますが、コードを再利用し、繰り返しを避けることは常に非常に重要です。

コードの行数が増えるほど、バグが発生する可能性が高くなります。

コードを適切に整理し、再利用を一元化することを忘れないでください。保守が容易になり、バグを防ぎ、全体的な生産性が向上します。

外部依存関係の使用にはまだいくつかの制限がありますが、エコシステムの改善に取り組んでいます。

その間、Netuno はほとんどのニーズを満たす多様なローコードおよびポリグロットのリソースを提供しています。