---
id: templates
title: Șabloane
sidebar_label: Șabloane
---

## Înainte de a începe
Înainte de a crea servicii care apelează șabloane, asigurați-vă că știți să creați **Servicii Web REST**; dacă nu, vizitați următorul link:

* [Servicii Web REST](/docs/academy/server/services/rest)

De asemenea, este recomandabil ca, înainte de a începe acest tutorial, să vă asigurați că aveți noțiuni de bază în _**JavaScript**_.

## Utilizarea șabloanelor în servicii

În acest tutorial vom aborda crearea de șabloane și acțiunile necesare pentru a le putea apela în serviciul dumneavoastră.

Când creați un serviciu în Netuno, aveți opțiunea de a accesa șabloane create de dumneavoastră; adică, în funcție de rezultat, puteți redirecționa serviciul către un șablon HTML cu date.

În acest exemplu vom avea un șablon de bază în HTML și vom transmite date din serviciu către același șablon.

## Crearea unui șablon

![templates1.png](/docs/assets/templates1.png)

După ce vă aflați în directorul de mai sus, vom crea un fișier `.html`; în acest exemplu va fi numit `sablon.html`.

Urmează conținutul acestei pagini:

```html
<!-- Apel la antetul Netuno -->
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

<!-- Începutul body-ului HTML -->
<h1>Titlul șablonului</h1>

<!-- Când aveți nevoie să transmiteți date de la un serviciu către un șablon, folosiți _{&variabilă} -->
<p>Salut, sunt un <b>_{&date=nume}</b> și primesc <b>_{&date=date}</b> de la un serviciu!</p>

<!-- Sfârșitul body-ului HTML -->

<!-- Apel la subsolul Netuno -->
_{include=_|includes/foot}
```

În final, se creează serviciul cu apelul la șablon folosind următoarea funcție:

`_template.output('nume_sablon', variabile(opțional));`

Urmează exemplul serviciului 'serviciu.js':

```javascript
// Inițializează obiectul 'date' pentru a putea primi date
var date = _val.init()
    
// Asociază valori obiectului 'date'
    .set("nume", "sablon")
    .set("date", "date")

// Această funcție permite apelarea șablonului
_template.output("sablon", date);
```

> Dacă aveți șablonul într-un subdirector, indicați în funcție: `_template.output('director/nume_sablon')`

În final, este suficient să apelați serviciul în browser și va apărea ceva similar cu următorul:

![templates2.png](/docs/assets/templates2.png)

> Rețineți că, în funcție de browserul dumneavoastră, rezultatele prezentate anterior pot diferi.

Dacă aveți întrebări, nu ezitați să ne contactați prin mijloacele prezentate la sfârșitul paginii.

Spor la dezvoltare!