---
sidebar_position: 1
id: overview
title: Przegląd
sidebar_label: Przegląd
---

CLUAR to otwartoźródłowy CMS zbudowany na [Netuno](https://www.netuno.org/), służący do tworzenia wielojęzycznych witryn internetowych. Komponenty wizualne stron (banery, listy, slidery itp.) są tworzone w ReactJS, z [Ant Design](https://ant.design/) dla interfejsu, [React Router](https://reactrouter.com/) dla nawigacji i [Less](https://lesscss.org/) dla stylów — natomiast treść (strony, teksty, obrazy, języki, menu) jest zarządzana przez backoffice, bez konieczności programowania.

Kod jest dostępny w [repozytorium CLUAR na GitHubie](https://github.com/netuno-org/cluar) — wkład jest mile widziany.

## Model treści

Treść w CLUAR jest zgodna ze strukturą **Strona → Wersja → Komponenty**:

- Każda **Strona** reprezentuje adres URL witryny (`link`), z tytułem, menu, SEO itd.
- Każda strona ma jedną lub więcej **Wersji**, które pozwalają pracować nad szkicem bez wpływu na to, co zostało już opublikowane.
- W obrębie każdej wersji znajdują się **Komponenty** treści — Banner, Treść, Lista, Slider i Funkcjonalność — które są blokami faktycznie wyświetlanymi na stronie, każdy z własnym typem wizualnym i opcjonalnie powiązanymi akcjami (przyciskami/linkami).

## Architektura projektu

Projekt dzieli się na cztery części:

- **`server`** — aplikacja Netuno: encje danych, usługi REST oraz skrypty konfiguracji początkowej (`setup`).
- **`website`** — witryna w ReactJS, która pobiera dane przez REST i renderuje strony.
- **`ui`** — rozszerzenia backoffice Netuno specyficzne dla CLUAR.
- **`config`** — konfiguracja środowiska (baza danych, uwierzytelnianie, ustawienia ogólne).

## Następne kroki

- [Instalacja](/docs/academy/cluar/install)
- [Konfiguracja](/docs/academy/cluar/configuration)
- [Komponenty](/docs/academy/cluar/components/overview)
- [Strony](/docs/academy/cluar/pages/overview)
- [Języki](/docs/academy/cluar/languages)
- [Uprawnienia](/docs/academy/cluar/permissions)