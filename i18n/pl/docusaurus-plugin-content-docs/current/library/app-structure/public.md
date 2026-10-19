---
id: public
title: Publiczny
sidebar_label: Publiczny
---

Pliki publiczne z bezpośrednim adresem URL.

## Katalog publiczny

Katalog `📂 public` gromadzi zawartość interfejsu użytkownika (UI) po stronie klienta po kompilacji, a także inne pliki publiczne, takie jak loga i ikona.

Może zawierać dowolny plik, który musi być publicznie dostępny.

## Struktura katalogu

Po wejściu do katalogu `📂 public` domyślnie znajdziesz następującą strukturę:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## Obrazy

Katalog `📂 images` początkowo zawiera loga aplikacji oraz ikonę.

W tym katalogu możesz umieścić wszystkie publiczne obrazy swojej aplikacji.

### icon.png

Ikona aplikacji, wyświetlana na karcie przeglądarki (favicon).

### logo.png

To obraz logo wyświetlany na stronie logowania do backoffice'u oraz na stronach błędów.

### logo-main.png

To obraz logo wyświetlany w nagłówku (_header_) po zalogowaniu się i wejściu do backoffice'u.

## Skrypty

W katalogu `📂 scripts` znajduje się końcowy kod JavaScript wygenerowany podczas kompilacji UI; to tutaj można umieszczać inne publiczne pliki JavaScript.

### ui.js

Plik `ui.js` jest skompilowanym końcowym kodem UI.

Zazwyczaj UI jest tworzone w React i LESS, a do kompilacji końcowego bundla JavaScript, czyli pliku `ui.js`, używany jest [Vite](https://vite.dev/).

Instrukcje kompilacji znajdują się w `ui/vite.config.js`; ten plik zawiera szczegóły dotyczące przetwarzania i generowania `ui.js`.

### ui.js.map

Plik `ui.js.map` to mapa źródeł (source maps) UI; jest ważny, ponieważ wskazuje oryginalny kod podczas debugowania błędów w konsoli (_console_) przeglądarki.

## Style
  
W katalogu `📂 styles` powinny znajdować się pliki CSS używane do stylizacji aplikacji.

### main.css

Plik `main.css` jest zazwyczaj używany do globalnego CSS lub do zmiany domyślnych stylów Netuno.

### ui.css

`ui.css` to CSS wygenerowany podczas kompilacji UI.

Zazwyczaj UI jest tworzone w React i LESS, a do kompilacji końcowego bundla CSS, czyli `ui.css`, używany jest [Vite](https://vite.dev/).

Instrukcje kompilacji znajdują się w `ui/vite.config.js`; ten plik zawiera szczegóły dotyczące generowania `ui.css`.