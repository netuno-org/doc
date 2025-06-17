---
id: pages
title: Páginas e React Router
sidebar_label: Páginas e React Router
---

## Introdução

A criação de páginas é uma necessidade comum quando a aplicação web fica complexa ou quando trata-se de um website.

No desenvolvimento com ReactJS é possível criar o macanismo de páginas com o [React Router](https://reactrouter.com).

## Configuração

Certifique que tem instado o módulo do React Router na pasta `website`:

```
npm install -S react-router-dom 
```

E do Ant.Design, que será utilizado para a criar a estrutura geral:

```
npm install -S antd
```

No ficheiro `App.js` que é encontrado na pasta `src` da aplicação ReactJS, ou seja `website/src`, adicine a importação dos módulos da seguinte forma:

```javascript title="src/App.jsx"
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';
```

Depois das importações adicione as constantes:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;

const { SubMenu } = Menu;
```

Nesta fase inicial o retorno do componente App poderá ser da seguinte forma:

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

Assim os componentes do React Router estão estruturados com os componentes de estrutura de página do Ant.Design.

O component `Link` aponta para o `/`, que vai carregar o `Route` referente associado ao caminho `path="/"`.

## Criar Novas Páginas

As páginas ficam em componentes a parte, cada página é representada por um componente próprio em ReactJS.

Uma boa prática é colocar os componentes das páginas dentro de uma pasta chamada `pages`.

### Home

Criar a página de entrada, que será o componente `Home` e estará associado ao path `/`.

O ficheiro do componente desta página será:

- `pages/Home/index.jsx`

O código deste arquivos pode ser:

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

Criar uma página de conteúdo de exemplo, que será o componente `Info` e estará associado ao path `/info`.

O ficheiro do componente desta página será:

- `pages/Info/index.js`

O código deste arquivos pode ser:

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

## Navegação

Para realizar a navegação das páginas criadas deverá ser adicionado no `Menu` componentes do tipo `Link` que aponta para o endereço referente.

Também deverá ser adicionado os componentes de `Route` que associa o endereço ao componente da página referente.

Desta forma deverá ser estruturado o retorno do componente `App` da seguinte forma:

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

## Conclusão

O ReactJS com o React Router é possível definir múltiplas páginas e realizar a navegação entre elas.

O Ant.Design auxilia a construção da estrutura da página e oferece diversos componentes úteis para construir interfaces complexas.
