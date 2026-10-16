---
sidebar_position: 2
id: forms
title: Formularios
---

## Cómo crear formularios

La gestión de formularios es el área donde puedes crear y administrar las estructuras de datos de tu aplicación. Cada formulario que creas aquí se convierte en una interfaz en el back-office para insertar, editar y visualizar datos, además de corresponder a una tabla en la base de datos.

Está dividido en dos pasos esenciales y obligatorios, acompañado de una pequeña aproximación al **agrupamiento de formularios** y al **modo diagrama**.

![gestion-formularios.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Título del Formulario

Es el nombre de tu formulario, por lo tanto, introduce un nombre claro e intuitivo. 
Se mostrará en el menú lateral del backoffice en las siguientes secciones: **Formularios** (en el modo de Visualizar) y **Gestionar Campos** (en el modo de Construir).

![nombre-titulo-formulario.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Nombre de la Tabla

Es el nombre técnico que se utilizará para crear la tabla correspondiente en la base de datos. Este nombre es usado internamente por el sistema y por los desarrolladores.

**Cómo rellenar:**

- **Manual:** Escribe un nombre único en singular, con letras minúsculas y sin espacios ni caracteres especiales (usa el formato `snake_case`, por ejemplo: registro_cliente).
- **Automático:** Marca la casilla **Auto** junto al campo. El sistema generará automáticamente un nombre técnico basado en el **Título del formulario**. Esta es la práctica recomendada para mantener la consistencia.
- 

![nombre-tabla-formulario.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Agrupamiento de formularios (Padre)

Este campo permite crear una jerarquía entre formularios. Al seleccionar un "Padre", estás definiendo que el formulario actual es un subelemento del formulario seleccionado. Se mostrará en el menú lateral en las siguientes secciones: "Formularios" (en el modo de Visualizar) y "Gestionar Campos" (en el modo de Construir) del formulario principal asociado.

**Cómo rellenar:**

- Déjalo en blanco si este es un formulario principal (como "Cliente").
- Selecciona un formulario existente en la lista si quieres crear una relación de dependencia. Por ejemplo, un formulario "Direcciones" podría tener "Cliente" como padre.

![agrupacion-formularios-padre.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Opciones de Control

Estas casillas de selección activan funcionalidades específicas para el formulario.

- **Mostrar Id:** Marca esta opción si deseas que el campo de identificación única (ID) de cada registro sea visible en el listado de datos del formulario.
- **Control por Activo:** Activa un control de estado (Activo/Inactivo) para cada registro. Esto permite desactivar un elemento sin necesidad de eliminarlo de la base de datos.
- **Control por Usuario:** Hace que cada registro creado en el formulario se asocie al usuario que lo creó. Es útil para rastrear quién realizó cada registro.
- **Control por Grupo:** Asocia cada registro a un grupo de usuarios. Esta opción se usa comúnmente para gestionar permisos de acceso a los datos en función de los grupos registrados en el sistema.

![opciones-control-formulario.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Configuraciones de ordenación y usuarios asociados

Estos campos definen valores predeterminados para nuevos registros y el orden de visualización.

- **Reordenar:** Define un número para el orden en que este formulario aparecerá en el menú lateral. Los números menores (como 0, 1, 2) aparecen primero.
- **Usuario:** Selecciona un usuario predeterminado que se asociará a los nuevos registros, en caso de que el "Control por Usuario" esté activado. "General" significa que no hay un usuario específico.
- **Grupo:** Selecciona un grupo predeterminado que se asociará a los nuevos registros, en caso de que el "Control por Grupo" esté activado. "General" significa que no hay un grupo específico.

![configuracion-orden-y-usuarios-asociados.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Modo Diagrama

La pantalla de **Diagrama** ofrece una visualización gráfica de toda la estructura de datos de tu aplicación. Conocido como Diagrama de Entidad-Relación (DER), muestra todos los formularios (que representan tablas en la base de datos), sus respectivos campos y las conexiones entre ellos.
Esta herramienta es fundamental para entender rápidamente cómo está organizada y conectada la información de tu aplicación, facilitando el análisis y el desarrollo.

![diagrama-formulario.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> ¡Prueba a crear varios formularios, campos y visualízalos en el modo diagrama!

## Siguiente Paso

¡Guarda el formulario y pasa al siguiente paso: creación de campos!

Ve [aquí](/docs/academy/ui/fields) cómo empezar a crear campos.