---
id: sending-emails
title: Invio di Email
sidebar_label: Invio di Email
---
## Prima di iniziare

Prima di procedere, assicurati di avere nozioni di base di _**JavaScript**_ e di avere già le nozioni di base di Netuno con la procedura passo passo disponibile nell'[Accademia](/docs/academy/overview).

## Dimostrazione dell'Invio di Email

Con Netuno è molto semplice inviare email, sia con allegati sia con immagini incorporate nel contenuto stesso (utile nel caso delle firme).

L'applicazione fornita con Netuno denominata **demo** (applicazione dimostrativa) contiene molti esempi delle possibili implementazioni di codice in vari linguaggi, inclusa la dimostrazione dell'invio di email tramite il servizio `mail-send` che si trova in:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configurazione
Il primo passo sarà configurare l'account SMTP che Netuno utilizzerà per l'invio di email.

Per farlo, all'interno dell'applicazione che stai sviluppando, vai al file di configurazione dell'ambiente. In questo esempio utilizzeremo il file di ambiente di sviluppo che si trova in:

* `config/_development.json`

Verifica che non esistano già configurazioni per SMTP; se non esistono ancora, alla fine del file di configurazione (in formato JSON) aggiungi i parametri di configurazione SMTP:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Se stai configurando per Gmail, sostituisci solo gli asterischi con le tue credenziali e attiva la connessione SMTP nelle impostazioni del tuo account Gmail. Altrimenti sostituisci tutti i parametri con quelli del tuo account SMTP.

Dopo aver salvato le modifiche, è sufficiente riavviare Netuno per applicare le modifiche alla configurazione. Queste sono le configurazioni predefinite per l'invio di email, come indica il nome `default`.

```json
...
    "default": {
        ...
    }
...
```

Puoi aggiungere altri account SMTP, ma solo uno potrà essere definito come predefinito.

Per aggiungere altri account SMTP, basta ripetere il blocco di configurazione SMTP predefinito e sostituire il nome `default` con un altro nome a tua scelta, ad esempio:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Una configurazione simile all'esempio sopra permetterà di utilizzare l'account `default` quando viene chiamato nel codice nel modo seguente:

```javascript
const smtp = _smtp.init()
```

E per utilizzare la configurazione `test`, basta aggiungere il nome della configurazione come parametro alla funzione `_smtp.init()` nel modo seguente:

```javascript
const smtp = _smtp.init("test")
```

> Se non aggiungi un nome di configurazione come parametro, verrà sempre utilizzato l'account predefinito.

## Codice Dettagliato
Analizziamo ora con attenzione il codice di esempio fornito da Netuno. In questo caso è in JavaScript ed è strutturato come segue:

Inizializzazione di SMTP:

```javascript
const smtp = _smtp.init()
```

> Ricorda che puoi inizializzare con un'altra configurazione, ad esempio: `_smtp.init("test")`

Aggiungendo `.to` alla variabile smtp si definisce l'indirizzo del destinatario dell'email; in caso di più destinatari basta separarli con ‘;‘ o ‘,‘:

```javascript
smtp.to = '*****@gmail.com'
```

Aggiungendo `.from` si definisce l'indirizzo del mittente dell'email:

```javascript
smtp.from = '*****@gmail.com'
```

Aggiungendo `.cc` si definisce l'indirizzo dei destinatari in copia dell'email; in caso di più destinatari in copia basta separarli con ‘;‘ o ‘,‘:

```javascript
smtp.cc = '*****@gmail.com'
```

Lo stesso vale per `.bcc`, con cui si definiscono i destinatari in copia nascosta:

```javascript
smtp.bcc = '*****@gmail.com'
```

Aggiungendo `.subject` si definisce l'oggetto dell'email:

```javascript
smtp.subject = 'Test di Netuno'
```

Aggiungendo `.text` si definisce il contenuto in testo semplice:

```javascript
smtp.text = 'Hai ricevuto questa email?'
```

Aggiungendo `.html` si definisce il contenuto dell'email in HTML:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Hai ricevuto questa email?</p>
</div>`
```

Per aggiungere un'immagine come allegato si procede come mostrato sopra; nell'HTML, per le immagini (`img`), nell'attributo `src` si definisce come prefisso il `cid:` (**C**ontent **ID**) e subito dopo il `cid` definito quando si aggiungono allegati con la funzione `attachment` (come mostrato sotto).

Per aggiungere l'immagine allegata all'email, si aggiunge `.attachment` alla variabile smtp nel modo seguente:

```javascript
smtp.attachment(
    "logo.png", // File
    "image/png", // Formato del file
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Posizione del file
    "logo" // Nome della variabile definita in "cid:logo"
)   
```

> Nota che il `cid` (**C**ontent **ID**) è necessario solo per incorporare immagini allegate nel contenuto HTML dell'email.

Per aggiungere un allegato senza incorporarlo nell'HTML (ad esempio documenti), si procede nel modo seguente:

```javascript
smtp.attachment(
    "documento.txt",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "documento.txt").file()
)   
```

Infine, per inviare l'email basta inserire il seguente codice:

```javascript
smtp.send()
```

Infine, se tutto è stato configurato correttamente, riceverai un'email simile alla seguente:

![invio-email1.png](/docs/assets/envio-emails1.png)

> Nota che, a seconda del tuo client di posta, potrà differire dall'immagine sopra.

## Esempio Completo con Template

Inserire contenuto HTML in mezzo al codice non è molto elegante, come mostrato sopra:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Hai ricevuto questa email?</p>
</div>`
```

Per evitare questo e mantenere il codice più pulito ed elegante, il contenuto HTML deve essere importato come template, nel modo seguente:

`smtp.html = _template.getOutput('email/contatto', dati)`

In questo esempio, la configurazione SMTP nella configurazione dell'applicazione sarebbe così:

```
...
    "smtp": {
        "contatto": {
            "enabled": true,
            "host": "MIO.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Contatto Sito Web - ",
            "from": "noreply@MIO.DOMINIO.com",
            "to": "info@MIO.DOMINIO.com",
            "username": "noreply@MIO.DOMINIO.com",
            "password": "S3gr3d0"
        }
    },
...
```

Osserva qui sotto come può essere utilizzato in questo esempio di codice di servizio completo, che potrà trovarsi nel file `server/services/contatto.js`:

```
const nome = _req.getString("nome")
const email = _req.getString("email")
const oggetto = _req.getString("oggetto")
const messaggio = _req.getString("messaggio")

const smtp = _smtp.init("contatto")

smtp.subject = oggetto

smtp.text = "Contenuto in HTML."

const dati = _val.map()
      .set("nome", nome)
      .set("email", email)
      .set("oggetto", oggetto)
      .set("messaggio", messaggio)

smtp.html = _template.getOutput('email/contatto', dati)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("result", true)
)
```

> Nel percorso relativo del template non è necessario inserire l'estensione `.html`, e nota che opzionalmente è possibile passare informazioni all'interno del template.

Il contenuto HTML del template deve essere definito in un file separato che deve trovarsi nella cartella `server/templates/`; questo percorso si trova a partire dalla cartella radice dell'applicazione. 

Seguendo l'esempio mostrato sopra, il file template di esempio si troverà qui:

- `server/templates/email/contatto.html`

Il contenuto di esempio di questo file potrà essere:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contatto del Sito Web
    </h1>
    <p>Nome: _{&data=nome}</p>
    <p>Email: _{data=email}</p>
    <p>Titolo: _{&data=oggetto}</p>
    <p>_{&data=messaggio}</p>
  </div>
</div>

```

Quando vengono iniettati dati nel template con `_{data=...}`, il `&` viene aggiunto quando deve essere eseguita la codifica dei caratteri speciali in HTML, diventando `_{&data=...}`; subito dopo il `=` al posto dei `...` c'è la chiave del contenuto che verrà iniettato.

## Configurazioni Avanzate

Le configurazioni di ambiente `config/_*.json` permettono molte altre configurazioni avanzate.

Le proprietà di `smtp` utilizzate nel codice come `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` e `.html` possono essere definite nella configurazione per essere predefinite nel modo seguente:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Titolo predefinito...",
        "text": "Contenuto predefinito... ok!",
        "html": "<p>Contenuto predefinito... <b>ok!</b></p>"
        ...
    }
...
```

> Predefinire `.from` è piuttosto utile, dato che normalmente l'invio delle email avviene sempre dallo stesso indirizzo.

Sono possibili anche altre configurazioni. Segue un elenco completo delle stesse:

| PARAMETRO    | TIPO   | PREDEFINITO      | DESCRIZIONE    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Attiva e disattiva l'invio di email. |
| `debug` | boolean | false | Abilita la modalità debug, che mostra messaggi che dettagliano la comunicazione con il server. |
| `protocol` | string |  | Definisce il tipo di protocollo, smtp o smtps. |
| `host` | string |  | Nome o IP del server SMTP. |
| `port` | integer | 465 | Numero della porta del server SMTP. |
| `ssl` | boolean | true | Attiva SSL. |
| `tls` | boolean | false | Attiva TLS |
| `socketFactoryFallback` | boolean | true | Se fallisce la generazione del Socket, verrà utilizzato il socket nativo java.net.Socket. |
| `socketFactoryClass` | string |  | Definisce una classe che implementa l'interfaccia javax.net.SocketFactory che verrà utilizzata per generare i socket per SMTP. |
| `socketFactoryPort` | integer |  | Definisce la porta che deve essere utilizzata dai socket. |
| `quitWait` | boolean | false | Se attivato attende la risposta del server dopo il comando QUIT; se disattivato chiude subito la connessione con il server dopo il comando QUIT. |
| `authMechanisms` | string |  | Elenco dei meccanismi di autenticazione; per impostazione predefinita è “LOGIN PLAIN DIGEST-MD5 NTLM”, così supporta tutti i meccanismi. |
| `authNTLMDomain` | string |  | Dominio di autenticazione NTLM. |
| `username` | string |  | Definisce l'utente nell'autenticazione con il server. |
| `html` | string |  | Contenuto HTML dell'email. |
| `password` | string |  | Definisce la password nell'autenticazione con il server. |
| `from` | string |  | Indirizzo email di chi invia. |
| `to` | string |  | Indirizzo email di chi deve ricevere; possono essere aggiunte altre email separate da “;” o “,”. |
| `cc` | string |  | Indirizzo email di chi deve ricevere una copia; possono essere aggiunte altre email separate da “;” o “,”. |
| `bcc` | string |  | Indirizzo email di chi deve ricevere una copia nascosta; possono essere aggiunte altre email separate da “;” o “,”. |
| `subjectPrefix` |  | string | Definisce un prefisso al titolo dell'email, così garantisce che tutte le email inviate abbiano il prefisso. |
| `subject` | string |  | Oggetto dell'email. |
| `text` | string |  | Contenuto testuale dell'email in testo semplice. |

Se hai qualche domanda, non esitare a contattarci tramite i mezzi indicati in fondo alla pagina.

Buon sviluppo!