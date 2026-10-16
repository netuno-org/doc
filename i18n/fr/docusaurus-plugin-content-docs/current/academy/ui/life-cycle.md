---
sidebar_position: 7
id: life-cycle
title: Événements du Cycle de Vie de l'Interface
sidebar_label: Événements du Cycle de Vie
---

## Interface Utilisateur (`ui`)

Dans l'interface de gestion de données de Netuno, il est possible d'injecter du code sur mesure pour réaliser des personnalisations et des manipulations sur mesure.

Le développement est réalisé dans la programmation à l'intérieur du dossier `ui` dans le dossier racine de l'application.

### addPageLoad()

La page ne peut pas être manipulée en toute sécurité tant que l'application n'est pas « prête ».

La méthode sera appelée lorsque la page sera chargée.

```javascript
netuno.addPageLoad(() => {
   console.log('je fais quelque chose');
});
```

### addContentLoad()

Lorsque des formulaires ou des rapports sont chargés, l'interface est alors modifiée avec le contenu correspondant, qu'il s'agisse d'un formulaire de données, d'une recherche ou du filtrage de données d'un rapport.

Dès qu'un contenu est chargé, la méthode est appelée et reçoit le conteneur qui contiendra le contenu en cours de présentation.

```javascript
netuno.addContentLoad((conteneur) => {
   if (conteneur.is('[netuno-form-search]')) {
       console.log("je fais des trucs quand l'élément existe");
   }
});
```