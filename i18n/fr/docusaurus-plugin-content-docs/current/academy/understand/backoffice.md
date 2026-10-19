---
sidebar_position: 1
id: backoffice
title: Back-office
---

Dans le développement d'applications Web et/ou Mobile, il est courant d'avoir le concept de back-office, la couche de gestion des données.

C'est-à-dire qu'il s'agit d'une couche généralement sur le web où les utilisateurs de gestion de l'entreprise vont entrer dans une interface qui permet de réaliser des interventions sur les données.

Il est très courant d'avoir les exigences suivantes :

- Gestion des Utilisateurs ;
- Gestion des Groupes d'Utilisateurs ;
- Manipulation des enregistrements de base de données adaptés aux règles métier ;
- Journaux pour enregistrer ce que les utilisateurs ont fait et quand ;
- Limiter les accès, selon le groupe ou l'utilisateur ne pourra pas modifier ou même voir certaines données ;
- Permettre l'accès via navigateur et appareils mobiles ;
- Générer des rapports de gestion ;
- Tableau de bord adapté à l'entreprise avec des informations pertinentes pouvant présenter des graphiques et des tableaux ;

Pour ces raisons et d'autres, développer le back-office demande souvent autant ou plus de travail que de développer l'application finale.

De plus, il est également courant que le back-office fournisse l'API REST avec des services web qui permettront de réaliser la communication des données métier avec l'application finale, ou frontend.

![Back-office.](/docs/assets/business/business-backoffice.svg "Back-office.")

Netuno apporte un puissant moteur de back-office, où sans code il est possible de créer la structure de données en générant des formulaires intégrés avec la base de données pour les manipulations les plus courantes, comme créer, rechercher, modifier et supprimer.

Il apporte également la gestion des utilisateurs et des groupes et des contrôles d'accès avec des enregistrements de journaux.

Il permet de créer avec low-code des tableaux de bord, des rapports et l'API REST (services web) intégrée avec JWT (JSON Web Token).

> Comme Netuno apporte toutes les fonctionnalités les plus courantes prêtes à être modelées en fonction du modèle d'entreprise, l'effort pour développer un back-office sur mesure est drastiquement réduit.

## Back-office pour les Nouveaux Projets

Lors du développement de nouveaux projets, surtout lorsqu'il s'agit d'applications pour des clients externes, il est courant de pénaliser le budget du back-office, c'est-à-dire que le temps investi dans son développement et dans l'idéalisation des interfaces est pénalisé.

C'est parce que cela ne sera pas visible pour le client cible, on peut donc le laisser au second plan.

De plus, l'objectif des décideurs est davantage d'atteindre le résultat final que les couches internes de gestion, surtout lorsque cela implique des coûts importants.

Mais pendant le développement et surtout au moment des tests, avoir une interface de back-office permet de réaliser une meilleure validation de la cohérence des données.

Comme Netuno facilite la construction du **modèle de données et met automatiquement à disposition dans une interface web des formulaires responsives pour la gestion des données**, il suffit d'utiliser Netuno lors de la phase de modélisation de la structure de données et ainsi vous obtiendrez automatiquement l'interface de back-office. Assez simple !

Ensuite, vous pourrez choisir d'évoluer davantage jusqu'à développer des tableaux de bord, des rapports et les services web entièrement en Netuno.

Ou, en raison d'un type de limitation ou d'obligation, vous pourrez développer les services web et toute l'API REST avec n'importe quelle autre technologie, il suffit pour cela de consommer la base de données générée par Netuno.

De toute façon, vous aurez Netuno comme option pour répondre aux besoins de back-office.

## Back-office pour les Applications Existantes

Dans les applications déjà existantes et où un back-office n'a pas été développé, ou même s'il existe et présente des limitations.

Netuno pourra être utilisé autant pour réaliser l'expansion du back-office existant ou le back-office qui manque.

Comme l'effort de créer un back-office avec Netuno est assez réduit, on pourra faire un back-office entier en Netuno ou seulement quelques modules.

Il appartient à la personne de décider de l'orientation des options technologiques à utiliser et à son imagination, une chose est sûre, il ne sera pas nécessaire de trop compliquer, si l'on pense au back-office modulaire qui est développé et grandit au fil du temps à sa mesure.

Normalement, développer en modules est très complexe, mais comme Netuno simplifie également ce processus en permettant de développer plusieurs applications sur la même base de données, c'est une excellente solution aussi pour développer des modules indépendants auxiliaires pour étendre un back-office existant sans apporter d'impacts sur le back-office existant.

Comme Netuno intègre facilement et réussit à gérer plusieurs bases de données dans la même application, il devient facile d'importer et d'exporter des informations dans une autre base de données.

Pouvant ainsi, mieux séparer la complexité du back-office des applications en Netuno qui sont comme des "modules" additionnels au back-office existant.

## Conclusion

Sans doute l'un des principaux objectifs de Netuno est de simplifier au maximum le développement de back-offices et de réaliser l'intégration tant dans des projets existants que dans de nouveaux projets où il réussit à bien s'intégrer avec d'autres technologies.

Netuno n'est pas une plateforme fermée où tout le développement doit être fait dans Netuno, bien au contraire, Netuno peut être utilisé simplement pour répondre à des besoins ponctuels afin de surmonter les limitations de :

- Coût
- Temps

Permettant d'être intégré avec n'importe quelle autre technologie.

Ainsi, si le problème est le manque d'argent ou si la date de livraison est trop serrée, et en plus s'il y a beaucoup de complexité et plusieurs technologies intégrées, Netuno doit être considéré comme une technologie de plus qui va résoudre le problème de coûts et de temps pour faciliter la vie.