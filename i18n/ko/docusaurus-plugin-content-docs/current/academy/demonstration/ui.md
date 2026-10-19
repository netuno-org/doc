---
sidebar_position: 7
id: ui
title: 인터페이스 및 디자인
---

## 소개

프런트엔드 개발, 즉 브라우저에서 시각적으로 처리되는 부분은 **ui** 폴더 안에서 이루어집니다.

기본적으로 이 폴더에는 <a href="https://reactjs.org/" target="_blank">ReactJS</a>와 <a href="https://ant.design/" target="_blank">Ant.Design</a> 및 <a href="http://lesscss.org/" target="_blank">Less</a>로 개발된 개발 환경이 있으며, <a href="https://vite.dev/" target="_blank">Vite</a>를 사용하여 컴파일됩니다.

기본 환경이 이러한 기술들로 구성되어 있지만, 오늘날 널리 사용되기 때문일 뿐 이러한 기술로 제한되지는 않습니다.

**VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript** 등 다른 기술을 사용하려면 `📂 ui` 폴더 안의 `📂 package.json` 및 `📂 vite.config.js` 설정을 원하는 기술에 맞게 변경하면 됩니다.

> [통합 및 중앙 집중식 터미널](/docs/academy/explore/centralized-terminal)에 대해 더 알아보세요.

## 사전 요구 사항

시작하기 전에 [Bun](https://bun.sh/)이 설치되어 있는지 확인하는 것이 중요합니다.

> [Bun 설치](/docs/academy/website/bun) 방법을 확인하세요.

사용 인터페이스가 어떻게 동작하는지 더 잘 이해하려면 다음을 권장합니다:

- [프런트엔드 UI 계층에 대해 더 알아보기.](/docs/academy/ui/ui-layer)

## 서비스 확장

`📂 server/services/근로자.js`에 **근로자** 서비스를 Visual Studio Code를 통해 생성한 후, 이 서비스는 다음 주소에서 <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> 정보를 제공합니다:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/근로자</a>

다음 단계는 이 서비스를 확장하여 브라우저 인터페이스에 데이터를 표시하는 것입니다.

이 데이터를 표로 그리고 그래프로 표시해 보겠습니다.

**데모** 애플리케이션이 열려 있는 Visual Studio Code 또는 다른 텍스트 편집기가 있다고 가정합니다.

편집기에서 다음 파일을 여세요:

`📂 ui/src/containers/DashboardContainer/index.jsx`

기존 코드를 변경해 보겠습니다.

### `state` 준비하기

`DashboardContainer` 컴포넌트의 `function` 시작 부분에 해당 _state_ 정의가 있습니다.

다음과 같이 근로자 데이터를 저장할 새 항목을 추가하세요:

```jsx
            // 👇 아래에 새 코드 줄을 추가하세요:
            const [근로자, set근로자] = useState([]);
            const [불러오는중, set불러오는중] = useState(false);
```

즉, 새 상태 줄 `const [근로자, set근로자] = useState([]);`를 추가합니다.

### `근로자불러오기` 함수 만들기

아래쪽에 `근로자불러오기`라는 함수가 있는 것을 확인할 수 있습니다. 이 함수는 현재 대시보드에 표시되는 근로자 데이터를 가져옵니다.

> 이 함수는 근로자 데이터를 불러오는 데 사용됩니다.

아래 코드를 삽입하세요:

```jsx
    /**
    *** 🚀 근로자 데이터를 불러옵니다.
    ***    다음 서비스 실행을 통해:
    **     http://localhost:9000/services/근로자
    */
    const 근로자불러오기 = () => {
        set근로자([]);
        set불러오는중(true);
        _service({
            url: intl.locale.indexOf('ko') == 0 ? '/services/근로자' : '/services/workers',
            success: (response) => {
                set근로자(response.json);
                set불러오는중(false);
            },
            fail: (e) => {
                set불러오는중(false);
                console.error('근로자 서비스에 실패했습니다.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

위 코드는 **근로자** 데이터를 <a href="https://reactjs.org/" target="_blank">ReactJS</a> 컴포넌트의 _state_로 전달합니다. 이는 **근로자** 서비스를 실행하여 JSON으로 데이터를 받은 뒤 `set근로자` 실행을 통해 해당 데이터를 _state_에 저장하는 방식입니다.

최종 코드는 다음과 같은 구조가 되어야 합니다:

```jsx
    useEffect(() => {
        ...
    }, []);

    const 근로자불러오기 = () => {
        ...
    }

    return ( 
        ...
    );
```

> 여기서 `...`는 각 블록 안에서 생략된 여러 코드 줄입니다.

### `useEffect` 훅 실행하기

이제 컴포넌트가 "마운트"될 때 `useEffect` 훅을 실행해야 합니다. 이 훅은 컴포넌트가 브라우저의 시각적 화면에 구성될 때 실행됩니다.

이를 위해 조금 위쪽에서 `useEffect` 훅 안에 `근로자불러오기();` 코드 줄을 다음과 같이 추가하면 됩니다:

```jsx
    useEffect(() => {
        근로자불러오기();
    }, []);
```

이 새 코드 줄은 앞서 생성한 <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/근로자</a> 서비스를 실행하는 함수를 호출하여 JSON으로 데이터를 가져오고, 이를 컴포넌트의 `state`(_상태_)에 저장하여 return(_화면_)에서 표시되도록 합니다.

### 컴파일

파일을 **저장**하면, Netuno가 실행 중인 **터미널**에 **ui**의 새 컴파일 결과가 나타납니다. 이때 <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a> 컴파일 결과의 새 줄들이 표시됩니다.

**터미널**에서 예상되는 출력은 다음과 유사해야 합니다:

```
> ui@1.0.0 watch netuno/apps/데모/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/데모/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

컴파일 중 오류가 있으면 **터미널**에 문제에 대한 안내가 표시됩니다.

지금까지 **근로자** 서비스를 사용해 얻은 데이터를 `DashboardContainer` 컴포넌트의 `state`에 저장하여 `return`에서 사용할 수 있도록 했습니다.

## 데이터 표시

이제 사용자가 브라우저에서 보는 인터페이스에 데이터를 시각적으로 표시해야 합니다.

브라우저에 데이터를 표시하려면 <a href="https://reactjs.org/" target="_blank">ReactJS</a>에서 컴포넌트의 시각적 측면을 처리하는 `return`을 변경해야 합니다.

`DashboardContainer` 코드 끝에서 `return ( ... );`를 찾을 수 있습니다.

**근로자** 관련 데이터를 표시할 `DataVisualization` 컴포넌트를 하나 더 포함하도록 코드 한 줄만 추가하여 변경해 보겠습니다. 코드는 다음과 같아야 합니다:

```jsx
    // 🔍 기존 코드에서 다음을 찾으세요:
    return (
    <div ref={ref}>
      { 불러오는중 == false ?
        <DataVisualization data={근로자} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

아래 줄만 추가해야 한다는 점에 유의하세요:

```jsx
<DataVisualization data={근로자} />
```

이렇게 하면 `DataVisualization`은 **근로자** 서비스를 통해 JSON으로 가져와 `state`에 저장된 데이터를 받게 됩니다.

### 최종 컴파일

지금까지 수행한 모든 변경 사항이 반영된 파일을 **저장**하세요.

**터미널** 출력에 오류가 없는지 확인하세요.

이제 브라우저에서 페이지를 새로 고치면 최종 결과를 볼 수 있습니다. 또는 아래 링크를 클릭하세요:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> 대시보드가 비어 있으면 코드에 오류가 있다는 뜻입니다.
>
> **개발자 도구**의 **브라우저** 콘솔에서 오류가 있는지 확인하세요.

## 더 알아보기 👇

<a href="https://reactjs.org/" target="_blank">ReactJS</a> 빠른 소개:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">ReactJS 입문자를 위한 가이드.</a>