---
sidebar_position: 4
id: queries-interface
title: Interfața Query
---


Instrumentul Query din Netuno este o resursă puternică ce permite interacțiunea directă cu baza de date a aplicației prin SQL (Structured Query Language).

Această funcționalitate este esențială pentru testarea logicilor de afaceri, validarea informațiilor stocate și stabilirea bazelor pentru rapoarte sau componente de interfață complexe. Netuno suportă în prezent trei sisteme de gestionare a bazelor de date: **PostgreSql, H2 Database și MySQL**.

## 1 - Secțiunea Query

În modul „Construire”, din meniul lateral, accesați zona „Gestionare” și faceți clic pe secțiunea „Query”.

![Interfața Query – secțiunea Query](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Zona de comenzi

Această zonă este mediul de interacțiune directă cu baza de date a proiectului. Aici puteți executa comenzi pentru a consulta, căuta și analiza date în mod precis și instantaneu.

Asigurați-vă că sintaxa utilizată este compatibilă cu baza de date configurată în mediul dumneavoastră Netuno.

![Zona de interogare a bazei de date](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Zona de validare

Zona de validare oferă feedback instantaneu despre sintaxa și execuția codului dumneavoastră.

- **Succes (verde):** Când interogarea este executată fără erori de sintaxă sau de structură, mesajul este afișat cu fundalul verde. Aceasta indică faptul că datele au fost procesate și sunt pregătite pentru vizualizare.

![Zona de validare – succes](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Eșec sau eroare (roșu):** Dacă există orice impediment la execuție (cum ar fi o eroare de sintaxă, un nume de coloană incorect sau lipsa permisiunii), mesajul va fi afișat cu fundalul roșu. Pe lângă culoare, sistemul va prezenta jurnalul erorilor tehnice pentru a ajuta la diagnosticare.

![Zona de validare – eroare](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Zona de rezultate

Este locul unde informațiile solicitate bazei de date sunt prezentate într-o formă structurată. Vă permite să vizualizați conținutul tabelelor și să confirmați dacă logica interogării dumneavoastră returnează înregistrările așteptate.

![Zona de rezultate](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Butoane de acțiune

Această secțiune detaliază instrumentele disponibile pentru executarea, salvarea și gestionarea scripturilor SQL, optimizând fluxul de lucru și reutilizarea interogărilor complexe.

Acestea permit nu doar execuția comenzilor în timp real, ci și gestionarea inteligentă a productivității prin înregistrări istorice și biblioteci de scripturi salvate.

![Butoanele de acțiune pentru interogări](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Butonul - Execută

- **Funcție:** Trimite scriptul prezent în zona „Comenzi” pentru a fi procesat de baza de date.

- **Feedback:** După execuție, sistemul afișează un mesaj de succes (în verde) și completează automat „Zona de rezultate” cu datele solicitate.

### 5.2 Butonul - Istoric

- **Funcție:** Înregistrează interogările executate recent, afișând timpul de execuție (în milisecunde) și înregistrarea „data/ora” pentru fiecare acțiune.

- **Recuperare rapidă:** La clic pe orice înregistrare din lista de istoric, scriptul corespunzător este inserat din nou în zona „Comenzi” pentru a fi executat sau editat.

![Butonul Istoric al comenzilor](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Butonul - Salvează

**Funcție:** Permite stocarea scripturilor utile și transformarea lor în șabloane permanente. Acest lucru este util pentru interogări complexe care trebuie executate frecvent.

**Pași pentru salvare:**

- Cu scriptul pregătit în editor, faceți clic pe Salvează.

- În fereastra modală „Salvează comanda”, introduceți un „Nume” clar pentru a identifica funcția interogării (de ex.: „Filtrează produse după preț”).

- Faceți clic pe butonul Salvează din fereastra modală pentru a confirma stocarea.

![Butonul Salvează comanda](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Butonul - Înregistrări

**Funcție:** Permite listarea tuturor scripturilor salvate anterior.

- **Încărcare script:** Faceți clic pe scriptul dorit pentru a-l adăuga în zona „Comenzi”.

- **Ștergere:** Utilizați pictograma coșului de gunoi de lângă fiecare înregistrare pentru a o elimina definitiv după confirmare.

![Butonul Înregistrări ale comenzilor](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)