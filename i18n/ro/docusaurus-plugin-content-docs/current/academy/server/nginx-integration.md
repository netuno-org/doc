---
id: nginx-integration
title: Integrare cu NGINX
sidebar_label: Integrare cu NGINX
---

NGINX este un server web puternic care garantează performanță ridicată și versatilitate.

Cu integrarea NGINX putem beneficia de tehnicile oferite pentru a rezolva aspecte legate de echilibrarea încărcării,
proxy invers, cache, securitate, printre altele.

![integrare-nginx1.png](/docs/assets/integracao-nginx1.png)

## Instalarea NGINX

Pentru a instala NGINX este foarte simplu; în orice distribuție Linux, NGINX ar trebui să fie disponibil în pachetele sale.

În distribuții Ubuntu sau Debian:

```shell
apt install nginx
```

În distribuții CentOS, Fedora sau RedHat:

```shell
yum install nginx
```

Pe MacOS X este disponibil în brew și macports.

Pentru Windows puteți descărca instalatorul de la: http://nginx.org/en/download.html

## Configurare

Pentru acest exemplu, vom presupune că aveți deja Netuno instalat și în execuție în `/srv/netuno`.

Pentru a configura un nou site în NGINX, navigați la directorul de configurare:

* Distribuțiile Linux de obicei se află în: `/etc/nginx`
* MacOS X cu brew: `/usr/local/etc/nginx`

Creați un nou fișier de configurare pentru noul site în `sites-available/netuno`.

Și conținutul acestui fișier va fi:

```
server {
    listen 127.0.0.1:80;
    server_name app.domeniul-tau.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host numele-aplicatiei-tale-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/numele-aplicatiei-tale-netuno;
    }
}
```

Puteți modifica linia în care scrie `listen 127.0.0.1:80` la IP-ul dvs. extern și portul corespunzător.

Și acolo unde apare `numele-aplicatiei-tale-netuno` ar trebui să fie numele aplicației dvs., cum ar fi `aplicatiamea`.

> Dacă numele aplicației conține `_`, cum ar fi `aplicatia_mea`, aceasta se datorează faptului că Netuno nu permite `-` în numele aplicațiilor.
> Așadar, deoarece în adresele de domeniu `_` nu este acceptat, trebuie înlocuit cu `-`, pe care Netuno îl convertește automat în `_` și găsește aplicația corespunzătoare.

`.local.netu.no` este o scurtătură pentru `localhost`; alternativ, se poate utiliza `.localhost`.

Aceasta deoarece Netuno caută automat o aplicație cu numele corespunzător subdomeniului, astfel este foarte important ca în `Host` care ajunge la Netuno să indicați în prefix numele aplicației.

În acest exemplu presupunem că Netuno rulează pe portul `9000` și în calea `/src/netuno`; validați această informație și adaptați dacă este necesar.

Conținutul web public al Netuno se află în directorul `core/web`, dar nu totul ar trebui expus, doar directorul `netuno`.

Prin urmare, singurele directoare expuse direct sunt directorul `core/web/netuno` și directorul `public` al aplicației corespunzătoare.

## Activarea configurației noului site

Acum trebuie să creați un link simbolic către noul fișier de configurare pentru a activa noul site.

Aceasta deoarece metodologia de configurare a site-urilor NGINX în Linux se bazează pe păstrarea fișierelor de configurare în directorul `sites-available`, dar ceea ce este activ este definit în directorul `sites-enabled`.

Astfel, crearea linkului simbolic este importantă pentru a evita duplicarea fișierelor și a garanta că orice modificare este făcută într-un singur fișier.

În Linux, linkul simbolic se creează astfel:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Reîncărcarea configurațiilor NGINX

Rețineți că, pentru ca această configurație să aibă efect, este necesar să reîncărcați configurațiile NGINX.

Reîncărcare:

```shell
nginx -s reload
```

Sau reporniți:

```shell
killall nginx
nginx
```

Sau în modul cel mai elegant:

```shell
service nginx restart
```

Sau opriți complet serverul și porniți-l din nou:

```shell
service nginx stop
service nginx start
```

Puteți verifica starea NGINX cu comanda:

```shell
service nginx status
```

Fișierele de log ale NGINX se află în directorul `/var/log/nginx`.

## Adresă locală fictivă

Netuno determină ce aplicație procesează cererea (request) pe baza prefixului adresei care vine în `Host` din headerul HTTP, iar prefixul trebuie să conțină numele exact al aplicației Netuno.

Astfel, este posibil să utilizați o adresă fictivă doar pentru a indica Netuno că trebuie să utilizeze aplicația corectă.

Avem `aplicatia-mea.local.netu.no`, care se rezolvă întotdeauna la IP-ul local.

> Aplicația în Netuno trebuie să fie `aplicatia_mea`, deoarece Netuno nu permite `-` în numele aplicațiilor,
> iar deoarece domeniul nu acceptă `_`, acesta trebuie înlocuit cu `-`, pe care Netuno îl convertește automat în `_`.

Alternativ, puteți crea o adresă locală, cum ar fi `aplicatia-mea.localhost`; în acest caz este necesar să înregistrați această adresă ca host local, trebuie să forțați rezolvarea adresei în fișierul dvs. hosts; în cazul Linux, editați fișierul:

```plaintext
/etc/hosts
```

Și adăugați linia:

```plaintext
127.0.0.1 aplicatia-mea.localhost
```

Acum această adresă locală poate fi utilizată în NGINX.

Dacă vă aflați într-un mediu de dezvoltare local, este suficient să verificați în browser la adresa:

- Prin NGINX:

```plaintext
http://aplicatia-mea.localhost
```

- Direct către Netuno:

```plaintext
http://aplicatia-mea.localhost:9000
```

Dacă vă aflați pe un server sau container prin terminal, atunci utilizați comanda cURL, de exemplu:

- Prin NGINX:

```plaintext
curl -v http://aplicatia-mea.localhost:9000
```

- Direct către Netuno:

```plaintext
curl -v http://aplicatia-mea.localhost:9000
```

Asigurați-vă întotdeauna că acolo unde facem referire la `aplicatia-mea` trebuie să fie numele aplicației dvs.

Într-un mediu de dezvoltare local, dacă există vreo corecție, în special a fișierului `hosts` al sistemului de operare, poate fi necesar să reporniți browserul din cauza cache-ului de rezolvare DNS.

Dacă este necesar să corectați vreo configurație în NGINX, nu uitați să reîncărcați întotdeauna configurațiile.