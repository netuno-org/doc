---
sidebar_position: 1
id: folders-overview
title: Vue d'ensemble des dossiers
sidebar_label: Vue d'ensemble
---

Explorez et découvrez les dossiers et fichiers des applications.

## Structure

À partir de la racine où Netuno est installé, nous pouvons trouver le dossier `📂 apps`.

C'est dans le dossier `📂 apps` que se trouvent toutes les applications disponibles sur la plateforme Netuno.

Certaines applications peuvent être créées localement, tandis que d'autres peuvent être externes, par exemple des applications qui sont des clones de dépôts GIT.

Voyez, à partir de la racine de Netuno, la structure complète d'une application récemment créée :

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>mon_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> Le dossier `apps` contient toutes les applications disponibles dans Netuno.

Initialement, ce dossier contient déjà l'application `demo` qui, comme son nom l'indique, est une **démo**_nstration_ des fonctionnalités de Netuno.
 
Lorsqu'une nouvelle application est créée, un nouveau dossier est ajouté, contenant la même hiérarchie de sous-dossiers que celle présentée ci-dessus.

## Dossiers principaux

Dans le dossier de l'application, nous avons les principaux dossiers, chacun ayant une finalité spécifique.

Les principaux dossiers sont :

- [📂 config](config) - Configurations générales ;
- [📂 dbs](dbs) - Éléments liés à la base de données ;
- [📂 docs](docs) - Documentation et autres documents en général ;
- [📂 public](public) - Contenu public disponible directement via URL, comme les images, JavaScript et CSS ;
- [📂 server](server) - Code backend, comme les services, jobs, templates, reports, et toute l'API en général.
- [📂 storage](storage) - Organisation de fichiers liés aux données ou utilisés dans le code.
- [📂 ui](ui) - Interface utilisateur du backoffice, code frontend comme les tableaux de bord et d'autres fonctionnalités.