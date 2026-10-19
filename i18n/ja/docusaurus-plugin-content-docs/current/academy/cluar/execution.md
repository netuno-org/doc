---
sidebar_position: 4
id: execution
title: 実行
sidebar_label: 実行
---

プロジェクトのインストールと設定が完了したら、次は実行です。

## サーバーの起動

Netuno のルートディレクトリで、次を実行します:

```
./netuno server app=cluar
```

これにより、バックエンドとフロントエンドが同時に起動します。

> 初回実行時は、フロントエンドの依存関係のインストールのため、時間がかかることがあります。

デフォルトでは:

- Netuno のバックオフィスは [http://localhost:9000/](http://localhost:9000/) で利用できます
- サービスの OpenAPI は [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi) にあります

## ウェブサイトの起動

ウェブサイトを手動で起動するには:

```
cd website
bun run dev
```

デフォルトでは、ウェブサイトは [http://localhost:3000/](http://localhost:3000/) で利用できます

> `config/_development.json` で該当するコマンドを有効にすることで、Netuno サーバーと一緒にウェブサイトを自動的に起動させることもできます — [設定](/docs/academy/cluar/configuration#7-ウェブサイトの自動起動任意)を参照してください。

## トラブルシューティング

### `bun run dev` 実行時の GLIBC バージョンエラー

ウェブサイトの起動時に次のようなエラーが表示された場合:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

これはメッセージに記載されている npm のオプション依存関係のバグではなく、**GLIBC のバージョン非互換**によるものです。Rollup のネイティブバイナリは `GLIBC_2.32` 以降を要求してコンパイルされており、より古い Linux ディストリビューション（例えば glibc 2.31 を搭載した Ubuntu 20.04）では利用できません。

解決するには、ウェブサイトの `package.json` のルートに `overrides` フィールドを追加し、Rollup にネイティブ版ではなく WASM 版を使用させます:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

次に、依存関係を再インストールします:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## 次のステップ

プロジェクトが動作したら、[言語](/docs/academy/cluar/languages)または[ページモデル](/docs/academy/cluar/pages/overview)を参照してください。