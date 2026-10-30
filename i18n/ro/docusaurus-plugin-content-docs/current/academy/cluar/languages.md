---
sidebar_position: 5
id: languages
title: Limbi
sidebar_label: Limbi
---

Cum gestionează CLUAR limbile site-ului web și conținutul multilingv.

## Introducere

CLUAR este multilingv prin implicit: fiecare **Pagină** este asociată cu o limbă, iar site-ul web afișează un selector pentru ca vizitatorul să comute între limbile disponibile.

Limbile sunt gestionate în backoffice, prin formularul **Limbă**.

## Câmpuri

| Câmp | Descriere |
|---|---|
| **Cod** (`code`) | Codul internațional al limbii (ex.: `PT`, `EN`). Este valoarea folosită pentru a asocia conținut (pagini, dicționar, configurații) cu această limbă. |
| **Localizare** (`locale`) | Localizarea completă (ex.: `pt`, `en`). Este valoarea folosită în linkul paginilor și la schimbarea limbii prin cod. |
| **Implicit** (`default`) | Marchează această limbă ca preferată pentru site-ul web — este cea încărcată în mod implicit. |
| **Descriere** (`description`) | Numele limbii afișat vizitatorului (ex.: „Portugheză”). |

## Selectarea limbii pe site-ul web

Există în prezent două selectoare de limbă în proiect:

- **Antetul site-ului public** (`website/src/base/Header`) — selectorul tradițional, realizat cu [Meniul Ant Design](https://ant.design/components/menu/). La schimbarea limbii, navighează către `/{locale}/`. Listează doar limbile care au deja pagini publicate (prin `Cluar.pages()`), pentru a nu afișa opțiuni goale.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — folosit în interiorul Zonei Rezervate (`ReservedArea`). Este un meniu derulant mai simplu: schimbă limba activă și reîncarcă pagina curentă, fără a naviga către altă rută.

## Programatic

Clasa `website/src/common/Cluar.js` pune la dispoziție funcții pentru lucrul cu limbile:

- `Cluar.defaultLanguage()` — obține limba marcată ca implicită.
- `Cluar.currentLanguage()` — obține limba activă în acest moment.
- `Cluar.changeLanguage(codigoOuLocalizacao)` — activează altă limbă în mod programatic (acceptă atât `code`, cât și `locale`).
- `Cluar.languages()` — obține lista tuturor limbilor.

## Următorul pas

Explorează modul în care conținutul din fiecare limbă este organizat în [Pagini](/docs/academy/cluar/pages/overview).