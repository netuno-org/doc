---
sidebar_position: 12
id: permissions
title: Permissions
sidebar_label: Permissions
---

Comment l'accès au back-office est contrôlé par rôles et organisations.

## Introduction

CLUAR contrôle l'accès au back-office via des **rôles** (groupes), attribués à des personnes au sein d'une **organisation**. Chaque service REST du serveur est classé dans une catégorie d'accès, et seul celui qui possède le rôle approprié, au sein de l'organisation appropriée, peut l'utiliser.

## Rôles

Il existe 5 rôles pré-créés (`user_group`) :

| Code | Nom |
|---|---|
| `administrator` | Administrateur |
| `editor` | Éditeur |
| `author` | Auteur |
| `contributor` | Contributeur |
| `subscriber` | Abonné |

:::info Tous les rôles n'ont pas encore de permissions attribuées
Aujourd'hui, seuls **Administrateur** et **Éditeur** ont réellement accès à quelque chose — ce sont les seuls rôles référencés dans les règles d'accès (voir ci-dessous). Auteur, Contributeur et Abonné existent déjà comme options dans le formulaire, mais n'ont encore aucun accès configuré ; attribuer l'un de ces rôles à quelqu'un ne lui donne, aujourd'hui, accès à rien dans le back-office.
:::

## Organisation

Une personne n'a un rôle **que dans le contexte d'une organisation** — le lien est effectué dans `Organisation > Membres` (`organization_people`), en associant Personne + Organisation + Rôle.

Aujourd'hui, il n'existe qu'une seule organisation, avec le code `admins`, et c'est dans celle-ci que toutes les permissions sont vérifiées. L'entité `organization` prend en charge une hiérarchie (`parent_id`, organisations « parentes »), mais cette hiérarchie n'est pas encore utilisée dans les règles de permission actuelles — toutes les vérifications pointent directement vers l'organisation `admins`.

## Premier accès au mode d'édition

CLUAR distingue deux endroits différents où l'on se connecte :

- Le **back-office de Netuno** (port `9000` en développement) — c'est là que l'on gère directement les utilisateurs Netuno (`netuno_user`, le couple nom d'utilisateur/mot de passe) et toutes les entités, y compris Personne et Rôles.
- La **Zone Réservée** du site lui-même (`/login`, port `3000` en développement) — c'est là que l'éditeur de contenu se connecte au quotidien, pour accéder au mode d'édition des pages.

Pour entrer dans la Zone Réservée et avoir le mode d'édition disponible, il faut un utilisateur Netuno avec un identifiant qui soit associé à une **Personne**, liée à l'organisation `admins` avec le rôle **Administrateur** ou **Éditeur** (voir [Organisation](#organisation) ci-dessus).

### Utilisateur par défaut

Le fichier `server/setup/030-people.js` de CLUAR crée déjà, par défaut, une Personne « admin » liée à l'utilisateur Netuno d'`id: 2`, et le fichier `server/setup/050-organization_people.js` lie déjà cette Personne à l'organisation `admins` avec le rôle **Administrateur** — autrement dit, cet utilisateur est déjà créé avec un accès total.

Les identifiants de connexion de cet utilisateur par défaut sont :

```
utilisateur: admin
mot de passe: admin
```

Avec ces identifiants, on peut entrer directement dans la Zone Réservée (`/login`) en tant qu'Administrateur — sans avoir besoin d'aucune étape supplémentaire dans le back-office de Netuno au préalable.

:::info Changez le mot de passe par défaut en production
`admin`/`admin` est un identifiant connu et prévisible. Avant qu'un site ne passe en production, changez le mot de passe de cet utilisateur (ou créez un nouvel Administrateur et désactivez celui-ci).
:::

### Créer de nouveaux utilisateurs

Il existe deux voies possibles :

**Par la Zone Réservée (recommandé) :** dans `Utilisateurs > Créer un utilisateur`, un seul formulaire demande nom, nom d'utilisateur, mot de passe, e-mail, Organisation et Rôle — et crée tout d'un coup : l'utilisateur Netuno, la Personne (déjà liée à cet utilisateur) et le lien vers l'organisation/rôle choisis. Il n'est pas nécessaire de passer par le back-office de Netuno.

**Uniquement via le back-office de Netuno :** comme le back-office donne un accès direct à toutes les entités, il est également possible de faire les mêmes 3 étapes manuellement, sans en sortir :

1. Créer l'utilisateur Netuno (`netuno_user`), avec le nom d'utilisateur/mot de passe choisis.
2. Créer une **Personne**, en l'associant à cet utilisateur Netuno.
3. Dans `Organisation > Membres`, associer cette Personne à l'organisation `admins`, avec le rôle Administrateur ou Éditeur.

Dans les deux cas, la personne créée peut déjà se connecter à `/login` et avoir accès au mode d'édition.

## Comment les permissions sont appliquées

Chaque service du serveur est classé dans l'une de ces catégories, définies dans `server/core/cluar.permission.*` :

| Catégorie | Qui a accès | Exemples |
|---|---|---|
| **Publics** | N'importe qui, sans connexion | Contact, avatar, connexion |
| **Gestion de contenu** | Administrateur + Éditeur | Pages, versions, composants, dictionnaire, actions |
| **Administration du site** | Administrateur uniquement | Paramètres, langues, synchronisation |
| **Gestion des accès** | Administrateur uniquement | Organisations, personnes, utilisateurs |

Tout service qui n'est pas listé dans l'une de ces catégories est **refusé par défaut** — il s'agit d'une décision délibérée du code (commentée explicitement dans le fichier), afin qu'oublier de classer un nouveau service entraîne un blocage, et non un accès libre par négligence.

:::info Les permissions ne sont pas appliquées en environnement de développement
En environnement `dev`, le fichier `cluar.permission.*` libère tous les services dès le début, avant toute vérification — autrement dit, **les permissions ne sont réellement appliquées qu'en production/staging**. Lors de tests locaux, tout utilisateur connecté a accès à tout, quel que soit son rôle.
:::

## Interface : le menu filtre aussi selon la permission

Outre le blocage côté serveur, le menu latéral de la Zone Réservée (`website/src/components/SideMenu`) filtre également les éléments visibles en fonction du rôle de la personne connectée — afin de ne pas afficher des options qu'elle n'aurait pas la permission d'utiliser.

:::info Garder les deux listes synchronisées
La liste de « qui peut voir quoi » dans `SideMenu` est maintenue manuellement en phase avec `cluar.permission.*`, `cluar.permission.*` et `cluar.permission.*` du `cluar.permission.*` — ce sont deux listes séparées, une dans le frontend et une dans le backend. Lors de l'ajout d'un nouveau service protégé, il faut mettre à jour les deux ; ne changer que le serveur masque l'erreur (le menu continue d'afficher une option qui, en pratique, sera refusée), et ne changer que le menu ne protège rien de facto.
:::

## Comment protéger un nouveau service

1. Créez le service normalement dans `server/services/`.
2. Ajoutez le chemin du service (`path/method`) à la liste correcte dans `server/core/cluar.permission.*` — `cluar.permission.*`, `cluar.permission.*` ou `cluar.permission.*` — selon qui doit pouvoir l'utiliser. S'il est public, ajoutez-le à `cluar.permission.*`.
3. Si le service a un élément correspondant dans le menu de la Zone Réservée, mettez également à jour le `SideMenu` pour que le filtre corresponde à la permission réelle.