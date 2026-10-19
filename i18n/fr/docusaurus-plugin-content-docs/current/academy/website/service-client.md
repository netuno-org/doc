---
sidebar_position: 4
id: service-client
title: Client pour services HTTP et API REST
sidebar_label: Client pour services
---

## Introduction

Dans l'écosystème technologique de Netuno, certains modules sont fournis sur NPM, comme :

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Voir aussi le dépôt [GIT du Service Client](https://github.com/netuno-org/service-client).

Ce module sert à réaliser les intégrations avec les services développés dans Netuno, c'est-à-dire les points de terminaison 
de l'API REST développés dans le backend de Netuno, dans le dossier `server/services` des applications Netuno.

Il est courant, lors du développement des services, d'utiliser des programmes comme :

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

Pour effectuer les tests de requêtes HTTP vers les services.

Dans le code frontend pour intégrer ces services, nous pourrions utiliser fetch, requests, AXIOS, et bien d'autres.

Cependant, Netuno fournit son propre client, qui fonctionne dans le développement frontend JavaScript ainsi 
qu'en backend NodeJS.

La raison pour laquelle Netuno dispose de sa propre implémentation de client HTTP pour les services est d'offrir une plus grande 
praticité, en simplifiant l'implémentation du code et en garantissant une plus grande agilité dans le développement.

## Installation

L'installation du client de services est comme l'installation de tout autre module.

Là où nous avons le fichier `package.json`, nous exécutons la commande d'installation :

```bash
bun add @netuno/service-client
```

## Importation

Pour importer le client de services dans le développement JavaScript moderne :

```js
import _service from '@netuno/service-client';
```

Pour importer le client de services dans le développement JavaScript classique :

```js
const _service = require('@netuno/service-client');
```

Remarquez que le nom interne dans le code est `_service`.

> Par défaut, Netuno utilise le `_` comme préfixe pour indiquer qu'il s'agit de quelque chose d'interne ou de spécifique comme une ressource 
> ou un outil, de son écosystème.

Par conséquent, pour maintenir le standard, nous devons toujours utiliser le nom `_service`.

## Configuration

La configuration se fait globalement, on définit la configuration une
seule fois, il convient de l'exécuter à un point initial du code général.

Ce sera la configuration minimale :

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

C'est-à-dire, définit le préfixe des adresses des services, cela évite
la nécessité de toujours mettre l'URL complète, ainsi nous pouvons dans les
appels aux services indiquer seulement le reste de l'URL.

### Configuration complète

Nous pouvons configurer des valeurs par défaut pour tous les appels de
services, étant entendu que dans l'appel à chaque service nous pouvons remplacer
ces valeurs.

Voyez tous les paramètres que nous pouvons configurer :

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

C'est le préfixe global des URL.

#### url

C'est la partie de l'URL qui est ajoutée au préfixe, l'adresse spécifique
du service.

#### method

Méthode HTTP qui sera utilisée dans la requête HTTP, par
défaut c'est `GET`.

#### credentials

Définit le comportement des informations d'identification dans les appels HTTP :

- `omit` - N'envoie jamais et ne reçoit jamais d'informations d'identification.
- `same-origin` - Envoie et inclut des informations d'identification uniquement lorsque les requêtes sont sur le même domaine.
- `include` - Doit toujours inclure les informations d'identification, même si le domaine est différent.

Par défaut, la valeur est `include`, car c'est ce qui a le plus de sens dans
le développement standard, le backend peut être ou non sur le même domaine
cela dépend de l'architecture, et en développement local, cela diffère parfois
de la production, donc pour éviter les surprises, nous recommandons d'utiliser
`include`.

#### headers

Dans les `headers`, nous pouvons définir des clés et des valeurs dans l'en-tête HTTP.

Par défaut, il est défini que les données seront envoyées et reçues au format
JSON.

#### start

Fonction de `callback` exécutée lorsqu'elle va initier la requête HTTP.

#### success

Fonction de `callback` exécutée lorsque la requête HTTP a été exécutée
avec succès sur le serveur backend.

Le contenu de la réponse est obtenu dans le premier argument de la fonction.

#### fail

Fonction de `callback` exécutée lorsque la requête HTTP a généré une
erreur.

Les détails de l'erreur sont obtenus dans le premier argument de la fonction.

#### end

Fonction de `callback` exécutée lorsque la requête HTTP a été terminée.

Elle est exécutée toujours, indépendamment s'il y a eu succès ou erreur.

## Utilisation

Pour exécuter un service avec une requête HTTP, nous définissons les valeurs
des paramètres qui configurent les exigences du service.

Dans la clé `data`, nous envoyons les données elles-mêmes, c'est-à-dire tous les paramètres
de données que nous allons envoyer au service backend.

Voyez l'exemple basique d'une requête :

```js
import _service from '@netuno/service-client';

_service({
  url: "mon-service",
  data: { id: 1, exemple: "Bonjour backend." },
  start: () => {
    console.log("La requête va démarrer.");
  },
  success: (réponse) => {
    if (réponse.text) {
      console.info("A répondu en texte :", réponse.text);
    }
    if (réponse.json) {
      console.info("A répondu en JSON :", réponse.json);
    }
  },
  fail: (erreur) => {
    console.error("A échoué avec l'erreur :", erreur);
  },
  end: () => {
    console.log("La requête a été terminée.");
  }
});
```

L'URL finale prendra en compte le préfixe défini globalement dans la
configuration générale.

Comme la méthode HTTP n'a pas été définie, elle sera envoyée avec la
méthode par défaut qui a été définie dans la configuration générale, qui par
défaut est `GET`.

### Simple

Exemple simple de comment exécuter une requête de type `POST` :

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "produit",
  data: { nom: "Chapeau de Paille", quantité: 20 },
  success: ({json}) => {
    console.info("Produit créé avec succès :", json);
  },
  fail: (erreur) => {
    console.error("Échec de la création du produit :", erreur);
  }
});
```

### Formulaire

Lorsque nous utilisons des formulaires, nous pouvons charger la classe FormData avec le contenu du formulaire, voyez l'exemple :

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formulaire"));
_service({
  method: "PUT",
  url: "client",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Client mis à jour avec succès.");
    } else {
      alert("Réponse invalide.");
    }
  },
  fail: (e) => {
    console.log("Erreur", e);
  }
});
```

### Téléversement

Exemple simple de comment effectuer le téléversement de fichiers en utilisant la classe `FormData` :

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('fichier', document.getElementById("champFichier").files[0]);
formData.append('autreChamp', 'valeur...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('Fichier envoyé avec succès.');
  },
  fail: (e) => {
    console.log("Erreur dans la réponse", e);
  }
});
```

### Téléchargement

Nous pouvons effectuer le téléchargement de fichiers générés dynamiquement par des services de manière intégrée dans le contexte de la
page.

#### BLOB - Objet Binaire Grand

Pour effectuer le téléchargement de réponses binaires, nous devons définir le `blob` avec la valeur `true` dans la paramétrisation de base, 
et nous obtenons les octets générés dans le `blob` de la réponse.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Définit que la réponse est binaire.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Réponse invalide.");
    }
  },
  fail: (e) => {
    console.log("Erreur", e);
  }
});
```

#### Fichier personnalisé

Le nom et le type du fichier peuvent être personnalisés dans le frontend, la dépendance [DownloadJS](https://www.npmjs.com/package/downloadjs) est très utile dans ce processus.

Installez la dépendance [DownloadJS](https://www.npmjs.com/package/downloadjs) :

```shell
bun add downloadjs
```

Dans le code, elle peut être utilisée de la manière suivante :

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/rapport/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "rapport.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Erreur", e);
  }
});

_service({
  url: "/services/rapport/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "rapport.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Erreur", e);
  }
});
```

### URL pour les services

Il y a des situations où nous devons générer l'URL de services, par exemple, lorsqu'il y a des services qui fournissent des ressources qui 
doivent être intégrées dans le HTML ou le CSS.

Un exemple clair est l'Avatar, l'utilisateur définit son image d'avatar, et pour l'afficher, nous pouvons générer l'URL finale
de la manière suivante :

```js
const lienAvatar = _service.url(`/profil/avatar?uid=${utilisateur.uid}`)
```

L'URL générée peut être injectée dans le HTML ou dans une propriété CSS, comme le background.

### React & Ant.Design

Comme nous utilisons beaucoup React et Ant.Design, voici quelques conseils utiles.

Les imports classiques :

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Définir l'état de traitement :

```js
const [chargement, setChargement] = useState(false);
```

Implémentation de l'événement pour sauvegarder un formulaire, qui enverra l'objet avec les valeurs remplies au format JSON :

```js
const onFinish = (valeurs) => {
  const onEchec = () => {
    notification.error({
      title: 'Erreur',
      description: 'Impossible de sauvegarder les données.'
    });
  };
  _service({
    url: '/services/client',
    method: 'POST',
    data: valeurs,
    start: () => {
      setChargement(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Succès',
          description: 'Les données ont été sauvegardées avec succès.'
        });
        return;
      }
      onEchec();
    },
    fail: (e) => {
      console.error("Échec du service.", e);
      onEchec();
    },
    end: () => {
        setChargement(false);
    },
  });
};
```

Dans le composant de formulaire d'Ant.Design, on définit la propriété de l'action qui envoie les données avec l'événement 
précédemment implémenté, par exemple :

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Téléversement

Voici un exemple complet de comment effectuer le téléversement de fichiers en utilisant un formulaire dans Ant.Design et avec
le FormData :

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function FormulaireTéléversement() {
  const [chargement, setChargement] = useState(false);
  const onFinish = (valeurs)=> {
    const formData = new FormData();
    formData.append("titre", valeurs.titre);
    formData.append("fichier", valeurs.fichier.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "fichier/sauvegarder",
      data: formData,
      start: () => {
        setChargement(true);
      },
      success: () => {
        notification.success({
          title: 'Formulaire',
          description: 'Vos données ont été sauvegardées avec succès.'
        });
      },
      fail: (e) => {
        console.error("Échec du formulaire de téléversement", e);
        notification.error({
          title: 'Formulaire',
          description: 'Impossible de sauvegarder vos données.'
        });
      },
      end: () => {
        setChargement(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Titre" name="titre"
        rules={[{ required: true, message: 'Veuillez saisir le titre.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Fichier" name="fichier"
        rules={[{ required: true, message: 'Veuillez saisir le fichier.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Téléverser</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" chargement={chargement}>
          Sauvegarder
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormulaireTéléversement;
```

## Conclusion

Le Service Client facilite l'intégration avec le backend pour obtenir et envoyer des données et des fichiers.

Il est possible d'utiliser toute autre méthode native ou une autre dépendance pour réaliser ces opérations, cependant le
Service Client est développé pour faciliter et accélérer les intégrations, étant flexible et très intuitif.

L'objectif principal de Netuno en fournissant le Service Client dans son écosystème est de garantir que le développement soit
clair et rapide.

En utilisant le Service Client, si vous rencontrez un problème, signalez-le dans les [Issues](https://github.com/netuno-org/service-client/issues) du projet.

⭐ N'oubliez pas de donner votre étoile sur le GitHub du projet :

- [netuno-org/service-client](https://github.com/netuno-org/service-client).