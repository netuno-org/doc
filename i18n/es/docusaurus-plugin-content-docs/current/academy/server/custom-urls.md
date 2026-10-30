---
id: custom-urls
title: URL personalizadas
sidebar_label: URL personalizadas
---

## Introducción

Netuno permite cambiar las direcciones predeterminadas, por ejemplo:

- La dirección de la interfaz de administración, `admin`.
- La dirección de archivos públicos, como imágenes, CSS y JS, `public`.
- La dirección de los servicios de la API REST, `services`.

## Configuración

Navegue dentro de la aplicación que está desarrollando hasta el archivo de configuración de entorno. En este ejemplo, utilizaremos el archivo de entorno de desarrollo ubicado en:

- 📂 `config/_development.json`

Compruebe si ya no existe la configuración de URL; si no existe, añada al final del archivo de configuración (en formato JSON) los parámetros de configuración de URL, como por ejemplo:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Define el prefijo de la dirección URL de la interfaz de administración; el valor predeterminado es solo `/`.

### public

Define el prefijo de la dirección URL de los archivos estáticos que son públicos, como imágenes, estilos CSS y código JavaScript; el valor predeterminado es `/public`.

### services

Define la dirección URL inicial de los servicios web de la API REST; el valor predeterminado es `/services`.

## Conclusión

La personalización de las URL es importante, tanto para hacerlas más intuitivas como para poder hacerlas más complejas y aumentar la seguridad.

Por ejemplo, en la dirección de administración se puede colocar un prefijo con una secuencia de caracteres aleatorios; así, solo quien se lo sepa de memoria accederá a la dirección de acceso, lo que dificulta el acceso y evita ataques.