---
id: event
title: Événements
sidebar_label: Événement
sidebar_position: 6
---

Netuno vous permet d'injecter des événements pendant une phase de son exécution.
Par exemple, nous pouvons injecter un événement qui s'exécute juste avant que le setup construise la base de données
(ce qui fonctionne à peu près comme définir un script dans `netuno/apps/mon_app/server/setup/_start.js`)
ou un événement qui s'exécute juste après que le traitement de construction de la base de données soit terminé
(ce qui serait analogue à `netuno/apps/mon_app/server/setup/_end.js`).

Pour cela, nous devons étendre la classe `org.netuno.tritao.event.EventBase`. Nous allons également définir notre paquet, qui sera le même que celui défini dans les tutoriels précédents sur les services et ressources du Java Core.

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EvenementSetupDebut extends EventBase {
    // ...
}
```

Ensuite, nous créons le constructeur qui utilise le constructeur de la super-classe `EventBase` pour initialiser l'événement :

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EvenementSetupDebut extends EventBase {

    public EvenementSetupDebut(Proteu proteu, Hili hili) {
        // ...
    }
}
```

En plus des objets de type `Proteu` et `Hili`, nous devons passer au constructeur de la super-classe
le type d'événement. Les types d'événements sont définis dans `import org.netuno.tritao.event.EventId`.
Nous devons également passer au constructeur un nombre entier qui représente l'ordre d'exécution de l'événement.
Ainsi, en enregistrant plusieurs événements pour le même type d'événement, il est possible de contrôler lequel des événements sera exécuté en premier, lequel sera exécuté juste après, et ainsi de suite.
Un nombre comme `100` est bien parce qu'il est possible de placer d'autres événements qui s'exécuteront avant lui (par exemple, `50`).

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EvenementSetupDebut extends EventBase {

    public EvenementSetupDebut(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Pour référence, la liste complète de tous les types d'événements disponibles peut être trouvée sur :

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Revenons à notre code, nous allons finaliser en redéfinissant la fonction `run` :

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EvenementSetupDebut extends EventBase {

    public EvenementSetupDebut(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values donnees) {
        System.out.println("ÉVÉNEMENT PERSONNALISÉ DE DÉMARRAGE DE CONFIGURATION "+ donnees.toJSON());
    }

}
```

L'argument `donnees` sert à ce que l'événement reçoive des données supplémentaires. Pour l'instant, il n'est utilisé que dans les événements liés aux actions. Par exemple, nous pouvons créer un événement qui s'exécute chaque fois que quelque chose est enregistré dans la base de données et écrit alors un message dans la console de Netuno :
```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EvenementActionEnregistrement extends EventBase {

    public EvenementActionEnregistrement(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values donnees) {
        DataItem elementDonnees = donnees.get("dataItem");
        System.out.println("ENREGISTREMENT " + elementDonnees.getFormName());
        // ou
        System.out.println("ENREGISTREMENT " + donnees.get("dataItem", DataItem.class).getFormName());
    }

}
```

Maintenant, il ne reste plus qu'à compiler la classe, en vous assurant que le fichier `.class` se trouve dans le dossier :

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

Ou produire un fichier JAR, en vous assurant qu'il se trouve dans le dossier :

- `netuno/lib/`

Vous pouvez voir les fichiers complets du projet dans ce [lien](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).