---
id: rest
title: REST - Services Web
sidebar_label: REST - Services Web
---

## Introduction

Les requêtes REST sont des adresses en ligne qui renvoient des informations sur des données traitées sur le serveur, qui contient la logique métier des données exigeant sécurité et fiabilité, avec intégration de la base de données.

> En savoir plus sur <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

La construction de l'API REST est basée sur les Services de Netuno.

## ALL

Pour créer un service dans Netuno qui répond à tout type de méthode HTTP :

- `📂 server/services/mon-service.js`

Dans le navigateur, ce service sera exécuté pour tous les types de requêtes à l'adresse :

- http://localhost:9000/services/mon-service

## GET

Les adresses de type GET sont normalement utilisées pour des opérations de listage ou d'obtention de données.

Pour créer un service dans Netuno qui répond uniquement au type de méthode GET, utilisez l'une de ces formes :

- `📂 server/services/liste/get.js`
- `📂 server/services/liste.get.js`

Dans le navigateur, ce service sera exécuté uniquement pour le type de requête GET à l'adresse :

- GET http://localhost:9000/services/liste

## POST

Les adresses de type POST sont normalement utilisées pour des opérations qui créent ou génèrent de nouvelles données.

Pour créer un service dans Netuno qui répond uniquement au type de méthode POST, créez le fichier de code en utilisant l'une de ces formes :

- `📂 server/services/créer/post.js`
- `📂 server/services/créer.post.js`

Ce service sera exécuté uniquement pour le type de requête POST à l'adresse :

- POST http://localhost:9000/services/créer

## PUT

Les adresses de type PUT sont normalement utilisées pour des opérations qui modifient des enregistrements de données.

Pour créer un service dans Netuno qui répond uniquement au type de méthode PUT, créez le fichier de code en utilisant l'une de ces formes :

- `📂 server/services/enregistrer/put.js`
- `📂 server/services/enregistrer.put.js`

Ce service sera exécuté uniquement pour le type de requête PUT à l'adresse :

- PUT http://localhost:9000/services/enregistrer

## DELETE

Les adresses de type DELETE sont normalement utilisées pour des opérations qui suppriment de nouveaux enregistrements de données.

Pour créer un service dans Netuno qui répond uniquement au type de méthode DELETE, créez le fichier de code en utilisant l'une de ces formes :

- `📂 server/services/supprimer/delete.js`
- `📂 server/services/supprimer.delete.js`

Ce service sera exécuté uniquement pour le type de requête DELETE à l'adresse :

- DELETE http://localhost:9000/services/supprimer

## OPTIONS

Dans l'intégration avec le frontend, lors du processus de validation CORS, le navigateur effectue un appel de type OPTIONS.

> En savoir plus sur <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Pour créer un service dans Netuno qui répond uniquement au type de méthode OPTIONS, créez le fichier de code en utilisant l'une de ces formes :

- `📂 server/services/lister/options.js`
- `📂 server/services/lister.options.js`

Doit être implémenté pour tous les services intégrés à un frontend externe, comme un site web.

Code habituellement utilisé :

```javascript
_out.json(_val.map().set("result", true))
```

Ce service sera exécuté pour le type de requête OPTIONS à l'adresse :

- OPTIONS http://localhost:9000/services/lister

## Clients et Exécution de Tests

Pour exécuter des tests sur les services avec un type de méthode spécifique, vous pouvez utiliser des programmes dédiés qui réalisent des tests sur API REST, comme :

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Avec la commande `curl` dans le terminal, vous pouvez effectuer tout type de test.

À partir de la console/ligne de commande, envoyez un GET :

```
curl http://localhost:9000/services/sauvegarder
```

Avec `-X`, vous pouvez spécifier le type de méthode :

```
curl -X POST -F 'nom=Test' -F 'email=email@exemple.com' http://localhost:9000/services/sauvegarder
```

> Le paramètre `-F` envoie avec le Content-Type : `multipart/form-data`

Une autre façon d'envoyer des paramètres :

```
curl -X POST -d 'nom=Test' -d 'email=email@exemple.com' http://localhost:9000/services/sauvegarder
```

Peut être concaténé de la manière suivante :

```
curl -X POST -d 'nom=Test&email=email@exemple.com' http://localhost:9000/services/sauvegarder
```

> Le paramètre `-d` envoie avec le Content-Type : `application/x-www-form-urlencoded`

### JSON

Pour envoyer au format JSON, il est nécessaire de spécifier le type de contenu :

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nom": "Test", "email": "email@exemple.com"}' \
    http://localhost:9000/services/sauvegarder
```

> Le `-H` définit la paramétrisation de l'en-tête (_HEADER_)

### Upload

Pour effectuer l'upload de fichiers :

```
curl -X POST -F 'image=@/home/utilisateur/fichier.jpg' http://localhost:9000/services/sauvegarder
```

## Service Client - NPM

Pour faciliter l'intégration avec le frontend, le module NPM suivant est disponible :

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Commande d'installation : `npm i -S @netuno/service-client`

En définissant l'adresse des services, comme :

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Vous pourrez exécuter des services intégrés avec le frontend, comme par exemple :

```
  _service({
      url: "/services/mon-service",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Réponse du service", response.json);
          }
      },
      fail: (e) => {
          console.log("Erreur du service", e);
      }
  });
```

## Conclusion

Il est possible de restreindre les services à un type de méthode HTTP spécifique.

Pour intégrer avec le frontend, cela peut être fait au niveau le plus bas en utilisant `fetch`.

Pour accélérer et standardiser l'implémentation, le module NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client) est disponible.