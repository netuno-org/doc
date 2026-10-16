---
sidebar_position: 4
id: queries-interface
title: Interfața de Interogări
---


Instrumentul de Interogare al Netuno este o resursă puternică care permite interacțiunea directă cu baza de date a aplicației prin SQL (Structured Query Language).

Această funcționalitate este esențială pentru testarea logicilor de business, validarea informațiilor stocate și stabilirea bazelor pentru rapoarte sau componente de interfață complexe. Netuno acceptă în prezent trei sisteme de gestionare a bazelor de date: **PostgreSql, H2 Database și MySQL**.

## 1 - Secțiunea Interogare

În modul „Construire”, din meniul lateral, accesați zona „Gestiune” și faceți click pe secțiunea „Interogare”.

![query-queries-interface-pt.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Zona de Comenzi

Această zonă este mediul de interacțiune directă cu baza de date a proiectului. Aici este posibil să executați comenzi pentru a consulta, căuta și analiza date în mod precis și instantaneu.

Asigurați-vă că sintaxa utilizată este compatibilă cu baza de date configurată în mediul dvs. Netuno.

![query-database-query-area-pt](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Zona de Validare

Zona de validare oferă feedback instantaneu despre sintaxa și execuția codului dvs.

- **Succes (Verde):** Când interogarea este executată fără erori de sintaxă sau de structură, mesajul este afișat cu fundal de culoare verde. Aceasta indică faptul că datele au fost procesate și sunt pregătite pentru vizualizare.

![query-validation-area-success-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Eșec sau Eroare (Roșu):** Dacă există orice impediment în execuție (cum ar fi eroare de sintaxă, nume de coloană incorect sau lipsă de permisiune), mesajul va fi afișat cu fundal de culoare roșie. Pe lângă culoare, sistemul va prezenta jurnalul de erori tehnice pentru a ajuta la diagnostic.

![query-validation-area-fail-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Zona de Rezultate

Este locul unde informațiile solicitate bazei de date sunt prezentate într-o formă structurată. Aceasta vă permite să vizualizați conținutul tabelelor și să confirmați dacă logica interogării dvs. returnează înregistrările așteptate.

![query-result-area-pt.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Butoane de Acțiune

Această secțiune detaliază instrumentele disponibile pentru a executa, salva și gestiona scripturile dvs. SQL, optimizând fluxul de lucru și reutilizarea interogărilor complexe.

Aceasta permite nu doar execuția comenzilor în timp real, ci și gestionarea inteligentă a productivității prin înregistrări istorice și biblioteci de scripturi salvate.

![query-action-buttons-pt-at.png](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Butonul - Executare

- **Funcție:** Trimite scriptul prezent în zona „Comenzi” pentru a fi procesat de baza de date.

- **Feedback:** După execuție, sistemul afișează un mesaj de succes (în verde) și populează automat „Zona de Rezultate” cu datele solicitate.

### 5.2 Butonul - Istoric

- **Funcție:** Înregistrează interogările executate recent, afișând timpul de execuție (în milisecunde) și înregistrarea „data/ora” pentru fiecare acțiune.

- **Recuperare Rapidă:** La click pe orice înregistrare din lista de istoric, scriptul corespunzător este inserat din nou în zona „Comenzi” pentru a fi executat sau editat.

![query-command-history-button-pt-at.png](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Butonul - Salvare

**Funcție:** Permite stocarea scripturilor utile și transformarea lor în șabloane permanente. Acest lucru este util pentru interogările complexe care trebuie executate frecvent.

**Pas cu Pas pentru Salvare:**

- Cu scriptul pregătit în editor, faceți click pe Salvare.

- În fereastra modală „Salvare Comandă”, introduceți un „Nume” clar pentru a identifica funcția interogării (ex: „Filtrează produse după preț”).

- Faceți click pe butonul Salvare din interiorul modalului pentru a confirma stocarea.

![query-save-command-button-pt-at.png](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Butonul - Înregistrare

**Funcție:** Permite listarea tuturor scripturilor care au fost salvate anterior.

- **Încărcare script:** Faceți click pe scriptul dorit pentru a-l adăuga în zona „Comenzi”.

- **Ștergere:** Utilizați pictograma coșului de gunoi de lângă fiecare înregistrare pentru a o elimina definitiv după confirmare.

![query-registered-commands-button-pt-at.png](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)