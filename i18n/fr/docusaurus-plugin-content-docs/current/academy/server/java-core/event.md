---
id: event
title: Événements
sidebar_label: Événement
sidebar_position: 6
---

Netuno permet d'injecter des événements pendant une phase de son exécution.
Par exemple, nous pouvons injecter un événement qui s'exécute juste avant que le setup ne construise la base de données
(ce qui fonctionne à peu près comme définir un script dans `netuno/apps/mon_app/server/setup/_start.js`)
ou un événement qui s'exécute juste après que le traitement de construction de la base de données soit terminé
(ce qui serait analogue au `netuno/apps/mon_app/server/setup/_end.js`).

Pour cela, nous devons étendre la classe `org.netuno.tritao.event.EventBase`. Nous allons également définir notre package, qui sera le même que celui défini dans les tutoriels précédents de services et de ressources du Java Core.

```java
package org.netuno.addon.calcul.evenement;

import org.netuno.tritao.event.EventBase;

public class EvenementDebutSetup extends EventBase {
    // ...
}
```

Ensuite, nous créons le constructeur qui utilise le constructeur de la super-classe `EventBase` pour initialiser l'événement :

```java
package org.netuno.addon.calcul.evenement;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EvenementDebutSetup extends EventBase {

    public EvenementDebutSetup(Proteu proteu, Hili hili) {
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
package org.netuno.addon.calcul.evenement;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EvenementDebutSetup extends EventBase {

    public EvenementDebutSetup(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

Pour référence, la liste complète de tous les types d'événements disponibles se trouve dans :

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

Pour revenir à notre code, terminons en redéfinissant la fonction `run` :

```java
package org.netuno.addon.calcul.evenement;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EvenementDebutSetup extends EventBase {

    public EvenementDebutSetup(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values data) {
        System.out.println("ÉVÉNEMENT PERSONNALISÉ DE DÉMARRAGE DU SETUP "+ data.toJSON());
    }

}
```

L'argument `data` permet à l'événement de recevoir des données supplémentaires. Pour l'instant, il n'est utilisé que dans les événements liés aux actions. Par exemple, nous pouvons créer un événement qui s'exécute à chaque fois que quelque chose est enregistré dans la base de données et qui écrit ensuite un message dans la console de Netuno :
```java
package org.netuno.addon.calcul.evenement;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EvenementActionSauvegarde extends EventBase {

    public EvenementActionSauvegarde(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values data) {
        DataItem elementDonnees = data.get("dataItem");
        System.out.println("ENREGISTREMENT " + elementDonnees.getFormName());
        // ou
        System.out.println("ENREGISTREMENT " + data.get("dataItem", DataItem.class).getFormName());
    }

}
```

Maintenant, il suffit de compiler la classe, en vous assurant que le fichier `.class` se trouve dans le dossier :

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calcul/evenement/`

Ou de produire un fichier JAR, en vous assurant qu'il se trouve dans le dossier :

- `netuno/lib/`

Vous pouvez voir les fichiers complets du projet sur ce [lien](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event).