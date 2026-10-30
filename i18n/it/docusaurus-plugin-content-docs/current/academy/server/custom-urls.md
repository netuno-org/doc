---
id: custom-urls
title: URL personalizzati
sidebar_label: URL personalizzati
---

## Introduzione

Netuno consente di modificare gli indirizzi predefiniti, ad esempio:

- L'indirizzo dell'interfaccia di amministrazione, `admin`.
- L'indirizzo dei file pubblici, come immagini, CSS e JS, `public`.
- L'indirizzo dei servizi dell'API REST, `services`.

## Configurazione

Naviga all'interno dell'applicazione che stai sviluppando fino al file di configurazione dell'ambiente. In questo esempio utilizzeremo il file di ambiente di sviluppo locale situato in:

- 📂 `config/_development.json`

Verifica che la configurazione dell'URL non esista già; se non esiste, aggiungi alla fine del file di configurazione (in formato JSON) i parametri di configurazione dell'URL, come ad esempio:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Definisce il prefisso dell'indirizzo URL dell'interfaccia di amministrazione, il valore predefinito è semplicemente `/`.

### public

Definisce il prefisso dell'indirizzo URL dei file statici che sono pubblici come immagini, fogli di stile CSS e codice JavaScript, il valore predefinito è `/public`.

### services

Definisce l'indirizzo URL iniziale dei servizi web dell'API REST, il valore predefinito è `/services`.

## Conclusione

La personalizzazione degli URL è importante, sia per renderli più intuitivi sia per poterli rendere più complessi e aumentare la sicurezza.

Ad esempio, nell'indirizzo di amministrazione si può inserire un prefisso con una sequenza di caratteri casuali, così solo chi la conosce a memoria potrà accedere all'indirizzo, il che rende più difficile l'accesso e previene gli attacchi.