---
id: cors
title: CORS
sidebar_label: CORS
---

Configurarea CORS în aplicație.

## Introducere

CORS (Cross Origin Resource Sharing) este un proces de validare pe care îl fac browserele pentru a verifica dacă pot
integra resursele partajate de la o altă adresă.

Este implementat când:

- În dezvoltarea stratului frontend cu serverul webpack, cum ar fi dezvoltarea de interfețe web
(site web sau aplicație web) folosind tehnologii moderne precum ReactJS și VueJS.
- Adresa frontend-ului este diferită de adresa serviciilor, de exemplu, când serviciile rulează la
adresa `http://localhost:9000` și frontend-ul rulează la adresa `http://localhost:3000`.
- În producție, de exemplu, serviciile rulează pe subdomeniul propriu `api.exemplu.com` și frontend-ul pe
`www.exemplu.com`.

> Mai multe despre CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno este pregătit să realizeze integrarea CORS într-un mod simplu și imediat.

## Configurare

Configurarea CORS se realizează în fișierul de configurare al aplicației, în funcție de mediu.

Pentru a face acest lucru, navigați în aplicația pe care o dezvoltați până la fișierul de configurare a mediului.
În acest exemplu, vom folosi fișierul de mediu de dezvoltare localizat la:

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

Parametrul `origins` este lista de adrese ale frontend-ului care va fi integrat cu serviciile.

### Producție

În producție trebuie să definim ca origini adresele la care frontend-ul va funcționa online.

Fișierul de configurare al aplicației unde se află definiția pentru `cors` trebuie să fie diferit, în funcție de mediu.

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

Fișierul de configurare al aplicației este `_production.json` conform configurației de mediu din Netuno, care
se află în fișierul `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Antet (Header HTTP)

Antetul standard (Header al protocolului HTTP) este:

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

În exemplul de mai sus, se va accepta doar `Authorization` în header, în locul tuturor celorlalte care erau definite
implicit.

Puteți adăuga noi definiții în header, precum și înlocui definiția standard.

## Manual

De asemenea, CORS poate fi configurat manual, în loc să se utilizeze mecanismul automat al Netuno.

În aplicația dvs. Netuno este suficient să modificați fișierul:

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

Observați că în codul de mai sus, `if` restricționează 'Headers' în funcție de adresa de origine (`Origin`).

Nu uitați să ajustați la adresele pe care le veți utiliza.

> În acest fel, toate serviciile și adresele aplicației dvs. vor suporta Headers de CORS.

### Doar pentru servicii izolate

Dacă doriți să creșteți nivelul de securitate activând Headers doar pentru servicii specifice, atunci utilizați
aceeași logică de cod în fișierul:

- `📂 server/core/_service_config.js`

În locul fișierului:

- `📂 server/core/_request_url.js`

## Concluzie

Când CORS este configurat, Netuno va răspunde automat cu antetul (Header al protocolului HTTP) standard pentru
adresele configurate ca `origins`.

`headers` standard pot fi personalizate și modificate.

Puteți configura diverse reguli CORS.

Deși Netuno suportă configurarea manuală a regulilor CORS, din punct de vedere programatic, este de preferat să
utilizați mecanismul automat integrat în configurarea aplicației.