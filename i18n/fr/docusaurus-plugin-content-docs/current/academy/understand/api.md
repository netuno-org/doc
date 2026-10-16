---
sidebar_position: 3
id: api
title: API
---

Netuno dispose d'un framework propre pour créer des API REST de manière low-code, avec prise en charge de JWT (JSON Web Token) et OpenAPI 3.0.

Tout le framework pour le développement de services web dans Netuno est très polyvalent, permettant de réaliser tout type de développement.

Le framework apporte déjà de nombreuses fonctionnalités pour le développement low-code, économisant de nombreuses lignes de code pour réaliser les besoins les plus courants comme envoyer des mails, consommer d'autres API REST, s'intégrer avec d'autres bases de données, générer des fichiers PDF et Excel, envoyer des SMS, manipuler des données de la base de données, entre beaucoup d'autres.

Et lorsqu'il n'existe pas de solutions dans le framework de Netuno, il est possible d'intégrer facilement des bibliothèques Java, Kotlin ou même JavaScript déjà existantes pour développer des ressources sur mesure et les intégrer au framework de Netuno.

## JWT - JSON Web Token

Le [JWT.io](https://jwt.io/) est la spécification du standard pour le passage des données du contexte de session vers le client, via un objet JSON.

Ainsi, le serveur n'a pas besoin de conserver les données sensibles des utilisateurs connectés en session, mais il s'agit d'un token qui est transmis au client, et par la suite, à chaque requête, ce token doit être renvoyé.

Ce token subit certains contrôles de sécurité, comme le délai de validité et un processus permettant de créer un nouveau token sans exiger une nouvelle authentification.

Netuno intègre la prise en charge de JWT, c'est simple et facile à utiliser, et fonctionne également de manière intégrée avec les utilisateurs et l'authentification native de Netuno.

## OpenAPI 3.0

Après le succès de Swagger v1 et v2 qui sont depuis longtemps devenus un standard pour le développement de la définition des services web et la génération du code client.

Ainsi, Swagger a rendu sa définition ouverte et est devenu [OpenAPI 3](https://www.openapis.org/).

Où il continue d'être la base pour définir le standard de la documentation de l'API et de la génération des clients pour consommer l'API.

Netuno apporte déjà toute l'intégration avec OpenAPI 3.0 et utilise la définition de l'OpenAPI avec la validation du [JSON Schema](https://json-schema.org/).

Cela signifie que Netuno permet également de valider l'entrée et la sortie des services web, en recourant à la validation du schéma JSON obtenu et retourné, comme suit :

- `Entrée` : Si un appel au service web ne respecte pas la structure et les validations, alors il est rejeté
- `Sortie` : Si les données retournées ne respectent pas la structure et les validations définies, alors une alerte est générée indiquant que le service web n'est pas conforme.

Ainsi, non seulement Netuno épargne la création de nombreux `if`s dans le code pour la validation des données reçues, mais garantit également une validation du résultat que le service web génère, en réalisant un _test unitaire_.

De plus, la structure de l'OpenAPI générée par Netuno peut être utilisée avec l'[Éditeur Swagger](https://editor.swagger.io/) pour générer l'interface de tests, la documentation et le code pour les clients de l'API dans d'autres technologies.

## Basique

Netuno prend également en charge la création de services web et l'authentification sans complications, c'est-à-dire qu'il n'est pas obligatoire d'utiliser JWT ou OpenAPI, bien que ce soit la recommandation par défaut.

Souvent, pour accélérer la création de l'API ou dans des situations impliquant la communication entre serveurs, on choisit de simplifier au maximum et de gagner du temps.

> Netuno permet de réaliser l'[authentification HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).