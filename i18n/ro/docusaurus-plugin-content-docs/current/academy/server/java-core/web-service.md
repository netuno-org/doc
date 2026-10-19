---
id: web-service 
title: Serviciu Web Multi-Aplicațional 
sidebar_label: Serviciu Web
sidebar_position: 4
---

În acest tutorial vom crea un serviciu web multi-aplicațional pentru Netuno. Aceasta înseamnă că vom crea un serviciu web în Java care va sta în directorul de bază al Netuno și care va putea fi utilizat de orice aplicație din directorul `apps`.

Exemplul pe care îl vom crea, urmând tutorialele anterioare, este serviciul `calculator`, un serviciu de exemplu care execută operații aritmetice simple.

Pentru a începe, mai întâi este necesar să creați structura de directoare a proiectului. În acest exemplu, vom considera că proiectul va fi creat într-un director numit `Calculator`. Așadar, este necesar să creați structura de directoare care oglindește numele pachetului (în exemplul nostru, `org.netuno.addon.calculator`). Structura noastră de directoare va fi, prin urmare:

- `Calculator/src/main/java/org/netuno/addon/calculator/web/`

În această structură vom crea o clasă Java numită `CalculatorWeb`, care va defini serviciul nostru web personalizat:

- ` Calculator/src/main/java/org/netuno/addon/calculator/web/CalculatorWeb.java`

Atunci pachetul definit în clasă va fi:

```java
package org.netuno.addon.calculator.web;
```

Pentru ca clasa să definească un serviciu web multi-aplicațional personalizat, această clasă trebuie să extindă clasa `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calculator.web;

import org.netuno.tritao.Web;

public class CalculatorWeb extends Web {
    // ...
}
```

Pentru a defini URL-ul serviciului, faceți:

```java
package org.netuno.addon.calculator.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calculator/Calculator")
public class CalculatorWeb extends Web {
    // ...
}
```

Metoda care trebuie suprascrisă pentru ca serviciul să funcționeze este metoda `run`:

```java
package org.netuno.addon.calculator.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calculator/Calculator")
public class CalculatorWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Vom defini apoi, folosind câteva resurse Netuno, metoda `run` astfel încât să primească parametrul `operatie`, care va stabili ce operație să folosească între `adunare` și `scadere`, și parametrii `x` și `y`, care vor fi operanzii (termeni în cazul adunării, respectiv descăzut și scăzător în cazul scăderii).

Apoi, pe baza operației alese, serviciul nostru va calcula rezultatul și îl va returna utilizatorului în format JSON:

```java
package org.netuno.addon.calculator.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calculator/Calculator")
public class CalculatorWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req cerere = resource(Req.class);
        Out iesire = resource(Out.class);
        Val valoare = resource(Val.class);

        String operatie = cerere.getString("operatie", "adunare");
        double x = cerere.getDouble("x", 0);
        double y = cerere.getDouble("y", 0);

        double rezultat = 0;

        if (operatie.equalsIgnoreCase("scadere")) {
            rezultat = x - y;
        } else {
            rezultat = x + y;
        }

        iesire.json(valoare.map().set("rezultat", rezultat));
    }
}
```

Acum trebuie doar să compilați clasa, asigurându-vă că fișierul `CalculatorWeb.class` se află în directorul:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calculator/web/`

Sau să produceți un fișier JAR, asigurându-vă că acesta se află în directorul:

- `netuno/lib/`

Porniți serverul Netuno cu orice aplicație:

```bash
./netuno server app=demo
```

Pentru a face apeluri către acest serviciu, este necesar să adăugați `.netuno` la finalul URL-ului:

- `http://localhost:9000/addon/calculator/Calculator.netuno`

De exemplu, dacă faceți un apel către:

- `http://localhost:9000/addon/calculator/Calculator.netuno?operatie=scadere&x=5&y=2`

Veți primi înapoi:

```js
{"rezultat":3}
```

Puteți vedea fișierele complete ale proiectului la acest [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

În următorul tutorial vom învăța cum să creăm o resursă Netuno folosind Java.