---
sidebar_position: 2
id: forms
title: Formulare
---

## Wie man Formulare erstellt

Die Formularverwaltung ist der Bereich, in dem Sie die Datenstrukturen Ihrer Anwendung erstellen und verwalten können. Jedes Formular, das Sie hier erstellen, wird zu einer Oberfläche im Backoffice zum Eingeben, Bearbeiten und Anzeigen von Daten und entspricht außerdem einer Tabelle in der Datenbank.

Es ist in zwei wesentliche und obligatorische Schritte unterteilt, ergänzt durch einen kurzen Überblick über die **Gruppierung von Formularen** und den **Diagrammmodus**.

![formularverwaltung-de.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Titel des Formulars

Dies ist der Name Ihres Formulars; geben Sie daher einen klaren und intuitiven Namen ein.
Er wird im Seitenmenü des Backoffice in den folgenden Bereichen angezeigt: **Formulare** (im Modus Anzeigen) und **Felder verwalten** (im Modus Erstellen).

![formularname-titel-de.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Tabellenname

Dies ist der technische Name, der verwendet wird, um die entsprechende Tabelle in der Datenbank zu erstellen. Dieser Name wird intern vom System und von Entwicklern verwendet.

**So füllen Sie es aus:**

- **Manuell:** Geben Sie einen eindeutigen Namen im Singular ein, mit Kleinbuchstaben und ohne Leerzeichen oder Sonderzeichen (verwenden Sie das Format `snake_case`, zum Beispiel: `kunden_registrierung`).
- **Automatisch:** Aktivieren Sie das Kontrollkästchen **Auto** neben dem Feld. Das System generiert automatisch einen technischen Namen basierend auf dem **Titel des Formulars**. Dies ist die empfohlene Vorgehensweise, um Konsistenz zu gewährleisten.
- 

![formularname-tabelle-de.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Gruppierung von Formularen (Übergeordnet)

Dieses Feld ermöglicht es, eine Hierarchie zwischen Formularen zu erstellen. Wenn Sie ein „Übergeordnet“ auswählen, legen Sie fest, dass das aktuelle Formular ein Unterelement des ausgewählten Formulars ist. Es wird im Seitenmenü in den folgenden Bereichen angezeigt: „Formulare“ (im Modus Anzeigen) und „Felder verwalten“ (im Modus Erstellen) des zugehörigen Hauptformulars.

**So füllen Sie es aus:**

- Lassen Sie das Feld leer, wenn dies ein Hauptformular ist (wie „Kunde“).
- Wählen Sie ein vorhandenes Formular aus der Liste aus, wenn Sie eine Abhängigkeitsbeziehung erstellen möchten. Beispielsweise könnte ein Formular „Adressen“ das Formular „Kunde“ als übergeordnet haben.

![formulargruppierung-uebergeordnet-de.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Steuerungsoptionen

Diese Kontrollkästchen aktivieren spezifische Funktionen für das Formular.

- **ID anzeigen:** Aktivieren Sie diese Option, wenn das eindeutige Identifikationsfeld (ID) jedes Datensatzes in der Datenauflistung des Formulars sichtbar sein soll.
- **Steuerung nach Aktivstatus:** Aktiviert eine Statussteuerung (Aktiv/Inaktiv) für jeden Datensatz. Dadurch können Sie ein Element deaktivieren, ohne es aus der Datenbank löschen zu müssen.
- **Steuerung nach Benutzer:** Bewirkt, dass jeder im Formular erstellte Datensatz dem Benutzer zugeordnet wird, der ihn erstellt hat. Dies ist nützlich, um nachzuverfolgen, wer die jeweilige Registrierung vorgenommen hat.
- **Steuerung nach Gruppe:** Ordnet jeden Datensatz einer Benutzergruppe zu. Diese Option wird häufig verwendet, um Zugriffsberechtigungen auf Daten basierend auf den im System registrierten Gruppen zu verwalten.

![formular-steuerungsoptionen-de.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Sortiereinstellungen und zugeordnete Benutzer

Diese Felder legen Standardwerte für neue Datensätze und die Anzeigereihenfolge fest.

- **Neu ordnen:** Legen Sie eine Zahl für die Reihenfolge fest, in der dieses Formular im Seitenmenü angezeigt wird. Kleinere Zahlen (wie 0, 1, 2) erscheinen zuerst.
- **Benutzer:** Wählen Sie einen Standardbenutzer aus, der neuen Datensätzen zugeordnet wird, falls die „Steuerung nach Benutzer“ aktiviert ist. „Allgemein“ bedeutet, dass kein bestimmter Benutzer vorhanden ist.
- **Gruppe:** Wählen Sie eine Standardgruppe aus, die neuen Datensätzen zugeordnet wird, falls die „Steuerung nach Gruppe“ aktiviert ist. „Allgemein“ bedeutet, dass keine bestimmte Gruppe vorhanden ist.

![formular-sortiereinstellungen-und-zugeordnete-benutzer-de.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Diagrammmodus

Der Bildschirm **Diagramm** bietet eine grafische Visualisierung der gesamten Datenstruktur Ihrer Anwendung. Bekannt als Entitäts-Beziehungs-Diagramm (ERD), zeigt er alle Formulare (die Tabellen in der Datenbank repräsentieren), ihre jeweiligen Felder und die Verbindungen zwischen ihnen an.
Dieses Tool ist entscheidend, um schnell zu verstehen, wie die Informationen Ihrer Anwendung organisiert und verbunden sind, was Analyse und Entwicklung erleichtert.

![formular-diagramm-de.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Versuchen Sie, mehrere Formulare und Felder zu erstellen, und betrachten Sie sie im Diagrammmodus!

## Nächster Schritt

Speichern Sie das Formular und fahren Sie mit dem nächsten Schritt fort: der Erstellung von Feldern!

Sehen Sie [hier](/docs/academy/ui/fields), wie Sie mit der Erstellung von Feldern beginnen.