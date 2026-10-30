---
id: cron-jobs
title: Cron Jobs - Zeitgesteuerte Dienste
sidebar_label: Cron Jobs
---

## Bevor Sie beginnen

Bevor Sie fortfahren, stellen Sie sicher, dass Sie grundlegende Kenntnisse in _**JavaScript**_ haben und bereits die Grundlagen von Netuno beherrschen, mit der Schritt-für-Schritt-Anleitung in der [Akademie](/docs/academy/overview).

## Einführung

Häufig besteht die Notwendigkeit, Aufgaben regelmäßig auszuführen, das heißt, von Zeit zu Zeit müssen Daten an ein anderes System gesendet, Daten aus einem anderen System importiert, eine E-Mail versendet, Datensätze in der Datenbank validiert und vieles mehr erledigt werden.

Unter Linux/UNIX/Mac gibt es den Cron-Dienst mit der bekannten Konfigurationsdatei `crontab`, unter Windows gibt es den Task-Manager (_Aufgabenverwaltung_).

Und in Netuno sind Cron Jobs bereits integriert, wodurch externe Konfigurationen vermieden werden.

Diese Art periodischer Vorgänge ist als Cron Jobs oder auf Deutsch als zeitgesteuerte Dienste bekannt.

Jede Netuno-Anwendung kann unzählige Cron Jobs haben, und die Cron Jobs von Netuno können sowohl interne Dienste und URLs als auch externe URLs ausführen.

> Weitere Informationen finden Sie in der Dokumentation der Ressource [cron](/docs/library/resources/cron).

## Funktionsweise

Jede Anwendung hat die Konfiguration ihrer eigenen zeitgesteuerten Dienste (**Cron Jobs**) mit der jeweiligen Ausführungskonfiguration.

Vereinfacht gesagt ist jeder zeitgesteuerte Dienst ein eigener **Job** mit seiner eigenen Ausführungskonfiguration; er kann jede Minute, alle 5 Minuten, jede Stunde, an einem bestimmten Tag und zu einer bestimmten Uhrzeit der Woche usw. ausgeführt werden ... außerdem enthält er die URL, die zum Zeitpunkt seiner Ausführung aufgerufen wird.

> Netuno verwendet die Bibliothek <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a>, um die Ausführung der zeitgesteuerten Dienste zu verwalten. Die Konfiguration der Zeitsteuerungsregeln bezieht sich auf diese Bibliothek.

Somit erfolgt die Ausführung jedes Jobs durch den Aufruf einer URL (_Webadresse, Link_), die sowohl extern als auch intern in der Anwendung selbst liegen kann. Handelt es sich um einen externen Link, kann er zu einer anderen Anwendung oder zu einer beliebigen externen URL im Internet, im Netzwerk oder auf dem Computer führen.

![Cron-Diagramm](/docs/assets/academy/server/cron.svg)

Die obige Grafik zeigt, dass Netuno 2 Anwendungen enthält, wobei jede 2 Jobs (_zeitgesteuerte Dienste_) konfiguriert hat, die zu unterschiedlichen Zeitpunkten gemäß einer beliebigen Konfiguration ausgeführt werden.

Das Ausführungsverhalten ist wie folgt:

- App 1 startet 2 Jobs:
  - Job 1: Führt eine URL eines internen Dienstes der App 1 selbst aus.
  - Job 2: Führt eine externe, öffentliche URL aus.
- App 2 startet 2 Jobs:
  - Job 3: Führt eine URL eines internen Dienstes der App 2 selbst aus
  - Job 4: Führt eine Dienst-URL der App 1 aus.

> Die Anwendungen sollten die Dienste, die von den Cron Jobs ausgeführt werden, im folgenden Ordner haben:
> - 📂 `server/services/jobs`

Jede URL wird mit der HTTP-Methode POST ausgeführt. In der Job-Konfiguration können zusätzliche Parameter sowie ein geheimer Schlüssel hinzugefügt werden, um zu verhindern, dass sie außerhalb des kontrollierten Kontexts ausgeführt wird.

## Konfiguration

Die Konfiguration der zeitgesteuerten Dienste erfolgt in der Konfigurationsdatei der Anwendung, abhängig von der Umgebung.

> Die Konfiguration darf niemals mit `*` beginnen; dies würde eine Ausführung jede Sekunde auslösen und somit Performance-Probleme mit Schneeballeffekt verursachen, falls die Verarbeitung irgendwann länger als 1 Sekunde dauert.

Navigieren Sie dazu in der Anwendung, die Sie entwickeln, zur Umgebungskonfigurationsdatei. In diesem Beispiel verwenden wir die Entwicklungsumgebungsdatei unter:

- 📂 `config/_development.json`

Prüfen Sie, ob bereits Cron-Konfigurationen vorhanden sind; falls nicht, fügen Sie am Ende der Konfigurationsdatei (im JSON-Format) die Konfigurationsparameter hinzu:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "mein-job",
                "config": "0 30 12 * * ?",
                "url": "http://meine-app.local.netu.no:9000/services/jobs/mein-job"
            },
            {
                "name": "mein-job",
                "config": "0 0/2 * * * ?",
                "url": "http://meine-app.local.netu.no:9000/services/jobs/mein-anderer-job",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "typ": "kunde"
                }
            }
        ]
    },
    ...
}
```

In dieser Konfiguration wird der erste Job jeden Tag um 12:30 Uhr ausgeführt.

Und der zweite Job wird alle 2 Minuten ausgeführt.


##### Jobs

Die Liste der zeitgesteuerten Dienste in der Anwendung; da es ein Array ist, können mehrere Dienste konfiguriert werden.

##### Secret

Dies ist ein Sicherheitsschlüsselparameter, der den Dienst schützt, sodass er nur ausgeführt wird, wenn er diesen Parameter mit exakt demselben Wert erhält.

Denn die `jobs` sind öffentliche Dienste, und um zu verhindern, dass sie extern ausgeführt werden, enthalten sie diesen Schutz.

##### Name

Der Name, der den Dienst intern identifiziert und zur Verwaltungsmanipulation wie Stoppen und Fortsetzen verwendet werden kann.

##### Config

Die Konfiguration des Ausdrucks für die Zeitsteuerung des Dienstes, also die Regeln seiner Planung.

> Die Konfiguration darf niemals mit `*` beginnen; dies würde eine Ausführung jede Sekunde auslösen und somit Performance-Probleme mit Schneeballeffekt verursachen, falls die Verarbeitung irgendwann länger als 1 Sekunde dauert.

Siehe unten die unterstützten Ausdrücke.

##### URL

Die Adresse, die regelmäßig ausgeführt wird.

##### Params

Dies sind die Parameter, die bei der Ausführung an die URL übergeben werden; die URL wird mit der Methode **HTTP POST** ausgeführt, sodass zusätzliche Parameter wie der _typ_ im obigen Beispiel hinzugefügt werden können oder sogar ein anderer geheimer Schlüssel angegeben werden kann.

### Unterstützte Formate der Cron-Ausdrücke

|FELDNAME | ERFORDERLICH | AKZEPTIERTE WERTE | ERLAUBTE SONDERZEICHEN |
| ------- |:------:|:-----------:|--------------|
| Sekunden | JA | 0-59 | , - * / |
| Minuten | JA | 0-59 | , - * / |
| Stunden | JA | 0-23 | , - * / |
| Tag des Monats | JA | 1-31 | , - * ? / L W |
| Monat | JA | 1-12 oder JAN-DEC | , - * / |
| Wochentag | JA | 1-7 oder SUN-SAT | , - * ? / L # |
| Jahr | NEIN | leer, 1970-2099 | , - * / |

##### Beispiele für Cron-Ausdrücke

|AUSDRUCK | BEDEUTUNG |
| ------- |------|
| 1 * * * * ? | Wird in Sekunde 1 jeder Minute ausgeführt. |
| 0 0 12 * * ? | Startet jeden Tag um 12:00 Uhr |
| 0 15 10 ? * * | Startet jeden Tag um 10:15 Uhr |
| 0 15 10 * * ? | Startet jeden Tag um 10:15 Uhr |
| 0 15 10 * * ? * | Startet jeden Tag um 10:15 Uhr |
| 0 15 10 * * ? 2005 | Startet jeden Tag um 10:15 Uhr während des Jahres 2005 |
| 0 * 14 * * ? | Startet jede Minute, beginnend um 14:00 Uhr und endend um 14:59 Uhr, jeden Tag |
| 0 0/5 14 * * ? | Startet alle 5 Minuten, beginnend um 14:00 Uhr und endend um 14:55 Uhr, jeden Tag |
| 0 0/5 14,18 * * ? | Startet alle 5 Minuten, beginnend um 14:00 Uhr und endend um 14:55 Uhr. Anschließend startet er alle 5 Minuten, beginnend um 18:00 Uhr und endend um 18:55 Uhr, jeden Tag |
| 0 0-5 14 * * ? | Startet jede Minute, beginnend um 14:00 Uhr und endend um 14:05 Uhr, jeden Tag |
| 0 10,44 14 ? 3 WED | Startet um 14:10 Uhr und um 14:44 Uhr an jedem Mittwoch im Monat März. |
| 0 15 10 ? * MON-FRI | Startet um 10:15 Uhr an jedem Werktag (Montag bis Freitag) |
| 0 15 10 15 * ? | Startet um 10:15 Uhr am 15. jedes Monats |
| 0 15 10 L * ? | Startet um 10:15 Uhr am letzten Tag jedes Monats |
| 0 15 10 L-2 * ? | Startet um 10:15 Uhr am vorletzten Tag jedes Monats |
| 0 15 10 ? * 6L | Startet um 10:15 Uhr am letzten Freitag jedes Monats |
| 0 15 10 ? * 6L 2002-2005 | Startet um 10:15 Uhr an jedem letzten Freitag jedes Monats in den Jahren 2002, 2003, 2004 und 2005 |
| 0 15 10 ? * 6#3 | Startet um 10:15 Uhr am dritten Freitag jedes Monats |
| 0 0 12 1/5 * ? | Startet um 12:00 Uhr alle 5 Tage jedes Monats, beginnend am ersten Tag jedes Monats. |
| 0 11 11 11 11 ? | Startet an jedem 11. November um 11:11 Uhr. |

> Die Konfiguration darf niemals mit `*` beginnen; dies würde eine Ausführung jede Sekunde auslösen und somit Performance-Probleme mit Schneeballeffekt verursachen, falls die Verarbeitung irgendwann länger als 1 Sekunde dauert.

## Dienst

Die zeitgesteuerten Dienste müssen im folgenden Ordner programmiert werden:

- 📂 `server/services/jobs`

Netuno führt diese Dienste automatisch aus und validiert den Parameter `secret` mit dem in der Konfiguration angegebenen Wert.

> Der `secret` dient dazu, dass der Dienst extern ohne Authentifizierung, aber auf sichere Weise ausgeführt werden kann.

Der Dienst wird gemäß der definierten Parametrisierung regelmäßig ausgeführt.

Um die Ausführung des Dienstes manuell zu testen, führen Sie einfach die direkte URL des Dienstes aus und übergeben den Parameter `secret`.

Zum Beispiel per GET:

- http://meine-app.local.netu.no:9000/services/job/mein-job?secret=\*\*\*\*\*

Die `*****` am Ende der URL müssen durch den tatsächlich konfigurierten Wert des `secret` ersetzt werden.

## Beispiel

Erstellen Sie die Datei unter:

- 📂 `server/services/jobs/test.js`

Fügen Sie in diese Dienstdatei den folgenden Code ein:
```javascript
_log.info("Testjob!")
_out.print("OK")
```

Passen Sie im JSON-Konfigurationsfile Ihrer Anwendung die Parametrisierung wie folgt an:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "test",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/test"
            }
        ]
    },
    ...
}
```

Beim Starten des Netuno-Servers im Terminal erscheint alle 30 Sekunden die Meldung `Testjob!`.

Wenn Sie die URL im Browser öffnen:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

Gibt nur `OK` zurück, und im Terminal erscheint die Meldung `Testjob!`.

> In der Umgebung `development` hat die Validierung des `secret` keine Wirkung; daher können Sie ihn ohne Angabe eines `secret` ausführen, und es funktioniert. In einer anderen Umgebung wie der Produktion wird er jedoch berücksichtigt.

## Viele Aufgaben

Wenn viele geplante Aufgaben erstellt werden müssen, empfiehlt es sich, die Anzahl der Threads zu erhöhen, die für die parallele Ausführung der verschiedenen geplanten Aufgaben verwendet werden.

Diese Konfiguration erfolgt in der Datei `config.js` im Stammverzeichnis von Netuno, indem die Beispielzeile hinzugefügt wird:

```javascript
config.cronThreadCount = 10
```

> Standardmäßig erlaubt diese Konfiguration nur 3 Threads.
> 
> Beachten Sie, dass die Anzahl der Threads entsprechend der Anzahl der CPU-Kerne erhöht werden sollte.

Die Verwendung weniger Threads für viele parallele Zeitpläne kann dazu führen, dass die Ausführung der geplanten Aufgaben stoppt.

Wenn Aufgaben nach einiger Zeit hängen bleiben, werden wahrscheinlich zu viele Aufgaben parallel ausgeführt; dann muss die Anzahl der Threads erhöht werden.

## Programmatisch

Netuno ermöglicht es, Cron Jobs programmatisch zu konfigurieren und zu steuern.

Das bedeutet, dass wir über Code alles verwalten können.

### Neue Aufgabe erstellen

Um eine neue Aufgabe zu erstellen, legen wir ihren Zeitplan über [`_cron.schedule`](/docs/library/resources/cron#schedule) an.

Die Methode [`_cron.schedule`](/docs/library/resources/cron#schedule) empfängt folgende Parameter:

1. Identifikationsschlüssel der Aufgabe: `key`.
2. Konfiguration der Zeitsteuerung für die Ausführung.
3. Adresse des Dienstes, der ausgeführt werden soll, also die: `URL`.
4. Zusätzliche Parameter, die beim Aufruf des Dienstes gesendet werden.

```javascript
_cron.schedule(
    'meine-aufgabe',
    '0 0/60 * * * ?',
    `/services/jobs/produkt-aktualisieren`,
    _val.map()
        .set('id', 123)
)
```

Wenn die Aufgaben beim Start der Anwendung automatisch erstellt werden sollen, kann diese Automatisierung in der Datei codiert werden:

- `server/core/_init.js`

Diese Datei wird immer ausgeführt, wenn die Anwendung durch den Netuno-Server initialisiert wird.

### Aufgabe entfernen

Um eine bestimmte Aufgabe zu entfernen, verwenden wir [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Dabei ist `key` der Identifikationsschlüssel der Aufgabe.

Siehe Beispiel:

```javascript
_cron.remove('meine-aufgabe')
```

### Aufgaben auflisten

Mit [`_cron.schedules()`](/docs/library/resources/cron#schedules) können wir alle konfigurierten Aufgaben auflisten.

Beispiel zum Auflisten aller geplanten Aufgaben: 

```javascript
const liste = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Schl&uuml;ssel</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parameter</td>`)
_out.println(`  <td>Beschreibung</td>`)
_out.println(`  <td>Letzte Ausf&uuml;hrung</td>`)
_out.println(`  <td>N&auml;chste Ausf&uuml;hrung</td>`)
_out.println(`  <td>Priorit&auml;t</td>`)
_out.println('</tr>')
for (const zeitplan of liste) {
        _out.println('<tr>')
        _out.println(`  <td>${zeitplan.getString('key')}</td>`)
        _out.println(`  <td>${zeitplan.getString('url')}</td>`)
        _out.println(`  <td>${zeitplan.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${zeitplan.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${zeitplan.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${zeitplan.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${zeitplan.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Aufgaben pausieren

Mit [`_cron.pause(key)`](/docs/library/resources/cron#pause) können wir die Ausführung einer bestimmten Aufgabe pausieren.

Beispiel zum Pausieren aller geplanten Aufgaben:

```javascript
const liste = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Schl&uuml;ssel</td>`)
_out.println(`  <td>Gestoppt</td>`)
_out.println('</tr>')
for (const zeitplan of liste) {
    _out.println('<tr>')
    _out.println(`  <td>${zeitplan.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(zeitplan.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Beachten Sie die Verwendung von `_cron.pause` im obigen Beispiel.

### Aufgaben fortsetzen

Mit [`_cron.resume(key)`](/docs/library/resources/cron#resume) können wir die Ausführung einer bestimmten Aufgabe fortsetzen.

Beispiel zum Fortsetzen aller geplanten Aufgaben und zur Anzeige, wann die Aufgaben ausgeführt werden:

```javascript
const liste = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Schl&uuml;ssel</td>`)
_out.println(`  <td>Reaktiviert</td>`)
_out.println(`  <td>N&auml;chste Ausf&uuml;hrung</td>`)
_out.println('</tr>')
for (const zeitplan of liste) {
    _out.println('<tr>')
    _out.println(`  <td>${zeitplan.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(zeitplan.getString('key'))}</td>`)
    _out.println(`  <td>${zeitplan.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Beachten Sie die Verwendung von `_cron.resume` im obigen Beispiel.