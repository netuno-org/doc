---
sidebar_position: 3
id: fields
title: Felder
---



Felder sind die grundlegenden Komponenten und die „Bausteine“ eines Formulars in Netuno. Sie bilden die Schnittstelle zur Interaktion mit dem Benutzer und legen fest, wie die Daten strukturiert und gespeichert werden.

In der Praxis entspricht jedes erstellte Feld einer Spalte in der Datenbanktabelle und bestimmt, welche Art von Information das System verarbeiten kann – etwa Texte, Zahlen, Datumsangaben, Auswahlen und Dateien.

### Felder erstellen und bearbeiten

Diese Schaltflächen ermöglichen die Verwaltung des allgemeinen Bearbeitungsstatus:

- **Vorhandenes Feld bearbeiten:** Dropdown-Menü, um ein bereits erstelltes Feld auszuwählen und seine Einstellungen zu ändern.

- **Neues Feld erstellen:** Leert alle Formularfelder, um die Konfiguration eines neuen Elements von Grund auf zu starten.

- **Feld klonen:** Dupliziert die Einstellungen des ausgewählten Feldes, um die Erstellung ähnlicher Elemente zu beschleunigen.

![feld-vorhandenes-bearbeiten-de.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Titel des Feldes

Der Feldtitel (technisch als Label bekannt) ist die visuelle Anweisung, die den Benutzer darüber informiert, welche Information in ein Formular eingegeben werden soll. Er fungiert als identifizierende Beschriftung und stellt sicher, dass das Ausfüllen der Daten intuitiv und korrekt erfolgt.

In diesem Schritt hat der Titel auf der Plattform einen doppelten Zweck:

- **In der Feldverwaltung (Erstellen):** Dient dazu, das Feld während der Entwicklung der Anwendung innerhalb Ihrer Elementliste zu identifizieren.

![feld-titel-name-de.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **In der Benutzeroberfläche (Anzeigen):** Ist der Text, der direkt über oder neben dem Eingabefeld (Input) angezeigt wird und dem Endbenutzer angibt, was er in das Formular eingeben soll.

![feld-titel-name-inhalt-de.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Spaltenname

Anders als der Titel ist der **Spaltenname** der interne und exklusive Identifikator des Feldes, der direkt in der Datenbank und in Programmlogiken verwendet wird. Über diesen Namen lokalisiert das System die Information in der Datenbank.

**Automatische Formatierung (Auto-Schalter):**

Netuno erleichtert diesen Prozess, indem der Name automatisch auf Basis des „Titel des Feldes“ ausgefüllt wird. Das verwendete Muster ist snake_case.

**Schreibregeln:** Falls Sie sich für manuelles Ausfüllen entscheiden (indem Sie „Auto“ deaktivieren), behalten Sie den Namen im Singular bei, verwenden Sie nur Kleinbuchstaben und vermeiden Sie Leerzeichen oder Sonderzeichen.

![feld-spaltenname-de.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Datentypen

Die Definition des **Datentyps** bestimmt die Art der erfassten Information und wirkt sich direkt auf das Erscheinungsbild des Feldes für den Benutzer sowie darauf aus, wie die Daten im System gespeichert werden.

![feld-datentyp-de.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Textfelder

Diese Felder sind für die Eingabe von Text in unterschiedlichen Formaten vorgesehen. Sie variieren je nach benötigtem Datenvolumen.

| Typ | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| text | Erstellt ein einfaches Input-Feld für eine einzelne Zeile. | Namen, Artikeltitel, Stadtteile usw. |
| textarea | Erstellt ein größeres Textbereichs-Input-Feld für mehrere Zeilen. | Produktbeschreibungen, Kommentare, Anmerkungen. |
| email | Erstellt ein Text-Input-Feld, das für den Empfang einer E-Mail-Adresse formatiert ist. | Registrierung einer Kontakt-E-Mail, Benutzeranmeldung. |
| texthtml | Erstellt einen Rich-Text-Editor, der Formatierung mit HTML ermöglicht. | Erstellung von Inhalten für einen Blog, Marketing-E-Mails, Website-Seiten. |
| textmd | Erstellt einen Texteditor, der die Auszeichnungssprache Markdown unterstützt. | Ideal für technische Dokumentation, Blogbeiträge für Entwickler. |

### 3.2 Zahlenfelder

Werden verwendet, um Informationen zu erfassen, die ausschließlich numerisch sind.

| Typ | Was bewirkt es? | Anwendungsbeispiel |
| :--- | :--- | :--- |
| textnum | Erstellt ein Input-Feld für die Eingabe ganzer Zahlen. | Lagerbestand, Alter einer Person, Anzahl freier Stellen. |
| textfloat | Erstellt ein Input-Feld für die Eingabe von Zahlen mit Dezimalstellen. | Produktpreise (z. B. 99,90), Gewicht (z. B. 75,5), Größe (z. B. 1,82). |

### 3.3 Auswahlfelder

Werden verwendet, wenn der Benutzer zwischen vordefinierten Optionen wählen soll.

| Typ | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| select | Erstellt eine Optionsliste, aus der der Benutzer nur eine Option auswählen kann. | Auswahl eines Bundeslands (UF), Familienstands, einer Produktkategorie. |
| multiselect | Erstellt eine Optionsliste, aus der der Benutzer mehrere Optionen auswählen kann. | Auswahl von Interessen (Sport, Technologie), Zutaten einer Pizza. |
| checkbox | Zeigt ein einzelnes Kontrollkästchen an (aktivieren/deaktivieren). | „Ich akzeptiere die Nutzungsbedingungen“, „Mein Passwort merken“. |
| color | Zeigt eine visuelle Farbauswahl an. | Auswahl der Farbe eines Produkts, Anpassen der Farbe einer Veranstaltung. |

### 3.4 Datums- und Zeitfelder

Spezialisiert auf die Eingabe zeitlicher Informationen.

| Typ | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| date | Zeigt einen Kalender an, in dem der Benutzer ein Datum (Tag, Monat, Jahr) auswählen kann. | Geburtsdatum, Termindatum. |
| datetime | Ermöglicht die Auswahl eines Datums und einer Uhrzeit. | Beginn einer Veranstaltung, Datum und Uhrzeit einer Veröffentlichung. |
| time | Ermöglicht die Auswahl einer Uhrzeit (Stunden und Minuten). | Öffnungszeiten, Uhrzeit eines Weckers. |

### 3.5 Datei- und Medienfelder

Wird verwendet, um Dateien und Bilder in Ihre Anwendung hochzuladen.

| Typ | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| file | Erstellt ein Feld für den Upload einer beliebigen Datei (PDF, DOCX, ZIP). | Anhängen eines Lebenslaufs, Hochladen eines Zahlungsbelegs. |
| image | Ein für den Upload von Bildern (JPG, PNG, GIF) optimiertes Feld. | Profilfoto des Benutzers, Bild eines Produkts. |

### 3.6 Technische und spezielle Felder

Diese Felder haben automatische Verhaltensweisen oder dienen spezifischen Systemzwecken.

| Typ | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| hidden | Das Feld ist für den Benutzer unsichtbar, speichert aber einen Wert. | Speichern einer ID, die von einer anderen Seite kommt, eines Tracking-Codes. |
| uid | Generiert automatisch einen universell eindeutigen Identifikator. | Primärschlüssel eines Datensatzes, eindeutiger Code einer Bestellung. |
| user | Verknüpft den Datensatz mit dem Benutzer, der ihn erstellt oder geändert hat. | Identifizieren des Autors eines Blogposts, des Verkäufers, der einen Kunden registriert hat. |
| lastchange | Speichert automatisch Datum und Uhrzeit der letzten Änderung des Datensatzes. | Auditierung, um zu wissen, wann ein Wert zuletzt geändert wurde. |
| group | Wird verwendet, um andere Felder im Formular visuell zu gruppieren. | Erstellen von Abschnitten wie „Persönliche Daten“ und „Adresse“, um lange Formulare zu organisieren. |

## 4 - Einstellungen für Verhalten und Layout

Dieser Bereich ist das „Kontrollpanel“ Ihres Feldes und legt die Geschäftsregeln und Zugriffsberechtigungen fest.

![feld-verhalten-und-layout-einstellungen-de.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Regeln zur Datenintegrität

Diese Optionen gewährleisten die Qualität und Konsistenz der Informationen.

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Eindeutige Werte (Primärschlüssel) | Macht das Feld zum primären und eindeutigen Identifikator und verhindert doppelte Werte. | Für „Steuer-ID“ verwenden, um sicherzustellen, dass keine zwei Kunden dieselbe Nummer haben. |
| Pflichtfeld (Nicht Null) | Macht das Ausfüllen des Feldes verpflichtend. | Auf wesentliche Felder wie „Name“ und „E-Mail“ anwenden. |

### 4.2 Berechtigungs- und Sichtbarkeitskontrolle

Legt fest, wo und wie Benutzer mit den Daten dieses Feldes interagieren.

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Im Ergebnis anzeigen | Legt fest, ob die Spalte in der Hauptdatenliste angezeigt wird. | Bei „Interne Anmerkungen“ deaktivieren, um die Liste übersichtlich zu halten. |
| Filtern erlauben | Fügt dieser Spalte in der Liste ein Suchfeld hinzu. | Bei „Bestellstatus“ aktivieren, um die Suche zu erleichtern. |
| Anzeigen erlauben | Steuert, ob der Inhalt im Ansichtsmodus angezeigt wird. | In den meisten Fällen aktiviert lassen. |
| Bearbeiten erlauben | Ermöglicht, den Inhalt zu ändern, während ein Datensatz bearbeitet wird. | Für Felder deaktivieren, die nicht geändert werden sollen, wie „Registrierungsdatum“. |
| Bei Neuanlage erlauben | Legt fest, ob das Feld im Erstellungsformular angezeigt werden soll. | Für „Feedback“-Felder deaktivieren, die erst *nach* der Erstellung ausgefüllt werden sollen. |
| Exportieren erlauben | Schließt die Daten dieses Feldes beim Exportieren der Liste (Excel, CSV) ein. | Interne Daten deaktivieren, die für externe Berichte nicht relevant sind. |

## 5 - Visuelle Organisation des Formulars

Legt die Positionierung der Felder im Layout fest.

![feld-visuelle-organisation-formular-de.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Zeile | Legt die vertikale Position des Feldes im Formular fest. | „Vollständiger Name“ in Zeile: 1 und „Adresse“ in Zeile: 2 platzieren. |
| Spalte | Legt die horizontale Position fest und ermöglicht mehrere Felder nebeneinander. | Um „Stadt“ und „Bundesland“ zusammen zu haben, Zeile: 3, Spalte: 1 (Stadt) und Spalte: 2 (Bundesland) verwenden. |

## 6 - Weitere Optionen anzeigen

Für eine individuellere Steuerung klicken Sie auf die Schaltfläche „+ Weitere Optionen anzeigen“.

### 6.1 Beschreibungsfeld

![feld-optionen-beschreibung-de.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Beschreibung | Fügt einen Hilfetext oder eine Anweisung hinzu, der bzw. die unter dem Feld angezeigt wird. | Bei „Passwort“ die Beschreibung verwenden, um die Regeln anzugeben: „Das Passwort muss mindestens 8 Zeichen lang sein ...“. |

### 6.2 Feldabmessungen

![feld-dimensionierung-layout-de.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Feine Steuerung der Feldgröße.

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Breite | Legt die Breite der Komponente fest (basierend auf einem 12-Spalten-Raster). | „Steuer-ID“ (Breite: 6) und „Geburtsdatum“ (Breite: 6) in derselben Zeile. |
| Höhe | Legt die Höhe der Komponente in Pixeln (px) fest. | Bei `textarea` „Anmerkungen“ die Höhe „120“ für einen größeren Bereich festlegen. |
| Zellenbreite (px) | Legt eine feste Breite in Pixeln für die Zelle fest. | Verwenden, um Felder mit bestimmten Breiten auszurichten, wie „Bundesland“ (Breite: 80). |
| Zellenhöhe (px) | Legt eine feste Höhe in Pixeln für die Zelle fest. | Die Höhe eines `image`-Feldes erhöhen, um einen „Drag-and-Drop“-Bereich zu schaffen. |
| Rowspan | Ermöglicht, dass sich die Zelle vertikal über mehrere Zeilen erstreckt. | Ein `textarea` für „Beschreibung“, das 3 Zeilen hoch ist und neben kleineren Feldern steht. |
| Colspan | Ermöglicht, dass sich die Zelle horizontal über mehrere Spalten erstreckt. | Ein Feld „Vollständige Adresse“ (Colspan: 2) über „Stadt“ und „Bundesland“. |

### 6.3 Validierung und Datenregeln

Legen Sie Grenzen für die eingegebenen Werte fest.

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Max | Maximalwert (numerisch) oder maximale Zeichenanzahl (Text). | Bei „Note (0 bis 10)“ Max als „10“ festlegen. Bei „Spitzname“ Max „20“. |
| Min | Minimalwert (numerisch) oder minimale Zeichenanzahl (Text). | Bei „Menge“ Min als „1“ festlegen. Bei „Begründung“ Min „30“. |

### 6.4 Zugriffskontrolle 

![feld-zugriffskontrolle-de.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Legen Sie Gruppen und Benutzer fest, die das Feld anzeigen und bearbeiten können.

| Einstellung | Was bewirkt es? | Praxisbeispiel |
| :--- | :--- | :--- |
| Benutzeransicht und Gruppenansicht | Beschränkt die *Anzeige* des Feldes auf die angegebenen Benutzer oder Gruppen. | „Verkäuferprovision“ hat Gruppenansicht „Manager“. |
| Benutzerbearbeitung und Gruppenbearbeitung | Ermöglicht, dass nur die angegebenen Benutzer oder Gruppen das Feld *bearbeiten* (andere sehen es als „schreibgeschützt“). | „Bestellstatus“ hat Gruppenbearbeitung „Logistik“. |