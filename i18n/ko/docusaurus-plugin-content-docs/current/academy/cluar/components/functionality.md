---
sidebar_position: 7
id: functionality
title: 기능
sidebar_label: 기능
---

페이지에 포함할 수 있는 구체적인 기능들로, 예를 들어 양식과 지도 등이 있습니다.

## 소개

**기능**은 다른 컴포넌트와 다릅니다. 동일한 콘텐츠의 시각적 변형이 아니라, 각 유형이 페이지에 포함할 **구체적인 기능**입니다. 현재는 문의 양식이나 지도가 있습니다.

[개요](/docs/academy/cluar/components/overview)와 [컴포넌트 유형](/docs/academy/cluar/components/types)에 설명된 모든 컴포넌트의 공통 메커니즘을 따르지만, 여기서는 유형을 선택할 때 단순히 다른 스타일을 고르는 것이 아니라 **어떤 기능**이 페이지에 표시될지를 선택하는 것입니다.

## 필드

[공통 필드](/docs/academy/cluar/components/overview#공통-필드)(유형, 순서, 편집 모드, 배경 반전, 액션) 외에도, 기능에는 다음이 있습니다:

| 필드 | 설명 |
|---|---|
| **제목** (`title`) | 블록의 제목입니다. |
| **콘텐츠** (`content` / `html_content`) | 블록의 텍스트입니다. |
| **이미지** (`image`) | 연결된 이미지입니다(모든 유형이 사용하지는 않습니다). |

## 사용 가능한 유형

### 문의 양식 (`ContactForm`)

문의 양식(이름, 이메일, 메시지)을 표시하며, reCAPTCHA로 보호됩니다. 제출되면 서버의 `contact` 서비스로 데이터를 전송하고, 이 서비스는 `contact` 엔티티에 저장하며(백오피스에서 확인 가능) 이메일 알림을 설정할 수 있게 합니다.

### 문의 지도 (`ContactMap`)

[Mapbox](https://www.mapbox.com/)를 사용하여 인터랙티브 지도를 표시합니다. `settings.cluar.website.mapbox` 설정을 사용하며([설정](/docs/academy/cluar/configuration) 참고), 특히 `accessToken`(지도가 작동하려면 필수)과 `dark` 옵션(지도의 밝은 테마 또는 어두운 테마)을 사용합니다.

## 다음 단계

5개의 컴포넌트를 살펴보았으니, 대부분의 컴포넌트에 연결할 수 있는 [액션](/docs/academy/cluar/actions)으로 넘어가세요.