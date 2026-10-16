---
sidebar_position: 1
id: backoffice
title: Back-office
---

Dans le développement d'applications Web et/ou Mobile, il est courant d'avoir le concept de back-office, la couche de gestion des données.

C'est-à-dire qu'il s'agit d'une couche généralement web où les utilisateurs de gestion métier accèdent à une interface permettant d'intervenir sur les données.

Il est très courant d'avoir les exigences suivantes :

- Gestion des utilisateurs ;
- Gestion des groupes d'utilisateurs ;
- Manipulation des enregistrements de base de données adaptés aux règles métier ;
- Journaux pour enregistrer ce que les utilisateurs ont fait et quand ;
- Limiter les accès, selon le groupe ou l'utilisateur, ne pas pouvoir modifier ou même voir certaines données ;
- Permettre l'accès via navigateur et appareils mobiles ;
- Générer des rapports de gestion ;
- Tableau de bord adapté au métier avec des informations pertinentes pouvant présenter des graphiques et des tableaux ;

Pour ces raisons et d'autres, développer le back-office demande souvent autant ou plus de travail que développer l'application finale.

De plus, il est également courant que le back-office fournisse l'API REST avec des services web qui permettront d'assurer la communication des données métier avec l'application finale, ou frontend.

![Back-office.](/docs/assets/business/business-backoffice.svg "Back-office.")

Netuno apporte un puissant moteur de back-office, où, sans code, il est possible de créer la structure de données en générant des formulaires intégrés à la base de données pour les manipulations les plus courantes, comme créer, rechercher, modifier et supprimer.

Il apporte également la gestion des utilisateurs et des groupes et des contrôles d'accès avec des enregistrements de journaux.

Il permet de créer en low-code des tableaux de bord, des rapports et l'API REST (services web) intégrée avec JWT (JSON Web Token).

> Comme Netuno apporte toutes les fonctionnalités les plus courantes prêtes à être modelées selon le modèle métier, l'effort pour développer un back-office sur mesure est drastiquement réduit.

## Back-office pour les nouveaux projets

Lors du développement de nouveaux projets, notamment lorsqu'il s'agit d'applications pour des clients externes, il est courant de pénaliser le budget du back-office, c'est-à-dire de pénaliser le temps investi dans son développement et dans la conception des interfaces.

C'est parce qu'il ne sera pas visible au client cible, on peut donc le laisser au second plan.

De plus, l'objectif des décideurs est davantage d'atteindre le résultat final que de se soucier des couches internes de gestion, surtout lorsque cela implique des coûts importants.

Mais pendant le développement et surtout au moment des tests, disposer d'une interface de back-office permet de mieux valider la cohérence des données.

Comme Netuno facilite la construction du **modèle de données et met automatiquement à disposition dans une interface web des formulaires responsives pour la gestion des données**, il suffit d'utiliser Netuno lors de la phase de modélisation de la structure de données pour obtenir automatiquement l'interface de back-office. Assez simple !

Ensuite, vous pourrez choisir d'évoluer davantage jusqu'à développer des tableaux de bord, des rapports et les services web, le tout dans Netuno.

Ou, en raison d'un type de limitation ou d'une obligation, vous pourrez développer les services web et toute l'API REST avec n'importe quelle autre technologie, il suffit pour cela de consommer la base de données générée par Netuno.

Dans tous les cas, vous aurez Netuno comme option pour répondre aux besoins de back-office.

## Back-office pour les applications existantes

Dans des applications déjà existantes où aucun back-office n'a été développé, ou même s'il en existe un et qu'il présente des limitations.

Netuno pourra être utilisé aussi bien pour réaliser l'extension du back-office existant que pour le back-office manquant.

Comme l'effort de créer un back-office avec Netuno est assez réduit, on pourra réaliser un back-office entier dans Netuno ou seulement quelques modules.

Il appartient à la personne de décider de l'orientation des options technologiques à utiliser et à son imagination ; une chose est sûre, il ne sera pas nécessaire de compliquer beaucoup, si l'on pense au back-office modulaire qui est développé et grandit au fil du temps à sa mesure.

Normalement, développer en modules est très complexe, mais comme Netuno simplifie aussi ce processus en permettant de développer plusieurs applications sur la même base de données, c'est une excellente solution également pour développer des modules indépendants auxiliaires afin d'étendre un back-office déjà existant sans impacter le back-office existant.

Comme Netuno intègre facilement et parvient à gérer plusieurs bases de données dans la même application, il devient alors facile d'importer et d'exporter des informations vers une autre base de données.

Ce qui permet ainsi de mieux séparer la complexité du back-office des applications dans Netuno qui sont comme des « modules » supplémentaires au back-office existant.

## Conclusion

Sans aucun doute, l'un des principaux objectifs de Netuno est de simplifier au maximum le développement de back-offices et de réaliser l'intégration aussi bien dans des projets existants que dans de nouveaux projets où il s'intègre bien avec d'autres technologies.

Netuno n'est pas une plateforme fermée où tout le développement doit désormais être fait dans Netuno, bien au contraire, Netuno peut être utilisé simplement pour répondre à des besoins ponctuels afin de surmonter les limitations de :

- Coût
- Temps

Permettant d'être intégré avec n'importe quelle autre technologie.

Ainsi, si le problème est le manque d'argent ou si la date de livraison est trop serrée, et qui plus est s'il y a beaucoup de complexité et plusieurs technologies intégrées, Netuno doit être considéré comme une technologie supplémentaire qui résoudra le problème des coûts et du temps pour faciliter la vie.