---
sidebar_position: 2
id: versions-publishing
title: Versions et Publication
sidebar_label: Versions et Publication
---

## Versions

Chaque page a une ou plusieurs **Versions** (`page_version`), chacune avec son propre état (Brouillon / Publiée). Cela permet de modifier une nouvelle version du contenu sans affecter ce qui est publié — ce n'est que lorsque la version est marquée comme Publiée qu'elle devient la version active de la page.

Les composants de contenu (Bannière, Contenu, Liste, Carrousel, Fonctionnalité) appartiennent toujours à une version spécifique (`page_version_id`), et non directement à la page. Autrement dit, modifier un composant dans une version en brouillon n'affecte pas ce qui est publié.

## Publication

Lors de la publication d'une page, CLUAR :

1. Récupère tous les composants actifs de la version publiée (bannières, contenus, listes, carrousels, fonctionnalités, avec leurs actions respectives).
2. Génère un fichier de structure en JSON avec ce contenu.
3. En production, pré-rend un `index.html` statique pour l'URL de la page (par langue), avec les balises meta SEO et Open Graph déjà remplies — important pour le partage sur les réseaux sociaux et pour les moteurs de recherche, étant donné que le site lui-même est une SPA en React.

## Prochaine étape

Une façon courante de créer une page est de dupliquer une autre déjà existante — voir [Cloner une page](/docs/academy/cluar/pages/cloning).