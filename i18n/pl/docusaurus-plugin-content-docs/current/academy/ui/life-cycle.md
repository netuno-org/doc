---
sidebar_position: 7
id: life-cycle
title: Zdarzenia cyklu życia interfejsu
sidebar_label: Zdarzenia cyklu życia
---

## Interfejs użytkownika (`ui`)

W interfejsie zarządzania danymi Netuno możliwe jest wstrzykiwanie kodu na miarę w celu tworzenia niestandardowych dostosowań i manipulacji.

Programowanie odbywa się w kodzie wewnątrz folderu `ui` w folderze głównym aplikacji.

### addPageLoad()

Stroną nie można bezpiecznie manipulować, dopóki aplikacja nie będzie „gotowa”.

Metoda zostanie wywołana, gdy strona zostanie załadowana.

```javascript
netuno.addPageLoad(() => {
   console.log('robię coś');
});
```

### addContentLoad()

Gdy ładowane są formularze lub raporty, interfejs zmienia się wraz z odpowiednią zawartością — czy to formularz danych, wyszukiwanie, czy filtrowanie danych jakiegoś raportu.

Gdy tylko jakaś zawartość zostanie załadowana, metoda jest wywoływana i przekazuje kontener, który będzie zawierał prezentowaną zawartość.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('robię rzeczy, gdy element istnieje');
   }
});
```