---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## 소개

H2Database의 큰 장점은 데이터베이스 서버가 필요 없다는 점입니다. 애플리케이션에 내장된 형태로 동작할 수 있기 때문입니다.

> H2Database는 개발 및 테스트 목적으로만 권장되며, 프로덕션에서는 더 안정적인 다른 유형의 데이터베이스를 사용해야 합니다.

## 권장 사항 및 제한 사항

H2Database는 하나의 프로세스만 데이터베이스 파일에 접근하도록 허용합니다.

따라서 파일을 조작하거나 웹 콘솔로 접근하려면 Netuno 실행을 중지해야 합니다.

## 데이터베이스 파일

H2Database의 데이터베이스 파일은 애플리케이션 내부의 `dbs` 폴더에 있습니다. 예:

- `apps/내_앱/dbs`

데이터베이스 이름을 바꾸려면 파일 이름을 변경하고 애플리케이션 설정을 수정하십시오. 예를 들어 _development_ 환경에서는:

- `config/_development.json`

수정은 데이터베이스 연결 설정 부분에서 해야 합니다:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "내_db",
            "username": ""
        }
    }
    ...
```

## 웹 콘솔

데이터베이스에 직접 접근해야 할 수 있으며, 이 경우 H2Database의 웹 콘솔을 통해 가능합니다.

웹 콘솔은 H2Database의 _jar_를 다음과 같이 직접 실행하면 시작됩니다:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Netuno 루트에 있다고 가정합니다.

사용 가능한 옵션을 확인하려면:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Netuno의 **9000** 포트에서 웹 콘솔을 시작하고 외부 IP의 접근을 허용합니다:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> 여러 프로세스가 데이터베이스 파일을 조작하지 않도록 먼저 Netuno 실행을 중지해야 합니다.

데이터베이스에 연결하기 위한 JDBC URL은 다음과 같습니다:

`jdbc:h2:./apps/내_앱/dbs/내_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> `내_앱` 부분을 앱 이름으로, `내_db`를 해당 데이터베이스 이름으로 바꾸십시오.

인증에는 사용자 `sa`를 사용하며 비밀번호는 없습니다.


### 접근 권한 재설정

특히 `dev` 사용자의 접근 권한을 잃었을 때 필요합니다.

위에서 설명한 H2Database 웹 콘솔을 통해 접속하십시오.

접근 권한을 다시 생성하려면 `netuno_user` 테이블의 데이터를 삭제하십시오. 예:

- `delete from netuno_user`
 
그러면 Netuno가 다시 시작될 때 해당 기본 비밀번호로 사용자를 재생성합니다.