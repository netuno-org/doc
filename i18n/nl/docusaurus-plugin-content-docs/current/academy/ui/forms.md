---
sidebar_position: 2
id: forms
title: Formulieren
---

## Formulieren maken

Formulierbeheer is het gebied waar u de datastructuren van uw applicatie kunt maken en beheren. Elk formulier dat u hier maakt, wordt een interface in de backoffice om gegevens in te voeren, te bewerken en te bekijken, en komt overeen met een tabel in de database.

Het is verdeeld in twee essentiële en verplichte stappen, aangevuld met een korte toelichting op **formuliergroepering** en de **diagrammodus**.

![formulierbeheer.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Titel van het formulier

Dit is de naam van uw formulier, dus voer een duidelijke en intuïtieve naam in. 
Deze wordt weergegeven in het zijmenu van de backoffice in de volgende secties: **Formulieren** (in de weergavemodus) en **Velden beheren** (in de bouwmodus).

![formulier-titel.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Naam van de tabel

Dit is de technische naam die wordt gebruikt om de bijbehorende tabel in de database aan te maken. Deze naam wordt intern door het systeem en door ontwikkelaars gebruikt.

**Hoe invullen:**

- **Handmatig:** Voer een unieke naam in het enkelvoud in, met kleine letters en zonder spaties of speciale tekens (gebruik de notatie `snake_case`, bijvoorbeeld: klant_registratie).
- **Automatisch:** Vink het selectievakje **Automatisch** naast het veld aan. Het systeem genereert automatisch een technische naam op basis van de **Titel van het formulier**. Dit is de aanbevolen werkwijze om consistentie te behouden.
- 

![formulier-tabelnaam.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Formuliergroepering (Ouder)

Dit veld maakt het mogelijk een hiërarchie tussen formulieren te maken. Door een 'Ouder' te selecteren, bepaalt u dat het huidige formulier een subitem is van het geselecteerde formulier. Het wordt weergegeven in het zijmenu in de volgende secties: 'Formulieren' (in de weergavemodus) en 'Velden beheren' (in de bouwmodus) van het bijbehorende hoofdformulier.

**Hoe invullen:**

- Laat dit leeg als dit een hoofdformulier is (zoals 'Klant').
- Selecteer een bestaand formulier in de lijst als u een afhankelijkheidsrelatie wilt maken. Een formulier 'Adressen' zou bijvoorbeeld 'Klant' als ouder kunnen hebben.

![formuliergroepering-ouder.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Controle-opties

Deze selectievakjes activeren specifieke functionaliteiten voor het formulier.

- **ID tonen:** Vink deze optie aan als u wilt dat het unieke identificatieveld (ID) van elke record zichtbaar is in de gegevenslijst van het formulier.
- **Actiefbeheer:** Activeert een statusbeheer (Actief/Inactief) voor elke record. Hierdoor kunt u een item deactiveren zonder het uit de database te verwijderen.
- **Gebruikersbeheer:** Zorgt ervoor dat elke record die in het formulier wordt aangemaakt, wordt gekoppeld aan de gebruiker die deze heeft aangemaakt. Dit is handig om bij te houden wie elke registratie heeft uitgevoerd.
- **Groepsbeheer:** Koppelt elke record aan een gebruikersgroep. Deze optie wordt vaak gebruikt om toegangsrechten tot gegevens te beheren op basis van de groepen die in het systeem zijn geregistreerd.

![formulier-controleopties.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Sorteerinstellingen en gekoppelde gebruikers

Deze velden definiëren standaardwaarden voor nieuwe records en de weergavevolgorde.

- **Herordenen:** Stel een nummer in voor de volgorde waarin dit formulier in het zijmenu verschijnt. Kleinere nummers (zoals 0, 1, 2) verschijnen eerst.
- **Gebruiker:** Selecteer een standaardgebruiker die aan nieuwe records wordt gekoppeld als 'Gebruikersbeheer' is geactiveerd. 'Algemeen' betekent dat er geen specifieke gebruiker is.
- **Groep:** Selecteer een standaardgroep die aan nieuwe records wordt gekoppeld als 'Groepsbeheer' is geactiveerd. 'Algemeen' betekent dat er geen specifieke groep is.

![formulier-sorteerinstellingen-en-gekoppelde-gebruikers.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Diagrammodus

Het scherm **Diagram** biedt een grafische weergave van de volledige datastructuur van uw applicatie. Dit staat bekend als een entiteit-relatiediagram (ERD) en toont alle formulieren (die tabellen in de database vertegenwoordigen), hun respectieve velden en de verbindingen daartussen.
Deze tool is essentieel om snel te begrijpen hoe de informatie van uw applicatie is georganiseerd en verbonden, wat de analyse en ontwikkeling vergemakkelijkt.

![formulier-diagram.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Probeer meerdere formulieren en velden te maken en bekijk ze in de diagrammodus!

## Volgende stap

Sla het formulier op en ga verder met de volgende stap: velden aanmaken!

Bekijk [hier](/docs/academy/ui/fields) hoe u begint met het aanmaken van velden.