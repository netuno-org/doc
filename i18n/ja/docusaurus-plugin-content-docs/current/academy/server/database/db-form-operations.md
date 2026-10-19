---
id: db-form-operations
title: Form とデータベースの基本操作
sidebar_label: DB Form
---

## 始める前に

進める前に、SQL や「一対多」「多対一」などのテーブル間のリレーションシップについての知識があることを確認してください。

また、DB Form を最大限に活用するには、Netuno の `Form` とその構成方法に関する事前知識が必要です。

## はじめに

ソフトウェア開発では、データベースから情報を取得する必要がよくありますが、純粋な SQL を使ってそれを行うと、大規模でストレスの多い作業になります。DB Form のクエリ機能は、SQL クエリの構築を直感的でストレスのない体験に変えます。これにより、生の SQL の複雑さを抽象化する親しみやすいメソッドを使い、思考の流れに沿ったクエリ開発のアプローチで強力なクエリを作成できます。

## 仕組み

DB Form の中核は、オブジェクトとメソッドを使って SQL コマンドを構造化する機能です。SQL コマンドを直接書く代わりに、DB Form ではオブジェクト指向の仕組みを使ってクエリと操作をプログラム的に定義できます。

各クエリまたはデータベース操作はオブジェクトとして表されます。

選択、フィルタリング、グループ化など SQL のさまざまな部分をカプセル化するクエリクラスのインスタンスを作成します。また、レコードの削除、挿入、更新の操作も実行します。

## 初期化

すべては DB Form の初期化から始まります。DB Form は、使用するベースフォームまたはメインフォームの名前を知っている必要があります。つまり、Netuno のフォームは常にデータベースのテーブルを表すため、ベーステーブルまたはメインテーブルを指定するのと同じことです。

この例では、フォーム/テーブル `people` から DB Form を初期化します:

```javascript
const dbFormPeople = _db.form("people")
```

DB Form を初期化すると、クエリや操作を実行できます。

## シンプルなクエリ

DB Form は、ページネーションや重複排除された結果に加えて、データ取得のためによく使われる 2 つのメソッドを提供します:

- `all` - すべてのレコードをリストとして返します。
- `first` - 最初のレコードのみを取得します。

いくつか例を示します。

すべての `people` レコードを取得するには:

```javascript
const dbPeoples = _db.form("people")
    .all()
```

1 件の `people` レコードだけを取得するには:

```javascript
const dbPeople = _db.form("people")
    .first()
```

## フィルタと条件

`where` を使うと、特定の条件を満たすデータをフィルタリングできます。

いくつか例を示します:

```js
const dbPeople = _db.form("people")
    .where(_db.where("people_user_id").equals(_user.id))
    .first()
```

```js
const dbPeoples = _db.form("people")
    .where(
        _db.where("type").in(_val.list().add("顧客").add("管理者"))
            .and("email").notEqual(null)
    ).all()
```

## Where の比較

`_db.where` は [Where](/docs/library/objects/Where) オブジェクトを提供し、次の比較演算をサポートします:

数値およびテキスト演算子による比較:

-  `equal(...)` または `equals(...)` - 等しいかどうかを確認します。`=` です。
-  `notEqual(...)` または `notEquals(...)` - 渡された値と異なる場合。`<>` です。
-  `greaterThan(...)` - 渡された値より大きい場合。`>` です。
-  `lessThan(...)` - 渡された値より小さい場合。`<` です。
-  `greaterOrEqualsThan(...)` - 渡された値以上の場合。`>=` です。
-  `lessOrEqualsThan(...)` - 渡された値以下の場合。`<=` です。

`LIKE` 演算子によるテキスト条件:

-  `startsWith('text')` - 指定されたプレフィックスで始まる場合。`LIKE '...%'` です。
-  `endsWith('text')` - 指定されたサフィックスで終わる場合。`LIKE '%...'` です。
-  `contains('text')` - 用語を含む場合。`LIKE '%...%'` です。

`IN` 演算子によるリスト条件:

-  `in(_val.list()...)` - リスト内のいずれかの値と等しい場合。`IN (...)` 条件です。
-  `notIn(_val.list()...)` - リスト内のどの値とも等しくない場合。`NOT IN (...)` 条件です。

## 実用的なクエリ例

`DB Form` は `_db.form('form')` リソースから利用できます。呼び出すと、そこで利用可能なメソッドとオブジェクトを使って設定できるベースクエリが得られます。

### 多対一と重複排除された結果

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('田')
        .and(
             _db.where('email').contains('taro')
             .or('email').endsWith('com')
         )
    )
    .link('job', _db.where('code').equal('マネージャー'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'people_user_id',  
            _db.where('mail').startsWith('taro')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('people')
            )
        )
    )
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("people.uid", "people_uid")
    .debug(true)
    .distinct(true)

const results = query.all();
```

上の例では、`people` テーブルに対して、さらに `job` と `netuno_user` の 2 つのテーブルを関連付けるクエリを実行しています。`job` は `link` メソッドで、`netuno_user` は `join` で関連付けられています。`link` は `join` よりはるかに簡潔であることがわかります。これは、`link` が Netuno の `Form` のリレーションシップを再利用して関係をマッピングするのに対し、`join` はメソッドで提供された情報のみを使用するためです。また、使用されている他のメソッドとオブジェクトも確認できます:

- `where` : テーブルの条件を構築するために提供されるオブジェクト。
- `link` : Netuno の `Form` の条件を使用して、メインテーブルを別のテーブルと関連付けるメソッド。
- `join` : テーブル間のリレーションオブジェクトを受け取るメソッド。
- `get` : クエリで返されるフィールドを定義するメソッド。
- `manyToOne` : テーブル間のリレーションの種類を定義するオブジェクト。この場合は `Many To One` タイプのリレーション。
- `debug` : 構築されたクエリをコンソールに出力するかどうかを決定するメソッド。
- `distinct` : `DISTINCT` コマンドをクエリに適用するかどうかを決定するメソッド。
- `all` : クエリを実行し、結果をリストとして返すメソッド。

> `link` メソッドは、テーブルがすでに Netuno の `Form` を介して関係を持っている場合にのみ使用してください。

### リレーションシップと並び順を伴う最初のレコード

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('田')
        .and('email').in(
            _val.list().add('first@mail.com').add('second@mail.com'))
    )
    .link('job')
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("job.code", "job_code")
    .order('people.age', 'desc')
    .debug(true)

const firstResult = query.first();
```
上の例の最後で `first()` メソッドを呼び出しています。これはクエリ実行で見つかった最初のレコードを返し、何も見つからない場合は `null` を返します。

### ページネーション

```javascript
const query = _db.form('people')
    .link(
        'job', 
        _db.link('task')
    )
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("job.code", "job_code")
    .group("people.id")
    .debug(true)

const page = query.page(_db.pagination(1, 10));
```

> Pagination オブジェクトのページ番号は 1 から始まるため、上の例は `offset = 0` と `limit = 10` に相当します。

上の例の最後で、ページネーション設定を持つ `pagination` オブジェクトをパラメータとして `page()` メソッドを呼び出しています。これは、対応する属性を持つページオブジェクトを返します。例:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"job_code": "研修生",
			"people_active": true,
			"people_name": "田中 太郎"
		},
		{
			"job_code": "マネージャー",
			"people_active": true,
			"people_name": "佐藤 花子"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## レコードを挿入する

データベースにデータを挿入するには、`insert` メソッドを使用します。例:

```javascript
const dbPeopleInserted = _db.form("people")
    .set("name", "田中 太郎")
    .set("email", "taro@mail.com")
    .insert();
```

`insert` の結果から、データベースに挿入されたレコードの id を取得できます。

したがって、`dbPeopleInserted` から挿入されたレコードの `id` を次のように取得できます:

```javascript
_log.info("挿入された People ID: "+ dbPeopleInserted.getInt('id'))
```

## レコードを編集する

DB Form オブジェクトを通じて、クエリのレコードを簡単かつ直感的に更新できます。

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('研修生')
    )
    .set("name", "新しい名前")
    .set("email", "new_email@mail.com")
    .update();
```

> `重要`。`update()` メソッドはクエリのすべての該当レコードを更新するため、使用時には注意してください。

> さらに、`order()` や `limit()` などの他のメソッドを組み合わせてクエリを改善できます。

## レコードを削除する

DB Form では、クエリで返されたレコードを簡単に削除することもできます。

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('研修生')
    )
    .delete();
```

> `重要`。`delete()` メソッドはクエリのすべての該当レコードを削除するため、使用時には注意してください。

> 他の操作と同様に、`order()` や `limit()` などの他のメソッドを組み合わせて結果を改善できます。