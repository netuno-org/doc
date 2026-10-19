---
id: access-permissions
title: Zugriff und Berechtigungen
sidebar_label: Zugriff und Berechtigungen
---

Wie Sie Benutzer und Gruppen verwalten und die Sicherheit der Anwendung gewährleisten.

## Einführung

Sicherheit ist einer der grundlegenden Pfeiler jeder Anwendung. Ob für eine einfache interne Anwendung oder ein komplexes System mit Tausenden externen Benutzern über eine API.

Netuno bietet nativ ein robustes System zur **Zugriffs- und Berechtigungskontrolle**, das die notwendigen Werkzeuge bereitstellt, um Sicherheit zentralisiert und effizient zu verwalten. Dadurch entfällt die Notwendigkeit, diese Funktionen von Grund auf zu entwickeln.

Zu den wichtigsten Sicherheitsmechanismen gehören:

- Verwaltung von Benutzern und Gruppen.
- Kontrolle der Datenberechtigungen für die Datenverwaltung.
- Detaillierter Verlauf der Authentifizierungsversuche.
- Automatische IP-Sperrung nach aufeinanderfolgenden fehlgeschlagenen Zugriffsversuchen.
- Integrierte Authentifizierung mit LDAP, Google, GitHub, Discord usw.
- JWT-Authentifizierungsmodul für das Frontend.
- Und weitere ...

## Benutzerverwaltung

Dabei geht es um die Verwaltung der einzelnen Konten, die auf die Plattform zugreifen. Jeder Benutzer, Dienst oder jede Integration, die auf das System zugreifen muss, sollte über einen eindeutigen Benutzereintrag verfügen.

Im Bereich der Benutzerverwaltung von Netuno haben Sie die vollständige Kontrolle über den Lebenszyklus dieser Konten:
- **Erstellung:** Registrierung neuer Teammitglieder oder Kunden.
- **Wartung:** Aktualisierung von E-Mail-Adressen, Änderung von Passwörtern und Stammdaten.
- **Zugriffskontrolle:** Schnelles Sperren von Konten (Deaktivierung), ohne historische Daten löschen zu müssen.

:::tip Visuelle Anleitung
Detaillierte Informationen zur Benutzerverwaltung finden Sie im [Oberflächenleitfaden: Benutzer und Gruppen](/docs/academy/ui/groups-users)
:::


## Gruppenverwaltung

Autorisierungsregeln werden über Gruppen definiert. Diese legen fest, auf welche Menüs, Formulare, Dienste und Daten jeder Benutzer zugreifen oder die er bearbeiten darf. Anstatt Berechtigungen einzeln zu konfigurieren, sollten die Regeln idealerweise in der Gruppe definiert und anschließend die Benutzer dieser Gruppe zugeordnet werden. Dieses Vorgehen gewährleistet:

- **Skalierbarkeit:** Einfache Verwaltung von Hunderten von Benutzern.
- **Sicherheit:** Geringeres Risiko, versehentlich unbefugte Zugriffe zu gewähren.
- **Organisation:** Klare Trennung zwischen Administratoren, Managern, Supervisoren und allgemeinen Benutzern.

Netuno bringt bereits native Gruppen wie `dev` und `admin` mit und bietet vollständige Autonomie zum Erstellen benutzerdefinierter Gruppen, um die Geschäftsregeln Ihrer Anwendung abzubilden.

:::tip Visuelle Anleitung
Detaillierte Informationen zur Gruppenverwaltung finden Sie im [Oberflächenleitfaden: Benutzer und Gruppen](/docs/academy/ui/groups-users)
:::


## Kontrolle der Datenberechtigungen

Um die Funktionsfähigkeit einer Gruppe oder die Berechtigungen eines Benutzers sicherzustellen, ist es entscheidend, festzulegen, welche Daten er bearbeiten darf. In Netuno erfolgt die Zugriffskontrolle detailliert und wird direkt auf die Formulare (Tabellen) Ihrer Anwendung angewendet.

Das System verwendet eine Berechtigungsmatrix, mit der für jede Funktion festgelegt werden kann, ob eine bestimmte Gruppe die entsprechende Berechtigung besitzt für:

- **Lesen:** Datensätze nur anzeigen.
- **Schreiben:** Datensätze in der Datenbank einfügen und bearbeiten.
- **Löschen:** Datensätze dauerhaft entfernen.

Diese Flexibilität gewährleistet den Schutz sensibler Daten, da jeder Mitarbeiter nur auf die für die Ausführung seiner Aufgaben wesentlichen Informationen zugreifen kann.

:::tip Visuelle Anleitung
Detaillierte Informationen zur Konfiguration der Datenberechtigungen finden Sie im [Oberflächenleitfaden: Benutzer und Gruppen](/docs/academy/ui/groups-users)
:::

## Authentifizierungsverlauf

Um Transparenz und Kontrolle zu gewährleisten, werden alle Zugriffsversuche (erfolgreich oder ungültig) aufgezeichnet und können im Authentifizierungsverlauf eingesehen werden.

Das System überwacht und speichert detailliert die Informationen jedes Anmeldeversuchs des Benutzers:

- **Ursprungs-IP:** Die Netzwerkadresse, von der die Anforderung ausging.
- **Zeitpunkt:** Der genaue Zeitpunkt der Aktion.
- **Zugriff:** Ob der Zugriff erlaubt, verweigert oder gesperrt wurde.

#### Legende der Zugriffssymbole

🟩 **Schloss/Häkchen in Grün:** Zeigt einen Erfolg an. Der Benutzer hat die korrekten Anmeldedaten angegeben und die Anmeldung wurde autorisiert. Zeigt außerdem an, dass die Ursprungs-IP entsperrt wurde.

🟧 **Symbol mit „X“ in Orange:** Zeigt die Anzahl der ungültigen Versuche an.

🟥 **Schloss in Rot:** Zeigt die Sperrung der Ursprungs-IP an.

## Automatische Sperrung

Netuno verfügt über ein aktives Sicherheitssystem, das Ihre Anwendung gegen Angriffe und unbefugten Zugriff schützen soll.

Wenn verdächtige Aktivitäten erkannt werden, etwa mehrere aufeinanderfolgende ungültige Anmeldeversuche, sperrt das System automatisch die Ursprungs-IP-Adresse.

Nach der Sperrung kann die IP für einen bestimmten Zeitraum keine neuen Anforderungen mehr ausführen, es sei denn, die Sperrung wird manuell aufgehoben.

### Sperrregeln konfigurieren

Diese Regel wird in den **Konfigurationsdateien** der Umgebung Ihrer Anwendung „development.json“ oder „production.json“ definiert.

#### 1. Lokalisieren Sie die Konfigurationsdatei

Navigieren Sie im Stammverzeichnis Ihres Projekts zum Ordner `config`. Öffnen Sie die Datei, die der Umgebung entspricht, die Sie schützen möchten:

* Für die Entwicklung: `_development.json`

* Für die Produktion: `_production.json`

#### 2. Fügen Sie den Schutzcode ein
Suchen Sie in der JSON-Datei den Abschnitt `auth`. Falls er nicht existiert, fügen Sie den Block `attempts` wie im folgenden Beispiel ein:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Die Parameter verstehen

* `interval`: Zeitfenster in **Minuten** (Beispiel: 60 Minuten = 1 Stunde).

* `maxFails`: Maximale Anzahl zulässiger Fehlschläge innerhalb dieses Zeitfensters vor der Sperrung.


#### 4. Systemverhalten

- Nach der automatischen Sperrung kann der Benutzer nicht mehr auf die Anwendung zugreifen.

- Standardmäßig ist das System auf drei ungültige Versuche mit einer Sperrung für eine Stunde konfiguriert. Nach diesem Zeitraum werden die Versuche wieder freigegeben.

- Dieser Prozess kann entsprechend den Anforderungen Ihrer Anwendung konfiguriert werden.


### Über die Oberfläche entsperren

Nur ein Benutzer mit der Berechtigung „Administrator“ kann den Zugriff direkt über das Backoffice freigeben, ohne auf die Datenbank zugreifen zu müssen.

1. Rufen Sie das Anwendungsmenü im Modus „Ansicht“ auf und klicken Sie auf den Abschnitt **„Konfiguration > Benutzer“**.
![Benutzerkonfigurationsbereich](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. Wählen Sie im Feld **„Bestehenden Benutzer bearbeiten“** den gewünschten Benutzer aus.
![Bestehenden Benutzer auswählen](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. Prüfen Sie im Abschnitt **„Authentifizierungsverlauf“**, ob der Status „Zugriff“ das Symbol „Schloss“ in Grün anzeigt;
![Abschnitt Authentifizierungsverlauf](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Klicken Sie auf das Symbol **Uhr**, um die vollständige Liste der Zugriffe des Benutzers anzuzeigen.
![Authentifizierungsverlauf](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Klicken Sie in der Spalte **„Zugriff“** auf das grüne Schloss, um den Benutzer zu entsperren. Nach dieser Aktion wird eine Erfolgsmeldung angezeigt.

Die Freigabe erfolgt sofort, sodass der Benutzer erneut versuchen kann, sich anzumelden.


## Integrierte Authentifizierungen

Ihre Anwendung kann anspruchsvollere Anmeldemethoden erfordern, insbesondere wenn Sie eine mobile App entwickeln oder sich in ein Unternehmensnetzwerk integrieren.

Netuno wurde flexibel konzipiert und lässt sich in das Ökosystem Ihrer Organisation integrieren. Neben der Standardanmeldung (Benutzername und Passwort) unterstützt die Plattform verschiedene marktübliche Authentifizierungsprotokolle.

So lassen sich Single-Sign-On-Strategien (einmalige Anmeldung) umsetzen, bei denen Benutzer mit bereits vorhandenen Anmeldedaten auf das System zugreifen und die Zugriffsverwaltung zentralisiert wird.

**Unternehmensumgebungen:** Kompatibilität mit Benutzerverzeichnissen (wie LDAP und Active Directory), ideal für Intranet und interne Systeme.

**Soziale Anmeldung (OAuth):** Möglichkeit der Integration mit Anbietern wie Google, Microsoft, GitHub und anderen, was Registrierung und Zugriff in öffentlichen Anwendungen erleichtert.

## Token-Authentifizierung (JWT)

Bei Projekten mit einem dedizierten Frontend (z. B. Websites mit React, Vue.js oder mobile Apps) wird die traditionelle Netuno-Anmeldemaske nicht verwendet. In diesen Szenarien wird der JWT-Standard (JSON Web Token) eingesetzt.

Netuno bietet einen nativen Dienst, der diese Tokens automatisch erzeugt und validiert und so Sicherheit und Effizienz bei der Kommunikation über die API gewährleistet.

:::tip Visuelle Anleitung
Weitere Informationen zur Implementierung und Konfiguration von JWT in Ihren Konfigurationsdateien finden Sie im [Leitfaden zur JWT-Authentifizierung](/docs/academy/server/services/jwt)
:::

## Fazit

Die Beherrschung der Sicherheitsfunktionen von Netuno ist entscheidend für die Gesundheit Ihres Projekts. Wenn Sie die Werkzeuge zur Benutzer- und Gruppenverwaltung sowie zur Verlaufsüberwachung korrekt einsetzen, schaffen Sie eine Umgebung, die Datenschutz und Benutzerfreundlichkeit ausbalanciert.

Damit stellen Sie sicher, dass Ihr System in Netuno:

- **Sicher:** Sensible Informationen werden vor unbefugtem Zugriff geschützt.

- **Organisiert:** Klare Hierarchien und Verantwortlichkeiten werden festgelegt.

- **Skalierbar:** Bereit, mit modernen Integrationen zu wachsen.

**Halten Sie bewährte Verfahren ein:** Überprüfen Sie regelmäßig die Gruppenberechtigungen und den Zugriffsverlauf, um Ihre Umgebung gesund zu halten.