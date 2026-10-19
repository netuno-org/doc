---
id: generate-uid-guid
title: Generare ID univoci (UID/GUID)
sidebar_label: Generare ID univoci (UID/GUID)
---

## Prima di iniziare

Prima di procedere assicuratevi di saper creare **Servizi Web REST**; in caso contrario, visitate il seguente link:

* [Servizi Web REST](/docs/academy/server/services/rest)

È inoltre consigliabile, prima di iniziare questo tutorial, assicurarsi di avere nozioni di base di _**JavaScript**_.

## Che cos'è un UID

Un UID (_unique identifier_), come suggerisce il nome stesso, è una stringa unica in tutta la vostra applicazione. È anche nota come GUID (_global unique identifier_).

Per poter esemplificare la generazione di UID, creeremo un servizio.

## Generazione di UID

Ora dimostreremo la creazione di un UID casuale; è molto semplice perché Netuno include già una funzione creata appositamente per questo scopo:

```javascript
_out.println(
  _uid.generate()
)
```

> Nota che la funzione `_out.println()` serve solo a consentire la visualizzazione del risultato sullo schermo quando si chiama il servizio nel browser

Se avete qualche domanda, non esitate a contattarci tramite i mezzi indicati in fondo alla pagina.

Buon sviluppo!