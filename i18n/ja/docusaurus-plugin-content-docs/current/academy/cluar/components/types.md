---
sidebar_position: 2
id: types
title: コンポーネントタイプ
sidebar_label: コンポーネントタイプ
---

## 概要

各[コンポーネント](/docs/academy/cluar/components/overview)には**タイプ**フィールドがあり、レンダリングに使用する視覚的バリアントを定義します。このフィールドはデータベースに保存された固定リストではなく、`website/src/components/<コンポーネント>/` 内に存在するフォルダから構築される**動的**なものです。例えば Banner の場合：

```
website/src/components/Banner/
├── index.jsx           # 「ルーター」コンポーネント: レンダリングするタイプを選択する
├── Default/
│   ├── index.jsx        # バリアントそのもの
│   ├── index.less
│   ├── info.json        # タイプの名前/説明、言語ごと
│   └── config.json       # タイプの機能（例：アクションをサポートするか）
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

`Banner/` 内の各フォルダは、そのコンポーネントの編集フォームの**タイプ**フィールドで選択可能な**タイプ**です（例：ページに Banner を追加または編集する際、利用可能なタイプのセレクトが表示されるのはこのフォームです）。

セレクトでは、人が**見る**のは `info.json` で定義された翻訳済みのラベル（例：「デフォルト」）ですが、コンポーネントの `type` フィールドに**保存される**のは**フォルダ名**（例：`Default`）です。このフォルダ名を、後で「ルーター」コンポーネントが使用して、どのバリアントをレンダリングするかを選択します（下記の [`info.json` と `config.json`](#infojson-と-configjson) を参照）。

> `DefaultSubBanner` のようなフォルダの「Sub」という名前は、別のタイプ内に入れ子になったサブフォルダを示すものではありません。これは単に別のタイプであり、他のタイプと同じ階層にありますが、基本タイプのより控えめな/二次的なバリアントであることを示す命名規則を持っているだけです。

### `info.json` と `config.json`

- **`info.json`** — タイプのラベルと説明を言語ごとに定義します。編集フォームのセレクトに表示されるのはこのラベル（`label`）です：
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "ja": { "label": "デフォルト", "description": "バナーを追加します。" }
  }
  ```
- **`config.json`** — タイプの機能を定義します。現在、唯一のパラメータは `action` で、フォームにアクションセクションを表示するか、そのタイプでレンダリングするかを制御します：
  ```json
  { "action": true }
  ```

これら2つのファイルは、サーバー上のサービス（`server/services/components/<コンポーネント>/list/`）によってリアルタイムで読み込まれます。このサービスは `website/src/components/<コンポーネント>/` 内のフォルダを走査して利用可能なタイプのリストを返し、それがそのコンポーネントの編集フォームのタイプセレクトを支えています。そのため、**新しいタイプを追加するのにサーバーを再起動したりデータベースを変更したりする必要はありません**。フォルダを作成するだけで十分です。

「ルーター」コンポーネント（`Banner/index.jsx`）では、保存された `type` を使用して、どのバリアントをインポートしてレンダリングするかを決定します：

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## 新しいタイプを作成する方法

1. `website/src/components/<コンポーネント>/` 内に新しいフォルダを作成します（例：`Banner/Highlight/`）。
2. その中に `index.jsx`（バリアントの React コンポーネント）、`index.less`（スタイル）、`info.json`（言語ごとのラベル/説明）、`config.json`（`action: true` または `false`）を作成します。
3. 親コンポーネントの `index.jsx`（例：`Banner/index.jsx`）で、新しいコンポーネントをインポートし、`type` によってバリアントを選択する条件に追加します。
4. 新しいタイプは、そのコンポーネントの編集フォームのタイプセレクトに自動的に表示され、フォルダ名が保存値として使用されます。

## 次のステップ

各コンポーネントの詳細を見てみましょう：[Banner](/docs/academy/cluar/components/banner)、[Conteúdo](/docs/academy/cluar/components/content)、[Listagem](/docs/academy/cluar/components/listing)、[Slider](/docs/academy/cluar/components/slider)、[Funcionalidade](/docs/academy/cluar/components/functionality)。