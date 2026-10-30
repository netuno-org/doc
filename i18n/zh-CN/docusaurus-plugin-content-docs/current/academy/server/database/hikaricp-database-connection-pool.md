---
id: hikaricp-database-connection-pool
title: HikariCP - 数据库连接池
sidebar_label: 数据库连接池
---

## 什么是

创建新的数据库连接需要一定的处理开销，尤其是在需要进行身份验证时。

因此，为了获得更高的性能收益，最好复用连接，而不是频繁地打开新连接。

为了解决这个问题，使用了连接池：当连接被释放时，它并不会真正被关闭和销毁，而是被放入空闲池等待，在需要新连接时再被复用。

这会带来巨大的性能提升，并且还允许使用更多配置参数，包括最广为人知的限制最大连接数，以避免数据库过载。

## HikariCP

Hikari 在日语中意为“光”，它是 Java 应用中最高效且广泛使用的连接池，并以性能遥遥领先而闻名。

HikariCP 的官方仓库可以在 [GitHub](https://github.com/brettwooldridge/HikariCP) 上找到，请查看性能图表和配置相关信息。

Netuno 使用 HikariCP 来管理到 PostgreSQL、MariaDB、Microsoft SQL Server 和 Oracle 的连接。

## 配置

在 Netuno 中，HikariCP 的配置与应用程序中的数据库配置一起完成。

也就是说，在应用程序的 `config` 文件夹中，在环境配置文件中进行配置，例如：

- \_development.json
- \_production.json

在 “db” 部分中，包含数据库配置。

无论默认连接还是任何其他连接，都可以用同样的方式配置 HikariCP 参数。

因此，在 default 中，也就是包含 host、port、name（数据库）、username 和 password 的地方，只需添加更多 HikariCP 参数，例如：

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "我的数据库",
            "username": "我的用户",
            "password": "密钥",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

例如，上面这些额外的 HikariCP 配置项的作用如下：

* `maximumPoolSize` 定义 HikariCP 中连接的最大数量，在此示例中连接数上限为 25。
* `minimumIdle` 定义等待队列中待使用连接的最小数量。
* `idleTimeout` 是连接可以保持空闲的时间。
* `maxLifetime` 是连接的最大生命周期。

> HikariCP 的配置必须与数据库引擎的配置保持一致。
> 例如，最大连接数和各项超时时间绝不能超过数据库引擎中定义的值。

任何其他 HikariCP 参数也可以用同样的方式配置，只需添加所需的配置参数。

## 参数

下面列出了 Netuno 允许为 HikariCP 配置的参数。

任何其他 HikariCP 配置参数要么由 Netuno 自动预定义，要么不适用。

### 常用参数

##### autoCommit

此属性控制从连接池返回的连接的默认自动提交行为。
它是一个布尔值。

默认值：`true`

##### connectionTimeout

此属性控制客户端（也就是你）从连接池获取连接的最长等待时间，单位为毫秒。如果超过此时间仍没有可用连接，将抛出 SQLException。可接受的最低连接超时时间为 250 毫秒。

默认值：`30000（30 秒）`

##### idleTimeout

此属性控制允许连接在池中保持空闲的最长时间。**此设置仅当 `minimumIdle` 小于 `maximumPoolSize` 时生效。** 当池中的连接数达到 `minimumIdle` 个连接后，空闲连接不会被回收。连接是否作为空闲连接被回收，会有最大 +30 秒、平均 +15 秒的波动。连接绝不会在达到此超时之前作为空闲连接被回收。值为 0 表示空闲连接永远不会从池中移除。允许的最小值为 10000 毫秒（10 秒）。

默认值：`600000（10 分钟）`

##### maxLifetime

此属性控制池中连接的最大生命周期。正在使用中的连接永远不会被回收，只有在关闭后才会被移除。对于每个连接，都会施加较小的负向衰减，以避免池中连接同时大量失效。**我们强烈建议设置此值，并且它应比数据库或基础设施施加的任何连接时间限制短几秒。** 值为 0 表示无限生命周期，当然仍受 `idleTimeout` 约束。允许的最小值为 30000 毫秒（30 秒）。

默认值：`1800000（30 分钟）`

##### minimumIdle

此属性控制 HikariCP 尝试在池中保持的最小空闲连接数。如果空闲连接数低于此值，且池中的连接总数小于 `maximumPoolSize`，HikariCP 会尽最大努力快速高效地添加额外连接。不过，为了获得最佳性能并应对峰值需求，我们建议不要设置此值，而是让 HikariCP 作为固定大小的连接池运行。

默认值：与 `maximumPoolSize` 相同

##### maximumPoolSize

此属性控制连接池可以达到的最大大小，包括空闲连接和使用中的连接。基本上，此值决定与数据库后端的实际连接的最大数量。合理的取值最好由您的运行环境决定。当池达到此大小且没有可用空闲连接时，对 getConnection() 的调用将被阻塞，直到 `connectionTimeout` 毫秒后超时。

默认值：`10`

### 不常用参数

##### initializationFailTimeout

此属性控制当连接池无法成功用初始连接进行初始化时，是否“快速失败”。任何正数都会被视作尝试获取初始连接的毫秒数；在此期间应用线程将被阻塞。如果在此时间间隔之前无法获取连接，将抛出异常。此超时在 `connectionTimeout` 之后应用。如果值为零（0），HikariCP 将尝试获取并验证一个连接。如果获取到连接但验证失败，将抛出异常且连接池不会启动。但是，如果无法获取连接，连接池会启动，但后续获取连接的尝试可能会失败。小于零的值将跳过任何初始连接尝试，连接池会立即启动并在后台尝试获取连接。因此，后续获取连接的尝试可能会失败。

默认值：`1`

##### catalog

此属性为支持目录概念的数据库设置默认目录。如果未指定此属性，则使用 JDBC 驱动定义的默认目录。

默认值：`驱动默认值`

##### validationTimeout

此属性控制测试连接是否存活的最长时间。此值应小于 `connectionTimeout`。可接受的最低验证超时时间为 250 毫秒。

默认值：`5000`

##### leakDetectionThreshold

此属性控制连接在池外停留多长时间后记录一条消息，提示可能存在连接泄漏。值为 0 表示禁用泄漏检测。允许泄漏检测的最低值为 2000（2 秒）。

默认值：`0`

##### schema

此属性为支持模式概念的数据库设置默认模式。如果未指定此属性，则使用 JDBC 驱动定义的默认模式。

默认值：`驱动默认值`

### DataSource

还可以向 DataSource 添加配置，也就是针对所使用的数据库类型的特定附加配置。

要执行这种更高级的配置，需要在数据库连接的配置对象中添加 `datasource` 配置对象。

例如，这样：

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "我的数据库",
            "username": "我的用户",
            "password": "密钥",
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

> 请注意，DataSource 参数的配置值都是 _string_ 类型，无论如何，Netuno 始终会自动将其转换为 _string_。

## 结论

通过使用 HikariCP，可以执行高级配置来管理数据库连接的负载和行为。

可以针对各种场景进行优化，确保其高性能。