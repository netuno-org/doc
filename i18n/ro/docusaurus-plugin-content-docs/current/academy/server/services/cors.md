---
id: cors
title: CORS
sidebar_label: CORS
---

Configurarea CORS în aplicație.

## Introducere

CORS (Cross Origin Resource Sharing) este un proces de validare pe care browserele îl efectuează pentru a verifica dacă pot integra resursele partajate de o altă adresă.

Este implementat atunci când:

- În dezvoltarea stratului frontend cu serverul webpack, cum ar fi dezvoltarea de interfețe web
(site web sau aplicație web) folosind tehnologii moderne precum ReactJS și VueJS.
- Adresa frontendului este diferită de adresa serviciilor, de exemplu, când serviciile rulează la
adresa `http://localhost:9000`, iar frontendul rulează la adresa `http://localhost:3000`.
- În producție, de exemplu, serviciile rulează pe un subdomeniu propriu `api.exemplu.com`, iar frontendul pe
`www.exemplu.com`.

> Mai multe despre CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno este pregătit să realizeze integrarea CORS într-un mod simplu și imediat.

## Configurare

Configurarea CORS se realizează în fișierul de configurare al aplicației, în funcție de mediu.

Pentru a face acest lucru, navigați în cadrul aplicației pe care o dezvoltați până la fișierul de configurare a mediului.
În acest exemplu, vom utiliza fișierul de mediu de dezvoltare localizat în:

- 📂 `config/_development.json`

Verificați dacă nu există deja configurații CORS; dacă nu există, adăugați la sfârșitul fișierului de configurare (în
format JSON) parametrii de configurare:

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

> Configurarea CORS este un array și suportă mai multe reguli CORS distincte.

### Origini

În parametrul `origins` se află lista de adrese ale frontendului care va fi integrat cu serviciile.

### Producție

În producție trebuie să definim ca origini adresele la care frontendul va funcționa online.

Fișierul de configurare al aplicației în care se află definiția pentru `cors` trebuie să fie diferit, în funcție de mediu.

Fișierul de configurare al aplicației trebuie să fie:

- 📂 `config/_production.json`

Exemplu de configurare CORS:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://proiectul-meu.com", "https://www.proiectul-meu.com" ]
        }
    ]
    ...
}
```

Fișierul de configurare al aplicației este `_production.json`, conform configurației de mediu a Netuno, care
se află în fișierul `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Antet (Header HTTP)

Antetul standard (header-ul protocolului HTTP) este:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Pentru a personaliza antetul standard, adăugați parametrul de configurare `header`, de exemplu:

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

În exemplul de mai sus, se va accepta în header doar `Authorization` în locul tuturor celorlalte definite
implicit.

Puteți adăuga noi definiții în header, precum și înlocui definiția standard.

## Manual

CORS poate fi configurat și manual, în loc să utilizați mecanismul automat al Netuno.

În aplicația dumneavoastră Netuno este suficient să modificați fișierul:

- `📂 server/core/_request_url.js`

Și să utilizați următorul cod:

```javascript title="server/core/_request_url.js"
const origineHeaderHttp = _header.getString("Origin", "null")

if (origineHeaderHttp == 'https://www.aplicatia-mea.com'
	|| origineHeaderHttp == 'http://localhost'
	|| origineHeaderHttp == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", origineHeaderHttp)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Observați că în codul de mai sus `if` restricționează header-ele în funcție de adresa de origine (`Origin`).

Nu uitați să ajustați la adresele pe care le veți utiliza.

> În acest fel, toate serviciile și adresele aplicației dumneavoastră vor suporta header-ele CORS.

### Doar pentru servicii izolate

Dacă doriți să creșteți nivelul de securitate activând header-ele doar pentru servicii specifice, atunci utilizați
aceeași logică de cod în fișierul:

- `📂 server/core/_service_config.js`

În locul fișierului:

- `📂 server/core/_request_url.js`

## Concluzie

Când CORS este configurat, Netuno va răspunde automat cu antetul standard (header-ul protocolului HTTP)
pentru adresele configurate ca `origins`.

Header-ele standard (`headers`) pot fi personalizate și modificate.

Puteți configura diverse reguli CORS.

Deși Netuno suportă configurarea manuală a regulilor CORS, din punct de vedere programatic, este preferabil să utilizați
mecanismul automat integrat în configurarea aplicației.