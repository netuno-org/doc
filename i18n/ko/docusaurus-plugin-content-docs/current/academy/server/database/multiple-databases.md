---
id: multiple-databases
title: 다중 데이터베이스
sidebar_label: 다중 데이터베이스
---

## 여러 데이터베이스에 연결하기

Netuno를 사용하면 애플리케이션이 여러 데이터베이스에 연결할 수 있습니다.

따라서 서로 다른 여러 연결과 데이터베이스 유형을 통해 데이터를 조작할 수 있습니다.

Netuno는 다음과 같은 데이터베이스 연결을 지원합니다:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(곧 지원 예정)_

## DEFAULT 데이터베이스

애플리케이션이 올바르게 작동하려면 항상 default(기본)로 구성된 데이터베이스가 있어야 합니다.

애플리케이션 설정은 다음 파일에 있습니다:

```
/web/app/내앱/config/_development.json
/web/app/내앱/config/_production.json
/web/app/내앱/config/_내환경.json
```

여기에서 _default_ 데이터베이스 연결 구성은 다음과 같습니다:

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

따라서 다른 데이터베이스에 대한 연결을 더 추가하려면 이 구성을 반복하고 _default_ 이름을 원하는 다른 이름으로 바꾸면 됩니다.

예를 들어, 기본 데이터베이스는 PostgreSQL에 있지만 WordPress의 MariaDB 데이터베이스(_워드프레스-wp_)와 .NET/C# 애플리케이션의 Microsoft SQL Server 데이터베이스(_닷넷-mssql-앱_)에도 연결해야 하는 애플리케이션이 있다고 가정해 보겠습니다...

이 애플리케이션이 이러한 여러 데이터베이스에 연결하도록 구성하면 다음과 같습니다:

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
        "워드프레스-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "닷넷-앱": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

이러한 각 애플리케이션과 통신하려면 다음과 같이 _db 리소스를 사용하면 됩니다:

```
var 기본DB = _db.init()

var 워드프레스WPDB = _db.init("워드프레스-wp")

var 닷넷앱DB = _db.init("닷넷-앱")
```

각 변수에는 애플리케이션 설정에 정의된 연결을 식별하는 키에 해당하는 데이터베이스에 연결된 *_db* 리소스 인스턴스가 포함됩니다.

따라서 이 변수들을 사용하여 쿼리, 삽입, 업데이트, 삭제 같은 데이터베이스 작업을 수행할 수 있습니다.

데이터베이스 작업에 대한 자세한 내용은 리소스 문서를 참조하세요: [_db](/docs/library/resources/db)