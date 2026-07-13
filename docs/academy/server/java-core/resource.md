---
id: resource 
title: Native Service
sidebar_label: Native Service 
sidebar_position: 5
---

In this tutorial, we will create a native resource for Netuno. This means we will create a Java class that will be placed in Netuno's base directory and can be used by any application inside the `apps` folder using the syntax `_foo.methodName(args)`.

The example we will create, following the previous tutorials, is the `_calc` resource, which is a sample resource for performing simple arithmetic operations.

To begin, we first need to create the project's folder structure. In this example, we'll assume the project will be created inside a folder named `Calc`. We need to create the folder structure that mirrors the package name (in our example, `org.netuno.addon.calc`). Therefore, our folder structure will be:

* `Calc/src/main/java/org/netuno/addon/calc/resource/`

Inside this structure, we'll create a Java class named `CalcResource`, which will define our custom native resource.

* `Calc/src/main/java/org/netuno/addon/calc/resource/CalcResource.java`

The package declaration inside the class will be:

```java
package org.netuno.addon.calc.resource;
```

For the class to define a custom native resource, it must be annotated with the `org.netuno.tritao.Resource` annotation. The `name` parameter defines the resource name, which can be accessed by prefixing it with an underscore (`_`) (in our case, `_calc`). The easiest way to create the resource is by extending the `org.netuno.tritao.resource.ResourceBase` class:

```java
import org.netuno.tritao.resource.Resource;
import org.netuno.tritao.resource.ResourceBase;

@Resource(name = "calc")
public class CalcResource extends ResourceBase {

}
```

Extending the `ResourceBase` class saves us from having to initialize the resource ourselves. We only need to call `super` with the appropriate arguments:

```java
import org.netuno.proteu.Proteu;
import org.netuno.tritao.hili.Hili;

public CalcResource(Proteu proteu, Hili hili) {
    super(proteu, hili);
}
```

The `init` method is required. Inside it, we initialize the resource by calling our class constructor with the getters provided by the parent class:

```java
public CalcResource init() {
    return new CalcResource(getProteu(), getHili());
}
```

After that, we can define our own fields and methods:

```java
public double value = 0;

public CalcResource set(double v) {
    value = v;
    return this;
}

public CalcResource plus(double v) {
    value += v;
    return this;
}

public CalcResource minus(double v) {
    value -= v;
    return this;
}

public double get() {
    return value;
}
```

Now you just need to compile the class, making sure that the `CalcResource.class` file is located in:

* `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/resource/`

Or, if you built a JAR, make sure it is located in:

* `netuno/lib/`

Next, let's create a test application that uses this resource:

```bash
./netuno app name=calc
```

We'll also create a service in this application to use the resource.

In this example, create the file `netuno/apps/calc/server/services/calc-test.js`:

```js
import { _calc, _out } from "@netuno/server-types";

_calc.set(10);

_calc.plus(120);

_out.print(_calc.get() + "\n");
```

Now start the application:

```bash
./netuno server app=calc
```

Finally, make a request to the service:

* `http://localhost:9000/services/calc-test`

The service will return the value `130`.
