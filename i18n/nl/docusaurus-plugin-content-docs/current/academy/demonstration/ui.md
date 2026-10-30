---
sidebar_position: 7
id: ui
title: Interface & Ontwerp
---

## Inleiding

De ontwikkeling van de frontend, oftewel wat visueel door de browser wordt verwerkt, vindt plaats binnen de map **ui**.

Standaard bevindt zich in deze map de ontwikkelomgeving die is gebouwd met <a href="https://reactjs.org/" target="_blank">ReactJS</a>, <a href="https://ant.design/" target="_blank">Ant.Design</a> en <a href="http://lesscss.org/" target="_blank">Less</a>, en gecompileerd met <a href="https://vite.dev/" target="_blank">Vite</a>.

Hoewel de standaardomgeving voor deze technologieën is geconfigureerd, omdat ze tegenwoordig veel worden gebruikt, is deze niet tot deze technologieën beperkt.

Als u een andere technologie wilt gebruiken, zoals **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, enz., hoeft u alleen maar in de map `📂 ui` de configuraties van `📂 package.json` en `📂 vite.config.js` aan te passen aan de technologieën die u verkiest.

> Meer over de [geïntegreerde en gecentraliseerde terminal](/docs/academy/explore/centralized-terminal).

## Vereisten

Voordat u begint, is het belangrijk te controleren of [Bun](https://bun.sh/) is geïnstalleerd.

> Bekijk hoe u [Bun installeert](/docs/academy/website/bun).

Om beter te begrijpen hoe de gebruikersinterface werkt, raden we het volgende aan:

- [Meer over de front-end UI-laag.](/docs/academy/ui/ui-layer)

## De service uitbreiden

Nadat de service **medewerkers** is aangemaakt in `📂 server/services/medewerkers.js` via Visual Studio Code, die de informatie als <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> beschikbaar maakt op het adres:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/medewerkers</a>

De volgende stap is deze uit te breiden om de gegevens in de browserinterface te tonen.

Met deze gegevens gaan we ze in een tabel en een grafiek presenteren.

Ervan uitgaande dat u Visual Studio Code of een andere teksteditor hebt geopend met de applicatie **Demo**.

Open het volgende bestand in de editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

We gaan deze bestaande code aanpassen.

### De `state` voorbereiden

Helemaal aan het begin van de component `DashboardContainer`, binnen de `function`, staat de definitie van de _state_.

Voeg een nieuwe invoer toe om de gegevens van de medewerkers als volgt op te slaan:

```jsx
            // 👇 Voeg hieronder de nieuwe coderegels toe:
            const [medewerkers, setMedewerkers] = useState([]);
            const [laden, setLaden] = useState(false);
```

Met andere woorden, voeg de nieuwe statusregel `const [medewerkers, setMedewerkers] = useState([]);` toe.

### Functie `laadMedewerkers` maken

Verderop ziet u een functie met de naam `laadMedewerkers`; deze functie haalt de gegevens op van de medewerkers die momenteel op het dashboard verschijnen.

> Deze functie wordt gebruikt om de gegevens van de medewerkers te laden.

Voeg de onderstaande code in:

```jsx
    /**
    *** 🚀 Laadt de gegevens van de medewerkers.
    ***    Door de service uit te voeren:
    **     http://localhost:9000/services/medewerkers
    */
    const laadMedewerkers = () => {
        setMedewerkers([]);
        setLaden(true);
        _service({
            url: intl.locale.indexOf('nl') == 0 ? '/services/medewerkers' : '/services/workers',
            success: (response) => {
                setMedewerkers(response.json);
                setLaden(false);
            },
            fail: (e) => {
                setLaden(false);
                console.error('Fout in de medewerkersservice.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

Wat de bovenstaande code doet, is de gegevens van de **medewerkers** doorgeven aan de _state_ van de component in <a href="https://reactjs.org/" target="_blank">ReactJS</a>, door de service **medewerkers** uit te voeren. Wanneer deze de gegevens als <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> ontvangt, slaat hij ze op in de _state_ via `setMedewerkers`.

De uiteindelijke code moet als volgt gestructureerd zijn:

```jsx
    useEffect(() => {
        ...
    }, []);

    const laadMedewerkers = () => {
        ...
    }

    return ( 
        ...
    );
```

> Waarbij de `...` de verschillende weggelaten coderegels binnen de respectieve blokken zijn.

### De hook `useEffect` uitvoeren

Nu moet onze hook `useEffect` nog worden uitgevoerd wanneer de component wordt "gemount"; deze hook wordt uitgevoerd wanneer de component in de visuele weergave van de browser wordt opgebouwd.

Hiervoor hoeft u alleen maar iets hoger de coderegel `laadMedewerkers();` binnen de hook `useEffect` toe te voegen, als volgt:

```jsx
    useEffect(() => {
        laadMedewerkers();
    }, []);
```

Deze nieuwe coderegel roept de functie aan die de service <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/medewerkers</a> uitvoert, die eerder is aangemaakt, om de gegevens als JSON op te halen en ze op te slaan in de `state` (_status_) van de component, zodat ze in de return (_weergave_) kunnen worden gepresenteerd.

### Compilatie

**Sla** het bestand op en merk meteen daarna op dat in de **terminal** waar Netuno draait het resultaat van de nieuwe compilatie van de **ui** verschijnt, met nieuwe regels van het compilatieresultaat van <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

De verwachte output in de **terminal** moet ongeveer als volgt zijn:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

Als er een compilatiefout optreedt, verschijnt de aanduiding van het probleem in de **terminal**.

Tot hier hebben we de consumptie van onze service **medewerkers** uitgevoerd, waarbij de verkregen gegevens worden opgeslagen in de `state` van de component `DashboardContainer`, die daardoor beschikbaar blijft voor gebruik in de `return`.

## De gegevens presenteren

Nu moeten de gegevens nog visueel worden gepresenteerd in de interface die de gebruiker in de browser ziet.

Om de gegevens in de browser te presenteren, moeten we de `return` aanpassen, die het visuele uiterlijk van de componenten in <a href="https://reactjs.org/" target="_blank">ReactJS</a> verwerkt.

Aan het einde van de code van `DashboardContainer` vindt u: `return ( ... );`

We gaan deze aanpassen door slechts nog één coderegel toe te voegen om nog een component `DataVisualization` te bevatten dat de gegevens met betrekking tot de **medewerkers** presenteert; de code moet als volgt worden:

```jsx
    // 🔍 Zoek in de bestaande code naar:
    return (
    <div ref={ref}>
      { laden == false ?
        <DataVisualization data={medewerkers} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Merk op dat alleen de onderstaande regel moet worden toegevoegd:

```jsx
<DataVisualization data={medewerkers} />
```

Zo ontvangt `DataVisualization` de gegevens die via JSON zijn verkregen via de service **medewerkers** en die in de `state` zijn opgeslagen.

### Definitieve compilatie

**Sla** het bestand op met alle tot nu toe aangebrachte wijzigingen.

Controleer of er geen fouten in de output van de **terminal** staan.

Vernieuw nu de pagina in de browser en u zou het eindresultaat moeten zien, of klik alternatief op de onderstaande link:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Als het dashboard leeg verschijnt, betekent dit dat er fouten in de code zitten.
>
> Controleer in de console van de **browser** bij de **ontwikkelaarstools** of er fouten zijn.

## Meer weten 👇

Snelle introductie tot <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Een gids voor beginners in ReactJS.</a>