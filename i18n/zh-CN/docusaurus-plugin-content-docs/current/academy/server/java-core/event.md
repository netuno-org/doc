---
id: event
title: 事件
sidebar_label: 事件
sidebar_position: 6
---

Netuno 允许你在执行过程的某个阶段注入事件。
例如，我们可以注入一个在 setup 构建数据库之前立即运行的事件
（这大致相当于在 `netuno/apps/我的应用/server/setup/_start.js` 中定义脚本）
，或者注入一个在数据库构建处理完成后立即运行的事件
（类似于 `netuno/apps/我的应用/server/setup/_end.js`）。

为此，我们需要扩展 `org.netuno.tritao.event.EventBase` 类。我们还要定义自己的包，它将与之前 Java Core 服务和资源教程中定义的包相同。

```java
package org.netuno.addon.计算器.事件;

import org.netuno.tritao.event.EventBase;

public class 设置开始事件 extends EventBase {
    // ...
}
```

然后，我们创建构造函数，它使用父类 `EventBase` 的构造函数来初始化事件：

```java
package org.netuno.addon.计算器.事件;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class 设置开始事件 extends EventBase {

    public 设置开始事件(Proteu proteu, Hili hili) {
        // ...
    }
}
```

除了 `Proteu` 和 `Hili` 类型的对象之外，我们还需要将事件类型传给父类的构造函数。事件类型定义在 `import org.netuno.tritao.event.EventId` 中。
我们还需要向构造函数传入一个整数，表示事件的执行顺序。
这样，通过为同一事件类型注册多个事件，就可以控制哪个事件先执行、哪个事件紧接着执行，依此类推。
像 `100` 这样的数字很合适，因为可以放置其他会在它之前执行的事件（例如 `50`）。

```java
package org.netuno.addon.计算器.事件;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class 设置开始事件 extends EventBase {

    public 设置开始事件(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

供参考，所有可用事件类型的完整列表可在以下位置找到：

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

回到我们的代码，我们通过重写 `run` 方法来收尾：

```java
package org.netuno.addon.计算器.事件;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class 设置开始事件 extends EventBase {

    public 设置开始事件(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values 数据) {
        System.out.println("自定义 SETUP START 事件 " + 数据.toJSON());
    }

}
```

参数 `数据` 用于让事件接收附加数据。目前它只用于与 action 相关的事件。例如，我们可以创建一个事件，每次有内容保存到数据库时都会执行，然后在 Netuno 控制台写入一条消息：
```java
package org.netuno.addon.计算器.事件;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class 动作保存事件 extends EventBase {

    public 动作保存事件(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values 数据) {
        DataItem 数据项 = 数据.get("dataItem");
        System.out.println("正在保存 " + 数据项.getFormName());
        // 或者
        System.out.println("正在保存 " + 数据.get("dataItem", DataItem.class).getFormName());
    }

}
```

现在只需编译该类，并确保 `.class` 文件位于以下文件夹中：

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/计算器/事件/`

或者生成一个 JAR 文件，并确保它位于以下文件夹中：

- `netuno/lib/`

你可以在此[链接](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event)中查看项目的完整文件。