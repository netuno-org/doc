---
sidebar_position: 6
id: groups-users
title: Groepen en gebruikers
---

## Aanmaken en bewerken

Dit gedeelte is het administratieve centrum van uw applicatie. Hier beheert u de inloggegevens, privilegieniveaus en auditeert u de activiteiten die in het systeem zijn uitgevoerd, zodat elke gebruiker precies toegang krijgt tot wat nodig is.

#### Vereisten
- **Toegang tot Netuno:** U moet ingelogd zijn op uw Netuno-instantie en **beheerdersrechten** hebben.
- **Applicatie aangemaakt:** Er moet eerder een applicatie zijn aangemaakt. Meer informatie: [Interfacehandleiding: Applicatie maken](/docs/academy/app-create).
- **Formulieren:** Zorg dat er ten minste één of twee formulieren zijn aangemaakt. Meer informatie: [Interfacehandleiding: Formulier maken](/docs/academy/ui/forms).

### Menu

Geeft toegang tot de instellingen voor beveiligingsbeheer, gebruikers, groepen en logbewaking.

![toegangsmenu.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Ga naar de “weergavemodus” en klik rechtsboven in het scherm op "Developer".

## Wachtwoord

Hiermee wijzigt u het wachtwoord voor toegang tot het systeem.

Klik rechtsboven in het scherm op "Developer" en ga naar het gedeelte “Wachtwoord”.

- Voer uw oude wachtwoord in.
- Voer uw nieuwe wachtwoord in. **Dit moet minimaal 8 tekens bevatten, waaronder cijfers, hoofdletters en kleine letters, en speciale tekens.**
- Bevestig het wachtwoord en klik op de knop **Opslaan**.
- Daarna verschijnt een succesmelding.

![wachtwoord.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Gebruiker

Dit gedeelte is het controlecentrum voor het beheren van gebruikersprofielen.

Klik rechtsboven in het scherm op "Developer" en ga naar het gedeelte “Gebruiker”.

#### Vereisten

- De te bewerken gebruiker moet al in de database geregistreerd zijn.

 ### 1 - Bestaande gebruiker bewerken

In dit gedeelte wordt beschreven hoe u de gegevens van een gebruiker die al in het systeem geregistreerd is, kunt vinden en bijwerken.

![bestaande-gebruiker-bewerken.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Een gebruiker bewerken:**

- Selecteer een geregistreerde gebruiker en wijzig de gewenste gegevens.
- Klik op de knop **Opslaan** om de wijziging te bevestigen.
- Daarna wordt een succesmelding weergegeven.

### 2 - Nieuwe gebruiker toevoegen

In dit gedeelte kunt u nieuwe gebruikers registreren en hun inloggegevens en machtigingsniveaus binnen het systeem definiëren.

![nieuwe-gebruiker-aanmaken.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Naam:** Voer de naam van de gebruiker in.
- **Gebruiker:** Voer de loginnaam in - deze mag alleen kleine letters bevatten, gescheiden door een punt.
- **Wachtwoord:** Voer het eerste wachtwoord voor toegang tot het systeem voor de nieuwe gebruiker in.
- **E-mail:** Voer het contact-e-mailadres in.
- **Geen:** Hiermee kunt u het wachtwoord van de gebruiker blokkeren zodat deze niet kan inloggen.
- **Groep:** Selecteer de hoofdgroeo waartoe de gebruiker behoort.
- **Actief:** Hiermee kunt u een gebruiker in het systeem activeren of deactiveren.
- **Knop Opslaan:** Klik om de gegevens van de nieuwe gebruiker op te slaan.

### 3 - Machtigingen van de gebruiker

Machtigingen worden beheerd via een intuïtieve interface die is ingedeeld in tabbladen **(Formulieren en Rapporten)**.

Hiermee kunt u nauwkeurig instellen waartoe de gebruiker toegang heeft, direct na het aanmaken of tijdens het bewerken.

In de kolommen **Lezen, Schrijven en Verwijderen** vindt u een vervolgkeuzemenu met verschillende bereikniveaus:

- **Niets:** De gebruiker heeft geen enkele machtiging voor deze actie.
- **Eigenaar:** De gebruiker kan alleen interactie hebben met records die hij zelf heeft aangemaakt.
- **Groep:** De gebruiker kan interactie hebben met records die door elk lid van zijn groep zijn aangemaakt.
- **Alles:** Volledige machtiging. De gebruiker heeft toegang tot de records van alle gebruikers en groepen.

#### Tabblad Formulieren

Op dit tabblad beheert u de interactie van de gebruiker met de gegevensinvoermodules van de applicatie.

![gebruikersmachtigingen-formulieren.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Voor elk weergegeven formulier moet u de volgende parameters definiëren:

- **Actief:** Bepaalt de zichtbaarheid. Als dit is aangevinkt, verschijnt het formulier in het zijmenu voor de gebruiker.
- **Lezen:** Stelt het machtigingsniveau in voor alleen het bekijken van records.
- **Schrijven:** Bepaalt of de gebruiker nieuwe gegevens mag invoeren of bestaande gegevens mag bewerken.
- **Verwijderen:** Bepaalt of de gebruiker bevoegdheid heeft om records uit de database te verwijderen.

#### Tabblad Rapporten

Net als bij de formulieren beheert dit tabblad de toegang tot de modules voor het bekijken en extraheren van analytische gegevens.

![gebruikersmachtigingen-rapporten.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Om een rapport beschikbaar te maken, moet de optie **Actief** zijn geselecteerd zodat de gebruiker toestemming heeft om het te bekijken.

- **Opslaan:** Klik op de knop "Opslaan" om de wijzigingen op te slaan.

### 4 - Actieknoppen

![actieknoppen.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Opslaan:** Slaat alle aangebrachte wijzigingen op.

 - **Wissen:** Wist alle velden van het formulier en zet het terug naar de begintoestand van "Nieuwe gebruiker toevoegen".

 - **Impersoneren:** Een krachtige tool van Netuno. Nadat u de machtigingen van een gebruiker hebt opgeslagen en op de knop **"Impersoneren"** hebt geklikt, kunt u het systeem precies bekijken zoals de geregistreerde gebruiker het zal gebruiken. Dit is essentieel om te testen of de machtigingen correct zijn ingesteld.

 - **Verwijderen:** Verwijdert het gebruikersrecord permanent.

## Groep

Dit is het centrale paneel voor het beheren van toegangsprofielen in Netuno, waarmee u twee acties kunt uitvoeren: **“Toevoegen”** van een nieuwe groep en **“Bewerken”** van een bestaande groep.

Een groep fungeert als een profiel of toegangsregel die bepaalt wat elke set gebruikers binnen het systeem kan bekijken of doen.

In plaats van machtigingen afzonderlijk voor elke gebruiker te configureren, definieert u deze in de groep en koppelt u gebruikers eraan, wat zorgt voor schaalbaar en georganiseerd beheer.

Klik rechtsboven in het scherm op **"Developer"** en ga naar het gedeelte **"Groep"**.

#### Vereisten

- **Administratieve toegang:** U moet een profiel met beheerdersrechten hebben om groepen aan te maken of te wijzigen.

### Een nieuwe groep toevoegen

![nieuwe-groep-toevoegen.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Zoek het gedeelte "Toevoegen".
- **Naam:** Geef de groep een duidelijke en beschrijvende naam.
- **Inloggen toestaan:** Vink deze optie aan als gebruikers in deze groep moeten kunnen inloggen op het systeem.
- **Beheerder:** Vink deze optie alleen aan als gebruikers in deze groep volledige toegang tot het systeem hebben.
- **E-mail:** Voer een contact-e-mailadres voor de groep in.
- **Actief:** Vink deze optie aan om de instellingen in het systeem te activeren.
- **Knop Opslaan:** Klik om de instellingen van de groep op te slaan.
- **Knop Wissen:** Klik om alle velden van het formulier te wissen.

### Een bestaande groep bewerken

![bestaande-groep-bewerken.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Selecteer de geregistreerde groep in het invoerveld "Bestaande groep bewerken" bovenaan de pagina.
- Klik op de keuzelijst "Een groep selecteren".
- Kies de groep die u wilt bewerken in de lijst.
- Wacht tot de gegevens van de groep automatisch de velden invullen (Naam, E-mail en de opties).
- Breng de gewenste wijzigingen aan en klik op "Opslaan".

## Registratiegeschiedenis

Het scherm "Registratiegeschiedenis" is de log- en audittool van uw applicatie.

Wanneer een gebruiker een record in een formulier aanmaakt, bewerkt of verwijdert, slaat het systeem een "log" van die actie op.

Op deze pagina kunt u deze volledige geschiedenis doorzoeken en filteren. Dit is essentieel voor:

 - **Beveiliging:** Het monitoren van verdachte of ongeoorloofde activiteiten.

 - **Audit:** Het bijhouden van een conformiteitsregistratie van alle gegevenswijzigingen.

 - **Diagnose:** Begrijpen hoe een specifieke record in zijn huidige staat terechtkwam. Voorbeeld: "wie heeft deze klant verwijderd?".

### De registratiegeschiedenis doorzoeken

![logboek.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Vul een of meer velden onder "Filters" in om de logrecords te vinden die u wilt opzoeken en klik vervolgens op de knop "Zoeken".

- Ga naar de pagina "Registratiegeschiedenis".
- Vul de gewenste filters in om uw zoekopdracht te beperken. Het is niet nodig alle velden in te vullen. Voorbeeld: om alles te zien wat gebruiker "Developer" vandaag heeft gedaan:
- Selecteer "Developer" in het veld Gebruiker.
- Selecteer in het veld Begin de datum van vandaag en het tijdstip.
- Selecteer in het veld Einde de datum van vandaag en het tijdstip.
- Klik op de knop "Zoeken".
- De resultaten (de lijst met logs) worden onder het zoekformulier weergegeven.

## Afsluiten

Klik op “Afsluiten” om uw sessie in het systeem veilig te beëindigen.