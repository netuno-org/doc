---
id: access-permissions
title: Accès et permissions
sidebar_label: Accès et permissions
---

Comment gérer les utilisateurs, les groupes et garantir la sécurité de l'application.

## Introduction

La sécurité est l'un des piliers fondamentaux de toute application. Qu'il s'agisse d'une application interne simple ou d'un système complexe avec des milliers d'utilisateurs externes via API.

Netuno offre, nativement, un système robuste de **Contrôle d'accès et de permissions**, fournissant les outils nécessaires pour gérer la sécurité de manière centralisée et efficace. Et élimine la nécessité de développer ces fonctionnalités à partir de zéro.

Parmi les principaux mécanismes de sécurité, on distingue :

- Gestion des utilisateurs et des groupes.
- Contrôle des permissions sur les données et gestion des données.
- Historique détaillé des tentatives d'authentification.
- Blocage automatique par IP après des tentatives d'accès échouées consécutives.
- Authentification intégrée avec LDAP, Google, GitHub, Discord, etc.
- Module d'authentification JWT pour le front-end.
- Entre autres...

## Gestion des utilisateurs

Il s'agit de l'administration des comptes individuels qui accèdent à la plateforme. Chaque utilisateur, service ou intégration qui doit entrer dans le système doit posséder un enregistrement d'utilisateur unique.

Dans la zone de gestion des utilisateurs de Netuno, vous avez un contrôle total sur le cycle de vie de ces comptes :
- **Création** : Enregistrement de nouveaux membres de l'équipe ou clients.
- **Maintenance** : Mise à jour des e-mails, modification des mots de passe et des données d'inscription.
- **Contrôle d'accès** : Blocage rapide de comptes (désactivation) sans nécessiter la suppression des données historiques.

:::tip Guide visuel
Pour obtenir des informations détaillées sur la Gestion des utilisateurs, consultez le [Guide de l'interface : Utilisateurs et Groupes](/docs/academy/ui/groups-users)
:::


## Gestion des groupes

La définition des règles d'autorisation se fait au moyen de Groupes, qui établissent quels menus, formulaires, services et données chaque utilisateur est autorisé à accéder ou à manipuler. Au lieu de configurer les permissions individuellement, l'idéal est de définir les règles dans le Groupe, puis d'associer les utilisateurs à celui-ci. Cette procédure garantit :

- **Évolutivité :** Facilité de gérer des centaines d'utilisateurs.
- **Sécurité :** Risque moindre d'accorder accidentellement des accès indus.
- **Organisation :** Séparation claire entre Administrateurs, Gestionnaires, Superviseurs et utilisateurs en général.

Netuno fournit déjà des groupes natifs comme `dev` et `admin`, et offre une autonomie totale pour créer des groupes personnalisés afin de répondre aux règles métier de votre application.

:::tip Guide visuel
Pour obtenir des informations détaillées sur la Gestion des groupes, consultez le [Guide de l'interface : Utilisateurs et Groupes](/docs/academy/ui/groups-users)
:::


## Contrôle des permissions de données

Pour garantir la fonctionnalité d'un groupe ou les permissions d'un utilisateur, il est crucial d'établir quelles données il est autorisé à manipuler. Dans Netuno, le contrôle d'accès est détaillé et appliqué directement aux Formulaires (tables) de votre application.

Le système utilise une matrice de permissions qui permet de définir, pour chaque fonctionnalité, si un groupe donné possède l'autorisation requise pour :

- **Lire :** Seulement visualiser les enregistrements.
- **Écrire :** Insérer et modifier des enregistrements dans la base de données.
- **Supprimer :** Retirer définitivement des enregistrements.

Cette flexibilité assure la protection des données sensibles, car chaque collaborateur a un accès restreint uniquement aux informations essentielles à l'exécution de ses tâches.

:::tip Guide visuel
Pour obtenir des informations détaillées sur la configuration des permissions de données, consultez le [Guide de l'interface : Utilisateurs et Groupes](/docs/academy/ui/groups-users)
:::

## Historique d'authentification

Pour garantir transparence et contrôle, toutes les tentatives d'accès (réussies ou invalides) sont enregistrées et peuvent être consultées dans l'Historique d'authentification.

Le système surveille et stocke en détail les informations de chaque tentative de connexion de l'utilisateur :

- **IP d'origine :** L'adresse réseau d'où provient la requête.
- **Moment :** Le moment exact de l'action.
- **Accès :** Si l'accès a été autorisé, refusé ou bloqué.

#### Légende des icônes d'accès

🟩 **Cadenas/check_mark, en vert :** Indique un succès. L'utilisateur a fourni les identifiants corrects et la connexion a été autorisée. Indique également que l'IP d'origine a été débloqué.

🟧 **Icône avec « X », en orange :** Indique le nombre de tentatives invalides.

🟥 **Cadenas en rouge :** Indique le blocage de l'IP d'origine.

## Blocage automatique

Netuno dispose d'un système de sécurité actif conçu pour protéger votre application contre les attaques et les accès non autorisés.

Lorsque des activités suspectes sont détectées, comme de multiples tentatives consécutives de connexion invalide, le système bloque automatiquement l'adresse IP d'origine.

Une fois bloquée, l'IP ne pourra plus effectuer de nouvelles requêtes pendant une période déterminée ou jusqu'à ce que le blocage soit supprimé manuellement.

### Configurer les règles de blocage

Cette règle est définie dans les **fichiers de configuration** de l'environnement de votre application « development.json » ou « production.json ».

#### 1. Localisez le fichier de configuration

À la racine de votre projet, naviguez jusqu'au dossier `config`. Ouvrez le fichier correspondant à l'environnement que vous souhaitez protéger :

* Pour le développement : `_development.json`

* Pour la production : `_production.json`

#### 2. Insérez le code de protection
Dans le fichier JSON, localisez la section `auth`. Si elle n'existe pas, insérez le bloc `attempts` comme dans l'exemple ci-dessous :

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Comprendre les paramètres

* `interval` : Fenêtre de temps en **minutes** (exemple : 60 minutes = 1 heure).

* `maxFails` : Nombre maximum d'échecs autorisés dans cet intervalle avant le blocage.


#### 4. Comportement du système

- Après le blocage automatique, l'utilisateur est empêché d'accéder à l'application.

- Par défaut, le système est configuré pour trois tentatives invalides avec un blocage d'une heure. Après cette période, les tentatives sont à nouveau autorisées.

- Ce processus peut être configuré selon les besoins de votre application.


### Débloquer via l'interface

Seul un utilisateur ayant la permission « Administrateur » peut libérer l'accès directement depuis le Back-Office sans avoir besoin d'accéder à la base de données.

1. Accédez au menu de l'application en mode « Visualiser », et cliquez sur la section **« Configuration > Utilisateurs »**.
![section-configuration-utilisateur-fr.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. Dans le champ **« Modifier un utilisateur existant »**, sélectionnez l'utilisateur souhaité.
![selectionner-un-utilisateur-existant-fr.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. Dans la section **« Historique d'authentification »**, vérifiez si le statut « Accès » affiche l'icône « Cadenas » en vert ;
![section-historique-authentification-fr.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Cliquez sur l'icône **Horloge** pour vérifier la liste complète des accès de l'utilisateur.
![historique-authentification-fr.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Cliquez sur le cadenas vert dans la colonne **« Accès »** pour débloquer l'utilisateur. Après cette action, un message de succès est affiché.

La libération est immédiate, permettant à l'utilisateur de tenter à nouveau de se connecter.


## Authentifications intégrées

Votre application peut exiger des méthodes d'entrée plus sophistiquées, surtout si vous construisez une application mobile ou si vous vous intégrez à un réseau d'entreprise.

Netuno a été conçu pour être flexible et s'intégrer à l'écosystème de votre organisation. Outre la connexion standard (utilisateur et mot de passe), la plateforme prend en charge divers protocoles d'authentification du marché.

Cela permet de mettre en œuvre des stratégies de Single Sign-On (Authentification unique), où les utilisateurs accèdent au système en utilisant des identifiants qu'ils possèdent déjà, centralisant la gestion des accès.

**Environnements d'entreprise :** Compatibilité avec les annuaires d'utilisateurs (comme LDAP et Active Directory), idéal pour les intranets et les systèmes internes.

**Connexion sociale (OAuth) :** Possibilité d'intégration avec des fournisseurs comme Google, Microsoft, GitHub, entre autres, facilitant l'inscription et l'accès dans les applications publiques.

## Authentification via token (JWT)

Pour les projets qui utilisent un Front-end dédié (comme des sites en React, Vue.js ou des applications mobiles), l'écran de connexion traditionnel de Netuno n'est pas utilisé. Dans ces scénarios, on adopte le standard JWT (JSON Web Token).

Netuno offre un service natif qui génère et valide ces tokens automatiquement, garantissant sécurité et efficacité dans la communication via API.

:::tip Guide visuel
Pour plus d'informations sur la façon d'implémenter et de configurer le JWT dans vos fichiers de configuration, consultez le [Guide d'authentification JWT](/docs/academy/server/services/jwt)
:::

## Conclusion

Maîtriser les fonctionnalités de sécurité de Netuno est fondamental pour la santé de votre projet. En utilisant correctement les outils de gestion des utilisateurs, des groupes et de suivi de l'historique, vous construisez un environnement qui équilibre protection des données et facilité d'utilisation.

Ainsi, vous garantissez que votre système sur Netuno soit :

- **Sécurisé :** En protégeant les informations sensibles contre les accès non autorisés.

- **Organisé :** En établissant des hiérarchies et des responsabilités claires.

- **Évolutif :** Prêt à croître avec des intégrations modernes.

**Maintenez les bonnes pratiques :** Révisez périodiquement les permissions des groupes et vérifiez l'historique des accès pour maintenir votre environnement sain.