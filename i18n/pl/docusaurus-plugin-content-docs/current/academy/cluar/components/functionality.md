---
sidebar_position: 7
id: functionality
title: Funkcjonalność
sidebar_label: Funkcjonalność
---

Konkretne funkcjonalności dostępne do umieszczenia na stronie, takie jak formularze i mapy.

## Wprowadzenie

**Funkcjonalność** różni się od innych komponentów: zamiast wizualnych wariantów tej samej treści, każdy typ to **konkretna funkcjonalność** do umieszczenia na stronie — obecnie formularz kontaktowy lub mapa.

Działa według tego samego mechanizmu wspólnego dla wszystkich komponentów, opisanego w [Przeglądzie](/docs/academy/cluar/components/overview) i [Typach komponentów](/docs/academy/cluar/components/types) — ale tutaj, wybierając Typ, wybiera się, **która funkcjonalność** pojawi się na stronie, a nie tylko inny styl.

## Pola

Oprócz [wspólnych pól](/docs/academy/cluar/components/overview#wspólne-pola) (Typ, Kolejność, Tryb edycji, Odwróć tło, Akcje), Funkcjonalność ma:

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł bloku. |
| **Treść** (`content` / `html_content`) | Tekst bloku. |
| **Obraz** (`image`) | Powiązany obraz (nie wszystkie typy go używają). |

## Dostępne typy

### Formularz kontaktowy (`ContactForm`)

Wyświetla formularz kontaktowy (imię, e-mail, wiadomość), chroniony przez reCAPTCHA. Po przesłaniu wysyła dane do usługi `contact` na serwerze, która zapisuje je w encji `contact` (widocznej w backoffice) i pozwala skonfigurować alerty e-mail.

### Mapa kontaktowa (`ContactMap`)

Wyświetla interaktywną mapę, używając [Mapbox](https://www.mapbox.com/). Korzysta z konfiguracji `settings.cluar.website.mapbox` (zobacz [Konfiguracja](/docs/academy/cluar/configuration)) — w szczególności `accessToken` (wymagany, aby mapa działała) i opcji `dark` (jasny lub ciemny motyw mapy).

## Następny krok

Po zapoznaniu się z 5 komponentami przejdź do [Akcji](/docs/academy/cluar/actions), które można powiązać z większością z nich.