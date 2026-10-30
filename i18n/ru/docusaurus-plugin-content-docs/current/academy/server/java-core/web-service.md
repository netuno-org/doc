---
id: web-service 
title: Мультиприложенческий веб-сервис 
sidebar_label: Веб-сервис
sidebar_position: 4
---

В этом руководстве мы создадим мультиприложенческий веб-сервис для Netuno. Это означает, что мы создадим веб-сервис на Java, который будет находиться в базовом каталоге Netuno и сможет использоваться любым приложением внутри папки `apps`.

Пример, который мы создадим, следуя предыдущим руководствам, — это сервис `калькулятор`, который является примером сервиса, выполняющего простые арифметические операции.

Для начала необходимо создать структуру папок проекта. В этом примере мы будем считать, что проект будет создан в папке с именем `Калькулятор`. Поэтому нужно создать структуру папок, отражающую имя пакета (в нашем примере `org.netuno.addon.калькулятор`). Таким образом, наша структура папок будет:

- `Калькулятор/src/main/java/org/netuno/addon/калькулятор/веб/`

Внутри этой структуры мы создадим класс Java с именем `КалькуляторВеб`, который определит наш персонализированный веб-сервис:

- `Калькулятор/src/main/java/org/netuno/addon/калькулятор/веб/КалькуляторВеб.java`

Тогда пакет, определённый внутри класса, будет:

```java
package org.netuno.addon.калькулятор.веб;
```

Чтобы класс определял персонализированный мультиприложенческий веб-сервис, этот класс должен расширять класс `org.netuno.tritao.Web`:

```java
package org.netuno.addon.калькулятор.веб;

import org.netuno.tritao.Web;

public class КалькуляторВеб extends Web {
    // ...
}
```

Чтобы задать URL сервиса, сделайте:

```java
package org.netuno.addon.калькулятор.веб;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/калькулятор/Калькулятор")
public class КалькуляторВеб extends Web {
    // ...
}
```

Метод, который нужно переопределить, чтобы сервис работал, — это метод `run`:

```java
package org.netuno.addon.калькулятор.веб;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/калькулятор/Калькулятор")
public class КалькуляторВеб extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Итак, используя некоторые ресурсы Netuno, определим метод `run` так, чтобы он принимал параметр `операция`, который определит, какую операцию использовать между `плюс` (сложение) и `минус` (вычитание), и параметры `x` и `y`, которые будут операндами (слагаемыми в случае сложения, уменьшаемым и вычитаемым соответственно в случае вычитания).

Затем, исходя из выбранной операции, наш сервис вычислит результат и вернёт его пользователю в формате JSON:

```java
package org.netuno.addon.калькулятор.веб;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/калькулятор/Калькулятор")
public class КалькуляторВеб extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req запрос = resource(Req.class);
        Out вывод = resource(Out.class);
        Val значения = resource(Val.class);

        String операция = запрос.getString("операция", "плюс");
        double x = запрос.getDouble("x", 0);
        double y = запрос.getDouble("y", 0);

        double результат = 0;

        if (операция.equalsIgnoreCase("минус")) {
            результат = x - y;
        } else {
            результат = x + y;
        }

        вывод.json(значения.map().set("результат", результат));
    }
}
```

Теперь достаточно скомпилировать класс, убедившись, что файл `КалькуляторВеб.class` находится в папке:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/калькулятор/веб/`

Или создать JAR-файл, убедившись, что он находится в папке:

- `netuno/lib/`

Запустите сервер Netuno с любым приложением:

```bash
./netuno server app=demo
```

Чтобы вызывать этот сервис, необходимо добавить `.netuno` в конец URL:

- `http://localhost:9000/addon/калькулятор/Калькулятор.netuno`

Например, если вы сделаете вызов:

- `http://localhost:9000/addon/калькулятор/Калькулятор.netuno?операция=минус&x=5&y=2`

Вы получите в ответ:

```js
{"результат":3}
```

Вы можете посмотреть полные файлы проекта по этой [ссылке](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

В следующем руководстве мы узнаем, как создать ресурс Netuno с помощью Java.