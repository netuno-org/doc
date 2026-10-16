---
sidebar_position: 1
id: overview
title: Vue d'ensemble
sidebar_label: Vue d'ensemble
---

CLUAR est un CMS open source, construit sur [Netuno](https://www.netuno.org/), pour la création de sites web multilingues. Les composants visuels des pages (bannières, listes, sliders, etc.) sont développés en ReactJS, avec [Ant Design](https://ant.design/) pour l'interface, [React Router](https://reactrouter.com/) pour la navigation et [Less](https://lesscss.org/) pour les styles — tandis que le contenu (pages, textes, images, langues, menus) est géré via un backoffice, sans avoir besoin de programmer.

Le code est disponible dans le [dépôt CLUAR sur GitHub](https://github.com/netuno-org/cluar) — les contributions sont les bienvenues.

## Modèle de contenu

Le contenu de CLUAR suit la structure **Page → Version → Composants** :

- Chaque **Page** représente une URL du site (`link`), avec titre, menu, SEO, etc.
- Chaque page a une ou plusieurs **Versions**, qui permettent de travailler sur un brouillon sans affecter ce qui est déjà publié.
- À l'intérieur de chaque version se trouvent les **Composants** de contenu — Bannière, Contenu, Liste, Slider et Fonctionnalité — qui sont les blocs qui apparaissent effectivement sur la page, chacun avec son type visuel et, éventuellement, des actions (boutons/liens) associées.

## Architecture du projet

Le projet est divisé en quatre parties :

- **`server`** — l'application Netuno : entités de données, services REST, et les scripts de configuration initiale (`setup`).
- **`website`** — le site en ReactJS qui consomme les données via REST et rend les pages.
- **`ui`** — extensions au backoffice de Netuno spécifiques à CLUAR.
- **`config`** — configuration d'environnement (base de données, authentification, définitions générales).

## Prochaines étapes

- [Installation](/docs/academy/cluar/install)
- [Configuration](/docs/academy/cluar/configuration)
- [Composants](/docs/academy/cluar/components/overview)
- [Pages](/docs/academy/cluar/pages/overview)
- [Langues](/docs/academy/cluar/languages)
- [Permissions](/docs/academy/cluar/permissions)