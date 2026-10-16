---
id: config
title: Configurare
sidebar_label: Configurare
---

Setări generale ale aplicației.

## Dosarul Configurărilor

Configurările aplicației sunt disponibile în dosarul `📂 config`, acesta este locul unde se realizează parametrizările 
generale ale aplicației și ale integrărilor externe.

Netuno suportă diverse tipuri de medii, în mod implicit folosim `development` (dezvoltare) și `production` (producție), 

Mediul activ este definit în `config.js` care se află în rădăcina instalării Netuno:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Poate fi utilizat orice nume pentru a defini mediul, iar aplicațiile trebuie să aibă același
nume de mediu ca numele fișierelor (`.json` și `.js` în dosarul `📂 config` al aplicației.

În mod implicit, în acest dosar găsim următoarele fișiere:

## _development.js

Injectarea de cod JavaScript care permite realizarea de configurări dinamice prin logica programatică 
asupra parametrizărilor definite în fișierul `_development.json`. De exemplu, definirea unei configurări
pe baza informațiilor care se află în baza de date, definirea parametrizării comportamentului execuției 
codului, printre altele.

Acest fișier este utilizat în funcție de definirea mediului, în cazul în care este `development` (dezvoltare). 

## _development.json

Definirea parametrizărilor aplicației precum limba, configurările generale ale resurselor și integrărilor.
De exemplu, configurări ale bazelor de date, Cron Jobs, integrări cu SMTP sau API-uri remote, autentificare,
printre multe altele. 

Acest fișier este utilizat în funcție de definirea mediului, în cazul în care este `development` (dezvoltare).

## _production.js

Injectarea de cod JavaScript permite realizarea de configurări dinamice prin logică programatică asupra 
parametrizărilor definite în `_production.js`. De exemplu, definirea configurării cu informații care se află în 
baza de date, parametrizarea comportamentului execuției codului, printre altele. 

Acest fișier este utilizat în funcție de definirea mediului, în cazul în care este `production` (producție). 

## _production.json

Definirea parametrizărilor aplicației precum limba, configurările generale ale resurselor și integrărilor.
De exemplu, configurări ale bazelor de date, Cron Jobs, integrări cu SMTP sau API-uri remote, autentificare,
printre multe altele.

Acest fișier este utilizat în funcție de definirea mediului, în cazul în care este `production` (producție).