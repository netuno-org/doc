---
sidebar_position: 3
id: configuration
title: 구성
sidebar_label: 구성
---

> 아래 과정은 Linux 개발 환경을 기준으로 합니다.

## 1. 앱 이름

프로젝트 폴더(앱 이름)의 이름을 소문자, 숫자, 밑줄(_)만 사용해 변경하세요.

## 2. 구성 파일

앱 루트에서 샘플 구성 파일을 복사하세요:

```
cp config/sample.json config/_development.json
```

프로덕션 환경의 경우 대신 다음을 사용하세요:

```
cp config/sample.json config/_production.json
```

그런 다음 JSON 루트의 `name` 속성을 1단계에서 선택한 앱 이름으로 변경하세요.

> `config/_development.js`와 `config/_production.js` 파일은 프로젝트에 이미 있으며 동적/프로그래밍 방식 구성에 사용됩니다. 일반적으로 이 파일들을 수정할 필요는 없으며, 편집 대상은 해당 `.json` 파일입니다.

## 3. 데이터베이스

CLUAR에는 PostgreSQL 데이터베이스 연결이 필요합니다. [여기에서 구성하는 방법을 알아보세요](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

`config/_development.json`(또는 `_production.json`)에서 `db.default`를 찾아 데이터베이스 정보로 바꾸세요:

```json
"db": {"default": {
    "password": "Your-DB-SeCr3t-Her3",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. JWT 시크릿

`auth.jwt.secret`에는 인증 보안을 보장하는 데 사용할 **32자** 길이의 무작위 시크릿을 설정하세요:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "ThisSecretMustContains32Chars!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> 시크릿은 [무작위 코드 생성 도구](https://www.random.org/passwords/)로 생성하는 것이 좋습니다.

## 5. Altcha(reCAPTCHA 대안)

CLUAR은 [Altcha](https://altcha.org/)를 지원합니다. Altcha는 작업 증명(*proof-of-work*) 기반의 Google reCAPTCHA 대안이며, 외부 서비스에 의존하지 않고 방문자 데이터를 수집하지도 않습니다. 사용자 로그인과 등록에 사용됩니다.

`.json`의 서로 다른 위치에 두 개의 스위치가 있습니다:

```json
"auth": {
    "altcha": {
        "enabled": false,
        "admin": {
            "enabled": false
        }
    }
}
```

- `auth.altcha.enabled` — 서버 측(Netuno)에서 Altcha 검증을 활성화합니다. 이 값을 `true`로 설정하지 않으면 Altcha가 웹사이트에 표시되더라도 검증되지 않습니다.
- `auth.altcha.admin.enabled` — 웹사이트 로그인과 별도로 **Netuno 백오피스** 로그인(포트 `9000`)에서도 Altcha를 활성화합니다.

```json
"settings": {
    "cluar": {
        "website": {
            "auth": {
                "altcha": {
                    "enabled": false,
                    "admin": {
                        "enabled": false
                    }
                }
            }
        }
    }
}
```

- `settings.cluar.website.auth.altcha` — 웹사이트 측의 동일한 옵션을 반영합니다. 사이트의 로그인/등록 양식에 Altcha 위젯을 표시할지 제어합니다.

> Altcha가 작동하려면 **양쪽 모두**에서 `enabled: true`로 설정해야 합니다. 서버는 검증해야 하고, 웹사이트는 위젯을 표시해야 합니다.

## 6. CLUAR 설정

`settings.cluar`에서 웹사이트 구성을 조정하세요:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "웹사이트 이름",
            "analytics": null,
            "mapbox": {
                "dark": false,
                "accessToken": null
            },
            "services": {
                "api": "http://localhost:9000/services/"
            },
            "auth": {"providers": {
                "discord": false,
                "facebook": false,
                "github": false,
                "google": false
            }}
        },
        "uglifyjs": false
    }
}
```

- `website.url` — 웹사이트가 실행될 URL입니다.
- `website.name` — 웹사이트 이름입니다.
- `website.services.api` — 웹사이트에서 사용하는 Netuno 서비스 API의 URL입니다.
- `website.auth.providers` — 소셜 로그인 방법(Discord, Facebook, GitHub, Google)을 활성화/비활성화합니다.
- `uglifyjs` — 웹사이트 코드의 축소(minify) 여부를 제어합니다.

## 7. 웹사이트 자동 시작(선택 사항)

웹사이트는 `commands` 목록을 통해 Netuno 서버와 함께 자동으로 시작할 수 있습니다:

```json
"commands": [
    {
        "path": "website",
        "command": "bun run dev",
        "install": "bun install",
        "enabled": true
    }
]
```

`"path": "website"` 항목에서 `enabled`를 `true`로 설정하기만 하면 됩니다. 그러면 `./netuno server app=cluar`를 실행할 때 다른 터미널에서 수동으로 시작할 필요 없이 웹사이트도 함께 시작됩니다.

## 다음 단계

앱 구성이 완료되었으면 [실행](/docs/academy/cluar/execution)으로 이동하세요.