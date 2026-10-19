---
sidebar_position: 6
id: groups-users
title: Grupos y usuarios
---

## Creación y edición 

Esta sección es el centro administrativo de su aplicación. Aquí gestiona las credenciales, los niveles de privilegio y audita las actividades realizadas en el sistema, garantizando que cada usuario tenga acceso exactamente a lo que necesita.

#### Requisitos
- **Acceso a Netuno:** Es necesario haber iniciado sesión en su instancia y tener permiso de **Administrador**.
- **Aplicación creada:** Es necesario tener una aplicación creada previamente. Más información: [Guía de interfaz: Crear aplicación](/docs/academy/app-create).
- **Formularios:** Tenga al menos uno o dos formularios creados. Más información: [Guía de interfaz: Crear formulario](/docs/academy/ui/forms).

### Menú

Permite acceder a la configuración para la gestión de seguridad, usuarios, grupos y monitorización de logs. 

![Menú de acceso](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Acceda al "modo de visualización" y haga clic en "Developer" en la esquina superior derecha de la pantalla. 

## Contraseña

Permite cambiar la contraseña de acceso al sistema.

Al hacer clic en "Developer" en la esquina superior derecha de la pantalla, acceda a la sección "Contraseña".

- Introduzca su contraseña anterior.
- Introduzca su nueva contraseña. **Deberá tener un mínimo de 8 caracteres, incluidos números, letras mayúsculas y minúsculas, y caracteres especiales.**
- Confirme la contraseña y haga clic en el botón **Guardar**. 
- Tras esta acción, se mostrará un mensaje de éxito.

![Contraseña](/docs/assets/academy/ui/groups-users/password-pt.png)

## Usuario

Esta sección es el centro de control para la gestión de perfiles de usuario. 

Al hacer clic en "Developer" en la esquina superior derecha de la pantalla, acceda a la sección "Usuario".

#### Requisitos

- El usuario que se va a editar debe estar previamente registrado en la base de datos.

 ### 1 - Editar usuario existente

Esta sección describe cómo localizar y actualizar la información de un usuario que ya está registrado en el sistema.

![Editar usuario existente](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Cómo editar un usuario:**

- Seleccione un usuario registrado y modifique la información deseada.
- Haga clic en el botón **Guardar** para confirmar el cambio.
- Tras esta acción, se mostrará un mensaje de éxito.

### 2 - Añadir nuevo usuario

Esta sección permite registrar nuevos usuarios, definiendo sus credenciales de acceso y niveles de permiso dentro del sistema.

![Crear nuevo usuario](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nombre:** Introduzca el nombre del usuario.
- **Usuario:** Introduzca el nombre para el inicio de sesión; debe contener solo letras minúsculas separadas por un punto.
- **Contraseña:** Introduzca la primera contraseña de acceso al sistema del nuevo usuario. 
- **Correo electrónico:** Introduzca el correo electrónico de contacto.
- **Ninguna:** Permite bloquear la contraseña del usuario para que no pueda iniciar sesión.  
- **Grupo:** Seleccione el grupo principal al que pertenece el usuario. 
- **Activo:** Permite activar o desactivar a un usuario en el sistema.
- **Botón Guardar:** Haga clic para guardar la información del nuevo usuario.

### 3 - Permisos del usuario 

La gestión de permisos se realiza mediante una interfaz intuitiva organizada por pestañas **(Formularios e Informes)**. 

Esto le permite configurar detalladamente a qué puede acceder el usuario justo después de su creación o durante una edición.

En las columnas **Leer, Escribir y Eliminar,** encontrará un menú desplegable con diferentes niveles de alcance:

- **Nada:** El usuario no tiene ningún permiso para esta acción.
- **Propietario:** El usuario solo puede interactuar con registros que él mismo ha creado.
- **Grupo:** El usuario puede interactuar con registros creados por cualquier miembro de su grupo.
- **Todo:** Permiso total. El usuario accede a los registros de todos los usuarios y grupos.

#### Pestaña Formularios

En esta pestaña, usted controla la interacción del usuario con los módulos de entrada de datos de la aplicación.

![Permisos de usuario - Formularios](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Para cada formulario listado, debe definir los siguientes parámetros:

- **Activo:** Define la visibilidad. Si está marcado, el formulario aparecerá en el menú lateral para el usuario.
- **Leer:** Establece el nivel de permiso únicamente para la visualización de los registros.
- **Escribir:** Define si el usuario tiene permiso para insertar nuevos datos o editar información existente.
- **Eliminar:** Define si el usuario tiene autoridad para eliminar registros de la base de datos.

#### Pestaña Informes

De forma similar a los formularios, esta pestaña controla el acceso a los módulos de visualización y extracción de datos analíticos.

![Permisos de usuario - Informes](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Para que un informe esté disponible, la opción **Activo** debe estar seleccionada para que el usuario tenga permiso para visualizarlo.

- **Guardar:** Haga clic en el botón "Guardar" para guardar los cambios.

### 4 - Botones de acción

![Botones de acción](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Guardar:** Guarda todos los cambios realizados.

 - **Limpiar:** Limpia todos los campos del formulario, volviendo al estado inicial de "Añadir nuevo usuario".

 - **Suplantar identidad:** Una herramienta potente de Netuno. Después de guardar los permisos de un usuario y hacer clic en el botón **"Suplantar identidad"**, es posible visualizar el sistema exactamente como lo utilizará el usuario registrado. Esto es esencial para probar si los permisos se han configurado correctamente.

 - **Eliminar:** Elimina permanentemente el registro del usuario.

## Grupo

Aquí está el panel central para la gestión de perfiles de acceso en Netuno, que permite realizar dos acciones: **"Añadir"** un nuevo grupo y **"Editar"** un grupo existente. 

Un grupo funciona como un perfil o regla de acceso que determina qué puede visualizar o realizar cada conjunto de usuarios dentro del sistema.

En lugar de configurar permisos individualmente para cada usuario, los define en el grupo y vincula a los usuarios a él, lo que garantiza una administración escalable y organizada.

Al hacer clic en **"Developer"** en la esquina superior derecha de la pantalla, acceda a la sección **"Grupo"**.

#### Requisitos

- **Acceso administrativo:** Es necesario tener un perfil con permisos de administrador para crear o modificar grupos.

### Cómo añadir un nuevo grupo

![Añadir nuevo grupo](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Localice la sección "Añadir".
- **Nombre:** Asigne un nombre claro y descriptivo al grupo. 
- **Permitir el inicio de sesión:** Marque esta opción si los usuarios de este grupo deben poder iniciar sesión en el sistema.
- **Administrador:** Marque esta opción solo si los usuarios de este grupo tienen acceso total al sistema.
- **Correo electrónico:** Introduzca un correo electrónico de contacto para el grupo.
- **Activo:** Marque esta opción para activar la configuración en el sistema.
- **Botón Guardar:** Haga clic para guardar la configuración del grupo.
- **Botón Limpiar:** Haga clic para limpiar todos los campos del formulario.

### Cómo editar un grupo existente

![Editar grupo existente](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Seleccione el grupo registrado en el campo "Editar grupo existente" en la parte superior de la página.
- Haga clic en el cuadro de selección "Seleccionar un grupo".
- Elija en la lista el grupo que desea editar.
- Espere a que los datos del grupo rellenen automáticamente los campos (Nombre, Correo electrónico y las opciones).
- Realice los cambios que desee y haga clic en "Guardar".

## Histórico de registros

La pantalla "Histórico de registros" es la herramienta de log y auditoría de su aplicación. 

Cuando un usuario cree, edite o elimine un registro en cualquier formulario, el sistema guardará un "log" de esa acción.

Esta página le permite buscar y filtrar todo ese histórico. Esto es esencial para:

 - **Seguridad:** Monitorizar actividades sospechosas o no autorizadas.

 - **Auditoría:** Mantener un registro de conformidad de todos los cambios de datos.

 - **Diagnóstico:** Entender cómo un registro específico ha llegado a su estado actual. Ejemplo: "¿quién eliminó a este cliente?".

### Cómo buscar en el histórico de registros

![Histórico de registros](/docs/assets/academy/ui/groups-users/log-pt.png)

Rellene uno o varios campos "Filtros" para encontrar los registros de log que desea buscar y, a continuación, haga clic en el botón "Buscar".

- Acceda a la página "Histórico de registros".
- Rellene los filtros deseados para limitar su búsqueda. No es necesario rellenar todos los campos. Ejemplo: para ver todo lo que el usuario "Developer" ha hecho hoy:
- Seleccione "Developer" en el campo Usuario.
- En el campo Inicio, seleccione la fecha de hoy y la hora.
- En el campo Fin, seleccione la fecha de hoy y la hora.
- Haga clic en el botón "Buscar".
- Los resultados (la lista de logs) se mostrarán debajo del formulario de búsqueda.

## Salir

Haga clic en "Salir" para cerrar su sesión en el sistema de forma segura.