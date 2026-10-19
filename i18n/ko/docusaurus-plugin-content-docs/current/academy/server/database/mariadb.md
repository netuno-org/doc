---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## 소개

<a href="https://mariadb.org/" target="_blank">MariaDB</a>는 **MySQL**과 호환되는 혁신적인 오픈 소스 관계형 데이터베이스입니다.

## 설치

MariaDB 설치 방법.

#### Ubuntu

터미널에서 실행:

```shell
sudo apt install mariadb-server
```

#### Windows

MariaDB를 다운로드하여 설치합니다:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB 다운로드</a>

## 클라이언트

데이터베이스 서버에서 관리 명령을 실행하려면 MariaDB에 연결합니다.

#### Ubuntu

터미널에서 실행:

```shell
sudo mariadb
```

#### Windows

`Command Prompt MariaDB` 앱을 열고 실행:

```shell
mariadb -u root -p
```

또는 `MySQL Client` 또는 `MariaDB Client`를 찾습니다.

## 데이터베이스 생성

MariaDB 클라이언트에 연결된 상태에서 다음 명령을 실행합니다:

```sql
CREATE DATABASE 앱_db
```

## 사용자 생성

MariaDB 클라이언트에 연결된 상태에서 다음 명령을 실행합니다:

```sql
CREATE USER '앱_사용자'@'localhost' IDENTIFIED BY 'S3cR3t';
```

생성된 데이터베이스에 사용자에게 일반 액세스 권한을 부여하려면 실행:

```sql
GRANT ALL PRIVILEGES ON 앱_db.* TO '앱_사용자'@'localhost';
```

액세스 권한을 업데이트:

```sql
FLUSH PRIVILEGES;
```

> 종료하려면 명령을 사용하세요: `\q`

## 애플리케이션 구성

환경에 따라 애플리케이션 구성 파일을 편집합니다:

- `config/_development.json`

MariaDB용 데이터베이스 구성 예:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "앱_db",
            "username": "앱_사용자",
            "password": "S3cR3t"
        }
    },
    ...
}
```

다음과 같은 고급 구성을 사용할 수 있습니다:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "앱_db",
            "username": "앱_사용자",
            "password": "S3cR3t",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> [HikariCP를 사용한 데이터베이스 연결 설정](/docs/academy/server/database/hikaricp-database-connection-pool)에 대해 더 알아보세요.