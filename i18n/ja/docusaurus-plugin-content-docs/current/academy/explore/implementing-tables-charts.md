---
id: implementing-tables-charts
title: テーブルとグラフの実装
sidebar_label: テーブルとグラフ
---

このチュートリアルでは、データの可視化に焦点を当てて、シンプルなアプリケーションのインターフェースとロジックを作成します。プロジェクトの開発では、次のトピックを扱います:

- データベースを構造化するための **「フォーム」**、**「フィールド」**、**「リレーション」** の作成。
- アプリケーション内のテーブルとグラフに情報を動的に表示するための **「REST Web サービス」** の構築。ここでは _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ ライブラリと依存関係の _Chart.js_、さらに <a href="https://ant.design/" target="_blank">Ant Design</a> のテーブルコンポーネントを使用します。

プロジェクトのビジュアル構造全体は **HTML、JavaScript、React.js** を使用して開発されます。
以下の基本的な知識があることをお勧めします:
- **JavaScript**
- **React.js**
- **HTML**

💡 **これらの手順で不明な点がある場合は、次を参照してください:**
   - [インターフェースガイド: フォーム](/docs/academy/ui/forms)
   - [インターフェースガイド: フィールド](/docs/academy/ui/fields)
   - [インターフェースガイド: フォーム間のリレーション](/docs/academy/ui/relationships-between-forms)
   - [インターフェースガイド: REST Web サービス](/docs/academy/explore/services)


## 最終成果物

このチュートリアルのすべての手順に従うと、Netuno のワークスペースに機能するダッシュボードが構築されます。これには以下が含まれます:

* 作業者の記録と合計時間を一覧表示する **データテーブル**。
* 同じデータを視覚的に表示する、動的でカラフルな **棒グラフ**。

![最終製品.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## ソリューションのアーキテクチャ

コードを書く前に、各部分がどのように組み合わさるかを理解することが重要です。ソリューションは **4つの層** に分かれており、上から下へ通信します:

```
DashboardContainer         (サーバーからデータを取得)
       │
       ▼
DataVisualization          (レイアウトを2列に整理)
       │
  ┌────┴────┐
  ▼         ▼
TableList  ChartBar        (受け取ったデータを描画)
```

:::tip
このアーキテクチャの利点は、各コンポーネントが **単一の責務** を持つことです。
:::

## ステップ1: データ構造

最初のステップでは、フォームを作成し、それらの間のリレーションを設定し、後でテーブルとグラフを生成するためのデータを入力します。

以下は、Netuno 環境で再現する必要があるフォームのアーキテクチャとフィールドの図です:

![最初のステップ.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **重要:** 図に `id` フィールドが表示されていますが、**手動で作成する必要はありません**。Netuno はテーブル作成直後にこの識別子を自動生成します。

### ダッシュボードテンプレート

テーブルとグラフを表示するには、アプリケーションのインターフェース内に場所が必要です。Netuno にはメインダッシュボード用の基本テンプレートがすでに用意されています。

コードエディタを開き、次のファイルを見つけます:

```text
/apps/myapp/server/templates/dashboard.html
```
*(**myapp** を実際のアプリケーションフォルダ名に置き換えてください)。*

次の HTML コード行に気付くでしょう:

```html
<div id="app-dashboard"></div>
```

## ステップ2: データサービス

データベースと HTML の準備ができたので、「メッセンジャー」（REST Web サービス）を作成する必要があります。これはデータベースにアクセスし、各作業者の合計時間を計算して、その情報をテーブルとグラフで使える形で提供する役割を担います。


### サービスファイルの作成

Netuno のサービスは `server/services/` フォルダに保存されます。プロジェクトのディレクトリに移動し、`workers.js` ファイルを作成します:

```text
/apps/myapp/server/services/workers.js
```
**DashboardContainer** はパネルの言語を検出し、パネルがポルトガル語のときは **/services/workers**、英語のときは **/services/workers-en** を呼び出します。言語ごとに専用のサービスファイルがあります。

### コードを書く

このコードは Netuno のネイティブリソース（**_db**、**_val**、**_out**）を使用して、主に3つの操作を行います:

- **クエリ _db.query:** データベース内の**アクティブな**作業者だけを検索し、それぞれの合計作業時間を計算します。

- **処理 _val.list と _val.map:** 結果を構造化されたオブジェクトのクリーンなリストに整理します。

- **レスポンス _out.json:** データを JSON 形式で送信し、インターフェース（React）が読み取れるようにします。

`workers.js` ファイルを開き、以下のコードを貼り付けてください:

```javascript
// 1. クエリ, _db.query() は SQL を実行し、見つかったレコードのリストを返します。
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start_time, work_record.end_time)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);

// 2. データ処理, _val.list() は処理済みデータを保持する空のリストを作成します。
const list = _val.list();

// データベースから返された各行を走査します
for (const dbRecord of dbRecords) {
    list.add(
        // _val.map() は React が利用するフィールドを持つオブジェクトを作成します
        _val.map()
            .set("name", dbRecord.getString("name"))  // 名前 → "name" フィールド
            .set("total", dbRecord.getInt("total"))   // 合計時間 → "total" フィールド
    );
}

// 3. レスポンス
// 最終的なリストを JSON 形式で React インターフェースに送信します。
_out.json(list);
```
:::tip
- **フィールド名に注意:** ここで **"name"** と **"total"** として定義したフィールドは、次のステップで React コンポーネントが参照するものとまったく同じです（dataIndex: 'name' と dataIndex: 'total'）。これらは同一である必要があります。

- **active = true フィルターについて:** データベースには **worker** テーブルと **work_record** テーブルに **active** カラムがあります。アクティブなレコードだけをフィルターすることで、アーカイブまたは無効化されたデータがテーブルとグラフに表示されないようにします。
:::

## ステップ3: フロントエンド環境 (React)

バックエンド（データベースとサービス）の準備ができたので、ビジュアルインターフェースを準備します。

ターミナルを開き、以下の手順に従ってください:

#### 1. 基本依存関係のインストール
アプリケーションの `ui` フォルダに移動し、パッケージをインストールします。

```bash
npm install
```

#### 2. グラフライブラリのインストール

プロジェクトでグラフを表示するため、画面に描画するライブラリをダウンロードします:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. 多言語管理

多言語を管理するライブラリをインストールします:

```bash
npm install react-intl
```

#### 4. コンパイラの起動 (Watch)

すべてインストールしたら、ファイルを保存するたびに画面が自動更新されるようになります:

```bash
npm run watch
```

#### 5. コンポーネントの作成
プロジェクトを整理するため、テーブル用とグラフ用に別々のコンポーネントを作成します。

アプリケーションの `src/components/` ディレクトリに移動し、次のフォルダを作成します:

* テーブル: TableList
* グラフ: ChartBar
* コンテナ: DataVisualization

```text
/apps/your_app_name/ui/src/components/TableList/
/apps/your_app_name/ui/src/components/ChartBar/
/apps/your_app_name/ui/src/containers/DataVisualization/
```

## ステップ4: TableList コンポーネント

**TableList** コンポーネントはサービスからデータを受け取り、**Ant Design** を使用して列を自動的に構築します。Ant Design は Netuno のインターフェースにすでに付属している、すぐに使えるビジュアルコンポーネントライブラリです。

TableList フォルダに移動し、`index.jsx` ファイルを作成します:

```text
/apps/your_app_name/ui/src/components/TableList/index.jsx
```

ファイルを開き、以下のコードを貼り付けてください:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Ant Design のテーブルコンポーネント

import './index.less';

const messages = 'dashboardcontainer.datavisualization.table';

function TableList({ data = [] }) {
  // 列のヘッダーと、各列に表示するオブジェクトのフィールドを定義します
  const columns = [
    {
      title: <FormattedMessage id={`${messages}.workers`} />, // 翻訳されたタイトル
      dataIndex: 'name',  // サービスが返す JSON の "name" フィールド
    },
    {
      title: <FormattedMessage id={`${messages}.total`} />,
      dataIndex: 'total', // サービスが返す JSON の "total" フィールド
    }
  ];

  return (
    <Table
      columns={columns}      // 列の構造
      dataSource={data}      // データ自体（オブジェクトのリスト）
      pagination={false}     // ページネーションなし: 全レコードを一度に表示
      bordered={true}        // セルに境界線を表示
    />
  );
}

export default TableList;
```

 **コードの理解:**

この関数コンポーネントはリスト `data` をパラメータ（prop）として受け取り、Ant Design の `<Table>` に直接渡します。

**columns** 設定は、ヘッダーに表示するタイトル **title** と、セルに埋める JSON オブジェクトのフィールド `dataIndex` を Ant Design に伝えます。Ant Design は HTML、境界線スタイル、レイアウトをすべて自動で処理します。そのため手動で CSS を作成する必要はありません。

**index.less ファイル:** 同じフォルダに `index.less` ファイルを作成します。Ant Design がテーブルの基本スタイルを提供するため、今は空のままでかまいません。


## ステップ5: ChartBar コンポーネント

**react-chartjs-2** ライブラリを使用して、データを可視化する棒グラフを作成します。このコンポーネントはデータを受け取り、Chart.js が理解できる形式に変換し、色を割り当てて画面にグラフを描画します。

`ChartBar` フォルダに移動し、`index.jsx` というファイルを作成します:

```text
/apps/your_app_name/ui/src/components/ChartBar/index.jsx
```
ファイルを開き、以下のコードを貼り付けてください:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // 棒グラフコンポーネント
import { Chart, registerables } from 'chart.js';  // Chart.js のコア

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.datavisualization.chart';

// 必須: 使用前に Chart.js のすべての要素を登録します。
// この行がないとグラフは描画されず、コンソールにエラーが発生します。
Chart.register(...registerables);

function ChartBar({ data }) {
  const intl = useIntl();
  const [chartData, setChartData] = useState(null); // Chart.js 形式のデータ

  useEffect(() => {
    // バー用の7色パレット（7項目を超える場合は循環）
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const labels = [];
    const values = [];

    // Chart.js が要求するデータ構造
    const chartDataNew = {
      labels: [],       // X軸（横軸）の名前
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.label` }), // 翻訳された凡例
          data: [],           // Y軸の値（バーの高さ）
          backgroundColor: [] // 各バーの色
        }
      ]
    };

    // 受け取ったデータを反復処理し、リストを組み立てます
    for (const i in data) {
      labels.push(data[i].name);   // 作業者名 → X軸
      values.push(data[i].total);  // 合計時間 → バーの高さ

      // (i + 1) % 7: "i" が 7 になると 0 に戻り、色を循環して繰り返します
      chartDataNew.datasets[0].backgroundColor.push(colors[(i + 1) % 7]);
    }

    chartDataNew.labels = labels;
    chartDataNew.datasets[0].data = values;

    setChartData(chartDataNew); // 再レンダリングをトリガーするために状態に保存します

  }, [data]); // "data" が変わるたびに再実行します

  // データが処理されるまでは何も描画しません
  if (chartData == null) {
    return null;
  }

  return (
    <Bar data={chartData} />
  );
}

export default ChartBar;
```
**コードの理解:**

このコンポーネントには主に3つの責務があります:

**準備 `useState`:** サーバーから来るデータの処理を待つため、状態 `null` でコンポーネントを開始します。

**データ処理 `useEffect`:** データが prop `data` 経由で届くと、**useEffect** フックが自動的にトリガーされます。色パレットを定義し、**for** ループで情報を分離します。作業者名は X 軸のラベル **labels** に入り、合計時間はバーの高さ `data` を定義し、各バーに循環的に色が割り当てられます。

**画面への描画 `return`:** ライブラリの `<Bar>` コンポーネントを使用して、処理され状態に保存されたデータに基づいてグラフを描画します。

**index.less ファイル:** `ChartBar` フォルダ内にも `index.less` ファイルを作成します。今は空のままでかまいません。


## ステップ6: ビジュアルレイアウト DataVisualization

テーブルとグラフのコンポーネントの準備ができたので、それらを画面に並べて配置するコンテナが必要です。

**DataVisualization** フォルダに移動し、`index.jsx` というファイルを作成します:

```text
/apps/your_app_name/ui/src/containers/DataVisualization/index.jsx
```

ファイルを開き、以下のコードを貼り付けてください:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // 言語ごとに翻訳可能なタイトル

import ChartBar from "../../components/ChartBar";
import TableList from "../../components/TableList";

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DataVisualization({ data = [] }) {
  return (
    <div>
      <div className="row">              {/* Bootstrap の行 */}

        {/* 左列: テーブル */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.table.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <TableList data={data} />   {/* データをテーブルに渡します */}
            </div>
          </div>
        </div>

        {/* 右列: グラフ */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.chart.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <ChartBar data={data} />    {/* 同じデータをグラフに渡します */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataVisualization;
```
**コードの理解:**

このコンポーネントはビジュアルオーガナイザーとして機能します。リスト `data` を受け取り、何も変換せずに2つの子コンポーネントに配分します。

クラス `row` と `col-lg-6` は「Bootstrap Grid」のもので、画面を半分に分割します。左列はテーブル、右列はグラフを受け取ります。小さい画面（携帯電話）では自動的に縦に積み重なります。

クラス `panel`、`panel-heading`、`panel-body` は、各コンポーネントに「タイトル付きの小さなボックス」の見た目を作成します。

**index.less ファイル:** このフォルダにも、将来パネルをスタイリングするための `index.less` ファイルを作成します。

## ステップ7: ダッシュボードコンテナ

バックエンドにはサービスがあり、フロントエンドにはビジュアルコンポーネントがあります。サーバーにアクセスしてデータを取得し、**DataVisualization** に渡すコンテナが必要です。

Netuno はダッシュボードの基本構造を自動的に生成します。既存のファイルを編集します:

```text
/apps/your_app_name/ui/src/containers/DashboardContainer/index.jsx
```

ファイルの内容を以下のコードに置き換えます:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Netuno 公式 HTTP クライアント

import { Spin, message } from 'antd';           // ローディングインジケーターとエラー

import DataVisualization from "../DataVisualization"; // ビジュアルレイアウト

import { useIntl } from 'react-intl';           // 多言語サポート

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [workers, setWorkers] = useState([]);   // 状態: 作業者リスト
  const [loading, setLoading] = useState(false); // 状態: 読み込み中か?

  // ページを開くと自動的に取得をトリガーします
  useEffect(() => {
    loadWorkers();
  }, []);

  const loadWorkers = () => {
    setWorkers([]);      // 以前のデータをクリア
    setLoading(true);    // ローディングインジケーターを有効化

    _service({
      // パネルの言語を検出し、正しいサービス URL を呼び出します
      url: intl.locale.indexOf('pt') == 0 ? '/services/workers' : '/services/workers-en',
      success: (response) => {
        setWorkers(response.json); // 受け取ったデータを状態に保存
        setLoading(false);
      },
      fail: (e) => {
        setLoading(false);
        console.error('Workers service failed.', e);
        message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
      }
    });
  };

  // 親コンポーネント（Dashboard）が ref 経由で loadWorkers() をトリガーできるようにします
  useImperativeHandle(ref, () => ({
    loadWorkers
  }));

  return (
    <div ref={ref}>
      { loading == false
        ? <DataVisualization data={workers} /> // データ準備完了: パネルを表示
        : <Spin/>                              // まだ読み込み中: スピナーを表示
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**コードの理解:**

このコンポーネントには主に3つの責務があります:

**初期状態 `useState`:** 2つの内部コントロールを作成します — **workers**（サーバーから来るリスト）と **loading**（データがまだ取得中かどうかを示すフラグ）。

**データ取得 `_service`:** 関数 **loadWorkers** は **_service** を使用してバックエンドサービスを呼び出します。JavaScript ネイティブの **fetch** とは異なり、**_service** は認証、セッション、エラー処理を自動的に管理します。また、パネルの言語を検出し、PT では `/workers`、EN では `/workers-en` という正しい URL を選択します。

**配分と描画 `return`:** データ取得中はローディングスピナー **(Spin)** を表示します。データが届くと、リスト **workers** を **DataVisualization** に渡し、それがテーブルとグラフに配分します。

### ダッシュボードのスタイル設定

`DashboardContainer` フォルダの `index.less` ファイルを開き、パネルのヘッダーを強調するために以下のコードを貼り付けます:

```text
/apps/your_app_name/ui/src/containers/DashboardContainer/index.less
```

```css
.panelBackground {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**コードの理解:**

このクラスは、ヘッダーに青い背景色 **(#3f54ba)** とパディング領域 **(padding)** を定義します。

これは `DataVisualization` の `data-visualization__panel` クラスで使用され、**テーブル** と **グラフ** のタイトルが視覚的に強調されるようにします。


## ステップ8: プロジェクトのコンパイル

すべての React コードが Netuno によってコンパイルされるようにするには:

* **ターミナルが開いたまま** で `npm run watch` がバックグラウンドで実行されている場合: ファイルを保存するたびに変更が自動的にコンパイルされます。
* **ターミナルを閉じた** 場合、またはプロセスが停止した場合: 問題ありません。ターミナルを再度開き、`ui` フォルダに移動してコマンドをもう一度実行します:

```bash
npm run watch
```

## まとめ

このチュートリアルを通じて、Netuno プラットフォームで作業するための必須スキルを習得し、サーバーとユーザーインターフェース間のデータフロー統合サイクルを理解しました。

この開発では以下のトピックを扱いました:

- **データベース:** テーブルとデータ構造を視覚的かつ効率的に作成・整理します。

- **REST バックエンド:** API 経由でデータを提供するためのサービスとビジネスロジックを開発します。

- **React によるフロントエンド:** これらのデータをモダンでレスポンシブなインターフェースに統合し、動的に表示します。

困難や改善提案がある場合は、お問い合わせください。

私たちのチームとコミュニティが喜んでお手伝いします。

良い開発を！