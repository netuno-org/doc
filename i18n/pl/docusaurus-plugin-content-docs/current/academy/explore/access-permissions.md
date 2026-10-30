---
id: access-permissions
title: Dostęp i uprawnienia
sidebar_label: Dostęp i uprawnienia
---

Jak zarządzać użytkownikami, grupami i zapewnić bezpieczeństwo aplikacji.

## Wprowadzenie

Bezpieczeństwo jest jednym z fundamentalnych filarów każdej aplikacji. Niezależnie od tego, czy jest to prosta aplikacja wewnętrzna, czy złożony system z tysiącami użytkowników zewnętrznych przez API.

Netuno oferuje natywnie solidny system **Kontroli dostępu i uprawnień**, zapewniając narzędzia niezbędne do centralnego i wydajnego zarządzania bezpieczeństwem. Eliminuje to potrzebę tworzenia tych funkcji od zera.

Wśród głównych mechanizmów bezpieczeństwa wyróżniają się:

- Zarządzanie użytkownikami i grupami.
- Kontrola uprawnień do danych i zarządzanie danymi.
- Szczegółowa historia prób uwierzytelniania.
- Automatyczna blokada adresu IP po kolejnych nieudanych próbach dostępu.
- Zintegrowane uwierzytelnianie z LDAP, Google, GitHub, Discord itp.
- Moduł uwierzytelniania JWT dla front-endu.
- Między innymi...

## Zarządzanie użytkownikami

Polega na administrowaniu indywidualnymi kontami, które uzyskują dostęp do platformy. Każdy użytkownik, usługa lub integracja, która musi uzyskać dostęp do systemu, powinna mieć unikalny rekord użytkownika.

W obszarze zarządzania użytkownikami Netuno masz pełną kontrolę nad cyklem życia tych kont:
- **Tworzenie**: Rejestracja nowych członków zespołu lub klientów.
- **Utrzymanie**: Aktualizacja adresów e-mail, zmiana haseł i danych rejestracyjnych.
- **Kontrola dostępu**: Szybkie blokowanie kont (dezaktywacja) bez konieczności usuwania danych historycznych.

:::tip Przewodnik wizualny
Aby uzyskać szczegółowe informacje na temat zarządzania użytkownikami, zapoznaj się z [Przewodnikiem po interfejsie: użytkownicy i grupy](/docs/academy/ui/groups-users)
:::


## Zarządzanie grupami

Definiowanie reguł autoryzacji odbywa się za pomocą grup, które określają, jakie menu, formularze, usługi i dane każdy użytkownik może przeglądać lub modyfikować. Zamiast konfigurować uprawnienia indywidualnie, najlepiej zdefiniować reguły w grupie, a następnie przypisać do niej użytkowników. Ta procedura zapewnia:

- **Skalowalność:** Łatwość zarządzania setkami użytkowników.
- **Bezpieczeństwo:** Mniejsze ryzyko przypadkowego przyznania nieodpowiedniego dostępu.
- **Organizacja:** Wyraźny podział między administratorami, menedżerami, supervisorami i zwykłymi użytkownikami.

Netuno ma wbudowane grupy, takie jak `dev` i `admin`, i daje pełną autonomię w tworzeniu niestandardowych grup dostosowanych do reguł biznesowych Twojej aplikacji.

:::tip Przewodnik wizualny
Aby uzyskać szczegółowe informacje na temat zarządzania grupami, zapoznaj się z [Przewodnikiem po interfejsie: użytkownicy i grupy](/docs/academy/ui/groups-users)
:::


## Kontrola uprawnień do danych

Aby zapewnić działanie grupy lub uprawnienia użytkownika, kluczowe jest ustalenie, jakie dane może on modyfikować. W Netuno kontrola dostępu jest szczegółowa i stosowana bezpośrednio do formularzy (tabel) Twojej aplikacji.

System wykorzystuje macierz uprawnień, która pozwala zdefiniować dla każdej funkcjonalności, czy dana grupa ma odpowiednie uprawnienia do:

- **Odczyt:** Tylko przeglądanie rekordów.
- **Zapis:** Wstawianie i edytowanie rekordów w bazie danych.
- **Usuwanie:** Trwałe usuwanie rekordów.

Ta elastyczność zapewnia ochronę danych wrażliwych, ponieważ każdy współpracownik ma dostęp ograniczony wyłącznie do informacji niezbędnych do wykonywania jego zadań.

:::tip Przewodnik wizualny
Aby uzyskać szczegółowe informacje na temat konfigurowania uprawnień do danych, zapoznaj się z [Przewodnikiem po interfejsie: użytkownicy i grupy](/docs/academy/ui/groups-users)
:::

## Historia uwierzytelniania

Aby zapewnić przejrzystość i kontrolę, wszystkie próby dostępu (udane lub nieudane) są rejestrowane i można je sprawdzić w Historii uwierzytelniania.

System szczegółowo monitoruje i przechowuje informacje o każdej próbie logowania użytkownika:

- **IP źródłowy:** Adres sieciowy, z którego pochodziło żądanie.
- **Czas:** Dokładny moment wykonania czynności.
- **Dostęp:** Czy dostęp został dozwolony, odrzucony czy zablokowany.

#### Legenda ikon dostępu

🟩 **Kłódka/check_mark w kolorze zielonym:** Wskazuje powodzenie. Użytkownik podał prawidłowe dane logowania i logowanie zostało autoryzowane. Wskazuje również, że źródłowy adres IP został odblokowany.

🟧 **Ikona z „X” w kolorze pomarańczowym:** Wskazuje liczbę nieudanych prób.

🟥 **Kłódka w kolorze czerwonym:** Wskazuje blokadę źródłowego adresu IP.

## Automatyczna blokada

Netuno ma aktywny system bezpieczeństwa zaprojektowany do ochrony aplikacji przed atakami i nieautoryzowanym dostępem.

Gdy wykryte zostaną podejrzane działania, takie jak wiele kolejnych nieudanych prób logowania, system automatycznie blokuje źródłowy adres IP.

Po zablokowaniu adres IP nie będzie mógł wykonywać nowych żądań przez określony czas lub do momentu ręcznego usunięcia blokady.

### Konfiguracja reguł blokady

Ta reguła jest zdefiniowana w **plikach konfiguracyjnych** środowiska Twojej aplikacji „development.json” lub „production.json”.

#### 1. Znajdź plik konfiguracyjny

W katalogu głównym projektu przejdź do folderu `config`. Otwórz plik odpowiadający środowisku, które chcesz chronić:

* Dla środowiska deweloperskiego: `_development.json`

* Dla środowiska produkcyjnego: `_production.json`

#### 2. Wstaw kod ochrony
W pliku JSON znajdź sekcję `auth`. Jeśli jej nie ma, wstaw blok `attempts` zgodnie z poniższym przykładem:

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

#### 3. Zrozumienie parametrów

* `interval`: Okno czasowe w **minutach** (przykład: 60 minut = 1 godzina).

* `maxFails`: Maksymalna liczba niepowodzeń dozwolonych w tym przedziale czasowym przed blokadą.


#### 4. Zachowanie systemu

- Po automatycznej blokadzie użytkownik nie może uzyskać dostępu do aplikacji.

- Domyślnie system jest skonfigurowany na trzy nieudane próby z blokadą na jedną godzinę. Po tym okresie próby są ponownie dozwolone.

- Ten proces można skonfigurować zgodnie z potrzebami Twojej aplikacji.


### Odblokowanie przez interfejs

Tylko użytkownik z uprawnieniem „Administrator” może zwolnić dostęp bezpośrednio przez Back-Office bez konieczności uzyskiwania dostępu do bazy danych.

1. Przejdź do menu aplikacji w trybie „Widok” i kliknij sekcję **„Konfiguracja > Użytkownicy”**.
![Sekcja konfiguracji użytkownika](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. W polu **„Edytuj istniejącego użytkownika”** wybierz żądanego użytkownika.
![Wybieranie istniejącego użytkownika](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. W sekcji **„Historia uwierzytelniania”** sprawdź, czy status „Dostęp” wyświetla ikonę „Kłódka” w kolorze zielonym;
![Sekcja historii uwierzytelniania](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Kliknij ikonę **Zegar**, aby sprawdzić pełną listę dostępów użytkownika.
![Historia uwierzytelniania](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Kliknij zieloną kłódkę w kolumnie **„Dostęp”**, aby odblokować użytkownika. Po tej czynności wyświetlany jest komunikat o powodzeniu.

Odblokowanie jest natychmiastowe i pozwala użytkownikowi ponownie spróbować logowania.


## Zintegrowane uwierzytelnianie

Twoja aplikacja może wymagać bardziej zaawansowanych metod logowania, zwłaszcza jeśli tworzysz aplikację mobilną lub integrujesz się z siecią korporacyjną.

Netuno został zaprojektowany tak, aby był elastyczny i integrował się z ekosystemem Twojej organizacji. Oprócz standardowego logowania (nazwa użytkownika i hasło) platforma obsługuje różne rynkowe protokoły uwierzytelniania.

Pozwala to wdrożyć strategie Single Sign-On (logowanie jednokrotne), w których użytkownicy uzyskują dostęp do systemu przy użyciu posiadanych już danych uwierzytelniających, centralizując zarządzanie dostępem.

**Środowiska korporacyjne:** Zgodność z katalogami użytkowników (takimi jak LDAP i Active Directory), idealna dla intranetów i systemów wewnętrznych.

**Logowanie społecznościowe (OAuth):** Możliwość integracji z dostawcami takimi jak Google, Microsoft, GitHub i innymi, ułatwiająca rejestrację i dostęp w aplikacjach publicznych.

## Uwierzytelnianie za pomocą tokena (JWT)

W projektach korzystających z dedykowanego front-endu (takich jak strony w React, Vue.js lub aplikacje mobilne) nie używa się tradycyjnego ekranu logowania Netuno. W takich scenariuszach stosuje się standard JWT (JSON Web Token).

Netuno oferuje natywną usługę, która automatycznie generuje i weryfikuje te tokeny, zapewniając bezpieczeństwo i wydajność komunikacji przez API.

:::tip Przewodnik wizualny
Aby uzyskać więcej informacji na temat wdrażania i konfigurowania JWT w plikach konfiguracyjnych, zapoznaj się z [Przewodnikiem po uwierzytelnianiu JWT](/docs/academy/server/services/jwt)
:::

## Podsumowanie

Opanowanie funkcji bezpieczeństwa Netuno ma kluczowe znaczenie dla kondycji Twojego projektu. Prawidłowo korzystając z narzędzi do zarządzania użytkownikami i grupami oraz monitorowania historii, budujesz środowisko, które równoważy ochronę danych z łatwością użytkowania.

Dzięki temu zapewniasz, że Twój system w Netuno jest:

- **Bezpieczny:** Chroni wrażliwe informacje przed nieautoryzowanym dostępem.

- **Zorganizowany:** Ustanawia jasne hierarchie i odpowiedzialności.

- **Skalowalny:** Gotowy do rozwoju dzięki nowoczesnym integracjom.

**Przestrzegaj dobrych praktyk:** Okresowo przeglądaj uprawnienia grup i sprawdzaj historię dostępów, aby utrzymać swoje środowisko w dobrej kondycji.