---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Componenta de evidențiere în format mare, folosită de obicei în partea de sus a paginii.

## Introducere

**Banner**-ul este evidențierea mare a unei pagini — de obicei o imagine care ocupă toată lățimea, cu un titlu proeminent deasupra și, opțional, un text introductiv și acțiuni (butoane/linkuri).

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componente](/docs/academy/cluar/components/types).

## Câmpuri

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#campos-comuns) (Tip, Ordine, Mod de editare, Inversare fundal, Acțiuni), Banner-ul are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlu evidențiat deasupra imaginii. |
| **Conținut** (`content` / `html_content`) | Text introductiv, sub titlu. |
| **Imagine** (`image`) | Imaginea de fundal a banner-ului. |
| **Imagine Alt** (`image_alt`) | Text alternativ al imaginii, pentru accesibilitate și SEO. |
| **Titlu imagine** (`image_title`) | Atributul `title` al imaginii. |
| **Poziție X** / **Poziție Y** (`position_x`, `position_y`) | Ajustează focalizarea imaginii de fundal (`background-position`), în procente. |

## Poziția imaginii

Câmpurile **Poziție X** și **Poziție Y** controlează care parte a imaginii de fundal rămâne întotdeauna vizibilă, pe măsură ce banner-ul este redimensionat la diferite rezoluții — același principiu ca `background-position` în CSS.

De exemplu, `50%` / `50%` centrează focalizarea în mijlocul imaginii: la orice rezoluție, centrul imaginii rămâne vizibil, tăind marginile după cum este necesar.

## Tipuri disponibile

În prezent există trei tipuri de Banner:

- **Standard** (`Default`) — aspect de bază, cu titlu, conținut și acțiuni.
- **Secundar** (`Secondary`) — vizual diferit de Standard (stil propriu în CSS/LESS), dar cu aceeași structură de câmpuri.
- **Standard cu Evidențiere** (`DefaultSubBanner`) — variantă mai discretă, fără suport pentru acțiuni (`action: false` în `config.json`).

Pentru detalii despre cum funcționează tipurile și cum să creați unul nou, vezi [Tipuri de componente](/docs/academy/cluar/components/types).

## Pasul următor

Continuă cu [Conținut](/docs/academy/cluar/components/content).