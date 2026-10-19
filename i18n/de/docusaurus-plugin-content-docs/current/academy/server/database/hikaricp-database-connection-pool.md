---
id: hikaricp-database-connection-pool
title: HikariCP - Datenbank-Verbindungspool
sidebar_label: DB-Verbindungspool
---

## Was ist das

Das Erstellen neuer Verbindungen zur Datenbank erfordert einen gewissen Verarbeitungsaufwand, insbesondere wenn eine Authentifizierung erfolgt.

Deshalb ist es für einen größeren Performancegewinn sinnvoll, Verbindungen wiederzuverwenden und nicht ständig eine neue Verbindung zu öffnen.

Zur Lösung dieses Problems wird ein Verbindungspool verwendet. Wenn eine Verbindung verworfen wird, wird sie nicht wirklich geschlossen und zerstört, sondern die Verbindung wird in Bereitschaft gehalten, um wiederverwendet zu werden, wenn eine neue Verbindung benötigt wird.

Dies bringt große Performancegewinne und ermöglicht außerdem viele weitere Konfigurationsparameter, einschließlich des bekanntesten, nämlich der Begrenzung der maximalen Anzahl von Verbindungen, um eine Überlastung der Datenbank zu vermeiden.

## HikariCP

Hikari bedeutet auf Japanisch Licht. Es ist der effizienteste und am weitesten verbreitete Pool in Java-Anwendungen und bekannt dafür, bei weitem die beste Performance zu haben.

Das offizielle Repository von HikariCP finden Sie hier auf [GitHub](https://github.com/brettwooldridge/HikariCP); sehen Sie sich die Performance-Diagramme und die Informationen zu den Einstellungen an.

Netuno verwendet HikariCP zur Verwaltung der Verbindungen zu PostgreSQL, MariaDB, Microsoft SQL Server und Oracle.

## Konfiguration

Die Konfiguration von HikariCP in Netuno erfolgt zusammen mit der Datenbankkonfiguration in den Anwendungen.

Das heißt, innerhalb der Anwendung im Ordner `config` in der Umgebungskonfiguration, wie:

- \_development.json
- \_production.json

Im Abschnitt "db" befinden sich die Datenbankeinstellungen.

Sowohl für die Standardverbindung als auch für jede andere kann die Konfiguration der HikariCP-Parameter auf dieselbe Weise vorgenommen werden.

So reicht es innerhalb von `default`, wo host, port, name (database), username und password angegeben sind, aus, weitere HikariCP-Parameter hinzuzufügen, wie:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "meine_datenbank",
            "username": "mein_benutzer",
            "password": "geheim",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Zum Beispiel dienen die einzelnen zusätzlichen HikariCP-Einstellungen oben Folgendem:

* `maximumPoolSize` legt die maximale Größe der Verbindungen im HikariCP fest; in diesem Beispiel beträgt das Verbindungslimit 25.
* `minimumIdle` legt die Mindestanzahl an wartenden Verbindungen in der Warteschlange zur Nutzung fest.
* `idleTimeout` ist die Zeit, die eine Verbindung im Bereitschaftszustand bleiben darf.
* `maxLifetime` ist die maximale Lebensdauer einer Verbindung.

> Die HikariCP-Einstellungen müssen mit der Konfiguration der Datenbank-Engine übereinstimmen.
> Zum Beispiel dürfen die maximale Anzahl an Verbindungen und die Zeitlimits niemals die im Datenbank-Engine definierten Werte überschreiten.

Jeder andere HikariCP-Parameter kann auf dieselbe Weise konfiguriert werden; fügen Sie einfach die gewünschten Konfigurationsparameter hinzu.

## Parameter

Nachfolgend finden Sie die Liste der Parameter, die Netuno für HikariCP konfigurieren lässt.

Jeder andere Konfigurationsparameter von HikariCP wird entweder automatisch von Netuno vordefiniert oder ist nicht anwendbar.

### Häufig verwendet

##### autoCommit

Diese Eigenschaft steuert das standardmäßige automatische Bestätigungsverhalten der aus dem Pool zurückgegebenen Verbindungen.
Es ist ein boolescher Wert.

Standard: `true`

##### connectionTimeout

Diese Eigenschaft steuert die maximale Zeit in Millisekunden, die ein Client (also Sie) auf eine Verbindung aus dem Pool wartet. Wird diese Zeit überschritten, ohne dass eine Verbindung verfügbar ist, wird eine SQLException geworfen. Der niedrigste akzeptable Verbindungs-Timeout ist 250 ms.

Standard: `30000 (30 Sekunden)`

##### idleTimeout

Diese Eigenschaft steuert die maximale Zeit, die eine Verbindung im Pool im Leerlauf bleiben darf. **Diese Einstellung gilt nur, wenn `minimumIdle` kleiner als `maximumPoolSize` festgelegt ist.** Leerlaufverbindungen werden nicht entfernt, wenn der Pool die `minimumIdle`-Verbindungen erreicht. Ob eine Verbindung als inaktiv entfernt wird oder nicht, unterliegt einer maximalen Abweichung von +30 Sekunden und einer durchschnittlichen Abweichung von +15 Sekunden. Eine Verbindung wird niemals vor diesem Timeout als Leerlaufverbindung außer Betrieb genommen. Ein Wert von 0 bedeutet, dass Leerlaufverbindungen niemals aus dem Pool entfernt werden. Der zulässige Mindestwert ist 10000 ms (10 Sekunden).

Standard: `600000 (10 Minuten)`

##### maxLifetime

Diese Eigenschaft steuert die maximale Lebensdauer einer Verbindung im Pool. Eine Verbindung, die verwendet wird, wird niemals entfernt; erst wenn sie geschlossen ist, wird sie entfernt. Auf Verbindungsbasis wird eine geringere negative Dämpfung angewendet, um eine massenhafte Entnahme aus dem Pool zu vermeiden. **Wir empfehlen dringend, diesen Wert festzulegen, und er sollte einige Sekunden kürzer sein als jedes von einer Datenbank oder Infrastruktur vorgegebene Verbindungszeitlimit.** Ein Wert von 0 steht für eine maximale Lebensdauer (unendliche Dauer), selbstverständlich vorbehaltlich der Einstellung `idleTimeout`. Der zulässige Mindestwert ist 30000 ms (30 Sekunden).

Standard: `1800000 (30 Minuten)`

##### minimumIdle

Diese Eigenschaft steuert die Mindestanzahl an Leerlaufverbindungen, die HikariCP im Pool zu halten versucht. Wenn die Leerlaufverbindungen unter diesen Wert fallen und die Gesamtzahl der Verbindungen im Pool kleiner als die Größe `maximumPoolSize` ist, unternimmt HikariCP größte Anstrengungen, zusätzliche Verbindungen schnell und effizient hinzuzufügen. Für maximale Leistung und Reaktionsfähigkeit auf Spitzenanforderungen empfehlen wir jedoch, diesen Wert nicht festzulegen und stattdessen HikariCP als Pool mit fester Größe agieren zu lassen.

Standard: derselbe wie die Größe `maximumPoolSize`

##### maximumPoolSize

Diese Eigenschaft steuert die maximale Größe, die der Pool erreichen kann, einschließlich sowohl der Leerlaufverbindungen als auch der verwendeten Verbindungen. Grundsätzlich bestimmt dieser Wert die maximale Anzahl realer Verbindungen zum Datenbank-Backend. Ein sinnvoller Wert hierfür lässt sich am besten durch Ihre Laufzeitumgebung bestimmen. Wenn der Pool diese Größe erreicht und keine Leerlaufverbindungen verfügbar sind, werden Aufrufe von getConnection() blockiert, bis die `connectionTimeout` Millisekunden vor dem Timeout abgelaufen sind.

Standard: `10`

### Selten verwendet

##### initializationFailTimeout

Diese Eigenschaft steuert, ob der Pool „schnell fehlschlägt“, wenn der Pool nicht erfolgreich mit einer Anfangsverbindung initialisiert werden kann. Jede positive Zahl gilt als Anzahl der Millisekunden, die zum Erwerb einer Anfangsverbindung versucht wird; der Anwendungsthread wird während dieses Zeitraums blockiert. Kann eine Verbindung nicht vor diesem Zeitintervall erworben werden, wird eine Exception geworfen. Dieses Timeout wird nach dem Zeitraum von `connectionTimeout` angewendet. Ist der Wert null (0), versucht HikariCP, eine Verbindung zu erhalten und zu validieren. Wird eine Verbindung erhalten, aber die Validierung schlägt fehl, wird eine Exception geworfen und der Pool wird nicht gestartet. Kann jedoch keine Verbindung erhalten werden, startet der Pool, aber spätere Versuche, eine Verbindung zu erhalten, können fehlschlagen. Ein Wert kleiner als null umgeht jeden anfänglichen Verbindungsversuch, und der Pool startet sofort, während er im Hintergrund versucht, Verbindungen zu erhalten. Folglich können spätere Versuche, eine Verbindung zu erhalten, fehlschlagen.

Standard: `1`

##### catalog

Diese Eigenschaft legt den Standardkatalog für Datenbanken fest, die das Konzept von Katalogen unterstützen. Ist diese Eigenschaft nicht angegeben, wird der vom JDBC-Treiber definierte Standardkatalog verwendet.

Standard: `Treiberstandard`

##### validationTimeout

Diese Eigenschaft steuert den maximalen Zeitraum, in dem eine Verbindung auf ihre Lebendigkeit getestet wird. Dieser Wert muss kleiner als die Zeit von `connectionTimeout` sein. Der niedrigste akzeptable Validierungs-Timeout ist 250 ms.

Standard: `5000`

##### leakDetectionThreshold

Diese Eigenschaft steuert die Zeitspanne, die eine Verbindung außerhalb des Pools sein darf, bevor eine Meldung protokolliert wird, die auf ein mögliches Verbindungsleck hinweist. Ein Wert von 0 bedeutet, dass die Leckerkennung deaktiviert ist. Der niedrigste akzeptable Wert für die Aktivierung der Leckerkennung ist 2000 (2 Sekunden).

Standard: `0`

##### schema

Diese Eigenschaft legt das Standardschema für Datenbanken fest, die das Konzept von Schemas unterstützen. Ist diese Eigenschaft nicht angegeben, wird das vom JDBC-Treiber definierte Standardschema verwendet.

Standard: `Treiberstandard`

### DataSource

Es ist auch möglich, Einstellungen am DataSource hinzuzufügen, also zusätzliche Einstellungen, die spezifisch für den verwendeten Datenbanktyp sind.

Für diese erweiterte Konfiguration ist es erforderlich, das Konfigurationsobjekt `datasource` innerhalb des Konfigurationsobjekts der Datenbankverbindung hinzuzufügen.

Zum Beispiel so:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "meine_datenbank",
            "username": "mein_benutzer",
            "password": "geheim",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Beachten Sie, dass die Werte der DataSource-Parameter vom Typ _String_ sind; Netuno konvertiert sie jedoch automatisch immer in _String_.

## Fazit

Mit der Verwendung von HikariCP lassen sich erweiterte Konfigurationen zur Verwaltung der Last und des Verhaltens der Datenbankverbindungen realisieren.

So kann es für die unterschiedlichsten Szenarien optimiert werden und seine hohe Performance sicherstellen.