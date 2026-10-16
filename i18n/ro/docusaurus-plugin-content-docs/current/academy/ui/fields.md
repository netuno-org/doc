---
sidebar_position: 3
id: fields
title: Câmpuri
---



Câmpurile sunt componentele fundamentale și "blocurile de construcție" ale unui formular în Netuno. Ele reprezintă interfața de interacțiune cu utilizatorul și definesc modul în care datele vor fi structurate și stocate.

În practică, fiecare câmp creat corespunde unei coloane din tabelul bazei de date, determinând tipul de informație pe care sistemul îl poate procesa — cum ar fi texte, numere, date, selecții și fișiere. 

### Creare și editare câmpuri

Aceste butoane permit gestionarea stării generale de editare:

- **Editare câmp existent:** Meniu derulant pentru a selecta un câmp deja creat și a-i modifica setările.

- **Creare câmp nou:** Golește toate câmpurile din formular pentru a începe configurarea unui element nou de la zero.

- **Clonare câmp:** Duplică setările câmpului selectat pentru a accelera crearea de elemente similare.

![editare-câmp-existent-pt.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Titlul câmpului

Titlul câmpului (cunoscut tehnic ca etichetă) este instrucțiunea vizuală care îl ghidează pe utilizator cu privire la ce informație trebuie introdusă într-un formular. Funcționează ca o etichetă identificatoare, asigurând că completarea datelor este intuitivă și corectă.

În această etapă, titlul are un dublu scop în platformă:

- **În Gestionarea câmpurilor (Construire):** Servește la identificarea câmpului în lista de elemente în timpul dezvoltării aplicației.

![titlu-nume-câmp-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **În Interfața utilizatorului (Vizualizare):** Este textul care apare poziționat imediat deasupra sau lângă câmpul de introducere (input), indicând utilizatorului final ce trebuie să tasteze în formular.

![conținut-titlu-nume-câmp-pt.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Numele coloanei

Spre deosebire de titlu, **Numele coloanei** este identificatorul intern și exclusiv al câmpului, utilizat direct în baza de date și în logica de programare. Prin intermediul acestui nume, sistemul localizează informația în baza de date.

**Formatare automată (Switch Auto):**

Netuno facilitează acest proces completând automat numele pe baza "Titlului câmpului". Modelul utilizat este snake_case.

**Reguli de scriere:** Dacă alegeți să completați manual (dezactivând "Auto"), păstrați numele la singular, folosiți doar litere mici și evitați spațiile sau caracterele speciale.

![nume-coloană-câmp-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipuri de date

Definirea **Tipului de date** determină natura informației colectate, afectând direct aspectul câmpului pentru utilizator și modul în care datele sunt stocate în sistem.

![tip-date-câmp-pt.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Câmpuri textuale

Aceste câmpuri sunt destinate introducerii de text în diferite formate. Ele variază în funcție de necesarul de volum de date.

| Tip | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| text | Creează un input simplu pentru o singură linie. | Nume, titluri de articole, cartiere etc. |
| textarea | Creează un input de zonă de text mai mare, pentru mai multe linii. | Descrieri de produse, comentarii, observații. |
| email | Creează un input de text formatat pentru a primi un e-mail. | Înregistrarea e-mailului de contact, login de utilizator. |
| texthtml | Creează un editor de text bogat, care permite formatarea cu HTML. | Crearea de conținut pentru un blog, e-mailuri de marketing, pagini de site. |
| textmd | Creează un editor de text care suportă limbajul de marcare Markdown. | Ideal pentru documentație tehnică, postări de blog pentru dezvoltatori. |

### 3.2 Câmpuri numerice

Utilizate pentru a colecta informații strict numerice.

| Tip | Ce face? | Exemplu de utilizare |
| :--- | :--- | :--- |
| textnum | Creează un input pentru introducerea numerelor întregi. | Cantitatea în stoc, vârsta unei persoane, numărul de locuri. |
| textfloat | Creează un input pentru introducerea numerelor cu zecimale. | Prețuri de produse (ex: 99.90), greutate (ex: 75.5), înălțime (ex: 1.82). |

### 3.3 Câmpuri de selecție

Utilizate atunci când utilizatorul trebuie să aleagă între opțiuni predefinite.

| Tip | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| select | Creează o listă de opțiuni în care utilizatorul poate alege doar una. | Selectarea unui stat (UF), stare civilă, categorie de produs. |
| multiselect | Creează o listă de opțiuni în care utilizatorul poate alege mai multe. | Selectarea intereselor (sport, tehnologie), ingredientele unei pizza. |
| checkbox | Afișează o singură casetă de selectare (activare/dezactivare). | "Accept termenii de utilizare", "Ține minte parola mea". |
| color | Afișează un selector vizual de culori. | Alegerea culorii unui produs, personalizarea culorii unui eveniment. |

### 3.4 Câmpuri de dată și oră

Specializate pentru introducerea informațiilor temporale.

| Tip | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| date | Afișează un calendar pentru ca utilizatorul să selecteze o dată (zi, lună, an). | Data nașterii, data programării. |
| datetime | Permite selectarea unei date și a unei ore. | Începutul unui eveniment, data și ora unei publicări. |
| time | Permite selectarea unei ore (ore și minute). | Programul de funcționare, ora unei alarme. |

### 3.5 Câmpuri de fișiere și media

Utilizate pentru a trimite fișiere și imagini către aplicația dvs.

| Tip | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| file | Creează un câmp pentru încărcarea oricărui fișier (PDF, DOCX, ZIP). | Atașarea unui CV, trimiterea unei dovezi de plată. |
| image | Un câmp optimizat pentru încărcarea imaginilor (JPG, PNG, GIF). | Fotografia de profil a utilizatorului, imaginea unui produs. |

### 3.6 Câmpuri tehnice și speciale

Aceste câmpuri au comportamente automate sau servesc unor scopuri specifice sistemului.

| Tip | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| hidden | Câmpul este invizibil pentru utilizator, dar păstrează o valoare. | Stochează un ID provenit de pe altă pagină, un cod de urmărire. |
| uid | Generează automat un Identificator Unic Universal. | Cheia primară a unei înregistrări, codul unic al unei comenzi. |
| user | Asociază înregistrarea cu utilizatorul care a creat-o sau modificat-o. | Identificarea autorului unei postări de blog, vânzătorul care a înregistrat un client. |
| lastchange | Stochează automat data și ora ultimei modificări a înregistrării. | Audit, pentru a ști când a fost modificată ultima dată o informație. |
| group | Utilizat pentru a grupa vizual alte câmpuri în formular. | Crearea de secțiuni precum "Date personale" și "Adresă" pentru a organiza formulare lungi. |

## 4 - Configurări de comportament și aspect

Această zonă este "panoul de control" al câmpului dvs., definind regulile de business și permisiunile de acces.

![configurări-comportament-aspect-câmp-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Reguli de integritate a datelor

Aceste opțiuni garantează calitatea și consistența informațiilor.

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Valori unice (Cheie primară) | Transformă câmpul în identificatorul principal și unic, împiedicând valorile duplicate. | A se folosi pentru "CPF", garantând că nu există doi clienți cu același număr. |
| Obligatoriu (Nenul) | Face completarea câmpului obligatorie. | A se aplica în câmpuri esențiale precum "Nume" și "E-mail". |

### 4.2 Controlul permisiunilor și vizibilității

Define unde și cum interacționează utilizatorii cu datele acestui câmp.

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Afișare în rezultat | Definește dacă coloana va apărea în listarea principală de date. | Debifați pentru "Observații interne" pentru a menține listarea curată. |
| Permite filtrarea | Adaugă o casetă de căutare pentru această coloană în listare. | Activați la "Starea comenzii" pentru a facilita localizarea. |
| Permite vizualizarea | Controlează dacă conținutul va fi afișat în modul de vizualizare. | Lăsați bifat în majoritatea cazurilor. |
| Permite editarea | Permite modificarea conținutului când o înregistrare este editată. | Debifați pentru câmpuri care nu trebuie modificate, precum "Data înregistrării". |
| Permite la creare nouă | Definește dacă câmpul trebuie să apară în formularul de creare. | Debifați pentru câmpuri de "feedback", care trebuie completate doar *după* creare. |
| Permite exportarea | Include datele acestui câmp la exportarea listării (Excel, CSV). | Debifați datele interne care nu sunt relevante pentru rapoarte externe. |

## 5 - Organizarea vizuală a formularului

Define poziționarea câmpurilor în aspect.

![organizare-vizuală-formular-câmp-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Linie | Definește poziția verticală a câmpului în formular. | Puneți "Nume complet" la Linia: 1 și "Adresă" la Linia: 2. |
| Coloană | Definește poziția orizontală, permițând mai multe câmpuri alăturate. | Pentru a avea "Oraș" și "Județ" împreună, folosiți Linia: 3, Coloana: 1 (Oraș) și Coloana: 2 (Județ). |

## 6 - Vezi mai multe opțiuni

Pentru un control mai personalizat, faceți clic pe butonul "+ Vezi mai multe opțiuni".

### 6.1 Câmp de descriere

![câmp-descriere-opțiuni-pt.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Descriere | Adaugă un text de ajutor sau instrucțiune care apare sub câmp. | La "Parolă", folosiți descrierea pentru a informa regulile: "Parola trebuie să aibă cel puțin 8 caractere...". |

### 6.2 Dimensionarea câmpului

![dimensionare-aspect-câmp-pt.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Control fin asupra dimensiunii câmpului.

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Lățime | Definește lățimea componentei (bazat pe grilă de 12 coloane). | "CPF" (Lățime: 6) și "Data nașterii" (Lățime: 6) pe aceeași linie. |
| Înălțime | Definește înălțimea componentei în pixeli (px). | În `textarea` "Observații", definiți Înălțime "120" pentru o zonă mai mare. |
| Lățimea celulei (px) | Definește o lățime fixă în pixeli pentru celulă. | Utilizați pentru a alinia câmpuri cu lățimi specifice, precum "UF" (Lățime: 80). |
| Înălțimea celulei (px) | Definește o înălțime fixă în pixeli pentru celulă. | Măriți înălțimea unui câmp `image` pentru a crea o zonă de "trage și plasează". |
| Rowspan | Permite celulei să se extindă vertical pe mai multe linii. | Un `textarea` de "Descriere" care să ocupe 3 linii de înălțime lângă câmpuri mai mici. |
| Colspan | Permite celulei să se extindă orizontal pe mai multe coloane. | Un câmp "Adresă completă" (Colspan: 2) deasupra "Oraș" și "Județ". |

### 6.3 Validare și reguli de date

Stabiliți limite pentru valorile introduse.

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Max | Valoarea maximă (numerică) sau numărul maxim de caractere (text). | La "Notă (0 la 10)", definiți Max ca "10". La "Pseudonim", Max "20". |
| Min | Valoarea minimă (numerică) sau numărul minim de caractere (text). | La "Cantitate", definiți Min ca "1". La "Justificare", Min "30". |

### 6.4 Controlul accesului 

![control-acces-câmp-pt.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Definiți grupuri și utilizatori care pot vizualiza și edita câmpul.

| Configurare | Ce face? | Exemplu de utilizare practică |
| :--- | :--- | :--- |
| Vizualizare utilizator și Vizualizare grup | Restrânge *vizualizarea* câmpului doar la utilizatorii sau grupurile specificate. | "Comisionul vânzătorului" să aibă Vizualizare grup "Manageri". |
| Editare utilizator și Editare grup | Permite doar utilizatorilor sau grupurilor specificate să *editeze* câmpul (ceilalți îl văd ca "doar citire"). | "Starea comenzii" să aibă Editare grup "Logistică". |