---
sidebar_position: 3
id: banner
title: Baner
sidebar_label: Baner
---

Komponent dużego wyróżnienia, zwykle używany u góry strony.

## Wprowadzenie

**Baner** to duże wyróżnienie strony — zwykle obraz zajmujący całą szerokość, z wyróżniającym się tytułem na wierzchu i opcjonalnie tekstem wprowadzającym oraz akcjami (przyciskami/linkami).

Działa na tym samym mechanizmie wspólnym dla wszystkich komponentów, opisanym w [Przegląd](/docs/academy/cluar/components/overview) i [Typy komponentów](/docs/academy/cluar/components/types).

## Pola

Oprócz [pól wspólnych](/docs/academy/cluar/components/overview#wspólne-pola) (Typ, Kolejność, Tryb edycji, Odwróć tło, Akcje), Baner ma:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł wyróżniony nad obrazem. |
| **Treść** (`content` / `html_content`) | Tekst wprowadzający, pod tytułem. |
| **Obraz** (`image`) | Obraz tła banera. |
| **Alt obrazu** (`image_alt`) | Tekst alternatywny obrazu, dla dostępności i SEO. |
| **Tytuł obrazu** (`image_title`) | Atrybut `title` obrazu. |
| **Pozycja X** / **Pozycja Y** (`position_x`, `position_y`) | Określają punkt skupienia obrazu tła (`background-position`), w procentach. |

## Pozycja obrazu

Pola **Pozycja X** i **Pozycja Y** kontrolują, która część obrazu tła pozostaje zawsze widoczna, gdy baner jest skalowany do różnych rozdzielczości — ta sama zasada co `background-position` w CSS.

Na przykład `50%` / `50%` ustawia punkt skupienia na środku obrazu: w dowolnej rozdzielczości to środek obrazu pozostaje widoczny, a krawędzie są przycinane w razie potrzeby.

## Dostępne typy

Obecnie istnieją trzy typy banera:

- **Domyślny** (`Default`) — podstawowy układ, z tytułem, treścią i akcjami.
- **Drugorzędny** (`Secondary`) — wizualnie różni się od domyślnego (własny styl w CSS/LESS), ale ma tę samą strukturę pól.
- **Domyślny z wyróżnieniem** (`DefaultSubBanner`) — bardziej dyskretny wariant, bez obsługi akcji (`action: false` w `config.json`).

Szczegóły dotyczące działania typów i tworzenia nowego typu znajdziesz w [Typy komponentów](/docs/academy/cluar/components/types).

## Następny krok

Przejdź do [Treści](/docs/academy/cluar/components/content).