---
sidebar_position: 5
id: listing
title: Listare
sidebar_label: Listare
---

Cum să prezentați o serie de elemente înrudite — produse, servicii, știri și așa mai departe.

## Introducere

**Listarea** servește pentru a prezenta o serie de elemente înrudite — produse, servicii, referințe, știri și așa mai departe. Fiecare listare are un titlu/conținut introductiv propriu și grupează mai multe **Elemente**, gestionate separat în backoffice (`Listare > Element`).

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componente](/docs/academy/cluar/components/types).

## Câmpurile listării

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#câmpuri-comune) (Tip, Ordine, Mod de editare, Inversare fundal, Acțiuni), listarea are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul listării. |
| **Conținut** (`content` / `html_content`) | Textul introductiv al listării. |
| **Imagine** (`image`) | Imaginea asociată listării în sine (nu elementelor). |
| **Imagine Alt** (`image_alt`) | Text alternativ al imaginii. |
| **Titlu imagine** (`image_title`) | Atributul `title` al imaginii. |

## Elemente

Fiecare element aparține unei listări (`page_listing_id`) și are propriile câmpuri:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul elementului. |
| **Conținut** (`content` / `html_content`) | Textul elementului. |
| **Imagine** (`image`) | Imaginea elementului. |
| **URL** (`link`) | Linkul elementului — unde ajunge utilizatorul când face clic. |
| **Ordine** (`sorter`) | Poziția elementului în cadrul listării. |

Observă că Item **nu are un câmp Tip propriu** — el moștenește tipul listării căreia îi aparține: componenta React a listării transmite `type`-ul ei fiecărui element când îl randează.

## Structura de randare

Spre deosebire de Banner și Conținut, unde fiecare tip este un folder independent în interiorul componentei, la listare componenta care randează elementele (`Item`) se află **în interiorul** folderului tipului:

```
website/src/components/Listing/
├── index.jsx              # router: alege tipul de listare
└── Default/
    ├── index.jsx           # layout-ul listării, randează <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # cum este randat fiecare element, pentru acest tip
```

Acest lucru are sens deoarece modul în care este prezentat un element (grilă, listă, carduri...) depinde de obicei direct de layout-ul listării — de aceea `Item` pentru fiecare tip poate fi personalizat împreună cu tipul în sine, în loc să fie o componentă generică partajată de toate tipurile.

## Tipuri disponibile

Momentan există doar tipul **Implicit** (`Default`). Pentru a crea un nou tip de listare (cu propriul său `Item`), urmează același proces descris în [Tipuri de componente](/docs/academy/cluar/components/types), amintindu-ți să incluzi subfolderul `Item/` în noul tip.

## Pasul următor

Continuă cu [Slider](/docs/academy/cluar/components/slider).