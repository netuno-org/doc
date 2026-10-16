---
id: event
title: Eventos
sidebar_label: Evento
sidebar_position: 6
---

Netuno permite que inyectes eventos durante alguna fase de su ejecución.
Por ejemplo, podemos inyectar un evento que se ejecuta justo antes de que el setup construya la base de datos
(que funciona más o menos como definir un script en `netuno/apps/mi_app/server/setup/_start.js`)
o un evento que se ejecuta justo después de que finalice el procesamiento de construcción de la base de datos
(que sería análogo a `netuno/apps/mi_app/server/setup/_end.js`).

Para ello necesitamos extender la clase `org.netuno.tritao.event.EventBase`. También vamos a definir nuestro paquete, que será el mismo definido en los tutoriales anteriores de servicios y recursos de Java Core.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventoInicioSetup extends EventBase {
    // ...
}
```

Después, creamos el constructor que usa el constructor de la superclase `EventBase` para inicializar el evento:

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EventoInicioSetup extends EventBase {

    public EventoInicioSetup(Proteu proteu, Hili hili) {
        // ...
    }
}
```

Además de los objetos de tipo `Proteu` y `Hili`, necesitamos pasar al constructor de la superclase
el tipo de evento. Los tipos de evento están definidos en `import org.netuno.tritao.event.EventId`.
También necesitamos pasar al constructor un número entero que representa el orden de ejecución del evento.
Así, registrando varios eventos para el mismo tipo de evento, es posible controlar cuál de los eventos se ejecutará primero, cuál se ejecutará justo después, y así sucesivamente.
Un número como `100` es bueno porque es posible colocar otros eventos que se ejecutarán antes que él (por ejemplo, `50`).

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EventoInicioSetup extends EventBase {

    public EventoInicioSetup(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Para referencia, la lista completa de todos los tipos de eventos disponibles se puede encontrar en:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Volviendo a nuestro código, vamos a finalizar sobrescribiendo la función `run`:

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventoInicioSetup extends EventBase {

    public EventoInicioSetup(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values datos) {
        System.out.println("EVENTO PERSONALIZADO DE INICIO DE SETUP "+ datos.toJSON());
    }

}
```

El argumento `datos` sirve para que el evento reciba datos adicionales. Por ahora solo se utiliza en los eventos relacionados con las acciones. Por ejemplo, podemos crear un evento que se ejecuta cada vez que algo se guarda en la base de datos y entonces escribe un mensaje en la consola de Netuno:
```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventoAccionGuardar extends EventBase {

    public EventoAccionGuardar(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values datos) {
        DataItem elementoDatos = datos.get("dataItem");
        System.out.println("GUARDANDO " + elementoDatos.getFormName());
        // o
        System.out.println("GUARDANDO " + datos.get("dataItem", DataItem.class).getFormName());
    }

}
```

Ahora solo hay que compilar la clase, asegurándose de que el archivo `.class` está en la carpeta:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

O producir un archivo JAR, asegurándose de que está en la carpeta:

- `netuno/lib/`

Puedes ver los archivos completos del proyecto en este [enlace](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).