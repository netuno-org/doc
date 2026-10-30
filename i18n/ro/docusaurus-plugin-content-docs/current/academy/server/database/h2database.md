---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introducere

Marele avantaj al H2Database este că nu necesită un server de baze de date, deoarece permite funcționarea încorporată în aplicații.

> H2Database este recomandat doar pentru dezvoltare și testare; în producție ar trebui utilizat un alt tip de bază de date mai consistent.

## Recomandări și limitări

H2Database nu permite ca mai mult de un singur proces să acceseze fișierul bazei de date.

Prin urmare, dacă doriți să manipulați fișierul sau să accesați prin consola web, va trebui să opriți execuția Netuno.

## Fișierele bazei de date

Fișierele bazei de date H2Database se află în folderul `dbs`, care este în interiorul aplicației, de exemplu:

- `apps/aplicatia_mea/dbs`

Dacă doriți să redenumiți baza de date, modificați numele fișierului și corectați configurațiile aplicației, de exemplu în mediul _development_:

- `config/_development.json`

Corectarea trebuie făcută în partea de configurare a conexiunii la baza de date:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "baza_mea",
            "username": ""
        }
    }
    ...
```

## Consola web

Poate fi necesar să accesați direct baza de date; în acest caz, este posibil prin consola web a H2Database.

Consola web este pornită prin executarea directă a _jar_-ului H2Database după cum urmează:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Se presupune că vă aflați în rădăcina Netuno.

Pentru a vizualiza opțiunile disponibile:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Pornește consola web pe portul Netuno **9000** și permite accesul de la IP-uri externe:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Trebuie să opriți execuția Netuno înainte, pentru a evita ca mai multe procese să manipuleze fișierul bazei de date.

URL-ul JDBC pentru conectarea la baza de date trebuie să fie:

`jdbc:h2:./apps/aplicatia_mea/dbs/baza_mea;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Înlocuiți partea `aplicatia_mea` cu numele aplicației și `baza_mea` cu numele bazei de date corespunzătoare.

Autentificarea se va face cu utilizatorul `sa`, dar fără parolă.


### Resetarea acceselor

În special când se pierde accesul utilizatorului `dev`.

Accesați prin consola web a H2Database, așa cum este descrisă mai sus.

Pentru a recrea accesul, ștergeți datele din tabelul `netuno_user`, de exemplu:

- `delete from netuno_user`
 
Astfel, Netuno va recrea utilizatorii cu parolele implicite corespunzătoare atunci când este pornit din nou.