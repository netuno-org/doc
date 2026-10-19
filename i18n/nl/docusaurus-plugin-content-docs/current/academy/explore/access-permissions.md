---
id: access-permissions
title: Toegang en machtigingen
sidebar_label: Toegang en machtigingen
---

Hoe je gebruikers en groepen beheert en de veiligheid van de applicatie waarborgt.

## Introductie

Veiligheid is een van de fundamentele pijlers van elke applicatie. Of het nu gaat om een eenvoudige interne applicatie of een complex systeem met duizenden externe gebruikers via API.

Netuno biedt standaard een robuust systeem voor **toegangs- en machtigingsbeheer**, met de tools die nodig zijn om veiligheid centraal en efficiënt te beheren. En het elimineert de noodzaak om deze functionaliteiten vanaf nul te ontwikkelen.

De belangrijkste beveiligingsmechanismen zijn:

- Beheer van gebruikers en groepen.
- Controle op gegevensmachtigingen en gegevensbeheer.
- Gedetailleerde geschiedenis van authenticatiepogingen.
- Automatische IP-blokkering na opeenvolgende mislukte toegangspogingen.
- Geïntegreerde authenticatie met LDAP, Google, GitHub, Discord, enz.
- JWT-authenticatiemodule voor front-end.
- En meer...

## Gebruikersbeheer

Dit gaat over het beheer van de afzonderlijke accounts die toegang hebben tot het platform. Elke gebruiker, service of integratie die het systeem moet betreden, moet een unieke gebruikersregistratie hebben.

In het gebruikersbeheergebied van Netuno heb je volledige controle over de levenscyclus van deze accounts:
- **Aanmaken**: Registratie van nieuwe teamleden of klanten.
- **Onderhoud**: Bijwerken van e-mails, wijzigen van wachtwoorden en registratiegegevens.
- **Toegangsbeheer**: Snel accounts blokkeren (deactiveren) zonder historische gegevens te hoeven verwijderen.

:::tip Visuele gids
Voor gedetailleerde informatie over gebruikersbeheer, zie de [Interfacegids: Gebruikers en groepen](/docs/academy/ui/groups-users)
:::


## Groepenbeheer

Autorisatieregels worden gedefinieerd via groepen, die bepalen tot welke menu's, formulieren, services en gegevens elke gebruiker toegang of bewerkingsrechten heeft. In plaats van machtigingen individueel te configureren, is het beter om de regels in de groep te definiëren en vervolgens gebruikers aan die groep te koppelen. Deze werkwijze garandeert:

- **Schaalbaarheid:** Eenvoudig honderden gebruikers beheren.
- **Veiligheid:** Minder risico op het per ongeluk verlenen van ongepaste toegang.
- **Organisatie:** Duidelijke scheiding tussen beheerders, managers, supervisors en algemene gebruikers.

Netuno bevat al ingebouwde groepen zoals `dev` en `admin`, en biedt volledige vrijheid om aangepaste groepen te maken die aansluiten bij de bedrijfsregels van je applicatie.

:::tip Visuele gids
Voor gedetailleerde informatie over groepenbeheer, zie de [Interfacegids: Gebruikers en groepen](/docs/academy/ui/groups-users)
:::


## Beheer van gegevensmachtigingen

Om de functionaliteit van een groep of de machtigingen van een gebruiker te waarborgen, is het cruciaal vast te leggen welke gegevens deze mag bewerken. In Netuno is toegangsbeheer gedetailleerd en wordt het rechtstreeks toegepast op de formulieren (tabellen) van je applicatie.

Het systeem gebruikt een machtigingenmatrix waarmee je per functionaliteit kunt definiëren of een bepaalde groep de juiste autorisatie heeft om:

- **Lezen:** Alleen records bekijken.
- **Schrijven:** Records invoegen en bewerken in de database.
- **Verwijderen:** Records permanent verwijderen.

Deze flexibiliteit waarborgt de bescherming van gevoelige gegevens, omdat elke medewerker alleen toegang heeft tot de informatie die essentieel is voor het uitvoeren van diens taken.

:::tip Visuele gids
Voor gedetailleerde informatie over het configureren van gegevensmachtigingen, zie de [Interfacegids: Gebruikers en groepen](/docs/academy/ui/groups-users)
:::

## Authenticatiegeschiedenis

Om transparantie en controle te garanderen, worden alle toegangspogingen (geslaagd of ongeldig) geregistreerd en kunnen ze worden geraadpleegd in de authenticatiegeschiedenis.

Het systeem volgt en bewaart gedetailleerd de informatie van elke loginpoging van de gebruiker:

- **Bron-IP:** Het netwerkadres van waaruit de aanvraag afkomstig is.
- **Tijdstip:** Het exacte moment van de actie.
- **Toegang:** Of de toegang is toegestaan, geweigerd of geblokkeerd.

#### Legenda van toegangspictogrammen

🟩 **Slot/check_mark, in het groen:** Geeft een succes aan. De gebruiker heeft de juiste inloggegevens verstrekt en de login is geautoriseerd. Het geeft ook aan dat het bron-IP is gedeblokkeerd.

🟧 **Pictogram met "X", in oranje:** Geeft het aantal ongeldige pogingen aan.

🟥 **Slot in het rood:** Geeft de blokkering van het bron-IP aan.

## Automatische blokkering

Netuno heeft een actief beveiligingssysteem dat je applicatie beschermt tegen aanvallen en ongeautoriseerde toegang.

Wanneer verdachte activiteiten worden gedetecteerd, zoals meerdere opeenvolgende pogingen met een ongeldige login, blokkeert het systeem automatisch het bron-IP-adres.

Zodra een IP is geblokkeerd, kan het gedurende een bepaalde periode geen nieuwe verzoeken doen, of totdat de blokkering handmatig wordt opgeheven.

### Blokkeerregels configureren

Deze regel wordt gedefinieerd in de **configuratiebestanden** van de omgeving van je applicatie: "development.json" of "production.json".

#### 1. Lokaliseer het configuratiebestand

Navigeer in de hoofdmap van je project naar de map `config`. Open het bestand dat overeenkomt met de omgeving die je wilt beschermen:

* Voor ontwikkeling: `_development.json`

* Voor productie: `_production.json`

#### 2. Voeg de beveiligingscode toe
Zoek in het JSON-bestand de sectie `auth`. Als deze niet bestaat, voeg je het blok `attempts` toe zoals in het onderstaande voorbeeld:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. De parameters begrijpen

* `interval`: Tijdvenster in **minuten** (voorbeeld: 60 minuten = 1 uur).

* `maxFails`: Maximaal aantal toegestane fouten binnen dat interval voordat blokkering optreedt.


#### 4. Gedrag van het systeem

- Na automatische blokkering heeft de gebruiker geen toegang meer tot de applicatie.

- Standaard is het systeem ingesteld op drie ongeldige pogingen met blokkering voor één uur. Na deze periode worden de pogingen weer toegestaan.

- Dit proces kan worden geconfigureerd naar de behoefte van je applicatie.


### Deblokkeren via de interface

Alleen een gebruiker met de machtiging "Beheerder" kan de toegang direct via de Back-Office vrijgeven zonder toegang tot de database.

1. Open het menu van de applicatie in de modus "Weergave" en klik op de sectie **"Configuratie > Gebruikers"**.
![sectie-gebruikersconfiguratie.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. Selecteer in het veld **"Bestaande gebruiker bewerken"** de gewenste gebruiker.
![selecteer-een-bestaande-gebruiker.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. Controleer in de sectie **"Authenticatiegeschiedenis"** of de status "Access" het pictogram "Slot" in het groen toont;
![sectie-authenticatiegeschiedenis.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Klik op het pictogram **Klok** om de volledige lijst met toegangen van de gebruiker te bekijken.
![authenticatiegeschiedenis.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Klik op het groene slot in de kolom **"Toegang"** om de gebruiker te deblokkeren. Na deze actie wordt een succesmelding weergegeven.

De vrijgave is onmiddellijk, waardoor de gebruiker opnieuw kan proberen in te loggen.


## Geïntegreerde authenticaties

Je applicatie kan geavanceerdere inlogmethoden vereisen, vooral als je een mobiele app bouwt of integreert met een bedrijfsnetwerk.

Netuno is ontworpen om flexibel te zijn en te integreren met het ecosysteem van je organisatie. Naast de standaardlogin (gebruikersnaam en wachtwoord) ondersteunt het platform diverse gangbare authenticatieprotocollen.

Hiermee kun je Single Sign-On-strategieën (eenmalige aanmelding) implementeren, waarbij gebruikers toegang krijgen tot het systeem met inloggegevens die ze al hebben, waardoor toegangsbeheer wordt gecentraliseerd.

**Bedrijfsomgevingen:** Compatibiliteit met gebruikersmappen (zoals LDAP en Active Directory), ideaal voor intranet en interne systemen.

**Sociale login (OAuth):** Mogelijkheid tot integratie met providers zoals Google, Microsoft, GitHub en anderen, wat registratie en toegang in publieke applicaties eenvoudiger maakt.

## Authenticatie via token (JWT)

Voor projecten met een aparte front-end (zoals sites in React, Vue.js of mobiele apps) wordt het traditionele loginscherm van Netuno niet gebruikt. In zulke scenario's wordt de JWT-standaard (JSON Web Token) toegepast.

Netuno biedt een native service die deze tokens automatisch genereert en valideert, wat zorgt voor veiligheid en efficiëntie in de communicatie via API.

:::tip Visuele gids
Voor meer informatie over het implementeren en configureren van JWT in je configuratiebestanden, zie [Gids voor JWT-authenticatie](/docs/academy/server/services/jwt)
:::

## Conclusie

De beveiligingsfuncties van Netuno beheersen is essentieel voor de gezondheid van je project. Door de tools voor gebruikersbeheer, groepenbeheer en geschiedenisbewaking correct te gebruiken, bouw je een omgeving die gegevensbescherming en gebruiksgemak in balans brengt.

Zo zorg je ervoor dat je systeem in Netuno:

- **Veilig:** Gevoelige informatie beschermen tegen ongeautoriseerde toegang.

- **Georganiseerd:** Duidelijke hiërarchieën en verantwoordelijkheden vastleggen.

- **Schaalbaar:** Klaar om te groeien met moderne integraties.

**Blijf goede praktijken toepassen:** Controleer periodiek de machtigingen van groepen en bekijk de toegangsgeschiedenis om je omgeving gezond te houden.