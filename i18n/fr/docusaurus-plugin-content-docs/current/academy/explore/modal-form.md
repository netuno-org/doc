---
id: modal-form
title: Formulaire Modal
---

Création et gestion de formulaires dans des fenêtres modales.
## Introduction

La modale est une fonctionnalité d'interface utilisateur (UI) qui permet d'ouvrir un formulaire sans que l'utilisateur ait besoin de quitter la page actuelle.

L'utilisation de modales améliore considérablement l'expérience utilisateur (UX), en permettant l'exécution d'opérations **CRUD (Créer, Lire, Mettre à jour, Supprimer)** sans avoir besoin de recharger la page ni de perdre le contexte de l'écran actuel.

Netuno gère automatiquement la communication avec le backend et l'injection du HTML nécessaire.


#### Prérequis

Pour mettre en œuvre les exemples, vous aurez besoin de :

- Accès à l'environnement de développement de votre application Netuno.
- Un formulaire correctement configuré dans le panneau d'administration (backoffice) de Netuno.
- Connaissances de base en JavaScript et en manipulation d'événements dans le DOM.

Dans les exemples suivants, nous utiliserons un formulaire générique appelé **« test »**.

Si vous avez des doutes sur ces étapes, consultez : [Formulaires](/docs/academy/ui/forms).

## Structure de base

La création et la manipulation de modales dans Netuno sont centralisées dans l'objet `netuno.modal`.

La méthode **netuno.modal.create()** crée la structure de base de la modale dans l'interface. Elle reçoit un objet de configuration avec les propriétés suivantes :

- **name (String) :** Le nom du formulaire (créé dans le backoffice) qui servira de base à la modale.
- **callback (Function) :** Fonction exécutée dès que la structure de la modale est injectée dans le DOM (mais avant d'être affichée) ; elle reçoit en paramètre l'élément de la modale créée.

### Fonction Callback

À l'intérieur de la fonction callback, vous devrez définir quel sera l'état (mode) du formulaire en utilisant les fonctions de chargement natives :

- **Mode Liste - `netuno.loadForm()`** : Affiche le tableau de recherche et de listage des enregistrements de ce formulaire.

- **Mode Édition/Création - `netuno.loadFormEdit()`** : Affiche les champs de saisie du formulaire. Peut être utilisé pour insérer un nouvel enregistrement ou modifier un existant.

## Implémentation
Ci-dessous, nous détaillons trois scénarios d'utilisation les plus courants.

### 1. Mode Liste

`netuno.loadForm()` est utilisé lorsque vous souhaitez que l'utilisateur visualise toutes les données d'un formulaire sous forme de tableau (grid) de recherche.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modale) {
    // 1. Localise le conteneur interne destiné à recevoir le formulaire
    let conteneurFormulaire = modale.find('[netuno-form]');
    // 2. Injecte la liste de données du formulaire dans le conteneur
    netuno.loadForm(conteneurFormulaire); 
    // 3. Affiche la modale à l'utilisateur
    netuno.modal.show(modale);
  }
});
```
### 2. Mode Création

`netuno.loadFormEdit()` est utilisé pour les boutons de type « Ajouter Nouveau ». Ouvre le formulaire vierge, prêt pour la saisie de données.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modale) {
    let conteneurFormulaire = modale.find('[netuno-form]');
    // Charge le formulaire en mode insertion (nouvel enregistrement)
    netuno.loadFormEdit(conteneurFormulaire); 
    netuno.modal.show(modale);
  }
});
```

:::info
Lorsque vous utilisez `netuno.loadFormEdit()` sans passer d'**ID**, Netuno comprend que vous souhaitez utiliser l'« écran d'édition » à partir de zéro. Il charge l'interface avec les champs vides, prêts pour la création d'un nouvel enregistrement. Dans ce scénario, Netuno déclenche en interne l'événement `netuno:new`.
:::

### 3. Mode Édition

Si vous avez besoin que la modale charge un enregistrement spécifique pour modification, vous devez passer l'**UID** ou l'**ID** de l'enregistrement comme deuxième paramètre dans la fonction de chargement.

```jsx
// Exemple : Modification de l'enregistrement d'ID 1234
const identifiantEnregistrement = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modale) {
    let conteneurFormulaire = modale.find('[netuno-form]');
    // Injecte les données de l'enregistrement 1234 dans les champs du formulaire
    netuno.loadFormEdit(conteneurFormulaire, identifiantEnregistrement); 
    netuno.modal.show(modale);
  }
});
```


## Événements

Le conteneur du formulaire (`[netuno-form]`) émet des événements personnalisés qui accompagnent le cycle de vie de l'interaction de l'utilisateur. 

Il est recommandé d'utiliser ces événements pour déclencher des logiques métier spécifiques à votre frontend (comme mettre à jour des tableaux en arrière-plan, afficher des alertes, etc.).

| TYPE D'ÉVÉNEMENT   | DESCRIPTION    |
| ------- |--------------|
| ` netuno:new` | Déclenché lorsque l'écran de création d'un nouvel élément est affiché. |
| `netuno:edit` | Déclenché lorsque l'écran d'édition d'un élément existant est affiché. |
| `netuno:save` | Déclenché lorsqu'un nouvel élément est ajouté. |
| `netuno:back` | Déclenché après le clic sur le bouton de retour. |
| `netuno:delete` | Déclenché après la suppression d'un élément. |


### Exemple : Interception de plusieurs événements

Dans cet exemple prêt pour la production, nous créons la modale et ajoutons des *listeners* pour suivre le succès des opérations de l'utilisateur :

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modale) {
    let conteneurFormulaire = modale.find('[netuno-form]');
    
    // Surveillance de l'écran d'insertion
    conteneurFormulaire.on('netuno:new', function(evenement) {
       console.info("Interface de création chargée.");
    });

    // Surveillance d'un enregistrement réussi
    conteneurFormulaire.on('netuno:save', function(evenement) {
       console.success("L'enregistrement a été sauvegardé avec succès !");
       // Exemple : Fermer la modale automatiquement après sauvegarde
       netuno.modal.hide(modale); 
    });

    // Rendu de la modale en mode liste et affichage
    netuno.loadForm(conteneurFormulaire);
    netuno.modal.show(modale);
  }
});
```
Si vous rencontrez des difficultés ou avez des suggestions d'amélioration, contactez-nous.
Notre équipe et notre communauté sont prêtes à vous aider.

Bon développement !