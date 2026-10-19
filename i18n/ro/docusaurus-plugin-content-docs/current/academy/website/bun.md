---
sidebar_position: 1
id: bun
title: Instalarea Bun
sidebar_label: Instalare Bun
---

## Introducere

NodeJS și NPM sunt baza pentru definirea ecosistemului de dezvoltare frontend.

În ciuda utilității lor, performanțele acestora lasă mult de dorit.

De aceea recomandăm utilizarea Bun pentru a obține beneficii semnificative și palpabile, cu ușurința adaptării rapide
și păstrând compatibilitatea.

În Netuno, Bun este din ce în ce mai mult utilizat; iată motivele...

## Bun

Bun este echivalentul NodeJS, dar mult mai puternic, modern, intuitiv și super rapid.

Performanța Bun este incontestabilă; cine face tranziția de la execuția NodeJS la Bun observă imediat
beneficiul.

Deoarece proiectele frontend de obicei durează ceva timp pentru a porni, cu Bun inițializarea este imediată.

Și dependențele frontend de obicei ocupă mult spațiu, unde folderul `📂 node_modules` poate ajunge
cu ușurință la sute de megabiți sau chiar gigabiți.

Bun rezolvă și problema spațiului irosit prin replicarea copiei dependențelor în multiple
proiecte.

Creând un depozit central de dependențe partajat de toate proiectele, care la instalare configurează foldere
legate prin linkuri.

Astfel reduce drastic consumul de spațiu ocupat de dependențe.

> Printre diverse alte avantaje, se remarcă și utilizabilitatea și outputul, care este îmbunătățit, intuitiv și mai
evoluat în general.

Deoarece avantajele de performanță sunt de importanță extremă pentru dezvoltarea agilă, recomandăm utilizarea sa.

Pentru a instala Bun, urmați pașii de la:

- [**Instalare Bun**](https://bun.sh/docs/installation)

### Utilizare în proiecte

Pentru a utiliza Bun în proiecte, asigurați-vă că, dacă deja utilizați NPM, Yarn sau altceva, trebuie să eliminați folderul `📂 node_modules`.

Unde există fișierul `package.json`, trebuie să executați comanda de instalare a dependențelor:

- `bun install`

Acum trebuie doar să executați acțiunile din `scripts` configurate în `package.json`, de exemplu:

- `bun run dev`

Și pentru a compila:

- `bun run build`

Utilizarea Bun este foarte asemănătoare cu NPM, Yarn, PNPM etc., doar că este mult mai rapidă și mai bună în general, iar la
deploy-ul către mediile de testare și producție permite obținerea unei performanțe ridicate, cu deploy-ul finalizat rapid și
mai eficient în general.

### Comenzi integrate în Netuno

Pe partea Netuno, cu centralizarea terminalului, unde toate comenzile proiectului rulează împreună în același
proces și terminal Netuno.

- [Mai multe despre Terminalul Centralizat.](/docs/academy/explore/centralized-terminal)

Dacă este integrat și utilizați execuția comenzilor NPM, trebuie să faceți modificarea pentru Bun.

Modificați pentru Bun în configurația `commands` a aplicației Netuno în `📂 config/_development.json`, de exemplu:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Concluzie

Nu mai suferiți din lipsă de spațiu din cauza multiplelor replici de dependențe din folderele `📂 node_modules`, care irosesc gigabiți.

Și nu mai petreceți atât de mult timp așteptând până când proiectul dvs. instalează dependențele, pornește sau compilează.

Nimic nu împiedică utilizarea Bun, deoarece garantează compatibilitatea cu NodeJS și NPM; este literalmente doi în unu.

În proiectele cu Netuno, îl utilizăm și migrăm totul către **Bun**; urmați această tendință.