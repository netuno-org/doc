---
id: hikaricp-database-connection-pool
title: HikariCP - Database Connection Pool
sidebar_label: DB Connection Pool
---

## What It Is

Creating new database connections requires some processing, especially when authentication is involved.

Therefore, to achieve greater performance gains, it is advisable to reuse connections rather than constantly opening a new connection.

To solve this problem, a connection pool is used, which means that when a connection is discarded, it is not actually closed and destroyed; instead, the connection is placed on hold to be reused when a new connection is needed.

This brings large performance gains and also allows many more configuration parameters, including the best known one, which is limiting the maximum number of connections to avoid overloading the database.

## HikariCP

Hikari means Light in Japanese, it is the most efficient and widely used in Java applications, and is famous for having by far the best performance.

The official HikariCP repository can be found here on [GitHub](https://github.com/brettwooldridge/HikariCP); check the performance charts and information about settings.

Netuno uses HikariCP to manage connections to PostgreSQL, MariaDB, Microsoft SQL Server, and Oracle.

## Configuration

HikariCP configuration in Netuno is done together with the database configuration in applications.

That is, inside the application in the `config` folder in the environment configuration, such as:

- \_development.json
- \_production.json

In the "db" section, it contains the database settings.

Both for the default connection and for any other, HikariCP parameter configuration can be performed in the same way.

So within default, where you have host, port, name (database), username, and password, just add more HikariCP parameters such as:

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

For example, each of these extra HikariCP settings above serves to:

* `maximumPoolSize` defines the maximum number of connections in HikariCP; in this example, the connection limit will be 25.
* `minimumIdle` defines the minimum number of idle connections waiting in the queue to be used.
* `idleTimeout` is the time a connection can remain idle.
* `maxLifetime` is the maximum lifetime of the connection.

> HikariCP settings must be consistent with the database engine configuration.
> For example, the maximum number of connections and timeout values must never exceed what is defined in the database engine.

Any other HikariCP parameter can be configured in this same way; just add the desired configuration parameters.

## Parameters

Below is the list of parameters that Netuno allows you to configure for HikariCP.

Any other HikariCP configuration parameter is either predefined automatically by Netuno or is not applicable.

### Frequently Used

##### autoCommit

This property controls the default auto-commit behavior of connections returned from the pool.
It is a boolean value.

Default: `true`

##### connectionTimeout

This property controls the maximum number of milliseconds that a client (that's you) will wait for a connection from the pool. If this time is exceeded without a connection becoming available, a SQLException will be thrown. The lowest acceptable connection timeout is 250 ms.

Default: `30000 (30 seconds)`

##### idleTimeout

This property controls the maximum amount of time that a connection is allowed to sit idle in the pool. **This setting only applies when `minimumIdle` is set to be less than `maximumPoolSize`.** Idle connections will not be retired once the pool reaches `minimumIdle` connections. Whether a connection is retired as idle or not is subject to a maximum variation of +30 seconds, and average variation of +15 seconds. A connection will never be retired as idle before this timeout. A value of 0 means that idle connections are never removed from the pool. The minimum allowed value is 10000ms (10 seconds).

Default: `600000 (10 minutes)`

##### maxLifetime

This property controls the maximum lifetime of a connection in the pool. A connection in use will never be retired; only when it is closed will it then be removed. On a per-connection basis, a small negative attenuation is applied to avoid mass eviction from the pool. **We strongly recommend setting this value, and it should be several seconds shorter than any database or infrastructure-imposed connection time limit.** A value of 0 indicates an infinite maximum lifetime, subject obviously to the `idleTimeout` setting. The minimum allowed value is 30000ms (30 seconds).

Default: `1800000 (30 minutes)`

##### minimumIdle

This property controls the minimum number of idle connections that HikariCP tries to maintain in the pool. If idle connections fall below this value and the total connections in the pool are less than `maximumPoolSize`, HikariCP makes a best effort to add additional connections quickly and efficiently. However, for maximum performance and responsiveness to peak demands, we recommend not setting this value and instead allowing HikariCP to act as a fixed-size connection pool.

Default: the same as `maximumPoolSize`

##### maximumPoolSize

This property controls the maximum size that the pool can reach, including both idle and in-use connections. Basically, this value will determine the maximum number of actual connections to the database backend. A reasonable value for this is best determined by your execution environment. When the pool reaches this size and no idle connections are available, calls to getConnection() will be blocked for up to `connectionTimeout` milliseconds before timing out.

Default: `10`

### Less Frequently Used

##### initializationFailTimeout

This property controls whether the pool will "fail fast" if the pool cannot be successfully seeded with an initial connection. Any positive number is considered the number of milliseconds to try to acquire an initial connection; the application thread will be blocked during this period. If a connection cannot be acquired before this interval, an exception will be thrown. This timeout is applied after the `connectionTimeout` period. If the value is zero (0), HikariCP will try to obtain and validate a connection. If a connection is obtained but fails validation, an exception will be thrown and the pool will not be started. However, if a connection cannot be obtained, the pool will start, but subsequent efforts to obtain a connection may fail. A value less than zero will bypass any initial connection attempt, and the pool will start immediately while trying to obtain connections in the background. Consequently, subsequent efforts to obtain a connection may fail.

Default: `1`

##### catalog

This property sets the default catalog for databases that support the concept of catalogs. If this property is not specified, the default catalog defined by the JDBC driver is used.

Default: `driver default`

##### validationTimeout

This property controls the maximum amount of time that a connection will be tested for liveness. This value must be less than `connectionTimeout`. The lowest acceptable validation timeout is 250 ms.

Default: `5000`

##### leakDetectionThreshold

This property controls the amount of time that a connection can be out of the pool before a message is logged indicating a possible connection leak. A value of 0 means leak detection is disabled. The lowest acceptable value to enable leak detection is 2000 (2 seconds).

Default: `0`

##### schema

This property sets the default schema for databases that support the concept of schemas. If this property is not specified, the default schema defined by the JDBC driver is used.

Default: `driver default`

### DataSource

It is also possible to add settings to the DataSource, that is, additional settings specific to the type of database being used.

To perform this more advanced configuration, you need to add the `datasource` configuration object inside the database connection configuration object.

For example, like this:

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

> Note that the values of DataSource parameter settings are of type _string_; in any case, Netuno always automatically converts them to _string_.

## Conclusion

By using HikariCP, it is possible to perform advanced configurations to manage the load and behavior of database connections.

It can be optimized for the most diverse scenarios, ensuring high performance.