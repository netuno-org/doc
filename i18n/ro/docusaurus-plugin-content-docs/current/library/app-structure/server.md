---
id: server
title: Server
sidebar_label: Server
---

Dezvoltarea backend-ului și a API-ului.

## Folderul Server

Folderul `📂 server` conține un set de fișiere și foldere care formează backend-ul aplicației.

Tot ce se află în folderul `📂 server` este utilizat în procesarea serverului de backend, cum ar fi integrări, API, baza de date, securitate și autentificare, Cron Jobs, printre multe altele.

## Structura folderului

În folderul `📂 server` se găsește următoarea structură:

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

În `📂 actions` pot fi adăugate acțiuni personalizate la cerere (_hooks_) în operațiile CRUD ale formularelor generate automat pentru backoffice; în funcție de structura de date, se poate face multă intervenție asupra datelor aici.

De exemplu, la ștergerea unui client este necesar să se elimine toate comenzile sale, sau la crearea unui produs nou acesta trebuie integrat cu alt sistem. În fine, orice dezvoltare legată direct de date poate fi făcută aici.

Acțiunile sunt inspirate din `triggers` de bază de date, doar că la nivelul execuției de cod.

Prin urmare, pot fi programate operații specifice la crearea, modificarea și ștergerea datelor.

## Componente

Folderul `📂 components` este utilizat pentru a defini tipuri personalizate de câmpuri în formularele de backoffice, care pot realiza propria manipulare de date.

Pot fi create componente prin scripturi pentru a furniza un nou tip de câmp specific în aplicație.

## Core

Folderul `📂 core` permite injectarea de cod în fluxul de procesare a cererilor HTTP.

De asemenea, este utilizat pentru a partaja cod între diversele servicii și altele.

`_config.js` este executat după ce configurația este încărcată la fiecare cerere HTTP; este executat după scriptul de configurare a mediului care se află în folderul `📂 config` al aplicației.

`_init.js` serve pentru a injecta anumite instrucțiuni când aplicația este inițializată pentru prima dată.

### Procesarea cererilor HTTP

În fluxul de procesare a cererilor HTTP pentru orice URL al aplicației sunt executate scripturile respective:

- `_request_start.js` este executat când cererea HTTP ajunge la serverul Netuno.
- `_request_url.js` este executat când URL-ul este procesat de Netuno; URL-ul poate fi schimbat către altă destinație.
- `_request_close.js` este executat când răspunsul la cererea HTTP este închis.
- `_request_end.js` este executat când cererea HTTP este finalizată definitiv.
- `_request_error.js` este executat când apare o eroare în procesarea cererii HTTP.

### Procesarea serviciilor API

În fluxul de procesare a oricărui serviciu API al aplicației sunt executate următoarele scripturi:

- `_service_config.js` este executat înainte de a începe execuția serviciului; serve pentru a defini configurațiile de execuție ale serviciului, printre altele. Se poate defini dacă serviciul poate sau nu să fie executat, adică un control de securitate în accesul la serviciul API.
- `_service_start.js` este executat imediat ce un serviciu începe să fie procesat.
- `_service_end.js` este executat după finalizarea procesării unui serviciu.
- `_service_error.js` este executat când apare o eroare în procesarea unui serviciu.

## Servicii - API

În folderul `📂 services` sunt create serviciile care formează API-ul aplicației.

Serviciile pot fi scrise în diverse limbaje: JavaScript, Python, Java, Kotlin, Ruby sau Groovy.

Deoarece Netuno este poliglot, orice fișier de script poate fi schimbat în alt limbaj de programare suportat; este suficient ca extensia fișierelor să corespundă limbajului.

Nu sunt necesare configurații suplimentare în funcție de limbajul de programare folosit; este suficient să creați fișierul serviciului cu extensia corectă corespunzătoare limbajului de programare.

## Setup

În folderul `📂 setup` se află codul generat automat de motorul Netuno care definește schemele bazei de date; de asemenea, aici putem plasa încărcarea de date care este esențială pentru funcționarea aplicației.

Scriptul `_start.js` este executat înainte de a începe procesarea de construire a bazei de date.

Scriptul `_end.js` este executat după ce procesarea de construire a bazei de date este finalizată.

În funcție de construirea structurii de date, Netuno creează aici, în folderul `📂 setup`, automat codul necesar pentru ca întreaga structură de date să fie recreată într-o bază de date nouă, sau pentru a recrea ceva ce lipsește într-o altă bază de date în care aplicația ar putea fi eventual executată.

 ## Șabloane

Folderul `📂 templates` conține conținutul HTML al paginilor de backoffice ale aplicației, care sunt generate de serverul Netuno.

În folderul `📂 dev` se află fișierul `dashboard.html` care permite modificarea zonei de lucru în modul de construire al dezvoltatorului.

`dashboard.html` care se află în rădăcina folderului `templates` conține HTML-ul zonei de lucru generale a backoffice-ului.

### Șabloane native

În folderul `📂 _` orice șablon general poate fi înlocuit, adică șabloanele standard ale Netuno pot fi modificate.

- [Aici aveți șabloanele native ale Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Dacă numele de foldere și/sau de fișiere coincid cu cele ale șabloanelor native din acest folder, atunci este utilizat șablonul care se află în acest folder în locul șablonului nativ.

Adică, este suficient să replicați aceeași structură a șablonului nativ în folderul `📂 _` pentru a-l înlocui.

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