---
sidebar_position: 8
id: actions
title: Akcje
sidebar_label: Akcje
---

Jak tworzyć i ponownie wykorzystywać CTA (przyciski/linki) powiązane z komponentami.

## Wprowadzenie

**Akcja** to w istocie **CTA** (call-to-action) wielokrotnego użytku — przycisk/link z tytułem, tekstem, obrazem i miejscem docelowym (`link`) — który można powiązać z [Komponentami](/docs/academy/cluar/components/overview) takimi jak Baner, Treść, Lista, Slider (w elementach) i Funkcjonalność.

## Pola

| Pole | Opis |
|---|---|
| **Tytuł** (`title`) | Tytuł akcji, renderowany jako nagłówek (`<h4>`). |
| **Treść** (`content`) | Tekst opisowy akcji, renderowany jako akapit (`<p>`). |
| **Etykieta** (`indication`) | Tekst samego linku/CTA — to, co pojawia się **wewnątrz** klikalnego przycisku (np. „Dowiedz się więcej”, „Kup teraz”). |
| **Obraz** (`image`) | Obraz powiązany z akcją (np. ikona). |
| **Łącze** (`link`) | Miejsce docelowe akcji (URL) — dokąd prowadzi CTA po kliknięciu. |
| **Język** (`language_id`) | Język, do którego należy ta akcja. |
| **Parametr** (`parameter_id`) | Grupuje tę akcję z jej odpowiednikami w innych językach — patrz poniżej. |

## Parametr

**Parametr** (`action_parameter`, zawierający tylko `código` i `descrição`) jest agregatorem: wiele Akcji — każda w swoim języku, ale reprezentujących **tę samą funkcjonalność/cel** — współdzieli ten sam Parametr.

Używa się tego podczas [klonowania strony](/docs/academy/cluar/pages/cloning) do innego języka: dla każdej Akcji powiązanej z komponentem oryginalnej strony CLUAR szuka wśród istniejących Akcji takiej, która ma **ten sam Parametr** i jest w **języku docelowym** klonowania. Jeśli ją znajdzie, automatycznie przypisuje tę Akcję (wersję już przetłumaczoną) do sklonowanego komponentu — bez konieczności dodawania jej ręcznie później.

:::info Najpierw trzeba utworzyć Akcję w języku docelowym
Automatyczne przypisanie działa tylko wtedy, gdy istnieje już Akcja z tym samym Parametrem w języku, do którego klonujesz. Jeśli jeszcze jej nie ma, akcja po prostu nie zostanie przypisana do sklonowanego komponentu — pozostanie tak, jakby nie została zdefiniowana. Innymi słowy, Parametr nie tłumaczy ani nie tworzy Akcji automatycznie; łączy tylko istniejące równoważne Akcje, gdy zostały już utworzone w każdym języku.
:::

Na przykład: Akcja „Dowiedz się więcej” z Parametrem `dowiedz-sie-wiecej`, po polsku, i inna Akcja „Learn more” z tym samym Parametrem `dowiedz-sie-wiecej`, po angielsku — podczas klonowania strony z polskiego na angielski Baner, który miał przypisaną pierwszą Akcję, automatycznie otrzyma drugą.

## Następny krok

Poznaj [Konfiguracje](/docs/academy/cluar/settings).