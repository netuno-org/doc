---
sidebar_position: 7
id: life-cycle
title: Evenimente ale Ciclului de Viață al Interfeței
sidebar_label: Evenimente ale Ciclului de Viață
---

## Interfața de Utilizator (`ui`)

În interfața de gestionare a datelor Netuno este posibil să injectați cod personalizat pentru a realiza personalizări și manipulări personalizate.

Dezvoltarea se realizează prin programare în directorul `ui` din directorul rădăcină al aplicației.

### addPageLoad()

Pagina nu poate fi manipulată în siguranță până când aplicația nu este „pregătită”.

Metoda va fi apelată când pagina este încărcată.

```javascript
netuno.addPageLoad(() => {
   console.log('fac ceva');
});
```

### addContentLoad()

Când formularele sau rapoartele sunt încărcate, atunci interfața este modificată cu conținutul respectiv, fie că este un formular de date, o căutare sau la filtrarea datelor dintr-un raport.

Imediat ce un conținut este încărcat, metoda este apelată și primește containerul care va conține conținutul ce este afișat.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('fac lucruri când elementul există');
   }
});
```