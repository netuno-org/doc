---
id: ui
title: UI
sidebar_label: UI
---

Frontend personalizado del backoffice y dashboards.

## Interfaz de Usuario

Como su nombre indica, en la carpeta `📂 ui` se encuentra la lógica de la interfaz de usuario de la aplicación.

Permite realizar el desarrollo para alterar el comportamiento del backoffice de la aplicación.

Es posible generar dashboards a medida, añadir o alterar funcionalidades, entre otros.

Para realizar el desarrollo del código general de la aplicación, ya sea backend o frontend, recomendamos editores de 
código gratuitos, como:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Estructura de la Carpeta

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MiBoton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ContenedorDashboard</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Código fuente

La carpeta `📂 src` reúne el código de la aplicación frontend. En esta carpeta se encuentra la organización de componentes 
React, respectivamente `components` y `containers`.

### Contenedores

La carpeta `📂 containers` está destinada a los contenedores, que son componentes en React para las áreas con más 
interacciones, es decir, son componentes que tienen más funcionalidades, normalmente abarcan un área considerable 
de la pantalla y que puede agregar otros componentes de acuerdo con el ámbito.

Por ejemplo, presenta una tabla de pedidos con un formulario para filtrar, y además un gráfico que agrega 
el total mensual, todo esto dentro de un contenedor, siendo que cada cosa podría ser un componente aparte pero 
que se agrega en el contenedor de pedidos en el dashboard.

### Componentes

La carpeta `📂 components` está destinada a los _componentes_ reutilizables en React, normalmente implementan 
funcionalidades muy específicas que son útiles para ser integradas en otros componentes o en contenedores.

Típicamente contienen un comportamiento más simple, estando muy enfocados en su objetivo para un determinado ámbito, 
que sirve para ser reutilizado en múltiples contenedores o incluso en otros componentes.

Como ejemplos de componentes podría ser una determinada tabla, un formulario, un tipo de gráfico, entre otros.

### Estilos

La carpeta `📂 styles` sirve típicamente para estilos globales de los distintos contenedores de la aplicación. Aunque no 
haya un fuerte patrón en este campo, sugerimos una organización de los estilos específicos al `component` o al 
`container` junto al mismo, es decir, internamente en la respectiva carpeta de componente.
 
## Vite
 
Para que se genere la versión de código final en JavaScript que contiene la UI de la aplicación, compilado y 
optimizado, y que es procesada y utilizada por el navegador. Es necesario ejecutar la respectiva compilación 
del código de frontend que está codificado en React/JSX.

Esta compilación es realizada por [Vite](https://vite.dev/) y su configuración y otras instrucciones se encuentran en 
el archivo:

- `vite.config.js`

Que está en la raíz de la carpeta `📂 ui`.

## Gestor de Paquetes

El archivo `package.json` es utilizado por el gestor de módulos de dependencias, recomendamos el uso de 
[Bun](https://bun.sh) para instalar todas las dependencias necesarias del frontend.

Y los comandos de ejecución utilizan [Bun](https://bun.sh), que es otra recomendación importante.

Por lo tanto, recomendamos la instalación de [Bun](https://bun.sh).

## Instrucciones

En el archivo `README.md` se encuentran las instrucciones de instalación y ejecución.

Para realizar la instalación de las dependencias, ejecute:

- `bun install`

Y para ejecutar la compilación del código de frontend en desarrollo:

- `bun run watch`

O si es la compilación final y definitiva optimizada para producción:

- `bun run build`

Por defecto, la compilación crea los siguientes archivos:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Estos archivos se integran en el procesamiento de Netuno para realizar las debidas personalizaciones a medida en las 
páginas de backoffice de la aplicación, como dashboards y funcionalidades específicas.