---
sidebar_position: 1
id: bun
title: Instalare Bun
sidebar_label: Instalare Bun
---

## Introducere

NodeJS și NPM sunt baza pentru definirea ecosistemului de dezvoltare frontend.

În ciuda utilității lor, performanțele respective lasă mult de dorit.

De aceea recomandăm utilizarea Bun pentru a obține beneficii semnificative și palpabile cu ușurința adaptării rapide și menține compatibilitatea.

În Netuno, Bun este din ce în ce mai mult utilizat, iată motivele...

## Bun

Bun este echivalentul NodeJS dar mult mai puternic, modern, intuitiv și super rapid.

Performanța Bun este incontestabilă, cine face tranziția de la execuția NodeJS la Bun observă imediat beneficiul.

Deoarece proiectele frontend de obicei durează ceva timp pentru a porni, cu Bun inițializarea este imediată.

Și dependențele frontend de obicei ocupă mult spațiu, unde folderul `📂 node_modules` poate ajunge cu ușurință la sute de megabytes sau chiar gigaocteți.

Bun rezolvă și problema spațiului irosit cu replicarea copiei dependențelor pentru multiple proiecte.

Creând un depozit central de dependențe partajat de toate proiectele care la instalare configurează foldere legate.

Astfel reduce drastic consumul de spațiu ocupat de dependențe.

> Printre diverse alte avantaje, se remarcă de asemenea la uzabilitate și la ieșirea care este îmbunătățită, intuitivă și mai evoluată în general.

Deoarece avantajele de performanță sunt de extremă importanță pentru dezvoltarea agilă, recomandăm utilizarea sa.

Pentru a instala Bun urmați pașii de la:

- [**Instalare Bun**](https://bun.sh/docs/installation)

### Utilizare în Proiecte

Pentru a utiliza Bun în proiecte, asigurați-vă că dacă deja utilizați NPM, Yarn sau altul, trebuie să eliminați folderul `📂 node_modules`.

Acolo unde aveți fișierul `package.json` trebuie să executați comanda de instalare a dependențelor:

- `bun install`

Acum trebuie doar să executați acțiunile de `scripts` configurate în `package.json`, de exemplu:

- `bun run dev`

Și pentru a compila:

- `bun run build`

Utilizarea Bun este foarte asemănătoare cu NPM, Yarn, PNPM etc., doar că este mult mai rapid și mai bun în general, și încă la implementare pentru mediile de test și producție, permite obținerea de performanță înaltă cu implementarea finalizată rapid și mai eficient în general.

### Comenzi integrate în Netuno

De partea Netuno cu centralizarea terminalului, unde toate comenzile proiectului rulează împreună în același proces și terminal al Netuno.

- [Mai multe despre Terminalul Centralizat.](/docs/academy/explore/centralized-terminal)

Dacă sunteți integrat și utilizați execuția comenzilor NPM, trebuie să faceți modificarea pentru Bun.

Modificați la Bun în configurația comenzilor `commands` ale aplicației Netuno în `📂 config/_development.json`, de exemplu:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "site",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Concluzie

Nu mai suferiți din cauza lipsei de spațiu cu diverse replici de dependențe în folderele `📂 node_modules` care irosesc gigaocteți.

Și nu mai așteptați atât de mult până când proiectul dvs. instalează dependențe, pornește sau compilează.

Nimic nu împiedică utilizarea Bun, deoarece garantează compatibilitatea cu NodeJS și NPM, este literalmente doi într-unul.

În proiectele cu Netuno folosim și migrăm totul către **Bun**, urmați această tendință.