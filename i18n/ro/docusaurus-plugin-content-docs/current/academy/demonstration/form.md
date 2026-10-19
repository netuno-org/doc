---
sidebar_position: 3
id: form
title: Formular
---


# Formular

În această etapă a demonstrației, vei crea formularul **Sarcină** și vei configura primul câmp de date.

:::info Referință
Pentru o explicație mai detaliată despre formulare, consultă [Ghid de interfață: Formulare](/docs/academy/ui/forms).
:::

## Obiectiv

La finalul acestei etape, vei avea:

- Un formular numit **Sarcină**.
- Un tabel asociat în baza de date.
- Un câmp obligatoriu pentru stocarea numelui sarcinii.
- O interfață pregătită pentru crearea, editarea, căutarea și ștergerea înregistrărilor.

## Cerințe preliminare

Verifică faptul că:

- Aplicația demonstrativă a fost deja creată.
- Etapa de configurare a fost deja finalizată.
- Te afli în zona de dezvoltare a platformei.

## Crearea formularului

1. În colțul din dreapta sus, fă clic pe **Construiește**.
2. În meniul principal, accesează **Gestiune > Formulare**.
3. La **Titlu formular**, completează cu `Sarcină`.
4. La **Nume tabel**, activează opțiunea **Auto**.
5. Fă clic pe **Salvează**.

:::note
- **Titlu formular** definește numele afișat în meniul lateral.
- **Nume tabel** definește identificatorul tehnic folosit în baza de date.
:::

După salvare, formularul **Sarcină** va fi disponibil în meniul lateral stâng.

## Crearea primului câmp

Cu formularul creat:

1. În meniul lateral, fă clic pe **Sarcină**.
2. La **Nume afișat**, completează cu `Nume`.
3. Confirmă că numele tehnic a fost generat automat cu litere mici.
4. Activează opțiunea **Cheie primară** (câmp unic).
5. Activează opțiunea **Nu Null** (câmp obligatoriu).
6. La **Tip**, selectează `text`.
7. Fă clic pe **Salvează**.

:::tip
- **Cheie primară** garantează valori unice pentru fiecare înregistrare.
- **Nu Null** face completarea obligatorie.
- Tipul `text` permite stocarea de text simplu.
:::

## Validarea rezultatului

Deschide zona de vizualizare și confirmă că:

- Formularul **Sarcină** este disponibil.
- Câmpul **Nume** apare pentru completare.
- Se poate crea o înregistrare nouă.
- Câmpul **Nume** este obligatoriu.

:::info Rezultat așteptat
Dacă configurația este corectă, formularul va fi pregătit pentru operațiuni de creare, editare, căutare și ștergere a înregistrărilor.
:::

## Pașii următori

Treci la următoarea etapă, **Bază de date**, pentru a explora și modifica aplicația demonstrativă.