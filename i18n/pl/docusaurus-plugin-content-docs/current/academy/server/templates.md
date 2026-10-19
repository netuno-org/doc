---
id: templates
title: Szablony
sidebar_label: Szablony
---

## Zanim zaczniesz
Przed utworzeniem usług wywołujących szablony upewnij się, że potrafisz tworzyć **Usługi Web REST**; jeśli nie, odwiedź poniższy link:

* [Usługi Web REST](/docs/academy/server/services/rest)

Zaleca się również, aby przed rozpoczęciem tego samouczka upewnić się, że znasz podstawy _**JavaScript**_.

## Używanie szablonów w usługach

W tym samouczku omówimy tworzenie szablonów oraz czynności niezbędne do ich wywołania w usłudze.

Tworząc usługę w Netuno, masz możliwość korzystania z utworzonych przez siebie szablonów, czyli w zależności od wyniku możesz przekierować usługę do szablonu HTML z danymi.

W tym przykładzie będziemy mieć podstawowy szablon HTML i przekażemy dane z usługi do tego samego szablonu.

## Tworzenie szablonu

![szablony1.png](/docs/assets/templates1.png)

Po przejściu do powyższego katalogu utwórzmy plik `.html`; w tym przykładzie będzie on nazwany `szablon.html`.

Poniżej znajduje się zawartość tej strony:

```html
<!-- Wywołanie nagłówka Netuno -->
_{include=_|includes/head}

<!-- Definicja stylów -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Początek sekcji body HTML -->
<h1>Tytuł szablonu</h1>

<!-- Gdy potrzebujesz przekazać dane z usługi do szablonu, użyj _{&zmienna} -->
<p>Cześć, jestem <b>_{&data=imie}</b> i otrzymuję <b>_{&data=dane}</b> z usługi!</p>

<!-- Koniec sekcji body HTML -->

<!-- Wywołanie stopki Netuno -->
_{include=_|includes/foot}
```

Na koniec tworzy się usługę wywołującą szablon za pomocą następującej funkcji:

`_template.output('nazwa_szablonu', zmienne(opcjonalne));`

Poniżej znajduje się przykład usługi `usluga.js`:

```javascript
// Inicjuj obiekt 'dane', aby mógł odbierać dane
var dane = _val.init()
    
// Przypisz wartości do obiektu 'dane'
    .set("imie", "szablon")
    .set("dane", "dane")

// Ta funkcja umożliwia wywołanie szablonu
_template.output("szablon", dane);
```

> Jeśli szablon znajduje się w podkatalogu, wskaż go w funkcji: `_template.output('katalog/nazwa_szablonu')`

Na koniec wystarczy wywołać usługę w przeglądarce, a pojawi się coś podobnego do poniższego:

![szablony2.png](/docs/assets/templates2.png)

> Pamiętaj, że w zależności od przeglądarki wcześniej przedstawione wyniki mogą się różnić.

Jeśli masz jakiekolwiek pytania, nie wahaj się skontaktować z nami za pomocą środków podanych na końcu strony.

Powodzenia w tworzeniu!