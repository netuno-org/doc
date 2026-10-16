---
id: cli
title: Linie de Comandă
sidebar_label: Linie de Comandă
---


Interfața de linie de comandă a Netuno este principalul instrument pentru gestionarea mediului dumneavoastră de dezvoltare. Prin intermediul acesteia, puteți consulta informații despre sistem, gestiona aplicații și configura serverul rapid.

#### Cerințe preliminare

- **Terminal:** Trebuie să aveți un terminal (Prompt de Comandă, PowerShell sau Bash) deschis în folderul rădăcină unde a fost instalat Netuno.

Acestea sunt comenzile inițiale pentru a verifica dacă mediul dumneavoastră este pregătit pentru utilizare.

| OPȚIUNE    | DESCRIERE    |
|----------|--------------|
| `help` | Permite vizualizarea tuturor comenzilor disponibile în Netuno. |
| `version` | Permite vizualizarea versiunii actuale a Netuno. |

#### Listarea comenzilor disponibile

Dacă aveți îndoieli cu privire la operațiunile pe care le puteți efectua, utilizați comanda de ajutor. Aceasta va returna o listă completă de funcții.

```shell
./netuno help
```
#### Vizualizarea versiunii Netuno

Este esențial să știți ce versiune utilizați pentru a garanta compatibilitatea cu scripturi și module specifice.

```shell
./netuno version
```

## Instalare

Înainte de a începe dezvoltarea, este necesar să instalați motorul Netuno în mediul dumneavoastră. Pentru mai multe informații accesați pagina noastră de [Instalare](/docs/get-started/installation).

Această secțiune detaliază parametrii care pot fi utilizați în timpul procesului de instalare pentru a automatiza sau optimiza procesul.

| OPȚIUNE | DESCRIERE |
|----------|--------------|
| `checksum` | Actualizează codul de verificare (checksum) al tuturor fișierelor din pachetul instalat. |
| `force` | Forțează înlocuirea tuturor fișierelor, chiar dacă există modificări locale.|
| `graal=true/false` | Definește utilizarea GraalVM pentru a obține performanțe mai mari la executarea aplicațiilor. |
| `path=[Director]`| Definește manual calea (folderul) unde va fi instalat Netuno.|
| `remove` | Elimină complet toate fișierele legate de Netuno din sistem.|
| `version=[versiune]`| Selectează o versiune specifică pentru instalare. Utilizați latest pentru versiunea de dezvoltare.|
| `yes`| Răspunde automat "DA" la toate confirmările, ignorând avertismentele privind pierderea datelor.|

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

> GraalVM este activă implicit și este descărcată automat la instalarea Netuno.

#### Exemplu de definire a căii de instalare:

```shell
./netuno install path ='dirNetuno'
```
#### Exemplu de eliminare a tuturor folderelor Netuno:

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

După finalizarea instalării, porniți serverul pentru a începe să vă dezvoltați aplicațiile.

Pentru a porni serverul cu configurațiile implicite, executați comanda de mai jos în folderul rădăcină al Netuno:

```shell
./netuno server
```

> Implicit, serverul utilizează portul 9000. Imediat ce terminalul indică faptul că sistemul este pregătit, veți putea accesa panoul de gestionare prin linkul: http://localhost:9000/

Această secțiune detaliază parametrii care pot fi utilizați în timpul procesului de pornire a serverului.

OPȚIUNE | DESCRIERE |
|----------|--------------|
| `app=[numele_aplicației]` | Definește în mod specific ce aplicație trebuie pornită |
| `host=[IP/nume gazdă]` | Vă permite să modificați numele gazdei Netuno |
| `launch=true/false` | Definește dacă Netuno trebuie să deschidă automat browserul |
| `npm` | Execută automat comanda 'npm watch' pentru a compila frontend-ul aplicației în timp real |
| `port=[număr]` | Definește portul de pornire al serverului |
| `secret=[parolă]` | Definește o parolă de securitate pentru a permite accesul la gestionarea la distanță a serverului |
| `web=[folder]` | Modifică folderul rădăcină implicit al proiectului (web home) |

Implicit, Netuno utilizează folderul **'webapp'** pentru a stoca toate fișierele esențiale funcționării sale.

**Atenție la modificarea directorului:** Dacă utilizați parametrul web=[folder] pentru a schimba numele folderului rădăcină, rețineți că trebuie să redenumiți fizic și folderul din sistemul dumneavoastră de fișiere. Comanda doar informează codul Netuno despre locul unde să caute fișierele, nu redenumește automat folderele.

#### Exemplu de pornire a serverului pentru o aplicație specifică:

```shell
./netuno server app=aplicatia_mea
```

#### Exemplu de schimbare a numelui gazdei (host):

```shell
./netuno server host=localhost
```

#### Exemplu de definire dacă Netuno deschide automat browserul:

```shell
./netuno server launch=false
```

>Implicit Netuno deschide browserul și accesează linkul http://localhost:9000.

#### Exemplu de executare a npm pentru a construi automat frontend-ul

```shell
./netuno server npm
```

#### Exemplu de schimbare a portului:

```shell
./netuno server port=10000
```

#### Exemplu de definire a unei parole pentru a accesa gestionarea la distanță a serverului:

```shell
./netuno server secret='p#rol@'
```

#### Exemplu de modificare a folderului implicit al web-ului:

```shell
./netuno server web=webapp
```

## Licență

Pentru a începe dezvoltarea cu Netuno, este necesar să înregistrați mediul dumneavoastră.

Pentru a vă gestiona licența, utilizați comanda de bază:

```shell
./netuno license
```

> În prezent, Netuno oferă trei modalități de licențiere: **Community, Standard și Enterprise**.

Această secțiune detaliază acțiunile disponibile pentru a configura sau consulta licența dumneavoastră.

| OPȚIUNE    | DESCRIERE    |
|----------|--------------|
| `create , change` | Pornește procesul de creare a unei noi licențe sau de modificare a celei actuale |
| `key` | Afișează cheia de licență activă în mediul dumneavoastră |
| `mail=[emailul_dvs]` | Definește adresa de e-mail asociată contului licenței |
| `type=[community/standard/enterprise]`  | Definește tipul de licență|


#### Exemplu de creare a unei licențe:

```shell
./netuno license create
```

#### Exemplu de vizualizare a cheii de licență:

```shell
./netuno license key
```
##### Exemplu de definire a e-mailului și tipului de licență:

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Aplicație

Cu serverul configurat și licența activă, puteți extinde ecosistemul creând noi soluții.

```shell
./netuno app
```

Fișierele generate vor fi organizate automat în structura de foldere a Netuno.

Pentru a accesa sau edita fișierele aplicației dumneavoastră, navigați prin următoarea cale din rădăcina sistemului: **webapp / apps / [numele_aplicației_dvs]**

#### Structura folderelor

- **webapp**: Este folderul rădăcină care conține toate fișierele esențiale pentru funcționarea Netuno.

- **apps**: Folder specific unde sunt stocate toate aplicațiile dezvoltate sau demonstrative.

- **[numele_aplicației_dvs]**: Folderul exclusiv al aplicației pe care tocmai ați creat-o.

Implicit, Netuno are o aplicație demonstrativă care este afișată la pornirea serverului Netuno.

| OPȚIUNE    | DESCRIERE    |
|----------|--------------|
| `database=[numele_bazei_de_date]` | Definește numele bazei de date |
| `engine=[nume]` | Definește tipul bazei de date |
| `host=[adresă]` | Definește adresa bazei de date. |
| `language=[limbă]`  | Definește limba aplicației |
| `locale=[limbă]` | Definește limba locală a aplicației |
| `name=[nume]`  | Permite crearea unei aplicații sau reconstruirea unei aplicații existente |
| `password=[parolă]`  | Definește o parolă pentru baza de date |
| `port=[număr]`  | Definește portul bazei de date |
| `username=[nume]`  | Definește numele de utilizator al bazei de date |

#### Exemplu de definire a numelui bazei de date:

```shell
./netuno app database=angajat
```

> Numele bazei de date poate conține numere și litere, iar dacă numele are mai multe cuvinte, acestea trebuie separate prin "_", după cum urmează.
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

#### Exemplu de definire a adresei serverului bazei de date:

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
./netuno app password=secret
```

#### Exemplu de definire a portului bazei de date:

```shell
./netuno app port=5432
```
Implicit, porturile corespund:
> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Exemplu de definire a numelui de utilizator al bazei de date:

```shell
./netuno username=root
```