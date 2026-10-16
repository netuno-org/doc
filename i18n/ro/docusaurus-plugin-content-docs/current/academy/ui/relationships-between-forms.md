---
sidebar_position: 5
id: relationships-between-forms
title: Relații între formulare
sidebar_label: Relații
---

## Cum se creează relații între formulare

Crearea de relații între formulare este o funcție esențială pentru organizarea inteligentă a informațiilor. Conectând formularele, eliminați necesitatea duplicării datelor și vă asigurați că aplicația este coerentă, scalabilă și ușor de întreținut.

Unul dintre marile avantaje ale Netuno este capacitatea de a genera automat diagrama modelului de date.

Relațiile definesc modul în care datele din diferite tabele interacționează între ele. Această conexiune se reflectă direct în interfața utilizatorului (UI), permițând câmpurilor dintr-un formular să preia automat informații din alt formular.

**Diagramă simplă:** Ideală pentru validarea logicii inițiale a modulelor mici.

![sablon-diagrama-simplu-ro.png](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Diagramă complexă:** Demonstrează robustețea instrumentului în aplicații de mari dimensiuni, mapând multiple dependențe și fluxuri de date.
 
![sablon-diagrama-complex-ro.png](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Crearea câmpului relațional de tip Select

Câmpul Select creează o relație între două formulare. Acesta vă permite să alegeți o valoare dintr-o listă derulantă (dropdown), în loc să o tastați manual. Această listă este completată cu date care există deja într-un alt formular.

Vom folosi formularele **Vehicule** și **Culoare** ca exemplu.

**Când se folosește?** Folosiți select când aveți o relație de tip "Mai mulți-la-unu" (N-1).

**Exemplu:** Multe vehicule pot avea o culoare. În loc să tastați "Albastru" de fiecare dată, selectați "Albastru" dintr-o listă de culori deja înregistrate.

- **Formular destinație:** Vehicul (unde vom crea câmpul select).
- **Formular sursă:** Culoare (de unde provin datele listei de culori).


### Cerințe
Înainte de a începe, asigurați-vă că:

- Ambele formulare (**Vehicul** și **Culoare**) sunt deja create în Netuno. Pentru mai multe detalii, consultați ghidul nostru despre [Crearea formularelor](/docs/academy/ui/forms).

- Formularul sursă (**Culoare**) are deja câteva înregistrări. (Ex: "Albastru", "Roșu", "Argintiu"). Pentru mai multe detalii, consultați ghidul nostru despre [Crearea câmpurilor](/docs/academy/ui/fields).

### Crearea și configurarea câmpului Select

Adăugați tipul de câmp **select** în formularul **Vehicul** pentru a putea "prelua" datele din formularul **Culoare**.

![creeaza-si-configureaza-campul-select-ro.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Accesați formularul destinație

- În Backoffice, mergeți la administrarea câmpurilor și deschideți editarea formularului **Vehicul**.
 
#### 2 - Creați un câmp nou

- Faceți clic pe "Creează câmp nou".

#### 3 - Definiți titlul și numele coloanei

- **Titlul câmpului:** Dați un nume prietenos care va apărea utilizatorului. **Exemplu:** Culoarea automobilului.
- **Numele coloanei:** Acesta este numele tehnic al câmpului în baza de date.

**Bună practică:** Când creați un câmp relațional, folosiți întotdeauna sufixul `_id` în **Numele coloanei**. Astfel devine clar că această coloană nu stochează textul "Albastru", ci ID-ul de referință pentru înregistrarea "Albastru" din formularul **Culoare**. **Exemplu:** `culoare_automobil_id`.

#### 4 - Alegeți tipul de date

- În câmpul **Tip**, selectați opțiunea _`select - select`_ din listă.

#### 5 - Configurați legătura (relația)

![configureaza-legatura-ro.png](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- La alegerea _`select`_, va apărea un câmp nou numit **Legătură**.
- Faceți clic pe butonul **Configurați**.
- Se va deschide o fereastră modală, listând toate formularele. Acesta este momentul să alegeți formularul sursă.
- Selectați formularul care conține datele pe care doriți să le listați. În exemplul nostru, faceți clic pe **culoare - Culoare**.
- După selectare, faceți clic pe butonul **Închideți** din fereastra modală.

#### 6 - Salvați modificările

- Faceți clic pe butonul **Salvați** în administrarea câmpurilor pentru a aplica toate configurațiile.

### Rezultat

Gata! Acum, în modul "vizualizare", când adăugați sau editați o înregistrare în formularul **Vehicul**, câmpul "Culoarea automobilului" va fi o listă derulantă (dropdown) care va afișa toate culorile înregistrate în formularul Culoare.

## Crearea câmpului relațional de tip Multiselect

Câmpul **Multiselect** creează o relație "Mai mulți-la-mai mulți" (N-M). Acesta vă permite să selectați mai multe elemente dintr-o listă într-un singur câmp.

Vom folosi formularele **Persoană**, **Funcție** și **Persoană-Funcție** ca exemplu.

**Când se folosește?** Folosiți multiselect când o înregistrare poate fi legată de mai multe altele și invers.
**Exemplu:** Multe persoane pot avea multe funcții.

- O persoană (ex: "Ana") poate avea funcțiile "Admin" și "Manager".
- Funcția "Manager" poate fi asociată cu mai multe persoane (ex: "Ana", "Bruno" și "Andrei").

Pentru ca acest lucru să funcționeze, avem nevoie de trei formulare:

- **Formular "părinte" (Persoană):** Unde câmpul _`multiselect`_ va fi vizibil pentru utilizator.
- **Formular "sursă" (Funcție):** De unde provin opțiunile listei (ex: "Admin", "Manager").
- **Formular de "joncțiune" (Persoană-Funcție):** Un formular "punte" care stochează conexiunile dintre **Persoană** și **Funcție**.

### Cerințe
Înainte de a începe, asigurați-vă că:

- Formularul "părinte" (**Persoană**) este deja creat și are câteva înregistrări (ex: "Ana", "Bruno", "Luca").
- Formularul "sursă" (**Funcție**) este deja creat și are câteva înregistrări (ex: "Admin", "Manager", "Consultant").

### Crearea și configurarea câmpului Multiselect
Configurarea se face în 4 etape:

### Etapa 1: crearea formularului de joncțiune (Persoană-Funcție)
Mai întâi, vom crea formularul "punte".

1 - **Mergeți la Administrare > Formulare** și faceți clic pe "Creează formular nou".

2 - **Titlul formularului:** Persoană-Funcție.

3 - **Numele tabelului:** persoana_functie (sau similar).

4 - **Important:** În câmpul **Părinte**, selectați formularul "părinte" principal, care în acest caz este **Persoană**. Astfel, **Persoană-Funcție** devine un subformular.

5 - Faceți clic pe **Salvați**.

![creeaza-formularul-parinte-pentru-jonctiune-ro.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Etapa 2: configurarea câmpurilor formularului de joncțiune

Adăugați câmpurile "punte" în formularul Persoană-Funcție.

1 - Accesați administrarea câmpurilor formularului Persoană-Funcție pe care tocmai l-ați creat.

2 - Adăugați două câmpuri de tip select: unul care va indica spre Persoană și altul spre Funcție.

**Câmpul 1 (Legătură către Persoană):**

![camp-legatura-pentru-persoana-ro.png](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Titlul câmpului:** Numele persoanei
- **Numele coloanei:** `nume_persoana_id` (urmând convenția **_id**)
- **Tip:** `select - select`
- **Legătură:** Faceți clic pe **Configurați** și selectați câmpul principal al formularului **Persoană**, exemplu: `persoana:nume`.
- Faceți clic pe **Salvați**.

**Câmpul 2 (Legătură către Funcție):**

- **Titlul câmpului:** Funcția persoanei.
- **Numele coloanei:** `functie_persoana_id`.
- **Tip:** `select - select`.
- **Legătură:** Faceți clic pe **Configurați** și selectați câmpul principal al formularului **Funcție**, exemplu: `functie:functie_id`.
- Faceți clic pe **Salvați**.

![camp-legatura-persoana-functie-ro.png](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Etapa 3: crearea câmpului multiselect în formularul "părinte"

Cu "puntea" (**Persoană-Funcție**) gata, ne putem întoarce la formularul **Persoană** pentru a crea câmpul final.

1 - Mergeți la administrarea câmpurilor formularului **Persoană**.

2 - Faceți clic pe "Creează câmp nou".

3 - **Titlul câmpului:** Persoană Funcție.

4 - **Numele coloanei:** _`persoana_functie_id`_.

5 - **Tip:** _`multiselect - multiselect`_.


### Etapa 4: configurarea câmpului multiselect

La selectarea tipului _`multiselect`_, vor apărea două câmpuri noi de configurare: **Referință** și **Legătură**.

#### 1 - Referință (Unde se salvează relația?)

 - **Acest câmp îi spune Netuno:** "Care câmp din formularul 'punte' se referă înapoi la mine (**Persoană**)?"
 - Faceți clic pe **Configurați**.
 - Selectați formularul de joncțiune (**Persoană-Funcție**) și câmpul pe care l-ați creat în Etapa 2 (Câmpul 1). **Exemplu:** _`persoana_functie:nume_persoana_id`_.

#### 2 - Legătură (De unde provin opțiunile?)

 - **Acest câmp spune:** "Care câmp din formularul 'punte' se referă la opțiuni (**Funcție**)?"
 - Faceți clic pe **Configurați**.
 - Selectați formularul de joncțiune (**Persoană-Funcție**) și câmpul pe care l-ați creat în Etapa 2 (Câmpul 2). **Exemplu:** _`persoana_functie:functie_persoana_id`_.
  
#### 3 - Salvați modificările

- Faceți clic pe butonul **Salvați** în administrarea câmpurilor pentru a aplica toate configurațiile.

![configureaza-campul-multiselect-ro.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Rezultat

Gata! Acum, în modul "vizualizare", când adăugați sau editați o înregistrare în formularul **Persoană**, câmpul "Persoană Funcție" va apărea ca o casetă de selecție multiplă. Veți putea alege mai multe funcții din listă (care provin din formularul **Funcție**), iar Netuno va salva automat aceste asocieri în formularul **Persoană-Funcție**.

Dacă aveți întrebări, contactați-ne prin intermediul comunității și al altor canale disponibile la finalul acestei pagini.

Dezvoltare plăcută!