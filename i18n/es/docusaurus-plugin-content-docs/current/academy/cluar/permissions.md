---
sidebar_position: 12
id: permissions
title: Permisos
sidebar_label: Permisos
---

Cómo se controla el acceso al backoffice mediante roles y organizaciones.

## Introducción

CLUAR controla el acceso al backoffice mediante **roles** (grupos), asignados a personas dentro de una **organización**. Cada servicio REST del servidor se clasifica en una categoría de acceso, y solo quien tenga el rol correcto, dentro de la organización correcta, puede usarlo.

## Roles

Existen 5 roles precreados (`user_group`):

| Código | Nombre |
|---|---|
| `administrator` | Administrador |
| `editor` | Editor |
| `author` | Autor |
| `contributor` | Colaborador |
| `subscriber` | Suscriptor |

:::info No todos los roles tienen permisos asignados todavía
Hoy, solo **Administrador** y **Editor** tienen acceso a algo realmente: son los únicos roles referenciados en las reglas de acceso (ver abajo). Autor, Colaborador y Suscriptor ya existen como opción en el formulario, pero aún no tienen ningún acceso configurado; asignar uno de estos roles a alguien no le da, hoy, acceso a nada en el backoffice.
:::

## Organización

Una persona solo tiene un rol **dentro del contexto de una organización**: la vinculación se realiza en `Organización > Miembros` (`organization_people`), asociando Persona + Organización + Rol.

Hoy solo existe una organización, con el código `admins`, y es en ella donde se verifican todos los permisos. La entidad `organization` admite jerarquía (`parent_id`, organizaciones «padre»), pero esa jerarquía todavía no se usa en las reglas de permisos actuales: todas las comprobaciones apuntan directamente a la organización `admins`.

## Primer acceso al modo de edición

CLUAR distingue dos lugares diferentes donde se inicia sesión:

- El **backoffice de Netuno** (puerto `9000` en desarrollo): es donde se gestionan directamente los usuarios de Netuno (`netuno_user`, el par usuario/contraseña) y todas las entidades, incluidas Persona y Roles.
- La **Área Reservada** del propio sitio web (`/login`, puerto `3000` en desarrollo): es donde el editor de contenido entra en el día a día para acceder al modo de edición de las páginas.

Para entrar en la Área Reservada y tener disponible el modo de edición, se necesita un usuario de Netuno con inicio de sesión que esté asociado a una **Persona**, vinculada a la organización `admins` con el rol **Administrador** o **Editor** (ver [Organización](#organización) arriba).

### Usuario predeterminado

El `server/setup/030-people.js` de CLUAR ya crea, por defecto, una Persona «admin» vinculada al usuario de Netuno de `id: 2`, y el `server/setup/050-organization_people.js` ya vincula esa Persona a la organización `admins` con el rol **Administrador**, es decir, ese usuario ya nace con acceso total.

El inicio de sesión de ese usuario predeterminado es:

```
usuario: admin
contraseña: admin
```

Con estas credenciales, se puede entrar directamente en la Área Reservada (`/login`) ya como Administrador, sin necesidad de ningún paso adicional en el backoffice de Netuno primero.

:::info Cambia la contraseña predeterminada en producción
`admin`/`admin` es una credencial conocida y predecible. Antes de que un sitio pase a producción, cambia la contraseña de este usuario (o crea un nuevo Administrador y desactiva este).
:::

### Crear nuevos usuarios

Hay dos caminos posibles:

**Por la Área Reservada (recomendado):** en `Usuarios > Crear Usuario`, un único formulario pide nombre, nombre de usuario, contraseña, correo electrónico, Organización y Rol, y lo crea todo de una vez: el usuario de Netuno, la Persona (ya vinculada a ese usuario) y el vínculo a la organización/rol elegidos. No es necesario pasar por el backoffice de Netuno.

**Solo mediante el backoffice de Netuno:** como el backoffice da acceso directo a todas las entidades, también es posible realizar los mismos 3 pasos manualmente, sin salir de allí:

1. Crear el usuario de Netuno (`netuno_user`), con el nombre de usuario/contraseña elegidos.
2. Crear una **Persona**, asociándola a ese usuario de Netuno.
3. En `Organización > Miembros`, asociar esa Persona a la organización `admins`, con el rol Administrador o Editor.

En ambos casos, la persona creada ya puede entrar en `/login` y tener acceso al modo de edición.

## Cómo se aplican los permisos

Cada servicio del servidor se clasifica en una de estas categorías, definidas en `server/core/_service_config.js`:

| Categoría | Quién tiene acceso | Ejemplos |
|---|---|---|
| **Públicos** | Cualquier persona, sin inicio de sesión | Contacto, avatar, login |
| **Gestión de contenido** | Administrador + Editor | Páginas, versiones, componentes, diccionario, acciones |
| **Administración del sitio** | Solo Administrador | Configuraciones, idiomas, sincronización |
| **Gestión de accesos** | Solo Administrador | Organizaciones, personas, usuarios |

Cualquier servicio que no esté listado en una de estas categorías se **deniega por defecto**; es una decisión deliberada del código (comentada explícitamente en el archivo), para que olvidar clasificar un servicio nuevo dé como resultado un bloqueo, y no un acceso libre por descuido.

:::info Los permisos no se aplican en el entorno de desarrollo
En el entorno `dev`, `_service_config.js` libera todos los servicios nada más empezar, antes de cualquier comprobación; es decir, **los permisos solo se aplican realmente en producción/staging**. Al probar localmente, cualquier usuario con sesión iniciada tiene acceso a todo, independientemente del rol.
:::

## Interfaz: el menú también filtra por permisos

Además del bloqueo en el servidor, el menú lateral de la Área Reservada (`website/src/components/SideMenu`) también filtra los elementos visibles según el rol de la persona con sesión iniciada, para no mostrar opciones que no tendría permiso para usar.

:::info Mantener las dos listas sincronizadas
La lista de «quién puede ver qué» en `SideMenu` se mantiene alineada manualmente con `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` y `ACCESS_MANAGEMENT_PATHS` de `_service_config.js`: son dos listas separadas, una en el frontend y otra en el backend. Al añadir un nuevo servicio protegido, hay que actualizar las dos; cambiar solo el servidor oculta el error (el menú sigue mostrando una opción que en la práctica se denegará), y cambiar solo el menú no protege nada en realidad.
:::

## Cómo proteger un nuevo servicio

1. Crea el servicio con normalidad en `server/services/`.
2. Añade la ruta del servicio (`path/method`) a la lista correcta en `server/core/_service_config.js` —`CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` o `ACCESS_MANAGEMENT_PATHS`— según quién deba poder usarlo. Si es público, añádelo a `PUBLIC_PATHS`.
3. Si el servicio tiene un elemento correspondiente en el menú de la Área Reservada, actualiza también el `SideMenu` para que el filtro coincida con el permiso real.