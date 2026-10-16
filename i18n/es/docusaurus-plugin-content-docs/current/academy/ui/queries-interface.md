---
sidebar_position: 4
id: queries-interface
title: Interfaz de Consultas
---


La herramienta de Consulta de Netuno es un recurso poderoso que permite la interacción directa con la base de datos de la aplicación a través de SQL (Structured Query Language). 

Esta funcionalidad es esencial para probar lógicas de negocio, validar información almacenada y establecer las bases para informes o componentes de interfaz complejos. Netuno soporta actualmente tres sistemas de gestión de bases de datos: **PostgreSql, H2 Database y MySQL**.

## 1 - Sección Consulta

En modo "Construir", en el menú lateral, acceda al área de "Gestión" y haga clic en la sección "Consulta".

![interfaz-de-consultas-query-pt.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Área de Comandos

Esta área es el entorno de interacción directa con la base de datos del proyecto. Aquí es posible ejecutar comandos para consultar, buscar y analizar datos de forma precisa e instantánea. 

Asegúrese de que la sintaxis utilizada sea compatible con la base de datos configurada en su entorno Netuno.

![area-de-consulta-de-base-de-datos-pt](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Área de Validación

El área de validación proporciona retroalimentación instantánea sobre la sintaxis y la ejecución de su código.

- **Éxito (Verde):** Cuando la consulta se ejecuta sin errores de sintaxis o de estructura, el mensaje se muestra con el fondo en color verde. Esto indica que los datos fueron procesados y están listos para su visualización.

![area-de-validacion-exito-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Fallo o Error (Rojo):** Si hubiera cualquier impedimento en la ejecución (como error de sintaxis, nombre de columna incorrecto o falta de permiso), el mensaje se mostrará con el fondo en color rojo. Además del color, el sistema presentará el registro de error técnico para ayudar en el diagnóstico.

![area-de-validacion-fallo-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Área de Resultado

Es el lugar donde la información solicitada a la base de datos se presenta de forma estructurada. Permite visualizar el contenido de las tablas y confirmar si la lógica de su consulta está devolviendo los registros esperados.

![area-de-resultado-pt.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Botones de Acción

Esta sección detalla las herramientas disponibles para ejecutar, guardar y gestionar sus scripts SQL, optimizando el flujo de trabajo y la reutilización de consultas complejas.

Permite no solo la ejecución de comandos en tiempo real, sino también la gestión inteligente de la productividad mediante registros históricos y bibliotecas de scripts guardados.

![botones-de-accion-pt-at.png](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Botón - Ejecutar

- **Función:** Envía el script presente en el área de "Comandos" para ser procesado por la base de datos.

- **Feedback:** Tras la ejecución, el sistema muestra un mensaje de éxito (en verde) y rellena automáticamente el "Área de Resultado" con los datos solicitados.

### 5.2 Botón - Historial

- **Función:** Registra las consultas ejecutadas recientemente, mostrando el tiempo de ejecución (en milisegundos) y el registro de "fecha/hora" de cada acción.

- **Recuperación Rápida:** Al hacer clic en cualquier registro de la lista de historial, el script correspondiente se inserta nuevamente en el área de "Comandos" para ser ejecutado o editado.

![boton-de-historial-de-comandos-pt-at.png](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Botón - Guardar

**Función:** Permite almacenar scripts útiles y transformarlos en modelos permanentes. Esto es útil para consultas complejas que necesitan ser ejecutadas con frecuencia.

**Paso a Paso para Guardar:**

- Con el script listo en el editor, haga clic en Guardar.

- En la ventana modal "Guardar Comando", introduzca un "Nombre" claro para identificar la función de la consulta (ej: "Filtrar productos por precio").

- Haga clic en el botón Guardar dentro de la modal para confirmar el almacenamiento.

![boton-de-guardar-comando-pt-at.png](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Botón - Registro

**Función:** Permite listar todos los scripts que fueron guardados anteriormente.

- **Cargar script:** Haga clic sobre el script deseado para añadirlo al área de "Comandos".

- **Eliminar:** Utilice el icono de papelera al lado de cada registro para eliminarlo definitivamente tras la confirmación.

![boton-de-comandos-registrados-pt-at.png](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)