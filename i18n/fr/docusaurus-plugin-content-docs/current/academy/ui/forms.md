---
sidebar_position: 2
id: forms
title: Formulaires
---

## Comment créer des formulaires

La gestion des formulaires est la zone où vous pouvez créer et administrer les structures de données de votre application. Chaque formulaire que vous créez ici devient une interface dans le back-office pour insérer, modifier et visualiser des données, et correspond à une table dans la base de données.

Il est divisé en deux étapes essentielles et obligatoires, accompagné d'une brève approche du **regroupement de formulaires** et du **mode diagramme**.

![gestion-formulaires-fr.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Titre du formulaire

C'est le nom de votre formulaire, donc insérez un nom clair et intuitif. 
Il sera affiché dans le menu latéral du back-office dans les sections suivantes : **Formulaires** (en mode Visualisation) et **Gérer les champs** (en mode Construction).

![formulaire-nom-titre-fr.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Nom de la table

C'est le nom technique qui sera utilisé pour créer la table correspondante dans la base de données. Ce nom est utilisé en interne par le système et par les développeurs.

**Comment remplir :**

- **Manuel :** Saisissez un nom unique au singulier, avec des lettres minuscules et sans espaces ni caractères spéciaux (utilisez le format `snake_case`, par exemple : enregistrement_client).
- **Automatique :** Cochez la case **Auto** à côté du champ. Le système générera automatiquement un nom technique basé sur le **Titre du formulaire**. C'est la pratique recommandée pour maintenir la cohérence.
- 

![formulaire-nom-table-fr.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Regroupement de formulaires (Parent)

Ce champ permet de créer une hiérarchie entre les formulaires. En sélectionnant un « Parent », vous définissez que le formulaire actuel est un sous-élément du formulaire sélectionné. Il sera affiché dans le menu latéral dans les sections suivantes : « Formulaires » (en mode Visualisation) et « Gérer les champs » (en mode Construction) du formulaire principal associé.

**Comment remplir :**

- Laissez vide s'il s'agit d'un formulaire principal (comme « Client »).
- Sélectionnez un formulaire existant dans la liste si vous souhaitez créer une relation de dépendance. Par exemple, un formulaire « Adresses » pourrait avoir « Client » comme parent.

![regroupement-formulaires-parent-fr.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Options de contrôle

Ces cases à cocher activent des fonctionnalités spécifiques pour le formulaire.

- **Afficher l'Id :** Cochez cette option si vous souhaitez que le champ d'identification unique (ID) de chaque enregistrement soit visible dans la liste des données du formulaire.
- **Contrôle par Actif :** Active un contrôle de statut (Actif/Inactif) pour chaque enregistrement. Cela permet de désactiver un élément sans avoir à le supprimer de la base de données.
- **Contrôle par Utilisateur :** Fait en sorte que chaque enregistrement créé dans le formulaire soit associé à l'utilisateur qui l'a créé. C'est utile pour suivre qui a effectué chaque enregistrement.
- **Contrôle par Groupe :** Associe chaque enregistrement à un groupe d'utilisateurs. Cette option est couramment utilisée pour gérer les permissions d'accès aux données en fonction des groupes enregistrés dans le système.

![options-controle-formulaire-fr.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Paramètres de tri et utilisateurs associés

Ces champs définissent des valeurs par défaut pour les nouveaux enregistrements et l'ordre d'affichage.

- **Réordonner :** Définissez un nombre pour l'ordre dans lequel ce formulaire apparaîtra dans le menu latéral. Les nombres plus petits (comme 0, 1, 2) apparaissent en premier.
- **Utilisateur :** Sélectionnez un utilisateur par défaut qui sera associé aux nouveaux enregistrements, si le « Contrôle par Utilisateur » est activé. « Général » signifie qu'il n'y a pas d'utilisateur spécifique.
- **Groupe :** Sélectionnez un groupe par défaut qui sera associé aux nouveaux enregistrements, si le « Contrôle par Groupe » est activé. « Général » signifie qu'il n'y a pas de groupe spécifique.

![parametres-tri-et-utilisateurs-associes-fr.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Mode Diagramme

L'écran **Diagramme** offre une visualisation graphique de toute la structure de données de votre application. Connu sous le nom de Diagramme Entité-Relation (DER), il affiche tous les formulaires (qui représentent des tables dans la base de données), leurs champs respectifs et les connexions entre eux.
Cet outil est essentiel pour comprendre rapidement comment les informations de votre application sont organisées et connectées, facilitant l'analyse et le développement.

![diagramme-formulaire-fr.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Essayez de créer plusieurs formulaires, champs et visualisez-les en mode diagramme !

## Étape suivante

Enregistrez le formulaire et passez à l'étape suivante : création de champs !

Consultez [ici](/docs/academy/ui/fields) comment commencer à créer des champs.