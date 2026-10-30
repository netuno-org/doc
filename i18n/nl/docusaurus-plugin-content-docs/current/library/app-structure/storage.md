---
id: storage
title: Opslag
sidebar_label: Opslag
---

Bestanden geïntegreerd in de code of in de database.

## Algemene opslag

De map `📂 storage` is bedoeld om algemene bestanden die nuttig zijn bij de verwerking van de applicatie veilig op te slaan.

## Mapstructuur

In de map `📂 storage` bevindt zich de volgende structuur:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Database

De map `📂 database` wordt gebruikt om bestanden of afbeeldingen op te slaan die verband houden met de database.

Het is niet praktisch om de bestanden rechtstreeks in de database op te slaan, omdat ze de back-ups en de gegevenssynchronisatie compromitteren en de grootte van de database aanzienlijk vergroten door de ruimte die over het algemeen door veel bestanden wordt ingenomen.

Daarom wordt voor elk gegevensformulier dat een veld bevat voor het uploaden van een bestand of afbeelding, het uiteindelijke bestand hier georganiseerd en opgeslagen, en wordt alleen de uiteindelijke bestandsnaam in het veld van de database opgeslagen.

Als de gegevensstructuur bestanden bevat, dan is het voor een volledige back-up van de applicatie nodig om naast de back-up van de database ook een back-up van deze map te maken.

## Algemeen bestandssysteem

In de map `📂 filesystem` kunnen algemene bestanden die nuttig zijn voor de applicatie worden georganiseerd met toegangsbeperkingen.

Elk bestand dat rechtstreeks nuttig is in de code van de applicatie moet hier worden opgeslagen.

De beperkingen zijn onderverdeeld in:

### Privé

De map `📂 private` mag alleen voor lezen of schrijven worden benaderd door gebruikers die in de applicatie zijn geauthenticeerd.

### Openbaar

De map `📂 public` is nuttig voor externe toegang.

### Server

De map `📂 server` staat lezen en schrijven alleen toe vanuit interne code van de applicatie.

Zo heeft geen enkele interne of externe gebruiker toegang tot de inhoud ervan.

De inhoud ervan is alleen toegankelijk via de code.