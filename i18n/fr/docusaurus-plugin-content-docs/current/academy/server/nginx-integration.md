---
id: nginx-integration
title: Intégration avec NGINX
sidebar_label: Intégration avec NGINX
---

NGINX est un serveur web puissant qui garantit des performances élevées et une grande polyvalence.

Avec l'intégration de NGINX, nous pouvons bénéficier des techniques offertes pour résoudre des questions d'équilibrage de charge, de proxy inverse, de cache, de sécurité, entre autres.

![intégration-nginx1.png](/docs/assets/integracao-nginx1.png)

## Installer NGINX

Pour installer NGINX, c'est très simple : dans n'importe quelle distribution Linux, NGINX devrait être disponible dans vos paquets.

Sur les distributions Ubuntu ou Debian :

```shell
apt install nginx
```

Sur les distributions CentOS, Fedora ou RedHat :

```shell
yum install nginx
```

Sur MacOS X, il est disponible via brew et macports.

Pour Windows, vous pouvez télécharger l'installateur à l'adresse : http://nginx.org/en/download.html

## Configuration

Pour cet exemple, nous supposons que vous avez déjà Netuno installé et en cours d'exécution dans `/srv/netuno`.

Pour configurer un nouveau site dans NGINX, naviguez jusqu'au dossier de configuration :

* Sur les distributions Linux, il se trouve généralement dans : `/etc/nginx`
* Sur MacOS X avec brew : `/usr/local/etc/nginx`

Créez un nouveau fichier de configuration pour le nouveau site dans `sites-available/netuno`.

Et le contenu de ce fichier sera :

```
server {
    listen 127.0.0.1:80;
    server_name app.votre-domaine.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host nom-de-votre-app-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/nom-de-votre-app-netuno;
    }
}
```

Vous pouvez modifier la ligne où il est indiqué `listen 127.0.0.1:80` pour votre IP externe et le port correspondant.

Et là où se trouve `nom-de-votre-app-netuno`, il doit s'agir du nom de votre application, par exemple `monapp`.

> Si le nom de l'application contient un `_`, comme `mon_app`, c'est parce que Netuno n'autorise pas le `-` dans le nom des applications.
> Donc, comme les adresses de domaine ne prennent pas en charge le `_`, vous devez le remplacer par `-`, que Netuno convertit automatiquement en `_` et trouve l'application correspondante.

Le `.local.netu.no` est un raccourci pour `localhost`, vous pouvez également utiliser `.localhost`.

En effet, Netuno recherche automatiquement une application dont le nom correspond au sous-domaine ; il est donc très important, dans le `Host` qui arrive à Netuno, d'indiquer le nom de l'application en préfixe.

Dans cet exemple, nous supposons que Netuno est en cours d'exécution sur le port `9000` et dans le chemin `/src/netuno` ; vérifiez cette information et adaptez-la si nécessaire.

Le contenu web public de Netuno se trouve dans le dossier `core/web`, mais tout ne doit pas être exposé, seulement le dossier `netuno`.

Par conséquent, les seuls dossiers exposés directement sont le dossier `core/web/netuno` et le dossier `public` de l'application correspondante.

## Activer la configuration du nouveau site

Maintenant, il faut créer un lien symbolique vers notre nouveau fichier de configuration pour activer notre nouveau site.

En effet, la méthodologie de configuration de sites de NGINX sous Linux consiste à placer les fichiers de configuration dans le dossier `sites-available`, mais ce qui est actif est défini dans le dossier `sites-enabled`.

Ainsi, la création du lien symbolique est importante pour éviter la duplication de fichiers et garantir que toute modification soit effectuée dans un seul fichier.

Sous Linux, on crée le lien symbolique de cette façon :

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Rechargement des configurations de NGINX

Rappelez-vous que pour que cette configuration prenne effet, il est nécessaire de recharger les configurations de NGINX.

Recharger :

```shell
nginx -s reload
```

Ou redémarrez :

```shell
killall nginx
nginx
```

Ou de la manière la plus élégante :

```shell
service nginx restart
```

Ou encore arrêtez complètement le serveur et redémarrez-le :

```shell
service nginx stop
service nginx start
```

Vous pouvez vérifier l'état de NGINX avec la commande :

```shell
service nginx status
```

Les fichiers de logs de NGINX se trouvent dans le dossier `/var/log/nginx`.

## Adresse locale fictive

Netuno détermine quelle application traite la requête (request) en fonction du préfixe de l'adresse présente dans le `Host` de l'en-tête HTTP ; le préfixe doit contenir le nom exact de l'application Netuno.

Il est donc possible d'utiliser une adresse fictive uniquement pour indiquer à Netuno qu'il doit utiliser la bonne application.

Nous avons `mon-app.local.netu.no`, qui résout toujours vers l'IP locale.

> L'application dans Netuno doit être `mon_app`, car Netuno n'autorise pas le `-` dans le nom des applications,
> et comme le domaine ne prend pas en charge le `_`, il doit être remplacé par `-`, que Netuno convertit automatiquement en `_`.

Alternativement, vous pouvez créer une adresse locale, par exemple `mon-app.localhost`, auquel cas il faut enregistrer cette adresse comme hôte local ; vous devez forcer la résolution de l'adresse dans votre fichier hosts. Sous Linux, éditez le fichier :

```plaintext
/etc/hosts
```

Et ajoutez la ligne :

```plaintext
127.0.0.1 mon-app.localhost
```

Maintenant, cette adresse locale peut être utilisée dans NGINX.

Si vous êtes dans un environnement de développement local, il suffit de vérifier dans votre navigateur via l'adresse :

- Via NGINX :

```plaintext
http://mon-app.localhost
```

- Directement à Netuno :

```plaintext
http://mon-app.localhost:9000
```

Si vous êtes sur un serveur ou dans un conteneur via terminal, utilisez alors la commande cURL, par exemple :

- Via NGINX :

```plaintext
curl -v http://mon-app.localhost:9000
```

- Directement à Netuno :

```plaintext
curl -v http://mon-app.localhost:9000
```

Assurez-vous toujours que là où nous faisons référence à `mon-app`, il doit s'agir du nom de votre application.

Dans un environnement de développement local, s'il y a une correction, notamment du fichier `hosts` du système d'exploitation, il peut être nécessaire de redémarrer le navigateur en raison du cache de résolution DNS.

Si vous devez corriger une configuration dans NGINX, n'oubliez pas de toujours recharger les configurations.