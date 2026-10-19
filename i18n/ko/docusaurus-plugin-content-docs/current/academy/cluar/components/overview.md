---
sidebar_position: 1
id: overview
title: 개요
sidebar_label: 개요
---

**컴포넌트**는 [버전](/docs/academy/cluar/pages/versions-publishing) 내에서 [페이지](/docs/academy/cluar/pages/overview)를 구성하는 콘텐츠 블록입니다. 5가지 유형이 있습니다:

- **배너**
- **콘텐츠**
- **목록**(항목 포함)
- **슬라이더**(항목 포함)
- **기능**

각 유형은 자체 엔티티(`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`)와 백오피스의 자체 양식, 웹사이트의 자체 React 컴포넌트를 가집니다.

## 공통 필드

각 컴포넌트에는 고유한 필드가 있지만, 대부분은 유사한 기본 구조를 공유합니다:

| 필드 | 설명 |
|---|---|
| **유형** (`type`) | 이 컴포넌트를 렌더링하는 데 사용할 시각적 변형을 정의합니다 — [컴포넌트 유형](/docs/academy/cluar/components/types)을 참고하세요. |
| **순서** (`sorter`) | 페이지 내 컴포넌트의 위치입니다. |
| **편집 모드** (`edit_mode`) | 콘텐츠(`content`)가 일반 텍스트인지 HTML(`html_content`)인지 정의합니다. |
| **제목/콘텐츠 배경 반전** (`title_invert_background`, `content_invert_background`) | 제목/콘텐츠 **편집기**의 색상 구성(밝게/어둡게)을 반전합니다 — 어두운 배경(예: 배너의 어두운 이미지) 위에 표시될 텍스트를 작성할 때 편집 중 대비를 확인하는 데 유용합니다. 페이지에 이미 게시된 콘텐츠의 색상은 변경하지 않습니다. |
| **액션** | 컴포넌트에 연결된 버튼/링크입니다 — [액션](/docs/academy/cluar/actions)을 참고하세요. 모든 유형이 액션을 지원하는 것은 아닙니다 — [컴포넌트 유형](/docs/academy/cluar/components/types)을 참고하세요. |

## 다음 단계

모든 컴포넌트는 동일한 동적 유형 메커니즘을 사용합니다 — [컴포넌트 유형](/docs/academy/cluar/components/types)을 참고하세요. 그다음 각 컴포넌트를 자세히 살펴보세요: [배너](/docs/academy/cluar/components/banner), [콘텐츠](/docs/academy/cluar/components/content), [목록](/docs/academy/cluar/components/listing), [슬라이더](/docs/academy/cluar/components/slider), [기능](/docs/academy/cluar/components/functionality).