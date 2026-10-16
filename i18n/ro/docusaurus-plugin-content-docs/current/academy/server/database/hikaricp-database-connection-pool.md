---
id: hikaricp-database-connection-pool
title: HikariCP - Pool de conexiuni la baza de date
sidebar_label: Pool de conexiuni DB
---

## Ce este

Crearea de noi conexiuni la baza de date necesită o anumită procesare, în special atunci când există autentificare.

De aceea, pentru a obține un câștig mai mare de performanță, este recomandat să reutilizați conexiunile și să nu deschideți constant o conexiune nouă.

Pentru a rezolva această problemă, se utilizează un pool de conexiuni, care face ca atunci când o conexiune este eliminată, aceasta să nu fie de fapt închisă și distrusă, ci conexiunea este pusă în așteptare pentru a fi reutilizată atunci când este nevoie de o conexiune nouă.

Acest lucru aduce mari câștiguri de performanță și, de asemenea, permite mult mai mulți parametri de configurare, inclusiv cel mai cunoscut, care este limitarea numărului maxim de conexiuni pentru a evita supraîncărcarea bazei de date.

## HikariCP

Hikari înseamnă Lumină în japoneză, este cel mai eficient și utilizat pe scară largă în aplicațiile Java și este faimos pentru că are de departe cea mai bună performanță.

Repozitoriul oficial al HikariCP poate fi găsit aici pe [GitHub](https://github.com/brettwooldridge/HikariCP), verificați graficele de performanță și informațiile despre configurații.

Netuno utilizează HikariCP pentru a gestiona conexiunile la PostgreSQL, MariaDB, Microsoft SQL Server și Oracle.

## Configurare

Configurarea HikariCP în Netuno se face împreună cu configurarea bazei de date în aplicații.

Adică, în interiorul aplicației în folderul `config` în configurarea mediului, cum ar fi:

- \_development.json
- \_production.json

În secțiunea "db", conține configurațiile bazei de date.

Atât pentru conexiunea default, cât și pentru oricare alta, configurarea parametrilor HikariCP poate fi efectuată în același mod.

Astfel, în interiorul default, unde aveți host, port, name (database), username și password, este suficient să adăugați mai mulți parametri HikariCP, cum ar fi:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "baza_mea_de_date",
            "username": "utilizatorul_meu",
            "password": "secret",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

De exemplu, fiecare dintre aceste configurații suplimentare HikariCP de mai sus servește la:

* `maximumPoolSize` definește dimensiunea maximă a conexiunilor în HikariCP; în acest exemplu, limita de conexiuni va fi 25.
* `minimumIdle` definește numărul minim de conexiuni în așteptare în coada de așteptare pentru a fi utilizate.
* `idleTimeout` este timpul cât conexiunea poate rămâne în așteptare.
* `maxLifetime` este durata maximă de viață a conexiunii.

> Configurările HikariCP trebuie să fie coerente cu configurarea motorului bazei de date.
> De exemplu, numărul maxim de conexiuni și timpii limită nu trebuie niciodată să depășească ceea ce este definit în motorul bazei de date.

Orice alt parametru HikariCP poate fi configurat în același mod; este suficient să adăugați parametrii de configurare doriți.

## Parametri

Mai jos conține lista de parametri pe care Netuno permite să îi configureze pentru HikariCP.

Orice alt parametru de configurare HikariCP fie este predefinit automat de Netuno, fie nu este aplicabil.

### Utilizați frecvent

##### autoCommit

Această proprietate controlează comportamentul implicit de confirmare automată al conexiunilor returnate din pool.
Este o valoare booleană.

Implicit: `true`

##### connectionTimeout

Această proprietate controlează numărul maxim de milisecunde pe care un client (adică tu) va aștepta pentru o conexiune din pool. Dacă acest timp este depășit fără ca o conexiune să fie disponibilă, va fi aruncată o SQLException. Cel mai mic timp limită acceptabil pentru conexiune este de 250 ms.

Implicit: `30000 (30 secunde)`

##### idleTimeout

Această proprietate controlează cantitatea maximă de timp în care o conexiune are voie să rămână inactivă în pool. **Această setare se aplică numai atunci când `minimumIdle` este setat să fie mai mic decât `maximumPoolSize`.** Conexiunile inactive nu vor fi retrase atunci când pool-ul atinge conexiunile `minimumIdle`. Dacă o conexiune este retrasă ca inactivă sau nu, este supusă unei variații maxime de +30 secunde și unei variații medii de +15 secunde. O conexiune nu va fi niciodată retrasă ca inactivă înainte de acest timp limită. O valoare de 0 înseamnă că conexiunile inactive nu sunt niciodată eliminate din pool. Valoarea minimă permisă este de 10000ms (10 secunde).

Implicit: `600000 (10 minute)`

##### maxLifetime

Această proprietate controlează durata maximă de viață a unei conexiuni în pool. O conexiune în uz nu va fi niciodată retrasă; doar când este închisă va fi apoi eliminată. Pe bază de conexiune individuală, se aplică o atenuare negativă mai mică pentru a evita extragerea în masă din pool. **Recomandăm insistent setarea acestei valori și aceasta trebuie să fie cu câteva secunde mai scurtă decât orice timp limită de conexiune impus de o bază de date sau infrastructură.** O valoare de 0 indică o durată maximă de viață (durată infinită), supusă evident setării `idleTimeout`. Valoarea minimă permisă este de 30000ms (30 secunde).

Implicit: `1800000 (30 minute)`

##### minimumIdle

Această proprietate controlează numărul minim de conexiuni inactive pe care HikariCP încearcă să le mențină în pool. Dacă conexiunile inactive scad sub această valoare și totalul conexiunilor din pool este mai mic decât dimensiunea `maximumPoolSize`, HikariCP face eforturi maxime pentru a adăuga conexiuni suplimentare rapid și eficient. Cu toate acestea, pentru performanță maximă și capacitate de răspuns la cerințele de vârf, recomandăm să nu setați această valoare și, în schimb, să permiteți HikariCP să acționeze ca un set de conexiuni de dimensiune fixă.

Implicit: la fel ca dimensiunea `maximumPoolSize`

##### maximumPoolSize

Această proprietate controlează dimensiunea maximă pe care o poate atinge pool-ul, incluzând atât conexiunile inactive, cât și cele în uz. Practic, această valoare va determina numărul maxim de conexiuni reale la backend-ul bazei de date. O valoare rezonabilă pentru aceasta este determinată cel mai bine de mediul dumneavoastră de execuție. Când pool-ul atinge această dimensiune și nu există conexiuni inactive disponibile, apelurile către getConnection() vor fi blocate până la `connectionTimeout` milisecunde înainte de expirarea timpului limită.

Implicit: `10`

### Puțin utilizați

##### initializationFailTimeout

Această proprietate controlează dacă pool-ul va "eșua rapid" dacă pool-ul nu poate fi inițializat cu succes cu o conexiune inițială. Orice număr pozitiv este considerat numărul de milisecunde pentru a încerca obținerea unei conexiuni inițiale; firul aplicației va fi blocat în această perioadă. Dacă o conexiune nu poate fi obținută înainte de acest interval de timp, va fi aruncată o excepție. Acest timp limită se aplică după perioada `connectionTimeout`. Dacă valoarea este zero (0), HikariCP va încerca să obțină și să valideze o conexiune. Dacă o conexiune este obținută, dar eșuează validarea, va fi aruncată o excepție și pool-ul nu va fi pornit. Cu toate acestea, dacă nu este posibil să se obțină o conexiune, pool-ul va porni, dar eforturile ulterioare de a obține o conexiune pot eșua. O valoare mai mică decât zero va ocoli orice încercare inițială de conexiune, iar pool-ul va porni imediat în timp ce încearcă să obțină conexiuni în fundal. În consecință, eforturile ulterioare de a obține o conexiune pot eșua.

Implicit: `1`

##### catalog

Această proprietate definește catalogul implicit pentru bazele de date care suportă conceptul de cataloage. Dacă această proprietate nu este specificată, se utilizează catalogul predefinit definit de driverul JDBC.

Implicit: `implicit driver`

##### validationTimeout

Această proprietate controlează perioada maximă de timp în care o conexiune va fi testată pentru viabilitatea sa. Această valoare trebuie să fie mai mică decât timpul `connectionTimeout`. Cel mai mic timp limită de validare acceptabil este de 250 ms.

Implicit: `5000`

##### leakDetectionThreshold

Această proprietate controlează cantitatea de timp cât o conexiune poate fi în afara pool-ului înainte de a fi înregistrat un mesaj care indică o posibilă scurgere de conexiune. O valoare de 0 înseamnă că detectarea scurgerilor este dezactivată. Cea mai mică valoare acceptabilă pentru a permite detectarea scurgerilor este 2000 (2 secunde).

Implicit: `0`

##### schema

Această proprietate definește schema implicită pentru bazele de date care suportă conceptul de scheme. Dacă această proprietate nu este specificată, se utilizează schema predefinită definită de driverul JDBC.

Implicit: `implicit driver`

### DataSource

De asemenea, este posibil să adăugați configurații la DataSource, adică configurații suplimentare specifice tipului de bază de date care este utilizat.

Pentru a realiza această configurare mai avansată, este necesar să adăugați obiectul de configurare `datasource` în interiorul obiectului de configurare a conexiunii la baza de date.

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
            "password": "secret",
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

> Rețineți că valoarea configurațiilor parametrilor DataSource este de tip _string_; în orice caz, Netuno convertește automat întotdeauna la _string_.

## Concluzie

Cu utilizarea HikariCP este posibil să realizați configurări avansate pentru a gestiona încărcarea și comportamentul conexiunilor la baza de date.

Putând fi optimizat pentru cele mai diverse scenarii, garantând performanța sa ridicată.