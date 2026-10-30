---
id: cors
title: CORS
sidebar_label: CORS
---

Configurazione del CORS nell'applicazione.

## Introduzione

Il CORS (Cross Origin Resource Sharing) è un processo di validazione che i browser eseguono per verificare se possono
integrare le risorse condivise da un altro indirizzo.

Viene implementato quando:

- Nello sviluppo del livello frontend con il server webpack, come lo sviluppo di interfacce web
(sito web o applicazione web) utilizzando tecnologie moderne come ReactJS e VueJS.
- L'indirizzo del frontend è diverso dall'indirizzo dei servizi, ad esempio quando i servizi vengono eseguiti
all'indirizzo `http://localhost:9000` e il frontend viene eseguito all'indirizzo `http://localhost:3000`.
- In produzione, ad esempio, i servizi vengono eseguiti su un sottodominio dedicato `api.esempio.com` e il frontend su
`www.esempio.com`.

> Maggiori informazioni sul CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno è pronto per realizzare l'integrazione del CORS in modo semplice e immediato.

## Configurazione

La configurazione CORS viene eseguita nel file di configurazione dell'applicazione, a seconda dell'ambiente.

Per farlo, all'interno dell'applicazione che stai sviluppando, vai al file di configurazione dell'ambiente.
In questo esempio utilizzeremo il file dell'ambiente di sviluppo situato in:

- 📂 `config/_development.json`

Verifica che non esistano già configurazioni CORS; se non esistono, aggiungi alla fine del file di configurazione (in
formato JSON) i parametri di configurazione:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> La configurazione del CORS è un array e supporta diverse regole CORS distinte.

### Origini

Nel parametro `origins` c'è la lista degli indirizzi del frontend che verrà integrato con i servizi.

### Produzione

In produzione dobbiamo definire come origini gli indirizzi in cui il frontend funzionerà online.

Il file di configurazione dell'applicazione in cui si trova la definizione di `cors` dovrà essere diverso a seconda
dell'ambiente.

Il file di configurazione dell'applicazione dovrà essere:

- 📂 `config/_production.json`

Esempio di configurazione CORS:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://mio-progetto.com", "https://www.mio-progetto.com" ]
        }
    ]
    ...
}
```

Il file di configurazione dell'applicazione è `_production.json` in base alla configurazione dell'ambiente di Netuno,
che si trova nel file `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Intestazione (Header HTTP)

L'intestazione predefinita (header del protocollo HTTP) è:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Per personalizzare l'intestazione predefinita aggiungi il parametro di configurazione `header`, ad esempio:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

Nell'esempio sopra, nell'header verrà accettato solo `Authorization` invece di tutti gli altri definiti per
impostazione predefinita.

Puoi aggiungere nuove definizioni nell'header, ad esempio sostituendo la definizione predefinita.

## Manualmente

Il CORS può essere configurato anche manualmente, invece di utilizzare il meccanismo automatico di Netuno.

Nella tua applicazione Netuno è sufficiente modificare il file:

- `📂 server/core/_request_url.js`

E utilizzare il seguente codice:

```javascript title="server/core/_request_url.js"
const origineHeaderHttp = _header.getString("Origin", "null")

if (origineHeaderHttp == 'https://www.mia-app.com'
	|| origineHeaderHttp == 'http://localhost'
	|| origineHeaderHttp == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", origineHeaderHttp)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Nota che in questo codice sopra l'`if` limita gli 'header' in base all'indirizzo di origine (`Origin`).

Ricorda di adattarlo agli indirizzi che utilizzerai.

> In questo modo, tutti i servizi e gli indirizzi della tua applicazione supporteranno gli header CORS.

### Solo per Servizi Isolati

Se desideri aumentare il livello di sicurezza attivando gli header solo per servizi specifici, utilizza
questa stessa logica di codice nel file:

- `📂 server/core/_service_config.js`

Invece del file:

- `📂 server/core/_request_url.js`

## Conclusione

Una volta configurato il CORS, Netuno risponderà automaticamente con l'intestazione (header del protocollo HTTP)
predefinita per gli indirizzi configurati come `origins`.

Gli `headers` predefiniti possono essere personalizzati e modificati.

È possibile configurare diverse regole CORS.

Sebbene Netuno supporti la configurazione manuale delle regole CORS a livello di programmazione, è preferibile
utilizzare il meccanismo automatico integrato nella configurazione dell'applicazione.