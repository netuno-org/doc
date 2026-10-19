---
id: sending-emails
title: Trimiterea de e-mailuri
sidebar_label: Trimiterea de e-mailuri
---
## Înainte de a începe

Înainte de a continua, asigurați-vă că aveți noțiuni de bază de _**JavaScript**_ și că aveți deja noțiunile de bază despre Netuno, cu pas cu pas disponibil în [Academia](/docs/academy/overview).

## Demonstrarea trimiterii de e-mailuri

Cu Netuno este foarte simplu să trimiteți e-mailuri, fie cu atașamente, fie cu imagini încorporate în conținutul propriu-zis (util în cazul semnăturilor).

Aplicația care vine împreună cu Netuno, numită **demo** (aplicație de demonstrație), conține destule exemple de posibile implementări de cod în mai multe limbaje, inclusiv demonstrația trimiterii de e-mailuri prin serviciul `mail-send`, care se află în:

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
Primul pas va fi să configurați contul SMTP pe care Netuno îl va utiliza pentru trimiterea de e-mailuri.

Pentru a face acest lucru, navigați în aplicația pe care o dezvoltați până la fișierul de configurare a mediului. În acest exemplu, vom utiliza fișierul de mediu de dezvoltare aflat în:

* `config/_development.json`

Verificați dacă nu există deja configurări pentru SMTP; dacă nu există încă, atunci la sfârșitul fișierului de configurare (în format JSON) adăugați parametrii de configurare ai SMTP:

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

După salvarea modificărilor, este suficient să reporniți Netuno pentru a prelua modificările de configurare. Acestea sunt configurațiile implicite pentru trimiterea de e-mailuri, după cum indică numele `default`.

```json
...
    "default": {
        ...
    }
...
```

Puteți adăuga mai multe conturi SMTP, dar doar unul poate fi definit ca implicit.

Pentru a adăuga mai multe conturi SMTP, este suficient să repetați blocul de configurare SMTP implicit și să schimbați numele `default` cu un alt nume la alegerea dvs., de exemplu:

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

O configurare similară cu exemplul de mai sus va permite utilizarea contului `default` atunci când este apelat în cod astfel:

```javascript
const smtp = _smtp.init()
```

Iar pentru a utiliza configurarea `test`, este suficient să adăugați numele configurării ca parametru la funcția `_smtp.init()` astfel:

```javascript
const smtp = _smtp.init("test")
```

> Dacă nu adăugați un nume de configurare ca parametru, va fi utilizat întotdeauna contul `default`.

## Cod detaliat
Vom analiza acum cu atenție codul de exemplu pe care Netuno îl pune la dispoziție. În acest caz este în JavaScript și este structurat astfel:

Inițializarea SMTP:

```javascript
const smtp = _smtp.init()
```

> Rețineți că puteți începe cu o altă configurare, de exemplu: `_smtp.init("test")`

Adăugând `.to` la variabila smtp, se definește adresa destinatarului e-mailului; în cazul mai multor destinatari, este suficient să îi separați prin ‘;‘ sau ‘,‘:

```javascript
smtp.to = '*****@gmail.com'
```

Adăugând `.from`, se definește adresa expeditorului e-mailului:

```javascript
smtp.from = '*****@gmail.com'
```

Adăugând `.cc`, se definește adresa destinatarilor în copie ai e-mailului; în cazul mai multor destinatari în copie, este suficient să îi separați prin ‘;‘ sau ‘,‘:

```javascript
smtp.cc = '*****@gmail.com'
```

Același lucru se aplică pentru `.bcc`, unde se definesc destinatarii în copie, dar în mod ascuns:

```javascript
smtp.bcc = '*****@gmail.com'
```

Adăugând `.subject`, se definește subiectul e-mailului:

```javascript
smtp.subject = 'Test Netuno'
```

Adăugând `.text`, se definește conținutul în text simplu:

```javascript
smtp.text = 'Ai primit acest e-mail?'
```

Adăugând `.html`, se definește conținutul e-mailului în HTML:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Ai primit acest e-mail?</p>
</div>`
```

Pentru a adăuga o imagine ca atașament, se adaugă (după cum s-a exemplificat mai sus); în HTML, la imagini (`img`), în atributul `src`, se definește `cid:` (**C**ontent **ID**) ca prefix, iar imediat după, `cid` care este definit la adăugarea atașamentelor cu funcția `attachment` (după cum s-a exemplificat mai jos).

Pentru a adăuga imaginea atașată la e-mail, se adaugă `.attachment` la variabila smtp astfel:

```javascript
smtp.attachment(
    "logo.png", // Fișier
    "image/png", // Formatul fișierului
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Locația fișierului
    "logo" // Numele variabilei definite în "cid:logo"
)   
```

> Rețineți că `cid` (**C**ontent **ID**) este necesar doar pentru a încorpora imagini care sunt atașate în conținutul HTML al e-mailului.

Pentru a adăuga un atașament fără a fi încorporat în HTML (cazul documentelor), procedați astfel:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

În cele din urmă, pentru a trimite e-mailul, este suficient să introduceți următorul cod:

```javascript
smtp.send()
```

În cele din urmă, dacă totul a fost configurat corect, veți primi un e-mail similar cu următorul:

![trimitere-emailuri1.png](/docs/assets/envio-emails1.png)

> Rețineți că, în funcție de clientul dvs. de e-mail, imaginea poate arăta diferit față de cea de mai sus.

## Exemplu complet cu template

Introducerea conținutului HTML în mijlocul codului nu este foarte elegantă, după cum s-a exemplificat mai sus:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Ai primit acest e-mail?</p>
</div>`
```

Pentru a evita acest lucru și a menține codul mai curat și mai elegant, conținutul HTML trebuie importat ca template, astfel:

`smtp.html = _template.getOutput('email/contact', date)`

În acest exemplu, configurarea SMTP în configurația aplicației ar fi astfel:

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "SERVERUL.MEU.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Contact site web - ",
            "from": "noreply@DOMENIUL.MEU.com",
            "to": "info@DOMENIUL.MEU.com",
            "username": "noreply@DOMENIUL.MEU.com",
            "password": "S3cr3t0"
        }
    },
...
```

Observați mai jos cum poate fi utilizat în acest exemplu de cod complet de serviciu, care poate rămâne în fișierul `server/services/contact.js`:

```
const nume = _req.getString("nume")
const email = _req.getString("email")
const subiect = _req.getString("subiect")
const mesaj = _req.getString("mesaj")

const smtp = _smtp.init("contact")

smtp.subject = subiect

smtp.text = "Conținut în HTML."

const date = _val.map()
      .set("nume", nume)
      .set("email", email)
      .set("subiect", subiect)
      .set("mesaj", mesaj)

smtp.html = _template.getOutput('email/contact', date)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/imagini/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("rezultat", true)
)
```

> În calea relativă a template-ului nu este necesar să includeți extensia `.html` și rețineți că, opțional, este posibil să transmiteți informații în interiorul template-ului.

Conținutul HTML al template-ului trebuie definit într-un fișier separat, care trebuie să se afle în folderul `server/templates/`; această cale este găsită pornind de la folderul rădăcină al aplicației. 

Urmând exemplul demonstrat mai sus, fișierul template de exemplu va fi aici:

- `server/templates/email/contact.html`

Conținutul de exemplu al acestui fișier ar putea fi:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contact de pe site web
    </h1>
    <p>Nume: _{&date=nume}</p>
    <p>Email: _{date=email}</p>
    <p>Titlu: _{&date=subiect}</p>
    <p>_{&date=mesaj}</p>
  </div>
</div>

```

Când sunt injectate date în template cu `_{date=...}`, `&` este adăugat atunci când trebuie realizată codificarea caracterelor speciale în HTML, devenind `_{&date=...}`, iar după `=` în locul lui `...` se află cheia conținutului care va fi injectat.

## Configurări avansate

Configurările de mediu `config/_*.json` permit multe alte configurări avansate.

Proprietățile `smtp` utilizate în cod, cum ar fi `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` și `.html`, pot fi definite în configurare pentru a fi predefinite implicit astfel:

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

> Predefinirea `.from` este destul de utilă, deoarece de obicei trimiterea e-mailurilor se face întotdeauna de la aceeași adresă.

Sunt posibile și alte configurări. Urmează o listă completă a acestora:

| PARAMETRU    | TIP   | IMPLICIT      | DESCRIERE    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Activează și dezactivează trimiterea de e-mailuri. |
| `debug` | boolean | false | Activează modul debug, care va afișa mesaje ce detaliază comunicarea cu serverul. |
| `protocol` | string |  | Definește tipul protocolului, smtp sau smtps. |
| `host` | string |  | Numele sau IP-ul serverului SMTP. |
| `port` | integer | 465 | Numărul portului serverului SMTP. |
| `ssl` | boolean | true | Activează SSL. |
| `tls` | boolean | false | Activează TLS. |
| `socketFactoryFallback` | boolean | true | Dacă generarea Socket eșuează, atunci va fi utilizat socketul nativ java.net.Socket. |
| `socketFactoryClass` | string |  | Definește o clasă care implementează interfața javax.net.SocketFactory ce va fi utilizată pentru generarea socketurilor pentru SMTP. |
| `socketFactoryPort` | integer |  | Definește portul care trebuie utilizat de socketuri. |
| `quitWait` | boolean | false | Dacă este activat, așteaptă răspunsul serverului după comanda QUIT; dacă este dezactivat, deconectează imediat conexiunea cu serverul după comanda QUIT. |
| `authMechanisms` | string |  | Listă de mecanisme de autentificare; implicit este “LOGIN PLAIN DIGEST-MD5 NTLM”, astfel suportă toate mecanismele. |
| `authNTLMDomain` | string |  | Domeniul de autentificare al NTLM. |
| `username` | string |  | Definește utilizatorul la autentificarea cu serverul. |
| `html` | string |  | Conținutul HTML al e-mailului. |
| `password` | string |  | Definește parola la autentificarea cu serverul. |
| `from` | string |  | Adresa de e-mail a expeditorului. |
| `to` | string |  | Adresa de e-mail a destinatarului; pot fi adăugate mai multe adrese separate prin “;” sau “,”. |
| `cc` | strinf |  | Adresa de e-mail a destinatarului care trebuie să primească o copie; pot fi adăugate mai multe adrese separate prin “;” sau “,”. |
| `bcc` | string |  | Adresa de e-mail a destinatarului care trebuie să primească o copie ascunsă; pot fi adăugate mai multe adrese separate prin “;” sau “,”. |
| `subjectPrefix` |  | string | Definește un prefix la titlul e-mailului, astfel garantând că toate e-mailurile trimise au prefixul. |
| `subject` | string |  | Subiectul e-mailului. |
| `text` | string |  | Conținutul în text simplu al e-mailului. |

Dacă aveți întrebări, nu ezitați să ne contactați prin mijloacele prezentate la sfârșitul paginii.

Spor la dezvoltare!