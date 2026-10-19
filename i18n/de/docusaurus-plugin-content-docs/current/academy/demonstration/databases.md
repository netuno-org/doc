---
sidebar_position: 4
id: databases
title: Datenbank
---

# Datenbank

In diesem Schritt untersuchen wir die **Datenbank**, die automatisch aus dem zuvor definierten Formular **Aufgabe** erstellt wurde.

Beim Erstellen des Formulars **Aufgabe** mit dem Feld **Name** hat Netuno in der Datenbank die Tabelle `aufgabe` mit der Spalte `name` entsprechend den bei der Formularerstellung definierten Namen angelegt.

Die **technischen Namen** der Felder (z. B. `aufgabe`, `name`, `aufgabe_id`) werden in der Programmierung und in SQL-Abfragen verwendet und entsprechen nicht den in der Oberfläche angezeigten Anzeigenamen.

## Abfragen

In diesem Abschnitt führen wir Abfragen direkt in der Datenbank über die Verwaltungsoberfläche von Netuno aus.

1. Rufen Sie die Umgebung **Erstellen** auf.
2. Klicken Sie im Menü auf **Verwaltung > Abfrage**.
3. Fügen Sie im Abfrage-Editor die folgenden Befehle ein und führen Sie sie aus.

### Einfache Abfragen

Listen Sie nur den Namen der Aufgaben auf:

```sql
SELECT name
FROM aufgabe;
```

Listen Sie alle Felder der Aufgabentabelle auf:

```sql
SELECT *
FROM aufgabe;
```

Listen Sie alle Felder der Eintragstabelle auf:

```sql
SELECT *
FROM eintrag;
```

Listen Sie alle Felder der Mitarbeitertabelle auf:

```sql
SELECT *
FROM mitarbeiter;
```

Wenn Sie auf **Ausführen** klicken, erzeugt Netuno für **jeden** durch ein Semikolon (`;`) getrennten Befehl eine Ergebnistabelle.  
Das ist nützlich, wenn Sie mehrere Abfragen auf einmal ausführen möchten.

### Abfrage mit Beziehungen

Führen Sie nun eine Abfrage aus, die alle Tabellen verknüpft:

```sql
SELECT
  aufgabe.name,
  eintrag.start,
  eintrag.ende,
  mitarbeiter.name
FROM aufgabe
INNER JOIN eintrag
  ON aufgabe.id = eintrag.aufgabe_id
INNER JOIN mitarbeiter
  ON mitarbeiter.id = eintrag.mitarbeiter_id;
```

Diese Abfrage gibt zurück:

- Den Namen der Aufgabe.
- Den Start und das Ende jedes Eintrags.
- Den Namen des Mitarbeiters, der jedem Eintrag zugeordnet ist.

Sie zeigt, wie Beziehungen zwischen Tabellen es ermöglichen, Informationen aus verschiedenen Entitäten der Anwendung zu kombinieren.

## Diagramm

Um die Struktur der Datenbank intuitiver zu visualisieren, verwenden Sie das **Diagramm** von Netuno.

1. Rufen Sie die Umgebung **Erstellen** auf.
2. Klicken Sie im Menü auf **Verwaltung > Diagramm**.

Im Diagramm können Sie:

- Den Zoom vergrößern oder verkleinern.
- Das Diagramm als Bild exportieren.

Diese Aktionen sind über Schaltflächen auf der rechten Seite des Diagrammbereichs verfügbar.

Netuno erstellt automatisch die Linien mit Beziehungspfeilen basierend auf der Konfiguration von **Verknüpfungen** in den Feldern (z. B. Felder vom Typ `select`, die auf andere Tabellen verweisen).

## Bewährte Praktiken

Befolgen Sie beim Modellieren Ihrer Datenbank in Netuno diese bewährten Praktiken:

- Verwenden Sie das Suffix `_id` für Felder, die Beziehungen darstellen, zum Beispiel:
  - `aufgabe_id`
  - `mitarbeiter_id`
- Vermeiden Sie Pluralnamen für Tabellen und Felder wie `aufgaben`, `eintraege` oder `mitarbeiter`.

Die Vermeidung des Plurals hilft dabei:

- Die Namen kürzer und lesbarer zu halten.
- Mehrdeutigkeiten beim Schreiben von Abfragen zu reduzieren.
- Die Lesbarkeit in Formularen und Diagrammen zu erleichtern, insbesondere wenn mehrere Beziehungen vorhanden sind.

:::tip Namenskonvention
Verwenden Sie standardmäßig immer **Namen im Singular** für Formulare, Tabellen und Felder.  
Beispiele: `aufgabe`, `eintrag`, `mitarbeiter`, `aufgabe_id`, `mitarbeiter_id`.
:::

## Nächster Schritt

Fahren Sie mit dem nächsten Schritt **Daten verknüpfen** fort, um mit der Demo-Anwendung weiterzumachen.