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

Para referência, a lista completa de todos os tipos de eventos disponíveis pode ser encontrada em:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

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

Você pode ver os arquivos completos do projeto nesse [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).
