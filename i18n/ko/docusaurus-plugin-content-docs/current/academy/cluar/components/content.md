---
sidebar_position: 4
id: content
title: 콘텐츠
sidebar_label: 콘텐츠
---

CLUAR에서 가장 범용적인 텍스트 및 이미지 구성 요소입니다.

## 소개

**콘텐츠**는 CLUAR의 가장 범용적인 텍스트/이미지 구성 요소로, 선택한 유형에 따라 단순 텍스트 블록, 옆에 이미지가 있는 텍스트 또는 이미지만 표시하는 데 사용됩니다.

모든 구성 요소에 공통된 동일한 메커니즘을 따르며, [개요](/docs/academy/cluar/components/overview) 및 [구성 요소 유형](/docs/academy/cluar/components/types)에 설명되어 있습니다.

## 필드

[공통 필드](/docs/academy/cluar/components/overview#공통-필드)(유형, 순서, 편집 모드, 배경 반전, 작업) 외에도 콘텐츠에는 다음 필드가 있습니다:

| 필드 | 설명 |
|---|---|
| **제목** (`title`) | 콘텐츠 블록의 제목. |
| **콘텐츠** (`content` / `html_content`) | 블록의 텍스트. |
| **이미지** (`image`) | 연결된 이미지(텍스트 전용 유형에서는 사용되지 않음). |
| **이미지 대체 텍스트** (`image_alt`) | 이미지의 대체 텍스트. |
| **이미지 제목** (`image_title`) | 이미지의 `title` 속성. |
| **이미지 최대 너비** (`image_max_width`) | 이미지 너비를 픽셀 단위로 제한합니다. 넓은 화면에서 이미지가 과도하게 늘어나지 않도록 하는 데 유용하며, 특히 이미지가 텍스트 옆에 배치되는 유형에서 그렇습니다. |

## 사용 가능한 유형

배너와 달리 콘텐츠에는 이미지와 텍스트의 다양한 배치를 위한 여러 유형이 있습니다:

- **기본** (`Default`)
- **텍스트** (`TextContent`) — 이미지 없이 텍스트만.
- **이미지** (`ImageContent`) — 텍스트 없이 이미지만.
- **이미지 왼쪽** (`ImageLeft`)
- **이미지 오른쪽** (`ImageRight`)
- **이미지 상단** (`ImageTop`)
- **이미지 하단** (`ImageBottom`)

유형이 작동하는 방식과 새 유형을 만드는 방법에 대한 자세한 내용은 [구성 요소 유형](/docs/academy/cluar/components/types)을 참조하세요.

## 다음 단계

계속해서 [목록](/docs/academy/cluar/components/listing)으로 이동합니다.