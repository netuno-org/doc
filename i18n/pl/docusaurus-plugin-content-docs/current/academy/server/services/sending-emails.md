---
id: sending-emails
title: Wysyłanie e-maili
sidebar_label: Wysyłanie e-maili
---
## Zanim zaczniesz

Zanim przejdziesz dalej, upewnij się, że masz podstawy _**JavaScript**_ i znasz podstawy Netuno z samouczka krok po kroku dostępnego w [Akademii](/docs/academy/overview).

## Demonstracja wysyłania e-maili

W Netuno wysyłanie e-maili jest bardzo proste, zarówno z załącznikami, jak i obrazami osadzonymi w samej treści (przydatne w przypadku podpisów).

Aplikacja dostarczana z Netuno o nazwie **demo** (aplikacja demonstracyjna) zawiera wiele przykładów możliwych implementacji kodu w różnych językach, w tym demonstrację wysyłania e-maili przez usługę `mail-send`, która znajduje się w:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Konfiguracja
Pierwszym krokiem będzie skonfigurowanie konta SMTP, którego Netuno będzie używać do wysyłania e-maili.

Aby to zrobić, w aplikacji, którą tworzysz, przejdź do pliku konfiguracji środowiska. W tym przykładzie użyjemy pliku środowiska deweloperskiego znajdującego się w:

* `config/_development.json`

Sprawdź, czy nie ma już konfiguracji SMTP; jeśli jeszcze nie istnieje, dodaj na końcu pliku konfiguracyjnego (w formacie JSON) parametry konfiguracji SMTP:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Jeśli konfigurujesz Gmaila, zastąp tylko gwiazdki swoimi danymi logowania i włącz połączenie SMTP w ustawieniach swojego konta Gmail. W przeciwnym razie zastąp wszystkie parametry parametrami swojego konta SMTP.

Po zapisaniu zmian wystarczy ponownie uruchomić Netuno, aby przyjął zmiany konfiguracji. Są to domyślne ustawienia wysyłania e-maili, jak wskazuje nazwa `default`.

```json
...
    "default": {
        ...
    }
...
```

Możesz dodać więcej kont SMTP, ale tylko jedno może być ustawione jako domyślne.

Aby dodać więcej kont SMTP, wystarczy powtórzyć blok konfiguracji domyślnego SMTP i zmienić nazwę `default` na inną wybraną przez siebie nazwę, na przykład:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Konfiguracja podobna do powyższego przykładu pozwoli użyć konta `default`, gdy zostanie wywołane w kodzie w następujący sposób:

```javascript
const smtp = _smtp.init()
```

A aby użyć konfiguracji `test`, wystarczy dodać nazwę konfiguracji jako parametr funkcji `_smtp.init()` w następujący sposób:

```javascript
const smtp = _smtp.init("test")
```

> Jeśli nie dodasz nazwy konfiguracji jako parametru, zawsze będzie używane konto domyślne.

## Szczegółowy kod
Przyjrzyjmy się teraz uważnie przykładowemu kodowi udostępnianemu przez Netuno. W tym przypadku jest to JavaScript i ma następującą strukturę:

Inicjalizacja SMTP:

```javascript
const smtp = _smtp.init()
```

> Pamiętaj, że możesz zainicjować z inną konfiguracją, na przykład: `_smtp.init("test")`

Dodając `.to` do zmiennej smtp, określasz adres odbiorcy e-maila; w przypadku wielu odbiorców wystarczy oddzielić ich znakiem „;” lub „,”:

```javascript
smtp.to = '*****@gmail.com'
```

Dodając `.from`, określasz adres nadawcy e-maila:

```javascript
smtp.from = '*****@gmail.com'
```

Dodając `.cc`, określasz adres odbiorców kopii e-maila; w przypadku wielu odbiorców kopii wystarczy oddzielić ich znakiem „;” lub „,”:

```javascript
smtp.cc = '*****@gmail.com'
```

To samo dotyczy `.bcc`, gdzie określa się odbiorców ukrytej kopii:

```javascript
smtp.bcc = '*****@gmail.com'
```

Dodając `.subject`, określasz temat e-maila:

```javascript
smtp.subject = 'Test Netuno'
```

Dodając `.text`, określasz treść w postaci zwykłego tekstu:

```javascript
smtp.text = 'Czy otrzymałeś ten e-mail?'
```

Dodając `.html`, określasz treść e-maila w HTML:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Czy otrzymałeś ten e-mail?</p>
</div>`
```

Aby dodać obraz jako załącznik, postępuje się tak (jak pokazano powyżej): w HTML w obrazach (`img`) w atrybucie `src` ustawia się `cid:` (**C**ontent **ID**) jako prefiks, a zaraz po nim `cid`, który jest definiowany podczas dodawania załączników funkcją `attachment` (jak pokazano poniżej).

Aby dodać obraz załączony do e-maila, dodajesz `.attachment` do zmiennej smtp w następujący sposób:

```javascript
smtp.attachment(
    "logo.png", // Plik
    "image/png", // Format pliku
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Lokalizacja pliku
    "logo" // Nazwa zmiennej zdefiniowanej w "cid:logo"
)   
```

> Zauważ, że `cid` (**C**ontent **ID**) jest potrzebny tylko do osadzenia obrazów będących załącznikami w treści HTML e-maila.

Aby dodać załącznik bez osadzania go w HTML (np. dokumenty), postępuje się w następujący sposób:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Na koniec, aby wysłać e-mail, wystarczy wstawić następujący kod:

```javascript
smtp.send()
```

Na koniec, jeśli wszystko zostało poprawnie skonfigurowane, otrzymasz e-mail podobny do poniższego:

![wysylka-emaili1.png](/docs/assets/envio-emails1.png)

> Zauważ, że w zależności od klienta poczty e-mail może to wyglądać inaczej niż na powyższym obrazie.

## Pełny przykład z szablonem

Umieszczanie treści HTML w środku kodu nie jest zbyt eleganckie, jak pokazano powyżej:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Czy otrzymałeś ten e-mail?</p>
</div>`
```

Aby tego uniknąć i zachować kod czystszy i bardziej elegancki, treść HTML należy importować jako szablon w następujący sposób:

`smtp.html = _template.getOutput('email/kontakt', dane)`

W tym przykładzie konfiguracja SMTP w konfiguracji aplikacji wyglądałaby tak:

```
...
    "smtp": {
        "kontakt": {
            "enabled": true,
            "host": "MOJ.SERWER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Kontakt ze strony - ",
            "from": "noreply@MOJ.DOMEN.com",
            "to": "info@MOJ.DOMEN.com",
            "username": "noreply@MOJ.DOMEN.com",
            "password": "S3gr3d0"
        }
    },
...
```

Zobacz poniżej, jak można to wykorzystać w tym pełnym przykładzie kodu usługi, który może znaleźć się w pliku `server/services/kontakt.js`:

```
const imie = _req.getString("imie")
const email = _req.getString("email")
const temat = _req.getString("temat")
const wiadomosc = _req.getString("wiadomosc")

const smtp = _smtp.init("kontakt")

smtp.subject = temat

smtp.text = "Treść w HTML."

const dane = _val.map()
      .set("imie", imie)
      .set("email", email)
      .set("temat", temat)
      .set("wiadomosc", wiadomosc)

smtp.html = _template.getOutput('email/kontakt', dane)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("wynik", true)
)
```

> W ścieżce względnej szablonu nie trzeba podawać rozszerzenia `.html`; zauważ, że opcjonalnie można przekazać informacje do szablonu.

Treść HTML szablonu należy zdefiniować w osobnym pliku, który powinien znajdować się w folderze `server/templates/`; ścieżka ta jest liczona od folderu głównego aplikacji.

Zgodnie z powyższym przykładem przykładowy plik szablonu będzie tutaj:

- `server/templates/email/kontakt.html`

Przykładowa treść tego pliku może wyglądać tak:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Kontakt ze strony internetowej
    </h1>
    <p>Imię: _{&data=imie}</p>
    <p>E-mail: _{data=email}</p>
    <p>Tytuł: _{&data=temat}</p>
    <p>_{&data=wiadomosc}</p>
  </div>
</div>

```

Gdy dane są wstrzykiwane do szablonu za pomocą `_{data=...}`, znak `&` jest dodawany wtedy, gdy należy wykonać kodowanie znaków specjalnych w HTML, co daje `_{&data=...}`, a po znaku `=` w miejscu `...` znajduje się klucz treści, która zostanie wstrzyknięta.

## Konfiguracje zaawansowane

Konfiguracje środowiska `config/_*.json` umożliwiają wiele dodatkowych ustawień zaawansowanych.

Właściwości `smtp` używane w kodzie, takie jak `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` i `.html`, można zdefiniować w konfiguracji, aby były domyślnie ustawione w następujący sposób:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Tytuł domyślny...",
        "text": "Treść domyślna... ok!",
        "html": "<p>Treść domyślna... <b>ok!</b></p>"
        ...
    }
...
```

> Wstępne zdefiniowanie `.from` jest dość przydatne, ponieważ zwykle e-maile są zawsze wysyłane z tego samego adresu.

Możliwe są również inne konfiguracje. Poniżej znajduje się ich pełna lista:

| PARAMETR    | TYP   | DOMYŚLNIE      | OPIS    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Włącza i wyłącza wysyłanie e-maili. |
| `debug` | boolean | false | Włącza tryb debug, który wyświetla komunikaty szczegółowo opisujące komunikację z serwerem. |
| `protocol` | string |  | Określa typ protokołu: smtp lub smtps. |
| `host` | string |  | Nazwa lub adres IP serwera SMTP. |
| `port` | integer | 465 | Numer portu serwera SMTP. |
| `ssl` | boolean | true | Włącza SSL. |
| `tls` | boolean | false | Włącza TLS |
| `socketFactoryFallback` | boolean | true | Jeśli generowanie Socketu się nie powiedzie, zostanie użyty natywny socket java.net.Socket. |
| `socketFactoryClass` | string |  | Określa klasę implementującą interfejs javax.net.SocketFactory, która będzie używana do generowania socketów dla SMTP. |
| `socketFactoryPort` | integer |  | Określa port, który mają używać sockety. |
| `quitWait` | boolean | false | Jeśli włączone, czeka na odpowiedź serwera po poleceniu QUIT; jeśli wyłączone, od razu rozłącza połączenie z serwerem po poleceniu QUIT. |
| `authMechanisms` | string |  | Lista mechanizmów uwierzytelniania; domyślnie jest to „LOGIN PLAIN DIGEST-MD5 NTLM”, co obsługuje wszystkie mechanizmy. |
| `authNTLMDomain` | string |  | Domena uwierzytelniania NTLM. |
| `username` | string |  | Określa użytkownika do uwierzytelniania na serwerze. |
| `html` | string |  | Treść e-maila w HTML. |
| `password` | string |  | Określa hasło do uwierzytelniania na serwerze. |
| `from` | string |  | Adres e-mail nadawcy. |
| `to` | string |  | Adres e-mail odbiorcy; można dodać więcej adresów oddzielonych „;” lub „,”. |
| `cc` | strinf |  | Adres e-mail odbiorcy kopii; można dodać więcej adresów oddzielonych „;” lub „,”. |
| `bcc` | string |  | Adres e-mail odbiorcy ukrytej kopii; można dodać więcej adresów oddzielonych „;” lub „,”. |
| `subjectPrefix` |  | string | Definiuje prefiks tematu e-maila, dzięki czemu wszystkie wysyłane e-maile mają ten prefiks. |
| `subject` | string |  | Temat e-maila. |
| `text` | string |  | Treść e-maila w postaci zwykłego tekstu. |

W razie jakichkolwiek pytań nie wahaj się skontaktować z nami za pomocą środków podanych na końcu strony.

Dobrego tworzenia!