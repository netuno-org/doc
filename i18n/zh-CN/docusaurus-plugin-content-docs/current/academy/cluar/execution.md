---
sidebar_position: 4
id: execution
title: 执行
sidebar_label: 执行
---

项目已经安装并配置完成，现在该运行它了。

## 启动服务器

在 Netuno 的根目录中，执行：

```
./netuno server app=cluar
```

这会同时启动后端和前端。

> 首次执行可能耗时更久，因为需要安装前端的依赖。

默认情况下：

- Netuno 的后台管理界面可通过 [http://localhost:9000/](http://localhost:9000/) 访问
- 服务的 OpenAPI 位于 [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## 启动网站

如需手动启动网站：

```
cd website
bun run dev
```

默认情况下，网站可通过 [http://localhost:3000/](http://localhost:3000/) 访问

> 可以通过在 `config/_development.json` 中启用相应的命令，让网站在 Netuno 服务器启动时自动启动 —— 参见[配置](/docs/academy/cluar/configuration#7-网站自动启动可选)。

## 问题排查

### 运行 `bun run dev` 时出现 GLIBC 版本错误

如果在启动网站时出现类似下面的错误：

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

这并不是消息中提到的 npm 可选依赖 bug，而是 **GLIBC 版本不兼容**：Rollup 的原生二进制文件在编译时要求 `GLIBC_2.32` 或更高版本，而较旧的 Linux 发行版（例如 Ubuntu 20.04，自带 glibc 2.31）并没有提供它。

要解决这个问题，请强制 Rollup 使用 WASM 版本而不是原生版本，在网站的 `package.json` 根层级添加一个 `overrides` 字段：

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

接着，重新安装依赖：

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## 下一步

项目运行起来之后，可以探索[语言](/docs/academy/cluar/languages)或[页面模型](/docs/academy/cluar/pages/overview)。