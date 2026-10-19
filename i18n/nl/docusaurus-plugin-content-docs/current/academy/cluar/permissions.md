---
sidebar_position: 12
id: permissions
title: Machtigingen
sidebar_label: Machtigingen
---

Hoe de toegang tot de backoffice wordt beheerd op basis van rollen en organisaties.

## Inleiding

CLUAR beheert de toegang tot de backoffice via **rollen** (groepen), die aan personen binnen een **organisatie** worden toegewezen. Elke REST-service van de server wordt ingedeeld in een toegangscategorie, en alleen wie de juiste rol heeft, binnen de juiste organisatie, kan deze gebruiken.

## Rollen

Er zijn 5 vooraf aangemaakte rollen (`user_group`):

| Code | Naam |
|---|---|
| `administrator` | Beheerder |
| `editor` | Editor |
| `author` | Auteur |
| `contributor` | Bijdrager |
| `subscriber` | Abonnee |

:::info Nog niet alle rollen hebben machtigingen toegewezen
Momenteel hebben alleen **Beheerder** en **Editor** daadwerkelijk ergens toegang toe — het zijn de enige rollen die in de toegangsregels worden genoemd (zie hieronder). Auteur, Bijdrager en Abonnee bestaan al als optie in het formulier, maar hebben nog geen enkele toegang geconfigureerd; het toewijzen van een van deze rollen aan iemand geeft die persoon momenteel geen toegang tot iets in de backoffice.
:::

## Organisatie

Een persoon heeft alleen een rol **binnen de context van een organisatie** — de koppeling gebeurt in `Organisatie > Leden` (`organization_people`), door Persoon + Organisatie + Rol aan elkaar te koppelen.

Momenteel bestaat er slechts één organisatie, met de code `admins`, en daarin worden alle machtigingen gecontroleerd. De entiteit `organization` ondersteunt hiërarchie (`parent_id`, 'bovenliggende' organisaties), maar die hiërarchie wordt nog niet gebruikt in de huidige machtigingsregels — alle controles verwijzen rechtstreeks naar de organisatie `admins`.

## Eerste toegang tot de bewerkingsmodus

CLUAR onderscheidt twee verschillende plekken waar wordt ingelogd:

- De **Netuno-backoffice** (poort `9000` in ontwikkeling) — hier worden rechtstreeks de Netuno-gebruikers beheerd (`netuno_user`, het paar gebruikersnaam/wachtwoord) en alle entiteiten, inclusief Persoon en Rollen.
- Het **besloten gedeelte** van de website zelf (`/login`, poort `3000` in ontwikkeling) — hier logt de contentredacteur dagelijks in om toegang te krijgen tot de bewerkingsmodus van de pagina's.

Om het besloten gedeelte binnen te gaan en de bewerkingsmodus beschikbaar te hebben, is een Netuno-gebruiker met login nodig die gekoppeld is aan een Persoon, verbonden aan de organisatie `admins` met de rol **Beheerder** of **Editor** (zie [Organisatie](#organisatie) hierboven).

### Standaardgebruiker

Het `server/setup/030-people.js` van CLUAR maakt standaard al een Persoon 'admin' aan die gekoppeld is aan de Netuno-gebruiker met `id: 2`, en het `server/setup/050-organization_people.js` koppelt die Persoon al aan de organisatie `admins` met de rol **Beheerder** — met andere woorden, deze gebruiker heeft vanaf het begin volledige toegang.

De login van deze standaardgebruiker is:

```
gebruiker: admin
wachtwoord: admin
```

Met deze inloggegevens kun je direct in het besloten gedeelte (`/login`) inloggen als Beheerder — zonder eerst extra stappen in de Netuno-backoffice te hoeven uitvoeren.

:::info Wijzig het standaardwachtwoord in productie
`admin`/`admin` zijn bekende en voorspelbare inloggegevens. Voordat een site in productie gaat, wijzig je het wachtwoord van deze gebruiker (of maak je een nieuwe Beheerder aan en schakel je deze uit).
:::

### Nieuwe gebruikers aanmaken

Er zijn twee mogelijke manieren:

**Via het besloten gedeelte (aanbevolen):** in `Gebruikers > Gebruiker aanmaken` vraagt één formulier om naam, gebruikersnaam, wachtwoord, e-mail, Organisatie en Rol — en maakt alles in één keer aan: de Netuno-gebruiker, de Persoon (al gekoppeld aan die gebruiker) en de koppeling aan de gekozen organisatie/rol. Je hoeft niet via de Netuno-backoffice te gaan.

**Alleen via de Netuno-backoffice:** aangezien de backoffice directe toegang geeft tot alle entiteiten, is het ook mogelijk dezelfde 3 stappen handmatig uit te voeren, zonder daar weg te gaan:

1. Maak de Netuno-gebruiker aan (`netuno_user`), met de gekozen gebruikersnaam en het gekozen wachtwoord.
2. Maak een **Persoon** aan en koppel deze aan die Netuno-gebruiker.
3. Koppel in `Organisatie > Leden` die Persoon aan de organisatie `admins`, met de rol Beheerder of Editor.

In beide gevallen kan de aangemaakte persoon al inloggen op `/login` en toegang krijgen tot de bewerkingsmodus.

## Hoe machtigingen worden toegepast

Elke service van de server wordt ingedeeld in een van deze categorieën, gedefinieerd in `server/core/_service_config.js`:

| Categorie | Wie heeft toegang | Voorbeelden |
|---|---|---|
| **Openbaar** | Iedereen, zonder login | Contact, avatar, login |
| **Contentbeheer** | Beheerder + Editor | Pagina's, versies, componenten, woordenboek, acties |
| **Sitebeheer** | Alleen beheerder | Instellingen, talen, synchronisatie |
| **Toegangsbeheer** | Alleen beheerder | Organisaties, personen, gebruikers |

Elke service die niet in een van deze categorieën staat, wordt **standaard geweigerd** — een bewuste keuze in de code (expliciet als commentaar in het bestand vermeld), zodat vergeten een nieuwe service te classificeren tot blokkering leidt, en niet tot vrije toegang door onoplettendheid.

:::info Machtigingen worden niet toegepast in de ontwikkelomgeving
In de `dev`-omgeving geeft `_service_config.js` alle services meteen aan het begin vrij, vóór enige controle — met andere woorden, **de machtigingen worden alleen echt toegepast in productie/staging**. Bij lokaal testen heeft elke ingelogde gebruiker toegang tot alles, ongeacht de rol.
:::

## Interface: het menu filtert ook op machtiging

Naast de blokkering op de server filtert ook het zijmenu van het besloten gedeelte (`website/src/components/SideMenu`) de zichtbare items op basis van de rol van de ingelogde persoon — om geen opties te tonen die deze persoon niet zou mogen gebruiken.

:::info Houd de twee lijsten gesynchroniseerd
De lijst met 'wie wat mag zien' in de `SideMenu` wordt handmatig afgestemd op `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` en `ACCESS_MANAGEMENT_PATHS` uit `_service_config.js` — het zijn twee afzonderlijke lijsten, één in de frontend en één in de backend. Bij het toevoegen van een nieuwe beveiligde service moeten beide worden bijgewerkt; alleen de server aanpassen verbergt de fout (het menu blijft een optie tonen die in de praktijk wordt geweigerd), en alleen het menu aanpassen beveiligt feitelijk niets.
:::

## Hoe een nieuwe service te beveiligen

1. Maak de service normaal aan in `server/services/`.
2. Voeg het pad van de service (`path/method`) toe aan de juiste lijst in `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` of `ACCESS_MANAGEMENT_PATHS` — afhankelijk van wie hem moet kunnen gebruiken. Als de service openbaar is, voeg je hem toe aan `PUBLIC_PATHS`.
3. Als de service een overeenkomstig item in het menu van het besloten gedeelte heeft, werk dan ook de `SideMenu` bij zodat het filter overeenkomt met de werkelijke machtiging.