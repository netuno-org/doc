---
sidebar_position: 8
id: actions
title: Actions
sidebar_label: Actions
---

Comment créer et réutiliser des CTA (boutons/liens) associés aux composants.

## Introduction

Une **Action** est, au fond, un **CTA** (call-to-action) réutilisable — un bouton/lien avec titre, texte, image et destination (`link`) — qui peut être associé à des [Composants](/docs/academy/cluar/components/overview) comme Bannière, Contenu, Liste, Slider (dans les éléments) et Fonctionnalité.

## Champs

| Champ | Description |
|---|---|
| **Titre** (`title`) | Titre de l'action, rendu comme en-tête (`<h4>`). |
| **Contenu** (`content`) | Texte descriptif de l'action, rendu comme paragraphe (`<p>`). |
| **Indication** (`indication`) | Le texte du lien/CTA lui-même — c'est ce qui apparaît écrit **à l'intérieur** du bouton cliquable (ex. : « En savoir plus », « Acheter maintenant »). |
| **Image** (`image`) | Image associée à l'action (ex. : icône). |
| **Lien** (`link`) | Destination de l'action (URL) — vers où le CTA mène lorsqu'il est cliqué. |
| **Langue** (`language_id`) | Langue à laquelle cette action appartient. |
| **Paramètre** (`parameter_id`) | Regroupe cette action avec ses équivalents dans d'autres langues — voir ci-dessous. |

## Paramètre

Le **Paramètre** (`action_parameter`, avec seulement `código` et `descrição`) est un regroupement : plusieurs Actions — chacune dans sa langue, mais représentant la **même fonctionnalité/destination** — partagent le même Paramètre.

Ceci est utilisé lors de la [clonage d'une page](/docs/academy/cluar/pages/cloning) vers une autre langue : pour chaque Action associée à un composant de la page originale, le CLUAR cherche, parmi les Actions existantes, une qui a le **même Paramètre** et qui est dans la **langue de destination** du clonage. S'il en trouve une, il associe automatiquement cette Action (la version déjà traduite) au composant cloné — sans avoir besoin de l'ajouter manuellement ensuite.

:::info Il faut d'abord créer l'Action dans la langue de destination
L'association automatique ne fonctionne que s'il existe déjà une Action avec le même Paramètre dans la langue vers laquelle on clone. Si elle n'existe pas encore, l'action n'est tout simplement pas associée au composant cloné — elle reste comme si elle n'avait pas été définie. Autrement dit, le Paramètre ne traduit ni ne crée l'Action automatiquement ; il ne fait que lier des Actions équivalentes déjà existantes, une fois qu'elles ont été créées dans chaque langue.
:::

Par exemple : une Action « En savoir plus » avec le Paramètre `en-savoir-plus`, en français, et une autre Action « Learn more » avec le même Paramètre `en-savoir-plus`, en anglais — lors du clonage d'une page du français vers l'anglais, une Bannière qui avait la première Action associée aura automatiquement la seconde.

## Prochaine étape

Explorez les [Configurations](/docs/academy/cluar/settings).