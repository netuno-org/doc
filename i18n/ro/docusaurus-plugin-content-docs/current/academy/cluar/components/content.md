---
sidebar_position: 4
id: content
title: Conținut
sidebar_label: Conținut
---

Componenta de text și imagine cea mai generică din CLUAR.

## Introducere

**Conținut** este componenta de text/imagine cea mai generică din CLUAR — folosită pentru blocuri de text simplu, text cu imagine alături sau doar o imagine, în funcție de tipul ales.

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componente](/docs/academy/cluar/components/types).

## Câmpuri

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#câmpuri-comune) (Tip, Ordine, Mod de editare, Inversare fundal, Acțiuni), Conținutul are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul blocului de conținut. |
| **Conținut** (`content` / `html_content`) | Textul blocului. |
| **Imagine** (`image`) | Imaginea asociată (nu este folosită la tipurile doar cu text). |
| **Alt imagine** (`image_alt`) | Textul alternativ al imaginii. |
| **Titlu imagine** (`image_title`) | Atributul `title` al imaginii. |
| **Lățimea maximă a imaginii** (`image_max_width`) | Limitează lățimea imaginii, în pixeli — util pentru a evita ca imaginea să se întindă prea mult pe ecrane late, în special la tipurile în care imaginea este plasată lângă text. |

## Tipuri disponibile

Spre deosebire de Banner, Conținutul are mai multe tipuri axate pe diferite aranjamente de imagine și text:

- **Implicit** (`Default`)
- **Text** (`TextContent`) — doar text, fără imagine.
- **Imagine** (`ImageContent`) — doar imagine, fără text.
- **Imagine la stânga** (`ImageLeft`)
- **Imagine la dreapta** (`ImageRight`)
- **Imagine în partea de sus** (`ImageTop`)
- **Imagine în partea de jos** (`ImageBottom`)

Pentru detalii despre modul în care funcționează tipurile și despre cum se creează un tip nou, vezi [Tipuri de componente](/docs/academy/cluar/components/types).

## Pasul următor

Continuă la [Listare](/docs/academy/cluar/components/listing).