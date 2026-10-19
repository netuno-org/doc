---
sidebar_position: 1
id: overview
title: 概要
sidebar_label: 概要
---

**コンポーネント**は、[バージョン](/docs/academy/cluar/pages/versions-publishing)内の[ページ](/docs/academy/cluar/pages/overview)を構成するコンテンツブロックです。5つのタイプがあります：

- **バナー**
- **コンテンツ**
- **リスト**（アイテム付き）
- **スライダー**（アイテム付き）
- **機能**

それぞれに独自のエンティティ（`page_banner`、`page_content`、`page_listing`、`page_slider`、`page_functionality`）、バックオフィス用の独自フォーム、ウェブサイト用の独自 React コンポーネントがあります。

## 共通フィールド

各コンポーネントには独自のフィールドがありますが、ほとんどは似た共通基盤を共有しています：

| フィールド | 説明 |
|---|---|
| **タイプ** (`type`) | このコンポーネントのレンダリングに使用するビジュアルバリアントを定義します — [コンポーネントタイプ](/docs/academy/cluar/components/types) を参照してください。 |
| **順序** (`sorter`) | ページ内でのコンポーネントの位置。 |
| **編集モード** (`edit_mode`) | コンテンツ (`content`) がプレーンテキストか HTML (`html_content`) かを定義します。 |
| **タイトル / コンテンツの背景を反転** (`title_invert_background`, `content_invert_background`) | タイトル/コンテンツのテキスト**エディター**のカラースキーム（ライト/ダーク）を反転します — 暗い背景（例：バナー内の暗い画像）の上に表示されるテキストを書くときに、編集中にコントラストのあるテキストを確認できるので便利です。ページに公開済みのコンテンツの色は変更しません。 |
| **アクション** | コンポーネントに関連付けられたボタン/リンク — [アクション](/docs/academy/cluar/actions) を参照してください。すべてのタイプがアクションをサポートしているわけではありません — [コンポーネントタイプ](/docs/academy/cluar/components/types) を参照してください。 |

## 次のステップ

すべてのコンポーネントは同じ動的タイプの仕組みを使用しています — [コンポーネントタイプ](/docs/academy/cluar/components/types) を参照してください。次に、各コンポーネントを詳しく確認しましょう：[バナー](/docs/academy/cluar/components/banner)、[コンテンツ](/docs/academy/cluar/components/content)、[リスト](/docs/academy/cluar/components/listing)、[スライダー](/docs/academy/cluar/components/slider)、[機能](/docs/academy/cluar/components/functionality)。