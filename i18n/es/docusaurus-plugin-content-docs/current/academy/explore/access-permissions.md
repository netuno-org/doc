---
id: access-permissions
title: Acceso y Permisos
sidebar_label: Acceso y Permisos
---

Cómo gestionar usuarios, grupos y garantizar la seguridad de la aplicación.

## Introducción

La seguridad es uno de los pilares fundamentales de cualquier aplicación. Ya sea para una aplicación interna simple o un sistema complejo con miles de usuarios externos vía API.

Netuno ofrece, de forma nativa, un sistema robusto de **Control de Accesos y Permisos**, proporcionando las herramientas necesarias para gestionar la seguridad de forma centralizada y eficiente. Y elimina la necesidad de desarrollar estas funcionalidades desde cero.

Entre los principales mecanismos de seguridad destacan:

- Gestión de usuarios y grupos.
- Control de permisos sobre los datos y la gestión de datos.
- Historial detallado de los intentos de autenticación.
- Bloqueo automático por IP tras intentos de acceso fallidos consecutivos.
- Autenticación integrada con LDAP, Google, GitHub, Discord, etc.
- Módulo de autenticación JWT para front-end.
- Entre otros...

## Gestión de Usuarios

Se trata de la administración de las cuentas individuales que acceden a la plataforma. Cada usuario, servicio o integración que necesita entrar en el sistema debe poseer un registro de usuario único.

En el área de gestión de usuarios de Netuno, usted tiene control total sobre el ciclo de vida de estas cuentas:
- **Creación**: Registro de nuevos miembros del equipo o clientes.
- **Mantenimiento**: Actualización de correos electrónicos, cambio de contraseñas y datos personales.
- **Control de Acceso**: Bloqueo rápido de cuentas (desactivación) sin necesidad de eliminar los datos históricos.

:::tip Guía Visual 
Para obtener información detallada sobre la Gestión de Usuarios, consulte la [Guía de la Interfaz: Usuarios y Grupos](/docs/academy/ui/groups-users)
:::


## Gestión de Grupos

La definición de reglas de autorización se realiza mediante Grupos, que establecen qué menús, formularios, servicios y datos cada usuario tiene permiso para acceder o manipular. En lugar de configurar permisos individualmente, lo ideal es definir las reglas en el Grupo y, a continuación, asociar los usuarios a él. Este procedimiento garantiza:

- **Escalabilidad:** Facilidad para gestionar cientos de usuarios.
- **Seguridad:** Menor riesgo de conceder accesos indebidos accidentalmente.
- **Organización:** Separación clara entre Administradores, Gestores, Supervisores y usuarios en general.

Netuno ya incluye grupos nativos como `dev` y `admin`, y proporciona total autonomía para crear grupos personalizados que respondan a las reglas de negocio de su aplicación.

:::tip Guía Visual 
Para obtener información detallada sobre la Gestión de Grupos, consulte la [Guía de la Interfaz: Usuarios y Grupos](/docs/academy/ui/groups-users)
:::


## Control de Permisos de Datos

Para garantizar la funcionalidad de un grupo o los permisos de un usuario, es crucial establecer qué datos está autorizado a manipular. En Netuno, el control de acceso es detallado y se aplica directamente a los Formularios (tablas) de su aplicación.

El sistema utiliza una matriz de permisos que permite definir, para cada funcionalidad, si un determinado grupo posee la debida autorización para:

- **Leer:** Solo visualizar los registros.
- **Escribir:** Insertar y editar registros en la base de datos.
- **Eliminar:** Eliminar registros permanentemente.

Esta flexibilidad asegura la protección de los datos sensibles, ya que cada colaborador tiene acceso restringido únicamente a la información esencial para la ejecución de sus tareas.

:::tip Guía Visual 
Para obtener información detallada sobre cómo configurar los permisos de datos, consulte la [Guía de la Interfaz: Usuarios y Grupos](/docs/academy/ui/groups-users)
:::

## Historial de Autenticación

Para garantizar transparencia y control, todos los intentos de acceso (exitosos o inválidos) se registran y pueden consultarse en el Historial de Autenticación.

El sistema monitorea y almacena detalladamente la información de cada intento de inicio de sesión del usuario:

- **IP de Origen:** La dirección de red desde donde partió la solicitud.
- **Momento:** El momento exacto de la acción.
- **Acceso:** Si el acceso fue permitido, denegado o bloqueado.

#### Leyenda de Iconos de Acceso

🟩 **Candado/check_mark, en color verde:** Indica un éxito. El usuario proporcionó las credenciales correctas y el inicio de sesión fue autorizado. También indica que la IP de origen fue desbloqueada.

🟧 **Icono con "X", en color naranja:** Indica la cantidad de intentos inválidos.

🟥 **Candado en color rojo:** Indica el bloqueo de la IP de origen.

## Bloqueo Automático

Netuno posee un sistema de seguridad activo diseñado para proteger su aplicación contra ataques y accesos no autorizados.

Cuando se detectan actividades sospechosas, como múltiples intentos consecutivos de un inicio de sesión inválido, el sistema bloquea automáticamente la dirección IP de origen.

Una vez bloqueada, la IP no podrá realizar nuevas solicitudes durante un período determinado o hasta que el bloqueo se elimine manualmente.

### Configurar Reglas de Bloqueo

Esta regla se define en los **archivos de configuración** del entorno de su aplicación "development.json" o "production.json".

#### 1. Localice el archivo de configuración

En la raíz de su proyecto, navegue hasta la carpeta `config`. Abra el archivo correspondiente al entorno que desea proteger:

* Para desarrollo: `_development.json`

* Para producción: `_production.json`

#### 2. Inserte el código de protección
Dentro del archivo JSON, localice la sección `auth`. Si no existe, inserte el bloque `attempts` según el ejemplo a continuación:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Entendiendo los parámetros

* `interval`: Ventana de tiempo en **minutos** (ejemplo: 60 minutos = 1 hora).

* `maxFails`: Número máximo de fallos permitidos dentro de ese intervalo antes del bloqueo.


#### 4. Comportamiento del sistema

- Tras el bloqueo automático, el usuario queda impedido de acceder a la aplicación.

- Por defecto, el sistema está configurado para tres intentos inválidos con el bloqueo durante una hora. Después de este período, los intentos se liberan nuevamente.

- Este proceso se puede configurar según las necesidades de su aplicación.


### Desbloquear desde la Interfaz 

Solo un usuario con permiso de "Administrador" puede liberar el acceso directamente desde el Back-Office sin necesidad de acceder a la base de datos.

1. Acceda al menú de la aplicación en modo "Visualizar", y haga clic en la sección **"Configuración > Usuarios"**.
![seccion-configuracion-usuario-es.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. En el campo **"Editar usuario existente"**, seleccione el usuario deseado.
![seleccionar-usuario-existente-es.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. En la sección **"Historial de Autenticación"**, verifique si el estado "Access" muestra el icono de "Candado" en color verde;
![seccion-historial-autenticacion-es.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Haga clic en el icono de **Reloj** para verificar la lista completa de accesos del usuario.
![historial-autenticacion-es.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Haga clic en el candado verde en la columna **"Acceso"** para desbloquear al usuario. Después de esta acción, se muestra un mensaje de éxito.

La liberación es inmediata, permitiendo que el usuario intente iniciar sesión nuevamente.


## Autenticaciones Integradas

Su aplicación puede requerir métodos de entrada más sofisticados, especialmente si está construyendo una aplicación móvil o integrándose en una red corporativa.

Netuno ha sido diseñado para ser flexible e integrarse en el ecosistema de su organización. Además del inicio de sesión estándar (usuario y contraseña), la plataforma ofrece soporte para diversos protocolos de autenticación del mercado.

Esto permite implementar estrategias de Single Sign-On (Inicio de Sesión Único), donde los usuarios acceden al sistema utilizando credenciales que ya poseen, centralizando la gestión de accesos.

**Entornos Corporativos:** Compatibilidad con directorios de usuarios (como LDAP y Active Directory), ideal para intranets y sistemas internos.

**Inicio de Sesión Social (OAuth):** Posibilidad de integración con proveedores como Google, Microsoft, GitHub, entre otros, facilitando el registro y acceso en aplicaciones públicas.

## Autenticación mediante Token (JWT)

Para proyectos que utilizan un Front-end dedicado (como sitios en React, Vue.js o aplicaciones móviles), no se utiliza la pantalla de inicio de sesión tradicional de Netuno. En estos escenarios, se adopta el estándar JWT (JSON Web Token).

Netuno ofrece un servicio nativo que genera y valida estos tokens automáticamente, garantizando seguridad y eficiencia en la comunicación vía API.

:::tip Guía Visual
Para obtener más información sobre cómo implementar y configurar el JWT en sus archivos de configuración, consulte la [Guía de Autenticación JWT](/docs/academy/server/services/jwt)
:::

## Conclusión 

Dominar los recursos de seguridad de Netuno es fundamental para la salud de su proyecto. Al utilizar correctamente las herramientas de gestión de usuarios, de grupos y de monitoreo de historial, usted construye un entorno que equilibra la protección de datos con la facilidad de uso.

Con esto, usted garantiza que su sistema en Netuno sea:

- **Seguro:** Protegiendo información sensible contra accesos no autorizados.

- **Organizado:** Estableciendo jerarquías y responsabilidades claras.

- **Escalable:** Listo para crecer con integraciones modernas.

**Mantenga las buenas prácticas:** Revise periódicamente los permisos de los grupos y verifique el historial de accesos para mantener su entorno saludable.