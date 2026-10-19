---
id: hikaricp-database-connection-pool
title: HikariCP - Pool de conexiuni la baza de date
sidebar_label: Pool de conexiuni DB
---

## Ce este

Crearea de conexiuni noi la baza de date necesită un anumit procesare, în special când există autentificare.

De aceea, pentru a obține un câștig mai mare de performanță, este recomandat să reutilizați conexiunile și să nu deschideți constant o conexiune nouă.

Pentru a rezolva această problemă se utilizează pool-ul de conexiuni, care face ca, atunci când o conexiune este eliminată, aceasta să nu fie efectiv închisă și distrusă, ci conexiunea este pusă în așteptare pentru a fi reutilizată când este nevoie de o conexiune nouă.

Aceasta aduce câștiguri mari de performanță și permite, de asemenea, mult mai mulți parametri de configurare, inclusiv cel mai cunoscut, care este limitarea numărului maxim de conexiuni pentru a evita supraîncărcarea bazei de date.

## HikariCP

Hikari înseamnă „lumină” în japoneză, este cel mai eficient și utilizat pe scară largă în aplicațiile Java și este celebru pentru că are de departe cea mai bună performanță.

Repository-ul oficial al HikariCP poate fi găsit aici pe [GitHub](https://github.com/brettwooldridge/HikariCP); consultați graficele de performanță și informațiile despre configurare.

Netuno utilizează HikariCP pentru a gestiona conexiunile la PostgreSQL, MariaDB, Microsoft SQL Server și Oracle.

## Configurare

Configurarea HikariCP în Netuno se face împreună cu configurarea bazei de date în aplicații.

Adică, în cadrul aplicației, în folderul `config`, în configurarea mediului, cum ar fi:

- \_development.json
- \_production.json

În secțiunea „db”, se află configurările bazei de date.

Atât pentru conexiunea implicită, cât și pentru oricare alta, configurarea parametrilor HikariCP se poate face în același mod.

Astfel, în interiorul obiectului `default`, unde există host, port, name (database), username și password, este suficient să adăugați mai mulți parametri HikariCP, cum ar fi:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "baza_mea_de_date",
            "username": "utilizatorul_meu",
            "password": "parola_mea",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

De exemplu, fiecare dintre aceste configurări suplimentare HikariCP de mai sus are rolul:

* `maximumPoolSize` definește dimensiunea maximă a conexiunilor în HikariCP; în acest exemplu, limita de conexiuni va fi 25.
* `minimumIdle` definește numărul minim de conexiuni în așteptare în coada de așteptare pentru a fi utilizate.
* `idleTimeout` este timpul cât conexiunea poate rămâne în așteptare.
* `maxLifetime` este durata maximă de viață a conexiunii.

> Configurările HikariCP trebuie să fie coerente cu configurarea motorului bazei de date.
> De exemplu, numărul maxim de conexiuni și intervalele limită nu trebuie niciodată să depășească ceea ce este definit în motorul bazei de date.

Orice alt parametru HikariCP poate fi configurat în același mod; este suficient să adăugați parametrii de configurare doriți.

## Parametri

Mai jos este lista parametrilor pe care Netuno permite să îi configureze pentru HikariCP.

Orice alt parametru de configurare HikariCP fie este predefinit automat de Netuno, fie nu este aplicabil.

### Utilizați frecvent

##### autoCommit

Această proprietate controlează comportamentul implicit de confirmare automată al conexiunilor returnate din pool.
Este o valoare booleană.

Implicit: `true`

##### connectionTimeout

Această proprietate controlează numărul maxim de milisecunde pe care un client (adică tu) îl va aștepta pentru o conexiune din pool. Dacă acest timp este depășit fără ca o conexiune să fie disponibilă, va fi aruncată o SQLException. Cel mai mic timeout de conexiune acceptabil este de 250 ms.

Implicit: `30000 (30 de secunde)`

##### idleTimeout

Această proprietate controlează cantitatea maximă de timp în care o conexiune poate rămâne inactivă în pool. **Această setare se aplică numai când `minimumIdle` este definit mai mic decât `maximumPoolSize`.** Conexiunile inactive nu vor fi retrase când pool-ul atinge conexiunile `minimumIdle`. Dacă o conexiune este retrasă ca inactivă sau nu, este supusă unei variații maxime de +30 de secunde și unei variații medii de +15 secunde. O conexiune nu va fi niciodată retrasă ca inactivă înainte de acest interval limită. O valoare de 0 înseamnă că conexiunile inactive nu sunt niciodată eliminate din pool. Valoarea minimă permisă este de 10000 ms (10 secunde).

Implicit: `600000 (10 minute)`

##### maxLifetime

Această proprietate controlează durata maximă de viață a unei conexiuni în pool. O conexiune în uz nu va fi niciodată retrasă; doar când este închisă va fi apoi eliminată. Pentru fiecare conexiune în parte, se aplică o atenuare negativă mai mică pentru a evita extragerea în masă din pool. **Recomandăm insistent definirea acestei valori și aceasta trebuie să fie cu câteva secunde mai scurtă decât orice limită de timp de conexiune impusă de o bază de date sau infrastructură.** O valoare de 0 indică o durată de viață maximă (durată infinită), supusă evident definiției `idleTimeout`. Valoarea minimă permisă este de 30000 ms (30 de secunde).

Implicit: `1800000 (30 de minute)`

##### minimumIdle

Această proprietate controlează numărul minim de conexiuni inactive pe care HikariCP încearcă să le mențină în pool. Dacă conexiunile inactive scad sub această valoare și numărul total de conexiuni din pool este mai mic decât dimensiunea `maximumPoolSize`, HikariCP face eforturi maxime pentru a adăuga conexiuni suplimentare rapid și eficient. Totuși, pentru performanță maximă și capacitate de răspuns la cerințele de vârf, recomandăm să nu setați această valoare și, în schimb, să permiteți HikariCP să acționeze ca un set de conexiuni de dimensiune fixă.

Implicit: același ca dimensiunea `maximumPoolSize`

##### maximumPoolSize

Această proprietate controlează dimensiunea maximă pe care o poate atinge pool-ul, incluzând atât conexiunile inactive, cât și cele în uz. Practic, această valoare va determina numărul maxim de conexiuni reale la backend-ul bazei de date. O valoare rezonabilă pentru aceasta este cel mai bine determinată de mediul dvs. de execuție. Când pool-ul atinge această dimensiune și nu există conexiuni inactive disponibile, apelurile către getConnection() vor fi blocate până la expirarea celor `connectionTimeout` milisecunde.

Implicit: `10`

### Rar utilizați

##### initializationFailTimeout

Această proprietate controlează dacă pool-ul va „eșua rapid” dacă pool-ul nu poate fi inițializat cu succes cu o conexiune inițială. Orice număr pozitiv este considerat ca numărul de milisecunde pentru a încerca achiziționarea unei conexiuni inițiale; firul aplicației va fi blocat în acest interval. Dacă nu se poate achiziționa o conexiune înainte de acest interval de timp, va fi aruncată o excepție. Acest timeout se aplică după perioada `connectionTimeout`. Dacă valoarea este zero (0), HikariCP va încerca să obțină și să valideze o conexiune. Dacă se obține o conexiune, dar eșuează validarea, va fi aruncată o excepție și pool-ul nu va porni. Totuși, dacă nu este posibilă obținerea unei conexiuni, pool-ul va porni, dar eforturile ulterioare de a obține o conexiune pot eșua. O valoare mai mică decât zero va ocoli orice încercare inițială de conectare, iar pool-ul va porni imediat în timp ce încearcă să obțină conexiuni în fundal. În consecință, eforturile ulterioare de a obține o conexiune pot eșua.

Implicit: `1`

##### catalog

Această proprietate definește catalogul implicit pentru bazele de date care acceptă conceptul de cataloage. Dacă această proprietate nu este specificată, se utilizează catalogul predefinit definit de driverul JDBC.

Implicit: `driver default`

##### validationTimeout

Această proprietate controlează perioada maximă de timp în care o conexiune va fi testată pentru vivacitate. Această valoare trebuie să fie mai mică decât timpul `connectionTimeout`. Cel mai mic timeout de validare acceptabil este de 250 ms.

Implicit: `5000`

##### leakDetectionThreshold

Această proprietate controlează cantitatea de timp în care o conexiune poate fi în afara pool-ului înainte de a fi înregistrat un mesaj care indică o posibilă scurgere de conexiune. O valoare de 0 înseamnă că detectarea scurgerilor este dezactivată. Cea mai mică valoare acceptabilă pentru a permite detectarea scurgerilor este 2000 (2 secunde).

Implicit: `0`

##### schema

Această proprietate definește schema implicită pentru bazele de date care acceptă conceptul de scheme. Dacă această proprietate nu este specificată, se utilizează schema predefinită definită de driverul JDBC.

Implicit: `driver default`

### DataSource

De asemenea, este posibil să adăugați configurări la DataSource, adică configurări suplimentare specifice tipului de bază de date utilizat.

Pentru a realiza această configurare mai avansată, este necesar să adăugați obiectul de configurare `datasource` în interiorul obiectului de configurare al conexiunii la baza de date.

De exemplu, astfel:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "baza_mea_de_date",
            "username": "utilizatorul_meu",
            "password": "parola_mea",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Observați că valorile configurărilor parametrilor DataSource sunt de tip _string_; în orice caz, Netuno convertește automat întotdeauna la _string_.

## Concluzie

Prin utilizarea HikariCP este posibil să realizați configurări avansate pentru a gestiona încărcarea și comportamentul conexiunilor la baza de date.

Acestea pot fi optimizate pentru cele mai diverse scenarii, garantând performanță ridicată.