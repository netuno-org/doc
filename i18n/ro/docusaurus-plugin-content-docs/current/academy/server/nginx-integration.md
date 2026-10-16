---
id: nginx-integration
title: Integrare cu NGINX
sidebar_label: Integrare cu NGINX
---

NGINX este un server web puternic care asigură performanță înaltă și versatilitate.

Cu integrarea NGINX putem beneficia de tehnicile oferite pentru a rezolva probleme legate de echilibrare, proxy invers, cache, securitate, printre altele.

![integrare-nginx1.png](/docs/assets/integracao-nginx1.png)

## Instalarea NGINX

Pentru a instala NGINX este foarte simplu, în orice distribuție Linux ar trebui să fie disponibil în pachetele sale NGINX.

În distribuțiile Ubuntu sau Debian:

```shell
apt install nginx
```

În distribuțiile CentOS, Fedora sau RedHat:

```shell
yum install nginx
```

Pe MacOS X este disponibil în brew și macports.

Pentru Windows puteți descărca instalatorul de la: http://nginx.org/en/download.html

## Configurare

Pentru acest exemplu, vom presupune că aveți deja Netuno instalat și în execuție în `/srv/netuno`.

Pentru a configura un nou site în NGINX navigați până la folderul de configurare:

* Distribuțiile Linux de obicei se află în: `/etc/nginx`
* MacOS X cu brew: `/usr/local/etc/nginx`

Creați un nou fișier de configurare pentru noul site în `sites-available/netuno`.

Iar conținutul acestui fișier va fi:

```
server {
    listen 127.0.0.1:80;
    server_name app.domeniul-dvs.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host numele-aplicatiei-dvs-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/numele-aplicatiei-dvs-netuno;
    }
}
```

Puteți modifica linia unde scrie `listen 127.0.0.1:80` pentru IP-ul dvs. extern și portul corespunzător.

Iar unde este `numele-aplicatiei-dvs-netuno` ar trebui să fie numele aplicației dvs., cum ar fi de exemplu `aplicatia-mea`.

> Dacă numele aplicației conține `_`, cum ar fi `aplicatia_mea`, aceasta deoarece Netuno nu permite `-` în numele aplicațiilor.
> Deci, întrucât în adresele de domeniu nu este acceptat `_`, trebuie înlocuit cu `-` pe care Netuno îl convertește automat în `_` și găsește aplicația corespunzătoare.

`.local.netu.no` este o scurtătură pentru `localhost`, alternativ poate fi folosit `.localhost`.

Aceasta deoarece Netuno caută automat o aplicație cu numele corespunzător subdomeniului, astfel este foarte important în `Host` care ajunge la Netuno să indicați în prefix numele aplicației.

În acest exemplu presupunem că Netuno rulează pe portul `9000` și în calea `/src/netuno`, validați această informație și adaptați dacă este necesar.

Conținutul web public al Netuno se află în folderul `core/web`, dar nu totul ar trebui expus, doar folderul `netuno`.

Prin urmare, singurele foldere care sunt expuse direct sunt folderul `core/web/netuno` și folderul `public` al aplicației corespunzătoare.

## Activarea Configurației Noului Site

Acum este necesar să creați un link simbolic către noul nostru fișier de configurare pentru a activa noul nostru site.

Aceasta deoarece metodologia de configurare a site-urilor NGINX în Linux se bazează pe păstrarea fișierelor de configurare în folderul `sites-available`, dar ceea ce este activ este definit în folderul `sites-enabled`.

Astfel, crearea linkului simbolic este importantă pentru a evita duplicarea fișierelor și a garanta că orice modificare este făcută într-un singur fișier.

În Linux se creează linkul simbolic astfel:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Reîncărcarea configurațiilor NGINX

Rețineți că pentru ca această configurație să aibă efect este necesar să reîncărcați configurațiile NGINX.

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

Sau chiar opriți complet serverul și porniți din nou:

```shell
service nginx stop
service nginx start
```

Puteți verifica starea NGINX cu comanda:

```shell
service nginx status
```

Fișierele de log NGINX se află în folderul `/var/log/nginx`.

## Adresă Locală Fictivă

Netuno rezolvă care aplicație procesează cererea (request) pe baza prefixului adresei care vine în `Host` din header-ul HTTP, iar prefixul trebuie să conțină numele exact al aplicației Netuno.

Astfel este posibil să utilizați o adresă fictivă doar pentru a indica Netuno că ar trebui să utilizeze aplicația corectă.

Avem `aplicatia-mea.local.netu.no`, care rezolvă întotdeauna IP-ul local.

> Aplicația în Netuno trebuie să fie `aplicatia_mea`, deoarece Netuno nu permite `-` în numele aplicațiilor,
> și întrucât domeniul nu acceptă `_`, atunci este înlocuit cu `-` pe care Netuno îl convertește automat în `_`.

Alternativ, se poate crea o adresă locală, cum ar fi de exemplu `aplicatia-mea.localhost`, unde în acest caz este necesar să înregistrați această adresă ca host local, ar trebui să forțați rezolvarea adresei în fișierul dvs. de hosts, în cazul Linux editați fișierul:

```plaintext
/etc/hosts
```

Și adăugați linia:

```plaintext
127.0.0.1 aplicatia-mea.localhost
```

Acum această adresă locală poate fi utilizată în NGINX.

Dacă vă aflați într-un mediu de dezvoltare local, este suficient să verificați în browserul dvs. prin adresa:

- Prin NGINX:

```plaintext
http://aplicatia-mea.localhost
```

- Direct la Netuno:

```plaintext
http://aplicatia-mea.localhost:9000
```

Dacă vă aflați pe un server sau container prin terminal, atunci utilizați comanda cURL, de exemplu:

- Prin NGINX:

```plaintext
curl -v http://aplicatia-mea.localhost:9000
```

- Direct la Netuno:

```plaintext
curl -v http://aplicatia-mea.localhost:9000
```

Asigurați-vă întotdeauna că unde ne referim la `aplicatia-mea` ar trebui să fie numele aplicației dvs.

În mediu de dezvoltare local, dacă există vreo corecție, în special a fișierului `hosts` al sistemului de operare, ar putea fi nevoie să reporniți browserul din cauza cache-ului de rezolvare DNS.

Dacă este necesar să corectați vreo configurație în NGINX, nu uitați să reîncărcați întotdeauna configurațiile.