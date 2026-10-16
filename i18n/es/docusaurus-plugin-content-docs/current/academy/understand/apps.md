---
sidebar_position: 2
id: apps
title: Aplicaciones
---

Netuno es un servidor de múltiples aplicaciones que distribuye el acceso a las aplicaciones a través de dominios y subdominios.

Múltiples aplicaciones web que pueden ser tanto públicas como privadas, ya que Netuno realiza la construcción de backoffices. Por norma general, las aplicaciones siempre tienen un acceso privado, pero la interfaz pública es opcional.

Al desarrollar múltiples aplicaciones en Netuno, pueden estar desacopladas o incluso acopladas a nivel de base de datos.

Esto quiere decir que podemos compartir la misma base de datos entre múltiples aplicaciones o tener bases de datos separadas para cada aplicación.

## Aplicaciones desacopladas en múltiples bases de datos

Cuando se trata de aplicaciones con ámbitos completamente distintos, no tendrá sentido que compartan la misma base de datos.

Imagine que tiene una aplicación para el envío de Boletín, otra para gestionar Libros y otra para gestionar las Entregas, y que ninguna necesita información almacenada en otra aplicación; estas son completamente independientes.

Así, no hay razón para que compartan la misma base de datos, sino que cada una tenga su propia base de datos:

![Aplicaciones desacopladas.](/docs/assets/business/apps-db-pt-desacopladas.svg "Aplicaciones desacopladas.")

De esta forma ninguna aplicación conoce la información almacenada en las otras aplicaciones y todo su funcionamiento es independiente de las otras aplicaciones existentes.

## Aplicaciones acopladas en la misma base de datos

Cuando trabajamos con aplicaciones que necesitan compartir información y que puede haber un gran volumen de datos, compartir la base de datos es la solución más viable a nivel de rendimiento, pero no es la mejor solución a nivel de seguridad e integridad de los datos.

Así, por cuestiones de seguridad e integridad, normalmente se crean grandes aplicaciones web donde todo está centralizado en una aplicación compleja que utiliza su base de datos exclusiva. Si la aplicación necesita datos externos, puede integrarse con otras bases de datos y servicios web si es necesario.

En este caso, Netuno ya proporciona todos los medios para el desarrollo de este tipo de aplicaciones, pero también ofrece una buena solución para aplicaciones con base de datos compartida.

Siendo el principal problema la seguridad e integridad de los datos, con Netuno, cuando varias aplicaciones utilizan la misma base de datos, estas automáticamente quedan limitadas a sus tablas que están relacionadas con sus formularios.

Permite compartir el formulario y, en consecuencia, su tabla con las otras aplicaciones que están acopladas en la base de datos.

Imagine el escenario en el que tiene una aplicación para la gestión de clientes, otra para la gestión de proveedores y otra para la facturación, ya que tendrá tanto facturas de proveedores por pagar como de clientes por cobrar.

La aplicación de clientes no debe compartir datos con la aplicación de proveedores; son aplicaciones distintas.

Pero la aplicación de facturación necesita integrarse con ambas aplicaciones para obtener los datos de la aplicación de clientes y de proveedores para poder relacionar las facturas y gestionar cobros y pagos en las diversas situaciones.

![Aplicaciones acopladas.](/docs/assets/business/apps-db-pt-acopladas.svg "Aplicaciones acopladas.")

Para garantizar que las aplicaciones no interfieran en datos sensibles unas de otras, se recomienda también la utilización de accesos a la base de datos distintos para cada aplicación, y además se puede controlar vía base de datos sus accesos a las tablas para garantizar que no haya interferencias indeseadas.

Por lo demás, Netuno realiza el control para separar lo que es de una aplicación o de otra e incluso lo que es compartido entre ellas.

## Dirección de cada aplicación

Netuno realiza automáticamente la distribución del acceso a las aplicaciones a través del dominio y subdominio.

Cuando llega una petición a Netuno, el dominio se procesa de la siguiente forma:

![Imagen de ejemplo de la dirección de la aplicación con subdominio.](/docs/assets/business/apps-subdomain.svg "Aplicaciones con subdominio.")

Netuno busca hasta el primer punto si existe una aplicación con este nombre.

Si existe una aplicación con este nombre, entonces será esta la aplicación que reciba la petición.

Si no existe ninguna aplicación con este nombre, entonces la petición se entregará a la aplicación predeterminada (_default_).

Esta resolución de dominios también funciona cuando es un sub-subdominio, por ejemplo:

![Imagen de ejemplo de la dirección de la aplicación con sub-subdominio.](/docs/assets/business/apps-sub-subdomain.svg "Aplicaciones con sub-subdominio.")

Es decir, hasta el primer punto se define cuál será la aplicación que recibirá la petición para ser procesada.

Y Netuno también permite definir una dirección exacta con dominio para la aplicación; basta con definir cuál será la dirección exacta en la que funcionará la aplicación.

> Utilizar la forma automática para procesar dominios permite el funcionamiento de las aplicaciones en la gran mayoría de los casos. Si aun así hay situaciones que necesiten una dirección completamente diferente y específica para el funcionamiento de la aplicación, entonces es necesario definirla en su configuración.