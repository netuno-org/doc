---
sidebar_position: 8
id: ui-layer
title: Stratul UI
sidebar_label: Stratul UI
---

Instalarea și compilarea dashboard-ului și a interfeței generale a aplicațiilor.

## Context

Aplicațiile Netuno vin deja configurate, implicit, cu un set de tehnologii avansate pentru front-end, dintre care unele sunt [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) și [Ant.Design](https://ant.design/).

În interiorul aplicațiilor există folderul `📁 ui` (_interfață de utilizare_), unde dezvoltăm dashboard-urile și alte componente front-end.

## Înainte de a începe

Asigură-te că ai instalat [Bun](https://bun.sh/), care este o cerință prealabilă; mai multe despre:

- [Instalarea Bun](/docs/academy/website/bun)

## Instalarea modulelor de dependență

Pentru a instala toate dependențele care vin implicit, intră în folderul `📁 ui` (_interfață de utilizare_) din aplicația ta în dezvoltare, de exemplu:

```shell
cd apps/aplicatia_mea/ui/
```

Rulează comanda de instalare a modulelor de dependență:

```shell
bun install
```

> [Bun](https://bun.sh) este o alternativă îmbunătățită și mai optimizată la NPM.

## Compilare automată

Intră în folderul `📁 ui` (_interfață de utilizare_) al aplicației tale în dezvoltare, de exemplu:

```shell
cd apps/aplicatia_mea/ui/
```

Pentru a compila front-end-ul automat la fiecare modificare de cod, rulează:

```shell
bun run watch
```

> Asigură-te că ai [Bun](https://bun.sh/) instalat.

## Integrarea automată a front-end-ului cu Netuno

Netuno îți permite să pornești UI-ul împreună cu procesul de server al aplicației Netuno.

> Toate mesajele de compilare React vor fi integrate în același terminal ca aplicația Netuno.

Pentru aceasta, este suficient să activezi configurația în `commands` ale aplicației Netuno în `📂 config/_development.json`, adică în `command` cu `path`-ul `ui` să setezi `enabled` la `true`, după cum urmează:

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

> De fiecare dată când editezi fișierele de configurare ale aplicației Netuno, este necesar să repornești serverul pentru a prelua noile modificări.

În final, pornește/repornește serverul cu aplicația ta Netuno pentru a-i verifica funcționarea.

Iar acum totul va fi integrat într-un singur terminal centralizat, evitând astfel să ai mai multe terminale dispersate; mai multe despre:

- [Terminal centralizat](/docs/academy/explore/centralized-terminal)

## Alte tehnologii de front-end

În folderul `📁 ui` poți configura orice tehnologie front-end sau include orice modul de dependență nou necesar.

Dacă nu dorești să folosești vreuna dintre tehnologiile standard, o poți înlocui cu oricare alta, în special adaptând fișierele:

- `package.json`
- `vite.config.js`