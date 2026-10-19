---
sidebar_position: 10
id: dictionaries
title: 사전
sidebar_label: 사전
---

웹사이트 인터페이스의 고정 텍스트를 번역하는 방법.

## 소개

**사전**은 웹사이트 인터페이스의 고정 텍스트—레이블, 메시지, 버튼 텍스트—를 번역하는 시스템입니다. 즉 페이지 콘텐츠는 아니지만 코드에 "내장"된 텍스트로서, 그럼에도 각 언어마다 존재해야 하는 것들입니다.

백오피스의 두 가지 폼으로 구성됩니다:

- **항목** (`dictionary_entry`)
- **사전** (`dictionary`)

## 항목

번역 "키"를 정의합니다 — **코드** (`code`, 코드에서 값을 가져올 때 사용)와 **설명**. 예: `문의-양식-성공` 항목은 문의 양식의 성공 메시지에 사용됩니다 (기능의 [`ContactForm`](/docs/academy/cluar/components/functionality)에 나타나는 것이 바로 이것입니다).

## 사전

특정 **언어** (`language_id`)에 대한 항목의 **번역된 값**입니다 — **값** (`value`, HTML 허용) 필드.

:::info 일반 값/언어 없음
[설정](/docs/academy/cluar/settings)과 달리, 사전에는 언어 없는 폴백 메커니즘이 **없습니다** — 각 항목은 사용되는 모든 언어에 대해 명시적으로 정의된 값이 필요합니다. 어떤 언어의 번역이 누락되면, 표시되는 텍스트는 일반 값이 아니라 항목의 코드 자체(예: `문의-양식-성공`)입니다.
:::

## 프로그래밍 방식으로

`website/src/common/Cluar.js` 클래스는 사전 항목을 읽는 함수들을 제공하며, 모두 번역이 없으면 결과로 항목의 코드를 반환합니다 (누락된 번역을 알아채는 데 유용합니다):

- `Cluar.dictionary(항목)` — 현재 언어의 번역된 값을 저장된 그대로 가져옵니다 (HTML을 포함할 수 있음).
- `Cluar.plainDictionary(항목)` — 동일하지만 `<p>` 및 `<br>` 태그를 제거합니다. 인터페이스 레이블(버튼, 폼 필드, 알림)에서 가장 많이 사용됩니다.
- `Cluar.plainTitle(항목)` — 동일하지만 `<p>` 태그만 제거합니다.
- `Cluar.plainHTML(항목)` — 모든 HTML 태그를 제거합니다.
- `Cluar.dictionaryNoParagraph(항목)` — `<p>` 태그만 제거합니다 (`plainTitle`과 동일).

## 다음 단계

[템플릿](/docs/academy/cluar/templates)을 살펴보세요.