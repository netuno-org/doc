---
sidebar_position: 3
id: pages
title: 페이지와 React Router
sidebar_label: 페이지와 React Router
---

## 소개

페이지 생성은 웹 애플리케이션이 복잡해지거나 서로 다른 콘텐츠를 표시해야 할 때 흔히 필요한 작업이며, 특히 웹사이트나 플랫폼을 다룰 때 자주 발생합니다.

React 개발에서는 [React Router](https://reactrouter.com)로 페이지 간 탐색 메커니즘을 만들 수 있습니다.

아래 단계는 React 프런트엔드 프로젝트 안에서 실행해야 합니다.

Netuno와 통합된 프런트엔드라면, 아래 단계를 Netuno 애플리케이션 폴더 중 프런트엔드 프로젝트가 있는 곳에서 수행해야 합니다. 예:

- `📂 website/`

## 설치

프로젝트에 React Router 모듈이 설치되어 있는지 확인하세요:

```
bun install react-router
```

그리고 전체 구조를 만드는 데 사용할 Ant.Design도 설치하세요:

```
bun install antd
```

## 구성

시작하려면 `📂 src` 폴더에 있는 `main.jsx`를 편집해야 하며, `BrowserRoute`를 다음과 같이 배치해야 합니다:

```javascript title="src/main.jsx"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

**매우 중요:** 새로 만든 프런트엔드라면 이미지와 같은 불필요한 가져오기와 모든 종류의 CSS/Style을 제거하여 잘못된 동작을 방지해야 합니다.

`📂 src` 폴더에 있는 `App.js`에서도 다음과 같이 모듈 가져오기를 추가하세요:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

가져오기 뒤에 다음 상수를 추가하세요:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

이 초기 단계에서 App 컴포넌트의 반환은 다음과 같을 수 있습니다:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">홈</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/정보">정보</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* 페이지 라우트는 여기에! */ }
        </Routes>
      </Content>
      <Footer>바닥글</Footer>
    </Layout>
  );
  ...
```

이렇게 하면 React Router 컴포넌트가 Ant.Design의 페이지 구조 컴포넌트와 함께 구성됩니다.

## 페이지 만들기

페이지는 별도의 컴포넌트에 두며, 각 페이지는 React의 자체 컴포넌트로 표현됩니다.

좋은 방법은 페이지 컴포넌트를 `📂 pages`라는 폴더 안에 두는 것입니다.

### 홈

진입 페이지를 만들며, 이는 `홈` 컴포넌트가 되고 `/` 경로에 연결됩니다.

이 페이지 컴포넌트의 파일은 다음과 같습니다:

- `pages/홈/index.jsx`

이 파일의 코드는 다음과 같을 수 있습니다:

```jsx title="src/pages/홈/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function 홈() {
  const 이동 = useNavigate();
  return (
    <div>
      <h1>홈</h1>
      <Button onClick={()=> 이동('/정보')}>
        정보 페이지로 이동
      </Button>
    </div>
  );
};

export default 홈;
```

> 버튼은 `이동` 함수를 사용해 프로그래밍 방식으로 페이지를 전환하며, `Link` 컴포넌트의 대안입니다.

### 정보

예제 콘텐츠 페이지를 만들며, 이는 `정보` 컴포넌트가 되고 `/정보` 경로에 연결됩니다.

이 페이지 컴포넌트의 파일은 다음과 같습니다:

- `pages/정보/index.jsx`

이 파일의 코드는 다음과 같을 수 있습니다:

```jsx title="src/pages/정보/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function 정보() {
  const 이동 = useNavigate();
  return (
    <div>
      <h1>정보</h1>
      <Button onClick={()=> 이동('/')}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}

export default 정보;
```

> 버튼은 `이동` 함수를 사용해 프로그래밍 방식으로 페이지를 전환하며, `Link` 컴포넌트의 대안입니다.

## 페이지 가져오기

`App.jsx` 시작 부분에서 생성한 페이지 컴포넌트를 가져오세요.

```jsx title="src/App.jsx"
import 홈 from './pages/홈';
import 정보 from './pages/정보';
```

페이지를 가져오면 각 페이지를 특정 주소(예: `/`, `/정보` 등)와 연결할 수 있습니다.

페이지 주소는 라우트, 즉 `Route`로도 이해할 수 있습니다.

따라서 `App.jsx`에서 라우트, 더 정확히는 `Routes`를 정의하는 곳에서 다음과 같이 페이지의 주소와 컴포넌트를 정의합니다:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<홈/>}/>
      <Route path="/정보" element={<정보/>}/>
    </Routes>
    ...
```

> `path`는 주소이고 `element`는 페이지 컴포넌트입니다.

`Menu`에는 페이지 주소를 가리키는 `Link`가 있는 항목이 있습니다. 따라서 `Link`의 `to` 속성은 `path`에 동일한 값이 연결된 해당 `Route`를 로드해야 함을 나타냅니다.

브라우저에서 이 주소를 직접 입력하면 해당 페이지인 컴포넌트가 나타나야 합니다.

## 내비게이션

더 많은 페이지 이동 옵션을 만들려면 `Menu`에 해당 주소를 가리키는 `Link` 유형의 컴포넌트를 추가해야 합니다.

또한 주소를 해당 페이지 컴포넌트에 연결하는 `Route` 컴포넌트도 추가해야 합니다.

`이동` 함수를 사용하면 다음과 같은 상황에서 프로그래밍 방식으로 페이지를 전환할 수 있습니다:

1. 로그인 페이지에서 데이터가 성공적으로 검증되면 자동으로 페이지를 전환해야 합니다.
2. 계정을 등록한 뒤 데이터가 성공적으로 저장되면 자동으로 로그인 페이지로 이동해야 합니다.

사용자가 클릭을 통해 탐색과 직접 상호작용할 때는 `Link` 컴포넌트를 사용합니다.

코드 실행 중 특정 시점에 페이지 전환이 발생하는 다른 경우에는 `useNavigate`로 얻은 `이동` 함수를 사용합니다.

## 결론

ReactJS와 React Router를 사용하면 여러 페이지를 정의하고 페이지 간 이동을 수행할 수 있습니다.

Ant.Design은 페이지 구조 구축을 돕고, 복잡하고 반응형인 인터페이스를 구축하는 데 유용한 다양한 컴포넌트를 제공합니다.