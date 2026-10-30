---
sidebar_position: 2
id: types
title: Typy komponentów
sidebar_label: Typy komponentów
---

## Czym są

Każdy [Komponent](/docs/academy/cluar/components/overview) ma pole **Typ**, które określa, który wariant wizualny jest używany do jego renderowania. To pole nie jest stałą listą zapisaną w bazie danych — jest **dynamiczne**, budowane na podstawie folderów istniejących w `website/src/components/<Komponent>/`. Na przykład dla komponentu Banner:

```
website/src/components/Banner/
├── index.jsx           # komponent „router”: wybiera typ do wyrenderowania
├── Default/
│   ├── index.jsx        # sam wariant
│   ├── index.less
│   ├── info.json        # nazwa/opis typu według języka
│   └── config.json       # możliwości typu (np. czy obsługuje akcje)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Każdy folder w `Banner/` jest **typem** wybieralnym w polu **Typ** w formularzu edycji tego komponentu (np. przy dodawaniu lub edycji Bannera na stronie to w tym formularzu pojawia się lista wyboru dostępnych typów).

Na liście wyboru osoba **widzi** przetłumaczoną etykietę zdefiniowaną w `info.json` (np. „Padrão”), ale w polu `type` komponentu **zapisywana** jest **nazwa folderu** (np. `Default`) — to właśnie tej nazwy folderu komponent „router” używa później, aby wybrać wariant do wyrenderowania (zobacz [`info.json` i `config.json`](#infojson-i-configjson) poniżej).

> Nazwa „Sub” w folderach takich jak `DefaultSubBanner` nie oznacza zagnieżdżonego podfolderu wewnątrz innego typu — to po prostu kolejny typ, na tym samym poziomie co pozostałe, tyle że z konwencją nazewniczą wskazującą, że jest to bardziej dyskretny/pomocniczy wariant typu bazowego.

### `info.json` i `config.json`

- **`info.json`** — definiuje etykietę i opis typu, według języka. To etykieta (`label`), która pojawia się w polu wyboru formularza edycji:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "pt": { "label": "Padrão", "description": "Adiciona um banner." }
  }
  ```
- **`config.json`** — definiuje możliwości typu. Obecnie jedynym parametrem jest `action`, który kontroluje, czy sekcja Akcje pojawia się w formularzu i jest renderowana w tym typie:
  ```json
  { "action": true }
  ```

Te dwa pliki są odczytywane w czasie rzeczywistym przez usługę serwerową (`server/services/components/<komponent>/list/`), która przechodzi przez foldery w `website/src/components/<Komponent>/` i zwraca listę dostępnych typów — to właśnie zasila pole wyboru Typ w formularzu edycji tego komponentu. Dlatego **nie trzeba restartować serwera ani zmieniać bazy danych, aby dodać nowy typ** — wystarczy utworzyć folder.

W komponencie „router” (`Banner/index.jsx`) zapisany `type` jest używany do decydowania, który wariant zaimportować i wyrenderować:

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## Jak utworzyć nowy typ

1. Utwórz nowy folder w `website/src/components/<Komponent>/` (np. `Banner/Highlight/`).
2. W nim utwórz `index.jsx` (komponent React wariantu), `index.less` (style), `info.json` (etykieta/opis według języka) oraz `config.json` (z `action: true` lub `false`).
3. W `index.jsx` komponentu nadrzędnego (np. `Banner/index.jsx`) zaimportuj nowy komponent i dodaj go do warunku wybierającego wariant na podstawie `type`.
4. Nowy typ automatycznie pojawi się na liście wyboru Typ w formularzu edycji tego komponentu, a jako zapisywana wartość będzie używana nazwa folderu.

## Następny krok

Poznaj każdy komponent szczegółowo: [Banner](/docs/academy/cluar/components/banner), [Treść](/docs/academy/cluar/components/content), [Lista](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funkcjonalność](/docs/academy/cluar/components/functionality).