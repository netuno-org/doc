---
sidebar_position: 4
id: databases
title: Database
---

# Database

In deze stap verkennen we de **database** die automatisch is aangemaakt op basis van het eerder gedefinieerde formulier **Taak**.

Toen u het formulier **Taak** met het veld **Naam** aanmaakte, heeft Netuno in de database de tabel `taak` met de kolom `naam` aangemaakt, overeenkomstig de namen die bij het aanmaken van het formulier zijn gedefinieerd.

De **technische namen** van de velden (bijvoorbeeld `taak`, `naam`, `taak_id`) worden gebruikt in de programmering en in SQL-query's, en komen niet overeen met de weergavenamen die in de interface worden getoond.

## Query's

In deze sectie voeren we query's rechtstreeks uit in de database via de beheerinterface van Netuno.

1. Ga naar de omgeving **Bouwen**.
2. Klik in het menu op **Beheer > Query**.
3. Plak de onderstaande opdrachten in de query-editor en voer ze uit.

### Eenvoudige query's

Toon alleen de naam van de taken:

```sql
SELECT naam
FROM taak;
```

Toon alle velden van de tabel met taken:

```sql
SELECT *
FROM taak;
```

Toon alle velden van de tabel met registraties:

```sql
SELECT *
FROM registratie;
```

Toon alle velden van de tabel met medewerkers:

```sql
SELECT *
FROM medewerker;
```

Wanneer u op **Uitvoeren** klikt, genereert Netuno een resultaatentabel voor **elk** commando dat door een puntkomma (`;`) is gescheiden.  
Dit is handig wanneer u meerdere query's in één keer wilt uitvoeren.

### Query met relaties

Voer nu een query uit die alle tabellen met elkaar verbindt:

```sql
SELECT
  taak.naam,
  registratie.start,
  registratie.einde,
  medewerker.naam
FROM taak
INNER JOIN registratie
  ON taak.id = registratie.taak_id
INNER JOIN medewerker
  ON medewerker.id = registratie.medewerker_id;
```

Deze query retourneert:

- De naam van de taak.
- De start en het einde van elke registratie.
- De naam van de medewerker die aan elke registratie is gekoppeld.

Hiermee wordt gedemonstreerd hoe relaties tussen tabellen het mogelijk maken informatie uit verschillende entiteiten van de applicatie te combineren.

## Diagramma

Gebruik het **Diagramma** van Netuno om de structuur van de database op een intuïtievere manier te bekijken.

1. Ga naar de omgeving **Bouwen**.
2. Klik in het menu op **Beheer > Diagramma**.

In het diagramma kunt u:

- In- of uitzoomen.
- Het diagramma als afbeelding exporteren.

Deze acties zijn beschikbaar via knoppen aan de rechterkant van het diagrammapaneel.

Netuno maakt automatisch lijnen met relatiepijlen aan op basis van de configuratie van **Links** in de velden (bijvoorbeeld velden van het type `select` die naar andere tabellen verwijzen).

## Best practices

Volg deze best practices bij het modelleren van uw database in Netuno:

- Gebruik het achtervoegsel `_id` in velden die relaties vertegenwoordigen, bijvoorbeeld:
  - `taak_id`
  - `medewerker_id`
- Vermijd meervoudsvormen voor tabel- en veldnamen, zoals `taken`, `registraties` of `medewerkers`.

Meervoud vermijden helpt om:

- Namen korter en leesbaarder te houden.
- Dubbelzinnigheid bij het schrijven van query's te verminderen.
- De leesbaarheid in formulieren en diagramma's te verbeteren, vooral wanneer er meerdere relaties zijn.

:::tip Naamgevingsconventie
Gebruik standaard altijd **namen in het enkelvoud** voor formulieren, tabellen en velden.  
Voorbeelden: `taak`, `registratie`, `medewerker`, `taak_id`, `medewerker_id`.
:::

## Volgende stap

Ga verder naar de volgende stap **Gegevens relateren** om door te gaan met de demo-applicatie.