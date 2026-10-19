---
sidebar_position: 2
id: server-commands-tips
title: 서버, 명령어 & 팁
sidebar_label: 서버, 명령어 & 팁
---

# 서버 명령어

Netuno의 주요 명령어 참조입니다. Netuno가 설치된 폴더에서 **터미널**을 열고 실행하세요.

:::tip
Netuno 폴더를 찾는 방법을 모르시나요? [설치](/docs/get-started/installation) 가이드를 참고하세요.
:::

---

## 서버 시작

`데모` 애플리케이션으로 서버를 시작합니다.

```bash
./netuno server
```

---

## APP에서 서버 시작

`app` 매개변수에 지정된 특정 애플리케이션으로 서버를 시작합니다. 아무것도 지정하지 않으면 데모 애플리케이션이 시작됩니다.

```bash
./netuno server app=앱_이름
```

---

## 새 애플리케이션

처음부터 새 애플리케이션을 생성하며, 초기 정보와 설정을 요청합니다.

```bash
./netuno app
```

---

## 명령어 목록

사용 가능한 모든 명령어와 매개변수 설정을 각 설명과 함께 나열합니다.

```bash
./netuno help
```

---

## 성능 통계

가장 최근의 성능 정보를 표시합니다. 해당 정보는 `logs/stats-*`에 저장되어 있습니다.

```bash
./netuno stats
```

---

## 안정 버전으로 업데이트

Netuno를 최신 안정 버전으로 업데이트합니다.

```bash
./install-stable
```

---

## 테스트 버전으로 업데이트

Netuno를 개발 중인 최신 버전으로 업데이트합니다.

```bash
./install-testing
```