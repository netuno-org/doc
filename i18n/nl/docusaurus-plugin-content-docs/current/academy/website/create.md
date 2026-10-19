---
sidebar_position: 2
id: create
title: Aanmaken met React
sidebar_label: Aanmaken met React
---

Dit aanmaakproces kan ook in andere contexten worden toegepast, bijvoorbeeld om elk type React-project
aan te maken; pas in dat geval de naam en de map waarin de opdrachten worden uitgevoerd dienovereenkomstig aan.

Het uitgangspunt is dat de weblaag wordt aangemaakt, oftewel de frontend van onze Netuno-applicatie.

Daarom wordt ervan uitgegaan dat binnen de Netuno-applicatie de map `website` wordt aangemaakt. Dat is de standaardnaam voor de frontendlaag,
maar u kunt ook elke andere gewenste naam gebruiken.

## Vereisten

Netuno moet geïnstalleerd zijn:

- [Installatie van Netuno.](/docs/get-started/installation)

Vanwege de betere prestaties en andere voordelen moet Bun geïnstalleerd zijn:

- [Bun installeren.](/docs/academy/website/bun)

## Aanmaken

Om een React-applicatie binnen een Netuno-applicatie aan te maken, noemen we deze gewoonlijk `website`.

Ga met de **terminal** naar de **hoofdmap van uw** Netuno-**applicatie**, die normaal gesproken in de volgende map staat:

- `netuno/apps/MIJN_APP`

> Waarbij `MIJN_APP` de naam van de Netuno-applicatie is.

Voer de opdracht uit:

```shell
bun create vite
```

Daarna verschijnt de vraag: `Project name:`

Typ `website` en druk op `ENTER`.

Daarna verschijnt de vraag: `Select a framework:`

Gebruik de pijltjestoetsen en druk op de pijltjestoets naar beneden tot de optie `React` is geselecteerd; druk vervolgens op
`ENTER`.

Ten slotte de volgende vraag: `Select a variant:`

Gebruik de pijltjestoetsen en druk op de pijltjestoets naar beneden tot de optie `JavaScript` is geselecteerd; druk vervolgens op
`ENTER`.

Deze opdracht maakt een nieuwe map met de naam `📂 website` aan, waarin de frontend met React zich bevindt.

Nadat u de frontend met React hebt aangemaakt, voert u het volgende uit om de afhankelijkheden te installeren:

```shell
cd website
bun install
```

Open de map van uw Netuno-applicatie in uw favoriete editor (zoals VSCode, WebStorm, enz.) en
ga naar de aangemaakte map `website`.

## Uitvoeren

Nu kunt u de frontendserver met React starten met de opdracht:

```shell
bun run dev
```

Hierdoor is de frontend beschikbaar op het adres [http://localhost:5173/](http://localhost:5173/); meestal verschijnt dit adres in de terminal, of verschijnt een ander
adres met een ander poortnummer in de terminal. In ieder geval volstaat het om het adres dat in de terminal wordt weergegeven
in de browser te openen.

> Om de uitvoering in de terminal te beëindigen, drukt u tegelijkertijd op `CTRL` en `C`.

## Afhankelijkheden installeren

Als u de frontendserver in de terminal uitvoert, dus `bun run dev`, wordt aanbevolen om te stoppen; druk
tegelijkertijd op `CTRL` en `C`.

We raden sterk aan de volgende NPM-pakketten te installeren, omdat ze zeer nuttig zijn voor het ontwikkelen van
React-applicaties met Netuno (klik op elke link voor meer informatie over elk pakket):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Om de hierboven genoemde pakketten te installeren, voert u eenvoudig de volgende reeks opdrachten uit in de terminal:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Als alternatief kunt u ook alle pakketten in één keer installeren:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configuraties

Na het uitvoeren van de bovenstaande opdrachten kunt u een standaardpoort forceren; ga naar `📂 website/vite.config.js`
en voeg de `server`-configuratie als volgt toe:

```javascript title="website/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

Als u nu start met de opdracht `bun run dev`, wordt altijd poort `3000` gebruikt.

### Less

Wijzig alle `.css`-bestanden in `website/src` naar de extensie `.less`.

> Vergeet niet deze wijziging ook door te voeren in de JSX-code op de regels waar de `.css`-bestanden worden geïmporteerd; wijzig dit
> naar `.less`.

LESS maakt een meer gestructureerde en moderne CSS-ontwikkeling mogelijk.

### Aanpassen van het Ant.Design-thema

Om de kleuren van Ant.Design aan te passen, gebruikt u de component `ConfigProvider` in `App.jsx`.

Bijvoorbeeld:

```jsx title="website/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Mijn knop met aangepaste kleur</Button>
            ...
        </ConfigProvider>
    );
}
...
```

Zo kunt u elke stylingconfiguratie van Ant.Design aanpassen.

### Donker thema

Het is ook mogelijk het donkere thema van Ant.Design te gebruiken; hiervoor hoeft u alleen de `theme` te importeren die de dark mode bevat
en toe te passen in de `ConfigProvider`:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">Mijn knop met aangepaste kleur</Button>
        ...
    </ConfigProvider>
...
```

### Herstijlen

Merk op dat u in de instellingen van de `ConfigProvider` hierboven eenvoudig de stijl van Ant.Design kunt wijzigen;
meer over het aanpassen van Ant.Design:

- [Thema aanpassen](https://ant.design/docs/react/customize-theme)

Elke component van Ant.Design heeft de mogelijke Design Token-instellingen, bijvoorbeeld bij de Buttons:

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">Mijn knop met aangepaste kleur</Button>
    ...
</ConfigProvider>
```

## Automatisch starten van de frontend met Netuno

Met Netuno kunt u de React-applicatie samen met het serverproces van de Netuno-applicatie starten.

> Alle compilatiemeldingen van de React-applicatie worden geïntegreerd in dezelfde terminal als de Netuno-applicatie.

Hiervoor voegt u het volgende toe aan de `commands`-configuratie van de Netuno-applicatie in `📂 config/_development.json`:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Wanneer u configuratiebestanden van de Netuno-applicatie bewerkt, moet u de server opnieuw starten zodat de nieuwe wijzigingen
> kunnen worden overgenomen.

Start of herstart ten slotte de server met uw Netuno-applicatie om de werking te controleren.

En nu is alles geïntegreerd in slechts één gecentraliseerde terminal, zodat u niet meerdere verspreide terminals hoeft te hebben;
meer over:

- [Gecentraliseerde terminal](/docs/academy/explore/centralized-terminal)

## CORS-configuratie (Cross-Origin Resource Sharing)

Om CORS te configureren en mogelijke fouten in de communicatie tussen de frontend en de services van de Netuno-applicatie te voorkomen,
bewerkt u de configuratie van de applicatie in:

- `📂 config/_development.json`

Controleer of de `cors`-configuratie al bestaat; als `*` in `origins` staat, is dat prima voor ontwikkeling
en kan het zo blijven.

Als er geen `cors`-configuratie is, voeg deze dan toe op basis van dit voorbeeld; het adres moet hetzelfde adres zijn als dat van de
frontend:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> Als `origins` een `*` bevat, betekent dit dat elk frontendadres wordt ondersteund, bijvoorbeeld:
> - `"origins": [ "*" ]`
> Normaal gebruiken we `*` tijdens ontwikkeling.

Als deze configuratie is doorgevoerd, kunt u de gewenste API-services integreren met de
frontend, zonder problemen met CORS-beveiliging.

> Meer over [CORS](/docs/academy/server/services/cors)

## Omgevingsvariabelen

De configuratie van omgevingsvariabelen kan worden gedefinieerd door het bestand `website/.env` aan te maken, met de
definities van de variabelen, bijvoorbeeld:

```
NODE_ENV=development
```

Of via de configuratie van de Netuno-applicatie, bijvoorbeeld in:

- `📂 config/_development.json`

En door de omgevingsvariabelen te definiëren in de configuratie van de opdracht onder de parameter `env`, bijvoorbeeld:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "website",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```