---
id: implementing-tables-charts
title: Implementatie van tabellen en grafieken
sidebar_label: Tabellen en Grafieken
---

In deze tutorial maken we de interface en de logica van een eenvoudige applicatie, met de focus op datavisualisatie. De ontwikkeling van het project behandelt de volgende onderwerpen:

- Het aanmaken van **"Formulieren"**, **"Velden"** en **"Relaties"** voor het structureren van de database.
- Het bouwen van **"REST-webservices"** om de gegevens te leveren en de dynamische weergave van informatie in tabellen en grafieken in de applicatie mogelijk te maken, met de bibliotheken _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ en de afhankelijkheid _Chart.js_, naast de tabelcomponent van <a href="https://ant.design/" target="_blank">Ant Design</a>.

De volledige visuele structuur van het project wordt ontwikkeld met **HTML, JavaScript en React.js**.
Het is aanbevolen dat je basiskennis hebt van:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Als je vragen hebt over deze stappen, raadpleeg:**
   - [Interfacehandleiding: Formulieren](/docs/academy/ui/forms)
   - [Interfacehandleiding: Velden](/docs/academy/ui/fields)
   - [Interfacehandleiding: Relaties tussen formulieren](/docs/academy/ui/relationships-between-forms)
   - [Interfacehandleiding: REST-webservices](/docs/academy/explore/services)


## Eindproduct

Als je alle stappen in deze tutorial volgt, bouw je een functioneel dashboard in de werkruimte van Netuno, met:

* Een **gegevenstabel** met de registraties van werknemers en het totale aantal uren.
* Een **dynamisch en kleurrijk staafdiagram** dat dezelfde gegevens visueel weergeeft.

![Eindproduct](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Oplossingsarchitectuur

Voordat je code schrijft, is het belangrijk om te begrijpen hoe de onderdelen in elkaar passen. De oplossing is verdeeld in **4 lagen** die van boven naar beneden met elkaar communiceren:

```
DashboardContainer         (haalt de gegevens op van de server)
       │
       ▼
DataVisualisatie           (verdeelt de lay-out in twee kolommen)
       │
  ┌────┴────┐
  ▼         ▼
TabelLijst  StaafGrafiek   (geven de ontvangen gegevens weer)
```

:::tip
Het voordeel van deze architectuur is dat elke component **één enkele verantwoordelijkheid** heeft.
:::

## Stap 1: Gegevensstructuur

De eerste stap is het aanmaken van de formulieren, het configureren van de relatie ertussen en ze vullen met gegevens om later de tabel en de grafiek te genereren.

Dit is het diagram met de architectuur van de formulieren en de velden die je in je Netuno-omgeving moet repliceren:

![Eerste stap](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Belangrijk:** Hoewel het veld `id` in het diagram voorkomt, **hoef je het niet handmatig aan te maken**. Netuno genereert deze identificatie automatisch direct na het aanmaken van de tabel.

### Dashboard-sjabloon

Om de tabel en de grafiek weer te geven, hebben we een plek in de interface van je applicatie nodig. Netuno biedt al een basissjabloon voor het hoofddashboard.

Open je code-editor en zoek het bestand:

```text
/apps/mijnapp/server/templates/dashboard.html
```
*(Vergeet niet om **mijnapp** te vervangen door de echte naam van je applicatiemap.)*

Je ziet de volgende HTML-coderegel:

```html
<div id="app-dashboard"></div>
```

## Stap 2: Gegevensdienst

Nu de database klaar is en de HTML is voorbereid, moeten we de "boodschapper" maken (een REST-webservice). Deze is verantwoordelijk voor het ophalen van gegevens uit de database, het berekenen van het totale aantal uren per werknemer en het aanleveren van die informatie aan de tabel en de grafiek.


### Het servicebestand aanmaken

De services in Netuno staan in de map `server/services/`. Ga naar de map van je project en maak het bestand `werknemers.js` aan:

```text
/apps/mijnapp/server/services/werknemers.js
```
De **DashboardContainer** detecteert de taal van het dashboard en roept **/services/werknemers** aan wanneer het dashboard in het Nederlands staat, of **/services/workers** wanneer het in het Engels staat. Elke taal heeft zijn eigen servicebestand.

### De code schrijven

Deze code voert drie hoofdacties uit met de native Netuno-functies (**_db**, **_val** en **_out**):

- **Query _db.query:** Haalt alleen **actieve** werknemers uit de database en berekent de som van de gewerkte uren per werknemer.

- **Verwerking _val.list en _val.map:** Ordent het resultaat in een schone lijst met gestructureerde objecten.

- **Respons _out.json:** Stuurt de gegevens in JSON-formaat zodat de interface (React) ze kan lezen.

Open het bestand `werknemers.js` en plak de onderstaande code:

```javascript
// 1. Query, _db.query() voert de SQL uit en retourneert de lijst met gevonden records.
const dbRegistraties = _db.query(`
    SELECT DISTINCT
        werknemer.naam, SUM(DATEDIFF(HOUR, registratie.start, registratie.einde)) AS totaal
    FROM werknemer INNER JOIN registratie
        ON werknemer.id = registratie.werknemer_id
    WHERE werknemer.actief = true AND registratie.actief = true
    GROUP BY werknemer.naam
    ORDER BY totaal ASC
`);

// 2. Gegevensverwerking, _val.list() maakt een lege lijst om de verwerkte gegevens in op te slaan.
const lijst = _val.list();

// Doorloopt elke rij die door de database wordt geretourneerd
for (const dbRegistratie of dbRegistraties) {
    lijst.add(
        // _val.map() maakt een object met de velden die React gaat gebruiken
        _val.map()
            .set("naam", dbRegistratie.getString("naam"))  // naam → veld "naam"
            .set("totaal", dbRegistratie.getInt("totaal"))   // totaal aantal uren → veld "totaal"
    );
}

// 3. Respons
// Stuurt de definitieve lijst in JSON-formaat naar de React-interface.
_out.json(lijst);
```
:::tip
- **Let op de veldnamen:** De velden die hier als **"naam"** en **"totaal"** worden gedefinieerd, zijn precies dezelfde die de React-componenten in de volgende stappen gebruiken (`dataIndex: 'naam'` en `dataIndex: 'totaal'`). Ze moeten identiek zijn.

- **Over het filter actief = true:** De database heeft een kolom **actief** in de tabellen **werknemer** en **registratie**. Door alleen actieve registraties te filteren, zorgen we ervoor dat gearchiveerde of gedeactiveerde gegevens niet in de tabel en de grafiek verschijnen.
:::

## Stap 3: Frontend-omgeving (React)

Nu de backend (database en services) klaar is, gaan we de visuele interface voorbereiden.

Open de terminal en volg de onderstaande stappen:

#### 1. De basisafhankelijkheden installeren
Ga naar de map `ui` van je applicatie en installeer de pakketten.

```bash
npm install
```

#### 2. De grafiekbibliotheken installeren

Omdat het project grafieken toont, download je de bibliotheken die deze op het scherm tekenen:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Meerdere talen beheren

Installeer de bibliotheek voor het beheren van meerdere talen:

```bash
npm install react-intl
```

#### 4. De compiler starten (watch)

Nu alles is geïnstalleerd, wordt het scherm automatisch bijgewerkt telkens wanneer we een bestand opslaan:

```bash
npm run watch
```

#### 5. Componenten aanmaken
Om het project overzichtelijk te houden, maak je afzonderlijke componenten voor de Tabel en de Grafiek.

Ga naar de map `src/components/` van je applicatie en maak de mappen aan:

* Tabel: TabelLijst
* Grafiek: StaafGrafiek
* Container: DataVisualisatie

```text
/apps/naam_van_je_app/ui/src/components/TabelLijst/
/apps/naam_van_je_app/ui/src/components/StaafGrafiek/
/apps/naam_van_je_app/ui/src/containers/DataVisualisatie/
```

## Stap 4: Component TabelLijst

De component **TabelLijst** ontvangt de gegevens van de service en bouwt de kolommen automatisch op met **Ant Design** — een bibliotheek met kant-en-klare visuele componenten die al bij de Netuno-interface wordt geleverd.

Ga naar de map TabelLijst en maak een bestand `index.jsx` aan:

```text
/apps/naam_van_je_app/ui/src/components/TabelLijst/index.jsx
```

Open het bestand en plak de onderstaande code:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Tabelcomponent van Ant Design

import './index.less';

const berichten = 'dashboardcontainer.datavisualisatie.tabel';

function TabelLijst({ data = [] }) {
  // Definitie van de koppen en welk veld van het object in elke kolom wordt getoond
  const kolommen = [
    {
      title: <FormattedMessage id={`${berichten}.werknemers`} />, // Vertaalde titel
      dataIndex: 'naam',  // Veld "naam" uit de JSON die de service retourneert
    },
    {
      title: <FormattedMessage id={`${berichten}.totaal`} />,
      dataIndex: 'totaal', // Veld "totaal" uit de JSON die de service retourneert
    }
  ];

  return (
    <Table
      columns={kolommen}      // Structuur van de kolommen
      dataSource={data}      // De gegevens zelf (lijst met objecten)
      pagination={false}     // Geen paginering: alle registraties in één keer
      bordered={true}        // Met zichtbare randen in de cellen
    />
  );
}

export default TabelLijst;
```

 **De code begrijpen:**

Deze functionele component ontvangt de lijst `data` als parameter (prop) en geeft deze rechtstreeks door aan de `<Table>` van Ant Design.

De configuratie **kolommen** vertelt Ant Design welke titel in de kop **title** moet worden getoond en welk veld van het JSON-object in de cel `dataIndex` moet worden ingevuld. Ant Design regelt automatisch alle HTML, randstijlen en lay-out — je hoeft hiervoor geen handmatige CSS te maken.

** Bestand index.less:** Maak het bestand `index.less` in dezelfde map aan. Het mag voorlopig leeg blijven, want Ant Design levert al de basisstyling voor de tabel.


## Stap 5: Component StaafGrafiek

We maken een staafdiagram voor de visualisatie van de gegevens met de bibliotheek **react-chartjs-2**. Deze component ontvangt de gegevens, zet ze om naar het formaat dat Chart.js begrijpt, wijst kleuren toe en tekent de grafiek op het scherm.

Ga naar de map `StaafGrafiek` en maak een bestand met de naam `index.jsx` aan:

```text
/apps/naam_van_je_app/ui/src/components/StaafGrafiek/index.jsx
```
Open het bestand en plak de onderstaande code:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Component voor staafdiagram
import { Chart, registerables } from 'chart.js';  // Kern van Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const berichten = 'dashboardcontainer.datavisualisatie.grafiek';

// VERPLICHT: registreer alle onderdelen van Chart.js voordat je ze gebruikt.
// Zonder deze regel wordt de grafiek niet gerenderd en verschijnt er een fout in de console.
Chart.register(...registerables);

function StaafGrafiek({ data }) {
  const intl = useIntl();
  const [grafiekData, setGrafiekData] = useState(null); // Gegevens in Chart.js-formaat

  useEffect(() => {
    // Kleurenpalet van 7 kleuren voor de staven (cyclisch als er meer dan 7 items zijn)
    const kleuren = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const labels = [];
    const waarden = [];

    // Gegevensstructuur die Chart.js vereist
    const nieuweGrafiekData = {
      labels: [],       // Namen op de X-as (horizontaal)
      datasets: [
        {
          label: intl.formatMessage({ id: `${berichten}.label` }), // Vertaalde legenda
          data: [],           // Waarden op de Y-as (hoogte van de staven)
          backgroundColor: [] // Kleur van elke staaf
        }
      ]
    };

    // Doorloop de ontvangen gegevens en bouw de lijsten op
    for (const i in data) {
      labels.push(data[i].naam);   // Naam van de werknemer → X-as
      waarden.push(data[i].totaal);  // Totaal aantal uren → hoogte van de staaf

      // (i + 1) % 7: wanneer "i" 7 bereikt, gaat het terug naar 0 en herhalen de kleuren zich
      nieuweGrafiekData.datasets[0].backgroundColor.push(kleuren[(i + 1) % 7]);
    }

    nieuweGrafiekData.labels = labels;
    nieuweGrafiekData.datasets[0].data = waarden;

    setGrafiekData(nieuweGrafiekData); // In de state opslaan om opnieuw te renderen

  }, [data]); // Opnieuw uitvoeren telkens wanneer "data" verandert

  // Zolang de gegevens niet zijn verwerkt, wordt er niets gerenderd
  if (grafiekData == null) {
    return null;
  }

  return (
    <Bar data={grafiekData} />
  );
}

export default StaafGrafiek;
```
**De code begrijpen:**

Deze component heeft drie hoofdverantwoordelijkheden:

**Voorbereiding `useState`:** Start de component met state `null` om te wachten op de verwerking van de gegevens van de server.

**Gegevensverwerking `useEffect`:** Wanneer de gegevens via de prop `data` binnenkomen, wordt de Hook **useEffect** automatisch uitgevoerd. Deze definieert een kleurenpalet en gebruikt een **for**-lus om de informatie te splitsen: de namen van de werknemers gaan naar de labels van de X-as **labels**, de totalen aan uren bepalen de hoogte van de staven `data`, en aan elke staaf wordt cyclisch een kleur toegewezen.

**Tekenen op het scherm `return`:** Gebruikt de component `<Bar>` uit de bibliotheek om de grafiek te tekenen op basis van de verwerkte gegevens die in de state zijn opgeslagen.

**Bestand index.less:** Maak ook het bestand `index.less` in de map `StaafGrafiek` aan. Het mag voorlopig leeg blijven.


## Stap 6: Visuele lay-out DataVisualisatie

Nu de Tabel- en Grafiekcomponenten klaar zijn, hebben we een container nodig die ze naast elkaar op het scherm plaatst.

Ga naar de map **DataVisualisatie** en maak een bestand met de naam `index.jsx` aan:

```text
/apps/naam_van_je_app/ui/src/containers/DataVisualisatie/index.jsx
```

Open het bestand en plak de onderstaande code:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Vertaalbare titels per taal

import StaafGrafiek from "../../components/StaafGrafiek";
import TabelLijst from "../../components/TabelLijst";

import './index.less';

const berichten = 'dashboardcontainer.datavisualisatie';

function DataVisualisatie({ data = [] }) {
  return (
    <div>
      <div className="row">              {/* Bootstrap-rij */}

        {/* Linkerkolom: Tabel */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualisatie__paneel">
              <h3 className="panel-title">
                <FormattedMessage id={`${berichten}.tabel.titel`} />
              </h3>
            </div>
            <div className="panel-body">
              <TabelLijst data={data} />   {/* Geeft de gegevens door aan de Tabel */}
            </div>
          </div>
        </div>

        {/* Rechterkolom: Grafiek */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualisatie__paneel">
              <h3 className="panel-title">
                <FormattedMessage id={`${berichten}.grafiek.titel`} />
              </h3>
            </div>
            <div className="panel-body">
              <StaafGrafiek data={data} />    {/* Geeft dezelfde gegevens door aan de Grafiek */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataVisualisatie;
```
**De code begrijpen:**

Deze component fungeert als visuele organisator. Hij ontvangt de lijst `data` en verdeelt deze zonder enige transformatie over de twee child-componenten.

De klassen `row` en `col-lg-6` komen uit Bootstrap Grid en verdelen het scherm in tweeën: de linkerkolom bevat de Tabel en de rechterkolom de Grafiek. Op kleinere schermen (mobiels) stapelen ze automatisch.

De klassen `panel`, `panel-heading` en `panel-body` creëren het uiterlijk van een "kadertje met titel" voor elke component.

**Bestand index.less:** Maak ook het bestand `index.less` in deze map aan voor toekomstige styling van de panelen.

## Stap 7: Dashboardcontainer

We hebben al de services in de backend en de visuele componenten in de frontend. We hebben een container nodig die naar de server gaat, de gegevens ophaalt en doorgeeft aan **DataVisualisatie**.

Netuno genereert al automatisch de basisstructuur van het dashboard. Bewerk het bestaande bestand:

```text
/apps/naam_van_je_app/ui/src/containers/DashboardContainer/index.jsx
```

Vervang de inhoud van het bestand door de onderstaande code:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Officiële HTTP-client van Netuno

import { Spin, message } from 'antd';           // Laadindicator en fouten

import DataVisualisatie from "../DataVisualisatie"; // De visuele lay-out

import { useIntl } from 'react-intl';           // Ondersteuning voor meerdere talen

import './index.less';

const berichten = 'dashboardcontainer.datavisualisatie';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [werknemers, setWerknemers] = useState([]);   // State: lijst van werknemers
  const [laden, setLaden] = useState(false); // State: is het aan het laden?

  // Bij het openen van de pagina automatisch de gegevens ophalen
  useEffect(() => {
    laadWerknemers();
  }, []);

  const laadWerknemers = () => {
    setWerknemers([]);      // Eerdere gegevens wissen
    setLaden(true);    // Laadindicator activeren

    _service({
      // Detecteert de taal van het dashboard en roept de juiste service-URL aan
      url: intl.locale.indexOf('nl') == 0 ? '/services/werknemers' : '/services/workers',
      success: (response) => {
        setWerknemers(response.json); // De ontvangen gegevens in de state opslaan
        setLaden(false);
      },
      fail: (e) => {
        setLaden(false);
        console.error('Werknemersdienst mislukt.', e);
        message.error(intl.formatMessage({ id: `${berichten}.laadfout` }));
      }
    });
  };

  // Hiermee kan de oudercomponent (Dashboard) laadWerknemers() via ref aanroepen
  useImperativeHandle(ref, () => ({
    laadWerknemers
  }));

  return (
    <div ref={ref}>
      { laden == false
        ? <DataVisualisatie data={werknemers} /> // Gegevens klaar: dashboard tonen
        : <Spin/>                              // Nog aan het laden: laadwiel tonen
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**De code begrijpen:**

Deze component heeft drie hoofdverantwoordelijkheden:

**Beginstatus `useState`:** Maakt twee interne controles — **werknemers** (de lijst van de server) en **laden** (een signaal dat aangeeft of de gegevens nog worden opgehaald).

**Gegevens ophalen `_service`:** De functie **laadWerknemers** gebruikt de **_service** om de backend-service aan te roepen. Anders dan de native **fetch** van JavaScript beheert **_service** automatisch authenticatie, sessie en foutafhandeling. Hij detecteert ook de taal van het dashboard en kiest de juiste URL `/werknemers` voor NL, `/workers` voor EN.

**Verdeling en weergave `return`:** Terwijl de gegevens worden opgehaald, wordt het laadwiel **(Spin)** getoond. Wanneer de gegevens binnenkomen, wordt de lijst **werknemers** doorgegeven aan **DataVisualisatie**, die deze verdeelt over de Tabel en de Grafiek.

### Het dashboard stylen

Open het bestand `index.less` in de map `DashboardContainer` en plak de onderstaande code om de paneelkoppen te accentueren:

```text
/apps/naam_van_je_app/ui/src/containers/DashboardContainer/index.less
```

```css
.paneelAchtergrond {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**De code begrijpen:**

Deze klasse definieert een blauwe achtergrondkleur **(#3f54ba)** en een opvulgebied **(padding)** in de koppen.

Ze wordt gebruikt door de klassen `data-visualisatie__paneel` van `DataVisualisatie` om ervoor te zorgen dat de titels **Tabel** en **Grafiek** visueel opvallen.


## Stap 8: Het project compileren

Om ervoor te zorgen dat alle React-code door Netuno wordt gecompileerd:

* **Als je terminal open bleef** met `npm run watch` op de achtergrond: je wijzigingen worden automatisch gecompileerd telkens wanneer een bestand wordt opgeslagen.
* **Als je de terminal hebt gesloten** of het proces is gestopt: geen probleem. Open de terminal opnieuw, ga naar de map `ui` en voer het commando nog eens uit:

```bash
npm run watch
```

## Conclusie

In deze tutorial heb je essentiële vaardigheden opgedaan om met het Netuno-platform te werken, waarbij je de integratiecyclus van de gegevensstroom tussen de server en de gebruikersinterface onder de knie hebt.

Deze ontwikkeling behandelde de volgende onderwerpen:

- **Database:** Het visueel en efficiënt aanmaken en organiseren van tabellen en gegevensstructuren.

- **Backend REST:** Het ontwikkelen van services en bedrijfslogica om gegevens via een API beschikbaar te stellen.

- **Frontend met React:** Integratie en dynamische weergave van die gegevens in een moderne en responsieve interface.

Als je problemen hebt of verbeter suggesties, neem contact op.

Ons team en onze community staan klaar om te helpen.

Veel ontwikkelplezier!