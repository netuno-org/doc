---
id: monitor-alerts
title: Monitoring en Waarschuwingen
sidebar_label: Monitoring en Waarschuwingen
---

Alarmering op basis van het hardwaregebruik van de server.

## Inleiding

De Netuno-server bevat een ingebouwd prestatiemonitoringsmechanisme waarmee u de impact van het softwaresysteem op het hardwareverbruik kunt analyseren.

Met monitoring kunnen apps alarmeringsregels implementeren om een melding te geven wanneer iets een niveau bereikt dat aandacht vereist.

Monitoring en waarschuwingen worden niet alleen uitgevoerd op de prestatiegegevens van het Netuno-serverproces zelf, maar ook op het hele systeem van de computer waarop het draait.

Zo is een complete monitoring met alarmering mogelijk.

## Configuratie

Met de algemene configuratie kunt u de weergave van de gegevens in de algemene Netuno-logs inschakelen en het uitvoeringsinterval van het verzamelen en analyseren van prestatie-indicatoren beheren.

De configuratie van waarschuwingen gebeurt per app en u kunt meerdere waarschuwingen per applicatie hebben.

### Logs en algemeen interval

Netuno bewaart de prestatiegegevens in de map `logs` in de hoofdmap van Netuno.

In deze map `logs` vindt u de bestanden `stats-JAAR_MAAND_DAG.json`; deze worden altijd automatisch gegenereerd volgens het interval dat u kunt wijzigen zoals hieronder wordt aangegeven.

> Voor een betere weergave van de bestanden kunt u de automatische opmaak van uw favoriete editor gebruiken of onlinehulpprogramma's zoals:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> Ze kunnen ook in **Firefox** worden geopend, dat ze uitstekend opmaakt.

##### Configuratie van de logs en het algemene interval

Om de weergave van prestatiegegevens in de algemene logs (`logs/netuno.log`) en in de **console** in te schakelen, bewerkt u het bestand `config.js` in de hoofdmap van Netuno.

Voeg de volgende regel toe als deze nog niet bestaat:

```
config.monitorLog = true
```

U kunt ook het standaardinterval van **60 seconden** wijzigen; de informatie wordt dan slechts één keer per minuut in de log weergegeven. Voeg hiervoor ook de onderstaande coderegel toe en wijzig de waarde in seconden naar de gewenste tijd:

```
config.monitorInterval = 60
```

> Dit interval is algemeen en beïnvloedt het interval dat in de waarschuwingen van de apps is geconfigureerd; dat zal nooit kleiner zijn dan dit algemene interval.

**Herstart** de Netuno-server om de wijziging toe te passen.

In de console wordt dan informatie over de monitoring weergegeven, bijvoorbeeld:

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

### Waarschuwingen in apps

Waarschuwingen worden in de applicaties geconfigureerd; bewerk daarom de configuratie van uw app.

Dat wil zeggen, in de applicatie in de map `config`, in de omgevingsconfiguratie, in bestanden zoals:

- _development.json
- _production.json

Voeg de configuratie van monitoringwaarschuwingen toe:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mijn-alert",
                "url": "http://APP-NAAM.local.netu.no:9000/services/mijn-alertdienst"
            }
        ]
    }
...
```

> Dit is de eenvoudigste configuratie.

Wanneer er een situatie is die een waarschuwing vereist, wordt deze `url` aangeroepen en worden de prestatieparameters doorgegeven.

Standaard hebben waarschuwingen een interval van **1 uur** per type waarschuwing. Er wordt dus alleen een waarschuwing gegeven als de **Processor**, het **Geheugen** of de **Schijf** (HD) de grens van **90%** van de maximale capaciteit overschrijdt; na een uur wordt opnieuw een waarschuwing verzonden.

> Bij meerdere waarschuwingen wordt het interval verkort. Als bijvoorbeeld de geheugenwaarschuwing is afgegaan en na 20 minuten ook de schijf boven de 90% komt, wordt onmiddellijk een nieuwe waarschuwing afgegaan en begint het interval van 1 uur opnieuw.

### Geavanceerde waarschuwingen

Hieronder staat een geavanceerdere configuratie waarmee u het interval en de verbruiksgrenzen van de **Processor**, het **Geheugen** en de **Schijf** (HD) kunt wijzigen:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mijn-eenvoudige-alert",
                "url": "http://APP-NAAM.local.netu.no:9000/services/mijn-alertdienst"
            },
            {
                "name": "mijn-geavanceerde-alert",
                "url": "http://APP-NAAM.local.netu.no:9000/services/mijn-alertdienst",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "mijn-meer-geavanceerde-alert",
                "url": "http://APP-NAAM.local.netu.no:9000/services/mijn-alertdienst",
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

> De bovenstaande waarden zijn **standaardwaarden**!

##### Naam

Naam ter identificatie van de waarschuwing.

##### Ingeschakeld

Hiermee schakelt u de waarschuwing in of uit; de standaardwaarde is _true_ (ingeschakeld).

##### Interval

Bepaalt het interval tussen waarschuwingen in **seconden**; de standaardwaarde is _3600 seconden_ (één uur).

##### Drempelwaarde

Bepaalt de grenzen voor CPU, Geheugen en Schijf (HD).

##### CPU

De CPU-verbruiksgrens waarbij de waarschuwing moet afgaan.

U kunt ook een specifieke grens voor _system_ en _process_ instellen.

##### Geheugen

De geheugenverbruiksgrens waarbij de waarschuwing moet afgaan.

U kunt ook een specifieke grens voor _system_ en _process_ instellen.

##### Systeem

Dit zijn de grenzen voor het besturingssysteem in het algemeen, met alle processen die actief zijn.

##### Proces

Dit zijn de grenzen alleen voor het Netuno-serverproces.

##### Schijf

De verbruiksgrens voor de Schijf (HD) waarbij de waarschuwing moet afgaan.

## Verzonden parameters

Wanneer een `url` wordt aangeroepen omdat een waarschuwing is afgegaan doordat een grens is overschreden, worden de prestatiegegevens over het hardwareverbruik verzonden.

De `url` wordt aangeroepen met de methode `POST` en de inhoud wordt als JSON verzonden: `Content-Type: application/json`.

Voorbeeld van de JSON met gegevens die naar de `url` van de waarschuwingen wordt verzonden:

```
{
    "key": "mijn-eenvoudige-alert",
    "app": "mijn-app",
    "hostname": "mijn-computer",
    "timezone": "Europe/Amsterdam",
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

### Beschrijving van de parameters

##### Sleutel

De naam (sleutel) die in de waarschuwingsconfiguratie van de applicatie is gedefinieerd.

##### App

De naam van de applicatie waarin de waarschuwing is geconfigureerd en die de waarschuwing veroorzaakt.

##### Hostnaam

De naam van de computer waarop de Netuno-server draait die de waarschuwing veroorzaakt.

##### Tijdzone

De tijdzone van de computer waarop de Netuno-server draait en die de waarschuwing veroorzaakt.

##### Gestart

Datum en tijd waarop de Netuno-server is gestart.

##### Moment

Datum en tijd waarop de waarschuwing is gegenereerd.

##### Vorige

Informatie over de vorige waarschuwing; deze heeft exact dezelfde JSON-structuur, maar met de gegevens van de eerder veroorzaakte waarschuwing.

##### Waarschuwingen

Lijst van waarschuwingen die zijn afgegaan, met het type (_type_) van de waarschuwing en de grens (_threshold_) die is overschreden.

De typen waarschuwingen zijn:

- `cpu-system`: Waarschuwing voor CPU-verbruik van het computersysteem met alle actieve processen in het algemeen.
- `cpu-process`: Waarschuwing voor CPU-verbruik van het Netuno-serverproces.
- `memory-system`: Waarschuwing voor geheugenverbruik van het computersysteem met alle actieve processen in het algemeen.
- `memory-process`: Waarschuwing voor geheugenverbruik van het Netuno-serverproces.
- `disk`: Waarschuwing voor de Schijf (HD).

##### CPU

Dit zijn de processorgegevens die met de volgende informatie worden verzonden:

- `cores`: Aantal fysieke processors.
- `vcores`: Aantal virtuele processors (threads).
- `load`: Informatie over de processorbelasting:
  - `system`: De verwerkingsbelasting van het besturingssysteem met alle processen in het algemeen; de waarde ligt tussen **0** (_0%_) en **1** (_100%_).
  - `process`: De verwerkingsbelasting van de Netuno-server; de waarde ligt tussen **0** (_0%_) en **1** (_100%_).
  - `ticks`: Geeft de processorbelasting in het algemene systeem terug in een array met acht elementen die in milliseconden aangeeft wat is besteed in de volgende toestanden: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) en _Steal_ (7).
  - `frequency`: De maximale frequentie (`max`) van de processor en de gemiddelde gebruikte frequentie over alle cores (`average`); de waarden zijn in _hertz_, dus 2500000000 _Hz_ komt overeen met 2.5 _GHz_.

> De deling van de frequentie gebeurt als volgt:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_Hertz_), KHz (_Kilohertz_), MGz (_Megahertz_), GHz (_Gigahertz_)

##### Geheugen

Dit zijn de geheugengegevens die met de volgende informatie worden verzonden:

- `system`: Informatie over het geheugenverbruik van het besturingssysteem met alle processen in het algemeen.
  - `total`: Totaal geheugen van de computer.
  - `used`: Toegewezen geheugen dat in gebruik is.
  - `free`: Beschikbaar vrij geheugen.
- `process`: Gegevens over het geheugengebruik van het Netuno-serverproces.
  - `max`: Maximale hoeveelheid geheugen die door Netuno kan worden gebruikt.
  - `total`: Totaal gereserveerd (toegewezen) geheugen, inclusief gebruikt en "vrij" geheugen.
  - `used`: Hoeveelheid geheugen die daadwerkelijk in gebruik is.
  - `free`: Hoeveelheid vrij (gereserveerd) geheugen dat beschikbaar is voor gebruik.
  - `gc`: Of de uitvoering van de _garbage collector_ (geheugenopruimer) is aangeroepen.

> De waarden zijn in bytes, dus 17179869184 bytes komt overeen met 16 gigabyte.
>
> Hoe de deling wordt uitgevoerd:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Schijf

Dit zijn de gebruiksgegevens van de harde schijf (HD) die met de volgende informatie worden verzonden:

- `total`: Totaalformaat van de schijf.
- `used`: Hoeveelheid gebruikte ruimte op de schijf.
- `free`: Hoeveelheid beschikbare ruimte op de schijf.

> De waarden zijn in bytes, dus 500068036608 bytes komt overeen met 465,72 gigabyte.
>
> Hoe de deling wordt uitgevoerd:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Voorbeeld van alarmeringsdiensten

Netuno-diensten kunnen als `url` voor de waarschuwingen worden gebruikt.

Het verzenden van alarmeringen kan via e-mail of sms worden geïmplementeerd, of u kunt de informatie zelfs in een database opslaan.

Elk type `url` kan worden gebruikt, zodat de waarschuwing ook naar andere technologieën kan worden gestuurd, zoals NodeJS, PHP, .NET, Rails, Laravel, Sails, enz.

In het geval van Netuno kan een dienst voor het verzenden van e-mails worden geïmplementeerd volgens de aanwijzingen in de tutorial [E-mails verzenden](/docs/academy/server/services/sending-emails).

Hieronder staat hoe u een volledig voorbeeld implementeert dat is aangepast aan monitoringalarmering.

Controleer voordat u begint of u de SMTP-configuratie in de applicatieconfiguratie hebt en ook de monitoringconfiguratie, bijvoorbeeld:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "MIJN.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Waarschuwing: ",
            "from": "noreply@MIJN.DOMEIN.com",
            "to": "info@MIJN.DOMEIN.com",
            "username": "noreply@MIJN.DOMEIN.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "e-mail-alert",
                "url": "http://MIJN-APP.local.netu.no:9000/services/monitor/waarschuwing"
            }
        ]
    }
...
```

> Zorg ervoor dat u de parameters aanpast, vooral de waarden die met hoofdletters zijn gemarkeerd.

De alarmeringsdienst kan in `server/services/monitor/waarschuwing.js` staan, met de volgende code:

```
_log.info("Informatie over monitoringwaarschuwing:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const geheugen = _req.getValues("memory")
const schijf = _req.getValues("disk")

const cpuBelastingSysteem = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cpuBelastingProces = Math.round(cpu.getValues("load").getFloat("process") * 100)
const geheugenSysteemVrij = Math.round(geheugen.getValues("system").getLong("free") / 1024 / 1024)
const geheugenProcesVrij = Math.round(geheugen.getValues("process").getLong("free") / 1024 / 1024)
const schijfVrij = Math.round(schijf.getLong("free") / 1024 / 1024)

let onderwerpTypen = ""
let htmlInformatie = ""

for (const waarschuwingstype of _req.getValues("alerts")) {
    if (onderwerpTypen != "") {
        onderwerpTypen += ", "
    }
    if (waarschuwingstype.getString("type") == 'cpu-system') {
        onderwerpTypen += "CPU van het systeem"
        htmlInformatie += `<p>De processor van het <b>systeem</b> bereikt <b>${cpuBelastingSysteem}%</b></p>`
    }
    if (waarschuwingstype.getString("type") == 'cpu-process') {
        onderwerpTypen += "CPU van het proces"
        htmlInformatie += `<p>De processor van het <b>proces</b> bereikt <b>${cpuBelastingProces}%</b></p>`
    }
    if (waarschuwingstype.getString("type") == 'memory-system') {
        onderwerpTypen += "Geheugen van het systeem"
        htmlInformatie += `Het geheugen van het <b>systeem</b> heeft slechts <b>${geheugenSysteemVrij} MB</b> vrij.`
    }
    if (waarschuwingstype.getString("type") == 'memory-process') {
        onderwerpTypen += "Geheugen van het proces"
        htmlInformatie += `Het geheugen van het proces heeft slechts <b>${geheugenProcesVrij} MB</b> vrij.`
    }
    if (waarschuwingstype.getString("type") == 'disk') {
        onderwerpTypen += "Schijf"
        htmlInformatie += `De schijf heeft slechts <b>${schijfVrij} MB</b> vrij.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${onderwerpTypen}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInformatie}`

smtp.text = "Informatie in de HTML-versie van deze e-mail."

smtp.send()
```

> Er wordt een e-mail met de waarschuwingen verzonden.

In dit geval was het alleen nodig om de schijfruimte te melden, zoals te zien is in deze ontvangen e-mail:

![e-mail](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Voor het implementeren van **SMS**-verzending zijn er voorbeelden in de **demo**_nstratie_-applicatie met de integratie van externe REST-API's, waarmee u kunt integreren met het SMS-platform van uw voorkeur.