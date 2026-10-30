---
sidebar_position: 7
id: ui
title: インターフェースとデザイン
---

## はじめに

フロントエンドの開発、つまりブラウザによって視覚的に処理される部分は、**ui** フォルダ内で行われます。

標準では、このフォルダには <a href="https://reactjs.org/" target="_blank">ReactJS</a>、<a href="https://ant.design/" target="_blank">Ant.Design</a>、<a href="http://lesscss.org/" target="_blank">Less</a> で構築され、<a href="https://vite.dev/" target="_blank">Vite</a> でコンパイルされる開発環境が含まれています。

標準環境はこれらの技術向けに設定されていますが、現在広く使われているという理由もあり、これらの技術に限定されるものではありません。

**VueJS**、**MaterialUI**、**Sass**、**Bootstrap**、**TypeScript** などの別の技術を使用したい場合は、`📂 ui` フォルダ内の `📂 package.json` と `📂 vite.config.js` の設定を、希望する技術に合わせて変更するだけです。

> [統合・集中ターミナル](/docs/academy/explore/centralized-terminal) について詳しく。

## 前提条件

始める前に、[Bun](https://bun.sh/) がインストールされていることを確認してください。

> [Bun のインストール](/docs/academy/website/bun)方法を参照してください。

利用インターフェースの仕組みをよりよく理解するには、次の資料をおすすめします:

- [フロントエンド UI レイヤーについて詳しく。](/docs/academy/ui/ui-layer)

## サービスを拡張する

`📂 server/services/workers.js` に **workers** サービスを Visual Studio Code で作成し、次のアドレスで <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> 情報を提供できるようになったとします:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/workers</a>

次のステップは、これを拡張してブラウザのインターフェースにデータを表示することです。

このデータを使って、表とグラフで表示します。

Visual Studio Code または他のテキストエディタで **Demo** アプリケーションを開いているものとします。

エディタで次のファイルを開きます:

`📂 ui/src/containers/DashboardContainer/index.jsx`

この既存のコードを変更します。

### `state` を準備する

`function` 内の `DashboardContainer` コンポーネントの先頭に、その _state_ の定義があります。

次のように、workers のデータを保存する新しいエントリを追加します:

```jsx
            // 👇 以下の新しいコード行を追加します:
            const [workers, setWorkers] = useState([]);
            const [loading, setLoading] = useState(false);
```

つまり、新しい state 行 `const [workers, setWorkers] = useState([]);` を追加します。

### `loadWorkers` 関数を作成する

さらに下に、`loadWorkers` という関数があります。この関数は、現在ダッシュボードに表示されている workers のデータを取得します。

> この関数は workers のデータを読み込むために使用されます。

以下のコードを挿入します:

```jsx
    /**
    *** 🚀 workers のデータを読み込みます。
    ***    次のサービスを実行します:
    **     http://localhost:9000/services/workers
    */
    const loadWorkers = () => {
        setWorkers([]);
        setLoading(true);
        _service({
            url: intl.locale.indexOf('pt') == 0 ? '/services/workers' : '/services/workers',
            success: (response) => {
                setWorkers(response.json);
                setLoading(false);
            },
            fail: (e) => {
                setLoading(false);
                console.error('workers サービスの取得に失敗しました。', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

上記のコードは、<a href="https://reactjs.org/" target="_blank">ReactJS</a> のコンポーネントの _state_ に **workers** のデータを渡します。これは **workers** サービスを実行し、<a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> でデータを受け取ると、それを `setWorkers` の実行によって _state_ に保存します。

最終的なコードは次のような構造になります:

```jsx
    useEffect(() => {
        ...
    }, []);

    const loadWorkers = () => {
        ...
    }

    return ( 
        ...
    );
```

> ここで `...` は、それぞれのブロック内で省略された複数のコード行です。

### `useEffect` フックを実行する

次に、コンポーネントが「マウント」されたときに `useEffect` フックを実行する必要があります。このフックは、コンポーネントがブラウザの表示上で構築されるときに実行されます。

そのためには、少し上で `useEffect` フック内に `loadWorkers();` というコード行を次のように追加するだけです:

```jsx
    useEffect(() => {
        loadWorkers();
    }, []);
```

この新しいコード行は、先ほど作成した <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/workers</a> サービスを実行する関数を呼び出し、JSON でデータを取得してコンポーネントの `state`（_状態_）に保存し、return（_表示_）で表示できるようにします。

### コンパイル

ファイルを**保存**すると、すぐに Netuno を実行している**ターミナル**に **ui** の新しいコンパイル結果が表示され、<a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a> のコンパイル結果の新しい行が出力されます。

**ターミナル**で期待される出力は次のようになります:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

コンパイルでエラーがある場合は、**ターミナル**に問題の内容が表示されます。

ここまでで、**workers** サービスの利用を実装しました。取得したデータは `DashboardContainer` コンポーネントの `state` に保存され、`return` で利用できるようになります。

## データを表示する

あとは、ユーザーがブラウザで見るインターフェースにデータを視覚的に表示するだけです。

ブラウザにデータを表示するには、<a href="https://reactjs.org/" target="_blank">ReactJS</a> のコンポーネントの見た目を処理する `return` を変更する必要があります。

`DashboardContainer` のコードの最後に `return ( ... );` があります。

これにコードを1行追加して、**workers** に関するデータを表示する `DataVisualization` コンポーネントを含めます。コードは次のようになります:

```jsx
    // 🔍 既存のコード内で次を探します:
    return (
    <div ref={ref}>
      { loading == false ?
        <DataVisualization data={workers} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

追加するのは、次の行だけであることに注意してください:

```jsx
<DataVisualization data={workers} />
```

これにより `DataVisualization` は、**workers** サービスから JSON 経由で取得され `state` に保存されたデータを受け取ります。

### 最終コンパイル

ここまでのすべての変更を加えたファイルを**保存**します。

**ターミナル**の出力にエラーがないことを確認してください。

ブラウザでページを更新すると最終結果が表示されます。または、次のリンクをクリックしてください:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> ダッシュボードが空白で表示される場合は、コードにエラーがあります。
>
> **ブラウザ**の**開発者ツール**のコンソールでエラーを確認してください。

## さらに詳しく 👇

<a href="https://reactjs.org/" target="_blank">ReactJS</a> の簡単な紹介:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">ReactJS 初心者ガイド。</a>