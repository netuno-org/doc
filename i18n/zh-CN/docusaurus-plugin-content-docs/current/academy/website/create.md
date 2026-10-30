---
sidebar_position: 2
id: create
title: 使用 React 创建
sidebar_label: 使用 React 创建
---

本创建流程也可应用于其他场景，例如创建任意类型的 React 项目，此时只需对名称以及执行命令的文件夹做相应调整即可。

基本的理解是，这里将创建 Web 层，也就是我们 Netuno 应用的前端。

因此，这里假定会在 Netuno 应用内创建 `website`，这是前端层的默认名称，但也可以使用任何其他想要的名称。

## 前置条件

必须已安装 Netuno：

- [Netuno 安装。](/docs/get-started/installation)

为了获得更好的性能以及其他优势，应当安装 Bun：

- [安装 Bun。](/docs/academy/website/bun)

## 创建

要在 Netuno 应用内创建 React 应用，通常我们称之为 `website`。

因此，在 **终端** 中进入你的 Netuno **应用根目录**，它通常位于以下文件夹：

- `netuno/apps/MY_APP`

> 其中 `MY_APP` 是 Netuno 应用的名称。

执行命令：

```shell
bun create vite
```

随后出现提问：`Project name:`

输入 `website` 并按 `ENTER` 键。

接着出现提问：`Select a framework:`

使用键盘方向键，按向下键直到选中 `React` 选项，然后按 `ENTER` 键。

最后，出现如下提问：`Select a variant:`

使用键盘方向键，按向下键直到选中 `JavaScript` 选项，然后按 `ENTER` 键。

该命令将创建一个名为 `📂 website` 的新目录，其中包含使用 React 的前端。

创建 React 前端之后，按以下方式执行以安装依赖：

```shell
cd website
bun install
```

在你喜欢的编辑器（如 VSCode、WebStorm 等）中打开你的 Netuno 应用文件夹，然后进入已创建的 `website` 文件夹。

## 运行

现在可以使用以下命令启动 React 前端服务器：

```shell
bun run dev
```

这将使前端可通过地址 [http://localhost:5173/](http://localhost:5173/) 访问；通常终端中也可能出现其他端口号的地址，无论如何，只需在浏览器中打开终端中显示的地址即可。

> 要终止终端中的执行，请同时按下 `CTRL` 和 `C` 键。

## 安装依赖

如果你正在终端中运行前端服务器，也就是 `bun run dev`，建议先停止它，同时按下 `CTRL` 和 `C` 键。

我们强烈建议你安装以下 NPM 包，因为它们对于使用 Netuno 开发 React 应用非常有用（点击每个链接可获取有关每个包的更多信息）：

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

要安装上述列出的包，只需在终端中执行以下命令集合：

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

或者，也可以一次性安装所有包：

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## 配置

执行上述命令后，可以强制指定默认端口地址，转到 `📂 website/vite.config.js` 并按如下方式添加 `server` 配置：

```javascript title="website/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

现在使用 `bun run dev` 命令启动时将始终使用 `3000` 端口。

### Less

将 `website/src` 中所有 `.css` 文件的扩展名改为 `.less`。

> 不要忘记在 JSX 代码中修改那些 `import` `.css` 文件的行，改为 `.less`。

LESS 允许以更有结构、更现代的方式开发 CSS。

### 自定义 Ant.Design 主题

要自定义 Ant.Design 的颜色，请在 `App.jsx` 中使用 `ConfigProvider` 组件。

例如：

```jsx title="website/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">我的自定义颜色按钮</Button>
            ...
        </ConfigProvider>
    );
}
...
```

这样就可以调整 Ant.Design 的任何样式配置。

### 深色主题

也可以使用 Ant.Design 的深色主题，只需导入包含深色模式的 `theme` 并应用到 `ConfigProvider` 中：

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">我的自定义颜色按钮</Button>
        ...
    </ConfigProvider>
...
```

### 重新设置样式

请注意，在上述 `ConfigProvider` 的参数设置中，可以轻松更改 Ant.Design 的样式，更多关于 Ant.Design 自定义的内容：

- [自定义主题](https://ant.design/docs/react/customize-theme)

Ant.Design 的每个组件都有可用的 Design Token 配置，例如按钮：

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">我的自定义颜色按钮</Button>
    ...
</ConfigProvider>
```

## 前端随 Netuno 自动启动

Netuno 允许你随 Netuno 应用的服务器进程一起启动 React 应用。

> React 应用的所有编译消息都将集成到与 Netuno 应用相同的终端中。

为此，只需在 `📂 config/_development.json` 中 Netuno 应用的 `commands` 配置里添加以下内容：

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> 每次编辑 Netuno 应用的配置文件后，都需要重启服务器，以便应用新的更改。

最后，启动/重启带有你的 Netuno 应用的服务器，以验证其是否正常工作。

现在一切都将集成在一个集中式终端中，从而避免出现多个分散的终端，更多内容：

- [集中式终端](/docs/academy/explore/centralized-terminal)

## CORS（跨源资源共享）配置

要配置 CORS 并避免前端与 Netuno 应用服务之间通信可能出现的错误，请编辑应用的配置：

- `📂 config/_development.json`

请检查是否已存在 `cors` 配置，如果 `origins` 中是 `*`，那么它就非常适合用于开发环境，可以保持原样。

如果没有 `cors` 配置，则参照以下示例添加，其中的地址应与前端地址相同：

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> 如果 `origins` 中包含 `*`，则表示支持任何前端地址，例如：
> - `"origins": [ "*" ]`
> 通常在开发环境中我们使用 `*`。

配置实现之后，你就可以将所需的 API 服务与前端集成，而不会出现 CORS 安全问题。

> 更多关于 [CORS](/docs/academy/server/services/cors)

## 环境变量

可以通过创建 `website/.env` 文件并定义变量来配置环境变量，例如：

```
NODE_ENV=development
```

或者通过 Netuno 应用的配置，例如在：

- `📂 config/_development.json`

中，并在命令配置的 `env` 参数中定义环境变量，例如：

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "website",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```