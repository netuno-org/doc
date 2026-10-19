---
id: nginx-integration
title: Integratie met NGINX
sidebar_label: Integratie met NGINX
---

NGINX is een krachtige webserver die hoge prestaties en veelzijdigheid garandeert.

Met de NGINX-integratie kunnen we profiteren van beschikbare technieken om zaken zoals load balancing,
reverse proxy, caching en beveiliging op te lossen, onder andere.

![integratie-nginx1.png](/docs/assets/integracao-nginx1.png)

## NGINX installeren

NGINX installeren is heel eenvoudig; in elke Linux-distributie zou NGINX beschikbaar moeten zijn in de pakketten.

Op Ubuntu- of Debian-distributies:

```shell
apt install nginx
```

Op CentOS-, Fedora- of RedHat-distributies:

```shell
yum install nginx
```

Op MacOS X is het beschikbaar via brew en macports.

Voor Windows kun je het installatieprogramma downloaden op: http://nginx.org/en/download.html

## Configuratie

Voor dit voorbeeld gaan we ervan uit dat je Netuno al hebt geïnstalleerd en draait in `/srv/netuno`.

Om een nieuwe site in NGINX te configureren, ga je naar de configuratiemap:

* Op Linux-distributies staat deze meestal in: `/etc/nginx`
* MacOS X met brew: `/usr/local/etc/nginx`

Maak een nieuw configuratiebestand voor de nieuwe site aan in `sites-available/netuno`.

En de inhoud van dit bestand is:

```
server {
    listen 127.0.0.1:80;
    server_name app.jouw-domein.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host naam-van-je-netuno-app.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/naam-van-je-netuno-app;
    }
}
```

Je kunt de regel waarin `listen 127.0.0.1:80` staat, wijzigen naar je externe IP en bijbehorende poort.

En waar `naam-van-je-netuno-app` staat, moet de naam van je app komen, bijvoorbeeld `mijnapp`.

> Als de naam van de applicatie een `_` bevat, zoals `mijn_app`, komt dat doordat Netuno geen `-` toestaat in de namen van
> applicaties.
> Omdat `_` niet wordt ondersteund in domeinadressen, moet je deze vervangen door `-`; Netuno converteert
> dit automatisch naar `_` en vindt de bijbehorende app.

`.local.netu.no` is een snelkoppeling naar `localhost`; als alternatief kan `.localhost` worden gebruikt.

Dit komt doordat Netuno automatisch zoekt naar een app met de naam die overeenkomt met het subdomein; daarom is het heel belangrijk om in de `Host` die bij Netuno aankomt, in het prefix de naam van de applicatie aan te geven.

In dit voorbeeld gaan we ervan uit dat Netuno draait op poort `9000` en in het pad `/src/netuno`; controleer deze informatie en pas aan indien nodig.

De openbare webinhoud van Netuno staat in de map `core/web`, maar niet alles mag worden blootgesteld; alleen de map `netuno`.

Daarom zijn de enige mappen die rechtstreeks worden blootgesteld de map `core/web/netuno` en de map `public` van de bijbehorende applicatie.

## Configuratie van de nieuwe site activeren

Nu moet je een symbolische link naar ons nieuwe configuratiebestand maken om onze nieuwe site te activeren.

Dit komt doordat de methode voor het configureren van NGINX-sites op Linux erop gebaseerd is dat configuratiebestanden in de map `sites-available` staan, maar wat actief is, wordt bepaald in de map `sites-enabled`.

Daarom is het maken van de symbolische link belangrijk om duplicatie van bestanden te voorkomen en ervoor te zorgen dat elke wijziging in één enkel bestand wordt aangebracht.

Op Linux maak je de symbolische link als volgt:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## NGINX-configuratie herladen

Houd er rekening mee dat je de NGINX-configuratie opnieuw moet laden om deze configuratie effect te laten hebben.

Herladen:

```shell
nginx -s reload
```

Of herstart:

```shell
killall nginx
nginx
```

Of op de nettere manier:

```shell
service nginx restart
```

Of stop de server volledig en start opnieuw:

```shell
service nginx stop
service nginx start
```

Je kunt de status van NGINX controleren met het commando:

```shell
service nginx status
```

De logbestanden van NGINX staan in de map `/var/log/nginx`.

## Fictief lokaal adres

Netuno bepaalt welke applicatie het verzoek (request) verwerkt op basis van het prefix van het adres in de `Host`-header van HTTP; dit prefix moet de exacte naam van de Netuno-applicatie bevatten.

Daarom is het mogelijk een fictief adres te gebruiken, alleen om Netuno aan te geven dat de juiste applicatie moet worden gebruikt.

We hebben `mijn-app.local.netu.no`, dat altijd naar het lokale IP verwijst.

> De applicatie in Netuno moet `mijn_app` zijn, omdat Netuno geen `-` toestaat in de namen van applicaties,
> en omdat het domein `_` niet ondersteunt, moet dit worden vervangen door `-`, wat Netuno automatisch naar `_` converteert.

Als alternatief kun je een lokaal adres aanmaken, bijvoorbeeld `mijn-app.localhost`; in dat geval moet je dit adres registreren als lokale host. Je moet de resolutie van het adres forceren in je hosts-bestand; op Linux bewerk je het bestand:

```plaintext
/etc/hosts
```

En voeg de regel toe:

```plaintext
127.0.0.1 mijn-app.localhost
```

Nu kan dit lokale adres in NGINX worden gebruikt.

Als je in een lokale ontwikkelomgeving zit, controleer je in je browser via het adres:

- Via NGINX:

```plaintext
http://mijn-app.localhost
```

- Rechtstreeks naar Netuno:

```plaintext
http://mijn-app.localhost:9000
```

Als je op een server of in een container via de terminal werkt, gebruik dan bijvoorbeeld het cURL-commando:

- Via NGINX:

```plaintext
curl -v http://mijn-app.localhost:9000
```

- Rechtstreeks naar Netuno:

```plaintext
curl -v http://mijn-app.localhost:9000
```

Zorg er altijd voor dat waar we `mijn-app` vermelden, de naam van je applicatie moet staan.

In een lokale ontwikkelomgeving kan het, als er een correctie is aangebracht, vooral in het `hosts`-bestand van het besturingssysteem, nodig zijn de browser opnieuw te starten vanwege de DNS-resolutiecache.

Als je een configuratie in NGINX moet corrigeren, vergeet dan niet altijd de configuratie opnieuw te laden.