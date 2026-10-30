---
sidebar_position: 3
id: fields
title: Velden
---



Velden zijn de fundamentele componenten en de "bouwstenen" van een formulier in Netuno. Ze vertegenwoordigen de interface voor interactie met de gebruiker en bepalen hoe de gegevens worden gestructureerd en opgeslagen.

In de praktijk komt elk aangemaakt veld overeen met een kolom in de databasetabel, en bepaalt het het type informatie dat het systeem kan verwerken — zoals teksten, getallen, datums, selecties en bestanden.

### Velden aanmaken en bewerken

Deze knoppen maken het mogelijk de algemene bewerkingsstatus te beheren:

- **Bestaand veld bewerken:** Vervolgkeuzemenu om een reeds aangemaakt veld te selecteren en de instellingen ervan te wijzigen.

- **Nieuw veld aanmaken:** Wist alle velden van het formulier om de configuratie van een nieuw element vanaf nul te starten.

- **Veld klonen:** Dupliceert de instellingen van het geselecteerde veld om het aanmaken van vergelijkbare items te versnellen.

![field-edit-existing-pt.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Veldtitel

De veldtitel (technisch bekend als Label) is de visuele instructie die de gebruiker vertelt welke informatie in een formulier moet worden ingevoerd. Het fungeert als een identificerend label, zodat het invullen van de gegevens intuïtief en correct verloopt.

In deze fase heeft de titel een dubbele functie op het platform:

- **In het Beheer van Velden (Bouwen):** Dient om het veld te identificeren binnen uw lijst met elementen tijdens de ontwikkeling van de applicatie.

![field-title-name-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **In de Gebruikersinterface (Weergeven):** Dit is de tekst die direct boven of naast het invoerveld (input) verschijnt en de eindgebruiker aangeeft wat hij in het formulier moet invoeren.

![field-title-name-content-pt.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Kolomnaam

Anders dan de titel is de **Kolomnaam** de interne en exclusieve identificatie van het veld, die direct wordt gebruikt in de database en in programmeerlogica. Via deze naam lokaliseert het systeem de informatie in de database.

**Automatische opmaak (Auto-schakelaar):**

Netuno vergemakkelijkt dit proces door de naam automatisch in te vullen op basis van de "Veldtitel". De gebruikte standaard is snake_case.

**Schrijfregels:** Als u ervoor kiest om handmatig in te vullen (door "Auto" uit te schakelen), houd de naam dan in het enkelvoud, gebruik alleen kleine letters en vermijd spaties of speciale tekens.

![field-column-name-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Gegevenstypen

De definitie van het **Gegevenstype** bepaalt de aard van de verzamelde informatie en heeft direct invloed op het uiterlijk van het veld voor de gebruiker en op de manier waarop het gegeven in het systeem wordt opgeslagen.

![field-type-data-pt.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Tekstvelden

Deze velden zijn bedoeld voor het invoeren van tekst in verschillende formaten. Ze variëren afhankelijk van de benodigde gegevenshoeveelheid.

| Type | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| text | Maakt een eenvoudig input voor één regel. | Namen, titels van artikelen, wijken, enz. |
| textarea | Maakt een groter tekstgebied-input, voor meerdere regels. | Productbeschrijvingen, opmerkingen, observaties. |
| email | Maakt een tekstinput opgemaakt voor het ontvangen van een e-mail. | Registratie van contact-e-mail, gebruikerslogin. |
| texthtml | Maakt een rich text-editor die opmaak met HTML mogelijk maakt. | Aanmaken van inhoud voor een blog, marketing-e-mails, websitepagina's. |
| textmd | Maakt een teksteditor die de Markdown-opmaaktaal ondersteunt. | Ideaal voor technische documentatie, blogberichten voor ontwikkelaars. |

### 3.2 Numerieke velden

Gebruikt om informatie te verzamelen die strikt numeriek is.

| Type | Wat doet het? | Gebruiksvoorbeeld |
| :--- | :--- | :--- |
| textnum | Maakt een input voor het invoeren van gehele getallen. | Voorraadhoeveelheid, leeftijd van een persoon, aantal vacatures. |
| textfloat | Maakt een input voor het invoeren van getallen met decimalen. | Productprijzen (bijv. 99.90), gewicht (bijv. 75.5), lengte (bijv. 1.82). |

### 3.3 Selectievelden

Gebruikt wanneer de gebruiker moet kiezen uit vooraf gedefinieerde opties.

| Type | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| select | Maakt een lijst met opties waaruit de gebruiker er slechts één kan kiezen. | Een provincie (UF) selecteren, burgerlijke staat, categorie van een product. |
| multiselect | Maakt een lijst met opties waaruit de gebruiker er meerdere kan kiezen. | Interesses selecteren (sport, technologie), ingrediënten van een pizza. |
| checkbox | Toont een enkel selectievakje (aan/uit). | "Ik accepteer de gebruiksvoorwaarden", "Mijn wachtwoord onthouden". |
| color | Toont een visuele kleurkiezer. | De kleur van een product kiezen, de kleur van een evenement personaliseren. |

### 3.4 Datum- en tijdvelden

Gespecialiseerd voor het invoeren van tijdsinformatie.

| Type | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| date | Toont een kalender zodat de gebruiker een datum kan selecteren (dag, maand, jaar). | Geboortedatum, datum van een afspraak. |
| datetime | Maakt het mogelijk een datum en een tijd te selecteren. | Begin van een evenement, datum en tijd van een publicatie. |
| time | Maakt het mogelijk een tijd te selecteren (uren en minuten). | Openingstijden, tijd van een alarm. |

### 3.5 Bestands- en mediavelden

Gebruikt om bestanden en afbeeldingen naar uw applicatie te uploaden.

| Type | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| file | Maakt een veld voor het uploaden van een willekeurig bestand (PDF, DOCX, ZIP). | Een cv bijvoegen, een betalingsbewijs versturen. |
| image | Een veld geoptimaliseerd voor het uploaden van afbeeldingen (JPG, PNG, GIF). | Profielfoto van de gebruiker, afbeelding van een product. |

### 3.6 Technische en speciale velden

Deze velden hebben automatische gedragingen of dienen specifieke doeleinden van het systeem.

| Type | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| hidden | Het veld is onzichtbaar voor de gebruiker, maar bewaart een waarde. | Een ID opslaan die van een andere pagina afkomstig is, een trackingcode. |
| uid | Genereert automatisch een Universele Unieke Identificatie. | Primaire sleutel van een record, unieke code van een bestelling. |
| user | Koppelt het record aan de gebruiker die het heeft aangemaakt of gewijzigd. | De auteur van een blogbericht identificeren, de verkoper die een klant heeft geregistreerd. |
| lastchange | Slaat automatisch de datum en tijd op van de laatste wijziging van het record. | Audit, om te weten wanneer een gegeven voor het laatst is gewijzigd. |
| group | Gebruikt om andere velden visueel te groeperen in het formulier. | Secties maken zoals "Persoonlijke gegevens" en "Adres" om lange formulieren te organiseren. |

## 4 - Gedrags- en lay-outinstellingen

Dit gebied is het "bedieningspaneel" van uw veld en definieert de bedrijfsregels en de toegangsrechten.

![field-behavior-and-layout-settings-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Regels voor gegevensintegriteit

Deze opties waarborgen de kwaliteit en consistentie van de informatie.

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Unieke waarden (primaire sleutel) | Maakt van het veld de belangrijkste en unieke identificatie, waardoor dubbele waarden worden voorkomen. | Gebruiken voor "CPF", zodat er geen twee klanten met hetzelfde nummer bestaan. |
| Verplicht (niet null) | Maakt het invullen van het veld verplicht. | Toepassen op essentiële velden zoals "Naam" en "E-mail". |

### 4.2 Controle over rechten en zichtbaarheid

Bepaalt waar en hoe gebruikers met de gegevens van dit veld omgaan.

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Weergeven in resultaat | Bepaalt of de kolom in de hoofdlijst met gegevens verschijnt. | Uitschakelen voor "Interne opmerkingen" om de lijst overzichtelijk te houden. |
| Filteren toestaan | Voegt een zoekvak voor deze kolom toe aan de lijst. | Inschakelen bij "Bestelstatus" om het zoeken te vergemakkelijken. |
| Weergeven toestaan | Bepaalt of de inhoud in de weergavemodus wordt getoond. | In de meeste gevallen aangevinkt laten. |
| Bewerken toestaan | Maakt het mogelijk de inhoud te wijzigen wanneer een record wordt bewerkt. | Uitschakelen voor velden die niet mogen worden gewijzigd, zoals "Registratiedatum". |
| Toestaan bij aanmaken nieuw | Bepaalt of het veld in het aanmaakformulier moet verschijnen. | Uitschakelen voor "feedback"-velden, die pas *na* het aanmaken mogen worden ingevuld. |
| Exporteren toestaan | Neemt de gegevens van dit veld op bij het exporteren van de lijst (Excel, CSV). | Interne gegevens uitschakelen die niet relevant zijn voor externe rapporten. |

## 5 - Visuele organisatie van het formulier

Bepaalt de plaatsing van de velden in de lay-out.

![field-visual-organization-form-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Rij | Bepaalt de verticale positie van het veld in het formulier. | "Volledige naam" in Rij: 1 plaatsen en "Adres" in Rij: 2. |
| Kolom | Bepaalt de horizontale positie, waardoor meerdere velden naast elkaar mogelijk zijn. | Om "Stad" en "Provincie" samen te hebben, Rij: 3, Kolom: 1 (Stad) en Kolom: 2 (Provincie) gebruiken. |

## 6 - Meer opties bekijken

Voor een meer gepersonaliseerde controle klikt u op de knop "+ Meer opties bekijken".

### 6.1 Beschrijvingsveld

![field-view-options-description-pt.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Beschrijving | Voegt een hulptekst of instructie toe die onder het veld verschijnt. | Gebruik bij "Wachtwoord" de beschrijving om de regels te vermelden: "Het wachtwoord moet minimaal 8 tekens bevatten...". |

### 6.2 Afmetingen van het veld

![field-dimensioning-layout-pt.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Fijne controle over de grootte van het veld.

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Breedte | Bepaalt de breedte van het component (gebaseerd op een raster van 12 kolommen). | "CPF" (Breedte: 6) en "Geboortedatum" (Breedte: 6) op dezelfde rij. |
| Hoogte | Bepaalt de hoogte van het component in pixels (px). | Stel bij `textarea` "Opmerkingen" de Hoogte in op "120" voor een groter gebied. |
| Celbreedte (px) | Bepaalt een vaste breedte in pixels voor de cel. | Gebruiken om velden met specifieke breedtes uit te lijnen, zoals "UF" (Breedte: 80). |
| Celhoogte (px) | Bepaalt een vaste hoogte in pixels voor de cel. | De hoogte van een `image`-veld vergroten om een "slepen en neerzetten"-gebied te creëren. |
| Rowspan | Maakt het mogelijk dat de cel zich verticaal over meerdere rijen uitstrekt. | Een `textarea` voor "Beschrijving" die 3 rijen hoog is naast kleinere velden. |
| Colspan | Maakt het mogelijk dat de cel zich horizontaal over meerdere kolommen uitstrekt. | Een veld "Volledig adres" (Colspan: 2) boven "Stad" en "Provincie". |

### 6.3 Validatie en gegevensregels

Stel limieten in voor de ingevoerde waarden.

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Max | Maximale waarde (numeriek) of maximaal aantal tekens (tekst). | Stel bij "Cijfer (0 tot 10)" Max in op "10". Bij "Bijnaam", Max "20". |
| Min | Minimale waarde (numeriek) of minimaal aantal tekens (tekst). | Stel bij "Hoeveelheid" Min in op "1". Bij "Rechtvaardiging", Min "30". |

### 6.4 Toegangscontrole 

![field-access-control-pt.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Definieer groepen en gebruikers die het veld kunnen bekijken en bewerken.

| Instelling | Wat doet het? | Praktijkvoorbeeld |
| :--- | :--- | :--- |
| Gebruikersweergave en Groepsweergave | Beperkt de *weergave* van het veld tot alleen de opgegeven gebruikers of groepen. | "Commissie van de verkoper" heeft Groepsweergave "Managers". |
| Gebruikersbewerking en Groepsbewerking | Maakt het mogelijk dat alleen de opgegeven gebruikers of groepen het veld *bewerken* (anderen zien het als "alleen-lezen"). | "Bestelstatus" heeft Groepsbewerking "Logistiek". |