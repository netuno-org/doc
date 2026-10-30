---
sidebar_position: 4
id: databases
title: Base de Données
---

# Base de Données

Dans cette étape, nous allons explorer la **base de données** créée automatiquement à partir du formulaire **Tâche** défini précédemment.

Lors de la création du formulaire **Tâche** avec le champ **Nom**, Netuno a créé dans la base de données la table `tache` avec la colonne `nom`, conformément aux noms définis lors de la création du formulaire.

Les **noms techniques** des champs (par exemple, `tache`, `nom`, `tache_id`) sont utilisés dans la programmation et dans les requêtes SQL, et ne correspondent pas aux noms d'affichage présentés dans l'interface.

## Requêtes

Dans cette section, nous allons exécuter des requêtes directement dans la base de données en utilisant l'interface de gestion de Netuno.

1. Accédez à l'environnement **Construire**.
2. Dans le menu, cliquez sur **Gestion > Requête**.
3. Dans l'éditeur de requête, collez et exécutez les commandes ci-dessous.

### Requêtes Simples

Listez uniquement le nom des tâches :

```sql
SELECT nom
FROM tache;
```

Listez tous les champs de la table des tâches :

```sql
SELECT *
FROM tache;
```

Listez tous les champs de la table des enregistrements :

```sql
SELECT *
FROM enregistrement;
```

Listez tous les champs de la table des travailleurs :

```sql
SELECT *
FROM travailleur;
```

En cliquant sur **Exécuter**, Netuno génère une table de résultats pour **chaque** commande séparée par un point-virgule (`;`).  
Cela est utile lorsque vous souhaitez exécuter plusieurs requêtes en une seule fois.

### Requête avec Relations

Maintenant, exécutez une requête qui relie toutes les tables :

```sql
SELECT
  tache.nom,
  enregistrement.debut,
  enregistrement.fin,
  travailleur.nom
FROM tache
INNER JOIN enregistrement
  ON tache.id = enregistrement.tache_id
INNER JOIN travailleur
  ON travailleur.id = enregistrement.travailleur_id;
```

Cette requête renvoie :

- Le nom de la tâche.
- Le début et la fin de chaque enregistrement.
- Le nom du travailleur associé à chaque enregistrement.

Elle démontre comment les relations entre les tables permettent de combiner des informations de différentes entités de l'application.

## Diagramme

Pour visualiser la structure de la base de données de manière plus intuitive, utilisez le **Diagramme** de Netuno.

1. Accédez à l'environnement **Construire**.
2. Dans le menu, cliquez sur **Gestion > Diagramme**.

Dans le Diagramme, vous pouvez :

- Agrandir ou réduire le zoom.
- Exporter le diagramme en tant qu'image.

Ces actions sont disponibles dans les boutons situés à droite du panneau du diagramme.

Netuno crée automatiquement les lignes avec des flèches de relation en fonction de la configuration des **Liens** dans les champs (par exemple, les champs de type `select` qui pointent vers d'autres tables).

## Bonnes Pratiques

Lors de la modélisation de votre base de données dans Netuno, suivez ces bonnes pratiques :

- Utilisez le suffixe `_id` dans les champs qui représentent des relations, par exemple :
  - `tache_id`
  - `travailleur_id`
- Évitez d'utiliser des noms de tables et de champs au pluriel, comme `taches`, `enregistrements` ou `travailleurs`.

Éviter le pluriel aide à :

- Garder les noms plus courts et lisibles.
- Réduire les ambiguïtés lors de l'écriture de requêtes.
- Faciliter la lecture dans les formulaires et les diagrammes, en particulier lorsqu'il y a plusieurs relations.

:::tip Standard de nommage
Par défaut, utilisez toujours des **noms au singulier** pour les formulaires, les tables et les champs.  
Exemples : `tache`, `enregistrement`, `travailleur`, `tache_id`, `travailleur_id`.
:::

## Prochaine Étape

Passez à l'étape suivante de **Relier les Données** pour continuer avec l'application de démonstration.