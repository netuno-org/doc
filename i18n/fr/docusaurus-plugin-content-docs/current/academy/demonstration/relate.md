---
sidebar_position: 5
id: relate
title: Relier les données
description: Reliez les tâches et les enregistrements d'heures pour savoir qui a exécuté quelle tâche et combien de temps a été passé.
---

# Relier les données

Créez une relation entre les tâches et les enregistrements d'heures pour savoir **qui** a exécuté **quelle tâche** et **combien de temps** a été passé.

À la fin de cette étape, le formulaire **Enregistrement** sera relié à la table **Tâche**, ce qui permettra de visualiser la tâche associée directement dans la liste des enregistrements.

## Prérequis

Avant de commencer, vérifiez que vous avez déjà terminé :

- La création du formulaire **Tâche** avec le champ `nom`.
- La création du formulaire **Enregistrement** avec les champs de base des heures travaillées.
- La configuration des tables correspondantes dans la **Base de données**.

:::tip
Pour plus de détails sur la façon de relier des données, consultez le [Guide de l'interface : Relations](/docs/academy/ui/relationships-between-forms).
:::

Jusqu'ici, vous avez créé une gestion de tâches et un enregistrement d'heures, mais chaque liste fonctionne encore de manière isolée.  

Il est important de les relier, afin que chaque enregistrement d'heures indique clairement quelle tâche a été réalisée par un collaborateur et sur quelle période.

Dans cette étape, vous allez :

- Créer un champ de type `select` dans le formulaire **Enregistrement**.
- Configurer le champ pour qu'il soit relié à la table **Tâche**.
- Mettre à jour quelques données pour voir la relation fonctionner en pratique.

## Champ de type `select`

Ajoutez un champ qui permettra de sélectionner la tâche associée à chaque enregistrement d'heures.

1. Dans l'environnement **Construire**, ouvrez le formulaire **Enregistrement** et accédez à la gestion des champs.
2. Créez un nouveau champ avec les configurations suivantes :
   - **Titre du champ** : `Tâche`
   - **Nom de la colonne** : `tache_id`
   - **Type** : `select`
3. Activez l'option **Obligatoire** pour garantir que chaque enregistrement soit associé à une tâche.
4. Laissez l'option **Valeurs uniques** désactivée, car il y aura de nombreux enregistrements pour la même tâche.

:::note
Nous suggérons le nom `tache_id` pour maintenir un standard de nommage cohérent dans tout le modèle de données.
:::

## Utiliser le suffixe `_id`

Le nom du champ qui fait référence à un autre enregistrement doit se terminer par `_id`.  
Ce standard facilite l'identification du fait que le champ représente une relation avec une autre table et rend le modèle de données plus organisé.

:::warning
Évitez d'utiliser des noms génériques comme `tache` ou `ref_tache` pour les champs de relation.  
Standardiser avec `_id` aide à éviter la confusion lorsque vous analysez des données ou créez des intégrations.
:::

## Configurer le lien de relation

Configurez le **Lien**, qui est responsable de relier le champ `tache_id` à la table des tâches.

1. Dans le champ nouvellement créé (`tache_id`), faites défiler jusqu'à la section de configuration de **Lien**.
2. Cliquez sur **Ajouter**.
3. Dans la fenêtre qui s'ouvre :
   - Sélectionnez l'option **tache**.
   - Ensuite, sélectionnez le champ **nom**.
   - Fermez la fenêtre pour appliquer.

Une fois terminé, le **Lien** sera défini comme :

```text
tache:nom
```

Cela signifie que :

- La relation sera faite avec la table **tache**.
- Dans l'interface, la valeur du champ **nom** de la tâche sera affichée lors de la sélection dans le champ `Tâche`.

Cliquez sur le bouton **Enregistrer** pour sauvegarder la configuration du champ.

:::tip
Dans la mesure du possible, utilisez un champ descriptif (comme `nom`) pour afficher l'information liée, plutôt qu'un identifiant technique ou numérique.
:::

## Mettre à jour les enregistrements

Une fois le champ de relation configuré, ajustez les données pour visualiser le résultat.

1. Accédez à la vue du formulaire **Enregistrement**.
2. Notez que la table de résultats possède maintenant une nouvelle colonne appelée **Tâche**, qui sera initialement vide.
3. Modifiez quelques enregistrements :
   - Cliquez sur une ligne dans la table de résultats pour ouvrir le formulaire d'édition.
   - Dans le champ **Tâche**, sélectionnez la tâche correspondante.
   - Cliquez sur **Enregistrer** pour sauvegarder.

**Après avoir enregistré :**

- La colonne **Tâche** dans la table de résultats affichera désormais le nom de la tâche associée.
- Chaque **Enregistrement** sera clairement relié à une **Tâche**, permettant une analyse plus complète du temps passé sur chaque activité.

:::note
S'il existe de nombreux enregistrements sans tâche définie, envisagez de faire la mise à jour par lots ou de définir une tâche par défaut temporaire, selon votre politique de données.
:::

### Résultat attendu

La liste de **Enregistrement** devra afficher :

- Une colonne **Tâche** remplie avec les noms des tâches associées.
- Chaque ligne représentant un enregistrement d'heures avec sa tâche respective, ce qui permet d'identifier plus simplement où le temps a été investi.

## Prochaines étapes

Dans le prochain sujet, vous verrez comment créer un **Service** pour exposer ces données et les utiliser dans d'autres parties de l'application, comme des rapports ou des interfaces personnalisées.