---
sidebar_position: 6
id: groups-users
title: Grupuri și Utilizatori
---

## Creare și Editare

Această secțiune este centrul administrativ al aplicației dvs. Aici gestionați credențialele, nivelurile de privilegiu și auditați activitățile desfășurate în sistem, asigurând că fiecare utilizator are acces exact la ce are nevoie.

#### Cerințe
- **Acces la Netuno:** Este necesar să fiți conectat la instanța dvs. și să aveți permisiunea de **Administrator**.
- **Aplicație creată:** Este necesar să aveți o aplicație creată anterior. Aflați mai multe: [Ghid de interfață: Creare aplicație](/docs/academy/app-create).
- **Formulare:** Aveți cel puțin unul sau două formulare create. Aflați mai multe: [Ghid de interfață: Creare formular](/docs/academy/ui/forms).

### Meniu

Permite accesarea setărilor pentru gestionarea securității, utilizatorilor, grupurilor și monitorizarea jurnalelor.

![Meniu de acces](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Accesați „modul de vizualizare” și faceți clic pe „Developer” în colțul din dreapta sus al ecranului.

## Parolă

Permite modificarea parolei de acces la sistem.

După ce faceți clic pe „Developer” în colțul din dreapta sus al ecranului, accesați secțiunea „Parolă”.

- Introduceți parola veche.
- Introduceți parola nouă. **Trebuie să aibă cel puțin 8 caractere, inclusiv cifre, litere mari și mici și caractere speciale.**
- Confirmați parola și faceți clic pe butonul **Salvare**.
- După această acțiune, va fi afișat un mesaj de succes.

![Parolă](/docs/assets/academy/ui/groups-users/password-pt.png)

## Utilizator

Această secțiune este centrul de control pentru gestionarea profilurilor de utilizator.

După ce faceți clic pe „Developer” în colțul din dreapta sus al ecranului, accesați secțiunea „Utilizator”.

#### Cerințe

- Utilizatorul care urmează să fie editat trebuie să fie înregistrat anterior în baza de date.

 ### 1 - Editarea unui utilizator existent

Această secțiune descrie cum să găsiți și să actualizați informațiile unui utilizator care este deja înregistrat în sistem.

![Editare utilizator existent](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Cum se editează un utilizator:**

- Selectați un utilizator înregistrat și modificați informațiile dorite.
- Faceți clic pe butonul **Salvare** pentru a confirma modificarea.
- După această acțiune, va fi afișat un mesaj de succes.

### 2 - Adăugarea unui utilizator nou

Această secțiune permite înregistrarea de utilizatori noi, definind credențialele de acces și nivelurile de permisiune din sistem.

![Creare utilizator nou](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nume:** Introduceți numele utilizatorului.
- **Utilizator:** Introduceți numele pentru autentificare – trebuie să conțină doar litere mici, separate printr-un punct.
- **Parolă:** Introduceți prima parolă de acces la sistem pentru noul utilizator.
- **Email:** Introduceți adresa de email de contact.
- **Niciuna:** Permite blocarea parolei utilizatorului, astfel încât să nu se poată autentifica.
- **Grup:** Selectați grupul principal căruia îi aparține utilizatorul.
- **Activ:** Permite activarea sau dezactivarea unui utilizator în sistem.
- **Buton Salvare:** Faceți clic pentru a salva informațiile noului utilizator.

### 3 - Permisiunile utilizatorului

Gestionarea permisiunilor se face printr-o interfață intuitivă organizată pe taburi **(Formulare și Rapoarte)**.

Aceasta vă permite să configurați în detaliu la ce poate accesa utilizatorul imediat după crearea sa sau în timpul unei editări.

În coloanele **Citire, Scriere și Ștergere,** veți găsi un meniu derulant cu diferite niveluri de acoperire:

- **Nimic:** Utilizatorul nu are nicio permisiune pentru această acțiune.
- **Proprietar:** Utilizatorul poate interacționa numai cu înregistrările pe care le-a creat el însuși.
- **Grup:** Utilizatorul poate interacționa cu înregistrări create de orice membru al grupului său.
- **Tot:** Permisiune totală. Utilizatorul accesează înregistrările tuturor utilizatorilor și grupurilor.

#### Tab Formulare

În acest tab, controlați interacțiunea utilizatorului cu modulele de introducere a datelor din aplicație.

![Permisiuni utilizator - formulare](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Pentru fiecare formular listat, trebuie să definiți următorii parametri:

- **Activ:** Definește vizibilitatea. Dacă este bifat, formularul va apărea în meniul lateral pentru utilizator.
- **Citire:** Stabilește nivelul de permisiune doar pentru vizualizarea înregistrărilor.
- **Scriere:** Definește dacă utilizatorul are permisiunea de a introduce date noi sau de a edita informații existente.
- **Ștergere:** Definește dacă utilizatorul are autoritatea de a elimina înregistrări din baza de date.

#### Tab Rapoarte

Similar cu formularele, acest tab controlează accesul la modulele de vizualizare și extragere a datelor analitice.

![Permisiuni utilizator - rapoarte](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Pentru ca un raport să fie disponibil, opțiunea **Activ** trebuie să fie selectată, astfel încât utilizatorul să aibă permisiunea de a-l vizualiza.

- **Salvare:** Faceți clic pe butonul „Salvare” pentru a salva modificările.

### 4 - Butoane de acțiune

![Butoane de acțiune](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Salvare:** Salvează toate modificările efectuate.

 - **Curățare:** Golește toate câmpurile formularului, revenind la starea inițială „Adăugare utilizator nou”.

 - **Personificare:** Un instrument puternic al Netuno. După ce salvați permisiunile unui utilizator și faceți clic pe butonul **„Personificare”**, puteți vizualiza sistemul exact așa cum îl va utiliza utilizatorul înregistrat. Acest lucru este esențial pentru a testa dacă permisiunile au fost configurate corect.

 - **Ștergere:** Elimină permanent înregistrarea utilizatorului.

## Grup

Aici este panoul central pentru gestionarea profilurilor de acces în Netuno, permițând executarea a două acțiuni: **„Adăugare”** a unui grup nou și **„Editare”** a unui grup existent.

Un grup funcționează ca un profil sau o regulă de acces care determină ce poate vizualiza sau realiza fiecare set de utilizatori în cadrul sistemului.

În loc să configurați permisiuni individual pentru fiecare utilizator, le definiți în grup și asociați utilizatorii la acesta, asigurând o administrare scalabilă și organizată.

După ce faceți clic pe **„Developer”** în colțul din dreapta sus al ecranului, accesați secțiunea **„Grup”**.

#### Cerințe

- **Acces administrativ:** Este necesar să aveți un profil cu permisiuni de administrator pentru a crea sau modifica grupuri.

### Cum se adaugă un grup nou

![Adăugare grup nou](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Localizați secțiunea „Adăugare”.
- **Nume:** Dați grupului un nume clar și descriptiv.
- **Permite autentificarea:** Bifați această opțiune dacă utilizatorii din acest grup trebuie să se poată autentifica în sistem.
- **Administrator:** Bifați această opțiune numai dacă utilizatorii din acest grup au acces total la sistem.
- **Email:** Introduceți o adresă de email de contact pentru grup.
- **Activ:** Bifați această opțiune pentru a activa setările în sistem.
- **Buton Salvare:** Faceți clic pentru a salva setările grupului.
- **Buton Curățare:** Faceți clic pentru a goli toate câmpurile formularului.

### Cum se editează un grup existent

![Editare grup existent](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Selectați grupul înregistrat în câmpul „Editare grup existent” din partea de sus a paginii.
- Faceți clic pe caseta de selecție „Selectare grup”.
- Alegeți grupul pe care doriți să îl editați din listă.
- Așteptați ca datele grupului să completeze automat câmpurile (Nume, Email și opțiunile).
- Faceți modificările dorite și faceți clic pe „Salvare”.

## Istoricul înregistrărilor

Ecranul „Istoricul înregistrărilor” este instrumentul de jurnalizare și auditare al aplicației dvs.

Când un utilizator creează, editează sau șterge o înregistrare în orice formular, sistemul va salva un „jurnal” al acestei acțiuni.

Această pagină vă permite să căutați și să filtrați întregul istoric. Acest lucru este esențial pentru:

 - **Securitate:** Monitorizarea activităților suspecte sau neautorizate.

 - **Audit:** Menținerea unui registru de conformitate pentru toate modificările de date.

 - **Diagnostic:** Înțelegerea modului în care o anumită înregistrare a ajuns în starea sa actuală. Exemplu: „cine a șters acest client?”.

### Cum se caută în istoricul înregistrărilor

![Istoric înregistrări](/docs/assets/academy/ui/groups-users/log-pt.png)

Completați unul sau mai multe câmpuri „Filtre” pentru a găsi înregistrările din jurnal pe care doriți să le căutați, apoi faceți clic pe butonul „Căutare”.

- Accesați pagina „Istoricul înregistrărilor”.
- Completați filtrele dorite pentru a vă limita căutarea. Nu este necesar să completați toate câmpurile. Exemplu: pentru a vedea tot ce a făcut astăzi utilizatorul „Developer”:
- Selectați „Developer” în câmpul Utilizator.
- În câmpul Început, selectați data de astăzi și ora.
- În câmpul Sfârșit, selectați data de astăzi și ora.
- Faceți clic pe butonul „Căutare”.
- Rezultatele (lista de jurnale) vor fi afișate sub formularul de căutare.

## Ieșire

Faceți clic pe „Ieșire” pentru a încheia sesiunea în sistem în mod sigur.