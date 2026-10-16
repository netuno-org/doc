---
sidebar_position: 1
id: folders-overview
title: Visión general de las carpetas
sidebar_label: Visión general
---

Explore y conozca las carpetas y archivos de las aplicaciones.

## Estructura

A partir de la raíz donde se instala Netuno, podemos encontrar la carpeta `📂 apps`.

Dentro de la carpeta `📂 apps` es donde se encuentran todas las aplicaciones disponibles en la plataforma Netuno.

Hay aplicaciones que pueden crearse localmente, mientras que otras pueden ser externas, por ejemplo aplicaciones que 
son clones de repositorios de GIT. 

Vea a partir de la raíz de Netuno la estructura completa de una aplicación recién creada:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>mi_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> En la carpeta `apps` se encuentran todas las aplicaciones disponibles en Netuno.

Inicialmente, en esta carpeta ya existe la aplicación `demo`, que como su nombre indica se trata de una **demo**_stración_ de 
funcionalidades de Netuno.
 
Cuando se crea una nueva aplicación, se añade una nueva carpeta que contiene la misma jerarquía de subcarpetas, como se ha 
presentado anteriormente. 

## Carpetas principales

Dentro de la carpeta de la aplicación tenemos las principales carpetas, donde cada una de ellas tiene una finalidad específica.

Las principales carpetas son:

- [📂 config](config) - Configuraciones generales;
- [📂 dbs](dbs) - Cosas relacionadas con bases de datos;
- [📂 docs](docs) - Documentación y otros documentos en general;
- [📂 public](public) - Contenido público disponible directamente a través de URL, como imágenes, JavaScript y CSS;
- [📂 server](server) - Código de backend, como servicios, jobs, templates, reports, y toda la API en general.
- [📂 storage](storage) - Organización de archivos que están relacionados con datos o que se utilizan en código.
- [📂 ui](ui) - Interfaz de usuario del backoffice, código de frontend como dashboards y otras funcionalidades.