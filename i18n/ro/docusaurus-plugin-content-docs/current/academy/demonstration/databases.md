---
sidebar_position: 4
id: databases
title: Baza de date
---

# Baza de date

În această etapă, vom explora **baza de date** creată automat pe baza formularului **Sarcină** definit anterior.

La crearea formularului **Sarcină** cu câmpul **Nume**, Netuno a creat în baza de date tabelul `sarcina` cu coloana `nume`, în conformitate cu numele definite la crearea formularului.

**Numele tehnice** ale câmpurilor (de exemplu, `sarcina`, `nume`, `sarcina_id`) sunt folosite în programare și în interogările SQL și nu corespund numelor de afișare prezentate în interfață.

## Interogări

În această secțiune vom executa interogări direct în baza de date folosind interfața de administrare Netuno.

1. Accesați mediul **Construir**.
2. În meniu, faceți clic pe **Administrare > Interogări**.
3. În editorul de interogări, lipiți și executați comenzile de mai jos.

### Interogări simple

Afișați doar numele sarcinilor:

```sql
SELECT nume
FROM sarcina;
```

Afișați toate câmpurile din tabelul de sarcini:

```sql
SELECT *
FROM sarcina;
```

Afișați toate câmpurile din tabelul de înregistrări:

```sql
SELECT *
FROM inregistrare;
```

Afișați toate câmpurile din tabelul de lucrători:

```sql
SELECT *
FROM lucrator;
```

Când faceți clic pe **Execută**, Netuno generează un tabel de rezultate pentru **fiecare** comandă separată prin punct și virgulă (`;`).  
Acest lucru este util când doriți să executați mai multe interogări deodată.

### Interogare cu relații

Acum, executați o interogare care relaționează toate tabelele:

```sql
SELECT
  sarcina.nume,
  inregistrare.inceput,
  inregistrare.sfarsit,
  lucrator.nume
FROM sarcina
INNER JOIN inregistrare
  ON sarcina.id = inregistrare.sarcina_id
INNER JOIN lucrator
  ON lucrator.id = inregistrare.lucrator_id;
```

Această interogare returnează:

- Numele sarcinii.
- Începutul și sfârșitul fiecărei înregistrări.
- Numele lucrătorului asociat fiecărei înregistrări.

Aceasta demonstrează cum relațiile dintre tabele permit combinarea informațiilor din diferite entități ale aplicației.

## Diagramă

Pentru a vizualiza structura bazei de date într-un mod mai intuitiv, folosiți **Diagrama** din Netuno.

1. Accesați mediul **Construir**.
2. În meniu, faceți clic pe **Administrare > Diagramă**.

În Diagrama puteți:

- Mări sau micșora zoom-ul.
- Exporta diagrama ca imagine.

Aceste acțiuni sunt disponibile în butoanele din partea dreaptă a panoului diagramei.

Netuno creează automat liniile cu săgeți de relaționare pe baza configurației **Links** din câmpuri (de exemplu, câmpuri de tip `select` care indică spre alte tabele).

## Bune practici

Când modelați baza de date în Netuno, urmați aceste bune practici:

- Folosiți sufixul `_id` în câmpurile care reprezintă relații, de exemplu:
  - `sarcina_id`
  - `lucrator_id`
- Evitați folosirea numelor de tabele și câmpuri la plural, cum ar fi `sarcini`, `inregistrari` sau `lucratori`.

Evitarea pluralului ajută la:

- Păstrarea numelor mai scurte și mai lizibile.
- Reducerea ambiguităților la scrierea interogărilor.
- Facilitarea lecturii în formulare și diagrame, mai ales când există multiple relații.

:::tip Convenție de denumire
Ca regulă, folosiți întotdeauna **nume la singular** pentru formulare, tabele și câmpuri.  
Exemple: `sarcina`, `inregistrare`, `lucrator`, `sarcina_id`, `lucrator_id`.
:::

## Următorul pas

Treceți la următoarea etapă, **Relacionarea datelor**, pentru a continua cu aplicația demonstrativă.