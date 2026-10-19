---
id: storage
title: Archiviazione
sidebar_label: Archiviazione
---

File integrati nel codice o nel database.

## Archiviazione generale

La cartella `📂 storage` ha lo scopo di conservare in modo sicuro i file generali utili nell'elaborazione dell'applicazione.

## Struttura della cartella

Nella cartella `📂 storage` si trova la seguente struttura:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Database

La cartella `📂 database` è utilizzata per archiviare file o immagini relativi al database.

Non è pratico archiviare direttamente nel database i file, perché compromettono i backup e la sincronizzazione dei dati, aumentando considerevolmente la dimensione del database a causa dello spazio occupato da molti file in generale.

Per questo qualsiasi modulo di dati che abbia un campo di upload di file o immagini, il file finale viene organizzato e conservato qui, e solo il nome finale del file viene salvato nel campo del database.

Se la struttura dati contiene file, allora per eseguire il backup totale dell'applicazione è necessario eseguire il backup di questa cartella oltre al backup del database.

## File system generale

La cartella `📂 filesystem` consente di organizzare con restrizioni di accesso i file generali utili per l'applicazione.

Qualsiasi file utile direttamente nel codice dell'applicazione deve essere conservato qui.

Le restrizioni sono suddivise in:

### Privato

La cartella `📂 private` deve essere accessibile in lettura o scrittura solo da utenti autenticati nell'applicazione.

### Pubblico

La cartella `📂 public` è utile per l'accesso esterno.

### Server

La cartella `📂 server` consente solo la lettura e la scrittura da codice interno dell'applicazione.

Pertanto, nessun utente interno o esterno accede al suo contenuto.

Il suo contenuto è accessibile solo tramite il codice.