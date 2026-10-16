---
sidebar_position: 8
id: actions
title: Acțiuni
sidebar_label: Acțiuni
---

Cum se creează și se reutilizează CTA-uri (butoane/linkuri) asociate componentelor.

## Introducere

O **Acțiune** este, în esență, un **CTA** (apel la acțiune) reutilizabil — un buton/link cu titlu, text, imagine și destinație (`link`) — care poate fi asociat [Componentelor](/docs/academy/cluar/components/overview) precum Banner, Conținut, Listare, Slider (la elemente) și Funcționalitate.

## Câmpuri

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul acțiunii, redat ca titlu de secțiune (`<h4>`). |
| **Conținut** (`content`) | Textul descriptiv al acțiunii, redat ca paragraf (`<p>`). |
| **Indicație** (`indication`) | Textul linkului/CTA în sine — este ceea ce apare scris **în interiorul** butonului clicabil (de ex.: „Află mai mult”, „Cumpără acum”). |
| **Imagine** (`image`) | Imaginea asociată acțiunii (de ex.: pictogramă). |
| **Legătură** (`link`) | Destinația acțiunii (URL) — unde duce CTA-ul când este clicat. |
| **Limbă** (`language_id`) | Limba căreia îi aparține această acțiune. |
| **Parametru** (`parameter_id`) | Grupează această acțiune cu echivalentele sale din alte limbi — vezi mai jos. |

## Parametru

**Parametrul** (`action_parameter`, cu doar `código` și `descrição`) este un grupator: mai multe Acțiuni — fiecare în limba sa, dar reprezentând **aceeași funcționalitate/destinație** — partajează același Parametru.

Acest lucru este folosit la [clonarea unei pagini](/docs/academy/cluar/pages/cloning) către altă limbă: pentru fiecare Acțiune asociată unui component din pagina originală, CLUAR caută, printre Acțiunile existente, una care are **același Parametru** și se află în **limba de destinație** a clonării. Dacă o găsește, asociază automat acea Acțiune (versiunea deja tradusă) componentului clonat — fără a fi nevoie să o adăugați manual după aceea.

:::info Trebuie să creați mai întâi Acțiunea în limba de destinație
Asocierea automată funcționează doar dacă există deja o Acțiune cu același Parametru în limba către care se clonează. Dacă încă nu există, acțiunea pur și simplu nu este asociată componentului clonat — rămâne ca și cum nu ar fi fost definită. Adică, Parametrul nu traduce și nu creează automat Acțiunea; el doar leagă Acțiuni echivalente deja existente, odată ce acestea au fost create în fiecare limbă.
:::

De exemplu: o Acțiune „Află mai mult” cu Parametrul `afla-mai-mult`, în română, și o altă Acțiune „Learn more” cu același Parametru `afla-mai-mult`, în engleză — la clonarea unei pagini din română în engleză, un Banner care avea prima Acțiune asociată va avea automat a doua.

## Pasul următor

Explorează [Configurările](/docs/academy/cluar/settings).