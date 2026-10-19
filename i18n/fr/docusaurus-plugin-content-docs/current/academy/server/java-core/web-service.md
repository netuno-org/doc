---
id: web-service 
title: Service Web Multi-Application
sidebar_label: Service Web
sidebar_position: 4
---

Dans ce tutoriel, nous allons créer un service web multi-application pour Netuno. Cela signifie que nous allons créer un service web en Java qui sera placé dans le répertoire de base de Netuno et qui pourra être utilisé par n'importe quelle application dans le dossier `apps`.

L'exemple que nous allons créer, en suivant les tutoriels précédents, est le service `calcul`, qui est un service d'exemple qui effectue des opérations arithmétiques simples.

Pour commencer, il est d'abord nécessaire de créer la structure de dossiers du projet. Dans cet exemple, nous considérerons que le projet sera créé dans un dossier nommé `Calcul`. Il faut donc créer la structure de dossiers qui reflète le nom du package (dans notre exemple, `org.netuno.addon.calcul`). Notre structure de dossiers sera donc :

- `Calcul/src/main/java/org/netuno/addon/calcul/web/`

Dans cette structure, nous allons créer une classe Java appelée `CalculWeb`, qui définira notre service web personnalisé :

- ` Calcul/src/main/java/org/netuno/addon/calcul/web/CalculWeb.java`

Alors le package défini dans la classe sera :

```java
package org.netuno.addon.calcul.web;
```

Pour que la classe définisse un service web multi-application personnalisé, cette classe doit étendre la classe `org.netuno.tritao.Web` :

```java
package org.netuno.addon.calcul.web;

import org.netuno.tritao.Web;

public class CalculWeb extends Web {
    // ...
}
```

Pour définir l'URL du service, faites :

```java
package org.netuno.addon.calcul.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calcul/Calcul")
public class CalculWeb extends Web {
    // ...
}
```

La méthode qui doit être redéfinie pour que le service fonctionne est la méthode `run` :

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

Nous allons donc, en utilisant certaines ressources de Netuno, définir la méthode `run` pour qu'elle reçoive le paramètre `op`, qui définira quelle opération utiliser entre `plus` (addition) et `moins` (soustraction), et les paramètres `x` et `y` qui seront les opérandes (termes dans le cas de l'addition, diminuende et diminuteur respectivement dans le cas de la soustraction).

Ensuite, en fonction de l'opération choisie, notre service calculera le résultat et le retournera à l'utilisateur au format JSON :

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
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String op = req.getString("op", "plus");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double résultat = 0;

        if (op.equalsIgnoreCase("moins")) {
            résultat = x - y;
        } else {
            résultat = x + y;
        }

        out.json(val.map().set("résultat", résultat));
    }
}
```

Maintenant, il suffit de compiler la classe, en s'assurant que le fichier `CalculWeb.class` se trouve dans le dossier :

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calcul/web/`

Ou produire un fichier JAR, en s'assurant qu'il se trouve dans le dossier :

- `netuno/lib/`

Démarrez le serveur Netuno avec n'importe quelle application :

```bash
./netuno server app=demo
```

Pour faire des appels à ce service, il est nécessaire d'ajouter `.netuno` à la fin de l'URL :

- `http://localhost:9000/addon/calcul/Calcul.netuno`

Par exemple, si vous faites un appel à :

- `http://localhost:9000/addon/calcul/Calcul.netuno?op=moins&x=5&y=2`

Vous recevrez en retour :

```js
{"résultat":3}
```

Vous pouvez voir les fichiers complets du projet dans ce [lien](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

Dans le prochain tutoriel, nous apprendrons comment créer une ressource Netuno en utilisant Java.