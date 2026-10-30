---
id: cron-jobs
title: Cron Jobs - Geplande services
sidebar_label: Cron Jobs
---

## Voordat je begint

Voordat je verdergaat, controleer je of je basiskennis van _**JavaScript**_ hebt en of je al de basis van Netuno onder de knie hebt met de stap-voor-stap die beschikbaar is in de [Academie](/docs/academy/overview).

## Inleiding

Het is gebruikelijk dat taken periodiek moeten worden uitgevoerd: van tijd tot tijd is het nodig gegevens naar een ander systeem te sturen, gegevens uit een ander systeem te importeren, een e-mail te verzenden, records in de database te valideren, en nog veel meer...

Op Linux/UNIX/Mac bestaat de Cron-service met het bekende configuratiebestand `crontab`; op Windows bestaat de Task Manager (_Taakbeheer_).

En in Netuno is Cron Jobs al geïntegreerd, wat helpt om externe configuraties te vermijden.

Dit soort periodieke operaties staat bekend als Cron Jobs of in het Nederlands geplande services.

Elke Netuno-applicatie kan talloze Cron Jobs hebben, en de Cron Jobs van Netuno kunnen zowel interne services en URL's uitvoeren als externe URL's.

> Raadpleeg voor meer informatie de documentatie van de resource [cron](/docs/library/resources/cron).

## Hoe het werkt

Elke applicatie heeft de configuratie van haar eigen geplande services (**cron jobs**) met de bijbehorende uitvoeringsconfiguratie.

Simpel gezegd is elke geplande service een aparte **job**, met een eigen uitvoeringsconfiguratie; deze kan elke minuut, elke 5 minuten, elk uur, op een bepaalde dag en tijd van de week worden uitgevoerd, enz... en heeft ook de URL die wordt aangeroepen wanneer het moment van uitvoering aanbreekt.

> Netuno gebruikt de bibliotheek <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> om de uitvoering van de geplande services te beheren. De configuratie van de timingregels is specifiek voor deze bibliotheek.

Zo verloopt de uitvoering van elke job via het aanroepen van een URL (_webadres, link_), die zowel extern als intern binnen de applicatie zelf kan zijn. Als het een externe link is, kan deze van een andere applicatie afkomstig zijn of een willekeurige externe URL op internet, in het netwerk of op de computer zijn.

![Cron-diagram](/docs/assets/academy/server/cron.svg)

De grafiek hierboven toont dat Netuno 2 applicaties bevat, waarbij elk 2 jobs (_geplande services_) heeft geconfigureerd, die op verschillende momenten worden uitgevoerd volgens een willekeurige configuratie.

Het uitvoeringsgedrag dat zal optreden is als volgt:

- App 1 start 2 jobs:
  - Job 1: Voert een URL uit van een interne service van App 1 zelf.
  - Job 2: Voert een externe, openbare URL uit.
- App 2 start 2 jobs:
  - Job 3: Voert een URL uit van een interne service van App 2 zelf
  - Job 4: Voert een service-URL van App 1 uit.

> De applicaties moeten de services die door Cron Jobs worden uitgevoerd in de map hebben:
> - 📂 `server/services/jobs`

Elke URL wordt uitgevoerd met de HTTP-methode POST. In de configuratie van de job kunnen extra parameters worden toegevoegd, en ook een geheime sleutel om te voorkomen dat deze buiten de gecontroleerde context wordt uitgevoerd.

## Configuratie

De configuratie van de geplande services wordt uitgevoerd in het configuratiebestand van de applicatie, afhankelijk van de omgeving.

> De configuratie mag nooit met `*` beginnen; dit veroorzaakt uitvoering elke seconde, wat prestatieproblemen met een sneeuwbaleffect oplevert als de verwerking op enig moment langer dan 1 seconde duurt.

Om dit te doen, navigeer je binnen de applicatie die je ontwikkelt naar het omgevingsconfiguratiebestand. In dit voorbeeld gebruiken we het ontwikkelomgevingsbestand dat zich bevindt in:

- 📂 `config/_development.json`

Controleer of er nog geen Cron-configuraties bestaan; als die er niet zijn, voeg je aan het einde van het configuratiebestand (in JSON-formaat) de configuratieparameters toe:

```
{
    ...
    "cron": {
        "secret": "m3u-G3heim",
        "jobs": [
            {
                "name": "mijn-job",
                "config": "0 30 12 * * ?",
                "url": "http://mijn-app.local.netu.no:9000/services/jobs/mijn-job"
            },
            {
                "name": "mijn-job",
                "config": "0 0/2 * * * ?",
                "url": "http://mijn-app.local.netu.no:9000/services/jobs/mijn-andere-job",
                "params": {
                    "secret": "m3u-And3r-G3heim",
                    "type": "klant"
                }
            }
        ]
    },
    ...
}
```

In deze configuratie wordt de eerste job elke dag om 12:30 uur uitgevoerd.

En de tweede job wordt elke 2 minuten uitgevoerd.


##### Jobs

De lijst met geplande services in de applicatie; omdat het een array is, kunnen we meerdere services configureren.

##### Secret

Het is een beveiligingssleutelparameter die de service beschermt, zodat deze alleen wordt uitgevoerd wanneer deze parameter met exact dezelfde waarde wordt ontvangen.

Dit komt omdat de `jobs` openbare services zijn en, om te voorkomen dat ze extern worden uitgevoerd, deze bescherming bevatten.

##### Name

De naam die de service intern identificeert; deze kan worden gebruikt voor beheerhandelingen, zoals stoppen en hervatten.

##### Config

De configuratie van de timingexpressie van de service, oftewel de regels van de planning.

> De configuratie mag nooit met `*` beginnen; dit veroorzaakt uitvoering elke seconde, wat prestatieproblemen met een sneeuwbaleffect oplevert als de verwerking op enig moment langer dan 1 seconde duurt.

Bekijk hieronder de ondersteunde expressies.

##### URL

Het adres dat periodiek wordt uitgevoerd.

##### Params

Dit zijn de parameters die bij de uitvoering aan de URL worden doorgegeven; de URL wordt uitgevoerd met de **HTTP POST**-methode en zo kunnen extra parameters worden toegevoegd, zoals _type_ in het voorbeeld hierboven, of zelfs een andere geheime sleutel worden opgegeven.

### Ondersteunde formaten van Cron-expressies

|VELDNAAM | VERPLICHT | TOEGESTANE WAARDEN | TOEGESTANE SPECIALE TEKENS |
| ------- |:------:|:-----------:|--------------|
| Seconden | JA | 0-59 | , - * / |
| Minuten | JA | 0-59 | , - * / |
| Uren | JA | 0-23 | , - * / |
| Dag van de maand | JA | 1-31 | , - * ? / L W |
| Maand | JA | 1-12 of JAN-DEC | , - * / |
| Dag van de week | JA | 1-7 of SUN-SAT | , - * ? / L # |
| Jaar | NEE | leeg, 1970-2099 | , - * / |

##### Voorbeelden van Cron-expressies

|EXPRESSIE | BETEKENIS |
| ------- |------|
| 1 * * * * ? | Voert uit op seconde 1 van elke minuut. |
| 0 0 12 * * ? | Start om 12:00 uur elke dag |
| 0 15 10 ? * * | Start om 10:15 uur elke dag |
| 0 15 10 * * ? | Start om 10:15 uur elke dag |
| 0 15 10 * * ? * | Start om 10:15 uur elke dag |
| 0 15 10 * * ? 2005 | Start om 10:15 uur elke dag gedurende het jaar 2005 |
| 0 * 14 * * ? | Start elke minuut vanaf 14:00 uur en eindigt om 14:59 uur, elke dag |
| 0 0/5 14 * * ? | Start elke 5 minuten vanaf 14:00 uur en eindigt om 14:55 uur, elke dag |
| 0 0/5 14,18 * * ? | Start elke 5 minuten vanaf 14:00 uur en eindigt om 14:55 uur. Daarna start elke 5 minuten vanaf 18:00 uur en eindigt om 18:55 uur, elke dag |
| 0 0-5 14 * * ? | Start elke minuut vanaf 14:00 uur en eindigt om 14:05 uur, elke dag |
| 0 10,44 14 ? 3 WED | Start om 14:10 en om 14:44 uur elke woensdag in maart. |
| 0 15 10 ? * MON-FRI | Start om 10:15 uur elke werkdag (maandag tot vrijdag) |
| 0 15 10 15 * ? | Start om 10:15 uur op de 15e van elke maand |
| 0 15 10 L * ? | Start om 10:15 uur op de laatste dag van elke maand |
| 0 15 10 L-2 * ? | Start om 10:15 uur op de op één na laatste dag van elke maand |
| 0 15 10 ? * 6L | Start om 10:15 uur op de laatste vrijdag van elke maand |
| 0 15 10 ? * 6L 2002-2005 | Start om 10:15 uur op de laatste vrijdag van elke maand gedurende de jaren 2002, 2003, 2004 en 2005 |
| 0 15 10 ? * 6#3 | Start om 10:15 uur op de derde vrijdag van elke maand |
| 0 0 12 1/5 * ? | Start om 12:00 uur elke 5 dagen van elke maand, te beginnen op de eerste dag van elke maand. |
| 0 11 11 11 11 ? | Start elke 11 november om 11:11 uur. |

> De configuratie mag nooit met `*` beginnen; dit veroorzaakt uitvoering elke seconde, wat prestatieproblemen met een sneeuwbaleffect oplevert als de verwerking op enig moment langer dan 1 seconde duurt.

## Service

De geplande services moeten worden geprogrammeerd in de map:

- 📂 `server/services/jobs`

Netuno voert deze services automatisch uit en valideert de parameter `secret` met de waarde uit de configuratie.

> De `secret` dient om de service extern uit te voeren zonder authenticatie, maar op een veilige manier.

De service wordt periodiek uitgevoerd volgens de gedefinieerde parametrisatie.

Om de uitvoering van de service handmatig te testen, voer je eenvoudigweg de directe URL van de service uit en geef je de parameter `secret` mee.

Bijvoorbeeld via GET:

- http://mijn-app.local.netu.no:9000/services/job/mijn-job?secret=\*\*\*\*\*

Vervang de `*****` aan het einde van de URL door de werkelijk geconfigureerde waarde van `secret`.

## Voorbeeld

Maak het bestand aan in:

- 📂 `server/services/jobs/test.js`

Plaats de volgende code in dit servicebestand:
```javascript
_log.info("Testjob!")
_out.print("Ok")
```

Pas in de JSON-configuratie van je applicatie de parameters als volgt aan:

```json
{
    ...
    "cron": {
        "secret": "m3u-G3heim",
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

Wanneer je de Netuno-server in de terminal start, verschijnt om de 30 seconden het bericht `Testjob!`.

Als je de URL in de browser opent:

- http://localhost:9000/services/jobs/test?secret=m3u-G3heim

Wordt alleen `Ok` geretourneerd en verschijnt in de terminal het bericht `Testjob!`.

> In de `development`-omgeving heeft de validatie van `secret` geen effect; daarom kun je het uitvoeren zonder een `secret` mee te geven en het werkt, maar in een andere omgeving, zoals productie, wordt dit wel gerespecteerd.

## Veel taken

Wanneer er veel geplande taken moeten worden aangemaakt, is het raadzaam het aantal threads te verhogen dat wordt gebruikt voor de parallelle uitvoering van de verschillende geplande taken.

Deze configuratie wordt gedaan in het bestand `config.js` in de root van Netuno, door de voorbeeldregel toe te voegen:

```javascript
config.cronThreadCount = 10
```

> Standaard staat deze configuratie slechts 3 threads toe.
> 
> Houd er rekening mee dat je het aantal threads moet verhogen in overeenstemming met het aantal CPU-cores.

Te weinig threads gebruiken om veel parallelle planningen uit te voeren kan ertoe leiden dat de uitvoering van geplande taken stopt.

Als taken dus na verloop van tijd vastlopen, worden er waarschijnlijk te veel taken parallel uitgevoerd; dan is het nodig het aantal threads te verhogen.

## Programmatisch

Netuno maakt het mogelijk Cron Jobs programmatisch te configureren en te beheren.

Dit betekent dat we alles via code kunnen beheren.

### Nieuwe taak aanmaken

Om een nieuwe taak aan te maken, maken we de planning ervan via [`_cron.schedule`](/docs/library/resources/cron#schedule).

De [`_cron.schedule`](/docs/library/resources/cron#schedule) ontvangt de volgende parameters:

1. Identificatiesleutel van de taak: `key`.
2. Configuratie van de planningstijd voor de uitvoering.
3. Adres van de service die moet worden uitgevoerd, namelijk de: `URL`.
4. Extra parameters die bij de aanroep van de service worden meegestuurd.

```javascript
_cron.schedule(
    'mijn-taak',
    '0 0/60 * * * ?',
    `/services/jobs/product-bijwerken`,
    _val.map()
        .set('id', 123)
)
```

Als het nodig is de taken automatisch bij het opstarten van de applicatie aan te maken, kan dit automatisme in het bestand worden gecodeerd:

- `server/core/_init.js`

Dit bestand wordt uitgevoerd telkens wanneer de applicatie door de Netuno-server wordt geïnitialiseerd.

### Taak verwijderen

Om een bepaalde taak te verwijderen gebruiken we [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Hierbij is `key` de identificatiesleutel van de taak.

Zie het voorbeeld:

```javascript
_cron.remove('mijn-taak')
```

### Taken weergeven

Met [`_cron.schedules()`](/docs/library/resources/cron#schedules) kunnen we alle geconfigureerde taken weergeven.

Voorbeeld van hoe je alle geplande taken weergeeft: 

```javascript
const lijst = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Sleutel</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parameters</td>`)
_out.println(`  <td>Beschrijving</td>`)
_out.println(`  <td>Laatste uitvoering</td>`)
_out.println(`  <td>Volgende uitvoering</td>`)
_out.println(`  <td>Prioriteit</td>`)
_out.println('</tr>')
for (const planning of lijst) {
        _out.println('<tr>')
        _out.println(`  <td>${planning.getString('key')}</td>`)
        _out.println(`  <td>${planning.getString('url')}</td>`)
        _out.println(`  <td>${planning.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${planning.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${planning.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${planning.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${planning.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Taken pauzeren

Met [`_cron.pause(key)`](/docs/library/resources/cron#pause) kunnen we de uitvoering van een bepaalde taak pauzeren.

Voorbeeld van hoe je alle geplande taken pauzeert:

```javascript
const lijst = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Sleutel</td>`)
_out.println(`  <td>Gepauzeerd</td>`)
_out.println('</tr>')
for (const planning of lijst) {
    _out.println('<tr>')
    _out.println(`  <td>${planning.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(planning.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Let op het gebruik van `_cron.pause` in het voorbeeld hierboven.

### Taken hervatten

Met [`_cron.resume(key)`](/docs/library/resources/cron#resume) kunnen we de uitvoering van een bepaalde taak hervatten.

Voorbeeld van hoe je alle geplande taken hervat, en toont wanneer de taken worden uitgevoerd:

```javascript
const lijst = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Sleutel</td>`)
_out.println(`  <td>Heractiveerd</td>`)
_out.println(`  <td>Volgende uitvoering</td>`)
_out.println('</tr>')
for (const planning of lijst) {
    _out.println('<tr>')
    _out.println(`  <td>${planning.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(planning.getString('key'))}</td>`)
    _out.println(`  <td>${planning.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Let op het gebruik van `_cron.resume` in het voorbeeld hierboven.