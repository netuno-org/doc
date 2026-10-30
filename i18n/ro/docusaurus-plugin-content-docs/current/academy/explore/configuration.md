---
id: configuration
title: Configurare
sidebar_label: Configurare
---

## Configurări de bază ale unei aplicații

Fiecare aplicație creată în Netuno are configurări specifice care definesc modul în care se conectează la baze de date, chei de acces și alți parametri fundamentali.

Netuno folosește un sistem inteligent care organizează aceste configurări în funcție de mediul în care rulează aplicația, fie local, fie pe un server oficial sau oriunde altundeva.

Configurările aplicației sunt centralizate în folderul **config**, aflat în rădăcina proiectului.

**Cale implicită:** `aplicatia-mea/config`

### Medii de execuție

În folderul config, fișierele sunt denumite în funcție de mediul pentru care au fost create. Netuno încarcă automat doar fișierele care corespund mediului în care rulează în acel moment:

- **Dezvoltare**: fișierele denumite `_development` sunt citite doar când mediul Netuno este setat la dezvoltare.

- **Producție**: fișierele denumite `_production` sunt citite doar când mediul Netuno este setat la producție.


### Tipuri de fișiere de configurare

Pentru fiecare mediu, poți folosi două tipuri de fișiere care lucrează împreună:

### JSON

- `_development.json` 
- `_production.json`

**Funcție:** Stochează definițiile și parametrizările statice.

**Exemplu:** Introducerea credențialelor bazei de date, URL-urilor API-urilor externe și configurărilor fixe.

### JS

- `_development.js` 
- `_production.js`

**Funcție:** Execută logici în momentul în care configurarea este încărcată.

**Exemplu:** Modificarea dinamică a configurărilor sau efectuarea de sarcini și procesări inițiale necesare înainte ca aplicația să ruleze complet.


### Definirea mediului general

Pentru ca aplicațiile tale să știe ce configurare trebuie să utilizeze, trebuie să informezi serverul Netuno în ce „mod” funcționează. Această configurare globală este definită într-un singur fișier din rădăcina Netuno.

1. **Localizează fișierul de configurare globală:** Mergi la folderul rădăcină unde a fost instalat Netuno. Găsește și deschide fișierul numit `config.js`.
2. **Găsește variabila de mediu:** În fișier, caută proprietatea `config.env`.
3. **Setează mediul dorit:** Schimbă valoarea variabilei în funcție de mediul pe care vrei să îl activezi. 


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

Netuno este flexibil și îți permite să creezi nume de medii personalizate, de exemplu: `test`, `omologare` sau `preproducție`.

```javascript
// În fișierul ./config.js din rădăcina Netuno
config.env = 'test'
```

> Configurarea aplicației trebuie să înceapă cu `_`, să aibă extensia `.json` și, de asemenea, un fișier cu extensia `.js`, ambele din același mediu.

## Repository Git

Când folosești Git pentru versionarea codului aplicației tale, este esențial să garantezi securitatea datelor.

Fișierele de configurare conțin de obicei informații sensibile, cum ar fi parole de baze de date, chei ale API-urilor private etc. De aceea, **nu trebuie niciodată să trimiți fișierele de configurare reale în repository**.

Pentru a te asigura că parolele tale nu ajung în repository și, în același timp, a menține proiectul documentat pentru alți dezvoltatori, urmează acești doi pași:

### 1. Ascunde fișierele reale

În rădăcina aplicației tale, deschide (sau creează) fișierul numit `.gitignore`. Adaugă căile fișierelor tale de configurare `.json` pentru ca Git să le ignore complet.

**Exemplu de conținut de adăugat în `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Fișier de configurare exemplu

Creează un fișier exemplu cu datele necesare pentru ca noii dezvoltatori să configureze proiectul cu ușurință.

- Mergi la folderul config/ al aplicației tale.
- Creează un fișier numit `exemplu.json`.
- Copiază structura fișierului tău `_development.json` în el, păstrând doar numele câmpurilor.

Vezi cum ar trebui să arate **config/exemplu.json**:

```json
{
  "database": {
    "host": "PUNE_HOSTUL_AICI",
    "user": "UTILIZATORUL_TAU",
    "password": "PAROLA_TA"
  }
}
```

#### Cum se accesează configurările în cod

După ce ai definit variabilele și cheile în fișierele de configurare (cum ar fi `_development.json`), va trebui să le utilizezi în logica aplicației tale — de exemplu, la crearea unui serviciu care se conectează la un API și are nevoie de un *token* de acces salvat. 

În Netuno, aceste configurări pot fi accesate prin resursa nativă `_app`.

#### Cum se caută datele

În orice cod executat de server (cum ar fi în folderul `server/services/`), vei folosi funcția `_app.config()` pentru a prelua valorile din fișierul tău de configurare activ.

Pentru a înțelege cum se face legătura, imaginează-ți că în fișierul tău de configurare (`config/_development.json`) ai definit următoarele:

```json
{
  "nume": "Aplicația Mea",
  "versiune": 2
}
```
 
 Pentru a prelua valoarea cheii „nume” și a o afișa în consola (logul) serverului, ai folosi următorul cod în serviciul tău .js:

```javascript
// 1. Netuno merge în fișierul JSON, caută cheia "nume" și preia valoarea acesteia.
// 2. Apoi, salvează această valoare în variabila JavaScript pe care o numim 'numeleAplicatiei'.
let numeleAplicatiei = _app.config().getString("nume");

// 3. Afișează conținutul variabilei noastre în terminalul Netuno: "Aplicația Mea"
_log.info(numeleAplicatiei);
```

## Configurări personalizate

Pe lângă configurările standard ale bazei de date și ale serverului, poți crea propriile variabile de configurare. 

Acest lucru este foarte util pentru definirea regulilor de business, cum ar fi de exemplu „numărul maxim de elemente pe pagină” sau „intervalul de trimitere a e-mailurilor”, fără a fi nevoie să modifici codul aplicației de fiecare dată când aceste reguli se schimbă.

Aceste variabile sunt păstrate în blocul `"settings"` din fișierele tale de configurare JSON, cum ar fi `_development.json` sau `_production.json`.  

### Structura JSON și vizibilitate (public vs. privat)

Când creezi configurările, este esențial să separi ceea ce Interfața Utilizatorului (Frontend) poate vedea și ceea ce trebuie să rămână protejat doar pe Server (Backend).

* **Variabile private:** Se află în blocul `"settings"`. Doar serverul are acces.
* **Variabile publice:** Se află în sub-blocul `"public"`. Ele sunt trimise către interfața utilizatorului (folderul `ui`), din aria administrativă, ca în dezvoltarea dashboard-urilor.

**Exemplu de structurare a fișierului tău `.json`:**

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

### Cum se accesează configurările în cod
Modul de preluare a acestor date se schimbă în funcție de locul în care programezi:

**1. Pe server / backend (servicii)**

Pentru a accesa configurări generale sau private, folosește resursa `_app.settings()` în codul tău de server (fișiere .js din folderul server).  

```javascript
// Accesează variabila privată "intervalEmailuri"
const intervalEmailuri = _app.settings().getInt("intervalEmailuri");

_log.info("Intervalul definit este de: " + intervalEmailuri);
```

**2. În interfață / frontend (UI)**

În dezvoltarea interfeței (fișiere din folderul ui), poți accesa tot ceea ce a fost definit în blocul "public". Pentru aceasta, folosește obiectul global `netuno.config.app.settings`.

```javascript
// Accesează variabila publică "elementePePagina" în frontend
const elementePePagina = netuno.config.app.settings.elementePePagina;

console.log("Se afișează " + elementePePagina + " elemente în tabel.");
```
## Concluzie

Sistemul de configurări al Netuno oferă flexibilitate și securitate structurală pentru aplicația ta. Prin intermediul lui, este posibil să:

* **Gestionezi multiple medii:** Poți crea și suporta contexte diferite de execuție (dezvoltare, producție etc.) cu parametrizări independente.
* **Personalizezi variabile:** Utilizezi blocul `settings` pentru a adăuga configurări specifice afacerii tale. 
* **Separi responsabilitățile:** Izolezi și protejezi configurările restricționate la backend de cele care trebuie să fie accesibile în frontend.