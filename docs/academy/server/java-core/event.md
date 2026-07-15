---
id: event 
title: Events 
sidebar_label: Event
sidebar_position: 6
---

Netuno allows you to inject events at different stages of its execution.

For example, you can inject an event that runs immediately before the setup process builds the database (similar to defining a script in `netuno/apps/my_app/server/setup/_start.js`), or an event that runs immediately after the database build process has finished (similar to `netuno/apps/my_app/server/setup/_end.js`).

To do this, we need to extend the `org.netuno.tritao.event.EventBase` class. We'll also define our package, which will be the same one used in the previous Java Core service and resource tutorials.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventSetupStart extends EventBase {
    // ...
}
```

Next, create a constructor that uses the superclass constructor from `EventBase` to initialize the event:

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

In addition to the `Proteu` and `Hili` objects, we need to pass the event type to the superclass constructor. Event types are defined in `org.netuno.tritao.event.EventId`.
We also need to provide an integer that represents the event execution order. This allows multiple events registered for the same event type to be executed in a predictable sequence. A value such as `100` is a good default because it leaves room for other events to run before it (for example, one with priority `50`).

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

For reference, the complete list of all available event types can be found in:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Back to our code, we can complete the implementation by overriding the `run` method:

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
        System.out.println("CUSTOM SETUP START EVENT " + data.toJSON());
    }

}
```

The `data` argument allows the event to receive additional information. At the moment, it is primarily used by action-related events.

For example, we can create an event that runs every time something is saved to the database and then writes a message to the Netuno console:

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
        System.out.println("SAVING " + dataItem.getFormName());
        // or
        System.out.println("SAVING " + data.get("dataItem", DataItem.class).getFormName());
    }

}
```

Now you just need to compile the class, making sure that the `.class` file is located in:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

Or build a JAR file, making sure it is located in:

- `netuno/lib/`

You can view the complete project files in this [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).
