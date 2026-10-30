---
sidebar_position: 4
id: queries-interface
title: Query-interface
---


De Query-tool van Netuno is een krachtige functie waarmee je via SQL (Structured Query Language) direct met de database van de applicatie kunt communiceren.

Deze functionaliteit is essentieel om bedrijfslogica te testen, opgeslagen informatie te valideren en de basis te leggen voor rapporten of complexe interfacecomponenten. Netuno ondersteunt momenteel drie databasebeheersystemen: **PostgreSql, H2 Database en MySQL**.

## 1 - Sectie Query

Ga in de modus "Bouwen" in het zijmenu naar het gebied "Beheer" en klik op de sectie "Query".

![query-queries-interface-nl.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Opdrachtgebied

Dit gebied is de omgeving voor directe interactie met de database van het project. Hier kun je opdrachten uitvoeren om gegevens nauwkeurig en direct te raadplegen, op te zoeken en te analyseren.

Zorg ervoor dat de gebruikte syntaxis compatibel is met de database die in je Netuno-omgeving is geconfigureerd.

![query-database-query-area-nl](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Validatiegebied

Het validatiegebied geeft directe feedback over de syntaxis en de uitvoering van je code.

- **Succes (groen):** Wanneer de query zonder syntaxis- of structuurfouten wordt uitgevoerd, wordt het bericht met een groene achtergrond weergegeven. Dit geeft aan dat de gegevens zijn verwerkt en klaar zijn voor weergave.

![query-validation-area-success-nl-at.png](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Mislukking of fout (rood):** Als er een belemmering is bij de uitvoering (zoals een syntaxisfout, onjuiste kolomnaam of ontbrekende machtiging), wordt het bericht met een rode achtergrond weergegeven. Naast de kleur toont het systeem ook de technische foutlog om bij de diagnose te helpen.

![query-validation-area-fail-nl-at.png](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Resultaatgebied

Dit is de plek waar de informatie die bij de database is opgevraagd, gestructureerd wordt weergegeven. Je kunt er de inhoud van de tabellen bekijken en controleren of de logica van je query de verwachte records retourneert.

![query-result-area-nl.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Actieknoppen

Deze sectie beschrijft de beschikbare hulpmiddelen om je SQL-scripts uit te voeren, op te slaan en te beheren, waardoor de workflow en het hergebruik van complexe queries worden geoptimaliseerd.

Het maakt niet alleen realtime uitvoering van opdrachten mogelijk, maar ook slim productiviteitsbeheer via historische registraties en bibliotheken met opgeslagen scripts.

![query-action-buttons-nl-at.png](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Knop - Uitvoeren

- **Functie:** Verstuurt het script in het "Opdrachtgebied" om door de database te worden verwerkt.

- **Feedback:** Na uitvoering toont het systeem een succesbericht (in groen) en vult het automatisch het "Resultaatgebied" met de opgevraagde gegevens.

### 5.2 Knop - Geschiedenis

- **Functie:** Registreert de recent uitgevoerde queries, met weergave van de uitvoeringstijd (in milliseconden) en de registratie van "datum/tijd" van elke actie.

- **Snel ophalen:** Wanneer je op een item in de geschiedenislijst klikt, wordt het bijbehorende script opnieuw in het "Opdrachtgebied" ingevoegd om te worden uitgevoerd of bewerkt.

![query-command-history-button-nl-at.png](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Knop - Opslaan

**Functie:** Hiermee kun je nuttige scripts opslaan en omzetten in permanente modellen. Dit is handig voor complexe queries die regelmatig moeten worden uitgevoerd.

**Stap voor stap opslaan:**

- Klik met het script klaar in de editor op Opslaan.

- Voer in het modale venster "Opdracht opslaan" een duidelijke "Naam" in om de functie van de query te identificeren (bijv. "Producten filteren op prijs").

- Klik op de knop Opslaan in de modal om het opslaan te bevestigen.

![query-save-command-button-nl-at.png](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Knop - Registratie

**Functie:** Hiermee kun je alle eerder opgeslagen scripts weergeven.

- **Script laden:** Klik op het gewenste script om het aan het "Opdrachtgebied" toe te voegen.

- **Verwijderen:** Gebruik het prullenbakpictogram naast elke registratie om deze na bevestiging definitief te verwijderen.

![query-registered-commands-button-nl-at.png](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)