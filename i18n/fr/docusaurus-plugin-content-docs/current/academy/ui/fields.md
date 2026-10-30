---
sidebar_position: 3
id: fields
title: Champs
---



Les Champs sont les composants fondamentaux et les « blocs de construction » d'un formulaire dans Netuno. Ils représentent l'interface d'interaction avec l'utilisateur et définissent comment les données seront structurées et stockées.

En pratique, chaque champ créé correspond à une colonne dans la table de la base de données, déterminant le type d'information que le système peut traiter — comme des textes, des nombres, des dates, des sélections et des fichiers.

### Créer et Modifier des Champs

Ces boutons permettent de gérer l'état général de l'édition :

- **Modifier un champ existant :** Menu déroulant pour sélectionner un champ déjà créé et modifier ses configurations.

- **Créer un nouveau champ :** Efface tous les champs du formulaire pour commencer la configuration d'un nouvel élément à partir de zéro.

- **Cloner un champ :** Duplique les configurations du champ sélectionné pour accélérer la création d'éléments similaires.

![champ-modifier-existant-fr.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Titre du Champ

Le Titre du Champ (techniquement connu sous le nom de Label) est l'instruction visuelle qui guide l'utilisateur sur l'information à saisir dans un formulaire. Il fonctionne comme une étiquette d'identification, garantissant que la saisie des données soit intuitive et correcte.

À cette étape, le titre a une double finalité dans la plateforme :

- **Dans la Gestion des Champs (Construire) :** Sert à identifier le champ dans votre liste d'éléments pendant le développement de l'application.

![champ-titre-nom-fr.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **Dans l'Interface Utilisateur (Visualiser) :** C'est le texte qui apparaît positionné juste au-dessus ou à côté du champ de saisie (input), indiquant à l'utilisateur final ce qu'il doit saisir dans le formulaire.

![champ-titre-nom-contenu-fr.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nom de la colonne

Différent du titre, le **Nom de la Colonne** est l'identifiant interne et exclusif du champ, utilisé directement dans la base de données et dans les logiques de programmation. C'est par ce nom que le système localise l'information dans la base de données.

**Formatage Automatique (Switch Auto) :**

Netuno facilite ce processus en remplissant le nom automatiquement en fonction du « Titre du champ ». Le format utilisé est le snake_case.

**Règles d'Écriture :** Si vous choisissez de remplir manuellement (en désactivant le « Auto »), gardez le nom au singulier, utilisez uniquement des lettres minuscules et évitez les espaces ou caractères spéciaux.

![champ-nom-colonne-fr.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Types de données

La définition du **Type de Donnée** détermine la nature de l'information collectée, impactant directement l'apparence du champ pour l'utilisateur et la manière dont la donnée est stockée dans le système.

![champ-type-donnees-fr.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Champs Textuels

Ces champs sont destinés à la saisie de texte dans différents formats. Ils varient selon le besoin en volume de données.

| Type | Que fait-il ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| text | Crée un input simple pour une seule ligne. | Noms, titres d'articles, quartiers, etc. |
| textarea | Crée une zone de texte plus grande, pour plusieurs lignes. | Descriptions de produits, commentaires, observations. |
| email | Crée un input de texte formaté pour recevoir un e-mail. | Enregistrement d'e-mail de contact, connexion utilisateur. |
| texthtml | Crée un éditeur de texte riche, permettant la mise en forme avec HTML. | Création de contenu pour un blog, e-mails marketing, pages de site. |
| textmd | Crée un éditeur de texte qui prend en charge le langage de balisage Markdown. | Idéal pour la documentation technique, les articles de blog pour développeurs. |

### 3.2 Champs Numériques

Utilisés pour collecter des informations qui sont strictement numériques.

| Type | Que fait-il ? | Exemple d'Utilisation |
| :--- | :--- | :--- |
| textnum | Crée un input pour la saisie de nombres entiers. | Quantité en stock, âge d'une personne, nombre de postes. |
| textfloat | Crée un input pour la saisie de nombres avec décimales. | Prix de produits (ex : 99.90), poids (ex : 75.5), taille (ex : 1.82). |

### 3.3 Champs de Sélection

Utilisés lorsque l'utilisateur doit choisir parmi des options prédéfinies.

| Type | Que fait-il ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| select | Crée une liste d'options où l'utilisateur peut en choisir une seule. | Sélectionner un état (UF), état civil, catégorie d'un produit. |
| multiselect | Crée une liste d'options où l'utilisateur peut en choisir plusieurs. | Sélectionner des intérêts (sports, technologie), ingrédients d'une pizza. |
| checkbox | Affiche une unique case à cocher (activer/désactiver). | « J'accepte les conditions d'utilisation », « Se souvenir de mon mot de passe ». |
| color | Affiche un sélecteur de couleurs visuel. | Choisir la couleur d'un produit, personnaliser la couleur d'un événement. |

### 3.4 Champs de Date et Heure

Spécialisés pour la saisie d'informations temporelles.

| Type | Que fait-il ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| date | Affiche un calendrier pour que l'utilisateur sélectionne une date (jour, mois, année). | Date de naissance, date de rendez-vous. |
| datetime | Permet la sélection d'une date et d'une heure. | Début d'un événement, date et heure d'une publication. |
| time | Permet la sélection d'une heure (heures et minutes). | Horaire d'ouverture, heure d'une alarme. |

### 3.5 Champs de Fichiers et Médias

Utilisé pour envoyer des fichiers et des images vers votre application.

| Type | Que fait-il ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| file | Crée un champ pour l'upload d'un fichier quelconque (PDF, DOCX, ZIP). | Joindre un CV, envoyer un justificatif de paiement. |
| image | Un champ optimisé pour l'upload d'images (JPG, PNG, GIF). | Photo de profil de l'utilisateur, image d'un produit. |

### 3.6 Champs Techniques et Spéciaux

Ces champs ont des comportements automatiques ou servent à des fins spécifiques du système.

| Type | Que fait-il ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| hidden | Le champ est invisible pour l'utilisateur, mais stocke une valeur. | Stocker un ID provenant d'une autre page, un code de suivi. |
| uid | Génère automatiquement un Identifiant Unique Universel. | Clé primaire d'un enregistrement, code unique d'une commande. |
| user | Associe l'enregistrement à l'utilisateur qui l'a créé ou modifié. | Identifier l'auteur d'un post de blog, le vendeur qui a enregistré un client. |
| lastchange | Stocke automatiquement la date et l'heure de la dernière modification de l'enregistrement. | Audit, pour savoir quand une donnée a été modifiée pour la dernière fois. |
| group | Utilisé pour regrouper visuellement d'autres champs dans le formulaire. | Créer des sections comme « Données Personnelles » et « Adresse » pour organiser des formulaires longs. |

## 4 - Paramètres de Comportement et de Mise en Page

Cette zone est le « panneau de contrôle » de votre champ, définissant les règles métier et les permissions d'accès.

![champ-parametres-comportement-et-layout-fr.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Règles d'Intégrité des Données

Ces options garantissent la qualité et la cohérence des informations.

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Valeurs Uniques (Clé Primaire) | Transforme le champ en identifiant principal et unique, empêchant les valeurs dupliquées. | Utiliser pour « NIR », en garantissant qu'il n'existe pas deux clients avec le même numéro. |
| Obligatoire (Non Nul) | Rend le remplissage du champ obligatoire. | Appliquer sur des champs essentiels comme « Nom » et « E-mail ». |

### 4.2 Contrôle des Permissions et de la Visibilité

Définit où et comment les utilisateurs interagissent avec les données de ce champ.

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Afficher dans le Résultat | Définit si la colonne apparaîtra dans la liste principale de données. | Décocher pour « Observations Internes » afin de garder la liste propre. |
| Permettre de Filtrer | Ajoute une case de recherche pour cette colonne dans la liste. | Activer sur « Statut de la Commande » pour faciliter la localisation. |
| Permettre de Visualiser | Contrôle si le contenu sera affiché en mode visualisation. | Laisser coché dans la plupart des cas. |
| Permettre de Modifier | Permet que le contenu soit modifié lorsqu'un enregistrement est en cours d'édition. | Décocher pour les champs qui ne doivent pas être modifiés, comme « Date d'Inscription ». |
| Permettre à la Création | Définit si le champ doit apparaître dans le formulaire de création. | Décocher pour les champs de « retour », qui ne doivent être remplis *qu'après* la création. |
| Permettre d'Exporter | Inclut les données de ce champ lors de l'export de la liste (Excel, CSV). | Décocher les données internes qui ne sont pas pertinentes pour des rapports externes. |

## 5 - Organisation Visuelle du Formulaire

Définit le positionnement des champs dans la mise en page.

![champ-organisation-visuelle-formulaire-fr.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Ligne | Définit la position verticale du champ dans le formulaire. | Placer « Nom Complet » à la Ligne : 1 et « Adresse » à la Ligne : 2. |
| Colonne | Définit la position horizontale, permettant plusieurs champs côte à côte. | Pour avoir « Ville » et « État » ensemble, utiliser Ligne : 3, Colonne : 1 (Ville) et Colonne : 2 (État). |

## 6 - Voir Plus d'Options

Pour un contrôle plus personnalisé, cliquez sur le bouton « + Voir Plus d'Options ».

### 6.1 Champ de Description

![champ-options-vue-description-fr.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Description | Ajoute un texte d'aide ou une instruction qui apparaît sous le champ. | Dans « Mot de passe », utiliser la description pour informer des règles : « Le mot de passe doit contenir au minimum 8 caractères... ». |

### 6.2 Dimensionnement du Champ

![champ-dimensionnement-layout-fr.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Contrôle précis sur la taille du champ.

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Largeur | Définit la largeur du composant (basé sur une grille de 12 colonnes). | « NIR » (Largeur : 6) et « Date de Naissance » (Largeur : 6) sur la même ligne. |
| Hauteur | Définit la hauteur du composant en pixels (px). | Dans `textarea` « Observations », définir Hauteur « 120 » pour une zone plus grande. |
| Largeur de la Cellule (px) | Définit une largeur fixe en pixels pour la cellule. | Utiliser pour aligner des champs avec des largeurs spécifiques, comme « UF » (Largeur : 80). |
| Hauteur de la Cellule (px) | Définit une hauteur fixe en pixels pour la cellule. | Augmenter la hauteur d'un champ `image` pour créer une zone de « glisser-déposer ». |
| Rowspan | Permet à la cellule de s'étendre verticalement sur plusieurs lignes. | Un `textarea` de « Description » qui occupe 3 lignes de hauteur à côté de champs plus petits. |
| Colspan | Permet à la cellule de s'étendre horizontalement sur plusieurs colonnes. | Un champ « Adresse Complète » (Colspan : 2) au-dessus de « Ville » et « État ». |

### 6.3 Validation et Règles de Données

Établissez des limites pour les valeurs saisies.

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Max | Valeur maximale (numérique) ou nombre maximal de caractères (texte). | Dans « Note (0 à 10) », définir Max comme « 10 ». Dans « Surnom », Max « 20 ». |
| Min | Valeur minimale (numérique) ou nombre minimal de caractères (texte). | Dans « Quantité », définir Min comme « 1 ». Dans « Justification », Min « 30 ». |

### 6.4 Contrôle d'Accès 

![champ-controle-acces-fr.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Définissez des groupes et des utilisateurs qui peuvent visualiser et modifier le champ.

| Configuration | Que fait-elle ? | Exemple d'Utilisation Pratique |
| :--- | :--- | :--- |
| Vue Utilisateur et Vue Groupe | Restreint la *visualisation* du champ uniquement aux utilisateurs ou groupes spécifiés. | « Commission du Vendeur » avoir Vue Groupe « Gestionnaires ». |
| Édition Utilisateur et Édition Groupe | Permet que seuls les utilisateurs ou groupes spécifiés *modifient* le champ (les autres voient en « lecture seule »). | « Statut de la Commande » avoir Édition Groupe « Logistique ». |