---
sidebar_position: 4
id: versions
title: 버전
sidebar_label: 버전
---


# 버전

Netuno를 사용하기 시작하는 경우 플랫폼의 최신 안정 버전을 사용하도록 **기본 설치**를 수행할 것을 권장합니다.

Netuno는 또한 테스트 환경이나 버그 재현에 유용한 특정 이전 버전 또는 아직 개발 중인 실험 버전을 설치할 수 있습니다.

특정 버전을 설치하거나 업데이트하기 전에 공식 릴리스 목록을 확인하세요:

- **버전 목록:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip 팁
특히 프로덕션 환경에서는 특정 버전을 설치하기 전에 릴리스 노트를 확인하세요.
:::

## 특정 버전 설치

Netuno를 특정 버전으로 설치하거나 업데이트하려면 설치 명령에 `version` 매개변수와 원하는 버전 식별자를 추가하세요.

환경에 가장 적합한 방법을 선택하세요:

### 방법 1: Java 설치 프로그램

새 설치에 이 방법을 사용하세요:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### 방법 2: 기본 실행기

Netuno가 이미 설치되어 있고 특정 버전으로 업데이트하려는 경우 이 방법을 사용하세요:

```bash
./netuno install version=20230417.0119
```

### 방법 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
`20230417.0119`를 원하는 버전 식별자로 바꾸세요. 식별자는 **[릴리스 목록](https://github.com/netuno-org/platform/releases)**에서 확인할 수 있습니다.

명령을 실행하면 Netuno가 지정된 버전의 설치 프로세스를 자동으로 시작합니다.
:::