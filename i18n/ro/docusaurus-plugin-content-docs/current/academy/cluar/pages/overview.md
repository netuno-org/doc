---
sidebar_position: 1
id: overview
title: Prezentare generală
sidebar_label: Prezentare generală
---

**Pagina** este entitatea centrală din CLUAR: reprezintă un URL al site-ului web. Fiecare pagină aparține unei singure limbi — nu există o singură pagină „multilingvă”, fiecare limbă are propria pagină (cu propriul `link`, titlu, conținut etc.), iar acestea sunt legate între ele doar prin acțiunea de [clonare](/docs/academy/cluar/pages/cloning).

## Câmpuri

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul paginii. |
| **Link** (`link`) | URL-ul paginii (ex.: `/despre-noi`). |
| **Limbă** (`language_id`) | Limba căreia îi aparține această pagină. |
| **Părinte** (`parent_id`) | Pagina părinte, folosită pentru a construi ierarhia/breadcrumbs și submeniurile. |
| **Șablon** (`template`) | Șablonul folosit pentru randarea paginii (vezi [Șabloane](/docs/academy/cluar/templates)). Este un select în formular, completat dinamic cu folderele existente în `website/src/pages/Template/`. |
| **Stare** (`status_id`) | Ciornă sau Publicată — reflectă starea versiunii curente. |
| **Meniu** (`menu`) | Dacă este bifat, pagina apare în meniul de navigare. |
| **Titlu meniu** (`menu_title`) | Titlu alternativ de afișat în meniu (dacă este gol, se folosește Titlul paginii). |
| **Navigabilă** (`navigable`) | Controlează dacă pagina este accesibilă direct (chiar și fără să apară în meniu). |
| **Ordine** (`sorter`) | Poziția paginii între „surorile” sale (același `parent_id`). |
| **Descriere** / **Cuvinte-cheie** | Metaetichete SEO (`<meta name="description">` / `<meta name="keywords">`). |
| **Descriere pentru rețelele sociale** / **Imagine pentru rețelele sociale** | Folosite în etichetele Open Graph (`og:description`, `og:image`) când pagina este distribuită. |

## Pasul următor

Fiecare pagină are mai multe versiuni și trece printr-un flux de publicare — vezi [Versiuni și publicare](/docs/academy/cluar/pages/versions-publishing).