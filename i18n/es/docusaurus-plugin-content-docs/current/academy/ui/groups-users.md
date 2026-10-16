---
sidebar_position: 6
id: groups-users
title: Grupos y Usuarios
---

## Creación y Edición 

Esta sección es el centro administrativo de su aplicación. Aquí, usted gestiona las credenciales, los niveles de privilegio y audita las actividades realizadas en el sistema, garantizando que cada usuario tenga acceso exactamente a lo que necesita.

#### Requisitos
- **Acceso a Netuno:** Es necesario estar conectado en su instancia y tener permiso de **Administrador**.
- **Aplicación Creada:** Es necesario tener una aplicación previamente creada. Más información: [Guía de Interfaz: Crear Aplicación](/docs/academy/app-create).
- **Formularios:** Tenga al menos uno o dos formularios creados. Más información: [Guía de Interfaz: Crear Formulario](/docs/academy/ui/forms).

### Menú

Permite acceder a las configuraciones para la gestión de seguridad, usuarios, grupos y monitoreo de registros. 

![access-menu-pt.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Acceda al “modo visualización” y haga clic en "Developer" en la esquina superior derecha de la pantalla. 

## Contraseña

Permite el cambio de la contraseña de acceso al sistema.

Al hacer clic en "Developer" en la esquina superior derecha de la pantalla, acceda a la sección “Contraseña”.

- Introduzca su contraseña antigua.
- Introduzca su nueva contraseña. **Deberá tener como mínimo 8 caracteres incluyendo números, letras mayúsculas y minúsculas, y caracteres especiales.**
- Confirme la contraseña y haga clic en el botón **Guardar**. 
- Tras esta acción, se mostrará un mensaje de éxito.

![password-pt.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Usuario

Esta sección es el centro de control para la gestión de perfiles de usuarios. 

Al hacer clic en "Developer" en la esquina superior derecha de la pantalla, acceda a la sección “Usuario”.

#### Requisitos

- El usuario a editar debe estar previamente registrado en la base de datos.

 ### 1 - Editar usuario existente

Esta sección describe cómo localizar y actualizar la información de un usuario que ya está registrado en el sistema.

![edit-existing-user-pt.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Cómo editar un usuario:**

- Seleccione un usuario registrado y modifique la información deseada.
- Haga clic en el botón **Guardar** para confirmar la modificación.
- Tras esta acción, se mostrará un mensaje de éxito.

### 2 - Añadir nuevo usuario

Esta sección permite registrar nuevos usuarios, definiendo sus credenciales de acceso y niveles de permiso dentro del sistema.

![create-new-user-pt.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nombre:** Introduzca el nombre del usuario.
- **Usuario:** Introduzca el nombre para inicio de sesión - debe contener solo letras minúsculas y separadas con un punto.
- **Contraseña:** Introduzca la primera contraseña de acceso al sistema del nuevo usuario. 
- **Correo electrónico:** Introduzca el correo electrónico de contacto.
- **Ninguna:** Permite bloquear la contraseña del usuario para no efectuar el inicio de sesión.  
- **Grupo:** Seleccione el grupo principal al que pertenece el usuario. 
- **Activo:** Permite activar o desactivar un usuario en el sistema.
- **Botón de Guardar:** Haga clic para guardar la información del nuevo usuario.

### 3 - Permisos del Usuario 

La gestión de permisos se realiza a través de una interfaz intuitiva organizada por pestañas **(Formularios e Informes)**. 

Esto le permite configurar detalladamente lo que el usuario puede acceder justo después de su creación o durante una edición.

En las columnas de **Leer, Escribir y Eliminar,** encontrará un menú desplegable con diferentes niveles de alcance:

- **Nada:** El usuario no posee ningún permiso para esta acción.
- **Propietario:** El usuario solo puede interactuar con registros que él mismo creó.
- **Grupo:** El usuario puede interactuar con registros creados por cualquier miembro de su grupo.
- **Todo:** Permiso total. El usuario accede a los registros de todos los usuarios y grupos.

#### Pestaña Formularios

En esta pestaña, usted controla la interacción del usuario con los módulos de entrada de datos de la aplicación.

![user-permissions-forms-pt.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Para cada formulario listado, debe definir los siguientes parámetros:

- **Activo:** Define la visibilidad. Si está marcado, el formulario aparecerá en el menú lateral para el usuario.
- **Leer:** Establece el nivel de permiso solo para visualización de los registros.
- **Escribir:** Define si el usuario tiene permiso para insertar nuevos datos o editar información existente.
- **Eliminar:** Define si el usuario posee autoridad para eliminar registros de la base de datos.

#### Pestaña Informes

Similar a los formularios, esta pestaña controla el acceso a los módulos de visualización y extracción de datos analíticos.

![user-permissions-report-pt.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Para que un informe esté disponible, la opción **Activo** debe estar seleccionada para que el usuario tenga permiso para visualizar.

- **Guardar:** Haga clic en el botón "Guardar" para guardar los cambios.

### 4 - Botones de Acción

![action-buttons-pt.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Guardar:** Guarda todos los cambios realizados.

 - **Limpiar:** Limpia todos los campos del formulario, revirtiendo al estado inicial de "Añadir nuevo usuario".

 - **Personificar:** Una herramienta poderosa de Netuno. Después de guardar los permisos de un usuario y hacer clic en el botón **"Personificar"**, es posible visualizar el sistema exactamente como lo utilizará el usuario registrado. Esto es esencial para probar si los permisos se configuraron correctamente.

 - **Eliminar:** Elimina permanentemente el registro del usuario.

## Grupo

Aquí está el panel central para la gestión de perfiles de acceso en Netuno, permitiendo ejecutar dos acciones: **“Añadir”** un nuevo grupo y **“Editar”** un grupo existente. 

Un grupo funciona como un perfil o regla de acceso que determina lo que cada conjunto de usuarios puede visualizar o realizar dentro del sistema.

En lugar de configurar permisos individualmente para cada usuario, usted los define en el grupo y vincula los usuarios a él, garantizando una administración escalable y organizada.

Al hacer clic en **"Developer"** en la esquina superior derecha de la pantalla, acceda a la sección de **"Grupo"**.

#### Requisitos

- **Acceso Administrativo:** Es necesario poseer un perfil con permisos de administrador para crear o modificar grupos.

### Cómo Añadir un Nuevo Grupo

![add-new-group-pt.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Localice la sección "Añadir".
- **Nombre:** Dé un nombre claro y descriptivo para el grupo. 
- **Permitir el Inicio de sesión:** Marque esta opción si los usuarios de este grupo deben ser capaces de realizar inicio de sesión en el sistema.
- **Administrador:** Marque esta opción solo si los usuarios de este grupo tienen acceso total al sistema.
- **Correo electrónico:** Introduzca un correo electrónico de contacto para el grupo.
- **Activo:** Marque esta opción para activar las configuraciones en el sistema.
- **Botón-Guardar:** Haga clic para guardar las configuraciones del grupo.
- **Botón-Limpiar:** Haga clic para limpiar todos los campos del formulario.

### Cómo Editar un Grupo Existente

![edit-existing-group-pt.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Seleccione el grupo registrado en el campo "Editar grupo existente" en la parte superior de la página.
- Haga clic en la casilla de selección "Seleccionar un grupo".
- Elija el grupo que desea editar en la lista.
- Espere a que los datos del grupo rellenen automáticamente los campos (Nombre, Correo electrónico y las opciones).
- Realice los cambios que desee y haga clic en "Guardar".

## Historial de Registros

La pantalla "Historial de Registros" es la herramienta de registro y auditoría de su aplicación. 

Cuando un usuario cree, edite o elimine un registro en cualquier formulario, el sistema guardará un "registro" de esa acción.

Esta página le permite buscar y filtrar todo ese historial. Esto es esencial para:

 - **Seguridad:** Monitorear actividades sospechosas o no autorizadas.

 - **Auditoría:** Mantener un registro de conformidad de todos los cambios de datos.

 - **Diagnóstico:** Entender cómo un registro específico llegó a su estado actual. Ejemplo: "¿quién eliminó este cliente?".

### Cómo Buscar el Historial de Registros

![log-pt.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Rellene uno o más campos "Filtros" para encontrar los registros de log que desea buscar, luego haga clic en el botón "Buscar".

- Acceda a la página "Historial de Registros".
- Rellene los filtros deseados para limitar su búsqueda. No es necesario rellenar todos los campos. Ejemplo: Para ver todo lo que el usuario "Developer" hizo hoy:
- Seleccione "Developer" en el campo Usuario.
- En el campo Inicio, seleccione la fecha de hoy y la hora.
- En el campo Fin, seleccione la fecha de hoy y la hora.
- Haga clic en el botón "Buscar".
- Los resultados (la lista de registros) se mostrarán debajo del formulario de búsqueda.

## Salir

Haga clic en “Salir” para cerrar su sesión en el sistema de forma segura.