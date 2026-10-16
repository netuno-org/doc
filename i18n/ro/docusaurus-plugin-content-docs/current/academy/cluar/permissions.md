---
sidebar_position: 12
id: permissions
title: Permisiuni
sidebar_label: Permisiuni
---

Cum este controlat accesul la backoffice prin roluri și organizații.

## Introducere

CLUAR controlează accesul la backoffice prin **roluri** (grupuri), atribuite persoanelor dintr-o **organizație**. Fiecare serviciu REST al serverului este clasificat într-o categorie de acces, iar doar cine are rolul potrivit, în organizația potrivită, îl poate folosi.

## Roluri

Există 5 roluri precreate (`user_group`):

| Cod | Nume |
|---|---|
| `administrator` | Administrator |
| `editor` | Editor |
| `author` | Autor |
| `contributor` | Colaborator |
| `subscriber` | Abonat |

:::info Nu toate rolurile au încă permisiuni atribuite
Astăzi, doar **Administrator** și **Editor** au acces la ceva de fapt — sunt singurele roluri referite în regulile de acces (vezi mai jos). Autor, Colaborator și Abonat există deja ca opțiune în formular, dar încă nu au niciun acces configurat; atribuirea unuia dintre aceste roluri cuiva nu îi dă, astăzi, acces la nimic în backoffice.
:::

## Organizație

O persoană are un rol doar **în contextul unei organizații** — legătura se face în `Organizație > Membri` (`organization_people`), asociind Persoană + Organizație + Rol.

Astăzi există o singură organizație, cu codul `admins`, și în ea sunt verificate toate permisiunile. Entitatea `organization` suportă ierarhie (`parent_id`, organizații „părinte”), dar acea ierarhie încă nu este folosită în regulile de permisiune actuale — toate verificările indică direct către organizația `admins`.

## Primul acces la modul de editare

CLUAR distinge două locuri diferite unde se face autentificarea:

- **Backoffice-ul Netuno** (portul `9000` în dezvoltare) — aici se gestionează direct utilizatorii Netuno (`netuno_user`, perechea nume de utilizator/parolă) și toate entitățile, inclusiv Persoană și Roluri.
- **Zona Rezervată** a site-ului propriu-zis (`/login`, portul `3000` în dezvoltare) — aici editorul de conținut intră zi de zi, pentru a accesa modul de editare al paginilor.

Pentru a intra în Zona Rezervată și a avea modul de editare disponibil, este nevoie de un utilizator Netuno cu login care să fie asociat unei **Persoane**, legată de organizația `admins` cu rolul **Administrator** sau **Editor** (vezi [Organizație](#organização) mai sus).

### Utilizator implicit

Fișierul `server/setup/030-people.js` din CLUAR creează deja, implicit, o Persoană „admin” legată de utilizatorul Netuno cu `id: 2`, iar `server/setup/050-organization_people.js` leagă deja acea Persoană de organizația `admins` cu rolul **Administrator** — adică acel utilizator se naște deja cu acces total.

Datele de autentificare ale acestui utilizator implicit sunt:

```
utilizator: admin
parolă: admin
```

Cu aceste credențiale, se poate intra direct în Zona Rezervată (`/login`) deja ca Administrator — fără a fi nevoie de vreun pas suplimentar în backoffice-ul Netuno mai întâi.

:::info Schimbă parola implicită în producție
`admin`/`admin` este o credențială cunoscută și previzibilă. Înainte ca un site să ajungă în producție, schimbă parola acestui utilizator (sau creează un nou Administrator și dezactivează-l pe acesta).
:::

### Crearea de utilizatori noi

Există două căi posibile:

**Prin Zona Rezervată (recomandat):** în `Utilizatori > Creează Utilizator`, un singur formular cere nume, nume de utilizator, parolă, e-mail, Organizație și Rol — și creează totul deodată: utilizatorul Netuno, Persoana (deja legată de acel utilizator) și legătura la organizația/rolul alese. Nu este nevoie să treci prin backoffice-ul Netuno.

**Doar prin backoffice-ul Netuno:** deoarece backoffice-ul oferă acces direct la toate entitățile, este posibil să faci aceiași 3 pași manual, fără a ieși de acolo:

1. Creează utilizatorul Netuno (`netuno_user`), cu numele de utilizator/parola alese.
2. Creează o **Persoană**, asociindu-o acelui utilizator Netuno.
3. În `Organizație > Membri`, asociază acea Persoană organizației `admins`, cu rolul Administrator sau Editor.

În ambele cazuri, persoana creată poate deja să intre în `/login` și să aibă acces la modul de editare.

## Cum sunt aplicate permisiunile

Fiecare serviciu al serverului este clasificat într-una dintre aceste categorii, definite în `server/core/_service_config.js`:

| Categorie | Cine are acces | Exemple |
|---|---|---|
| **Publice** | Oricine, fără autentificare | Contact, avatar, autentificare |
| **Gestionarea conținutului** | Administrator + Editor | Pagini, versiuni, componente, dicționar, acțiuni |
| **Administrarea site-ului** | Doar Administrator | Configurări, limbi, sincronizare |
| **Gestionarea acceselor** | Doar Administrator | Organizații, persoane, utilizatori |

Orice serviciu care nu este listat într-una dintre aceste categorii este **respins implicit** — este o decizie deliberată a codului (comentată explicit în fișier), astfel încât uitarea de a clasifica un serviciu nou să aibă ca rezultat blocarea, și nu accesul liber din neglijență.

:::info Permisiunile nu sunt aplicate în mediul de dezvoltare
În mediul `dev`, `_service_config.js` eliberează toate serviciile chiar de la început, înainte de orice verificare — adică **permisiunile sunt aplicate cu adevărat doar în producție/staging**. Când testezi local, orice utilizator autentificat are acces la tot, indiferent de rol.
:::

## Interfața: meniul filtrează și după permisiune

Pe lângă blocarea pe server, meniul lateral al Zonei Rezervate (`website/src/components/SideMenu`) filtrează și elementele vizibile în funcție de rolul persoanei autentificate — pentru a nu afișa opțiuni pe care nu ar avea permisiunea să le folosească.

:::info Menține cele două liste sincronizate
Lista „cine poate vedea ce” din `SideMenu` este menținută manual aliniată cu `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` și `ACCESS_MANAGEMENT_PATHS` din `_service_config.js` — sunt două liste separate, una în frontend și alta în backend. Când adaugi un serviciu protejat nou, trebuie să actualizezi ambele; doar modificarea serverului ascunde eroarea (meniul continuă să afișeze o opțiune care în practică va fi respinsă), iar doar modificarea meniului nu protejează nimic de fapt.
:::

## Cum să protejezi un serviciu nou

1. Creează serviciul în mod normal în `server/services/`.
2. Adaugă calea serviciului (`path/method`) la lista corectă din `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` sau `ACCESS_MANAGEMENT_PATHS` — în funcție de cine ar trebui să îl poată folosi. Dacă este public, adaugă la `PUBLIC_PATHS`.
3. Dacă serviciul are un element corespunzător în meniul Zonei Rezervate, actualizează și `SideMenu` pentru ca filtrul să corespundă permisiunii reale.