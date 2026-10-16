---
sidebar_position: 3
id: pages
title: Páginas y React Router
sidebar_label: Páginas y React Router
---

## Introducción

La creación de páginas es una necesidad común cuando la aplicación web se vuelve compleja o hay la necesidad de presentar
contenidos distintos, es común que ocurra especialmente cuando se trata de un sitio web o de una plataforma.

En el desarrollo con React es posible crear el mecanismo de navegación entre páginas con [React Router](https://reactrouter.com).

Los pasos a continuación deben ejecutarse dentro de su proyecto de frontend en React.

Si es un frontend integrado con Netuno, debe entonces realizar los pasos a continuación dentro de la carpeta de la aplicación Netuno pero
donde tiene el proyecto de frontend, por ejemplo en:

- `📂 sitio_web/`

## Instalación

Asegúrese de que tiene instalado el módulo de React Router en su proyecto:

```
bun install react-router
```

Y de Ant.Design, que será utilizado para crear la estructura general:

```
bun install antd
```

## Configuración

Para comenzar, debemos editar el `main.jsx` que se encuentra en la carpeta `📂 src`, es preciso colocar el `BrowserRouter` de esta forma:

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

**Muy importante:** Si es un frontend recién creado, debe eliminar todo tipo de CSS/Style e importaciones innecesarias
como de imágenes, para evitar comportamientos indebidos.

En el `App.jsx` que también se encuentra en la carpeta `📂 src`, agregue la importación de los módulos de la siguiente forma:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Después de las importaciones, agregue las constantes:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

En esta fase inicial, el retorno del componente App podrá ser de la siguiente forma:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/informacion">Información</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* ¡Aquí irán las rutas de las páginas! */ }
        </Routes>
      </Content>
      <Footer>Pie de página</Footer>
    </Layout>
  );
  ...
```

De esta forma, los componentes de React Router están estructurados con los componentes de estructura de página de Ant.Design.

## Crear Páginas

Las páginas se encuentran en componentes aparte, cada página está representada por un componente propio en React.

Una buena práctica es colocar los componentes de las páginas dentro de una carpeta llamada `📂 paginas`.

### Inicio

Crear la página de entrada, que será el componente `Inicio` y estará asociado a la ruta `/`.

El archivo del componente de esta página será:

- `paginas/Inicio/index.jsx`

El código de este archivo puede ser:

```jsx title="src/paginas/Inicio/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Inicio() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Inicio</h1>
      <Button onClick={()=> navigate('/informacion')}>
        Ir a la página de Información
      </Button>
    </div>
  );
};

export default Inicio;
```

> El botón cambia de página programáticamente utilizando la función `navigate`, es una alternativa al componente `Link`.

### Información

Crear una página de contenido de ejemplo, que será el componente `Informacion` y estará asociado a la ruta `/informacion`.

El archivo del componente de esta página será:

- `paginas/Informacion/index.jsx`

El código de este archivo puede ser:

```jsx title="src/paginas/Informacion/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Informacion() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Información</h1>
      <Button onClick={()=> navigate('/')}>
        Volver al Inicio
      </Button>
    </div>
  );
}

export default Informacion;
```

> El botón cambia de página programáticamente utilizando la función `navigate`, es una alternativa al componente `Link`. 

## Importar Páginas

Al inicio de `App.jsx`, importe los componentes de páginas que fueron creados.

```jsx title="src/App.jsx"
import Inicio from './paginas/Inicio';
import Informacion from './paginas/Informacion';
```

Con las páginas importadas, es posible relacionar cada página con una dirección determinada, por ejemplo `/`, `/informacion`, etc.

La dirección de la página también puede entenderse como una ruta, o `Route`.

Por lo tanto, en `App.jsx`, donde se definen las rutas o mejor dicho `Routes`, se definirá la dirección y el componente de las páginas de la siguiente forma:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/informacion" element={<Informacion/>}/>
    </Routes>
    ...
```

> El `path` es la dirección y el `element` es el componente de la página.

Observe que en el `Menu` tenemos elementos con el `Link` que apuntan a las direcciones de las páginas, por lo tanto, el atributo `to` en el 
`Link` indica que debe cargar el `Route` referente que tiene el mismo valor asociado en el `path`.

En el navegador puede escribir directamente estas direcciones y los componentes respectivos, que son las páginas, deberán aparecer.

## Navegación

Para realizar más opciones de navegación de páginas, se deberán agregar en el `Menu` componentes del tipo `Link` que apunten
a la dirección respectiva.

También se deberán agregar los componentes `Route` que asocian la dirección al componente de página referente.

Con la función `navigate` puede realizar cambios de página programáticamente, por ejemplo en estas situaciones:

1. En la página de inicio de sesión, después de que los datos se validen con éxito, debe proceder al cambio de página automáticamente.
2. Después de registrar una cuenta, cuando los datos se hayan guardado con éxito, debe cambiar automáticamente a la página de inicio de sesión.

Cuando el usuario interactúa directamente con la navegación a través del clic, entonces utilizamos el componente `Link`.

Para los otros casos donde el cambio de página ocurre en un momento específico de la ejecución del código, entonces utilizamos la
función `navigate` obtenida con `useNavigate`.

## Conclusión

Con ReactJS y React Router es posible definir múltiples páginas y realizar la navegación entre ellas.

Ant.Design ayuda a construir la estructura de la página y ofrece diversos componentes útiles para construir interfaces 
complejas y con responsividad.