---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Componenta de carusel, pentru a prezenta o secvență de elemente evidențiate.

## Introducere

**Slider** prezintă o secvență de elemente într-un carusel — fiecare cu imagine de fundal, titlu, text și, opțional, propriile acțiuni. Este randat cu biblioteca [Keen Slider](https://keen-slider.io/).

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componente](/docs/academy/cluar/components/types).

## Câmpuri Slider

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#campos-comuns) (Tip, Ordine, Mod de editare, Inversare fundal), Slider are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul blocului slider. |
| **Conținut** (`content` / `html_content`) | Text introductiv al blocului. |
| **Imagine** (`image`) | Imaginea asociată sliderului în sine (nu elementelor). |
| **Imagine Alt** (`image_alt`) | Text alternativ al imaginii. |
| **Titlu imagine** (`image_title`) | Atributul `title` al imaginii. |

## Elemente

Fiecare element aparține unui Slider (`page_slider_id`) și este unul dintre „slide-urile” caruselului:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul slide-ului. |
| **Conținut** (`content` / `html_content`) | Textul slide-ului. |
| **Imagine** (`image`) | Imaginea de fundal a slide-ului. |
| **Imagine Alt** (`image_alt`) | Text alternativ al imaginii. |
| **Titlu imagine** (`image_title`) | Atributul `title` al imaginii. |
| **Ordine** (`sorter`) | Poziția slide-ului în carusel. |
| **Acțiuni** | Fiecare element poate avea propriile acțiuni asociate — vezi [Acțiuni](/docs/academy/cluar/actions). |

:::info Diferență față de Listare
Spre deosebire de Elementul din Listare, Elementul din Slider **are acțiuni proprii**, asociate individual (`page_slider_item_action`) — fiecare slide poate avea propriul buton/link.
:::

## Structura de randare

La fel ca în Listare, `Element` din Slider se află **în interiorul** folderului tipului, nu ca folder frate:

```
website/src/components/Slider/
├── index.jsx              # router: alege tipul de slider
└── Implicit/
    ├── index.jsx           # layout-ul sliderului, montează caruselul cu <Element />
    ├── info.json
    ├── config.json
    └── Element/
        └── index.jsx        # fiecare slide, inclusiv acțiunile proprii
```

## Tipuri disponibile

În prezent există doar tipul **Implicit** (`Implicit`). Pentru a crea un nou tip de Slider (cu propriul `Element`), urmează același proces descris în [Tipuri de componente](/docs/academy/cluar/components/types), amintindu-ți să incluzi subfolderul `Element/` în noul tip.

## Următorul pas

Continuă la [Funcționalitate](/docs/academy/cluar/components/functionality).