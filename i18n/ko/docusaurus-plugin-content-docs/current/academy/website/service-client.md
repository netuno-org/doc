---
sidebar_position: 4
id: service-client
title: HTTP 서비스 및 REST API용 클라이언트
sidebar_label: 서비스 클라이언트
---

## 소개

Netuno 기술 생태계에서는 NPM에 다음과 같은 모듈을 제공합니다:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> 또한 [Service Client의 GIT 저장소](https://github.com/netuno-org/service-client)를 참고하세요.

이 모듈은 Netuno에서 개발된 서비스, 즉 Netuno 애플리케이션의 `server/services` 폴더 안에 있는 Netuno 백엔드에서 개발된 REST API 엔드포인트와의 통합을 수행하는 데 사용됩니다.

서비스 개발 시 다음과 같은 프로그램을 사용하여 서비스에 대한 HTTP 요청을 테스트하는 것이 일반적입니다:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

프런트엔드 코드에서 이러한 서비스를 통합하려면 fetch, requests, AXIOS 등 다양한 도구를 사용할 수 있습니다.

그러나 Netuno는 자체 클라이언트를 제공하며, 이는 JavaScript 프런트엔드 개발과 NodeJS 백엔드 모두에서 동작합니다.

Netuno가 서비스용 HTTP 클라이언트를 자체 구현한 이유는 더 큰 편의성을 제공하고, 코드 구현을 단순화하며, 개발 속도를 높이기 위해서입니다.

## 설치

서비스 클라이언트 설치는 다른 모듈을 설치하는 것과 같습니다.

`package.json` 파일이 있는 곳에서 설치 명령을 실행합니다:

```bash
bun add @netuno/service-client
```

## 가져오기

최신 JavaScript 개발에서 서비스 클라이언트를 가져오려면:

```js
import _service from '@netuno/service-client';
```

클래식 JavaScript 개발에서 서비스 클라이언트를 가져오려면:

```js
const _service = require('@netuno/service-client');
```

코드 내부 이름은 `_service`입니다.

> 기본적으로 Netuno는 생태계의 리소스나 도구처럼 내부적이거나 특정한 것임을 나타내기 위해 `_`를 접두사로 사용합니다.

따라서 표준을 유지하려면 항상 `_service`라는 이름을 사용해야 합니다.

## 구성

구성은 전역으로 이루어지며, 한 번만 정의하면 되고, 일반 코드의 시작 지점에서 실행하는 것이 좋습니다.

최소 구성은 다음과 같습니다:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

즉, 서비스 주소의 접두사를 정의하므로 항상 전체 URL을 입력할 필요가 없고, 서비스 호출 시 URL의 나머지 부분만 지정할 수 있습니다.

### 전체 구성

모든 서비스 호출에 대한 기본값을 구성할 수 있으며, 각 서비스 호출 시 이러한 값을 덮어쓸 수 있습니다.

구성할 수 있는 모든 매개변수는 다음과 같습니다:

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

URL의 전역 접두사입니다.

#### url

접두사에 추가되는 URL 부분, 즉 서비스의 특정 주소입니다.

#### method

HTTP 요청에 사용할 HTTP 메서드이며, 기본값은 `GET`입니다.

#### credentials

HTTP 호출에서 자격 증명의 동작을 정의합니다:

- `omit` - 자격 증명을 절대 보내거나 받지 않습니다.
- `same-origin` - 동일한 도메인에 대한 요청일 때만 자격 증명을 보내고 포함합니다.
- `include` - 도메인이 다르더라도 항상 자격 증명을 포함해야 합니다.

기본값은 `include`입니다. 일반적인 개발에서 가장 합리적이기 때문입니다. 백엔드가 동일 도메인에 있을 수도 있고 없을 수도 있는 것은 아키텍처에 따라 다르며, 로컬 개발 환경은 프로덕션과 다른 경우가 있으므로 예상치 못한 문제를 피하기 위해 `include` 사용을 권장합니다.

#### headers

`headers`에서 HTTP 헤더의 키와 값을 정의할 수 있습니다.

기본적으로 JSON 형식으로 데이터를 보내고 받도록 정의되어 있습니다.

#### start

HTTP 요청이 시작될 때 실행되는 `callback` 함수입니다.

#### success

백엔드 서버에서 HTTP 요청이 성공적으로 실행되었을 때 실행되는 `callback` 함수입니다.

응답 내용은 함수의 첫 번째 인수에서 얻습니다.

#### fail

HTTP 요청에서 오류가 발생했을 때 실행되는 `callback` 함수입니다.

오류 세부 정보는 함수의 첫 번째 인수에서 얻습니다.

#### end

HTTP 요청이 완료되었을 때 실행되는 `callback` 함수입니다.

성공 또는 오류 여부와 관계없이 항상 실행됩니다.

## 사용법

HTTP 요청으로 서비스를 실행하려면 서비스 요구 사항을 구성하는 매개변수 값을 정의합니다.

`data` 키에는 데이터 자체, 즉 백엔드 서비스로 보낼 모든 데이터 매개변수를 보냅니다.

기본 요청 예시는 다음과 같습니다:

```js
import _service from '@netuno/service-client';

_service({
  url: "내-서비스",
  data: { id: 1, 예시: "안녕하세요 백엔드." },
  start: () => {
    console.log("요청을 시작합니다.");
  },
  success: (response) => {
    if (response.text) {
      console.info("텍스트로 응답했습니다:", response.text);
    }
    if (response.json) {
      console.info("JSON으로 응답했습니다:", response.json);
    }
  },
  fail: (error) => {
    console.error("오류로 실패했습니다:", error);
  },
  end: () => {
    console.log("요청이 완료되었습니다.");
  }
});
```

최종 URL은 전역 구성에서 정의한 접두사를 반영합니다.

HTTP 메서드를 정의하지 않았으므로 전역 구성에서 정의한 기본 메서드로 전송되며, 기본값은 `GET`입니다.

### 간단한 예

`POST` 유형의 요청을 실행하는 간단한 예시입니다:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "상품",
  data: { 이름: "밀짚모자", 수량: 20 },
  success: ({json}) => {
    console.info("상품이 생성되었습니다:", json);
  },
  fail: (error) => {
    console.error("상품 생성에 실패했습니다:", error);
  }
});
```

### 폼

폼을 사용할 때 FormData 클래스에 폼 내용을 로드할 수 있습니다. 예시를 보세요:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("폼"));
_service({
  method: "PUT",
  url: "고객",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("고객이 업데이트되었습니다.");
    } else {
      alert("잘못된 응답입니다.");
    }
  },
  fail: (e) => {
    console.log("오류", e);
  }
});
```

### 업로드

`FormData` 클래스를 사용하여 파일을 업로드하는 간단한 예시입니다:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('파일', document.getElementById("파일필드").files[0]);
formData.append('다른필드', '값...');
_service({
  method: "PUT",
  url: "/업로드",
  data: formData,
  success: ({json}) => {
    alert('파일이 업로드되었습니다.');
  },
  fail: (e) => {
    console.log("응답 오류", e);
  }
});
```

### 다운로드

페이지 컨텍스트에 통합된 방식으로 서비스에서 동적으로 생성된 파일을 다운로드할 수 있습니다.

#### BLOB - 큰 이진 객체

이진 응답을 다운로드하려면 기본 매개변수에서 `blob`을 `true`로 설정해야 하며, 응답의 `blob`에서 생성된 바이트를 얻습니다.

```js
import _service from '@netuno/service-client';

_service({
  url: "/다운로드",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // 응답이 이진 데이터임을 정의합니다.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("잘못된 응답입니다.");
    }
  },
  fail: (e) => {
    console.log("오류", e);
  }
});
```

#### 사용자 지정 파일

프런트엔드에서 파일 이름과 유형을 사용자 지정할 수 있으며, [DownloadJS](https://www.npmjs.com/package/downloadjs) 의존성이 이 과정에서 매우 유용합니다. 

[DownloadJS](https://www.npmjs.com/package/downloadjs) 의존성을 설치합니다:

```shell
bun add downloadjs
```

코드에서는 다음과 같이 사용할 수 있습니다:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/보고서/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "보고서.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("오류", e);
  }
});

_service({
  url: "/services/보고서/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "보고서.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("오류", e);
  }
});
```

### 서비스 URL

서비스 URL을 생성해야 하는 상황이 있습니다. 예를 들어 HTML이나 CSS에 통합해야 하는 리소스를 제공하는 서비스가 있을 때입니다. 

명확한 예로 아바타가 있습니다. 사용자가 아바타 이미지를 정의하며, 표시하기 위해 다음과 같이 최종 URL을 생성할 수 있습니다:

```js
const avatarLink = _service.url(`/profile/avatar?uid=${user.uid}`)
```

생성된 URL은 HTML이나 CSS의 background와 같은 속성에 주입할 수 있습니다.

### React & Ant.Design

React와 Ant.Design을 많이 사용하므로 유용한 팁 몇 가지를 소개합니다.

기본 import는 다음과 같습니다:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

처리 상태를 정의합니다:

```js
const [loading, setLoading] = useState(false);
```

폼을 저장하는 이벤트 구현으로, 입력된 값이 담긴 객체를 JSON 형식으로 전송합니다:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: '오류',
      description: '데이터를 저장할 수 없습니다.'
    });
  };
  _service({
    url: '/services/고객',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: '성공',
          description: '데이터가 저장되었습니다.'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("서비스 실패.", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

Ant.Design의 폼 컴포넌트에서 미리 구현한 이벤트로 데이터를 전송하는 액션 속성을 정의합니다. 예를 들면 다음과 같습니다:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### 업로드

다음은 Ant.Design의 폼과 FormData를 사용하여 파일을 업로드하는 전체 예시입니다:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("제목", values.제목);
    formData.append("파일", values.파일.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "파일/저장",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: '폼',
          description: '데이터가 저장되었습니다.'
        });
      },
      fail: (e) => {
        console.error("업로드 폼 실패", e);
        notification.error({
          title: '폼',
          description: '데이터를 저장할 수 없습니다.'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="제목" name="제목"
        rules={[{ required: true, message: '제목을 입력하세요.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="파일" name="파일"
        rules={[{ required: true, message: '파일을 입력하세요.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>업로드</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          저장
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
```

## 결론

Service Client는 백엔드와의 통합을 신속하게 하여 데이터와 파일을 가져오고 보냅니다.

이러한 작업을 수행하기 위해 다른 네이티브 메서드나 다른 의존성을 사용할 수도 있지만, Service Client는 통합을 쉽고 빠르게 하도록 개발되었으며 유연하고 매우 직관적입니다.

Netuno가 생태계에서 Service Client를 제공하는 주된 목적은 개발이 명확하고 빠르도록 보장하는 것입니다.

Service Client를 사용하다가 문제를 발견하면 프로젝트의 [이슈](https://github.com/netuno-org/service-client/issues)에 보고해 주세요.

⭐ 프로젝트 GitHub에 별을 남겨 주세요:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).