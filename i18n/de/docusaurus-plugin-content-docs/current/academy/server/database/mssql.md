---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Konfiguration von MSSQL in Docker

Unter der Annahme, dass Docker bereits installiert ist, laden Sie einfach das Container-Image aus der Microsoft Container Registry mit dem folgenden Befehl herunter:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Und um den neuen Container zu starten, führen Sie den folgenden Befehl aus:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Geheim123' -p 1433:1433 microsoft/mssql-server-linux
```

Der Parameter *-e 'SA\_PASSWORD=Geheim123'*, wobei *Geheim123* das Passwort des Benutzers *sa* ist.

Beachten Sie, dass das Passwort mindestens 8 Zeichen enthalten muss, um die Mindestsicherheitsanforderung von MSSQL zu erfüllen; andernfalls wird der Container nicht initialisiert.

Stellen Sie nach der Initialisierung des Containers sicher, dass MSSQL ordnungsgemäß funktioniert. Dazu können Sie den Befehl *mssql* über *NPM* installieren:

```
npm install mssql -g
```

Damit können Sie den Befehl ausführen, um sich über das Terminal mit MSSQL zu verbinden:

```
mssql -u sa -p Geheim123
```

Achtung! Falls Sie das Passwort geändert haben, ersetzen Sie *Geheim123* durch das im Container konfigurierte Passwort für _sa_.

## Eine neue Anwendung erstellen

Um eine neue Anwendung in Netuno zu erstellen, die mit Microsoft SQL Server verbunden ist, folgen Sie den normalen Schritten zum Erstellen einer neuen Anwendung in Netuno und wählen Sie die Datenbank-Engine MSSQL.

Folgen Sie also den Schritten des Tutorials:

Nach der Auswahl der Datenbank-Engine MSSQL werden die Daten für die Verbindung zur MSSQL-Datenbank abgefragt.

Zum Beispiel:

![app-erstellen](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Konfiguration von Anwendungen ändern

Damit eine Anwendung mit MSSQL arbeiten und MSSQL als Hauptdatenbank der Anwendung verwenden kann, ändern Sie die Umgebungskonfigurationen in:

```
/web/app/IHRE_APP/config/_development.json
/web/app/IHRE_APP/config/_production.json
/web/app/IHRE_APP/config/_IHRE_UMGEBUNG.json
```

Die Konfiguration sollte wie folgt aussehen:

```
    ...
    "db": {
        "default": {
            "password": "Geheim123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Wenn Sie eine Verbindung als alternative und nicht als Hauptdatenbank herstellen möchten, ersetzen Sie _"default"_ durch den gewünschten Namen für diese Verbindung.

## Instanzen

Wenn Sie eine Verbindung zu einer bestimmten MSSQLSRV-Instanz herstellen müssen, fügen Sie den Wert `instance` in der Verbindungskonfiguration hinzu, zum Beispiel:

```
    ...
    "db": {
        "default": {
            "password": "Geheim123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "name-meiner-instanz",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```