---
id: sending-emails
title: 이메일 발송
sidebar_label: 이메일 발송
---
## 시작하기 전에

진행하기 전에 _**JavaScript**_ 기초 지식이 있고, [아카데미](/docs/academy/overview)에서 제공하는 단계별 안내로 Netuno의 기초를 이미 익혔는지 확인하세요.

## 이메일 발송 데모

Netuno에서는 첨부 파일이나 본문에 포함된 이미지(서명의 경우 유용)와 함께 이메일을 매우 간단하게 보낼 수 있습니다.

Netuno와 함께 제공되는 **demo**(데모 애플리케이션)에는 다양한 언어의 가능한 코드 구현 예제가 많이 포함되어 있으며, 다음 위치에 있는 `mail-send` 서비스를 통한 이메일 발송 예제도 포함되어 있습니다:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## 설정
첫 단계는 Netuno가 이메일 발송에 사용할 SMTP 계정을 구성하는 것입니다.

이를 위해 개발 중인 애플리케이션에서 환경 설정 파일로 이동하세요. 이 예제에서는 다음 위치의 개발 환경 파일을 사용합니다:

* `config/_development.json`

SMTP 설정이 아직 없는지 확인하고, 없다면 설정 파일(JSON 형식) 끝에 SMTP 구성 매개변수를 추가하세요:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Gmail용으로 구성하는 경우 별표만 본인 자격 증명으로 바꾸고 Gmail 계정 설정에서 SMTP 연결을 활성화하세요. 그렇지 않으면 모든 매개변수를 본인의 SMTP 계정 값으로 바꾸세요.

변경 사항을 저장한 후 Netuno를 재시작하면 설정 변경이 적용됩니다. 이름 `default`에서 알 수 있듯이 이 설정은 이메일 발송의 기본 구성입니다.

```json
...
    "default": {
        ...
    }
...
```

SMTP 계정을 더 추가할 수 있지만, 기본값으로 설정할 수 있는 계정은 하나뿐입니다.

SMTP 계정을 더 추가하려면 기본 SMTP 구성 블록을 반복하고 `default` 이름을 원하는 다른 이름으로 바꾸면 됩니다. 예:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

위 예시와 유사한 구성이면 코드에서 다음과 같이 호출할 때 `default` 계정을 사용할 수 있습니다:

```javascript
const smtp = _smtp.init()
```

`test` 구성을 사용하려면 다음과 같이 구성 이름을 `_smtp.init()` 함수의 매개변수로 추가하면 됩니다:

```javascript
const smtp = _smtp.init("test")
```

> 구성 이름을 매개변수로 추가하지 않으면 항상 default 계정이 사용됩니다.

## 상세 코드
이제 Netuno에서 제공하는 예제 코드를 자세히 살펴보겠습니다. 이 예제는 JavaScript로 작성되었으며 다음과 같이 구성됩니다:

SMTP 초기화:

```javascript
const smtp = _smtp.init()
```

> 다른 구성으로 시작할 수도 있습니다. 예: `_smtp.init("test")`

`smtp` 변수에 `.to`를 추가하면 이메일 수신자 주소를 지정합니다. 수신자가 여러 명이면 ‘;’ 또는 ‘,’로 구분하면 됩니다:

```javascript
smtp.to = '*****@gmail.com'
```

`.from`을 추가하면 이메일 보낸 사람 주소를 지정합니다:

```javascript
smtp.from = '*****@gmail.com'
```

`.cc`를 추가하면 참조 수신자 주소를 지정합니다. 참조 수신자가 여러 명이면 ‘;’ 또는 ‘,’로 구분하면 됩니다:

```javascript
smtp.cc = '*****@gmail.com'
```

`.bcc`도 마찬가지로 숨은 참조 수신자를 지정합니다:

```javascript
smtp.bcc = '*****@gmail.com'
```

`.subject`를 추가하면 이메일 제목을 지정합니다:

```javascript
smtp.subject = 'Netuno 테스트'
```

`.text`를 추가하면 일반 텍스트 본문을 지정합니다:

```javascript
smtp.text = '이 이메일을 받으셨나요?'
```

`.html`을 추가하면 이메일 본문을 HTML로 지정합니다:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
이 이메일을 받으셨나요?</p>
</div>`
```

이미지를 첨부 파일로 추가하려면 (위 예시처럼) HTML의 이미지(`img`) `src` 속성에 `cid:`(**C**ontent **ID**)를 접두사로 지정하고, 바로 뒤에 `attachment` 함수로 첨부 파일을 추가할 때 정의한 `cid`를 지정합니다(아래 예시 참조).

이메일에 첨부할 이미지를 추가하려면 다음과 같이 `smtp` 변수에 `.attachment`를 추가합니다:

```javascript
smtp.attachment(
    "logo.png", // 파일
    "image/png", // 파일 형식
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // 파일 위치
    "logo" // "cid:logo"에 정의된 변수 이름
)   
```

> `cid`(**C**ontent **ID**)는 이메일의 HTML 본문에 첨부 이미지를 포함할 때만 필요합니다.

HTML에 포함하지 않는 첨부 파일(문서 등)을 추가하려면 다음과 같이 합니다:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

마지막으로 이메일 발송을 요청하려면 다음 코드를 추가하면 됩니다:

```javascript
smtp.send()
```

마지막으로 모든 것이 올바르게 구성되었다면 다음과 유사한 이메일을 받게 됩니다:

![이메일 발송 예시](/docs/assets/envio-emails1.png)

> 사용하는 이메일 클라이언트에 따라 위 이미지와 다르게 보일 수 있습니다.

## 템플릿을 사용한 전체 예제

위 예시처럼 코드 중간에 HTML 콘텐츠를 넣는 것은 그다지 깔끔하지 않습니다:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
이 이메일을 받으셨나요?</p>
</div>`
```

이를 피하고 코드를 더 깔끔하고 우아하게 유지하려면 HTML 콘텐츠를 다음과 같이 템플릿으로 가져와야 합니다:

`smtp.html = _template.getOutput('email/contact', data)`

이 예제에서 애플리케이션 설정의 SMTP 구성은 다음과 같습니다:

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MY.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "웹사이트 문의 - ",
            "from": "noreply@MY.DOMAIN.com",
            "to": "info@MY.DOMAIN.com",
            "username": "noreply@MY.DOMAIN.com",
            "password": "S3cr3t"
        }
    },
...
```

아래는 완전한 서비스 코드 예제에서 이 구성을 어떻게 사용할 수 있는지 보여 줍니다. 이 파일은 `server/services/contact.js`에 둘 수 있습니다:

```
const name = _req.getString("name")
const email = _req.getString("email")
const subject = _req.getString("subject")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = subject

smtp.text = "HTML 콘텐츠."

const data = _val.map()
      .set("name", name)
      .set("email", email)
      .set("subject", subject)
      .set("message", message)

smtp.html = _template.getOutput('email/contact', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("result", true)
)
```

> 템플릿의 상대 경로에는 `.html` 확장자를 넣을 필요가 없으며, 선택적으로 템플릿 안에 정보를 전달할 수 있습니다.

템플릿의 HTML 콘텐츠는 별도 파일에 정의해야 하며, 이 파일은 `server/templates/` 폴더 안에 있어야 합니다. 이 경로는 애플리케이션 루트 폴더를 기준으로 찾습니다.

위에 보여 준 예제를 따르면 예제 템플릿 파일은 다음 위치에 있습니다:

- `server/templates/email/contact.html`

이 파일의 예제 콘텐츠는 다음과 같을 수 있습니다:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      웹사이트 문의
    </h1>
    <p>이름: _{&data=name}</p>
    <p>이메일: _{data=email}</p>
    <p>제목: _{&data=subject}</p>
    <p>_{&data=message}</p>
  </div>
</div>

```

템플릿에 `_{data=...}`로 데이터를 주입할 때 HTML 특수 문자 인코딩이 필요한 경우 `&`가 추가되어 `_{&data=...}`가 됩니다. `=` 뒤의 `...` 자리에는 주입할 콘텐츠의 키가 들어갑니다.

## 고급 설정

환경 설정 `config/_*.json`에서는 더 많은 고급 설정을 사용할 수 있습니다.

코드에서 사용하는 `smtp` 속성인 `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text`, `.html`은 다음과 같이 설정에서 기본값으로 미리 정의할 수 있습니다:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "기본 제목...",
        "text": "기본 콘텐츠... 확인!",
        "html": "<p>기본 콘텐츠... <b>확인!</b></p>"
        ...
    }
...
```

> 일반적으로 메일은 항상 같은 주소에서 발송되므로 `.from`을 미리 정의하는 것은 매우 유용합니다.

다른 설정도 가능합니다. 전체 목록은 다음과 같습니다:

| 매개변수    | 유형   | 기본값      | 설명    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | 메일 발송을 활성화/비활성화합니다. |
| `debug` | boolean | false | 디버그 모드를 활성화하여 서버와의 통신을 자세히 보여 주는 메시지를 표시합니다. |
| `protocol` | string |  | 프로토콜 유형(smtp 또는 smtps)을 정의합니다. |
| `host` | string |  | SMTP 서버의 이름 또는 IP입니다. |
| `port` | integer | 465 | SMTP 서버의 포트 번호입니다. |
| `ssl` | boolean | true | SSL을 활성화합니다. |
| `tls` | boolean | false | TLS를 활성화합니다. |
| `socketFactoryFallback` | boolean | true | Socket 생성에 실패하면 기본 Java `java.net.Socket`이 사용됩니다. |
| `socketFactoryClass` | string |  | SMTP용 소켓을 생성하는 데 사용할 `javax.net.SocketFactory` 인터페이스를 구현한 클래스를 정의합니다. |
| `socketFactoryPort` | integer |  | 소켓에서 사용할 포트를 정의합니다. |
| `quitWait` | boolean | false | 활성화하면 QUIT 명령 후 서버 응답을 기다리고, 비활성화하면 QUIT 명령 후 즉시 서버 연결을 끊습니다. |
| `authMechanisms` | string |  | 인증 메커니즘 목록입니다. 기본값은 “LOGIN PLAIN DIGEST-MD5 NTLM”이며 모든 메커니즘을 지원합니다. |
| `authNTLMDomain` | string |  | NTLM 인증 도메인입니다. |
| `username` | string |  | 서버 인증에 사용할 사용자 이름을 정의합니다. |
| `html` | string |  | 이메일의 HTML 콘텐츠입니다. |
| `password` | string |  | 서버 인증에 사용할 비밀번호를 정의합니다. |
| `from` | string |  | 보내는 사람의 이메일 주소입니다. |
| `to` | string |  | 받는 사람의 이메일 주소입니다. “;” 또는 “,”로 구분하여 여러 주소를 추가할 수 있습니다. |
| `cc` | strinf |  | 참조 수신자의 이메일 주소입니다. “;” 또는 “,”로 구분하여 여러 주소를 추가할 수 있습니다. |
| `bcc` | string |  | 숨은 참조 수신자의 이메일 주소입니다. “;” 또는 “,”로 구분하여 여러 주소를 추가할 수 있습니다. |
| `subjectPrefix` |  | string | 이메일 제목에 접두사를 정의하여 발송되는 모든 메일이 해당 접두사를 갖도록 합니다. |
| `subject` | string |  | 이메일 제목입니다. |
| `text` | string |  | 이메일의 일반 텍스트 콘텐츠입니다. |

질문이 있으시면 페이지 하단에 안내된 방법으로 주저하지 말고 문의해 주세요.

즐거운 개발 되세요!