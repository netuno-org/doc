---
sidebar_position: 3
id: pages
title: Páginas e React Router
sidebar_label: Páginas e React Router
---

## Introdução

A criação de páginas é uma necessidade comum quando a aplicação web fica complexa ou há a necessidade de apresentar
conteúdos distintos, é comum acontecer especialmente quando trata-se de um website ou de uma plataforma.

No desenvolvimento com React é possível criar o mecanismo de navegação entre páginas com o [React Router](https://reactrouter.com).

Os passos abaixo devem ser executados dentro do seu projeto de frontend em React.

Caso seja um frontend integrado com o Netuno, deve então realizar os passos abaixo dentro da pasta da aplicação Netuno mas
onde tem o projeto de frontend, por exemplo em:

- `📂 website/`

## Instalação

Certifique que tem instalado o módulo do React Router no seu projeto:

```
pnpm install react-router
```

E do Ant.Design, que será utilizado para a criar a estrutura geral:

```
pnpm install antd
```

## Configuração

Para começar devemos editar o `main.jsx` que é encontrado na pasta `📂 src`, é preciso colocar o `BrowserRoute` desta forma:

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

**Muito importante:** Caso seja um frontend recém criado deve remover todo tipo de CSS/Style e importações desnecessárias
como de imagens, para evitar comportamentos indevidos.

No `App.js` que também é encontrado na pasta `📂 src`, adicione a importação dos módulos da seguinte forma:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Depois das importações adicione as constantes:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;

const { SubMenu } = Menu;
```

Nesta fase inicial o retorno do componente App poderá ser da seguinte forma:

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
          { /* As rotas das páginas será aqui! */ }
        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
  ...
```

Desta forma os componentes do React Router estão estruturados com os componentes de estrutura de página do Ant.Design.

## Criar Páginas

As páginas ficam em componentes a parte, cada página é representada por um componente próprio em React.

Uma boa prática é colocar os componentes das páginas dentro de uma pasta chamada `📂 pages`.

### Home

Criar a página de entrada, que será o componente `Home` e estará associado ao path `/`.

O arquivo do componente desta página será:

- `pages/Home/index.jsx`

O código deste arquivos pode ser:

```jsx title="src/pages/Home/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={()=> navigate('/info')}>
        Ir para a página de Informações
      </Button>
    </div>
  );
};

export default Home;
```

> O botão faz a mudança de página programaticamente utilizando a função `navigate`, é uma alternativa ao componente de `Link`.

### Info

Criar uma página de conteúdo de exemplo, que será o componente `Info` e estará associado ao path `/info`.

O arquivo do componente desta página será:

- `pages/Info/index.jsx`

O código deste arquivos pode ser:

```jsx title="src/pages/Info/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Info() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Info</h1>
      <Button onClick={()=> navigate('/')}>
        Voltar para a Home
      </Button>
    </div>
  );
}

export default Info;
```

> O botão faz a mudança de página programaticamente utilizando a função `navigate`, é uma alternativa ao componente de `Link`. 

## Importar Páginas

Pelo início do `App.jsx` importe os componentes de páginas que foram criadas.

```jsx title="src/App.jsx"
import Home from './pages/Home';
import Info from './pages/Info';
```

Com as páginas importadas é possível relacionar cada página com um determinado endereço, por exemplo `/`, `/info`, etc.

O endereço da página também pode ser entendido como uma rota, ou `Route`.

Portanto no `App.jsx` onde é definido as rotas ou melhor `Routes`, vai definir o endereço e o componente das páginas da seguinte forma:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
    ...
```

> O `path` é o endereço e o `element` é o componente da página.

Repare que no `Menu` temos itens com o `Link` que apontam para os endereços das páginas, portanto o atributo `to` no 
`Link` indica que deve carregar o `Route` referente que tem o mesmo valor associado no `path`.

No browser pode digitar diretamente estes endereços e os componentes respectivos, que são as páginas, deverá aparecer.

## Navegação

Para realizar mais opções de navegação de páginas deverá ser adicionado no `Menu` componentes do tipo `Link` que apontam
para o endereço respectivo.

Também deverá ser adicionado os componentes de `Route` que associa o endereço ao componente de página referente.

Com a função de `navigate` pode realizar mudanças de páginas programaticamente, por exemplo nestas situações:

1. Na página de login após os dados serem validados com sucesso deve proceder a mudança de página automaticamente.
2. Após registrar uma conta quando os dados foram guardados com sucesso deve mudar automaticamente para a página de login.

Quando o utilizador interage diretamente com a navegação através do click, então utilizamos o componente de `Link`.

Para os outros casos onde a mudança de página ocorre em um momento específico da execução do código, então utilizamos a
função de `navigate` obtida com o `useNavigate`.

## Conclusão

O ReactJS com o React Router é possível definir múltiplas páginas e realizar a navegação entre elas.

O Ant.Design auxilia a construção da estrutura da página e oferece diversos componentes úteis para construir interfaces 
complexas e com responsividade.
