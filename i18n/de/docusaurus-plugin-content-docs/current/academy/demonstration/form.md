---
sidebar_position: 3
id: form
title: Formular
---


# Formular

In diesem Schritt der Demonstration erstellen Sie das Formular **Aufgabe** und konfigurieren das erste Datenfeld.

:::info Referenz
Eine ausführlichere Erklärung zu Formularen finden Sie im [Leitfaden zur Benutzeroberfläche: Formulare](/docs/academy/ui/forms).
:::

## Ziel

Wenn Sie diesen Schritt abschließen, haben Sie:

- Ein Formular namens **Aufgabe**.
- Eine zugeordnete Tabelle in der Datenbank.
- Ein Pflichtfeld zum Speichern des Aufgabennamens.
- Eine Oberfläche, die bereit ist, Datensätze zu erstellen, zu bearbeiten, zu suchen und zu entfernen.

## Voraussetzungen

Stellen Sie sicher, dass:

- Die Demo-Anwendung bereits erstellt wurde.
- Der Konfigurationsschritt bereits abgeschlossen wurde.
- Sie sich im Entwicklungsbereich der Plattform befinden.

## Formular erstellen

1. Klicken Sie oben rechts auf **Erstellen**.
2. Öffnen Sie im Hauptmenü **Verwaltung > Formulare**.
3. Geben Sie unter **Formulartitel** `Aufgabe` ein.
4. Aktivieren Sie unter **Tabellenname** die Option **Auto**.
5. Klicken Sie auf **Speichern**.

:::note
- **Formulartitel** legt den im Seitenmenü angezeigten Namen fest.
- **Tabellenname** legt den technischen Bezeichner fest, der in der Datenbank verwendet wird.
:::

Nach dem Speichern ist das Formular **Aufgabe** im linken Seitenmenü verfügbar.

## Erstes Feld erstellen

Nachdem das Formular erstellt wurde:

1. Klicken Sie im Seitenmenü auf **Aufgabe**.
2. Geben Sie unter **Anzeigename** `Name` ein.
3. Bestätigen Sie, dass der technische Name automatisch in Kleinbuchstaben generiert wurde.
4. Aktivieren Sie die Option **Primärschlüssel** (eindeutiges Feld).
5. Aktivieren Sie die Option **Nicht Null** (Pflichtfeld).
6. Wählen Sie unter **Typ** `text` aus.
7. Klicken Sie auf **Speichern**.

:::tip
- **Primärschlüssel** gewährleistet eindeutige Werte für jeden Datensatz.
- **Nicht Null** macht die Eingabe verpflichtend.
- Der Typ `text` ermöglicht das Speichern von einfachem Text.
:::

## Ergebnis validieren

Öffnen Sie den Vorschaubereich und bestätigen Sie, dass:

- Das Formular **Aufgabe** verfügbar ist.
- Das Feld **Name** zum Ausfüllen angezeigt wird.
- Es möglich ist, einen neuen Datensatz zu erstellen.
- Das Feld **Name** verpflichtend ist.

:::info Erwartetes Ergebnis
Wenn die Konfiguration korrekt ist, ist das Formular bereit für Vorgänge zum Erstellen, Bearbeiten, Suchen und Entfernen von Datensätzen.
:::

## Nächste Schritte

Fahren Sie mit dem nächsten Schritt **Datenbank** fort, um die Demo-Anwendung zu erkunden und zu ändern.