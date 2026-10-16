---
id: public
title: Público
sidebar_label: Público
---

Archivos públicos con URL directamente.

## Carpeta Pública

La carpeta `📂 public` reúne el contenido de la UI (Interfaz de Usuario) del lado del cliente después de la compilación, entre otros archivos públicos como logos e icono.

Puede contener cualquier archivo que necesite ser accedido públicamente.

## Estructura de la Carpeta

Al entrar en la carpeta `📂 public` encontrará por defecto la siguiente estructura:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## Imágenes

La carpeta `📂 images` inicialmente contiene los logos de la aplicación y el icono.

En esta carpeta es donde puede colocar todas las imágenes públicas de su aplicación.

### icon.png

Icono de la aplicación, aparece en la pestaña del navegador (favicon).

### logo.png

Es la imagen de logo que se presenta en la página de inicio de sesión del backoffice y en las páginas de errores.

### logo-main.png

Es la imagen de logo que se presenta en el encabezado (_header_) después de iniciar sesión y entrar en el backoffice.

## Scripts

En la carpeta `📂 scripts` está el código JavaScript final generado por la compilación de la UI, es donde se pueden colocar otros archivos públicos de JavaScript.

### ui.js

El archivo `ui.js` es la compilación de código final de la UI.

Típicamente la UI se desarrolla en React y LESS, y se utiliza [Vite](https://vite.dev/) para realizar la compilación del bundle de JavaScript final, que es el archivo `ui.js`.

Las instrucciones de compilación se encuentran en `ui/vite.config.js`, este archivo contiene los detalles de cómo se procesa y genera el `ui.js`.

### ui.js.map

El archivo `ui.js.map` es el source maps de la UI, este archivo es importante para indicar cuál es el código original cuando se realiza la depuración de errores en la _consola_ del navegador.

## Estilos
  
En la carpeta `📂 styles` debe contener los archivos CSS que se utilizan para la estilización de la aplicación.

### main.css

El `main.css` típicamente se utiliza para CSS globales o para alterar estilos predeterminados de Netuno.

### ui.css

El `ui.css` es el CSS generado a partir de la compilación de la UI.

Típicamente la UI se desarrolla en React y LESS, y se utiliza [Vite](https://vite.dev/) para realizar la compilación del bundle de CSS final que es el `ui.css`.

Las instrucciones de compilación se encuentran en `ui/vite.config.js`, este archivo contiene los detalles de cómo se genera el `ui.css`.