---
sidebar_position: 5
id: relationships-between-forms
title: Beziehungen zwischen Formularen
sidebar_label: Beziehungen
---

## So erstellen Sie Beziehungen zwischen Formularen

Das Erstellen von Beziehungen zwischen Formularen ist eine wesentliche Funktion, um Informationen intelligent zu organisieren. Durch die Verknüpfung von Formularen entfällt die Notwendigkeit, Daten zu duplizieren, und Sie stellen sicher, dass Ihre Anwendung konsistent, skalierbar und wartbar ist.

Eine der großen Stärken von Netuno ist die Fähigkeit, das Diagramm des Datenmodells automatisch zu generieren.

Beziehungen definieren, wie die Daten verschiedener Tabellen miteinander interagieren. Diese Verbindung wirkt sich direkt auf die Benutzeroberfläche (UI) aus und ermöglicht es Feldern eines Formulars, automatisch Informationen aus einem anderen abzurufen.

**Einfaches Diagramm:** Ideal, um die anfängliche Logik kleiner Module zu validieren.

![einfaches-diagramm-vorlage.png](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Komplexes Diagramm:** Zeigt die Robustheit des Tools bei groß angelegten Anwendungen und bildet mehrere Abhängigkeiten und Datenflüsse ab.
 
![komplexes-diagramm-vorlage.png](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Erstellung eines relationalen Felds vom Typ Select

Das Feld Select erstellt eine Beziehung zwischen zwei Formularen. Es ermöglicht Ihnen, einen Wert aus einer Dropdown-Liste (Dropdown) auszuwählen, anstatt ihn manuell einzugeben. Diese Liste wird mit Daten gefüllt, die bereits in einem anderen Formular vorhanden sind.

Wir verwenden die Formulare **Fahrzeug** und **Farbe** als Beispiel. 

**Wann verwenden?** Verwenden Sie Select, wenn Sie eine Viele-zu-Eins-Beziehung (N-1) haben.

**Beispiel:** Viele Fahrzeuge können eine Farbe haben. Anstatt jedes Mal „Blau“ einzugeben, wählen Sie „Blau“ aus einer Liste bereits registrierter Farben aus.

- **Zielformular:** Fahrzeug (wo wir das Select-Feld erstellen).
- **Quellformular:** Farbe (von wo die Daten für die Farbliste kommen).


### Voraussetzungen
Bevor Sie beginnen, stellen Sie sicher, dass:

- Beide Formulare (**Fahrzeug** und **Farbe**) bereits in Netuno erstellt sind. Weitere Details finden Sie in unserer Anleitung zur [Formularerstellung](/docs/academy/ui/forms).

- Das Quellformular (**Farbe**) bereits einige registrierte Datensätze enthält (z. B. „Blau“, „Rot“, „Silber“). Weitere Details finden Sie in unserer Anleitung zur [Erstellung von Feldern](/docs/academy/ui/fields).

### Select erstellen und konfigurieren

Fügen Sie dem Formular **Fahrzeug** den Feldtyp **select** hinzu, damit es die Daten aus dem Formular **Farbe** „übernehmen“ kann.

![select-feld-erstellen-und-konfigurieren.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Zielformular aufrufen

- Gehen Sie im Backoffice zur Feldverwaltung und öffnen Sie die Bearbeitung des Formulars **Fahrzeug**.
 
#### 2 - Neues Feld erstellen

- Klicken Sie auf „Neues Feld erstellen“.

#### 3 - Feldtitel und Spaltennamen festlegen

- **Feldtitel:** Geben Sie einen benutzerfreundlichen Namen ein, der dem Benutzer angezeigt wird. **Beispiel:** Farbe des Automobils.
- **Spaltenname:** Dies ist der technische Name des Felds in der Datenbank.

**Gute Praxis:** Verwenden Sie beim Erstellen eines relationalen Felds im **Spaltennamen** immer das Suffix `_id`. Dadurch wird klar, dass diese Spalte nicht den Text „Blau“ speichert, sondern die Referenz-ID für den Datensatz „Blau“ im Formular **Farbe**. **Beispiel:** `farbe_automobil_id`.

#### 4 - Datentyp auswählen

- Wählen Sie im Feld **Typ** die Option _`select - select`_ aus der Liste.

#### 5 - Link konfigurieren (die Beziehung)

![link-konfigurieren.png](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- Wenn Sie _`select`_ auswählen, wird ein neues Feld namens **Link** angezeigt.
- Klicken Sie auf die Schaltfläche **Konfigurieren**.
- Ein modales Fenster wird geöffnet, in dem alle Ihre Formulare aufgelistet werden. Jetzt ist der richtige Zeitpunkt, das Quellformular auszuwählen.
- Wählen Sie das Formular aus, das die Daten enthält, die Sie auflisten möchten. Klicken Sie in unserem Beispiel auf **farbe - Farbe**.
- Klicken Sie nach der Auswahl im Modal auf die Schaltfläche **Schließen**.

#### 6 - Änderungen speichern

- Klicken Sie in der Feldverwaltung auf die Schaltfläche **Speichern**, um alle Ihre Einstellungen anzuwenden.

### Ergebnis

Fertig! Wenn Sie jetzt im „Ansichtsmodus“ einen Datensatz im Formular **Fahrzeug** hinzufügen oder bearbeiten, ist das Feld „Farbe des Automobils“ eine Dropdown-Liste, die alle im Formular **Farbe** registrierten Farben anzeigt.

## Erstellung eines relationalen Felds vom Typ Multiselect

Das Feld **Multiselect** erstellt eine Viele-zu-Viele-Beziehung (N-M). Es ermöglicht Ihnen, mehrere Elemente aus einer Liste in einem einzigen Feld auszuwählen.

Wir verwenden die Formulare **Person**, **Funktion** und **Person-Funktion** als Beispiel.

**Wann verwenden?** Verwenden Sie Multiselect, wenn ein Datensatz mit mehreren anderen verknüpft sein kann und umgekehrt.
**Beispiel:** Viele Personen können viele Funktionen haben.

- Eine Person (z. B. „Ana“) kann die Funktionen „Admin“ und „Manager“ haben.
- Die Funktion „Manager“ kann mehreren Personen zugeordnet sein (z. B. „Ana“, „Bruno“ und „Thiago“).

Damit dies funktioniert, benötigen wir drei Formulare:

- **Elternformular (Person):** Hier ist das Feld _`multiselect`_ für den Benutzer sichtbar.
- **Quellformular (Funktion):** Von hier stammen die Optionen der Liste (z. B. „Admin“, „Manager“).
- **Verknüpfungsformular (Person-Funktion):** Ein „Brückenformular“, das die Verbindungen zwischen **Person** und **Funktion** speichert.

### Voraussetzungen
Bevor Sie beginnen, stellen Sie sicher, dass:

- Das „Elternformular“ (**Person**) bereits erstellt ist und einige Datensätze enthält (z. B. „Ana“, „Bruno“, „Lucas“).
- Das „Quellformular“ (**Funktion**) bereits erstellt ist und einige Datensätze enthält (z. B. „Admin“, „Manager“, „Berater“).

### Multiselect erstellen und konfigurieren 
Die Konfiguration erfolgt in 4 Schritten:

### Schritt 1: Verknüpfungsformular erstellen (Person-Funktion)
Zuerst erstellen wir das „Brückenformular“.

1 - **Gehen Sie zu Verwaltung > Formulare** und klicken Sie auf „Neues Formular erstellen“.

2 - **Formulartitel:** Person-Funktion.

3 - **Tabellenname:** person_funktion (oder ähnlich).

4 - **Wichtig:** Wählen Sie im Feld **Übergeordnet** das Haupt-„Elternformular“ aus, in diesem Fall **Person**. Dadurch wird **Person-Funktion** zu einem Unterformular.

5 - Klicken Sie auf **Speichern**.

![elternformular-fuer-die-verknuepfung-erstellen.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Schritt 2: Felder des Verknüpfungsformulars konfigurieren

Fügen Sie dem Formular Person-Funktion die „Brückenfelder“ hinzu.

1 - Öffnen Sie die Feldverwaltung des Formulars Person-Funktion, das Sie gerade erstellt haben.

2 - Fügen Sie zwei Felder vom Typ Select hinzu: eines, das auf Person verweist, und eines auf Funktion.

**Feld 1 (Link zu Person):**

![link-feld-fuer-person.png](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Feldtitel:** Personenname
- **Spaltenname:** `personenname_id` (gemäß der Konvention **_id**)
- **Typ:** `select - select`
- **Link:** Klicken Sie auf **Konfigurieren** und wählen Sie das Hauptfeld des Formulars **Person**, z. B. `person:name`.
- Klicken Sie auf **Speichern**.

**Feld 2 (Link zu Funktion):**

- **Feldtitel:** Funktion der Person. 
- **Spaltenname:** `funktion_person_id`.
- **Typ:** `select - select`.
- **Link:** Klicken Sie auf **Konfigurieren** und wählen Sie das Hauptfeld des Formulars **Funktion**, z. B. `funktion:funktion_id`.
- Klicken Sie auf **Speichern**.

![feld-link-zu-person-funktion.png](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Schritt 3: Multiselect-Feld im „Elternformular“ erstellen

Da die „Brücke“ (**Person-Funktion**) nun fertig ist, können wir zum Formular **Person** zurückkehren, um das endgültige Feld zu erstellen.

1 - Gehen Sie zur Feldverwaltung des Formulars **Person**.

2 - Klicken Sie auf „Neues Feld erstellen“.

3 - **Feldtitel:** Person-Funktion.

4 - **Spaltenname:** _`person_funktion_id`_.

5 - **Typ:** _`multiselect - multiselect`_.


### Schritt 4: Multiselect-Feld konfigurieren

Wenn Sie den Typ _`multiselect`_ auswählen, erscheinen zwei neue Konfigurationsfelder: **Referenz** und **Link**.

#### 1 - Referenz (Wo wird die Beziehung gespeichert?)

 - **Dieses Feld teilt Netuno mit:** „Welches Feld des Brückenformulars verweist auf mich (**Person**) zurück?“
 - Klicken Sie auf **Konfigurieren**.
 - Wählen Sie das Verknüpfungsformular (**Person-Funktion**) und das Feld, das Sie in Schritt 2 (Feld 1) erstellt haben. **Beispiel:** _`person_funktion:personenname_id`_.

#### 2 - Link (Woher kommen die Optionen?)

 - **Dieses Feld besagt:** „Welches Feld des Brückenformulars verweist auf die Optionen (**Funktion**)?“
 - Klicken Sie auf **Konfigurieren**.
 - Wählen Sie das Verknüpfungsformular (**Person-Funktion**) und das Feld, das Sie in Schritt 2 (Feld 2) erstellt haben. **Beispiel:** _`person_funktion:funktion_person_id`_.
  
#### 3 - Änderungen speichern

- Klicken Sie in der Feldverwaltung auf die Schaltfläche **Speichern**, um alle Ihre Einstellungen anzuwenden.

![multiselect-feld-konfigurieren.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Ergebnis

Fertig! Wenn Sie jetzt im „Ansichtsmodus“ einen Datensatz im Formular **Person** hinzufügen oder bearbeiten, erscheint das Feld „Person-Funktion“ als Mehrfachauswahl. Sie können mehrere Funktionen aus der Liste auswählen (die aus dem Formular **Funktion** stammen), und Netuno speichert diese Zuordnungen automatisch im Formular **Person-Funktion**.

Wenn Sie Fragen haben, kontaktieren Sie uns über die Community und die weiteren am Ende dieser Seite verfügbaren Kanäle.

Viel Erfolg bei der Entwicklung!