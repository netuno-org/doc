---
sidebar_position: 12
id: permissions
title: Permissions
sidebar_label: Permissions
---

Comment l'accès au back-office est contrôlé par des rôles et des organisations.

## Introduction

CLUAR contrôle l'accès au back-office via des **rôles** (groupes), attribués à des personnes au sein d'une **organisation**. Chaque service REST du serveur est classé dans une catégorie d'accès, et seul celui qui a le bon rôle, dans la bonne organisation, peut l'utiliser.

## Rôles

Il existe 5 rôles pré-créés (`user_group`) :

| Code | Nom |
|---|---|
| `administrator` | Administrateur |
| `editor` | Éditeur |
| `author` | Auteur |
| `contributor` | Collaborateur |
| `subscriber` | Abonné |

:::info Tous les rôles n'ont pas encore de permissions attribuées
Aujourd'hui, seuls **Administrateur** et **Éditeur** ont effectivement accès à quelque chose — ce sont les seuls rôles référencés dans les règles d'accès (voir ci-dessous). Auteur, Collaborateur et Abonné existent déjà comme option dans le formulaire, mais n'ont encore aucun accès configuré ; attribuer l'un de ces rôles à quelqu'un ne lui donne, aujourd'hui, accès à rien dans le back-office.
:::

## Organisation

Une personne n'a un rôle **que dans le contexte d'une organisation** — le lien est fait dans `Organisation > Membres` (`organization_people`), associant Personne + Organisation + Rôle.

Aujourd'hui, il n'existe qu'une seule organisation, avec le code `admins`, et c'est dans celle-ci que toutes les permissions sont vérifiées. L'entité `organization` supporte une hiérarchie (`parent_id`, organisations « parentes »), mais cette hiérarchie n'est pas encore utilisée dans les règles de permission actuelles — toutes les vérifications pointent directement vers l'organisation `admins`.

## Premier accès au mode d'édition

CLUAR distingue deux endroits différents où l'on se connecte :

- Le **back-office de Netuno** (port `9000` en développement) — c'est là que l'on gère directement les utilisateurs Netuno (`netuno_user`, le couple nom d'utilisateur/mot de passe) et toutes les entités, y compris Personne et Rôles.
- L'**Espace Réservé** du site lui-même (`/login`, port `3000` en développement) — c'est là que l'éditeur de contenu se connecte au quotidien, pour accéder au mode d'édition des pages.

Pour entrer dans l'Espace Réservé et avoir le mode d'édition disponible, il faut un utilisateur Netuno avec un identifiant qui soit associé à une **Personne**, liée à l'organisation `admins` avec le rôle **Administrateur** ou **Éditeur** (voir [Organisation](#organização) ci-dessus).

### Utilisateur par défaut

Le `server/setup/030-people.js` de CLUAR crée déjà, par défaut, une Personne "admin" liée à l'utilisateur Netuno d'`id: 2`, et le `server/setup/050-organization_people.js` lie déjà cette Personne à l'organisation `admins` avec le rôle **Administrateur** — autrement dit, cet utilisateur naît déjà avec un accès total.

L'identifiant de cet utilisateur par défaut est :

```
utilisateur: admin
mot de passe: admin
```

Avec ces identifiants, il est possible d'entrer directement dans l'Espace Réservé (`/login`) en tant qu'Administrateur — sans avoir besoin d'aucune étape supplémentaire dans le back-office de Netuno au préalable.

:::info Changez le mot de passe par défaut en production
`admin`/`admin` est un identifiant connu et prévisible. Avant qu'un site ne passe en production, changez le mot de passe de cet utilisateur (ou créez un nouvel Administrateur et désactivez celui-ci).
:::

### Créer de nouveaux utilisateurs

Il existe deux voies possibles :

**Par l'Espace Réservé (recommandé) :** dans `Utilisateurs > Créer un utilisateur`, un seul formulaire demande le nom, le nom d'utilisateur, le mot de passe, l'e-mail, l'Organisation et le Rôle — et crée tout d'un coup : l'utilisateur Netuno, la Personne (déjà liée à cet utilisateur) et le lien à l'organisation/rôle choisis. Pas besoin de passer par le back-office de Netuno.

**Uniquement par le back-office de Netuno :** comme le back-office donne un accès direct à toutes les entités, il est également possible de faire les mêmes 3 étapes manuellement, sans quitter celui-ci :

1. Créer l'utilisateur Netuno (`netuno_user`), avec le nom d'utilisateur/mot de passe choisis.
2. Créer une **Personne**, en l'associant à cet utilisateur Netuno.
3. Dans `Organisation > Membres`, associer cette Personne à l'organisation `admins`, avec le rôle Administrateur ou Éditeur.

Dans les deux cas, la personne créée peut déjà se connecter à `/login` et avoir accès au mode d'édition.

## Comment les permissions sont appliquées

Chaque service du serveur est classé dans l'une de ces catégories, définies dans `server/core/_service_config.js` :

| Catégorie | Qui a accès | Exemples |
|---|---|---|
| **Publics** | N'importe qui, sans connexion | Contact, avatar, connexion |
| **Gestion de contenu** | Administrateur + Éditeur | Pages, versions, composants, dictionnaire, actions |
| **Administration du site** | Administrateur uniquement | Configurations, langues, synchronisation |
| **Gestion des accès** | Administrateur uniquement | Organisations, personnes, utilisateurs |

Tout service qui n'est pas listé dans l'une de ces catégories est **refusé par défaut** — c'est une décision délibérée du code (commentée explicitement dans le fichier), afin qu'oublier de classer un nouveau service résulte en un blocage, et non en un accès libre par négligence.

:::info Les permissions ne sont pas appliquées en environnement de développement
En environnement `dev`, le `_service_config.js` libère tous les services dès le début, avant toute vérification — autrement dit, **les permissions ne sont réellement appliquées qu'en production/staging**. Lors de tests locaux, tout utilisateur connecté a accès à tout, indépendamment du rôle.
:::

## Interface : le menu filtre aussi par permission

Outre le blocage côté serveur, le menu latéral de l'Espace Réservé (`website/src/components/SideMenu`) filtre également les éléments visibles en fonction du rôle de la personne connectée — afin de ne pas afficher des options qu'elle n'aurait pas la permission d'utiliser.

:::info Maintenir les deux listes synchronisées
La liste de « qui peut voir quoi » dans `SideMenu` est maintenue manuellement alignée avec `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` et `ACCESS_MANAGEMENT_PATHS` du `_service_config.js` — ce sont deux listes séparées, une dans le frontend et l'autre dans le backend. Lors de l'ajout d'un nouveau service protégé, il faut mettre à jour les deux ; ne changer que le serveur masque l'erreur (le menu continue à afficher une option qui en pratique sera refusée), et ne changer que le menu ne protège rien du tout.
:::

## Comment protéger un nouveau service

1. Créez le service normalement dans `server/services/`.
2. Ajoutez le chemin du service (`path/method`) à la liste correcte dans `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` ou `ACCESS_MANAGEMENT_PATHS` — selon qui doit pouvoir l'utiliser. S'il est public, ajoutez-le à `PUBLIC_PATHS`.
3. Si le service a un élément correspondant dans le menu de l'Espace Réservé, mettez également à jour le `SideMenu` pour que le filtre corresponde à la permission réelle.