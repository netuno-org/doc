---
id: ui
title: UI
sidebar_label: UI
---

백오피스와 대시보드의 맞춤형 프런트엔드입니다.

## 사용자 인터페이스

이름에서 알 수 있듯이, `📂 ui` 폴더에는 애플리케이션의 사용자 인터페이스 로직이 있습니다.

애플리케이션 백오피스의 동작을 변경하기 위한 개발을 수행할 수 있습니다.

맞춤형 대시보드를 생성하고, 기능을 추가하거나 변경하는 등의 작업이 가능합니다.

백엔드든 프런트엔드든 애플리케이션의 일반 코드를 개발하려면 다음과 같은 무료 코드 편집기를 권장합니다:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## 폴더 구조

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>내버튼</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>대시보드컨테이너</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## 소스

`📂 src` 폴더에는 프런트엔드 애플리케이션 코드가 모여 있습니다. 이 폴더에는 React 컴포넌트 구성이 있으며, 각각 `components`와 `containers`입니다.

### 컨테이너

`📂 containers` 폴더는 컨테이너를 위한 곳입니다. 컨테이너는 상호작용이 더 많은 영역을 위한 React 컴포넌트입니다. 즉, 더 많은 기능을 가진 컴포넌트이며, 일반적으로 화면의 상당한 영역을 차지하고 범위에 따라 다른 컴포넌트를 통합할 수 있습니다.

예를 들어, 필터링용 양식이 있는 주문 테이블과 월별 합계를 집계한 차트를 하나의 컨테이너 안에 표시할 수 있습니다. 각 요소는 별도의 컴포넌트가 될 수 있지만, 대시보드의 주문 컨테이너에 통합됩니다.

### 컴포넌트

`📂 components` 폴더는 React에서 재사용 가능한 _컴포넌트_를 위한 곳입니다. 일반적으로 다른 컴포넌트나 컨테이너에 통합하는 데 유용한 매우 특정한 기능을 구현합니다.

일반적으로 더 단순한 동작을 포함하며 특정 범위의 목표에 매우 집중되어 있어, 여러 컨테이너 또는 다른 컴포넌트에서 재사용할 수 있습니다.

컴포넌트의 예로는 특정 테이블, 양식, 차트 유형 등을 들 수 있습니다.

### 스타일

`📂 styles` 폴더는 일반적으로 애플리케이션의 여러 컨테이너에 대한 전역 스타일을 위해 사용됩니다. 이 분야에 강한 표준은 없지만, `component` 또는 `container`에 특정한 스타일은 해당 컴포넌트와 함께, 즉 해당 컴포넌트 폴더 내부에 두는 구성을 제안합니다.
 
## Vite
 
애플리케이션의 UI를 포함하고, 컴파일 및 최적화되어 브라우저에서 처리되고 사용되는 최종 JavaScript 코드 버전을 생성하려면, React/JSX로 작성된 프런트엔드 코드의 해당 컴파일을 실행해야 합니다.

이 컴파일은 [Vite](https://vite.dev/)에 의해 수행되며, 해당 구성과 기타 지침은 다음 파일에 있습니다:

- `vite.config.js`

이 파일은 `📂 ui` 폴더의 루트에 있습니다.

## 패키지 관리자

`package.json` 파일은 종속성 모듈 관리자가 사용하며, 프런트엔드에 필요한 모든 종속성을 설치하려면 [Bun](https://bun.sh) 사용을 권장합니다.

또한 실행 명령은 [Bun](https://bun.sh)을 사용하며, 이는 또 다른 중요한 권장 사항입니다.

따라서 [Bun](https://bun.sh) 설치를 권장합니다.

## 지침

`README.md` 파일에는 설치 및 실행 지침이 포함되어 있습니다.

종속성을 설치하려면 다음을 실행하세요:

- `bun install`

개발 중인 프런트엔드 코드의 컴파일을 실행하려면:

- `bun run watch`

또는 프로덕션에 최적화된 최종 컴파일이라면:

- `bun run build`

기본적으로 컴파일은 다음 파일을 생성합니다:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

이 파일들은 애플리케이션의 백오피스 페이지(예: 대시보드 및 특정 기능)에 필요한 맞춤형 사용자 정의를 수행하기 위해 Netuno의 처리 과정에 통합됩니다.