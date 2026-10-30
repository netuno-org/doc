---
id: cron-jobs
title: Zadania cron - Usługi zaplanowane
sidebar_label: Zadania cron
---

## Zanim zaczniesz

Zanim przejdziesz dalej, upewnij się, że masz podstawową wiedzę z zakresu _**JavaScript**_ i znasz podstawy Netuno dzięki samouczkowi dostępnemu w [Akademii](/docs/academy/overview).

## Wprowadzenie

Często zachodzi potrzeba okresowego wykonywania zadań, czyli co jakiś czas trzeba wysłać dane do innego systemu, zaimportować dane z innego systemu, wysłać e-mail, zweryfikować rekordy w bazie danych i wiele więcej...

W systemach Linux/UNIX/Mac istnieje usługa Cron ze słynnym plikiem konfiguracyjnym `crontab`, a w Windows istnieje Task Manager (_Menedżer zadań_).

W Netuno zadania cron są już wbudowane, co pomaga uniknąć zewnętrznej konfiguracji.

Ten rodzaj operacji okresowych jest znany jako zadania cron (Cron Jobs), a po polsku jako zadania zaplanowane.

Każda aplikacja Netuno może mieć wiele zadań cron, a zadania cron Netuno mogą wykonywać zarówno wewnętrzne usługi i adresy URL, jak i zewnętrzne adresy URL.

> Aby uzyskać więcej informacji, zapoznaj się z dokumentacją zasobu [cron](/docs/library/resources/cron).

## Jak to działa

Każda aplikacja ma konfigurację własnych zadań zaplanowanych (**zadania cron**) wraz z odpowiednią konfiguracją wykonania.

Mówiąc prościej, każde zaplanowane zadanie to osobny **job**, który ma własną konfigurację wykonania i może być wykonywany co minutę, co 5 minut, co godzinę, w określonym dniu i godzinie tygodnia itp. Ma także adres URL wywoływany w momencie wykonania.

> Netuno korzysta z biblioteki <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> do zarządzania wykonywaniem zaplanowanych zadań. Konfiguracja reguł harmonogramu odnosi się do tej biblioteki.

Wykonanie każdego joba polega więc na wywołaniu adresu URL (_adresu internetowego, linku_), który może być zewnętrzny lub wewnętrzny względem samej aplikacji. Jeśli jest to link zewnętrzny, może prowadzić do innej aplikacji lub dowolnego zewnętrznego adresu URL w internecie, sieci lub na komputerze.

![Diagram cron](/docs/assets/academy/server/cron.svg)

Powyższy diagram pokazuje, że Netuno zawiera 2 aplikacje, z których każda ma skonfigurowane 2 joby (_zaplanowane zadania_), wykonywane w różnych momentach zgodnie z dowolną konfiguracją.

Przebieg wykonania będzie następujący:

- Aplikacja 1 uruchamia 2 joby:
  - Zadanie 1: Wykonuje adres URL wewnętrznej usługi samej Aplikacji 1.
  - Zadanie 2: Wykonuje zewnętrzny, publiczny adres URL.
- Aplikacja 2 uruchamia 2 joby:
  - Zadanie 3: Wykonuje adres URL wewnętrznej usługi samej Aplikacji 2.
  - Zadanie 4: Wykonuje adres URL usługi Aplikacji 1.

> Aplikacje powinny mieć usługi wykonywane przez zadania cron w folderze:
> - 📂 `server/services/jobs`

Każdy adres URL jest wywoływany metodą HTTP POST. Konfiguracja joba pozwala dodać dodatkowe parametry, a także klucz tajny, aby uniknąć wykonania poza kontrolowanym kontekstem.

## Konfiguracja

Konfiguracja zaplanowanych zadań odbywa się w pliku konfiguracyjnym aplikacji, zależnie od środowiska.

> Konfiguracja nigdy nie powinna zaczynać się od `*`, ponieważ spowoduje to wykonywanie co sekundę, co może prowadzić do problemów z wydajnością o efekcie kuli śnieżnej, jeśli przetwarzanie w pewnym momencie potrwa dłużej niż 1 sekundę.

Aby to zrobić, przejdź w rozwijanej aplikacji do pliku konfiguracji środowiska. W tym przykładzie użyjemy pliku środowiska deweloperskiego znajdującego się w:

- 📂 `config/_development.json`

Sprawdź, czy nie ma już konfiguracji dla Cron; jeśli nie istnieje, dodaj na końcu pliku konfiguracyjnego (w formacie JSON) parametry konfiguracji:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "moje-zadanie",
                "config": "0 30 12 * * ?",
                "url": "http://moja-aplikacja.local.netu.no:9000/services/jobs/moje-zadanie"
            },
            {
                "name": "moje-zadanie",
                "config": "0 0/2 * * * ?",
                "url": "http://moja-aplikacja.local.netu.no:9000/services/jobs/moje-inne-zadanie",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "typ": "klient"
                }
            }
        ]
    },
    ...
}
```

W tej konfiguracji pierwszy job będzie wykonywany codziennie o dwunastej trzydzieści.

A drugi job będzie wykonywany co 2 minuty.

##### Zadania

Lista zaplanowanych zadań w aplikacji; ponieważ jest to tablica, możemy mieć skonfigurowanych wiele zadań.

##### Sekret

Jest to parametr klucza bezpieczeństwa, który chroni usługę, aby była wykonywana tylko wtedy, gdy otrzyma ten parametr z dokładnie taką samą wartością.

Dzieje się tak, ponieważ `jobs` to publiczne usługi i aby uniknąć ich zewnętrznego wykonania, zawierają tę ochronę.

##### Nazwa

Nazwa identyfikująca usługę wewnętrznie, której można użyć do operacji zarządzania, takich jak zatrzymywanie i wznawianie.

##### Konfiguracja

Konfiguracja wyrażenia harmonogramu usługi, czyli reguły jej planowania.

> Konfiguracja nigdy nie powinna zaczynać się od `*`, ponieważ spowoduje to wykonywanie co sekundę, co może prowadzić do problemów z wydajnością o efekcie kuli śnieżnej, jeśli przetwarzanie w pewnym momencie potrwa dłużej niż 1 sekundę.

Sprawdź poniżej obsługiwane wyrażenia.

##### URL

Adres, który będzie wywoływany okresowo.

##### Parametry

Są to parametry przekazywane do adresu URL podczas jego wykonania; adres URL jest wywoływany metodą **HTTP POST**, więc można dodawać dodatkowe parametry, takie jak _typ_ w powyższym przykładzie, lub nawet określić inny klucz tajny.

### Obsługiwane formaty wyrażeń cron

|NAZWA POLA | WYMAGANE | AKCEPTOWANE WARTOŚCI | DOZWOLONE ZNAKI SPECJALNE |
| ------- |:------:|:-----------:|--------------|
| Sekundy | TAK | 0-59 | , - * / |
| Minuty | TAK | 0-59 | , - * / |
| Godziny | TAK | 0-23 | , - * / |
| Dzień miesiąca | TAK | 1-31 | , - * ? / L W |
| Miesiąc | TAK | 1-12 lub JAN-DEC | , - * / |
| Dzień tygodnia | TAK | 1-7 lub SUN-SAT | , - * ? / L # |
| Rok | NIE | puste, 1970-2099 | , - * / |

##### Przykłady wyrażeń cron

|WYRAŻENIE | ZNACZENIE |
| ------- |------|
| 1 * * * * ? | Wykonuje w sekundzie numer 1 każdej minuty. |
| 0 0 12 * * ? | Uruchamia o 12:00 codziennie |
| 0 15 10 ? * * | Uruchamia o 10:15 codziennie |
| 0 15 10 * * ? | Uruchamia o 10:15 codziennie |
| 0 15 10 * * ? * | Uruchamia o 10:15 codziennie |
| 0 15 10 * * ? 2005 | Uruchamia o 10:15 codziennie w roku 2005 |
| 0 * 14 * * ? | Uruchamia co minutę począwszy od 14:00 do 14:59, codziennie |
| 0 0/5 14 * * ? | Uruchamia co 5 minut począwszy od 14:00 do 14:55, codziennie |
| 0 0/5 14,18 * * ? | Uruchamia co 5 minut począwszy od 14:00 do 14:55. Następnie uruchamia co 5 minut począwszy od 18:00 do 18:55, codziennie |
| 0 0-5 14 * * ? | Uruchamia co minutę począwszy od 14:00 do 14:05, codziennie |
| 0 10,44 14 ? 3 WED | Uruchamia o 14:10 i 14:44 w każdą środę marca. |
| 0 15 10 ? * MON-FRI | Uruchamia o 10:15 w każdy dzień roboczy tygodnia (od poniedziałku do piątku) |
| 0 15 10 15 * ? | Uruchamia o 10:15 piętnastego dnia każdego miesiąca |
| 0 15 10 L * ? | Uruchamia o 10:15 w ostatnim dniu każdego miesiąca |
| 0 15 10 L-2 * ? | Uruchamia o 10:15 w przedostatnim dniu każdego miesiąca |
| 0 15 10 ? * 6L | Uruchamia o 10:15 w ostatni piątek każdego miesiąca |
| 0 15 10 ? * 6L 2002-2005 | Uruchamia o 10:15 w każdy ostatni piątek każdego miesiąca w latach 2002, 2003, 2004 i 2005 |
| 0 15 10 ? * 6#3 | Uruchamia o 10:15 w trzeci piątek każdego miesiąca |
| 0 0 12 1/5 * ? | Uruchamia o 12:00 co 5 dni każdego miesiąca, począwszy od pierwszego dnia każdego miesiąca. |
| 0 11 11 11 11 ? | Uruchamia każdego 11 listopada o 11:11. |

> Konfiguracja nigdy nie powinna zaczynać się od `*`, ponieważ spowoduje to wykonywanie co sekundę, co może prowadzić do problemów z wydajnością o efekcie kuli śnieżnej, jeśli przetwarzanie w pewnym momencie potrwa dłużej niż 1 sekundę.

## Usługa

Zaplanowane zadania należy programować w folderze:

- 📂 `server/services/jobs`

Netuno automatycznie wykona te usługi i przeprowadzi walidację parametru `secret` z wartością z konfiguracji.

> `secret` służy do tego, aby usługa mogła być wykonana zewnętrznie bez uwierzytelniania, ale w bezpieczny sposób.

Usługa będzie wykonywana okresowo zgodnie ze zdefiniowaną parametryzacją.

Aby ręcznie przetestować wykonanie usługi, wystarczy wywołać bezpośredni adres URL usługi i przekazać parametr `secret`.

Na przykład przez GET:

- http://moja-aplikacja.local.netu.no:9000/services/job/moje-zadanie?secret=\*\*\*\*\*

W miejscu `*****` na końcu adresu URL należy wstawić rzeczywistą skonfigurowaną wartość `secret`.

## Przykład

Utwórz plik w:

- 📂 `server/services/jobs/test.js`

W tym pliku usługi umieść następujący kod:
```javascript
_log.info("Zadanie testowe!")
_out.print("Ok")
```

W pliku JSON konfiguracji aplikacji dostosuj parametryzację w następujący sposób:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "test",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/test"
            }
        ]
    },
    ...
}
```

Po uruchomieniu serwera Netuno w terminalu zacznie pojawiać się komunikat `Zadanie testowe!` co 30 sekund.

Jeśli otworzysz w przeglądarce adres URL:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

Zwróci tylko `Ok`, a w terminalu pojawi się komunikat `Zadanie testowe!`.

> W środowisku `development` walidacja `secret` nie działa, więc można wykonać bez przekazywania jakiegokolwiek `secret` i będzie działać, ale w innym środowisku, takim jak produkcja, jest już uwzględniana.

## Wiele zadań

Gdy zachodzi potrzeba utworzenia wielu zaplanowanych zadań, warto zwiększyć liczbę wątków używanych do równoległego wykonywania różnych zaplanowanych zadań.

Tę konfigurację wykonuje się w pliku `config.js` znajdującym się w katalogu głównym Netuno, dodając przykładową linię:

```javascript
config.cronThreadCount = 10
```

> Domyślnie ta konfiguracja pozwala tylko na 3 wątki.
> 
> Należy pamiętać, aby zwiększać liczbę wątków zgodnie z liczbą rdzeni CPU.

Używanie zbyt małej liczby wątków do wykonywania wielu równoległych harmonogramów może spowodować zatrzymanie wykonywania zaplanowanych zadań.

Jeśli więc zdarzają się przypadki, że zadania po pewnym czasie się zawieszają, prawdopodobnie wykonywanych jest zbyt wiele zadań równolegle, więc konieczne jest zwiększenie liczby wątków.

## Programowo

Netuno pozwala konfigurować i kontrolować zadania cron programowo.

Oznacza to, że poprzez kod możemy zarządzać wszystkim.

### Tworzenie nowego zadania

Aby utworzyć nowe zadanie, tworzymy jego harmonogram za pomocą [`_cron.schedule`](/docs/library/resources/cron#schedule).

Metoda [`_cron.schedule`](/docs/library/resources/cron#schedule) przyjmuje następujące parametry:

1. Klucz identyfikacyjny zadania: `key`.
2. Konfiguracja czasu harmonogramu wykonania.
3. Adres usługi, która ma zostać wykonana, czyli: `URL`.
4. Dodatkowe parametry przesyłane podczas wywołania usługi.

```javascript
_cron.schedule(
    'moje-zadanie',
    '0 0/60 * * * ?',
    `/services/jobs/aktualizacja-produktu`,
    _val.map()
        .set('id', 123)
)
```

Jeśli konieczne jest automatyczne utworzenie zadań przy inicjalizacji aplikacji, można zakodować ten automatyzm w pliku:

- `server/core/_init.js`

Plik ten jest wykonywany za każdym razem, gdy aplikacja jest inicjalizowana przez serwer Netuno.

### Usuwanie zadania

Aby usunąć określone zadanie, używamy [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Gdzie `key` to klucz identyfikacyjny zadania.

Zobacz przykład:

```javascript
_cron.remove('moje-zadanie')
```

### Wyświetlanie listy zadań

Za pomocą [`_cron.schedules()`](/docs/library/resources/cron#schedules) możemy wyświetlić listę wszystkich skonfigurowanych zadań.

Przykład wyświetlenia listy wszystkich zaplanowanych zadań: 

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Klucz</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parametry</td>`)
_out.println(`  <td>Opis</td>`)
_out.println(`  <td>Ostatnie wykonanie</td>`)
_out.println(`  <td>Następne wykonanie</td>`)
_out.println(`  <td>Priorytet</td>`)
_out.println('</tr>')
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Wstrzymywanie zadań

Za pomocą [`_cron.pause(key)`](/docs/library/resources/cron#pause) możemy wstrzymać wykonywanie określonego zadania.

Przykład wstrzymania wszystkich zaplanowanych zadań:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Klucz</td>`)
_out.println(`  <td>Wstrzymane</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Zwróć uwagę na użycie `_cron.pause` w powyższym przykładzie.

### Wznawianie zadań

Za pomocą [`_cron.resume(key)`](/docs/library/resources/cron#resume) możemy wznowić wykonywanie określonego zadania.

Przykład wznowienia wszystkich zaplanowanych zadań i wyświetlenia, kiedy zadania zostaną wykonane:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Klucz</td>`)
_out.println(`  <td>Wznowione</td>`)
_out.println(`  <td>Następne wykonanie</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Zwróć uwagę na użycie `_cron.resume` w powyższym przykładzie.