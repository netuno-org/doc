---
sidebar_position: 10
id: dictionaries
title: Dicționare
sidebar_label: Dicționare
---

Cum se traduc textele fixe ale interfeței site-ului.

## Introducere

**Dicționare** reprezintă sistemul de traduceri al textelor fixe din interfața site-ului — etichete, mesaje, texte ale butoanelor — lucruri care nu sunt conținut de pagină, ci text „încorporat” în cod, și care totuși trebuie să existe în fiecare limbă.

Implică două formulare în backoffice:

- **Intrare** (`dictionary_entry`)
- **Dicționar** (`dictionary`)

## Intrare

Define o „cheie” de traducere — **Cod** (`code`, folosit în cod pentru a prelua valoarea) și **Descriere**. Ex.: o intrare `formular-contact-succes`, folosită pentru mesajul de succes al formularului de contact (este exact cea care apare în [`FormularContact`](/docs/academy/cluar/components/functionality) din Funcționalitate).

## Dicționar

Este **valoarea tradusă** a unei Intrări, pentru o anumită **Limbă** (`language_id`) — câmpul **Valoare** (`value`, acceptă HTML).

:::info Fără valoare generică/fără limbă
Spre deosebire de [Configurări](/docs/academy/cluar/settings), Dicționarul **nu are** un mecanism de fallback fără limbă — fiecare Intrare are nevoie de o Valoare definită explicit pentru fiecare limbă în care este folosită. Dacă lipsește traducerea într-o limbă, textul care apare este însuși codul Intrării (ex.: `formular-contact-succes`), nu o valoare generică.
:::

## Programatic

Clasa `website/src/common/Cluar.js` pune la dispoziție funcții pentru citirea intrărilor din dicționar, toate returnând codul intrării ca rezultat dacă nu există traducere (util pentru a observa traducerile lipsă):

- `Cluar.dictionary(intrare)` — obține valoarea tradusă în limba curentă, exact așa cum a fost salvată (poate include HTML).
- `Cluar.plainDictionary(intrare)` — la fel, dar elimină etichetele `<p>` și `<br>`. Este cea mai utilizată în etichetele interfeței (butoane, câmpuri de formular, notificări).
- `Cluar.plainTitle(intrare)` — la fel, dar elimină doar etichetele `<p>`.
- `Cluar.plainHTML(intrare)` — elimină toate etichetele HTML.
- `Cluar.dictionaryNoParagraph(intrare)` — elimină doar etichetele `<p>` (echivalent cu `plainTitle`).

## Pasul următor

Explorați [Șabloanele](/docs/academy/cluar/templates).