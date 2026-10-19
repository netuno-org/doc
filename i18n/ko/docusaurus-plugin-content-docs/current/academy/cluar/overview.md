---
sidebar_position: 1
id: overview
title: 개요
sidebar_label: 개요
---

CLUAR는 [Netuno](https://www.netuno.org/) 기반으로 구축된 오픈 소스 CMS로, 다국어 웹사이트를 제작하기 위한 솔루션입니다. 페이지의 시각적 구성 요소(배너, 목록, 슬라이더 등)는 ReactJS로 개발되며, 인터페이스에는 [Ant Design](https://ant.design/), 탐색에는 [React Router](https://reactrouter.com/), 스타일에는 [Less](https://lesscss.org/)를 사용합니다. 반면 콘텐츠(페이지, 텍스트, 이미지, 언어, 메뉴)는 백오피스를 통해 관리하므로 프로그래밍이 필요 없습니다.

코드는 [GitHub의 CLUAR 저장소](https://github.com/netuno-org/cluar)에서 확인할 수 있으며, 기여를 환영합니다.

## 콘텐츠 모델

CLUAR의 콘텐츠는 **페이지 → 버전 → 컴포넌트** 구조를 따릅니다:

- 각 **페이지**는 사이트의 URL(`link`)을 나타내며, 제목, 메뉴, SEO 등을 포함합니다.
- 각 페이지에는 하나 이상의 **버전**이 있으며, 이를 통해 이미 게시된 내용에 영향을 주지 않고 초안 작업을 할 수 있습니다.
- 각 버전 안에는 콘텐츠 **컴포넌트** — 배너, 콘텐츠, 목록, 슬라이더, 기능 — 가 들어가며, 이는 실제로 페이지에 표시되는 블록입니다. 각 컴포넌트는 고유한 시각적 유형과 선택적으로 연결된 작업(버튼/링크)을 가집니다.

## 프로젝트 아키텍처

프로젝트는 네 부분으로 나뉩니다:

- **`server`** — Netuno 애플리케이션: 데이터 엔티티, REST 서비스, 초기 구성 스크립트(`setup`)입니다.
- **`website`** — REST를 통해 데이터를 소비하고 페이지를 렌더링하는 ReactJS 사이트입니다.
- **`ui`** — CLUAR 전용 Netuno 백오피스 확장입니다.
- **`config`** — 환경 구성(데이터베이스, 인증, 일반 설정)입니다.

## 다음 단계

- [설치](/docs/academy/cluar/install)
- [구성](/docs/academy/cluar/configuration)
- [컴포넌트](/docs/academy/cluar/components/overview)
- [페이지](/docs/academy/cluar/pages/overview)
- [언어](/docs/academy/cluar/languages)
- [권한](/docs/academy/cluar/permissions)