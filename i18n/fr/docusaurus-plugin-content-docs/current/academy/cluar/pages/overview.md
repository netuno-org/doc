---
sidebar_position: 1
id: overview
title: Vue d'ensemble
sidebar_label: Vue d'ensemble
---

La **Page** est l'entité centrale de CLUAR : elle représente une URL du site web. Chaque page appartient à une seule langue — il n'existe pas de page « multilingue » unique, chaque langue a sa propre page (avec son propre `link`, titre, contenu, etc.), et elles sont liées entre elles uniquement par l'action de [clonage](/docs/academy/cluar/pages/cloning).

## Champs

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre de la page. |
| **Lien** (`link`) | L'URL de la page (ex. : `/a-propos-de-nous`). |
| **Langue** (`language_id`) | Langue à laquelle cette page appartient. |
| **Parent** (`parent_id`) | Page parente, utilisée pour construire la hiérarchie/le fil d'Ariane et les sous-menus. |
| **Modèle** (`template`) | Modèle utilisé pour rendre la page (voir [Modèles](/docs/academy/cluar/templates)). C'est une liste déroulante dans le formulaire, remplie dynamiquement avec les dossiers existants dans `website/src/pages/Template/`. |
| **État** (`status_id`) | Brouillon ou Publiée — reflète l'état de la version actuelle. |
| **Menu** (`menu`) | Si coché, la page apparaît dans le menu de navigation. |
| **Titre du menu** (`menu_title`) | Titre alternatif à afficher dans le menu (si vide, utilise le Titre de la page). |
| **Navigable** (`navigable`) | Contrôle si la page est accessible directement (même sans apparaître dans le menu). |
| **Ordre** (`sorter`) | Position de la page parmi ses « sœurs » (même `parent_id`). |
| **Description** / **Mots-clés** | Balises meta SEO (`<meta name="description">` / `<meta name="keywords">`). |
| **Description pour les réseaux sociaux** / **Image pour les réseaux sociaux** | Utilisées dans les balises Open Graph (`og:description`, `og:image`) lorsque la page est partagée. |

## Prochaine étape

Chaque page a plusieurs versions et passe par un flux de publication — voir [Versions et publication](/docs/academy/cluar/pages/versions-publishing).