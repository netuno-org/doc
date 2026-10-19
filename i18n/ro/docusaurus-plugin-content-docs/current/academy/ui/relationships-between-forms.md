---
sidebar_position: 5
id: relationships-between-forms
title: Relații între formulare
sidebar_label: Relații
---

## Cum se creează relații între formulare

Crearea relațiilor între formulare este o funcționalitate esențială pentru organizarea inteligentă a informațiilor. Prin conectarea formularelor, eliminați necesitatea de a duplica datele și vă asigurați că aplicația dvs. este coerentă, scalabilă și ușor de întreținut.

Unul dintre marile avantaje ale Netuno este capacitatea de a genera automat diagrama modelului de date.

Relațiile definesc modul în care datele din diferite tabele interacționează între ele. Această conexiune se reflectă direct în interfața utilizatorului (UI), permițând câmpurilor unui formular să preia automat informații din altul.

**Diagramă simplă:** ideală pentru validarea logicii inițiale a modulelor mici.

![Diagramă simplă](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Diagramă complexă:** demonstrează robustețea instrumentului în aplicații la scară largă, mapând multiple dependențe și fluxuri de date.
 
![Diagramă complexă](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Crearea unui câmp relațional de tip Select

Câmpul Select creează o relație între două formulare. Acesta vă permite să alegeți o valoare dintr-o listă derulantă (dropdown), în loc să o tastați manual. Această listă este completată cu date care există deja în alt formular.

Vom folosi formularele **Vehicule** și **Culoare** ca exemplu. 

**Când se folosește?** Folosiți select când aveți o relație de tip „mulți-la-unu” (N-1).

**Exemplu:** Multe vehicule pot avea o culoare. În loc să tastați „Albastru” de fiecare dată, selectați „Albastru” dintr-o listă de culori deja înregistrate.

- **Formular destinație:** Vehicul (unde vom crea câmpul select).
- **Formular sursă:** Culoare (de unde provin datele listei de culori).


### Cerințe
Înainte de a începe, asigurați-vă că:

- Ambele formulare (**Vehicul** și **Culoare**) sunt deja create în Netuno. Pentru mai multe detalii, consultați ghidul nostru despre [Crearea formularelor](/docs/academy/ui/forms).

- Formularul sursă (**Culoare**) are deja câteva înregistrări. (De ex. „Albastru”, „Roșu”, „Argintiu”.) Pentru mai multe detalii, consultați ghidul nostru despre [Crearea câmpurilor](/docs/academy/ui/fields).

### Creați și configurați Select

Adăugați tipul de câmp **select** în formularul **Vehicul**, astfel încât acesta să poată „prelua” datele din formularul **Culoare**.

![Creați și configurați câmpul select](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Accesați formularul destinație

- În Backoffice, mergeți la gestionarea câmpurilor și deschideți editarea formularului **Vehicul**.
 
#### 2 - Creați câmpul nou

- Faceți clic pe „Creează câmp nou”.

#### 3 - Definiți titlul și numele coloanei

- **Titlul câmpului:** Dați un nume prietenos care va apărea utilizatorului. **Exemplu:** Culoarea automobilului.
- **Numele coloanei:** Acesta este numele tehnic al câmpului în baza de date.

**Bună practică:** Când creați un câmp relațional, folosiți întotdeauna sufixul `_id` în **Numele coloanei**. Acest lucru clarifică faptul că această coloană nu stochează textul „Albastru”, ci ID-ul de referință pentru înregistrarea „Albastru” din formularul **Culoare**. **Exemplu:** `culoare_automobil_id`.

#### 4 - Alegeți tipul de date

- În câmpul **Tip**, selectați opțiunea _`select - select`_ din listă.

#### 5 - Configurați linkul (relația)

![Configurați linkul](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- La alegerea _`select`_, va fi afișat un câmp nou numit **Link**.
- Faceți clic pe butonul **Configurează**.
- Se va deschide o fereastră modală, listând toate formularele dvs. Acesta este momentul să alegeți formularul sursă.
- Selectați formularul care conține datele pe care doriți să le listați. În exemplul nostru, faceți clic pe **culoare - Culoare**.
- După selectare, faceți clic pe butonul **Închide** din fereastra modală.

#### 6 - Salvați modificările

- Faceți clic pe butonul **Salvează** din gestionarea câmpurilor pentru a aplica toate configurațiile.

### Rezultat

Gata! Acum, în modul „vizualizare”, când adăugați sau editați o înregistrare în formularul **Vehicul**, câmpul „Culoarea automobilului” va fi o listă derulantă (dropdown) care va afișa toate culorile înregistrate în formularul Culoare.

## Crearea unui câmp relațional de tip Multiselect

Câmpul **Multiselect** creează o relație „mulți-la-mulți” (N-M). Acesta vă permite să selectați mai multe elemente dintr-o listă într-un singur câmp.

Vom folosi formularele **Persoană**, **Funcție** și **Persoană-Funcție** ca exemplu.

**Când se folosește?** Folosiți multiselect când o înregistrare poate fi legată de mai multe altele și invers.
**Exemplu:** Mai multe persoane pot avea mai multe funcții.

- O persoană (de ex. „Ana”) poate avea funcțiile „Admin” și „Manager”.
- Funcția „Manager” poate fi asociată cu mai multe persoane (de ex. „Ana”, „Bruno” și „Tudor”).

Pentru ca acest lucru să funcționeze, avem nevoie de trei formulare:

- **Formularul „Părinte” (Persoană):** unde câmpul _`multiselect`_ va fi vizibil pentru utilizator.
- **Formularul „Sursă” (Funcție):** de unde provin opțiunile listei (de ex. „Admin”, „Manager”).
- **Formularul „Legătură” (Persoană-Funcție):** un formular de legătură care stochează conexiunile dintre **Persoană** și **Funcție**.

### Cerințe
Înainte de a începe, asigurați-vă că:

- Formularul „Părinte” (**Persoană**) este deja creat și are câteva înregistrări (de ex. „Ana”, „Bruno”, „Lucas”).
- Formularul „Sursă” (**Funcție**) este deja creat și are câteva înregistrări (de ex. „Admin”, „Manager”, „Consultant”).

### Creați și configurați Multiselect 
Configurarea se face în 4 etape:

### Etapa 1: creați formularul de legătură (Persoană-Funcție)
Mai întâi, să creăm formularul de legătură.

1 - **Mergeți la Gestionare > Formulare** și faceți clic pe „Creează formular nou”.

2 - **Titlul formularului:** Persoană-Funcție.

3 - **Numele tabelului:** `persoana_functie` (sau similar).

4 - **Important:** În câmpul **Părinte**, selectați formularul principal „Părinte”, care în acest caz este **Persoană**. Aceasta transformă **Persoană-Funcție** într-un subformular.

5 - Faceți clic pe **Salvează**.

![Creați formularul părinte pentru legătură](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Etapa 2: configurați câmpurile formularului de legătură

Adăugați câmpurile de legătură la formularul Persoană-Funcție.

1 - Accesați gestionarea câmpurilor formularului Persoană-Funcție pe care tocmai l-ați creat.

2 - Adăugați două câmpuri de tip select: unul care va indica către Persoană și altul către Funcție.

**Câmpul 1 (Link către Persoană):**

![Câmpul link pentru persoană](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Titlul câmpului:** Numele persoanei
- **Numele coloanei:** `nume_persoana_id` (urmând convenția **_id**)
- **Tip:** `select - select`
- **Link:** Faceți clic pe **Configurează** și selectați câmpul principal al formularului **Persoană**, exemplu: `persoana:nume`.
- Faceți clic pe **Salvează**.

**Câmpul 2 (Link către Funcție):**

- **Titlul câmpului:** Funcția persoanei. 
- **Numele coloanei:** `functie_persoana_id`.
- **Tip:** `select - select`.
- **Link:** Faceți clic pe **Configurează** și selectați câmpul principal al formularului **Funcție**, exemplu: `functie:functie_id`.
- Faceți clic pe **Salvează**.

![Câmpul link către persoană și funcție](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Etapa 3: creați câmpul multiselect în formularul „părinte”

Cu formularul de legătură (**Persoană-Funcție**) pregătit, putem reveni la formularul **Persoană** pentru a crea câmpul final.

1 - Mergeți la gestionarea câmpurilor formularului **Persoană**.

2 - Faceți clic pe „Creează câmp nou”.

3 - **Titlul câmpului:** Persoană Funcție.

4 - **Numele coloanei:** _`persoana_functie_id`_.

5 - **Tip:** _`multiselect - multiselect`_.


### Etapa 4: configurați câmpul multiselect

La selectarea tipului _`multiselect`_, vor apărea două câmpuri noi de configurare: **Referință** și **Link**.

#### 1 - Referință (Unde se salvează relația?)

 - **Acest câmp îi spune lui Netuno:** „Care câmp din formularul de legătură se referă înapoi la mine (**Persoană**)?”
 - Faceți clic pe **Configurează**.
 - Selectați formularul de legătură (**Persoană-Funcție**) și câmpul pe care l-ați creat în Etapa 2 (Câmpul 1). **Exemplu:** _`persoana_functie:nume_persoana_id`_.

#### 2 - Link (De unde provin opțiunile?)

 - **Acest câmp spune:** „Care câmp din formularul de legătură se referă la opțiuni (**Funcție**)?”
 - Faceți clic pe **Configurează**.
 - Selectați formularul de legătură (**Persoană-Funcție**) și câmpul pe care l-ați creat în Etapa 2 (Câmpul 2). **Exemplu:** _`persoana_functie:functie_persoana_id`_.
  
#### 3 - Salvați modificările

- Faceți clic pe butonul **Salvează** din gestionarea câmpurilor pentru a aplica toate configurațiile.

![Configurați câmpul multiselect](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Rezultat

Gata! Acum, în modul „vizualizare”, la adăugarea sau editarea unei înregistrări în formularul **Persoană**, câmpul „Persoană Funcție” va apărea ca o casetă de selecție multiplă. Veți putea alege mai multe funcții din listă (care provin din formularul **Funcție**), iar Netuno va salva automat aceste asocieri în formularul **Persoană-Funcție**.

Dacă aveți întrebări, contactați-ne prin comunitate și prin alte canale disponibile la finalul acestei pagini.

Spor la dezvoltare!