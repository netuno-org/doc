---
id: server
title: Server
sidebar_label: Server
---

Dezvoltarea backendului și a API-ului.

## Directorul server

Directorul `📂 server` conține un set de fișiere și directoare care formează backendul aplicației.

Tot ce se află în directorul `📂 server` este utilizat în procesarea serverului backend, cum ar fi integrări, API,
baze de date, securitate și autentificare, Cron Jobs, printre multe altele.

## Structura directorului

În directorul `📂 server` se află următoarea structură:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Acțiuni

În `📂 actions` pot fi adăugate acțiuni personalizate la nevoie (_hooks_) în operațiile CRUD ale formularelor
generate automat pentru backoffice; în funcție de structura datelor, aici se pot face multe intervenții asupra datelor.

De exemplu, la ștergerea unui client este necesar să se elimine toate comenzile sale, sau la crearea unui produs nou
acesta trebuie integrat cu alt sistem. În fine, orice dezvoltare legată direct de date poate fi făcută aici.

Acțiunile sunt inspirate din `triggers`-ii bazei de date, doar că la nivelul execuției codului.

Prin urmare, pot fi programate operații specifice la crearea, modificarea și ștergerea datelor.

## Componente

Directorul `📂 components` este utilizat pentru a defini tipuri personalizate de câmpuri în formularele de backoffice,
care pot realiza propria manipulare a datelor.

Pot fi create componente prin scripturi pentru a furniza un nou tip de câmp specific în aplicație.

## Core

Directorul `📂 core` permite injectarea de cod în fluxul de procesare al cererilor HTTP.

De asemenea, este utilizat pentru partajarea codului între diversele servicii și altele.

`_config.js` este executat după ce configurația este încărcată la fiecare cerere HTTP; este executat după scriptul de
configurare a mediului care se află în directorul `📂 config` al aplicației.

`_init.js` serve pentru a injecta anumite instrucțiuni când aplicația este inițializată pentru prima dată.

### Procesarea cererilor HTTP

În fluxul de procesare al cererilor HTTP pentru orice URL al aplicației sunt executate scripturile respective:

- `_request_start.js` este executat când cererea HTTP ajunge la serverul Netuno.
- `_request_url.js` este executat când URL-ul este procesat de Netuno, URL-ul poate fi modificat către altă destinație.
- `_request_close.js` este executat când răspunsul la cererea HTTP este închis.
- `_request_end.js` este executat când cererea HTTP este finalizată definitiv.
- `_request_error.js` este executat când apare o eroare în procesarea cererii HTTP.

### Procesarea serviciilor API

În fluxul de procesare al oricărui serviciu API al aplicației sunt executate următoarele scripturi:

- `_service_config.js` este executat înainte de începerea execuției serviciului, servește pentru a defini configurațiile de
execuție ale serviciului, printre altele. Se poate defini dacă serviciul poate sau nu să fie executat, adică un
control de securitate al accesului la serviciul API.
- `_service_start.js` este executat imediat ce un serviciu începe să fie procesat.
- `_service_end.js` este executat după finalizarea procesării unui serviciu.
- `_service_error.js` este executat când apare o eroare în procesarea unui serviciu.

## Servicii - API

În directorul `📂 services` sunt create serviciile care formează API-ul aplicației.

Serviciile pot fi scrise în diverse limbaje: Javascript, Python, Java, Kotlin, Ruby sau Groovy.

Deoarece Netuno este poliglot, orice fișier de script poate fi schimbat în alt limbaj de programare acceptat; este
suficient ca fișierele să aibă extensia corespunzătoare limbajului.

Nu sunt necesare configurații suplimentare în funcție de limbajul de programare folosit; este suficient să creați
fișierul serviciului cu extensia corectă corespunzătoare limbajului de programare.

## Setup

În directorul `📂 setup` se află codul generat automat de motorul Netuno care define schemele bazei de date și, de
asemenea, este locul unde putem pune încărcarea datelor esențială pentru funcționarea aplicației.

Scriptul `_start.js` este executat înainte de a începe procesarea de construire a bazei de date.

Scriptul `_end.js` este executat după finalizarea procesării de construire a bazei de date.

În funcție de construirea structurii de date, Netuno creează aici, în directorul `📂 setup`, automat codul necesar
pentru ca întreaga structură de date să fie recreată într-o bază de date nouă sau pentru a recrea ceva ce lipsește
într-o altă bază de date în care aplicația ar putea fi eventual executată.

 ## Șabloane

Directorul `📂 templates` conține conținutul HTML al paginilor de backoffice ale aplicației, care sunt generate de
serverul Netuno.

În directorul `📂 dev` se află fișierul `dashboard.html` care permite modificarea zonei de lucru în modul de
construire al dezvoltatorului.

`dashboard.html` care se află în rădăcina șabloanelor conține HTML-ul zonei de lucru generale a backoffice-ului.

### Șabloane native

În directorul `📂 _`, orice șablon general poate fi înlocuit, adică șabloanele implicite ale Netuno pot fi
modificate.

- [Aici sunt șabloanele native ale Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Dacă numele directoarelor și/sau al fișierelor coincid cu cele ale șabloanelor native din acest director, atunci este utilizat
șablonul care se află în acest director în locul șablonului nativ.

Adică este suficient să replicați aceeași structură a șablonului nativ în directorul `📂 _` pentru a-l înlocui.

### Scripturi

Șabloanele de scripturi injectează fișiere de cod JavaScript la sfârșitul paginilor cu următorul scop:

1. `scripts.html` adaugă cod JavaScript la sfârșitul paginii de **backoffice**.
2. `scripts_dev.html` adaugă cod JavaScript la sfârșitul paginii **zonei de construire a dezvoltatorului**.
3. `scripts_login.html` adaugă cod JavaScript la sfârșitul paginii de **login**.

### Stiluri

Șabloanele de stiluri injectează fișiere de stiluri la începutul paginilor cu următorul scop:

1. `styles.html` adaugă cod CSS la începutul paginii de **backoffice**.
2. `styles_dev.html` adaugă cod CSS la începutul paginii **zonei de construire a dezvoltatorului**.
3. `styles_login.html` adaugă cod CSS la începutul paginii de **login**.