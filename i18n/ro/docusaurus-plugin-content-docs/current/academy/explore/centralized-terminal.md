---
id: centralized-terminal
title: Terminal Centralizat
sidebar_label: Terminal Centralizat
---

Netuno permite unificarea ieșirii de date (logs) a mai multor comenzi și procese într-o singură fereastră de terminal — aceeași în care rulează serverul principal.

În fluxurile moderne de dezvoltare, unde este obișnuit să se lucreze cu diverse tehnologii simultan, Netuno acționează ca un orchestrator de logs, putând conține diverse comenzi configurate să fie pornite automat în paralel, cum ar fi procese front-end ReactJS, Angular, Vue și oricare altul.

> Orice proces poate fi pornit, este suficient să definiți comanda acestuia; de exemplu, poate fi integrat chiar și un alt server al unei API REST auxiliare dezvoltate în orice altă tehnologie.


## Configurare

Pentru a integra procese externe, trebuie să editați fișierul de configurare al mediului aplicației dvs. În acest ghid, vom folosi mediul de dezvoltare ca exemplu.

### Locația fișierului

Navigați până la folderul aplicației dvs. și localizați fișierul:

- 📂 `config/_development.json`

### Structura configurației


Configurarea se face prin cheia `"commands"`, care constă într-un array de obiecte. Aceasta vă permite să executați mai multe servicii în paralel.

Deschideți fișierul și verificați dacă cheia `"commands"` există deja. În caz contrar, inserați la finalul fișierului (respectând formatul JSON) configurația de mai jos:

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
            "path": "site",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Notă:** În exemplul de mai sus, am configurat o comandă pentru folderul `ui` și alta pentru folderul `site`, ambele folosind managerul bun.

### Referință parametri

**Interfață utilizator (UI):** Execută `bun run watch` în folderul `ui` al aplicației dvs.

**Site web:** Execută `bun run dev` în folderul `site`.

### env

Definește variabilele de mediu de care procesul are nevoie pentru a rula. Puteți defini mai multe variabile simultan.

### path

Definește calea folderului în care va fi executată comanda, relativ la rădăcina aplicației.

### install

Netuno dispune de o inteligență integrată pentru gestionarea dependențelor pachetelor:

- **Detectare automată:** Dacă comanda dvs. începe cu `npm`, `bun`, `pnpm` sau `yarn`, Netuno verifică dacă folderul `node_modules` există.

- **Execuție inteligentă:** Dacă folderul nu este găsit, comanda de instalare corespunzătoare (de exemplu: `bun install`) este executată automat înainte de pornirea procesului principal.

- **Personalizare:** Când definiți manual parametrul `install`, detectarea implicită este înlocuită de configurația dvs. personalizată.

### command

Comanda principală care va fi executată. Toată ieșirea de date (`output`) va fi integrată cu Netuno.

### enabled

Definește dacă comanda trebuie (true) sau nu (false) să fie pornită automat odată cu aplicația.

## Concluzie

Centralizarea comenzilor în Netuno simplifică mult fluxul de lucru.
Vizibilitatea unificată permite ca toate informațiile proceselor paralele să fie consolidate într-un singur terminal, facilitând monitorizarea în timp real.

Închiderea sigură face ca, la oprirea execuției serverului Netuno, toate procesele auxiliare configurate să fie închise automat, evitând procesele „în fundal” sau blocarea porturilor.