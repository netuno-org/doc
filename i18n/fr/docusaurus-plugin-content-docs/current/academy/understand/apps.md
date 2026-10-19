---
sidebar_position: 2
id: apps
title: Applications
---

Netuno est un serveur multi-applications qui distribue l'accès aux applications via des domaines et sous-domaines.

De multiples applications web peuvent être publiques ou privées, comme Netuno réalise la construction de back-offices. Donc, par norme, les applications ont toujours un accès privé, mais l'interface publique est optionnelle.

Lors du développement de multiples applications dans Netuno, elles peuvent être découplées ou même couplées au niveau de la base de données.

Cela signifie que nous pouvons partager la même base de données entre plusieurs applications ou avoir des bases de données séparées pour chaque application.

## Applications découplées dans plusieurs bases de données

Lorsqu'il s'agit d'applications avec des périmètres complètement différents, il n'est pas logique qu'elles partagent la même base de données.

Imaginez que vous avez une application pour l'envoi de newsletters, une autre pour gérer des livres et une autre pour gérer les livraisons, aucune n'ayant besoin d'informations stockées dans une autre application ; celles-ci sont complètement indépendantes.

Ainsi, il n'y a aucune raison pour qu'elles partagent la même base de données ; chacune doit plutôt avoir sa propre base de données :

![Applications découplées.](/docs/assets/business/apps-db-pt-desacopladas.svg "Applications découplées.")

De cette façon, aucune application ne connaît les informations stockées dans les autres applications et tout son fonctionnement est indépendant des autres applications existantes.

## Applications couplées dans la même base de données

Lorsque nous travaillons avec des applications qui doivent partager des informations et où il peut y avoir un grand volume de données, le partage de la base de données est la solution la plus viable en termes de performance, mais ce n'est pas la meilleure solution en termes de sécurité et d'intégrité des données.

Ainsi, pour des raisons de sécurité et d'intégrité, on crée normalement de grandes applications web où tout est centralisé dans une application complexe qui utilise sa base de données exclusive ; si l'application a besoin de données externes, elle peut s'intégrer à d'autres bases de données et services web si nécessaire.

Dans ce cas, Netuno fournit déjà tous les moyens pour le développement de ce type d'applications, mais offre également une bonne solution pour les applications avec une base de données partagée.

Le principal problème étant la sécurité et l'intégrité des données, avec Netuno, lorsque plusieurs applications utilisent la même base de données, celles-ci sont automatiquement limitées à leurs tables qui sont liées à leurs formulaires.

Il permet de partager le formulaire et par conséquent sa table avec les autres applications couplées dans la base de données.

Imaginez le scénario dans lequel vous avez une application pour la gestion des clients, une autre pour la gestion des fournisseurs et une autre pour la facturation, car vous aurez à la fois des factures de fournisseurs à payer et des factures de clients à recevoir.

L'application client ne doit pas partager de données avec l'application fournisseur, ce sont des applications distinctes.

Mais l'application de facturation doit s'intégrer aux deux applications pour obtenir les données des applications clients et fournisseurs afin de pouvoir associer les factures et gérer les encaissements et les paiements dans les diverses situations.

![Applications couplées.](/docs/assets/business/apps-db-pt-acopladas.svg "Applications couplées.")

Pour garantir que les applications n'interfèrent pas dans les données sensibles les unes des autres, il est également recommandé d'utiliser des accès distincts à la base de données pour chaque application, et on peut encore contrôler via la base de données leurs accès aux tables afin de garantir qu'il n'y ait pas d'interférence indésirable.

Pour le reste, Netuno effectue le contrôle pour séparer ce qui appartient à une application ou à une autre et aussi ce qui est partagé entre elles.

## Adresse de chaque application

Netuno effectue automatiquement la distribution de l'accès aux applications via le domaine et le sous-domaine.

Lorsqu'une requête arrive dans Netuno, le domaine est traité de la manière suivante :

![Image d'exemple de l'adresse de l'application avec sous-domaine.](/docs/assets/business/apps-subdomain.svg "Applications avec sous-domaine.")

Netuno vérifie jusqu'au premier point s'il existe une application avec ce nom.

Si une application avec ce nom existe, alors c'est cette application qui recevra la requête.

Si aucune application avec ce nom n'existe, alors la requête sera transmise à l'application par défaut (_default_).

Cette résolution de domaines fonctionne également lorsqu'il s'agit d'un sous-sous-domaine, par exemple :


![Image d'exemple de l'adresse de l'application avec sous-sous-domaine.](/docs/assets/business/apps-sub-subdomain.svg "Applications avec sous-sous-domaine.")

C'est-à-dire que jusqu'au premier point, on définit quelle sera l'application qui recevra la requête à traiter.

Et Netuno permet également de définir une adresse exacte avec domaine pour l'application ; il suffit de définir quelle sera l'adresse exacte à laquelle l'application fonctionnera.

> L'utilisation de la forme automatique pour traiter les domaines permet le fonctionnement des applications dans la grande majorité des cas ; si malgré tout il y a des situations qui nécessitent une adresse complètement différente et spécifique pour le fonctionnement de l'application, il est alors nécessaire de la définir dans sa configuration.