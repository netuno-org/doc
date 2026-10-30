---
id: web-service 
title: Wieloaplikacyjna usługa webowa 
sidebar_label: Usługa webowa
sidebar_position: 4
---

W tym samouczku utworzymy wieloaplikacyjną usługę webową dla Netuno. Oznacza to, że utworzymy usługę webową w Javie, która będzie znajdować się w katalogu głównym Netuno i będzie mogła być używana przez dowolną aplikację w folderze `apps`.

Przykładem, który utworzymy, zgodnie z poprzednimi samouczkami, jest usługa `kalkulator`, czyli przykładowa usługa wykonująca proste operacje arytmetyczne.

Aby rozpocząć, najpierw należy utworzyć strukturę folderów projektu. W tym przykładzie zakładamy, że projekt zostanie utworzony w folderze o nazwie `Kalkulator`. Należy więc utworzyć strukturę folderów odzwierciedlającą nazwę pakietu (w naszym przykładzie `org.netuno.addon.kalkulator`). Nasza struktura folderów będzie zatem następująca:

- `Kalkulator/src/main/java/org/netuno/addon/kalkulator/web/`

W tej strukturze utworzymy klasę Java o nazwie `KalkulatorWeb`, która zdefiniuje naszą niestandardową usługę webową:

- `Kalkulator/src/main/java/org/netuno/addon/kalkulator/web/KalkulatorWeb.java`

Zatem pakiet zdefiniowany w klasie będzie następujący:

```java
package org.netuno.addon.kalkulator.web;
```

Aby klasa definiowała niestandardową wieloaplikacyjną usługę webową, musi rozszerzać klasę `org.netuno.tritao.Web`:

```java
package org.netuno.addon.kalkulator.web;

import org.netuno.tritao.Web;

public class KalkulatorWeb extends Web {
    // ...
}
```

Aby zdefiniować adres URL usługi, należy zrobić tak:

```java
package org.netuno.addon.kalkulator.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/kalkulator/Kalkulator")
public class KalkulatorWeb extends Web {
    // ...
}
```

Metodą, którą należy przesłonić, aby usługa działała, jest metoda `run`:

```java
package org.netuno.addon.kalkulator.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/kalkulator/Kalkulator")
public class KalkulatorWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Następnie, korzystając z niektórych zasobów Netuno, zdefiniujmy metodę `run` tak, aby otrzymywała parametr `operacja`, który określi, której operacji użyć spośród `plus` (dodawanie) i `minus` (odejmowanie), oraz parametry `liczba1` i `liczba2`, które będą operandami (składnikami w przypadku dodawania, odjemną i odjemnikiem w przypadku odejmowania).

Następnie, na podstawie wybranej operacji, nasza usługa obliczy wynik i zwróci go użytkownikowi w formacie JSON:

```java
package org.netuno.addon.kalkulator.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/kalkulator/Kalkulator")
public class KalkulatorWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String operacja = req.getString("operacja", "plus");
        double liczba1 = req.getDouble("liczba1", 0);
        double liczba2 = req.getDouble("liczba2", 0);

        double wynik = 0;

        if (operacja.equalsIgnoreCase("minus")) {
            wynik = liczba1 - liczba2;
        } else {
            wynik = liczba1 + liczba2;
        }

        out.json(val.map().set("wynik", wynik));
    }
}
```

Teraz wystarczy skompilować klasę, upewniając się, że plik `KalkulatorWeb.class` znajduje się w folderze:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/kalkulator/web/`

Lub utworzyć plik JAR, upewniając się, że znajduje się w folderze:

- `netuno/lib/`

Uruchom serwer Netuno z dowolną aplikacją:

```bash
./netuno server app=demo
```

Aby wywołać tę usługę, należy dodać `.netuno` na końcu adresu URL:

- `http://localhost:9000/addon/kalkulator/Kalkulator.netuno`

Na przykład, jeśli wywołasz:

- `http://localhost:9000/addon/kalkulator/Kalkulator.netuno?operacja=minus&liczba1=5&liczba2=2`

Otrzymasz w odpowiedzi:

```js
{"wynik":3}
```

Pełne pliki projektu możesz zobaczyć pod tym [linkiem](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

W następnym samouczku dowiemy się, jak utworzyć zasób Netuno przy użyciu Javy.