---
sidebar_position: 4
id: queries-interface
title: Interface des requêtes
---


L'outil de requête de Netuno est une ressource puissante qui permet une interaction directe avec la base de données de l'application via SQL (Structured Query Language).

Cette fonctionnalité est essentielle pour tester des logiques métier, valider des informations stockées et établir les bases pour des rapports ou des composants d'interface complexes. Netuno prend actuellement en charge trois systèmes de gestion de base de données : **PostgreSql, H2 Database et MySQL**.

## 1 - Section Requête

En mode « Construire », dans le menu latéral, accédez à la zone « Gestion » et cliquez sur la section « Requête ».

![Interface de requêtes](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Zone de commandes

Cette zone est l'environnement d'interaction directe avec la base de données du projet. Ici, il est possible d'exécuter des commandes pour consulter, rechercher et analyser des données de manière précise et instantanée.

Assurez-vous que la syntaxe utilisée est compatible avec la base de données configurée dans votre environnement Netuno.

![Zone de requête de base de données](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Zone de validation

La zone de validation fournit un retour instantané sur la syntaxe et l'exécution de votre code.

- **Succès (Vert) :** Lorsque la requête est exécutée sans erreurs de syntaxe ou de structure, le message est affiché avec un fond vert. Cela indique que les données ont été traitées et sont prêtes à être visualisées.

![Zone de validation réussie](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Échec ou Erreur (Rouge) :** S'il y a un quelconque empêchement à l'exécution (comme une erreur de syntaxe, un nom de colonne incorrect ou un manque de permission), le message sera affiché avec un fond rouge. Outre la couleur, le système présentera le journal d'erreur technique pour aider au diagnostic.

![Zone de validation échouée](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Zone de résultats

C'est l'endroit où les informations demandées à la base de données sont présentées de manière structurée. Elle vous permet de visualiser le contenu des tables et de confirmer si la logique de votre requête renvoie les enregistrements attendus.

![Zone de résultats de requête](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Boutons d'action

Cette section détaille les outils disponibles pour exécuter, enregistrer et gérer vos scripts SQL, en optimisant le flux de travail et la réutilisation de requêtes complexes.

Il permet non seulement l'exécution de commandes en temps réel, mais aussi une gestion intelligente de la productivité grâce à des enregistrements historiques et des bibliothèques de scripts enregistrés.

![Boutons d'action de requête](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Bouton - Exécuter

- **Fonction :** Envoie le script présent dans la zone « Commandes » pour être traité par la base de données.

- **Retour :** Après l'exécution, le système affiche un message de succès (en vert) et remplit automatiquement la « Zone de résultats » avec les données demandées.

### 5.2 Bouton - Historique

- **Fonction :** Enregistre les requêtes exécutées récemment, en affichant le temps d'exécution (en millisecondes) et l'enregistrement de « date/heure » de chaque action.

- **Récupération rapide :** En cliquant sur n'importe quel enregistrement de la liste d'historique, le script correspondant est inséré à nouveau dans la zone « Commandes » pour être exécuté ou modifié.

![Bouton historique des commandes de requête](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Bouton - Enregistrer

**Fonction :** Permet de stocker des scripts utiles et de les transformer en modèles permanents. Cela est utile pour les requêtes complexes qui doivent être exécutées fréquemment.

**Étapes pour enregistrer :**

- Avec le script prêt dans l'éditeur, cliquez sur Enregistrer.

- Dans la fenêtre modale « Enregistrer la commande », saisissez un « Nom » clair pour identifier la fonction de la requête (ex. : « Filtrer les produits par prix »).

- Cliquez sur le bouton Enregistrer dans la modale pour confirmer le stockage.

![Bouton enregistrer la commande de requête](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Bouton - Enregistrement

**Fonction :** Permet de lister tous les scripts qui ont été enregistrés précédemment.

- **Charger un script :** Cliquez sur le script souhaité pour l'ajouter à la zone « Commandes ».

- **Supprimer :** Utilisez l'icône de corbeille à côté de chaque enregistrement pour le supprimer définitivement après confirmation.

![Bouton des commandes enregistrées de requête](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)