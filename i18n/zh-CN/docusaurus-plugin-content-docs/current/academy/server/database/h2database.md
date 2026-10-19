---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## 简介

H2Database 的一大优势是不需要独立的数据库服务器,因为它可以以嵌入式方式运行在应用程序中。

> H2Database 仅推荐用于开发和测试目的,在生产环境中应使用其他更可靠的数据库类型。

## 建议与限制

H2Database 不允许有多个进程同时访问同一个数据库文件。

因此,如果需要操作该文件或通过 Web 控制台访问它,就必须先停止 Netuno 的运行。

## 数据库文件

H2Database 的数据库文件位于应用程序内的 `dbs` 文件夹中,例如:

- `apps/我的应用/dbs`

如果想重命名数据库,请修改文件名并修正应用程序的配置,例如在 _development_ 环境中:

- `config/_development.json`

修正应在数据库连接配置部分进行:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "我的数据库",
            "username": ""
        }
    }
    ...
```

## Web 控制台

有时可能需要直接访问数据库,这种情况下可以通过 H2Database 的 Web 控制台来实现。

Web 控制台可以通过直接运行 H2Database 的 _jar_ 来启动,方式如下:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> 假定您位于 Netuno 的根目录。

查看可用的选项:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

在 Netuno 的 **9000** 端口启动 Web 控制台,并允许外部 IP 访问:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> 应先停止 Netuno 的运行,以避免多个进程同时操作数据库文件。

连接数据库的 JDBC URL 应为:

`jdbc:h2:./apps/我的应用/dbs/我的数据库;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> 将 `我的应用` 部分替换为应用程序的名称,将 `我的数据库` 替换为对应数据库的名称。

认证使用用户 `sa`,但不需要密码。


### 重置访问权限

特别是在丢失了 `dev` 用户的访问权限时。

请按上文所述通过 H2Database 的 Web 控制台进行访问。

要重新创建访问权限,请删除 `netuno_user` 表中的数据,例如:

- `delete from netuno_user`
 
这样,当 Netuno 再次启动时,将会重新创建用户及其默认密码。