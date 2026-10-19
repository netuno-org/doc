---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

일련의 항목을 강조해 보여 주는 캐러셀 컴포넌트입니다.

## 소개

**Slider**는 일련의 항목을 캐러셀로 표시합니다. 각 항목에는 배경 이미지, 제목, 텍스트가 있으며 선택적으로 자체 액션을 가질 수 있습니다. [Keen Slider](https://keen-slider.io/) 라이브러리로 렌더링됩니다.

모든 컴포넌트에 공통된 동일한 메커니즘을 따르며, 이는 [개요](/docs/academy/cluar/components/overview) 및 [컴포넌트 유형](/docs/academy/cluar/components/types)에 설명되어 있습니다.

## 슬라이더 필드

[공통 필드](/docs/academy/cluar/components/overview#공통-필드)(유형, 순서, 편집 모드, 배경 반전) 외에도 슬라이더에는 다음이 있습니다:

| 필드 | 설명 |
|---|---|
| **제목** (`title`) | 슬라이더 블록의 제목입니다. |
| **콘텐츠** (`content` / `html_content`) | 블록의 소개 텍스트입니다. |
| **이미지** (`image`) | 슬라이더 자체에 연결된 이미지입니다(항목이 아님). |
| **이미지 대체 텍스트** (`image_alt`) | 이미지의 대체 텍스트입니다. |
| **이미지 제목** (`image_title`) | 이미지의 `title` 속성입니다. |

## 항목

각 항목은 하나의 Slider(`page_slider_id`)에 속하며, 캐러셀의 "슬라이드" 중 하나입니다:

| 필드 | 설명 |
|---|---|
| **제목** (`title`) | 슬라이드의 제목입니다. |
| **콘텐츠** (`content` / `html_content`) | 슬라이드의 텍스트입니다. |
| **이미지** (`image`) | 슬라이드의 배경 이미지입니다. |
| **이미지 대체 텍스트** (`image_alt`) | 이미지의 대체 텍스트입니다. |
| **이미지 제목** (`image_title`) | 이미지의 `title` 속성입니다. |
| **순서** (`sorter`) | 캐러셀 내 슬라이드의 위치입니다. |
| **액션** | 각 항목에는 자체 액션이 연결될 수 있습니다. [액션](/docs/academy/cluar/actions)을 참고하세요. |

:::info 목록과의 차이
목록 항목과 달리 슬라이더 항목은 **자체 액션**을 가지며 개별적으로 연결됩니다(`page_slider_item_action`). 각 슬라이드는 자체 버튼/링크를 가질 수 있습니다.
:::

## 렌더링 구조

목록과 마찬가지로 슬라이더의 `Item`은 형제 폴더가 아니라 유형 폴더 **안에** 있습니다:

```
website/src/components/Slider/
├── index.jsx              # 라우터: 슬라이더 유형 선택
└── Default/
    ├── index.jsx           # 슬라이더 레이아웃, <Item />으로 캐러셀 구성
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # 각 슬라이드, 자체 액션 포함
```

## 사용 가능한 유형

현재는 **기본** (`Default`) 유형만 존재합니다. 자체 `Item`을 포함한 새로운 Slider 유형을 만들려면 [컴포넌트 유형](/docs/academy/cluar/components/types)에 설명된 것과 동일한 과정을 따르며, 새 유형 안에 `Item/` 하위 폴더를 포함해야 합니다.

## 다음 단계

[기능](/docs/academy/cluar/components/functionality)으로 계속 진행합니다.