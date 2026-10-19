---
sidebar_position: 4
id: queries-interface
title: Interfaz de consultas
---


La herramienta de Consultas de Netuno es un recurso potente que permite la interacción directa con la base de datos de la aplicación mediante SQL (Structured Query Language).

Esta funcionalidad es esencial para probar lógicas de negocio, validar información almacenada y establecer las bases para informes o componentes de interfaz complejos. Netuno admite actualmente tres sistemas de gestión de bases de datos: **PostgreSql, H2 Database y MySQL**.

## 1 - Sección Consultas

En el modo «Construir», en el menú lateral, acceda al área de «Gestión» y haga clic en la sección «Consultas».

![Interfaz de consultas](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Área de comandos

Esta área es el entorno de interacción directa con la base de datos del proyecto. Aquí es posible ejecutar comandos para consultar, buscar y analizar datos de forma precisa e instantánea.

Asegúrese de que la sintaxis utilizada sea compatible con la base de datos configurada en su entorno de Netuno.

![Área de consulta de la base de datos](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Área de validación

El área de validación proporciona respuesta instantánea sobre la sintaxis y la ejecución de su código.

- **Éxito (verde):** Cuando la consulta se ejecuta sin errores de sintaxis o de estructura, el mensaje se muestra con el fondo en color verde. Esto indica que los datos se han procesado y están listos para su visualización.

![Área de validación: éxito](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Fallo o error (rojo):** Si existe cualquier impedimento en la ejecución (como un error de sintaxis, un nombre de columna incorrecto o falta de permisos), el mensaje se mostrará con el fondo en color rojo. Además del color, el sistema mostrará el registro de error técnico para ayudar en el diagnóstico.

![Área de validación: fallo](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Área de resultados

Es el lugar donde se presenta de forma estructurada la información solicitada a la base de datos. Le permite visualizar el contenido de las tablas y confirmar si la lógica de su consulta está devolviendo los registros esperados.

![Área de resultados](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Botones de acción

Esta sección detalla las herramientas disponibles para ejecutar, guardar y gestionar sus scripts SQL, optimizando el flujo de trabajo y la reutilización de consultas complejas.

Permite no solo la ejecución de comandos en tiempo real, sino también la gestión inteligente de la productividad mediante registros históricos y bibliotecas de scripts guardados.

![Botones de acción](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Botón - Ejecutar

- **Función:** Envía el script presente en el área de «Comandos» para que lo procese la base de datos.

- **Respuesta:** Tras la ejecución, el sistema muestra un mensaje de éxito (en verde) y rellena automáticamente el área de «Resultados» con los datos solicitados.

### 5.2 Botón - Historial

- **Función:** Registra las consultas ejecutadas recientemente, mostrando el tiempo de ejecución (en milisegundos) y el registro de «fecha/hora» de cada acción.

- **Recuperación rápida:** Al hacer clic en cualquier registro de la lista del historial, el script correspondiente se inserta de nuevo en el área de «Comandos» para ejecutarlo o editarlo.

![Botón de historial de comandos](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Botón - Guardar

**Función:** Permite almacenar scripts útiles y convertirlos en plantillas permanentes. Esto es útil para consultas complejas que necesitan ejecutarse con frecuencia.

**Pasos para guardar:**

- Con el script listo en el editor, haga clic en Guardar.

- En la ventana modal «Guardar comando», introduzca un «Nombre» claro para identificar la función de la consulta (ej.: «Filtrar productos por precio»).

- Haga clic en el botón Guardar dentro de la modal para confirmar el almacenamiento.

![Botón de guardar comando](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Botón - Registro

**Función:** Permite listar todos los scripts que se han guardado anteriormente.

- **Cargar script:** Haga clic sobre el script deseado para añadirlo al área de «Comandos».

- **Eliminar:** Utilice el icono de papelera junto a cada registro para eliminarlo definitivamente tras la confirmación.

![Botón de comandos registrados](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)