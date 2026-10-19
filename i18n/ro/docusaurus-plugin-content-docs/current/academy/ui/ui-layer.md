---
sidebar_position: 8
id: ui-layer
title: Stratul UI
sidebar_label: Stratul UI
---

Instalarea și compilarea dashboard-ului și a interfeței generale a aplicațiilor.

## Context

Aplicațiile Netuno vin deja configurate, în mod implicit, cu un set de tehnologii avansate orientate către front-end, unele dintre ele fiind [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) 
și [Ant.Design](https://ant.design/).

În interiorul aplicațiilor există dosarul `📁 ui` (_user interface_, interfața de utilizare), unde dezvoltăm
dashboard-uri și alte componente front-end.

## Înainte de a începe

Asigurați-vă că aveți instalat [Bun](https://bun.sh/), care este un prerechizit; mai multe despre:

- [Instalați Bun](/docs/academy/website/bun)

## Instalarea modulelor de dependență

Pentru a instala toate dependențele care vin implicit, intrați în dosarul `📁 ui` (_user interface_) din cadrul
aplicației dvs. în dezvoltare, de exemplu:

```shell
cd apps/aplicatia_mea/ui/
```

Rulați comanda de instalare a modulelor de dependență:

```shell
bun install
```

> [Bun](https://bun.sh) este o alternativă îmbunătățită și mai optimizată decât NPM.

## Compilare automată

Intrați în dosarul `📁 ui` (_user interface_) al aplicației dvs. în dezvoltare, de exemplu:

```shell
cd apps/aplicatia_mea/ui/
```

Pentru a compila front-end-ul automat la fiecare modificare de cod, rulați:

```shell
bun run watch
```

> Asigurați-vă că aveți [Bun](https://bun.sh/) instalat.
 
## Integrarea automată a front-end-ului cu Netuno

Netuno vă permite să porniți UI-ul împreună cu procesul de server al aplicației Netuno.

> Toate mesajele de compilare React vor fi integrate în același terminal ca aplicația Netuno.

Pentru aceasta, este suficient să activați configurația din `commands` a aplicației Netuno în `📂 config/_development.json`,
adică în `command` cu `path` pentru `ui`, setați `enabled` la `true`, după cum urmează:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> De fiecare dată când editați fișierele de configurare ale aplicației Netuno, este necesar să reporniți serverul pentru ca acesta să poată 
> prelua noile modificări.

În final, porniți sau reporniți serverul cu aplicația dvs. Netuno pentru a verifica funcționarea.

Și acum totul va fi integrat într-un singur terminal centralizat, evitând astfel să aveți mai multe terminale
dispersate; mai multe despre:

- [Terminal centralizat](/docs/academy/explore/centralized-terminal)

## Alte tehnologii front-end

În dosarul `📁 ui` puteți configura orice tehnologie front-end sau puteți include orice modul nou de 
dependență necesar.

Dacă nu doriți să utilizați niciuna dintre tehnologiile standard, o puteți înlocui cu oricare alta, în special
adaptând fișierele:

- `package.json`
- `vite.config.js`