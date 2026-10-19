---
sidebar_position: 5
id: languages
title: Langues
sidebar_label: Langues
---

Comment le CLUAR gère les langues du site web et le contenu multilingue.

## Introduction

Le CLUAR est multilingue par défaut : chaque **Page** est associée à une langue, et le site web présente un sélecteur permettant au visiteur de basculer entre les langues disponibles.

Les langues sont gérées dans le backoffice, via le formulaire **Langue**.

## Champs

| Champ | Description |
|---|---|
| **Code** (`code`) | Code international de la langue (ex. : `PT`, `EN`). C'est la valeur utilisée pour associer du contenu (pages, dictionnaire, configurations) à cette langue. |
| **Localisation** (`locale`) | Localisation complète (ex. : `pt`, `en`). C'est la valeur utilisée dans le lien des pages et lors du changement de langue via le code. |
| **Par défaut** (`default`) | Marque cette langue comme la langue préférée du site web — c'est celle qui est chargée par défaut. |
| **Description** (`description`) | Nom de la langue présenté au visiteur (ex. : « Portugais »). |

## Sélection de la langue sur le site web

Il existe aujourd'hui deux sélecteurs de langue dans le projet :

- **En-tête du site public** (`website/src/base/Header`) — le sélecteur traditionnel, réalisé avec le [Menu d'Ant Design](https://ant.design/components/menu/). Lors du changement de langue, il navigue vers `/{locale}/`. Il ne liste que les langues qui ont déjà des pages publiées (via `Cluar.pages()`), afin de ne pas afficher d'options vides.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — utilisé dans l'Espace Réservé (`ReservedArea`). C'est un menu déroulant plus simple : il change la langue active et recharge la page actuelle, sans naviguer vers une autre route.

## Par programmation

La classe `website/src/common/Cluar.js` met à disposition des fonctions pour travailler avec les langues :

- `Cluar.defaultLanguage()` — obtient la langue marquée par défaut.
- `Cluar.currentLanguage()` — obtient la langue active à ce moment.
- `Cluar.changeLanguage(codeOuLocalisation)` — active une autre langue par programmation (accepte aussi bien le `code` que le `locale`).
- `Cluar.languages()` — obtient la liste de toutes les langues.

## Prochaine étape

Découvre comment le contenu de chaque langue est organisé dans les [Pages](/docs/academy/cluar/pages/overview).