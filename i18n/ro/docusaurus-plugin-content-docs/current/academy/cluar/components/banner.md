---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Componenta de evidențiere de mari dimensiuni, folosită de obicei în partea de sus a paginii.

## Introducere

**Banner** este elementul mare de evidențiere al unei pagini — de obicei o imagine pe toată lățimea, cu un titlu proeminent deasupra și, opțional, un text introductiv și acțiuni (butoane/linkuri).

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componente](/docs/academy/cluar/components/types).

## Câmpuri

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#câmpuri-comune) (Tip, Ordine, Mod de editare, Inversare fundal, Acțiuni), Bannerul are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlu evidențiat peste imagine. |
| **Conținut** (`content` / `html_content`) | Text introductiv, sub titlu. |
| **Imagine** (`image`) | Imaginea de fundal a bannerului. |
| **Imagine Alt** (`image_alt`) | Text alternativ al imaginii, pentru accesibilitate și SEO. |
| **Titlu imagine** (`image_title`) | Atributul `title` al imaginii. |
| **Poziția X** / **Poziția Y** (`position_x`, `position_y`) | Ajustează focalizarea imaginii de fundal (`background-position`), în procente. |

## Poziția imaginii

Câmpurile **Poziția X** și **Poziția Y** controlează ce parte a imaginii de fundal rămâne mereu vizibilă pe măsură ce bannerul este redimensionat la diferite rezoluții — același principiu ca `background-position` în CSS.

De exemplu, `50%` / `50%` centrează focalizarea în mijlocul imaginii: la orice rezoluție, centrul imaginii rămâne vizibil, decupând marginile după cum este necesar.

## Tipuri disponibile

În prezent există trei tipuri de Banner:

- **Standard** (`Default`) — aspect de bază, cu titlu, conținut și acțiuni.
- **Secundar** (`Secondary`) — vizual diferit de Standard (stil propriu în CSS/LESS), dar cu aceeași structură de câmpuri.
- **Standard cu evidențiere** (`DefaultSubBanner`) — variantă mai discretă, fără suport pentru acțiuni (`action: false` în `config.json`).

Pentru detalii despre modul în care funcționează tipurile și despre cum se creează un tip nou, vezi [Tipuri de componente](/docs/academy/cluar/components/types).

## Pasul următor

Continuă la [Conținut](/docs/academy/cluar/components/content).