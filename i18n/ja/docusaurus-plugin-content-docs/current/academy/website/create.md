---
sidebar_position: 2
id: create
title: React での作成
sidebar_label: React での作成
---

この作成プロセスは他の状況にも適用できます。たとえば、任意の種類の React プロジェクトを作成する場合などです。その場合は、名前とコマンドを実行するフォルダを適宜調整してください。

前提として、Web レイヤー、つまり Netuno アプリケーションのフロントエンドを作成します。

そのため、Netuno アプリケーション内に `frontend` を作成することを想定しています。これはフロントエンド層の標準名ですが、任意の別名にすることもできます。

## 前提条件

Netuno がインストールされている必要があります:

- [Netuno のインストール。](/docs/get-started/installation)

より良いパフォーマンスなどの利点から、Bun がインストールされている必要があります:

- [Bun のインストール。](/docs/academy/website/bun)

## 作成

Netuno アプリケーション内に React アプリケーションを作成する場合、通常は `frontend` と呼びます。

次に、**ターミナル**で **Netuno アプリケーションのルート** に移動します。通常は次のフォルダ内にあります:

- `netuno/apps/MY_APP`

> ここで `MY_APP` は Netuno アプリケーションの名前です。

次のコマンドを実行します:

```shell
bun create vite
```

次に、`Project name:` と尋ねられます。

`frontend` と入力し、`ENTER` キーを押します。

続いて、`Select a framework:` と尋ねられます。

キーボードの矢印キーを使い、下矢印キーを押して `React` オプションを選択し、`ENTER` キーを押します。

最後に、`Select a variant:` と尋ねられます。

キーボードの矢印キーを使い、下矢印キーを押して `JavaScript` オプションを選択し、`ENTER` キーを押します。

このコマンドにより、React フロントエンドを含む `📂 frontend` という新しいディレクトリが作成されます。

React フロントエンドを作成したら、依存関係をインストールするために次のように実行します:

```shell
cd frontend
bun install
```

お好みのエディタ（VSCode、WebStorm など）で Netuno アプリケーションのフォルダを開き、作成された `frontend` フォルダに入ります。

## 実行

これで、次のコマンドを使って React フロントエンドサーバーを起動できます:

```shell
bun run dev
```

これにより、フロントエンドは通常 [http://localhost:5173/](http://localhost:5173/) で利用可能になります。別のポート番号のアドレスがターミナルに表示される場合もありますが、いずれにしてもターミナルに表示されたアドレスをブラウザで開くだけです。

> ターミナルでの実行を終了するには、`CTRL` キーと `C` キーを同時に押します。

## 依存関係のインストール

ターミナルでフロントエンドサーバー（`bun run dev`）を実行している場合は、停止することをおすすめします。`CTRL` キーと `C` キーを同時に押してください。

Netuno での React アプリケーション開発に非常に役立つため、次の NPM パッケージをインストールすることを強くおすすめします（各リンクをクリックすると詳細を確認できます）:

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

上記のパッケージをインストールするには、ターミナルで次の一連のコマンドを実行するだけです:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

または、すべてのパッケージを一度にインストールすることもできます:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## 設定

上記のコマンドを実行した後、デフォルトのポートを固定できます。`📂 frontend/vite.config.js` に移動し、次のように `server` 設定を追加します:

```javascript title="frontend/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

これで、`bun run dev` コマンドで起動すると常にポート `3000` が使用されます。

### Less

`frontend/src` にあるすべての `.css` ファイルを `.less` 拡張子に変更します。

> JSX コード内で `.css` ファイルを `import` している行も、`.less` に変更することを忘れないでください。

LESS を使用すると、より構造化されたモダンな CSS 開発が可能になります。

### Ant.Design のテーマのカスタマイズ

Ant.Design の色をカスタマイズするには、`App.jsx` で `ConfigProvider` コンポーネントを使用します。

例:

```jsx title="frontend/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">カスタムカラーのボタン</Button>
            ...
        </ConfigProvider>
    );
}
...
```

このようにして、Ant.Design の任意のスタイル設定を調整できます。

### ダークテーマ

Ant.Design のダークテーマも使用できます。そのためには、ダークモードを含む `theme` をインポートし、`ConfigProvider` に適用するだけです:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">カスタムカラーのボタン</Button>
        ...
    </ConfigProvider>
...
```

### スタイルの再設定

上記の `ConfigProvider` のパラメータ設定で、Ant.Design のスタイルを簡単に変更できることに注目してください。Ant.Design のカスタマイズの詳細:

- [テーマのカスタマイズ](https://ant.design/docs/react/customize-theme)

Ant.Design の各コンポーネントには、設定可能な Design Token の構成があります。たとえばボタンの場合:

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">カスタムカラーのボタン</Button>
    ...
</ConfigProvider>
```

## Netuno によるフロントエンドの自動起動

Netuno では、Netuno アプリケーションのサーバープロセスと一緒に React アプリケーションを起動できます。

> React アプリケーションのコンパイルメッセージはすべて、Netuno アプリケーションと同じターミナルに統合されます。

そのためには、`📂 config/_development.json` の Netuno アプリケーション設定 `commands` に次を追加するだけです:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "frontend",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Netuno アプリケーションの設定ファイルを編集するたびに、新しい変更を反映するためにサーバーを再起動する必要があります。

最後に、Netuno アプリケーションでサーバーを起動／再起動して、動作を確認してください。

これで、すべてが 1 つの集中ターミナルに統合され、複数のターミナルが散らばることを避けられます。詳細:

- [集中ターミナル](/docs/academy/explore/centralized-terminal)

## CORS (Cross-Origin Resource Sharing) の設定

CORS を設定して、フロントエンドと Netuno アプリケーションのサービス間の通信で起こりうるエラーを防ぐには、次のアプリケーション設定を編集します:

- `📂 config/_development.json`

`cors` 設定がすでに存在するか確認してください。`origins` に `*` がある場合は開発に適しているため、そのままにしておけます。

`cors` 設定がない場合は、次の例を参考に追加してください。アドレスはフロントエンドと同じアドレスである必要があります:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> `origins` に `*` が含まれている場合、任意のフロントエンドアドレスがサポートされることを意味します。例:
> - `"origins": [ "*" ]`
> 通常、開発時には `*` を使用します。

設定を実装すれば、CORS のセキュリティ問題を気にせず、任意の API サービスをフロントエンドと連携できます。

> 詳細: [CORS](/docs/academy/server/services/cors)

## 環境変数

環境変数の設定は、`frontend/.env` ファイルを作成し、変数の定義を記述することで行えます。例:

```
NODE_ENV=development
```

または、Netuno アプリケーションの設定で行うこともできます。たとえば次のファイルです:

- `📂 config/_development.json`

そして、コマンド設定の `env` パラメータで環境変数を定義します。例:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "frontend",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```