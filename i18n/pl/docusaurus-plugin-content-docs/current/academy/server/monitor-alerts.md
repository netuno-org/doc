---
id: monitor-alerts
title: Monitorowanie i alerty
sidebar_label: Monitorowanie i alerty
---

Alerty dotyczące wykorzystania sprzętu serwera.

## Wprowadzenie

Serwer Netuno zawiera wbudowany mechanizm monitorowania wydajności, który pozwala analizować wpływ systemu oprogramowania na zużycie sprzętu.

Monitorowanie pozwala aplikacjom implementować reguły alertowania, aby powiadamiać, gdy coś osiągnie poziom wymagający uwagi.

Monitorowanie i alerty dotyczą nie tylko danych wydajnościowych procesu serwera Netuno, ale także całego systemu działającego komputera.

Pozwala to więc na pełne monitorowanie wraz z alertowaniem.

## Konfiguracja

Konfiguracja ogólna pozwala włączyć prezentację danych w logach ogólnych Netuno oraz kontrolować interwał wykonywania zbierania i analizy wskaźników wydajności.

Konfiguracja alertów jest wykonywana w każdej aplikacji i pozwala mieć wiele alertów na aplikację.

### Logi i interwał ogólny

Netuno przechowuje logi wydajności w katalogu `logs`, który znajduje się w katalogu głównym Netuno.

W tym katalogu `logs` znajdują się pliki `stats-ROK_MIESIAC_DZIEN.json`, które są zawsze generowane automatycznie zgodnie z interwałem, który można zmienić w sposób opisany poniżej.

> Aby lepiej wyświetlić pliki, możesz użyć automatycznego formatowania w swoim ulubionym edytorze lub skorzystać z narzędzi online, takich jak:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> Można je również otworzyć w **Firefox**, który zapewnia doskonałe formatowanie.

##### Konfiguracja logów i interwału ogólnego

Aby włączyć prezentację danych wydajnościowych w logach ogólnych (`logs/netuno.log`) i w **konsoli**, edytuj plik `config.js` znajdujący się w katalogu głównym Netuno.

Dodaj następujący wiersz, jeśli jeszcze nie istnieje:

```
config.monitorLog = true
```

Możesz także zmienić domyślny interwał **60 sekund**, czyli informacje są zapisywane w logu tylko raz na minutę. W tym celu dodaj również poniższy wiersz kodu i zmień wartość sekund na żądany czas:

```
config.monitorInterval = 60
```

> Ten interwał jest ogólny i wpływa na interwał skonfigurowany w alertach aplikacji, który nigdy nie będzie krótszy niż ten interwał ogólny.

**Uruchom ponownie** serwer Netuno, aby zmiany zaczęły obowiązywać.

W konsoli zaczną być prezentowane informacje monitorowania, na przykład:

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
CPU Load: 
	System: 19.1% (+19.1%)
	Process: 3.9% (+3.9%)
Memory: 
	System: 
		Used: 9,525.9MB (58.1% +148.0MB)
		Free: 6,858.1MB (41.9% -148.0MB)
	Process: 
		Total: 384.0MB (9.4% +126.0MB)
		Used: 129.6MB (3.2% +18.9MB)
		Free: 254.4MB (6.2% +107.1MB)
		GC: false
Disk: 
	Used: 465,047.8MB (97.5% +21.3MB)
	Free: 11,854.3MB (2.5% -21.3MB)
```

### Alerty w aplikacjach

Alerty są konfigurowane w aplikacjach, więc edytuj konfigurację swojej aplikacji.

Czyli w aplikacji, w katalogu `config`, w konfiguracji środowiska, w plikach takich jak:

- _development.json
- _production.json

Dodaj konfigurację alertów monitorowania:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "moj-alert",
                "url": "http://NAZWA-APLIKACJI.local.netu.no:9000/services/moj-serwis-alertu"
            }
        ]
    }
...
```

> To jest najprostsza konfiguracja.

Gdy wystąpi sytuacja wymagająca alertu, wywołany zostanie ten `url` i przekazane zostaną parametry wydajnościowe.

Domyślnie alerty mają interwał **1 godziny** dla każdego typu alertu, więc alert zostanie wywołany tylko wtedy, gdy **procesor**, **pamięć** lub **dysk** (HD) przekroczy limit **90%** maksymalnej pojemności; po upływie godziny zostanie wysłany kolejny alert.

> W sytuacjach z wieloma alertami interwał ulega skróceniu; na przykład jeśli został wywołany alert pamięci, a po 20 minutach dysk również przekroczy 90%, natychmiast zostanie wywołany nowy alert, a interwał 1 godziny rozpocznie się od nowa.

### Zaawansowane alerty

Poniżej znajduje się bardziej zaawansowana konfiguracja, która pozwala zmienić interwał i limity zużycia **procesora**, **pamięci** lub **dysku** (HD):

```
...
    "monitor": {
        "alerts": [
            {
                "name": "moj-alert-prosty",
                "url": "http://NAZWA-APLIKACJI.local.netu.no:9000/services/moj-serwis-alertu"
            },
            {
                "name": "moj-alert-zaawansowany",
                "url": "http://NAZWA-APLIKACJI.local.netu.no:9000/services/moj-serwis-alertu",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "moj-alert-bardziej-zaawansowany",
                "url": "http://NAZWA-APLIKACJI.local.netu.no:9000/services/moj-serwis-alertu",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": {
                        "system": 90,
                        "process": 90
                    },
                    "memory": {
                        "system": 90,
                        "process": 90
                    },
                    "disk": 90
                }
            }
        ]
    }
...
```

> Powyższe wartości są **wartościami domyślnymi**!

##### Nazwa

Nazwa identyfikująca alert.

##### Włączone

Pozwala włączyć i wyłączyć alert; domyślnie jest to _true_ (aktywny).

##### Interwał

Określa interwał między alertami w **sekundach**; domyślnie jest to _3600 sekund_ (jedna godzina).

##### Próg

Określa limity CPU, pamięci i dysku (HD).

##### CPU

Limit zużycia CPU, przy którym powinien zostać wywołany alert.

Pozwala także zdefiniować osobny limit dla _system_ i _process_.

##### Pamięć

Limit zużycia pamięci, przy którym powinien zostać wywołany alert.

Pozwala także zdefiniować osobny limit dla _system_ i _process_.

##### System

Są to limity dla całego systemu operacyjnego ze wszystkimi uruchomionymi procesami.

##### Proces

Są to limity wyłącznie dla procesu serwera Netuno.

##### Dysk

Limit zużycia dysku (HD), przy którym powinien zostać wywołany alert.

## Wysyłane parametry

Gdy wywoływany jest `url`, oznacza to, że został przekroczony jakiś limit i wywołano alert; wysyłane są wtedy dane wydajnościowe dotyczące zużycia sprzętu.

Adres `url` jest wywoływany metodą `POST`, a zawartość jest wysyłana w formacie JSON: `Content-Type: application/json`.

Przykład JSON z danymi wysyłanymi na `url` alertów:

```
{
    "key": "moj-alert-prosty",
    "app": "moja-aplikacja",
    "hostname": "moj-komputer",
    "timezone": "Europe/Warsaw",
    "started": "2020-11-17 14:55:07.682",
    "moment": "2020-11-17 14:56:08.098",
    "before": {
        ...
    },
    "alerts": [
        {
            "threshold": 90,
            "type": "cpu-system"
        },
        {
            "threshold": 90,
            "type": "disk"
        }
    ],
    "cpu": {
        "cores": 4,
        "vcores": 8,
        "load": {
            "system": 0.91311,
            "process": 0.03945,
            "ticks": [ 575084, 0, 260470, 6796463, 0, 0, 0, 0 ],
            "frequency": {
                "average": 2500000000,
                "max": 2500000000
            }
        }
    },
    "memory": {
        "system": {
            "total": 17179869184,
            "used": 9988640768,
            "free": 7191228416
        },
        "process": {
            "total": 402653184,
            "max": 4294967296,
            "used": 135885832,
            "free": 266767352,
            "gc": false
        }
    },
    "disk": {
        "total": 500068036608,
        "used": 487637929984,
        "free": 12430106624
    }
}
```

### Opis parametrów

##### Klucz

Nazwa (klucz) zdefiniowana w konfiguracji alertu w aplikacji.

##### Aplikacja

Nazwa aplikacji, w której skonfigurowano alert i która powoduje jego wywołanie.

##### Nazwa hosta

Nazwa komputera, na którym uruchomiony jest serwer Netuno powodujący alert.

##### Strefa czasowa

Strefa czasowa komputera, na którym uruchomiony jest serwer Netuno powodujący alert.

##### Rozpoczęto

Data i godzina uruchomienia serwera Netuno.

##### Moment

Data i godzina wygenerowania alertu.

##### Poprzedni alert

Informacje o poprzednim alercie; mają dokładnie taką samą strukturę JSON, ale zawierają dane dotyczące wcześniej wywołanego alertu.

##### Alerty

Lista alertów, które zostały wywołane; określa typ (_type_) alertu i przekroczony limit (_threshold_).

Typy alertów to:

- `cpu-system`: Alert dotyczący zużycia CPU przez system komputerowy ze wszystkimi uruchomionymi procesami ogólnie.
- `cpu-process`: Alert dotyczący zużycia CPU przez proces serwera Netuno.
- `memory-system`: Alert dotyczący zużycia pamięci przez system komputerowy ze wszystkimi uruchomionymi procesami ogólnie.
- `memory-process`: Alert dotyczący zużycia pamięci przez proces serwera Netuno.
- `disk`: Alert dotyczący dysku (HD).

##### CPU

Są to dane procesora wysyłane z następującymi informacjami:

- `cores`: Liczba procesorów fizycznych.
- `vcores`: Liczba procesorów wirtualnych (wątków).
- `load`: Informacje o obciążeniu procesora:
  - `system`: Obciążenie procesora systemu operacyjnego ze wszystkimi procesami ogólnie; wartość mieści się między **0** (_0%_) a **1** (_100%_).
  - `process`: Obciążenie procesora serwera Netuno; wartość mieści się między **0** (_0%_) a **1** (_100%_).
  - `ticks`: Zwraca obciążenie procesora w całym systemie w postaci tablicy ośmiu elementów, która przedstawia w milisekundach czas zużyty w następujących stanach: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) i _Steal_ (7).
  - `frequency`: Maksymalna częstotliwość (`max`) procesora oraz średnia częstotliwość używana przez wszystkie rdzenie (`average`); wartości są w _hercach_, więc 2500000000 _Hz_ odpowiada 2,5 _GHz_.

> Podział częstotliwości wykonuje się w następujący sposób:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_herce_), KHz (_kiloherce_), MGz (_megaherce_), GHz (_gigaherce_)

##### Pamięć

Są to dane pamięci wysyłane z następującymi informacjami:

- `system`: Informacje o zużyciu pamięci systemu operacyjnego ze wszystkimi procesami ogólnie.
  - `total`: Całkowita pamięć komputera.
  - `used`: Pamięć przydzielona do użycia.
  - `free`: Dostępna wolna pamięć.
- `process`: Dane dotyczące wykorzystania pamięci przez proces serwera Netuno.
  - `max`: Maksymalna ilość pamięci, jaką może wykorzystać Netuno.
  - `total`: Całkowita pamięć zarezerwowana (przydzielona), obejmuje pamięć używaną i „wolną”.
  - `used`: Ilość pamięci faktycznie używanej.
  - `free`: Ilość wolnej (zarezerwowanej) pamięci dostępnej do wykorzystania.
  - `gc`: Czy uruchomiono _garbage collector_ (mechanizm odśmiecania pamięci).

> Wartości są w bajtach, więc 17179869184 bajtów odpowiada 16 gigabajtom.
>
> Jak wykonuje się podział:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_bajty_), KB (_kilobajty_), MB (_megabajty_), GB (_gigabajty_)

##### Dysk

Są to dane wykorzystania dysku twardego (HD) wysyłane z następującymi informacjami:

- `total`: Całkowity rozmiar dysku.
- `used`: Ilość zajętego miejsca na dysku.
- `free`: Ilość dostępnego miejsca na dysku.

> Wartości są w bajtach, więc 500068036608 bajtów odpowiada 465,72 gigabajta.
>
> Jak wykonuje się podział:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_bajty_), KB (_kilobajty_), MB (_megabajty_), GB (_gigabajty_)

## Przykład usług alertowania

Usługi Netuno mogą być używane jako `url` alertów.

Można zaimplementować wysyłanie alertów przez e-mail, SMS, a nawet zapisywanie informacji w bazie danych.

Można również użyć dowolnego typu `url`, dzięki czemu alert może być wysyłany do innych technologii, takich jak NodeJS, PHP, .NET, Rails, Laravel, Sails itd.

W przypadku Netuno można zaimplementować usługę wysyłania e-maili zgodnie ze wskazówkami z tutoriala [Wysyłanie e-maili](/docs/academy/server/services/sending-emails).

Poniżej znajduje się sposób implementacji kompletnego przykładu dostosowanego do alertowania monitorowania.

Przed rozpoczęciem upewnij się, że masz skonfigurowany SMTP w konfiguracji aplikacji, a także konfigurację monitorowania, na przykład:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "MOJ.SERWER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alert: ",
            "from": "noreply@MOJ.DOMENA.com",
            "to": "info@MOJ.DOMENA.com",
            "username": "noreply@MOJ.DOMENA.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alert-email",
                "url": "http://MOJA-APLIKACJA.local.netu.no:9000/services/monitor/alert"
            }
        ]
    }
...
```

> Upewnij się, że dostosowujesz parametry, zwłaszcza te wyróżnione wielkimi literami w wartościach.

Usługa alertowania może znajdować się w `server/services/monitor/alert.js` z następującym kodem:

```
_log.info("Informacje o alercie monitorowania:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const pamiec = _req.getValues("memory")
const dysk = _req.getValues("disk")

const obciazenieCpuSystemu = Math.round(cpu.getValues("load").getFloat("system") * 100)
const obciazenieCpuProcesu = Math.round(cpu.getValues("load").getFloat("process") * 100)
const wolnaPamiecSystemu = Math.round(pamiec.getValues("system").getLong("free") / 1024 / 1024)
const wolnaPamiecProcesu = Math.round(pamiec.getValues("process").getLong("free") / 1024 / 1024)
const wolneMiejsceDysku = Math.round(dysk.getLong("free") / 1024 / 1024)

let typyTematow = ""
let informacjeHtml = ""

for (const typAlertu of _req.getValues("alerts")) {
    if (typyTematow != "") {
        typyTematow += ", "
    }
    if (typAlertu.getString("type") == 'cpu-system') {
        typyTematow += "CPU systemu"
        informacjeHtml += `<p>Procesor <b>systemu</b> osiąga <b>${obciazenieCpuSystemu}%</b></p>`
    }
    if (typAlertu.getString("type") == 'cpu-process') {
        typyTematow += "CPU procesu"
        informacjeHtml += `<p>Procesor <b>procesu</b> osiąga <b>${obciazenieCpuProcesu}%</b></p>`
    }
    if (typAlertu.getString("type") == 'memory-system') {
        typyTematow += "Pamięć systemu"
        informacjeHtml += `Pamięć <b>systemu</b> ma tylko <b>${wolnaPamiecSystemu} MB</b> wolnej pamięci.`
    }
    if (typAlertu.getString("type") == 'memory-process') {
        typyTematow += "Pamięć procesu"
        informacjeHtml += `Pamięć procesu ma tylko <b>${wolnaPamiecProcesu} MB</b> wolnej pamięci.`
    }
    if (typAlertu.getString("type") == 'disk') {
        typyTematow += "Dysk"
        informacjeHtml += `Dysk ma tylko <b>${wolneMiejsceDysku} MB</b> wolnego miejsca.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${typyTematow}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${informacjeHtml}`

smtp.text = "Informacje znajdują się w wersji HTML tej wiadomości e-mail."

smtp.send()
```

> Zostanie wysłany e-mail z alertami.

W tym przypadku konieczne było jedynie zaalarmowanie o stanie wolnego miejsca na dysku, co można zobaczyć w tej otrzymanej wiadomości e-mail:

![e-mail](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Aby zaimplementować wysyłkę **SMS**, w aplikacji **demo**_nstracyjnej_ znajdują się przykłady integracji ze zdalnymi API REST, które pozwalają zintegrować się z wybraną platformą SMS.