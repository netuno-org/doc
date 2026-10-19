---
sidebar_position: 3
id: banner
title: 배너
sidebar_label: 배너
---

페이지 상단에서 주로 사용되는 대형 강조 컴포넌트입니다.

## 소개

**배너**는 페이지의 대형 강조 요소로, 일반적으로 전체 너비를 차지하는 이미지 위에 눈에 띄는 제목이 있고, 선택적으로 소개 텍스트와 작업(버튼/링크)이 포함됩니다.

모든 컴포넌트에 공통된 동일한 메커니즘을 따르며, [개요](/docs/academy/cluar/components/overview) 및 [컴포넌트 유형](/docs/academy/cluar/components/types)에 설명되어 있습니다.

## 필드

배너에는 [공통 필드](/docs/academy/cluar/components/overview#공통-필드)(유형, 순서, 편집 모드, 배경 반전, 작업) 외에 다음이 있습니다:

| 필드 | 설명 |
|---|---|
| **제목** (`title`) | 이미지 위에 강조 표시되는 제목입니다. |
| **콘텐츠** (`content` / `html_content`) | 제목 아래의 소개 텍스트입니다. |
| **이미지** (`image`) | 배너의 배경 이미지입니다. |
| **이미지 대체 텍스트** (`image_alt`) | 접근성 및 SEO를 위한 이미지 대체 텍스트입니다. |
| **이미지 제목** (`image_title`) | 이미지의 `title` 속성입니다. |
| **X 위치** / **Y 위치** (`position_x`, `position_y`) | 배경 이미지의 초점(`background-position`)을 백분율로 조정합니다. |

## 이미지 위치

**X 위치** 및 **Y 위치** 필드는 배너가 다양한 해상도에서 크기 조정될 때 배경 이미지의 어느 부분이 항상 보이도록 할지 제어합니다. 이는 CSS의 `background-position`과 동일한 원리입니다.

예를 들어 `50%` / `50%`는 초점을 이미지 중앙에 맞춥니다. 어떤 해상도에서든 이미지 중앙이 보이도록 유지되며, 필요에 따라 가장자리가 잘립니다.

## 사용 가능한 유형

현재 세 가지 배너 유형이 있습니다:

- **기본** (`Default`) — 제목, 콘텐츠, 작업이 있는 기본 레이아웃입니다.
- **보조** (`Secondary`) — 기본과 시각적으로 다르지만(CSS/LESS의 자체 스타일) 동일한 필드 구조를 가집니다.
- **강조가 있는 기본** (`DefaultSubBanner`) — 작업을 지원하지 않는 더 은은한 변형입니다(`config.json`의 `action: false`).

유형의 작동 방식과 새 유형을 만드는 방법에 대한 자세한 내용은 [컴포넌트 유형](/docs/academy/cluar/components/types)을 참조하세요.

## 다음 단계

[콘텐츠](/docs/academy/cluar/components/content)로 이어집니다.