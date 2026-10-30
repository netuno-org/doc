---
id: custom-urls
title: URL-uri personalizate
sidebar_label: URL-uri personalizate
---

## Introducere

Netuno permite modificarea adreselor implicite, de exemplu:

- Adresa interfeței de administrare, `admin`.
- Adresa fișierelor publice, cum ar fi imagini, CSS și JS, `public`.
- Adresa serviciilor API REST, `services`.

## Configurare

Navigați în aplicația pe care o dezvoltați până la fișierul de configurare a mediului. În acest exemplu, vom folosi fișierul de mediu de dezvoltare localizat în:

- 📂 `config/_development.json`

Verificați dacă configurația URL nu există deja; dacă nu există, adăugați la sfârșitul fișierului de configurare (în format JSON) parametrii de configurare URL, cum ar fi:

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

Definește prefixul adresei URL al interfeței de administrare, valoarea implicită este doar `/`.

### public

Definește prefixul adresei URL al fișierelor statice care sunt publice, cum ar fi imagini, stiluri CSS și cod JavaScript, valoarea implicită este `/public`.

### services

Definește adresa URL inițială a serviciilor web API REST, valoarea implicită este `/services`.

## Concluzie

Personalizarea URL-urilor este importantă, atât pentru a le face mai intuitive, cât și pentru a le putea face mai complexe și a crește securitatea.

De exemplu, în adresa de administrare poate fi plasat un prefix cu o secvență de caractere aleatorii, astfel doar cine știe pe de rost va accesa adresa de acces, ceea ce îngreunează accesul și evită atacurile.