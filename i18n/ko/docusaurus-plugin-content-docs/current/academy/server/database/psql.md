---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## 소개

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>은 가장 널리 사용되는 오픈 소스 객체-관계형 데이터베이스 중 하나입니다.

## 설치

PostgreSQL 설치 방법에 대한 정보입니다.

#### Ubuntu

터미널에서 실행하세요:

```shell
sudo apt install postgresql
```

#### Windows

데이터베이스 서버를 설치하세요:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL Database Download</a>.

PostgreSQL 클라이언트인 <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>을 설치하세요.

## 클라이언트

데이터베이스 서버에서 관리 명령을 실행하려면 PostgreSQL에 연결하세요.

#### Ubuntu

터미널에서 실행하세요:

```shell
sudo -u postgres psql
```

#### Windows

<a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>을 설치하고 사용하세요.

## 사용자 생성

PostgreSQL 클라이언트에 연결된 상태에서 다음 명령을 실행하세요:

```sql
create user app_user with password 'S3cR3t';
```

## 데이터베이스 생성

PostgreSQL 클라이언트에 연결된 상태에서 다음 명령을 실행하세요:

```sql
create database app_db with owner app_user;
```

> 종료하려면 다음 명령을 사용하세요: `\q`

## 데이터베이스 구성

PostgreSQL 클라이언트 애플리케이션을 사용하여 새로 생성한 데이터베이스에 연결하세요.

#### Ubuntu

터미널에서 다음 명령을 실행하세요:

```shell
sudo -u postgres psql app_db
```

#### Windows

<a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>을 설치하고 사용하세요.

### UUID 확장 설치

UUID를 생성하려면 PostgreSQL에 확장을 설치해야 합니다.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## 애플리케이션 구성

환경에 맞게 애플리케이션의 구성 파일을 편집하세요:

- `config/_development.json`

PostgreSQL을 위한 구성 예시:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t"
        }
    },
    ...
}
```

다음과 같은 고급 설정을 사용할 수 있습니다:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
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