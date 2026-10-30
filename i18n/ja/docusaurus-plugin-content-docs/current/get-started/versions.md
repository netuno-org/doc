---
sidebar_position: 4
id: versions
title: バージョン
sidebar_label: バージョン
---


# バージョン

Netuno を使い始める場合は、プラットフォームの最新の安定版を使用するために **標準インストール** を実行することをおすすめします。

Netuno では、特定の以前のバージョンや、まだ開発中の実験的バージョンをインストールすることもできます。これはテスト環境やバグの再現に役立ちます。

特定のバージョンをインストールまたは更新する前に、公式のリリース一覧を確認してください：

- **バージョン一覧:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip ヒント
特定のバージョンをインストールする前に、特に本番環境ではリリースノートを確認してください。
:::

## 特定のバージョンのインストール

Netuno を特定のバージョンにインストールまたは更新するには、インストールコマンドに `version` パラメータと目的のバージョン識別子を追加します。

環境に最適な方法を選択してください：

### 方法 1: Java インストーラー

新規インストールにはこの方法を使用します：

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### 方法 2: メイン実行プログラム

Netuno がすでにインストールされていて、特定のバージョンに更新したい場合はこの方法を使用します：

```bash
./netuno install version=20230417.0119
```

### 方法 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
`20230417.0119` を、**[リリース一覧](https://github.com/netuno-org/platform/releases)** で確認できる目的のバージョン識別子に置き換えてください。

コマンドを実行すると、Netuno は指定されたバージョンのインストールプロセスを自動的に開始します。
:::