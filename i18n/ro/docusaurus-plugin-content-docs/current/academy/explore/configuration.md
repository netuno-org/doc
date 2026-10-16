---
id: configuration
title: Configurare
sidebar_label: Configurare
---

## Configurări de bază ale unei aplicații

Fiecare aplicație creată în Netuno are configurări specifice care definesc modul în care aceasta trebuie să se conecteze la baze de date, chei de acces și alți parametri fundamentali.

Netuno utilizează un sistem inteligent care organizează aceste configurări în funcție de mediul în care rulează aplicația, fie local, pe un server oficial sau în oricare altul.

Configurările aplicației tale sunt centralizate în folderul **config**, aflat în rădăcina proiectului tău.

**Cale implicită:** `aplicatia-mea/config`

### Medii de execuție

În folderul config, fișierele sunt denumite în funcție de mediul pentru care au fost create. Netuno încarcă automat doar fișierele care corespund mediului în care rulează în acel moment:

- **Dezvoltare**: Fișierele denumite `_development` sunt citite doar când mediul Netuno este definit ca dezvoltare.

- **Producție**: Fișierele denumite `_production` sunt citite doar când mediul Netuno este definit ca producție.


### Tipuri de fișiere de configurare

Pentru fiecare mediu, poți utiliza două tipuri de fișiere care lucrează împreună:

### JSON

- `_development.json` 
- `_production.json`

**Funcție:** Stochează definițiile și parametrizările statice.

**Exemplu:** Pune credențiale de bază de date, URL-uri de API-uri externe și configurări fixe.

### JS

- `_development.js` 
- `_production.js`

**Funcție:** Execută logici în momentul în care configurația este încărcată.

**Exemplu:** Modifică configurări dinamic sau realizează sarcini și procesări inițiale necesare înainte ca aplicația să ruleze complet.


### Definirea mediului general

Pentru ca aplicațiile tale să știe ce configurare trebuie să utilizeze, trebuie să informezi serverul Netuno în ce "mod" operează. Această configurare globală este definită într-un singur fișier în rădăcina Netuno.

1. **Localizează fișierul de configurare global:** Mergi în folderul rădăcină unde a fost instalat Netuno. Găsește și deschide fișierul numit `config.js`.
2. **Găsește variabila de mediu:** În fișier, caută proprietatea `config.env`.
3. **Definește mediul dorit:** Modifică valoarea variabilei în funcție de mediul pe care dorești să îl activezi.


#### Mediu de dezvoltare
Folosit în timp ce programezi și testezi pe propria mașină.

```javascript
// În fișierul ./config.js din rădăcina Netuno
config.env = 'development'
```

#### Mediu de producție
Folosit când proiectul tău este finalizat și rulează pe serverul oficial pentru utilizatori.

```javascript
// În fișierul ./config.js din rădăcina Netuno
config.env = 'production'
```

#### Alte medii (personalizate)

Netuno este flexibil și îți permite să creezi nume de medii personalizate, de exemplu: `test`, `homologation` sau `staging`.

```javascript
// În fișierul ./config.js din rădăcina Netuno
config.env = 'test'
```

> Configurarea aplicației trebuie să înceapă cu `_`, să aibă extensia `.json` și, de asemenea, un fișier cu extensia `.js`, ambele din același mediu.

## Repozitoriu GIT

Când utilizezi Git pentru versionarea codului aplicației tale, este esențial să garantezi securitatea datelor tale.

Fișierele de configurare conțin de obicei informații sensibile, cum ar fi parole de baze de date, chei de API-uri private etc... De aceea, **nu trebuie niciodată să trimiți fișierele de configurare reale în repozitoriu**.

Pentru a garanta că parolele tale nu se scurg și, în același timp, a menține proiectul documentat pentru alți dezvoltatori, urmează acești doi pași:

### 1. Ascunde fișierele reale

În rădăcina aplicației tale, deschide (sau creează) fișierul numit `.gitignore`. Adaugă căile fișierelor tale de configurare `.json` pentru ca Git să le ignore complet.

**Exemplu de ce să adaugi în `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Fișier de configurare exemplu

Creează un fișier exemplu cu datele necesare pentru ca noii dezvoltatori să configureze proiectul cu ușurință.

- Mergi în folderul config/ al aplicației tale.
- Creează un fișier numit `exemplu.json`.
- Copiază structura fișierului tău `_development.json` în el, lăsând doar numele câmpurilor.

Vezi cum trebuie să arate **config/exemplu.json**:

```json
{
  "database": {
    "host": "PUNE_HOSTUL_AICI",
    "user": "UTILIZATORUL_TAU",
    "password": "PAROLA_TA"
  }
}
```

#### Cum să accesezi configurările în cod

După ce ai definit variabilele și cheile tale în fișierele de configurare (cum ar fi `_development.json`), va trebui să le utilizezi în logica aplicației tale — de exemplu, când creezi un serviciu care se conectează la o API și are nevoie de un *token* de acces salvat. 

În Netuno, aceste configurări pot fi accesate prin resursa nativă `_app`.

#### Cum să obții datele

În orice cod executat de server (cum ar fi în folderul `server/services/`), vei utiliza funcția `_app.config()` pentru a obține valorile care se află în fișierul tău de configurare activ.

Pentru a înțelege cum se face legătura, imaginează-ți că în fișierul tău de configurare (`config/_development.json`) ai definit următoarele:

```json
{
  "name": "Aplicația Mea",
  "versiune": 2
}
```
 
 Pentru a obține valoarea cheii "name" și a o imprima în consola (log) a serverului, ai folosi următorul cod în serviciul tău .js:

```javascript
// 1. Netuno merge în fișierul JSON, caută cheia "name" și preia valoarea acesteia.
// 2. Apoi, salvează această valoare în variabila JavaScript pe care o numim 'numeAplicatie'.
let numeAplicatie = _app.config().getString("name");

// 3. Afișează conținutul variabilei noastre în terminalul Netuno: "Aplicația Mea"
_log.info(numeAplicatie);
```

## Configurări personalizate

Pe lângă configurările implicite ale bazei de date și ale serverului, poți crea propriile variabile de configurare. 

Acest lucru este foarte util pentru a defini reguli de business, cum ar fi de exemplu "cantitatea maximă de elemente pe pagină" sau "intervalul de trimitere a e-mailurilor", fără a fi nevoie să modifici codul aplicației de fiecare dată când aceste reguli se schimbă.

Aceste variabile sunt păstrate în blocul `"settings"` din fișierele tale de configurare JSON, cum ar fi `_development.json` sau `_production.json`.  

### Structura JSON și vizibilitatea (public vs. privat)

Când creezi configurările tale, este esențial să separi ceea ce Interfața Utilizatorului (Frontend) poate vedea și ceea ce trebuie să rămână protejat doar pe Server (Backend).

* **Variabile private:** Se află în blocul `"settings"`. Doar serverul are acces.
* **Variabile publice:** Se află în sub-blocul `"public"`. Ele sunt trimise către interfața utilizatorului (folderul `ui`), din zona administrativă, cum ar fi în dezvoltarea de dashboard-uri.

**Exemplu de cum să structurezi fișierul tău `.json`:**

```json
{
  ...
  "settings": {
    "public": {
      "elementePePagina": 10
    },
    "intervalEmailuri": 10
  }
}
```

### Cum să accesezi configurările în cod
Modul de a obține aceste date se schimbă în funcție de locul unde programezi:

**1. Pe server / Backend (servicii)**

Pentru a accesa configurări generale sau private, utilizează resursa `_app.settings()` în codul tău de server (fișiere .js din folderul server).  

```javascript
// Accesează variabila privată "intervalEmailuri"
const intervalEmailuri = _app.settings().getInt("intervalEmailuri");

_log.info("Intervalul definit este de: " + intervalEmailuri);
```

**2. În interfață / Frontend (UI)**

În dezvoltarea interfeței (fișiere din folderul ui), poți accesa tot ce a fost definit în blocul "public". Pentru aceasta, utilizează obiectul global `netuno.config.app.settings`.

```javascript
// Accesează variabila publică "elementePePagina" în frontend
const elementePePagina = netuno.config.app.settings.elementePePagina;

console.log("Se afișează " + elementePePagina + " elemente în tabel.");
```
## Concluzie

Sistemul de configurări al Netuno oferă flexibilitate și securitate structurală pentru aplicația ta. Prin intermediul său, este posibil să:

* **Gestionezi mai multe medii:** Creezi și suporți diferite contexte de execuție (dezvoltare, producție etc.) cu parametrizări independente.
* **Personalizezi variabile:** Utilizezi blocul `settings` pentru a adăuga configurări specifice afacerii tale. 
* **Separi responsabilitățile:** Izolezi și protejezi configurările restricționate la backend de cele care trebuie să fie accesibile în frontend.