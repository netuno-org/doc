---
sidebar_position: 4
id: content
title: Treść
sidebar_label: Treść
---

Najbardziej ogólny komponent tekstu i obrazu w CLUAR.

## Wprowadzenie

**Treść** to najbardziej ogólny komponent tekstu/obrazu w CLUAR — używany do bloków prostego tekstu, tekstu z obrazem obok lub samego obrazu, w zależności od wybranego typu.

Działa według tego samego wspólnego mechanizmu opisanego w [Przegląd](/docs/academy/cluar/components/overview) i [Typy komponentów](/docs/academy/cluar/components/types).

## Pola

Oprócz [pól wspólnych](/docs/academy/cluar/components/overview#wspólne-pola) (Typ, Kolejność, Tryb edycji, Odwróć tło, Akcje), Treść ma:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł bloku treści. |
| **Treść** (`content` / `html_content`) | Tekst bloku. |
| **Obraz** (`image`) | Powiązany obraz (nieużywany w typach zawierających tylko tekst). |
| **Obraz Alt** (`image_alt`) | Tekst alternatywny obrazu. |
| **Tytuł obrazu** (`image_title`) | Atrybut `title` obrazu. |
| **Maksymalna szerokość obrazu** (`image_max_width`) | Ogranicza szerokość obrazu w pikselach — przydatne, aby obraz nie rozciągał się zbytnio na szerokich ekranach, zwłaszcza w typach, w których obraz znajduje się obok tekstu. |

## Dostępne typy

W przeciwieństwie do Banera, Treść ma kilka typów skupionych na różnych układach obrazu i tekstu:

- **Domyślny** (`Default`)
- **Tekst** (`TextContent`) — tylko tekst, bez obrazu.
- **Obraz** (`ImageContent`) — tylko obraz, bez tekstu.
- **Obraz po lewej** (`ImageLeft`)
- **Obraz po prawej** (`ImageRight`)
- **Obraz u góry** (`ImageTop`)
- **Obraz u dołu** (`ImageBottom`)

Szczegóły działania typów i tworzenia nowego typu opisano w [Typy komponentów](/docs/academy/cluar/components/types).

## Następny krok

Przejdź do [Listy](/docs/academy/cluar/components/listing).