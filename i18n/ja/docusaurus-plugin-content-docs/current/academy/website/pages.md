---
sidebar_position: 3
id: pages
title: ページと React Router
sidebar_label: ページと React Router
---

## はじめに

Web アプリケーションが複雑になったり、異なるコンテンツを表示する必要が生じたりすると、ページの作成はよくある要件になります。これは特に Web サイトやプラットフォームでよく起こります。

React での開発では、[React Router](https://reactrouter.com) を使用してページ間のナビゲーション機構を作成できます。

以下の手順は、React のフロントエンドプロジェクト内で実行してください。

Netuno と統合されたフロントエンドの場合は、Netuno アプリケーションのフォルダー内で、フロントエンドプロジェクトがある場所で以下の手順を実行してください。たとえば:

- `📂 website/`

## インストール

プロジェクトに React Router のモジュールがインストールされていることを確認します:

```
bun install react-router
```

また、全体構造の作成に使用する Ant.Design もインストールします:

```
bun install antd
```

## 設定

まず、`📂 src` フォルダーにある `main.jsx` を編集します。`BrowserRoute` を次のように配置する必要があります:

```javascript title="src/main.jsx"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

**非常に重要:** 作成したばかりのフロントエンドの場合は、予期しない動作を避けるため、画像などの不要なインポートや CSS/Style をすべて削除する必要があります。

同じく `📂 src` フォルダーにある `App.js` で、次のようにモジュールのインポートを追加します:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

インポートの後に定数を追加します:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

この初期段階では、App コンポーネントの戻り値は次のようにできます:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">ホーム</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/情報">情報</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* ページのルートはここに配置します！ */ }
        </Routes>
      </Content>
      <Footer>フッター</Footer>
    </Layout>
  );
  ...
```

これにより、React Router のコンポーネントが Ant.Design のページ構造コンポーネントと組み合わされて構成されます。

## ページを作成

ページは別々のコンポーネントに配置し、各ページは React の独自のコンポーネントで表します。

ページのコンポーネントは `📂 pages` というフォルダー内に配置するのが良い習慣です。

### ホーム

エントリーページを作成します。これはコンポーネント `ホーム` になり、パス `/` に関連付けられます。

このページのコンポーネントファイルは次のとおりです:

- `pages/ホーム/index.jsx`

このファイルのコードは次のようにできます:

```jsx title="src/pages/ホーム/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function ホーム() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ホーム</h1>
      <Button onClick={()=> navigate('/情報')}>
        情報ページへ移動
      </Button>
    </div>
  );
};

export default ホーム;
```

> ボタンは `navigate` 関数を使用してプログラム的にページを切り替えます。これは `Link` コンポーネントの代替です。

### 情報

サンプルコンテンツのページを作成します。これはコンポーネント `情報` になり、パス `/情報` に関連付けられます。

このページのコンポーネントファイルは次のとおりです:

- `pages/情報/index.jsx`

このファイルのコードは次のようにできます:

```jsx title="src/pages/情報/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function 情報() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>情報</h1>
      <Button onClick={()=> navigate('/')}>
        ホームに戻る
      </Button>
    </div>
  );
}

export default 情報;
```

> ボタンは `navigate` 関数を使用してプログラム的にページを切り替えます。これは `Link` コンポーネントの代替です。

## ページをインポート

`App.jsx` の先頭で、作成したページコンポーネントをインポートします。

```jsx title="src/App.jsx"
import ホーム from './pages/ホーム';
import 情報 from './pages/情報';
```

ページをインポートすると、各ページを特定のアドレス（たとえば `/`、`/情報` など）に関連付けられます。

ページのアドレスはルート、つまり `Route` としても理解できます。

したがって、`App.jsx` でルート（より正確には `Routes`）を定義する場所では、次のようにページのアドレスとコンポーネントを定義します:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<ホーム/>}/>
      <Route path="/情報" element={<情報/>}/>
    </Routes>
    ...
```

> `path` はアドレス、`element` はページのコンポーネントです。

`Menu` にはページのアドレスを指す `Link` を持つ項目があることに注意してください。したがって、`Link` の `to` 属性は、`path` に同じ値が関連付けられている対応する `Route` を読み込む必要があることを示します。

ブラウザでこれらのアドレスを直接入力すると、対応するコンポーネント（ページ）が表示されるはずです。

## ナビゲーション

ページナビゲーションの選択肢を増やすには、それぞれのアドレスを指す `Link` タイプのコンポーネントを `Menu` に追加する必要があります。

また、アドレスを対応するページコンポーネントに関連付ける `Route` コンポーネントも追加する必要があります。

`navigate` 関数を使用すると、たとえば次のような状況でプログラム的にページを切り替えられます:

1. ログインページでデータの検証が成功した後、自動的にページを切り替える必要があります。
2. アカウント登録後、データが正常に保存されたら、自動的にログインページに切り替える必要があります。

ユーザーがクリックによるナビゲーションを直接操作する場合は、`Link` コンポーネントを使用します。

コード実行の特定のタイミングでページを切り替えるその他の場合は、`useNavigate` で取得した `navigate` 関数を使用します。

## まとめ

ReactJS と React Router を使用すると、複数のページを定義し、それらの間をナビゲートできます。

Ant.Design はページ構造の構築を支援し、複雑でレスポンシブなインターフェースを構築するための多数の便利なコンポーネントを提供します。