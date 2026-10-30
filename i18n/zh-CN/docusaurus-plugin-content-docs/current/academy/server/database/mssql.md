---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## 在 Docker 中配置 MSSQL

假设您已经安装了 Docker，只需使用以下命令从 Microsoft Container Registry 下载容器镜像：

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

要启动新容器，请执行以下命令：

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

参数 *-e 'SA\_PASSWORD=Secret123'* 中的 *Secret123* 将作为用户 *sa* 的密码。

请注意，密码至少需要包含 8 个字符，以满足 MSSQL 的最低安全规范，否则容器将无法初始化。

容器初始化后，请确认 MSSQL 是否正常运行；为此，可以通过 *NPM* 安装 *mssql* 命令：

```
npm install mssql -g
```

这样您就可以通过终端执行连接 MSSQL 的命令：

```
mssql -u sa -p Secret123
```

注意！如果您更改了密码，请将 *Secret123* 替换为容器中配置的 _sa_ 密码。

## 创建新应用

要在 Netuno 中创建连接到 Microsoft SQL Server 的新应用，请按照在 Netuno 中创建新应用的常规步骤操作，并选择 MSSQL 数据库引擎。

然后按照教程步骤操作：

选择 MSSQL 数据库引擎后，系统会要求您提供连接 MSSQL 数据库所需的数据。

例如：

![应用创建](/docs/assets/academy/server/database/mssql/app-create.jpg)

## 更改应用配置

要让应用能够使用 MSSQL，并将 MSSQL 用作应用的主数据库，请在以下位置更改环境配置：

```
/web/app/你的应用/config/_development.json
/web/app/你的应用/config/_production.json
/web/app/你的应用/config/_你的环境.json
```

配置应按以下方式进行：

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

如果您想将其作为备用数据库而不是主数据库连接，请将 _"default"_ 替换为此连接所需的名称。

## 实例

如果需要连接到 MSSQLSRV 的特定实例，请在连接配置中添加 `instance` 值，例如：

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "我的实例名称",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```