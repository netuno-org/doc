---
sidebar_position: 1
id: folders-overview
title: Prezentare generală a folderelor
sidebar_label: Prezentare generală
---

Explorați și familiarizați-vă cu folderele și fișierele aplicațiilor.

## Structură

Pornind de la rădăcina unde este instalat Netuno, putem găsi folderul `📂 apps`.

În folderul `📂 apps` se află toate aplicațiile disponibile în platforma Netuno.

Există aplicații care pot fi create local, în timp ce altele pot fi externe, de exemplu aplicații care sunt clone ale unor repository-uri GIT.

Vedeți, pornind de la rădăcina Netuno, structura completă a unei aplicații nou create:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>aplicatia_mea</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> În folderul `apps` se află toate aplicațiile disponibile în Netuno.

Inițial, în acest folder există deja aplicația `demo`, care, după cum indică numele, este o **demo**_nstrație_ a funcționalităților Netuno.
 
Când este creată o aplicație nouă, este adăugat un folder nou care conține aceeași ierarhie de subfoldere, așa cum s-a prezentat mai sus.

## Foldere principale

În folderul aplicației avem folderele principale, fiecare având un scop specific.

Folderele principale sunt:

- [📂 config](config) - Configurații generale;
- [📂 dbs](dbs) - Aspecte legate de baza de date;
- [📂 docs](docs) - Documentație și alte documente în general;
- [📂 public](public) - Conținut public disponibil direct prin URL, cum ar fi imagini, JavaScript și CSS;
- [📂 server](server) - Cod de backend, cum ar fi servicii, joburi, template-uri, rapoarte și întreaga API în general.
- [📂 storage](storage) - Organizarea fișierelor care sunt legate de date sau care sunt utilizate în cod.
- [📂 ui](ui) - Interfața de utilizator a backoffice-ului, cod de frontend precum dashboard-uri și alte funcționalități.