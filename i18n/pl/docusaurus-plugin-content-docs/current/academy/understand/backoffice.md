---
sidebar_position: 1
id: backoffice
title: Backoffice
---

W tworzeniu aplikacji webowych i/lub mobilnych często występuje koncepcja backoffice’u – warstwy zarządzania danymi.

Innymi słowy, jest to warstwa zwykle działająca w sieci, w której użytkownicy zarządzający biznesem wchodzą do interfejsu umożliwiającego ingerencję w dane.

Dość często występują następujące wymagania:

- Zarządzanie użytkownikami;
- Zarządzanie grupami użytkowników;
- Manipulowanie rekordami bazy danych zgodnie z regułami biznesowymi;
- Logi rejestrujące, co i kiedy użytkownicy zrobili;
- Ograniczanie dostępu: w zależności od grupy lub użytkownika nie będzie można zmienić lub nawet zobaczyć określonych danych;
- Umożliwienie dostępu przez przeglądarkę i urządzenia mobilne;
- Generowanie raportów zarządczych;
- Dashboard dostosowany do biznesu z istotnymi informacjami, mogący prezentować wykresy i tabele;

Z tych i innych powodów tworzenie backoffice’u często wymaga tyle samo lub więcej pracy niż tworzenie aplikacji końcowej.

Ponadto często backoffice dostarcza API REST z usługami webowymi, które umożliwiają komunikację danych biznesowych z aplikacją końcową, czyli frontendem.

![Backoffice.](/docs/assets/business/business-backoffice.svg "Backoffice.")

Netuno zapewnia potężny silnik backoffice’u, w którym bez kodu można utworzyć strukturę danych, generując formularze zintegrowane z bazą danych do najczęstszych operacji, takich jak tworzenie, wyszukiwanie, edycja i usuwanie.

Zapewnia również zarządzanie użytkownikami i grupami oraz kontrolę dostępu z rejestrowaniem logów.

Pozwala tworzyć w podejściu low-code dashboardy, raporty oraz API REST (usługi webowe) zintegrowane z JWT (JSON Web Token).

> Ponieważ Netuno zapewnia wszystkie najczęstsze funkcjonalności gotowe do dostosowania zgodnie z modelem biznesowym, wysiłek potrzebny do opracowania backoffice’u na miarę zostaje drastycznie zmniejszony.

## Backoffice dla nowych projektów

Przy tworzeniu nowych projektów, zwłaszcza gdy chodzi o aplikacje dla klientów zewnętrznych, często pomija się budżet na backoffice, czyli ogranicza się czas przeznaczony na jego tworzenie i projektowanie interfejsów.

Dzieje się tak, ponieważ nie będzie on widoczny dla docelowego klienta, więc można odłożyć go na dalszy plan.

Ponadto decydenci koncentrują się bardziej na osiągnięciu końcowego rezultatu niż na wewnętrznych warstwach zarządzania, tym bardziej gdy wiąże się to z istotnymi kosztami.

Jednak podczas tworzenia, a zwłaszcza w fazie testów, posiadanie interfejsu backoffice’u pozwala lepiej zweryfikować spójność danych.

Ponieważ Netuno ułatwia budowę **modelu danych i automatycznie udostępnia w interfejsie webowym responsywne formularze do zarządzania danymi**, wystarczy użyć Netuno na etapie modelowania struktury danych, a automatycznie otrzyma się interfejs backoffice’u. Całkiem proste!

Następnie można zdecydować się na dalszy rozwój, aż do tworzenia dashboardów, raportów i usług webowych w całości w Netuno.

Albo z powodu jakiegoś ograniczenia lub wymogu można opracować usługi webowe i całe API REST w dowolnej innej technologii – wystarczy w tym celu korzystać z bazy danych wygenerowanej przez Netuno.

W każdym razie Netuno pozostanie opcją zaspokajającą potrzeby w zakresie backoffice’u.

## Backoffice dla istniejących aplikacji

W przypadku istniejących aplikacji, w których nie opracowano backoffice’u lub w których backoffice istnieje, ale ma ograniczenia.

Netuno można wykorzystać zarówno do rozbudowy istniejącego backoffice’u, jak i do uzupełnienia brakującego backoffice’u.

Ponieważ wysiłek potrzebny do utworzenia backoffice’u w Netuno jest dość niewielki, można zrobić w Netuno cały backoffice lub tylko niektóre moduły.

To od danej osoby zależy decyzja o kierunku wybieranych opcji technologicznych i jej wyobraźnia; jedno jest pewne – nie trzeba będzie zbytnio komplikować, jeśli pomyśli się o modułowym backoffice, który jest rozwijany i z czasem rośnie na miarę potrzeb.

Zwykle tworzenie modułowe jest bardzo złożone, ale ponieważ Netuno również upraszcza ten proces, umożliwiając tworzenie wielu aplikacji na tej samej bazie danych, jest to doskonałe rozwiązanie także do tworzenia niezależnych modułów pomocniczych rozszerzających istniejący backoffice bez wpływu na dotychczasowy backoffice.

Ponieważ Netuno łatwo integruje i potrafi zarządzać wieloma bazami danych w tej samej aplikacji, łatwe staje się importowanie i eksportowanie informacji do innej bazy danych.

Dzięki temu można lepiej oddzielić złożoność backoffice’u od aplikacji Netuno, które są jak dodatkowe „moduły” istniejącego backoffice’u.

## Wnioski

Niewątpliwie jednym z głównych celów Netuno jest maksymalne uproszczenie tworzenia backoffice’ów oraz integracja zarówno w istniejących, jak i nowych projektach, w których dobrze integruje się z innymi technologiami.

Netuno nie jest zamkniętą platformą, w której cały rozwój musi być odtąd prowadzony w Netuno; wręcz przeciwnie, Netuno można wykorzystać po prostu do zaspokojenia doraźnych potrzeb i przezwyciężenia ograniczeń dotyczących:

- Koszt
- Czas

Pozwalając na integrację z dowolną inną technologią.

Jeśli więc problemem jest brak pieniędzy lub zbyt napięty termin dostawy, a do tego występuje duża złożoność i integracja wielu technologii, Netuno należy postrzegać jako kolejną technologię, która rozwiąże problem kosztów i czasu, ułatwiając życie.