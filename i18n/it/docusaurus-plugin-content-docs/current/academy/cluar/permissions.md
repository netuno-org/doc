---
sidebar_position: 12
id: permissions
title: Permessi
sidebar_label: Permessi
---

Come viene controllato l'accesso al backoffice tramite ruoli e organizzazioni.

## Introduzione

CLUAR controlla l'accesso al backoffice tramite **ruoli** (gruppi), assegnati alle persone all'interno di un'**organizzazione**. Ogni servizio REST del server è classificato in una categoria di accesso, e solo chi ha il ruolo giusto, nell'organizzazione giusta, riesce a usarlo.

## Ruoli

Esistono 5 ruoli precreati (`user_group`):

| Codice | Nome |
|---|---|
| `administrator` | Amministratore |
| `editor` | Editor |
| `author` | Autore |
| `contributor` | Collaboratore |
| `subscriber` | Abbonato |

:::info Non tutti i ruoli hanno ancora permessi assegnati
Oggi solo **Amministratore** ed **Editor** hanno effettivamente accesso a qualcosa — sono gli unici ruoli referenziati nelle regole di accesso (vedi sotto). Autore, Collaboratore e Abbonato esistono già come opzione nel formulario, ma non hanno ancora nessun accesso configurato; assegnare uno di questi ruoli a qualcuno non gli dà, oggi, accesso a nulla nel backoffice.
:::

## Organizzazione

Una persona ha un ruolo solo **all'interno del contesto di un'organizzazione** — il collegamento viene fatto in `Organizzazione > Membri` (`organization_people`), associando Persona + Organizzazione + Ruolo.

Oggi esiste una sola organizzazione, con il codice `admins`, ed è lì che vengono verificate tutte le autorizzazioni. L'entità `organization` supporta la gerarchia (`parent_id`, organizzazioni "padre"), ma questa gerarchia non è ancora usata nelle regole di permesso attuali — tutte le verifiche puntano direttamente all'organizzazione `admins`.

## Primo accesso alla modalità di modifica

CLUAR distingue due luoghi diversi in cui si effettua il login:

- Il **backoffice di Netuno** (porta `9000` in sviluppo) — è dove si gestiscono direttamente gli utenti Netuno (`netuno_user`, la coppia username/password) e tutte le entità, comprese Persona e Ruoli.
- L'**Area Riservata** del sito stesso (`/login`, porta `3000` in sviluppo) — è dove l'editore di contenuti entra quotidianamente, per accedere alla modalità di modifica delle pagine.

Per entrare nell'Area Riservata e avere la modalità di modifica disponibile, serve un utente Netuno con login associato a una **Persona**, collegata all'organizzazione `admins` con il ruolo **Amministratore** o **Editor** (vedi [Organizzazione](#organizzazione) sopra).

### Utente predefinito

Il file `server/setup/030-people.js` di CLUAR crea già, per impostazione predefinita, una Persona "admin" collegata all'utente Netuno con `id: 2`, e il file `server/setup/050-organization_people.js` collega già questa Persona all'organizzazione `admins` con il ruolo **Amministratore** — ovvero, questo utente nasce già con accesso completo.

Il login di questo utente predefinito è:

```
utente: admin
password: admin
```

Con queste credenziali è possibile entrare direttamente nell'Area Riservata (`/login`) già come Amministratore — senza bisogno di nessun passaggio extra nel backoffice di Netuno.

:::info Cambia la password predefinita in produzione
`admin`/`admin` è una credenziale nota e prevedibile. Prima che un sito vada in produzione, cambia la password di questo utente (oppure crea un nuovo Amministratore e disattiva questo).
:::

### Creare nuovi utenti

Esistono due percorsi possibili:

**Dall'Area Riservata (consigliato):** in `Utenti > Crea Utente`, un unico formulario chiede nome, username, password, e-mail, Organizzazione e Ruolo — e crea tutto in una volta: l'utente Netuno, la Persona (già collegata a questo utente) e il vincolo all'organizzazione/ruolo scelti. Non è necessario passare dal backoffice di Netuno.

**Solo dal backoffice di Netuno:** poiché il backoffice dà accesso diretto a tutte le entità, è anche possibile eseguire gli stessi 3 passaggi manualmente, senza uscire da lì:

1. Creare l'utente Netuno (`netuno_user`), con lo username/password scelti.
2. Creare una **Persona**, associandola a questo utente Netuno.
3. In `Organizzazione > Membri`, associare questa Persona all'organizzazione `admins`, con il ruolo Amministratore o Editor.

In entrambi i casi, la persona creata riesce già a entrare in `/login` e ad avere accesso alla modalità di modifica.

## Come vengono applicati i permessi

Ogni servizio del server è classificato in una di queste categorie, definite in `server/core/_service_config.js`:

| Categoria | Chi ha accesso | Esempi |
|---|---|---|
| **Pubblici** | Chiunque, senza login | Contatto, avatar, login |
| **Gestione dei contenuti** | Amministratore + Editor | Pagine, versioni, componenti, dizionario, azioni |
| **Amministrazione del sito** | Solo Amministratore | Configurazioni, lingue, sincronizzazione |
| **Gestione degli accessi** | Solo Amministratore | Organizzazioni, persone, utenti |

Qualsiasi servizio che non sia elencato in una di queste categorie è **negato per impostazione predefinita** — è una decisione deliberata del codice (commentata esplicitamente nel file), affinché dimenticare di classificare un nuovo servizio comporti un blocco, e non un accesso libero per distrazione.

:::info I permessi non vengono applicati in ambiente di sviluppo
In ambiente `dev`, il file `_service_config.js` libera tutti i servizi fin dall'inizio, prima di qualsiasi verifica — ovvero, **i permessi vengono applicati davvero solo in produzione/staging**. Quando si testa localmente, qualsiasi utente loggato ha accesso a tutto, indipendentemente dal ruolo.
:::

## Interfaccia: anche il menu filtra per permesso

Oltre al blocco sul server, il menu laterale dell'Area Riservata (`website/src/components/SideMenu`) filtra anche gli elementi visibili in base al ruolo della persona loggata — per non mostrare opzioni che non avrebbe il permesso di usare.

:::info Mantenere le due liste sincronizzate
La lista di "chi può vedere cosa" nel `SideMenu` viene mantenuta manualmente allineata con `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` e `ACCESS_MANAGEMENT_PATHS` del file `_service_config.js` — sono due liste separate, una nel frontend e l'altra nel backend. Quando si aggiunge un nuovo servizio protetto, è necessario aggiornare entrambe; modificare solo il server nasconde l'errore (il menu continua a mostrare un'opzione che in pratica sarà negata), e modificare solo il menu non protegge nulla di fatto.
:::

## Come proteggere un nuovo servizio

1. Crea il servizio normalmente in `server/services/`.
2. Aggiungi il percorso del servizio (`path/method`) alla lista corretta in `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` o `ACCESS_MANAGEMENT_PATHS` — a seconda di chi deve poterlo usare. Se è pubblico, aggiungilo a `PUBLIC_PATHS`.
3. Se il servizio ha un elemento corrispondente nel menu dell'Area Riservata, aggiorna anche il `SideMenu` affinché il filtro corrisponda al permesso reale.