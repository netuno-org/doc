---
id: cli
title: Befehlszeile
sidebar_label: Befehlszeile
---

Die Befehlszeilenschnittstelle von Netuno ist das wichtigste Werkzeug zur Verwaltung Ihrer Entwicklungsumgebung. Über sie können Sie Systeminformationen abfragen, Anwendungen verwalten und den Server schnell konfigurieren.

#### Voraussetzungen

- **Terminal:** Sie müssen ein Terminal (Eingabeaufforderung, PowerShell oder Bash) im Stammordner geöffnet haben, in dem Netuno installiert wurde.

Dies sind die ersten Befehle, um zu prüfen, ob Ihre Umgebung einsatzbereit ist.

| OPTION    | BESCHREIBUNG    |
|----------|--------------|
| `help` | Zeigt alle von Netuno verfügbaren Befehle an. |
| `version` | Zeigt die aktuelle Version von Netuno an. |

#### Verfügbare Befehle auflisten

Wenn Sie sich unsicher sind, welche Operationen Sie ausführen können, verwenden Sie den Hilfebefehl. Er gibt eine vollständige Liste der Funktionen zurück.

```shell
./netuno help
```
#### Die Netuno-Version anzeigen

Es ist entscheidend zu wissen, welche Version Sie verwenden, um die Kompatibilität mit bestimmten Skripten und Modulen sicherzustellen.

```shell
./netuno version
```

## Installieren

Bevor Sie mit der Entwicklung beginnen, müssen Sie die Netuno-Engine in Ihrer Umgebung installieren. Weitere Informationen finden Sie auf unserer Seite [Installation](/docs/get-started/installation).

Dieser Abschnitt beschreibt die Parameter, die während des Installationsprozesses verwendet werden können, um den Vorgang zu automatisieren oder zu optimieren.

| OPTION | BESCHREIBUNG |
|----------|--------------|
| `checksum` | Aktualisiert die Prüfsumme (Checksum) aller Dateien des installierten Pakets. |
| `force` | Erzwingt das Ersetzen aller Dateien, auch wenn lokale Änderungen vorhanden sind.|
| `graal=true/false` | Legt die Verwendung von GraalVM fest, um eine höhere Leistung bei der Ausführung der Anwendungen zu erzielen. |
| `path=[Verzeichnis]`| Legt manuell den Pfad (Ordner) fest, in dem Netuno installiert wird.|
| `remove` | Entfernt alle mit Netuno zusammenhängenden Dateien vollständig aus dem System.|
| `version=[Version]`| Wählt eine bestimmte Version zur Installation aus. Verwenden Sie `latest` für die Entwicklungsversion.|
| `yes`| Antwortet automatisch mit „JA“ auf alle Bestätigungen und ignoriert Warnungen vor Datenverlust.|

#### Beispiel für das Aktualisieren der Prüfsumme:

```shell
./netuno install checksum
```

#### Beispiel für das Erzwingen aller lokalen Änderungen:

```shell
./netuno install force
```

#### Beispiel für das Deaktivieren von GraalVM: 

```shell
./netuno install graal=false
```

> GraalVM ist standardmäßig aktiv und wird bei der Installation von Netuno automatisch heruntergeladen.

#### Beispiel für das Festlegen des Installationspfads:

```shell
./netuno install path ='netunoVerzeichnis'
```
#### Beispiel für das Entfernen aller Netuno-Ordner:

```shell
./netuno install remove
```

#### Beispiel für das Auswählen der zu installierenden Netuno-Version:

```shell
./netuno install version='latest'
```

##### Beispiel für das Antworten mit JA auf alle Fragen: 
```shell
./netuno install yes 
```

## Server

Nach Abschluss der Installation starten Sie den Server, um mit der Entwicklung Ihrer Anwendungen zu beginnen.

Um den Server mit den Standardkonfigurationen zu starten, führen Sie den folgenden Befehl im Stammordner von Netuno aus:

```shell
./netuno server
```

> Standardmäßig verwendet der Server Port 9000. Sobald das Terminal anzeigt, dass das System bereit ist, können Sie über den Link http://localhost:9000/ auf die Verwaltungsoberfläche zugreifen.

Dieser Abschnitt beschreibt die Parameter, die während des Serverstartprozesses verwendet werden können.

OPTION | BESCHREIBUNG |
|----------|--------------|
| `app=[name_der_app]` | Legt ausdrücklich fest, welche Anwendung gestartet werden soll |
| `host=[IP/Hostname]` | Ermöglicht Ihnen, den Hostnamen von Netuno zu ändern |
| `launch=true/false` | Legt fest, ob Netuno den Browser automatisch öffnen soll |
| `npm` | Führt den Befehl 'npm watch' automatisch aus, um das Frontend der App in Echtzeit zu kompilieren |
| `port=[nummer]` | Legt den Startport des Servers fest |
| `secret=[passwort]` | Legt ein Sicherheitspasswort fest, das den Zugriff auf die Remote-Verwaltung des Servers ermöglicht |
| `web=[ordner]` | Ändert den vordefinierten Stammordner des Projekts (Web-Home) |

Standardmäßig verwendet Netuno den Ordner **'webapp'**, um alle für seinen Betrieb wesentlichen Dateien zu speichern.

**Achtung beim Ändern des Verzeichnisses:** Wenn Sie den Parameter web=[ordner] verwenden, um den Namen des Stammordners zu ändern, denken Sie daran, dass Sie den Ordner auch physisch in Ihrem Dateisystem umbenennen müssen. Der Befehl teilt dem Netuno-Code lediglich mit, wo er nach den Dateien suchen soll; er benennt Ordner nicht automatisch um.

#### Beispiel für das Starten des Servers einer bestimmten Anwendung:

```shell
./netuno server app=meineapp
```

#### Beispiel für das Ändern des Hostnamens:

```shell
./netuno server host=localhost
```

#### Beispiel für das Festlegen, ob Netuno den Browser automatisch startet:

```shell
./netuno server launch=false
```

>Standardmäßig öffnet Netuno den Browser und ruft den Link http://localhost:9000 auf.

#### Beispiel für das Ausführen von npm zum automatischen Erstellen des Frontends

```shell
./netuno server npm
```

#### Beispiel für das Ändern des Ports:

```shell
./netuno server port=10000
```

#### Beispiel für das Festlegen eines Passworts für den Zugriff auf die Remote-Verwaltung des Servers:

```shell
./netuno server secret='p#ssw@rt'
```

#### Beispiel für das Ändern des Standard-Webordners:

```shell
./netuno server web=webapp
```

## Lizenz

Um mit der Entwicklung mit Netuno zu beginnen, müssen Sie Ihre Umgebung registrieren.

Verwenden Sie den Basisbefehl, um Ihre Lizenz zu verwalten:

```shell
./netuno license
```

> Derzeit bietet Netuno drei Lizenzmodelle an: **Community, Standard und Enterprise**.

Dieser Abschnitt beschreibt die verfügbaren Aktionen zum Konfigurieren oder Abfragen Ihrer Lizenz.

| OPTION    | BESCHREIBUNG    |
|----------|--------------|
| `create , change` | Startet den Prozess zum Erstellen einer neuen Lizenz oder Ändern der aktuellen |
| `key` | Zeigt den in Ihrer Umgebung aktiven Lizenzschlüssel an |
| `mail=[deine@mail.com]` | Legt die mit dem Lizenzkonto verknüpfte E-Mail-Adresse fest |
| `type=[community/standard/enterprise]`  | Legt den Lizenztyp fest|


#### Beispiel für das Erstellen einer Lizenz:

```shell
./netuno license create
```

#### Beispiel für das Anzeigen des Lizenzschlüssels: 

```shell
./netuno license key
```
##### Beispiel für das Festlegen Ihrer E-Mail-Adresse und Ihres Lizenztyps:

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Anwendung

Wenn der Server konfiguriert und die Lizenz aktiv ist, können Sie Ihr Ökosystem erweitern, indem Sie neue Lösungen erstellen.

```shell
./netuno app
```

Die generierten Dateien werden automatisch innerhalb der Ordnerstruktur von Netuno organisiert.

Um auf die Dateien Ihrer Anwendung zuzugreifen oder sie zu bearbeiten, navigieren Sie ab dem Systemstamm zum folgenden Pfad: **webapp / apps / [name_deiner_app]**

#### Ordnerstruktur

- **webapp**: Dies ist der Stammordner, der alle wesentlichen Dateien für den Betrieb von Netuno enthält.

- **apps**: Spezifischer Ordner, in dem alle entwickelten oder zu Demonstrationszwecken dienenden Anwendungen gespeichert werden.

- **[name_deiner_app]**: Der exklusive Ordner der Anwendung, die Sie gerade erstellt haben.

Standardmäßig verfügt Netuno über eine Demonstrationsanwendung, die angezeigt wird, wenn der Netuno-Server gestartet wird.

| OPTION    | BESCHREIBUNG    |
|----------|--------------|
| `database=[name_der_datenbank]` | Legt den Namen der Datenbank fest |
| `engine=[name]` | Legt den Typ der Datenbank fest |
| `host=[adresse]` | Legt die Adresse der Datenbank fest. |
| `language=[sprache]`  | Legt die Sprache der Anwendung fest |
| `locale=[sprache]` | Legt das Gebietsschema der Anwendung fest |
| `name=[name]`  | Ermöglicht das Erstellen einer Anwendung oder das Neuerstellen einer vorhandenen Anwendung |
| `password=[passwort]`  | Legt ein Passwort für die Datenbank fest |
| `port=[nummer]`  | Legt den Port der Datenbank fest |
| `username=[name]`  | Legt den Namen des Datenbankbenutzers fest |

#### Beispiel für das Festlegen des Datenbanknamens:

```shell
./netuno app database=mitarbeiter
```

> Der Datenbankname kann Zahlen und Buchstaben enthalten. Wenn der Name aus mehr als einem Wort besteht, muss er mit „_“ getrennt werden, und zwar wie folgt.
>
> **Beispiel:** mitarbeiter_db

#### Beispiel für das Festlegen des Datenbanktyps:

```shell
./netuno app engine=pg
```
Es gibt folgende Datenbanktypen:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Beispiel für das Festlegen der Adresse des Datenbankservers:

```shell
./netuno app host=localhost
```

#### Beispiel für das Festlegen von Sprache und Gebietsschema:

```shell
./netuno app language=pt_PT locale=pt_PT
```
Es gibt folgende Sprachen:
> - Portugiesisch - pt_PT
> - Brasilianisch - pt_BR
> - Englisch - en_US
> - Spanisch - es_ES

#### Beispiel für das Erstellen einer Anwendung oder das Neuerstellen einer vorhandenen Anwendung:

```shell
./netuno app name=demo
```

#### Beispiel für das Festlegen des Datenbankpassworts:

```shell
./netuno app password=geheim
```

#### Beispiel für das Festlegen des Datenbankports:

```shell
./netuno app port=5432
```
Standardmäßig entsprechen die Ports:

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Beispiel für das Festlegen des Datenbankbenutzernamens:

```shell
./netuno username=root
```