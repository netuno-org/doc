---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Le composant de mise en avant grand format, généralement utilisé en haut de la page.

## Introduction

Le **Banner** est la grande mise en avant d'une page — généralement une image qui occupe toute la largeur, avec un titre bien visible par-dessus et, éventuellement, un texte d'introduction et des actions (boutons/liens).

Il suit le même mécanisme commun à tous les composants, décrit dans [Vue d'ensemble](/docs/academy/cluar/components/overview) et [Types de composant](/docs/academy/cluar/components/types).

## Champs

Outre les [champs communs](/docs/academy/cluar/components/overview#campos-comuns) (Type, Ordre, Mode d'édition, Inverser le fond, Actions), le Banner dispose de :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre mis en avant au-dessus de l'image. |
| **Contenu** (`content` / `html_content`) | Texte d'introduction, sous le titre. |
| **Image** (`image`) | Image d'arrière-plan du banner. |
| **Texte alternatif de l'image** (`image_alt`) | Texte alternatif de l'image, pour l'accessibilité et le SEO. |
| **Titre de l'image** (`image_title`) | Attribut `title` de l'image. |
| **Position X** / **Position Y** (`position_x`, `position_y`) | Ajustent le focus de l'image d'arrière-plan (`background-position`), en pourcentage. |

## Position de l'image

Les champs **Position X** et **Position Y** contrôlent quelle partie de l'image d'arrière-plan reste toujours visible, à mesure que le banner est redimensionné à différentes résolutions — le même principe que `background-position` en CSS.

Par exemple, `50%` / `50%` centre le focus au milieu de l'image : quelle que soit la résolution, c'est le centre de l'image qui reste visible, en coupant les bords si nécessaire.

## Types disponibles

Il existe aujourd'hui trois types de Banner :

- **Standard** (`Default`) — mise en page de base, avec titre, contenu et actions.
- **Secondaire** (`Secondary`) — visuellement différent du Standard (style propre en CSS/LESS), mais avec la même structure de champs.
- **Standard avec mise en avant** (`DefaultSubBanner`) — variante plus discrète, sans prise en charge des actions (`action: false` dans `config.json`).

Pour plus de détails sur le fonctionnement des types et sur la création d'un nouveau, voir [Types de composant](/docs/academy/cluar/components/types).

## Étape suivante

Poursuivez vers le [Contenu](/docs/academy/cluar/components/content).