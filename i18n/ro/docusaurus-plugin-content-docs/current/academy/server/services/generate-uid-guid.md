---
id: generate-uid-guid
title: Generare ID-uri Unice (UID/GUID)
sidebar_label: Generare ID-uri Unice (UID/GUID)
---

## Înainte de a începe

Înainte de a continua, asigurați-vă că știți să creați **Servicii Web REST**; dacă nu știți, accesați următorul link:

* [Servicii Web REST](/docs/academy/server/services/rest)

De asemenea, este recomandat ca, înainte de a începe acest tutorial, să vă asigurați că aveți noțiuni de bază în _**JavaScript**_.

## Ce este un UID

Un UID (_unique identifier_), după cum indică și numele, este un șir unic în întreaga aplicație. Este cunoscut și ca GUID (_global unique identifier_).

Pentru a exemplifica generarea de UID-uri, vom crea un serviciu.

## Generarea de UID-uri

Vom demonstra acum crearea unui UID aleatoriu; este destul de simplu, deoarece Netuno include deja o funcție creată special pentru acest scop:

```javascript
_out.println(
  _uid.generate()
)
```

> Rețineți că funcția `_out.println()` are doar rolul de a permite vizualizarea rezultatului pe ecran la apelarea serviciului în browser

Dacă aveți întrebări, nu ezitați să ne contactați prin mijloacele prezentate la sfârșitul paginii.

Spor la dezvoltare!