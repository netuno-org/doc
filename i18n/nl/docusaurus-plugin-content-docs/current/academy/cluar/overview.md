---
sidebar_position: 1
id: overview
title: Overzicht
sidebar_label: Overzicht
---

CLUAR is een open source CMS, gebouwd op [Netuno](https://www.netuno.org/), voor het creëren van meertalige websites. De visuele componenten van de pagina's (banners, lijsten, sliders, enz.) worden ontwikkeld in ReactJS, met [Ant Design](https://ant.design/) voor de interface, [React Router](https://reactrouter.com/) voor de navigatie en [Less](https://lesscss.org/) voor de stijlen — terwijl de inhoud (pagina's, teksten, afbeeldingen, talen, menu's) wordt beheerd via een backoffice, zonder dat er geprogrammeerd hoeft te worden.

De code is beschikbaar in de [CLUAR-repository op GitHub](https://github.com/netuno-org/cluar) — bijdragen zijn welkom.

## Contentmodel

De inhoud van CLUAR volgt de structuur **Pagina → Versie → Componenten**:

- Elke **Pagina** vertegenwoordigt een URL van de site (`link`), met titel, menu, SEO, enz.
- Elke pagina heeft een of meer **Versies**, waarmee je in een concept kunt werken zonder hetgeen al gepubliceerd is te beïnvloeden.
- Binnen elke versie komen de **Componenten** van inhoud — Banner, Inhoud, Lijst, Slider en Functionaliteit — die de blokken zijn die daadwerkelijk op de pagina verschijnen, elk met hun eigen visuele type en, optioneel, bijbehorende acties (knoppen/links).

## Projectarchitectuur

Het project is opgedeeld in vier delen:

- **`server`** — de Netuno-applicatie: data-entiteiten, REST-services en de scripts voor de initiële configuratie (`setup`).
- **`website`** — de site in ReactJS die de gegevens via REST consumeert en de pagina's rendert.
- **`ui`** — uitbreidingen op de backoffice van Netuno die specifiek zijn voor CLUAR.
- **`config`** — omgevingsconfiguratie (database, authenticatie, algemene instellingen).

## Volgende stappen

- [Installatie](/docs/academy/cluar/install)
- [Configuratie](/docs/academy/cluar/configuration)
- [Componenten](/docs/academy/cluar/components/overview)
- [Pagina's](/docs/academy/cluar/pages/overview)
- [Talen](/docs/academy/cluar/languages)
- [Machtigingen](/docs/academy/cluar/permissions)