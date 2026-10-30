---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Docker에서 MSSQL 구성

Docker가 이미 설치되어 있다고 가정하고, 다음 명령으로 Microsoft Container Registry에서 컨테이너 이미지를 다운로드하면 됩니다:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

그리고 새 컨테이너를 시작하려면 다음 명령을 실행하세요:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

매개변수 *-e 'SA\_PASSWORD=Secret123'*에서 *Secret123*은 *sa* 사용자의 비밀번호가 됩니다.

비밀번호는 MSSQL의 최소 보안 표준을 충족하기 위해 최소 8자 이상이어야 하며, 그렇지 않으면 컨테이너가 초기화되지 않습니다.

컨테이너 초기화 후 MSSQL이 올바르게 작동하는지 확인하세요. 이를 위해 *NPM*을 통해 *mssql* 명령을 설치할 수 있습니다:

```
npm install mssql -g
```

이제 터미널을 통해 MSSQL에 연결하는 명령을 실행할 수 있습니다:

```
mssql -u sa -p Secret123
```

주의! 비밀번호를 변경한 경우 *Secret123*을 컨테이너에 구성된 _sa_의 비밀번호로 바꾸세요.

## 새 애플리케이션 만들기

Microsoft SQL Server에 연결된 새 Netuno 애플리케이션을 만들려면 Netuno에서 새 애플리케이션을 만드는 일반 단계를 따르고 MSSQL 데이터베이스 엔진을 선택하세요.

그런 다음 튜토리얼의 단계를 따르세요:

MSSQL 데이터베이스 엔진을 선택하면 MSSQL 데이터베이스 연결을 위한 데이터를 입력하라는 메시지가 표시됩니다.

예를 들면 다음과 같습니다:

![앱 생성](/docs/assets/academy/server/database/mssql/app-create.jpg)

## 애플리케이션 구성 변경

애플리케이션이 MSSQL과 함께 작동하고 MSSQL을 애플리케이션의 기본 데이터베이스로 사용하도록 하려면 다음 위치의 환경 구성을 변경하세요:

```
/web/app/내_앱/config/_development.json
/web/app/내_앱/config/_production.json
/web/app/내_앱/config/_내_환경.json
```

구성은 다음과 같이 해야 합니다:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_테스트",
            "username": "sa"
        },
        ...
    },
    ...
```

기본 데이터베이스가 아닌 대체 데이터베이스로 연결하려면 _"default"_를 이 연결에 원하는 이름으로 바꾸세요.

## 인스턴스

특정 MSSQLSRV 인스턴스에 연결해야 하는 경우 연결 구성에 `instance` 값을 추가하세요. 예를 들면 다음과 같습니다:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "내-인스턴스-이름",
            "name": "netuno_테스트",
            "username": "sa"
        },
        ...
    },
    ...
```