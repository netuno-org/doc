---
id: custom-urls
title: URL personnalisées
sidebar_label: URL personnalisées
---

## Introduction

Netuno permet de modifier les adresses par défaut, par exemple :

- L'adresse de l'interface d'administration, `admin`.
- L'adresse des fichiers publics, comme les images, CSS et JS, `public`.
- L'adresse des services de l'API REST, `services`.

## Configuration

Naviguez dans l'application que vous développez jusqu'au fichier de configuration d'environnement. Dans cet exemple, nous utiliserons le fichier d'environnement de développement situé à :

- 📂 `config/_development.json`

Vérifiez si la configuration d'URL n'existe pas déjà ; si elle n'existe pas, ajoutez à la fin du fichier de configuration (au format JSON) les paramètres de configuration d'URL, comme par exemple :

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Définit le préfixe de l'adresse URL de l'interface d'administration ; la valeur par défaut est simplement `/`.

### public

Définit le préfixe de l'adresse URL des fichiers statiques publics comme les images, le style CSS et le code JavaScript ; la valeur par défaut est `/public`.

### services

Définit l'adresse URL initiale des services web de l'API REST ; la valeur par défaut est `/services`.

## Conclusion

La personnalisation des URL est importante, tant pour la rendre plus intuitive que pour la rendre plus complexe et augmenter la sécurité.

Par exemple, dans l'adresse d'administration, on peut placer un préfixe avec une chaîne de caractères aléatoires ; ainsi, seul celui qui la connaît par cœur accédera à l'adresse d'accès, ce qui complique l'accès et évite les attaques.