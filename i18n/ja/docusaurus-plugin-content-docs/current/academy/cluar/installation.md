---
sidebar_position: 2
id: install
title: インストール
sidebar_label: インストール
---

## 要件

CLUARをインストールする前に、以下が必要です：

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) がインストールされていること。
2. [Bun](https://bun.sh/docs/installation) がインストールされていること。

## プロジェクトをクローンする

CLUARはNetunoアプリなので、Netunoのインストール内の `apps` フォルダにクローンする必要があります：

```
[Netunoのルートディレクトリ]/apps
```

次のコマンドを使用します：

```
git clone https://github.com/netuno-org/cluar.git
```

## ウェブサイトをインストールする（Bunを使用）

`website` フォルダ内で：

```
cd website
```

Bunのインストールコマンドを実行します：

```
bun install
```

ESBUILDの信頼されていないスクリプトの実行を許可する必要があります：

```
bun pm trust --all
```

ウェブサイトのインストールをやり直す必要がある場合は、`node_modules` フォルダとロックファイルを削除して、再度インストールしてください：

```
rm -rf node_modules
bun install
bun pm trust --all
```

## 次のステップ

コードと依存関係がインストールされたら、[設定](/docs/academy/cluar/configuration) に進んでください。