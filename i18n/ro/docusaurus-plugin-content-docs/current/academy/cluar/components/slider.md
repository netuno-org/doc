---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Componenta de carusel, pentru a prezenta o succesiune de elemente în evidență.

## Introducere

**Slider** prezintă o succesiune de elemente sub formă de carusel — fiecare cu imagine de fundal, titlu, text și, opțional, propriile acțiuni. Este randat cu biblioteca [Keen Slider](https://keen-slider.io/).

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componentă](/docs/academy/cluar/components/types).

## Câmpurile Sliderului

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#câmpuri-comune) (Tip, Ordine, Mod de editare, Inversare fundal), Sliderul are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul blocului de slider. |
| **Conținut** (`content` / `html_content`) | Textul introductiv al blocului. |
| **Imagine** (`image`) | Imaginea asociată sliderului în sine (nu elementelor). |
| **Imagine Alt** (`image_alt`) | Textul alternativ al imaginii. |
| **Imagine Titlu** (`image_title`) | Atributul `title` al imaginii. |

## Elemente

Fiecare element aparține unui Slider (`page_slider_id`) și este unul dintre „slide-urile” caruselului:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul slide-ului. |
| **Conținut** (`content` / `html_content`) | Textul slide-ului. |
| **Imagine** (`image`) | Imaginea de fundal a slide-ului. |
| **Imagine Alt** (`image_alt`) | Textul alternativ al imaginii. |
| **Imagine Titlu** (`image_title`) | Atributul `title` al imaginii. |
| **Ordine** (`sorter`) | Poziția slide-ului în cadrul caruselului. |
| **Acțiuni** | Fiecare element poate avea propriile acțiuni asociate — vezi [Acțiuni](/docs/academy/cluar/actions). |

:::info Diferența față de Listare
Spre deosebire de Elementul Listării, Elementul Sliderului **are acțiuni proprii**, asociate individual (`page_slider_item_action`) — fiecare slide poate avea propriul său buton/link.
:::

## Structura de randare

La fel ca în Listare, `Item` al Sliderului se află **în interiorul** folderului tipului, nu ca folder frate:

```
website/src/components/Slider/
├── index.jsx              # router: alege tipul de slider
└── Default/
    ├── index.jsx           # layout-ul sliderului, montează caruselul cu <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # fiecare slide, inclusiv propriile acțiuni
```

## Tipuri disponibile

Momentan există doar tipul **Standard** (`Default`). Pentru a crea un nou tip de Slider (cu propriul său `Item`), urmează același proces descris în [Tipuri de componentă](/docs/academy/cluar/components/types), amintindu-ți să incluzi subfolderul `Item/` în noul tip.

## Pasul următor

Continuă cu [Funcționalitatea](/docs/academy/cluar/components/functionality).