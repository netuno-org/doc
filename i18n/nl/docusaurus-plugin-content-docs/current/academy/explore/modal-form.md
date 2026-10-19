---
id: modal-form
title: Modalformulier
---

Het maken en beheren van formulieren in modale vensters.
## Inleiding

De modal is een UI-functie waarmee je een formulier kunt openen zonder dat de gebruiker de huidige pagina hoeft te verlaten.

Het gebruik van modals verbetert de gebruikerservaring (UX) aanzienlijk, doordat **CRUD-bewerkingen (aanmaken, lezen, bijwerken, verwijderen)** kunnen worden uitgevoerd zonder de pagina opnieuw te laden of de context van het huidige scherm te verliezen.

Netuno beheert automatisch de communicatie met de backend en het injecteren van de benodigde HTML.


#### Vereisten

Om de voorbeelden te implementeren, heb je het volgende nodig:

- Toegang tot de ontwikkelomgeving van je Netuno-applicatie.
- Een correct geconfigureerd formulier in het beheerpaneel (backoffice) van Netuno.
- Basiskennis van JavaScript en het afhandelen van gebeurtenissen in de DOM.

In de volgende voorbeelden gebruiken we een generiek formulier met de naam **"test"**.

Als je vragen hebt over deze stappen, raadpleeg: [Formulieren](/docs/academy/ui/forms).

## Basisstructuur

Het maken en beheren van modals in Netuno is gecentraliseerd in het object `netuno.modal`.

De methode **netuno.modal.create()** maakt de basisstructuur van de modal in de interface. Deze ontvangt een configuratieobject met de volgende eigenschappen:

- **name (String):** De naam van het formulier (aangemaakt in de backoffice) dat als basis voor de modal dient.
- **callback (Function):** Functie die wordt uitgevoerd zodra de structuur van de modal in de DOM is geïnjecteerd (maar voordat deze wordt weergegeven); ontvangt als parameter het aangemaakte modalelement.

### Callbackfunctie

Binnen de callbackfunctie moet je de status (modus) van het formulier bepalen met de ingebouwde laadfuncties:

- **Lijstmodus - `netuno.loadForm()`**: Rendert de zoek- en lijsttabel met de records van dat formulier.

- **Bewerk-/aanmaakmodus - `netuno.loadFormEdit()`**: Rendert de invoervelden van het formulier. Kan worden gebruikt om een nieuw record in te voegen of een bestaand record te bewerken.

## Implementatie
Hieronder lichten we drie van de meest voorkomende gebruiksscenario's toe.

### 1. Lijstmodus

`netuno.loadForm()` wordt gebruikt wanneer je wilt dat de gebruiker alle gegevens van een formulier ziet in de vorm van een zoektabel (grid).

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Zoekt de interne container die bedoeld is om het formulier te ontvangen
    let formulierContainer = modal.find('[netuno-form]');
    // 2. Injecteert de gegevenslijst van het formulier in de container
    netuno.loadForm(formulierContainer); 
    // 3. Toont de modal aan de gebruiker
    netuno.modal.show(modal);
  }
});
```
### 2. Aanmaakmodus

`netuno.loadFormEdit()` wordt gebruikt voor knoppen van het type "Nieuw toevoegen". Opent het formulier leeg, klaar voor gegevensinvoer.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formulierContainer = modal.find('[netuno-form]');
    // Laadt het formulier in invoegmodus (nieuw record)
    netuno.loadFormEdit(formulierContainer); 
    netuno.modal.show(modal);
  }
});
```

:::info
Wanneer je `netuno.loadFormEdit()` gebruikt zonder een **ID** door te geven, begrijpt Netuno dat je het "bewerkscherm" vanaf nul wilt gebruiken. Het laadt de interface met lege invoervelden, klaar voor het aanmaken van een nieuw record. In dit scenario activeert Netuno intern de gebeurtenis `netuno:new`.
:::

### 3. Bewerkmodus

Als je wilt dat de modal een specifiek record laadt om te wijzigen, moet je de **UID** of **ID** van het record als tweede parameter doorgeven aan de laadfunctie.

```jsx
// Voorbeeld: het record met ID 1234 bewerken
const recordId = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formulierContainer = modal.find('[netuno-form]');
    // Injecteert de gegevens van record 1234 in de velden van het formulier
    netuno.loadFormEdit(formulierContainer, recordId); 
    netuno.modal.show(modal);
  }
});
```


## Gebeurtenissen

De formuliercontainer (`[netuno-form]`) zendt aangepaste gebeurtenissen uit die de levenscyclus van de gebruikersinteractie volgen.

Het wordt aanbevolen deze gebeurtenissen te gebruiken om specifieke bedrijfslogica van je frontend te activeren (zoals tabellen op de achtergrond bijwerken, waarschuwingen tonen, enz.).

| GEBEURTENISTYPE   | BESCHRIJVING    |
| ------- |--------------|
| ` netuno:new` | Wordt geactiveerd wanneer het scherm voor het aanmaken van een nieuw item wordt weergegeven. |
| `netuno:edit` | Wordt geactiveerd wanneer het scherm voor het bewerken van een bestaand item wordt weergegeven. |
| `netuno:save` | Wordt geactiveerd wanneer een nieuw item wordt toegevoegd. |
| `netuno:back` | Wordt geactiveerd na het klikken op de terugknop. |
| `netuno:delete` | Wordt geactiveerd na het verwijderen van een item. |


### Voorbeeld: Meerdere gebeurtenissen onderscheppen

In dit productieklare voorbeeld maken we de modal aan en voegen we *listeners* toe om het succes van de gebruikersacties te volgen:

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formulierContainer = modal.find('[netuno-form]');
    
    // De aanmaakinterface monitoren
    formulierContainer.on('netuno:new', function(gebeurtenis) {
       console.info("Aanmaakinterface geladen.");
    });

    // Een geslaagde opslag monitoren
    formulierContainer.on('netuno:save', function(gebeurtenis) {
       console.success("Het record is succesvol opgeslagen!");
       // Voorbeeld: de modal automatisch sluiten na opslaan
       netuno.modal.hide(modal); 
    });

    // De modal in lijstmodus renderen en weergeven
    netuno.loadForm(formulierContainer);
    netuno.modal.show(modal);
  }
});
```
Als je problemen ondervindt of verbeter suggesties hebt, neem contact op.
Ons team en onze community staan klaar om te helpen.

Veel ontwikkelplezier!