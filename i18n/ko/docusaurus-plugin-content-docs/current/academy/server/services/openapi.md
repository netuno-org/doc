---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

서비스 스키마 정의.

## 소개

OpenAPI는 REST API에서 제공하는 서비스를 표준화하는 명세로, 주소, 입력, 출력 등 서비스가 어떻게 정의되는지 이해하는 데 도움을 줍니다.

테스트 인터페이스 생성과 다른 기술과 통합할 수 있는 클라이언트 자동 생성을 지원합니다.

> 자세한 내용은 <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>를 참고하세요.

## 활성화 및 구성

Netuno 애플리케이션에서 OpenAPI를 활성화하고 구성하려면 사용 중인 환경에 해당하는 애플리케이션 구성 파일을 편집해야 합니다. 예:

- `📂 config/_development.json`
- `📂 config/_production.json`

다음 매개변수를 입력하고 조정하세요:

```
...
    "openapi": {
        "host": "http://my-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://my-app.local.netu.no:9000/services",
                "description": "로컬 개발"
            }
        ]
    },
...
```

설정이 타당한지 확인하세요. 위 예제는 _development_ 환경용입니다.

> 프로덕션에서는 `https`를 사용하는 것이 좋습니다.

### 서비스의 _openapi.json

서비스 루트에 `_openapi.json` 파일을 구성하세요.

애플리케이션 내 전체 경로는 다음과 같습니다:

- `📂 server/services/_openapi.json`

이 파일의 내용은 다음 예제와 같습니다:

```
{
  "info": {
    "title": "내 애플리케이션",
    "description": "내 애플리케이션의 REST API이므로 신중하게 사용하세요.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

제목과 설명을 상황에 맞게 조정하세요.

## 입력

입력 _schema_ 파일을 구성하면 Netuno가 수신된 매개변수를 JSON Schema 규칙과 비교하여 유효성 검사를 수행할 수 있습니다.

> 자세한 내용은 <a href="https://json-schema.org/" target="blank">JSON Schema</a>를 참고하세요.

유효성 검사에 실패하면 서비스 실행이 중단되고 Netuno의 `log`에 오류가 표시되며, 서비스를 소비하는 쪽에는 HTTP 상태 코드 **400**(_Bad Request_)이 반환됩니다.

입력 매개변수 규칙을 구성하려면 서비스 코드 파일 옆에 확장자가 `in.json`인 파일을 생성해야 하며, 이름은 같아야 합니다.

- `detail.js` 서비스에는 `detail.in.json` 파일이 있어야 합니다.
- `detail.post.js` 서비스에는 `detail.post.in.json` 파일이 있어야 합니다.
- `detail/post.js` 서비스에는 `detail/post.in.json` 파일이 있어야 합니다.

`in.json` 내용 예제:

```
{
    "tags":[
      "제품 서비스"
    ],
    "summary": "제품 상세",
    "description": "지정된 제품의 모든 상세 필드를 가져옵니다.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno는 JSON Schema에서 지원하지 않는 몇 가지 추가 유형을 지원합니다. 예: `string-not-empty`, `array-not-empty`, `id`, `uid`(또는 `uuid`, `guid`).

> 이 명세에 대한 자세한 내용은 <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>에서 확인하세요.

## 출력

출력 _schema_ 파일을 구성하면 Netuno가 전송된 매개변수를 JSON Schema 규칙과 비교하여 유효성 검사를 수행할 수 있습니다.

> 자세한 내용은 <a href="https://json-schema.org/" target="blank">JSON Schema</a>를 참고하세요.

유효성 검사에 실패하더라도 출력은 서비스를 소비하는 쪽으로 그대로 전송되지만, 유효성 검사 실패 메시지는 Netuno의 `log`에 표시됩니다.

출력 매개변수 규칙을 구성하려면 서비스 코드 파일 옆에 확장자가 `out.200.json`인 파일을 생성해야 하며, 이름은 서비스와 같아야 합니다.

여기서 **200**은 응답에 포함되는 HTTP 상태 코드이며, 여러 HTTP 상태 코드를 지원하려면 숫자가 다른 JSON 파일을 추가하면 됩니다.

몇 가지 예:
- `save.js` 서비스에는 `save.out.200.json` 파일이 있어야 합니다.
- `save.post.js` 서비스에는 `save.post.out.200.json` 파일이 있어야 합니다.
- `save/post.js` 서비스에는 `save/post.out.200.json` 파일이 있어야 합니다.

`out.200.json` 내용 예제:

```
{
    "type": "object",
    "properties": {
      "result": {
        "type": "boolean"
      }
    },
    "required": [
      "result"
    ]
}
```

Netuno는 JSON Schema에서 지원하지 않는 몇 가지 추가 유형을 지원합니다. 예: `string-not-empty`, `array-not-empty`, `id`, `uid`(또는 `uuid`, `guid`).

> 이 명세에 대한 자세한 내용은 <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>에서 확인하세요.

## 스키마 가져오기

Netuno는 _schema_ 가져오기를 지원하므로 여러 JSON에서 _schema_의 일부를 재사용할 수 있습니다.

> _schema_를 가져오면 코드 중복을 피할 수 있습니다.

서비스 폴더 루트에 `_schema` 폴더를 생성하세요. 위치:

- `📂 server/services/_schema`

이제 JSON 구성에서 `_schema` 매개변수를 사용하여 _schema_를 가져올 수 있습니다. 예:

```
{
    "summary": "제품 삭제",
    "description": "제품을 영구적으로 삭제할 수 있습니다.",
    "_schema": "get/only-code.in"
}
```

이는 `_schema` 매개변수가 있는 `_schema/get/only-code.in.json` 파일을 가져온다는 뜻입니다.

## 명세 및 테스트

JSON Schema와 함께 OpenAPI를 지원하는 모든 서비스의 전체 명세를 생성하려면 예를 들어 다음에 접속하세요:

- http://localhost:9000/services/_openapi

전체 명세가 포함된 JSON이 표시됩니다.

테스트하려면 생성된 JSON 전체를 복사하세요.

Swagger Editor를 여세요: https://editor.swagger.io/

왼쪽에 있는 기존 내용을 삭제하고 JSON을 붙여 넣은 다음, JSON을 YAML로 변환할지 묻는 질문에 예를 선택하세요.

오른쪽에 생성된 인터페이스에서 사용 가능한 모든 서비스를 더 잘 이해하고 테스트할 수 있습니다.

또한 다른 기술용 클라이언트를 자동으로 생성할 수 있습니다.

## 프로그래밍 방식

`_schema` 폴더에서는 `.js` 파일을 사용할 수 있습니다. 이 파일은 OpenAPI 정의 생성과 서비스의 입력 및 출력 유효성 검사 과정에서 함께 실행됩니다.

스키마 프로그래밍을 통해 동적 유효성 검사를 생성할 수 있습니다. 예:
- 데이터베이스에 존재하는 코드만 허용합니다.
- `UID`로 데이터베이스의 레코드를 가져와 서비스와 공유합니다.
- `POST` 또는 `PUT`인 경우 `DELETE`인 경우와 다른 유형의 스키마를 생성합니다.

### 값 목록 예제

특정 카테고리의 코드를 받는 서비스가 있다고 가정해 보겠습니다.

유효한 카테고리 코드가 아닌 값일 수 있으므로 코드로 아무 값이나 받을 수는 없습니다.

따라서 허용되는 코드를 데이터베이스에 등록된 코드로만 제한할 수 있습니다.

스키마는 다음 위치에 생성합니다: `server/services/_schema/category/codes.js`

```javascript
const dbCategories = _db.query("SELECT code FROM category")

const codeList = _val.list()

for (const dbCategory of dbCategories) {
    codeList.add(dbCategory.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        codeList
    )
```

> `codeList`에는 데이터베이스에 등록된 모든 카테고리 코드가 포함됩니다.

서비스에서는 `category/codes` 스키마를 사용하는 다음 `JSON`을 사용할 수 있습니다:

```json
{
  "summary": "카테고리의 제품 목록",
  "description": "특정 카테고리에 연결된 모든 제품을 가져옵니다.",
  "type": "object",
  "properties": {
    "category": {
      "type": "object",
      "properties": {
        "code": {
          "_schema": "category/codes"
        }
      },
      "required": [
        "code"
      ]
    }
  },
  "required": [
    "category"
  ]
}
```

이렇게 하면 코드가 유효한 경우에만 서비스가 실행되도록 보장할 수 있습니다.

### 전역 객체 예제

고객의 `UID`를 받는 여러 서비스가 있고, 각 서비스에서 해당 `UID`와 관련된 고객 데이터를 얻기 위해 데이터베이스에 접근해야 한다고 가정해 보겠습니다.

이를 프로그래밍된 스키마로 중앙화할 수 있습니다. 이 스키마는 수신된 고객 `UID`를 사용해 데이터베이스에서 고객 데이터를 가져오고, 서비스 코드에서 접근할 수 있는 전역 객체에 저장합니다.

따라서 고객 `UID`를 받을 때마다 고객 데이터가 항상 자동으로 전역 로드됩니다.

다음 위치에 프로그래밍된 스키마를 생성합니다: `server/services/_schema/customer.js`

```javascript
const customer = _req.getValues('customer', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbCustomer = _db.get('customer', customer.getString("uid"))
    
    if (dbCustomer == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'customer-not-found')
        )
        _service.cancel()
    }
    
    _val.global().set('customer', dbCustomer)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> `_service.isGeneratingOpenAPIDefinition()`로 OpenAPI 정의 생성 중인지 확인할 수 있으며, 그렇지 않으면 HTTP 요청 실행입니다.
> 
> 고객 `UID`를 찾지 못하면 404를 반환하고 서비스 실행을 중단합니다.
> 
> `_val.global()`을 사용한 점에 주목하세요. 이는 HTTP 요청 처리 중 실행되는 모든 코드 파일 간에 데이터를 전역적으로 공유할 수 있게 합니다.

예제를 이어서, 고객이 수행한 구매를 나열하는 서비스가 있습니다.

서비스의 입력 유효성 검사는 다음 위치에 있습니다: `server/services/customer/purchases/post.in.json`

```json
{
    "summary": "구매 목록",
    "description": "고객이 수행한 구매를 나열합니다.",
    "type": "object",
    "properties": {
        "customer": {
            "_schema": "customer"
        }
    },
    "required": [
        "customer"
    ]
}
```

> 고객의 `"_schema"` 값은 앞서 스키마에서 프로그래밍한 코드 파일의 이름입니다.

그리고 고객 구매 서비스 코드는 다음 위치에 있습니다: `server/services/customer/purchases/post.js`

```javascript
const dbCustomer = _val.global().getValues('customer')
...
```

`_val.global()`을 통해 스키마 코드가 자동으로 로드한 데이터베이스의 고객 데이터를 가져옵니다.

### HTTP 메서드 예제

HTTP 메서드 유형별로 다른 스키마를 반환할 수 있습니다.

예를 들어 네트워크 포트 생성, 편집 또는 제거 작업을 위한 스키마를 코드로 생성할 수 있습니다:

- `POST`인 경우 생성 작업을 수행하므로 `UID`는 포함하지 않지만 이름과 포트 번호를 요구합니다.
- `PUT`인 경우 편집 작업을 수행하므로 `UID`, 이름, 네트워크 포트 번호를 요구해야 합니다.
- `PUT` 또는 `DELETE`일 때는 각각 편집 및 제거 작업을 수행하기 위해 `UID`가 필요합니다.

```javascript
const properties = _val.map()
const required = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    properties.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    required.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    properties
        .set(
            'name',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    required
        .add('name')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        properties
    )
    .set(
        'required',
        required
    )
```

## 동영상

OpenAPI와 통합된 API를 개발하는 방법을 보여 주는 몇 가지 예시 동영상입니다:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 결론

OpenAPI 지원을 통해 JSON Schema를 사용하여 유효성 검사 규칙을 만들 수 있으며, 다음과 같은 이점이 있습니다:

- 서비스에 주입되는 데이터의 보안을 강화합니다.
- 서비스 출력이 명세와 다를 경우 `log`에 경고를 남깁니다.
- 서비스 탐색 및 테스트 인터페이스를 쉽게 생성합니다.