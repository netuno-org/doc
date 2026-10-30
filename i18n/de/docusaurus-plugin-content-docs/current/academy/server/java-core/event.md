---
id: event
title: Ereignisse
sidebar_label: Ereignis
sidebar_position: 6
---

Netuno ermöglicht es Ihnen, Ereignisse während einer Phase seiner Ausführung zu injizieren.
Zum Beispiel können wir ein Ereignis injizieren, das kurz bevor das Setup die Datenbank aufbaut ausgeführt wird
(was ungefähr dem Definieren eines Skripts in `netuno/apps/meine_app/server/setup/_start.js` entspricht)
oder ein Ereignis, das kurz nach Abschluss der Verarbeitung zum Aufbau der Datenbank ausgeführt wird
(was analog zu `netuno/apps/meine_app/server/setup/_end.js` wäre).

Dazu müssen wir die Klasse `org.netuno.tritao.event.EventBase` erweitern. Wir definieren außerdem unser Paket, das dasselbe ist wie in den vorherigen Tutorials zu Diensten und Ressourcen des Java Core.

```java
package org.netuno.addon.rechner.ereignis;

import org.netuno.tritao.event.EventBase;

public class EreignisSetupStart extends EventBase {
    // ...
}
```

Danach erstellen wir den Konstruktor, der den Konstruktor der Oberklasse `EventBase` verwendet, um das Ereignis zu initialisieren:

```java
package org.netuno.addon.rechner.ereignis;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EreignisSetupStart extends EventBase {

    public EreignisSetupStart(Proteu proteu, Hili hili) {
        // ...
    }
}
```

Neben den Objekten vom Typ `Proteu` und `Hili` müssen wir dem Konstruktor der Oberklasse
den Ereignistyp übergeben. Die Ereignistypen sind in `import org.netuno.tritao.event.EventId` definiert.
Außerdem müssen wir dem Konstruktor eine ganze Zahl übergeben, die die Ausführungsreihenfolge des Ereignisses repräsentiert.
Wenn wir also mehrere Ereignisse für denselben Ereignistyp registrieren, ist es möglich zu steuern, welches der Ereignisse zuerst ausgeführt wird, welches direkt danach ausgeführt wird und so weiter.
Eine Zahl wie `100` ist gut, weil es möglich ist, andere Ereignisse zu platzieren, die vor ihm ausgeführt werden (zum Beispiel `50`).

```java
package org.netuno.addon.rechner.ereignis;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EreignisSetupStart extends EventBase {

    public EreignisSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Als Referenz finden Sie die vollständige Liste aller verfügbaren Ereignistypen unter:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Zurück zu unserem Code: Wir schließen ab, indem wir die Funktion `run` überschreiben:

```java
package org.netuno.addon.rechner.ereignis;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EreignisSetupStart extends EventBase {

    public EreignisSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values daten) {
        System.out.println("BENUTZERDEFINIERTES SETUP-START-EREIGNIS " + daten.toJSON());
    }

}
```

Das Argument `daten` dient dazu, dass das Ereignis zusätzliche Daten erhält. Vorerst wird es nur in den Ereignissen im Zusammenhang mit den Actions verwendet. Zum Beispiel können wir ein Ereignis erstellen, das jedes Mal ausgeführt wird, wenn etwas in der Datenbank gespeichert wird, und dann eine Nachricht in der Netuno-Konsole ausgibt:
```java
package org.netuno.addon.rechner.ereignis;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EreignisAktionSpeichern extends EventBase {

    public EreignisAktionSpeichern(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values daten) {
        DataItem datenElement = daten.get("dataItem");
        System.out.println("SPEICHERE " + datenElement.getFormName());
        // oder
        System.out.println("SPEICHERE " + daten.get("dataItem", DataItem.class).getFormName());
    }

}
```

Jetzt müssen Sie nur noch die Klasse kompilieren und sicherstellen, dass die Datei `.class` im Ordner liegt:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/rechner/ereignis/`

Oder eine JAR-Datei erzeugen und sicherstellen, dass sie im Ordner liegt:

- `netuno/lib/`

Die vollständigen Projektdateien finden Sie unter diesem [Link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).