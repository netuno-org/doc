---
id: templates
title: Șabloane
sidebar_label: Șabloane
---

## Înainte de a începe
Înainte de a crea servicii care apelează șabloane, asigurați-vă că știți să creați **Servicii Web REST**; dacă nu, vizitați următorul link:

* [Servicii Web REST](/docs/academy/server/services/rest)

De asemenea, este recomandat ca, înainte de a începe acest tutorial, să vă asigurați că aveți noțiuni de bază de _**JavaScript**_.

## Utilizarea șabloanelor în servicii

În acest tutorial vom aborda crearea de șabloane și acțiunile necesare pentru a le putea apela în serviciul dumneavoastră.

La crearea unui serviciu în Netuno aveți opțiunea de a accesa șabloane create de dumneavoastră, adică, în funcție de rezultat, puteți redirecționa serviciul către un șablon HTML cu date.

În acest exemplu vom avea un șablon HTML de bază și vom transmite date din serviciu către același șablon.

## Crearea unui șablon

![sabloane1.png](/docs/assets/templates1.png)

După ce vă aflați în directorul de mai sus, vom crea un fișier `.html`, în acest exemplu numit `sablon.html`.

Urmează conținutul acestei pagini:

```html
<!-- Apel către antetul Netuno -->
_{include=_|includes/head}

<!-- Definirea stilurilor -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Începutul corpului HTML -->
<h1>Titlu șablonului</h1>

<!-- Când trebuie să transmiteți date de la un serviciu către un șablon, utilizați _{&variabila} -->
<p>Salut, sunt un <b>_{&data=nume}</b> și primesc <b>_{&data=detalii}</b> de la un serviciu!</p>

<!-- Sfârșitul corpului HTML -->

<!-- Apel către subsolul Netuno -->
_{include=_|includes/foot}
```

În final, se creează serviciul cu apelul către șablon folosind următoarea funcție:

`_template.output('nume_sablon', variabile(opțional));`

Urmează exemplul serviciului ‘serviciu.js’:

```javascript
// Inițializarea obiectului 'date' pentru a putea primi date
var date = _val.init()
    
// Asocierea valorilor la obiectul 'date'
    .set("nume", "sablon")
    .set("detalii", "detalii")

// Această funcție permite efectuarea apelului către șablon
_template.output("sablon", date);
```

> Dacă aveți șablonul într-un subdirector, indicați în funcție: `_template.output('director/nume_sablon')`

În final, este suficient să apelați serviciul în browser și va apărea ceva similar cu următorul:

![sabloane2.png](/docs/assets/templates2.png)

> Rețineți că, în funcție de browser, rezultatele prezentate anterior pot diferi.

Dacă aveți întrebări, nu ezitați să ne contactați prin mijloacele prezentate la finalul paginii.

Dezvoltare plăcută!