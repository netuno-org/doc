---
id: multiple-databases
title: Multiplas Bases de Dados
sidebar_label: Multiplas Bases de Dados
---

## Conectar à Multiplas Base de Dados

O Netuno permite que uma aplicação se conecte a múltiplas base de dados.

Assim poderá manipular dados através de várias conexões e tipos de base de dados diferentes.

O Netuno suporta a conexão a base de dados como:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(brevemente)_

## Base de dados DEFAULT

Para as aplicações funcionarem corretamente é sempre necessário haver uma base de dados configurada como default (padrão).

Recorde que as configurações das aplicações ficam nos ficheiros:

```
/web/app/SUA_APP/config/_development.json
/web/app/SUA_APP/config/_production.json
/web/app/SUA_APP/config/_SEU_AMBIENTE.json
```

Aí encontrará a configuração da conexão à base de dados _default_, da seguinte forma:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

Portanto, para adicinar mais conexões a outras base de dados basta repetir esta configuração trocando o nome _default_ para outro nome desejado.

Por exemplo, imagine que tem uma aplicação em que a base de dados default está em PostgreSQL mas que também se tem de conectar a uma base de dados em MariaDB do WordPress (_website-wp_) e também a uma outra base de dados em Microsoft SQL Server de uma aplicação .Net/C# (_app-dotnet-mssql_)...

A configuração desta aplicação para se conseguir conectar a estas múltiplas base de dados será desta forma:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "website-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

Para conseguir comunicar com cada uma destas aplicações basta utilizar o recurso _db da seguinte forma:

```
var dbDefault = _db.init()

var dbWebsiteWP = _db.init("website-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Cada variável contem uma instância do recurso *_db* associado a base de dados corresponde a chave que identifica a conexão definida nas configurações da aplicação.

Assim utilizando estas variáveis poderá realizar as operações de base de dados como queries, inserts, updates e deletes.

Para mais informações sobre as operações de base de dados consulte a documentação do recurso: [_db](../../../library/resources/db)
