---
id: web-service 
title: 多应用 Web 服务 
sidebar_label: Web 服务
sidebar_position: 4
---

在本教程中，我们将为 Netuno 创建一个多应用 Web 服务。这意味着我们将创建一个 Java Web 服务，它会放在 Netuno 的基础目录中，并且可以被 `apps` 文件夹内的任何应用使用。

按照之前的教程，我们要创建的示例是 `calc` 服务，这是一个执行简单算术运算的示例服务。

首先，需要创建项目的文件夹结构。在这个示例中，我们假设项目将创建在一个名为 `Calc` 的文件夹中。因此，需要创建与包名对应的文件夹结构（在我们的示例中为 `org.netuno.addon.calc`）。我们的文件夹结构因此是：

- `Calc/src/main/java/org/netuno/addon/calc/web/`

在这个结构中，我们将创建一个名为 `CalcWeb` 的 Java 类，它将定义我们的自定义 Web 服务：

- ` Calc/src/main/java/org/netuno/addon/calc/web/CalcWeb.java`

那么类中定义的包将是：

```java
package org.netuno.addon.calc.web;
```

为了让该类定义自定义的多应用 Web 服务，这个类需要继承 `org.netuno.tritao.Web` 类：

```java
package org.netuno.addon.calc.web;

import org.netuno.tritao.Web;

public class CalcWeb extends Web {
    // ...
}
```

要定义服务的 URL，请这样做：

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    // ...
}
```

要让服务正常工作，需要重写的方法是 `run` 方法：

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

接下来，我们使用 Netuno 的一些资源来定义 `run` 方法，使其接收参数 `op`，该参数决定使用 `plus`（加法）还是 `minus`（减法）运算，并接收参数 `x` 和 `y`，它们将作为操作数（加法中为加数，减法中分别为被减数和减数）。

然后，根据所选运算，我们的服务将计算结果，并以 JSON 格式返回给用户：

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String op = req.getString("op", "plus");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double result = 0;

        if (op.equalsIgnoreCase("minus")) {
            result = x - y;
        } else {
            result = x + y;
        }

        out.json(val.map().set("result", result));
    }
}
```

现在只需编译该类，并确保 `CalcWeb.class` 文件位于以下文件夹中：

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/web/`

或者生成一个 JAR 文件，并确保它位于以下文件夹中：

- `netuno/lib/`

使用任意应用启动 Netuno 服务器：

```bash
./netuno server app=demo
```

要调用此服务，需要在 URL 末尾添加 `.netuno`：

- `http://localhost:9000/addon/calc/Calc.netuno`

例如，如果你调用：

- `http://localhost:9000/addon/calc/Calc.netuno?op=minus&x=5&y=2`

你将收到：

```js
{"result":3}
```

你可以在这个[链接](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web)中查看项目的完整文件。

在下一个教程中，我们将学习如何使用 Java 创建 Netuno 资源。