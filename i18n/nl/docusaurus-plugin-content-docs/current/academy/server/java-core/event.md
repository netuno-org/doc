---
id: event
title: Gebeurtenissen
sidebar_label: Gebeurtenis
sidebar_position: 6
---

Met Netuno kun je gebeurtenissen injecteren tijdens een fase van de uitvoering.
We kunnen bijvoorbeeld een gebeurtenis injecteren die draait vlak voordat de setup de database opbouwt
(wat ongeveer werkt zoals het definiëren van een script in `netuno/apps/mijn_app/server/setup/_start.js`)
of een gebeurtenis die draait direct nadat het proces van het opbouwen van de database is voltooid
(wat analoog zou zijn aan `netuno/apps/mijn_app/server/setup/_end.js`).

Daarvoor moeten we de klasse `org.netuno.tritao.event.EventBase` uitbreiden. We definiëren ook onze package, dezelfde als gedefinieerd in de eerdere tutorials over services en resources van Java Core.

```java
package org.netuno.addon.rekenmachine.gebeurtenis;

import org.netuno.tritao.event.EventBase;

public class GebeurtenisSetupStart extends EventBase {
    // ...
}
```

Daarna maken we de constructor die de constructor van de superklasse `EventBase` gebruikt om de gebeurtenis te initialiseren:

```java
package org.netuno.addon.rekenmachine.gebeurtenis;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class GebeurtenisSetupStart extends EventBase {

    public GebeurtenisSetupStart(Proteu proteu, Hili hili) {
        // ...
    }
}
```

Naast objecten van het type `Proteu` en `Hili`, moeten we aan de constructor van de superklasse
het gebeurtenistype doorgeven. De gebeurtenistypen zijn gedefinieerd in `import org.netuno.tritao.event.EventId`.
We moeten ook een geheel getal aan de constructor doorgeven dat de uitvoeringsvolgorde van de gebeurtenis vertegenwoordigt.
Zo is het door meerdere gebeurtenissen voor hetzelfde gebeurtenistype te registreren mogelijk te bepalen welke gebeurtenis eerst wordt uitgevoerd, welke daarna, enzovoort.
Een getal zoals `100` is handig, omdat je andere gebeurtenissen kunt plaatsen die ervoor worden uitgevoerd (bijvoorbeeld `50`).

```java
package org.netuno.addon.rekenmachine.gebeurtenis;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class GebeurtenisSetupStart extends EventBase {

    public GebeurtenisSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Ter referentie, de volledige lijst van alle beschikbare gebeurtenistypen is te vinden op:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Terug naar onze code: we ronden af door de functie `run` te overschrijven:

```java
package org.netuno.addon.rekenmachine.gebeurtenis;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class GebeurtenisSetupStart extends EventBase {

    public GebeurtenisSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values gegevens) {
        System.out.println("AANGEPASTE SETUP-START-GEBEURTENIS "+ gegevens.toJSON());
    }

}
```

Het argument `gegevens` dient om de gebeurtenis extra gegevens te laten ontvangen. Voorlopig wordt het alleen gebruikt in gebeurtenissen die met actions te maken hebben. We kunnen bijvoorbeeld een gebeurtenis maken die elke keer wordt uitgevoerd wanneer er iets in de database wordt opgeslagen en dan een bericht in de Netuno-console schrijft:
```java
package org.netuno.addon.rekenmachine.gebeurtenis;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class GebeurtenisActieOpslaan extends EventBase {

    public GebeurtenisActieOpslaan(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values gegevens) {
        DataItem gegevensItem = gegevens.get("dataItem");
        System.out.println("OPSLAAN " + gegevensItem.getFormName());
        // of
        System.out.println("OPSLAAN " + gegevens.get("dataItem", DataItem.class).getFormName());
    }

}
```

Nu hoef je alleen nog de klasse te compileren en ervoor te zorgen dat het `.class`-bestand in de map staat:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/rekenmachine/gebeurtenis/`

Of een JAR-bestand te produceren en ervoor te zorgen dat het in de map staat:

- `netuno/lib/`

Je kunt de volledige bestanden van het project bekijken via deze [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).