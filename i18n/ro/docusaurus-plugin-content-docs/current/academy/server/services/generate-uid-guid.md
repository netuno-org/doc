---
id: generate-uid-guid
title: Generare ID-uri Unice (UID/GUID)
sidebar_label: Generare ID-uri Unice (UID/GUID)
---

## Înainte de a începe

Înainte de a continua, asigurați-vă că știți să creați **Servicii Web REST**; dacă nu, vizitați următorul link:

* [Servicii Web REST](/docs/academy/server/services/rest)

De asemenea, este recomandat ca, înainte de a începe acest tutorial, să vă asigurați că aveți noțiuni de bază în _**JavaScript**_.

## Ce este un UID

Un UID (_identificator unic_), după cum sugerează numele, este un șir unic în întreaga aplicație. Este cunoscut și sub numele de GUID (_identificator unic global_).

Pentru a exemplifica generarea de UID-uri, vom crea un serviciu.

## Generarea de UID-uri

Să demonstrăm acum crearea unui UID aleatoriu; este destul de simplu pentru că Netuno include deja o funcție creată special în acest scop:

```javascript
_out.println(
  _uid.generate()
)
```

> Rețineți că funcția `_out.println()` este doar pentru a permite vizualizarea rezultatului pe ecran la apelarea serviciului în browser

Dacă aveți întrebări, nu ezitați să ne contactați prin mijloacele prezentate la sfârșitul paginii.

Dezvoltare plăcută!