---
id: services
title: Diensten
sidebar_label: Diensten
---

De Web REST-diensten in Netuno zijn JavaScript-scripts die op de server (back-end) worden uitgevoerd en waarmee je rechtstreeks met de database van de applicatie kunt werken. Hiermee kun je:

* Gegevens uit de database lezen
* Nieuwe records invoegen
* Bestaande gegevens bijwerken
* Gegevens verwijderen
* Complexe logica uitvoeren met berekeningen of gegevensverwerking.
* Integreren met externe systemen.

Elke dienst wordt via een URL (endpoint) benaderd, waardoor webinterfaces (front-end), mobiele applicaties of andere externe systemen de gegevens van je applicatie op een veilige en gestandaardiseerde manier kunnen gebruiken.

#### Vereisten

* Basiskennis van _**JavaScript, React.js**_ en _**HTML**_.
* Bekendheid met SQL en met de mapstructuur van een applicatie.
* Het wordt aanbevolen om basiskennis te hebben van **Formulieren**, **Velden** en **Relaties**.

Als je vragen hebt over deze stappen, raadpleeg:

* [Formulieren](/docs/academy/ui/forms)
* [Velden](/docs/academy/ui/fields)
* [Relaties tussen formulieren](/docs/academy/ui/relationships-between-forms)



## Eerste stappen

We gebruiken een applicatie voor het registreren van werkuren, waarbij het doel is om het totaal aantal gewerkte uren per werknemer te berekenen.

**Structuur van de applicatie:**

![applicatiestructuur.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
Het veld **id** wordt door Netuno automatisch aangemaakt en beheerd in alle tabellen; je hoeft het niet handmatig te definiëren.
:::

De diensten van een Netuno-applicatie staan in de map **server/services/**.

#### Mapstructuur

```text
mijn-app/
└── server/
    └── services/
        ├── werknemers.js   ← dienstbestand
        └──... 
```

## Een dienst aanmaken

Maak in de map **server/services/** een nieuw bestand aan dat de URL van je dienst bepaalt. Noem het bestand in dit voorbeeld `werknemers.js`.

:::tip
- Gebruik alleen **kleine letters**.
- Als de naam samengesteld is, scheid de woorden met een **koppelteken (-)**.
- Voorbeelden: **werknemers.js**, **urenrapport.js**, **registratie-invoer.js**.
::: 


## De database raadplegen

Netuno biedt het globale object **_db** om native met de database te werken.

Om een SQL-query uit te voeren, gebruiken we de methode `_db.query()`.


```javascript
// Voert een SQL-query uit die het totaal aantal uren per werknemer groepeert
const dbRegistraties = _db.query(`
    SELECT DISTINCT
        werknemer.naam, SUM(DATEDIFF(HOUR, registratie.start, registratie.einde)) AS totaal
    FROM werknemer INNER JOIN registratie
        ON werknemer.id = registratie.werknemer_id
    WHERE werknemer.actief = true AND registratie.actief = true
    GROUP BY werknemer.naam
    ORDER BY totaal ASC
`);
```

:::note De SQL-query begrijpen

* **INNER JOIN**: Voegt de tabellen werknemer en registratie samen via de externe sleutel werknemer_id.

* **DATEDIFF(HOUR, start, einde)**: Berekent het verschil in uren tussen start en einde.

* **SUM(...) AS totaal**: Telt alle verwerkte uren per werknemer op.

* **WHERE ... actief = true**: Filtert de query zodat alleen werknemers en registraties die niet verwijderd zijn (actief) worden meegenomen.

* **GROUP BY werknemer.naam**: Groepeert de sommen per naam van elke werknemer.

* **ORDER BY totaal ASC**: Sorteert het eindresultaat van het kleinste naar het grootste aantal gewerkte uren.
:::

## De gegevens verwerken

De methode `_db.query()` retourneert de gegevens in een intern formaat van Netuno.

Om een schoon antwoord in JSON-formaat te sturen, moet je deze gegevens transformeren met de globale objecten **_val.list()** (voor arrays) en **_val.map()** (voor objecten).

```javascript
// Maakt een lege lijst aan om de verwerkte gegevens op te slaan
const lijst = _val.list();

// Loopt over elke registratie die door de SQL-query wordt geretourneerd
for (const dbRegistratie of dbRegistraties) {
    lijst.add(
        _val.map()
            .set("naam", dbRegistratie.getString("naam"))   // Haalt de naam op als tekst
            .set("totaal", dbRegistratie.getInt("totaal"))    // Haalt het totaal op als geheel getal
    );
}
```
### Gebruikte methoden

| Middel | Beschrijving |
|---------|-----------|
| **_val.list()** | Maakt een lijst aan (equivalent aan een Array in JS). |
| **_val.map()** | Maakt een key-value-object aan (equivalent aan een Object of JSON). |
| **.add(...)** | Voegt een nieuw item aan het einde van de lijst toe. |
| **.set("sleutel", waarde)** | Definieert een nieuwe eigenschap en de bijbehorende waarde in de map. |
| **.getString("kolom")** | Haalt de waarde van de opgegeven kolom op als Tekst (String). |
| **.getInt("kolom")** | Haalt de waarde van de opgegeven kolom op als geheel getal (Integer). |

## Gegevens retourneren

Je gebruikt het object **_out** om de verwerkte lijst in JSON-formaat naar de client te sturen.

```javascript
// Stuurt de lijst als HTTP-antwoord in JSON-formaat
_out.json(lijst);
```

## Praktisch voorbeeld

In deze laatste stap brengen we alle geleerde concepten samen om een werkende dienst te maken.

De volledige code hieronder voert een query uit op de database om het totaal aantal gewerkte uren te berekenen en retourneert deze gegevens in JSON-formaat.

```javascript
// 1. Vraagt het totaal aantal gewerkte uren op per actieve werknemer
const dbRegistraties = _db.query(`
    SELECT DISTINCT
        werknemer.naam, SUM(DATEDIFF(HOUR, registratie.start, registratie.einde)) AS totaal
    FROM werknemer INNER JOIN registratie
        ON werknemer.id = registratie.werknemer_id
    WHERE werknemer.actief = true AND registratie.actief = true
    GROUP BY werknemer.naam
    ORDER BY totaal ASC
`);

// 2. Maakt de datastructuur voor het antwoord aan
const lijst = _val.list();

// 3. Verwerkt en mapt de resultaten
for (const dbRegistratie of dbRegistraties) {
    lijst.add(
        _val.map()
            .set("naam", dbRegistratie.getString("naam"))
            .set("totaal", dbRegistratie.getInt("totaal"))
    );
}

// 4. Retourneert de gegevens in JSON-formaat
_out.json(lijst);
```

### De dienst benaderen

Nadat je je dienst in Netuno hebt aangemaakt en geconfigureerd, is deze klaar om direct in de browser te worden gebruikt en getest, of om in andere applicaties te worden geïntegreerd.

#### Toegangsmethoden

De dienst kan worden gebruikt via:

- **Browser:** Voor snelle tests van GET-methoden.

- **HTTP-clients:** Hulpmiddelen zoals Postman, Insomnia of Thunder Client.

- **Front-end:** Via fetch-verzoeken of bibliotheken zoals Axios.

#### Structuur van de URL

Standaard koppelt Netuno automatisch bestanden die in de services-map worden aangemaakt aan webadressen.

Als je lokaal op de standaardpoort draait, volgt het adres dit patroon:

http://localhost:9000/services/werknemers



:::info Hoe werkt de routering?
Netuno gebruikt een automatisch routeringssysteem op basis van het bestandssysteem:

**Bronmap:** Alle bestanden in server/services/ worden routes.

**Mapping:** Het bestand **werknemers.js** wordt omgezet naar het endpoint **/services/werknemers**.

**Extensies:** Let op dat de extensie **.js** in de URL wordt weggelaten. Optioneel kun je het achtervoegsel **.netuno** gebruiken (bijv. /services/werknemers.netuno), maar toegang zonder extensie is de aanbevolen standaard omdat dit schoner is.
:::

**Voorbeeld van een HTTP-antwoord:**
Als er compatibele gegevens in je database staan, ziet het antwoord van de server er ongeveer zo uit:

```json
[
    {
        "naam": "Sanne de Vries",
        "totaal": 40
    },
    {
        "naam": "Daan Jansen",
        "totaal": 35
    },
    {
        "naam": "Maria de Boer",
        "totaal": 45
    }
]
```

## Globale systeemobjecten

Tijdens het ontwikkelen van diensten in Netuno gebruiken we vaak native objecten die de communicatie met de database, het beheren van verzoeken en het retourneren van informatie vergemakkelijken.

Deze objecten zijn vooraf geconfigureerde instanties die klaar zijn voor gebruik in je serverscripts **(bestanden .js)**. Ze maken het importeren van externe bibliotheken overbodig voor basistaken zoals SQL-query's of het lezen van parameters.

| Object | Beschrijving |
|--------|-----------|
| **_db**| Databasebewerkingen uitvoeren (query, insert, update, delete). |
| **_val** | Gegevensstructuren maken en bewerken (list, map). |
| **_out** | Antwoorden naar de gebruiker sturen (JSON, HTML...). |
| **_req** | Toegang tot de parameters die in het verzoek van de gebruiker zijn meegestuurd (GET, POST). |
| **_log**| Fout- of debugberichten in de serverconsole registreren. |



Als je moeilijkheden ondervindt of suggesties voor verbetering hebt, neem dan contact op.

Ons team en onze community staan klaar om te helpen.

Veel succes met ontwikkelen!