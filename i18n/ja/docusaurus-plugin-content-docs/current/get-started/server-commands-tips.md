---
sidebar_position: 2
id: server-commands-tips
title: サーバー、コマンド＆ヒント
sidebar_label: サーバー、コマンド＆ヒント
---

# サーバーコマンド

Netuno の主要コマンドのリファレンスです。Netuno がインストールされているフォルダから、**ターミナル**で実行してください。

:::tip
Netuno のフォルダへの移動方法がわからない場合は、[インストール](/docs/get-started/installation)ガイドを参照してください。
:::

---

## サーバーを起動する

`デモ` アプリケーションでサーバーを起動します。

```bash
./netuno server
```

---

## アプリでサーバーを起動する

パラメータ `app` で指定された特定のアプリケーションでサーバーを起動します。何も指定されていない場合は、デモアプリケーションが起動されます。

```bash
./netuno server app=APP_NAME
```

---

## 新しいアプリケーション

初期情報と設定を入力して、新しいアプリケーションをゼロから作成します。

```bash
./netuno app
```

---

## コマンドを一覧表示する

利用可能なすべてのコマンドとパラメータ設定を、それぞれの説明とともに一覧表示します。

```bash
./netuno help
```

---

## パフォーマンス統計

`logs/stats-*` に保存されている最新のパフォーマンス情報を表示します。

```bash
./netuno stats
```

---

## 安定版へのアップデート

Netuno を最新の安定版に更新します。

```bash
./install-stable
```

---

## テスト版へのアップデート

Netuno を開発中の最新版に更新します。

```bash
./install-testing
```