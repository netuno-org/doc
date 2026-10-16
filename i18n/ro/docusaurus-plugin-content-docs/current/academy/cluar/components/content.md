---
sidebar_position: 4
id: content
title: Conținut
sidebar_label: Conținut
---

Componenta de text și imagine cea mai generică din CLUAR.

## Introducere

**Conținut** este componenta de text/imagine cea mai generică din CLUAR — folosită pentru blocuri de text simplu, text cu imagine alăturată sau doar o imagine, în funcție de tipul ales.

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componentă](/docs/academy/cluar/components/types).

## Câmpuri

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#campos-comuns) (Tip, Ordine, Mod de editare, Inversare fundal, Acțiuni), Conținutul are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul blocului de conținut. |
| **Conținut** (`content` / `html_content`) | Textul blocului. |
| **Imagine** (`image`) | Imaginea asociată (nefolosită în tipurile doar text). |
| **Imagine Alt** (`image_alt`) | Text alternativ al imaginii. |
| **Titlu Imagine** (`image_title`) | Atributul `title` al imaginii. |
| **Lățime maximă a imaginii** (`image_max_width`) | Limitează lățimea imaginii, în pixeli — util pentru a nu lăsa imaginea să se întindă prea mult pe ecrane late, mai ales în tipurile în care imaginea stă lângă text. |

## Tipuri disponibile

Spre deosebire de Banner, Conținutul are mai multe tipuri axate pe diferite aranjamente de imagine și text:

- **Implicit** (`Default`)
- **Text** (`TextContent`) — doar text, fără imagine.
- **Imagine** (`ImageContent`) — doar imagine, fără text.
- **Imagine la stânga** (`ImageLeft`)
- **Imagine la dreapta** (`ImageRight`)
- **Imagine sus** (`ImageTop`)
- **Imagine jos** (`ImageBottom`)

Pentru detalii despre cum funcționează tipurile și cum să creezi unul nou, vezi [Tipuri de componentă](/docs/academy/cluar/components/types).

## Pasul următor

Continuă cu [Listarea](/docs/academy/cluar/components/listing).