---
id: storage
title: Storage
sidebar_label: Storage
---

In den Code oder in die Datenbank integrierte Dateien.

## Allgemeine Speicherung

Der Ordner `📂 storage` dient dazu, allgemeine Dateien sicher aufzubewahren, die bei der Verarbeitung der Anwendung nützlich sind.

## Ordnerstruktur

Im Ordner `📂 storage` befindet sich folgende Struktur:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Datenbank

Der Ordner `📂 database` wird verwendet, um Dateien oder Bilder zu speichern, die mit der Datenbank zusammenhängen.

Es ist nicht praktisch, die Dateien direkt in der Datenbank zu speichern, da sie die Backups und die Datensynchronisierung beeinträchtigen und die Größe der Datenbank erheblich erhöhen, weil im Allgemeinen viele Dateien viel Speicherplatz belegen.

Daher werden bei jedem Datenformular mit einem Feld zum Hochladen von Dateien oder Bildern die endgültigen Dateien hier organisiert und aufbewahrt, und nur der endgültige Dateiname wird im Feld der Datenbank gespeichert.

Falls die Datenstruktur Dateien enthält, muss für ein vollständiges Backup der Anwendung neben dem Backup der Datenbank auch ein Backup dieses Ordners durchgeführt werden.

## Allgemeines Dateisystem

Der Ordner `📂 filesystem` ermöglicht es, die allgemeinen Dateien, die für die Anwendung nützlich sind, mit Zugriffsbeschränkungen zu organisieren.

Jede Datei, die direkt im Code der Anwendung nützlich ist, sollte hier aufbewahrt werden.

Die Beschränkungen sind unterteilt in:

### Privat

Auf den Ordner `📂 private` dürfen nur in der Anwendung authentifizierte Benutzer lesend oder schreibend zugreifen.

### Öffentlich

Der Ordner `📂 public` ist für den externen Zugriff nützlich.

### Server

Der Ordner `📂 server` erlaubt das Lesen und Schreiben nur aus dem internen Code der Anwendung.

Somit greift kein interner oder externer Benutzer auf seinen Inhalt zu.

Sein Inhalt ist ausschließlich über den Code zugänglich.