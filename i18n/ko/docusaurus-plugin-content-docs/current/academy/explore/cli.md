---
id: cli
title: 명령줄
sidebar_label: 명령줄
---


Netuno의 명령줄 인터페이스는 개발 환경을 관리하기 위한 주요 도구입니다. 이를 통해 시스템 정보를 조회하고, 애플리케이션을 관리하며, 서버를 빠르게 구성할 수 있습니다.

#### 사전 요구 사항

- **터미널:** Netuno가 설치된 루트 폴더에서 터미널(명령 프롬프트, PowerShell 또는 Bash)을 열어 두어야 합니다.

환경이 사용할 준비가 되었는지 확인하는 초기 명령은 다음과 같습니다.

| 옵션    | 설명    |
|----------|--------------|
| `help` | Netuno에서 사용 가능한 모든 명령을 볼 수 있습니다. |
| `version` | 현재 Netuno 버전을 볼 수 있습니다. |

#### 사용 가능한 명령 목록

수행할 수 있는 작업이 궁금하면 도움말 명령을 사용하세요. 사용 가능한 기능의 전체 목록을 반환합니다.

```shell
./netuno help
```
#### Netuno 버전 확인

스크립트 및 특정 모듈과의 호환성을 보장하려면 어떤 버전을 사용 중인지 아는 것이 중요합니다.

```shell
./netuno version
```

## 설치

개발을 시작하기 전에 환경에 Netuno 엔진을 설치해야 합니다. 자세한 내용은 [설치](/docs/get-started/installation) 페이지를 참조하세요.

이 섹션에서는 설치 프로세스를 자동화하거나 최적화하기 위해 설치 과정에서 사용할 수 있는 매개변수를 자세히 설명합니다.

| 옵션 | 설명 |
|----------|--------------|
| `checksum` | 설치된 패키지의 모든 파일에 대한 검증 코드(체크섬)를 업데이트합니다. |
| `force` | 로컬 변경 사항이 있더라도 모든 파일을 강제로 교체합니다.|
| `graal=true/false` | 애플리케이션 실행 성능을 높이기 위해 GraalVM 사용 여부를 정의합니다. |
| `path=[디렉터리]`| Netuno가 설치될 경로(폴더)를 수동으로 정의합니다.|
| `remove` | 시스템에서 Netuno와 관련된 모든 파일을 완전히 제거합니다.|
| `version=[버전]`| 설치할 특정 버전을 선택합니다. 개발 버전에는 최신을 사용하세요.|
| `yes`| 데이터 손실에 대한 경고를 무시하고 모든 확인에 자동으로 "예"라고 응답합니다.|

#### 체크섬을 업데이트하는 예:

```shell
./netuno install checksum
```

#### 로컬 변경 사항이 있더라도 강제로 교체하는 예:

```shell
./netuno install force
```

#### GraalVM을 비활성화하는 예: 

```shell
./netuno install graal=false
```

> GraalVM은 기본적으로 활성화되어 있으며 Netuno 설치 시 자동으로 다운로드됩니다.

#### 설치 경로를 정의하는 예:

```shell
./netuno install path ='netuno_dir'
```
#### Netuno의 모든 폴더를 제거하는 예:

```shell
./netuno install remove
```

#### 설치할 Netuno 버전을 선택하는 예:

```shell
./netuno install version='latest'
```

##### 모든 질문에 예라고 응답하는 예: 
```shell
./netuno install yes 
```

## 서버

설치를 완료한 후 서버를 시작하여 애플리케이션 개발을 시작하세요.

기본 설정으로 서버를 시작하려면 Netuno 루트 폴더에서 아래 명령을 실행하세요:

```shell
./netuno server
```

> 기본적으로 서버는 9000 포트를 사용합니다. 터미널에 시스템이 준비되었다고 표시되면 다음 링크를 통해 관리 패널에 접속할 수 있습니다: http://localhost:9000/

이 섹션에서는 서버 시작 과정에서 사용할 수 있는 매개변수를 자세히 설명합니다.

옵션 | 설명 |
|----------|--------------|
| `app=[앱_이름]` | 시작할 애플리케이션을 구체적으로 정의합니다. |
| `host=[IP/호스트_이름]` | Netuno의 호스트 이름을 변경할 수 있습니다. |
| `launch=true/false` | Netuno가 브라우저를 자동으로 열지 여부를 정의합니다. |
| `npm` | 앱의 프런트엔드를 실시간으로 컴파일하기 위해 'npm watch' 명령을 자동으로 실행합니다. |
| `port=[포트]` | 서버 시작 포트를 정의합니다. |
| `secret=[비밀번호]` | 서버 원격 관리에 액세스할 수 있도록 보안 비밀번호를 정의합니다. |
| `web=[폴더]` | 미리 정의된 프로젝트 루트 폴더(web home)를 변경합니다. |

기본적으로 Netuno는 **'webapp'** 폴더를 사용하여 작동에 필요한 모든 파일을 저장합니다.

**디렉터리 변경 시 주의:** `web=[폴더]` 매개변수를 사용하여 루트 폴더 이름을 변경하는 경우 파일 시스템에서도 폴더 이름을 실제로 변경해야 합니다. 이 명령은 Netuno 코드에 파일을 찾을 위치를 알려줄 뿐 폴더 이름을 자동으로 변경하지 않습니다.

#### 특정 애플리케이션의 서버를 시작하는 예:

```shell
./netuno server app=my_app
```

#### 호스트 이름을 변경하는 예:

```shell
./netuno server host=localhost
```

#### Netuno가 브라우저를 자동으로 여는지 여부를 정의하는 예:

```shell
./netuno server launch=false
```

>기본적으로 Netuno는 브라우저를 열고 http://localhost:9000 링크를 엽니다.

#### 프런트엔드를 자동으로 빌드하기 위해 npm을 실행하는 예

```shell
./netuno server npm
```

#### 포트를 변경하는 예:

```shell
./netuno server port=10000
```

#### 서버 원격 관리에 액세스하기 위한 비밀번호를 정의하는 예:

```shell
./netuno server secret='p#ssw@rd'
```

#### 웹 기본 폴더를 변경하는 예:

```shell
./netuno server web=webapp
```

## 라이선스

Netuno로 개발을 시작하려면 환경을 등록해야 합니다.

라이선스를 관리하려면 기본 명령을 사용하세요:

```shell
./netuno license
```

> 현재 Netuno는 **Community, Standard 및 Enterprise**의 세 가지 라이선스 유형을 제공합니다.

이 섹션에서는 라이선스를 구성하거나 조회하는 데 사용할 수 있는 작업을 자세히 설명합니다.

| 옵션    | 설명    |
|----------|--------------|
| `create , change` | 새 라이선스를 생성하거나 현재 라이선스를 변경하는 프로세스를 시작합니다. |
| `key` | 환경에서 활성 라이선스 키를 표시합니다. |
| `mail=[이메일_주소]` | 라이선스 계정과 연결된 이메일 주소를 정의합니다. |
| `type=[community/standard/enterprise]`  | 라이선스 유형을 정의합니다.|


#### 라이선스를 생성하는 예:

```shell
./netuno license create
```

#### 라이선스 키를 확인하는 예: 

```shell
./netuno license key
```
##### 이메일과 라이선스 유형을 정의하는 예:

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## 애플리케이션

서버가 구성되고 라이선스가 활성화되면 새로운 솔루션을 만들어 생태계를 확장할 수 있습니다.

```shell
./netuno app
```

생성된 파일은 Netuno의 폴더 구조 내에 자동으로 정리됩니다.

애플리케이션 파일에 액세스하거나 편집하려면 시스템 루트에서 다음 경로로 이동하세요: **webapp / apps / [앱_이름]**

#### 폴더 구조

- **webapp**: Netuno 작동에 필요한 모든 파일을 포함하는 루트 폴더입니다.

- **apps**: 개발되었거나 데모 중인 모든 애플리케이션이 저장되는 전용 폴더입니다.

- **[앱_이름]**: 방금 생성한 애플리케이션의 전용 폴더입니다.

기본적으로 Netuno에는 Netuno 서버가 시작될 때 표시되는 데모 애플리케이션이 있습니다.

| 옵션    | 설명    |
|----------|--------------|
| `database=[데이터베이스_이름]` | 데이터베이스 이름을 정의합니다. |
| `engine=[이름]` | 데이터베이스 유형을 정의합니다. |
| `host=[주소]` | 데이터베이스 주소를 정의합니다. |
| `language=[언어]`  | 애플리케이션 언어를 정의합니다. |
| `locale=[언어]` | 애플리케이션의 로캘(로컬 언어)을 정의합니다. |
| `name=[이름]`  | 애플리케이션을 생성하거나 기존 애플리케이션을 재구성할 수 있습니다. |
| `password=[비밀번호]`  | 데이터베이스 비밀번호를 정의합니다. |
| `port=[포트]`  | 데이터베이스 포트를 정의합니다. |
| `username=[이름]`  | 데이터베이스 사용자 이름을 정의합니다. |

#### 데이터베이스 이름을 정의하는 예:

```shell
./netuno app database=jikwon
```

> 데이터베이스 이름에는 숫자와 문자를 포함할 수 있으며, 이름이 두 단어 이상인 경우 다음과 같이 "_"로 구분해야 합니다.
>
> **예:** jikwon_db

#### 데이터베이스 유형을 정의하는 예:

```shell
./netuno app engine=pg
```
사용 가능한 데이터베이스 유형은 다음과 같습니다:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### 데이터베이스 서버 주소를 정의하는 예:

```shell
./netuno app host=localhost
```

#### 언어 및 로캘을 정의하는 예:

```shell
./netuno app language=pt_PT locale=pt_PT
```
사용 가능한 언어는 다음과 같습니다:
> - 포르투갈어 - pt_PT
> - 브라질 포르투갈어 - pt_BR
> - 영어 - en_US
> - 스페인어 - es_ES

#### 애플리케이션을 생성하거나 기존 애플리케이션을 재구성하는 예:

```shell
./netuno app name=demo
```

#### 데이터베이스 비밀번호를 정의하는 예:

```shell
./netuno app password=secret
```

#### 데이터베이스 포트를 정의하는 예:

```shell
./netuno app port=5432
```
기본 포트는 다음과 같습니다:  

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### 데이터베이스 사용자 이름을 정의하는 예:

```shell
./netuno username=root
```