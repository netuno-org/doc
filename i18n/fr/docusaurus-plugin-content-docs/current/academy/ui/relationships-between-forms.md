---
sidebar_position: 5
id: relationships-between-forms
title: Relations entre formulaires
sidebar_label: Relations
---

## Comment créer des relations entre formulaires

La création de relations entre formulaires est une fonctionnalité essentielle pour organiser les informations de manière intelligente. En connectant les formulaires, vous éliminez la nécessité de dupliquer les données et garantissez que votre application est cohérente, évolutive et facile à maintenir.

L'un des grands avantages de Netuno est la capacité de générer automatiquement le diagramme du modèle de données.

Les relations définissent comment les données de différentes tables interagissent entre elles. Cette connexion se reflète directement dans l'interface utilisateur (UI), permettant aux champs d'un formulaire de rechercher automatiquement des informations dans un autre.

**Diagramme simple :** Idéal pour valider la logique initiale de petits modules.

![modele-diagramme-simple.png](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Diagramme complexe :** Démontre la robustesse de l'outil dans des applications à grande échelle, en cartographiant de multiples dépendances et flux de données.
 
![modele-diagramme-complexe.png](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Création d'un champ relationnel de type Select

Le champ Select crée une relation entre deux formulaires. Il vous permet de choisir une valeur dans une liste déroulante (dropdown), au lieu de la saisir manuellement. Cette liste est remplie avec des données qui existent déjà dans un autre formulaire.

Nous utiliserons les formulaires **Véhicules** et **Couleur** comme exemple. 

**Quand l'utiliser ?** Utilisez le select lorsque vous avez une relation de type « Plusieurs-à-Un » (N-1).

**Exemple :** Plusieurs Véhicules peuvent avoir une Couleur. Au lieu de saisir « Bleu » à chaque fois, vous sélectionnez « Bleu » dans une liste de couleurs déjà enregistrées.

- **Formulaire de destination :** Véhicule (où nous allons créer le champ select).
- **Formulaire source :** Couleur (d'où proviennent les données de la liste des couleurs).


### Prérequis
Avant de commencer, assurez-vous que :

- Les deux formulaires (**Véhicule** et **Couleur**) sont déjà créés dans Netuno. Pour plus de détails, consultez notre guide sur la [Création de formulaires](/docs/academy/ui/forms).

- Le formulaire source (**Couleur**) possède déjà quelques enregistrements. (Ex : « Bleu », « Rouge », « Argent »). Pour plus de détails, consultez notre guide sur la [Création de champs](/docs/academy/ui/fields).

### Créer et configurer le Select

Ajoutez le type de champ **select** au formulaire **Véhicule** afin qu'il puisse « récupérer » les données du formulaire **Couleur**.

![creer-et-configurer-le-champ-select.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Accédez au formulaire de destination

- Dans le Backoffice, allez dans la gestion des champs et ouvrez l'édition du formulaire **Véhicule**.
 
#### 2 - Créez le nouveau champ

- Cliquez sur « Créer un nouveau champ ».

#### 3 - Définissez le titre et le nom de la colonne

- **Titre du champ :** Donnez un nom convivial qui apparaîtra à l'utilisateur. **Exemple :** Couleur du Véhicule.
- **Nom de la colonne :** C'est le nom technique du champ dans la base de données.

**Bonne pratique :** Lors de la création d'un champ relationnel, utilisez toujours le suffixe `_id` dans le **Nom de la colonne**. Cela montre clairement que cette colonne ne stocke pas le texte « Bleu », mais l'ID de référence vers l'enregistrement « Bleu » dans le formulaire **Couleur**. **Exemple :** `couleur_vehicule_id`.

#### 4 - Choisissez le type de données

- Dans le champ **Type**, sélectionnez l'option _`select - select`_ dans la liste.

#### 5 - Configurez le lien (la relation)

![configurer-le-lien.png](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- En choisissant _`select`_, un nouveau champ appelé **Lien** s'affichera.
- Cliquez sur le bouton **Configurer**.
- Une fenêtre modale s'ouvrira, listant tous vos formulaires. C'est le moment de choisir le formulaire source.
- Sélectionnez le formulaire qui contient les données que vous souhaitez lister. Dans notre exemple, cliquez sur **couleur - Couleur**.
- Après la sélection, cliquez sur le bouton **Fermer** dans la modale.

#### 6 - Enregistrez les modifications

- Cliquez sur le bouton **Enregistrer** dans la gestion des champs pour appliquer toutes vos configurations.

### Résultat

Terminé ! Maintenant, en mode « visualisation », lorsque vous ajouterez ou modifierez un enregistrement dans le formulaire **Véhicule**, le champ « Couleur du Véhicule » sera une liste déroulante (dropdown) affichant toutes les couleurs enregistrées dans votre formulaire Couleur.

## Création d'un champ relationnel de type Multiselect

Le champ **Multiselect** crée une relation « Plusieurs-à-Plusieurs » (N-M). Il vous permet de sélectionner plusieurs éléments d'une liste dans un seul champ.

Nous utiliserons les formulaires **Personne**, **Fonction** et **Personne-Fonction** comme exemple.

**Quand l'utiliser ?** Utilisez le multiselect lorsqu'un enregistrement peut être lié à plusieurs autres, et vice-versa.
**Exemple :** Plusieurs Personnes peuvent avoir plusieurs Fonctions.

- Une personne (ex : « Ana ») peut avoir les fonctions « Admin » et « Gestionnaire ».
- La fonction « Gestionnaire » peut être associée à plusieurs personnes (ex : « Ana », « Bruno » et « Thiago »).

Pour que cela fonctionne, nous avons besoin de trois formulaires :

- **Formulaire « parent » (Personne) :** Où le champ _`multiselect`_ sera visible pour l'utilisateur.
- **Formulaire « source » (Fonction) :** D'où proviennent les options de la liste (ex : « Admin », « Gestionnaire »).
- **Formulaire « jonction » (Personne-Fonction) :** Un formulaire « passerelle » qui stocke les connexions entre **Personne** et **Fonction**.

### Prérequis
Avant de commencer, assurez-vous que :

- Le formulaire « parent » (**Personne**) est déjà créé et contient quelques enregistrements (ex : « Ana », « Bruno », « Lucas »).
- Le formulaire « source » (**Fonction**) est déjà créé et contient quelques enregistrements (ex : « Admin », « Gestionnaire », « Consultant »).

### Créer et configurer le Multiselect 
La configuration se fait en 4 étapes :

### Étape 1 : créer le formulaire de jonction (Personne-Fonction)
D'abord, créons le formulaire « passerelle ».

1 - **Allez dans Gestion > Formulaires** et cliquez sur « Créer un nouveau formulaire ».

2 - **Titre du formulaire :** Personne-Fonction.

3 - **Nom de la table :** personne_fonction (ou similaire).

4 - **Important :** Dans le champ **Parent**, sélectionnez le formulaire « parent » principal, qui dans ce cas est **Personne**. Cela transforme **Personne-Fonction** en sous-formulaire.

5 - Cliquez sur **Enregistrer**.

![creer-le-formulaire-parent-pour-la-jonction.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Étape 2 : configurer les champs du formulaire de jonction

Ajoutez les champs « passerelle » au formulaire Personne-Fonction.

1 - Accédez à la gestion des champs du formulaire Personne-Fonction que vous venez de créer.

2 - Ajoutez deux champs de type select : l'un pointant vers Personne et l'autre vers Fonction.

**Champ 1 (Lien vers Personne) :**

![champ-lien-pour-personne.png](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Titre du champ :** Nom de la Personne
- **Nom de la colonne :** `nom_personne_id` (en suivant la convention **_id**)
- **Type :** `select - select`
- **Lien :** Cliquez sur **Configurer** et sélectionnez le champ principal du formulaire **Personne**, exemple : `personne:nom`.
- Cliquez sur **Enregistrer**.

**Champ 2 (Lien vers Fonction) :**

- **Titre du champ :** Fonction de la Personne. 
- **Nom de la colonne :** `fonction_personne_id`.
- **Type :** `select - select`.
- **Lien :** Cliquez sur **Configurer** et sélectionnez le champ principal du formulaire **Fonction**, exemple : `fonction:fonction_id`.
- Cliquez sur **Enregistrer**.

![champ-lien-vers-personne-fonction.png](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Étape 3 : créer le champ multiselect dans le formulaire « parent »

Avec la « passerelle » (**Personne-Fonction**) prête, nous pouvons revenir au formulaire **Personne** pour créer le champ final.

1 - Allez dans la gestion des champs du formulaire **Personne**.

2 - Cliquez sur « Créer un nouveau champ ».

3 - **Titre du champ :** Personne Fonction.

4 - **Nom de la colonne :** _`personne_fonction_id`_.

5 - **Type :** _`multiselect - multiselect`_.


### Étape 4 : configurer le champ multiselect

En sélectionnant le type _`multiselect`_, deux nouveaux champs de configuration apparaîtront : **Référence** et **Lien**.

#### 1 - Référence (Où enregistrer la relation ?)

 - **Ce champ indique à Netuno :** « Quel champ du formulaire "passerelle" me référence (**Personne**) ? »
 - Cliquez sur **Configurer**.
 - Sélectionnez le formulaire de jonction (**Personne-Fonction**) et le champ que vous avez créé à l'Étape 2 (Champ 1). **Exemple :** _`personne_fonction:nom_personne_id`_.

#### 2 - Lien (D'où viennent les options ?)

 - **Ce champ indique :** « Quel champ du formulaire "passerelle" référence les options (**Fonction**) ? »
 - Cliquez sur **Configurer**.
 - Sélectionnez le formulaire de jonction (**Personne-Fonction**) et le champ que vous avez créé à l'Étape 2 (Champ 2). **Exemple :** _`personne_fonction:fonction_personne_id`_.
  
#### 3 - Enregistrez les modifications

- Cliquez sur le bouton **Enregistrer** dans la gestion des champs pour appliquer toutes vos configurations.

![configurer-le-champ-multiselect.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Résultat

Terminé ! Maintenant, en mode « visualisation », lors de l'ajout ou de la modification d'un enregistrement dans le formulaire **Personne**, le champ « Personne Fonction » apparaîtra comme une case à sélection multiple. Vous pourrez choisir plusieurs fonctions dans la liste (qui proviennent du formulaire **Fonction**), et Netuno enregistrera automatiquement ces associations dans le formulaire **Personne-Fonction**.

Si vous avez des questions, contactez-nous via la communauté et les autres canaux disponibles en bas de cette page.

Bon développement !