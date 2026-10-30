---
id: event
title: Zdarzenia
sidebar_label: Zdarzenie
sidebar_position: 6
---

Netuno pozwala wstrzykiwać zdarzenia na pewnym etapie swojego działania.
Na przykład możemy wstrzyknąć zdarzenie uruchamiane tuż przed tym, jak setup zbuduje bazę danych
(działa to mniej więcej jak zdefiniowanie skryptu w `netuno/apps/moja_aplikacja/server/setup/_start.js`)
albo zdarzenie uruchamiane tuż po zakończeniu procesu budowania bazy danych
(co byłoby analogiczne do `netuno/apps/moja_aplikacja/server/setup/_end.js`).

Aby to zrobić, musimy rozszerzyć klasę `org.netuno.tritao.event.EventBase`. Zdefiniujemy także nasz pakiet, który będzie tym samym pakietem zdefiniowanym w poprzednich samouczkach dotyczących usług i zasobów Java Core.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventSetupStart extends EventBase {
    // ...
}
```

Następnie tworzymy konstruktor, który używa konstruktora klasy nadrzędnej `EventBase` do zainicjalizowania zdarzenia:

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

Oprócz obiektów typu `Proteu` i `Hili` musimy przekazać do konstruktora klasy nadrzędnej
typ zdarzenia. Typy zdarzeń są zdefiniowane w `import org.netuno.tritao.event.EventId`.
Musimy także przekazać do konstruktora liczbę całkowitą reprezentującą kolejność wykonywania zdarzenia.
Dzięki temu, rejestrując wiele zdarzeń dla tego samego typu zdarzenia, można kontrolować, które zdarzenie zostanie wykonane jako pierwsze, które zaraz po nim itd.
Liczba taka jak `100` jest dobra, ponieważ można umieścić inne zdarzenia, które wykonają się przed nim (na przykład `50`).

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

Dla odniesienia, pełną listę wszystkich dostępnych typów zdarzeń można znaleźć tutaj:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Wracając do naszego kodu, zakończymy, nadpisując funkcję `run`: 

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
        System.out.println("NIESTANDARDOWE ZDARZENIE ROZPOCZĘCIA SETUP "+ data.toJSON());
    }

}
```

Argument `data` służy do tego, aby zdarzenie otrzymywało dodatkowe dane. Na razie jest używany tylko w zdarzeniach związanych z akcjami. Na przykład możemy utworzyć zdarzenie, które wykonuje się za każdym razem, gdy coś zostanie zapisane w bazie danych, a następnie wypisuje komunikat w konsoli Netuno:
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
        System.out.println("ZAPISYWANIE " + dataItem.getFormName());
        // lub
        System.out.println("ZAPISYWANIE " + data.get("dataItem", DataItem.class).getFormName());
    }

}
```

Teraz wystarczy skompilować klasę, upewniając się, że plik `.class` znajduje się w folderze:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

Albo utworzyć plik JAR, upewniając się, że znajduje się w folderze:

- `netuno/lib/`

Pełne pliki projektu możesz zobaczyć pod tym [linkiem](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).