---
sidebar_position: 6
id: groups-users
title: Gruppen und Benutzer
---

## Erstellung und Bearbeitung

Dieser Abschnitt ist das administrative Zentrum Ihrer Anwendung. Hier verwalten Sie die Anmeldedaten, die Berechtigungsstufen und auditieren die im System durchgeführten Aktivitäten, um sicherzustellen, dass jeder Benutzer genau auf das zugreifen kann, was er benötigt.

#### Voraussetzungen
- **Zugriff auf Netuno:** Sie müssen in Ihrer Instanz angemeldet sein und über Administratorberechtigungen verfügen.
- **Erstellte Anwendung:** Es ist erforderlich, dass zuvor eine Anwendung erstellt wurde. Mehr dazu: [Benutzeroberflächen-Anleitung: Anwendung erstellen](/docs/academy/app-create).
- **Formulare:** Erstellen Sie mindestens ein oder zwei Formulare. Mehr dazu: [Benutzeroberflächen-Anleitung: Formular erstellen](/docs/academy/ui/forms).

### Menü

Ermöglicht den Zugriff auf die Einstellungen für die Verwaltung von Sicherheit, Benutzern, Gruppen und die Überwachung von Protokollen.

![zugriff-auf-menue-de.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Rufen Sie den „Ansichtsmodus“ auf und klicken Sie in der rechten oberen Ecke des Bildschirms auf „Developer“.

## Passwort

Ermöglicht die Änderung des Systemzugangspassworts.

Klicken Sie in der rechten oberen Ecke des Bildschirms auf „Developer“ und rufen Sie den Abschnitt „Passwort“ auf.

- Geben Sie Ihr altes Passwort ein.
- Geben Sie Ihr neues Passwort ein. **Es muss mindestens 8 Zeichen enthalten, darunter Zahlen, Groß- und Kleinbuchstaben sowie Sonderzeichen.**
- Bestätigen Sie das Passwort und klicken Sie auf die Schaltfläche **Speichern**.
- Danach wird eine Erfolgsmeldung angezeigt.

![passwort-de.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Benutzer

Dieser Abschnitt ist das Kontrollzentrum für die Verwaltung von Benutzerprofilen.

Klicken Sie in der rechten oberen Ecke des Bildschirms auf „Developer“ und rufen Sie den Abschnitt „Benutzer“ auf.

#### Voraussetzungen

- Der zu bearbeitende Benutzer muss zuvor in der Datenbank registriert sein.

 ### 1 - Bestehenden Benutzer bearbeiten

Dieser Abschnitt beschreibt, wie Sie die Informationen eines Benutzers finden und aktualisieren, der bereits im System registriert ist.

![bestehenden-benutzer-bearbeiten-de.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**So bearbeiten Sie einen Benutzer:**

- Wählen Sie einen registrierten Benutzer aus und ändern Sie die gewünschten Informationen.
- Klicken Sie auf die Schaltfläche **Speichern**, um die Änderung zu bestätigen.
- Danach wird eine Erfolgsmeldung angezeigt.

### 2 - Neuen Benutzer hinzufügen

Dieser Abschnitt ermöglicht das Registrieren neuer Benutzer, wobei deren Anmeldedaten und Berechtigungsstufen im System festgelegt werden.

![neuen-benutzer-erstellen-de.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Name:** Geben Sie den Namen des Benutzers ein.
- **Benutzer:** Geben Sie den Anmeldenamen ein – er darf nur aus Kleinbuchstaben bestehen, die durch einen Punkt getrennt sind.
- **Passwort:** Geben Sie das erste Systemzugangspasswort des neuen Benutzers ein.
- **E-Mail:** Geben Sie die Kontakt-E-Mail-Adresse ein.
- **Keine:** Ermöglicht das Sperren des Benutzerpassworts, sodass keine Anmeldung erfolgt.
- **Gruppe:** Wählen Sie die Hauptgruppe aus, zu der der Benutzer gehört.
- **Aktiv:** Ermöglicht das Aktivieren oder Deaktivieren eines Benutzers im System.
- **Schaltfläche Speichern:** Klicken Sie, um die Informationen des neuen Benutzers zu speichern.

### 3 - Benutzerberechtigungen

Die Berechtigungsverwaltung erfolgt über eine intuitive, nach Registerkarten organisierte Oberfläche **(Formulare und Berichte)**.

Dadurch können Sie detailliert konfigurieren, worauf der Benutzer direkt nach seiner Erstellung oder während einer Bearbeitung zugreifen kann.

In den Spalten **Lesen, Schreiben und Löschen,** finden Sie ein Dropdown-Menü mit unterschiedlichen Reichweitenstufen:

- **Nichts:** Der Benutzer hat keine Berechtigung für diese Aktion.
- **Eigentümer:** Der Benutzer kann nur mit Datensätzen interagieren, die er selbst erstellt hat.
- **Gruppe:** Der Benutzer kann mit Datensätzen interagieren, die von einem beliebigen Mitglied seiner Gruppe erstellt wurden.
- **Alles:** Vollständige Berechtigung. Der Benutzer greift auf die Datensätze aller Benutzer und Gruppen zu.

#### Registerkarte Formulare

Auf dieser Registerkarte steuern Sie die Interaktion des Benutzers mit den Dateneingabemodulen der Anwendung.

![benutzerberechtigungen-formulare-de.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Für jedes aufgeführte Formular müssen Sie die folgenden Parameter festlegen:

- **Aktiv:** Legt die Sichtbarkeit fest. Wenn aktiviert, wird das Formular für den Benutzer im Seitenmenü angezeigt.
- **Lesen:** Legt die Berechtigungsstufe nur für die Anzeige der Datensätze fest.
- **Schreiben:** Legt fest, ob der Benutzer berechtigt ist, neue Daten einzufügen oder vorhandene Informationen zu bearbeiten.
- **Löschen:** Legt fest, ob der Benutzer befugt ist, Datensätze aus der Datenbank zu entfernen.

#### Registerkarte Berichte

Ähnlich wie bei den Formularen steuert diese Registerkarte den Zugriff auf Module zur Anzeige und Extraktion analytischer Daten.

![benutzerberechtigungen-berichte-de.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Damit ein Bericht verfügbar ist, muss die Option **Aktiv** ausgewählt sein, damit der Benutzer die Berechtigung zur Anzeige hat.

- **Speichern:** Klicken Sie auf die Schaltfläche „Speichern“, um die Änderungen zu speichern.

### 4 - Aktionsschaltflächen

![aktionsschaltflaechen-de.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Speichern:** Speichert alle vorgenommenen Änderungen.

 - **Leeren:** Leert alle Formularfelder und setzt sie auf den Ausgangszustand von „Neuen Benutzer hinzufügen“ zurück.

 - **Personifizieren:** Ein leistungsstarkes Werkzeug von Netuno. Nachdem Sie die Berechtigungen eines Benutzers gespeichert und auf die Schaltfläche **„Personifizieren“** geklickt haben, können Sie das System genau so anzeigen, wie der registrierte Benutzer es verwenden wird. Dies ist unerlässlich, um zu testen, ob die Berechtigungen korrekt konfiguriert wurden.

 - **Löschen:** Entfernt den Benutzerdatensatz dauerhaft.

## Gruppe

Hier ist das zentrale Panel für die Verwaltung von Zugriffsprofilen in Netuno; es ermöglicht zwei Aktionen: **„Hinzufügen“** einer neuen Gruppe und **„Bearbeiten“** einer bestehenden Gruppe.

Eine Gruppe fungiert als Profil oder Zugriffsregel, die festlegt, was jede Benutzergruppe im System anzeigen oder ausführen kann.

Anstatt Berechtigungen für jeden Benutzer einzeln zu konfigurieren, definieren Sie sie in der Gruppe und verknüpfen die Benutzer mit ihr, was eine skalierbare und organisierte Verwaltung gewährleistet.

Klicken Sie in der rechten oberen Ecke des Bildschirms auf **„Developer“** und rufen Sie den Abschnitt **„Gruppe“** auf.

#### Voraussetzungen

- **Administrativer Zugriff:** Es ist erforderlich, ein Profil mit Administratorberechtigungen zu besitzen, um Gruppen zu erstellen oder zu ändern.

### So fügen Sie eine neue Gruppe hinzu

![neue-gruppe-hinzufuegen-de.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Suchen Sie den Abschnitt „Hinzufügen“.
- **Name:** Geben Sie der Gruppe einen klaren und beschreibenden Namen.
- **Anmeldung erlauben:** Aktivieren Sie diese Option, wenn Benutzer dieser Gruppe sich im System anmelden können sollen.
- **Administrator:** Aktivieren Sie diese Option nur, wenn die Benutzer dieser Gruppe vollständigen Zugriff auf das System haben sollen.
- **E-Mail:** Geben Sie eine Kontakt-E-Mail-Adresse für die Gruppe ein.
- **Aktiv:** Aktivieren Sie diese Option, um die Einstellungen im System zu aktivieren.
- **Schaltfläche Speichern:** Klicken Sie, um die Gruppeneinstellungen zu speichern.
- **Schaltfläche Leeren:** Klicken Sie, um alle Formularfelder zu leeren.

### So bearbeiten Sie eine bestehende Gruppe

![bestehende-gruppe-bearbeiten-de.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Wählen Sie die registrierte Gruppe im Eingabefeld „Bestehende Gruppe bearbeiten“ oben auf der Seite aus.
- Klicken Sie auf das Auswahlfeld „Eine Gruppe auswählen“.
- Wählen Sie die Gruppe, die Sie bearbeiten möchten, aus der Liste aus.
- Warten Sie, bis die Gruppendaten die Felder (Name, E-Mail und die Optionen) automatisch ausfüllen.
- Nehmen Sie die gewünschten Änderungen vor und klicken Sie auf „Speichern“.

## Datensatzverlauf

Der Bildschirm „Datensatzverlauf“ ist das Protokoll- und Auditierungswerkzeug Ihrer Anwendung.

Wenn ein Benutzer in einem beliebigen Formular einen Datensatz erstellt, bearbeitet oder löscht, speichert das System ein „Protokoll“ dieser Aktion.

Auf dieser Seite können Sie diesen gesamten Verlauf durchsuchen und filtern. Dies ist unerlässlich für:

 - **Sicherheit:** Überwachung verdächtiger oder nicht autorisierter Aktivitäten.

 - **Auditierung:** Führung eines Konformitätsprotokolls aller Datenänderungen.

 - **Diagnose:** Nachvollziehen, wie ein bestimmter Datensatz in seinen aktuellen Zustand gelangt ist. Beispiel: „Wer hat diesen Kunden gelöscht?“.


### So durchsuchen Sie den Datensatzverlauf

![protokoll-de.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Füllen Sie ein oder mehrere Felder „Filter“ aus, um die gewünschten Protokolleinträge zu finden, und klicken Sie dann auf die Schaltfläche „Suchen“.

- Rufen Sie die Seite „Datensatzverlauf“ auf.
- Füllen Sie die gewünschten Filter aus, um Ihre Suche einzuschränken. Es ist nicht erforderlich, alle Felder auszufüllen. Beispiel: Um alles anzuzeigen, was der Benutzer „Developer“ heute getan hat:
- Wählen Sie „Developer“ im Feld Benutzer aus.
- Wählen Sie im Feld Beginn das heutige Datum und die Uhrzeit aus.
- Wählen Sie im Feld Ende das heutige Datum und die Uhrzeit aus.
- Klicken Sie auf die Schaltfläche „Suchen“.
- Die Ergebnisse (die Liste der Protokolle) werden unter dem Suchformular angezeigt.

## Abmelden

Klicken Sie auf „Abmelden“, um Ihre Sitzung im System sicher zu beenden.