---
id: sending-emails
title: E-mails verzenden
sidebar_label: E-mails verzenden
---
## Voordat je begint

Voordat je verdergaat, zorg ervoor dat je basiskennis van _**JavaScript**_ hebt en dat je de basis van Netuno al kent via de stapsgewijze handleiding in de [Academie](/docs/academy/overview).

## Demonstratie van e-mailverzending

Met Netuno is het heel eenvoudig om e-mails te versturen, zowel met bijlagen als met afbeeldingen die in de inhoud zelf zijn ingesloten (handig voor handtekeningen).

De applicatie die met Netuno wordt meegeleverd en **demo** heet (de demonstratieapplicatie) bevat veel voorbeelden van mogelijke code-implementaties in verschillende talen, waaronder een demonstratie van e-mailverzending via de service `mail-send`, die zich bevindt in:

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

## Configuratie
De eerste stap is het configureren van het SMTP-account dat Netuno gaat gebruiken voor het verzenden van e-mails.

Om dit te doen, ga je binnen de applicatie die je aan het ontwikkelen bent naar het omgevingsconfiguratiebestand. In dit voorbeeld gebruiken we het ontwikkelomgevingsbestand op:

* `config/_development.json`

Controleer of er al SMTP-configuratie bestaat; als die er nog niet is, voeg dan aan het einde van het configuratiebestand (in JSON-formaat) de SMTP-configuratieparameters toe:

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

Als je voor Gmail configureert, vervang dan alleen de sterretjes door je inloggegevens en schakel de SMTP-verbinding in bij de instellingen van je Gmail-account. Vervang anders alle parameters door die van je eigen SMTP-account.

Na het opslaan van de wijzigingen hoef je Netuno alleen opnieuw op te starten om de configuratiewijzigingen over te nemen. Dit zijn de standaardinstellingen voor e-mailverzending, zoals de naam `default` aangeeft.

```json
...
    "default": {
        ...
    }
...
```

Je kunt meer SMTP-accounts toevoegen, maar slechts één ervan kan als standaard worden ingesteld.

Om meer SMTP-accounts toe te voegen, herhaal je het configuratieblok van de standaard-SMTP en vervang je de naam `default` door een andere naam naar keuze, bijvoorbeeld:

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

Een configuratie zoals in het bovenstaande voorbeeld maakt het mogelijk om het account `default` te gebruiken wanneer het als volgt in de code wordt aangeroepen:

```javascript
const smtp = _smtp.init()
```

En om de configuratie `test` te gebruiken, voeg je gewoon de configuratienaam als parameter toe aan de functie `_smtp.init()`, als volgt:

```javascript
const smtp = _smtp.init("test")
```

> Als je geen configuratienaam als parameter toevoegt, wordt altijd het standaardaccount gebruikt.

## Gedetailleerde code
Laten we nu de voorbeeldcode die Netuno biedt aandachtig bekijken. In dit geval is die in JavaScript en als volgt gestructureerd:

Initialisatie van SMTP:

```javascript
const smtp = _smtp.init()
```

> Bedenk dat je ook met een andere configuratie kunt initialiseren, bijvoorbeeld: `_smtp.init("test")`

Door `.to` aan de variabele `smtp` toe te voegen, stel je het e-mailadres van de ontvanger in; bij meerdere ontvangers scheid je de adressen met ‘;‘ of ‘,‘:

```javascript
smtp.to = '*****@gmail.com'
```

Door `.from` toe te voegen, stel je het e-mailadres van de afzender in:

```javascript
smtp.from = '*****@gmail.com'
```

Door `.cc` toe te voegen, stel je de adressen van ontvangers in cc in; bij meerdere cc-ontvangers scheid je de adressen met ‘;‘ of ‘,‘:

```javascript
smtp.cc = '*****@gmail.com'
```

Hetzelfde geldt voor `.bcc`, waarmee je ontvangers in verborgen kopie instelt:

```javascript
smtp.bcc = '*****@gmail.com'
```

Door `.subject` toe te voegen, stel je het onderwerp van de e-mail in:

```javascript
smtp.subject = 'Netuno-test'
```

Door `.text` toe te voegen, stel je de inhoud als platte tekst in:

```javascript
smtp.text = 'Heb je deze e-mail ontvangen?'
```

Door `.html` toe te voegen, stel je de inhoud van de e-mail in HTML in:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Heb je deze e-mail ontvangen?</p>
</div>`
```

Om een afbeelding als bijlage toe te voegen, doe je het volgende (zoals hierboven is geïllustreerd): in de HTML wordt bij afbeeldingen (`img`) in het attribuut `src` de prefix `cid:` (**C**ontent **ID**) gebruikt, gevolgd door de `cid` die wordt gedefinieerd bij het toevoegen van bijlagen met de functie `attachment` (zoals hieronder is geïllustreerd).

Om de afbeelding als bijlage aan de e-mail toe te voegen, voeg je `.attachment` als volgt aan de variabele `smtp` toe:

```javascript
smtp.attachment(
    "logo.png", // Bestand
    "image/png", // Bestandstype
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Locatie van het bestand
    "logo" // Naam van de variabele gedefinieerd in "cid:logo"
)   
```

> Merk op dat de `cid` (**C**ontent **ID**) alleen nodig is om afbeeldingen die als bijlage zijn toegevoegd in de HTML-inhoud van de e-mail in te sluiten.

Om een bijlage toe te voegen die niet in de HTML wordt ingesloten (zoals documenten), ga je als volgt te werk:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Om de e-mail ten slotte te verzenden, voeg je de volgende code toe:

```javascript
smtp.send()
```

Als alles juist is geconfigureerd, ontvang je ten slotte een e-mail zoals hieronder:

![e-mail-verzenden1.png](/docs/assets/envio-emails1.png)

> Merk op dat dit, afhankelijk van je e-mailclient, kan afwijken van de afbeelding hierboven.

## Volledig voorbeeld met template

HTML-inhoud midden in de code plaatsen is niet erg elegant, zoals hierboven is geïllustreerd:

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Heb je deze e-mail ontvangen?</p>
</div>`
```

Om dit te vermijden en de code schoner en eleganter te houden, moet de HTML-inhoud als template worden geïmporteerd, als volgt:

`smtp.html = _template.getOutput('e-mail/contact', data)`

In dit voorbeeld ziet de SMTP-configuratie in de applicatieconfiguratie er als volgt uit:

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MIJN.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Websitecontact - ",
            "from": "noreply@MIJN.DOMEIN.com",
            "to": "info@MIJN.DOMEIN.com",
            "username": "noreply@MIJN.DOMEIN.com",
            "password": "G3h31m"
        }
    },
...
```

Merk hieronder op hoe dit kan worden gebruikt in dit volledige voorbeeld van servercode, die in het bestand `server/services/contact.js` kan staan:

```
const naam = _req.getString("naam")
const email = _req.getString("email")
const onderwerp = _req.getString("onderwerp")
const bericht = _req.getString("bericht")

const smtp = _smtp.init("contact")

smtp.subject = onderwerp

smtp.text = "Inhoud in HTML."

const data = _val.map()
      .set("naam", naam)
      .set("email", email)
      .set("onderwerp", onderwerp)
      .set("bericht", bericht)

smtp.html = _template.getOutput('e-mail/contact', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("resultaat", true)
)
```

> In het relatieve pad van de template is het niet nodig om de extensie `.html` op te geven; merk op dat je optioneel informatie aan de template kunt doorgeven.

De HTML-inhoud van de template moet in een apart bestand worden gedefinieerd dat in de map `server/templates/` moet staan; dit pad wordt gevonden vanaf de hoofdmap van de applicatie.

Als je het hierboven getoonde voorbeeld volgt, komt het voorbeeldtemplatebestand hier:

- `server/templates/e-mail/contact.html`

De voorbeeldinhoud van dit bestand kan zijn:

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contact van de website
    </h1>
    <p>Naam: _{&data=naam}</p>
    <p>Email: _{data=email}</p>
    <p>Titel: _{&data=onderwerp}</p>
    <p>_{&data=bericht}</p>
  </div>
</div>

```

Wanneer gegevens in de template worden geïnjecteerd met `_{data=...}`, wordt de `&` toegevoegd wanneer speciale tekens in HTML moeten worden gecodeerd, waardoor het `_{&data=...}` wordt; na de `=` staat op de plaats van de `...` de sleutel van de inhoud die wordt geïnjecteerd.

## Geavanceerde configuraties

De omgevingsconfiguraties `config/_*.json` ondersteunen nog veel meer geavanceerde instellingen.

De `smtp`-eigenschappen die in de code worden gebruikt, zoals `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` en `.html`, kunnen in de configuratie worden gedefinieerd om ze standaard vooraf in te stellen, als volgt:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Standaardonderwerp...",
        "text": "Standaardinoud... ok!",
        "html": "<p>Standaardinoud... <b>ok!</b></p>"
        ...
    }
...
```

> Het vooraf instellen van `.from` is heel handig, omdat e-mails meestal altijd vanaf hetzelfde adres worden verzonden.

Er zijn ook andere configuraties mogelijk. Hieronder volgt een volledige lijst:

| PARAMETER    | TYPE   | STANDAARD      | BESCHRIJVING    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Activeert en deactiveert het verzenden van e-mail. |
| `debug` | boolean | false | Schakelt de foutopsporingsmodus in, waardoor berichten worden getoond die de communicatie met de server detailleren. |
| `protocol` | string |  | Definieert het protocoltype, smtp of smtps. |
| `host` | string |  | Naam of IP van de SMTP-server. |
| `port` | integer | 465 | Poortnummer van de SMTP-server. |
| `ssl` | boolean | true | Schakelt SSL in. |
| `tls` | boolean | false | Schakelt TLS in |
| `socketFactoryFallback` | boolean | true | Als het genereren van de Socket mislukt, wordt de native java.net.Socket gebruikt. |
| `socketFactoryClass` | string |  | Definieert een klasse die de interface javax.net.SocketFactory implementeert, die wordt gebruikt om de sockets voor SMTP te genereren. |
| `socketFactoryPort` | integer |  | Definieert de poort die door de sockets moet worden gebruikt. |
| `quitWait` | boolean | false | Indien ingeschakeld, wacht op het antwoord van de server na het QUIT-commando; indien uitgeschakeld, wordt de verbinding met de server direct na het QUIT-commando verbroken. |
| `authMechanisms` | string |  | Lijst van authenticatiemechanismen; standaard is “LOGIN PLAIN DIGEST-MD5 NTLM”, zodat alle mechanismen worden ondersteund. |
| `authNTLMDomain` | string |  | NTLM-authenticatiedomein. |
| `username` | string |  | Definieert de gebruiker bij authenticatie met de server. |
| `html` | string |  | HTML-inhoud van de e-mail. |
| `password` | string |  | Definieert het wachtwoord bij authenticatie met de server. |
| `from` | string |  | E-mailadres van de afzender. |
| `to` | string |  | E-mailadres van de ontvanger; er kunnen meer e-mailadressen worden toegevoegd, gescheiden door “;” of “,”. |
| `cc` | strinf |  | E-mailadres van de ontvanger van een kopie; er kunnen meer e-mailadressen worden toegevoegd, gescheiden door “;” of “,”. |
| `bcc` | string |  | E-mailadres van de ontvanger van een verborgen kopie; er kunnen meer e-mailadressen worden toegevoegd, gescheiden door “;” of “,”. |
| `subjectPrefix` |  | string | Definieert een prefix voor de titel van de e-mail, zodat alle verzonden e-mails de prefix hebben. |
| `subject` | string |  | Onderwerp van de e-mail. |
| `text` | string |  | Tekstinhoud van de e-mail als platte tekst. |

Als je vragen hebt, aarzel dan niet om contact met ons op te nemen via de kanalen die onderaan de pagina worden vermeld.

Veel programmeerplezier!