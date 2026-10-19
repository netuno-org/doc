---
id: public
title: パブリック
sidebar_label: パブリック
---

URL で直接アクセスできるパブリックファイル。

## パブリックフォルダ

`📂 public` フォルダには、コンパイル後のクライアントサイド UI (User Interface) のコンテンツや、ロゴ、アイコンなどの公開ファイルが含まれます。

公開アクセスが必要な任意のファイルを配置できます。

## フォルダ構成

`📂 public` フォルダを開くと、デフォルトでは次の構成になっています:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## 画像

`📂 images` フォルダには最初からアプリケーションのロゴとアイコンが含まれています。

このフォルダには、アプリケーションの公開画像をすべて配置できます。

### icon.png

アプリケーションのアイコンで、ブラウザのタブ (favicon) に表示されます。

### logo.png

バックオフィスのログインページとエラーページに表示されるロゴ画像です。

### logo-main.png

ログインしてバックオフィスに入った後、ヘッダー (_header_) に表示されるロゴ画像です。

## スクリプト

`📂 scripts` フォルダには、UI のコンパイルによって生成された最終的な JavaScript コードが入っています。ここには、その他の公開 JavaScript ファイルを配置できます。

### ui.js

`ui.js` ファイルは、UI の最終的なコンパイル済みコードです。

通常、UI は React と LESS で開発され、最終的な JavaScript バンドルのコンパイルには [Vite](https://vite.dev/) が使用されます。その成果物が `ui.js` ファイルです。

コンパイル設定は `ui/vite.config.js` にあり、このファイルには `ui.js` がどのように処理され生成されるかの詳細が含まれています。

### ui.js.map

`ui.js.map` ファイルは UI のソースマップです。このファイルは、ブラウザの _コンソール_ でエラーをデバッグする際に、元のコードがどれであるかを示すために重要です。

## スタイル
  
`📂 styles` フォルダには、アプリケーションのスタイリングに使用される CSS ファイルを配置します。

### main.css

`main.css` は通常、グローバル CSS や Netuno のデフォルトスタイルを変更するために使用されます。

### ui.css

`ui.css` は、UI のコンパイルによって生成される CSS です。

通常、UI は React と LESS で開発され、最終的な CSS バンドルのコンパイルには [Vite](https://vite.dev/) が使用されます。その成果物が `ui.css` です。

コンパイル設定は `ui/vite.config.js` にあり、このファイルには `ui.css` がどのように生成されるかの詳細が含まれています。