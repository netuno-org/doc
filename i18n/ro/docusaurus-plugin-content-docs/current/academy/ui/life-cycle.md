---
sidebar_position: 7
id: life-cycle
title: Evenimentele Ciclului de Viață al Interfeței
sidebar_label: Evenimente de Ciclu de Viață
---

## Interfața Utilizatorului (`ui`)

În interfața de gestionare a datelor din Netuno este posibil să injectați cod personalizat pentru a realiza customizări și manipulări personalizate.

Dezvoltarea se realizează în programare în directorul `ui` din directorul rădăcină al aplicației.

### addPageLoad()

Pagina nu poate fi manipulată în siguranță până când aplicația nu este „pregătită”.

Metoda va fi apelată când pagina este încărcată.

```javascript
netuno.addPageLoad(() => {
   console.log('fac ceva');
});
```

### addContentLoad()

Când formularele sau rapoartele sunt încărcate, interfața este modificată cu conținutul respectiv, fie că este un formular de date, o căutare sau la filtrarea datelor dintr-un raport.

Imediat ce un conținut este încărcat, metoda este apelată și transmite containerul care va conține conținutul ce este afișat.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('fac lucruri când elementul există');
   }
});
```