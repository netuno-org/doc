---
id: storage
title: Almacenamiento
sidebar_label: Almacenamiento
---

Archivos integrados en el código o en la base de datos.

## Almacenamiento general

La carpeta `📂 storage` tiene la finalidad de guardar de forma segura archivos generales que son útiles en el procesamiento de la aplicación.

## Estructura de la carpeta

En la carpeta `📂 storage` se encuentra la siguiente estructura:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Base de datos

La carpeta `📂 database` se utiliza para almacenar archivos o imágenes relacionados con la base de datos.

No es práctico almacenar directamente los archivos en la base de datos, porque comprometen las copias de seguridad y la sincronización de datos, aumentando considerablemente el tamaño de la base de datos debido al espacio ocupado por muchos archivos en general.

Por eso, cualquier formulario de datos que tenga algún campo de subida de archivo o imagen, el archivo final queda organizado y guardado aquí, y solo el nombre final del archivo se guarda en el campo de la base de datos.

Si la estructura de datos contiene archivos, para realizar la copia de seguridad total de la aplicación es necesario hacer también la copia de seguridad de esta carpeta además de la copia de seguridad de la base de datos.

## Sistema de archivos generales

La carpeta `📂 filesystem` permite organizar con restricciones de acceso los archivos generales que son útiles para la aplicación.

Cualquier archivo que sea útil directamente en el código de la aplicación debe guardarse aquí.

Las restricciones se dividen en:

### Privado

La carpeta `📂 private` solo debe ser accedida para lectura o escritura por usuarios autenticados en la aplicación.

### Público

La carpeta `📂 public` es útil para el acceso externo.

### Servidor

La carpeta `📂 server` solo permite la lectura y escritura desde código interno de la aplicación.

Por lo tanto, ningún usuario interno o externo accede a su contenido.

Su contenido solo es accesible a través del código.