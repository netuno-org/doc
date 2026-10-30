---
id: web-service 
title: 다중 애플리케이션 웹 서비스 
sidebar_label: 웹 서비스
sidebar_position: 4
---

이 튜토리얼에서는 Netuno를 위한 다중 애플리케이션 웹 서비스를 만들겠습니다. 이는 Netuno 기본 디렉터리에 위치하며 `apps` 폴더 안의 모든 애플리케이션에서 사용할 수 있는 Java 웹 서비스를 만든다는 의미입니다.

이전 튜토리얼을 따라 만들 예제는 간단한 산술 연산을 수행하는 예제 서비스인 `계산` 서비스입니다.

시작하려면 먼저 프로젝트의 폴더 구조를 만들어야 합니다. 이 예제에서는 프로젝트가 `계산`이라는 폴더 안에 생성된다고 가정하겠습니다. 따라서 패키지 이름(이 예제에서는 `org.netuno.addon.계산`)을 그대로 반영하는 폴더 구조를 만들어야 합니다. 그러면 폴더 구조는 다음과 같습니다:

- `계산/src/main/java/org/netuno/addon/계산/web/`

이 구조 안에 사용자 정의 웹 서비스를 정의할 `계산웹`이라는 Java 클래스를 만들겠습니다:

- `계산/src/main/java/org/netuno/addon/계산/web/계산웹.java`

그러면 클래스 안에 정의되는 패키지는 다음과 같습니다:

```java
package org.netuno.addon.계산.web;
```

클래스가 사용자 정의 다중 애플리케이션 웹 서비스를 정의하려면 `org.netuno.tritao.Web` 클래스를 확장해야 합니다:

```java
package org.netuno.addon.계산.web;

import org.netuno.tritao.Web;

public class 계산웹 extends Web {
    // ...
}
```

서비스의 URL을 정의하려면 다음과 같이 하세요:

```java
package org.netuno.addon.계산.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/계산/계산웹")
public class 계산웹 extends Web {
    // ...
}
```

서비스가 작동하려면 재정의해야 하는 메서드는 `run` 메서드입니다:

```java
package org.netuno.addon.계산.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/계산/계산웹")
public class 계산웹 extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

그러면 Netuno의 몇 가지 리소스를 사용하여 `run` 메서드가 `연산` 매개변수를 받도록 정의하겠습니다. 이 매개변수는 `더하기`(덧셈)와 `빼기`(뺄셈) 중 어떤 연산을 사용할지 정의합니다. 또한 피연산자인 `x`와 `y` 매개변수도 받습니다(덧셈의 경우 각각 더해지는 수, 뺄셈의 경우 각각 피감수와 감수입니다).

그런 다음 선택된 연산에 따라 서비스가 결과를 계산하여 JSON 형식으로 사용자에게 반환합니다:

```java
package org.netuno.addon.계산.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/계산/계산웹")
public class 계산웹 extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String 연산 = req.getString("연산", "더하기");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double 결과 = 0;

        if (연산.equalsIgnoreCase("빼기")) {
            결과 = x - y;
        } else {
            결과 = x + y;
        }

        out.json(val.map().set("결과", 결과));
    }
}
```

이제 클래스를 컴파일하고 `계산웹.class` 파일이 다음 폴더에 있는지 확인하면 됩니다:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/계산/web/`

또는 JAR 파일을 생성하고 해당 파일이 다음 폴더에 있는지 확인하세요:

- `netuno/lib/`

아무 애플리케이션으로 Netuno 서버를 시작하세요:

```bash
./netuno server app=demo
```

이 서비스를 호출하려면 URL 끝에 `.netuno`를 추가해야 합니다:

- `http://localhost:9000/addon/계산/계산웹.netuno`

예를 들어 다음 주소로 호출하면:

- `http://localhost:9000/addon/계산/계산웹.netuno?연산=빼기&x=5&y=2`

다음과 같은 응답을 받게 됩니다:

```js
{"결과":3}
```

프로젝트의 전체 파일은 이 [링크](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web)에서 확인할 수 있습니다.

다음 튜토리얼에서는 Java를 사용하여 Netuno 리소스를 만드는 방법을 배우겠습니다.