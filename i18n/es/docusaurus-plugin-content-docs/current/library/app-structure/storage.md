---
id: storage
title: Almacenamiento
sidebar_label: Almacenamiento
---

Archivos integrados en el código o en la base de datos.

## Almacenamiento General

La carpeta `📂 storage` tiene la finalidad de guardar de forma segura archivos generales que son útiles en el procesamiento de la
aplicación.

## Estructura de la Carpeta

En la carpeta `📂 storage` se encuentra la siguiente estructura:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Base de Datos

La carpeta `📂 database` se utiliza para almacenar archivos o imágenes relacionados con la base de datos.

No es práctico almacenar directamente en la base de datos los archivos, porque comprometen las copias de seguridad y la sincronización
de datos, aumentando considerablemente el tamaño de la base de datos debido al espacio ocupado por muchos archivos en
general.

Por eso cualquier formulario de datos que tenga algún campo de subida de archivo o imagen, el archivo final queda
organizado y guardado aquí, y solo el nombre final del archivo se guarda en el campo de la base de datos.

En caso de que la estructura de datos contenga archivos, entonces para realizar la copia de seguridad total de la aplicación es necesario hacer la
copia de seguridad de esta carpeta además de la copia de seguridad de la base de datos.

## Sistema de Archivos Generales

En la carpeta `📂 filesystem` permite organizar con restricciones de acceso a los archivos generales que son útiles para la
aplicación.

Cualquier archivo que sea útil directamente en el código de la aplicación debe guardarse aquí.

Las restricciones están divididas en:

### Privado

A la carpeta `📂 private` solo se debe acceder para lectura o escritura por usuarios autenticados en la aplicación.

### Público

La carpeta `📂 public` es útil para el acceso externo.

### Servidor

La carpeta `📂 server` solo permite la lectura y escritura desde el código interno de la aplicación.

Así pues, ningún usuario interno o externo accede a su contenido.

Su contenido solo es accesible a través del código.