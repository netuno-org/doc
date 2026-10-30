---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Komponent karuzeli do prezentowania sekwencji wyróżnionych elementów.

## Wprowadzenie

**Slider** prezentuje sekwencję elementów w karuzeli — każdy z obrazem tła, tytułem, tekstem i opcjonalnie własnymi akcjami. Jest renderowany za pomocą biblioteki [Keen Slider](https://keen-slider.io/).

Działa według tego samego mechanizmu wspólnego dla wszystkich komponentów, opisanego w [Przegląd](/docs/academy/cluar/components/overview) i [Typy komponentów](/docs/academy/cluar/components/types).

## Pola komponentu Slider

Oprócz [wspólnych pól](/docs/academy/cluar/components/overview#wspólne-pola) (Typ, Kolejność, Tryb edycji, Odwróć tło), Slider ma:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł bloku slidera. |
| **Treść** (`content` / `html_content`) | Tekst wprowadzający bloku. |
| **Obraz** (`image`) | Obraz powiązany z samym sliderem (a nie z elementami). |
| **Tekst alternatywny obrazu** (`image_alt`) | Tekst alternatywny obrazu. |
| **Tytuł obrazu** (`image_title`) | Atrybut `title` obrazu. |

## Elementy

Każdy element należy do Slidera (`page_slider_id`) i jest jednym ze „slajdów” karuzeli:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł slajdu. |
| **Treść** (`content` / `html_content`) | Tekst slajdu. |
| **Obraz** (`image`) | Obraz tła slajdu. |
| **Tekst alternatywny obrazu** (`image_alt`) | Tekst alternatywny obrazu. |
| **Tytuł obrazu** (`image_title`) | Atrybut `title` obrazu. |
| **Kolejność** (`sorter`) | Pozycja slajdu w karuzeli. |
| **Akcje** | Każdy element może mieć własne powiązane akcje — zobacz [Akcje](/docs/academy/cluar/actions). |

:::info Różnica względem Listagem
W przeciwieństwie do elementu Listagem, element Slidera **ma własne akcje**, powiązane indywidualnie (`page_slider_item_action`) — każdy slajd może mieć własny przycisk/link.
:::

## Struktura renderowania

Podobnie jak w Listagem, `Item` slidera znajduje się **wewnątrz** folderu typu, a nie jako folder siostrzany:

```
website/src/components/Slider/
├── index.jsx              # router: wybiera typ slidera
└── Default/
    ├── index.jsx           # layout slidera, montuje karuzelę z <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # każdy slajd, wraz z własnymi akcjami
```

## Dostępne typy

Obecnie istnieje tylko typ **Domyślny** (`Default`). Aby utworzyć nowy typ Slidera (z własnym `Item`), wykonaj ten sam proces opisany w [Typy komponentów](/docs/academy/cluar/components/types), pamiętając o dodaniu podfolderu `Item/` wewnątrz nowego typu.

## Następny krok

Przejdź do [Funkcjonalność](/docs/academy/cluar/components/functionality).