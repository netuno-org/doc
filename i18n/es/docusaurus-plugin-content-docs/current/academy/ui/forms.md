---
sidebar_position: 2
id: forms
title: Formularios
---

## Cómo crear formularios

La gestión de formularios es el área donde puedes crear y administrar las estructuras de datos de tu aplicación. Cada formulario que creas aquí se convierte en una interfaz en el back-office para insertar, editar y visualizar datos, además de corresponder a una tabla de la base de datos.

Se divide en dos pasos esenciales y obligatorios, acompañado de una breve aproximación a la **agrupación de formularios** y al **modo diagrama**.

![gestion-formularios-es.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Título del formulario

Es el nombre de tu formulario; por lo tanto, introduce un nombre claro e intuitivo.
Se mostrará en el menú lateral del backoffice en las siguientes secciones: **Formularios** (en el modo Visualizar) y **Gestionar Campos** (en el modo Construir).

![titulo-nombre-formulario-es.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Nombre de la tabla

Es el nombre técnico que se usará para crear la tabla correspondiente en la base de datos. Este nombre lo usan internamente el sistema y los desarrolladores.

**Cómo rellenar:**

- **Manual:** Escribe un nombre único en singular, con letras minúsculas y sin espacios ni caracteres especiales (usa el formato `snake_case`, por ejemplo: registro_cliente).
- **Automático:** Marca la casilla **Auto** junto al campo. El sistema generará automáticamente un nombre técnico basado en el **Título del formulario**. Esta es la práctica recomendada para mantener la consistencia.
- 

![nombre-tabla-formulario-es.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Agrupación de formularios (Padre)

Este campo permite crear una jerarquía entre formularios. Al seleccionar un "Padre", estás definiendo que el formulario actual es un subelemento del formulario seleccionado. Se mostrará en el menú lateral en las siguientes secciones: "Formularios" (en el modo Visualizar) y "Gestionar Campos" (en el modo Construir) del formulario principal asociado.

**Cómo rellenar:**

- Déjalo en blanco si este es un formulario principal (como "Cliente").
- Selecciona un formulario existente en la lista si quieres crear una relación de dependencia. Por ejemplo, un formulario "Direcciones" podría tener "Cliente" como padre.

![agrupacion-formularios-padre-es.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Opciones de control

Estas casillas de verificación activan funcionalidades específicas para el formulario.

- **Mostrar Id:** Marca esta opción si deseas que el campo de identificación única (ID) de cada registro sea visible en el listado de datos del formulario.
- **Control por Activo:** Activa un control de estado (Activo/Inactivo) para cada registro. Esto permite desactivar un elemento sin necesidad de eliminarlo de la base de datos.
- **Control por Usuario:** Hace que cada registro creado en el formulario se asocie al usuario que lo creó. Es útil para rastrear quién realizó cada registro.
- **Control por Grupo:** Asocia cada registro a un grupo de usuarios. Esta opción se usa habitualmente para gestionar permisos de acceso a los datos según los grupos registrados en el sistema.

![opciones-control-formulario-es.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Configuración de ordenación y usuarios asociados

Estos campos definen valores predeterminados para nuevos registros y el orden de visualización.

- **Reordenar:** Define un número para el orden en que este formulario aparecerá en el menú lateral. Los números menores (como 0, 1, 2) aparecen primero.
- **Usuario:** Selecciona un usuario predeterminado que se asociará a los nuevos registros, en caso de que el "Control por Usuario" esté activado. "General" significa que no hay un usuario específico.
- **Grupo:** Selecciona un grupo predeterminado que se asociará a los nuevos registros, en caso de que el "Control por Grupo" esté activado. "General" significa que no hay un grupo específico.

![configuracion-ordenacion-usuarios-asociados-es.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Modo diagrama

La pantalla de **Diagrama** ofrece una visualización gráfica de toda la estructura de datos de tu aplicación. Conocido como Diagrama Entidad-Relación (DER), muestra todos los formularios (que representan tablas en la base de datos), sus respectivos campos y las conexiones entre ellos.
Esta herramienta es fundamental para entender rápidamente cómo está organizada y conectada la información de tu aplicación, lo que facilita el análisis y el desarrollo.

![diagrama-formulario-es.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> ¡Prueba a crear varios formularios y campos, y visualízalos en el modo diagrama!

## Siguiente paso

¡Guarda el formulario y pasa al siguiente paso: creación de campos!

Consulta [aquí](/docs/academy/ui/fields) cómo empezar a crear campos.