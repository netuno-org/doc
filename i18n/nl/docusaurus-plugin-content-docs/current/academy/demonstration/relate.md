---
sidebar_position: 5
id: relate
title: Gegevens relateren
description: Relateer taken en urenregistraties om te weten wie welke taak heeft uitgevoerd en hoeveel tijd eraan is besteed.
---

# Gegevens relateren

Maak een relatie tussen taken en urenregistraties om te weten **wie** **welke taak** heeft uitgevoerd en **hoeveel tijd** eraan is besteed.

Aan het einde van deze stap is het formulier **Registratie** gerelateerd aan de tabel **Taak**, waardoor je de bijbehorende taak direct in de lijst met registraties kunt bekijken.

## Voorwaarden

Controleer voordat je begint of je het volgende al hebt voltooid:

- Het aanmaken van het formulier **Taak** met het veld `naam`.
- Het aanmaken van het formulier **Registratie** met de basisvelden voor gewerkte uren.
- De configuratie van de bijbehorende tabellen in de **Database**.

:::tip
Voor meer details over het relateren van gegevens, raadpleeg de [Interfacegids: Relaties](/docs/academy/ui/relationships-between-forms).
:::

Tot nu toe heb je een taakbeheer en een urenregistratie gemaakt, maar elke lijst werkt nog los van elkaar.  

Het is belangrijk om ze aan elkaar te relateren, zodat elke urenregistratie duidelijk aangeeft welke taak door een medewerker is uitgevoerd en in welke periode.

In deze stap ga je:

- Een veld van het type `select` aanmaken in het formulier **Registratie**.
- Het veld configureren om het te relateren aan de tabel **Taak**.
- Enkele gegevens bijwerken om de relatie in de praktijk te zien werken.

## Veld van het type `select`

Voeg een veld toe waarmee je de taak kunt selecteren die bij elke urenregistratie hoort.

1. Open in de omgeving **Bouwen** het formulier **Registratie** en ga naar het beheer van velden.
2. Maak een nieuw veld aan met de volgende instellingen:
   - **Veldtitel**: `Taak`
   - **Kolomnaam**: `taak_id`
   - **Type**: `select`
3. Activeer de optie **Verplicht** om te garanderen dat elke registratie aan een taak is gekoppeld.
4. Laat de optie **Unieke waarden** uitgeschakeld, want er zullen veel registraties voor dezelfde taak zijn.

:::note
We raden de naam `taak_id` aan om een consistent naamgevingspatroon in het hele datamodel te behouden.
:::

## Het achtervoegsel `_id` gebruiken

De naam van het veld dat naar een andere registratie verwijst, moet eindigen op `_id`.  
Dit patroon maakt het makkelijker om te herkennen dat het veld een relatie met een andere tabel vertegenwoordigt en houdt het datamodel overzichtelijker.

:::warning
Vermijd generieke namen zoals `taak` of `ref_taak` voor relatievelden.  
Het standaardiseren met `_id` helpt verwarring te voorkomen wanneer je gegevens analyseert of integraties maakt.
:::

## De relatielink configureren

Configureer de **Link**, die verantwoordelijk is voor het relateren van het veld `taak_id` aan de taken­tabel.

1. Scroll in het zojuist aangemaakte veld (`taak_id`) naar het configuratiegedeelte **Link**.
2. Klik op **Toevoegen**.
3. In het venster dat opent:
   - Selecteer de optie **taak**.
   - Selecteer vervolgens het veld **naam**.
   - Sluit het venster om de wijziging toe te passen.

Na het voltooien wordt de **Link** als volgt gedefinieerd:

```text
taak:naam
```

Dit betekent dat:

- De relatie wordt gelegd met de tabel **taak**.
- In de interface de waarde van het veld **naam** van de taak wordt weergegeven bij het selecteren in het veld `Taak`.

Klik op de knop **Opslaan** om de configuratie van het veld op te slaan.

:::tip
Gebruik waar mogelijk een beschrijvend veld (zoals `naam`) om de gerelateerde informatie weer te geven in plaats van een technische of numerieke identificatie.
:::

## Registraties bijwerken

Nu het relatieveld is geconfigureerd, pas je de gegevens aan om het resultaat te bekijken.

1. Ga naar de weergave van het formulier **Registratie**.
2. Merk op dat de resultatentabel nu een nieuwe kolom heeft met de naam **Taak**, die in eerste instantie leeg is.
3. Bewerk enkele registraties:
   - Klik op een rij in de resultatentabel om het bewerkingsformulier te openen.
   - Selecteer in het veld **Taak** de bijbehorende taak.
   - Klik op **Opslaan** om op te slaan.

**Na het opslaan:**

- De kolom **Taak** in de resultatentabel toont voortaan de naam van de bijbehorende taak.
- Elke **Registratie** is duidelijk gerelateerd aan een **Taak**, wat een volledigere analyse van de bestede tijd per activiteit mogelijk maakt.

:::note
Als er veel registraties zonder gedefinieerde taak zijn, overweeg dan om de bijwerking in batches uit te voeren of een tijdelijke standaardtaak te definiëren, in overeenstemming met je gegevensbeleid.
:::

### Verwacht resultaat

De lijst van **Registratie** moet het volgende tonen:

- Een kolom **Taak** gevuld met de namen van de bijbehorende taken.
- Elke rij vertegenwoordigt een urenregistratie met de bijbehorende taak, waardoor het eenvoudiger is om te identificeren waar de tijd in is geïnvesteerd.

## Volgende stappen

In het volgende onderwerp zie je hoe je een **Service** maakt om deze gegevens beschikbaar te stellen en ze in andere delen van de applicatie te gebruiken, zoals rapporten of aangepaste interfaces.