---
id: web-service 
title: Servizio Web Multi-Applicativo 
sidebar_label: Servizio Web
sidebar_position: 4
---

In questo tutorial creeremo un servizio web multi-applicativo per Netuno. Ciò significa che creeremo un servizio web in Java che resterà nella directory di base di Netuno e potrà essere utilizzato da qualsiasi applicazione all'interno della cartella `apps`.

L'esempio che creeremo, seguendo i tutorial precedenti, è il servizio `calcolo`, che è un servizio di esempio che esegue semplici operazioni aritmetiche.

Per iniziare, è prima necessario creare la struttura delle cartelle del progetto. In questo esempio considereremo che il progetto verrà creato all'interno di una cartella chiamata `Calcolo`. Quindi è necessario creare la struttura delle cartelle che rispecchia il nome del package (nel nostro esempio, `org.netuno.addon.calcolo`). La nostra struttura delle cartelle sarà quindi:

- `Calcolo/src/main/java/org/netuno/addon/calcolo/web/`

All'interno di questa struttura creeremo una classe Java chiamata `CalcoloWeb`, che definirà il nostro servizio web personalizzato:

- `Calcolo/src/main/java/org/netuno/addon/calcolo/web/CalcoloWeb.java`

Il package definito nella classe sarà quindi:

```java
package org.netuno.addon.calcolo.web;
```

Per fare in modo che la classe definisca un servizio web multi-applicativo personalizzato, deve estendere la classe `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calcolo.web;

import org.netuno.tritao.Web;

public class CalcoloWeb extends Web {
    // ...
}
```

Per definire l'URL del servizio, fai:

```java
package org.netuno.addon.calcolo.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calcolo/Calcolo")
public class CalcoloWeb extends Web {
    // ...
}
```

Il metodo da sovrascrivere affinché il servizio funzioni è il metodo `run`:

```java
package org.netuno.addon.calcolo.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calcolo/Calcolo")
public class CalcoloWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Definiamo quindi, usando alcune risorse di Netuno, il metodo `run` in modo che riceva il parametro `operazione`, che stabilirà quale operazione usare tra `piu` (addizione) e `meno` (sottrazione), e i parametri `x` e `y` che saranno gli operandi (addendi nel caso dell'addizione, minuendo e sottraendo rispettivamente nel caso della sottrazione).

Poi, in base all'operazione scelta, il nostro servizio calcolerà il risultato e lo restituirà all'utente in formato JSON:

```java
package org.netuno.addon.calcolo.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calcolo/Calcolo")
public class CalcoloWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req richiesta = resource(Req.class);
        Out uscita = resource(Out.class);
        Val valore = resource(Val.class);

        String operazione = richiesta.getString("operazione", "piu");
        double x = richiesta.getDouble("x", 0);
        double y = richiesta.getDouble("y", 0);

        double risultato = 0;

        if (operazione.equalsIgnoreCase("meno")) {
            risultato = x - y;
        } else {
            risultato = x + y;
        }

        uscita.json(valore.map().set("risultato", risultato));
    }
}
```

Ora non resta che compilare la classe, assicurandoti che il file `CalcoloWeb.class` si trovi nella cartella:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calcolo/web/`

Oppure produrre un file JAR, assicurandoti che si trovi nella cartella:

- `netuno/lib/`

Avvia il server Netuno con qualsiasi applicazione:

```bash
./netuno server app=demo
```

Per effettuare chiamate a questo servizio, è necessario aggiungere `.netuno` alla fine dell'URL:

- `http://localhost:9000/addon/calcolo/Calcolo.netuno`

Ad esempio, se effettui una chiamata a:

- `http://localhost:9000/addon/calcolo/Calcolo.netuno?operazione=meno&x=5&y=2`

Riceverai in risposta:

```js
{"risultato":3}
```

Puoi vedere i file completi del progetto in questo [link](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

Nel prossimo tutorial impareremo come creare una risorsa di Netuno usando Java.