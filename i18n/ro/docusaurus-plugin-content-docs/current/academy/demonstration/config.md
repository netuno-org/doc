---
sidebar_position: 2
id: config
title: Configurare
---

# Configurați aplicația

Acest ghid prezintă pașii inițiali pentru configurarea limbii aplicației Demo, a bazei de date și activarea comenzilor automate executate cu serverul.

Toate modificările se fac în fișierul `_development.json` de configurare al aplicației **Demo**, situat în dosarul /apps/demo/**config**.

### Cerințe preliminare

Înainte de a edita configurația, confirmați următoarele aspecte:

- Aplicația Demo a fost deja creată și inițializată.
- Vă aflați în directorul rădăcină al proiectului Netuno.
- Un editor de cod este deschis la `/apps/demo/config/development.json`.
- Veți putea reporni serverul după salvarea modificărilor.

## Configurarea limbilor

### 1. Aplicație

În fișierul de configurare, găsiți câmpurile `language` și `locale` pentru a schimba limba aplicației.

```json title="/apps/demo/config/development.json"
{
  "language": "ro_RO",
  "locale": "ro_RO",
}
```

Definiți valorile în funcție de limba dorită:

- **Română**: `ro_RO` sau `ro_MD`
- **Engleză**: `en_GB` sau `en_US`

### 2. Bază de date

Găsiți obiectul **"db"** și apoi configurațiile pentru **"default"**.

Modificați câmpul **"name"** pentru a defini baza de date corespunzătoare:

- `demo_ro`: bază de date în română.
- `demo_en`: bază de date în engleză.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_ro",
            "username": "sa"
        }
    },
...
}
```

### 3. Activarea mai multor comenzi

Netuno permite executarea mai multor comenzi simultan la pornirea serverului, afișând rezultatele în aceeași consolă.

În mod implicit, aplicația **Demo** are comanda `bun run watch` configurată, dar dezactivată. Această comandă compilează automat orice modificare făcută în fișierele de cod din backoffice.

Pentru a o activa, găsiți în array-ul **"commands"** și schimbați valoarea câmpului **enabled** din false în **true**.
 
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

- `enabled`: activează (true) sau dezactivează (false) execuția automată a comenzii.
- `path`: definește calea (dosarul) aplicației unde va fi executată comanda.
- `command`: definește comanda care va fi executată în terminal.

:::tip
Puteți adăuga alte comenzi în array-ul `"commands"`, atâta timp cât păstrați aceeași structură de obiect.
:::


După salvarea fișierului de configurare, reporniți serverul Netuno pentru a aplica modificările.


## Rezultat așteptat

După repornirea serverului, confirmați următoarele aspecte:

- Aplicația Demo este în limba configurată.
- Consola afișează execuția comenzii `bun run watch`, dacă aceasta este activată.

## Pașii următori

Avansează la următoarea etapă de **Formular** pentru a explora și modifica aplicația demonstrativă.