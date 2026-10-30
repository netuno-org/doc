---
sidebar_position: 5
id: listing
title: Lista
sidebar_label: Lista
---

Jak prezentować serię powiązanych elementów — produkty, usługi, aktualności i tak dalej.

## Wprowadzenie

**Lista** służy do prezentowania serii powiązanych elementów — produktów, usług, referencji, aktualności i tak dalej. Każda Lista ma własny tytuł/treść wprowadzającą i grupuje wiele **Elementów**, zarządzanych osobno w backoffice (`Lista > Element`).

Działa według tego samego wspólnego mechanizmu, opisanego w [Przeglądzie](/docs/academy/cluar/components/overview) i [Typach komponentów](/docs/academy/cluar/components/types).

## Pola listy

Oprócz [wspólnych pól](/docs/academy/cluar/components/overview#wspólne-pola) (Typ, Kolejność, Tryb edycji, Odwróć tło, Akcje), Lista ma:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł listy. |
| **Treść** (`content` / `html_content`) | Tekst wprowadzający listy. |
| **Obraz** (`image`) | Obraz powiązany z samą listą (a nie z elementami). |
| **Alternatywny tekst obrazu** (`image_alt`) | Tekst alternatywny obrazu. |
| **Tytuł obrazu** (`image_title`) | Atrybut `title` obrazu. |

## Elementy

Każdy element należy do listy (`page_listing_id`) i ma własne pola:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł elementu. |
| **Treść** (`content` / `html_content`) | Tekst elementu. |
| **Obraz** (`image`) | Obraz elementu. |
| **URL** (`link`) | Link elementu — miejsce, do którego przechodzi użytkownik po kliknięciu. |
| **Kolejność** (`sorter`) | Pozycja elementu w obrębie listy. |

Zauważ, że element **nie ma własnego pola Typ** — dziedziczy typ po Liście, do której należy: komponent React listy przekazuje swój `type` do każdego elementu podczas renderowania.

## Struktura renderowania

W przeciwieństwie do Bannera i Treści, gdzie każdy typ jest osobnym folderem wewnątrz komponentu, w Liście komponent renderujący elementy (`Item`) znajduje się **wewnątrz** folderu typu:

```
website/src/components/Listing/
├── index.jsx              # router: wybiera typ listy
└── Default/
    ├── index.jsx           # układ listy, renderuje <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # jak każdy element jest renderowany dla tego typu
```

Ma to sens, ponieważ sposób prezentacji elementu (siatka, lista, karty...) zwykle zależy bezpośrednio od układu listy — dlatego `Item` każdego typu można dostosować razem z samym typem, zamiast stanowić komponent ogólny współdzielony przez wszystkie typy.

## Dostępne typy

Obecnie istnieje tylko typ **Domyślny** (`Default`). Aby utworzyć nowy typ listy (z własnym `Item`), wykonaj ten sam proces opisany w [Typach komponentów](/docs/academy/cluar/components/types), pamiętając o dodaniu podfolderu `Item/` wewnątrz nowego typu.

## Następny krok

Przejdź do [Slider](/docs/academy/cluar/components/slider).