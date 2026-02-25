---
id: pages
title: Pages and React Router
sidebar_label: Pages & React Router
---

## Introduction

Creating pages is a common need when the web application becomes complex or there is a need to present
different content, this is especially common when it comes to a website or a platform.

In development with React, it is possible to create the navigation mechanism between pages with [React Router](https://reactrouter.com).

The steps below must be executed within your frontend project in React.

If it is a frontend integrated with Netuno, you must then perform the steps below within the Netuno application folder but
where you have the frontend project, for example in:

- `📂 website/`

## Installation

Make sure you have the React Router module installed in your project:

```
bun install react-router
```

And Ant.Design, which will be used to create the general structure:

```
bun install antd
```

## Configuration

To begin, we must edit the `main.jsx` found in the `📂 src` folder, we need to place the `BrowserRoute` like this:

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

**Very important:** If this is a newly created frontend, you must remove all types of CSS/Style and unnecessary imports
such as images, to avoid improper behavior.

In `App.js`, which is also found in the `📂 src` folder, add the module import as follows:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

After importing, add the constants:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

In this initial phase, the App component's return may be as follows:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
        <Header>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/info">Info</Link>
                </Menu.Item>
            </Menu>
        </Header>
        <Content>
            <Routes>
                { /* The pages routes will be here! */ }
            </Routes>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  );
  ...
```

This way, React Router components are structured with Ant.Design page structure components.

## Create Pages

Pages are in separate components, each page is represented by its own component in React.

A good practice is to place the page components inside a folder called `📂 pages`.

### Home

Create the entry page, which will be the `Home` component and will be associated with the `/` path.

The component file for this page will be:

- `pages/Home/index.jsx`

The code for this file can be:

```jsx title="src/pages/Home/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={()=> navigate('/info')}>
        Go to the Information page
      </Button>
    </div>
  );
};

export default Home;
```

> The button changes the page programmatically using the `navigate` function, it is an alternative to the `Link` component.

### Info

Create an example content page, which will be the `Info` component and will be associated with the `/info` path.

The component file for this page will be:

- `pages/Info/index.jsx`

The code for this file can be:

```jsx title="src/pages/Info/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Info() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Info</h1>
            <Button onClick={()=> navigate('/')}>
                Back to Home
            </Button>
        </div>
    );
}

export default Info;
```

> The button changes the page programmatically using the `navigate` function, it is an alternative to the `Link` component.

## Import Pages

At the beginning of `App.jsx`, import the components of the pages that were created.

```jsx title="src/App.jsx"
import Home from './pages/Home';
import Info from './pages/Info';
```

With the imported pages, it is possible to relate each page to a specific address, for example `/`, `/info`, etc.

The page address can also be understood as a route, or `Route`.

Therefore, in `App.jsx` where the routes or better `Routes` are defined, you will define the address and the component of the pages as follows:

```jsx title="src/App.jsx"
  ...
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/info" element={<Info/>}/>
  </Routes>
  ...
```

> The `path` is the address and the `element` is the component of the page.

Note that in the `Menu` we have items with the `Link` that point to the addresses of the pages, therefore the `to` attribute in the `Link` indicates that it should load the corresponding `Route` that has the same value associated with the `path`.

In the browser you can directly type these addresses and the respective components, which are the pages, should appear.

## Navigation

To perform more page navigation options, you should add `Link` components to the `Menu` that point to the respective address.

You should also add `Route` components that associate the address with the corresponding page component.

With the `navigate` function, you can programmatically change pages, for example in these situations:

1. On the login page, after the data has been successfully validated, the page should change automatically.
2. After registering an account, when the data has been successfully saved, the page should automatically change to the login page.

When the user interacts directly with the navigation by clicking, then we use the `Link` component.

For other cases where the page change occurs at a specific moment during the code execution, then we use the `navigate` function obtained with `useNavigate`.

## Conclusion

With ReactJS, it is possible to define multiple pages and navigate between them.

Ant.Design helps you build the page structure and offers several useful components for building complex and responsive interfaces.
