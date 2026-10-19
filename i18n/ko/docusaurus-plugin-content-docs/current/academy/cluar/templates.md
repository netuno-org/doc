---
sidebar_position: 11
id: templates
title: 템플릿
sidebar_label: 템플릿
---

페이지의 전체 레이아웃이 어떻게 정의되는지, 그리고 새로운 템플릿을 만드는 방법을 설명합니다.

## 소개

**템플릿**은 [페이지](/docs/academy/cluar/pages/overview)의 전체 레이아웃을 정의합니다. 템플릿은 페이지의 `template` 필드 값이며, `website/src/pages/Template/` 안의 폴더에 해당합니다.

:::info 컴포넌트 유형 메커니즘의 기원
[컴포넌트 유형](/docs/academy/cluar/components/types) 메커니즘(동적 폴더 + `info.json`)은 이 템플릿 메커니즘에서 영감을 받았으며, 템플릿이 먼저 이렇게 동작했습니다. 구조는 거의 동일하지만, 콘텐츠 블록이 아닌 페이지 전체에 적용됩니다.
:::

## 작동 방식

```
website/src/pages/Template/
├── index.jsx        # 라우터: 렌더링할 템플릿을 선택
└── Default/
    ├── index.jsx      # 템플릿 자체
    ├── index.less
    └── info.json       # 언어별 템플릿 이름/설명
```

`Template/` 안의 각 폴더는 페이지 편집 폼의 **템플릿** 필드에서 선택할 수 있는 템플릿입니다. 폴더 이름(`Default`)이 페이지의 `template` 필드에 저장되는 값입니다.

예를 들어 기본 템플릿의 `info.json`은 다음과 같습니다:

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "pt": { "label": "Padrão", "description": "Para páginas que utilizam o estilo genérico." }
}
```

:::info 선택 상자는 `info.json`의 번역된 라벨을 사용합니다
컴포넌트 유형과 마찬가지로, 페이지 폼의 템플릿 선택 상자는 `info.json`의 번역된 라벨(`label`)을 표시합니다. 이를 위해 서비스 요청 시 현재 언어(`Cluar.currentLanguage().locale`)를 전송합니다. 페이지의 `template` 필드에 저장되는 값은 여전히 폴더 이름(`Default`)입니다.
:::

또한 서버에는 사용 가능한 템플릿 목록을 실시간으로 폴더를 스캔하여 반환하는 서비스가 있습니다(`server/services/page/template/list/`). 같은 이유에서입니다. 즉, **새 템플릿을 추가하기 위해 서버를 재시작할 필요가 없으며**, 폴더만 생성하면 됩니다.

컴포넌트 유형과의 차이점이 하나 있습니다. 템플릿에는 `config.json`이 없습니다. 현재 템플릿별로 구성 가능한 기능은 없으며, `index.jsx`와 `info.json`만 존재합니다.

## 기본 템플릿

**기본**(`Default`) 템플릿은 대부분의 페이지가 사용하는 템플릿입니다. 페이지 콘텐츠를 `Builder` 주위로 사이트의 헤더와 푸터(`BaseHeader` / `BaseFooter`)로 감쌉니다. `Builder`는 각 컴포넌트의 순서 필드에 정의된 순서대로 페이지 컴포넌트(배너, 콘텐츠, 목록, 슬라이더, 기능)를 실제로 순회하며 렌더링하는 컴포넌트입니다.

:::info 인식되지 않는 템플릿을 가진 페이지
페이지의 `template` 필드가 존재하는 폴더와 일치하지 않는 경우(예: 이름을 잘못 입력했거나 폴더가 삭제된 경우), CLUAR는 **실패하지도 않고 기본 템플릿을 대체재로 사용하지도 않습니다**. 대신 사이트 헤더와 푸터 없이 "벌거벗은" `Builder`만 렌더링합니다. 이는 인식되지 않는 유형이 기본 유형으로 대체되는 컴포넌트 유형의 동작과 다릅니다.
:::

이를 결정하는 것은 라우터(`Template/index.jsx`)입니다:

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

명시적인 검사는 하나뿐(`"Default"`)이라는 점에 주목하세요. 인식되든 되지 않든 다른 모든 `template` 값은 곧바로 `else`로 빠져 `Builder`만 렌더링합니다.

## 새 템플릿 만드는 방법

1. `website/src/pages/Template/` 안에 새 폴더를 만듭니다(예: `Template/Landing/`).
2. 그 안에 `index.jsx`(템플릿의 React 레이아웃), `index.less`(스타일), `info.json`(언어별 라벨/설명 — 선택 상자에 표시되는 라벨)을 만듭니다.
3. 라우터의 `index.jsx`(`Template/index.jsx`)에서 새 템플릿을 임포트하고 `page.template` 필드로 템플릿을 선택하는 조건에 추가합니다.
4. 그러면 새 템플릿이 페이지 편집 폼의 템플릿 선택 상자에 자동으로 나타나며, 폴더 이름이 저장되는 값이 됩니다.

## 다음 단계

[권한](/docs/academy/cluar/permissions)을 살펴보세요.