---
sidebar_position: 2
id: install
title: 설치
sidebar_label: 설치
---

## 요구 사항

CLUAR를 설치하기 전에 다음이 필요합니다:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation)가 설치되어 있어야 합니다.
2. [Bun](https://bun.sh/docs/installation)이 설치되어 있어야 합니다.

## 프로젝트 복제

CLUAR는 Netuno 앱이므로 Netuno 설치 디렉터리의 `apps` 폴더 안에 복제해야 합니다:

```
[Netuno 루트 디렉터리]/apps
```

다음 명령을 사용합니다:

```
git clone https://github.com/netuno-org/cluar.git
```

## 웹사이트 설치 (Bun 사용)

`website` 폴더 안에서:

```
cd website
```

Bun 설치 명령을 실행합니다:

```
bun install
```

ESBUILD의 신뢰할 수 없는 스크립트 실행을 허용해야 합니다:

```
bun pm trust --all
```

웹사이트 설치를 다시 시작해야 하는 경우, `node_modules` 폴더와 lock 파일들을 제거하고 다시 설치합니다:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## 다음 단계

코드와 종속성이 설치되었으면 [구성](/docs/academy/cluar/configuration)으로 넘어갑니다.