---
id: public
title: 퍼블릭
sidebar_label: 퍼블릭
---

공개 파일은 URL로 직접 접근할 수 있습니다.

## 퍼블릭 폴더

`📂 public` 폴더에는 컴파일 후 클라이언트 측 UI(User Interface) 콘텐츠가 있으며, 로고와 아이콘 같은 기타 공개 파일도 함께 있습니다.

공개적으로 접근해야 하는 모든 파일을 포함할 수 있습니다.

## 폴더 구조

`📂 public` 폴더로 들어가면 기본적으로 다음 구조가 나타납니다:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## 이미지

`📂 images` 폴더에는 처음에 애플리케이션 로고와 아이콘이 포함되어 있습니다.

이 폴더에 애플리케이션의 모든 공개 이미지를 넣을 수 있습니다.

### icon.png

애플리케이션 아이콘으로, 브라우저 탭(파비콘)에 표시됩니다.

### logo.png

백오피스 로그인 페이지와 오류 페이지에 표시되는 로고 이미지입니다.

### logo-main.png

로그인하여 백오피스에 들어간 후 헤더(_header_)에 표시되는 로고 이미지입니다.

## 스크립트

`📂 scripts` 폴더에는 UI 컴파일로 생성된 최종 JavaScript 코드가 있으며, 다른 공개 JavaScript 파일도 여기에 둘 수 있습니다.

### ui.js

`ui.js` 파일은 UI의 최종 코드 컴파일 결과입니다.

일반적으로 UI는 React와 LESS로 개발되며, [Vite](https://vite.dev/)를 사용하여 최종 JavaScript 번들을 컴파일하며 그 결과가 `ui.js` 파일입니다.

컴파일 지침은 `ui/vite.config.js`에 있으며, 이 파일에는 `ui.js`가 처리되고 생성되는 방식에 대한 세부 정보가 포함되어 있습니다.

### ui.js.map

`ui.js.map` 파일은 UI의 소스 맵(source maps)으로, 브라우저 _콘솔_에서 오류를 디버깅할 때 원본 코드가 무엇인지 알려 주는 데 중요합니다.

## 스타일
  
`📂 styles` 폴더에는 애플리케이션 스타일링에 사용되는 CSS 파일이 있어야 합니다.

### main.css

`main.css`는 일반적으로 전역 CSS나 Netuno의 기본 스타일을 변경하는 데 사용됩니다.

### ui.css

`ui.css`는 UI 컴파일로 생성된 CSS입니다.

일반적으로 UI는 React와 LESS로 개발되며, [Vite](https://vite.dev/)를 사용하여 최종 CSS 번들을 컴파일하며 그 결과가 `ui.css`입니다.

컴파일 지침은 `ui/vite.config.js`에 있으며, 이 파일에는 `ui.css`가 생성되는 방식에 대한 세부 정보가 포함되어 있습니다.