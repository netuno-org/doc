---
id: event
title: Eventi
sidebar_label: Evento
sidebar_position: 6
---

Netuno consente di iniettare eventi durante alcune fasi della sua esecuzione.
Ad esempio, possiamo iniettare un evento che viene eseguito subito prima che il setup costruisca il database
(che funziona più o meno come definire uno script in `netuno/apps/mia_app/server/setup/_start.js`)
oppure un evento che viene eseguito subito dopo il completamento del processo di costruzione del database
(che sarebbe analogo a `netuno/apps/mia_app/server/setup/_end.js`).

Per farlo dobbiamo estendere la classe `org.netuno.tritao.event.EventBase`. Definiremo anche il nostro package, che sarà lo stesso definito nei tutorial precedenti sui servizi e sulle risorse di Java Core.

```java
package org.netuno.addon.calcolo.evento;

import org.netuno.tritao.event.EventBase;

public class EventoAvvioSetup extends EventBase {
    // ...
}
```

Poi creiamo il costruttore che usa il costruttore della superclasse `EventBase` per inizializzare l'evento:

```java
package org.netuno.addon.calcolo.evento;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EventoAvvioSetup extends EventBase {

    public EventoAvvioSetup(Proteu proteu, Hili hili) {
        // ...
    }
}
```

Oltre agli oggetti di tipo `Proteu` e `Hili`, dobbiamo passare al costruttore della superclasse
il tipo di evento. I tipi di evento sono definiti in `import org.netuno.tritao.event.EventId`.
Dobbiamo anche passare al costruttore un numero intero che rappresenta l'ordine di esecuzione dell'evento.
Così, registrando più eventi per lo stesso tipo di evento, è possibile controllare quale evento verrà eseguito per primo, quale verrà eseguito subito dopo, e così via.
Un numero come `100` va bene perché è possibile inserire altri eventi che verranno eseguiti prima di esso (ad esempio, `50`).

```java
package org.netuno.addon.calcolo.evento;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EventoAvvioSetup extends EventBase {

    public EventoAvvioSetup(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Per riferimento, l'elenco completo di tutti i tipi di evento disponibili si trova in:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Tornando al nostro codice, finalizziamo sovrascrivendo la funzione `run`: 

```java
package org.netuno.addon.calcolo.evento;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventoAvvioSetup extends EventBase {

    public EventoAvvioSetup(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values dati) {
        System.out.println("EVENTO PERSONALIZZATO AVVIO SETUP "+ dati.toJSON());
    }

}
```

L'argomento `dati` serve affinché l'evento riceva dati aggiuntivi. Per ora viene utilizzato solo negli eventi relativi alle azioni. Ad esempio, possiamo creare un evento che viene eseguito ogni volta che qualcosa viene salvato nel database e quindi scrive un messaggio nella console di Netuno:
```java
package org.netuno.addon.calcolo.evento;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventoSalvataggioAzione extends EventBase {

    public EventoSalvataggioAzione(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values dati) {
        DataItem elementoDati = dati.get("dataItem");
        System.out.println("SALVATAGGIO " + elementoDati.getFormName());
        // oppure
        System.out.println("SALVATAGGIO " + dati.get("dataItem", DataItem.class).getFormName());
    }

}
```

Ora basta compilare la classe, assicurandosi che il file `.class` sia nella cartella:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calcolo/evento/`

Oppure produrre un file JAR, assicurandosi che sia nella cartella:

- `netuno/lib/`

Puoi vedere i file completi del progetto in questo [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).