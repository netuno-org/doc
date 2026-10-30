---
id: import
title: 가져오기
sidebar_label: 가져오기
---

## 소개

개발할 때 우리는 여러 코드 파일을 서로 연결하여 사용해야 합니다. 그래야 기능을 정리하고 재사용하여 반복을 피할 수 있으며, 유용한 함수를 중앙화하여 유지보수를 쉽게 할 수 있습니다. 이는 전반적인 코드 줄 수를 줄이고 결과적으로 버그도 크게 줄여 줍니다.

그래서 유용한 코드를 다른 코드 파일에 중앙화하면, 다른 파일에서 이를 가져와 쉽게 재사용할 수 있습니다.

여기에서는 Netuno가 코드 재사용을 위해 제공하는 몇 가지 솔루션을 보여 줍니다.

## 폴리글랏 코어

Netuno가 지원하는 모든 프로그래밍 언어에서 애플리케이션의 `server/core` 폴더에 있는 모든 코드 파일을 가져올 수 있습니다.

Netuno가 제공하는 간단한 방식은 코드 가져오기를 위한 특수 주석 형식을 사용하는 것입니다. 주석 줄에 `_core:` 접두사를 붙이고, 이어서 애플리케이션의 `server/core` 폴더를 기준으로 한 코드 파일 경로를 작성합니다.

그래서 다음 코드 파일을 가져오려면:

- `server/core/예시/파일`

> 파일 확장자는 사용하는 프로그래밍 언어에 맞아야 합니다.

서비스 등 모든 코드 파일의 시작 부분에서 다른 파일을 가져올 수 있습니다.

JavaScript, Groovy, Kotlin의 경우:

```javascript
// _core: 예시/파일

...
```

Python과 Ruby의 경우:

```python
# _core: 예시/파일

...
```

> 이 특수 가져오기 주석에는 파일 확장자를 넣을 필요가 없으며, Netuno가 자동으로 감지합니다.

가져온 파일에 선언된 변수, 상수, 함수, 클래스 등은 시작 부분에 이 유형의 주석으로 가져오기를 수행한 파일에서 사용할 수 있습니다.

여러 파일을 가져오려면 다른 파일의 경로로 가져오기 주석을 반복하면 됩니다.

JavaScript, Groovy, Kotlin에서 여러 파일을 가져오려면:

```javascript
// _core: 예시/파일1
// _core: 예시/파일2
// _core: 예시/파일3

...
```

Python과 Ruby에서 여러 파일을 가져오려면:

```python
# _core: 예시/파일1
# _core: 예시/파일2
# _core: 예시/파일3

...
```

## Exec 리소스

`_exec` 리소스를 통해 실행 중 언제든지 코드를 가져올 수 있습니다.

> 가져온 코드 파일에 선언된 변수, 상수, 함수, 클래스 등을 사용할 수 있습니다.

### core

프로그래밍 방식으로 코드 파일 가져오기를 실행합니다. 이 경우 `📁 server/core` 폴더 내부입니다:

```javascript
_exec.core('경로/파일')
```

> 파일 확장자는 넣을 필요가 없으며 Netuno가 자동으로 감지합니다.

### services

프로그래밍 방식으로 코드 파일 가져오기를 실행합니다. 이 경우 `📁 server/services` 폴더 내부입니다:

```javascript
_exec.service('경로/파일')
```

> 파일 확장자는 넣을 필요가 없으며 Netuno가 자동으로 감지합니다.

## JavaScript

Netuno는 JavaScript 개발을 위한 기반을 제공합니다. JavaScript는 가장 많이 사용되는 언어이며, 특히 JavaScript로 프런트엔드와 백엔드를 모두 프로그래밍할 수 있어 동일한 프로그래밍 언어로 풀스택 개발을 수행할 수 있습니다.

Netuno는 코드를 분석하여 `import`(ECMAScript Modules) 또는 `require`(CommonJS)가 사용되는지 자동으로 감지합니다.

> `import` 방식과 `require` 방식을 혼용해서는 안 되며, 둘 중 하나를 사용해야 합니다.

따라서 항상 코드 파일에 `.js` 확장자를 사용할 수 있으며, `import` 문을 사용하면 Netuno가 ECMAScript Modules로 처리하므로 `export default`를 사용할 수 있습니다.

> 가능하면 현대적인 표준인 `import` 사용을 권장합니다.

### 코드 가져오기

네이티브 가져오기를 사용하면 앞선 예시와 달리 CommonJS(`require`) 또는 ECMAScript Modules(`import`) 표준에 따라 명시적으로 내보낸 것만 가져옵니다.

`📁 server` 폴더에는 `package.json` 파일이 있으며, 여기에 다음 지시문이 있어야 합니다:

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

이를 통해 모든 코드 파일에서 다른 파일을 가져올 수 있습니다. 예:

```js title="server/services/프로필/가져오기.js"
import 프로필 from "#core/lib/프로필.js";

const db프로필 = 프로필.로그인된프로필();
```

가져온 파일에서 `import`를 사용했으므로 `export default`를 사용합니다:

```js title="server/core/lib/프로필.js"
import {_db, _user} from "@netuno/server-types";

export default {
  로그인된프로필: () => {
    return _db.form("프로필")
      .where(_db.where("프로필_사용자_아이디").equal(_user.id))
      .first();
  }
};
```

> 같은 애플리케이션 또는 프로젝트에서 서로 다른 파일이나 상황이더라도 `import`(ECMAScript Modules)와 `require`(CommonJS) 사용을 혼용하는 것은 권장되지 않습니다. 항상 일관된 표준을 채택하는 것이 좋습니다.
> 현대적인 방식인 `import` 사용을 권장합니다.

대안으로 `import`(ECMAScript Modules) 대신 `require`(CommonJS)를 사용하는 경우:

```js title="server/services/프로필/가져오기.js"
const 프로필 = require("#core/lib/프로필.js");

const db프로필 = 프로필.로그인된프로필();
```

가져온 파일에서 `require`를 사용했으므로 `module.exports`를 사용합니다:

```js title="server/core/lib/프로필.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  로그인된프로필: () => {
    return _db.form("프로필")
      .where(_db.where("프로필_사용자_아이디").equal(_user.id))
      .first();
  }
};
```

### 코드 자동 완성 및 유효성 검사

편집기에 통합된 코드 유효성 검사와 함께 코드 자동 완성 기능을 사용하려면, 애플리케이션의 `📁 server` 폴더에서 [서버 타입](https://www.npmjs.com/package/@netuno/server-types)을 설치해야 합니다.

> 서버 타입(`@netuno/server-types`)은 TypeScript로 작성된 모든 폴리글랏 로우코드 프로그래밍 리소스 정의입니다. 이를 통해 편집기는 Netuno의 폴리글랏 로우코드 프레임워크가 제공하는 모든 것을 감지할 수 있습니다. 다만 TypeScript이므로 JavaScript 코드 작성을 돕는 용도로만 사용됩니다.

`📁 server` 폴더 안에서 [서버 타입](https://www.npmjs.com/package/@netuno/server-types)을 설치하세요:

```bash
bun add @netuno/server-types
```

이를 통해 일반 코드에서 Netuno 프레임워크에서 사용 가능한 폴리글랏 로우코드 리소스 중 하나를 가져올 수 있습니다. 예를 들어 다음 서비스 코드를 보세요:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const 이름 = _req.getString("이름");

_db.form("제품")
  .set("이름", 이름)
  .insert();

_out.json(
  _val.map()
    .set("이름", 이름)
    .set("결과", true)
);
```

편집기가 코드를 유효성 검사하고 자동 완성하는 것을 확인할 수 있으며, 이는 매우 유용하고 개발 속도를 크게 높여 줍니다.

> 일부 편집기에서는 `📁 server` 폴더를 코드 루트로 감지하기 위해 구성/활성화가 필요할 수 있습니다. 예를 들어 Visual Studio Code에서는 자동으로 감지하지만, WebStorm에서는 `server` 폴더를 마우스 오른쪽 버튼으로 클릭하고 `Mark Directory As > Resource Root`를 클릭한 뒤 프로젝트를 다시 열어야 합니다.

## JS & NPM - 외부 의존성

**NPM** 외부 의존성은 애플리케이션 내 `package.json`이 있는 `📁 server` 폴더에 설치할 수 있습니다.

하지만 앞서 권장한 것과 달리, 외부 라이브러리를 가져올 때는 `require`를 사용하며, 이 경우 프로젝트 내부 파일의 `import`와 혼용할 수 있습니다. 그다지 우아하진 않지만 가능합니다.

따라서 의존성을 추가하려면 `bun add` 명령으로 설치하면 됩니다.

예를 들어 `momentjs`를 설치할 수 있습니다:

- `bun add moment`

의존성을 가져올 때는 `require`를 사용합니다. 예시는 다음과 같습니다:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

`dayjs`를 사용한 또 다른 예시입니다. 먼저 설치하세요:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

`date-fns`를 사용한 전체 예시입니다. 먼저 설치하세요:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import 프로필 from "#core/lib/프로필.js";

const db프로필 = 프로필.로그인된프로필();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> 외부 라이브러리에 의존하는 것은 예외적인 상황이며, 일반적으로 필요한 모든 것은 Netuno의 폴리글랏 로우코드 프레임워크에서 찾을 수 있습니다.

### NodeJS 네이티브 모듈

GraalVM은 NodeJS 네이티브 모듈과 완전히 호환되지 않으므로, 이를 우회하기 위해 이러한 모듈에 대한 대체 솔루션을 구현한 외부 의존성을 사용하면 더 높은 호환성을 얻을 수 있습니다.

네이티브 모듈인 것처럼 호환성을 제공하는 대체 외부 의존성을 설치할 수 있습니다.

다음은 NodeJS 네이티브 모듈을 대체하는 데 사용되는 모듈 목록과 각각의 설치 명령입니다:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

위 모듈은 애플리케이션 내 `📁 server` 폴더에 설치해야 합니다. NodeJS 네이티브 모듈에 대한 호환성이 제공되며, 이러한 대체 모듈이 사용됩니다.

## 결론

우리는 코드를 여러 방식으로 정리할 수 있지만, 코드를 재사용하고 반복을 피하는 것은 항상 매우 중요합니다.

코드 줄이 많을수록 버그가 발생할 가능성도 커집니다.

코드를 잘 정리하고 재사용을 중앙화하세요. 유지보수가 쉬워지고 버그를 피할 수 있으며 전반적인 생산성이 높아집니다.

외부 의존성 사용에 아직 몇 가지 제한이 있지만, 생태계를 개선하기 위해 작업하고 있습니다.

그동안 Netuno는 대부분의 요구 사항을 충족하는 다양한 로우코드 및 폴리글랏 리소스를 제공합니다.