---
sidebar_position: 1
id: overview
title: Vue d'ensemble
sidebar_label: Vue d'ensemble
---

**Composants** sont les blocs de contenu qui composent une [Page](/docs/academy/cluar/pages/overview), au sein d'une [Version](/docs/academy/cluar/pages/versions-publishing). Il existe 5 types :

- **Bannière**
- **Contenu**
- **Liste** (avec Éléments)
- **Slider** (avec Éléments)
- **Fonctionnalité**

Chacun a sa propre entité (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), son propre formulaire dans le backoffice, et son propre composant React sur le site web.

## Champs communs

Bien que chaque composant ait ses propres champs, la plupart partagent une base similaire :

| Champ | Description |
|---|---|
| **Type** (`type`) | Définit quelle variante visuelle est utilisée pour rendre ce composant — voir [Types de composants](/docs/academy/cluar/components/types). |
| **Ordre** (`sorter`) | Position du composant dans la page. |
| **Mode d'édition** (`edit_mode`) | Définit si le contenu (`content`) est du texte brut ou du HTML (`html_content`). |
| **Inverser le fond du titre / contenu** (`title_invert_background`, `content_invert_background`) | Inverse le schéma de couleur (clair/sombre) de l'**éditeur** de texte du titre/contenu — utile pour écrire un texte qui se trouvera sur un fond sombre (ex. : une image sombre dans la bannière), afin de voir le texte avec un bon contraste pendant l'édition. Ne modifie pas la couleur du contenu déjà publié sur la page. |
| **Actions** | Boutons/liens associés au composant — voir [Actions](/docs/academy/cluar/actions). Tous les types ne prennent pas en charge les actions — voir [Types de composants](/docs/academy/cluar/components/types). |

## Étape suivante

Tous les composants utilisent le même mécanisme de types dynamiques — voir [Types de composants](/docs/academy/cluar/components/types). Ensuite, explorez chaque composant en détail : [Bannière](/docs/academy/cluar/components/banner), [Contenu](/docs/academy/cluar/components/content), [Liste](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Fonctionnalité](/docs/academy/cluar/components/functionality).