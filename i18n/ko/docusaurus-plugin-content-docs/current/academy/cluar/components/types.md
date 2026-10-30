---
sidebar_position: 2
id: types
title: 컴포넌트 유형
sidebar_label: 컴포넌트 유형
---

## 개요

각 [컴포넌트](/docs/academy/cluar/components/overview)에는 **유형** 필드가 있으며, 이 필드는 렌더링에 사용할 시각적 변형을 정의합니다. 이 필드는 데이터베이스에 저장된 고정 목록이 아니라 **동적**이며, `website/src/components/<컴포넌트>/` 안에 존재하는 폴더로부터 구성됩니다. 예를 들어 배너의 경우:

```
website/src/components/배너/
├── index.jsx           # "라우터" 컴포넌트: 렌더링할 유형을 선택
├── 기본/
│   ├── index.jsx        # 변형 자체
│   ├── index.less
│   ├── info.json        # 유형의 이름/설명, 언어별
│   └── config.json       # 유형의 기능(예: 액션 지원 여부)
├── 보조/
│   └── ...
└── 기본서브배너/
    └── ...
```

`배너/` 안의 각 폴더는 해당 컴포넌트의 편집 양식에서 **유형** 필드에서 선택할 수 있는 **유형**입니다(예: 페이지에서 배너를 추가하거나 편집할 때, 사용 가능한 유형이 있는 선택 목록이 이 양식에 나타납니다).

선택 목록에서 사람이 **보는** 것은 `info.json`에 정의된 번역된 레이블(예: "기본형")이지만, 컴포넌트의 `type` 필드에 **저장되는** 것은 **폴더 이름**(예: `기본`)입니다 — 이후 "라우터" 컴포넌트가 렌더링할 변형을 선택할 때 사용하는 것이 바로 이 폴더 이름입니다(아래의 [`info.json` 및 `config.json`](#infojson-및-configjson) 참고).

> `기본서브배너` 같은 폴더의 '서브'라는 이름은 다른 유형 안에 중첩된 하위 폴더를 나타내지 않습니다 — 다른 유형들과 같은 수준의 또 하나의 유형일 뿐이며, 기본 유형의 더 눈에 띄지 않는/보조적인 변형임을 나타내는 이름 규칙일 뿐입니다.

### `info.json` 및 `config.json`

- **`info.json`** — 언어별로 유형의 레이블과 설명을 정의합니다. 편집 양식의 선택 목록에 표시되는 것은 이 레이블(`label`)입니다:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "ko": { "label": "기본형", "description": "배너를 추가합니다." }
  }
  ```
- **`config.json`** — 유형의 기능을 정의합니다. 현재 유일한 매개변수는 `action`이며, 이는 편집 양식에 액션 섹션이 나타나고 해당 유형에서 렌더링되는지를 제어합니다:
  ```json
  { "action": true }
  ```

이 두 파일은 서버의 서비스(`server/services/components/<컴포넌트>/list/`)가 실시간으로 읽으며, 이 서비스는 `website/src/components/<컴포넌트>/` 안의 폴더를 순회하고 사용 가능한 유형 목록을 반환합니다 — 이것이 해당 컴포넌트의 편집 양식에서 유형 선택 목록을 채우는 것입니다. 따라서 **새 유형을 추가하기 위해 서버를 재시작하거나 데이터베이스를 변경할 필요가 없습니다** — 폴더만 만들면 됩니다.

"라우터" 컴포넌트(`배너/index.jsx`)에서는 저장된 `type`을 사용해 어떤 변형을 가져와 렌더링할지 결정합니다:

```jsx
if (props.type === "기본") {
  layout = <기본 {...props} actions={renderedActions} />;
} else if (props.type === "보조") {
  layout = <보조 {...props} actions={renderedActions} />;
} else if (props.type === "기본서브배너") {
  layout = <기본서브배너 {...props} actions={renderedActions} />;
}
```

## 새 유형을 만드는 방법

1. `website/src/components/<컴포넌트>/` 안에 새 폴더를 만듭니다(예: `배너/강조/`).
2. 그 안에 `index.jsx`(변형의 React 컴포넌트), `index.less`(스타일), `info.json`(언어별 레이블/설명), `config.json`(`action: true` 또는 `false` 포함)을 만듭니다.
3. 상위 컴포넌트의 `index.jsx`(예: `배너/index.jsx`)에서 새 컴포넌트를 가져와, `type`에 따라 변형을 선택하는 조건에 추가합니다.
4. 새 유형은 해당 컴포넌트의 편집 양식 유형 선택 목록에 자동으로 나타나며, 폴더 이름이 저장되는 값으로 사용됩니다.

## 다음 단계

각 컴포넌트를 자세히 살펴보세요: [배너](/docs/academy/cluar/components/banner), [콘텐츠](/docs/academy/cluar/components/content), [목록](/docs/academy/cluar/components/listing), [슬라이더](/docs/academy/cluar/components/slider), [기능](/docs/academy/cluar/components/functionality).