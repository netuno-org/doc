---
sidebar_position: 2
id: versions-publishing
title: Wersje i publikacja
sidebar_label: Wersje i publikacja
---

## Wersje

Każda strona ma jedną lub więcej **Wersji** (`page_version`), z których każda ma własny stan (Szkic / Opublikowana). Pozwala to edytować nową wersję treści bez wpływu na to, co jest opublikowane — dopiero gdy wersja zostanie oznaczona jako Opublikowana, staje się aktywną wersją strony.

Komponenty treści (Baner, Treść, Lista, Slider, Funkcjonalność) zawsze należą do konkretnej wersji (`page_version_id`), a nie bezpośrednio do strony. Innymi słowy, edycja komponentu w wersji roboczej nie wpływa na to, co jest opublikowane.

## Publikacja

Podczas publikowania strony CLUAR:

1. Zbiera wszystkie aktywne komponenty opublikowanej wersji (banery, treści, listy, slidery, funkcjonalności wraz z odpowiadającymi im akcjami).
2. Generuje plik struktury w formacie JSON z tą zawartością.
3. W środowisku produkcyjnym wstępnie renderuje statyczny plik `index.html` dla adresu URL strony (dla każdego języka), już z wypełnionymi meta tagami SEO i Open Graph — co jest ważne dla udostępniania w mediach społecznościowych i dla wyszukiwarek, ponieważ sama witryna jest SPA w React.

## Następny krok

Częstym sposobem tworzenia strony jest zduplikowanie innej, już istniejącej — zobacz [Klonowanie strony](/docs/academy/cluar/pages/cloning).