---
id: event
title: Events
sidebar_label: Event
sidebar_position: 6
---

Netuno allows you to inject events during some phase of its execution.
For example, we can inject an event that runs right before setup builds the database
(which works more or less like defining a script in `netuno/apps/my_app/server/setup/_start.js`)
or an event that runs right after the database build processing is finished
(which would be analogous to `netuno/apps/my_app/server/setup/_end.js`).

To do this, we need to extend the `org.netuno.tritao.event.EventBase` class. We will also define our package, which will be the same one defined in the previous tutorials on Java Core services and resources.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventSetupStart extends EventBase {
    // ...
}
```

Then, we create the constructor that uses the superclass `EventBase` constructor to initialize the event:

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

In addition to objects of type `Proteu` and `Hili`, we need to pass the event type to the superclass constructor. The event types are defined in `import org.netuno.tritao.event.EventId`.
We also need to pass an integer to the constructor that represents the event execution order.
Thus, by registering several events for the same event type, it is possible to control which event will run first, which will run right after, and so on.
A number such as `100` is good because it is possible to place other events that will run before it (for example, `50`).

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

For reference, the complete list of all available event types can be found at:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Returning to our code, let's finish by overriding the `run` method:

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
        System.out.println("CUSTOM SETUP START EVENT "+ data.toJSON());
    }

}
```

The `data` argument allows the event to receive additional data. For now, it is only used in events related to actions. For example, we can create an event that runs every time something is saved to the database and then writes a message to the Netuno console:
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

Now just compile the class, making sure the `.class` file is in the folder:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

Or produce a JAR file, making sure it is in the folder:

- `netuno/lib/`

You can see the complete project files at this [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).