---
id: nginx-integration
title: Integracja z NGINX
sidebar_label: Integracja z NGINX
---

NGINX to potężny serwer WWW zapewniający wysoką wydajność i wszechstronność.

Dzięki integracji z NGINX możemy skorzystać z technik oferowanych do rozwiązywania kwestii związanych z równoważeniem obciążenia,
odwrotnym proxy, cache, bezpieczeństwem i innymi.

![integracja-nginx1.png](/docs/assets/integracao-nginx1.png)

## Instalacja NGINX

Instalacja NGINX jest bardzo prosta; w każdej dystrybucji Linux NGINX powinien być dostępny w pakietach.

W dystrybucjach Ubuntu lub Debian:

```shell
apt install nginx
```

W dystrybucjach CentOS, Fedora lub RedHat:

```shell
yum install nginx
```

W MacOS X jest dostępny w brew i macports.

Dla Windows można pobrać instalator pod: http://nginx.org/en/download.html

## Konfiguracja

W tym przykładzie zakładamy, że Netuno jest już zainstalowane i uruchomione w `/srv/netuno`.

Aby skonfigurować nową witrynę w NGINX, przejdź do katalogu konfiguracji:

* Dystrybucje Linux zwykle mają go w: `/etc/nginx`
* MacOS X z brew: `/usr/local/etc/nginx`

Utwórz nowy plik konfiguracyjny dla nowej witryny w `sites-available/netuno`.

A zawartość tego pliku będzie następująca:

```
server {
    listen 127.0.0.1:80;
    server_name app.twoja-domena.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host nazwa-twojej-aplikacji-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/nazwa-twojej-aplikacji-netuno;
    }
}
```

Możesz zmienić linię, w której jest `listen 127.0.0.1:80`, na swój zewnętrzny adres IP i odpowiedni port.

A tam, gdzie jest `nazwa-twojej-aplikacji-netuno`, powinna być nazwa twojej aplikacji, na przykład `mojaaplikacja`.

> Jeśli nazwa aplikacji zawiera `_`, jak `moja_aplikacja`, to dlatego, że Netuno nie pozwala na `-` w nazwach
> aplikacji.
> Zatem ponieważ w adresach domenowych `_` nie jest obsługiwany, należy zastąpić go `-`, który Netuno automatycznie
> konwertuje na `_` i znajduje odpowiednią aplikację.

`.local.netu.no` to skrót do `localhost`; alternatywnie można użyć `.localhost`.

Dzieje się tak, ponieważ Netuno automatycznie szuka aplikacji o nazwie odpowiadającej subdomenie, dlatego bardzo
ważne jest, aby w `Host`, który dociera do Netuno, w prefiksie wskazać nazwę aplikacji.

W tym przykładzie zakładamy, że Netuno działa na porcie `9000` i w ścieżce `/src/netuno`; zweryfikuj
tę informację i dostosuj w razie potrzeby.

Publiczna zawartość web Netuno znajduje się w katalogu `core/web`, ale nie wszystko powinno być udostępniane, tylko katalog `netuno`.

Zatem jedynymi katalogami udostępnianymi bezpośrednio są katalog `core/web/netuno` i katalog `public` odpowiedniej
aplikacji.

## Aktywacja konfiguracji nowej witryny

Teraz trzeba utworzyć dowiązanie symboliczne do naszego nowego pliku konfiguracyjnego, aby aktywować naszą nową witrynę.

Dzieje się tak, ponieważ metodyka konfiguracji witryn NGINX w Linux polega na przechowywaniu plików
konfiguracyjnych w katalogu `sites-available`, ale to, co jest aktywne, jest zdefiniowane w katalogu `sites-enabled`.

Zatem utworzenie dowiązania symbolicznego jest ważne, aby uniknąć duplikowania plików i zapewnić, że wszelkie
zmiany będą wprowadzane w jednym pliku.

W Linux dowiązanie symboliczne tworzy się w ten sposób:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Przeładowanie konfiguracji NGINX

Pamiętaj, że aby ta konfiguracja zaczęła działać, należy przeładować konfigurację NGINX.

Przeładowanie:

```shell
nginx -s reload
```

Lub uruchom ponownie:

```shell
killall nginx
nginx
```

Lub w bardziej elegancki sposób:

```shell
service nginx restart
```

Lub jeszcze całkowicie zatrzymaj serwer i uruchom go ponownie:

```shell
service nginx stop
service nginx start
```

Możesz sprawdzić stan NGINX poleceniem:

```shell
service nginx status
```

Pliki logów NGINX znajdują się w katalogu `/var/log/nginx`.

## Fikcyjny adres lokalny

Netuno ustala, która aplikacja przetwarza żądanie (request), na podstawie prefiksu adresu przychodzącego w
`Host` nagłówka HTTP, przy czym prefiks musi zawierać dokładną nazwę aplikacji Netuno.

Dzięki temu można użyć fikcyjnego adresu tylko po to, aby wskazać Netuno, że powinno użyć właściwej aplikacji.

Mamy `moja-aplikacja.local.netu.no`, który zawsze rozwiązuje się na lokalny adres IP.

> Aplikacja w Netuno musi nazywać się `moja_aplikacja`, ponieważ Netuno nie pozwala na `-` w nazwach aplikacji,
> a ponieważ domena nie obsługuje `_`, należy zastąpić go `-`, który Netuno automatycznie konwertuje na `_`.

Alternatywnie można utworzyć adres lokalny, na przykład `moja-aplikacja.localhost`; w tym przypadku trzeba
zarejestrować ten adres jako host lokalny, należy wymusić rozwiązanie adresu w swoim pliku hosts, a w przypadku
Linux edytuj plik:

```plaintext
/etc/hosts
```

I dodaj linię:

```plaintext
127.0.0.1 moja-aplikacja.localhost
```

Teraz tego lokalnego adresu można używać w NGINX.

Jeśli jesteś w lokalnym środowisku programistycznym, wystarczy sprawdzić w przeglądarce pod adresem:

- Przez NGINX:

```plaintext
http://moja-aplikacja.localhost
```

- Bezpośrednio do Netuno:

```plaintext
http://moja-aplikacja.localhost:9000
```

Jeśli jesteś na serwerze lub w kontenerze przez terminal, użyj polecenia cURL, na przykład:

- Przez NGINX:

```plaintext
curl -v http://moja-aplikacja.localhost:9000
```

- Bezpośrednio do Netuno:

```plaintext
curl -v http://moja-aplikacja.localhost:9000
```

Upewnij się zawsze, że tam, gdzie odwołujemy się do `moja-aplikacja`, powinna być nazwa twojej aplikacji.

W lokalnym środowisku programistycznym, jeśli wystąpią jakieś poprawki, szczególnie w pliku `hosts` systemu
operacyjnego, może być konieczne ponowne uruchomienie przeglądarki z powodu pamięci podręcznej rozwiązywania DNS.

Jeśli konieczne jest poprawienie jakiejś konfiguracji w NGINX, nie zapomnij zawsze przeładować konfiguracji.