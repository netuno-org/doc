---
sidebar_position: 1
id: initialization
title: 初期化
---


# 初期化

Demoアプリケーションの初期化

このチュートリアルを開始するには、まず**Demo**アプリケーションのサーバーを起動し、開発環境を準備します。


### サーバーを起動する

OSのターミナルを開き、Netunoプラットフォームがインストールされているルートフォルダ（例: `📁 /netuno`）に移動します。

サーバーを起動するには、以下のコマンドを実行します:

```bash
./netuno server
```

:::info 起動の代替方法
メインのコマンドが機能しない場合、またはDemoアプリケーションがデフォルトで読み込まれない場合は、アプリケーションのパラメータを指定して起動を強制します:
:::

```bash
./netuno server app=demo
```

### コードエディタを選択する
アプリケーションのバックエンドとフロントエンドの両方を開発するために、お好みのコードエディタを使用できます。

まだお持ちでない場合は、以下の無料のオープンソースオプションをおすすめします:

- VS Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>


#### プロジェクトフォルダを開く
コードエディタを開いた状態で、Demoアプリケーションのディレクトリを探して開きます: `📁 apps/demo`。

このフォルダには、新しいアプリケーションのすべてのファイルと設定が含まれています。すべての開発は、このディレクトリ内でのみ行います。

### 次のステップ

サーバーが実行され、コードエディタでファイルが開かれていれば、環境の準備は完了です。チュートリアルの次のステップに進み、アプリケーションの探索と変更を開始してください。