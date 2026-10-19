---
sidebar_position: 1
id: overview
title: 概要
sidebar_label: 概要
---

CLUARは、多言語ウェブサイトを構築するための、[Netuno](https://www.netuno.org/)上に構築されたオープンソースCMSです。ページの視覚的コンポーネント（バナー、一覧、スライダーなど）はReactJSで開発され、インターフェースには[Ant Design](https://ant.design/)、ナビゲーションには[React Router](https://reactrouter.com/)、スタイルには[Less](https://lesscss.org/)を使用します。一方、コンテンツ（ページ、テキスト、画像、言語、メニュー）はバックオフィスを通じて管理でき、プログラミングは不要です。

コードは[GitHub上のCLUARリポジトリ](https://github.com/netuno-org/cluar)で公開されています。コントリビューションを歓迎します。

## コンテンツモデル

CLUARのコンテンツは **ページ → バージョン → コンポーネント** という構造に従います。

- 各**ページ**はサイトのURL（`link`）を表し、タイトル、メニュー、SEOなどを備えます。
- 各ページには1つ以上の**バージョン**があり、公開済みの内容に影響を与えずに下書きで作業できます。
- 各バージョンの中にコンテンツの**コンポーネント** — バナー、コンテンツ、一覧、スライダー、機能 — が入ります。これらは実際にページに表示されるブロックで、それぞれに表示タイプがあり、必要に応じてアクション（ボタン/リンク）を関連付けられます。

## プロジェクト構成

プロジェクトは4つの部分に分かれています。

- **`server`** — Netunoアプリケーション: データエンティティ、RESTサービス、初期設定スクリプト（`setup`）。
- **`website`** — REST経由でデータを取得し、ページをレンダリングするReactJSのサイト。
- **`ui`** — CLUAR固有のNetunoバックオフィス拡張。
- **`config`** — 環境設定（データベース、認証、一般設定）。

## 次のステップ

- [インストール](/docs/academy/cluar/install)
- [設定](/docs/academy/cluar/configuration)
- [コンポーネント](/docs/academy/cluar/components/overview)
- [ページ](/docs/academy/cluar/pages/overview)
- [言語](/docs/academy/cluar/languages)
- [権限](/docs/academy/cluar/permissions)