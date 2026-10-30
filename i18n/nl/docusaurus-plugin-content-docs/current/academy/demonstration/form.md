---
sidebar_position: 3
id: form
title: Formulier
---


# Formulier

In deze fase van de demo maak je het formulier **Taak** en configureer je het eerste gegevensveld.

:::info Referentie
Voor een meer gedetailleerde uitleg over formulieren, zie de [Interfacegids: Formulieren](/docs/academy/ui/forms).
:::

## Doel

Aan het einde van deze fase heb je:

- Een formulier met de naam **Taak**.
- Een gekoppelde tabel in de database.
- Een verplicht veld om de naam van de taak op te slaan.
- Een interface die klaar is om records aan te maken, te bewerken, te zoeken en te verwijderen.

## Vereisten

Controleer dat:

- De demo-applicatie al is aangemaakt.
- De configuratiefase al is voltooid.
- Je je in de ontwikkelomgeving van het platform bevindt.

## Het formulier aanmaken

1. Klik in de rechterbovenhoek op **Bouwen**.
2. Ga in het hoofdmenu naar **Beheer > Formulieren**.
3. Vul bij **Formuliertitel** `Taak` in.
4. Schakel bij **Tabelnaam** de optie **Auto** in.
5. Klik op **Opslaan**.

:::note
- **Formuliertitel** bepaalt de naam die in het zijmenu wordt weergegeven.
- **Tabelnaam** bepaalt de technische identificatie die in de database wordt gebruikt.
:::

Na het opslaan is het formulier **Taak** beschikbaar in het linkerzijmenu.

## Het eerste veld aanmaken

Met het formulier aangemaakt:

1. Klik in het zijmenu op **Taak**.
2. Vul bij **Weergavenaam** `Naam` in.
3. Controleer dat de technische naam automatisch is gegenereerd met kleine letters.
4. Schakel de optie **Primaire sleutel** in (uniek veld).
5. Schakel de optie **Niet null** in (verplicht veld).
6. Selecteer bij **Type** `text`.
7. Klik op **Opslaan**.

:::tip
- **Primaire sleutel** garandeert unieke waarden voor elk record.
- **Niet null** maakt het invullen verplicht.
- Het type `text` maakt het mogelijk om platte tekst op te slaan.
:::

## Het resultaat valideren

Open de weergaveomgeving en controleer dat:

- Het formulier **Taak** beschikbaar is.
- Het veld **Naam** verschijnt om in te vullen.
- Het mogelijk is om een nieuw record aan te maken.
- Het veld **Naam** verplicht is.

:::info Verwacht resultaat
Als de configuratie correct is, is het formulier klaar voor het aanmaken, bewerken, zoeken en verwijderen van records.
:::

## Volgende stappen

Ga verder naar de volgende fase **Database** om de demo-applicatie te verkennen en aan te passen.