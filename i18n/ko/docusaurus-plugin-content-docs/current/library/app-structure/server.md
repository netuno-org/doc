---
id: server
title: 서버
sidebar_label: 서버
---

백엔드 및 API 개발.

## 서버 폴더

`📂 server` 폴더에는 애플리케이션의 백엔드를 구성하는 파일과 폴더가 있습니다.

`📂 server` 폴더에 있는 모든 것은 통합, API, 데이터베이스, 보안 및 인증, Cron Jobs 등과 같이 백엔드 서버 처리에 사용됩니다.

## 폴더 구조

`📂 server` 폴더에는 다음과 같은 구조가 있습니다.

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## 액션

`📂 actions`에서는 백오피스용으로 자동 생성된 양식의 CRUD 작업에 맞춤형 액션(_hooks_)을 추가할 수 있습니다. 데이터 구조에 따라 여기에서 많은 데이터 개입을 수행할 수 있습니다.

예를 들어 고객을 삭제할 때는 해당 고객의 모든 주문을 삭제해야 하거나, 새 제품을 만들 때 다른 시스템과 연동해야 할 수 있습니다. 결국 데이터와 직접 관련된 모든 개발은 여기에서 수행할 수 있습니다.

액션은 데이터베이스 `triggers`에서 영감을 받았지만, 코드 실행 수준에서 동작합니다.

따라서 데이터 생성, 변경 및 삭제 시 특정 작업을 프로그래밍할 수 있습니다.

## 컴포넌트

`📂 components`는 백오피스 양식에서 사용자 정의 필드 유형을 정의하는 데 사용되며, 이러한 필드는 데이터 조작 자체를 수행할 수 있습니다.

스크립트를 통해 컴포넌트를 생성하여 애플리케이션에 특정한 새로운 필드 유형을 제공할 수 있습니다.

## 코어

`📂 core` 폴더를 사용하면 HTTP 요청 처리 흐름에 코드를 주입할 수 있습니다.

또한 다양한 서비스 등 간에 코드를 공유하는 데에도 사용됩니다.

`_config.js`는 각 HTTP 요청에서 구성이 로드된 후 실행되며, 애플리케이션의 `📂 config` 폴더에 있는 환경 구성 스크립트 다음에 실행됩니다.

`_init.js`는 애플리케이션이 처음 초기화될 때 일부 명령을 주입하는 데 사용됩니다.

### HTTP 요청 처리

애플리케이션의 모든 URL에 대한 HTTP 요청 처리 흐름에서는 해당 스크립트가 다음과 같이 실행됩니다.

- `_request_start.js`는 HTTP 요청이 Netuno 서버에 도착할 때 실행됩니다.
- `_request_url.js`는 Netuno가 URL을 처리할 때 실행되며, URL을 다른 대상으로 변경할 수 있습니다.
- `_request_close.js`는 HTTP 요청에 대한 응답이 닫힐 때 실행됩니다.
- `_request_end.js`는 HTTP 요청이 최종적으로 완료될 때 실행됩니다.
- `_request_error.js`는 HTTP 요청 처리 중 오류가 발생할 때 실행됩니다.

### API 서비스 처리

애플리케이션의 모든 API 서비스 처리 흐름에서는 다음 스크립트가 실행됩니다.

- `_service_config.js`는 서비스 실행을 시작하기 전에 실행되며, 무엇보다도 서비스의 실행 구성을 정의하는 데 사용됩니다. 서비스 실행 가능 여부를 정의할 수 있으며, 이는 API 서비스 접근에 대한 보안 제어입니다.
- `_service_start.js`는 일부 서비스가 처리되기 시작하는 즉시 실행됩니다.
- `_service_end.js`는 일부 서비스 처리가 완료된 후 실행됩니다.
- `_service_error.js`는 일부 서비스 처리 중 오류가 발생할 때 실행됩니다.

## 서비스 - API

`📂 services` 폴더에서 애플리케이션 API를 구성하는 서비스를 생성합니다.

서비스는 JavaScript, Python, Java, Kotlin, Ruby 또는 Groovy 등 다양한 언어로 작성할 수 있습니다.

Netuno는 다국어를 지원하므로 모든 스크립트 파일을 지원되는 다른 프로그래밍 언어로 변경할 수 있으며, 파일 확장자만 해당 언어에 맞게 지정하면 됩니다.

사용하는 프로그래밍 언어에 따라 추가 구성이 필요하지 않으며, 프로그래밍 언어에 해당하는 올바른 확장자로 서비스 파일을 생성하기만 하면 됩니다.

## 설정

`📂 setup` 폴더에는 데이터베이스 스키마를 정의하는 Netuno 엔진이 자동으로 생성한 코드가 있으며, 애플리케이션 작동에 필수적인 데이터 로딩을 배치하는 곳이기도 합니다.

`_start.js` 스크립트는 데이터베이스 구축 처리를 시작하기 전에 실행됩니다.

`_end.js` 스크립트는 데이터베이스 구축 처리가 완료된 후 실행됩니다.

데이터 구조 구축에 따라 Netuno는 여기 `📂 setup` 폴더에 전체 데이터 구조를 새 데이터베이스에서 다시 생성하거나, 애플리케이션이 실행될 수 있는 다른 데이터베이스에서 누락된 항목을 다시 생성하는 데 필요한 코드를 자동으로 생성합니다.

 ## 템플릿

`📂 templates` 폴더에는 Netuno 서버에서 생성되는 애플리케이션 백오피스 페이지의 HTML 콘텐츠가 있습니다.

`📂 dev` 폴더에는 개발자 빌드 모드에서 작업 영역을 변경할 수 있는 `dashboard.html` 파일이 있습니다.

템플릿 루트에 있는 `dashboard.html`에는 백오피스의 일반 작업 영역 HTML이 포함되어 있습니다.

### 기본 템플릿

`📂 _` 폴더에서는 모든 일반 템플릿을 대체할 수 있습니다. 즉, Netuno의 기본 템플릿을 변경할 수 있습니다.

- [Netuno의 기본 템플릿은 여기에서 확인할 수 있습니다.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

폴더 및/또는 파일 이름이 이 폴더 내 기본 템플릿의 이름과 일치하면 기본 템플릿 대신 이 폴더에 있는 템플릿이 사용됩니다.

즉, 대체하려면 `📂 _` 폴더 안에 기본 템플릿과 동일한 구조를 복제하기만 하면 됩니다.

### 스크립트

스크립트 템플릿은 다음 목적에 따라 페이지 끝에 JavaScript 코드 파일을 주입합니다.

1. `scripts.html`은 **백오피스** 페이지 끝에 JavaScript 코드를 추가합니다.
2. `scripts_dev.html`은 **개발자 빌드 영역** 페이지 끝에 JavaScript 코드를 추가합니다.
3. `scripts_login.html`은 **로그인** 페이지 끝에 JavaScript 코드를 추가합니다.

### 스타일

스타일 템플릿은 다음 목적에 따라 페이지 시작 부분에 스타일 파일을 주입합니다.

1. `styles.html`은 **백오피스** 페이지 시작 부분에 CSS 코드를 추가합니다.
2. `styles_dev.html`은 **개발자 빌드 영역** 페이지 시작 부분에 CSS 코드를 추가합니다.
3. `styles_login.html`은 **로그인** 페이지 시작 부분에 CSS 코드를 추가합니다.