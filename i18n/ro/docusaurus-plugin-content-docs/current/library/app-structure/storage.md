---
id: storage
title: Stocare
sidebar_label: Stocare
---

Fișiere integrate în cod sau în baza de date.

## Stocare generală

Folderul `📂 storage` are scopul de a păstra în siguranță fișiere generale care sunt utile în procesarea
aplicației.

## Structura folderului

În folderul `📂 storage` se află următoarea structură:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Baza de date

Folderul `📂 database` este utilizat pentru a stoca fișiere sau imagini legate de baza de date.

Nu este practic să stochezi direct în baza de date fișierele, deoarece compromit backup-urile și sincronizarea
datelor, mărind considerabil dimensiunea bazei de date din cauza spațiului ocupat în general de multe fișiere.

De aceea, orice formular de date care are un câmp de încărcare a unui fișier sau a unei imagini va avea fișierul final
organizat și păstrat aici, iar în câmpul din baza de date se păstrează doar numele final al fișierului.

Dacă structura de date conține fișiere, atunci pentru a realiza backup-ul total al aplicației este necesar să faci
backup-ul acestui folder pe lângă backup-ul bazei de date.

## Sistemul de fișiere generale

Folderul `📂 filesystem` permite organizarea, cu restricții de acces, a fișierelor generale care sunt utile pentru
aplicație.

Orice fișier care este util direct în codul aplicației trebuie păstrat aici.

Restricțiile sunt împărțite în:

### Privat

Folderul `📂 private` trebuie accesat pentru citire sau scriere doar de utilizatorii autentificați în aplicație.

### Public

Folderul `📂 public` este util pentru accesul extern.

### Server

Folderul `📂 server` permite citirea și scrierea doar din codul intern al aplicației.

Prin urmare, niciun utilizator intern sau extern nu îi accesează conținutul.

Conținutul său este accesibil doar prin intermediul codului.