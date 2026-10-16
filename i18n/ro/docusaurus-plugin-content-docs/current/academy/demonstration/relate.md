---
sidebar_position: 5
id: relate
title: Relaționarea Datelor
description: Relacionați sarcini și înregistrări de ore pentru a ști cine a executat ce sarcină și cât timp a fost petrecut.
---

# Relaționarea Datelor

Creați o relație între sarcini și înregistrările de ore pentru a ști **cine** a executat **ce sarcină** și **cât timp** a fost petrecut.

La finalul acestei etape, formularul **Înregistrare** va fi relaționat cu tabelul **Sarcină**, permițând vizualizarea sarcinii asociate direct în listarea înregistrărilor.

## Precondiții

Înainte de a începe, verificați dacă ați finalizat deja:

- Crearea formularului **Sarcină** cu câmpul `nume`.
- Crearea formularului **Înregistrare** cu câmpurile de bază pentru orele lucrate.
- Configurarea tabelelor corespunzătoare în **Bază de Date**.

:::tip
Pentru mai multe detalii despre cum să relaționați datele, consultați [Ghid de Interfață: Relații](/docs/academy/ui/relationships-between-forms).
:::

Până aici, ați creat o gestiune de sarcini și o înregistrare de ore, dar fiecare listă încă funcționează izolat.

Este important să le relaționați, astfel încât fiecare înregistrare de ore să indice clar ce sarcină a fost realizată de un colaborator și în ce perioadă.

În această etapă, veți:

- Crea un câmp de tip `select` în formularul **Înregistrare**.
- Configura câmpul pentru a se relaționa cu tabelul **Sarcină**.
- Actualiza câteva date pentru a vedea relația funcționând în practică.

## Câmp de Tip `select`

Adăugați un câmp care va permite selectarea sarcinii asociate fiecărei înregistrări de ore.

1. În mediul **Construir**, deschideți formularul **Înregistrare** și accesați gestiunea câmpurilor.
2. Creați un câmp nou cu următoarele configurații:
   - **Titlu Câmp**: `Sarcină`
   - **Nume Coloană**: `sarcina_id`
   - **Tip**: `select`
3. Activați opțiunea **Obligatoriu** pentru a vă asigura că fiecare înregistrare este asociată cu o sarcină.
4. Lăsați opțiunea **Valori Unice** dezactivată, deoarece vor exista multe înregistrări pentru aceeași sarcină.

:::note
Sugerăm numele `sarcina_id` pentru a menține un standard consistent de denumire în întregul model de date.
:::

## Utilizați Sufixul `_id`

Numele câmpului care face referire la o altă înregistrare trebuie să se termine cu `_id`.  
Acest model facilitează identificarea faptului că câmpul reprezintă o relație cu un alt tabel și face modelul de date mai organizat.

:::warning
Evitați utilizarea unor nume generice precum `sarcina` sau `ref_sarcina` pentru câmpurile de relație.  
Standardizarea cu `_id` ajută la evitarea confuziei atunci când analizați date sau creați integrări.
:::

## Configurați Legătura de Relație

Configurați **Legătura**, care este responsabilă pentru relaționarea câmpului `sarcina_id` cu tabelul de sarcini.

1. În câmpul nou creat (`sarcina_id`), derulați până la secțiunea de configurare **Legătură**.
2. Faceți clic pe **Adaugă**.
3. În fereastra care se deschide:
   - Selectați opțiunea **sarcina**.
   - Apoi, selectați câmpul **nume**.
   - Închideți fereastra pentru a aplica.

La final, **Legătura** va fi definită ca:

```text
sarcina:nume
```

Aceasta înseamnă că:

- Relația va fi făcută cu tabelul **sarcina**.
- În interfață, va fi afișată valoarea câmpului **nume** al sarcinii la selectarea în câmpul `Sarcină`.

Faceți clic pe butonul **Salvează** pentru a salva configurația câmpului.

:::tip
Ori de câte ori este posibil, utilizați un câmp descriptiv (cum ar fi `nume`) pentru a afișa informația relaționată, în locul unui identificator tehnic sau numeric.
:::

## Actualizați Înregistrările

Cu câmpul de relație configurat, ajustați datele pentru a vizualiza rezultatul.

1. Accesați vizualizarea formularului **Înregistrare**.
2. Observați că acum tabelul de rezultate are o coloană nouă numită **Sarcină**, care inițial va fi goală.
3. Editați câteva înregistrări:
   - Faceți clic pe un rând din tabelul de rezultate pentru a deschide formularul de editare.
   - În câmpul **Sarcină**, selectați sarcina corespunzătoare.
   - Faceți clic pe **Salvează** pentru a salva.

**După salvare:**

- Coloana **Sarcină** din tabelul de rezultate va afișa numele sarcinii asociate.
- Fiecare **Înregistrare** va fi clar relaționată cu o **Sarcină**, permițând o analiză mai completă a timpului petrecut în fiecare activitate.

:::note
Dacă există multe înregistrări fără sarcină definită, luați în considerare actualizarea în loturi sau definirea unei sarcini temporare implicite, în conformitate cu politica dvs. de date.
:::

### Rezultatul Așteptat

Listarea **Înregistrare** ar trebui să afișeze:

- O coloană **Sarcină** completată cu numele sarcinilor asociate.
- Fiecare rând reprezentând o înregistrare de ore cu sarcina sa respectivă, făcând mai simplă identificarea locului unde a fost investit timpul.

## Pașii Următori

În subiectul următor, veți vedea cum să creați un **Serviciu** pentru a expune aceste date și a le utiliza în alte părți ale aplicației, cum ar fi rapoarte sau interfețe personalizate.