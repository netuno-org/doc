---
sidebar_position: 4
id: content
title: Contenu
sidebar_label: Contenu
---

Le composant texte et image le plus générique de CLUAR.

## Introduction

Le **Contenu** est le composant texte/image le plus générique de CLUAR — utilisé pour des blocs de texte simple, du texte avec une image à côté, ou seulement une image, selon le type choisi.

Il suit le même mécanisme commun à tous les composants, décrit dans [Vue d'ensemble](/docs/academy/cluar/components/overview) et [Types de composant](/docs/academy/cluar/components/types).

## Champs

Outre les [champs communs](/docs/academy/cluar/components/overview#campos-comuns) (Type, Ordre, Mode d'édition, Inverser le fond, Actions), le Contenu possède :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre du bloc de contenu. |
| **Contenu** (`content` / `html_content`) | Texte du bloc. |
| **Image** (`image`) | Image associée (non utilisée dans les types texte uniquement). |
| **Alt de l'image** (`image_alt`) | Texte alternatif de l'image. |
| **Titre de l'image** (`image_title`) | Attribut `title` de l'image. |
| **Largeur maximale de l'image** (`image_max_width`) | Limite la largeur de l'image, en pixels — utile pour éviter que l'image ne s'étire trop sur des écrans larges, notamment dans les types où l'image est placée à côté du texte. |

## Types disponibles

Contrairement au Banner, le Contenu dispose de plusieurs types axés sur différentes dispositions d'image et de texte :

- **Par défaut** (`Default`)
- **Texte** (`TextContent`) — texte uniquement, sans image.
- **Image** (`ImageContent`) — image uniquement, sans texte.
- **Image à gauche** (`ImageLeft`)
- **Image à droite** (`ImageRight`)
- **Image en haut** (`ImageTop`)
- **Image en bas** (`ImageBottom`)

Pour plus de détails sur le fonctionnement des types et sur la création d'un nouveau type, voir [Types de composant](/docs/academy/cluar/components/types).

## Étape suivante

Continuez vers la [Liste](/docs/academy/cluar/components/listing).