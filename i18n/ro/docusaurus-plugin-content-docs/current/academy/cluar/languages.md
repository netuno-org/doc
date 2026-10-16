---
sidebar_position: 5
id: languages
title: Limbi
sidebar_label: Limbi
---

Cum gestionează CLUAR limbile site-ului și conținutul multilingv.

## Introducere

CLUAR este multilingv implicit: fiecare **Pagină** este asociată unei limbi, iar site-ul afișează un selector pentru ca vizitatorul să schimbe între limbile disponibile.

Limbile sunt gestionate în backoffice, prin formularul **Limbă**.

## Câmpuri

| Câmp | Descriere |
|---|---|
| **Cod** (`code`) | Codul internațional al limbii (ex.: `RO`, `EN`). Este valoarea folosită pentru a asocia conținut (pagini, dicționar, configurații) cu această limbă. |
| **Localizare** (`locale`) | Localizarea completă (ex.: `ro`, `en`). Este valoarea folosită în linkul paginilor și la schimbarea limbii prin cod. |
| **Implicit** (`default`) | Marchează această limbă ca preferată a site-ului — este cea încărcată implicit. |
| **Descriere** (`description`) | Numele limbii afișat vizitatorului (ex.: "Română"). |

## Selectarea limbii pe site

Există astăzi două selectoare de limbă în proiect:

- **Header-ul site-ului public** (`website/src/base/Header`) — selectorul tradițional, realizat cu [Meniul Ant Design](https://ant.design/components/menu/). La schimbarea limbii, navighează către `/{locale}/`. Afișează doar limbile care au deja pagini publicate (prin `Cluar.pages()`), pentru a nu arăta opțiuni goale.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — folosit în Zona Rezervată (`ReservedArea`). Este un dropdown mai simplu: schimbă limba activă și reîncarcă pagina curentă, fără a naviga către altă rută.

## Programatic

Clasa `website/src/common/Cluar.js` pune la dispoziție funcții pentru lucrul cu limbile:

- `Cluar.defaultLanguage()` — obține limba marcată ca implicită.
- `Cluar.currentLanguage()` — obține limba activă în acest moment.
- `Cluar.changeLanguage(codSauLocalizare)` — activează altă limbă în mod programatic (acceptă atât `code`, cât și `locale`).
- `Cluar.languages()` — obține lista tuturor limbilor.

## Pasul următor

Explorează cum este organizat conținutul în fiecare limbă în [Pagini](/docs/academy/cluar/pages/overview).