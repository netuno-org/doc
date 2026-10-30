---
sidebar_position: 7
id: life-cycle
title: Gebeurtenissen van de levenscyclus van de interface
sidebar_label: Levenscyclusgebeurtenissen
---

## Gebruikersinterface (`ui`)

In de gebruikersinterface voor gegevensbeheer van Netuno is het mogelijk om code op maat te injecteren om aanpassingen en manipulaties op maat uit te voeren.

De ontwikkeling gebeurt in de code binnen de map `ui` in de hoofdmap van de applicatie.

### addPageLoad()

De pagina kan niet veilig worden gemanipuleerd totdat de applicatie "gereed" is.

De methode wordt aangeroepen wanneer de pagina is geladen.

```javascript
netuno.addPageLoad(() => {
   console.log('ik doe iets');
});
```

### addContentLoad()

Wanneer formulieren of rapporten worden geladen, wordt de interface gewijzigd met de respectieve inhoud, of het nu gaat om een gegevensformulier, een zoekopdracht of het filteren van gegevens van een rapport.

Zodra inhoud wordt geladen, wordt de methode aangeroepen en wordt de container doorgegeven die de inhoud bevat die wordt weergegeven.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('ik doe dingen wanneer het element bestaat');
   }
});
```