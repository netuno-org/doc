---
sidebar_position: 11
id: templates
title: テンプレート
sidebar_label: テンプレート
---

ページ全体のレイアウトがどのように定義されるか、そして新しいテンプレートを作成する方法について説明します。

## はじめに

**テンプレート**は[ページ](/docs/academy/cluar/pages/overview)の全体的なレイアウトを定義します。これはページの `template` フィールドの値であり、`website/src/pages/Template/` 内のフォルダに対応します。

:::info コンポーネントタイプの仕組みの由来
[コンポーネントタイプ](/docs/academy/cluar/components/types)の仕組み（動的フォルダ + `info.json`）は、このテンプレートの仕組みに着想を得たもので、テンプレートの方が先にこの方式で動作していました。構造はほぼ同じですが、コンテンツブロックではなくページ全体に適用されます。
:::

## 仕組み

```
website/src/pages/Template/
├── index.jsx        # ルーター: レンダリングするテンプレートを選択
└── Default/
    ├── index.jsx      # テンプレート本体
    ├── index.less
    └── info.json       # テンプレートの名前/説明（言語別）
```

`Template/` 内の各フォルダは、ページ編集フォームの **テンプレート** フィールドで選択できるテンプレートです。フォルダ名（`Default`）がページの `template` フィールドに保存される値です。

たとえば、デフォルトテンプレートの `info.json` は次のとおりです。

```json
{
  "en": { "label": "デフォルト", "description": "汎用的なスタイルを使用するページ向け。" },
  "pt": { "label": "デフォルト", "description": "汎用スタイルを使用するページ向け。" }
}
```

:::info セレクトには `info.json` の翻訳済みラベルが使用されます
コンポーネントタイプと同様に、ページフォームのテンプレートのセレクトには `info.json` の翻訳済みラベル（`label`）が表示されます。そのため、サービスへのリクエストでは現在の言語（`Cluar.currentLanguage().locale`）を送信します。ページの `template` フィールドに保存されるのは、引き続きフォルダ名（`Default`）です。
:::

サーバー上にも、フォルダをリアルタイムで走査し、利用可能なテンプレートの一覧を返すサービス（`server/services/page/template/list/`）があります。理由は同じです。**新しいテンプレートを追加するのにサーバーの再起動は不要**で、フォルダを作成するだけです。

コンポーネントタイプとの違いとして、テンプレートには `config.json` がありません。現時点ではテンプレートごとに設定可能な機能はなく、`index.jsx` と `info.json` のみです。

## デフォルトテンプレート

**デフォルト**テンプレート（`Default`）は、ほとんどのページが使用するものです。サイトのヘッダーとフッター（`BaseHeader` / `BaseFooter`）でページのコンテンツを囲み、その内側に `Builder` を配置します。`Builder` は、各コンポーネントの「順序」フィールドで定義された順序に従って、ページのコンポーネント（バナー、コンテンツ、一覧、スライダー、機能）を実際に走査してレンダリングするコンポーネントです。

:::info テンプレートが認識されないページ
ページの `template` フィールドが既存のフォルダに対応していない場合（例: 名前の綴りが間違っている、またはフォルダが削除されている）、CLUAR は**失敗せず、デフォルトを代替として使用することもありません**。代わりに、サイトのヘッダーもフッターも付けずに、`Builder` のみを“そのまま”レンダリングします。これは、認識されないタイプがデフォルトタイプにフォールバックするコンポーネントタイプとは異なる動作です。
:::

これを決定するのはルーター（`Template/index.jsx`）です。

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

明示的な判定は1つだけ（`"Default"`）であることに注意してください。`template` の他の値は、認識されているかどうかに関係なく、直接 `else` に進み、`Builder` のみをレンダリングします。

## 新しいテンプレートの作成方法

1. `website/src/pages/Template/` 内に新しいフォルダを作成します（例: `Template/ランディング/`）。
2. その中に `index.jsx`（テンプレートの React レイアウト）、`index.less`（スタイル）、`info.json`（言語別のラベル/説明 — セレクトに表示されるのはこのラベルです）を作成します。
3. ルーターの `index.jsx`（`Template/index.jsx`）で新しいテンプレートをインポートし、`page.template` フィールドでテンプレートを選択する条件に追加します。
4. 新しいテンプレートは、ページ編集フォームのテンプレートのセレクトに自動的に表示され、フォルダ名が保存値になります。

## 次のステップ

[権限](/docs/academy/cluar/permissions)を参照してください。