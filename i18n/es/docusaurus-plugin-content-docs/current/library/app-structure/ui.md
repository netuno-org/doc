---
id: ui
title: UI
sidebar_label: UI
---

Frontend personalizado del backoffice y de los paneles de control.

## Interfaz de usuario

Como su nombre indica, en la carpeta `📂 ui` se encuentra la lógica de la interfaz de usuario de la aplicación.

Permite realizar el desarrollo para alterar el comportamiento del backoffice de la aplicación.

Es posible generar paneles de control a medida, añadir o modificar funcionalidades, entre otras cosas.

Para realizar el desarrollo del código general de la aplicación, ya sea backend o frontend, recomendamos editores de código gratuitos, como:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Estructura de la carpeta

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MiBoton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ContenedorPanel</b>/</span>
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

La carpeta `📂 src` reúne el código de aplicación del frontend. En esta carpeta se encuentra la organización de componentes React, respectivamente `components` y `containers`.

### Contenedores

La carpeta `📂 containers` está destinada a los contenedores, que son componentes de React para las áreas con más interacciones, es decir, son componentes que tienen más funcionalidades; normalmente abarcan un área considerable de la pantalla y pueden agregar otros componentes según el ámbito.

Por ejemplo, presenta una tabla de pedidos con un formulario para filtrar y además un gráfico que agrega el total mensual, todo ello dentro de un contenedor; cada cosa podría ser un componente aparte, pero se agrega en el contenedor de pedidos del panel de control.

### Componentes

La carpeta `📂 components` está destinada a los _componentes_ reutilizables en React; normalmente implementan funcionalidades muy específicas que resultan útiles para integrarlas en otros componentes o en contenedores.

Normalmente contiene un comportamiento más simple, muy centrado en su objetivo para un ámbito determinado, y sirve para reutilizarse en múltiples contenedores o incluso en otros componentes.

Como ejemplos de componentes podría haber una tabla determinada, un formulario, un tipo de gráfico, entre otros.

### Estilos

La carpeta `📂 styles` sirve normalmente para los estilos globales de los distintos contenedores de la aplicación. Aunque no hay un patrón fuerte en este campo, sugerimos una organización de los estilos específicos del `componente` o del `contenedor` junto a este, es decir, dentro de su respectiva carpeta de componente.
 
## Vite
 
Para que se genere la versión final del código en JavaScript que contiene la UI de la aplicación, compilada y optimizada, y que es procesada y utilizada por el navegador, es necesario ejecutar la correspondiente compilación del código de frontend codificado en React/JSX.

Esta compilación la realiza [Vite](https://vite.dev/) y su configuración y otras instrucciones se encuentran en el archivo:

- `vite.config.js`

Que está en la raíz de la carpeta `📂 ui`.

## Gestor de paquetes

El archivo `package.json` lo utiliza el gestor de módulos de dependencias; recomendamos el uso de [Bun](https://bun.sh) para instalar todas las dependencias necesarias del frontend.

Y los comandos de ejecución utilizan [Bun](https://bun.sh), que es otra recomendación importante.

Por lo tanto, recomendamos la instalación de [Bun](https://bun.sh).

## Instrucciones

El archivo `README.md` contiene las instrucciones de instalación y ejecución.

Para instalar las dependencias, ejecute:

- `bun install`

Y para ejecutar la compilación del código de frontend en desarrollo:

- `bun run watch`

O si se trata de la compilación final y definitiva optimizada para producción:

- `bun run build`

Por defecto, la compilación crea los siguientes archivos:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Estos archivos se integran en el procesamiento de Netuno para realizar las personalizaciones a medida correspondientes en las páginas de backoffice de la aplicación, como paneles de control y funcionalidades específicas.