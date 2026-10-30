---
id: event
title: 이벤트
sidebar_label: 이벤트
sidebar_position: 6
---

Netuno를 사용하면 실행 중 특정 단계에 이벤트를 주입할 수 있습니다.
예를 들어, setup이 데이터베이스를 구축하기 바로 전에 실행되는 이벤트를 주입할 수 있습니다
(이는 `netuno/apps/nae_app/server/setup/_start.js`에 스크립트를 정의하는 것과 거의 비슷하게 동작합니다).
또는 데이터베이스 구축 처리가 완료된 직후에 실행되는 이벤트를 주입할 수도 있습니다
(이는 `netuno/apps/nae_app/server/setup/_end.js`와 유사합니다).

이를 위해 `org.netuno.tritao.event.EventBase` 클래스를 확장해야 합니다. 또한 Java Core의 서비스 및 리소스에 관한 이전 튜토리얼에서 정의한 것과 동일한 패키지도 정의하겠습니다.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventSetupStart extends EventBase {
    // ...
}
```

그다음, 이벤트를 초기화하기 위해 슈퍼클래스 `EventBase`의 생성자를 사용하는 생성자를 만듭니다:

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EventSetupStart extends EventBase {

    public EventSetupStart(Proteu proteu, Hili hili) {
        // ...
    }
}
```

`Proteu` 및 `Hili` 유형의 객체 외에도, 슈퍼클래스 생성자에 이벤트 유형을 전달해야 합니다. 이벤트 유형은 `import org.netuno.tritao.event.EventId`에 정의되어 있습니다.
또한 이벤트 실행 순서를 나타내는 정수를 생성자에 전달해야 합니다.
이렇게 하면 동일한 이벤트 유형에 여러 이벤트를 등록할 때 어떤 이벤트가 먼저 실행되고, 어떤 이벤트가 바로 다음에 실행되는지 등을 제어할 수 있습니다.
`100`과 같은 숫자는 그보다 먼저 실행될 다른 이벤트(예: `50`)를 배치할 수 있으므로 적절합니다.

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EventSetupStart extends EventBase {

    public EventSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

참고로, 사용 가능한 모든 이벤트 유형의 전체 목록은 다음에서 확인할 수 있습니다:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

코드로 돌아가서, `run` 함수를 재정의하여 마무리하겠습니다:

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventSetupStart extends EventBase {

    public EventSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values data) {
        System.out.println("커스텀 SETUP START 이벤트 " + data.toJSON());
    }

}
```

`data` 인수는 이벤트가 추가 데이터를 받을 수 있게 해 줍니다. 현재로서는 액션과 관련된 이벤트에서만 사용됩니다. 예를 들어, 데이터베이스에 무언가가 저장될 때마다 실행되고 Netuno 콘솔에 메시지를 출력하는 이벤트를 만들 수 있습니다:
```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventActionSave extends EventBase {

    public EventActionSave(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values data) {
        DataItem dataItem = data.get("dataItem");
        System.out.println("저장 중 " + dataItem.getFormName());
        // 또는
        System.out.println("저장 중 " + data.get("dataItem", DataItem.class).getFormName());
    }

}
```

이제 클래스를 컴파일하고 `.class` 파일이 다음 폴더에 있는지 확인하면 됩니다:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

또는 JAR 파일을 생성하고 다음 폴더에 있는지 확인하면 됩니다:

- `netuno/lib/`

프로젝트의 전체 파일은 이 [링크](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event)에서 확인할 수 있습니다.