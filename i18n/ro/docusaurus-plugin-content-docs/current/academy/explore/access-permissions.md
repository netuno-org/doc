---
id: access-permissions
title: Acces și Permisiuni
sidebar_label: Acces și Permisiuni
---

Cum să gestionezi utilizatorii, grupurile și să garantezi securitatea aplicației.

## Introducere

Securitatea este unul dintre pilonii fundamentali ai oricărei aplicații. Fie că este o aplicație internă simplă sau un sistem complex cu mii de utilizatori externi prin API.

Netuno oferă, nativ, un sistem robust de **Control al Accesului și Permisiunilor**, furnizând instrumentele necesare pentru a gestiona securitatea în mod centralizat și eficient. Și elimină necesitatea de a dezvolta aceste funcționalități de la zero.

Printre principalele mecanisme de securitate se remarcă:

- Gestionarea utilizatorilor și a grupurilor.
- Controlul permisiunilor asupra datelor și gestionarea datelor.
- Istoric detaliat al încercărilor de autentificare.
- Blocare automată pe IP după încercări de acces eșuate consecutiv.
- Autentificare integrată cu LDAP, Google, GitHub, Discord etc.
- Modul de autentificare JWT pentru front-end.
- Printre altele...

## Gestionarea Utilizatorilor

Aceasta se referă la administrarea conturilor individuale care accesează platforma. Fiecare utilizator, serviciu sau integrare care trebuie să intre în sistem trebuie să aibă o înregistrare unică de utilizator.

În zona de gestionare a utilizatorilor din Netuno, aveți control total asupra ciclului de viață al acestor conturi:
- **Creare**: Înregistrarea de noi membri ai echipei sau clienți.
- **Întreținere**: Actualizarea e-mailurilor, modificarea parolelor și a datelor de înregistrare.
- **Controlul Accesului**: Blocarea rapidă a conturilor (dezactivare) fără a fi nevoie de ștergerea datelor istorice.

:::tip Ghid Vizual
Pentru informații detaliate despre Gestionarea Utilizatorilor, consultați [Ghidul Interfeței: Utilizatori și Grupuri](/docs/academy/ui/groups-users)
:::


## Gestionarea Grupurilor

Definirea regulilor de autorizare se realizează prin intermediul Grupurilor, care stabilesc ce meniuri, formulare, servicii și date are fiecare utilizator permisiunea de a accesa sau manipula. În loc să configurați permisiunile individual, ideal este să definiți regulile în Grup și apoi să asociați utilizatorii cu acesta. Această procedură garantează:

- **Scalabilitate:** Ușurința de a gestiona sute de utilizatori.
- **Securitate:** Risc redus de a acorda accidental acces necorespunzător.
- **Organizare:** Separare clară între Administratori, Manageri, Supervizori și utilizatori în general.

Netuno vine deja cu grupuri native precum `dev` și `admin` și oferă autonomie totală pentru a crea grupuri personalizate care să răspundă regulilor de business ale aplicației dumneavoastră.

:::tip Ghid Vizual
Pentru informații detaliate despre Gestionarea Grupurilor, consultați [Ghidul Interfeței: Utilizatori și Grupuri](/docs/academy/ui/groups-users)
:::


## Controlul Permisiunilor asupra Datelor

Pentru a garanta funcționalitatea unui grup sau permisiunile unui utilizator, este crucial să stabiliți ce date are acesta autorizarea de a manipula. În Netuno, controlul accesului este detaliat și aplicat direct Formularelor (tabelelor) din aplicația dumneavoastră.

Sistemul utilizează o matrice de permisiuni care permite definirea, pentru fiecare funcționalitate, dacă un anumit grup are autorizarea corespunzătoare pentru a:

- **Citire:** Doar vizualizarea înregistrărilor.
- **Scriere:** Inserarea și editarea înregistrărilor în baza de date.
- **Ștergere:** Eliminarea definitivă a înregistrărilor.

Această flexibilitate asigură protecția datelor sensibile, deoarece fiecare colaborator are acces restricționat doar la informațiile esențiale pentru executarea sarcinilor sale.

:::tip Ghid Vizual
Pentru informații detaliate despre modul de configurare a permisiunilor asupra datelor, consultați [Ghidul Interfeței: Utilizatori și Grupuri](/docs/academy/ui/groups-users)
:::

## Istoricul Autentificării

Pentru a garanta transparență și control, toate încercările de acces (reușite sau invalide) sunt înregistrate și pot fi consultate în Istoricul Autentificării.

Sistemul monitorizează și stochează în detaliu informațiile fiecărei încercări de autentificare a utilizatorului:

- **IP de Origine:** Adresa de rețea de la care a provenit solicitarea.
- **Moment:** Momentul exact al acțiunii.
- **Acces:** Dacă accesul a fost permis, refuzat sau blocat.

#### Legenda Iconițelor de Acces

🟩 **Lacăt/check_mark, în culoarea verde:** Indică un succes. Utilizatorul a furnizat credențialele corecte și autentificarea a fost autorizată. De asemenea, indică faptul că IP-ul de origine a fost deblocat.

🟧 **Iconiță cu "X", în culoarea portocalie:** Indică numărul de încercări invalide.

🟥 **Lacăt în culoarea roșie:** Indică blocarea IP-ului de origine.

## Blocarea Automată

Netuno are un sistem de securitate activ conceput pentru a vă proteja aplicația împotriva atacurilor și accesului neautorizat.

Când sunt detectate activități suspecte, precum multiple încercări consecutive de autentificare invalidă, sistemul blochează automat adresa IP de origine.

Odată blocat, IP-ul nu va putea efectua noi cereri pentru o perioadă determinată sau până când blocarea este eliminată manual.

### Configurarea Regulilor de Blocare

Această regulă este definită în **fișierele de configurare** ale mediului aplicației dumneavoastră "development.json" sau "production.json".

#### 1. Localizați fișierul de configurare

În rădăcina proiectului dumneavoastră, navigați până la folderul `config`. Deschideți fișierul corespunzător mediului pe care doriți să îl protejați:

* Pentru dezvoltare: `_development.json`

* Pentru producție: `_production.json`

#### 2. Introduceți codul de protecție
În fișierul JSON, localizați secțiunea `auth`. Dacă aceasta nu există, introduceți blocul `attempts` conform exemplului de mai jos:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Înțelegerea parametrilor

* `interval`: Fereastra de timp în **minute** (exemplu: 60 de minute = 1 oră).

* `maxFails`: Numărul maxim de eșecuri permise în acest interval înainte de blocare.


#### 4. Comportamentul sistemului

- După blocarea automată, utilizatorul este împiedicat să acceseze aplicația.

- În mod implicit, sistemul este configurat pentru trei încercări invalide cu blocare pentru o oră. După această perioadă, încercările sunt din nou permise.

- Acest proces poate fi configurat în funcție de nevoile aplicației dumneavoastră.


### Deblocarea prin Interfață

Doar un utilizator cu permisiunea de "Administrator" poate debloca accesul direct din Back-Office fără a fi nevoie să acceseze baza de date.

1. Accesați meniul aplicației în modul "Vizualizare" și faceți clic pe secțiunea **"Configurare > Utilizatori"**.
![user-configuration-section-pt.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. În câmpul **"Editați utilizatorul existent"**, selectați utilizatorul dorit.
![select-an-existing-user-pt.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. În secțiunea **"Istoricul Autentificării"**, verificați dacă statusul "Access" afișează iconița "Lacăt" în culoarea verde;
![section-authentication-history-pt.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Faceți clic pe iconița **Ceas** pentru a verifica lista completă de accesări ale utilizatorului.
![authentication-history-pt.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Faceți clic pe lacătul verde din coloana **"Acces"** pentru a debloca utilizatorul. După această acțiune, se afișează un mesaj de succes.

Deblocarea este imediată, permițând utilizatorului să încerce din nou să se autentifice.


## Autentificări Integrate

Aplicația dumneavoastră poate solicita metode de intrare mai sofisticate, mai ales dacă construiți o aplicație mobilă sau vă integrați într-o rețea corporativă.

Netuno a fost conceput să fie flexibil și să se integreze în ecosistemul organizației dumneavoastră. Pe lângă autentificarea standard (utilizator și parolă), platforma oferă suport pentru diverse protocoale de autentificare de pe piață.

Acest lucru permite implementarea strategiilor de Single Sign-On (Autentificare Unică), în care utilizatorii accesează sistemul folosind credențiale pe care le dețin deja, centralizând gestionarea accesului.

**Medii Corporative:** Compatibilitate cu directoare de utilizatori (precum LDAP și Active Directory), ideal pentru intranet și sisteme interne.

**Autentificare Socială (OAuth):** Posibilitatea de integrare cu furnizori precum Google, Microsoft, GitHub, printre alții, facilitând înregistrarea și accesul în aplicații publice.

## Autentificare prin Token (JWT)

Pentru proiectele care utilizează un Front-end dedicat (precum site-uri în React, Vue.js sau aplicații Mobile), ecranul de autentificare tradițional al Netuno nu este utilizat. În aceste scenarii, se adoptă standardul JWT (JSON Web Token).

Netuno oferă un serviciu nativ care generează și validează automat aceste token-uri, garantând securitatea și eficiența comunicării prin API.

:::tip Ghid Vizual
Pentru mai multe informații despre modul de implementare și configurare a JWT în fișierele de configurare, consultați [Ghidul de Autentificare JWT](/docs/academy/server/services/jwt)
:::

## Concluzie

Stăpânirea funcțiilor de securitate ale Netuno este fundamentală pentru sănătatea proiectului dumneavoastră. Utilizând corect instrumentele de gestionare a utilizatorilor, a grupurilor și de monitorizare a istoricului, ați construit un mediu care echilibrează protecția datelor cu ușurința de utilizare.

Astfel garantați că sistemul dumneavoastră în Netuno este:

- **Sigur:** Protejând informațiile sensibile împotriva accesului neautorizat.

- **Organizat:** Stabilind ierarhii și responsabilități clare.

- **Scalabil:** Pregătit să crească cu integrări moderne.

**Mențineți bunele practici:** Revizuiți periodic permisiunile grupurilor și verificați istoricul accesărilor pentru a menține un mediu sănătos.