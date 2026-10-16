---
sidebar_position: 9
id: settings
title: Configurări
sidebar_label: Configurări
---

Sistemul de parametri cheie/valoare gestionați de editorul de conținut, fără a fi nevoie de cod.

## Introducere

**Configurările** sunt un sistem de parametri cheie/valoare, gestionați de editorul de conținut din backoffice — gândit pentru valori ale site-ului care se schimbă frecvent sau variază în funcție de limbă (de exemplu: număr de telefon, adresă, linkuri de rețele sociale, o imagine de logo), fără a fi nevoie să modifici codul.

Implică trei formulare în backoffice:

- **Tip** (`configuration_parameter_type`)
- **Parametru** (`configuration_parameter`)
- **Configurare** (`configuration`)

## Tip

Definește ce tip de valoare acceptă un Parametru. Are doar **Cod** (`code`) și **Nume** (`name`). Sunt deja create implicit:

| Cod | Nume |
|---|---|
| `boolean` | Boolean |
| `number` | Număr |
| `image` | Imagine |
| `color` | Culoare |
| `text` | Text |
| `html` | HTML |

## Parametru

Definește o „cheie” de configurare — **Cod** (`code`, folosit în cod pentru a obține valoarea), **Descriere** și **Tipul** (care dintre tipurile de mai sus). De exemplu: un parametru `numar-telefon`, de tip Text.

## Configurare

Este **valoarea** unui Parametru, pentru o anumită **Limbă** — **Valoare** (`value`, text) sau **Imagine** (`value_img`), în funcție de tipul parametrului.

### Valori fără limbă (fallback generic)

Dacă câmpul **Limbă** al unei Configurări rămâne gol, acea valoare devine **fallback pentru toate limbile** care nu au o valoare proprie definită pentru acel parametru. Astfel se evită duplicarea aceleiași valori (de exemplu: un număr de telefon care este același în toate limbile) în fiecare limbă separat — se definește o singură dată, fără limbă asociată, și se definește o valoare specifică pe limbă doar acolo unde este cu adevărat diferită.

## Programatic

Clasa `website/src/common/Cluar.js` pune la dispoziție funcții pentru citirea configurațiilor:

- `Cluar.configuration(parametru)` — obține valoarea unui parametru în limba curentă; dacă nu există valoare pentru acea limbă, folosește valoarea fără limbă (fallback); dacă nu există niciuna dintre ele, returnează numele parametrului însuși (util pentru a observa rapid o configurare lipsă).
- `Cluar.configurationNumber(parametru)` — la fel, dar convertește valoarea în număr (0 dacă nu este numeric).
- `Cluar.configurationMultilines(parametru)` — la fel, dar convertește liniile noi în `<br>`.

## Următorul pas

Explorează [Dicționarele](/docs/academy/cluar/dictionaries).