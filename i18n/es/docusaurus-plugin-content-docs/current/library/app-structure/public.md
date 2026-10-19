---
id: public
title: Público
sidebar_label: Público
---

Archivos públicos con URL directa.

## Carpeta pública

La carpeta `📂 public` reúne el contenido de la UI (User Interface) del lado del cliente después de la compilación, entre otros archivos públicos como logotipos e icono.

Puede contener cualquier archivo al que se necesite acceder públicamente.

## Estructura de la carpeta

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

La carpeta `📂 images` contiene inicialmente los logotipos de la aplicación y el icono.

En esta carpeta es donde puede colocar todas las imágenes públicas de su aplicación.

### icon.png

Icono de la aplicación, aparece en la pestaña del navegador (favicon).

### logo.png

Es la imagen del logotipo que se muestra en la página de inicio de sesión del backoffice y en las páginas de errores.

### logo-main.png

Es la imagen del logotipo que se muestra en el encabezado (_header_) después de iniciar sesión y entrar en el backoffice.

## Scripts

En la carpeta `📂 scripts` está el código JavaScript final generado por la compilación de la UI; es donde se pueden colocar otros archivos públicos de JavaScript.

### ui.js

El archivo `ui.js` es la compilación del código final de la UI.

Normalmente, la UI se desarrolla en React y LESS, y se utiliza [Vite](https://vite.dev/) para realizar la compilación del bundle final de JavaScript, que es el archivo `ui.js`.

Las instrucciones de compilación están en `ui/vite.config.js`; este archivo contiene los detalles de cómo se procesa y genera `ui.js`.

### ui.js.map

El archivo `ui.js.map` es el source map de la UI; este archivo es importante para indicar cuál es el código original cuando se depuran errores en la _consola_ del navegador.

## Estilos
  
La carpeta `📂 styles` debe contener los archivos CSS que se utilizan para la estilización de la aplicación.

### main.css

`main.css` normalmente se utiliza para CSS global o para alterar los estilos predeterminados de Netuno.

### ui.css

El `ui.css` es el CSS generado a partir de la compilación de la UI.

Normalmente, la UI se desarrolla en React y LESS, y se utiliza [Vite](https://vite.dev/) para realizar la compilación del bundle final de CSS, que es `ui.css`.

Las instrucciones de compilación están en `ui/vite.config.js`; este archivo contiene los detalles de cómo se genera `ui.css`.