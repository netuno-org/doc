---
sidebar_position: 8
id: ui-layer
title: UI 계층
sidebar_label: UI 계층
---

대시보드와 애플리케이션의 일반 인터페이스 설치 및 컴파일입니다.

## 컨텍스트

Netuno 애플리케이션에는 기본적으로 프런트엔드용 고급 기술 세트가 구성되어 있으며, 그중 일부는 [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) 
및 [Ant.Design](https://ant.design/)입니다.

애플리케이션 내부에는 `📁 ui`(_user interface_, 사용자 인터페이스) 폴더가 있으며, 이곳에서 대시보드와 기타 프런트엔드 구성 요소를 개발합니다.

## 시작하기 전에

[Bun](https://bun.sh/)이 설치되어 있는지 확인하세요. Bun은 필수 사전 요구 사항입니다. 자세한 내용:

- [Bun 설치](/docs/academy/website/bun)

## 종속성 모듈 설치

기본으로 제공되는 모든 종속성을 설치하려면 개발 중인 애플리케이션 내부의 `📁 ui`(_user interface_) 폴더로 이동하세요. 예:

```shell
cd apps/내_앱/ui/
```

종속성 모듈 설치 명령을 실행하세요:

```shell
bun install
```

> [Bun](https://bun.sh)은 NPM보다 개선되고 더 최적화된 대안입니다.

## 자동 컴파일

개발 중인 애플리케이션의 `📁 ui`(_user interface_) 폴더로 이동하세요. 예:

```shell
cd apps/내_앱/ui/
```

코드가 변경될 때마다 프런트엔드를 자동으로 컴파일하려면 다음을 실행하세요:

```shell
bun run watch
```

> [Bun](https://bun.sh/)이 설치되어 있는지 확인하세요.
 
## 프런트엔드와 Netuno의 자동 통합

Netuno를 사용하면 Netuno 애플리케이션의 서버 프로세스와 함께 UI를 시작할 수 있습니다.

> 모든 React 컴파일 메시지가 Netuno 애플리케이션과 동일한 터미널에 통합됩니다.

이를 위해 Netuno 애플리케이션의 `📂 config/_development.json`에 있는 `commands`에서 구성을 활성화하면 됩니다. 즉, `path`가 `ui`인 `command`에서 `enabled`를 `true`로 설정합니다. 다음과 같습니다:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Netuno 애플리케이션의 구성 파일을 편집할 때마다 새 변경 사항을 적용하려면 서버를 다시 시작해야 합니다.

마지막으로 작동을 확인하려면 Netuno 애플리케이션과 함께 서버를 시작하거나 다시 시작하세요.

이제 모든 것이 하나의 중앙 집중식 터미널에 통합되어 여러 터미널이 분산되는 것을 방지합니다. 자세한 내용:

- [중앙 집중식 터미널](/docs/academy/explore/centralized-terminal)

## 기타 프런트엔드 기술

`📁 ui` 폴더 내에서 모든 프런트엔드 기술을 구성하거나 필요한 새 종속성 모듈을 포함할 수 있습니다.

기본 기술 중 어느 것도 사용하지 않으려면 다른 기술로 대체할 수 있으며, 특히 다음 파일을 조정하면 됩니다:

- `package.json`
- `vite.config.js`