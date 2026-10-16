---
sidebar_position: 3
id: fields
title: Champs
---



Les champs sont les composants fondamentaux et les « blocs de construction » d'un formulaire dans Netuno. Ils représentent l'interface d'interaction avec l'utilisateur et définissent comment les données seront structurées et stockées.

En pratique, chaque champ créé correspond à une colonne de la table de la base de données, déterminant le type d'information que le système peut traiter — comme des textes, des nombres, des dates, des sélections et des fichiers.

### Créer et modifier des champs

Ces boutons permettent de gérer l'état général de l'édition :

- **Modifier un champ existant :** Menu déroulant pour sélectionner un champ déjà créé et modifier ses configurations.

- **Créer un nouveau champ :** Efface tous les champs du formulaire pour commencer la configuration d'un nouvel élément à partir de zéro.

- **Cloner un champ :** Duplique les configurations du champ sélectionné pour accélérer la création d'éléments similaires.

![champ-modifier-existant-fr.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Titre du champ

Le titre du champ (techniquement connu sous le nom de Label) est l'instruction visuelle qui guide l'utilisateur sur l'information à saisir dans un formulaire. Il fonctionne comme une étiquette d'identification, garantissant que la saisie des données soit intuitive et correcte.

À cette étape, le titre a une double finalité dans la plateforme :

- **Dans la gestion des champs (Construire) :** Sert à identifier le champ dans votre liste d'éléments pendant le développement de l'application.

![champ-titre-nom-fr.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **Dans l'interface utilisateur (Visualiser) :** C'est le texte qui apparaît positionné juste au-dessus ou à côté du champ de saisie (input), indiquant à l'utilisateur final ce qu'il doit saisir dans le formulaire.

![champ-titre-nom-contenu-fr.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nom de la colonne

Contrairement au titre, le **Nom de la colonne** est l'identifiant interne et exclusif du champ, utilisé directement dans la base de données et dans les logiques de programmation. C'est grâce à ce nom que le système localise l'information dans la base de données.

**Formatage automatique (Commutateur Auto) :**

Netuno facilite ce processus en remplissant automatiquement le nom en fonction du « Titre du champ ». Le standard utilisé est le snake_case.

**Règles d'écriture :** Si vous choisissez de remplir manuellement (en désactivant « Auto »), gardez le nom au singulier, utilisez uniquement des lettres minuscules et évitez les espaces ou caractères spéciaux.

![champ-nom-colonne-fr.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Types de données

La définition du **Type de donnée** détermine la nature de l'information collectée, impactant directement l'apparence du champ pour l'utilisateur et la manière dont la donnée est stockée dans le système.

![champ-type-donnee-fr.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Champs textuels

Ces champs sont destinés à la saisie de texte dans différents formats. Ils varient selon le besoin de volume de données.

| Type | Que fait-il ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| text | Crée un champ de saisie simple pour une seule ligne. | Noms, titres d'articles, quartiers, etc. |
| textarea | Crée une zone de texte plus grande, pour plusieurs lignes. | Descriptions de produits, commentaires, observations. |
| email | Crée un champ de saisie formaté pour recevoir un e-mail. | Enregistrement d'e-mail de contact, connexion utilisateur. |
| texthtml | Crée un éditeur de texte riche, permettant un formatage avec HTML. | Création de contenu pour un blog, e-mails marketing, pages de site. |
| textmd | Crée un éditeur de texte qui prend en charge le langage de balisage Markdown. | Idéal pour la documentation technique, les articles de blog pour développeurs. |

### 3.2 Champs numériques

Utilisés pour collecter des informations strictement numériques.

| Type | Que fait-il ? | Exemple d'utilisation |
| :--- | :--- | :--- |
| textnum | Crée un champ pour la saisie de nombres entiers. | Quantité en stock, âge d'une personne, nombre de postes. |
| textfloat | Crée un champ pour la saisie de nombres à décimales. | Prix de produits (ex : 99.90), poids (ex : 75.5), taille (ex : 1.82). |

### 3.3 Champs de sélection

Utilisés lorsque l'utilisateur doit choisir parmi des options prédéfinies.

| Type | Que fait-il ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| select | Crée une liste d'options où l'utilisateur ne peut en choisir qu'une. | Sélectionner un État (UF), état civil, catégorie d'un produit. |
| multiselect | Crée une liste d'options où l'utilisateur peut en choisir plusieurs. | Sélectionner des centres d'intérêt (sports, technologie), ingrédients d'une pizza. |
| checkbox | Affiche une case à cocher unique (activer/désactiver). | « J'accepte les conditions d'utilisation », « Se souvenir de mon mot de passe ». |
| color | Affiche un sélecteur de couleurs visuel. | Choisir la couleur d'un produit, personnaliser la couleur d'un événement. |

### 3.4 Champs de date et d'heure

Spécialisés pour la saisie d'informations temporelles.

| Type | Que fait-il ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| date | Affiche un calendrier pour que l'utilisateur sélectionne une date (jour, mois, année). | Date de naissance, date de rendez-vous. |
| datetime | Permet la sélection d'une date et d'une heure. | Début d'un événement, date et heure d'une publication. |
| time | Permet la sélection d'une heure (heures et minutes). | Heures d'ouverture, heure d'une alarme. |

### 3.5 Champs de fichiers et médias

Utilisé pour envoyer des fichiers et des images vers votre application.

| Type | Que fait-il ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| file | Crée un champ pour le téléversement d'un fichier quelconque (PDF, DOCX, ZIP). | Joindre un CV, envoyer un justificatif de paiement. |
| image | Un champ optimisé pour le téléversement d'images (JPG, PNG, GIF). | Photo de profil de l'utilisateur, image d'un produit. |

### 3.6 Champs techniques et spéciaux

Ces champs ont des comportements automatiques ou servent à des fins spécifiques du système.

| Type | Que fait-il ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| hidden | Le champ est invisible pour l'utilisateur, mais stocke une valeur. | Stocker un ID provenant d'une autre page, un code de suivi. |
| uid | Génère automatiquement un Identifiant Unique Universel. | Clé primaire d'un enregistrement, code unique d'une commande. |
| user | Associe l'enregistrement à l'utilisateur qui l'a créé ou modifié. | Identifier l'auteur d'un article de blog, le vendeur qui a enregistré un client. |
| lastchange | Stocke automatiquement la date et l'heure de la dernière modification de l'enregistrement. | Audit, pour savoir quand une donnée a été modifiée pour la dernière fois. |
| group | Utilisé pour regrouper visuellement d'autres champs dans le formulaire. | Créer des sections comme « Données personnelles » et « Adresse » pour organiser de longs formulaires. |

## 4 - Paramètres de comportement et de mise en page

Cette zone est le « panneau de contrôle » de votre champ, définissant les règles métier et les permissions d'accès.

![champ-parametres-comportement-mise-en-page-fr.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Règles d'intégrité des données

Ces options garantissent la qualité et la cohérence des informations.

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Valeurs uniques (clé primaire) | Transforme le champ en identifiant principal et unique, empêchant les valeurs dupliquées. | Utiliser pour « CPF », en garantissant qu'il n'existe pas deux clients avec le même numéro. |
| Obligatoire (non nul) | Rend le remplissage du champ obligatoire. | Appliquer aux champs essentiels comme « Nom » et « E-mail ». |

### 4.2 Contrôle des permissions et de la visibilité

Définit où et comment les utilisateurs interagissent avec les données de ce champ.

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Afficher dans le résultat | Définit si la colonne apparaîtra dans la liste principale de données. | Décocher pour « Observations internes » afin de garder la liste propre. |
| Autoriser le filtrage | Ajoute une case de recherche pour cette colonne dans la liste. | Activer sur « Statut de la commande » pour faciliter la localisation. |
| Autoriser la visualisation | Contrôle si le contenu sera affiché en mode visualisation. | Laisser coché dans la plupart des cas. |
| Autoriser la modification | Permet que le contenu soit modifié lorsqu'un enregistrement est en cours d'édition. | Décocher pour les champs qui ne doivent pas être modifiés, comme « Date d'enregistrement ». |
| Autoriser à la création | Définit si le champ doit apparaître dans le formulaire de création. | Décocher pour les champs de « feedback », qui ne doivent être remplis qu'*après* la création. |
| Autoriser l'exportation | Inclut les données de ce champ lors de l'exportation de la liste (Excel, CSV). | Décocher les données internes qui ne sont pas pertinentes pour des rapports externes. |

## 5 - Organisation visuelle du formulaire

Définit le positionnement des champs dans la mise en page.

![champ-organisation-visuelle-formulaire-fr.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Ligne | Définit la position verticale du champ dans le formulaire. | Placer « Nom complet » à la ligne : 1 et « Adresse » à la ligne : 2. |
| Colonne | Définit la position horizontale, permettant plusieurs champs côte à côte. | Pour avoir « Ville » et « État » ensemble, utiliser Ligne : 3, Colonne : 1 (Ville) et Colonne : 2 (État). |

## 6 - Voir plus d'options

Pour un contrôle plus personnalisé, cliquez sur le bouton « + Voir plus d'options ».

### 6.1 Champ de description

![champ-voir-options-description-fr.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Description | Ajoute un texte d'aide ou d'instruction qui apparaît sous le champ. | Dans « Mot de passe », utiliser la description pour informer des règles : « Le mot de passe doit comporter au moins 8 caractères... ». |

### 6.2 Dimensionnement du champ

![champ-dimensionnement-mise-en-page-fr.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Contrôle précis sur la taille du champ.

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Largeur | Définit la largeur du composant (basé sur une grille de 12 colonnes). | « CPF » (Largeur : 6) et « Date de naissance » (Largeur : 6) sur la même ligne. |
| Hauteur | Définit la hauteur du composant en pixels (px). | Dans `textarea` « Observations », définir Hauteur « 120 » pour une zone plus grande. |
| Largeur de la cellule (px) | Définit une largeur fixe en pixels pour la cellule. | Utiliser pour aligner des champs avec des largeurs spécifiques, comme « UF » (Largeur : 80). |
| Hauteur de la cellule (px) | Définit une hauteur fixe en pixels pour la cellule. | Augmenter la hauteur d'un champ `image` pour créer une zone de « glisser-déposer ». |
| Rowspan | Permet à la cellule de s'étendre verticalement sur plusieurs lignes. | Un `textarea` de « Description » qui occupe 3 lignes de hauteur à côté de champs plus petits. |
| Colspan | Permet à la cellule de s'étendre horizontalement sur plusieurs colonnes. | Un champ « Adresse complète » (Colspan : 2) au-dessus de « Ville » et « État ». |

### 6.3 Validation et règles de données

Établissez des limites pour les valeurs saisies.

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Max | Valeur maximale (numérique) ou nombre maximal de caractères (texte). | Dans « Note (0 à 10) », définir Max comme « 10 ». Dans « Surnom », Max « 20 ». |
| Min | Valeur minimale (numérique) ou nombre minimal de caractères (texte). | Dans « Quantité », définir Min comme « 1 ». Dans « Justification », Min « 30 ». |

### 6.4 Contrôle d'accès 

![champ-controle-acces-fr.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Définissez les groupes et utilisateurs qui peuvent visualiser et modifier le champ.

| Configuration | Que fait-elle ? | Exemple d'utilisation pratique |
| :--- | :--- | :--- |
| Vue utilisateur et vue groupe | Restreint la *visualisation* du champ uniquement aux utilisateurs ou groupes spécifiés. | « Commission du vendeur » avoir Vue groupe « Gestionnaires ». |
| Édition utilisateur et édition groupe | Permet uniquement aux utilisateurs ou groupes spécifiés de *modifier* le champ (les autres le voient en « lecture seule »). | « Statut de la commande » avoir Édition groupe « Logistique ». |