---
sidebar_position: 3
id: tutorials
title: Tutoriales
sidebar_label: Tutoriales
---

# Tutoriales

Explora los tutoriales de la plataforma Netuno y aprende, de forma práctica, cómo configurar recursos, modelar datos, crear interfaces y desarrollar lógica de negocio en el backend.

Esta página reúne los principales contenidos para quienes están empezando y también para quienes desean profundizar en el uso de la plataforma.

## Antes de empezar

Antes de iniciar cualquier tutorial, comprueba que tu entorno está listo:

- **Netuno instalado** y en ejecución en el entorno local o de desarrollo.
- **Acceso al panel administrativo** con los permisos adecuados.
- **Conocimientos básicos recomendados** sobre modelado de datos, HTTP y APIs REST para aprovechar mejor los contenidos técnicos.

Consulta la guía de [Instalación](./installation) antes de continuar.

## Orden recomendado

Si esta es tu primera experiencia con Netuno, sigue esta secuencia:

1. Conoce la interfaz gráfica.
2. Aprende a crear formularios y campos.
3. Configura relaciones entre formularios.
4. Avanza hacia permisos y grupos de usuarios.
5. Explora consultas y recursos de backend según la necesidad del proyecto.

## Interfaz gráfica - Frontend

Los tutoriales de esta sección están dirigidos a quienes desean crear y configurar aplicaciones con el apoyo de la interfaz administrativa de la plataforma.

| Tutorial | Objetivo | Nivel |
|---|---|---|
| [Conoce la Interfaz Gráfica](/docs/academy/ui/graphical-interface) | Entender la estructura del panel, los menús y los recursos principales. | Principiante |
| [Formularios](/docs/academy/ui/forms) | Crear y organizar formularios de forma visual. | Principiante |
| [Campos](/docs/academy/ui/fields) | Configurar tipos de datos, validaciones y comportamiento de los campos. | Principiante |
| [Relaciones entre Formularios](/docs/academy/ui/relationships-between-forms) | Definir vínculos entre datos y relaciones entre formularios. | Intermedio |
| [Grupos y Usuarios](/docs/academy/ui/groups-users) | Gestionar permisos, perfiles de acceso y organización de usuarios. | Intermedio |
| [Interfaz de Consultas](/docs/academy/ui/queries-interface) | Crear consultas visuales para el análisis y la extracción de datos. | Intermedio |
| [Formulario Modal](/docs/academy/explore/modal-form) | Construir interacciones avanzadas con ventanas modales. | Avanzado |

## Backend

Netuno permite combinar low-code con desarrollo backend en diferentes lenguajes y escenarios. Los tutoriales siguientes te ayudan a crear integraciones, manipular datos e implementar reglas de negocio.

### Requisitos previos

Antes de avanzar hacia esta sección, se recomienda tener familiaridad con:

- Arquitectura cliente-servidor y protocolo HTTP.
- Estructuras de datos en JSON.
- Lógica de programación en JavaScript, Python u otro lenguaje compatible con tu flujo de desarrollo.

### APIs e integraciones

| Tutorial | Objetivo | Nivel |
|---|---|---|
| [Servicios Web REST](/docs/academy/server/services/rest) | Crear y exponer endpoints para su consumo por aplicaciones y sistemas externos. | Intermedio |
| [Envío de Correos Electrónicos](/docs/academy/server/services/sending-emails) | Configurar el envío de correos electrónicos transaccionales vía SMTP. | Intermedio |

### Datos y persistencia

| Tutorial | Objetivo | Nivel |
|---|---|---|
| [Queries mediante Programación](/docs/academy/server/database/db-query-execute) | Ejecutar consultas personalizadas e interacciones directas con la base de datos. | Intermedio |
| [Form y Operaciones de Base de Datos](/docs/academy/server/database/db-form-operations) | Controlar el ciclo de vida de los datos en inserciones, actualizaciones y eliminaciones. | Intermedio |
| [Generar IDs Únicos (UID/GUID)](/docs/academy/server/services/generate-uid-guid) | Implementar identificadores únicos con buenas prácticas. | Intermedio |

### Infraestructura y bases de datos

| Tutorial | Objetivo | Nivel |
|---|---|---|
| [Configuración de MSSQL](/docs/academy/server/database/mssql) | Conectar y configurar Netuno con Microsoft SQL Server. | Intermedio |
| [Múltiples Bases de Datos](/docs/academy/server/database/multiple-databases) | Trabajar con más de una base de datos en el mismo proyecto. | Avanzado |

### Recursos avanzados

| Tutorial | Objetivo | Nivel |
|---|---|---|
| [Plantillas](/docs/academy/server/templates) | Crear estructuras reutilizables y dinámicas para acelerar el desarrollo. | Avanzado |
| [JWT Token](/docs/academy/server/services/jwt) | Implementar autenticación basada en tokens. | Avanzado |
| [Desarrollo y Depuración en Java](/docs/academy/server/java-core/setup) | Configurar el entorno para la depuración y las extensiones en Java. | Avanzado |

:::tip Cómo elegir un tutorial

Usa los tutoriales de **interfaz gráfica** cuando el objetivo sea configurar la aplicación visualmente, estructurar datos y administrar recursos desde la interfaz.  
Usa los tutoriales de **backend** cuando sea necesario crear lógica de negocio, integraciones, autenticación, automatizaciones o acceso programático a los datos.
:::

## Próximos pasos

Después de completar los primeros tutoriales, accede a la [Academia Netuno](/docs/academy/overview) para profundizar en tu conocimiento en áreas específicas de la plataforma.


Si encuentras algún error (bug) o tienes sugerencias de nuevas funcionalidades, no dudes en [Abrir una issue en GitHub](https://github.com/netuno-org/doc). Nuestro equipo y la comunidad están listos para ayudar.