---
sidebar_position: 8
id: actions
title: Acties
sidebar_label: Acties
---

Hoe je CTA's (knoppen/links) maakt en hergebruikt die aan componenten zijn gekoppeld.

## Inleiding

Een **Actie** is in feite een **CTA** (call-to-action) die je opnieuw kunt gebruiken — een knop/link met titel, tekst, afbeelding en bestemming (`link`) — die aan [Componenten](/docs/academy/cluar/components/overview) kan worden gekoppeld, zoals Banner, Inhoud, Lijstweergave, Slider (in de items) en Functionaliteit.

## Velden

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van de actie, weergegeven als kop (`<h4>`). |
| **Inhoud** (`content`) | Beschrijvende tekst van de actie, weergegeven als alinea (`<p>`). |
| **Aanduiding** (`indication`) | De tekst van de link/CTA zelf — dit is wat **in** de klikbare knop verschijnt (bijv. "Meer informatie", "Nu kopen"). |
| **Afbeelding** (`image`) | Afbeelding die aan de actie is gekoppeld (bijv. een pictogram). |
| **Link** (`link`) | Bestemming van de actie (URL) — waar de CTA naartoe gaat wanneer erop wordt geklikt. |
| **Taal** (`language_id`) | Taal waartoe deze actie behoort. |
| **Parameter** (`parameter_id`) | Groepeert deze actie met de equivalenten in andere talen — zie hieronder. |

## Parameter

De **Parameter** (`action_parameter`, met alleen `code` en `beschrijving`) is een groepeermiddel: meerdere Acties — elk in hun eigen taal, maar die de **zelfde functionaliteit/bestemming** vertegenwoordigen — delen dezelfde Parameter.

Dit wordt gebruikt bij het [klonen van een pagina](/docs/academy/cluar/pages/cloning) naar een andere taal: voor elke Actie die aan een component van de originele pagina is gekoppeld, zoekt CLUAR onder de bestaande Acties naar een Actie met **dezelfde Parameter** en in de **doeltaal** van het klonen. Als die wordt gevonden, wordt die Actie (de al vertaalde versie) automatisch aan het gekloonde component gekoppeld — zonder dat je die later handmatig hoeft toe te voegen.

:::info De Actie moet eerst in de doeltaal worden aangemaakt
De automatische koppeling werkt alleen als er al een Actie met dezelfde Parameter bestaat in de taal waarnaar je kloont. Als die er nog niet is, wordt de actie eenvoudigweg niet aan het gekloonde component gekoppeld — het is dan alsof die niet was gedefinieerd. Met andere woorden, de Parameter vertaalt of maakt de Actie niet automatisch; hij verbindt alleen equivalente Acties die al bestaan, zodra ze in elke taal zijn aangemaakt.
:::

Bijvoorbeeld: een Actie "Saiba mais" met Parameter `meer-informatie`, in het Portugees, en een andere Actie "Learn more" met dezelfde Parameter `meer-informatie`, in het Engels — bij het klonen van een pagina van het Portugees naar het Engels krijgt een Banner waaraan de eerste Actie was gekoppeld automatisch de tweede.

## Volgende stap

Ontdek de [Instellingen](/docs/academy/cluar/settings).