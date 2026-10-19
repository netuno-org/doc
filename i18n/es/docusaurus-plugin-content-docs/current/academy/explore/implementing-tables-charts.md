---
id: implementing-tables-charts
title: Implementación de tablas y gráficos
sidebar_label: Tablas y gráficos
---

En este tutorial, crearemos la interfaz y la lógica de una aplicación sencilla, centrada en la visualización de datos. El desarrollo del proyecto abordará los siguientes temas:

- La creación de **«Formularios»**, **«Campos»** y **«Relaciones»** para estructurar la base de datos.
- La construcción de **«Servicios web REST»** para proporcionar los datos y la visualización dinámica de información en tablas y gráficos en la aplicación, utilizando las bibliotecas _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ y la dependencia _Chart.js_, además del componente de tabla de <a href="https://ant.design/" target="_blank">Ant Design</a>.

Toda la estructura visual del proyecto se desarrollará utilizando **HTML, JavaScript y React.js**.
Es recomendable que tengas conocimientos básicos de:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Si tienes dudas en estos pasos, consulta:**
   - [Guía de la interfaz: Formularios](/docs/academy/ui/forms)
   - [Guía de la interfaz: Campos](/docs/academy/ui/fields)
   - [Guía de la interfaz: Relaciones entre formularios](/docs/academy/ui/relationships-between-forms)
   - [Guía de la interfaz: Servicios web REST](/docs/academy/explore/services)


## Producto final

Al seguir todos los pasos de este tutorial, construirás un panel funcional en el área de trabajo de Netuno, que contendrá:

* Una **tabla de datos** que lista los registros de trabajadores y los totales de horas.
* Un **gráfico de barras** dinámico y colorido que muestra visualmente esos mismos datos.

![producto-final.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Arquitectura de la solución

Antes de escribir cualquier código, es importante entender cómo encajan las piezas. La solución se divide en **4 capas** que se comunican de arriba abajo:

```
ContenedorPanel         (busca los datos en el servidor)
       │
       ▼
VisualizacionDatos          (organiza el diseño en dos columnas)
       │
  ┌────┴────┐
  ▼         ▼
ListaTabla  GraficoBarras        (renderizan los datos recibidos)
```

:::tip
La ventaja de esta arquitectura es que cada componente tiene **una única responsabilidad**.
:::

## Paso 1: Estructura de datos

El primer paso es crear los formularios, configurar la relación entre ellos y rellenarlos con datos para generar la tabla y el gráfico más adelante.

Este es el diagrama con la arquitectura de los formularios y los campos que deberás replicar en tu entorno Netuno:

![primer-paso.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Importante:** Aunque el campo `id` aparece en el diagrama, **no es necesario crearlo manualmente**. Netuno genera este identificador automáticamente justo después de crear la tabla.

### Plantilla del panel

Para mostrar la tabla y el gráfico, necesitaremos un lugar en la interfaz de tu aplicación. Netuno ya proporciona una plantilla base para el panel principal.

Abre tu editor de código y encuentra el archivo:

```text
/apps/miapp/server/templates/dashboard.html
```
*(Recuerda sustituir **miapp** por el nombre real de tu carpeta de aplicación).*

Verás la siguiente línea de código HTML:

```html
<div id="app-dashboard"></div>
```

## Paso 2: Servicio de datos

Ahora que tenemos la base de datos lista y el HTML preparado, necesitamos crear el «mensajero» (un servicio web REST). Será responsable de ir a la base de datos, calcular el total de horas de cada trabajador y entregar esa información lista para la tabla y el gráfico.


### Creando el archivo del servicio

Los servicios en Netuno se guardan en la carpeta `server/services/`. Navega hasta el directorio de tu proyecto y crea el archivo `trabajadores.js`:

```text
/apps/miapp/server/services/trabajadores.js
```
El **ContenedorPanel** detecta el idioma del panel y llama a **/services/trabajadores** cuando el panel está en Español, o a **/services/workers** cuando está en Inglés. Cada idioma tiene su propio archivo de servicio.

### Escribiendo el código

Este código realiza tres acciones principales utilizando los recursos nativos de Netuno (**_db**, **_val** y **_out**):

- **Consulta _db.query:** Busca solo los trabajadores **activos** en la base de datos y calcula la suma de las horas trabajadas por cada uno.

- **Procesamiento _val.list y _val.map:** Organiza el resultado en una lista limpia con objetos estructurados.

- **Respuesta _out.json:** Envía los datos en formato JSON para que la interfaz (React) pueda leerlos.

Abre el archivo `trabajadores.js` y pega el código de abajo:

```javascript
// 1. Consulta, _db.query() ejecuta el SQL y devuelve la lista de registros encontrados.
const registrosDb = _db.query(`
    SELECT DISTINCT
        trabajador.nombre, SUM(DATEDIFF(HOUR, registro.inicio, registro.fin)) AS total
    FROM trabajador INNER JOIN registro
        ON trabajador.id = registro.trabajador_id
    WHERE trabajador.active = true AND registro.active = true
    GROUP BY trabajador.nombre
    ORDER BY total ASC
`);

// 2. Procesamiento de los datos, _val.list() crea una lista vacía para guardar los datos procesados.
const lista = _val.list();

// Recorre cada fila devuelta por la base de datos
for (const registroDb of registrosDb) {
    lista.add(
        // _val.map() crea un objeto con los campos que React va a consumir
        _val.map()
            .set("nombre", registroDb.getString("nombre"))  // nombre → campo "nombre"
            .set("total", registroDb.getInt("total"))   // total de horas → campo "total"
    );
}

// 3. Respuesta
// Envía la lista final en formato JSON a la interfaz React.
_out.json(lista);
```
:::tip
-  **Atención al nombre de los campos:** Los campos definidos aquí como **"nombre"** y **"total"** son exactamente los mismos que los componentes React buscarán en los próximos pasos (`dataIndex: 'nombre'` y `dataIndex: 'total'`). Deben ser idénticos.

- **Sobre el filtro active = true:** La base de datos tiene una columna **active** en las tablas **trabajador** y **registro**. Al filtrar solo los registros activos, garantizamos que los datos archivados o desactivados no aparezcan en la tabla ni en el gráfico.
:::

## Paso 3: Entorno frontend (React)

Ahora que el backend (base de datos y servicios) está listo, vamos a preparar la interfaz visual.

Abre la terminal y sigue los pasos de abajo:

#### 1. Instalar las dependencias base
Navega hasta la carpeta `ui` de tu aplicación e instala los paquetes.

```bash
npm install
```

#### 2. Instalar las bibliotecas de gráficos

Como el proyecto mostrará gráficos, descarga las bibliotecas que harán ese dibujo en pantalla:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Gestionar varios idiomas

Instala la biblioteca para gestionar varios idiomas:

```bash
npm install react-intl
```

#### 4. Iniciar el compilador (watch)

Con todo instalado, cada vez que guardemos un archivo, la pantalla se actualizará automáticamente:

```bash
npm run watch
```

#### 5. Crear componentes
Para mantener el proyecto organizado, crea componentes separados para la tabla y para el gráfico.

Navega hasta el directorio `src/components/` de tu aplicación y crea las carpetas:

* Tabla: ListaTabla
* Gráfico: GraficoBarras
* Contenedor: VisualizacionDatos

```text
/apps/nombre_de_tu_app/ui/src/components/ListaTabla/
/apps/nombre_de_tu_app/ui/src/components/GraficoBarras/
/apps/nombre_de_tu_app/ui/src/containers/VisualizacionDatos/
```

## Paso 4: Componente ListaTabla

El componente **ListaTabla** recibirá los datos del servicio y construirá las columnas automáticamente usando **Ant Design**, una biblioteca de componentes visuales listos que ya acompaña la interfaz de Netuno.

Navega hasta la carpeta ListaTabla y crea un archivo `index.jsx`:

```text
/apps/nombre_de_tu_app/ui/src/components/ListaTabla/index.jsx
```

Abre el archivo y pega el código de abajo:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Componente de tabla de Ant Design

import './index.less';

const mensajes = 'contenedorpanel.visualizaciondatos.tabla';

function ListaTabla({ datos = [] }) {
  // Definición de los encabezados y qué campo del objeto mostrar en cada columna
  const columnas = [
    {
      title: <FormattedMessage id={`${mensajes}.trabajadores`} />, // Título traducido
      dataIndex: 'nombre',  // Campo "nombre" del JSON devuelto por el servicio
    },
    {
      title: <FormattedMessage id={`${mensajes}.total`} />,
      dataIndex: 'total', // Campo "total" del JSON devuelto por el servicio
    }
  ];

  return (
    <Table
      columns={columnas}      // Estructura de las columnas
      dataSource={datos}      // Los datos en sí (lista de objetos)
      pagination={false}     // Sin paginación: todos los registros de una vez
      bordered={true}        // Con bordes visibles en las celdas
    />
  );
}

export default ListaTabla;
```

 **Entendiendo el código:**

Este componente funcional recibe la lista `datos` como parámetro (prop) y la entrega directamente al `<Table>` de Ant Design.

La configuración **columnas** indica a Ant Design qué título mostrar en el encabezado **title** y qué campo del objeto JSON rellenar en la celda `dataIndex`. Ant Design se encarga de todo el HTML, los estilos de bordes y el diseño automáticamente; no es necesario crear CSS manual para ello.

**Archivo index.less:** Crea el archivo `index.less` en la misma carpeta. Puede quedar vacío por ahora, ya que Ant Design ya proporciona la estilización base de la tabla.


## Paso 5: Componente GraficoBarras

Crearemos un gráfico de barras para visualizar los datos utilizando la biblioteca **react-chartjs-2**. Este componente recibirá los datos, los transformará al formato que entiende Chart.js, asignará colores y dibujará el gráfico en pantalla.

Navega hasta la carpeta `GraficoBarras` y crea un archivo llamado `index.jsx`:

```text
/apps/nombre_de_tu_app/ui/src/components/GraficoBarras/index.jsx
```
Abre el archivo y pega el código de abajo:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Componente de gráfico de barras
import { Chart, registerables } from 'chart.js';  // Núcleo de Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const mensajes = 'contenedorpanel.visualizaciondatos.grafico';

// OBLIGATORIO: registrar todos los elementos de Chart.js antes de usar.
// Sin esta línea el gráfico no se renderiza y lanza un error en la consola.
Chart.register(...registerables);

function GraficoBarras({ datos }) {
  const intl = useIntl();
  const [datosGrafico, setDatosGrafico] = useState(null); // Datos en el formato de Chart.js

  useEffect(() => {
    // Paleta de 7 colores para las barras (cíclica si hay más de 7 elementos)
    const colores = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const etiquetas = [];
    const valores = [];

    // Estructura de datos exigida por Chart.js
    const nuevosDatosGrafico = {
      labels: [],       // Nombres en el eje X (horizontal)
      datasets: [
        {
          label: intl.formatMessage({ id: `${mensajes}.etiqueta` }), // Leyenda traducida
          data: [],           // Valores en el eje Y (altura de las barras)
          backgroundColor: [] // Color de cada barra
        }
      ]
    };

    // Iterar sobre los datos recibidos y montar las listas
    for (const i in datos) {
      etiquetas.push(datos[i].nombre);   // Nombre del trabajador → eje X
      valores.push(datos[i].total);  // Total de horas → altura de la barra

      // (i + 1) % 7: cuando "i" llega a 7, vuelve a 0, repitiendo los colores en ciclo
      nuevosDatosGrafico.datasets[0].backgroundColor.push(colores[(i + 1) % 7]);
    }

    nuevosDatosGrafico.labels = etiquetas;
    nuevosDatosGrafico.datasets[0].data = valores;

    setDatosGrafico(nuevosDatosGrafico); // Guardar en el estado para disparar la re-renderización

  }, [datos]); // Ejecutar de nuevo siempre que "datos" cambie

  // Mientras los datos no se hayan procesado, no renderiza nada
  if (datosGrafico == null) {
    return null;
  }

  return (
    <Bar data={datosGrafico} />
  );
}

export default GraficoBarras;
```
**Entendiendo el código:**

Este componente tiene tres responsabilidades principales:

**Preparación `useState`:** Inicia el componente con estado `null` para esperar el procesamiento de los datos que vienen del servidor.

**Procesamiento de los datos `useEffect`:** Cuando los datos llegan mediante la prop `datos`, el Hook **useEffect** se dispara automáticamente. Define una paleta de colores y usa un bucle **for** para separar la información: los nombres de los trabajadores van a las etiquetas del eje X **labels**, los totales de horas definen la altura de las barras `data`, y se asigna un color a cada barra de forma cíclica.

**Dibujo en pantalla `return`:** Utiliza el componente `<Bar>` de la biblioteca para dibujar el gráfico a partir de los datos procesados y guardados en el estado.

**Archivo index.less:** Crea también el archivo `index.less` dentro de la carpeta `GraficoBarras`. Puede quedar vacío por ahora.


## Paso 6: Diseño visual VisualizacionDatos

Ahora que los componentes de tabla y gráfico están listos, necesitamos un contenedor que los coloque uno al lado del otro en pantalla.

Navega hasta la carpeta **VisualizacionDatos** y crea un archivo llamado `index.jsx`:

```text
/apps/nombre_de_tu_app/ui/src/containers/VisualizacionDatos/index.jsx
```

Abre el archivo y pega el código de abajo:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Títulos traducibles por idioma

import GraficoBarras from "../../components/GraficoBarras";
import ListaTabla from "../../components/ListaTabla";

import './index.less';

const mensajes = 'contenedorpanel.visualizaciondatos';

function VisualizacionDatos({ datos = [] }) {
  return (
    <div>
      <div className="row">              {/* Fila de Bootstrap */}

        {/* Columna de la izquierda: Tabla */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading visualizacion-datos__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${mensajes}.tabla.titulo`} />
              </h3>
            </div>
            <div className="panel-body">
              <ListaTabla datos={datos} />   {/* Pasa los datos a la tabla */}
            </div>
          </div>
        </div>

        {/* Columna de la derecha: Gráfico */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading visualizacion-datos__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${mensajes}.grafico.titulo`} />
              </h3>
            </div>
            <div className="panel-body">
              <GraficoBarras datos={datos} />    {/* Pasa los mismos datos al gráfico */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VisualizacionDatos;
```
**Entendiendo el código:**

Este componente actúa como un organizador visual. Recibe la lista `datos` y la distribuye a los dos componentes hijos sin ninguna transformación.

Las clases `row` y `col-lg-6` son de «Bootstrap Grid» y dividen la pantalla por la mitad: la columna de la izquierda recibe la tabla y la de la derecha recibe el gráfico. En pantallas más pequeñas (móviles), se apilan automáticamente.

Las clases `panel`, `panel-heading` y `panel-body` crean el aspecto de una «cajita con título» para cada componente.

**Archivo index.less:** Crea también el archivo `index.less` en esta carpeta para la futura estilización de los paneles.

## Paso 7: Contenedor del panel

Ya tenemos los servicios en el backend y los componentes visuales en el frontend. Necesitaremos un contenedor para ir al servidor, buscar los datos y pasarlos a **VisualizacionDatos**.

Netuno ya genera automáticamente la estructura básica del panel. Edita el archivo existente:

```text
/apps/nombre_de_tu_app/ui/src/containers/ContenedorPanel/index.jsx
```

Sustituye el contenido del archivo por el código de abajo:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Cliente HTTP oficial de Netuno

import { Spin, message } from 'antd';           // Indicador de carga y errores

import VisualizacionDatos from "../VisualizacionDatos"; // El diseño visual

import { useIntl } from 'react-intl';           // Soporte para varios idiomas

import './index.less';

const mensajes = 'contenedorpanel.visualizaciondatos';

function ContenedorPanel({}, ref) {
  const intl = useIntl();
  const [trabajadores, setTrabajadores] = useState([]);   // Estado: lista de trabajadores
  const [cargando, setCargando] = useState(false); // Estado: ¿está cargando?

  // Al abrir la página, disparar la búsqueda automáticamente
  useEffect(() => {
    cargarTrabajadores();
  }, []);

  const cargarTrabajadores = () => {
    setTrabajadores([]);      // Limpiar datos anteriores
    setCargando(true);    // Activar indicador de carga

    _service({
      // Detecta el idioma del panel y llama a la URL correcta del servicio
      url: intl.locale.indexOf('es') == 0 ? '/services/trabajadores' : '/services/workers',
      success: (respuesta) => {
        setTrabajadores(respuesta.json); // Guardar los datos recibidos en el estado
        setCargando(false);
      },
      fail: (error) => {
        setCargando(false);
        console.error('Ha fallado el servicio de trabajadores.', error);
        message.error(intl.formatMessage({ id: `${mensajes}.error_carga` }));
      }
    });
  };

  // Permite que el componente padre (Panel) dispare cargarTrabajadores() mediante ref
  useImperativeHandle(ref, () => ({
    cargarTrabajadores
  }));

  return (
    <div ref={ref}>
      { cargando == false
        ? <VisualizacionDatos datos={trabajadores} /> // Datos listos: mostrar el panel
        : <Spin/>                              // Aún cargando: mostrar la rueda
      }
    </div>
  );
}

export default React.forwardRef(ContenedorPanel);
```

**Entendiendo el código:**

Este componente tiene tres responsabilidades principales:

**Estado inicial `useState`:** Crea dos controles internos: **trabajadores** (la lista que viene del servidor) y **cargando** (un indicador que señala si los datos todavía se están buscando).

**Búsqueda de datos `_service`:** La función **cargarTrabajadores** usa **_service** para llamar al servicio backend. A diferencia de **fetch** nativo de JavaScript, **_service** gestiona la autenticación, la sesión y el tratamiento de errores automáticamente. También detecta el idioma del panel y elige la URL correcta `/trabajadores` para ES, `/workers` para EN.

**Distribución y dibujo `return`:** Mientras se buscan los datos, muestra la rueda de carga **(Spin)**. Cuando llegan los datos, pasa la lista **trabajadores** a **VisualizacionDatos**, que la distribuye a la tabla y al gráfico.

### Estilizando el panel

Abre el archivo `index.less` de la carpeta `ContenedorPanel` y pega el código de abajo para destacar los encabezados de los paneles:

```text
/apps/nombre_de_tu_app/ui/src/containers/ContenedorPanel/index.less
```

```css
.fondoPanel {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Entendiendo el código:**

Esta clase define un color de fondo azul **(#3f54ba)** y un área de relleno **(padding)** en los encabezados.

La utilizan las clases `visualizacion-datos__panel` de `VisualizacionDatos` para garantizar que los títulos **Tabla** y **Gráfico** queden visualmente destacados.


## Paso 8: Compilación del proyecto

Para garantizar que Netuno compile todo el código React:

* **Si tu terminal ha seguido abierta** con `npm run watch` ejecutándose en segundo plano: tus cambios se compilan automáticamente cada vez que se guarda un archivo.
* **Si has cerrado la terminal** o el proceso se ha detenido: no hay problema. Abre la terminal de nuevo, navega hasta la carpeta `ui` y ejecuta el comando otra vez:

```bash
npm run watch
```

## Conclusión

A lo largo de este tutorial, has adquirido competencias esenciales para trabajar con la plataforma Netuno, dominando el ciclo de integración del flujo de datos entre el servidor y la interfaz de usuario.

Este desarrollo abordó los siguientes temas:

- **Base de datos:** Creación y organización de tablas y estructuras de datos de forma visual y eficiente.

- **Backend REST:** Desarrollo de servicios y lógica de negocio para proporcionar datos mediante API.

- **Frontend con React:** Integración y visualización dinámica de esos datos en una interfaz moderna y responsive.

Si tienes dificultades o sugerencias de mejora, ponte en contacto.

Nuestro equipo y nuestra comunidad están listos para ayudar.

¡Buen desarrollo!