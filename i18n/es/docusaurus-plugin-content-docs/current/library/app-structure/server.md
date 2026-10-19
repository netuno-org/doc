---
id: server
title: Servidor
sidebar_label: Servidor
---

Desarrollo del backend y la API.

## Carpeta del servidor

La carpeta `📂 server` contiene un conjunto de archivos y carpetas que forman el backend de la aplicación.

Todo lo que está en la carpeta `📂 server` se utiliza en el procesamiento del servidor de backend, como integraciones, API, base de datos, seguridad y autenticación, tareas Cron, entre muchos otros.

## Estructura de la carpeta

En la carpeta `📂 server` se encuentra la siguiente estructura:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Acciones

En `📂 actions` se pueden añadir acciones de personalización a medida (_hooks_) en las operaciones CRUD de los formularios generados automáticamente para el backoffice; de acuerdo con la estructura de datos, aquí se puede realizar mucha intervención de datos.

Por ejemplo, al eliminar un cliente es necesario eliminar todos sus pedidos, o al crear un nuevo producto se debe integrar con otro sistema. En fin, cualquier desarrollo relacionado directamente con datos puede hacerse aquí.

Las acciones están inspiradas en los `triggers` de base de datos, solo que a nivel de ejecución de código.

Por lo tanto, se pueden programar operaciones específicas en la creación, modificación y eliminación de datos.

## Componentes

Los `📂 components` se utilizan para definir tipos personalizados de campos en los formularios de backoffice, que pueden realizar la propia manipulación de datos.

Se pueden crear componentes mediante scripts para proporcionar un nuevo tipo de campo específico en la aplicación.

## Núcleo

La carpeta `📂 core` permite la inyección de código en el flujo de procesamiento de las peticiones HTTP.

También se utiliza para compartir código entre los distintos servicios y otros.

El `_config.js` se ejecuta después de que la configuración se carga en cada petición HTTP; se ejecuta después del script de configuración del entorno que se encuentra en la carpeta `📂 config` de la aplicación.

El `_init.js` sirve para inyectar alguna instrucción cuando la aplicación se inicializa por primera vez.

### Procesamiento de las peticiones HTTP

En el flujo de procesamiento de las peticiones HTTP para cualquier URL de la aplicación se ejecutan los respectivos scripts:

- `_request_start.js` se ejecuta cuando la petición HTTP llega al servidor de Netuno.
- `_request_url.js` se ejecuta cuando Netuno procesa la URL; la URL puede modificarse a otro destino.
- `_request_close.js` se ejecuta cuando se cierra la respuesta a la petición HTTP.
- `_request_end.js` se ejecuta cuando la petición HTTP finaliza definitivamente.
- `_request_error.js` se ejecuta cuando ocurre algún error en el procesamiento de la petición HTTP.

### Procesamiento de los servicios de API

En el flujo de procesamiento de cualquier servicio de API de la aplicación se ejecutan los siguientes scripts:

- `_service_config.js` se ejecuta antes de iniciar la ejecución del servicio; sirve para definir las configuraciones de ejecución del servicio, entre otras cosas. Se puede definir si el servicio puede ejecutarse o no, es decir, un control de seguridad en el acceso al servicio de la API.
- `_service_start.js` se ejecuta en cuanto algún servicio comienza a procesarse.
- `_service_end.js` se ejecuta después de que finaliza el procesamiento de algún servicio.
- `_service_error.js` se ejecuta cuando ocurre algún error en el procesamiento de algún servicio.

## Servicios - API

Es en la carpeta `📂 services` donde se crean los servicios que forman la API de la aplicación.

Los servicios pueden escribirse en distintos lenguajes: JavaScript, Python, Java, Kotlin, Ruby o Groovy.

Como Netuno es políglota, cualquier archivo de script puede cambiarse a otro lenguaje de programación compatible; basta con que los archivos tengan la extensión correspondiente al lenguaje.

No se necesitan configuraciones adicionales en función del lenguaje de programación utilizado; basta con crear el archivo del servicio con la extensión correcta correspondiente al lenguaje de programación.

## Configuración

En la carpeta `📂 setup` está el código generado automáticamente por el motor de Netuno que define los esquemas de base de datos, y también es donde podemos colocar la carga de datos que es esencial para el funcionamiento de la aplicación.

El script `_start.js` se ejecuta antes de iniciar el procesamiento de construcción de la base de datos.

El script `_end.js` se ejecuta después de que finaliza el procesamiento de construcción de la base de datos.

De acuerdo con la construcción de la estructura de datos, Netuno crea aquí, en la carpeta `📂 setup`, automáticamente el código necesario para que toda la estructura de datos se recree en una nueva base de datos, o para recrear algo que falte en otra base de datos donde la aplicación se ejecute eventualmente.

 ## Plantillas

La carpeta `📂 templates` contiene el contenido HTML de las páginas de backoffice de la aplicación, que son generadas por el servidor de Netuno.

La carpeta `📂 dev` contiene el archivo `dashboard.html`, que permite modificar el área de trabajo en el modo de construcción del desarrollador.

El `dashboard.html` que está en la raíz de las plantillas contiene el HTML del área de trabajo general del backoffice.

### Plantillas nativas

En la carpeta `📂 _` se puede sustituir cualquier plantilla general, es decir, se pueden modificar las plantillas predeterminadas de Netuno.

- [Aquí están las plantillas nativas de Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Si el nombre de carpetas y/o archivos coincide con el de las plantillas nativas dentro de esta carpeta, entonces se utiliza la plantilla que se encuentra en esta carpeta en lugar de la plantilla nativa.

Es decir, basta con replicar la misma estructura de la plantilla nativa dentro de la carpeta `📂 _` para sustituirla.

### Scripts

Las plantillas de scripts inyectan archivos de código JavaScript al final de las páginas con el siguiente propósito:

1. `scripts.html` añadir código JavaScript al final de la página de **backoffice**.
2. `scripts_dev.html` añadir código JavaScript al final de la página del **área de construcción del desarrollador**.
3. `scripts_login.html` añadir código JavaScript al final de la página de **inicio de sesión**.

### Estilos

Las plantillas de estilos inyectan archivos de estilos al principio de las páginas con el siguiente propósito:

1. `styles.html` añadir código CSS al principio de la página de **backoffice**.
2. `styles_dev.html` añadir código CSS al principio de la página del **área de construcción del desarrollador**.
3. `styles_login.html` añadir código CSS al principio de la página de **inicio de sesión**.