---
id: access-permissions
title: Acces și Permisiuni
sidebar_label: Acces și Permisiuni
---

Cum să gestionezi utilizatorii, grupurile și să garantezi securitatea aplicației.

## Introducere

Securitatea este unul dintre pilonii fundamentali ai oricărei aplicații. Fie că este vorba de o aplicație internă simplă sau de un sistem complex cu mii de utilizatori externi prin API.

Netuno oferă nativ un sistem robust de **Control al Accesului și Permisiunilor**, furnizând instrumentele necesare pentru a gestiona securitatea în mod centralizat și eficient. Și elimină necesitatea de a dezvolta aceste funcționalități de la zero.

Printre principalele mecanisme de securitate se remarcă:

- Gestionarea utilizatorilor și grupurilor.
- Controlul permisiunilor asupra datelor până la gestionarea datelor.
- Istoric detaliat al încercărilor de autentificare.
- Blocare automată pe IP după încercări de acces eșuate consecutiv.
- Autentificare integrată cu LDAP, Google, GitHub, Discord etc.
- Modul de autentificare JWT pentru front-end.
- Printre altele...

## Gestionarea Utilizatorilor

Este vorba despre administrarea conturilor individuale care accesează platforma. Fiecare utilizator, serviciu sau integrare care trebuie să intre în sistem trebuie să dețină o înregistrare unică de utilizator.

În zona de gestionare a utilizatorilor din Netuno, ai control total asupra ciclului de viață al acestor conturi:
- **Creare**: Înregistrarea de noi membri ai echipei sau clienți.
- **Întreținere**: Actualizarea e-mailurilor, modificarea parolelor și a datelor de înregistrare.
- **Controlul Accesului**: Blocarea rapidă a conturilor (dezactivare) fără a fi nevoie de ștergerea datelor istorice.

:::tip Ghid Vizual 
Pentru informații detaliate despre Gestionarea Utilizatorilor, consultați [Ghidul Interfeței: Utilizatori și Grupuri](/docs/academy/ui/groups-users)
::: 


## Gestionarea Grupurilor

Definirea regulilor de autorizare se face prin intermediul Grupurilor, care stabilesc ce meniuri, formulare, servicii și date are fiecare utilizator permisiunea să acceseze sau să manipuleze. În loc să configurezi permisiunile individual, ideal este să definești regulile în Grup și apoi să asociezi utilizatorii la acesta. Această procedură garantează:

- **Scalabilitate:** Ușurință în gestionarea a sute de utilizatori.
- **Securitate:** Riscul redus de a acorda acces necorespunzător din greșeală.
- **Organizare:** Separare clară între Administratori, Manageri, Supervizori și utilizatorii în general.

Netuno vine deja cu grupuri native precum `dev` și `admin` și oferă autonomie totală pentru a crea grupuri personalizate care să răspundă regulilor de business ale aplicației tale.

:::tip Ghid Vizual 
Pentru informații detaliate despre Gestionarea Grupurilor, consultați [Ghidul Interfeței: Utilizatori și Grupuri](/docs/academy/ui/groups-users)
::: 


## Controlul Permisiunilor asupra Datelor

Pentru a garanta funcționalitatea unui grup sau permisiunile unui utilizator, este crucial să se stabilească ce date este autorizat să manipuleze. În Netuno, controlul accesului este detaliat și aplicat direct Formularelor (tabelelor) aplicației tale.

Sistemul utilizează o matrice de permisiuni care permite definirea, pentru fiecare funcționalitate, dacă un anumit grup are autorizația necesară pentru a:

- **Citi:** Doar vizualizarea înregistrărilor.
- **Scrie:** Inserarea și editarea înregistrărilor în baza de date.
- **Șterge:** Eliminarea permanentă a înregistrărilor.

Această flexibilitate asigură protecția datelor sensibile, deoarece fiecare colaborator are acces restricționat doar la informațiile esențiale pentru îndeplinirea sarcinilor sale.

:::tip Ghid Vizual 
Pentru informații detaliate despre cum să configurezi permisiunile asupra datelor, consultați [Ghidul Interfeței: Utilizatori și Grupuri](/docs/academy/ui/groups-users)
::: 

## Istoricul Autentificării

Pentru a garanta transparență și control, toate încercările de acces (reușite sau invalide) sunt înregistrate și pot fi consultate în Istoricul Autentificării.

Sistemul monitorizează și stochează detaliat informațiile fiecărei încercări de autentificare a utilizatorului:

- **IP de Origine:** Adresa de rețea de unde a provenit solicitarea.
- **Momentul:** Momentul exact al acțiunii.
- **Acces:** Dacă accesul a fost permis, refuzat sau blocat.

#### Legenda Pictogramelor de Acces

🟩 **Lacăt/check_mark, de culoare verde:** Indică un succes. Utilizatorul a furnizat credențialele corecte și autentificarea a fost autorizată. De asemenea, indică faptul că IP-ul de origine a fost deblocat.

🟧 **Pictogramă cu "X", de culoare portocalie:** Indică numărul de încercări invalide.

🟥 **Lacăt de culoare roșie:** Indică blocarea IP-ului de origine.

## Blocarea Automată

Netuno dispune de un sistem de securitate activ conceput pentru a proteja aplicația ta împotriva atacurilor și acceselor neautorizate.

Când sunt detectate activități suspecte, cum ar fi multiple încercări consecutive de autentificare invalidă, sistemul blochează automat adresa IP de origine.

Odată blocat, IP-ul nu va putea efectua noi cereri pentru o perioadă determinată sau până când blocarea este eliminată manual.

### Configurarea Regulilor de Blocare

Această regulă este definită în **fișierele de configurare** ale mediului aplicației tale "development.json" sau "production.json".

#### 1. Localizează fișierul de configurare

În rădăcina proiectului tău, navighează până la folderul `config`. Deschide fișierul corespunzător mediului pe care dorești să îl protejezi:

* Pentru dezvoltare: `_development.json`

* Pentru producție: `_production.json`

#### 2. Inserează codul de protecție
În fișierul JSON, localizează secțiunea `auth`. Dacă aceasta nu există, inserează blocul `attempts` conform exemplului de mai jos:

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

* `interval`: Fereastra de timp în **minute** (exemplu: 60 minute = 1 oră).

* `maxFails`: Numărul maxim de eșecuri permise în acest interval înainte de blocare.


#### 4. Comportamentul sistemului

- După blocarea automată, utilizatorul este împiedicat să acceseze aplicația.

- În mod implicit, sistemul este configurat pentru trei încercări invalide cu blocarea pentru o oră. După această perioadă, încercările sunt din nou permise.

- Acest proces poate fi configurat în funcție de necesitățile aplicației tale.


### Deblocare prin Interfață 

Doar un utilizator cu permisiunea de "Administrator" poate elibera accesul direct din Back-Office fără a fi nevoie să acceseze baza de date.

1. Accesează meniul aplicației în modul "Vizualizare" și fă clic pe secțiunea **"Configurare > Utilizatori"**.
![user-configuration-section-pt.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. În câmpul **"Editare utilizator existent"**, selectează utilizatorul dorit.
![select-an-existing-user-pt.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. În secțiunea **"Istoricul Autentificării"**, verifică dacă statusul "Access" afișează pictograma de "Lacăt" de culoare verde;
![section-authentication-history-pt.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Fă clic pe pictograma de **Ceas** pentru a verifica lista completă a accesărilor utilizatorului.
![authentication-history-pt.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Fă clic pe lacătul verde din coloana **"Acces"** pentru a debloca utilizatorul. După această acțiune, este afișat un mesaj de succes.

Eliberarea este imediată, permițând utilizatorului să încerce din nou să se autentifice.


## Autentificări Integrate

Aplicația ta poate necesita metode de intrare mai sofisticate, mai ales dacă construiești o aplicație mobilă sau te integrezi într-o rețea corporativă.

Netuno a fost conceput pentru a fi flexibil și a se integra în ecosistemul organizației tale. Pe lângă autentificarea standard (utilizator și parolă), platforma oferă suport pentru diverse protocoale de autentificare de pe piață.

Aceasta permite implementarea strategiilor de Single Sign-On (Autentificare Unică), unde utilizatorii accesează sistemul folosind credențiale pe care le dețin deja, centralizând gestionarea accesului.

**Medii Corporative:** Compatibilitate cu directoare de utilizatori (precum LDAP și Active Directory), ideală pentru intranet și sisteme interne.

**Autentificare Socială (OAuth):** Posibilitatea de integrare cu furnizori precum Google, Microsoft, GitHub, printre altele, facilitând înregistrarea și accesul în aplicații publice.

## Autentificare prin Token (JWT)

Pentru proiectele care utilizează un Front-end dedicat (precum site-uri în React, Vue.js sau aplicații Mobile), ecranul de autentificare tradițional din Netuno nu este utilizat. În aceste scenarii, se adoptă standardul JWT (JSON Web Token).

Netuno oferă un serviciu nativ care generează și validează automat aceste tokenuri, garantând securitate și eficiență în comunicarea prin API.

:::tip Ghid Vizual
Pentru mai multe informații despre cum să implementezi și să configurezi JWT în fișierele tale de configurare, consultați [Ghidul de Autentificare JWT](/docs/academy/server/services/jwt)
:::

## Concluzie 

Stăpânirea funcționalităților de securitate ale Netuno este fundamentală pentru sănătatea proiectului tău. Utilizând corect instrumentele de gestionare a utilizatorilor, a grupurilor și monitorizarea istoricului, ai construit un mediu care echilibrează protecția datelor cu ușurința de utilizare.

Astfel, garantezi că sistemul tău din Netuno este:

- **Sigur:** Protejând informațiile sensibile împotriva acceselor neautorizate.

- **Organizat:** Stabilind ierarhii și responsabilități clare.

- **Scalabil:** Pregătit să crească cu integrări moderne.

**Menține bunele practici:** Revizuiește periodic permisiunile grupurilor și verifică istoricul accesărilor pentru a menține mediul tău sănătos.