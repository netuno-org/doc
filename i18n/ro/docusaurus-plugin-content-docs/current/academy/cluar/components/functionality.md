---
sidebar_position: 7
id: functionality
title: Funcționalitate
sidebar_label: Funcționalitate
---

Funcționalitățile concrete disponibile pentru a fi incluse într-o pagină, cum ar fi formularele și hărțile.

## Introducere

**Funcționalitatea** este diferită de celelalte componente: în loc de variații vizuale ale aceluiași conținut, fiecare tip este o **funcționalitate concretă** de inclus în pagină — astăzi, un formular de contact sau o hartă.

Urmează același mecanism comun tuturor componentelor, descris în [Prezentare generală](/docs/academy/cluar/components/overview) și [Tipuri de componentă](/docs/academy/cluar/components/types) — dar aici, la alegerea Tipului, se alege **ce funcționalitate** apare în pagină, nu doar un stil diferit.

## Câmpuri

Pe lângă [câmpurile comune](/docs/academy/cluar/components/overview#câmpuri-comune) (Tip, Ordine, Mod de editare, Inversare fundal, Acțiuni), Funcționalitatea are:

| Câmp | Descriere |
|---|---|
| **Titlu** (`title`) | Titlul blocului. |
| **Conținut** (`content` / `html_content`) | Textul blocului. |
| **Imagine** (`image`) | Imaginea asociată (nu toate tipurile o folosesc). |

## Tipuri disponibile

### Formular de contact (`ContactForm`)

Afișează un formular de contact (nume, e-mail, mesaj), protejat prin reCAPTCHA. La trimitere, datele sunt enviate către serviciul `contact` de pe server, care le salvează în entitatea `contact` (vizibilă în backoffice) și permite configurarea alertelor prin e-mail.

### Hartă de contact (`ContactMap`)

Afișează o hartă interactivă, folosind [Mapbox](https://www.mapbox.com/). Folosește configurația `settings.cluar.website.mapbox` (vezi [Configurare](/docs/academy/cluar/configuration)) — în special `accessToken` (obligatoriu pentru ca harta să funcționeze) și opțiunea `dark` (tema deschisă sau închisă a hărții).

## Pasul următor

După ce ați explorat cele 5 componente, treceți la [Acțiuni](/docs/academy/cluar/actions), care pot fi asociate majorității dintre ele.