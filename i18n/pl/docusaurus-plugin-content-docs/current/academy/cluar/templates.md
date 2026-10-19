---
sidebar_position: 11
id: templates
title: Szablony
sidebar_label: Szablony
---

Jak definiowany jest ogólny układ strony i jak tworzyć nowe szablony.

## Wprowadzenie

**Szablon** definiuje ogólny układ [Strony](/docs/academy/cluar/pages/overview) — jest to wartość pola `template` strony i odpowiada folderowi w `website/src/pages/Template/`.

:::info Pochodzenie mechanizmu Typów Komponentów
Mechanizm [Typów Komponentów](/docs/academy/cluar/components/types) (dynamiczne foldery + `info.json`) został zainspirowany tym mechanizmem Szablonów, który działał w ten sposób jako pierwszy. Struktura jest praktycznie taka sama, tylko zastosowana do całych stron zamiast do bloków treści.
:::

## Jak to działa

```
website/src/pages/Template/
├── index.jsx        # router: wybiera szablon do wyrenderowania
└── Default/
    ├── index.jsx      # sam szablon
    ├── index.less
    └── info.json       # nazwa/opis szablonu według języka
```

Każdy folder wewnątrz `Template/` to szablon wybierany w polu **Szablon** formularza edycji strony. Nazwa folderu (`Default`) to wartość zapisywana w polu `template` strony.

Plik `info.json` szablonu domyślnego, na przykład:

```json
{
  "en": { "label": "Default", "description": "Dla stron, które używają ogólnego stylu." },
  "pt": { "label": "Domyślny", "description": "Dla stron, które używają ogólnego stylu." }
}
```

:::info Lista wyboru używa przetłumaczonej etykiety z `info.json`
Podobnie jak w Typach Komponentów, lista wyboru Szablonu w formularzu strony pokazuje przetłumaczoną etykietę (`label`) z `info.json` — w tym celu żądanie do usługi wysyła bieżący język (`Cluar.currentLanguage().locale`). To, co jest zapisywane w polu `template` strony, nadal pozostaje nazwą folderu (`Default`).
:::

Istnieje również usługa po stronie serwera (`server/services/page/template/list/`), która skanuje foldery w czasie rzeczywistym i zwraca listę dostępnych szablonów — z tego samego powodu: **nie trzeba restartować serwera, aby dodać nowy szablon**, wystarczy utworzyć folder.

Jedna różnica w stosunku do Typów Komponentów: Szablony nie mają `config.json` — obecnie nie ma możliwych do skonfigurowania funkcji na szablon, tylko `index.jsx` i `info.json`.

## Szablon domyślny

Szablon **domyślny** (`Default`) jest tym, którego używa większość stron: otacza treść strony nagłówkiem i stopką witryny (`BaseHeader` / `BaseFooter`) wokół `Builder` — komponentu, który faktycznie przechodzi przez komponenty strony i renderuje je (Banner, Treść, Lista, Slider, Funkcjonalność), w kolejności określonej przez pole Kolejność każdego z nich.

:::info Strona z nierozpoznanym szablonem
Jeśli pole `template` strony nie odpowiada żadnemu istniejącemu folderowi (np. nazwa jest wpisana błędnie albo folder został usunięty), CLUAR **nie zgłasza błędu ani nie używa szablonu domyślnego jako zastępstwa** — zamiast tego renderuje tylko „goły” `Builder`, bez nagłówka i stopki witryny. To inne zachowanie niż w Typach Komponentów, gdzie nierozpoznany typ przechodzi na typ domyślny.
:::

To router (`Template/index.jsx`) decyduje o tym:

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

Zauważ, że istnieje tylko jedno jawne sprawdzenie (`"Default"`) — każda inna wartość `template`, rozpoznana lub nie, trafia bezpośrednio do `else` i renderuje tylko `Builder`.

## Jak utworzyć nowy szablon

1. Utwórz nowy folder wewnątrz `website/src/pages/Template/` (np. `Template/StronaDocelowa/`).
2. Wewnątrz niej utwórz `index.jsx` (layout React szablonu), `index.less` (style) i `info.json` (etykieta/opis według języka — to ta etykieta pojawia się na liście wyboru).
3. W `index.jsx` routera (`Template/index.jsx`) zaimportuj nowy szablon i dodaj go do warunku, który wybiera szablon na podstawie pola `page.template`.
4. Nowy szablon zacznie automatycznie pojawiać się na liście wyboru Szablonu w formularzu edycji strony, z nazwą folderu jako zapisywaną wartością.

## Następny krok

Poznaj [Uprawnienia](/docs/academy/cluar/permissions).