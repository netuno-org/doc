---
sidebar_position: 2
id: config
title: Configurare
---

# Configurați aplicația

Acest ghid prezintă pașii inițiali pentru configurarea limbii aplicației Demo, a bazei de date și pentru activarea comenzilor automate executate odată cu serverul.

Toate modificările se fac în fișierul `_development.json` de configurare al aplicației **Demo**, aflat în folderul /apps/demo/**config**.

### Cerințe preliminare

Înainte de a edita configurarea, confirmați următoarele puncte:

- Aplicația Demo a fost deja creată și inițializată.
- Sunteți în rădăcina proiectului Netuno.
- Un editor de cod este deschis la `/apps/demo/config/development.json`.
- Veți putea reporni serverul după salvarea modificărilor.

## Configurarea limbilor

### 1. Aplicație

În fișierul de configurare, găsiți câmpurile `language` și `locale` pentru a schimba limba aplicației.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Setați valorile în funcție de limba dorită:

- **Portugheză**: `pt_PT` sau `pt_BR`
- **Engleză**: `en_GB` sau `en_US`

### 2. Baza de date

Găsiți obiectul **"db"** și apoi setările pentru **"default"**.

Modificați câmpul **"name"** pentru a defini baza de date corespunzătoare:

- `demo_pt`: baza de date în portugheză.
- `demo_en`: baza de date în engleză.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Activarea comenzilor multiple

Netuno permite executarea mai multor comenzi simultan la pornirea serverului, afișând ieșirile în aceeași consolă.

În mod implicit, aplicația **Demo** are comanda `bun run watch` configurată, dar dezactivată. Această comandă compilează automat orice modificare făcută în fișierele de cod din backoffice.

Pentru a o activa, găsiți array-ul **"commands"** și modificați valoarea câmpului **enabled** din false în **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parametrii obiectului "commands"

- `enabled`: activează (true) sau dezactivează (false) executarea automată a comenzii.
- `path`: definește calea (folderul) aplicației în care va fi executată comanda.
- `command`: definește comanda care va fi executată în terminal.

:::tip
Puteți adăuga alte comenzi în array-ul `"commands"`, cu condiția să păstrați aceeași structură de obiect.
:::


După salvarea fișierului de configurare, reporniți serverul Netuno pentru a aplica modificările.


## Rezultatul așteptat

După repornirea serverului, confirmați următoarele puncte:

- Aplicația Demo este în limba configurată.
- Consola afișează execuția comenzii `bun run watch`, dacă aceasta este activată.

## Pașii următori

Continuați la următoarea etapă, **Formular**, pentru a explora și modifica aplicația demonstrativă.