---
sidebar_position: 3
id: fields
title: Câmpuri
---



Câmpurile sunt componentele fundamentale și „cărămizile de construcție" ale unui formular în Netuno. Ele reprezintă interfața de interacțiune cu utilizatorul și definesc modul în care datele vor fi structurate și stocate.

În practică, fiecare câmp creat corespunde unei coloane din tabelul bazei de date, determinând tipul de informație pe care sistemul îl poate procesa — cum ar fi texte, numere, date, selecții și fișiere.

### Creare și Editare Câmpuri

Aceste butoane permit gestionarea stării generale a editării:

- **Editare câmp existent:** Meniu derulant pentru a selecta un câmp deja creat și a-i modifica configurațiile.

- **Creare câmp nou:** Golește toate câmpurile formularului pentru a începe configurarea unui element nou de la zero.

- **Clonare câmp:** Duplică configurațiile câmpului selectat pentru a accelera crearea unor elemente similare.

![field-edit-existing-pt.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Titlul Câmpului

Titlul Câmpului (cunoscut tehnic ca Label) este instrucțiunea vizuală care îl orientează pe utilizator cu privire la ce informație trebuie introdusă într-un formular. Funcționează ca o etichetă identificatoare, garantând că completarea datelor este intuitivă și corectă.

În această etapă, titlul are o dublă finalitate în platformă:

- **În Gestionarea Câmpurilor (Construire):** Servește pentru a identifica câmpul în lista ta de elemente în timpul dezvoltării aplicației.

![field-title-name-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **În Interfața Utilizatorului (Vizualizare):** Este textul care apare poziționat chiar deasupra sau în lateralul câmpului de intrare (input), indicând utilizatorului final ce trebuie să tasteze în formular.

![field-title-name-content-pt.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Numele coloanei

Spre deosebire de titlu, **Numele Coloanei** este identificatorul intern și exclusiv al câmpului, utilizat direct în baza de date și în logicile de programare. Prin intermediul acestui nume, sistemul localizează informația în baza de date.

**Formatare Automată (Switch Auto):**

Netuno facilitează acest proces prin completarea automată a numelui pe baza „Titlului câmpului". Modelul utilizat este snake_case.

**Reguli de Scriere:** Dacă optezi pentru completarea manuală (dezactivând „Auto"), menține numele la singular, folosește doar litere mici și evită spațiile sau caracterele speciale.

![field-column-name-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipuri de date

Definirea **Tipului de Date** determină natura informației colectate, impactând direct asupra aspectului câmpului pentru utilizator și asupra modului în care data este stocată în sistem.

![field-type-data-pt.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Câmpuri Textuale

Aceste câmpuri sunt destinate introducerii de text în diferite formate. Ele variază în funcție de necesitatea volumului de date.

| Tip | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| text | Creează un input simplu pentru o singură linie. | Nume, titluri de articole, cartiere, etc. |
| textarea | Creează un input cu o zonă de text mai mare, pentru multiple linii. | Descrieri de produse, comentarii, observații. |
| email | Creează un input de text formatat pentru a primi un e-mail. | Înregistrarea e-mailului de contact, login de utilizator. |
| texthtml | Creează un editor de text bogat, care permite formatarea cu HTML. | Crearea de conținut pentru un blog, e-mailuri de marketing, pagini de site. |
| textmd | Creează un editor de text care suportă limbajul de marcare Markdown. | Ideal pentru documentație tehnică, postări de blog pentru dezvoltatori. |

### 3.2 Câmpuri Numerice

Utilizate pentru a colecta informații care sunt strict numerice.

| Tip | Ce face? | Exemplu de Utilizare |
| :--- | :--- | :--- |
| textnum | Creează un input pentru introducerea numerelor întregi. | Cantitate în stoc, vârsta unei persoane, numărul de locuri. |
| textfloat | Creează un input pentru introducerea numerelor cu zecimale. | Prețuri de produse (ex: 99.90), greutate (ex: 75.5), înălțime (ex: 1.82). |

### 3.3 Câmpuri de Selecție

Utilizate atunci când utilizatorul trebuie să aleagă între opțiuni predefinite.

| Tip | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| select | Creează o listă de opțiuni din care utilizatorul poate alege doar una. | Selectarea unui județ, starea civilă, categoria unui produs. |
| multiselect | Creează o listă de opțiuni din care utilizatorul poate alege mai multe. | Selectarea intereselor (sport, tehnologie), ingredientele unei pizza. |
| checkbox | Afișează o singură casetă de selecție (activare/dezactivare). | „Accept termenii de utilizare", „Ține minte parola mea". |
| color | Afișează un selector de culori vizual. | Alegerea culorii unui produs, personalizarea culorii unui eveniment. |

### 3.4 Câmpuri de Dată și Oră

Specializate pentru introducerea informațiilor temporale.

| Tip | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| date | Afișează un calendar pentru ca utilizatorul să selecteze o dată (zi, lună, an). | Data nașterii, data programării. |
| datetime | Permite selectarea unei date și a unei ore. | Începutul unui eveniment, data și ora unei publicări. |
| time | Permite selectarea unei ore (ore și minute). | Programul de funcționare, ora unei alarme. |

### 3.5 Câmpuri de Fișiere și Media

Utilizate pentru a trimite fișiere și imagini către aplicația ta.

| Tip | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| file | Creează un câmp pentru încărcarea oricărui fișier (PDF, DOCX, ZIP). | Atașarea unui CV, trimiterea unei dovezi de plată. |
| image | Un câmp optimizat pentru încărcarea imaginilor (JPG, PNG, GIF). | Fotografia de profil a utilizatorului, imaginea unui produs. |

### 3.6 Câmpuri Tehnice și Speciale

Aceste câmpuri au comportamente automate sau servesc unor scopuri specifice ale sistemului.

| Tip | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| hidden | Câmpul este invizibil pentru utilizator, dar stochează o valoare. | Stocarea unui ID provenit de pe altă pagină, un cod de urmărire. |
| uid | Generează automat un Identificator Unic Universal. | Cheia primară a unei înregistrări, codul unic al unei comenzi. |
| user | Asociază înregistrarea cu utilizatorul care a creat-o sau modificat-o. | Identificarea autorului unei postări de blog, vânzătorul care a înregistrat un client. |
| lastchange | Stochează automat data și ora ultimei modificări a înregistrării. | Audit, pentru a ști când a fost modificată ultima dată o dată. |
| group | Utilizat pentru a grupa vizual alte câmpuri în formular. | Crearea de secțiuni precum „Date Personale" și „Adresă" pentru a organiza formulare lungi. |

## 4 - Configurări de Comportament și Aspect

Această zonă este „panoul de control" al câmpului tău, definind regulile de business și permisiunile de acces.

![field-behavior-and-layout-settings-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Reguli de Integritate a Datelor

Aceste opțiuni garantează calitatea și consistența informațiilor.

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Valori Unice (Cheie Primară) | Transformă câmpul în identificatorul principal și unic, împiedicând valorile duplicate. | Utilizare pentru „CNP", garantând că nu există doi clienți cu același număr. |
| Obligatoriu (Non-Nul) | Face completarea câmpului obligatorie. | Aplicare în câmpuri esențiale precum „Nume" și „E-mail". |

### 4.2 Controlul Permisiunilor și Vizibilității

Definește unde și cum interacționează utilizatorii cu datele acestui câmp.

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Afișare în Rezultat | Definește dacă coloana va apărea în listarea principală de date. | Debifare pentru „Observații Interne" pentru a menține listarea curată. |
| Permitere Filtrare | Adaugă o casetă de căutare pentru această coloană în listare. | Activare în „Status Comandă" pentru a facilita localizarea. |
| Permitere Vizualizare | Controlează dacă conținutul va fi afișat în modul de vizualizare. | Lăsare bifată în majoritatea cazurilor. |
| Permitere Editare | Permite modificarea conținutului atunci când o înregistrare este editată. | Debifare pentru câmpuri care nu trebuie modificate, precum „Data Înregistrării". |
| Permitere la Creare Nouă | Definește dacă câmpul trebuie să apară în formularul de creare. | Debifare pentru câmpurile de „feedback", care trebuie completate doar *după* creare. |
| Permitere Exportare | Include datele acestui câmp la exportarea listării (Excel, CSV). | Debifare date interne care nu sunt relevante pentru rapoarte externe. |

## 5 - Organizarea Vizuală a Formularului

Definește poziționarea câmpurilor în aspect.

![field-visual-organization-form-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Rând | Definește poziția verticală a câmpului în formular. | Plasarea „Nume Complet" în Rând: 1 și „Adresă" în Rând: 2. |
| Coloană | Definește poziția orizontală, permițând multiple câmpuri unul lângă altul. | Pentru a avea „Oraș" și „Județ" împreună, folosește Rând: 3, Coloană: 1 (Oraș) și Coloană: 2 (Județ). |

## 6 - Vezi Mai Multe Opțiuni

Pentru un control mai personalizat, fă clic pe butonul „+ Vezi Mai Multe Opțiuni".

### 6.1 Câmp de Descriere

![field-view-options-description-pt.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Descriere | Adaugă un text de ajutor sau instrucțiune care apare sub câmp. | La „Parolă", folosește descrierea pentru a informa regulile: „Parola trebuie să aibă minim 8 caractere...". |

### 6.2 Dimensionarea Câmpului

![field-dimensioning-layout-pt.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Control fin asupra dimensiunii câmpului.

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Lățime | Definește lățimea componentei (bazat pe grilă de 12 coloane). | „CNP" (Lățime: 6) și „Data Nașterii" (Lățime: 6) pe același rând. |
| Înălțime | Definește înălțimea componentei în pixeli (px). | La `textarea` „Observații", definește Înălțime „120" pentru o zonă mai mare. |
| Lățimea Celulei (px) | Definește o lățime fixă în pixeli pentru celulă. | Utilizare pentru alinierea câmpurilor cu lățimi specifice, precum „Județ" (Lățime: 80). |
| Înălțimea Celulei (px) | Definește o înălțime fixă în pixeli pentru celulă. | Mărirea înălțimii unui câmp `image` pentru a crea o zonă de „trage și plasează". |
| Rowspan | Permite celulei să se extindă vertical pe multiple rânduri. | Un `textarea` de „Descriere" care să ocupe 3 rânduri de înălțime alături de câmpuri mai mici. |
| Colspan | Permite celulei să se extindă orizontal pe multiple coloane. | Un câmp „Adresă Completă" (Colspan: 2) deasupra „Oraș" și „Județ". |

### 6.3 Validare și Reguli de Date

Stabilește limite pentru valorile introduse.

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Max | Valoarea maximă (numerică) sau numărul maxim de caractere (text). | La „Notă (0 la 10)", definește Max ca „10". La „Poreclă", Max „20". |
| Min | Valoarea minimă (numerică) sau numărul minim de caractere (text). | La „Cantitate", definește Min ca „1". La „Justificare", Min „30". |

### 6.4 Controlul Accesului 

![field-access-control-pt.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Definește grupuri și utilizatori care pot vizualiza și edita câmpul.

| Configurare | Ce face? | Exemplu de Utilizare Practică |
| :--- | :--- | :--- |
| Vizualizare Utilizator și Vizualizare Grup | Restrânge *vizualizarea* câmpului doar la utilizatorii sau grupurile specificate. | „Comisionul Vânzătorului" să aibă Vizualizare Grup „Manageri". |
| Editare Utilizator și Editare Grup | Permite doar utilizatorilor sau grupurilor specificate să *editeze* câmpul (ceilalți îl văd ca „doar citire"). | „Status Comandă" să aibă Editare Grup „Logistică". |