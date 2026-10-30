---
id: monitor-alerts
title: Überwachung und Alarme
sidebar_label: Überwachung und Alarme
---

Alarmierung zur Hardware-Auslastung des Servers.

## Einführung

Der Netuno-Server enthält einen eingebauten Mechanismus zur Performance-Überwachung, mit dem sich die Auswirkungen des Softwaresystems auf den Hardwareverbrauch analysieren lassen.

Mit der Überwachung können Apps Alarmierungsregeln implementieren, um eine Benachrichtigung auszulösen, wenn ein Wert einen Schwellenwert erreicht, der Aufmerksamkeit erfordert.

Die Überwachung und die Alarme werden nicht nur auf die Performance-Daten des Netuno-Serverprozesses selbst angewendet, sondern auch auf das gesamte laufende Computersystem.

Damit ist eine vollständige Überwachung mit Alarmierung möglich.

## Konfiguration

Die allgemeine Konfiguration ermöglicht es, die Anzeige der Daten in den allgemeinen Netuno-Logs zu aktivieren und das Ausführungsintervall für die Erfassung und Analyse der Performance-Kennzahlen zu steuern.

Die Konfiguration der Alarme erfolgt in jeder App und ermöglicht mehrere Alarme pro Anwendung.

### Logs und allgemeines Intervall

Netuno speichert die Performance-Logs im Ordner `logs`, der sich im Stammordner von Netuno befindet.

In diesem `logs`-Ordner befinden sich die Dateien `stats-JAHR_MONAT_TAG.json`; diese werden immer automatisch gemäß dem Intervall erzeugt, das wie unten beschrieben geändert werden kann.

> Für eine bessere Ansicht der Dateien können Sie die automatische Formatierung Ihres bevorzugten Editors oder Online-Tools wie die folgenden verwenden:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> Sie können sie auch in **Firefox** öffnen, der eine hervorragende Formatierung vornimmt.

##### Konfiguration der Logs und des allgemeinen Intervalls

Um die Anzeige der Performance-Daten in den allgemeinen Logs (`logs/netuno.log`) und in der **Konsole** zu aktivieren, bearbeiten Sie die Datei `config.js` im Stammverzeichnis des Netuno-Ordners.

Fügen Sie die folgende Zeile hinzu, falls sie noch nicht vorhanden ist:

```
config.monitorLog = true
```

Sie können auch das Standardintervall von **60 Sekunden** ändern, d. h. die Informationen werden standardmäßig nur jede Minute protokolliert. Fügen Sie dazu ebenfalls die folgende Codezeile hinzu und ändern Sie den Sekundenwert auf die gewünschte Zeit:

```
config.monitorInterval = 60
```

> Dieses Intervall ist global und wirkt sich auf das in den Alarmen der Apps konfigurierte Intervall aus, das nie kleiner als dieses globale Intervall sein wird.

**Starten Sie** den Netuno-Server neu, damit die Änderungen wirksam werden.

Auf der Konsole werden nun die Überwachungsinformationen angezeigt, zum Beispiel:

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
CPU Load: 
	System: 19.1% (+19.1%)
	Process: 3.9% (+3.9%)
Memory: 
	System: 
		Used: 9,525.9MB (58.1% +148.0MB)
		Free: 6,858.1MB (41.9% -148.0MB)
	Process: 
		Total: 384.0MB (9.4% +126.0MB)
		Used: 129.6MB (3.2% +18.9MB)
		Free: 254.4MB (6.2% +107.1MB)
		GC: false
Disk: 
	Used: 465,047.8MB (97.5% +21.3MB)
	Free: 11,854.3MB (2.5% -21.3MB)
```

### Alarme in den Apps

Die Alarme werden in den Anwendungen konfiguriert; bearbeiten Sie daher die Konfiguration Ihrer App.

Das heißt, innerhalb der Anwendung im Ordner `config` in der Umgebungskonfiguration, in Dateien wie:

- _development.json
- _production.json

Fügen Sie die Konfiguration der Überwachungsalarme hinzu:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mein-alarm",
                "url": "http://APP-NAME.local.netu.no:9000/services/mein-alarmdienst"
            }
        ]
    }
...
```

> Dies ist die einfachste Konfiguration.

Wenn eine Situation eintritt, die alarmiert werden muss, wird diese `url` aufgerufen und die Performance-Parameter werden übergeben.

Standardmäßig haben die Alarme ein Intervall von **1h** für jeden Alarmtyp; der Alarm wird also nur ausgelöst, wenn der **Prozessor**, der **Speicher** oder die **Festplatte** (HD) den Grenzwert von **90 %** der maximalen Kapazität überschreitet. Nach einer Stunde wird ein weiterer Alarm gesendet.

> Bei mehreren Alarmen wird das Intervall verkürzt. Wenn beispielsweise der Speicheralarm ausgelöst wurde und nach 20 Minuten auch die Festplatte 90 % überschreitet, wird sofort ein neuer Alarm ausgelöst und das 1-Stunden-Intervall beginnt von neuem.

### Erweiterte Alarme

Nachfolgend finden Sie eine erweiterte Konfiguration, mit der das Intervall und die Grenzwerte für den Verbrauch von **Prozessor**, **Speicher** und **Festplatte** (HD) geändert werden können:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mein-einfacher-alarm",
                "url": "http://APP-NAME.local.netu.no:9000/services/mein-alarmdienst"
            },
            {
                "name": "mein-erweiterter-alarm",
                "url": "http://APP-NAME.local.netu.no:9000/services/mein-alarmdienst",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "mein-noch-erweiterter-alarm",
                "url": "http://APP-NAME.local.netu.no:9000/services/mein-alarmdienst",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": {
                        "system": 90,
                        "process": 90
                    },
                    "memory": {
                        "system": 90,
                        "process": 90
                    },
                    "disk": 90
                }
            }
        ]
    }
...
```

> Die obigen Werte sind **Standardwerte**!

##### Name

Identifikationsname des Alarms.

##### Enabled

Ermöglicht das Aktivieren und Deaktivieren des Alarms; der Standardwert ist _true_ (aktiv).

##### Interval

Definiert das Intervall zwischen den Alarmen in **Sekunden**; der Standardwert ist _3600 Sekunden_ (eine Stunde).

##### Threshold

Definiert die Grenzwerte für CPU, Speicher und Festplatte (HD).

##### CPU

Der Grenzwert für die CPU-Auslastung, bei dem der Alarm ausgelöst werden soll.

Ermöglicht außerdem die Definition spezifischer Grenzwerte für _system_ und _process_.

##### Memory

Der Grenzwert für die Speicherauslastung, bei dem der Alarm ausgelöst werden soll.

Ermöglicht außerdem die Definition spezifischer Grenzwerte für _system_ und _process_.

##### System

Dies sind die Grenzwerte für das Betriebssystem insgesamt mit allen laufenden Prozessen.

##### Process

Dies sind die Grenzwerte nur für den Prozess des Netuno-Servers.

##### Disk

Der Grenzwert für die Festplattenauslastung (HD), bei dem der Alarm ausgelöst werden soll.

## Gesendete Parameter

Wenn eine `url` aufgerufen wird, wird ein Alarm ausgelöst, weil ein Grenzwert überschritten wurde; dabei werden die Performance-Daten der Hardware-Auslastung gesendet.

Die `url` wird mit der Methode `POST` ausgeführt und der Inhalt wird als JSON gesendet: `Content-Type: application/json`.

Beispiel der JSON-Daten, die an die `url` der Alarme gesendet werden:

```
{
    "key": "mein-einfacher-alarm",
    "app": "meine-app",
    "hostname": "mein-computer",
    "timezone": "Europe/Berlin",
    "started": "2020-11-17 14:55:07.682",
    "moment": "2020-11-17 14:56:08.098",
    "before": {
        ...
    },
    "alerts": [
        {
            "threshold": 90,
            "type": "cpu-system"
        },
        {
            "threshold": 90,
            "type": "disk"
        }
    ],
    "cpu": {
        "cores": 4,
        "vcores": 8,
        "load": {
            "system": 0.91311,
            "process": 0.03945,
            "ticks": [ 575084, 0, 260470, 6796463, 0, 0, 0, 0 ],
            "frequency": {
                "average": 2500000000,
                "max": 2500000000
            }
        }
    },
    "memory": {
        "system": {
            "total": 17179869184,
            "used": 9988640768,
            "free": 7191228416
        },
        "process": {
            "total": 402653184,
            "max": 4294967296,
            "used": 135885832,
            "free": 266767352,
            "gc": false
        }
    },
    "disk": {
        "total": 500068036608,
        "used": 487637929984,
        "free": 12430106624
    }
}
```

### Beschreibung der Parameter

##### Key

Der Name (Schlüssel), der in der Alarmkonfiguration der Anwendung definiert ist.

##### App

Der Name der Anwendung, für die der Alarm konfiguriert ist und die seine Auslösung verursacht.

##### Hostname

Name des Computers, auf dem der Netuno-Server ausgeführt wird, der den Alarm auslöst.

##### Timezone

Zeitzone des Computers, auf dem der Netuno-Server ausgeführt wird und der den Alarm auslöst.

##### Started

Datum und Uhrzeit, zu der der Netuno-Server gestartet wurde.

##### Moment

Datum und Uhrzeit des Moments, in dem der Alarm erzeugt wurde.

##### Before

Informationen des vorherigen Alarms; hat genau dieselbe JSON-Struktur, aber mit den Daten des zuvor ausgelösten Alarms.

##### Alerts

Liste der ausgelösten Alarme, in der der Typ (_type_) des Alarms und der überschrittene Grenzwert (_threshold_) angegeben werden.

Die Alarmtypen sind:

- `cpu-system`: Alarm für die CPU-Auslastung des Computersystems mit allen laufenden Prozessen insgesamt.
- `cpu-process`: Alarm für die CPU-Auslastung des Netuno-Serverprozesses.
- `memory-system`: Alarm für die Speicherauslastung des Computersystems mit allen laufenden Prozessen insgesamt.
- `memory-process`: Alarm für die Speicherauslastung des Netuno-Serverprozesses.
- `disk`: Alarm für die Festplatte (HD).

##### CPU

Dies sind die Prozessordaten, die mit folgenden Informationen gesendet werden:

- `cores`: Anzahl der physischen Prozessoren.
- `vcores`: Anzahl der virtuellen Prozessoren (Threads).
- `load`: Informationen zur Prozessorlast:
  - `system`: Die Verarbeitungslast des Betriebssystems mit allen Prozessen insgesamt; der Wert liegt zwischen **0** (_0 %_) und **1** (_100 %_).
  - `process`: Die Verarbeitungslast des Netuno-Servers; der Wert liegt zwischen **0** (_0 %_) und **1** (_100 %_).
  - `ticks`: Gibt die Prozessorlast im Gesamtsystem in einem Array mit acht Elementen zurück, das in Millisekunden angibt, wie viel in den folgenden Zuständen verbraucht wurde: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) und _Steal_ (7).
  - `frequency`: Maximale Frequenz (`max`) des Prozessors und die durchschnittliche Frequenz, die zwischen allen Kernen genutzt wird (`average`); die Werte sind in _Hertz_, also entsprechen 2500000000 _Hz_ 2.5 _GHz_.

> Die Frequenzumrechnung erfolgt wie folgt:
>
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_Hertz_), KHz (_Kilohertz_), MGz (_Megahertz_), GHz (_Gigahertz_)

##### Memory

Dies sind die Speicherdaten, die mit folgenden Informationen gesendet werden:

- `system`: Informationen zur Speicherauslastung des Betriebssystems mit allen Prozessen insgesamt.
  - `total`: Gesamtspeicher des Computers.
  - `used`: Belegter bzw. verwendeter Speicher.
  - `free`: Verfügbarer freier Speicher.
- `process`: Daten zur Speichernutzung des Netuno-Serverprozesses.
  - `max`: Maximale Speichermenge, die von Netuno genutzt werden kann.
  - `total`: Gesamter reservierter (zugewiesener) Speicher; enthält den verwendeten und den „freien“ Speicher.
  - `used`: Speichermenge, die tatsächlich verwendet wird.
  - `free`: Menge des freien (reservierten) Speichers, der zur Nutzung verfügbar ist.
  - `gc`: Ob die Ausführung des _garbage collector_ (Speicherbereiniger) aufgerufen wurde.

> Die Werte sind in Bytes; 17179869184 Bytes entsprechen also 16 Gigabytes.
>
> So erfolgt die Umrechnung:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Disk

Dies sind die Nutzungsdaten der Festplatte (HD), die mit folgenden Informationen gesendet werden:

- `total`: Gesamtgröße der Festplatte.
- `used`: Menge des auf der Festplatte verwendeten Speicherplatzes.
- `free`: Menge des auf der Festplatte verfügbaren Speicherplatzes.

> Die Werte sind in Bytes; 500068036608 Bytes entsprechen also 465,72 Gigabytes.
>
> So erfolgt die Umrechnung:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Beispiel für Alarmierungsdienste

Die Netuno-Dienste können als `url` der Alarme verwendet werden.

Der Versand der Alarmierung per E-Mail, SMS oder sogar das Speichern der Informationen in einer Datenbank kann implementiert werden.

Es kann auch jede Art von `url` verwendet werden, sodass der Alarm an andere Technologien wie NodeJS, PHP, .NET, Rails, Laravel, Sails usw. gesendet werden kann.

Im Fall von Netuno kann ein Dienst für den E-Mail-Versand gemäß den Anweisungen im Tutorial [E-Mail-Versand](/docs/academy/server/services/sending-emails) implementiert werden.

Nachfolgend sehen Sie, wie ein vollständiges, an die Überwachungsalarmierung angepasstes Beispiel implementiert wird.

Bevor Sie beginnen, stellen Sie sicher, dass Sie die SMTP-Konfiguration in der Anwendungskonfiguration sowie die Überwachungskonfiguration haben, zum Beispiel:

```
...
    "smtp": {
        "alarm": {
            "enabled": true,
            "host": "MEIN.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alarm: ",
            "from": "noreply@MEINE.DOMAIN.com",
            "to": "info@MEINE.DOMAIN.com",
            "username": "noreply@MEINE.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alarm-email",
                "url": "http://MEINE-APP.local.netu.no:9000/services/monitor/alarm"
            }
        ]
    }
...
```

> Stellen Sie sicher, dass Sie die Parameter anpassen, insbesondere diejenigen, die in den Werten mit Großbuchstaben hervorgehoben sind.

Der Alarmierungsdienst kann in `server/services/monitor/alarm.js` mit folgendem Code liegen:

```
_log.info("Informationen zum Überwachungsalarm:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const speicher = _req.getValues("memory")
const festplatte = _req.getValues("disk")

const cpuLastSystem = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cpuLastProzess = Math.round(cpu.getValues("load").getFloat("process") * 100)
const speicherSystemFrei = Math.round(speicher.getValues("system").getLong("free") / 1024 / 1024)
const speicherProzessFrei = Math.round(speicher.getValues("process").getLong("free") / 1024 / 1024)
const festplatteFrei = Math.round(festplatte.getLong("free") / 1024 / 1024)

let betreffTypen = ""
let htmlInfos = ""

for (const alarmTyp of _req.getValues("alerts")) {
    if (betreffTypen != "") {
        betreffTypen += ", "
    }
    if (alarmTyp.getString("type") == 'cpu-system') {
        betreffTypen += "System-CPU"
        htmlInfos += `<p>Der Prozessor des <b>Systems</b> erreicht <b>${cpuLastSystem}%</b></p>`
    }
    if (alarmTyp.getString("type") == 'cpu-process') {
        betreffTypen += "Prozess-CPU"
        htmlInfos += `<p>Der Prozessor des <b>Prozesses</b> erreicht <b>${cpuLastProzess}%</b></p>`
    }
    if (alarmTyp.getString("type") == 'memory-system') {
        betreffTypen += "Systemspeicher"
        htmlInfos += `Der Speicher des <b>Systems</b> hat nur noch <b>${speicherSystemFrei} MB</b> frei.`
    }
    if (alarmTyp.getString("type") == 'memory-process') {
        betreffTypen += "Prozessspeicher"
        htmlInfos += `Der Speicher des Prozesses hat nur noch <b>${speicherProzessFrei} MB</b> frei.`
    }
    if (alarmTyp.getString("type") == 'disk') {
        betreffTypen += "Festplatte"
        htmlInfos += `Die Festplatte hat nur noch <b>${festplatteFrei} MB</b> frei.`
    }
}

const smtp = _smtp.init("alarm")

smtp.subject += `${_req.getString("hostname")} - ${betreffTypen}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInfos}`

smtp.text = "Informationen in der HTML-Inhaltsversion dieser E-Mail."

smtp.send()
```

> Es wird eine E-Mail mit den Alarmen gesendet.

In diesem Fall musste nur die Festplattensituation alarmiert werden, wie in dieser empfangenen E-Mail zu sehen ist:

![E-Mail](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Für die Implementierung des Versands von **SMS** gibt es Beispiele in der **Demo**_anwendung_ mit der Integration entfernter REST-APIs, die die Anbindung an die SMS-Plattform Ihrer Wahl ermöglicht.