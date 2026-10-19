---
id: cors
title: CORS
sidebar_label: CORS
---

애플리케이션에서의 CORS 설정.

## 소개

CORS(Cross Origin Resource Sharing)는 브라우저가 다른 주소에서 공유한 리소스를 통합할 수 있는지 검증하는 프로세스입니다.

다음과 같은 경우에 구현됩니다:

- ReactJS 및 VueJS와 같은 최신 기술을 사용하여 웹 인터페이스(웹사이트 또는 웹 애플리케이션)를 개발할 때처럼 webpack 서버와 함께 프론트엔드 계층을 개발하는 경우.
- 프론트엔드 주소가 서비스 주소와 다른 경우, 예를 들어 서비스가 `http://localhost:9000` 주소에서 실행되고 프론트엔드가 `http://localhost:3000` 주소에서 실행되는 경우.
- 프로덕션에서 예를 들어 서비스는 자체 하위 도메인 `api.exemplo.com`에서, 프론트엔드는 `www.exemplo.com`에서 실행되는 경우.

> CORS에 대한 자세한 내용:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno는 CORS 통합을 간단하고 즉시 수행할 수 있도록 준비되어 있습니다.

## 설정

CORS 설정은 환경에 따라 애플리케이션 설정 파일에서 수행됩니다.

이를 위해 개발 중인 애플리케이션 내에서 환경 설정 파일로 이동합니다. 이 예시에서는 다음 위치의 개발 환경 파일을 사용합니다:

- 📂 `config/_development.json`

CORS 설정이 이미 없는지 확인하고, 없으면 설정 파일(JSON 형식) 끝에 구성 매개변수를 추가합니다:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> CORS 설정은 배열이며 여러 가지 서로 다른 CORS 규칙을 지원합니다.

### 오리진

`origins` 매개변수는 서비스와 통합될 프론트엔드 주소 목록입니다.

### 프로덕션

프로덕션에서는 프론트엔드가 온라인에서 동작할 주소를 오리진으로 정의해야 합니다.

`cors` 정의가 있는 애플리케이션 설정 파일은 환경에 따라 달라야 합니다.

애플리케이션 설정 파일은 다음과 같아야 합니다:

- 📂 `config/_production.json`

CORS 설정 예시:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://my-project.com", "https://www.my-project.com" ]
        }
    ]
    ...
}
```

애플리케이션 설정 파일은 Netuno의 환경 설정에 따라 `_production.json`이며, 이는 `netuno/config.js` 파일에 있습니다:

```javascript title="netuno/config.js"
config.env = 'production'
```

## 헤더(HTTP Header)

기본 헤더(HTTP 프로토콜 Header)는 다음과 같습니다:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

기본 헤더를 사용자 정의하려면 `header` 구성 매개변수를 추가합니다. 예:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

위 예시에서는 기본적으로 정의되어 있던 다른 모든 헤더 대신 `Authorization`만 헤더에서 허용합니다.

헤더에 새 정의를 추가하거나 기본 정의를 대체할 수 있습니다.

## 수동으로

Netuno의 자동 메커니즘을 사용하는 대신 CORS를 수동으로 구성할 수도 있습니다.

Netuno 애플리케이션에서 다음 파일을 변경하기만 하면 됩니다:

- `📂 server/core/_request_url.js`

그리고 다음 코드를 사용합니다:

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.my-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

위 코드에서 `if`는 오리진 주소(`Origin`)에 따라 'Headers'를 제한합니다.

사용할 주소에 맞게 조정해야 합니다.

> 이렇게 하면 애플리케이션의 모든 서비스와 주소가 CORS 헤더를 지원하게 됩니다.

### 격리된 서비스에만 적용

보안 수준을 높이기 위해 특정 서비스에만 헤더를 활성화하려면 다음 파일에 동일한 코드 로직을 사용하십시오:

- `📂 server/core/_service_config.js`

다음 파일 대신:

- `📂 server/core/_request_url.js`

## 결론

CORS가 구성되면 Netuno는 `origins`로 구성된 주소에 대해 기본 헤더(HTTP 프로토콜 Header)로 자동 응답합니다.

기본 `headers`는 사용자 정의하고 변경할 수 있습니다.

여러 CORS 규칙을 구성할 수 있습니다.

Netuno가 프로그래밍 방식으로 CORS 규칙의 수동 구성을 지원하더라도, 애플리케이션 구성에 통합된 자동 메커니즘을 사용하는 것이 더 좋습니다.