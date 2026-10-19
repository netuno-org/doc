---
id: access-permissions
title: Accesso e Permessi
sidebar_label: Accesso e Permessi
---

Come gestire utenti e gruppi e garantire la sicurezza dell'applicazione.

## Introduzione

La sicurezza è uno dei pilastri fondamentali di qualsiasi applicazione. Che si tratti di una semplice applicazione interna o di un sistema complesso con migliaia di utenti esterni via API.

Netuno offre nativamente un sistema robusto di **Controllo degli Accessi e dei Permessi**, fornendo gli strumenti necessari per gestire la sicurezza in modo centralizzato ed efficiente. Ed elimina la necessità di sviluppare queste funzionalità da zero.

Tra i principali meccanismi di sicurezza si distinguono:

- Gestione di utenti e gruppi.
- Controllo dei permessi sui dati e gestione dei dati.
- Storico dettagliato dei tentativi di autenticazione.
- Blocco automatico per IP dopo tentativi di accesso falliti consecutivamente.
- Autenticazione integrata con LDAP, Google, GitHub, Discord, ecc.
- Modulo di autenticazione JWT per il front-end.
- Tra gli altri...

## Gestione degli Utenti

Si tratta dell'amministrazione degli account individuali che accedono alla piattaforma. Ogni utente, servizio o integrazione che deve entrare nel sistema deve avere un record utente univoco.

Nell'area di gestione utenti di Netuno, hai il controllo totale sul ciclo di vita di questi account:
- **Creazione**: Registrazione di nuovi membri del team o clienti.
- **Manutenzione**: Aggiornamento di e-mail, modifica delle password e dati anagrafici.
- **Controllo degli Accessi**: Blocco rapido degli account (disattivazione) senza necessità di eliminare i dati storici.

:::tip Guida Visiva
Per ottenere informazioni dettagliate sulla Gestione degli Utenti, consulta la [Guida dell'Interfaccia: Utenti e Gruppi](/docs/academy/ui/groups-users)
:::


## Gestione dei Gruppi

La definizione delle regole di autorizzazione avviene tramite i Gruppi, che stabiliscono quali menu, formulari, servizi e dati ogni utente ha il permesso di accedere o manipolare. Invece di configurare i permessi individualmente, l'ideale è definire le regole nel Gruppo e poi associare gli utenti a esso. Questa procedura garantisce:

- **Scalabilità:** Facilità di gestire centinaia di utenti.
- **Sicurezza:** Minore rischio di concedere accessi non autorizzati per errore.
- **Organizzazione:** Separazione chiara tra Amministratori, Gestori, Supervisori e utenti in generale.

Netuno include già gruppi nativi come `dev` e `admin` e offre totale autonomia per creare gruppi personalizzati per soddisfare le regole di business della tua applicazione.

:::tip Guida Visiva
Per ottenere informazioni dettagliate sulla Gestione dei Gruppi, consulta la [Guida dell'Interfaccia: Utenti e Gruppi](/docs/academy/ui/groups-users)
:::


## Controllo dei Permessi sui Dati

Per garantire la funzionalità di un gruppo o i permessi di un utente, è cruciale stabilire quali dati è autorizzato a manipolare. In Netuno, il controllo degli accessi è dettagliato e applicato direttamente ai Formulari (tabelle) della tua applicazione.

Il sistema utilizza una matrice di permessi che consente di definire, per ogni funzionalità, se un determinato gruppo dispone dell'autorizzazione necessaria per:

- **Leggere:** Solo visualizzare i record.
- **Scrivere:** Inserire e modificare record nel database.
- **Eliminare:** Rimuovere record in modo permanente.

Questa flessibilità garantisce la protezione dei dati sensibili, poiché ogni collaboratore ha accesso limitato solo alle informazioni essenziali per l'esecuzione dei propri compiti.

:::tip Guida Visiva
Per ottenere informazioni dettagliate su come configurare i permessi sui dati, consulta la [Guida dell'Interfaccia: Utenti e Gruppi](/docs/academy/ui/groups-users)
:::

## Storico di Autenticazione

Per garantire trasparenza e controllo, tutti i tentativi di accesso (riusciti o non validi) vengono registrati e possono essere consultati nello Storico di Autenticazione.

Il sistema monitora e memorizza in dettaglio le informazioni di ogni tentativo di login dell'utente:

- **IP di Origine:** L'indirizzo di rete da cui è partita la richiesta.
- **Momento:** Il momento esatto dell'azione.
- **Accesso:** Se l'accesso è stato consentito, negato o bloccato.

#### Legenda delle Icone di Accesso

🟩 **Lucchetto/check_mark, di colore verde:** Indica un successo. L'utente ha fornito le credenziali corrette e il login è stato autorizzato. Indica anche che l'IP di origine è stato sbloccato.

🟧 **Icona con "X", di colore arancione:** Indica il numero di tentativi non validi.

🟥 **Lucchetto di colore rosso:** Indica il blocco dell'IP di origine.

## Blocco Automatico

Netuno dispone di un sistema di sicurezza attivo progettato per proteggere la tua applicazione da attacchi e accessi non autorizzati.

Quando vengono rilevate attività sospette, come molteplici tentativi consecutivi di login non valido, il sistema blocca automaticamente l'indirizzo IP di origine.

Una volta bloccato, l'IP non potrà effettuare nuove richieste per un periodo determinato o finché il blocco non venga rimosso manualmente.

### Configurare le Regole di Blocco

Questa regola è definita nei **file di configurazione** dell'ambiente della tua applicazione "development.json" o "production.json".

#### 1. Individua il file di configurazione

Nella radice del tuo progetto, vai alla cartella `config`. Apri il file corrispondente all'ambiente che desideri proteggere:

* Per lo sviluppo: `_development.json`

* Per la produzione: `_production.json`

#### 2. Inserisci il codice di protezione
All'interno del file JSON, individua la sezione `auth`. Se non esiste, inserisci il blocco `attempts` come nell'esempio seguente:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Comprendere i parametri

* `interval`: Intervallo di tempo in **minuti** (esempio: 60 minuti = 1 ora).

* `maxFails`: Numero massimo di errori consentiti all'interno di questo intervallo prima del blocco.


#### 4. Comportamento del sistema

- Dopo il blocco automatico, l'utente non può accedere all'applicazione.

- Per impostazione predefinita, il sistema è configurato per tre tentativi non validi con blocco per un'ora. Dopo questo periodo i tentativi sono nuovamente consentiti.

- Questo processo può essere configurato in base alle esigenze della tua applicazione.


### Sbloccare tramite l'Interfaccia

Solo un utente con permesso di "Amministratore" può sbloccare l'accesso direttamente dal Back-Office senza dover accedere al database.

1. Accedi al menu dell'applicazione in modalità "Visualizza" e fai clic sulla sezione **"Configurazione > Utenti"**.
![sezione-configurazione-utente-pt.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. Nel campo **"Modifica utente esistente"**, seleziona l'utente desiderato.
![seleziona-un-utente-esistente-pt.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. Nella sezione **"Storico di Autenticazione"**, verifica se lo stato "Accesso" mostra l'icona del "Lucchetto" di colore verde;
![sezione-storico-autenticazione-pt.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Fai clic sull'icona dell'**Orologio** per verificare l'elenco completo degli accessi dell'utente.
![storico-autenticazione-pt.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Fai clic sul lucchetto verde nella colonna **"Accesso"** per sbloccare l'utente. Dopo questa azione, viene mostrato un messaggio di successo.

Lo sblocco è immediato e consente all'utente di provare a effettuare nuovamente il login.


## Autenticazioni Integrate

La tua applicazione può richiedere metodi di accesso più sofisticati, soprattutto se stai costruendo un'applicazione mobile o integrandoti con una rete aziendale.

Netuno è stato progettato per essere flessibile e integrarsi nell'ecosistema della tua organizzazione. Oltre al login standard (utente e password), la piattaforma supporta diversi protocolli di autenticazione diffusi sul mercato.

Ciò consente di implementare strategie di Single Sign-On (Accesso Unico), in cui gli utenti accedono al sistema utilizzando credenziali che già possiedono, centralizzando la gestione degli accessi.

**Ambienti Aziendali:** Compatibilità con directory utenti (come LDAP e Active Directory), ideale per intranet e sistemi interni.

**Login Social (OAuth):** Possibilità di integrazione con provider come Google, Microsoft, GitHub e altri, semplificando la registrazione e l'accesso nelle applicazioni pubbliche.

## Autenticazione tramite Token (JWT)

Per i progetti che utilizzano un Front-end dedicato (come siti in React, Vue.js o applicazioni Mobile), non viene utilizzata la schermata di login tradizionale di Netuno. In questi scenari si adotta lo standard JWT (JSON Web Token).

Netuno offre un servizio nativo che genera e convalida automaticamente questi token, garantendo sicurezza ed efficienza nella comunicazione tramite API.

:::tip Guida Visiva
Per ottenere maggiori informazioni su come implementare e configurare JWT nei tuoi file di configurazione, consulta la [Guida all'Autenticazione JWT](/docs/academy/server/services/jwt)
:::

## Conclusione

Padroneggiare le funzionalità di sicurezza di Netuno è fondamentale per la salute del tuo progetto. Utilizzando correttamente gli strumenti di gestione utenti, gruppi e monitoraggio dello storico, costruisci un ambiente che bilancia la protezione dei dati con la facilità d'uso.

In questo modo garantisci che il tuo sistema in Netuno sia:

- **Sicuro:** Proteggendo informazioni sensibili contro accessi non autorizzati.

- **Organizzato:** Stabilendo gerarchie e responsabilità chiare.

- **Scalabile:** Pronto a crescere con integrazioni moderne.

**Mantieni le buone pratiche:** Rivedi periodicamente i permessi dei gruppi e controlla lo storico degli accessi per mantenere il tuo ambiente sano.