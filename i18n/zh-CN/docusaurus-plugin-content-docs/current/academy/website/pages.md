---
sidebar_position: 3
id: pages
title: 页面与 React Router
sidebar_label: 页面与 React Router
---

## 介绍

当 Web 应用变得复杂，或者需要呈现不同的内容时，创建页面是一种常见的需求，这在网站或平台类项目中尤为常见。

在使用 React 进行开发时，可以通过 [React Router](https://reactrouter.com) 创建页面之间的导航机制。

以下步骤应当在你的 React 前端项目中执行。

如果是与 Netuno 集成的前端，那么应当在 Netuno 应用目录中包含前端项目的位置执行以下步骤，例如：

- `📂 website/`

## 安装

请确认你的项目中已安装 React Router 模块：

```
bun install react-router
```

以及 Ant.Design，它将用于构建整体结构：

```
bun install antd
```

## 配置

首先我们需要编辑位于 `📂 src` 目录中的 `main.jsx`，需要按如下方式引入 `BrowserRouter`：

```javascript title="src/main.jsx"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

**非常重要：** 如果是刚创建的前端项目，应当移除各类 CSS/Style 以及不必要的导入（例如图片导入），以避免出现异常行为。

在同样位于 `📂 src` 目录中的 `App.js` 中，按如下方式添加模块导入：

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

在导入之后添加常量：

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

在这个初始阶段，App 组件的返回值可以如下：

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/info">信息</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* 页面路由将写在这里！ */ }
        </Routes>
      </Content>
      <Footer>页脚</Footer>
    </Layout>
  );
  ...
```

这样 React Router 的组件就与 Ant.Design 的页面结构组件组合在了一起。

## 创建页面

页面存放在独立的组件中，每个页面由各自独立的 React 组件表示。

一个良好的实践是将页面组件放在名为 `📂 pages` 的目录中。

### 首页

创建入口页面，即 `Home` 组件，它关联到 `/` 路径。

该页面组件的文件为：

- `pages/Home/index.jsx`

该文件的代码可以如下：

```jsx title="src/pages/Home/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>首页</h1>
      <Button onClick={()=> navigate('/info')}>
        前往信息页面
      </Button>
    </div>
  );
};

export default Home;
```

> 按钮通过 `navigate` 函数以编程方式切换页面，它是 `Link` 组件的一种替代方式。

### 信息

创建一个示例内容页面，即 `Info` 组件，它关联到 `/info` 路径。

该页面组件的文件为：

- `pages/Info/index.jsx`

该文件的代码可以如下：

```jsx title="src/pages/Info/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Info() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>信息</h1>
      <Button onClick={()=> navigate('/')}>
        返回首页
      </Button>
    </div>
  );
}

export default Info;
```

> 按钮通过 `navigate` 函数以编程方式切换页面，它是 `Link` 组件的一种替代方式。

## 导入页面

在 `App.jsx` 的开头导入已创建的页面组件。

```jsx title="src/App.jsx"
import Home from './pages/Home';
import Info from './pages/Info';
```

导入页面后，就可以将每个页面与特定地址关联起来，例如 `/`、`/info` 等。

页面的地址也可以理解为一个路由，即 `Route`。

因此在 `App.jsx` 中定义路由（更确切地说是 `Routes`）的地方，按如下方式定义页面地址和组件：

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
    ...
```

> `path` 是地址，`element` 是页面组件。

请注意，在 `Menu` 中我们有带 `Link` 的菜单项，它们指向页面的地址，因此 `Link` 中的 `to` 属性表示应加载与 `path` 中相同值相关联的 `Route`。

在浏览器中可以直接输入这些地址，对应的组件（即页面）应当会显示出来。

## 导航

若要实现更多页面导航选项，应当往 `Menu` 中添加指向相应地址的 `Link` 类型组件。

同时还应添加 `Route` 组件，将地址与对应的页面组件关联起来。

通过 `navigate` 函数可以以编程方式切换页面，例如在以下场景中：

1. 在登录页面中，数据校验成功之后应当自动进行页面切换。
2. 在注册账号后，数据成功保存之后应当自动跳转到登录页面。

当用户通过点击直接进行导航交互时，我们使用 `Link` 组件。

对于页面切换发生在代码执行中某个特定时刻的其他情况，我们使用通过 `useNavigate` 获取的 `navigate` 函数。

## 结论

借助 React Router，ReactJS 可以定义多个页面并在它们之间进行导航。

Ant.Design 有助于构建页面结构，并提供多种实用组件来构建复杂的、具有响应式能力的界面。