---
sidebar_position: 3
id: api
title: API
---

Netuno tiene un framework propio para crear API REST de forma low-code, con soporte para JWT (JSON Web Token) y OpenAPI 3.0.

Todo el framework para el desarrollo de servicios web en Netuno es muy versátil y permite realizar cualquier tipo de desarrollo.

El framework ya trae muchas funcionalidades para el desarrollo low-code, ahorrando muchas líneas de código para realizar las necesidades más comunes como enviar correos, consumir otras APIs REST, integrar con otras bases de datos, generar archivos PDF y Excel, enviar SMS, manipular datos de la base de datos, entre muchos otros.

Y cuando no existen soluciones en el framework de Netuno, es posible integrar fácilmente bibliotecas Java, Kotlin o incluso JavaScript ya existentes para desarrollar recursos a medida e integrarlos con el framework de Netuno.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) es la especificación del estándar para el paso de datos del contexto de sesión al cliente, mediante un objeto JSON.

Así, el servidor no necesita guardar los datos sensibles de los usuarios con sesión iniciada, sino que pasa a ser un token que se transmite al cliente y, posteriormente, en cada petición este token tiene que ser devuelto.

Este token pasa por algunos controles de seguridad, como el tiempo límite de validez y un proceso para permitir crear un nuevo token sin exigir una nueva autenticación.

Netuno tiene integrado el soporte para JWT, es simple y fácil de utilizar, y también funciona integrado con los usuarios y la autenticación nativa de Netuno.

## OpenAPI 3.0

Después del éxito de Swagger v1 y v2, que desde hace mucho se convirtieron en un estándar para el desarrollo de la definición de los servicios web y la generación del código de cliente.

Así, Swagger hizo su definición abierta y pasó a ser [OpenAPI 3](https://www.openapis.org/).

Donde sigue siendo el cimiento para definir el estándar de cómo se documenta la API y cómo se generan los clientes para consumir la API.

Netuno ya trae toda la integración con OpenAPI 3.0, que utiliza la definición de OpenAPI junto con la validación de [JSON Schema](https://json-schema.org/).

Esto quiere decir que Netuno también permite validar la entrada y la salida de los servicios web, recurriendo a la validación del esquema del JSON obtenido y devuelto, así, para el:

- `Input`: En caso de que haya una llamada al servicio web que no cumpla la estructura y las validaciones, entonces se rechaza
- `Output`: En caso de que devuelva datos que no cumplan la estructura y las validaciones definidas, entonces se genera una alerta de que el servicio web no está en conformidad.

Así, Netuno no solo ahorra la creación de muchos `if`s en código para la validación de los datos recibidos, sino que además garantiza una validación del resultado que el servicio web está generando, realizando una _prueba unitaria_.

También la estructura de OpenAPI generada por Netuno puede utilizarse con el [Editor de Swagger](https://editor.swagger.io/) para generar la interfaz de pruebas, la documentación y el código para clientes de la API en otras tecnologías.

## Básico

Netuno también soporta la creación de servicios web y autenticación sin complicaciones, es decir, no es obligatorio utilizar JWT u OpenAPI, aunque sea la recomendación estándar.

Muchas veces, para agilizar la creación de la API o en situaciones que implican la comunicación entre servidores, se opta por simplificar al máximo y ganar más tiempo.

> Netuno permite realizar la [autenticación HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).