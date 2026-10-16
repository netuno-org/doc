---
id: storage
title: Stockage
sidebar_label: Stockage
---

Fichiers intégrés dans le code ou dans une base de données.

## Stockage Général

Le dossier `📂 storage` a pour finalité de conserver de manière sécurisée les fichiers généraux qui sont utiles au traitement de l'application.

## Structure du Dossier

Dans le dossier `📂 storage` se trouve la structure suivante :

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Base de Données

Le dossier `📂 database` est utilisé pour stocker des fichiers ou des images liés à la base de données.

Il n'est pas pratique de stocker directement les fichiers dans la base de données, car cela compromet les sauvegardes et la synchronisation des données, augmentant considérablement la taille de la base de données en raison de l'espace occupé par de nombreux fichiers en général.

C'est pourquoi tout formulaire de données qui comporte un champ de téléversement de fichier ou d'image, le fichier final est organisé et conservé ici, et seul le nom final du fichier est enregistré dans le champ de la base de données.

Si la structure de données contient des fichiers, alors pour réaliser la sauvegarde totale de l'application, il est nécessaire de faire la sauvegarde de ce dossier en plus de la sauvegarde de la base de données.

## Système de fichiers généraux

Le dossier `📂 filesystem` permet d'organiser avec des restrictions d'accès les fichiers généraux qui sont utiles à l'application.

Tout fichier qui est utile directement dans le code de l'application doit être conservé ici.

Les restrictions sont divisées en :

### Privé

Le dossier `📂 private` ne doit être accessible en lecture ou en écriture que par des utilisateurs authentifiés dans l'application.

### Public

Le dossier `📂 public` est utile pour l'accès externe.

### Serveur

Le dossier `📂 server` ne permet la lecture et l'écriture qu'à partir du code interne de l'application.

Ainsi, aucun utilisateur interne ou externe n'accède à son contenu.

Son contenu n'est accessible que via le code.