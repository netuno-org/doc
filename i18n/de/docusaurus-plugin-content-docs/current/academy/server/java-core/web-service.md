---
id: web-service 
title: Multi-Anwendungs-Webdienst 
sidebar_label: Webdienst
sidebar_position: 4
---

In diesem Tutorial erstellen wir einen Multi-Anwendungs-Webdienst für Netuno. Das bedeutet, dass wir einen Webdienst in Java erstellen, der im Basisverzeichnis von Netuno liegt und von jeder Anwendung im Ordner `apps` verwendet werden kann.

Das Beispiel, das wir erstellen, ist – den vorherigen Tutorials folgend – der Dienst `rechner`, ein Beispieldienst, der einfache arithmetische Operationen ausführt.

Zunächst muss die Ordnerstruktur des Projekts erstellt werden. In diesem Beispiel gehen wir davon aus, dass das Projekt in einem Ordner namens `Rechner` erstellt wird. Dann muss die Ordnerstruktur angelegt werden, die den Namen des Pakets widerspiegelt (in unserem Beispiel `org.netuno.addon.rechner`). Unsere Ordnerstruktur sieht daher so aus:

- `Rechner/src/main/java/org/netuno/addon/rechner/web/`

Innerhalb dieser Struktur erstellen wir eine Java-Klasse namens `RechnerWeb`, die unseren benutzerdefinierten Webdienst definiert:

- `Rechner/src/main/java/org/netuno/addon/rechner/web/RechnerWeb.java`

Das in der Klasse definierte Paket lautet dann:

```java
package org.netuno.addon.rechner.web;
```

Damit die Klasse einen benutzerdefinierten Multi-Anwendungs-Webdienst definiert, muss sie die Klasse `org.netuno.tritao.Web` erweitern:

```java
package org.netuno.addon.rechner.web;

import org.netuno.tritao.Web;

public class RechnerWeb extends Web {
    // ...
}
```

Um die URL des Dienstes zu definieren, gehen Sie so vor:

```java
package org.netuno.addon.rechner.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/rechner/Rechner")
public class RechnerWeb extends Web {
    // ...
}
```

Die Methode, die überschrieben werden muss, damit der Dienst funktioniert, ist die Methode `run`:

```java
package org.netuno.addon.rechner.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/rechner/Rechner")
public class RechnerWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Definieren wir nun unter Verwendung einiger Netuno-Ressourcen die Methode `run` so, dass sie den Parameter `operation` erhält, der festlegt, welche Operation zwischen `plus` (Addition) und `minus` (Subtraktion) verwendet wird, sowie die Parameter `x` und `y`, die die Operanden sind (Summanden bei der Addition bzw. Minuend und Subtrahend bei der Subtraktion).

Anschließend berechnet unser Dienst basierend auf der gewählten Operation das Ergebnis und gibt es im JSON-Format an den Benutzer zurück:

```java
package org.netuno.addon.rechner.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/rechner/Rechner")
public class RechnerWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String operation = req.getString("operation", "plus");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double ergebnis = 0;

        if (operation.equalsIgnoreCase("minus")) {
            ergebnis = x - y;
        } else {
            ergebnis = x + y;
        }

        out.json(val.map().set("ergebnis", ergebnis));
    }
}
```

Jetzt muss nur noch die Klasse kompiliert werden, wobei sicherzustellen ist, dass die Datei `RechnerWeb.class` im Ordner liegt:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/rechner/web/`

Oder eine JAR-Datei erzeugen und sicherstellen, dass sie im Ordner liegt:

- `netuno/lib/`

Starten Sie den Netuno-Server mit einer beliebigen Anwendung:

```bash
./netuno server app=demo
```

Um Aufrufe an diesen Dienst durchzuführen, muss `.netuno` am Ende der URL hinzugefügt werden:

- `http://localhost:9000/addon/rechner/Rechner.netuno`

Wenn Sie beispielsweise einen Aufruf an:

- `http://localhost:9000/addon/rechner/Rechner.netuno?operation=minus&x=5&y=2`

durchführen, erhalten Sie zurück:

```js
{"ergebnis":3}
```

Die vollständigen Projektdateien finden Sie unter diesem [Link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

Im nächsten Tutorial lernen wir, wie man eine Netuno-Ressource mit Java erstellt.