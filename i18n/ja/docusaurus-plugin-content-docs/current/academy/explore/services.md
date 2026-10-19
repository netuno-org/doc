---
id: services
title: サービス
sidebar_label: サービス
---

Netuno の REST Web サービスは、サーバー（バックエンド）で実行される JavaScript スクリプトで、アプリケーションのデータベースと直接やり取りできます。これらを通じて、次のことが可能です：

* データベースからデータを読み取る
* 新しいレコードを挿入する
* 既存のデータを更新する
* データを削除する
* 計算やデータ処理を伴う複雑なロジックを実行する
* 外部システムと統合する

各サービスは URL（エンドポイント）を通じてアクセスされるため、Web インターフェース（フロントエンド）、モバイルアプリ、その他の外部システムが、安全かつ標準化された方法でアプリケーションのデータを利用できるようになります。

#### 前提条件

* _**JavaScript、React.js**_、_**HTML**_ の基本を理解していること。
* SQL とアプリケーションのフォルダ構成に慣れていること。
* **フォーム**、**フィールド**、**リレーション**の基本知識があることが推奨されます。

これらの手順について不明な点がある場合は、次を参照してください：

* [フォーム](/docs/academy/ui/forms)
* [フィールド](/docs/academy/ui/fields)
* [フォーム間のリレーション](/docs/academy/ui/relationships-between-forms)



## はじめに

勤務時間記録アプリを使用し、各従業員が行った合計時間を計算することを目的とします。

**アプリケーション構成：**

![アプリケーション構成](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
**id** フィールドは、Netuno によってすべてのテーブルで自動的に作成および管理されるため、手動で定義する必要はありません。
:::

Netuno アプリケーションのサービスは **server/services/** フォルダにあります。

#### フォルダ構成

```text
my-app/
└── server/
    └── services/
        ├── workers.js   ← サービスファイル
        └──... 
```

## サービスの作成

**server/services/** フォルダ内に、サービスの URL を定義する新しいファイルを作成します。この例では、ファイル名を `workers.js` にします。

:::tip
- **小文字**のみを使用してください。
- 名前に複数の単語を含める場合は、単語を**ハイフン（-）**で区切ってください。
- 例：**workers.js**、**hours-report.js**、**entry-records.js**。
:::


## データベースへの問い合わせ

Netuno では、データベースとネイティブにやり取りするためのグローバルオブジェクト **_db** が提供されています。

SQL クエリを実行するには、`_db.query()` メソッドを使用します。


```javascript
// 従業員ごとの合計時間を集計する SQL クエリを実行します
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start, work_record.end)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);
```

:::note SQL クエリの理解

* **INNER JOIN**: 外部キー `worker_id` を使用して `worker` テーブルと `work_record` テーブルを結合します。

* **DATEDIFF(HOUR, work_record.start, work_record.end)**: 開始時刻と終了時刻の差を時間単位で計算します。

* **SUM(...) AS total**: 各従業員の処理済み時間をすべて合計します。

* **WHERE ... active = true**: 削除されていない（有効な）従業員と記録のみを対象に検索を絞り込みます。

* **GROUP BY worker.name**: 各従業員の名前ごとに合計をグループ化します。

* **ORDER BY total ASC**: 最終結果を勤務時間の少ない順から多い順に並べ替えます。
:::

## データの処理

`_db.query()` メソッドは、Netuno の内部形式でデータを返します。

JSON 形式でクリーンなレスポンスを送信するには、グローバルオブジェクト **_val.list()**（配列用）と **_val.map()**（オブジェクト用）を使用してデータを変換する必要があります。

```javascript
// 処理済みデータを格納する空のリストを作成します
const list = _val.list();

// SQL クエリから返された各レコードを反復処理します
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))   // 名前をテキストとして取得します
            .set("total", dbRecord.getInt("total"))    // 合計を整数として取得します
    );
}
```
### 使用するメソッド

| リソース | 説明 |
|---------|-----------|
| **_val.list()** | リストを作成します（JS の Array に相当）。 |
| **_val.map()** | キーと値のオブジェクトを作成します（Object または JSON に相当）。 |
| **.add(...)** | リストの末尾に新しい項目を追加します。 |
| **.set("key", value)** | マップに新しいプロパティと対応する値を設定します。 |
| **.getString("column")** | 指定した列の値をテキスト（String）として取得します。 |
| **.getInt("column")** | 指定した列の値を整数（Integer）として取得します。 |

## データの返却

処理済みのリストを JSON 形式でクライアントに送信するには、**_out** オブジェクトを使用します。

```javascript
// リストを JSON 形式の HTTP レスポンスとして送信します
_out.json(list);
```

## 実践例

この最終ステップでは、これまで学んだすべての概念をまとめて、機能するサービスを作成します。

以下の完全なコードは、データベースに問い合わせて総勤務時間を計算し、そのデータを JSON 形式で返します。

```javascript
// 1. 有効な各従業員の総勤務時間を問い合わせます
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start, work_record.end)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);

// 2. レスポンス用のデータ構造を作成します
const list = _val.list();

// 3. 結果を処理してマッピングします
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))
            .set("total", dbRecord.getInt("total"))
    );
}

// 4. データを JSON 形式で返します
_out.json(list);
```

### サービスへのアクセス

Netuno でサービスを作成して設定すると、ブラウザから直接使用およびテストしたり、他のアプリケーションに統合したりできるようになります。

#### アクセス方法

サービスは次の方法で利用できます：

- **ブラウザ:** GET メソッドの簡単なテスト用。

- **HTTP クライアント:** Postman、Insomnia、Thunder Client などのツール。

- **フロントエンド:** fetch リクエストまたは Axios などのライブラリ経由。

#### URL の構成

デフォルトでは、Netuno はサービスフォルダに作成されたファイルを自動的に Web アドレスにマッピングします。

ローカルでデフォルトポートを使用して実行している場合、アドレスは次の形式になります：

http://localhost:9000/services/workers



:::info ルーティングの仕組み
Netuno はファイルシステムに基づく自動ルーティングシステムを使用します：

**ソースフォルダ:** `server/services/` 内のすべてのファイルがルートになります。

**マッピング:** **workers.js** ファイルはエンドポイント **/services/workers** に変換されます。

**拡張子:** URL では **.js** 拡張子が省略されることに注意してください。オプションで **.netuno** サフィックス（例: `/services/workers.netuno`）を使用できますが、よりクリーンなため拡張子なしのアクセスが推奨される標準です。
:::

**HTTP レスポンスの例：**
データベースに互換性のあるデータがある場合、サーバーから返されるレスポンスは次のようになります：

```json
[
    {
        "name": "佐藤 玲奈",
        "total": 40
    },
    {
        "name": "鈴木 健太",
        "total": 35
    },
    {
        "name": "高橋 美咲",
        "total": 45
    }
]
```

## システムのグローバルオブジェクト

Netuno でサービスを開発する際、データベースとの通信、リクエストの制御、情報の出力を容易にするネイティブオブジェクトを頻繁に使用します。

これらのオブジェクトは、サーバースクリプト **（.js ファイル）** で使用できるよう事前設定されたインスタンスです。SQL クエリやパラメータの読み取りなどの基本的なタスクのために外部ライブラリをインポートする必要がなくなります。

| オブジェクト | 説明 |
|--------|-----------|
| **_db**| データベース操作（query、insert、update、delete）を実行します。 |
| **_val** | データ構造の作成と操作（list、map）。 |
| **_out** | ユーザーへのレスポンス送信（JSON、HTML...）。 |
| **_req** | ユーザーリクエストで送信されたパラメータへのアクセス（GET、POST）。 |
| **_log**| サーバーコンソールへのエラーメッセージまたはデバッグメッセージの記録。 |



難しい点や改善提案がある場合は、お問い合わせください。

私たちのチームとコミュニティが喜んでお手伝いします。

良い開発を！