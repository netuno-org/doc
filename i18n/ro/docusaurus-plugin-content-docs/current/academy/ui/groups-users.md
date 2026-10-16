---
sidebar_position: 6
id: groups-users
title: Grupuri și Utilizatori
---

## Creare și Editare

Această secțiune este centrul administrativ al aplicației dvs. Aici gestionați credențialele, nivelurile de privilegiu și auditați activitățile desfășurate în sistem, garantând că fiecare utilizator are acces exact la ceea ce are nevoie.

#### Cerințe
- **Acces la Netuno:** Este necesar să fiți autentificat în instanța dvs. și să aveți permisiunea de **Administrator**.
- **Aplicație creată:** Este necesar să aveți o aplicație creată anterior. Aflați mai multe: [Ghid de interfață: Creare aplicație](/docs/academy/app-create).
- **Formulare:** Aveți cel puțin unul sau două formulare create. Aflați mai multe: [Ghid de interfață: Creare formular](/docs/academy/ui/forms).

### Meniu

Permite accesarea configurațiilor pentru gestionarea securității, utilizatorilor, grupurilor și monitorizarea jurnalelor.

![access-menu-pt.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Accesați „modul de vizualizare" și faceți clic pe „Developer" în colțul din dreapta sus al ecranului.

## Parolă

Permite modificarea parolei de acces la sistem.

Făcând clic pe „Developer" în colțul din dreapta sus al ecranului, accesați secțiunea „Parolă".

- Introduceți parola veche.
- Introduceți parola nouă. **Trebuie să aibă cel puțin 8 caractere, incluzând cifre, litere mari și mici și caractere speciale.**
- Confirmați parola și faceți clic pe butonul **Salvare**.
- După această acțiune, va fi afișat un mesaj de succes.

![password-pt.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Utilizator

Această secțiune este centrul de control pentru gestionarea profilurilor de utilizator.

Făcând clic pe „Developer" în colțul din dreapta sus al ecranului, accesați secțiunea „Utilizator".

#### Cerințe

- Utilizatorul care urmează să fie editat trebuie să fie înregistrat anterior în baza de date.

 ### 1 - Editarea unui utilizator existent

Această secțiune descrie cum să localizați și să actualizați informațiile unui utilizator care are deja un cont în sistem.

![edit-existing-user-pt.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Cum se editează un utilizator:**

- Selectați un utilizator înregistrat și modificați informațiile dorite.
- Faceți clic pe butonul **Salvare** pentru a confirma modificarea.
- După această acțiune, va fi afișat un mesaj de succes.

### 2 - Adăugarea unui utilizator nou

Această secțiune permite înregistrarea de utilizatori noi, definind credențialele de acces și nivelurile de permisiune din cadrul sistemului.

![create-new-user-pt.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nume:** Introduceți numele utilizatorului.
- **Utilizator:** Introduceți numele pentru autentificare - trebuie să conțină doar litere mici separate prin punct.
- **Parolă:** Introduceți prima parolă de acces la sistem a noului utilizator.
- **Email:** Introduceți adresa de email de contact.
- **Niciuna:** Permite blocarea parolei utilizatorului pentru a nu efectua autentificarea.
- **Grup:** Selectați grupul principal din care face parte utilizatorul.
- **Activ:** Permite activarea sau dezactivarea unui utilizator în sistem.
- **Butonul Salvare:** Faceți clic pentru a salva informațiile noului utilizator.

### 3 - Permisiunile utilizatorului

Gestionarea permisiunilor se face printr-o interfață intuitivă organizată pe file **(Formulare și Rapoarte)**.

Aceasta vă permite să configurați în detaliu la ce poate accesa utilizatorul imediat după crearea sa sau în timpul unei editări.

În coloanele **Citire, Scriere și Ștergere,** veți găsi un meniu derulant cu diferite niveluri de acoperire:

- **Nimic:** Utilizatorul nu are nicio permisiune pentru această acțiune.
- **Proprietar:** Utilizatorul poate interacționa doar cu înregistrările pe care le-a creat el însuși.
- **Grup:** Utilizatorul poate interacționa cu înregistrările create de orice membru al grupului său.
- **Tot:** Permisiune totală. Utilizatorul accesează înregistrările tuturor utilizatorilor și grupurilor.

#### Fila Formulare

În această filă, controlați interacțiunea utilizatorului cu modulele de introducere a datelor din aplicație.

![user-permissions-forms-pt.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Pentru fiecare formular listat, trebuie să definiți următorii parametri:

- **Activ:** Definește vizibilitatea. Dacă este bifat, formularul va apărea în meniul lateral pentru utilizator.
- **Citire:** Stabilește nivelul de permisiune doar pentru vizualizarea înregistrărilor.
- **Scriere:** Definește dacă utilizatorul are permisiunea de a insera date noi sau de a edita informații existente.
- **Ștergere:** Definește dacă utilizatorul are autoritatea de a elimina înregistrări din baza de date.

#### Fila Rapoarte

Similar formularelor, această filă controlează accesul la modulele de vizualizare și extragere a datelor analitice.

![user-permissions-report-pt.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Pentru ca un raport să fie disponibil, opțiunea **Activ** trebuie să fie selectată, astfel încât utilizatorul să aibă permisiunea de a-l vizualiza.

- **Salvare:** Faceți clic pe butonul „Salvare" pentru a salva modificările.

### 4 - Butoane de acțiune

![action-buttons-pt.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Salvare:** Salvează toate modificările efectuate.

 - **Curățare:** Golește toate câmpurile formularului, revenind la starea inițială de „Adăugare utilizator nou".

 - **Impersonare:** Un instrument puternic al Netuno. După salvarea permisiunilor unui utilizator și apăsarea butonului **„Impersonare"**, este posibil să vizualizați sistemul exact așa cum îl va utiliza utilizatorul înregistrat. Acest lucru este esențial pentru a testa dacă permisiunile au fost configurate corect.

 - **Ștergere:** Elimină permanent înregistrarea utilizatorului.

## Grup

Aici este panoul central pentru gestionarea profilurilor de acces în Netuno, permițând executarea a două acțiuni: **„Adăugare"** a unui grup nou și **„Editare"** a unui grup existent.

Un grup funcționează ca un profil sau o regulă de acces care determină ce poate fiecare set de utilizatori să vizualizeze sau să realizeze în cadrul sistemului.

În loc să configurați permisiunile individual pentru fiecare utilizator, le definiți în grup și asociați utilizatorii cu acesta, garantând o administrare scalabilă și organizată.

Făcând clic pe **„Developer"** în colțul din dreapta sus al ecranului, accesați secțiunea **„Grup"**.

#### Cerințe

- **Acces administrativ:** Este necesar să aveți un profil cu permisiuni de administrator pentru a crea sau modifica grupuri.

### Cum să adăugați un grup nou

![add-new-group-pt.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Localizați secțiunea „Adăugare".
- **Nume:** Dați un nume clar și descriptiv grupului.
- **Permite autentificarea:** Bifați această opțiune dacă utilizatorii din acest grup trebuie să se poată autentifica în sistem.
- **Administrator:** Bifați această opțiune doar dacă utilizatorii din acest grup au acces total la sistem.
- **Email:** Introduceți un email de contact pentru grup.
- **Activ:** Bifați această opțiune pentru a activa configurațiile în sistem.
- **Butonul Salvare:** Faceți clic pentru a salva configurațiile grupului.
- **Butonul Curățare:** Faceți clic pentru a goli toate câmpurile formularului.

### Cum să editați un grup existent

![edit-existing-group-pt.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Selectați grupul înregistrat din câmpul „Editare grup existent" din partea de sus a paginii.
- Faceți clic pe caseta de selecție „Selectați un grup".
- Alegeți grupul pe care doriți să îl editați din listă.
- Așteptați ca datele grupului să completeze automat câmpurile (Nume, Email și opțiunile).
- Faceți modificările dorite și faceți clic pe „Salvare".

## Istoricul înregistrărilor

Ecranul „Istoricul înregistrărilor" este instrumentul de jurnalizare și auditare al aplicației dvs.

Când un utilizator creează, editează sau șterge o înregistrare în orice formular, sistemul va salva un „jurnal" al acestei acțiuni.

Această pagină vă permite să căutați și să filtrați tot acest istoric. Acest lucru este esențial pentru:

 - **Securitate:** Monitorizarea activităților suspecte sau neautorizate.

 - **Audit:** Menținerea unei evidențe de conformitate a tuturor modificărilor de date.

 - **Diagnosticare:** Înțelegerea modului în care o înregistrare specifică a ajuns în starea sa actuală. Exemplu: „cine a șters acest client?".

### Cum să căutați în istoricul înregistrărilor

![log-pt.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Completați unul sau mai multe câmpuri „Filtre" pentru a găsi înregistrările din jurnal pe care doriți să le căutați, apoi faceți clic pe butonul „Căutare".

- Accesați pagina „Istoricul înregistrărilor".
- Completați filtrele dorite pentru a limita căutarea. Nu este necesar să completați toate câmpurile. Exemplu: Pentru a vedea tot ce a făcut utilizatorul „Developer" astăzi:
- Selectați „Developer" în câmpul Utilizator.
- În câmpul Început, selectați data de astăzi și ora.
- În câmpul Sfârșit, selectați data de astăzi și ora.
- Faceți clic pe butonul „Căutare".
- Rezultatele (lista de jurnale) vor fi afișate sub formularul de căutare.

## Ieșire

Faceți clic pe „Ieșire" pentru a încheia sesiunea în sistem în mod sigur.