---
sidebar_position: 1
id: folders-overview
title: フォルダの概要
sidebar_label: 概要
---

アプリケーションのフォルダとファイルについて確認し、理解しましょう。

## 構造

Netuno がインストールされているルートから、`📂 apps` フォルダがあります。

`📂 apps` フォルダ内には、Netuno プラットフォームで利用可能なすべてのアプリケーションが格納されています。

アプリケーションにはローカルで作成できるものと、GIT リポジトリのクローンなど外部のものがあります。

Netuno のルートから、新しく作成されたアプリケーションの完全な構造を見てみましょう:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>my_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> `apps` フォルダには、Netuno で利用可能なすべてのアプリケーションが含まれています。

このフォルダには最初から `demo` アプリケーションがあり、その名前が示すとおり Netuno の機能の**デモ**ンストレーションです。

新しいアプリケーションを作成すると、上記と同じサブフォルダ階層を持つ新しいフォルダが追加されます。

## 主要フォルダ

アプリケーションのフォルダ内には主要なフォルダがあり、それぞれに特定の目的があります。

主要なフォルダは次のとおりです:

- [📂 config](config) - 一般的な設定;
- [📂 dbs](dbs) - データベースに関連するもの;
- [📂 docs](docs) - ドキュメントやその他の文書全般;
- [📂 public](public) - 画像、JavaScript、CSS など、URL から直接アクセスできる公開コンテンツ;
- [📂 server](server) - サービス、ジョブ、テンプレート、レポート、および一般的な API 全体などのバックエンドコード。
- [📂 storage](storage) - データに関連するファイルやコードで使用されるファイルの整理。
- [📂 ui](ui) - バックオフィスのユーザーインターフェース、ダッシュボードやその他の機能などのフロントエンドコード。