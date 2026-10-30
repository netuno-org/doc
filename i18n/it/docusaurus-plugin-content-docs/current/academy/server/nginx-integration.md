---
id: nginx-integration
title: Integrazione con NGINX
sidebar_label: Integrazione con NGINX
---

NGINX è un potente server web che garantisce alte prestazioni e versatilità.

Con l'integrazione di NGINX possiamo trarre vantaggio dalle tecniche offerte per risolvere questioni relative a bilanciamento del carico,
proxy inverso, cache, sicurezza, tra gli altri.

![integrazione-nginx1.png](/docs/assets/integracao-nginx1.png)

## Installare NGINX

Installare NGINX è molto semplice; su qualsiasi distribuzione Linux, NGINX dovrebbe essere disponibile nei pacchetti.

Su distribuzioni Ubuntu o Debian:

```shell
apt install nginx
```

Su distribuzioni CentOS, Fedora o RedHat:

```shell
yum install nginx
```

Su MacOS X è disponibile tramite brew e macports.

Per Windows puoi scaricare l'installer da: http://nginx.org/en/download.html

## Configurazione

Per questo esempio, supponiamo che tu abbia già Netuno installato e in esecuzione in `/srv/netuno`.

Per configurare un nuovo sito in NGINX, vai alla cartella di configurazione:

* Nelle distribuzioni Linux di solito si trova in: `/etc/nginx`
* MacOS X con brew: `/usr/local/etc/nginx`

Crea un nuovo file di configurazione per il nuovo sito in `sites-available/netuno`.

E il contenuto di questo file sarà:

```
server {
    listen 127.0.0.1:80;
    server_name app.tuo-dominio.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host nome-della-tua-app-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/nome-della-tua-app-netuno;
    }
}
```

Puoi modificare la riga in cui è indicato `listen 127.0.0.1:80` con il tuo IP esterno e la relativa porta.

E dove c'è `nome-della-tua-app-netuno` dovrebbe esserci il nome della tua app, come ad esempio `miaapp`.

> Se il nome dell'applicazione contiene `_`, come `mia_app`, è perché Netuno non consente `-` nel nome delle applicazioni.
> Quindi, poiché negli indirizzi di dominio non è supportato `_`, deve essere sostituito con `-`, che Netuno converte automaticamente in `_` e trova l'app corrispondente.

`.local.netu.no` è un alias per `localhost`; in alternativa si può usare `.localhost`.

Questo perché Netuno cerca automaticamente un'app con il nome corrispondente al sottodominio, quindi è molto importante nell'`Host` che arriva a Netuno indicare nel prefisso il nome dell'applicazione.

In questo esempio supponiamo che Netuno sia in esecuzione sulla porta `9000` e nel percorso `/src/netuno`; verifica questa informazione e adatta se necessario.

Il contenuto web pubblico di Netuno si trova nella cartella `core/web`, ma non tutto deve essere esposto, solo la cartella `netuno`.

Pertanto, le uniche cartelle esposte direttamente sono la cartella `core/web/netuno` e la cartella `public` dell'applicazione corrispondente.

## Attivare la configurazione del nuovo sito

Ora è necessario creare un link simbolico al nostro nuovo file di configurazione per attivare il nostro nuovo sito.

Questo perché il metodo di configurazione dei siti di NGINX su Linux si basa sul tenere i file di configurazione dentro la cartella `sites-available`, ma ciò che è attivo è definito nella cartella `sites-enabled`.

Così la creazione del link simbolico è importante per evitare la duplicazione dei file e garantire che qualsiasi modifica venga fatta in un unico file.

Su Linux si crea il link simbolico in questo modo:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Ricaricare la configurazione di NGINX

Ricorda che perché questa configurazione abbia effetto è necessario ricaricare le configurazioni di NGINX.

Ricarica:

```shell
nginx -s reload
```

Oppure riavvia:

```shell
killall nginx
nginx
```

Oppure nel modo più elegante:

```shell
service nginx restart
```

Oppure arresta completamente il server e avvialo di nuovo:

```shell
service nginx stop
service nginx start
```

Puoi verificare lo stato di NGINX con il comando:

```shell
service nginx status
```

I file di log di NGINX si trovano nella cartella `/var/log/nginx`.

## Indirizzo locale fittizio

Netuno determina quale applicazione elabora la richiesta (request) in base al prefisso dell'indirizzo che arriva nell'`Host` dell'header HTTP, e il prefisso deve contenere il nome esatto dell'applicazione Netuno.

Quindi è possibile utilizzare un indirizzo fittizio solo per indicare a Netuno che deve utilizzare l'applicazione corretta.

Abbiamo `mia-app.local.netu.no`, che risolve sempre all'IP locale.

> L'applicazione in Netuno deve essere `mia_app`, perché Netuno non consente `-` nel nome delle applicazioni, e poiché il dominio non supporta `_`, allora va sostituito con `-`, che Netuno converte automaticamente in `_`.

In alternativa si può creare un indirizzo locale, come ad esempio `mia-app.localhost`; in questo caso è necessario registrare questo indirizzo come host locale, dovrai forzare la risoluzione dell'indirizzo nel tuo file hosts; nel caso di Linux modifica il file:

```plaintext
/etc/hosts
```

E aggiungi la riga:

```plaintext
127.0.0.1 mia-app.localhost
```

Ora questo indirizzo locale può essere utilizzato in NGINX.

Se sei in un ambiente di sviluppo locale, basta verificare nel tuo browser tramite l'indirizzo:

- Tramite NGINX:

```plaintext
http://mia-app.localhost
```

- Direttamente a Netuno:

```plaintext
http://mia-app.localhost:9000
```

Se sei su un server o container da terminale, allora usa il comando cURL, per esempio:

- Tramite NGINX:

```plaintext
curl -v http://mia-app.localhost:9000
```

- Direttamente a Netuno:

```plaintext
curl -v http://mia-app.localhost:9000
```

Assicurati sempre che dove facciamo riferimento a `mia-app` debba essere il nome della tua applicazione.

In un ambiente di sviluppo locale, se c'è qualche correzione, soprattutto del file `hosts` del sistema operativo, potrebbe essere necessario riavviare il browser a causa della cache di risoluzione DNS.

Se è necessario correggere qualche configurazione in NGINX, non dimenticare di ricaricare sempre le configurazioni.