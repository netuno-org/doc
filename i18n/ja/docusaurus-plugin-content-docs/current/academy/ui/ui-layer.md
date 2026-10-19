---
sidebar_position: 8
id: ui-layer
title: UIレイヤー
sidebar_label: UIレイヤー
---

アプリケーションのダッシュボードと一般的なインターフェースのインストールとコンパイル。

## コンテキスト

Netunoアプリケーションには、デフォルトでフロントエンド向けの高度な技術群が設定済みで、その中には[React](https://react.dev/)、[Vite](https://vite.dev/)、[Less](https://lesscss.org/)、[Ant.Design](https://ant.design/)などがあります。

アプリケーション内には `📁 ui`（_user interface_、利用インターフェース）フォルダがあり、ここでダッシュボードやその他のフロントエンドコンポーネントを開発します。

## 始める前に

前提条件である[Bun](https://bun.sh/)がインストールされていることを確認してください。詳しくは：

- [Bunのインストール](/docs/academy/website/bun)

## 依存モジュールのインストール

デフォルトで用意されているすべての依存関係をインストールするには、開発中のアプリケーション内の `📁 ui`（_user interface_）フォルダに移動します。例えば：

```shell
cd apps/my_app/ui/
```

依存モジュールのインストールコマンドを実行します：

```shell
bun install
```

> [Bun](https://bun.sh)はNPMよりも改善され最適化された代替手段です。

## 自動コンパイル

開発中のアプリケーションの `📁 ui`（_user interface_）フォルダに移動します。例えば：

```shell
cd apps/my_app/ui/
```

コードが変更されるたびにフロントエンドを自動でコンパイルするには、以下を実行します：

```shell
bun run watch
```

> [Bun](https://bun.sh/)がインストールされていることを確認してください。
 
## フロントエンドとNetunoの自動統合

Netunoでは、Netunoアプリケーションのサーバープロセスと一緒にUIを起動できます。

> Reactのコンパイルメッセージはすべて、Netunoアプリケーションと同じターミナルに統合されます。

そのためには、Netunoアプリケーションの `📂 config/_development.json` にある `commands` の設定を有効にするだけです。つまり、`ui` の `path` を持つ `command` で `enabled` を `true` にします：

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Netunoアプリケーションの設定ファイルを編集するたびに、新しい変更を反映させるためにサーバーを再起動する必要があります。

最後に、Netunoアプリケーションでサーバーを起動／再起動して動作を確認してください。

これで、すべてが1つの集中ターミナルに統合され、複数のターミナルが散らばることを避けられます。詳しくは：

- [集中ターミナル](/docs/academy/explore/centralized-terminal)

## その他のフロントエンド技術

`📁 ui` フォルダ内では、任意のフロントエンド技術を設定したり、必要に応じて新しい依存モジュールを追加したりできます。

標準の技術のいずれかを使用したくない場合は、特に以下のファイルを適応させることで、他の任意の技術に置き換えられます：

- `package.json`
- `vite.config.js`