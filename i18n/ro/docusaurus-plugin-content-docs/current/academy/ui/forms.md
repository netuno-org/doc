---
sidebar_position: 2
id: forms
title: Formulare
---

## Cum se creează formulare

Gestionarea formularelor este zona în care puteți crea și administra structurile de date ale aplicației dumneavoastră. Fiecare formular creat aici devine o interfață în back-office pentru inserarea, editarea și vizualizarea datelor, pe lângă faptul că corespunde unei tabele din baza de date.

Este împărțit în doi pași esențiali și obligatorii, însoțiți de o scurtă prezentare a **grupării formularelor** și a **modului diagramă**.

![gestionare-formulare.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Titlul formularului

Este numele formularului dumneavoastră, așadar introduceți un nume clar și intuitiv.
Acesta va fi afișat în meniul lateral al back-office-ului în următoarele secțiuni: **Formulare** (în modul Vizualizare) și **Gestionare câmpuri** (în modul Construire).

![titlu-nume-formular.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Numele tabelului

Este numele tehnic care va fi folosit pentru a crea tabelul corespunzător în baza de date. Acest nume este folosit intern de sistem și de dezvoltatori.

**Cum se completează:**

- **Manual:** Introduceți un nume unic la singular, cu litere mici și fără spații sau caractere speciale (folosiți formatul `snake_case`, de exemplu: inregistrare_client).
- **Automat:** Bifați caseta **Auto** de lângă câmp. Sistemul va genera automat un nume tehnic bazat pe **Titlul formularului**. Aceasta este practica recomandată pentru a menține consistența.
- 

![nume-tabel-formular.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Gruparea formularelor (Părinte)

Acest câmp permite crearea unei ierarhii între formulare. Selectând un „Părinte”, stabiliți că formularul curent este un subelement al formularului selectat. Acesta va fi afișat în meniul lateral în următoarele secțiuni: „Formulare” (în modul Vizualizare) și „Gestionare câmpuri” (în modul Construire) ale formularului principal asociat.

**Cum se completează:**

- Lăsați gol dacă acesta este un formular principal (cum ar fi „Client”).
- Selectați un formular existent din listă dacă doriți să creați o relație de dependență. De exemplu, un formular „Adrese” ar putea avea „Client” ca părinte.

![grupare-formulare-parinte.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Opțiuni de control

Aceste casete de selectare activează funcționalități specifice pentru formular.

- **Afișează ID:** Bifați această opțiune dacă doriți ca câmpul de identificare unică (ID) al fiecărei înregistrări să fie vizibil în listarea datelor formularului.
- **Control după Activ:** Activează un control de stare (Activ/Inactiv) pentru fiecare înregistrare. Acest lucru permite dezactivarea unui element fără a-l elimina din baza de date.
- **Control după Utilizator:** Face ca fiecare înregistrare creată în formular să fie asociată utilizatorului care a creat-o. Este util pentru a urmări cine a realizat fiecare înregistrare.
- **Control după Grup:** Asociază fiecare înregistrare unui grup de utilizatori. Această opțiune este folosită frecvent pentru a gestiona permisiunile de acces la date pe baza grupurilor înregistrate în sistem.

![optiuni-control-formular.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Setări de ordonare și utilizatori asociați

Aceste câmpuri definesc valori implicite pentru înregistrările noi și ordinea de afișare.

- **Reordonează:** Definiți un număr pentru ordinea în care acest formular va apărea în meniul lateral. Numerele mai mici (cum ar fi 0, 1, 2) apar primele.
- **Utilizator:** Selectați un utilizator implicit care va fi asociat înregistrărilor noi, dacă „Control după Utilizator” este activat. „General” înseamnă că nu există un utilizator specific.
- **Grup:** Selectați un grup implicit care va fi asociat înregistrărilor noi, dacă „Control după Grup” este activat. „General” înseamnă că nu există un grup specific.

![setari-ordonare-si-utilizatori-asociati.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Modul diagramă

Ecranul **Diagramă** oferă o vizualizare grafică a întregii structuri de date a aplicației dumneavoastră. Cunoscut ca Diagrama Entitate-Relație (DER), acesta afișează toate formularele (care reprezintă tabele în baza de date), câmpurile lor respective și conexiunile dintre ele.
Acest instrument este esențial pentru a înțelege rapid cum sunt organizate și conectate informațiile aplicației dumneavoastră, facilitând analiza și dezvoltarea.

![diagrama-formular.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Încercați să creați mai multe formulare, câmpuri și să vizualizați în modul diagramă!

## Pasul următor

Salvați formularul și treceți la pasul următor: crearea câmpurilor!

Vedeți [aici](/docs/academy/ui/fields) cum să începeți crearea câmpurilor.