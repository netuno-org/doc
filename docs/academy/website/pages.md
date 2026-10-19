---
sidebar_position: 3
id: pages
title: Pages and React Router
sidebar_label: Pages and React Router
---

## Introduction

Creating pages is a common need when the web application becomes complex or when there is a need to present
distinct content; this is especially common in the case of a website or a platform.

When developing with React, it is possible to create the page navigation mechanism with [React Router](https://reactrouter.com).

The steps below must be performed inside your React frontend project.

If it is a frontend integrated with Netuno, then you must perform the steps below inside the Netuno application folder
where the frontend project is located, for example in:

- `📂 website/`

## Installation

Make sure you have the React Router module installed in your project:

```
bun install react-router
```

And Ant.Design, which will be used to create the overall structure:

```
bun install antd
```

## Configuration

To start, we must edit `main.jsx`, which is found in the `📂 src` folder; you need to add `BrowserRoute` like this:

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

**Very important:** If it is a newly created frontend, you must remove all kinds of CSS/Style and unnecessary imports
such as images to avoid unwanted behavior.

In `App.js`, which is also found in the `📂 src` folder, add the module imports as follows:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

After the imports, add the constants:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

At this initial stage, the return of the App component can be as follows:

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
          { /* The page routes will go here! */ }
        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
  ...
```

This way, the React Router components are structured with the Ant.Design page layout components.

## Create Pages

Pages are kept in separate components; each page is represented by its own React component.

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
        Go to the Info page
      </Button>
    </div>
  );
};

export default Home;
```

> The button changes the page programmatically using the `navigate` function; it is an alternative to the `Link` component.

### Info

Create a sample content page, which will be the `Info` component and will be associated with the `/info` path.

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

> The button changes the page programmatically using the `navigate` function; it is an alternative to the `Link` component.

## Import Pages

At the beginning of `App.jsx`, import the page components that were created.

```jsx title="src/App.jsx"
import Home from './pages/Home';
import Info from './pages/Info';
```

With the pages imported, you can associate each page with a specific address, for example `/`, `/info`, etc.

The page address can also be understood as a route, or `Route`.

Therefore, in `App.jsx`, where the routes, or rather `Routes`, are defined, you will define the address and the page component as follows:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
    ...
```

> `path` is the address and `element` is the page component.

Notice that in the `Menu` we have items with `Link` that point to the page addresses, so the `to` attribute in
`Link` indicates that it should load the corresponding `Route` that has the same value associated in `path`.

In the browser, you can type these addresses directly, and the respective components, which are the pages, should appear.

## Navigation

To provide more page navigation options, you must add `Link` components to the `Menu` that point to the respective
address.

You must also add the `Route` components that associate the address with the corresponding page component.

With the `navigate` function, you can change pages programmatically, for example in these situations:

1. On the login page, after the data is successfully validated, it should automatically change the page.
2. After registering an account, when the data has been saved successfully, it should automatically change to the login page.

When the user interacts directly with navigation by clicking, we use the `Link` component.

For other cases where the page change occurs at a specific moment during code execution, we use the
`navigate` function obtained with `useNavigate`.

## Conclusion

ReactJS with React Router makes it possible to define multiple pages and navigate between them.

Ant.Design helps build the page structure and offers several useful components for building complex, responsive interfaces.