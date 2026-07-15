---
id: event
title: Eventos
sidebar_label: Evento
sidebar_position: 6
---

O Netuno permite que você injete eventos durante alguma fase de sua execução.
Por exemplo, podemos injetar um evento que roda logo antes do setup construir a base de dados
(que funciona mais ou menos como definir um script em `netuno/apps/minha_app/server/setup/_start.js`)
ou um evento que roda logo após o processamento de construção da base de dados ser finalizado
(que seria análogo ao `netuno/apps/minha_app/server/setup/_end.js`).

Para isso precisamos extender a classe `org.netuno.tritao.event.EventBase`. Vamos também definir a nossa package, que será a mesma definida nos tutoriais anteriores de serviços e recursos do Java Core.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventSetupStart extends EventBase {
    // ...
}
```

Depois, criamos o constructor que usa o constructor da super classe `EventBase` para inicializar o evento:

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

Além dos objetos do tipo `Proteu` e `Hili`, precisamos passar para o constructor da super classe
o tipo de evento. Os tipos de evento estão definidos em `import org.netuno.tritao.event.EventId`.
Também precisamos passar para o constructor um número inteiro que representa a ordem de execução do evento.
Assim, registrando vários eventos para o mesmo tipo de evento, é possível controlar qual dos eventos será executado primeiro, qual será executado logo em seguida, e assim por diante.
Um número como `100` é bom porque é possível colocar outros eventos que executarão antes dele (por exemplo, `50`).

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

Aqui está a lista de todos os tipos de eventos para referência:

```java
public class EventId {
    public static final String CONFIG_ENVIRONMENT = "_config:environment";
    public static final String CONFIG_ENVIRONMENT_BEFORE = "_config:environment:before";
    public static final String CONFIG_ENVIRONMENT_AFTER = "_config:environment:after";
    public static final String CONFIG_ENVIRONMENT_SCRIPT_BEFORE = "_config:environment:script:before";
    public static final String CONFIG_ENVIRONMENT_SCRIPT_AFTER = "_config:environment:script:after";

    public static final String CONFIG = "_config";
    public static final String CONFIG_BEFORE = "_config:before";
    public static final String CONFIG_AFTER = "_config:after";
    public static final String CONFIG_SCRIPT_BEFORE = "_config:script:before";
    public static final String CONFIG_SCRIPT_AFTER = "_config:script:after";

    public static final String INIT = "_init";
    public static final String INIT_BEFORE = "_init:before";
    public static final String INIT_AFTER = "_init:after";
    public static final String INIT_SCRIPT_BEFORE = "_init:script:before";
    public static final String INIT_SCRIPT_AFTER = "_init:script:after";

    public static final String REQUEST_START = "_request:start";
    public static final String REQUEST_START_BEFORE = "_request:start:before";
    public static final String REQUEST_START_AFTER = "_request:start:after";
    public static final String REQUEST_START_SCRIPT_BEFORE = "_request:start:script:before";
    public static final String REQUEST_START_SCRIPT_AFTER = "_request:start:script:after";

    public static final String REQUEST_URL = "_request:url";
    public static final String REQUEST_URL_BEFORE = "_request:url:before";
    public static final String REQUEST_URL_AFTER = "_request:url:after";
    public static final String REQUEST_URL_SCRIPT_BEFORE = "_request:url:script:before";
    public static final String REQUEST_URL_SCRIPT_AFTER = "_request:url:script:after";

    public static final String REQUEST_CLOSE = "_request:close";
    public static final String REQUEST_CLOSE_BEFORE = "_request:close:before";
    public static final String REQUEST_CLOSE_AFTER = "_request:close:after";
    public static final String REQUEST_CLOSE_SCRIPT_BEFORE = "_request:close:script:before";
    public static final String REQUEST_CLOSE_SCRIPT_AFTER = "_request:close:script:after";

    public static final String REQUEST_END = "_request:end";
    public static final String REQUEST_END_BEFORE = "_request:end:before";
    public static final String REQUEST_END_AFTER = "_request:end:after";
    public static final String REQUEST_END_SCRIPT_BEFORE = "_request:end:script:before";
    public static final String REQUEST_END_SCRIPT_AFTER = "_request:end:script:after";

    public static final String SERVICE_CONFIG = "_service:config";
    public static final String SERVICE_CONFIG_BEFORE = "_service:config:before";
    public static final String SERVICE_CONFIG_AFTER = "_service:config:after";
    public static final String SERVICE_CONFIG_SCRIPT_BEFORE = "_service:config:script:before";
    public static final String SERVICE_CONFIG_SCRIPT_AFTER = "_service:config:script:after";

    public static final String SERVICE_START = "_service:start";
    public static final String SERVICE_START_BEFORE = "_service:start:before";
    public static final String SERVICE_START_AFTER = "_service:start:after";
    public static final String SERVICE_START_SCRIPT_BEFORE = "_service:start:script:before";
    public static final String SERVICE_START_SCRIPT_AFTER = "_service:start:script:after";

    public static final String SERVICE_END = "_service:end";
    public static final String SERVICE_END_BEFORE = "_service:end:before";
    public static final String SERVICE_END_AFTER = "_service:end:after";
    public static final String SERVICE_END_SCRIPT_BEFORE = "_service:end:script:before";
    public static final String SERVICE_END_SCRIPT_AFTER = "_service:end:script:after";

    public static final String SERVICE_ERROR = "_service:error";
    public static final String SERVICE_ERROR_BEFORE = "_service:error:before";
    public static final String SERVICE_ERROR_AFTER = "_service:error:after";
    public static final String SERVICE_ERROR_SCRIPT_BEFORE = "_service:error:script:before";
    public static final String SERVICE_ERROR_SCRIPT_AFTER = "_service:error:script:after";

    public static final String SERVICE_NOT_FOUND = "_service:not-found";
    public static final String SERVICE_NOT_FOUND_BEFORE = "_service:not-found:before";
    public static final String SERVICE_NOT_FOUND_AFTER = "_service:not-found:after";

    public static final String SETUP_START = "_setup:start";
    public static final String SETUP_START_BEFORE = "_setup:start:before";
    public static final String SETUP_START_AFTER = "_setup:start:after";
    public static final String SETUP_START_SCRIPT_BEFORE = "_setup:start:script:before";
    public static final String SETUP_START_SCRIPT_AFTER = "_setup:start:script:after";

    public static final String SETUP_CLEANUP = "_setup:cleanup";
    public static final String SETUP_CLEANUP_BEFORE = "_setup:cleanup:before";
    public static final String SETUP_CLEANUP_AFTER = "_setup:cleanup:after";
    public static final String SETUP_CLEANUP_SCRIPT_BEFORE = "_setup:cleanup:script:before";
    public static final String SETUP_CLEANUP_SCRIPT_AFTER = "_setup:cleanup:script:after";

    public static final String SETUP_END = "_setup:end";
    public static final String SETUP_END_BEFORE = "_setup:end:before";
    public static final String SETUP_END_AFTER = "_setup:end:after";
    public static final String SETUP_END_SCRIPT_BEFORE = "_setup:end:script:before";
    public static final String SETUP_END_SCRIPT_AFTER = "_setup:end:script:after";

    public static final String ACTION_SAVE = "_action:save";
    public static final String ACTION_SAVED = "_action:saved";
    public static final String ACTION_REMOVE = "_action:remove";
    public static final String ACTION_REMOVED = "_action:removed";
    public static final String ACTION_SCRIPT_SAVE_BEFORE = "_action:script:save:before";
    public static final String ACTION_SCRIPT_SAVE_AFTER = "_action:script:save:after";
    public static final String ACTION_SCRIPT_SAVED_BEFORE = "_action:script:saved:before";
    public static final String ACTION_SCRIPT_SAVED_AFTER = "_action:script:saved:after";
    public static final String ACTION_SCRIPT_REMOVE_BEFORE = "_action:script:remove:before";
    public static final String ACTION_SCRIPT_REMOVE_AFTER = "_action:script:remove:after";
    public static final String ACTION_SCRIPT_REMOVED_BEFORE = "_action:script:removed:before";
    public static final String ACTION_SCRIPT_REMOVED_AFTER = "_action:script:removed:after";
}
```

Voltando ao nosso código, vamos finalizar sobrescrevendo a função `run`: 

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

O argumento `data` serve para que o evento receba dados adicionais. Por enquanto ele só é utilizado nos eventos relacionados às actions. Por exemplo, podemos criar um evento que executa toda vez que algo é salvo no banco de dados e então escreve uma mensagem no console do Netuno:
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

Agora é só compilar a classe, se certificando de que o arquivo `.class` está na pasta:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

Ou produzir um arquivo JAR, certificando-se de que ele está na pasta:

- `netuno/lib/`
