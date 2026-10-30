---
sidebar_position: 1
id: overview
title: Przegląd
sidebar_label: Przegląd
---

**Strona** to centralny element CLUAR: reprezentuje adres URL w witrynie. Każda strona należy do jednego języka — nie istnieje jedna „wielojęzyczna” strona; każdy język ma własną stronę (z własnym `link`, tytułem, treścią itp.), a są one ze sobą powiązane wyłącznie przez akcję [klonowania](/docs/academy/cluar/pages/cloning).

Każda strona należy do organizacji. Strony mogą mieć podstrony i domyślnie należą do organizacji strony nadrzędnej.

## Pola

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł strony. |
| **Link** (`link`) | Adres URL strony (np. `/o-nas`). |
| **Język** (`language_id`) | Język, do którego należy ta strona. |
| **Strona nadrzędna** (`parent_id`) | Strona nadrzędna, używana do budowania hierarchii/nawigacji okruszkowej i podmenu. |
| **Szablon** (`template`) | Szablon używany do renderowania strony (zobacz [Szablony](/docs/academy/cluar/templates)). Jest to lista wyboru w formularzu, wypełniana dynamicznie folderami istniejącymi w `website/src/pages/Template/`. |
| **Status** (`status_id`) | Szkic lub Opublikowana — odzwierciedla stan bieżącej wersji. |
| **Menu** (`menu`) | Jeśli zaznaczone, strona pojawia się w menu nawigacji. |
| **Tytuł w menu** (`menu_title`) | Alternatywny tytuł wyświetlany w menu (jeśli pusty, używany jest tytuł strony). |
| **Nawigowalna** (`navigable`) | Określa, czy strona jest dostępna bezpośrednio (nawet jeśli nie pojawia się w menu). |
| **Kolejność** (`sorter`) | Pozycja strony wśród stron siostrzanych (ten sam `parent_id`). |
| **Opis** / **Słowa kluczowe** | Znaczniki meta SEO (`<meta name="description">` / `<meta name="keywords">`). |
| **Opis dla mediów społecznościowych** / **Obraz dla mediów społecznościowych** | Używane w tagach Open Graph (`og:description`, `og:image`), gdy strona jest udostępniana. |

## Następny krok

Każda strona ma wiele wersji i przechodzi przez proces publikacji — zobacz [Wersje i publikacja](/docs/academy/cluar/pages/versions-publishing).