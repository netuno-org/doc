---
sidebar_position: 1
id: bun
title: Bun installeren
sidebar_label: Installeer Bun
---

## Inleiding

NodeJS en NPM vormen de basis voor het definiëren van het frontend-ontwikkelingecosysteem.

Ondanks hun nut laten de bijbehorende prestaties veel te wensen over.

Daarom raden we aan Bun te gebruiken om significante en voelbare voordelen te behalen met het gemak van snelle aanpassing en behoud van compatibiliteit.

In Netuno wordt Bun steeds vaker gebruikt, zie de redenen...

## Bun

Bun is vergelijkbaar met NodeJS maar veel krachtiger, modern, intuïtief en supersnel.

De prestaties van Bun zijn onbetwistbaar; wie overstapt van NodeJS-uitvoering naar Bun merkt onmiddellijk het voordeel.

Omdat frontend-projecten meestal enige tijd nodig hebben om op te starten, is de initialisatie met Bun onmiddellijk.

En frontend-afhankelijkheden nemen vaak veel ruimte in beslag, waarbij de map `📂 node_modules` gemakkelijk honderden megabytes of zelfs gigabytes kan bereiken.

Bun lost ook het probleem op van verspilde ruimte door het repliceren van de afhankelijkhedenmap naar meerdere projecten.

Door een centrale repository van afhankelijkheden te creëren die door alle projecten wordt gedeeld, worden bij installatie gelinkte mappen geconfigureerd.

Zo wordt het ruimteverbruik van afhankelijkheden drastisch verminderd.

> Naast verschillende andere voordelen valt het ook op door de gebruiksvriendelijkheid en de verbeterde, intuïtieve en algemeen meer geavanceerde output.

Aangezien de prestatievoordelen van extreem belang zijn voor agile ontwikkeling, raden we het gebruik ervan aan.

Volg de stappen om Bun te installeren:

- [**Bun-installatie**](https://bun.sh/docs/installation)

### Gebruik in projecten

Om Bun in projecten te gebruiken, moet u ervoor zorgen dat als u al NPM, Yarn of een andere gebruikt, u de map `📂 node_modules` verwijdert.

Waar het bestand `package.json` staat, moet u de opdracht voor het installeren van de afhankelijkheden uitvoeren:

- `bun install`

Nu hoeft u alleen maar de acties van `scripts` uit te voeren die in `package.json` zijn geconfigureerd, bijvoorbeeld:

- `bun run dev`

En om te compileren:

- `bun run build`

Bun gebruiken lijkt sterk op NPM, Yarn, PNPM, enz., maar het is veel sneller en over het algemeen beter, en ook bij de deployment naar test- en productieomgevingen maakt het hoge prestaties mogelijk, met een snel voltooide en over het algemeen efficiëntere deployment.

### Geïntegreerde commando's in Netuno

Aan de Netuno-kant, met de gecentraliseerde terminal, waar alle projectcommando's samen in hetzelfde proces en dezelfde terminal van Netuno worden uitgevoerd.

- [Meer over de gecentraliseerde terminal.](/docs/academy/explore/centralized-terminal)

Als het is geïntegreerd en u de uitvoering van NPM-commando's gebruikt, moet u dit wijzigen naar Bun.

Wijzig dit naar Bun in de configuratie van de `commands` van de Netuno-applicatie in `📂 config/_development.json`, bijvoorbeeld:

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
    ]
    ...
}
```

## Conclusie

Lijd niet langer onder ruimtegebrek door meerdere kopieën van afhankelijkheden in de mappen `📂 node_modules` die gigabytes verspillen.

En wacht ook niet zo lang totdat uw project eindelijk afhankelijkheden installeert, opstart of compileert.

Niets weerhoudt u ervan Bun te gebruiken, want het garandeert compatibiliteit met NodeJS en NPM; het is letterlijk twee in één.

In projecten met Netuno gebruiken en migreren we alles naar **Bun**; volg deze trend.