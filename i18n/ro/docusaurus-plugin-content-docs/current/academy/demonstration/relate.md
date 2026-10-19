---
sidebar_position: 5
id: relate
title: Relaționarea datelor
description: Relaționați sarcinile și înregistrările de ore pentru a ști cine a executat ce sarcină și cât timp a fost petrecut.
---

# Relaționarea datelor

Creați o relație între sarcini și înregistrările de ore pentru a ști **cine** a executat **ce sarcină** și **cât timp** a fost petrecut.

La finalul acestei etape, formularul **Înregistrare** va fi relaționat cu tabelul **Sarcină**, permițând vizualizarea sarcinii asociate direct în listarea înregistrărilor.

## Cerințe prealabile

Înainte de a începe, verificați dacă ați finalizat deja:

- Crearea formularului **Sarcină** cu câmpul `nume`.
- Crearea formularului **Înregistrare** cu câmpurile de bază pentru orele lucrate.
- Configurarea tabelelor corespunzătoare în **Baza de date**.

:::tip
Pentru mai multe detalii despre cum să relaționați datele, consultați [Ghidul de interfață: Relații](/docs/academy/ui/relationships-between-forms).
:::

Până acum, ați creat o gestiune a sarcinilor și o înregistrare de ore, dar fiecare listă încă funcționează izolat.  

Este important să le relaționați, astfel încât fiecare înregistrare de ore să indice clar ce sarcină a fost realizată de un colaborator și în ce perioadă.

În această etapă, veți:

- Creați un câmp de tip `select` în formularul **Înregistrare**.
- Configurați câmpul pentru a se relaționa cu tabelul **Sarcină**.
- Actualizați câteva date pentru a vedea relația funcționând în practică.

## Câmp de tip `select`

Adăugați un câmp care va permite selectarea sarcinii asociate fiecărei înregistrări de ore.

1. În mediul **Construire**, deschideți formularul **Înregistrare** și accesați gestionarea câmpurilor.
2. Creați un câmp nou cu următoarele configurații:
   - **Titlul câmpului**: `Sarcină`
   - **Numele coloanei**: `sarcina_id`
   - **Tip**: `select`
3. Activați opțiunea **Obligatoriu** pentru a garanta că fiecare înregistrare este asociată unei sarcini.
4. Mențineți opțiunea **Valori unice** dezactivată, deoarece vor exista multe înregistrări pentru aceeași sarcină.

:::note
Sugerăm numele `sarcina_id` pentru a menține un standard consistent de denumire în întregul model de date.
:::

## Utilizarea sufixului `_id`

Numele câmpului care face referire la o altă înregistrare trebuie să se încheie cu `_id`.  
Acest model facilitează identificarea faptului că câmpul reprezintă o relație cu un alt tabel și face modelul de date mai organizat.

:::warning
Evitați să folosiți nume generice precum `sarcina` sau `ref_sarcina` pentru câmpurile de relație.  
Standardizarea cu `_id` ajută la evitarea confuziei atunci când analizați date sau creați integrări.
:::

## Configurarea linkului de relație

Configurați **Linkul**, care este responsabil pentru relaționarea câmpului `sarcina_id` cu tabelul de sarcini.

1. În câmpul nou creat (`sarcina_id`), derulați până la secțiunea de configurare **Link**.
2. Faceți clic pe **Adăugați**.
3. În fereastra care se deschide:
   - Selectați opțiunea **sarcina**.
   - Apoi, selectați câmpul **nume**.
   - Închideți fereastra pentru a aplica.

La final, **Linkul** va fi definit astfel:

```text
sarcina:nume
```

Aceasta înseamnă că:

- Relația va fi stabilită cu tabelul **sarcina**.
- În interfață, va fi afișată valoarea câmpului **nume** al sarcinii la selectarea în câmpul `Sarcină`.

Faceți clic pe butonul **Salvați** pentru a salva configurația câmpului.

:::tip
Ori de câte ori este posibil, utilizați un câmp descriptiv (cum ar fi `nume`) pentru a afișa informația relaționată, în locul unui identificator tehnic sau numeric.
:::

## Actualizarea înregistrărilor

Cu câmpul de relație configurat, ajustați datele pentru a vizualiza rezultatul.

1. Accesați vizualizarea formularului **Înregistrare**.
2. Observați că acum tabelul de rezultate are o nouă coloană numită **Sarcină**, care inițial va fi goală.
3. Editați câteva înregistrări:
   - Faceți clic pe un rând din tabelul de rezultate pentru a deschide formularul de editare.
   - În câmpul **Sarcină**, selectați sarcina corespunzătoare.
   - Faceți clic pe **Salvați** pentru a salva.

**După salvare:**

- Coloana **Sarcină** din tabelul de rezultate va afișa numele sarcinii asociate.
- Fiecare **Înregistrare** va fi clar relaționată cu o **Sarcină**, permițând o analiză mai completă a timpului petrecut în fiecare activitate.

:::note
Dacă există multe înregistrări fără sarcină definită, luați în considerare actualizarea în loturi sau definirea unei sarcini implicite temporare, în conformitate cu politica dumneavoastră de date.
:::

### Rezultatul așteptat

Listarea formularului **Înregistrare** trebuie să afișeze:

- O coloană **Sarcină** completată cu numele sarcinilor asociate.
- Fiecare rând reprezentând o înregistrare de ore cu sarcina sa respectivă, făcând mai simplă identificarea locului în care a fost investit timpul.

## Pașii următori

În subiectul următor, veți vedea cum să creați un **Serviciu** pentru a expune aceste date și a le utiliza în alte părți ale aplicației, cum ar fi rapoarte sau interfețe personalizate.