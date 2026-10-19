---
id: ui
title: UI
sidebar_label: UI
---

バックオフィスとダッシュボードのカスタマイズされたフロントエンド。

## ユーザーインターフェース

その名前が示すとおり、`📂 ui` フォルダにはアプリケーションのユーザーインターフェースのロジックが含まれています。

アプリケーションのバックオフィスの動作を変更するための開発を行うことができます。

オーダーメイドのダッシュボードの生成、機能の追加や変更などが可能です。

バックエンドかフロントエンドかを問わず、アプリケーションの全般的なコードの開発を行うには、無料で利用できる
コードエディターを推奨しています。例えば:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## フォルダ構造

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>マイボタン</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ダッシュボードコンテナ</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## ソース

`📂 src` フォルダにはフロントエンドのアプリケーションコードがまとめられています。このフォルダには React の
コンポーネントの構成、すなわち `components` と `containers` が含まれています。

### コンテナ

`📂 containers` フォルダはコンテナ向けのフォルダであり、コンテナとはより多くのインタラクションを持つ領域向けの
React コンポーネントのことです。つまり、より多くの機能を持つコンポーネントであり、通常は画面のかなりの領域を
カバーし、その範囲に応じて他のコンポーネントを集約することができます。

例えば、フィルター用のフォームを備えた注文のテーブルや、月間合計を集計するグラフを表示する場合、これらすべてが
1 つのコンテナ内に収められます。それぞれを個別のコンポーネントにすることもできますが、ダッシュボードの注文用
コンテナにまとめられます。

### コンポーネント

`📂 components` フォルダは React で再利用可能な _components_ 向けのフォルダであり、通常は他のコンポーネントや
コンテナに組み込むのに役立つ、非常に特定的な機能を実装します。

典型的にはよりシンプルな振る舞いを持ち、特定の範囲に対してその目的に非常に焦点を当てており、複数のコンテナや
他のコンポーネントで再利用されることを目的としています。

コンポーネントの例としては、特定のテーブル、フォーム、ある種のグラフなどが挙げられます。

### スタイル

`📂 styles` フォルダは、典型的にはアプリケーションのさまざまなコンテナのグローバルスタイルに使用されます。
この分野には強い標準があるわけではありませんが、`component` や `container` に固有のスタイルは、そのすぐそば、
つまりそれぞれのコンポーネントのフォルダ内に配置して整理することを推奨します。
 
## Vite
 
アプリケーションの UI を含む最終的な JavaScript コードのバージョンが生成され、コンパイルおよび最適化されて、
ブラウザーによって処理および使用されます。そのためには、React/JSX でコーディングされたフロントエンドコードの
コンパイルを実行する必要があります。

このコンパイルは [Vite](https://vite.dev/) によって行われ、その設定やその他の手順は次のファイルに記載されています:

- `vite.config.js`

これは `📂 ui` フォルダのルートにあります。

## パッケージマネージャー

`package.json` ファイルは依存モジュールのマネージャーによって使用されます。フロントエンドに必要なすべての
依存関係をインストールするには [Bun](https://bun.sh) の使用を推奨します。

また、実行コマンドも [Bun](https://bun.sh) を使用しており、これも重要な推奨事項です。

したがって、[Bun](https://bun.sh) のインストールを推奨します。

## 手順

`README.md` ファイルにはインストールと実行の手順が記載されています。

依存関係をインストールするには、次を実行します:

- `bun install`

そして開発用のフロントエンドコードのコンパイルを実行するには:

- `bun run watch`

あるいは、本番用に最適化された最終的かつ決定的なコンパイルの場合は:

- `bun run build`

デフォルトでは、コンパイルによって次のファイルが作成されます:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

これらのファイルは Netuno の処理に統合され、ダッシュボードや特定の機能など、アプリケーションのバックオフィス
ページに対して適切なオーダーメイドのカスタマイズを行います。