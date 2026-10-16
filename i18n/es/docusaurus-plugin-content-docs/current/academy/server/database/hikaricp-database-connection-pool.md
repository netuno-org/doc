---
id: hikaricp-database-connection-pool
title: HikariCP - Pool de conexiones a base de datos
sidebar_label: Pool de conexiones BD
---

## Qué es

Crear nuevas conexiones a la base de datos exige cierto procesamiento, especialmente cuando hay autenticación.

Por eso, para conseguir un mayor rendimiento conviene reutilizar las conexiones y no abrir constantemente una nueva conexión.

Para resolver este problema se utiliza un pool de conexiones, que hace que cuando una conexión se descarta, esta no se cierra y destruye realmente, sino que la conexión se pone en espera para ser reutilizada cuando se necesite una nueva conexión.

Esto aporta grandes mejoras de rendimiento y también permite muchos más parámetros de configuración, incluido el más conocido, que es limitar el máximo de conexiones para evitar sobrecarga en la base de datos.

## HikariCP

Hikari significa Luz en japonés, es el más eficiente y ampliamente utilizado en aplicaciones Java, y es famoso por tener, con diferencia, el mejor rendimiento.

El repositorio oficial de HikariCP se puede encontrar aquí en [GitHub](https://github.com/brettwooldridge/HikariCP), consulte los gráficos de rendimiento y la información sobre las configuraciones.

Netuno utiliza HikariCP para gestionar las conexiones a PostgreSQL, MariaDB, Microsoft SQL Server y Oracle.

## Configuración

La configuración de HikariCP en Netuno se realiza junto con la configuración de la base de datos en las aplicaciones.

Es decir, dentro de la aplicación en la carpeta `config` en la configuración del entorno, como:

- \_development.json
- \_production.json

En la sección "db", contiene las configuraciones de base de datos.

Tanto para la conexión default como para cualquier otra se puede realizar la configuración de los parámetros de HikariCP de la misma forma.

Así, dentro del default, donde se tienen host, port, name (database), username y password, basta con añadir más parámetros de HikariCP como:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "mi_base_de_datos",
            "username": "mi_usuario",
            "password": "secreto",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Por ejemplo, cada una de estas configuraciones extra de HikariCP anteriores sirven para:

* El `maximumPoolSize` define el tamaño máximo de conexiones en HikariCP; en este ejemplo, el límite de conexiones será 25.
* El `minimumIdle` define el número mínimo de conexiones pendientes en la cola de espera para ser utilizadas.
* El `idleTimeout` es el tiempo que la conexión puede permanecer en espera.
* El `maxLifetime` es el tiempo máximo de vida de la conexión.

> Las configuraciones de HikariCP deben ser coherentes con la configuración del motor de la base de datos.
> Por ejemplo, el número máximo de conexiones y los tiempos límite nunca deben superar lo definido en el motor de la base de datos.

Cualquier otro parámetro de HikariCP se puede configurar de esta misma forma; basta con añadir los parámetros de configuración deseados.

## Parámetros

A continuación se incluye la lista de parámetros que Netuno permite configurar para HikariCP.

Cualquier otro parámetro de configuración de HikariCP o bien está predefinido por Netuno automáticamente o no es aplicable.

### Utilizados con frecuencia

##### autoCommit

Esta propiedad controla el comportamiento de confirmación automática predeterminado de las conexiones devueltas por el pool.
Es un valor booleano.

Predeterminado: `true`

##### connectionTimeout

Esta propiedad controla el número máximo en milisegundos que un cliente (que eres tú) esperará por una conexión del pool. Si se excede este tiempo sin que haya una conexión disponible, se lanzará una SQLException. El tiempo de espera de conexión más bajo aceptable es de 250 ms.

Predeterminado: `30000 (30 segundos)`

##### idleTimeout

Esta propiedad controla la cantidad máxima de tiempo que se permite que una conexión permanezca inactiva en el pool. **Esta definición solo se aplica cuando `minimumIdle` se define como inferior a `maximumPoolSize`.** Las conexiones inactivas no se retirarán cuando el pool alcance las conexiones `minimumIdle`. Si una conexión se retira por inactividad o no, está sujeta a una variación máxima de +30 segundos, y una variación media de +15 segundos. Una conexión nunca se retirará por inactividad antes de este tiempo límite. Un valor de 0 significa que las conexiones inactivas nunca se eliminan del pool. El valor mínimo permitido es de 10000 ms (10 segundos).

Predeterminado: `600000 (10 minutos)`

##### maxLifetime

Esta propiedad controla la vida útil máxima de una conexión en el pool. Una conexión en uso nunca se retirará; solo cuando se cierre se eliminará entonces. En una base de conexión por conexión, se aplica una atenuación negativa menor para evitar la extracción en masa del pool. **Recomendamos encarecidamente la definición de este valor, y debe ser varios segundos más corto que cualquier límite de tiempo de conexión impuesto por una base de datos o infraestructura.** Un valor de 0 indica un tiempo de vida máximo (duración infinita), sujeto evidentemente a la definición de `idleTimeout`. El valor mínimo permitido es de 30000 ms (30 segundos).

Predeterminado: `1800000 (30 minutos)`

##### minimumIdle

Esta propiedad controla el número mínimo de conexiones inactivas que HikariCP intenta mantener en el pool. Si las conexiones inactivas caen por debajo de este valor y el total de conexiones en el pool es inferior al tamaño `maximumPoolSize`, HikariCP hace el mejor esfuerzo para añadir conexiones adicionales de forma rápida y eficiente. Sin embargo, para un rendimiento máximo y capacidad de respuesta a las exigencias del pico, recomendamos no definir este valor y, en su lugar, permitir que HikariCP actúe como un conjunto de conexiones de tamaño fijo.

Predeterminado: el mismo que el tamaño `maximumPoolSize`

##### maximumPoolSize

Esta propiedad controla el tamaño máximo que el pool puede alcanzar, incluyendo tanto las conexiones inactivas como las que están en uso. Básicamente, este valor determinará el número máximo de conexiones reales al backend de la base de datos. Un valor razonable para esto se determina mejor por su entorno de ejecución. Cuando el pool alcance este tamaño, y no haya conexiones inactivas disponibles, las llamadas a getConnection() se bloquearán hasta `connectionTimeout` milisegundos antes del tiempo límite.

Predeterminado: `10`

### Poco utilizados

##### initializationFailTimeout

Esta propiedad controla si el pool "fallará rápidamente" si el pool no se puede sembrar con éxito con una conexión inicial. Cualquier número positivo se considera como el número de milisegundos para intentar adquirir una conexión inicial; el hilo de aplicación se bloqueará durante este período. Si no se puede adquirir una conexión antes de este intervalo de tiempo, se lanzará una excepción. Este tiempo límite se aplica después del período de `connectionTimeout`. Si el valor es cero (0), HikariCP intentará obtener y validar una conexión. Si se obtiene una conexión, pero falla la validación, se lanzará una excepción y el pool no se iniciará. Sin embargo, si no es posible obtener una conexión, el pool se iniciará, pero los esfuerzos posteriores para obtener una conexión pueden fallar. Un valor inferior a cero eludirá cualquier intento inicial de conexión, y el pool se iniciará inmediatamente mientras intenta obtener conexiones en segundo plano. En consecuencia, los esfuerzos posteriores para obtener una conexión pueden fallar.

Predeterminado: `1`

##### catalog

Esta propiedad define el catálogo predeterminado para bases de datos que soportan el concepto de catálogos. Si esta propiedad no se especifica, se utiliza el catálogo predeterminado definido por el driver JDBC.

Predeterminado: `driver default`

##### validationTimeout

Esta propiedad controla el período máximo de tiempo que se probará una conexión en cuanto a su vitalidad. Este valor debe ser menor que el tiempo de `connectionTimeout`. El tiempo límite de validación más bajo aceptable es de 250 ms.

Predeterminado: `5000`

##### leakDetectionThreshold

Esta propiedad controla la cantidad de tiempo que una conexión puede estar fuera del pool antes de que se registre un mensaje que indique una posible fuga de conexión. Un valor de 0 significa que la detección de fugas está desactivada. El valor más bajo aceptable para permitir la detección de fugas es de 2000 (2 segundos).

Predeterminado: `0`

##### schema

Esta propiedad define el esquema predeterminado para bases de datos que soportan el concepto de esquemas. Si esta propiedad no se especifica, se utiliza el esquema predeterminado definido por el driver de JDBC.

Predeterminado: `driver default`

### DataSource

También es posible añadir configuraciones al DataSource, es decir, configuraciones adicionales específicas para el tipo de base de datos que se está utilizando.

Para realizar esta configuración más avanzada es necesario añadir el objeto de configuración de `datasource` dentro del objeto de configuración de la conexión a la base de datos.

Por ejemplo, así:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "mi_base_de_datos",
            "username": "mi_usuario",
            "password": "secreto",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Tenga en cuenta que el valor de las configuraciones de los parámetros del DataSource son de tipo _string_; de todas formas, Netuno convierte automáticamente siempre a _string_.

## Conclusión

Con la utilización de HikariCP es posible realizar configuraciones avanzadas para gestionar la carga y el comportamiento de las conexiones a la base de datos.

Pudiendo ser optimizado para los escenarios más diversos, garantizando su alto rendimiento.