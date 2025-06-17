---
id: pages
title: Pages & Routers
sidebar_label: Pages & Routers
---

## Introduction

When the web application gets complex or when it's a website, developing pages will be a very common need.

It is possible to create the page mechanism with the [React Router](https://reactrouter.com), when developing with ReactJS.

## Configuration

Make sure you have installed the React Router module in the `website` folder:

```
npm install -S react-router-dom 
```

Also from `Ant.Design`, which will be used to develop the general structure:

```
npm install -S antd
```

In the `App.js` file which is found in the `src` folder of the ReactJS application, ie `website/src`, add the modules import as 👇:

```javascript title="src/App.jsx"
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';
```

After imports add the constants:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;

const { SubMenu } = Menu;
```

The return of the App component in this initial phase can be as follows:

```jsx title="src/App.jsx"
  return (
    <Router>
      <Layout>
        <Header>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/">
              <>Home</>
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );

```

React Router components are structured with the `Ant.Design` page structure components.

The `Link` component points to `/`, which will load the `Route` associated with the path `path="/"`.

## Developing New Webpages

The pages stay in separate components, each page is represented by its own component in _ReactJS_.

Best practice is to place page components inside a folder called `pages`.

### Home

Develop a home page, which will be the `Home` component and will be associated with the `/` path.

The component file on this page will be:

- `pages/Home/index.jsx`

The code for this files are:

```jsx title="src/pages/Home/index.jsx"
import React from 'react';

export default ()=> {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};
```

### Info

Develop an example content page, which will be the `Info` component and will be associated with the `/info` path.

The component file on this page will be:

- `pages/Info/index.jsx`

The code for this files will be:

```jsx title="src/pages/Info/index.jsx"
import React from 'react';

export default ()=> {
    return (
        <div>
            <h1>Info</h1>
        </div>
    );
};
```

## Navigation

To carry out the navigation of the developed pages, components of the type `Link` must be added in the `Menu` that point to the referring address.

The `Route` components that associate the address to the referring page component should also be added.

For this reason, the return of the `App` component should be structured as 👇:

```jsx title="src/App.jsx"
  return (
    <Router>
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
          <Switch>
            <Route path="/info">
              <Info/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
```

## Summarizing

`ReactJS` with React Router it is possible to define multiple pages and perform navigation between them.

In the other hand, `Ant.Design` helps to build the structure of the page and offers several useful components to build complex interfaces.

