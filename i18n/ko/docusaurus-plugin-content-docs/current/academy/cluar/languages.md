---
sidebar_position: 5
id: languages
title: 언어
sidebar_label: 언어
---

CLUAR가 웹사이트의 언어와 다국어 콘텐츠를 관리하는 방식입니다.

## 소개

CLUAR는 기본적으로 다국어를 지원합니다. 각 **페이지**는 하나의 언어와 연결되며, 웹사이트는 방문자가 사용 가능한 언어 간에 전환할 수 있도록 선택기를 표시합니다.

언어는 백오피스의 **언어** 양식을 통해 관리됩니다.

## 필드

| 필드 | 설명 |
|---|---|
| **코드** (`code`) | 언어의 국제 코드입니다(예: `PT`, `EN`). 콘텐츠(페이지, 사전, 설정)를 이 언어에 연결하는 데 사용되는 값입니다. |
| **로캘** (`locale`) | 전체 로캘입니다(예: `pt`, `en`). 페이지 링크와 코드를 통한 언어 전환에 사용되는 값입니다. |
| **기본값** (`default`) | 이 언어를 웹사이트의 기본 언어로 표시합니다. 기본적으로 로드되는 언어입니다. |
| **설명** (`description`) | 방문자에게 표시되는 언어 이름입니다(예: "포르투갈어"). |

## 웹사이트에서 언어 선택

현재 프로젝트에는 두 가지 언어 선택기가 있습니다:

- **공개 사이트 헤더** (`website/src/base/Header`) — [Ant Design 메뉴](https://ant.design/components/menu/)로 만든 전통적인 선택기입니다. 언어를 전환하면 `/{locale}/`로 이동합니다. 빈 옵션이 표시되지 않도록 이미 게시된 페이지가 있는 언어만 나열합니다(`Cluar.pages()` 사용).
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — 예약 영역(`ReservedArea`) 내부에서 사용됩니다. 더 간단한 드롭다운으로, 활성 언어를 전환하고 다른 경로로 이동하지 않은 채 현재 페이지를 다시 로드합니다.

## 프로그래밍 방식으로

`website/src/common/Cluar.js` 클래스는 언어 작업을 위한 함수를 제공합니다:

- `Cluar.defaultLanguage()` — 기본으로 표시된 언어를 가져옵니다.
- `Cluar.currentLanguage()` — 현재 활성 언어를 가져옵니다.
- `Cluar.changeLanguage(codigoOuLocalizacao)` — 다른 언어를 프로그래밍 방식으로 활성화합니다(`code`와 `locale` 모두 허용).
- `Cluar.languages()` — 모든 언어 목록을 가져옵니다.

## 다음 단계

각 언어의 콘텐츠가 [페이지](/docs/academy/cluar/pages/overview)에서 어떻게 구성되는지 살펴보세요.