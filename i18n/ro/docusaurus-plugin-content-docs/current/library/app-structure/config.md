---
id: config
title: Config
sidebar_label: Config
---

Setări generale ale aplicației.

## Folderul de Configurare

Configurările aplicației sunt disponibile în folderul `📂 config`, unde se realizează parametrizările
generale ale aplicației și ale integrărilor externe.

Netuno suportă diferite tipuri de medii; în mod implicit folosim `development` (dezvoltare) și
`production` (producție).

Mediul activ este definit în `config.js`, care se află în rădăcina instalării Netuno:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Poate fi utilizat orice nume pentru definirea mediului, iar aplicațiile trebuie să aibă același
nume de mediu ca numele fișierelor (`.json` și `.js` din folderul `📂 config` al aplicației).

În mod implicit, în acest folder găsim următoarele fișiere:

## _development.js

Injectarea de cod JavaScript care permite realizarea de configurații dinamice prin logică programatică
asupra parametrizărilor definite în fișierul `_development.json`. De exemplu, definirea unei configurații
pe baza informațiilor care se află în baza de date, definirea parametrizării comportamentului execuției
codului, printre altele.

Acest fișier este utilizat în funcție de definirea mediului, dacă acesta este `development` (dezvoltare).

## _development.json

Definirea parametrizărilor aplicației, cum ar fi limba, configurațiile generale ale resurselor și integrărilor.
De exemplu, configurații ale bazelor de date, Cron Jobs, integrări cu SMTP sau API-uri la distanță, autentificare,
printre multe altele.

Acest fișier este utilizat în funcție de definirea mediului, dacă acesta este `development` (dezvoltare).

## _production.js

Injectarea de cod JavaScript permite realizarea de configurații dinamice prin logică programatică asupra
parametrizărilor definite în `_production.js`. De exemplu, definirea configurației cu informații care se află în
baza de date, parametrizarea comportamentului execuției codului, printre altele.

Acest fișier este utilizat în funcție de definirea mediului, dacă acesta este `production` (producție).

## _production.json

Definirea parametrizărilor aplicației, cum ar fi limba, configurațiile generale ale resurselor și integrărilor.
De exemplu, configurații ale bazelor de date, Cron Jobs, integrări cu SMTP sau API-uri la distanță, autentificare,
printre multe altele.

Acest fișier este utilizat în funcție de definirea mediului, dacă acesta este `production` (producție).