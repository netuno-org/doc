---
id: rest
title: REST - Servicios Web
sidebar_label: REST - Servicios Web
---

## Introducción

Las peticiones REST son direcciones en línea que devuelven información de datos procesados en el servidor, que contiene la lógica de negocio de los datos que exigen seguridad y fiabilidad, con integración de la base de datos.

> Más sobre <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

La construcción de la API REST se basa en los Servicios de Netuno.

## TODOS

Para crear un servicio en Netuno que responda a cualquier tipo de método HTTP:

- `📂 server/services/mi-servicio.js`

En el navegador, este servicio se ejecutará para todos los tipos de peticiones en la dirección:

- http://localhost:9000/services/mi-servicio

## GET

Las direcciones de tipo GET se utilizan normalmente para operaciones de listado o de obtención de datos.

Para crear un servicio en Netuno que responda solo al tipo de método GET, utilice una de estas formas:

- `📂 server/services/lista/get.js`
- `📂 server/services/lista.get.js`

En el navegador, este servicio se ejecutará solo para el tipo de petición GET en la dirección:

- GET http://localhost:9000/services/lista

## POST

Las direcciones de tipo POST se utilizan normalmente para operaciones que crean o generan nuevos datos.

Para crear un servicio en Netuno que responda solo al tipo de método POST, cree el archivo de código utilizando una de estas formas:

- `📂 server/services/crear/post.js`
- `📂 server/services/crear.post.js`

Este servicio se ejecutará solo para el tipo de petición POST en la dirección:

- POST http://localhost:9000/services/crear

## PUT

Las direcciones de tipo PUT se utilizan normalmente para operaciones que modifican registros de datos.

Para crear un servicio en Netuno que responda solo al tipo de método PUT, cree el archivo de código utilizando una de estas formas:

- `📂 server/services/guardar/put.js`
- `📂 server/services/guardar.put.js`

Este servicio se ejecutará solo para el tipo de petición PUT en la dirección:

- PUT http://localhost:9000/services/guardar

## DELETE

Las direcciones de tipo DELETE se utilizan normalmente para operaciones que eliminan nuevos registros de datos.

Para crear un servicio en Netuno que responda solo al tipo de método DELETE, cree el archivo de código utilizando una de estas formas:

- `📂 server/services/eliminar/delete.js`
- `📂 server/services/eliminar.delete.js`

Este servicio se ejecutará solo para el tipo de petición DELETE en la dirección:

- DELETE http://localhost:9000/services/eliminar

## OPTIONS

En la integración con el frontend, durante el proceso de validación del CORS, el navegador realiza la llamada de tipo OPTIONS.

> Más sobre <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Para crear un servicio en Netuno que responda solo al tipo de método OPTIONS, cree el archivo de código utilizando una de estas formas:

- `📂 server/services/listar/options.js`
- `📂 server/services/listar.options.js`

Debe implementarse para todos los servicios que se integran en un frontend externo, como un sitio web.

Código utilizado normalmente:

```javascript
_out.json(_val.map().set("resultado", true))
```

Este servicio se ejecutará para el tipo de petición OPTIONS en la dirección:

- OPTIONS http://localhost:9000/services/listar

## Clientes y Ejecución de Pruebas

Para ejecutar pruebas a los servicios con el tipo de método específico, puede utilizar programas propios que realizan pruebas sobre API REST, como:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Con el comando `curl` en el terminal puede realizar cualquier tipo de prueba.

Desde la consola/línea de comandos envía un GET:

```
curl http://localhost:9000/services/guardar
```

Con `-X` puede especificar el tipo de método:

```
curl -X POST -F 'nombre=Prueba' -F 'email=email@ejemplo.com' http://localhost:9000/services/guardar
```

> El parámetro `-F` envía con el Content-Type: `multipart/form-data`

Otra forma de enviar parámetros:

```
curl -X POST -d 'nombre=Prueba' -d 'email=email@ejemplo.com' http://localhost:9000/services/guardar
```

Puede concatenarse de la siguiente forma:

```
curl -X POST -d 'nombre=Prueba&email=email@ejemplo.com' http://localhost:9000/services/guardar
```

> El parámetro `-d` envía con el Content-Type: `application/x-www-form-urlencoded`

### JSON

Para enviar en formato JSON es necesario especificar el tipo de contenido:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nombre": "Prueba", "email": "email@ejemplo.com"}' \
    http://localhost:9000/services/guardar
```

> El `-H` define la parametrización de la cabecera (_HEADER_)

### Subida

Para realizar la subida de archivos:

```
curl -X POST -F 'imagen=@/home/usuario/archivo.jpg' http://localhost:9000/services/guardar
```

## Cliente de Servicio - NPM

Para realizar fácilmente la integración con el frontend, se proporciona el módulo NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Comando de instalación: `npm i -S @netuno/service-client`

Al definir la dirección de los servicios, como:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Podrá ejecutar servicios integrados con el frontend, como por ejemplo:

```
  _service({
      url: "/services/mi-servicio",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (respuesta) => {
          if (respuesta.json) {
              console.log("Respuesta del Servicio", respuesta.json);
          }
      },
      fail: (e) => {
          console.log("Error del Servicio", e);
      }
  });
```

## Conclusión

Se admite restringir los servicios únicamente al tipo de método HTTP deseado.

Para integrar con el frontend se puede hacer en el nivel más bajo utilizando `fetch`.

Para agilizar y estandarizar la implementación se proporciona el módulo NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).