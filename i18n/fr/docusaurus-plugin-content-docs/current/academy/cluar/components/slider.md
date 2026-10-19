---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Le composant carrousel, pour présenter une séquence d'éléments en vedette.

## Introduction

Le **Slider** présente une séquence d'éléments en carrousel — chacun avec une image de fond, un titre, un texte et, éventuellement, ses propres actions. Il est rendu avec la bibliothèque [Keen Slider](https://keen-slider.io/).

Il suit le même mécanisme commun à tous les composants, décrit dans [Vue d'ensemble](/docs/academy/cluar/components/overview) et [Types de composant](/docs/academy/cluar/components/types).

## Champs du Slider

Outre les [champs communs](/docs/academy/cluar/components/overview#champs-communs) (Type, Ordre, Mode d'édition, Inverser le fond), le Slider a :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre du bloc slider. |
| **Contenu** (`content` / `html_content`) | Texte introductif du bloc. |
| **Image** (`image`) | Image associée au slider lui-même (pas aux éléments). |
| **Image Alt** (`image_alt`) | Texte alternatif de l'image. |
| **Image Titre** (`image_title`) | Attribut `title` de l'image. |

## Éléments

Chaque élément appartient à un Slider (`page_slider_id`), et est l'un des « slides » du carrousel :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre du slide. |
| **Contenu** (`content` / `html_content`) | Texte du slide. |
| **Image** (`image`) | Image de fond du slide. |
| **Image Alt** (`image_alt`) | Texte alternatif de l'image. |
| **Image Titre** (`image_title`) | Attribut `title` de l'image. |
| **Ordre** (`sorter`) | Position du slide dans le carrousel. |
| **Actions** | Chaque élément peut avoir ses propres actions associées — voir [Actions](/docs/academy/cluar/actions). |

:::info Différence par rapport à la Liste
Contrairement à l'Item de la Liste, l'Item du Slider **a ses propres actions**, associées individuellement (`page_slider_item_action`) — chaque slide peut avoir son propre bouton/lien.
:::

## Structure de rendu

Comme dans la Liste, l'`Item` du Slider se trouve **à l'intérieur** du dossier du type, et non comme dossier frère :

```
website/src/components/Slider/
├── index.jsx              # routeur : choisit le type de slider
└── Default/
    ├── index.jsx           # mise en page du slider, assemble le carrousel avec les <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # chaque slide, y compris ses propres actions
```

## Types disponibles

Aujourd'hui, il n'existe que le type **Par défaut** (`Default`). Pour créer un nouveau type de Slider (avec son propre `Item`), suivez le même processus décrit dans [Types de composant](/docs/academy/cluar/components/types), en veillant à inclure le sous-dossier `Item/` dans le nouveau type.

## Prochaine étape

Passez à la [Fonctionnalité](/docs/academy/cluar/components/functionality).