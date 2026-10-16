---
id: sending-emails
title: Trimiterea de Email-uri
sidebar_label: Trimiterea de Email-uri
---
## Înainte de a începe

Înainte de a continua, asigurați-vă că aveți cunoștințe de bază în _**JavaScript**_ și că aveți deja cunoștințele de bază despre Netuno cu tutorialul pas cu pas disponibil în [Academia](/docs/academy/overview).

## Demonstrația trimiterii de email-uri

Cu Netuno este foarte simplu să trimiteți email-uri, fie cu atașamente sau imagini încorporate în conținut (util în cazul semnăturilor).

Aplicația care vine cu Netuno numită **demo** (aplicație de demonstrație) conține destule exemple de posibile implementări de cod în diferite limbaje, inclusiv demonstrația de trimitere de email-uri prin serviciul `mail-send` care se află în:

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

## Configurare
Primul pas va fi configurarea contului SMTP pe care Netuno îl va folosi pentru trimiterea de email-uri.

Pentru a face acest lucru, navigați în aplicația pe care o dezvoltați până la fișierul de configurare a mediului. În acest exemplu, vom folosi fișierul de mediu de dezvoltare localizat în:

* `config/_development.json`

Verificați dacă nu există deja configurări pentru SMTP; dacă nu există încă, atunci la sfârșitul fișierului de configurare (în format JSON) adăugați parametrii de configurare SMTP:

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

Dacă configurați pentru Gmail, înlocuiți doar asteriscurile cu credențialele dvs. și activați conexiunea SMTP în setările contului Gmail. În caz contrar, înlocuiți toți parametrii cu cei ai contului dvs. SMTP.

După salvarea modificărilor, este suficient să reporniți Netuno pentru a prelua modificările de configurare. Acestea sunt configurările implicite pentru trimiterea de email-uri, după cum indică numele `default`.

```json
...
    "default": {
        ...
    }
...
```

Puteți adăuga mai multe conturi SMTP, dar doar unul poate fi definit ca implicit.

Pentru a adăuga mai multe conturi SMTP, este suficient să repetați blocul de configurare SMTP implicit și să înlocuiți numele `default` cu un alt nume la alegerea dvs., de exemplu:

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

O configurare similară exemplului de mai sus va permite utilizarea contului `default` atunci când este apelat în cod după cum urmează:

```javascript
const smtp = _smtp.init()
```

Și pentru a utiliza configurarea `test`, este suficient să adăugați numele configurării ca parametru la funcția `_smtp.init()` după cum urmează:

```javascript
const smtp = _smtp.init("test")
```

> Dacă nu adăugați un nume de configurare ca parametru, va fi utilizat întotdeauna contul default.

## Cod detaliat
Să analizăm acum cu atenție codul de exemplu pe care Netuno îl pune la dispoziție. În acest caz este în JavaScript și este structurat după cum urmează:

Inițializarea SMTP:

```javascript
const smtp = _smtp.init()
```

> Rețineți că puteți iniția cu altă configurare, de exemplu: `_smtp.init("test")`

Adăugând `.to` la variabila smtp se definește adresa destinatarului email-ului; în cazul mai multor destinatari, este suficient să separați prin ‘;‘ sau ‘,‘:

```javascript
smtp.to = '*****@gmail.com'
```

Adăugând `.from` se definește adresa expeditorului email-ului:

```javascript
smtp.from = '*****@gmail.com'
```

Adăugând `.cc` se definește adresa destinatarilor în copie a email-ului; în cazul mai multor destinatari în copie, este suficient să separați prin ‘;‘ sau ‘,‘:

```javascript
smtp.cc = '*****@gmail.com'
```

Același lucru se aplică pentru `.bcc`, unde se definesc destinatarii în copie, dar în mod ascuns:

```javascript
smtp.bcc = '*****@gmail.com'
```

Adăugând `.subject` se definește subiectul email-ului:

```javascript
smtp.subject = 'Test Netuno'
```

Adăugând `.text` se definește conținutul în text simplu:

```javascript
smtp.text = 'Ai primit acest email?'
```

Adăugând `.html` se definește conținutul email-ului în HTML:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Ai primit acest email?</p>
</div>`
```

Pentru a adăuga o imagine ca atașament, se adaugă (ca în exemplul de mai sus), în HTML se definește la imagini (`img`) în atributul `src` prefixul `cid:` (**C**ontent **ID**) și imediat după `cid` care este definit la adăugarea atașamentelor cu funcția `attachment` (ca în exemplul de mai jos).

Pentru a adăuga imaginea atașată la email, se adaugă `.attachment` la variabila smtp după cum urmează:

```javascript
smtp.attachment(
    "logo.png", // Fișier
    "image/png", // Formatul fișierului
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Locația fișierului
    "logo" // Numele variabilei definite în "cid:logo"
)   
```

> Rețineți că `cid` (**C**ontent **ID**) este necesar doar pentru a încorpora imagini care sunt atașate în conținutul HTML al email-ului.

Pentru a adăuga un atașament fără a fi încorporat în HTML (de exemplu documente), procedați după cum urmează:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

În final, pentru a trimite email-ul, este suficient să inserați următorul cod:

```javascript
smtp.send()
```

În final, dacă totul este configurat corect, veți primi un email similar cu următorul:

![trimitere-email-uri1.png](/docs/assets/envio-emails1.png)

> Rețineți că, în funcție de clientul dvs. de email, poate arăta diferit față de imaginea de mai sus.

## Exemplu complet cu șablon

Inserarea conținutului HTML în mijlocul codului nu este foarte elegantă, așa cum s-a exemplificat mai sus:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Ai primit acest email?</p>
</div>`
```

Pentru a evita acest lucru și a menține codul mai curat și mai elegant, conținutul HTML trebuie importat ca un șablon, după cum urmează:

`smtp.html = _template.getOutput('email/contact', data)`

În acest exemplu, configurarea SMTP în configurarea aplicației ar fi astfel:

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "SERVERUL.MEU.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Website Contact - ",
            "from": "noreply@DOMENIUL.MEU.com",
            "to": "info@DOMENIUL.MEU.com",
            "username": "noreply@DOMENIUL.MEU.com",
            "password": "S3gr3d0"
        }
    },
...
```

Observați mai jos cum poate fi utilizat în acest exemplu de cod de serviciu complet, care poate fi pus în fișierul `server/services/contact.js`:

```
const nume = _req.getString("nume")
const email = _req.getString("email")
const subiect = _req.getString("subiect")
const mesaj = _req.getString("mesaj")

const smtp = _smtp.init("contact")

smtp.subject = subiect

smtp.text = "Conținut în HTML."

const data = _val.map()
      .set("nume", nume)
      .set("email", email)
      .set("subiect", subiect)
      .set("mesaj", mesaj)

smtp.html = _template.getOutput('email/contact', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("rezultat", true)
)
```

> În calea relativă a șablonului nu este necesar să puneți extensia `.html`, și rețineți că opțional este posibil să transmiteți informații în șablon.

Conținutul HTML al șablonului trebuie definit într-un fișier separat care trebuie să fie în folderul `server/templates/`; această cale este găsită pornind de la folderul rădăcină al aplicației.

Urmând exemplul demonstrat mai sus, atunci fișierul șablon de exemplu va fi aici:

- `server/templates/email/contact.html`

Conținutul de exemplu al acestui fișier ar putea fi:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contact Website
    </h1>
    <p>Nume: _{&data=nume}</p>
    <p>Email: _{data=email}</p>
    <p>Titlu: _{&data=subiect}</p>
    <p>_{&data=mesaj}</p>
  </div>
</div>
```

Când sunt injectate date în șablon cu `_{data=...}`, `&` este adăugat atunci când trebuie realizată codificarea caracterelor speciale în HTML, devenind `_{&data=...}`, iar după `=` în locul lui `...` este cheia conținutului care va fi injectat.

## Configurări avansate

Configurările de mediu `config/_*.json` permit multe alte configurări avansate.

Proprietățile `smtp` utilizate în cod, cum ar fi `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` și `.html`, pot fi definite în configurare pentru a fi predefinite implicit după cum urmează:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Titlu implicit...",
        "text": "Conținut implicit... ok!",
        "html": "<p>Conținut implicit... <b>ok!</b></p>"
        ...
    }
...
```

> Predefinirea .from este destul de utilă deoarece, de obicei, trimiterea de email-uri se face întotdeauna de la aceeași adresă.

De asemenea, sunt posibile alte configurări. Urmează o listă completă a acestora:

| PARAMETRU    | TIP   | IMPLICIT      | DESCRIERE    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Activează și dezactivează trimiterea de email-uri. |
| `debug` | boolean | false | Activează modul debug, care va afișa mesaje ce detaliază comunicarea cu serverul. |
| `protocol` | string |  | Definește tipul de protocol, smtp sau smtps. |
| `host` | string |  | Numele sau IP-ul serverului SMTP. |
| `port` | integer | 465 | Numărul portului serverului SMTP. |
| `ssl` | boolean | true | Activează SSL. |
| `tls` | boolean | false | Activează TLS. |
| `socketFactoryFallback` | boolean | true | Dacă generarea Socket eșuează, atunci va fi utilizat socketul nativ java.net.Socket. |
| `socketFactoryClass` | string |  | Definește o clasă care implementează interfața javax.net.SocketFactory ce va fi utilizată pentru a genera socketurile pentru SMTP. |
| `socketFactoryPort` | integer |  | Definește portul care trebuie utilizat de socketuri. |
| `quitWait` | boolean | false | Dacă este activat, așteaptă răspunsul serverului după comanda QUIT; dacă este dezactivat, deconectează imediat conexiunea cu serverul după comanda QUIT. |
| `authMechanisms` | string |  | Listă de mecanisme de autentificare; implicit este “LOGIN PLAIN DIGEST-MD5 NTLM”, astfel suportă toate mecanismele. |
| `authNTLMDomain` | string |  | Domeniul de autentificare NTLM. |
| `username` | string |  | Definește utilizatorul în autentificarea cu serverul. |
| `html` | string |  | Conținutul HTML al email-ului. |
| `password` | string |  | Definește parola în autentificarea cu serverul. |
| `from` | string |  | Adresa de email a expeditorului. |
| `to` | string |  | Adresa de email a destinatarului; se pot adăuga mai multe email-uri separate prin “;” sau “,”. |
| `cc` | strinf |  | Adresa de email a destinatarilor în copie; se pot adăuga mai multe email-uri separate prin “;” sau “,”. |
| `bcc` | string |  | Adresa de email a destinatarilor în copie ascunsă; se pot adăuga mai multe email-uri separate prin “;” sau “,”. |
| `subjectPrefix` |  | string | Definește un prefix pentru titlul email-ului, astfel încât toate email-urile trimise să aibă prefixul. |
| `subject` | string |  | Subiectul email-ului. |
| `text` | string |  | Conținutul în text simplu al email-ului. |

Dacă aveți întrebări, nu ezitați să ne contactați prin mijloacele prezentate la sfârșitul paginii.

Dezvoltare plăcută!