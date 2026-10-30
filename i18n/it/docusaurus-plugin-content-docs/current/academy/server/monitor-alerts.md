---
id: monitor-alerts
title: Monitoraggio e Allarmi
sidebar_label: Monitoraggio e Allarmi
---

Allarmistica sull'utilizzo dell'hardware del server.

## Introduzione

Il server Netuno include un meccanismo di monitoraggio delle prestazioni che consente di analizzare l'impatto del sistema software sul consumo dell'hardware.

Con il monitoraggio le app possono implementare regole di allarmistica per inviare un avviso quando qualcosa raggiunge una soglia che richiede attenzione.

Il monitoraggio e gli allarmi vengono eseguiti non solo sui dati delle prestazioni del processo del server Netuno stesso, ma anche sull'intero sistema del computer in esecuzione.

Consente quindi di realizzare un monitoraggio completo con allarmistica.

## Configurazione

La configurazione generale consente di attivare la visualizzazione dei dati nei log generali di Netuno e di controllare l'intervallo di esecuzione della raccolta e dell'analisi degli indicatori di prestazione.

La configurazione degli allarmi viene effettuata in ciascuna app e consente di avere più allarmi per applicazione.

### Log e Intervallo Generale

Netuno salva i log delle prestazioni nella cartella `logs`, che si trova nella cartella radice di Netuno.

In questa cartella `logs` si trovano i file `stats-ANNO_MESE_GIORNO.json`; questi vengono sempre generati automaticamente in base all'intervallo, che può essere modificato come indicato di seguito.

> Per una migliore visualizzazione dei file è possibile utilizzare la formattazione automatica del proprio editor preferito oppure strumenti online come:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> Possono anche essere aperti in **Firefox**, che esegue una formattazione eccellente.

##### Configurazione dei Log e dell'Intervallo Generale

Per attivare la visualizzazione dei dati di prestazione nei log generali (`logs/netuno.log`) e nella **console**, modificare il file `config.js` che si trova nella cartella radice di Netuno.

Aggiungere la seguente riga se non esiste già:

```
config.monitorLog = true
```

È anche possibile modificare l'intervallo predefinito di **60 secondi**, ovvero le informazioni vengono mostrate nei log solo una volta al minuto. Per fare ciò, aggiungere anche la riga di codice seguente e modificare il valore dei secondi con il tempo desiderato:

```
config.monitorInterval = 60
```

> Questo intervallo è generale e influisce sull'intervallo configurato negli allarmi delle app, che non sarà mai inferiore a questo intervallo generale.

**Riavviare** il server Netuno perché abbia effetto.

Nella console inizieranno a essere visualizzate le informazioni di monitoraggio, ad esempio:

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

### Allarme nelle App

Gli allarmi vengono configurati nelle applicazioni, quindi modificare la configurazione della propria app.

Ovvero, all'interno dell'applicazione, nella cartella `config`, nella configurazione dell'ambiente, in file come:

- _development.json
- _production.json

Aggiungere la configurazione degli allarmi di monitoraggio:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mio-allarme",
                "url": "http://NOME-APP.local.netu.no:9000/services/mio-servizio-di-allarme"
            }
        ]
    }
...
```

> Questa è la configurazione più semplificata.

Quando si verifica una situazione che richiede un allarme, viene chiamato questo `url` e vengono passati i parametri di prestazione.

Per impostazione predefinita gli allarmi hanno un intervallo di **1h** per ciascun tipo di allarme; pertanto l'allarme verrà generato solo se il **Processore**, la **Memoria** o il **Disco** (HD) superano la soglia del **90%** della capacità massima. Trascorsa un'ora, verrà inviato un altro allarme.

> In situazioni di allarmi multipli l'intervallo viene abbreviato; ad esempio, se è stato attivato l'allarme della Memoria e dopo 20 minuti anche il Disco supera il 90%, viene immediatamente attivato un nuovo allarme e l'intervallo di 1 ora ricomincia.

### Allarmi Avanzati

Di seguito è riportata una configurazione più avanzata che consente di modificare l'intervallo e le soglie di consumo del **Processore**, della **Memoria** o del **Disco** (HD):

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mio-allarme-semplice",
                "url": "http://NOME-APP.local.netu.no:9000/services/mio-servizio-di-allarme"
            },
            {
                "name": "mio-allarme-avanzato",
                "url": "http://NOME-APP.local.netu.no:9000/services/mio-servizio-di-allarme",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "mio-allarme-piu-avanzato",
                "url": "http://NOME-APP.local.netu.no:9000/services/mio-servizio-di-allarme",
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

> I valori sopra sono **valori predefiniti**!

##### Name

Nome di identificazione dell'allarme.

##### Enabled

Permette di attivare e disattivare l'allarme, il valore predefinito è _true_ (attivo).

##### Interval

Definisce l'intervallo tra gli allarmi in **secondi**, il valore predefinito è _3600 secondi_ (un'ora).

##### Threshold

Definisce i limiti di CPU, Memoria e Disco (HD).

##### CPU

La soglia del consumo di CPU in cui deve essere attivato l'allarme.

Consente anche di definire la soglia specifica per _system_ e per _process_.

##### Memory

La soglia del consumo di Memoria in cui deve essere attivato l'allarme.

Consente anche di definire la soglia specifica per _system_ e per _process_.

##### System

Sono le soglie per il sistema operativo in generale con tutti i processi in esecuzione.

##### Process

Sono le soglie solo per il processo del server Netuno.

##### Disk

La soglia del consumo di Disco (HD) in cui deve essere attivato l'allarme.

## Parametri Inviati

Quando viene invocato un `url`, viene attivato un allarme perché è stata superata una soglia; vengono quindi inviati i dati di prestazione del consumo hardware.

L'`url` viene eseguito con il metodo `POST` e il contenuto viene inviato in JSON: `Content-Type: application/json`.

Esempio del JSON con i dati inviati all'`url` degli allarmi:

```
{
    "key": "mio-allarme-semplice",
    "app": "mia-app",
    "hostname": "mio-computer",
    "timezone": "Europe/Rome",
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

### Descrizione dei Parametri

##### Key

Il nome (chiave) definito nella configurazione dell'allarme nell'applicazione.

##### App

Il nome dell'applicazione che ha l'allarme configurato e che ne causa l'attivazione.

##### Hostname

Nome del computer su cui è in esecuzione il server Netuno che genera l'allarme.

##### Timezone

Fuso orario del computer che esegue il server Netuno e che genera l'allarme.

##### Started

Data e ora in cui è stato avviato il server Netuno.

##### Moment

Data e ora del momento in cui è stato generato l'allarme.

##### Before

Informazioni dell'allarme precedente; ha esattamente la stessa struttura JSON, ma con i dati relativi all'allarme generato in precedenza.

##### Alerts

Elenco degli allarmi attivati, in cui vengono specificati il tipo (_type_) dell'allarme e la soglia (_threshold_) superata.

I tipi di allarme sono:

- `cpu-system`: Allarme del consumo di CPU del sistema del computer con tutti i processi in esecuzione in generale.
- `cpu-process`: Allarme del consumo di CPU del processo del server Netuno.
- `memory-system`: Allarme del consumo di Memoria del sistema del computer con tutti i processi in esecuzione in generale.
- `memory-process`: Allarme del consumo di Memoria del processo del server Netuno.
- `disk`: Allarme del Disco (HD).

##### CPU

Sono i dati del Processore inviati con le seguenti informazioni:

- `cores`: Numero di processori fisici.
- `vcores`: Numero di processori virtuali (thread).
- `load`: Informazioni sul carico del processore:
  - `system`: Il carico di elaborazione del sistema operativo con tutti i processi in generale; il valore è compreso tra **0** (_0%_) e **1** (_100%_).
  - `process`: Il carico di elaborazione del server Netuno; il valore è compreso tra **0** (_0%_) e **1** (_100%_).
  - `ticks`: Restituisce il carico del processore nel sistema generale in un array di otto elementi che rappresenta, in millisecondi, il tempo speso nei seguenti stati: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) e _Steal_ (7).
  - `frequency`: Frequenza massima (`max`) del processore e media della frequenza utilizzata tra tutti i core (`average`); i valori sono in _hertz_, quindi 2500000000 _Hz_ equivalgono a 2.5 _GHz_.

> La divisione della frequenza viene eseguita come segue:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_Hertz_), KHz (_Kilohertz_), MGz (_Megahertz_), GHz (_Gigahertz_)

##### Memory

Sono i dati della Memoria inviati con le seguenti informazioni:

- `system`: Sono le informazioni sul consumo di memoria del sistema operativo con tutti i processi in generale.
  - `total`: Memoria totale del computer.
  - `used`: Memoria allocata in utilizzo.
  - `free`: Memoria disponibile libera.
- `process`: Sono i dati di utilizzo della memoria del processo del server Netuno.
  - `max`: Quantità massima di memoria che può essere utilizzata da Netuno.
  - `total`: Totale della memoria riservata (allocata); include la memoria utilizzata e quella "libera".
  - `used`: Quantità di memoria che è realmente in utilizzo.
  - `free`: Quantità di memoria libera (riservata) disponibile per essere utilizzata.
  - `gc`: Indica se è stata invocata l'esecuzione del _garbage collector_ (collettore di rifiuti della memoria).

> I valori sono in byte, quindi 17179869184 byte equivalgono a 16 gigabyte.
>
> Come viene eseguita la divisione:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Disk

Sono i dati di utilizzo del disco rigido (HD) inviati con le seguenti informazioni:

- `total`: Dimensione totale del disco.
- `used`: Quantità di spazio utilizzato sul disco.
- `free`: Quantità di spazio disponibile sul disco.

> I valori sono in byte, quindi 500068036608 byte equivalgono a 465,72 gigabyte.
>
> Come viene eseguita la divisione:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Esempio di Servizi di Allarmistica

I servizi di Netuno possono essere utilizzati come `url` degli allarmi.

È possibile implementare l'invio dell'allarmistica tramite email, SMS o anche salvare le informazioni in un database.

Può anche essere utilizzato qualsiasi tipo di `url`, così l'allarme può essere inviato ad altre tecnologie come NodeJS, PHP, .NET, Rails, Laravel, Sails, ecc...

Nel caso di Netuno, è possibile implementare un servizio per l'invio di email seguendo le indicazioni del tutorial [Invio di Email](/docs/academy/server/services/sending-emails).

Di seguito è mostrato come implementare un esempio completo adattato all'allarmistica di monitoraggio.

Prima di iniziare, verificare di avere la configurazione SMTP nella configurazione dell'applicazione e anche la configurazione del monitoraggio, ad esempio:

```
...
    "smtp": {
        "allarme": {
            "enabled": true,
            "host": "MIO.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Allarme: ",
            "from": "noreply@MIO.DOMINIO.com",
            "to": "info@MIO.DOMINIO.com",
            "username": "noreply@MIO.DOMINIO.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "allarme-email",
                "url": "http://MIA-APP.local.netu.no:9000/services/monitor/allarme"
            }
        ]
    }
...
```

> Verificare di adattare i parametri, in particolare quelli evidenziati nei valori con lettere maiuscole.

Il servizio di allarmistica potrà trovarsi in `server/services/monitor/allarme.js`, con il seguente codice:

```
_log.info("Informazioni sull'allarme di monitoraggio:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const memoria = _req.getValues("memory")
const disco = _req.getValues("disk")

const caricaCpuSistema = Math.round(cpu.getValues("load").getFloat("system") * 100)
const caricaCpuProcesso = Math.round(cpu.getValues("load").getFloat("process") * 100)
const memoriaSistemaLibera = Math.round(memoria.getValues("system").getLong("free") / 1024 / 1024)
const memoriaProcessoLibera = Math.round(memoria.getValues("process").getLong("free") / 1024 / 1024)
const discoLibero = Math.round(disco.getLong("free") / 1024 / 1024)

let tipiOggetto = ""
let infoHtml = ""

for (const tipoAllarme of _req.getValues("alerts")) {
    if (tipiOggetto != "") {
        tipiOggetto += ", "
    }
    if (tipoAllarme.getString("type") == 'cpu-system') {
        tipiOggetto += "CPU del Sistema"
        infoHtml += `<p>Il processore del <b>sistema</b> raggiunge il <b>${caricaCpuSistema}%</b></p>`
    }
    if (tipoAllarme.getString("type") == 'cpu-process') {
        tipiOggetto += "CPU del Processo"
        infoHtml += `<p>Il processore del <b>processo</b> raggiunge il <b>${caricaCpuProcesso}%</b></p>`
    }
    if (tipoAllarme.getString("type") == 'memory-system') {
        tipiOggetto += "Memoria del Sistema"
        infoHtml += `La memoria del <b>sistema</b> dispone di soli <b>${memoriaSistemaLibera} MB</b> liberi.`
    }
    if (tipoAllarme.getString("type") == 'memory-process') {
        tipiOggetto += "Memoria del Processo"
        infoHtml += `La memoria del processo dispone di soli <b>${memoriaProcessoLibera} MB</b> liberi.`
    }
    if (tipoAllarme.getString("type") == 'disk') {
        tipiOggetto += "Disco"
        infoHtml += `Il disco dispone di soli <b>${discoLibero} MB</b> liberi.`
    }
}

const smtp = _smtp.init("allarme")

smtp.subject += `${_req.getString("hostname")} - ${tipiOggetto}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${infoHtml}`

smtp.text = "Informazioni nella versione con contenuto HTML di questa email."

smtp.send()
```

> Verrà inviata un'email con gli allarmi.

In questo caso è stato necessario segnalare solo la situazione dello spazio su disco, come si può vedere in questa email ricevuta:

![email](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Per implementare l'invio di **SMS** ci sono esempi nell'applicazione di **demo**_strazione_ con l'integrazione di API REST remote che consente di integrarsi con la piattaforma SMS preferita.