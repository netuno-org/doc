---
id: generate-uid-guid
title: 고유 ID 생성 (UID/GUID)
sidebar_label: 고유 ID 생성 (UID/GUID)
---

## 시작하기 전에

진행하기 전에 **REST 웹 서비스**를 만드는 방법을 알고 있는지 확인하세요. 모른다면 다음 링크를 방문하세요:

* [REST 웹 서비스](/docs/academy/server/services/rest)

또한 이 튜토리얼을 시작하기 전에 _**JavaScript**_ 기초 지식이 있는지 확인하는 것이 좋습니다.

## UID란 무엇인가

UID(_unique identifier_)는 이름에서 알 수 있듯이 애플리케이션 전체에서 고유한 문자열입니다. GUID(_global unique identifier_)라고도 합니다.

UID 생성 예시를 보여드리기 위해 서비스를 만들어 보겠습니다.

## UID 생성

이제 무작위 UID를 생성하는 방법을 보여드리겠습니다. Netuno에는 이를 위해 특별히 만들어진 함수가 이미 포함되어 있어 매우 간단합니다:

```javascript
_out.println(
  _uid.generate()
)
```

> `_out.println()` 함수는 브라우저에서 서비스를 호출할 때 화면에 결과를 표시하기 위한 용도일 뿐입니다.

질문이 있으시면 페이지 하단에 안내된 방법으로 주저하지 말고 연락해 주세요.

즐거운 개발 되세요!