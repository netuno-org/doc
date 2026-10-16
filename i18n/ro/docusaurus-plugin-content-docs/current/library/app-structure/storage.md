---
id: storage
title: Stocare
sidebar_label: Stocare
---

Fișiere integrate în cod sau în baza de date.

## Stocare generală

Folderul `📂 storage` are scopul de a stoca în siguranță fișiere generale care sunt utile în procesarea
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

## Bază de date

Folderul `📂 database` este utilizat pentru a stoca fișiere sau imagini legate de baza de date.

Nu este practic să stocați direct în baza de date fișierele, deoarece compromit backup-urile și sincronizarea
datelor, mărind considerabil dimensiunea bazei de date din cauza spațiului ocupat de multe fișiere în
general.

De aceea, orice formular de date care are un câmp de încărcare a unui fișier sau imagine, fișierul final este
organizat și stocat aici, iar doar numele final al fișierului este salvat în câmpul din baza de date.

Dacă structura de date conține fișiere, atunci pentru a realiza backup-ul total al aplicației este necesar să faceți
backup-ul acestui folder pe lângă backup-ul bazei de date.

## Sistem de fișiere generale

Folderul `📂 filesystem` permite organizarea cu restricții de acces a fișierelor generale care sunt utile pentru
aplicație.

Orice fișier care este util direct în codul aplicației trebuie stocat aici.

Restricțiile sunt împărțite în:

### Privat

Folderul `📂 private` trebuie să fie accesat pentru citire sau scriere doar de utilizatori autentificați în aplicație.

### Public

Folderul `📂 public` este util pentru accesul extern.

### Server

Folderul `📂 server` permite citirea și scrierea doar din codul intern al aplicației.

Prin urmare, niciun utilizator intern sau extern nu are acces la conținutul său.

Conținutul său este accesibil doar prin intermediul codului.