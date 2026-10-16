---
sidebar_position: 5
id: listing
title: Liste
sidebar_label: Liste
---

Comment présenter une série d'éléments liés — produits, services, actualités, etc.

## Introduction

La **Liste** sert à présenter une série d'éléments liés — produits, services, références, actualités, etc. Chaque Liste a son propre titre/contenu introductif, et regroupe plusieurs **Éléments**, gérés séparément dans le backoffice (`Liste > Élément`).

Il suit le même mécanisme commun à tous les composants, décrit dans [Vue d'ensemble](/docs/academy/cluar/components/overview) et [Types de composant](/docs/academy/cluar/components/types).

## Champs de la Liste

En plus des [champs communs](/docs/academy/cluar/components/overview#campos-comuns) (Type, Ordre, Mode d'édition, Inverser le fond, Actions), la Liste a :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre de la liste. |
| **Contenu** (`content` / `html_content`) | Texte introductif de la liste. |
| **Image** (`image`) | Image associée à la liste elle-même (pas aux éléments). |
| **Alt de l'image** (`image_alt`) | Texte alternatif de l'image. |
| **Titre de l'image** (`image_title`) | Attribut `title` de l'image. |

## Éléments

Chaque élément appartient à une Liste (`page_listing_id`), et possède ses propres champs :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre de l'élément. |
| **Contenu** (`content` / `html_content`) | Texte de l'élément. |
| **Image** (`image`) | Image de l'élément. |
| **URL** (`link`) | Lien de l'élément — vers où l'utilisateur va en cliquant. |
| **Ordre** (`sorter`) | Position de l'élément dans la liste. |

Remarquez que l'Élément **n'a pas de champ Type propre** — il hérite du type de la Liste à laquelle il appartient : le composant React de la Liste transmet son `type` à chaque élément lors de son rendu.

## Structure de rendu

Contrairement au Banner et au Contenu, où chaque type est un dossier indépendant à l'intérieur du composant, dans la Liste, le composant qui rend les éléments (`Item`) se trouve **à l'intérieur** du dossier du type :

```
website/src/components/Listing/
├── index.jsx              # routeur : choisit le type de liste
└── Default/
    ├── index.jsx           # layout de la liste, rend les <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # comment chaque élément est rendu, pour ce type
```

Cela a du sens car la façon dont un élément est présenté (grille, liste, cartes...) dépend souvent directement du layout de la liste — c'est pourquoi le `Item` de chaque type peut être personnalisé avec le type lui-même, au lieu d'être un composant générique partagé par tous les types.

## Types disponibles

Aujourd'hui, il n'existe que le type **Par défaut** (`Default`). Pour créer un nouveau type de Liste (avec son propre `Item`), suivez le même processus décrit dans [Types de composant](/docs/academy/cluar/components/types), en veillant à inclure le sous-dossier `Item/` dans le nouveau type.

## Prochaine étape

Continuez vers le [Slider](/docs/academy/cluar/components/slider).