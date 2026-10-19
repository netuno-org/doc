---
id: web-service 
title: Multi-applicatieve webservice 
sidebar_label: Webservice
sidebar_position: 4
---

In deze tutorial maken we een multi-applicatieve webservice voor Netuno. Dat betekent dat we een webservice in Java maken die in de basisdirectory van Netuno komt te staan en die door elke applicatie in de map `apps` kan worden gebruikt.

Het voorbeeld dat we gaan maken, in navolging van de vorige tutorials, is de webservice `berekening`, een voorbeeldservice die eenvoudige rekenkundige bewerkingen uitvoert.

Om te beginnen moet eerst de mapstructuur van het project worden aangemaakt. In dit voorbeeld gaan we ervan uit dat het project in een map met de naam `Berekening` wordt aangemaakt. Dan moet je de mapstructuur aanmaken die de naam van de package weerspiegelt (in ons voorbeeld `org.netuno.addon.berekening`). Onze mapstructuur is dus:

- `Berekening/src/main/java/org/netuno/addon/berekening/web/`

Binnen deze structuur maken we een Java-klasse met de naam `BerekeningWeb`, die onze aangepaste webservice definieert:

- ` Berekening/src/main/java/org/netuno/addon/berekening/web/BerekeningWeb.java`

De package die in de klasse wordt gedefinieerd, is dan:

```java
package org.netuno.addon.berekening.web;
```

Om ervoor te zorgen dat de klasse een aangepaste multi-applicatieve webservice definieert, moet deze klasse de klasse `org.netuno.tritao.Web` uitbreiden:

```java
package org.netuno.addon.berekening.web;

import org.netuno.tritao.Web;

public class BerekeningWeb extends Web {
    // ...
}
```

Om de URL van de service te definiëren, doe je:

```java
package org.netuno.addon.berekening.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/berekening/Berekening")
public class BerekeningWeb extends Web {
    // ...
}
```

De methode die overschreven moet worden om de service te laten werken, is de methode `run`:

```java
package org.netuno.addon.berekening.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/berekening/Berekening")
public class BerekeningWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Laten we dan, met enkele Netuno-resources, de methode `run` zo definiëren dat deze de parameter `bewerking` ontvangt, die bepaalt welke bewerking moet worden gebruikt: `plus` (optelling) of `minus` (aftrekking), en de parameters `x` en `y`, de operanden (termen bij de optelling, respectievelijk aftrektal en aftrekker bij de aftrekking).

Daarna berekent onze service, op basis van de gekozen bewerking, het resultaat en retourneert dit aan de gebruiker in JSON-formaat:

```java
package org.netuno.addon.berekening.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/berekening/Berekening")
public class BerekeningWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String bewerking = req.getString("bewerking", "plus");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double resultaat = 0;

        if (bewerking.equalsIgnoreCase("minus")) {
            resultaat = x - y;
        } else {
            resultaat = x + y;
        }

        out.json(val.map().set("resultaat", resultaat));
    }
}
```

Nu hoef je alleen nog de klasse te compileren en ervoor te zorgen dat het bestand `BerekeningWeb.class` in de map staat:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/berekening/web/`

Of een JAR-bestand te maken en ervoor te zorgen dat dit in de map staat:

- `netuno/lib/`

Start de Netuno-server met een willekeurige applicatie:

```bash
./netuno server app=demo
```

Om deze service aan te roepen, moet je `.netuno` aan het einde van de URL toevoegen:

- `http://localhost:9000/addon/berekening/Berekening.netuno`

Als je bijvoorbeeld een aanroep doet naar:

- `http://localhost:9000/addon/berekening/Berekening.netuno?bewerking=minus&x=5&y=2`

Dan krijg je terug:

```js
{"resultaat":3}
```

Je kunt de volledige projectbestanden vinden via deze [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

In de volgende tutorial leren we hoe je een Netuno-resource maakt met Java.