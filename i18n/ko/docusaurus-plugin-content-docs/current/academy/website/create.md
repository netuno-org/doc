---
sidebar_position: 2
id: create
title: React로 생성
sidebar_label: React로 생성
---

이 생성 과정은 다른 맥락에도 적용할 수 있습니다. 예를 들어 모든 유형의 React 프로젝트를 생성할 때 적용할 수 있으며, 이 경우 이름과 명령을 실행하는 폴더를 적절히 조정해야 합니다.

기본 전제는 웹 계층, 즉 Netuno 애플리케이션의 프론트엔드를 생성한다는 것입니다.

따라서 Netuno 애플리케이션 내부에 `website`를 생성한다고 가정합니다. 이는 프론트엔드 계층의 기본 이름이지만 원하는 다른 이름으로 지정할 수도 있습니다.

## 사전 요구 사항

Netuno가 설치되어 있어야 합니다:

- [Netuno 설치](/docs/get-started/installation)

더 나은 성능 등 여러 이점 때문에 Bun을 설치해야 합니다:

- [Bun 설치](/docs/academy/website/bun)

## 생성

Netuno 애플리케이션 내부에 React 애플리케이션을 생성할 때 일반적으로 `website`라고 부릅니다.

그런 다음 **터미널**을 **Netuno 애플리케이션의 루트**에서 엽니다. 일반적으로 다음 폴더 안에 있습니다:

- `netuno/apps/내_앱`

> 여기서 `내_앱`은 Netuno 애플리케이션 이름입니다.

다음 명령을 실행합니다:

```shell
bun create vite
```

이어서 `Project name:` 질문이 나오면:

`website`를 입력하고 `ENTER` 키를 누릅니다.

다음으로 `Select a framework:` 질문이 나옵니다:

키보드 화살표를 사용하여 아래쪽 키를 눌러 `React` 옵션이 선택될 때까지 이동한 후 `ENTER` 키를 누릅니다.

마지막으로 다음 질문이 나옵니다: `Select a variant:`

키보드 화살표를 사용하여 아래쪽 키를 눌러 `JavaScript` 옵션이 선택될 때까지 이동한 후 `ENTER` 키를 누릅니다.

이 명령은 React 프론트엔드가 포함된 `📂 website`라는 새 디렉터리를 생성합니다.

React 프론트엔드를 생성한 후 다음처럼 실행하여 종속성을 설치합니다:

```shell
cd website
bun install
```

선호하는 편집기(예: VSCode, WebStorm 등)에서 Netuno 애플리케이션 폴더를 열고, 생성된 `website` 폴더로 들어갑니다.

## 실행

이제 다음 명령으로 React 프론트엔드 서버를 시작할 수 있습니다:

```shell
bun run dev
```

이렇게 하면 프론트엔드가 [http://localhost:5173/](http://localhost:5173/) 주소에서 사용 가능해집니다. 일반적으로 또는 다른 포트 번호의 다른 주소가 터미널에 표시될 수 있으며, 어쨌든 터미널에 표시된 주소를 브라우저에서 열면 됩니다.

> 터미널에서 실행을 종료하려면 `CTRL`과 `C` 키를 동시에 누릅니다.

## 종속성 설치

터미널에서 프론트엔드 서버, 즉 `bun run dev`를 실행 중인 경우 중지하는 것이 좋습니다. `CTRL`과 `C` 키를 동시에 누릅니다.

Netuno와 함께 React 애플리케이션을 개발할 때 매우 유용하므로 다음 NPM 패키지를 설치하는 것을 적극 권장합니다(각 링크를 클릭하면 각 패키지에 대한 자세한 정보를 확인할 수 있습니다):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

위에 나열된 패키지를 설치하려면 터미널에서 다음 명령 집합을 실행하면 됩니다:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

또는 모든 패키지를 한 번에 설치할 수도 있습니다:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## 설정

위 명령을 실행한 후 기본 포트 주소를 강제하려면 `📂 website/vite.config.js`로 이동하여 다음과 같이 `server` 구성을 추가합니다:

```javascript title="website/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

이제 `bun run dev` 명령으로 시작하면 항상 `3000` 포트를 사용합니다.

### Less

`website/src`에 있는 모든 `.css` 파일의 확장자를 `.less`로 변경합니다.

> `.css` 파일을 `import`하는 JSX 코드의 해당 줄도 `.less`로 변경하는 것을 잊지 마세요.

LESS를 사용하면 CSS를 더 구조적이고 현대적으로 개발할 수 있습니다.

### Ant.Design 테마 사용자 지정

Ant.Design의 색상을 사용자 지정하려면 `App.jsx`에서 `ConfigProvider` 컴포넌트를 사용합니다.

예:

```jsx title="website/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">사용자 지정 색상 버튼</Button>
            ...
        </ConfigProvider>
    );
}
...
```

이렇게 하면 Ant.Design의 모든 스타일 구성을 조정할 수 있습니다.

### 다크 테마

Ant.Design의 다크 테마도 사용할 수 있습니다. 이를 위해서는 다크 모드를 포함하는 `theme`을 import하고 `ConfigProvider`에 적용하면 됩니다:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">사용자 지정 색상 버튼</Button>
        ...
    </ConfigProvider>
...
```

### 재스타일링

위 `ConfigProvider` 설정에서 Ant.Design 스타일을 쉽게 변경할 수 있습니다. Ant.Design 사용자 지정에 대한 자세한 내용:

- [테마 사용자 지정](https://ant.design/docs/react/customize-theme)

Ant.Design의 각 컴포넌트에는 가능한 디자인 토큰 구성이 있습니다. 예를 들어 Button의 경우:

- [Button - 디자인 토큰](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">사용자 지정 색상 버튼</Button>
    ...
</ConfigProvider>
```

## Netuno와 함께 프론트엔드 자동 시작

Netuno를 사용하면 Netuno 애플리케이션 서버 프로세스와 함께 React 애플리케이션을 시작할 수 있습니다.

> React 애플리케이션의 모든 컴파일 메시지가 Netuno 애플리케이션과 동일한 터미널에 통합됩니다.

이를 위해 `📂 config/_development.json`의 Netuno 애플리케이션 `commands` 구성에 다음을 추가하면 됩니다:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Netuno 애플리케이션의 구성 파일을 편집할 때마다 새 변경 사항이 적용되도록 서버를 재시작해야 합니다.

마지막으로 Netuno 애플리케이션과 함께 서버를 시작/재시작하여 작동을 확인합니다.

이제 모든 것이 하나의 중앙 집중식 터미널에 통합되어 여러 터미널이 분산되는 것을 방지합니다. 자세한 내용은:

- [중앙 집중식 터미널](/docs/academy/explore/centralized-terminal)

## CORS(Cross-Origin Resource Sharing) 구성

CORS를 구성하여 프론트엔드와 Netuno 애플리케이션 서비스 간 통신에서 발생할 수 있는 오류를 방지하려면 다음에서 애플리케이션 구성을 편집합니다:

- `📂 config/_development.json`

`cors` 구성이 이미 있는지 확인하고, `origins`에 `*`가 있으면 개발 환경에 적합하므로 그대로 두어도 됩니다.

`cors` 구성이 없으면 다음 예제를 기반으로 추가하세요. 주소는 프론트엔드 주소와 동일해야 합니다:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> `origins`에 `*`가 있으면 모든 프론트엔드 주소가 지원된다는 뜻입니다. 예를 들어:
> - `"origins": [ "*" ]`
> 일반적으로 개발 환경에서는 `*`를 사용합니다.

구성이 완료되면 CORS 보안 문제 없이 원하는 API 서비스를 프론트엔드와 통합할 수 있습니다.

> 자세한 내용: [CORS](/docs/academy/server/services/cors)

## 환경 변수

환경 변수 구성은 변수 정의가 포함된 `website/.env` 파일을 생성하여 정의할 수 있습니다. 예를 들어:

```
NODE_ENV=development
```

또는 Netuno 애플리케이션 구성에서 정의할 수 있습니다. 예를 들어 다음 파일에서:

- `📂 config/_development.json`

명령 구성의 `env` 매개변수에 환경 변수를 정의하면 됩니다. 예를 들어:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "website",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```