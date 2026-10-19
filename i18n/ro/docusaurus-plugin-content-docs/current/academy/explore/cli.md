---
id: cli
title: Linia de Comenzi
sidebar_label: Linia de Comenzi
---


Interfața de linie de comandă a Netuno este principalul instrument pentru gestionarea mediului dvs. de dezvoltare. Prin intermediul ei, puteți consulta informații despre sistem, gestiona aplicații și configura rapid serverul.

#### Precondiții

- **Terminal:** Trebuie să aveți un terminal (Prompt de comandă, PowerShell sau Bash) deschis în dosarul rădăcină în care a fost instalat Netuno.

Acestea sunt comenzile inițiale pentru a verifica dacă mediul dvs. este pregătit pentru utilizare.

| OPȚIUNE    | DESCRIERE    |
|----------|--------------|
| `help` | Permite vizualizarea tuturor comenzilor disponibile în Netuno. |
| `version` | Permite vizualizarea versiunii curente a Netuno. |

#### Listarea comenzilor disponibile

Dacă aveți întrebări despre operațiunile pe care le puteți efectua, utilizați comanda de ajutor. Aceasta va returna o listă completă de funcții.

```shell
./netuno help
```
#### Vizualizarea versiunii Netuno

Este esențial să știți ce versiune utilizați pentru a asigura compatibilitatea cu scripturi și module specifice.

```shell
./netuno version
```

## Instalare

Înainte de a începe dezvoltarea, este necesar să instalați motorul Netuno în mediul dvs. Pentru mai multe informații, accesați pagina noastră de [Instalare](/docs/get-started/installation).

Această secțiune detaliază parametrii care pot fi utilizați în timpul procesului de instalare pentru a automatiza sau optimiza procesul.

| OPȚIUNE | DESCRIERE |
|----------|--------------|
| `checksum` | Actualizează codul de verificare (checksum) pentru toate fișierele pachetului instalat. |
| `force` | Forțează înlocuirea tuturor fișierelor, chiar dacă există modificări locale.|
| `graal=true/false` | Definește utilizarea GraalVM pentru a obține performanțe mai mari la executarea aplicațiilor. |
| `path=[Cale]`| Definește manual calea (dosarul) în care va fi instalat Netuno.|
| `remove` | Elimină complet toate fișierele legate de Netuno din sistem.|
| `version=[versiune]`| Selectează o versiune specifică pentru instalare. Folosiți latest pentru versiunea de dezvoltare.|
| `yes`| Răspunde automat „DA” la toate confirmările, ignorând avertismentele despre pierderea datelor.|

#### Exemplu de actualizare a checksum-ului:

```shell
./netuno install checksum
```

#### Exemplu de forțare a tuturor modificărilor locale:

```shell
./netuno install force
```

#### Exemplu de dezactivare a GraalVM: 

```shell
./netuno install graal=false
```

> GraalVM este activă în mod implicit și este descărcată automat la instalarea Netuno.

#### Exemplu de definire a căii de instalare:

```shell
./netuno install path ='dosarNetuno'
```
#### Exemplu de eliminare a tuturor dosarelor Netuno:

```shell
./netuno install remove
```

#### Exemplu de selectare a versiunii Netuno care trebuie instalată:

```shell
./netuno install version='latest'
```

##### Exemplu de răspuns DA la toate întrebările: 
```shell
./netuno install yes 
```

## Server

După finalizarea instalării, porniți serverul pentru a începe dezvoltarea aplicațiilor.

Pentru a porni serverul cu configurațiile implicite, executați comanda de mai jos în dosarul rădăcină al Netuno:

```shell
./netuno server
```

> În mod implicit, serverul utilizează portul 9000. Imediat ce terminalul indică faptul că sistemul este pregătit, puteți accesa panoul de gestionare prin linkul: http://localhost:9000/

Această secțiune detaliază parametrii care pot fi utilizați în timpul procesului de pornire a serverului.

OPȚIUNE | DESCRIERE |
|----------|--------------|
| `app=[numele_aplicatiei]` | Definește în mod specific ce aplicație trebuie pornită |
| `host=[IP/numele_gazdei]` | Vă permite să modificați numele gazdei Netuno |
| `launch=true/false` | Definește dacă Netuno trebuie să deschidă automat browserul |
| `npm` | Execută automat comanda 'npm watch' pentru a compila frontend-ul aplicației în timp real |
| `port=[număr]` | Definește portul de pornire al serverului |
| `secret=[parola]` | Definește o parolă de securitate pentru a permite accesul la gestionarea de la distanță a serverului |
| `web=[dosar]` | Modifică dosarul rădăcină predefinit al proiectului (web home) |

În mod implicit, Netuno utilizează dosarul **'webapp'** pentru a stoca toate fișierele esențiale funcționării sale.

**Atenție la modificarea dosarului:** Dacă utilizați parametrul web=[dosar] pentru a schimba numele dosarului rădăcină, rețineți că trebuie să redenumiți fizic dosarul și în sistemul dvs. de fișiere. Comanda doar informează codul Netuno despre locul unde să caute fișierele; ea nu redenumește automat dosarele.

#### Exemplu de pornire a serverului pentru o aplicație specifică:

```shell
./netuno server app=aplicatiamea
```

#### Exemplu de modificare a numelui gazdei (host):

```shell
./netuno server host=localhost
```

#### Exemplu de definire dacă Netuno pornește automat browserul:

```shell
./netuno server launch=false
```

> În mod implicit, Netuno deschide browserul și inițializează linkul http://localhost:9000.

#### Exemplu de executare a npm pentru a construi automat frontend-ul

```shell
./netuno server npm
```

#### Exemplu de modificare a portului:

```shell
./netuno server port=10000
```

#### Exemplu de definire a unei parole pentru accesarea gestionării de la distanță a serverului:

```shell
./netuno server secret='parola#123'
```

#### Exemplu de modificare a dosarului implicit al web-ului:

```shell
./netuno server web=webapp
```

## Licență

Pentru a începe dezvoltarea cu Netuno, este necesar să înregistrați mediul dvs.

Pentru a gestiona licența, utilizați comanda de bază:

```shell
./netuno license
```

> În prezent, Netuno oferă trei modalități de licență: **Community, Standard și Enterprise**.

Această secțiune detaliază acțiunile disponibile pentru configurarea sau consultarea licenței.

| OPȚIUNE    | DESCRIERE    |
|----------|--------------|
| `create , change` | Inițiază procesul de creare a unei licențe noi sau de modificare a celei actuale |
| `key` | Afișează cheia de licență activă în mediul dvs. |
| `mail=[email@exemplu.com]` | Definește adresa de e-mail asociată contului licenței |
| `type=[community/standard/enterprise]`  | Definește tipul de licență|


#### Exemplu de creare a unei licențe:

```shell
./netuno license create
```

#### Exemplu de vizualizare a cheii licenței: 

```shell
./netuno license key
```
##### Exemplu de definire a e-mailului și a tipului de licență:

```shell
./netuno license mail='email@exemplu.com' type='community'
```

## Aplicație

Cu serverul configurat și licența activă, puteți extinde ecosistemul creând noi soluții.

```shell
./netuno app
```

Fișierele generate vor fi organizate automat în structura de dosare a Netuno.

Pentru a accesa sau edita fișierele aplicației dvs., navigați pe următoarea cale pornind de la rădăcina sistemului: **webapp / apps / [numele_aplicatiei_dvs]**

#### Structura dosarelor

- **webapp**: Este dosarul rădăcină care conține toate fișierele esențiale pentru funcționarea Netuno.

- **apps**: Dosarul specific în care sunt stocate toate aplicațiile dezvoltate sau de demonstrație.

- **[numele_aplicatiei_dvs]**: Dosarul exclusiv al aplicației pe care tocmai ați creat-o.

În mod implicit, Netuno are o aplicație de demonstrație care este afișată la pornirea serverului Netuno.

| OPȚIUNE    | DESCRIERE    |
|----------|--------------|
| `database=[numele_bazei_de_date]` | Definește numele bazei de date |
| `engine=[nume]` | Definește tipul bazei de date |
| `host=[adresa]` | Definește adresa bazei de date. |
| `language=[limba]`  | Definește limba aplicației |
| `locale=[limba]` | Definește limba locală a aplicației |
| `name=[nume]`  | Permite crearea unei aplicații sau reconstruirea unei aplicații existente |
| `password=[parola]`  | Definește o parolă pentru baza de date |
| `port=[număr]`  | Definește portul bazei de date |
| `username=[nume]`  | Definește numele utilizatorului bazei de date |

#### Exemplu de definire a numelui bazei de date:

```shell
./netuno app database=angajat
```

> Numele bazei de date poate conține cifre și litere; dacă numele are mai multe cuvinte, acestea trebuie separate prin "_", astfel:
>
> **Exemplu:** angajat_db

#### Exemplu de definire a tipului bazei de date:

```shell
./netuno app engine=pg
```
Există următoarele tipuri de baze de date:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Exemplu de definire a adresei serverului de baze de date:

```shell
./netuno app host=localhost
```

#### Exemplu de definire a limbii și a localizării:

```shell
./netuno app language=pt_PT locale=pt_PT
```
Există următoarele limbi:
> - Portugheză - pt_PT
> - Braziliană - pt_BR
> - Engleză - en_US
> - Spaniolă - es_ES

#### Exemplu de creare a unei aplicații sau reconstruire a unei aplicații existente:

```shell
./netuno app name=demo
```

#### Exemplu de definire a parolei bazei de date:

```shell
./netuno app password=parola123
```

#### Exemplu de definire a portului bazei de date:

```shell
./netuno app port=5432
```
În mod implicit, porturile corespund următoarelor valori:  

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Exemplu de definire a numelui de utilizator al bazei de date:

```shell
./netuno username=root
```