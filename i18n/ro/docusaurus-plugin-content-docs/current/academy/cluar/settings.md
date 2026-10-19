---
sidebar_position: 9
id: settings
title: Setări
sidebar_label: Setări
---

Sistemul de parametri cheie/valoare gestionat de editorul de conținut, fără a fi nevoie de cod.

## Introducere

**Setări** este un sistem de parametri cheie/valoare, gestionat de editorul de conținut din backoffice — gândit pentru valorile site-ului web care se schimbă frecvent sau variază în funcție de limbă (de exemplu: număr de telefon, adresă, linkuri către rețele sociale, o imagine de logo), fără a fi nevoie să modifici codul.

Include trei formulare în backoffice:

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

Definește o „cheie” de configurare — **Cod** (`code`, folosit în cod pentru a prelua valoarea), **Descriere** și **Tipul** (care dintre tipurile de mai sus). De exemplu: un parametru `numar-de-telefon`, de tip Text.

## Configurare

Este **valoarea** unui Parametru, pentru o anumită **Limbă** — **Valoare** (`value`, text) sau **Imagine** (`value_img`), în funcție de tipul parametrului.

### Valori fără limbă (fallback generic)

Dacă câmpul **Limbă** al unei Configurări rămâne gol, acea valoare devine **fallback pentru toate limbile** care nu au o valoare proprie definită pentru parametrul respectiv. Astfel se evită duplicarea aceleiași valori (de exemplu, un număr de telefon care este același în toate limbile) în fiecare limbă în parte — se definește o singură dată, fără limbă asociată, iar o valoare specifică pentru fiecare limbă se definește doar acolo unde este într-adevăr diferită.

## Programatic

Clasa `website/src/common/Cluar.js` pune la dispoziție funcții pentru citirea configurărilor:

- `Cluar.configuration(parametru)` — obține valoarea unui parametru în limba curentă; dacă nu există o valoare pentru acea limbă, folosește valoarea fără limbă (fallback); dacă nu există niciuna dintre cele două, returnează numele parametrului însuși (util pentru a observa rapid o configurare lipsă).
- `Cluar.configurationNumber(parametru)` — la fel, dar convertește valoarea în număr (0 dacă nu este numerică).
- `Cluar.configurationMultilines(parametru)` — la fel, dar transformă întreruperile de linie în `<br>`.

## Următorul pas

Explorează [Dicționarele](/docs/academy/cluar/dictionaries).