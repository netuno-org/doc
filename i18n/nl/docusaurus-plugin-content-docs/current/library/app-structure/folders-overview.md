---
sidebar_position: 1
id: folders-overview
title: Overzicht van de mappen
sidebar_label: Overzicht
---

Verken en leer de mappen en bestanden van de applicaties kennen.

## Structuur

Vanaf de hoofdmap waar Netuno wordt geïnstalleerd, kunnen we de map `📂 apps` vinden.

In de map `📂 apps` bevinden zich alle applicaties die beschikbaar zijn op het Netuno-platform.

Er zijn applicaties die lokaal kunnen worden aangemaakt, terwijl andere extern kunnen zijn, bijvoorbeeld applicaties die clones zijn van GIT-repositories.

Bekijk vanaf de hoofdmap van Netuno de volledige structuur van een nieuw aangemaakte applicatie:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>mijn_app</b>/</span>
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

> De map `apps` bevat alle applicaties die beschikbaar zijn in Netuno.

Aanvankelijk bestaat in deze map al de applicatie `demo`, die zoals de naam al aangeeft een **demo**_nstratie_ is van functionaliteiten van Netuno.
 
Wanneer een nieuwe applicatie wordt aangemaakt, wordt een nieuwe map toegevoegd met dezelfde hiërarchie van submappen, zoals hierboven is weergegeven.

## Belangrijkste mappen

In de map van de applicatie hebben we de belangrijkste mappen, elk met een specifiek doel.

De belangrijkste mappen zijn:

- [📂 config](config) - Algemene configuratie;
- [📂 dbs](dbs) - Zaken gerelateerd aan de database;
- [📂 docs](docs) - Documentatie en andere algemene documenten;
- [📂 public](public) - Openbare inhoud die rechtstreeks via een URL beschikbaar is, zoals afbeeldingen, JavaScript en CSS;
- [📂 server](server) - Backendcode, zoals services, jobs, templates, reports, en de volledige API in het algemeen.
- [📂 storage](storage) - Organisatie van bestanden die gerelateerd zijn aan gegevens of die in code worden gebruikt.
- [📂 ui](ui) - Gebruikersinterface van de backoffice, frontendcode zoals dashboards en andere functionaliteiten.