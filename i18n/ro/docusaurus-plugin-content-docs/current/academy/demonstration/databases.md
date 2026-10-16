---
sidebar_position: 4
id: databases
title: Bază de date
---

# Bază de date

În această etapă, vom explora **baza de date** creată automat din formularul **Sarcină** definit anterior.

La crearea formularului **Sarcină** cu câmpul **Nume**, Netuno a creat în baza de date tabelul `sarcina` cu coloana `nume`, conform numelor definite la crearea formularului.

**Numele tehnice** ale câmpurilor (de exemplu, `sarcina`, `nume`, `sarcina_id`) sunt folosite în programare și în interogările SQL și nu corespund numelor de afișare din interfață.

## Interogări

În această secțiune vom executa interogări direct în baza de date folosind interfața de gestiune a Netuno.

1. Accesează mediul **Construire**.
2. În meniu, dă clic pe **Gestiune > Interogare**.
3. În editorul de interogări, lipește și execută comenzile de mai jos.

### Interogări simple

Afișează doar numele sarcinilor:

```sql
SELECT nume
FROM sarcina;
```

Afișează toate câmpurile tabelului de sarcini:

```sql
SELECT *
FROM sarcina;
```

Afișează toate câmpurile tabelului de înregistrări:

```sql
SELECT *
FROM inregistrare;
```

Afișează toate câmpurile tabelului de lucrători:

```sql
SELECT *
FROM lucrator;
```

Când dai clic pe **Execută**, Netuno generează un tabel de rezultate pentru **fiecare** comand separat prin punct și virgulă (`;`).  
Acest lucru este util când vrei să execuți mai multe interogări deodată.

### Interogare cu relații

Acum, execută o interogare care relaționează toate tabelele:

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

Ea demonstrează cum relațiile dintre tabele permit combinarea informațiilor din diferite entități ale aplicației.

## Diagramă

Pentru a vizualiza structura bazei de date într-un mod mai intuitiv, folosește **Diagrama** din Netuno.

1. Accesează mediul **Construire**.
2. În meniu, dă clic pe **Gestiune > Diagramă**.

În Diagramă poți:

- Mărești sau micșorezi zoomul.
- Exporta diagrama ca imagine.

Aceste acțiuni sunt disponibile în butoanele din partea dreaptă a panoului diagramei.

Netuno creează automat liniile cu săgeți de relație pe baza configurației de **Legături** în câmpuri (de exemplu, câmpuri de tip `select` care indică spre alte tabele).

## Bune practici

Când modelezi baza de date în Netuno, urmează aceste bune practici:

- Folosește sufixul `_id` pentru câmpurile care reprezintă relații, de exemplu:
  - `sarcina_id`
  - `lucrator_id`
- Evită să folosești nume de tabele și câmpuri la plural, cum ar fi `sarcini`, `inregistrari` sau `lucratori`.

Evitarea pluralului ajută la:

- Păstrarea numelor mai scurte și mai ușor de citit.
- Reducerea ambiguităților la scrierea interogărilor.
- Facilitarea citirii în formulare și diagrame, mai ales când există multiple relații.

:::tip Standard de denumire
Ca standard, folosește întotdeauna **nume la singular** pentru formulare, tabele și câmpuri.  
Exemple: `sarcina`, `inregistrare`, `lucrator`, `sarcina_id`, `lucrator_id`.
:::

## Pasul următor

Avansează la următoarea etapă de **Relacionare a datelor** pentru a continua cu aplicația demonstrativă.