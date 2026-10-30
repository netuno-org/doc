---
sidebar_position: 4
id: queries-interface
title: Abfrageoberfläche
---


Das Query-Werkzeug von Netuno ist eine leistungsstarke Funktion, die die direkte Interaktion mit der Datenbank der Anwendung über SQL (Structured Query Language) ermöglicht.

Diese Funktionalität ist essenziell, um Geschäftslogiken zu testen, gespeicherte Informationen zu validieren und die Grundlage für Berichte oder komplexe Oberflächenkomponenten zu schaffen. Netuno unterstützt derzeit drei Datenbankmanagementsysteme: **PostgreSQL, H2 Database und MySQL**.

## 1 - Abschnitt Abfrage

Greifen Sie im Modus „Konstruieren“ im Seitenmenü auf den Bereich „Verwaltung“ zu und klicken Sie auf den Abschnitt „Abfrage“.

![Abfrageoberfläche](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Befehlsbereich

Dieser Bereich ist die Umgebung für die direkte Interaktion mit der Datenbank des Projekts. Hier können Befehle ausgeführt werden, um Daten präzise und sofort abzufragen, zu suchen und zu analysieren.

Stellen Sie sicher, dass die verwendete Syntax mit der in Ihrer Netuno-Umgebung konfigurierten Datenbank kompatibel ist.

![Bereich für Datenbankabfragen](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Validierungsbereich

Der Validierungsbereich bietet sofortiges Feedback zur Syntax und zur Ausführung Ihres Codes.

- **Erfolg (Grün):** Wenn die Abfrage ohne Syntax- oder Strukturfehler ausgeführt wird, wird die Meldung mit grünem Hintergrund angezeigt. Dies zeigt an, dass die Daten verarbeitet wurden und zur Anzeige bereit sind.

![Erfolgreiche Validierung](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Fehlschlag oder Fehler (Rot):** Wenn es irgendeine Behinderung bei der Ausführung gibt (wie Syntaxfehler, falscher Spaltenname oder fehlende Berechtigung), wird die Meldung mit rotem Hintergrund angezeigt. Neben der Farbe zeigt das System das technische Fehlerprotokoll an, um die Diagnose zu unterstützen.

![Fehlgeschlagene Validierung](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Ergebnisbereich

Hier werden die aus der Datenbank abgerufenen Informationen strukturiert dargestellt. Sie ermöglicht es Ihnen, den Inhalt der Tabellen anzuzeigen und zu bestätigen, ob die Logik Ihrer Abfrage die erwarteten Datensätze zurückgibt.

![Ergebnisbereich](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Aktionsschaltflächen

Dieser Abschnitt beschreibt die verfügbaren Werkzeuge zum Ausführen, Speichern und Verwalten Ihrer SQL-Skripte, wodurch der Arbeitsablauf und die Wiederverwendung komplexer Abfragen optimiert werden.

Er ermöglicht nicht nur die Ausführung von Befehlen in Echtzeit, sondern auch eine intelligente Produktivitätsverwaltung durch historische Aufzeichnungen und Bibliotheken gespeicherter Skripte.

![Aktionsschaltflächen](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Schaltfläche - Ausführen

- **Funktion:** Sendet das im Bereich „Befehle“ vorhandene Skript zur Verarbeitung an die Datenbank.

- **Rückmeldung:** Nach der Ausführung zeigt das System eine Erfolgsmeldung (in Grün) an und füllt automatisch den „Ergebnisbereich“ mit den angeforderten Daten.

### 5.2 Schaltfläche - Verlauf

- **Funktion:** Zeichnet die kürzlich ausgeführten Abfragen auf und zeigt die Ausführungszeit (in Millisekunden) sowie den „Datum/Uhrzeit“-Eintrag jeder Aktion an.

- **Schnellabruf:** Wenn Sie auf einen beliebigen Eintrag in der Verlaufsliste klicken, wird das entsprechende Skript erneut in den Bereich „Befehle“ eingefügt, um ausgeführt oder bearbeitet zu werden.

![Verlaufsschaltfläche](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Schaltfläche - Speichern

**Funktion:** Ermöglicht das Speichern nützlicher Skripte und deren Umwandlung in dauerhafte Vorlagen. Dies ist nützlich für komplexe Abfragen, die häufig ausgeführt werden müssen.

**Schritt-für-Schritt-Anleitung zum Speichern:**

- Wenn das Skript im Editor fertig ist, klicken Sie auf Speichern.

- Geben Sie im modalen Fenster „Befehl speichern“ einen klaren „Namen“ ein, um die Funktion der Abfrage zu identifizieren (z. B. „Produkte nach Preis filtern“).

- Klicken Sie im Modal auf die Schaltfläche Speichern, um das Speichern zu bestätigen.

![Schaltfläche „Befehl speichern“](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Schaltfläche - Register

**Funktion:** Ermöglicht die Auflistung aller zuvor gespeicherten Skripte.

- **Skript laden:** Klicken Sie auf das gewünschte Skript, um es zum Bereich „Befehle“ hinzuzufügen.

- **Löschen:** Verwenden Sie das Papierkorb-Symbol neben jedem Eintrag, um ihn nach der Bestätigung endgültig zu entfernen.

![Register gespeicherter Befehle](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)