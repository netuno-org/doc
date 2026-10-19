---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Le composant de mise en avant grand format, généralement utilisé en haut de la page.

## Introduction

Le **Banner** est la grande mise en avant d'une page — généralement une image qui occupe toute la largeur, avec un titre en évidence par-dessus et, éventuellement, un texte d'introduction et des actions (boutons/liens).

Il suit le même mécanisme commun à tous les composants, décrit dans [Vue d'ensemble](/docs/academy/cluar/components/overview) et [Types de composant](/docs/academy/cluar/components/types).

## Champs

En plus des [champs communs](/docs/academy/cluar/components/overview#champs-communs) (Type, Ordre, Mode d'édition, Inverser le fond, Actions), le Banner a :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre en évidence sur l'image. |
| **Contenu** (`content` / `html_content`) | Texte d'introduction, sous le titre. |
| **Image** (`image`) | Image de fond de la bannière. |
| **Texte alternatif de l'image** (`image_alt`) | Texte alternatif de l'image, pour l'accessibilité et le SEO. |
| **Titre de l'image** (`image_title`) | Attribut `title` de l'image. |
| **Position X** / **Position Y** (`position_x`, `position_y`) | Ajustent le focus de l'image de fond (`background-position`), en pourcentage. |

## Position de l'image

Les champs **Position X** et **Position Y** contrôlent quelle partie de l'image de fond reste toujours visible, à mesure que la bannière est redimensionnée dans différentes résolutions — le même principe que `background-position` en CSS.

Par exemple, `50%` / `50%` centre le focus au milieu de l'image : quelle que soit la résolution, c'est le centre de l'image qui reste visible, en coupant les bords si nécessaire.

## Types disponibles

Il existe aujourd'hui trois types de bannière :

- **Par défaut** (`Default`) — mise en page de base, avec titre, contenu et actions.
- **Secondaire** (`Secondary`) — visuellement différent du Par défaut (style propre en CSS/LESS), mais avec la même structure de champs.
- **Par défaut avec mise en avant** (`DefaultSubBanner`) — variante plus discrète, sans prise en charge des actions (`action: false` dans `config.json`).

Pour plus de détails sur le fonctionnement des types et sur la création d'un nouveau, voir [Types de composant](/docs/academy/cluar/components/types).

## Étape suivante

Continuez vers le [Contenu](/docs/academy/cluar/components/content).