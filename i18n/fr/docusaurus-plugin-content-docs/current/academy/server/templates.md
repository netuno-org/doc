---
id: templates
title: Modèles
sidebar_label: Modèles
---

## Avant de commencer
Avant de créer des services qui appellent des modèles, assurez-vous de savoir créer des **Services Web REST** ; si ce n'est pas le cas, consultez le lien suivant :

* [Services Web REST](/docs/academy/server/services/rest)

Il est également conseillé, avant de commencer ce tutoriel, de vous assurer que vous avez des notions de base en _**JavaScript**_.

## Utilisation de modèles dans les services

Dans ce tutoriel, nous aborderons la création de modèles et les actions nécessaires pour pouvoir les appeler dans votre service.

Lorsque vous créez un service dans Netuno, vous avez la possibilité d'accéder à des modèles que vous avez créés ; selon le résultat, vous pouvez rediriger votre service vers un modèle HTML avec des données.

Dans cet exemple, nous aurons un modèle de base en HTML et nous passerons des données du service vers ce même modèle.

## Création d'un modèle

![modeles1.png](/docs/assets/templates1.png)

Après vous être placé dans le répertoire ci-dessus, nous allons créer un fichier en `.html` ; dans cet exemple, il sera nommé `modele.html`.

Voici le contenu de cette page :

```html
<!-- Appel à l'en-tête de Netuno -->
_{include=_|includes/head}

<!-- Définition des styles -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Début du corps HTML -->
<h1>Titre du modèle</h1>

<!-- Lorsque vous devez passer des données d'un service vers un modèle, utilisez _{&variable} -->
<p>Bonjour, je suis un <b>_{&data=nom}</b> et je reçois <b>_{&data=donnees}</b> d'un service !</p>

<!-- Fin du corps HTML -->

<!-- Appel au pied de page de Netuno -->
_{include=_|includes/foot}
```

Enfin, on crée le service avec l'appel au modèle à l'aide de la fonction suivante :

`_template.output('nom_du_modele', variables(optionnel));`

Voici l'exemple du service 'service.js' :

```javascript
// Initialiser l'objet 'data' pour qu'il puisse recevoir des données
var data = _val.init()
    
// Associer des valeurs à l'objet 'data'
    .set("nom", "modele")
    .set("donnees", "données")

// C'est cette fonction qui permet d'effectuer l'appel au modèle
_template.output("modele", data);
```

> Si votre modèle se trouve dans un sous-répertoire, indiquez-le dans la fonction : `_template.output('repertoire/nom_du_modele')`

Enfin, il suffit d'appeler le service dans le navigateur et quelque chose de similaire à ce qui suit apparaîtra :

![modeles2.png](/docs/assets/templates2.png)

> Notez que, selon votre navigateur, les résultats présentés précédemment peuvent différer.

Si vous avez des questions, n'hésitez pas à nous contacter via les moyens présentés en bas de page.

Bon développement !