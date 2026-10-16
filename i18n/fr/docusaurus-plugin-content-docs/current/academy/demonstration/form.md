---
sidebar_position: 3
id: form
title: Formulaire
---


# Formulaire

Dans cette étape de la démonstration, vous allez créer le formulaire **Tâche** et configurer le premier champ de données.

:::info Référence
Pour une explication plus détaillée sur les formulaires, consultez le [Guide d'interface : Formulaires](/docs/academy/ui/forms).
:::

## Objectif

À la fin de cette étape, vous aurez :

- Un formulaire appelé **Tâche**.
- Une table associée dans la base de données.
- Un champ obligatoire pour stocker le nom de la tâche.
- Une interface prête à créer, modifier, rechercher et supprimer des enregistrements.

## Prérequis

Vérifiez que :

- L'application de démonstration a déjà été créée.
- L'étape de configuration a déjà été terminée.
- Vous êtes dans l'espace de développement de la plateforme.

## Créer le formulaire

1. En haut à droite, cliquez sur **Construire**.
2. Dans le menu principal, accédez à **Gestion > Formulaires**.
3. Dans **Titre du formulaire**, saisissez `Tâche`.
4. Dans **Nom de la table**, activez l'option **Auto**.
5. Cliquez sur **Enregistrer**.

:::note
- **Titre du formulaire** définit le nom affiché dans le menu latéral.
- **Nom de la table** définit l'identifiant technique utilisé dans la base de données.
:::

Après avoir enregistré, le formulaire **Tâche** sera disponible dans le menu latéral gauche.

## Créer le premier champ

Une fois le formulaire créé :

1. Dans le menu latéral, cliquez sur **Tâche**.
2. Dans **Nom d'affichage**, saisissez `Nom`.
3. Confirmez que le nom technique a été généré automatiquement en lettres minuscules.
4. Activez l'option **Clé primaire** (champ unique).
5. Activez l'option **Non nul** (champ obligatoire).
6. Dans **Type**, sélectionnez `text`.
7. Cliquez sur **Enregistrer**.

:::tip
- **Clé primaire** garantit des valeurs uniques pour chaque enregistrement.
- **Non nul** rend la saisie obligatoire.
- Le type `text` permet de stocker du texte simple.
:::

## Valider le résultat

Ouvrez l'espace de visualisation et confirmez que :

- Le formulaire **Tâche** est disponible.
- Le champ **Nom** apparaît pour la saisie.
- Il est possible de créer un nouvel enregistrement.
- Le champ **Nom** est obligatoire.

:::info Résultat attendu
Si la configuration est correcte, le formulaire sera prêt pour les opérations de création, modification, recherche et suppression d'enregistrements.
:::

## Étapes suivantes

Passez à l'étape suivante de **Base de données** pour explorer et modifier l'application de démonstration.