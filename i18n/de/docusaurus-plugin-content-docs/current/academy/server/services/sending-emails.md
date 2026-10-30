---
id: sending-emails
title: E-Mail-Versand
sidebar_label: E-Mail-Versand
---
## Bevor Sie beginnen

Bevor Sie fortfahren, stellen Sie sicher, dass Sie grundlegende Kenntnisse in _**JavaScript**_ haben und bereits über die Grundlagen von Netuno verfügen, mit der Schritt-für-Schritt-Anleitung in der [Akademie](/docs/academy/overview).

## Demonstration des E-Mail-Versands

Mit Netuno ist das Senden von E-Mails sehr einfach, sei es mit Anhängen oder in den Inhalt selbst eingebetteten Bildern (nützlich bei Signaturen).

Die mit Netuno gelieferte Anwendung namens **demo** (Demonstrationsanwendung) enthält zahlreiche Beispiele der möglichen Codeimplementierungen in verschiedenen Sprachen, darunter die Demonstration des E-Mail-Versands über den Dienst `mail-send`, der sich hier befindet:

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

## Konfiguration
Der erste Schritt besteht darin, das SMTP-Konto zu konfigurieren, das Netuno für den E-Mail-Versand verwendet.

Navigieren Sie dazu innerhalb der Anwendung, die Sie entwickeln, zur Umgebungskonfigurationsdatei. In diesem Beispiel verwenden wir die Entwicklungsumgebungsdatei unter:

* `config/_development.json`

Prüfen Sie, ob bereits SMTP-Konfigurationen vorhanden sind; falls nicht, fügen Sie am Ende der Konfigurationsdatei (im JSON-Format) die SMTP-Konfigurationsparameter hinzu:

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

Wenn Sie für Gmail konfigurieren, ersetzen Sie nur die Sternchen durch Ihre Zugangsdaten und aktivieren Sie die SMTP-Verbindung in den Einstellungen Ihres Gmail-Kontos. Andernfalls ersetzen Sie alle Parameter durch die Ihres SMTP-Kontos.

Nach dem Speichern der Änderungen müssen Sie Netuno nur neu starten, damit die Konfigurationsänderungen übernommen werden. Dies sind die Standardeinstellungen für den E-Mail-Versand, wie der Name `default` angibt.

```json
...
    "default": {
        ...
    }
...
```

Sie können weitere SMTP-Konten hinzufügen, aber nur eines kann als Standard festgelegt werden.

Um weitere SMTP-Konten hinzuzufügen, wiederholen Sie einfach den Konfigurationsblock des Standard-SMTP und ersetzen den Namen `default` durch einen anderen Namen Ihrer Wahl, zum Beispiel:

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

Eine Konfiguration ähnlich dem obigen Beispiel ermöglicht die Verwendung des Kontos `default`, wenn es im Code wie folgt aufgerufen wird:

```javascript
const smtp = _smtp.init()
```

Um die Konfiguration `test` zu verwenden, fügen Sie einfach den Konfigurationsnamen als Parameter zur Funktion `_smtp.init()` hinzu, und zwar wie folgt:

```javascript
const smtp = _smtp.init("test")
```

> Wenn Sie keinen Konfigurationsnamen als Parameter angeben, wird immer das Standardkonto verwendet.

## Detaillierter Code
Betrachten wir nun aufmerksam den Beispielcode, den Netuno bereitstellt. In diesem Fall ist er in JavaScript und wie folgt strukturiert:

Initialisierung des SMTP:

```javascript
const smtp = _smtp.init()
```

> Beachten Sie, dass Sie mit einer anderen Konfiguration starten können, zum Beispiel: `_smtp.init("test")`

Durch Hinzufügen von `.to` zur Variablen `smtp` wird die Adresse des E-Mail-Empfängers festgelegt; bei mehreren Empfängern trennen Sie diese einfach durch „;“ oder „,“:

```javascript
smtp.to = '*****@gmail.com'
```

Durch Hinzufügen von `.from` wird die Adresse des E-Mail-Absenders festgelegt:

```javascript
smtp.from = '*****@gmail.com'
```

Durch Hinzufügen von `.cc` werden die Adressen der Empfänger einer Kopie der E-Mail festgelegt; bei mehreren Empfängern in Kopie trennen Sie diese einfach durch „;“ oder „,“:

```javascript
smtp.cc = '*****@gmail.com'
```

Dasselbe gilt für `.bcc`, womit die Empfänger einer Blindkopie festgelegt werden:

```javascript
smtp.bcc = '*****@gmail.com'
```

Durch Hinzufügen von `.subject` wird der Betreff der E-Mail festgelegt:

```javascript
smtp.subject = 'Netuno-Test'
```

Durch Hinzufügen von `.text` wird der Inhalt als reiner Text festgelegt:

```javascript
smtp.text = 'Haben Sie diese E-Mail erhalten?'
```

Durch Hinzufügen von `.html` wird der Inhalt der E-Mail in HTML festgelegt:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Haben Sie diese E-Mail erhalten?</p>
</div>`
```

Um ein Bild als Anhang hinzuzufügen, wird (wie oben beispielhaft gezeigt) im HTML bei den Bildern (`img`) im Attribut `src` das Präfix `cid:` (**C**ontent **ID**) und direkt danach die `cid` angegeben, die beim Hinzufügen von Anhängen mit der Funktion `attachment` definiert wird (wie unten beispielhaft gezeigt).

Um das angehängte Bild zur E-Mail hinzuzufügen, fügen Sie `.attachment` zur Variablen `smtp` hinzu, und zwar wie folgt:

```javascript
smtp.attachment(
    "logo.png", // Datei
    "image/png", // Dateiformat
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Dateispeicherort
    "logo" // Name der in "cid:logo" definierten Variable
)   
```

> Beachten Sie, dass die `cid` (**C**ontent **ID**) nur erforderlich ist, um Bilder einzubetten, die als Anhang im HTML-Inhalt der E-Mail vorliegen.

Um einen Anhang hinzuzufügen, ohne ihn in HTML einzubetten (etwa bei Dokumenten), gehen Sie wie folgt vor:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Um schließlich den E-Mail-Versand auszulösen, fügen Sie einfach den folgenden Code ein:

```javascript
smtp.send()
```

Wenn alles korrekt konfiguriert ist, erhalten Sie schließlich eine E-Mail ähnlich der folgenden:

![E-Mail-Versand 1](/docs/assets/envio-emails1.png)

> Beachten Sie, dass die Darstellung je nach Ihrem E-Mail-Client von der obigen Abbildung abweichen kann.

## Vollständiges Beispiel mit Template

HTML-Inhalt mitten im Code zu platzieren, ist nicht sehr elegant, wie oben beispielhaft gezeigt wurde:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Haben Sie diese E-Mail erhalten?</p>
</div>`
```

Um dies zu vermeiden und den Code sauberer und eleganter zu halten, sollte der HTML-Inhalt als Template importiert werden, und zwar wie folgt:

`smtp.html = _template.getOutput('email/kontakt', data)`

In diesem Beispiel sähe die SMTP-Konfiguration in der Anwendungskonfiguration so aus:

```
...
    "smtp": {
        "kontakt": {
            "enabled": true,
            "host": "MEIN.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Website Kontakt - ",
            "from": "noreply@MEINE.DOMAIN.com",
            "to": "info@MEINE.DOMAIN.com",
            "username": "noreply@MEINE.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
...
```

Beachten Sie unten, wie dies im folgenden vollständigen Service-Codebeispiel verwendet werden kann, das sich in der Datei `server/services/kontakt.js` befinden könnte:

```
const name = _req.getString("name")
const email = _req.getString("email")
const betreff = _req.getString("betreff")
const nachricht = _req.getString("nachricht")

const smtp = _smtp.init("kontakt")

smtp.subject = betreff

smtp.text = "Inhalt in HTML."

const data = _val.map()
      .set("name", name)
      .set("email", email)
      .set("betreff", betreff)
      .set("nachricht", nachricht)

smtp.html = _template.getOutput('email/kontakt', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("ergebnis", true)
)
```

> Beim relativen Pfad des Templates ist es nicht erforderlich, die Erweiterung `.html` anzugeben; beachten Sie, dass optional Informationen in das Template übergeben werden können.

Der HTML-Inhalt des Templates muss in einer separaten Datei definiert werden, die sich im Ordner `server/templates/` befinden muss; dieser Pfad wird ausgehend vom Stammordner der Anwendung gefunden.

Dem oben gezeigten Beispiel folgend befindet sich die Beispiel-Templatedatei dann hier:

- `server/templates/email/kontakt.html`

Der Beispielinhalt dieser Datei könnte wie folgt aussehen:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Website-Kontakt
    </h1>
    <p>Name: _{&data=name}</p>
    <p>E-Mail: _{data=email}</p>
    <p>Titel: _{&data=betreff}</p>
    <p>_{&data=nachricht}</p>
  </div>
</div>

```

Wenn Daten mit `_{data=...}` in das Template injiziert werden, wird das `&` hinzugefügt, wenn eine Kodierung der Sonderzeichen in HTML erfolgen soll, sodass `_{&data=...}` entsteht; nach dem `=` steht anstelle der `...` der Schlüssel des Inhalts, der injiziert wird.

## Erweiterte Konfigurationen

Die Umgebungskonfigurationen `config/_*.json` ermöglichen viele weitere erweiterte Einstellungen.

Die im Code verwendeten `smtp`-Eigenschaften wie `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` und `.html` können in der Konfiguration festgelegt werden, um standardmäßig vordefiniert zu sein, und zwar wie folgt:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Standardtitel...",
        "text": "Standardinhalt... ok!",
        "html": "<p>Standardinhalt... <b>ok!</b></p>"
        ...
    }
...
```

> Das Vorabfestlegen von `.from` ist sehr nützlich, da der E-Mail-Versand normalerweise immer von derselben Adresse aus erfolgt.

Weitere Konfigurationen sind ebenfalls möglich. Es folgt eine vollständige Liste dieser:

| PARAMETER    | TYP   | STANDARD      | BESCHREIBUNG    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Aktiviert und deaktiviert den E-Mail-Versand. |
| `debug` | boolean | false | Aktiviert den Debug-Modus, wodurch Meldungen angezeigt werden, die die Kommunikation mit dem Server detaillieren. |
| `protocol` | string |  | Definiert den Protokolltyp, smtp oder smtps. |
| `host` | string |  | Name oder IP des SMTP-Servers. |
| `port` | integer | 465 | Portnummer des SMTP-Servers. |
| `ssl` | boolean | true | Aktiviert SSL. |
| `tls` | boolean | false | Aktiviert TLS. |
| `socketFactoryFallback` | boolean | true | Wenn die Socket-Erzeugung fehlschlägt, wird der native java.net.Socket verwendet. |
| `socketFactoryClass` | string |  | Definiert eine Klasse, die das Interface javax.net.SocketFactory implementiert, das zur Erzeugung der Sockets für SMTP verwendet wird. |
| `socketFactoryPort` | integer |  | Definiert den Port, der von den Sockets verwendet werden soll. |
| `quitWait` | boolean | false | Wenn aktiviert, wird nach dem QUIT-Befehl auf die Antwort des Servers gewartet; wenn deaktiviert, wird die Verbindung nach dem QUIT-Befehl sofort getrennt. |
| `authMechanisms` | string |  | Liste der Authentifizierungsmechanismen, standardmäßig „LOGIN PLAIN DIGEST-MD5 NTLM“, sodass alle Mechanismen unterstützt werden. |
| `authNTLMDomain` | string |  | NTLM-Authentifizierungsdomain. |
| `username` | string |  | Definiert den Benutzer für die Authentifizierung am Server. |
| `html` | string |  | HTML-Inhalt der E-Mail. |
| `password` | string |  | Definiert das Passwort für die Authentifizierung am Server. |
| `from` | string |  | E-Mail-Adresse des Absenders. |
| `to` | string |  | E-Mail-Adresse des Empfängers; weitere E-Mails können durch „;“ oder „,“ getrennt hinzugefügt werden. |
| `cc` | string |  | E-Mail-Adresse des Empfängers einer Kopie; weitere E-Mails können durch „;“ oder „,“ getrennt hinzugefügt werden. |
| `bcc` | string |  | E-Mail-Adresse des Empfängers einer Blindkopie; weitere E-Mails können durch „;“ oder „,“ getrennt hinzugefügt werden. |
| `subjectPrefix` | string |  | Definiert ein Präfix für den Betreff der E-Mail, sodass alle gesendeten E-Mails das Präfix haben. |
| `subject` | string |  | Betreff der E-Mail. |
| `text` | string |  | Inhalt der E-Mail als reiner Text. |

Falls Sie Fragen haben, zögern Sie nicht, uns über die am Ende der Seite angegebenen Kontaktmöglichkeiten zu kontaktieren.

Viel Erfolg bei der Entwicklung!