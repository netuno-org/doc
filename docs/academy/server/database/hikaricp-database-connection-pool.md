---
id: hikaricp-database-connection-pool
title: HikariCP - Database Connection Pool
sidebar_label: DB Connection Pool
---

## Introduction

The creation of new connections in the database requires some processing, especially when there is an authentication.

Therefore, to achieve higher performance is advisable to reuse the connections and not constantly open a new connection.

To solve this issue a connection pool is used, which makes it so that when a connection is dropped it will not actually be closed and be destroyed, so the connection will be put on hold to be reused when a new connection is needed.

This will offer great performance and also allows more parameter settings, including the best which is to limit the maximum number of connections to avoid overloading the database.

## HikariCP

Hikari means Light in Japanese, is the most efficient and Java Database Connectivity (JDBC) is a Java API for accessing relational databases and is a very fast lightweight Java connection pool.

The official HikariCP repository can be found here on [GitHub](https://github.com/brettwooldridge/HikariCP), check out the performance graphs and configuration information.

_Netuno_ uses _HikariCP_ to manage connections to `PostgreSQL`, `MariaDB`, `Microsoft SQL Server` and `Oracle`.

## Configuration Settings

The configuration of _HikariCP_ on _Netuno_ is done next to the configuration of the database in the applications.

That is, within the application in the `config` folder in the environment configuration, such as:

- \_development.json
- \_production.json

In the "db" section, it contains the database settings.

Also for the default connection as for any other connection can be configure the HikariCP parameters in the same way.

So inside the default, where you have the `host`, `port`, `name (database)`, `username` and `password`, just add more HikariCP parameters as:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "my_database",
            "username": "my_user",
            "password": "secret",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

For example, each of these extra _HikariCP_ settings above are for:

* The `maximumPoolSize` sets the maximum size of connections in _HikariCP_, in this example the connection limit will be 25.
* The `minimumIdle` sets the minimum number of pending connections in the queue to be used.
* The `idleTimeout` is the time the connection can be queued.
* The `maxLifetime` is the maximum lifetime connection.

> The _HikariCP_ settings must be consistent with the database engine configuration.
> For example, the maximum number of connections and the time limits must never exceed what is defined in the database engine.

Any other _HikariCP_ parameter can be configured in the same way, just add the desired configuration parameters.

## Parameters

See below the list of parameters that can be configured with _HikariCP_ using _Netuno_. This configuration are either set as default by _Netuno_ or are not applicable.

### Frequently Used

##### Auto-Commit

This property controls the default auto-commit behavior of connections returned from the pool. 
It is a boolean value.
Default: `true`.

##### Connection Timeout

This property controls the maximum number of milliseconds that a Client/User will wait for a connection from the pool. If this time is exceeded without a connection becoming available, an SQLException will be thrown. The lowest acceptable connection timeout is 250 ms.

Default: `30000 (30 seconds)`

##### Idle Timeout

This property controls the maximum amount of time that a connection is allowed to sit idle in the pool. **This setting only applies when `minimumIdle` is defined to be less than `maximumPoolSize`.** Idle connections will not be retired once the pool reaches `minimumIdle` connections. Whether a connection is retired as idle or not is subject to a maximum variation of +30 seconds, and average variation of +15 seconds. A connection will never be retired as idle before this timeout. A value of 0 means that idle connections are never removed from the pool. The minimum allowed value is 10000ms (10 seconds).

Default: `600000 (10 minutes)`

##### Max Lifetime

This property controls the **Maximum Lifetime** of a connection in the pool. An in-use connection will never be retired, only when it is closed will it then be removed. On a connection-by-connection basis, minor negative attenuation is applied to avoid mass-extinction in the pool. **Is strongly recommended setting this value, and it should be several seconds shorter than any database or infrastructure imposed connection time limit.** A value of 0 indicates no maximum lifetime (infinite lifetime), subject of course to the `idleTimeout` setting. The minimum allowed value is 30000ms (30 seconds).

Default: `1800000 (30 minutes)`

##### Minimum Idle

This property controls the minimum number of idle connections that _HikariCP_ tries to maintain in the pool. If the idle connections dip below this value and total connections in the pool are less than `maximumPoolSize`, _HikariCP_ will make the best effort to add additional connections quickly and efficiently. However, for higher performance and response, is recommend not set this value instead allow _HikariCP_ to act as a fixed size connection pool. 

Default: same as `maximumPoolSize`

##### Maximum PoolSize

This property controls the maximum size that the pool is allowed to have including both idle and in-use connections. Basically this value will define the maximum number of actual connections to the backend database. A reasonable value for this is best set by your performance environment. When the pool reaches this size and no idle connections are available, calls to getConnection() will block for up to `connectionTimeout` milliseconds before timing out.

Default: `10`

### Less Used

##### Initialization Fail Timeout

This property controls whether the pool will "fail fast" if the pool cannot be seeded with an initial successfully connection. Any positive number is taken to be the number of milliseconds to attempt to acquire an initial connection; the application thread will be blocked during this period. If a connection cannot be acquired before this timeout occurs, an exception will be thrown. This timeout is applied after the `connectionTimeout` period. If the value is zero (0), _HikariCP_ will attempt to obtain and validate a connection. If a connection is obtained but fails validation, an exception will be thrown and the pool will not be started. However, if a connection cannot be obtained, the pool will start but later efforts to obtain a connection may fail. A value less than zero will bypass any initial connection attempt, and the pool will start immediately while trying to obtain connections in the background. Consequently, later efforts to obtain a connection may fail. 

Default: `1`

##### Catalog

This property sets the default catalog for databases that support the concept of catalogs. If this property is not specified, the default catalog defined by the JDBC driver is used. 

Default: `driver default`

##### Validation Timeout

This property controls the maximum amount of time that a connection will be tested for aliveness. This value must be less than the `connectionTimeout`. Lowest acceptable validation timeout is 250 ms. 

Default: `5000`

##### Leak Detection Threshold

This property controls the amount of time that a connection can be out of the pool before a message is logged indicating a possible connection leak. A value of 0 means leak detection is disabled. Lowest acceptable value for enabling leak detection is 2000 (2 seconds). 

Default: `0`

##### Schema

This property sets the default schema for databases that support the concept of schemas. If this property is not specified, the default schema defined by the JDBC driver is used.

Default: `driver default`

### Data Source

It is also possible to add settings to the DataSource, i.e. additional settings specific to the type of database being used.

To perform this more advanced configuration you will need to add the `datasource` configuration object inside the database connection configuration object.

For example:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "my_database",
            "username": "my_user",
            "password": "secret",
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

> Notice that the DataSource parameter settings are of type _string_, so Netuno always automatically converts to _string_ anyway.

## Conclusion

Using _HikariCP_ it is possible to perform advanced settings to manage the load and behavior of connections into the database.

It can be optimized for the most various scenarios to guarantee its high performance.

