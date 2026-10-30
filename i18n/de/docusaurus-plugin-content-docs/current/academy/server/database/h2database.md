---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Einführung

Der große Vorteil von H2Database ist, dass kein Datenbankserver benötigt wird, da es eingebettet in Anwendungen betrieben werden kann.

> H2Database wird nur für Entwicklungs- und Testzwecke empfohlen; in der Produktion sollte ein anderer, zuverlässigerer Datenbanktyp verwendet werden.

## Empfehlungen und Einschränkungen

H2Database erlaubt nicht, dass mehr als ein einziger Prozess auf die Datenbankdatei zugreift.

Wenn Sie die Datei bearbeiten oder über die Web-Konsole zugreifen möchten, müssen Sie daher die Ausführung von Netuno stoppen.

## Datenbankdateien

Die Datenbankdateien von H2Database befinden sich im Ordner `dbs` innerhalb der Anwendung, zum Beispiel:

- `apps/meine_app/dbs`

Wenn Sie die Datenbank umbenennen möchten, ändern Sie den Dateinamen und korrigieren Sie die Anwendungskonfiguration, zum Beispiel in der Umgebung _development_:

- `config/_development.json`

Die Korrektur muss im Teil der Konfiguration der Datenbankverbindung erfolgen:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "meine_db",
            "username": ""
        }
    }
    ...
```

## Web-Konsole

Es kann notwendig sein, direkt auf die Datenbank zuzugreifen; in diesem Fall ist dies über die Web-Konsole von H2Database möglich.

Die Web-Konsole wird gestartet, indem das _JAR_ von H2Database direkt wie folgt ausgeführt wird:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Es wird davon ausgegangen, dass Sie sich im Stammverzeichnis von Netuno befinden.

Um die verfügbaren Optionen anzuzeigen:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Startet die Web-Konsole auf dem Netuno-Port **9000** und erlaubt den Zugriff von externen IPs:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Sie sollten die Ausführung von Netuno vorher stoppen, um zu vermeiden, dass mehrere Prozesse die Datenbankdatei bearbeiten.

Die JDBC-URL für die Verbindung zur Datenbank sollte lauten:

`jdbc:h2:./apps/meine_app/dbs/meine_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Ersetzen Sie den Teil `meine_app` durch den Namen der App und `meine_db` durch den Namen der entsprechenden Datenbank.

Die Authentifizierung erfolgt mit dem Benutzer `sa`, jedoch ohne Passwort.


### Zugriffe zurücksetzen

Insbesondere wenn der Zugriff des Benutzers `dev` verloren geht.

Greifen Sie wie oben beschrieben über die Web-Konsole von H2Database zu.

Um den Zugriff neu zu erstellen, löschen Sie die Daten der Tabelle `netuno_user`, zum Beispiel:

- `delete from netuno_user`
 
Dadurch erstellt Netuno die Benutzer mit ihren jeweiligen Standardpasswörtern neu, wenn es erneut gestartet wird.