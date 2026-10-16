---
id: web-service 
title: Serviciu Web Multi-Aplicațional 
sidebar_label: Serviciu Web
sidebar_position: 4
---

În acest tutorial vom crea un serviciu web multi-aplicațional pentru Netuno. Aceasta înseamnă că vom crea un serviciu web în Java care va fi plasat în directorul de bază al Netuno și care va putea fi utilizat de orice aplicație din directorul `apps`.

Exemplul pe care îl vom crea, urmând tutorialele anterioare, este serviciul `calcul`, care este un serviciu exemplu ce execută operații aritmetice simple.

Pentru a începe, mai întâi este necesar să creăm structura de directoare a proiectului. În acest exemplu vom considera că proiectul va fi creat într-un director numit `Calcul`. Apoi este necesar să creăm structura de directoare care oglindește numele pachetului (în exemplul nostru, `org.netuno.addon.calcul`). Prin urmare, structura noastră de directoare va fi:

- `Calcul/src/main/java/org/netuno/addon/calcul/web/`

În această structură vom crea o clasă Java numită `CalculWeb`, care va defini serviciul nostru web personalizat:

- ` Calcul/src/main/java/org/netuno/addon/calcul/web/CalculWeb.java`

Atunci pachetul definit în cadrul clasei va fi:

```java
package org.netuno.addon.calcul.web;
```

Pentru ca clasa să definească un serviciu web multi-aplicațional personalizat, această clasă trebuie să extindă clasa `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calcul.web;

import org.netuno.tritao.Web;

public class CalculWeb extends Web {
    // ...
}
```

Pentru a defini URL-ul serviciului, faceți:

```java
package org.netuno.addon.calcul.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calcul/Calcul")
public class CalculWeb extends Web {
    // ...
}
```

Metoda care trebuie suprascrisă pentru ca serviciul să funcționeze este metoda `run`:

```java
package org.netuno.addon.calcul.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calcul/Calcul")
public class CalculWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Atunci, folosind câteva resurse ale Netuno, să definim metoda `run` astfel încât să primească parametrul `operatie`, care va defini ce operație să se folosească între `plus` (adunare) și `minus` (scădere), și parametrii `x` și `y`, care vor fi operanzii (termeni în cazul adunării, descăzut și scăzător, respectiv, în cazul scăderii).

Apoi, pe baza operației alese, serviciul nostru va calcula rezultatul și îl va returna utilizatorului în format JSON:

```java
package org.netuno.addon.calcul.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calcul/Calcul")
public class CalculWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req cerere = resource(Req.class);
        Out iesire = resource(Out.class);
        Val valoare = resource(Val.class);

        String operatie = cerere.getString("operatie", "plus");
        double x = cerere.getDouble("x", 0);
        double y = cerere.getDouble("y", 0);

        double rezultat = 0;

        if (operatie.equalsIgnoreCase("minus")) {
            rezultat = x - y;
        } else {
            rezultat = x + y;
        }

        iesire.json(valoare.map().set("rezultat", rezultat));
    }
}
```

Acum trebuie doar să compilați clasa, asigurându-vă că fișierul `CalculWeb.class` se află în directorul:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calcul/web/`

Sau să produceți un fișier JAR, asigurându-vă că acesta se află în directorul:

- `netuno/lib/`

Porniți serverul Netuno cu orice aplicație:

```bash
./netuno server app=demo
```

Pentru a face apeluri către acest serviciu, este necesar să adăugați `.netuno` la sfârșitul URL-ului:

- `http://localhost:9000/addon/calcul/Calcul.netuno`

De exemplu, dacă faceți un apel către:

- `http://localhost:9000/addon/calcul/Calcul.netuno?operatie=minus&x=5&y=2`

Veți primi înapoi:

```js
{"rezultat":3}
```

Puteți vedea fișierele complete ale proiectului la acest [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

În următorul tutorial vom învăța cum să creăm o resursă Netuno folosind Java.