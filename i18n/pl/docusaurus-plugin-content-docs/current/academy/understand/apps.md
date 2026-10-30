---
sidebar_position: 2
id: apps
title: Aplikacje
---

Netuno jest serwerem wielu aplikacji i rozdziela dostęp do aplikacji za pośrednictwem domen i subdomen.

Wiele aplikacji web, zarówno publicznych, jak i prywatnych, ponieważ Netuno służy do budowy backoffice'ów. Z reguły aplikacje zawsze mają dostęp prywatny, ale interfejs publiczny jest opcjonalny.

Podczas tworzenia wielu aplikacji w Netuno można je rozdzielić lub nawet połączyć na poziomie bazy danych.

Oznacza to, że możemy współdzielić tę samą bazę danych przez wiele aplikacji albo mieć oddzielne bazy danych dla każdej aplikacji.

## Aplikacje rozdzielone w wielu bazach danych

Gdy chodzi o aplikacje o całkowicie różnych zakresach, dzielenie tej samej bazy danych nie ma sensu.

Wyobraź sobie, że masz aplikację do wysyłania newsletterów, inną do zarządzania książkami i jeszcze inną do zarządzania dostawami; żadna z nich nie potrzebuje informacji przechowywanych w innej aplikacji, są całkowicie niezależne.

Nie ma więc powodu, aby współdzieliły tę samą bazę danych; każda powinna mieć własną bazę danych:

![Aplikacje rozdzielone.](/docs/assets/business/apps-db-pt-desacopladas.svg "Aplikacje rozdzielone.")

W ten sposób żadna aplikacja nie zna informacji przechowywanych w innych aplikacjach, a jej całe działanie jest niezależne od pozostałych istniejących aplikacji.

## Aplikacje połączone w tej samej bazie danych

Gdy pracujemy z aplikacjami, które muszą współdzielić informacje i w których może występować duży wolumen danych, współdzielenie bazy danych jest najkorzystniejszym rozwiązaniem pod względem wydajności, ale nie jest najlepszym rozwiązaniem pod względem bezpieczeństwa i integralności danych.

Dlatego ze względu na bezpieczeństwo i integralność zwykle tworzy się duże aplikacje web, w których wszystko jest scentralizowane w jednej złożonej aplikacji korzystającej z własnej, wyłącznej bazy danych; jeśli aplikacja potrzebuje danych zewnętrznych, może w razie potrzeby integrować się z innymi bazami danych i usługami webowymi.

W tym przypadku Netuno dostarcza już wszystkie środki do tworzenia tego typu aplikacji, ale oferuje też dobre rozwiązanie dla aplikacji ze współdzieloną bazą danych.

Ponieważ głównym problemem jest bezpieczeństwo i integralność danych, w Netuno gdy kilka aplikacji używa tej samej bazy danych, automatycznie zostają one ograniczone do swoich tabel powiązanych z ich formularzami.

Pozwala to udostępnić formularz, a w konsekwencji jego tabelę, innym aplikacjom połączonym w bazie danych.

Wyobraź sobie scenariusz, w którym masz aplikację do zarządzania klientami, inną do zarządzania dostawcami, a jeszcze inną do fakturowania; wynika to z tego, że będziesz mieć zarówno faktury dostawców do zapłaty, jak i faktury klientów oczekujące na płatność.

Aplikacja klientów nie powinna współdzielić danych z aplikacją dostawców; to odrębne aplikacje.

Ale aplikacja fakturowania musi integrować się z obiema aplikacjami, aby uzyskać dane z aplikacji klientów i dostawców, powiązać faktury oraz zarządzać należnościami i płatnościami w różnych sytuacjach.

![Aplikacje połączone.](/docs/assets/business/apps-db-pt-acopladas.svg "Aplikacje połączone.")

Aby zapewnić, że aplikacje nie ingerują w swoje wrażliwe dane, zaleca się również stosowanie odrębnych dostępów do bazy danych dla każdej aplikacji; można ponadto kontrolować za pomocą bazy danych ich dostęp do tabel, aby zagwarantować, że nie wystąpią niepożądane ingerencje.

Poza tym Netuno sprawuje kontrolę, aby oddzielić to, co należy do jednej lub drugiej aplikacji, a także to, co jest między nimi współdzielone.

## Adres każdej aplikacji

Netuno automatycznie rozdziela dostęp do aplikacji za pośrednictwem domeny i subdomeny.

Gdy do Netuno trafia żądanie, domena jest przetwarzana w następujący sposób:

![Przykładowy obraz adresu aplikacji z subdomeną.](/docs/assets/business/apps-subdomain.svg "Aplikacje z subdomeną.")

Netuno sprawdza, czy istnieje aplikacja o nazwie odpowiadającej fragmentowi do pierwszej kropki.

Jeśli istnieje aplikacja o tej nazwie, to właśnie ona otrzyma żądanie.

Jeśli nie istnieje żadna aplikacja o tej nazwie, żądanie zostanie przekazane do aplikacji domyślnej (_default_).

To rozwiązywanie domen działa również w przypadku sub-subdomeny, na przykład:

![Przykładowy obraz adresu aplikacji z sub-subdomeną.](/docs/assets/business/apps-sub-subdomain.svg "Aplikacje z sub-subdomeną.")

Oznacza to, że na podstawie fragmentu do pierwszej kropki określa się, która aplikacja otrzyma żądanie do przetworzenia.

Netuno pozwala również zdefiniować dokładny adres z domeną dla aplikacji; wystarczy określić dokładny adres, pod którym aplikacja będzie działać.

> Korzystanie z automatycznego sposobu przetwarzania domen umożliwia działanie aplikacji w zdecydowanej większości przypadków; jeśli mimo to zdarzą się sytuacje wymagające całkowicie innego i specyficznego adresu do działania aplikacji, należy zdefiniować go w jej konfiguracji.