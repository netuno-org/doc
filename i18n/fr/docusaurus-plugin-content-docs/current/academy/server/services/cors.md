---
id: cors
title: CORS
sidebar_label: CORS
---

Configuration de CORS dans l'application.

## Introduction

Le CORS (Cross Origin Resource Sharing) est un processus de validation que les navigateurs effectuent pour valider s'ils peuvent intégrer les ressources partagées par une autre adresse.

Il est mis en œuvre lorsque :

- Lors du développement de la couche frontend avec le serveur webpack, comme le développement d'interfaces web
(site web ou application web) utilisant des technologies modernes comme ReactJS et VueJS.
- L'adresse du frontend est différente de l'adresse des services, par exemple, lorsque les services sont exécutés à
l'adresse `http://localhost:9000` et le frontend est exécuté à l'adresse `http://localhost:3000`.
- En production, par exemple, les services s'exécutent sur leur propre sous-domaine `api.exemple.com` et le frontend sur
`www.exemple.com`.

> Plus d'informations sur le CORS :
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno est préparé pour réaliser l'intégration du CORS de manière simple et immédiate.

## Configuration

La configuration CORS est réalisée dans le fichier de configuration de l'application, selon l'environnement.

Pour ce faire, naviguez dans l'application que vous développez jusqu'au fichier de configuration d'environnement.
Dans cet exemple, nous utiliserons le fichier d'environnement de développement situé dans :

- 📂 `config/_development.json`

Vérifiez s'il n'existe pas déjà des configurations CORS ; si ce n'est pas le cas, ajoutez à la fin du fichier de configuration (au
format JSON) les paramètres de configuration :

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> La configuration CORS est un tableau et prend en charge plusieurs règles CORS distinctes.

### Origines

Dans le paramètre `origins`, il s'agit de la liste des adresses du frontend qui seront intégrées avec les services.

### Production

En production, nous devons définir comme origines les adresses sur lesquelles le frontend fonctionnera en ligne.

Le fichier de configuration de l'application où se trouve la définition de `cors` devra être différent, selon l'environnement.

Le fichier de configuration de l'application devra être :

- 📂 `config/_production.json`

Exemple de configuration CORS :

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://mon-projet.com", "https://www.mon-projet.com" ]
        }
    ]
    ...
}
```

Le fichier de configuration de l'application est `_production.json` selon la configuration d'environnement de Netuno, qui
se trouve dans le fichier `netuno/config.js` :

```javascript title="netuno/config.js"
config.env = 'production'
```

## En-tête (Header HTTP)

L'en-tête par défaut (Header du protocole HTTP) est :

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Pour personnaliser l'en-tête par défaut, ajoutez le paramètre de configuration `header`, par exemple :

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

Dans l'exemple ci-dessus, il n'acceptera dans le header que `Authorization` au lieu de tous les autres qui étaient définis
par défaut.

Vous pouvez ajouter de nouvelles définitions dans le header, comme remplacer la définition par défaut.

## Manuellement

De manière manuelle, il est également possible de configurer le CORS, au lieu d'utiliser le mécanisme automatique de Netuno.

Dans votre application Netuno, il suffit de modifier le fichier :

- `📂 server/core/_request_url.js`

Et utiliser le code suivant :

```javascript title="server/core/_request_url.js"
const origineEnTeteHttp = _header.getString("Origin", "null")

if (origineEnTeteHttp == 'https://www.mon-app.com'
	|| origineEnTeteHttp == 'http://localhost'
	|| origineEnTeteHttp == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", origineEnTeteHttp)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Remarquez que dans le code ci-dessus, le `if` restreint les 'Headers' en fonction de l'adresse d'origine (`Origin`).

N'oubliez pas d'ajuster pour les adresses que vous allez utiliser.

> De cette façon, tous les services et adresses de votre application prennent en charge les Headers CORS.

### Uniquement pour les services isolés

Si vous souhaitez augmenter le niveau de sécurité en activant les Headers uniquement pour des services spécifiques, utilisez
cette même logique de code dans le fichier :

- `📂 server/core/_service_config.js`

Au lieu du fichier :

- `📂 server/core/_request_url.js`

## Conclusion

Lorsque CORS est configuré, Netuno répondra automatiquement avec l'en-tête (Header du protocole HTTP)
par défaut pour les adresses configurées comme `origins`.

Les `headers` par défaut peuvent être personnalisés et modifiés.

Vous pouvez configurer plusieurs règles CORS.

Bien que Netuno prenne en charge la configuration manuelle des règles CORS, programmatiquement, il est préférable d'utiliser le
mécanisme automatique intégré à la configuration de l'application.