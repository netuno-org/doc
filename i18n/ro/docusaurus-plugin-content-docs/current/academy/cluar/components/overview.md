---
sidebar_position: 1
id: overview
title: Prezentare generală
sidebar_label: Prezentare generală
---

**Componentele** sunt blocurile de conținut care compun o [Pagină](/docs/academy/cluar/pages/overview), în cadrul unei [Versiuni](/docs/academy/cluar/pages/versions-publishing). Există 5 tipuri:

- **Banner**
- **Conținut**
- **Listare** (cu elemente)
- **Slider** (cu elemente)
- **Funcționalitate**

Fiecare are propria entitate (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), propriul formular în backoffice și propria componentă React pe site.

## Câmpuri comune

Deși fiecare componentă are câmpuri proprii, majoritatea împărtășesc o bază similară:

| Câmp | Descriere |
|---|---|
| **Tip** (`type`) | Definește ce variantă vizuală este folosită pentru a reda această componentă — vezi [Tipuri de componente](/docs/academy/cluar/components/types). |
| **Ordine** (`sorter`) | Poziția componentei în cadrul paginii. |
| **Mod de editare** (`edit_mode`) | Definește dacă conținutul (`content`) este text simplu sau HTML (`html_content`). |
| **Inversează fundalul titlului / conținutului** (`title_invert_background`, `content_invert_background`) | Inversează schema de culori (deschis/închis) a **editorului** de text al titlului/conținutului — util la scrierea unui text care va sta peste un fundal închis (de ex.: o imagine închisă în banner), pentru a vedea textul cu contrast în timp ce editezi. Nu modifică culoarea conținutului deja publicat pe pagină. |
| **Acțiuni** | Butoane/linkuri asociate componentei — vezi [Acțiuni](/docs/academy/cluar/actions). Nu toate tipurile acceptă acțiuni — vezi [Tipuri de componente](/docs/academy/cluar/components/types). |

## Pasul următor

Fiecare componentă folosește același mecanism de tipuri dinamice — vezi [Tipuri de componente](/docs/academy/cluar/components/types). Apoi, explorează fiecare componentă în detaliu: [Banner](/docs/academy/cluar/components/banner), [Conținut](/docs/academy/cluar/components/content), [Listare](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcționalitate](/docs/academy/cluar/components/functionality).