---
id: web-service 
title: Multi-Applicational Web Service
sidebar_label: Web Service
sidebar_position: 4
---

In this tutorial, we will create a multi-application web service for Netuno. This means we will create a Java web service that will be placed in Netuno's base directory and can be used by any application inside the `apps` folder.

Following the previous tutorials, the example we will build is the `calc` service, a sample web service that performs simple arithmetic operations.

To begin, we first need to create the project's folder structure. In this example, we'll assume the project will be created inside a folder named `Calc`. We need to create the folder structure that mirrors the package name (in our example, `org.netuno.addon.calc`). Therefore, our folder structure will be:

- `Calc/src/main/java/org/netuno/addon/calc/web/`

Inside this structure, we'll create a Java class named `CalcWeb`, which will define our custom web service:

- `Calc/src/main/java/org/netuno/addon/calc/web/CalcWeb.java`

The package declaration inside the class will be:

```java
package org.netuno.addon.calc.web;
```

To define a custom multi-application web service, the class must extend `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calc.web;

import org.netuno.tritao.Web;

public class CalcWeb extends Web {
    // ...
}
```

To define the service URL, use the `@Path` annotation:

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    // ...
}
```

The method that must be overridden for the service to work is `run`:

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

Next, using some of Netuno's built-in resources, we'll implement the `run` method so that it receives the `op` parameter, which specifies the operation to perform: `plus` (addition) or `minus` (subtraction). It will also receive the `x` and `y` parameters, which represent the operands (the addends for addition, or the minuend and subtrahend for subtraction).

Based on the selected operation, the service will compute the result and return it to the client as JSON:

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

Now simply compile the class, making sure that the `CalcWeb.class` file is located in:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/web/`

Or build a JAR file, making sure it is located in:

- `netuno/lib/`

Start the Netuno server with any application:

```bash
./netuno server app=demo
```

To access this service, append `.netuno` to the end of the service URL:

- `http://localhost:9000/addon/calc/Calc.netuno`

For example, if you make a request to:

- `http://localhost:9000/addon/calc/Calc.netuno?op=minus&x=5&y=2`

The service will return:

```json
{"result":3}
```

In the next tutorial, we'll learn how to create a Netuno resource using Java.
