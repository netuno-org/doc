---
id: rest
title: REST - 웹 서비스
sidebar_label: REST - 웹 서비스
---

## 소개

REST 요청은 서버에서 처리된 데이터 정보를 반환하는 온라인 주소입니다. 여기에는 보안과 신뢰성이 필요한 데이터의 비즈니스 로직이 포함되며 데이터베이스와 통합됩니다.

> 자세한 내용은 <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>를 참고하세요.

REST API 구축은 Netuno의 서비스를 기반으로 이루어집니다.

## ALL

모든 유형의 HTTP 메서드에 응답하는 Netuno 서비스를 만들려면:

- `📂 server/services/내-서비스.js`

브라우저에서 이 서비스는 다음 주소의 모든 요청 유형에 대해 실행됩니다:

- http://localhost:9000/services/내-서비스

## GET

GET 유형 주소는 일반적으로 목록 조회 또는 데이터 가져오기 작업에 사용됩니다.

GET 메서드 유형에만 응답하는 Netuno 서비스를 만들려면 다음 형식 중 하나를 사용하세요:

- `📂 server/services/목록/get.js`
- `📂 server/services/목록.get.js`

브라우저에서 이 서비스는 다음 주소의 GET 요청 유형에 대해서만 실행됩니다:

- GET http://localhost:9000/services/목록

## POST

POST 유형 주소는 일반적으로 새 데이터를 생성하거나 만드는 작업에 사용됩니다.

POST 메서드 유형에만 응답하는 Netuno 서비스를 만들려면 다음 형식 중 하나로 코드 파일을 생성하세요:

- `📂 server/services/생성/post.js`
- `📂 server/services/생성.post.js`

이 서비스는 다음 주소의 POST 요청 유형에 대해서만 실행됩니다:

- POST http://localhost:9000/services/생성

## PUT

PUT 유형 주소는 일반적으로 데이터 레코드를 변경하는 작업에 사용됩니다.

PUT 메서드 유형에만 응답하는 Netuno 서비스를 만들려면 다음 형식 중 하나로 코드 파일을 생성하세요:

- `📂 server/services/수정/put.js`
- `📂 server/services/수정.put.js`

이 서비스는 다음 주소의 PUT 요청 유형에 대해서만 실행됩니다:

- PUT http://localhost:9000/services/수정

## DELETE

DELETE 유형 주소는 일반적으로 데이터 레코드를 삭제하는 작업에 사용됩니다.

DELETE 메서드 유형에만 응답하는 Netuno 서비스를 만들려면 다음 형식 중 하나로 코드 파일을 생성하세요:

- `📂 server/services/삭제/delete.js`
- `📂 server/services/삭제.delete.js`

이 서비스는 다음 주소의 DELETE 요청 유형에 대해서만 실행됩니다:

- DELETE http://localhost:9000/services/삭제

## OPTIONS

프런트엔드와 통합할 때 CORS 검증 과정에서 브라우저가 OPTIONS 유형의 호출을 수행합니다.

> CORS에 대한 자세한 내용은 <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>를 참고하세요.

OPTIONS 메서드 유형에만 응답하는 Netuno 서비스를 만들려면 다음 형식 중 하나로 코드 파일을 생성하세요:

- `📂 server/services/목록조회/options.js`
- `📂 server/services/목록조회.options.js`

웹사이트와 같은 외부 프런트엔드와 통합되는 모든 서비스에 구현해야 합니다.

일반적으로 사용되는 코드:

```javascript
_out.json(_val.map().set("result", true))
```

이 서비스는 다음 주소의 OPTIONS 요청 유형에 대해 실행됩니다:

- OPTIONS http://localhost:9000/services/목록조회

## 클라이언트 및 테스트 실행

특정 메서드 유형으로 서비스를 테스트하려면 REST API 테스트를 수행하는 전용 프로그램을 사용할 수 있습니다. 예:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

터미널에서 `curl` 명령을 사용하면 모든 유형의 테스트를 수행할 수 있습니다.

콘솔/명령줄에서 GET을 전송합니다:

```
curl http://localhost:9000/services/저장
```

`-X`를 사용하여 메서드 유형을 지정할 수 있습니다:

```
curl -X POST -F '이름=테스트' -F '이메일=email@example.com' http://localhost:9000/services/저장
```

> `-F` 매개변수는 Content-Type: `multipart/form-data`로 전송합니다.

매개변수를 전송하는 또 다른 방법:

```
curl -X POST -d '이름=테스트' -d '이메일=email@example.com' http://localhost:9000/services/저장
```

다음과 같이 연결할 수 있습니다:

```
curl -X POST -d '이름=테스트&이메일=email@example.com' http://localhost:9000/services/저장
```

> `-d` 매개변수는 Content-Type: `application/x-www-form-urlencoded`로 전송합니다.

### JSON

JSON 형식으로 전송하려면 콘텐츠 유형을 지정해야 합니다:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"이름": "테스트", "이메일": "email@example.com"}' \
    http://localhost:9000/services/저장
```

> `-H`는 헤더(_HEADER_) 매개변수 설정을 정의합니다.

### 업로드

파일을 업로드하려면:

```
curl -X POST -F '이미지=@/home/사용자/파일.jpg' http://localhost:9000/services/저장
```

## 서비스 클라이언트 - NPM

프런트엔드와 쉽게 통합할 수 있도록 NPM 모듈이 제공됩니다:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

설치 명령: `npm i -S @netuno/service-client`

서비스 주소를 다음과 같이 정의하면:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

다음 예시와 같이 프런트엔드와 통합된 서비스를 실행할 수 있습니다:

```
  _service({
      url: "/services/내-서비스",
      method: 'POST',
      data: { 매개변수1: "1", 매개변수2: "2" },
      success: (응답) => {
          if (응답.json) {
              console.log("서비스 응답", 응답.json);
          }
      },
      fail: (오류) => {
          console.log("서비스 오류", 오류);
      }
  });
```

## 결론

원하는 HTTP 메서드 유형으로만 서비스를 제한하는 것이 지원됩니다.

프런트엔드와 통합하려면 가장 낮은 수준에서 `fetch`를 사용할 수 있습니다.

구현을 빠르게 하고 표준화하기 위해 NPM 모듈 [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)가 제공됩니다.