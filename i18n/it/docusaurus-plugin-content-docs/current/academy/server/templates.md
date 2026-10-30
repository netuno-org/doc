---
id: templates
title: Template
sidebar_label: Template
---

## Prima di iniziare
Prima di creare servizi che chiamano template assicurati di sapere creare **Servizi Web REST**, in caso contrario visita il seguente link:

* [Servizi Web REST](/docs/academy/server/services/rest)

È anche consigliabile che, prima di iniziare questo tutorial, ti assicuri di avere nozioni di base in _**JavaScript**_.

## Utilizzo dei template nei servizi

In questo tutorial tratteremo la creazione di template e le azioni necessarie per poterli chiamare nel tuo servizio.

Quando crei un servizio in Netuno hai la possibilità di accedere a template creati da te, cioè, a seconda del risultato potrai reindirizzare il tuo servizio verso un template in HTML con dati.

In questo esempio avremo un template di base in HTML e passeremo dati dal servizio allo stesso template.

## Creazione di un template

![template1.png](/docs/assets/templates1.png)

Dopo essere nella directory sopra, creeremo un file in `.html`, in questo esempio sarà denominato `template.html`.

Segue il contenuto di questa pagina:

```html
<!-- Chiamata all'header di Netuno -->
_{include=_|includes/head}

<!-- Definizione degli stili -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Inizio del body dell'html -->
<h1>Titolo del template</h1>

<!-- Quando devi passare dati da un servizio a un template utilizza _{&variabile} -->
<p>Ciao, sono un <b>_{&data=nome}</b> e sto ricevendo <b>_{&data=dati}</b> da un servizio!</p>

<!-- Fine del body dell'html -->

<!-- Chiamata al footer di Netuno -->
_{include=_|includes/foot}
```

Infine, si crea il servizio con la chiamata al template con la seguente funzione:

`_template.output(‘nome_del_template’, variabili(opzionale));`

Segue l'esempio del servizio ‘servizio.js’:

```javascript
// Inizializzare l'oggetto 'dati' in modo che possa ricevere dati
var dati = _val.init()
    
// Associare valori all'oggetto 'dati'
    .set("nome", "template")
    .set("dati", "dati")

// Questa funzione permette di effettuare la chiamata al template
_template.output("template", dati);
```

> Se hai il tuo template in una sottodirectory indicalo nella funzione: `_template.output('directory/nome_del_template')`

Infine, basta effettuare la chiamata al servizio nel browser e apparirà qualcosa di simile a quanto segue:

![template2.png](/docs/assets/templates2.png)

> Nota che, a seconda del tuo browser, i risultati precedentemente mostrati potrebbero differire.

Se hai qualche domanda, non esitare a contattarci tramite i mezzi presentati in fondo alla pagina.

Buon sviluppo!