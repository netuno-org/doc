---
id: custom-urls
title: Aangepaste URL's
sidebar_label: Aangepaste URL's
---

## Inleiding

Netuno maakt het mogelijk de standaardadressen te wijzigen, bijvoorbeeld:

- Het adres van de beheerinterface, `admin`.
- Het adres van openbare bestanden, zoals afbeeldingen, CSS en JS, `public`.
- Het adres van de services van de REST-API, `services`.

## Configuratie

Navigeer binnen de applicatie die u ontwikkelt naar het configuratiebestand van de omgeving. In dit voorbeeld gebruiken we het omgevingsbestand voor lokale ontwikkeling op:

- 📂 `config/_development.json`

Controleer of de URL-configuratie nog niet bestaat; als deze niet bestaat, voegt u aan het einde van het configuratiebestand (in JSON-formaat) de URL-configuratieparameters toe, bijvoorbeeld:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Bepaalt het prefix van het URL-adres van de beheerinterface; de standaardwaarde is alleen `/`.

### public

Bepaalt het prefix van het URL-adres van de openbare statische bestanden, zoals afbeeldingen, CSS-stijl en JavaScript-code; de standaardwaarde is `/public`.

### services

Bepaalt het begin-URL-adres van de webdiensten van de REST-API; de standaardwaarde is `/services`.

## Conclusie

Het aanpassen van URL's is belangrijk, zowel om ze intuïtiever te maken als om ze complexer te kunnen maken en de beveiliging te verhogen.

Bijvoorbeeld, in het beheeradres kan een prefix met een reeks willekeurige tekens worden geplaatst; zo zal alleen wie deze uit het hoofd kent het toegangsadres bereiken, wat toegang bemoeilijkt en aanvallen voorkomt.