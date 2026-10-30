---
id: web-service 
title: Multi-Application Web Service 
sidebar_label: Web Service
sidebar_position: 4
---

In this tutorial we will create a multi-application web service for Netuno. This means we will create a web service in Java that will be located in Netuno's base directory and that can be used by any application inside the `apps` folder.

The example we will create, following the previous tutorials, is the `calc` service, which is an example service that performs simple arithmetic operations.

To start, you first need to create the project's folder structure. In this example we will assume that the project will be created inside a folder called `Calc`. So you need to create the folder structure that mirrors the package name (in our example, `org.netuno.addon.calc`). Our folder structure will therefore be:

- `Calc/src/main/java/org/netuno/addon/calc/web/`

Inside this structure we will create a Java class called `CalcWeb`, which will define our custom web service:

- ` Calc/src/main/java/org/netuno/addon/calc/web/CalcWeb.java`

So the package defined inside the class will be:

```java
package org.netuno.addon.calc.web;
```

For the class to define a custom multi-application web service, this class must extend the `org.netuno.tritao.Web` class:

```java
package org.netuno.addon.calc.web;

import org.netuno.tritao.Web;

public class CalcWeb extends Web {
    // ...
}
```

To define the service URL, do:

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    // ...
}
```

The method that must be overridden for the service to work is the `run` method:

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

Let's then, using some Netuno resources, define the `run` method so that it receives the `op` parameter, which will define which operation to use between `plus` (addition) and `minus` (subtraction), and the `x` and `y` parameters, which will be the operands (addends in the case of addition, minuend and subtrahend respectively in the case of subtraction).

Then, based on the chosen operation, our service will compute the result and return it to the user in JSON format:

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

Now just compile the class, making sure that the `CalcWeb.class` file is in the folder:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/web/`

Or produce a JAR file, making sure that it is in the folder:

- `netuno/lib/`

Start the Netuno server with any application:

```bash
./netuno server app=demo
```

To make calls to this service, you need to add `.netuno` at the end of the URL:

- `http://localhost:9000/addon/calc/Calc.netuno`

For example, if you make a call to:

- `http://localhost:9000/addon/calc/Calc.netuno?op=minus&x=5&y=2`

You will receive back:

```js
{"result":3}
```

You can see the complete project files at this [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

In the next tutorial we will learn how to create a Netuno resource using Java.