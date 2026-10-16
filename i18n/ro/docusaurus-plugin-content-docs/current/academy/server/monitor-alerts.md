---
id: monitor-alerts
title: Monitorizare și Alerte
sidebar_label: Monitorizare și Alerte
---

Alarmare privind utilizarea hardware-ului serverului.

## Introducere

Serverul Netuno are encapsulat mecanismul de monitorizare a performanței care permite analiza impactului sistemului software asupra consumului de hardware.

Cu ajutorul monitorizării, aplicațiile pot implementa reguli de alarmare pentru a realiza avertizarea când ceva atinge un nivel care necesită atenție.

Monitorizarea și alertele, pe lângă faptul că sunt realizate pe datele de performanță ale procesului serverului Netuno în sine, se fac și asupra întregului sistem al calculatorului în execuție.

Permite astfel realizarea unei monitorizări complete și cu alarmare.

## Configurare

Configurarea generală permite activarea afișării datelor în logurile generale ale Netuno și controlarea intervalului de execuție a colectării și analizei indicatorilor de performanță.

Configurarea alertelor se face în fiecare aplicație și permite multiple alerte per aplicație.

### Loguri și Interval general

Netuno salvează logurile de performanță în folderul `logs` care se află în folderul rădăcină al Netuno.

În acest folder `logs` se găsesc fișierele `stats-AN_LUNĂ_ZI.json`, acestea sunt întotdeauna generate automat în funcție de intervalul care poate fi modificat după cum se va indica în continuare.

> Pentru o vizualizare mai bună a fișierelor, puteți utiliza formatarea automată a editorului preferat sau instrumente online precum:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> De asemenea, pot fi deschise în **Firefox**, care realizează o formatare excelentă.

##### Configurarea logurilor și intervalul general

Pentru a activa afișarea datelor de performanță în logurile generale (`logs/netuno.log`) și în **consolă**, editați fișierul `config.js` care se află în rădăcina folderului Netuno.

Adăugați următoarea linie dacă nu există deja:

```
config.monitorLog = true
```

De asemenea, puteți modifica intervalul implicit de **60 de secunde**, adică informația este afișată în log doar din minut în minut. Pentru aceasta, adăugați și linia de cod de mai jos și modificați valoarea secundelor la timpul dorit:

```
config.monitorInterval = 60
```

> Acest interval este general și interferează cu intervalul configurat în alertele aplicațiilor, care nu va fi niciodată mai mic decât acest interval general.

**Reporniți** serverul Netuno pentru a avea efect.

Va începe să fie afișată în consolă informația de monitorizare, de exemplu:

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

### Alerte în aplicații

Alertele sunt configurate în aplicații, așa că editați configurația aplicației dvs.

Adică, în interiorul aplicației, în folderul `config` la configurarea mediului, în fișiere precum:

- _development.json
- _production.json

Adăugați configurarea alertelor de monitorizare:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "alerta-mea",
                "url": "http://NUME-APP.local.netu.no:9000/services/serviciul-meu-de-alerta"
            }
        ]
    }
...
```

> Aceasta este configurația cea mai simplificată.

Când există o situație care necesită alertare, atunci acel `url` va fi apelat și vor fi transmise parametrii de performanță.

Implicit, alertele au un interval de **1h** pentru fiecare tip de alertă, astfel încât alerta va fi declanșată doar dacă **Procesorul**, **Memoria** sau **Discul** (HD) depășesc limita de **90%** din capacitatea maximă; după o oră va trimite o altă alertă.

> În situații cu multiple alerte, intervalul este scurtat, de exemplu, dacă a fost declanșată alerta pentru Memorie și după 20 de minute Discul depășește și el 90%, atunci este declanșată imediat o nouă alertă, iar intervalul de 1 oră este reluat.

### Alerte avansate

Mai jos se află o configurație mai avansată care permite modificarea intervalului și a limitelor de consum pentru **Procesor**, **Memorie** sau **Disc** (HD):

```
...
    "monitor": {
        "alerts": [
            {
                "name": "alerta-mea-simpla",
                "url": "http://NUME-APP.local.netu.no:9000/services/serviciul-meu-de-alerta"
            },
            {
                "name": "alerta-mea-avansata",
                "url": "http://NUME-APP.local.netu.no:9000/services/serviciul-meu-de-alerta",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "alerta-mea-mai-avansata",
                "url": "http://NUME-APP.local.netu.no:9000/services/serviciul-meu-de-alerta",
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

> Valorile de mai sus sunt **valori implicite**!

##### Name

Nume de identificare a alertei.

##### Enabled

Permite activarea și dezactivarea alertei; valoarea implicită este _true_ (activ).

##### Interval

Definește intervalul dintre alerte în **secunde**; valoarea implicită este _3600 secunde_ (o oră).

##### Threshold

Definește limitele pentru CPU, Memorie și Disc (HD).

##### CPU

Limita de consum CPU la care trebuie declanșată alerta.

Permite, de asemenea, definirea limitei specifice pentru _system_ și pentru _process_.

##### Memory

Limita de consum de memorie la care trebuie declanșată alerta.

Permite, de asemenea, definirea limitei specifice pentru _system_ și pentru _process_.

##### System

Sunt limitele pentru sistemul de operare în general, cu toate procesele în execuție.

##### Process

Sunt limitele doar pentru procesul serverului Netuno.

##### Disk

Limita de consum de disc (HD) la care trebuie declanșată alerta.

## Parametri trimiși

Când un `url` este invocat, este declanșată o alertă pentru că a fost depășită o limită, astfel vor fi trimise datele de performanță ale consumului de hardware.

`url`-ul este executat cu metoda `POST`, iar conținutul este trimis în JSON: `Content-Type: application/json`.

Exemplu de JSON cu datele care sunt trimise către `url`-ul alertelor:

```
{
    "key": "alerta-mea-simpla",
    "app": "app-mea",
    "hostname": "calculatorul-meu",
    "timezone": "Europe/Lisbon",
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

### Descrierea parametrilor

##### Key

Numele (cheia) care este definit în configurația alertei în aplicație.

##### App

Numele aplicației care are alerta configurată și care cauzează declanșarea acesteia.

##### Hostname

Numele calculatorului pe care rulează serverul Netuno care provoacă alerta.

##### Timezone

Fusul orar al calculatorului care are serverul Netuno în execuție și care provoacă alerta.

##### Started

Data și ora când serverul Netuno a fost pornit.

##### Moment

Data și ora momentului în care alerta a fost generată.

##### Before

Informații despre alerta anterioară; are exact aceeași structură JSON, dar cu datele referitoare la alerta provocată anterior.

##### Alerts

Lista alertelor care au fost declanșate, unde se specifică tipul (_type_) al alertei și limita (_threshold_) care a fost depășită.

Tipurile de alerte sunt:

- `cpu-system`: Alertă pentru consumul de CPU al sistemului calculatorului cu toate procesele în execuție în general.
- `cpu-process`: Alertă pentru consumul de CPU al procesului serverului Netuno.
- `memory-system`: Alertă pentru consumul de memorie al sistemului calculatorului cu toate procesele în execuție în general.
- `memory-process`: Alertă pentru consumul de memorie al procesului serverului Netuno.
- `disk`: Alertă pentru Disc (HD).

##### CPU

Sunt datele procesorului care sunt trimise cu următoarele informații:

- `cores`: Numărul de procesoare fizice.
- `vcores`: Numărul de procesoare virtuale (fire de execuție).
- `load`: Informații despre încărcarea procesorului:
  - `system`: Încărcarea de procesare a sistemului de operare cu toate procesele în general; valoarea este între **0** (_0%_) și **1** (_100%_).
  - `process`: Încărcarea de procesare a serverului Netuno; valoarea este între **0** (_0%_) și **1** (_100%_).
  - `ticks`: Returnează încărcarea procesorului în sistemul general într-un array cu opt elemente care reprezintă în milisecunde ceea ce a fost consumat în următoarele stări: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) și _Steal_ (7).
  - `frequency`: Frecvența maximă (`max`) a procesorului și media frecvenței utilizate între toate nucleele (`average`); valorile sunt în _hertzi_, astfel 2500000000 _Hz_ echivalează cu 2.5 _GHz_.

> Împărțirea frecvenței se realizează după cum urmează:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (hertzi), KHz (kilohertzi), MGz (megahertzi), GHz (gigahertzi)

##### Memory

Sunt datele memoriei care sunt trimise cu următoarele informații:

- `system`: Sunt informații despre consumul de memorie al sistemului de operare cu toate procesele în general.
  - `total`: Memoria totală a calculatorului.
  - `used`: Memoria alocată în uz.
  - `free`: Memoria liberă disponibilă.
- `process`: Sunt datele de utilizare a memoriei procesului serverului Netuno.
  - `max`: Cantitatea maximă de memorie care poate fi utilizată de Netuno.
  - `total`: Totalul memoriei rezervate (alocate), include memoria utilizată și cea "liberă".
  - `used`: Cantitatea de memorie care este efectiv utilizată.
  - `free`: Cantitatea de memorie liberă (rezervată) disponibilă pentru a fi utilizată.
  - `gc`: Dacă a fost invocată execuția _garbage collector_ (colectorul de gunoi al memoriei).

> Valorile sunt în Bytes, astfel 17179869184 Bytes echivalează cu 16 Gigabytes.
>
> Cum se realizează împărțirea:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (octeți), KB (kiloocteți), MB (megaocteți), GB (gigaocteți)

##### Disk

Sunt datele de utilizare a discului rigid (HD) care sunt trimise cu următoarele informații:

- `total`: Dimensiunea totală a discului.
- `used`: Cantitatea de spațiu utilizat pe disc.
- `free`: Cantitatea de spațiu disponibil pe disc.

> Valorile sunt în Bytes, astfel 500068036608 Bytes echivalează cu 465,72 Gigabytes.
>
> Cum se realizează împărțirea:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (octeți), KB (kiloocteți), MB (megaocteți), GB (gigaocteți)

## Exemplu de servicii de alarmare

Serviciile Netuno pot fi utilizate ca `url` al alertelor.

Se poate implementa trimiterea alarmării prin email, SMS sau chiar salvarea informațiilor în baza de date.

De asemenea, poate fi utilizat orice tip de `url`, astfel alerta poate fi declanșată către alte tehnologii precum NodeJS, PHP, .NET, Rails, Laravel, Sails, etc...

În cazul Netuno, poate fi implementat un serviciu pentru trimiterea de emailuri urmând indicațiile din tutorialul [Trimitere de e-mailuri](/docs/academy/server/services/sending-emails).

Urmează mai jos cum să implementați un exemplu complet adaptat pentru alarmarea de monitorizare.

Înainte de a începe, asigurați-vă că aveți configurația SMTP în configurația aplicației și, de asemenea, configurația monitorizării, de exemplu:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "SERVERUL-MEU.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alerta: ",
            "from": "noreply@DOMENIUL-MEU.com",
            "to": "info@DOMENIUL-MEU.com",
            "username": "noreply@DOMENIUL-MEU.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alerta-email",
                "url": "http://APP-MEA.local.netu.no:9000/services/monitorizare/alerta"
            }
        ]
    }
...
```

> Asigurați-vă că ajustați parametrii, în special pe cei evidențiați în valori cu litere mari.

Serviciul de alarmare poate fi plasat în `server/services/monitorizare/alerta.js`, cu următorul cod:

```
_log.info("Informații alertă monitorizare:\n"+ _req.toJSON())

const procesor = _req.getValues("cpu")
const memorie = _req.getValues("memory")
const disc = _req.getValues("disk")

const incarcareProcesorSistem = Math.round(procesor.getValues("load").getFloat("system") * 100)
const incarcareProcesorProces = Math.round(procesor.getValues("load").getFloat("process") * 100)
const memorieSistemLibera = Math.round(memorie.getValues("system").getLong("free") / 1024 / 1024)
const memorieProcesLibera = Math.round(memorie.getValues("process").getLong("free") / 1024 / 1024)
const discLiber = Math.round(disc.getLong("free") / 1024 / 1024)

let tipuriSubiect = ""
let informatiiHtml = ""

for (const tipAlerta of _req.getValues("alerts")) {
    if (tipuriSubiect != "") {
        tipuriSubiect += ", "
    }
    if (tipAlerta.getString("type") == 'cpu-system') {
        tipuriSubiect += "CPU al Sistemului"
        informatiiHtml += `<p>Procesorul <b>sistemului</b> atinge <b>${incarcareProcesorSistem}%</b></p>`
    }
    if (tipAlerta.getString("type") == 'cpu-process') {
        tipuriSubiect += "CPU al Procesului"
        informatiiHtml += `<p>Procesorul <b>procesului</b> atinge <b>${incarcareProcesorProces}%</b></p>`
    }
    if (tipAlerta.getString("type") == 'memory-system') {
        tipuriSubiect += "Memoria Sistemului"
        informatiiHtml += `Memoria <b>sistemului</b> are doar <b>${memorieSistemLibera} MB</b> liberi.`
    }
    if (tipAlerta.getString("type") == 'memory-process') {
        tipuriSubiect += "Memoria Procesului"
        informatiiHtml += `Memoria procesului are doar <b>${memorieProcesLibera} MB</b> liberi.`
    }
    if (tipAlerta.getString("type") == 'disk') {
        tipuriSubiect += "Disc"
        informatiiHtml += `Discul are doar <b>${discLiber} MB</b> liberi.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${tipuriSubiect}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${informatiiHtml}`

smtp.text = "Informații în versiunea de conținut HTML a acestui e-mail."

smtp.send()
```

> Va fi trimis un email cu alertele.

În acest caz, a fost nevoie doar să alertăm situația spațiului pe disc, după cum se poate vedea în acest email primit:

![email](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Pentru a implementa trimiterea de **SMS**, există exemple în aplicația de **demo**_nstrație_ cu integrarea de API REST remote care permite integrarea cu platforma de SMS preferată.