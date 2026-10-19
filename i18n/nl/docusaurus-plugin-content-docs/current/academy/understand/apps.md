---
sidebar_position: 2
id: apps
title: Apps
---

Netuno is een server voor meerdere applicaties en distribueert de toegang tot applicaties via domeinen en subdomeinen.

Meerdere webapplicaties die zowel publiek als privé kunnen zijn, zoals Netuno backoffices bouwt. Doorgaans hebben applicaties dus altijd privétoegang, maar de publieke interface is optioneel.

Bij het ontwikkelen van meerdere applicaties in Netuno kunnen ze zowel losgekoppeld als gekoppeld zijn op databaseniveau.

Dit betekent dat we dezelfde database kunnen delen met meerdere applicaties of aparte databases per applicatie kunnen hebben.

## Losgekoppelde applicaties met meerdere databases

Wanneer het gaat om applicaties met volledig verschillende domeinen, is het niet zinvol om dezelfde database te delen.

Stel dat u een applicatie hebt voor het verzenden van nieuwsbrieven, een andere voor het beheren van boeken en nog een voor het beheren van leveringen, waarbij geen enkele informatie nodig heeft die in een andere applicatie is opgeslagen; deze zijn volledig onafhankelijk.

Daarom is er geen reden om dezelfde database te delen; elke applicatie kan beter een eigen database hebben:

![Losgekoppelde applicaties.](/docs/assets/business/apps-db-pt-desacopladas.svg "Losgekoppelde applicaties.")

Op deze manier kent geen enkele applicatie de informatie die in de andere applicaties is opgeslagen, en al hun werking is onafhankelijk van de andere bestaande applicaties.

## Gekoppelde applicaties met dezelfde database

Wanneer we werken met applicaties die informatie moeten delen en er een groot datavolume kan zijn, is het delen van de database de meest haalbare oplossing op het gebied van prestaties, maar niet de beste oplossing op het gebied van beveiliging en gegevensintegriteit.

Daarom worden om veiligheids- en integriteitsredenen meestal grote webapplicaties gemaakt waarin alles gecentraliseerd is in één complexe applicatie die zijn eigen exclusieve database gebruikt. Als de applicatie externe gegevens nodig heeft, kan deze indien nodig integreren met andere databases en webservices.

In dit geval biedt Netuno al alle middelen voor het ontwikkelen van dit soort applicaties, maar biedt het ook een goede oplossing voor applicaties met een gedeelde database.

Omdat het belangrijkste probleem de beveiliging en integriteit van gegevens is, worden bij Netuno, wanneer meerdere applicaties dezelfde database gebruiken, deze automatisch beperkt tot hun tabellen die verband houden met hun formulieren.

Het maakt het mogelijk het formulier en dus de bijbehorende tabel te delen met de andere applicaties die aan de database zijn gekoppeld.

Stel u heeft een applicatie voor klantenbeheer, een andere voor leveranciersbeheer en nog een voor facturatie, omdat u zowel leveranciersfacturen hebt om te betalen als klantfacturen om te ontvangen.

De klantenapplicatie mag geen gegevens delen met de leveranciersapplicatie; het zijn afzonderlijke applicaties.

Maar de facturatieapplicatie moet met beide applicaties integreren om de gegevens van de klanten- en leveranciersapplicatie te verkrijgen, zodat facturen kunnen worden gekoppeld en incasso's en betalingen in de verschillende situaties kunnen worden beheerd.

![Gekoppelde applicaties.](/docs/assets/business/apps-db-pt-acopladas.svg "Gekoppelde applicaties.")

Om te garanderen dat applicaties geen invloed hebben op elkaars gevoelige gegevens, wordt ook aanbevolen om voor elke applicatie afzonderlijke databasetoegangen te gebruiken. Bovendien kunnen de toegangen tot de tabellen via de database worden beheerd om ongewenste interferentie te voorkomen.

Verder voert Netuno controle uit om te scheiden wat bij de ene of de andere applicatie hoort en wat tussen hen wordt gedeeld.

## Adres van elke applicatie

Netuno distribueert automatisch de toegang tot applicaties via het domein en subdomein.

Wanneer een verzoek bij Netuno binnenkomt, wordt het domein als volgt verwerkt:

![Voorbeeldafbeelding van het applicatieadres met subdomein.](/docs/assets/business/apps-subdomain.svg "Applicaties met subdomein.")

Netuno zoekt tot aan de eerste punt of er een applicatie met deze naam bestaat.

Als er een applicatie met deze naam bestaat, is dat de applicatie die het verzoek ontvangt.

Als er geen applicatie met deze naam bestaat, wordt het verzoek aan de standaardapplicatie (_default_) geleverd.

Deze domeinresolutie werkt ook bij een sub-subdomein, bijvoorbeeld:

![Voorbeeldafbeelding van het applicatieadres met sub-subdomein.](/docs/assets/business/apps-sub-subdomain.svg "Applicaties met sub-subdomein.")

Dat wil zeggen: tot aan de eerste punt wordt bepaald welke applicatie het verzoek zal ontvangen om te worden verwerkt.

En Netuno maakt het ook mogelijk een exact adres met domein voor de applicatie te definiëren; u hoeft alleen het exacte adres op te geven waarop de applicatie zal werken.

> Het gebruik van de automatische vorm voor het verwerken van domeinen laat de applicaties in de overgrote meerderheid van de gevallen werken. Als er toch situaties zijn waarin u een volledig ander en specifiek adres nodig hebt voor de werking van de applicatie, dan moet u dit in de configuratie ervan definiëren.