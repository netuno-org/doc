---
sidebar_position: 3
id: tutorials
title: Tutoriels
sidebar_label: Tutoriels
---

# Tutoriels

Explorez les tutoriels de la plateforme Netuno et apprenez, concrètement, à configurer des ressources, modéliser des données, créer des interfaces et développer la logique métier côté backend.

Cette page rassemble les principaux contenus pour les débutants comme pour ceux qui souhaitent approfondir l’utilisation de la plateforme.

## Avant de commencer

Avant de démarrer un tutoriel, vérifiez que votre environnement est prêt :

- **Netuno installé** et en cours d’exécution dans l’environnement local ou de développement.
- **Accès au panneau d’administration** avec les permissions adéquates.
- **Connaissances de base recommandées** en modélisation de données, HTTP et API REST pour mieux profiter des contenus techniques.

Consultez le guide d’[Installation](./installation) avant de continuer.

## Ordre recommandé

S’il s’agit de votre première expérience avec Netuno, suivez cet ordre :

1. Découvrez l’interface graphique.
2. Apprenez à créer des formulaires et des champs.
3. Configurez les relations entre formulaires.
4. Passez aux permissions et aux groupes d’utilisateurs.
5. Explorez les requêtes et les fonctionnalités backend selon les besoins du projet.

## Interface graphique - Frontend

Les tutoriels de cette section s’adressent à ceux qui souhaitent créer et configurer des applications à l’aide de l’interface administrative de la plateforme.

| Tutoriel | Objectif | Niveau |
|---|---|---|
| [Découvrir l’interface graphique](/docs/academy/ui/graphical-interface) | Comprendre la structure du panneau, les menus et les principales fonctionnalités. | Débutant |
| [Formulaires](/docs/academy/ui/forms) | Créer et organiser des formulaires de manière visuelle. | Débutant |
| [Champs](/docs/academy/ui/fields) | Configurer les types de données, les validations et le comportement des champs. | Débutant |
| [Relations entre formulaires](/docs/academy/ui/relationships-between-forms) | Définir les liens entre les données et les relations entre formulaires. | Intermédiaire |
| [Groupes et utilisateurs](/docs/academy/ui/groups-users) | Gérer les permissions, les profils d’accès et l’organisation des utilisateurs. | Intermédiaire |
| [Interface de requêtes](/docs/academy/ui/queries-interface) | Créer des requêtes visuelles pour l’analyse et l’extraction de données. | Intermédiaire |
| [Formulaire modal](/docs/academy/explore/modal-form) | Construire des interactions avancées avec des fenêtres modales. | Avancé |

## Backend

Netuno permet de combiner le low-code avec le développement backend dans différents langages et scénarios. Les tutoriels ci-dessous vous aident à créer des intégrations, manipuler des données et implémenter des règles métier.

### Prérequis

Avant de passer à cette section, il est recommandé de maîtriser :

- L’architecture client-serveur et le protocole HTTP.
- Les structures de données en JSON.
- La logique de programmation en JavaScript, Python ou tout autre langage compatible avec votre flux de développement.

### API et intégrations

| Tutoriel | Objectif | Niveau |
|---|---|---|
| [Services Web REST](/docs/academy/server/services/rest) | Créer et exposer des endpoints pour les applications et systèmes externes. | Intermédiaire |
| [Envoi d’e-mails](/docs/academy/server/services/sending-emails) | Configurer l’envoi d’e-mails transactionnels via SMTP. | Intermédiaire |

### Données et persistance

| Tutoriel | Objectif | Niveau |
|---|---|---|
| [Requêtes par programmation](/docs/academy/server/database/db-query-execute) | Exécuter des requêtes personnalisées et des interactions directes avec la base de données. | Intermédiaire |
| [Form et opérations de base de données](/docs/academy/server/database/db-form-operations) | Contrôler le cycle de vie des données lors des insertions, mises à jour et suppressions. | Intermédiaire |
| [Générer des identifiants uniques (UID/GUID)](/docs/academy/server/services/generate-uid-guid) | Implémenter des identifiants uniques selon les bonnes pratiques. | Intermédiaire |

### Infrastructure et bases de données

| Tutoriel | Objectif | Niveau |
|---|---|---|
| [Configuration de MSSQL](/docs/academy/server/database/mssql) | Connecter et configurer Netuno avec Microsoft SQL Server. | Intermédiaire |
| [Bases de données multiples](/docs/academy/server/database/multiple-databases) | Travailler avec plusieurs bases de données dans le même projet. | Avancé |

### Fonctionnalités avancées

| Tutoriel | Objectif | Niveau |
|---|---|---|
| [Templates](/docs/academy/server/templates) | Créer des structures réutilisables et dynamiques pour accélérer le développement. | Avancé |
| [Jeton JWT](/docs/academy/server/services/jwt) | Implémenter une authentification basée sur des jetons. | Avancé |
| [Développement et débogage en Java](/docs/academy/server/java-core/setup) | Configurer un environnement pour le débogage et les extensions en Java. | Avancé |

:::tip Comment choisir un tutoriel

Utilisez les tutoriels d’**interface graphique** lorsque l’objectif est de configurer l’application visuellement, de structurer les données et d’administrer les ressources via l’interface.  
Utilisez les tutoriels de **backend** lorsqu’il est nécessaire de créer de la logique métier, des intégrations, de l’authentification, des automatisations ou un accès programmatique aux données.
:::

## Étapes suivantes

Après avoir terminé les premiers tutoriels, accédez à l’[Académie Netuno](/docs/academy/overview) pour approfondir vos connaissances dans des domaines spécifiques de la plateforme.


Si vous rencontrez une erreur (bug) ou avez des suggestions de nouvelles fonctionnalités, n’hésitez pas à [Ouvrir une issue sur GitHub](https://github.com/netuno-org/doc). Notre équipe et notre communauté sont prêtes à vous aider.