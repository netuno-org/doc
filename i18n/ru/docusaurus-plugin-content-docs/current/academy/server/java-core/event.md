---
id: event
title: События
sidebar_label: Событие
sidebar_position: 6
---

Netuno позволяет внедрять события на определённой фазе выполнения.  
Например, можно внедрить событие, которое выполняется непосредственно перед тем, как setup построит базу данных  
(это примерно соответствует определению скрипта в `netuno/apps/мое_приложение/server/setup/_start.js`)  
или событие, которое выполняется сразу после завершения процесса построения базы данных  
(это было бы аналогично `netuno/apps/мое_приложение/server/setup/_end.js`).

Для этого нам нужно расширить класс `org.netuno.tritao.event.EventBase`. Также определим наш пакет, который будет тем же, что был определён в предыдущих руководствах по сервисам и ресурсам Java Core.

```java
package org.netuno.addon.калькулятор.событие;

import org.netuno.tritao.event.EventBase;

public class СобытиеНачалаНастройки extends EventBase {
    // ...
}
```

Затем создаём конструктор, который использует конструктор суперкласса `EventBase` для инициализации события:

```java
package org.netuno.addon.калькулятор.событие;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class СобытиеНачалаНастройки extends EventBase {

    public СобытиеНачалаНастройки(Proteu proteu, Hili hili) {
        // ...
    }
}
```

Помимо объектов типа `Proteu` и `Hili`, нам нужно передать в конструктор суперкласса тип события. Типы событий определены в `import org.netuno.tritao.event.EventId`. Также нужно передать в конструктор целое число, представляющее порядок выполнения события.  
Таким образом, регистрируя несколько событий для одного и того же типа события, можно управлять тем, какое из событий выполнится первым, какое — сразу после него, и так далее.  
Число вроде `100` подходит, потому что можно добавить другие события, которые выполнятся до него (например, `50`).

```java
package org.netuno.addon.калькулятор.событие;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class СобытиеНачалаНастройки extends EventBase {

    public СобытиеНачалаНастройки(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Для справки полный список всех доступных типов событий можно найти здесь:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Возвращаясь к нашему коду, завершим, переопределив функцию `run`: 

```java
package org.netuno.addon.калькулятор.событие;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class СобытиеНачалаНастройки extends EventBase {

    public СобытиеНачалаНастройки(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values данные) {
        System.out.println("ПОЛЬЗОВАТЕЛЬСКОЕ СОБЫТИЕ НАЧАЛА НАСТРОЙКИ "+ данные.toJSON());
    }

}
```

Аргумент `данные` служит для того, чтобы событие получало дополнительные данные. Пока он используется только в событиях, связанных с действиями. Например, можно создать событие, которое выполняется каждый раз, когда что-то сохраняется в базе данных, и затем пишет сообщение в консоль Netuno:
```java
package org.netuno.addon.калькулятор.событие;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class СобытиеСохраненияДействия extends EventBase {

    public СобытиеСохраненияДействия(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values данные) {
        DataItem элементДанных = данные.get("dataItem");
        System.out.println("СОХРАНЕНИЕ " + элементДанных.getFormName());
        // или
        System.out.println("СОХРАНЕНИЕ " + данные.get("dataItem", DataItem.class).getFormName());
    }

}
```

Теперь остаётся только скомпилировать класс, убедившись, что файл `.class` находится в папке:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/калькулятор/событие/`

Или создать файл JAR, убедившись, что он находится в папке:

- `netuno/lib/`

Полные файлы проекта можно посмотреть по этой [ссылке](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).