---
id: centralized-terminal
title: Terminal centralizat
sidebar_label: Terminal centralizat
---

Netuno permite unificarea ieșirii de date (loguri) de la mai multe comenzi și procese într-o singură fereastră de terminal — aceeași în care rulează serverul principal.

În fluxurile moderne de dezvoltare, unde este obișnuit să gestionezi mai multe tehnologii simultan, Netuno acționează ca un orchestrator de loguri, putând conține diverse comenzi configurate să pornească automat în paralel, cum ar fi procese front-end ReactJS, Angular, Vue și orice altceva.

> Orice proces poate fi pornit, trebuie doar să definești comanda sa; de exemplu, poate fi integrat chiar și un alt server al unei API REST auxiliare dezvoltate în orice altă tehnologie.

## Configurare

Pentru a integra procese externe, trebuie să editezi fișierul de configurare a mediului aplicației tale. În acest ghid, vom folosi mediul de dezvoltare ca exemplu.

### Localizarea fișierului

Navighează până la folderul aplicației tale și localizează fișierul:

- 📂 `config/_development.json`

### Structura configurației

Configurarea se face prin cheia "commands", care constă într-un array de obiecte. Aceasta îți permite să execuți mai multe servicii în paralel.

Deschide fișierul și verifică dacă cheia `"commands"` există deja. În caz contrar, inserează la finalul fișierului (respectând formatul JSON) urmând configurația de mai jos:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "website",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Notă:** În exemplul de mai sus, am configurat o comandă pentru folderul "ui" și alta pentru folderul "website", ambele folosind managerul bun.

### Referință pentru parametri

**Interfața de utilizare (UI):** Execută `bun run watch` în directorul `ui` al aplicației tale.

**Website:** Execută `bun run dev` în folderul `website`.

### env

Definește variabilele de mediu de care procesul are nevoie pentru a rula. Poți defini mai multe variabile simultan.

### path

Definește calea folderelor în care va fi executată comanda, relativă la rădăcina aplicației.

### install

Netuno are o inteligență integrată pentru gestionarea dependențelor de pachete:

- **Detectare automată:** Dacă comanda ta începe cu `npm`, `bun`, `pnpm` sau `yarn`, Netuno verifică dacă folderul `node_modules` există.

- **Execuție inteligentă:** Dacă folderul nu este găsit, comanda de instalare corespunzătoare (de exemplu: `bun install`) este executată automat înainte de a porni procesul principal.

- **Personalizare:** Când definești manual parametrul `install`, detectarea implicită este înlocuită de configurația ta personalizată.

### command

Comanda principală care va fi executată. Toată ieșirea de date (`output`) va fi integrată cu Netuno.

### enabled

Definește dacă comanda trebuie (true) sau nu (false) să fie pornită automat odată cu aplicația.

## Concluzie

Centralizarea comenzilor în Netuno simplifică mult fluxul de lucru.
Vizibilitatea unificată permite ca toate informațiile din procesele paralele să fie consolidate într-un singur terminal, facilitând monitorizarea în timp real.

Închiderea sigură face ca, la oprirea executării serverului Netuno, toate procesele auxiliare configurate să fie și ele închise automat, evitând procesele "în fundal" sau blocajele de port.