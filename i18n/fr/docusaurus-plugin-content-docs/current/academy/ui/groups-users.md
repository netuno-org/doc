---
sidebar_position: 6
id: groups-users
title: Groupes et Utilisateurs
---

## Création et Édition

Cette section est le centre administratif de votre application. Ici, vous gérez les identifiants, les niveaux de privilège et vous auditez les activités réalisées dans le système, garantissant que chaque utilisateur a exactement accès à ce dont il a besoin.

#### Prérequis
- **Accès à Netuno :** Il est nécessaire d'être connecté à votre instance et d'avoir la permission **Administrateur**.
- **Application créée :** Il est nécessaire d'avoir une application précédemment créée. En savoir plus : [Guide de l'interface : Créer une application](/docs/academy/app-create).
- **Formulaires :** Ayez au moins un ou deux formulaires créés. En savoir plus : [Guide de l'interface : Créer un formulaire](/docs/academy/ui/forms).

### Menu

Permet d'accéder aux configurations pour la gestion de la sécurité, des utilisateurs, des groupes et la surveillance des journaux.

![menu-acces-fr.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Accédez au « mode visualisation » et cliquez sur "Developer" dans le coin supérieur droit de l'écran.

## Mot de passe

Permet la modification du mot de passe d'accès au système.

En cliquant sur "Developer" dans le coin supérieur droit de l'écran, accédez à la section « Mot de passe ».

- Saisissez votre ancien mot de passe.
- Entrez votre nouveau mot de passe. **Il doit contenir au minimum 8 caractères, incluant des chiffres, des lettres majuscules et minuscules, et des caractères spéciaux.**
- Confirmez le mot de passe et cliquez sur le bouton **Enregistrer**.
- Après cette action, un message de succès s'affichera.

![mot-de-passe-fr.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Utilisateur

Cette section est le centre de contrôle pour la gestion des profils utilisateurs.

En cliquant sur "Developer" dans le coin supérieur droit de l'écran, accédez à la section « Utilisateur ».

#### Prérequis

- L'utilisateur à modifier doit être préalablement enregistré dans la base de données.

 ### 1 - Modifier un utilisateur existant

Cette section décrit comment localiser et mettre à jour les informations d'un utilisateur déjà enregistré dans le système.

![modifier-utilisateur-existant-fr.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Comment modifier un utilisateur :**

- Sélectionnez un utilisateur enregistré et modifiez les informations souhaitées.
- Cliquez sur le bouton **Enregistrer** pour confirmer la modification.
- Après cette action, un message de succès sera affiché.

### 2 - Ajouter un nouvel utilisateur

Cette section permet d'enregistrer de nouveaux utilisateurs, en définissant leurs identifiants d'accès et niveaux de permission au sein du système.

![creer-nouvel-utilisateur-fr.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nom :** Saisissez le nom de l'utilisateur.
- **Utilisateur :** Saisissez le nom pour la connexion - il doit contenir uniquement des lettres minuscules et être séparé par un point.
- **Mot de passe :** Saisissez le premier mot de passe d'accès au système du nouvel utilisateur.
- **Email :** Saisissez l'email de contact.
- **Aucune :** Permet de bloquer le mot de passe de l'utilisateur afin qu'il ne puisse pas se connecter.
- **Groupe :** Sélectionnez le groupe principal auquel l'utilisateur appartient.
- **Actif :** Permet d'activer ou de désactiver un utilisateur dans le système.
- **Bouton Enregistrer :** Cliquez pour enregistrer les informations du nouvel utilisateur.

### 3 - Permissions de l'Utilisateur

La gestion des permissions se fait via une interface intuitive organisée par onglets **(Formulaires et Rapports)**.

Cela vous permet de configurer en détail ce que l'utilisateur peut accéder dès sa création ou lors d'une modification.

Dans les colonnes **Lire, Écrire et Supprimer**, vous trouverez un menu déroulant avec différents niveaux de portée :

- **Rien :** L'utilisateur n'a aucune permission pour cette action.
- **Propriétaire :** L'utilisateur ne peut interagir qu'avec les enregistrements qu'il a lui-même créés.
- **Groupe :** L'utilisateur peut interagir avec les enregistrements créés par n'importe quel membre de son groupe.
- **Tout :** Permission totale. L'utilisateur accède aux enregistrements de tous les utilisateurs et groupes.

#### Onglet Formulaires

Dans cet onglet, vous contrôlez l'interaction de l'utilisateur avec les modules de saisie de données de l'application.

![permissions-utilisateur-formulaires-fr.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Pour chaque formulaire listé, vous devez définir les paramètres suivants :

- **Actif :** Définit la visibilité. Si coché, le formulaire apparaîtra dans le menu latéral pour l'utilisateur.
- **Lire :** Établit le niveau de permission uniquement pour la visualisation des enregistrements.
- **Écrire :** Définit si l'utilisateur a la permission d'insérer de nouvelles données ou de modifier des informations existantes.
- **Supprimer :** Définit si l'utilisateur a l'autorité pour supprimer des enregistrements de la base de données.

#### Onglet Rapports

Similaire aux formulaires, cet onglet contrôle l'accès aux modules de visualisation et d'extraction de données analytiques.

![permissions-utilisateur-rapports-fr.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Pour qu'un rapport soit disponible, l'option **Actif** doit être sélectionnée pour que l'utilisateur ait la permission de le visualiser.

- **Enregistrer :** Cliquez sur le bouton "Enregistrer" pour sauvegarder les modifications.

### 4 - Boutons d'Action

![boutons-action-fr.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Enregistrer :** Enregistre toutes les modifications effectuées.

 - **Effacer :** Efface tous les champs du formulaire, revenant à l'état initial « Ajouter un nouvel utilisateur ».

 - **Incarner :** Un outil puissant de Netuno. Après avoir enregistré les permissions d'un utilisateur et cliqué sur le bouton **"Incarner"**, il est possible de visualiser le système exactement comme l'utilisateur enregistré l'utilisera. Cela est essentiel pour tester si les permissions ont été configurées correctement.

 - **Supprimer :** Supprime définitivement l'enregistrement de l'utilisateur.

## Groupe

Ici se trouve le panneau central pour la gestion des profils d'accès dans Netuno, permettant d'exécuter deux actions : **« Ajouter »** un nouveau groupe et **« Modifier »** un groupe existant.

Un groupe fonctionne comme un profil ou une règle d'accès qui détermine ce que chaque ensemble d'utilisateurs peut visualiser ou réaliser dans le système.

Au lieu de configurer les permissions individuellement pour chaque utilisateur, vous les définissez dans le groupe et liez les utilisateurs à celui-ci, garantissant une administration évolutive et organisée.

En cliquant sur **"Developer"** dans le coin supérieur droit de l'écran, accédez à la section **"Groupe"**.

#### Prérequis

- **Accès Administratif :** Il est nécessaire de posséder un profil avec des permissions d'administrateur pour créer ou modifier des groupes.

### Comment Ajouter un Nouveau Groupe

![ajouter-nouveau-groupe-fr.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Localisez la section "Ajouter".
- **Nom :** Donnez un nom clair et descriptif au groupe.
- **Autoriser la connexion :** Cochez cette option si les utilisateurs de ce groupe doivent pouvoir se connecter au système.
- **Administrateur :** Cochez cette option uniquement si les utilisateurs de ce groupe ont un accès total au système.
- **Email :** Saisissez un email de contact pour le groupe.
- **Actif :** Cochez cette option pour activer les configurations dans le système.
- **Bouton Enregistrer :** Cliquez pour enregistrer les configurations du groupe.
- **Bouton Effacer :** Cliquez pour effacer tous les champs du formulaire.

### Comment Modifier un Groupe Existant

![modifier-groupe-existant-fr.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Sélectionnez le groupe enregistré dans le champ "Modifier le groupe existant" en haut de la page.
- Cliquez sur la case à cocher "Sélectionner un groupe".
- Choisissez le groupe que vous souhaitez modifier dans la liste.
- Attendez que les données du groupe remplissent automatiquement les champs (Nom, Email et les options).
- Effectuez les modifications souhaitées et cliquez sur "Enregistrer".

## Historique des Enregistrements

L'écran "Historique des Enregistrements" est l'outil de journalisation et d'audit de votre application.

Lorsqu'un utilisateur crée, modifie ou supprime un enregistrement dans n'importe quel formulaire, le système sauvegardera un « journal » de cette action.

Cette page vous permet de rechercher et filtrer tout cet historique. Cela est essentiel pour :

 - **Sécurité :** Surveiller les activités suspectes ou non autorisées.

 - **Audit :** Tenir un registre de conformité de toutes les modifications de données.

 - **Diagnostic :** Comprendre comment un enregistrement spécifique est arrivé à son état actuel. Exemple : « qui a supprimé ce client ? ».

### Comment Rechercher l'Historique des Enregistrements

![journal-fr.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Remplissez un ou plusieurs champs "Filtres" pour trouver les journaux d'activité que vous souhaitez rechercher, puis cliquez sur le bouton "Rechercher".

- Accédez à la page "Historique des Enregistrements".
- Remplissez les filtres souhaités pour limiter votre recherche. Il n'est pas nécessaire de remplir tous les champs. Exemple : Pour voir tout ce que l'utilisateur "Developer" a fait aujourd'hui :
- Sélectionnez "Developer" dans le champ Utilisateur.
- Dans le champ Début, sélectionnez la date et l'heure d'aujourd'hui.
- Dans le champ Fin, sélectionnez la date et l'heure d'aujourd'hui.
- Cliquez sur le bouton "Rechercher".
- Les résultats (la liste des journaux) s'afficheront sous le formulaire de recherche.

## Déconnexion

Cliquez sur « Déconnexion » pour mettre fin à votre session dans le système en toute sécurité.