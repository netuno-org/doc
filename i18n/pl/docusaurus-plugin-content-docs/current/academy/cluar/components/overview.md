---
sidebar_position: 1
id: overview
title: Przegląd
sidebar_label: Przegląd
---

**Komponenty** to bloki treści, które składają się na [Stronę](/docs/academy/cluar/pages/overview), w obrębie [Wersji](/docs/academy/cluar/pages/versions-publishing). Istnieje 5 typów:

- **Baner**
- **Treść**
- **Lista** (z Elementami)
- **Slider** (z Elementami)
- **Funkcjonalność**

Każdy z nich ma własną encję (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), własny formularz w backoffisie oraz własny komponent React na stronie internetowej.

## Wspólne pola

Mimo że każdy komponent ma własne pola, większość dzieli podobną podstawę:

| Pole | Opis |
|---|---|
| **Typ** (`type`) | Określa, który wariant wizualny jest używany do renderowania tego komponentu — zob. [Typy komponentów](/docs/academy/cluar/components/types). |
| **Kolejność** (`sorter`) | Pozycja komponentu na stronie. |
| **Tryb edycji** (`edit_mode`) | Określa, czy treść (`content`) jest zwykłym tekstem, czy HTML (`html_content`). |
| **Odwróć tło tytułu / treści** (`title_invert_background`, `content_invert_background`) | Odwraca schemat kolorów (jasny/ciemny) **edytora** tekstu tytułu/treści — przydatne podczas pisania tekstu, który znajdzie się na ciemnym tle (np. ciemny obraz w banerze), aby widzieć tekst z kontrastem podczas edycji. Nie zmienia koloru treści już opublikowanej na stronie. |
| **Akcje** | Przyciski/linki powiązane z komponentem — zob. [Akcje](/docs/academy/cluar/actions). Nie wszystkie typy obsługują akcje — zob. [Typy komponentów](/docs/academy/cluar/components/types). |

## Następny krok

Każdy komponent używa tego samego mechanizmu typów dynamicznych — zob. [Typy komponentów](/docs/academy/cluar/components/types). Następnie poznaj każdy komponent szczegółowo: [Baner](/docs/academy/cluar/components/banner), [Treść](/docs/academy/cluar/components/content), [Lista](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funkcjonalność](/docs/academy/cluar/components/functionality).