---
sidebar_position: 3
id: configuration
title: Configuración
sidebar_label: Configuración
---

> El proceso siguiente está orientado a entornos de desarrollo Linux.

## 1. Nombre de la app

Renombra la carpeta del proyecto (el nombre de la app) usando solo letras minúsculas, números y guion bajo.

## 2. Fichero de configuración

Copia el fichero de configuración de ejemplo, desde la raíz de la app:

```
cp config/sample.json config/_development.json
```

Para un entorno de producción, usa en su lugar:

```
cp config/sample.json config/_production.json
```

Después, cambia la propiedad `name` en la raíz del JSON por el nombre de la app elegido en el paso 1.

> Los ficheros `config/_development.js` y `config/_production.js` ya existen en el proyecto y sirven para configuraciones dinámicas/programáticas — normalmente no necesitas tocarlos; el que se edita es el `.json` correspondiente.

## 3. Base de datos

CLUAR necesita una conexión a una base de datos PostgreSQL. [Aprende a configurar aquí](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

En `config/_development.json` (o `_production.json`), localiza `db.default` y sustitúyelo por los datos de tu base de datos:

```json
"db": {"default": {
    "password": "Tu-SeCr3t0-D3-BD-Aqu1",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. Secreto JWT

En `auth.jwt.secret`, define un secreto aleatorio de **32 caracteres**, usado para garantizar la seguridad de la autenticación:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "EsteSecretoDebeTener32Caracteres!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> Se recomienda generar el secreto con una [herramienta de generación de código aleatorio](https://www.random.org/passwords/).

## 5. Altcha (alternativa a reCAPTCHA)

CLUAR es compatible con [Altcha](https://altcha.org/) — una alternativa a Google reCAPTCHA basada en prueba de trabajo (*proof-of-work*), sin depender de servicios externos ni recopilar datos del visitante. Se usa en el inicio de sesión y en el registro de usuarios.

Existen dos interruptores, en lugares diferentes del `.json`:

```json
"auth": {
    "altcha": {
        "enabled": false,
        "admin": {
            "enabled": false
        }
    }
}
```

- `auth.altcha.enabled` — activa la verificación de Altcha en el lado del servidor (Netuno). Sin esto en `true`, Altcha no se valida, aunque aparezca en el sitio web.
- `auth.altcha.admin.enabled` — activa Altcha también en el inicio de sesión del **backoffice de Netuno** (puerto `9000`), separado del inicio de sesión del sitio web.

```json
"settings": {
    "cluar": {
        "website": {
            "auth": {
                "altcha": {
                    "enabled": false,
                    "admin": {
                        "enabled": false
                    }
                }
            }
        }
    }
}
```

- `settings.cluar.website.auth.altcha` — refleja la misma opción del lado del sitio web: controla si el widget de Altcha se muestra en el formulario de inicio de sesión/registro del sitio.

> Para que Altcha funcione, activa `enabled: true` **en los dos lados** — el servidor necesita validar, y el sitio web necesita mostrar el widget.

## 6. Definiciones de CLUAR

En `settings.cluar`, ajusta la configuración del sitio web:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Nombre del sitio web",
            "analytics": null,
            "mapbox": {
                "dark": false,
                "accessToken": null
            },
            "services": {
                "api": "http://localhost:9000/services/"
            },
            "auth": {"providers": {
                "discord": false,
                "facebook": false,
                "github": false,
                "google": false
            }}
        },
        "uglifyjs": false
    }
}
```

- `website.url` — URL donde se ejecutará el sitio web.
- `website.name` — nombre del sitio web.
- `website.services.api` — URL de la API de servicios de Netuno, consumida por el sitio web.
- `website.auth.providers` — activa/desactiva métodos de inicio de sesión social (Discord, Facebook, GitHub, Google).
- `uglifyjs` — controla si el código del sitio web se minifica.

## 7. Arranque automático del sitio web (opcional)

El sitio web puede arrancar automáticamente junto con el servidor Netuno, a través de la lista `commands`:

```json
"commands": [
    {
        "path": "website",
        "command": "bun run dev",
        "install": "bun install",
        "enabled": true
    }
]
```

Basta con poner `enabled` como `true` en la entrada con `"path": "website"`. Así, al ejecutar `./netuno server app=cluar`, el sitio web arranca junto sin que necesites iniciarlo manualmente en otra terminal.

## Siguiente paso

Con la app configurada, continúa con [Ejecución](/docs/academy/cluar/execution).