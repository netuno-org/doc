---
sidebar_position: 1
id: initialization
title: 초기화
---


# 초기화

Demo 애플리케이션 초기화

이 튜토리얼을 시작하려면 먼저 **Demo** 애플리케이션의 서버를 시작하고 개발 환경을 준비해야 합니다.


### 서버 시작

운영 체제의 터미널을 열고 Netuno 플랫폼이 설치된 루트 폴더(예: `📁 /netuno`)로 이동합니다.

서버를 시작하려면 아래 명령을 실행하세요:

```bash
./netuno server
```

:::info 초기화 대안
기본 명령이 작동하지 않거나 Demo 애플리케이션이 기본적으로 로드되지 않는 경우 애플리케이션 매개변수를 지정하여 강제로 초기화하세요:
:::

```bash
./netuno server app=demo
```

### 코드 편집기 선택
애플리케이션의 백엔드와 프런트엔드를 모두 개발하려면 원하는 코드 편집기를 사용할 수 있습니다.

아직 편집기가 없다면 다음 무료 오픈 소스 옵션을 권장합니다:

- VS Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>


#### 프로젝트 폴더 열기
코드 편집기를 열고 Demo 애플리케이션 디렉터리인 `📁 apps/demo`를 찾아 엽니다.

이 폴더에는 새 애플리케이션의 모든 파일과 구성이 포함되어 있습니다. 모든 개발은 이 디렉터리 안에서만 수행됩니다.

### 다음 단계

서버가 실행 중이고 코드 편집기에서 파일을 열었다면 환경이 준비된 것입니다. 튜토리얼의 다음 단계로 진행하여 애플리케이션을 살펴보고 수정해 보세요.