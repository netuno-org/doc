---
sidebar_position: 4
id: execution
title: 실행
sidebar_label: 실행
---

프로젝트를 설치하고 구성했으니 이제 실행할 차례입니다.

## 서버 시작

Netuno 루트 디렉터리에서 다음을 실행합니다:

```
./netuno server app=클루아르
```

이렇게 하면 백엔드와 프런트엔드가 동시에 시작됩니다.

> 첫 실행은 프런트엔드 의존성 설치 때문에 더 오래 걸릴 수 있습니다.

기본적으로:

- Netuno 백오피스는 [http://localhost:9000/](http://localhost:9000/)에서 사용할 수 있습니다.
- 서비스의 OpenAPI는 [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)에 있습니다.

## 웹사이트 시작

웹사이트를 수동으로 시작하려면:

```
cd website
bun run dev
```

기본적으로 웹사이트는 [http://localhost:3000/](http://localhost:3000/)에서 사용할 수 있습니다.

> `config/_development.json`에서 해당 명령을 활성화하면 웹사이트가 Netuno 서버와 함께 자동으로 시작되도록 할 수 있습니다 — [구성](/docs/academy/cluar/configuration#7-웹사이트-자동-시작선택-사항)을 참고하세요.

## 문제 해결

### `bun run dev` 실행 시 GLIBC 버전 오류

웹사이트를 시작할 때 다음과 같은 오류가 나타나면:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

메시지에 언급된 npm의 선택적 의존성 버그가 아니라 **GLIBC 버전 비호환성**입니다: Rollup의 네이티브 바이너리가 `GLIBC_2.32` 이상을 요구하도록 컴파일되었는데, 오래된 Linux 배포판(예: glibc 2.31이 포함된 Ubuntu 20.04)에는 해당 버전이 없습니다.

해결하려면 웹사이트의 `package.json` 루트에 `overrides` 필드를 추가하여 Rollup이 네이티브 대신 WASM 버전을 사용하도록 강제합니다:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

그다음 의존성을 다시 설치합니다:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## 다음 단계

프로젝트가 실행 중인 상태에서 [언어](/docs/academy/cluar/languages) 또는 [페이지 모델](/docs/academy/cluar/pages/overview)을 살펴보세요.