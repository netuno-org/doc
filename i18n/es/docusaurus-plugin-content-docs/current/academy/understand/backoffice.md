---
sidebar_position: 1
id: backoffice
title: Backoffice
---

En el desarrollo de aplicaciones Web y/o Mobile es común que exista el concepto de backoffice, la capa de gestión de los datos.

Es decir, se trata de una capa normalmente web donde los usuarios de gestión del negocio entran en una interfaz que permite realizar intervenciones en los datos.

Es bastante común que existan los siguientes requisitos:

- Gestión de Usuarios;
- Gestión de Grupos de Usuarios;
- Manipulación de los registros de base de datos adaptados a las reglas de negocio;
- Logs para registrar qué hicieron los usuarios y cuándo;
- Limitar los accesos, dependiendo del grupo o del usuario no podrá alterar o incluso ver ciertos datos;
- Permitir el acceso vía navegador y dispositivos móviles;
- Generar informes de gestión;
- Dashboard adaptado al negocio con información relevante, pudiendo presentarse gráficos y tablas;

Por estas y por otras razones, desarrollar el backoffice muchas veces da tanto o más trabajo que desarrollar la aplicación final.

Además, también es común que el backoffice proporcione la API REST con servicios web que permitirá realizar la comunicación de datos de negocio con la aplicación final, o frontend.

![Backoffice.](/docs/assets/business/business-backoffice.svg "Backoffice.")

Netuno trae un potente motor de backoffice, donde sin código es posible crear la estructura de datos generando formularios integrados con la base de datos para las manipulaciones más comunes, como crear, buscar, editar y borrar.

También trae la gestión de usuarios y grupos y controles de accesos con registros de logs.

Permite crear con low-code dashboards, informes y la API REST (servicios web) integrada con JWT (JSON Web Token).

> Como Netuno trae todas las funcionalidades más comunes listas para ser moldeadas de acuerdo con el modelo de negocio, así el esfuerzo para desarrollar un backoffice a medida se reduce drásticamente.

## Backoffice para Nuevos Proyectos

Al desarrollar nuevos proyectos, principalmente cuando se trata de aplicaciones para clientes externos, es común penalizar el presupuesto del backoffice, es decir, se penaliza el tiempo invertido en su desarrollo y en la idealización de las interfaces.

Esto se debe a que no será visible para el cliente objetivo, así que se puede dejar en un segundo plano.

Además, el objetivo de los responsables de la toma de decisiones pasa más por alcanzar el resultado final y no por las capas internas de gestión, aún más cuando implica costes relevantes.

Pero durante el desarrollo y principalmente en el momento de las pruebas, tener una interfaz de backoffice permite realizar una mejor validación de la coherencia de los datos.

Como Netuno facilita la construcción del **modelo de datos y automáticamente pone a disposición en interfaz web formularios responsivos para la gestión de los datos**, basta con utilizar Netuno en la fase de modelado de la estructura de datos y así automáticamente obtendrá la interfaz de backoffice. ¡Bastante sencillo!

Después podrá optar por evolucionar más hasta el punto de desarrollar dashboards, informes y los servicios web, todo en Netuno.

O bien, por algún tipo de limitación u obligatoriedad, podrá desarrollar los servicios web y toda la API REST con cualquier otra tecnología, basta para ello consumir la base de datos generada por Netuno.

De cualquier forma tendrá Netuno como opción para cubrir las necesidades de backoffice.

## Backoffice para Aplicaciones Existentes

En aplicaciones ya existentes y en las que no se ha desarrollado un backoffice o incluso en las que exista y posea limitaciones.

Netuno podrá ser utilizado tanto para realizar la expansión del backoffice existente como para el backoffice que falta.

Como es bastante reducido el esfuerzo de crear un backoffice con Netuno, tanto podrá hacerse un backoffice entero en Netuno como solo algunos módulos.

Corresponde a la persona decidir el rumbo de las opciones tecnológicas a utilizar y a su imaginación; una cosa es cierta, no será necesario complicarse mucho, si piensa en el backoffice modular que se va desarrollando y creciendo a lo largo del tiempo a su medida.

Normalmente desarrollar en módulos es muy complejo, pero como Netuno también simplifica este proceso permitiendo desarrollar múltiples aplicaciones sobre la misma base de datos, es una excelente solución también para desarrollar módulos independientes auxiliares para extender un backoffice ya existente sin aportar impactos en el backoffice ya existente.

Como Netuno integra fácilmente y consigue gestionar varias bases de datos en la misma aplicación, entonces se vuelve fácil importar y exportar información a otra base de datos.

Pudiendo así separar mejor la complejidad del backoffice de las aplicaciones en Netuno que son como "módulos" adicionales al backoffice existente.

## Conclusión

Sin duda uno de los principales objetivos de Netuno es simplificar al máximo el desarrollo de backoffices y realizar la integración tanto en proyectos existentes como en nuevos proyectos donde consigue integrarse bien con otras tecnologías.

Netuno no es una plataforma cerrada donde todo el desarrollo deba pasar a hacerse en Netuno, muy al contrario, Netuno puede utilizarse simplemente para cubrir necesidades puntuales para superar las limitaciones de:

- Coste
- Tiempo

Permitiendo ser integrado con cualquier otra tecnología.

Así, si el problema es la falta de dinero o la fecha de entrega es demasiado ajustada, y además si hay mucha complejidad y varias tecnologías integradas, Netuno debe ser visto como una tecnología más que va a resolver el problema de costes y de tiempo para facilitar la vida.