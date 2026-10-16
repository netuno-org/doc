---
id: event
title: Evenimente
sidebar_label: Eveniment
sidebar_position: 6
---

Netuno vă permite să injectați evenimente în timpul unei faze a execuției sale.
De exemplu, putem injecta un eveniment care rulează chiar înainte ca setup-ul să construiască baza de date
(care funcționează cam ca definirea unui script în `netuno/apps/app_meu/server/setup/_start.js`)
sau un eveniment care rulează imediat după ce procesul de construcție a bazei de date este finalizat
(care ar fi analog cu `netuno/apps/app_meu/server/setup/_end.js`).

Pentru aceasta trebuie să extindem clasa `org.netuno.tritao.event.EventBase`. Vom defini, de asemenea, pachetul nostru, care va fi același definit în tutorialele anterioare de servicii și resurse din Java Core.

```java
package org.netuno.addon.calculator.event;

import org.netuno.tritao.event.EventBase;

public class EvenimentSetupStart extends EventBase {
    // ...
}
```

Apoi, creăm constructorul care folosește constructorul superclasei `EventBase` pentru a inițializa evenimentul:

```java
package org.netuno.addon.calculator.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EvenimentSetupStart extends EventBase {

    public EvenimentSetupStart(Proteu proteu, Hili hili) {
        // ...
    }
}
```

Pe lângă obiectele de tip `Proteu` și `Hili`, trebuie să transmitem constructorului superclasei
tipul de eveniment. Tipurile de eveniment sunt definite în `import org.netuno.tritao.event.EventId`.
De asemenea, trebuie să transmitem constructorului un număr întreg care reprezintă ordinea de execuție a evenimentului.
Astfel, înregistrând mai multe evenimente pentru același tip de eveniment, este posibil să controlăm care eveniment va fi executat primul, care va fi executat imediat după, și așa mai departe.
Un număr precum `100` este bun pentru că este posibil să plasăm alte evenimente care se vor executa înaintea lui (de exemplu, `50`).

```java
package org.netuno.addon.calculator.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EvenimentSetupStart extends EventBase {

    public EvenimentSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Pentru referință, lista completă a tuturor tipurilor de evenimente disponibile poate fi găsită la:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Revenind la codul nostru, vom finaliza suprascriind funcția `run`:

```java
package org.netuno.addon.calculator.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EvenimentSetupStart extends EventBase {

    public EvenimentSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values date) {
        System.out.println("EVENIMENT PERSONALIZAT SETUP START " + date.toJSON());
    }

}
```

Argumentul `date` serve pentru ca evenimentul să primească date suplimentare. Deocamdată este folosit doar în evenimentele legate de acțiuni. De exemplu, putem crea un eveniment care se execută de fiecare dată când ceva este salvat în baza de date și apoi scrie un mesaj în consola Netuno:
```java
package org.netuno.addon.calculator.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EvenimentActiuneSalvare extends EventBase {

    public EvenimentActiuneSalvare(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values date) {
        DataItem elementDate = date.get("dataItem");
        System.out.println("SE SALVEAZĂ " + elementDate.getFormName());
        // sau
        System.out.println("SE SALVEAZĂ " + date.get("dataItem", DataItem.class).getFormName());
    }

}
```

Acum trebuie doar să compilați clasa, asigurându-vă că fișierul `.class` este în folderul:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calculator/event/`

Sau să produceți un fișier JAR, asigurându-vă că acesta este în folderul:

- `netuno/lib/`

Puteți vedea fișierele complete ale proiectului la acest [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).