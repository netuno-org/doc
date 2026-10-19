---
id: configuration
title: Configuración
sidebar_label: Configuración
---

## Configuraciones básicas de una aplicación

Toda aplicación creada en Netuno tiene configuraciones específicas que definen cómo debe conectarse a bases de datos, claves de acceso y otros parámetros fundamentales.

Netuno utiliza un sistema inteligente que organiza estas configuraciones según el entorno en el que se está ejecutando la aplicación, ya sea localmente, en un servidor oficial o en cualquier otro.

Las configuraciones de su aplicación están centralizadas en la carpeta **config**, situada en la raíz de su proyecto.

**Ruta predeterminada:** `mi-app/config`

### Entornos de ejecución

Dentro de la carpeta config, los archivos se nombran según el entorno para el que fueron creados. Netuno carga automáticamente solo los archivos que corresponden al entorno en el que se está ejecutando en ese momento:

- **Desarrollo**: Los archivos nombrados como `_development` solo se leen cuando el entorno de Netuno está definido como desarrollo.

- **Producción**: Los archivos nombrados como `_production` solo se leen cuando el entorno de Netuno está definido como producción.

### Tipos de archivos de configuración

Para cada entorno, puede utilizar dos tipos de archivos que funcionan conjuntamente:

### JSON

- `_development.json`
- `_production.json`

**Función:** Almacenar las definiciones y parametrizaciones estáticas.

**Ejemplo:** Incluir credenciales de base de datos, URLs de APIs externas y configuraciones fijas.

### JS

- `_development.js`
- `_production.js`

**Función:** Ejecutar lógica en el momento en que se carga la configuración.

**Ejemplo:** Cambiar configuraciones dinámicamente o realizar tareas y procesamientos iniciales necesarios antes de que la aplicación se ejecute por completo.

### Definición del entorno general

Para que sus aplicaciones sepan qué configuración deben utilizar, debe informar al servidor Netuno en qué "modo" está operando. Esta configuración global se define en un único archivo en la raíz de Netuno.

1. **Localice el archivo de configuración global:** Vaya a la carpeta raíz donde se instaló Netuno. Encuentre y abra el archivo llamado `config.js`.
2. **Encuentre la variable de entorno:** Dentro del archivo, busque la propiedad `config.env`.
3. **Defina el entorno deseado:** Cambie el valor de la variable según el entorno que desee activar.

#### Entorno de desarrollo
Se utiliza mientras programa y prueba en su propia máquina.

```javascript
// En el archivo ./config.js en la raíz de Netuno
config.env = 'development'
```

#### Entorno de producción
Se utiliza cuando su proyecto está finalizado y ejecutándose en el servidor oficial para los usuarios.

```javascript
// En el archivo ./config.js en la raíz de Netuno
config.env = 'production'
```

#### Otros entornos (personalizados)

Netuno es flexible y permite crear nombres de entornos personalizados; por ejemplo: `pruebas`, `homologacion` o `preproduccion`.

```javascript
// En el archivo ./config.js en la raíz de Netuno
config.env = 'pruebas'
```

> La configuración de la aplicación debe empezar por `_`, tener la extensión `.json` y también un archivo con la extensión `.js`, ambos del mismo entorno.

## Repositorio Git

Al utilizar Git para versionar el código de su aplicación, es fundamental garantizar la seguridad de sus datos.

Los archivos de configuración suelen contener información sensible, como contraseñas de bases de datos, claves de API privadas, etc. Por eso, **nunca debe enviar los archivos de configuración reales al repositorio**.

Para garantizar que sus contraseñas no se filtren y, al mismo tiempo, mantener el proyecto documentado para otros desarrolladores, siga estos dos pasos:

### 1. Oculte los archivos reales

En la raíz de su aplicación, abra (o cree) el archivo llamado `.gitignore`. Añada las rutas de sus archivos de configuración `.json` para que Git los ignore por completo.

**Ejemplo de lo que debe añadir en `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_pruebas.json
```

### 2. Archivo de configuración de ejemplo

Cree un archivo de ejemplo con los datos necesarios para que los nuevos desarrolladores configuren el proyecto fácilmente.

- Vaya a la carpeta config/ de su aplicación.
- Cree un archivo llamado `ejemplo.json`.
- Copie la estructura de su `_development.json` dentro de él, dejando solo los nombres de los campos.

Vea cómo debe quedar su **config/ejemplo.json**:

```json
{
  "database": {
    "host": "PON_AQUI_EL_HOST",
    "user": "TU_USUARIO",
    "password": "TU_CONTRASEÑA"
  }
}
```

#### Cómo acceder a las configuraciones en el código

Después de definir sus variables y claves en los archivos de configuración (como `_development.json`), necesitará utilizarlas en la lógica de su aplicación; por ejemplo, al crear un servicio que se conecta a una API y necesita un *token* de acceso guardado.

En Netuno, estas configuraciones pueden accederse a través del recurso nativo `_app`.

#### Cómo buscar los datos

Dentro de cualquier código ejecutado por el servidor (como en la carpeta `server/services/`), utilizará la función `_app.config()` para buscar los valores que están en su archivo de configuración activo.

Para entender cómo se realiza la vinculación, imagine que en su archivo de configuración (`config/_development.json`) ha definido lo siguiente:

```json
{
  "nombre": "Mi Aplicación",
  "versión": 2
}
```
 
 Para obtener el valor de la clave "nombre" e imprimirlo en la consola (log) del servidor, utilizaría el siguiente código en su servicio .js:

```javascript
// 1. Netuno va al archivo JSON, busca la clave "nombre" y toma su valor.
// 2. Después, guarda ese valor dentro de la variable JavaScript que llamamos 'nombreDeApp'.
let nombreDeApp = _app.config().getString("nombre");

// 3. Imprime el contenido de nuestra variable en el terminal de Netuno: "Mi Aplicación"
_log.info(nombreDeApp);
```

## Configuraciones personalizadas

Además de las configuraciones predeterminadas de la base de datos y del servidor, puede crear sus propias variables de configuración.

Esto es muy útil para definir reglas de negocio, como por ejemplo "cantidad máxima de elementos por página" o "intervalo de envío de correos electrónicos", sin necesidad de modificar el código de la aplicación cada vez que cambien esas reglas.

Estas variables se guardan dentro del bloque `"settings"` en sus archivos de configuración JSON, como `_development.json` o `_production.json`.

### Estructura del JSON y visibilidad (público vs. privado)

Al crear sus configuraciones, es fundamental separar lo que la Interfaz de Usuario (Frontend) puede ver y lo que debe permanecer protegido solo en el Servidor (Backend).

* **Variables privadas:** Están dentro del bloque `"settings"`. Solo el servidor tiene acceso.
* **Variables públicas:** Están dentro del subbloque `"public"`. Se envían a la interfaz de usuario (carpeta `ui`), del área administrativa, como en el desarrollo de paneles de control.

**Ejemplo de cómo estructurar su archivo `.json`:**

```json
{
  ...
  "settings": {
    "public": {
      "elementosPorPagina": 10
    },
    "intervaloCorreos": 10
  }
}
```

### Cómo acceder a las configuraciones en el código
La forma de recuperar estos datos cambia según dónde esté programando:

**1. En el Servidor / Backend (Servicios)**

Para acceder a configuraciones generales o privadas, utilice el recurso `_app.settings()` en su código de servidor (archivos .js en la carpeta server).

```javascript
// Accede a la variable privada "intervaloCorreos"
const intervaloCorreos = _app.settings().getInt("intervaloCorreos");

_log.info("El intervalo definido es de: " + intervaloCorreos);
```

**2. En la Interfaz / Frontend (UI)**

En el desarrollo de la interfaz (archivos de la carpeta ui), puede acceder a todo lo que se definió dentro del bloque "public". Para ello, utilice el objeto global `netuno.config.app.settings`.

```javascript
// Accede a la variable pública "elementosPorPagina" en el frontend
const elementosPorPagina = netuno.config.app.settings.elementosPorPagina;

console.log("Mostrando " + elementosPorPagina + " elementos en la tabla.");
```
## Conclusión

El sistema de configuraciones de Netuno ofrece flexibilidad y seguridad estructural para su aplicación. A través de él, es posible:

* **Gestionar múltiples entornos:** Crear y admitir distintos contextos de ejecución (desarrollo, producción, etc.) con parametrizaciones independientes.
* **Personalizar variables:** Utilizar el bloque `settings` para añadir configuraciones específicas de su negocio.
* **Separar responsabilidades:** Aislar y proteger las configuraciones restringidas al backend de aquellas que deben ser accesibles en el frontend.