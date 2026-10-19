---
id: cron-jobs
title: Cron Jobs - Servizi Pianificati
sidebar_label: Cron Jobs
---

## Prima di iniziare

Prima di procedere, assicurati di avere nozioni di base di _**JavaScript**_ e di avere già le nozioni di base di Netuno con la procedura passo passo disponibile nella sezione [Accademia](/docs/academy/overview).

## Introduzione

È comune la necessità di eseguire attività periodicamente, ovvero, di tanto in tanto è necessario inviare dati a un altro sistema, oppure importare dati da un altro sistema, inviare un'e-mail, validare record nel database e molto altro...

Su Linux/UNIX/Mac esiste il servizio Cron con il famoso file di configurazione `crontab`, mentre su Windows esiste il Task Manager (_Gestione attività_).

E in Netuno i Cron Jobs sono già integrati, aiutando così a evitare configurazioni esterne.

Questo tipo di operazioni periodiche è noto come Cron Jobs o, in italiano, Servizi Pianificati.

Ogni applicazione di Netuno può avere innumerevoli Cron Jobs, e i Cron Jobs di Netuno possono eseguire sia servizi e URL interni sia URL esterni.

> Per maggiori informazioni consulta la documentazione della risorsa [cron](/docs/library/resources/cron).

## Come funziona

Ogni applicazione ha la configurazione dei propri servizi pianificati (**cron jobs**) con la relativa configurazione di esecuzione.

Per semplificare, ogni servizio pianificato è un **job** a sé, che ha la propria configurazione di esecuzione, potendo essere eseguito ogni minuto, ogni 5 minuti, ogni ora, in un determinato giorno e ora della settimana, ecc... inoltre ha l'URL che sarà chiamato quando sarà il momento della sua esecuzione.

> Netuno utilizza la libreria <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> per gestire l'esecuzione dei servizi pianificati. La configurazione delle regole di temporizzazione è relativa a questa libreria.

Quindi, l'esecuzione di ogni job passa per l'esecuzione di un URL (_indirizzo web, link_), che può essere sia esterno sia interno all'applicazione stessa. Essendo un link esterno, può appartenere a un'altra applicazione oppure a un qualsiasi URL esterno su internet, sulla rete o sul computer.

![Diagramma Cron](/docs/assets/academy/server/cron.svg)

Il grafico sopra mostra che Netuno contiene 2 applicazioni, in cui ciascuna ha configurati 2 job (_servizi pianificati_), che vengono eseguiti in momenti diversi, secondo una configurazione qualsiasi.

Il comportamento dell'esecuzione che avverrà è il seguente:

- App 1 avvia 2 job:
  - Job 1: Esegue un URL di servizio interno della stessa App 1.
  - Job 2: Esegue un URL esterno, pubblico.
- App 2 avvia 2 job:
  - Job 3: Esegue un URL di servizio interno della stessa App 2
  - Job 4: Esegue un URL di servizio dell'App 1.

> Le applicazioni devono avere i servizi eseguiti dai Cron Jobs all'interno della cartella:
> - 📂 `server/services/jobs`

Ogni URL viene eseguito con il metodo HTTP POST. Nella configurazione del job è possibile aggiungere parametri aggiuntivi e anche una chiave segreta per evitare che venga eseguito al di fuori del contesto controllato.

## Configurazione

La configurazione dei servizi pianificati viene effettuata nel file di configurazione dell'applicazione, in base all'ambiente.

> La configurazione non deve mai iniziare con `*`: ciò provocherebbe l'esecuzione ogni secondo, generando così problemi di prestazioni con effetto valanga nel caso in cui l'elaborazione in qualche momento richieda più di 1 secondo.

Per farlo, naviga all'interno dell'applicazione che stai sviluppando fino al file di configurazione dell'ambiente. In questo esempio utilizzeremo il file dell'ambiente di sviluppo situato in:

- 📂 `config/_development.json`

Verifica se non esistono già configurazioni per il Cron; se non esistono, aggiungi alla fine del file di configurazione (in formato JSON) i parametri di configurazione:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "mio-job",
                "config": "0 30 12 * * ?",
                "url": "http://mia-app.local.netu.no:9000/services/jobs/mio-job"
            },
            {
                "name": "mio-job",
                "config": "0 0/2 * * * ?",
                "url": "http://mia-app.local.netu.no:9000/services/jobs/mio-altro-job",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "tipo": "cliente"
                }
            }
        ]
    },
    ...
}
```

In questa configurazione il primo job verrà eseguito tutti i giorni alle 12:30.

E il secondo job verrà eseguito ogni 2 minuti.


##### Jobs

L'elenco dei servizi pianificati presenti nell'applicazione; essendo un array, possiamo avere più servizi configurati.

##### Secret

È un parametro di chiave di sicurezza che protegge il servizio, affinché venga eseguito solo quando riceve questo parametro con il valore esattamente uguale.

Questo perché i `jobs` sono servizi pubblici e, per evitare che vengano eseguiti esternamente, contengono questa protezione.

##### Name

Il nome che identifica il servizio internamente, il quale potrà essere utilizzato per effettuare operazioni di gestione, come fermare e riprendere.

##### Config

La configurazione dell'espressione di temporizzazione del servizio, ovvero le regole della sua pianificazione.

> La configurazione non deve mai iniziare con `*`: ciò provocherebbe l'esecuzione ogni secondo, generando così problemi di prestazioni con effetto valanga nel caso in cui l'elaborazione in qualche momento richieda più di 1 secondo.

Verifica di seguito le espressioni supportate.

##### URL

L'indirizzo che verrà eseguito periodicamente.

##### Params

Sono i parametri passati all'URL nella sua esecuzione; l'URL viene eseguito con il metodo **HTTP POST** e così possono essere aggiunti parametri aggiuntivi come il _tipo_ nell'esempio sopra, oppure specificare un'altra chiave segreta.

### Formati supportati delle espressioni Cron

|NOME DEL CAMPO | OBBLIGATORIO | VALORI ACCETTATI | CARATTERI SPECIALI PERMESSI |
| ------- |:------:|:-----------:|--------------|
| Secondi | SÌ | 0-59 | , - * / |
| Minuti | SÌ | 0-59 | , - * / |
| Ore | SÌ | 0-23 | , - * / |
| Giorno del mese | SÌ | 1-31 | , - * ? / L W |
| Mese | SÌ | 1-12 o JAN-DEC | , - * / |
| Giorno della settimana | SÌ | 1-7 o SUN-SAT | , - * ? / L # |
| Anno | NO | vuoto, 1970-2099 | , - * / |

##### Esempi di espressioni Cron

|ESPRESSIONE | SIGNIFICATO |
| ------- |------|
| 1 * * * * ? | Esegue al secondo numero 1 di ogni minuto. |
| 0 0 12 * * ? | Inizia alle 12:00 di ogni giorno |
| 0 15 10 ? * * | Inizia alle 10:15 di ogni giorno |
| 0 15 10 * * ? | Inizia alle 10:15 di ogni giorno |
| 0 15 10 * * ? * | Inizia alle 10:15 di ogni giorno |
| 0 15 10 * * ? 2005 | Inizia alle 10:15 di ogni giorno durante l'anno 2005 |
| 0 * 14 * * ? | Inizia ogni minuto a partire dalle 14:00 e termina alle 14:59, ogni giorno |
| 0 0/5 14 * * ? | Inizia ogni 5 minuti a partire dalle 14:00 e termina alle 14:55, ogni giorno |
| 0 0/5 14,18 * * ? | Inizia ogni 5 minuti a partire dalle 14:00 e termina alle 14:55. Successivamente, inizia ogni 5 minuti a partire dalle 18:00 e termina alle 18:55, ogni giorno |
| 0 0-5 14 * * ? | Inizia ogni minuto a partire dalle 14:00 e termina alle 14:05, ogni giorno |
| 0 10,44 14 ? 3 WED | Inizia alle 14:10 e alle 14:44 ogni mercoledì del mese di marzo. |
| 0 15 10 ? * MON-FRI | Inizia alle 10:15 ogni giorno feriale della settimana (dal lunedì al venerdì) |
| 0 15 10 15 * ? | Inizia alle 10:15 il giorno 15 di ogni mese |
| 0 15 10 L * ? | Inizia alle 10:15 l'ultimo giorno di ogni mese |
| 0 15 10 L-2 * ? | Inizia alle 10:15 il penultimo giorno di ogni mese |
| 0 15 10 ? * 6L | Inizia alle 10:15 l'ultimo venerdì di ogni mese |
| 0 15 10 ? * 6L 2002-2005 | Inizia alle 10:15 ogni ultimo venerdì di ogni mese durante gli anni 2002, 2003, 2004 e 2005 |
| 0 15 10 ? * 6#3 | Inizia alle 10:15 il terzo venerdì di ogni mese |
| 0 0 12 1/5 * ? | Inizia alle 12:00 ogni 5 giorni di ogni mese, a partire dal primo giorno di ogni mese. |
| 0 11 11 11 11 ? | Inizia ogni 11 novembre alle 11:11. |

> La configurazione non deve mai iniziare con `*`: ciò provocherebbe l'esecuzione ogni secondo, generando così problemi di prestazioni con effetto valanga nel caso in cui l'elaborazione in qualche momento richieda più di 1 secondo.

## Servizio

I servizi pianificati devono essere programmati all'interno della cartella:

- 📂 `server/services/jobs`

Netuno eseguirà automaticamente questi servizi ed effettua la validazione del parametro `secret` con il valore presente nella configurazione.

> Il `secret` serve affinché il servizio venga eseguito esternamente senza autenticazione, ma in modo sicuro.

Il servizio verrà eseguito periodicamente in base alla parametrizzazione definita.

Per testare manualmente l'esecuzione del servizio basta eseguire direttamente l'URL del servizio e passare il parametro `secret`.

Ad esempio, via GET:

- http://mia-app.local.netu.no:9000/services/job/mio-job?secret=\*\*\*\*\*

Al posto dei `*****` alla fine dell'URL deve essere inserito il valore reale configurato del `secret`.

## Esempio

Crea il file in:

- 📂 `server/services/jobs/test.js`

In questo file di servizio inserisci il seguente codice:
```javascript
_log.info("Job di test!")
_out.print("Ok")
```

Nel JSON di configurazione della tua applicazione, modifica la parametrizzazione come segue:

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

Eseguendo il server di Netuno nel terminale inizierà ad apparire il messaggio `Job di test!` ogni 30 secondi.

Se apri nel browser l'URL:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

Restituirà solo `Ok` e nel terminale apparirà il messaggio `Job di test!`.

> Nell'ambiente `development` la validazione del `secret` non ha effetto, perciò puoi eseguire senza passare alcun `secret` e funzionerà, ma in un altro ambiente, come quello di produzione, viene già preso in considerazione.

## Molte attività

Quando c'è la necessità di creare molte attività pianificate, conviene aumentare il numero di thread utilizzati per l'esecuzione parallela delle varie attività pianificate.

Questa configurazione si effettua nel file `config.js` che si trova nella radice di Netuno, aggiungendo la riga di esempio:

```javascript
config.cronThreadCount = 10
```

> Per impostazione predefinita questa configurazione consente solo 3 thread.
> 
> Tieni presente che devi aumentare il numero di thread in base al numero di core della CPU.

Utilizzare pochi thread per eseguire molte pianificazioni in parallelo può causare l'interruzione dell'esecuzione delle attività pianificate.

Pertanto, se ci sono casi in cui le attività si bloccano dopo un po' di tempo, probabilmente vengono eseguite troppe attività in parallelo, quindi è necessario aumentare il numero di thread.

## Programmaticamente

Netuno consente di configurare e controllare i Cron Jobs programmaticamente.

Ciò significa che tramite il codice possiamo gestire tutto.

### Creare una nuova attività

Per creare una nuova attività, creiamo la sua pianificazione tramite [`_cron.schedule`](/docs/library/resources/cron#schedule).

Il [`_cron.schedule`](/docs/library/resources/cron#schedule) riceve i seguenti parametri:

1. Chiave di identificazione dell'attività: `key`.
2. Configurazione del tempo di pianificazione per l'esecuzione.
3. Indirizzo del servizio che deve essere eseguito, ovvero l'`URL`.
4. Parametri aggiuntivi che vengono inviati nella chiamata del servizio.

```javascript
_cron.schedule(
    'mia-attivita',
    '0 0/60 * * * ?',
    `/services/jobs/prodotto-aggiorna`,
    _val.map()
        .set('id', 123)
)
```

Se fosse necessario creare le attività automaticamente all'inizializzazione dell'applicazione, questo automatismo può quindi essere codificato nel file:

- `server/core/_init.js`

Dove questo file viene eseguito ogni volta che l'applicazione viene inizializzata dal server di Netuno.

### Rimuovere un'attività

Per rimuovere una determinata attività utilizziamo [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Dove la `key` è la chiave di identificazione dell'attività.

Vedi l'esempio:

```javascript
_cron.remove('mia-attivita')
```

### Elencare le attività

Tramite [`_cron.schedules()`](/docs/library/resources/cron#schedules) possiamo elencare tutte le attività configurate.

Esempio di come elencare tutte le attività pianificate: 

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Chiave</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parametri</td>`)
_out.println(`  <td>Descrizione</td>`)
_out.println(`  <td>Ultima esecuzione</td>`)
_out.println(`  <td>Prossima esecuzione</td>`)
_out.println(`  <td>Priorità</td>`)
_out.println('</tr>')
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Mettere in pausa le attività

Tramite [`_cron.pause(key)`](/docs/library/resources/cron#pause) possiamo mettere in pausa l'esecuzione di una determinata attività.

Esempio di come mettere in pausa tutte le attività pianificate:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Chiave</td>`)
_out.println(`  <td>In pausa</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Nota l'utilizzo di `_cron.pause` nell'esempio sopra.

### Riprendere le attività

Tramite [`_cron.resume(key)`](/docs/library/resources/cron#resume) possiamo riprendere l'esecuzione di una determinata attività.

Esempio di come riprendere tutte le attività pianificate e mostrare quando le attività verranno eseguite:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Chiave</td>`)
_out.println(`  <td>Riattivato</td>`)
_out.println(`  <td>Prossima esecuzione</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Nota l'utilizzo di `_cron.resume` nell'esempio sopra.