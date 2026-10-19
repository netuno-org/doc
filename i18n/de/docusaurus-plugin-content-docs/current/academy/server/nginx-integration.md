---
id: nginx-integration
title: Integration mit NGINX
sidebar_label: Integration mit NGINX
---

NGINX ist ein leistungsstarker Webserver, der hohe Leistung und Vielseitigkeit bietet.

Mit der Integration von NGINX können wir von Techniken profitieren, die Fragen zu Lastverteilung, Reverse-Proxy, Cache, Sicherheit und anderen Themen lösen.

![nginx-integration1.png](/docs/assets/integracao-nginx1.png)

## NGINX installieren

NGINX zu installieren ist sehr einfach; in jeder Linux-Distribution sollte NGINX in den Paketquellen verfügbar sein.

In Ubuntu- oder Debian-Distributionen:

```shell
apt install nginx
```

In CentOS-, Fedora- oder RedHat-Distributionen:

```shell
yum install nginx
```

Auf MacOS X ist es über brew und macports verfügbar.

Für Windows können Sie den Installer unter http://nginx.org/en/download.html herunterladen.

## Konfiguration

Für dieses Beispiel gehen wir davon aus, dass Netuno bereits installiert und unter `/srv/netuno` in Betrieb ist.

Um eine neue Website in NGINX zu konfigurieren, navigieren Sie zum Konfigurationsverzeichnis:

* Bei Linux-Distributionen befindet es sich normalerweise unter: `/etc/nginx`
* Bei MacOS X mit brew: `/usr/local/etc/nginx`

Erstellen Sie eine neue Konfigurationsdatei für die neue Website unter `sites-available/netuno`.

Der Inhalt dieser Datei lautet:

```
server {
    listen 127.0.0.1:80;
    server_name app.ihre-domain.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host name-ihrer-netuno-app.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/name-ihrer-netuno-app;
    }
}
```

Sie können die Zeile mit `listen 127.0.0.1:80` auf Ihre externe IP und den entsprechenden Port ändern.

Und wo `name-ihrer-netuno-app` steht, sollte der Name Ihrer App stehen, zum Beispiel `meineapp`.

> Falls der Name der Anwendung ein `_` enthält, wie `meine_app`, dann weil Netuno das `-` im Namen von Anwendungen nicht erlaubt.
> Da in Domainadressen das `_` nicht unterstützt wird, muss es durch `-` ersetzt werden, das Netuno automatisch in `_` umwandelt und die entsprechende App findet.

Das `.local.netu.no` ist eine Abkürzung für `localhost`; alternativ kann `.localhost` verwendet werden.

Das liegt daran, dass Netuno automatisch nach einer App mit dem Namen sucht, der der Subdomain entspricht. Daher ist es sehr wichtig, im `Host`, der bei Netuno ankommt, im Präfix den Namen der Anwendung anzugeben.

In diesem Beispiel gehen wir davon aus, dass Netuno auf Port `9000` und unter dem Pfad `/src/netuno` läuft. Prüfen Sie diese Information und passen Sie sie bei Bedarf an.

Der öffentliche Webinhalt von Netuno befindet sich im Verzeichnis `core/web`, aber nicht alles sollte verfügbar gemacht werden, nur das Verzeichnis `netuno`.

Daher sind die einzigen Verzeichnisse, die direkt verfügbar gemacht werden, das Verzeichnis `core/web/netuno` und das Verzeichnis `public` der entsprechenden Anwendung.

## Aktivieren der Konfiguration der neuen Website

Jetzt muss ein symbolischer Link für unsere neue Konfigurationsdatei erstellt werden, um unsere neue Website zu aktivieren.

Das liegt daran, dass die Methode zur Konfiguration von NGINX-Websites unter Linux darin besteht, die Konfigurationsdateien im Verzeichnis `sites-available` zu halten, während das, was aktiv ist, im Verzeichnis `sites-enabled` definiert wird.

Daher ist die Erstellung des symbolischen Links wichtig, um die Duplizierung von Dateien zu vermeiden und sicherzustellen, dass alle Änderungen in einer einzigen Datei vorgenommen werden.

Unter Linux erstellt man den symbolischen Link folgendermaßen:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## NGINX-Konfiguration neu laden

Denken Sie daran, dass die NGINX-Konfiguration neu geladen werden muss, damit diese Konfiguration wirksam wird.

Neu laden:

```shell
nginx -s reload
```

Oder neu starten:

```shell
killall nginx
nginx
```

Oder auf elegantere Weise:

```shell
service nginx restart
```

Oder stoppen Sie den Server vollständig und starten Sie ihn erneut:

```shell
service nginx stop
service nginx start
```

Sie können den Status von NGINX mit dem folgenden Befehl prüfen:

```shell
service nginx status
```

Die Logdateien von NGINX befinden sich im Verzeichnis `/var/log/nginx`.

## Fiktive lokale Adresse

Netuno entscheidet anhand des Präfixes der Adresse, die im `Host`-Header des HTTP ankommt, welche Anwendung die Anfrage (Request) verarbeitet, wobei das Präfix den exakten Namen der Netuno-Anwendung enthalten muss.

Daher ist es möglich, eine fiktive Adresse zu verwenden, um Netuno lediglich mitzuteilen, dass die richtige Anwendung verwendet werden soll.

Wir haben `meine-app.local.netu.no`, das immer zur lokalen IP auflöst.

> Die Anwendung in Netuno muss `meine_app` sein, da Netuno das `-` im Namen von Anwendungen nicht erlaubt und, da die Domain `_` nicht unterstützt, es durch `-` ersetzt wird, das Netuno automatisch in `_` umwandelt.

Alternativ kann eine lokale Adresse wie `meine-app.localhost` erstellt werden. In diesem Fall muss diese Adresse als lokaler Host registriert werden; Sie sollten die Auflösung der Adresse in Ihrer Hosts-Datei erzwingen. Unter Linux bearbeiten Sie die Datei:

```plaintext
/etc/hosts
```

Und fügen Sie die Zeile hinzu:

```plaintext
127.0.0.1 meine-app.localhost
```

Jetzt kann diese lokale Adresse in NGINX verwendet werden.

Wenn Sie sich in einer lokalen Entwicklungsumgebung befinden, prüfen Sie einfach in Ihrem Browser über die Adresse:

- Über NGINX:

```plaintext
http://meine-app.localhost
```

- Direkt an Netuno:

```plaintext
http://meine-app.localhost:9000
```

Wenn Sie sich in einem Server oder Container über das Terminal befinden, verwenden Sie den cURL-Befehl, zum Beispiel:

- Über NGINX:

```plaintext
curl -v http://meine-app.localhost:9000
```

- Direkt an Netuno:

```plaintext
curl -v http://meine-app.localhost:9000
```

Stellen Sie immer sicher, dass `meine-app` der Name Ihrer Anwendung ist.

In einer lokalen Entwicklungsumgebung kann es bei einer Korrektur, insbesondere an der `hosts`-Datei des Betriebssystems, erforderlich sein, den Browser aufgrund des DNS-Auflösungscaches neu zu starten.

Wenn eine Konfiguration in NGINX korrigiert werden muss, vergessen Sie nicht, die Konfiguration immer neu zu laden.