---
id: db-query-execute
title: Query と Execute - データベースへの直接コマンド
sidebar_label: Query と Execute
---

## はじめに

このチュートリアルをできるだけ有効に理解するために、_**JavaScript、SQL**_ の基本知識があり、Netuno でサービスを作成できることを確認することをお勧めします。

サービスを作成する方法がわからない場合は、[REST Web サービス](/docs/academy/server/services/rest) を参照してください。

## クエリの作成

Netuno にはデータベースへのクエリ作成を目的とした関数が用意されています。このチュートリアルでは、各関数の効果を簡単に紹介および説明し、最良の結果を得るためのベストプラクティスも示します。

### _db.query('SELECT * FROM ...')

この関数はクエリのデータを返します。

```javascript
_out.json(
  _db.query('SELECT * FROM table_name')
)
```

> _out.json() 関数は、ブラウザでサービスを呼び出したときにサービスのデータを画面に表示するためのものです。

この関数は引数も受け付けます。引数はサービス呼び出しで直接渡されます。たとえば、_select-all.js_ というサービスがある場合、呼び出しは _**http://localhost:9000/services/select-all.netuno**_ に対して行われ、渡す引数は呼び出しの後に疑問符を付けて配置します:

```
http://localhost:9000/services/select-all.netuno?arg1=1&arg2=name
```

> 複数の引数を送信するには、アンパサンド (&) で区切るだけです。

### パラメータ付きクエリ

最後に、クエリ内でこの変数を次のように宣言するだけです:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM table_name WHERE id = ? AND name = ?', 
        _req.getInt("arg1"), _req.getString("arg2")
    )
)
```

> '?' (疑問符) の位置には、順序に応じて対応するパラメータが注入されます。

## パラメータ付きクエリと PostgreSQL および H2DataBase の型

ただし、H2Database と PostgreSQL は単純な変換構文をサポートしているため、次のようにパラメータに型を割り当てることができます:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM table_name WHERE id = ?::int AND name = ?::varchar', 
    _req.getInt("id"), _req.getString("name")
  )
)
```

## H2Database および PostgreSQL のパラメータ型

前述のとおり、引数付きのクエリを実行する場合は引数の型を定義する必要があります。以下に、すべての変数型とそれぞれに最適な型の一覧を示します:

* 整数パラメータに適しています:
    * **?::int**
* 小数パラメータに適しています:
    * **?::float**
 * グローバル/ユニバーサル一意識別子 (guid または uuid として知られる) パラメータに適しています:
    * **?::uuid**
 * 汎用テキスト (文字列) パラメータに適しています:
    * **?::varchar**
    * **?::text**
 * 日付型パラメータに適しています:
    * **?::date**
 * 時刻型パラメータに適しています:
    *  **?::time**
 * 日時パラメータに適しています:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

この関数は、update、insert、delete などのデータベースコマンドを実行します。

実行されたコマンドによって影響を受けたレコード数を返します。

```javascript
// Insert の例:
const nRecordsInserted = _db.execute(
    "INSERT INTO table_name(id, active, name) " + 
    "VALUES(nextval('table_name_id'), ?::int, ?::varchar)", 
    1, name
)

// Update の例:
const nRecordsUpdated = _db.execute(
    "UPDATE table_name SET name = ?::varchar WHERE id = ?::int",
    _req.getString("name"), _req.getInt("id")
)

// Delete の例:
const nRecordsDeleted = _db.execute(
    "DELETE FROM table_name WHERE id = ?::int",
    _req.getInt("id")
)
```

> **注意:** Insert を行うときは、active フィールドが 1 に等しいか確認してください。そうでない場合、結果に表示されません。

## データとの対話例

ここでは、可能な限り最良の結果を得るために推奨される規範を紹介します。

## 最初の行の取得 (Query First)

クエリの最初の行を取得する方法を以下に示します。取得した行がない場合は null になります。

```javascript
// データを選択:
const dbResult = _db.queryFirst(
    'SELECT name FROM table_name WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbResult) {
    // HTTP ステータスコード:
    _header.status(404)
    // エラー表示:
    _out.json(
        _val.map()
            .set('error', 'id-not-found')
    )
    // サービスの実行を終了:
    _exec.stop()
}
```

## レコード数の検証

結果が単一になるデータベース選択を行う場合、データにアクセスするには**次のように**進めることをお勧めします:

これは、少なくとも 1 件の結果が返されることを保証し、結果がない場合のエラーを回避するための簡単な例にすぎないことに注意してください。

```javascript
// データの選択:
var dbResults = _db.query(
  'SELECT name FROM table_name WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let name = null;
// データが存在することを保証します。また、
// 複数のレコードがある場合は大なり記号 (dbResults.length > 1)
// を使用できます:
if (dbResults.size() >= 1) {
  // name の値に直接アクセスするには:
  name = dbResults.get(0).getString('name');
}
```

## レコードのループ反復

選択結果が**複数の結果**である場合、次のように 'for' ループを使ってデータを操作できます:

```javascript
// クエリを実行
const dbResults = _db.query('SELECT id, name FROM table_name');

// 値を受け取れるように変数を初期化
const items = _val.init();

// 各値を個別に受け取るため、すべての結果を反復処理
for (const dbResult of dbResults) {
    items.push(
        _val.map()
            .set("uid", dbResult.getString("uid"))
            .set("name", dbResult.getString("name"))
    );
}

// 新しいデータリストを出力に送信:
_out.json(items);
```

ご不明な点がある場合は、お気軽にお問い合わせください。この Web サイトのフッターにある案内もご覧ください。

良い開発を！