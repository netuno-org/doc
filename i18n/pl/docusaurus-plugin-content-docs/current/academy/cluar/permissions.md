---
sidebar_position: 12
id: permissions
title: Uprawnienia
sidebar_label: Uprawnienia
---

Jak dostęp do backoffice jest kontrolowany przez role i organizacje.

## Wprowadzenie

CLUAR kontroluje dostęp do backoffice poprzez **role** (grupy) przypisane osobom w ramach **organizacji**. Każda usługa REST serwera jest klasyfikowana do kategorii dostępu i tylko osoba z właściwą rolą, w ramach właściwej organizacji, może jej użyć.

## Role

Istnieje 5 wstępnie utworzonych ról (`user_group`):

| Kod | Nazwa |
|---|---|
| `administrator` | Administrator |
| `editor` | Edytor |
| `author` | Autor |
| `contributor` | Współpracownik |
| `subscriber` | Subskrybent |

:::info Nie wszystkie role mają jeszcze przypisane uprawnienia
Obecnie tylko **Administrator** i **Edytor** mają faktycznie dostęp do czegokolwiek — to jedyne role wymienione w regułach dostępu (patrz poniżej). Autor, Współpracownik i Subskrybent istnieją już jako opcje w formularzu, ale nie mają jeszcze skonfigurowanego żadnego dostępu; przypisanie komuś jednej z tych ról nie daje mu obecnie dostępu do niczego w backoffice.
:::

## Organizacja

Osoba ma rolę tylko **w kontekście organizacji** — powiązanie tworzy się w `Organizacja > Członkowie` (`organization_people`), łącząc Osobę + Organizację + Rolę.

Obecnie istnieje tylko jedna organizacja o kodzie `admins` i to w niej weryfikowane są wszystkie uprawnienia. Encja `organization` obsługuje hierarchię (`parent_id`, organizacje „nadrzędne”), ale ta hierarchia nie jest jeszcze używana w obecnych regułach uprawnień — wszystkie weryfikacje wskazują bezpośrednio na organizację `admins`.

## Pierwszy dostęp do trybu edycji

CLUAR rozróżnia dwa różne miejsca logowania:

- **Backoffice Netuno** (port `9000` w środowisku deweloperskim) — tam bezpośrednio zarządza się użytkownikami Netuno (`netuno_user`, para nazwa użytkownika/hasło) i wszystkimi encjami, w tym Osobą i Rolami.
- **Strefa zastrzeżona** samej witryny (`/login`, port `3000` w środowisku deweloperskim) — tam redaktor treści loguje się na co dzień, aby uzyskać dostęp do trybu edycji stron.

Aby wejść do Strefy zastrzeżonej i mieć dostępny tryb edycji, potrzebny jest użytkownik Netuno z loginem powiązany z **Osobą**, która jest powiązana z organizacją `admins` z rolą **Administrator** lub **Edytor** (patrz [Organizacja](#organizacja) powyżej).

### Domyślny użytkownik

Plik `server/setup/030-people.js` w CLUAR domyślnie tworzy już Osobę „admin” powiązaną z użytkownikiem Netuno o `id: 2`, a `server/setup/050-organization_people.js` łączy tę Osobę z organizacją `admins` z rolą **Administrator** — czyli ten użytkownik od razu ma pełny dostęp.

Dane logowania tego domyślnego użytkownika to:

```
użytkownik: admin
hasło: admin
```

Z tymi danymi logowania można od razu wejść do Strefy zastrzeżonej (`/login`) jako Administrator — bez konieczności wykonywania najpierw żadnego dodatkowego kroku w backoffice Netuno.

:::info Zmień domyślne hasło w środowisku produkcyjnym
`admin`/`admin` to znane i przewidywalne dane logowania. Zanim witryna trafi na produkcję, zmień hasło tego użytkownika (albo utwórz nowego Administratora i dezaktywuj tego).
:::

### Tworzenie nowych użytkowników

Istnieją dwie możliwe ścieżki:

**Przez Strefę zastrzeżoną (zalecane):** w `Użytkownicy > Utwórz użytkownika` jeden formularz obejmuje nazwę, nazwę użytkownika, hasło, e-mail, Organizację i Rolę — i tworzy wszystko naraz: użytkownika Netuno, Osobę (już powiązaną z tym użytkownikiem) oraz powiązanie z wybraną organizacją/rolą. Nie trzeba przechodzić przez backoffice Netuno.

**Tylko przez backoffice Netuno:** ponieważ backoffice daje bezpośredni dostęp do wszystkich encji, te same 3 kroki można wykonać ręcznie, nie wychodząc z niego:

1. Utwórz użytkownika Netuno (`netuno_user`) z wybraną nazwą użytkownika/hasłem.
2. Utwórz **Osobę** i powiąż ją z tym użytkownikiem Netuno.
3. W `Organizacja > Członkowie` powiąż tę Osobę z organizacją `admins` z rolą Administrator lub Edytor.

W obu przypadkach utworzona osoba może od razu zalogować się do `/login` i uzyskać dostęp do trybu edycji.

## Jak stosowane są uprawnienia

Każda usługa serwera jest klasyfikowana do jednej z tych kategorii zdefiniowanych w `server/core/_service_config.js`:

| Kategoria | Kto ma dostęp | Przykłady |
|---|---|---|
| **Publiczne** | Każdy, bez logowania | Kontakt, avatar, logowanie |
| **Zarządzanie treścią** | Administrator + Edytor | Strony, wersje, komponenty, słownik, akcje |
| **Administracja witryną** | Tylko Administrator | Konfiguracje, języki, synchronizacja |
| **Zarządzanie dostępem** | Tylko Administrator | Organizacje, osoby, użytkownicy |

Każda usługa niewymieniona w żadnej z tych kategorii jest **domyślnie odrzucana** — to celowa decyzja w kodzie (wyraźnie skomentowana w pliku), aby zapomnienie o sklasyfikowaniu nowej usługi skutkowało zablokowaniem, a nie przypadkowym wolnym dostępem.

:::info Uprawnienia nie są stosowane w środowisku deweloperskim
W środowisku `dev` plik `_service_config.js` zwalnia wszystkie usługi od razu na początku, przed jakąkolwiek weryfikacją — czyli **uprawnienia są naprawdę stosowane tylko w środowisku produkcyjnym/staging**. Podczas testów lokalnych każdy zalogowany użytkownik ma dostęp do wszystkiego, niezależnie od roli.
:::

## Interfejs: menu również filtruje według uprawnień

Oprócz blokady po stronie serwera, menu boczne Strefy zastrzeżonej (`website/src/components/SideMenu`) również filtruje widoczne pozycje zgodnie z rolą zalogowanej osoby — aby nie pokazywać opcji, których nie miałaby ona uprawnień używać.

:::info Utrzymuj obie listy zsynchronizowane
Lista „kto może co widzieć” w `SideMenu` jest ręcznie utrzymywana w zgodzie z `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` i `ACCESS_MANAGEMENT_PATHS` z `_service_config.js` — to dwie osobne listy, jedna we frontendzie, druga w backendzie. Przy dodawaniu nowej chronionej usługi trzeba zaktualizować obie; zmiana tylko serwera ukrywa błąd (menu nadal pokazuje opcję, która w praktyce zostanie odrzucona), a zmiana tylko menu tak naprawdę niczego nie chroni.
:::

## Jak chronić nową usługę

1. Utwórz usługę normalnie w `server/services/`.
2. Dodaj ścieżkę usługi (`path/method`) do właściwej listy w `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` lub `ACCESS_MANAGEMENT_PATHS` — w zależności od tego, kto powinien móc jej używać. Jeśli usługa jest publiczna, dodaj ją do `PUBLIC_PATHS`.
3. Jeśli usługa ma odpowiadającą jej pozycję w menu Strefy zastrzeżonej, zaktualizuj także `SideMenu`, aby filtr odpowiadał rzeczywistemu uprawnieniu.