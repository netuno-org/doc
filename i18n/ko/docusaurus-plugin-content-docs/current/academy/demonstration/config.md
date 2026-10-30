---
sidebar_position: 2
id: config
title: 설정
---

# 애플리케이션 설정

이 가이드는 Demo 애플리케이션의 언어와 데이터베이스를 설정하고 서버와 함께 자동으로 실행되는 명령을 활성화하기 위한 초기 단계를 설명합니다.

모든 변경은 **Demo** 애플리케이션의 설정 파일인 `_development.json`에서 수행되며, 이 파일은 `/apps/demo/**config**` 폴더에 있습니다.

### 사전 요구 사항

설정을 편집하기 전에 다음 사항을 확인하십시오:

- Demo 애플리케이션이 이미 생성되고 초기화되었습니다.
- Netuno 프로젝트 루트에 있습니다.
- 코드 편집기에서 `/apps/demo/config/development.json`을 열어 두었습니다.
- 변경 사항을 저장한 후 서버를 다시 시작할 수 있습니다.

## 언어 설정

### 1. 애플리케이션

설정 파일에서 `language` 및 `locale` 필드를 찾아 애플리케이션 언어를 변경합니다.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

원하는 언어에 따라 값을 설정합니다:

- **포르투갈어**: `pt_PT` 또는 `pt_BR`
- **영어**: `en_GB` 또는 `en_US`

### 2. 데이터베이스

**"db"** 객체와 그다음 **"default"** 설정을 찾습니다.

**"name"** 필드를 변경하여 해당 데이터베이스를 지정합니다:

- `demo_pt`: 포르투갈어 데이터베이스입니다.
- `demo_en`: 영어 데이터베이스입니다.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. 여러 명령 활성화

Netuno에서는 서버 시작 시 여러 명령을 동시에 실행하고 출력을 동일한 콘솔에 표시할 수 있습니다.

기본적으로 **Demo** 애플리케이션에는 `bun run watch` 명령이 설정되어 있지만 비활성화되어 있습니다. 이 명령은 백오피스 코드 파일에 수행된 모든 변경 사항을 자동으로 컴파일합니다.

활성화하려면 **"commands"** 배열에서 **enabled** 필드 값을 false에서 **true**로 변경합니다.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### "commands" 객체 매개변수

- `enabled`: 명령의 자동 실행을 활성화(true) 또는 비활성화(false)합니다.
- `path`: 명령이 실행될 애플리케이션 경로(폴더)를 정의합니다.
- `command`: 터미널에서 실행할 명령을 정의합니다.

:::tip
동일한 객체 구조를 유지하는 한 `"commands"` 배열 안에 다른 명령을 추가할 수 있습니다.
:::


설정 파일을 저장한 후 Netuno 서버를 다시 시작하여 변경 사항을 적용하십시오.


## 예상 결과

서버를 다시 시작한 후 다음 사항을 확인하십시오:

- Demo 애플리케이션이 설정된 언어로 표시됩니다.
- 명령이 활성화된 경우 콘솔에 `bun run watch` 명령의 실행이 표시됩니다.

## 다음 단계

데모 애플리케이션을 살펴보고 수정하려면 다음 **폼** 단계로 진행하십시오.