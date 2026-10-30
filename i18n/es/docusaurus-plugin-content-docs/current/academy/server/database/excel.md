---
id: excel
title: Excel
sidebar_label: Excel
---

En cualquier tipo de negocio en general es habitual disponer de esos archivos de Excel u otro tipo de hojas de cálculo como las de Google Spreadsheets, LibreOffice, OpenOffice, etc., que son ampliamente utilizadas debido a su forma sencilla de resolver la necesidad de organizar la información, analizarla e incluso integrarla con otras hojas de cálculo.

Por lo tanto, Excel y compañía resuelven bien el problema cuando la estructura de la información es relativamente pequeña y la complejidad no es mucha.

La tendencia a lo largo del tiempo tiende a crecer, generando cada vez más archivos con información dispersa.

![Imagen de archivos de Excel](/docs/assets/business/excel-danger.jpg "Archivos en Excel.")

El problema reside en cuando ese archivo de Excel, junto con unos cuantos más, se convierte en un monstruo, donde la gestión pasa a ser difícil y, peor aún, cuando implica a varias personas, empieza a generar varios problemas que fragilizan la información hasta el límite de volverse realmente insostenible.

Es entonces cuando surge la necesidad de crear una aplicación más robusta capaz de gestionar perfiles de usuarios, grupos, gestionar los datos con validación y mejor estructurados, exportar los datos en informes complejos con gráficos y tablas, realizar búsquedas más complejas, integración con otros sistemas y mucho más.

> El principal dilema es que Excel es relativamente barato, y desarrollar una aplicación de gestión es demasiado caro.

Con Netuno podemos, con **poco esfuerzo**, crear rápidamente una aplicación para gestionar toda la información y así sustituir definitivamente los archivos de Excel dispersos y de compleja gestión.

## Hoja de cálculo en tablas de bases de datos

No piense que una base de datos es muy compleja; verá que no lo es y que incluso es muy similar a las hojas de Excel.

> Una tabla de base de datos es lo mismo que una hoja de cálculo.

Por ejemplo, analice su hoja de cálculo en Excel:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Producto 	| Cantidad 	| Precio unidad 	| Precio total 	|
| **2** 	|  Tenedor  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Vaso  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Cuchillo  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Precio total**  	|    **66,00**    	|

Para almacenar esta información en una base de datos es necesario crear una tabla para almacenar la información de los **Productos**.

La tabla estará estructurada como en el ejemplo de abajo y contendrá los siguientes datos:

<table>
    <thead>
        <tr>
            <th colspan="3">Productos</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Tenedor</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Vaso</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Cuchillo</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Así, siempre que se utilicen los datos de algún Producto, tendrán que proceder obligatoriamente de esta tabla.

Es decir, es como si tuviera una hoja de cálculo que guarda la información de los Productos.

Cada fila contiene un ID, un identificador único, por ejemplo un número secuencial.

Para volver a presentar la información deseada, los datos referentes al Producto serán proporcionados por nuestra tabla de Productos, de esta forma:

![Imagen de archivos de Excel](/docs/assets/business/excel-table.jpg "Archivos en Excel.")