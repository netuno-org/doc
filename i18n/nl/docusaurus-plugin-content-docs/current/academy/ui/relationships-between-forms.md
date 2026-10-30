---
sidebar_position: 5
id: relationships-between-forms
title: Relaties tussen formulieren
sidebar_label: Relaties
---

## Relaties tussen formulieren maken

Het maken van relaties tussen formulieren is een essentiële functie om informatie op een slimme manier te organiseren. Door formulieren met elkaar te verbinden, voorkom je dat gegevens gedupliceerd moeten worden en blijft je applicatie samenhangend, schaalbaar en eenvoudig te onderhouden.

Een van de grote voordelen van Netuno is de mogelijkheid om automatisch het diagram van het gegevensmodel te genereren.

Relaties bepalen hoe gegevens uit verschillende tabellen met elkaar omgaan. Deze verbinding komt rechtstreeks terug in de gebruikersinterface (UI), waardoor velden in het ene formulier automatisch informatie uit een ander formulier kunnen ophalen.

**Eenvoudig diagram:** Ideaal om de eerste logica van kleine modules te valideren.

![eenvoudig-diagram-sjabloon.png](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Complex diagram:** Demonstreert de robuustheid van de tool in grootschalige applicaties, door meerdere afhankelijkheden en gegevensstromen in kaart te brengen.
 
![complex-diagram-sjabloon.png](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Een relationeel veld van het type Select maken

Het veld Select maakt een relatie tussen twee formulieren. Hiermee kun je een waarde uit een vervolgkeuzelijst (dropdown) kiezen in plaats van deze handmatig te typen. Deze lijst wordt gevuld met gegevens die al in een ander formulier bestaan.

We gebruiken de formulieren **Voertuigen** en **Kleur** als voorbeeld. 

**Wanneer gebruiken?** Gebruik select wanneer je een relatie van het type "veel-op-een" (N-1) hebt.

**Voorbeeld:** Veel voertuigen kunnen één kleur hebben. In plaats van elke keer "Blauw" te typen, selecteer je "Blauw" uit een lijst met al geregistreerde kleuren.

- **Doelformulier:** Voertuig (waar we het select-veld gaan maken).
- **Bronformulier:** Kleur (waar de gegevens voor de kleurenlijst vandaan komen).


### Vereisten
Voordat je begint, controleer je of:

- Beide formulieren (**Voertuig** en **Kleur**) al in Netuno zijn aangemaakt. Voor meer details, zie onze handleiding over [Formulieren maken](/docs/academy/ui/forms).

- Het bronformulier (**Kleur**) al enkele geregistreerde records bevat. (Bijv. "Blauw", "Rood", "Zilver"). Voor meer details, zie onze handleiding over [Velden maken](/docs/academy/ui/fields).

### De Select maken en configureren

Voeg het veldtype **select** toe aan het formulier **Voertuig**, zodat het gegevens uit het formulier **Kleur** kan "ophalen".

![select-veld-maken-en-configureren.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Open het doelformulier

- Ga in de Backoffice naar het veldenbeheer en open de bewerking van het formulier **Voertuig**.
 
#### 2 - Maak het nieuwe veld

- Klik op "Nieuw veld maken".

#### 3 - Stel de veldtitel en kolomnaam in

- **Veldtitel:** Geef een gebruiksvriendelijke naam die aan de gebruiker wordt getoond. **Voorbeeld:** Kleur van de auto.
- **Kolomnaam:** Dit is de technische naam van het veld in de database.

**Goede praktijk:** Gebruik bij het maken van een relationeel veld altijd het achtervoegsel `_id` in de **Kolomnaam**. Dit maakt duidelijk dat deze kolom niet de tekst "Blauw" opslaat, maar de referentie-ID naar het record "Blauw" in het formulier **Kleur**. **Voorbeeld:** `kleur_auto_id`.

#### 4 - Kies het gegevenstype

- Selecteer in het veld **Type** de optie _`select - select`_ in de lijst.

#### 5 - Configureer de koppeling (de relatie)

![de-koppeling-configureren.png](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- Wanneer je _`select`_ kiest, wordt een nieuw veld met de naam **Koppeling** weergegeven.
- Klik op de knop **Configureren**.
- Er wordt een modaal venster (modal) geopend met al je formulieren. Dit is het moment om het bronformulier te kiezen.
- Selecteer het formulier dat de gegevens bevat die je wilt tonen. Klik in ons voorbeeld op **kleur - Kleur**.
- Klik na selectie op de knop **Sluiten** in het modale venster.

#### 6 - Sla de wijzigingen op

- Klik op de knop **Opslaan** in het veldenbeheer om al je instellingen toe te passen.

### Resultaat

Klaar! Nu, in de weergavemodus, wanneer je een record toevoegt of bewerkt in het formulier **Voertuig**, is het veld "Kleur van de auto" een vervolgkeuzelijst (dropdown) die alle kleuren toont die in je formulier **Kleur** zijn geregistreerd.

## Een relationeel veld van het type Multiselect maken

Het veld **Multiselect** maakt een "veel-op-veel"-relatie (N-M). Hiermee kun je meerdere items uit een lijst in één veld selecteren.

We gebruiken de formulieren **Persoon**, **Functie** en **Persoon-Functie** als voorbeeld.

**Wanneer gebruiken?** Gebruik multiselect wanneer een record aan meerdere andere records gekoppeld kan zijn, en omgekeerd.
**Voorbeeld:** Veel personen kunnen veel functies hebben.

- Een persoon (bijv. "Ana") kan de functies "Beheerder" en "Manager" hebben.
- De functie "Manager" kan aan meerdere personen zijn gekoppeld (bijv. "Ana", "Bruno" en "Thiago").

Om dit te laten werken, hebben we drie formulieren nodig:

- **Formulier "Ouder" (Persoon):** Waar het veld _`multiselect`_ zichtbaar is voor de gebruiker.
- **Formulier "Bron" (Functie):** Waar de opties van de lijst vandaan komen (bijv. "Beheerder", "Manager").
- **Formulier "Koppeling" (Persoon-Functie):** Een "brugformulier" dat de verbindingen tussen **Persoon** en **Functie** opslaat.

### Vereisten
Voordat je begint, controleer je of:

- Het "ouderformulier" (**Persoon**) al is aangemaakt en enkele records bevat (bijv. "Ana", "Bruno", "Lucas").
- Het "bronformulier" (**Functie**) al is aangemaakt en enkele records bevat (bijv. "Beheerder", "Manager", "Consultant").

### De Multiselect maken en configureren 
De configuratie gebeurt in 4 stappen:

### Stap 1: het koppelformulier (Persoon-Functie) maken
Eerst maken we het "brugformulier".

1 - **Ga naar Beheer > Formulieren** en klik op "Nieuw formulier maken".

2 - **Formuliertitel:** Persoon-Functie.

3 - **Tabelnaam:** persoon_functie (of vergelijkbaar).

4 - **Belangrijk:** Selecteer in het veld **Ouder** het belangrijkste "ouderformulier", in dit geval **Persoon**. Hierdoor wordt **Persoon-Functie** een subformulier.

5 - Klik op **Opslaan**.

![ouderformulier-voor-de-koppeling-maken.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Stap 2: de velden van het koppelformulier configureren

Voeg de "brugvelden" toe aan het formulier **Persoon-Functie**.

1 - Ga naar het veldenbeheer van het formulier **Persoon-Functie** dat je zojuist hebt gemaakt.

2 - Voeg twee velden van het type select toe: één dat naar **Persoon** verwijst en één naar **Functie**.

**Veld 1 (koppeling naar Persoon):**

![koppelingsveld-voor-persoon.png](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Veldtitel:** Naam van de persoon
- **Kolomnaam:** `naam_persoon_id` (volgens de **_id**-conventie)
- **Type:** `select - select`
- **Koppeling:** Klik op **Configureren** en selecteer het hoofdveld van het formulier **Persoon**, bijvoorbeeld: `persoon:naam`.
- Klik op **Opslaan**.

**Veld 2 (koppeling naar Functie):**

- **Veldtitel:** Functie van de persoon. 
- **Kolomnaam:** `functie_persoon_id`.
- **Type:** `select - select`.
- **Koppeling:** Klik op **Configureren** en selecteer het hoofdveld van het formulier **Functie**, bijvoorbeeld: `functie:functie_id`.
- Klik op **Opslaan**.

![veldkoppeling-naar-persoon-functie.png](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Stap 3: het multiselect-veld in het "ouderformulier" maken

Nu het koppelformulier (**Persoon-Functie**) klaar is, kunnen we terug naar het formulier **Persoon** om het uiteindelijke veld te maken.

1 - Ga naar het veldenbeheer van het formulier **Persoon**.

2 - Klik op "Nieuw veld maken".

3 - **Veldtitel:** Persoon Functie.

4 - **Kolomnaam:** _`persoon_functie_id`_.

5 - **Type:** _`multiselect - multiselect`_.


### Stap 4: het multiselect-veld configureren

Wanneer je het type _`multiselect`_ selecteert, verschijnen er twee nieuwe configuratievelden: **Referentie** en **Koppeling**.

#### 1 - Referentie (Waar moet de relatie worden opgeslagen?)

 - **Dit veld vertelt Netuno:** "Welk veld van het koppelformulier verwijst terug naar mij (**Persoon**)?"
 - Klik op **Configureren**.
 - Selecteer het koppelformulier (**Persoon-Functie**) en het veld dat je in Stap 2 hebt gemaakt (Veld 1). **Voorbeeld:** _`persoon_functie:naam_persoon_id`_.

#### 2 - Koppeling (Waar komen de opties vandaan?)

 - **Dit veld zegt:** "Welk veld van het koppelformulier verwijst naar de opties (**Functie**)?"
 - Klik op **Configureren**.
 - Selecteer het koppelformulier (**Persoon-Functie**) en het veld dat je in Stap 2 hebt gemaakt (Veld 2). **Voorbeeld:** _`persoon_functie:functie_persoon_id`_.
  
#### 3 - Sla de wijzigingen op

- Klik op de knop **Opslaan** in het veldenbeheer om al je instellingen toe te passen.

![multiselect-veld-configureren.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Resultaat

Klaar! Nu, in de weergavemodus, wanneer je een record toevoegt of bewerkt in het formulier **Persoon**, wordt het veld "Persoon Functie" weergegeven als een meerkeuzelijst. Je kunt meerdere functies uit de lijst kiezen (die uit het formulier **Functie** komen), en Netuno slaat deze associaties automatisch op in het formulier **Persoon-Functie**.

Als je vragen hebt, neem contact met ons op via de community en de andere kanalen die onderaan deze pagina beschikbaar zijn.

Veel ontwikkelplezier!