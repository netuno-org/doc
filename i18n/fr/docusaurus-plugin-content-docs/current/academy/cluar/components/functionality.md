---
sidebar_position: 7
id: functionality
title: Fonctionnalité
sidebar_label: Fonctionnalité
---

Les fonctionnalités concrètes disponibles à inclure dans une page, comme des formulaires et des cartes.

## Introduction

La **Fonctionnalité** est différente des autres composants : au lieu de variations visuelles du même contenu, chaque type est une **fonctionnalité concrète** à inclure dans la page — aujourd'hui, un formulaire de contact ou une carte.

Elle suit le même mécanisme commun à tous les composants, décrit dans [Vue d'ensemble](/docs/academy/cluar/components/overview) et [Types de composant](/docs/academy/cluar/components/types) — mais ici, en choisissant le Type, on choisit **quelle fonctionnalité** apparaît sur la page, pas seulement un style différent.

## Champs

En plus des [champs communs](/docs/academy/cluar/components/overview#champs-communs) (Type, Ordre, Mode d'édition, Inverser le fond, Actions), la Fonctionnalité a :

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre du bloc. |
| **Contenu** (`content` / `html_content`) | Texte du bloc. |
| **Image** (`image`) | Image associée (tous les types ne l'utilisent pas). |

## Types disponibles

### Formulaire de contact (`ContactForm`)

Présente un formulaire de contact (nom, e-mail, message), protégé par reCAPTCHA. Lorsqu'il est soumis, il envoie les données au service `contact` sur le serveur, qui les enregistre dans l'entité `contact` (visible dans le backoffice) et permet de configurer des alertes par e-mail.

### Carte de contact (`ContactMap`)

Présente une carte interactive, utilisant [Mapbox](https://www.mapbox.com/). Utilise la configuration `settings.cluar.website.mapbox` (voir [Configuration](/docs/academy/cluar/configuration)) — notamment l'`accessToken` (obligatoire pour que la carte fonctionne) et l'option `dark` (thème clair ou sombre de la carte).

## Étape suivante

Avec les 5 composants explorés, passez aux [Actions](/docs/academy/cluar/actions), qui peuvent être associées à la plupart d'entre eux.