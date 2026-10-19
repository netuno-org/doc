---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Konfiguracja MSSQL w Dockerze

Zakładając, że Docker jest już zainstalowany, wystarczy pobrać obraz kontenera z Microsoft Container Registry za pomocą następującego polecenia:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Aby uruchomić nowy kontener, wykonaj następujące polecenie:

```
docker run -d --name serwer_mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Tajne123' -p 1433:1433 microsoft/mssql-server-linux
```

Parametr *-e 'SA\_PASSWORD=Tajne123'*, w którym *Tajne123* będzie hasłem użytkownika *sa*.

Uwaga: hasło musi zawierać co najmniej 8 znaków, aby spełnić minimalny standard bezpieczeństwa MSSQL; w przeciwnym razie kontener nie zostanie uruchomiony.

Po uruchomieniu kontenera upewnij się, że MSSQL działa poprawnie; w tym celu można zainstalować polecenie *mssql* za pomocą *NPM*:

```
npm install mssql -g
```

Dzięki temu możesz wykonać polecenie, aby połączyć się z MSSQL w terminalu:

```
mssql -u sa -p Tajne123
```

Uwaga! Jeśli zmieniono hasło, zastąp *Tajne123* hasłem _sa_ skonfigurowanym w kontenerze.

## Tworzenie nowej aplikacji

Aby utworzyć nową aplikację w Netuno połączoną z Microsoft SQL Server, wykonaj standardowe kroki tworzenia nowej aplikacji w Netuno i wybierz silnik bazy danych MSSQL.

Następnie wykonaj kroki z samouczka:

Po wybraniu silnika bazy danych MSSQL zostaniesz poproszony o podanie danych do nawiązania połączenia z bazą danych MSSQL.

Na przykład:

![tworzenie-aplikacji](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Zmiana konfiguracji aplikacji

Aby aplikacja mogła pracować z MSSQL i tym samym używać MSSQL jako głównej bazy danych aplikacji, zmień konfiguracje środowiska w:

```
/web/app/TWOJA_APP/config/_development.json
/web/app/TWOJA_APP/config/_production.json
/web/app/TWOJA_APP/config/_TWOJE_SRODOWISKO.json
```

Konfiguracja powinna wyglądać następująco:

```
    ...
    "db": {
        "default": {
            "password": "Tajne123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Jeśli chcesz podłączyć się do bazy alternatywnej, a nie głównej, zmień _"default"_ na wybraną nazwę tego połączenia.

## Instancje

Jeśli musisz połączyć się z konkretną instancją MSSQLSRV, dodaj do konfiguracji połączenia wartość `instance`, na przykład:

```
    ...
    "db": {
        "default": {
            "password": "Tajne123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "nazwa-mojej-instancji",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```