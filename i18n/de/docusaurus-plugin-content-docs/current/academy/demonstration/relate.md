---
sidebar_position: 5
id: relate
title: Daten verknüpfen
description: Verknüpfen Sie Aufgaben und Zeiteinträge, um zu wissen, wer welche Aufgabe ausgeführt hat und wie viel Zeit aufgewendet wurde.
---

# Daten verknüpfen

Erstellen Sie eine Beziehung zwischen Aufgaben und Zeiteinträgen, um zu wissen, **wer** **welche Aufgabe** ausgeführt hat und **wie viel Zeit** aufgewendet wurde.

Am Ende dieses Schritts ist das Formular **Zeiteintrag** mit der Tabelle **Aufgabe** verknüpft, sodass die zugehörige Aufgabe direkt in der Eintragsliste angezeigt werden kann.

## Voraussetzungen

Bevor Sie beginnen, vergewissern Sie sich, dass Sie Folgendes bereits abgeschlossen haben:

- Die Erstellung des Formulars **Aufgabe** mit dem Feld `name`.
- Die Erstellung des Formulars **Zeiteintrag** mit den grundlegenden Feldern für Arbeitsstunden.
- Die Konfiguration der entsprechenden Tabellen in der **Datenbank**.

:::tip
Weitere Details zum Verknüpfen von Daten finden Sie im [Leitfaden zur Benutzeroberfläche: Beziehungen](/docs/academy/ui/relationships-between-forms).
:::

Bis hierher haben Sie eine Aufgabenverwaltung und eine Zeiterfassung erstellt, aber jede Liste funktioniert noch isoliert.  

Es ist wichtig, sie zu verknüpfen, sodass jeder Zeiteintrag klar angibt, welche Aufgabe von einem Mitarbeiter in welchem Zeitraum ausgeführt wurde.

In diesem Schritt werden Sie:

- Ein Feld vom Typ `select` im Formular **Zeiteintrag** erstellen.
- Das Feld so konfigurieren, dass es mit der Tabelle **Aufgabe** verknüpft ist.
- Einige Daten aktualisieren, um die Beziehung in der Praxis zu sehen.

## Feld vom Typ `select`

Fügen Sie ein Feld hinzu, mit dem die jedem Zeiteintrag zugeordnete Aufgabe ausgewählt werden kann.

1. Öffnen Sie in der Umgebung **Erstellen** das Formular **Zeiteintrag** und rufen Sie die Feldverwaltung auf.
2. Erstellen Sie ein neues Feld mit den folgenden Einstellungen:
   - **Feldtitel**: `Aufgabe`
   - **Spaltenname**: `aufgabe_id`
   - **Typ**: `select`
3. Aktivieren Sie die Option **Pflichtfeld**, um sicherzustellen, dass jeder Eintrag einer Aufgabe zugeordnet ist.
4. Lassen Sie die Option **Eindeutige Werte** deaktiviert, da es viele Einträge für dieselbe Aufgabe geben wird.

:::note
Wir empfehlen den Namen `aufgabe_id`, um einen konsistenten Namensstandard im gesamten Datenmodell beizubehalten.
:::

## Das Suffix `_id` verwenden

Der Name des Feldes, das auf einen anderen Datensatz verweist, sollte mit `_id` enden.  
Dieses Muster erleichtert die Erkennung, dass das Feld eine Beziehung zu einer anderen Tabelle darstellt, und macht das Datenmodell übersichtlicher.

:::warning
Vermeiden Sie generische Namen wie `aufgabe` oder `ref_aufgabe` für Beziehungsfelder.  
Die Standardisierung mit `_id` hilft, Verwirrung bei der Datenanalyse oder beim Erstellen von Integrationen zu vermeiden.
:::

## Die Beziehungsverknüpfung konfigurieren

Konfigurieren Sie den **Link**, der das Feld `aufgabe_id` mit der Aufgabentabelle verknüpft.

1. Scrollen Sie im neu erstellten Feld (`aufgabe_id`) bis zum Konfigurationsabschnitt **Link**.
2. Klicken Sie auf **Hinzufügen**.
3. Im sich öffnenden Fenster:
   - Wählen Sie die Option **aufgabe**.
   - Wählen Sie anschließend das Feld **name**.
   - Schließen Sie das Fenster, um die Auswahl zu übernehmen.

Nach Abschluss wird der **Link** wie folgt definiert:

```text
aufgabe:name
```

Dies bedeutet:

- Die Beziehung wird zur Tabelle **aufgabe** hergestellt.
- In der Oberfläche wird beim Auswählen im Feld `Aufgabe` der Wert des Feldes **name** der Aufgabe angezeigt.

Klicken Sie auf **Speichern**, um die Feldkonfiguration zu speichern.

:::tip
Verwenden Sie nach Möglichkeit ein beschreibendes Feld (wie `name`), um die zugehörige Information anzuzeigen, anstatt eines technischen oder numerischen Bezeichners.
:::

## Einträge aktualisieren

Nachdem das Beziehungsfeld konfiguriert ist, passen Sie die Daten an, um das Ergebnis anzuzeigen.

1. Rufen Sie die Ansicht des Formulars **Zeiteintrag** auf.
2. Beachten Sie, dass die Ergebnistabelle jetzt eine neue Spalte **Aufgabe** enthält, die anfangs leer ist.
3. Bearbeiten Sie einige Einträge:
   - Klicken Sie auf eine Zeile in der Ergebnistabelle, um das Bearbeitungsformular zu öffnen.
   - Wählen Sie im Feld **Aufgabe** die entsprechende Aufgabe aus.
   - Klicken Sie auf **Speichern**, um zu speichern.

**Nach dem Speichern:**

- Die Spalte **Aufgabe** in der Ergebnistabelle zeigt nun den Namen der zugehörigen Aufgabe an.
- Jeder **Zeiteintrag** ist klar einer **Aufgabe** zugeordnet, was eine vollständigere Analyse der für jede Tätigkeit aufgewendeten Zeit ermöglicht.

:::note
Falls viele Einträge ohne definierte Aufgabe vorhanden sind, sollten Sie die Aktualisierung in Stapeln vornehmen oder gemäß Ihrer Datenrichtlinie eine temporäre Standardaufgabe festlegen.
:::

### Erwartetes Ergebnis

Die Auflistung von **Zeiteintrag** sollte Folgendes anzeigen:

- Eine Spalte **Aufgabe**, die mit den Namen der zugehörigen Aufgaben gefüllt ist.
- Jede Zeile stellt einen Zeiteintrag mit seiner jeweiligen Aufgabe dar, wodurch leichter erkennbar ist, wohin die Zeit investiert wurde.

## Nächste Schritte

Im nächsten Thema erfahren Sie, wie Sie einen **Service** erstellen, um diese Daten bereitzustellen und sie in anderen Teilen der Anwendung zu verwenden, etwa in Berichten oder benutzerdefinierten Oberflächen.