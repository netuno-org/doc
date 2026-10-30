---
sidebar_position: 8
id: actions
title: Acțiuni
sidebar_label: Acțiuni
---

Cum să creezi și să reutilizezi CTA-uri (butoane/linkuri) asociate componentelor.

## Introducere

O **Acțiune** este, în fond, un **CTA** (call-to-action) reutilizabil — un buton/link cu titlu, text, imagine și destinație (`link`) — care poate fi asociat [Componentelor](/docs/academy/cluar/components/overview) precum Banner, Conținut, Listare, Slider (în elemente) și Funcționalitate.

## Câmpuri

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul acțiunii, redat ca titlu de secțiune (`<h4>`). |
| **Conținut** (`content`) | Text descriptiv al acțiunii, redat ca paragraf (`<p>`). |
| **Indicație** (`indication`) | Textul linkului/CTA în sine — este ceea ce apare scris **în interiorul** butonului clicabil (de exemplu: "Află mai multe", "Cumpără acum"). |
| **Imagine** (`image`) | Imagine asociată acțiunii (de exemplu, pictogramă). |
| **Legătură** (`link`) | Destinația acțiunii (URL) — unde duce CTA-ul când este clicat. |
| **Limbă** (`language_id`) | Limba căreia îi aparține această acțiune. |
| **Parametru** (`parameter_id`) | Grupează această acțiune cu echivalentele ei din alte limbi — vezi mai jos. |

## Parametru

**Parametrul** (`action_parameter`, cu doar `cod` și `descriere`) este un element de grupare: mai multe Acțiuni — fiecare în limba ei, dar reprezentând **aceeași funcționalitate/destinație** — împart același Parametru.

Acest lucru este folosit la [clonarea unei pagini](/docs/academy/cluar/pages/cloning) într-o altă limbă: pentru fiecare Acțiune asociată unui component al paginii originale, CLUAR caută, printre Acțiunile existente, una care are **același Parametru** și se află în **limba de destinație** a clonării. Dacă o găsește, asociază automat acea Acțiune (versiunea deja tradusă) componentului clonat — fără a fi nevoie să o adaugi manual mai târziu.

:::info Trebuie să creezi mai întâi Acțiunea în limba de destinație
Asocierea automată funcționează doar dacă există deja o Acțiune cu același Parametru în limba în care clonezi. Dacă încă nu există, acțiunea pur și simplu nu este asociată componentului clonat — rămâne ca și cum nu ar fi fost definită. Adică, Parametrul nu traduce și nici nu creează automat Acțiunea; el doar leagă Acțiuni echivalente deja existente, odată ce acestea au fost create în fiecare limbă.
:::

De exemplu: o Acțiune "Află mai multe" cu Parametrul `afla-mai-multe`, în română, și o altă Acțiune "Learn more" cu același Parametru `afla-mai-multe`, în engleză — la clonarea unei pagini din română în engleză, un Banner căruia îi era asociată prima Acțiune primește automat a doua.

## Pasul următor

Explorează [Configurările](/docs/academy/cluar/settings).