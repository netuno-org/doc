---
sidebar_position: 7
id: life-cycle
title: Eventi del Ciclo di Vita dell'Interfaccia
sidebar_label: Eventi del Ciclo di Vita
---

## Interfaccia Utente (`ui`)

Nell'interfaccia di gestione dei dati di Netuno è possibile iniettare codice su misura per realizzare personalizzazioni e manipolazioni su misura.

Lo sviluppo viene effettuato programmando all'interno della cartella `ui` nella cartella radice dell'applicazione.

### addPageLoad()

La pagina non può essere manipolata in sicurezza finché l'applicazione non è "pronta".

Il metodo verrà chiamato quando la pagina sarà caricata.

```javascript
netuno.addPageLoad(() => {
   console.log('faccio qualcosa');
});
```

### addContentLoad()

Quando moduli o report vengono caricati, l'interfaccia viene modificata con il contenuto corrispondente, che sia un modulo dati, una ricerca o quando si filtrano i dati di un report.

Non appena un contenuto viene caricato, il metodo viene chiamato e passa il contenitore che conterrà il contenuto che viene visualizzato.

```javascript
netuno.addContentLoad((contenitore) => {
   if (contenitore.is('[netuno-form-search]')) {
       console.log('faccio cose quando l\'elemento esiste');
   }
});
```