---
id: cors
title: CORS
sidebar_label: CORS
---

CORS-Konfiguration in der Anwendung.

## Einführung

CORS (Cross Origin Resource Sharing) ist ein Validierungsprozess, den Browser durchführen, um zu prüfen, ob sie Ressourcen integrieren können, die von einer anderen Adresse bereitgestellt werden.

Er wird implementiert, wenn:

- Bei der Entwicklung der Frontend-Schicht mit dem Webpack-Server, wie bei der Entwicklung von Web-Oberflächen (Website oder Webanwendung) unter Verwendung moderner Technologien wie ReactJS und VueJS.
- Die Adresse des Frontends sich von der Adresse der Dienste unterscheidet, zum Beispiel wenn die Dienste unter der Adresse `http://localhost:9000` laufen und das Frontend unter der Adresse `http://localhost:3000` läuft.
- In der Produktion, zum Beispiel, die Dienste unter einer eigenen Subdomain `api.beispiel.com` laufen und das Frontend unter `www.beispiel.com`.

> Mehr über CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno ist vorbereitet, die CORS-Integration einfach und unmittelbar durchzuführen.

## Konfiguration

Die CORS-Konfiguration wird in der Konfigurationsdatei der Anwendung je nach Umgebung vorgenommen.

Dazu navigieren Sie innerhalb der Anwendung, die Sie entwickeln, zur Umgebungskonfigurationsdatei. In diesem Beispiel verwenden wir die Entwicklungsumgebungsdatei unter:

- 📂 `config/_development.json`

Prüfen Sie, ob nicht bereits CORS-Konfigurationen vorhanden sind; falls nicht, fügen Sie am Ende der Konfigurationsdatei (im JSON-Format) die Konfigurationsparameter hinzu:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> Die CORS-Konfiguration ist ein Array und unterstützt mehrere verschiedene CORS-Regeln.

### Ursprünge

Im Parameter `origins` steht die Liste der Frontend-Adressen, die mit den Diensten integriert werden.

### Produktion

In der Produktion müssen wir als Ursprünge die Adressen definieren, unter denen das Frontend online läuft.

Die Konfigurationsdatei der Anwendung, in der die Definition von `cors` enthalten ist, sollte je nach Umgebung unterschiedlich sein.

Die Konfigurationsdatei der Anwendung sollte sein:

- 📂 `config/_production.json`

Beispiel der CORS-Konfiguration:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://mein-projekt.com", "https://www.mein-projekt.com" ]
        }
    ]
    ...
}
```

Die Konfigurationsdatei der Anwendung ist `_production.json` gemäß der Umgebungskonfiguration von Netuno, die sich in der Datei `netuno/config.js` befindet:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Header (HTTP-Header)

Der Standard-Header (Header des HTTP-Protokolls) ist:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Um den Standard-Header anzupassen, fügen Sie den Konfigurationsparameter `header` hinzu, zum Beispiel:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

Im obigen Beispiel wird im Header nur `Authorization` akzeptiert statt aller anderen, die standardmäßig definiert waren.

Sie können neue Definitionen im Header hinzufügen sowie die Standarddefinition ersetzen.

## Manuell

CORS kann auch manuell konfiguriert werden, anstatt den automatischen Mechanismus von Netuno zu verwenden.

In Ihrer Netuno-Anwendung ändern Sie einfach die Datei:

- `📂 server/core/_request_url.js`

Und verwenden Sie den folgenden Code:

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.meine-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Beachten Sie, dass im obigen Code das `if` die 'Headers' entsprechend der Ursprungsadresse (`Origin`) einschränkt.

Denken Sie daran, dies an die Adressen anzupassen, die Sie verwenden werden.

> Auf diese Weise unterstützen alle Dienste und Adressen Ihrer Anwendung die CORS-Header.

### Nur für isolierte Dienste

Wenn Sie das Sicherheitsniveau erhöhen möchten, indem Sie die Header nur für bestimmte Dienste aktivieren, verwenden Sie dieselbe Codelogik in der Datei:

- `📂 server/core/_service_config.js`

Anstatt in der Datei:

- `📂 server/core/_request_url.js`

## Fazit

Wenn CORS konfiguriert ist, antwortet Netuno automatisch mit dem standardmäßigen Header (HTTP-Protokoll-Header) für die als `origins` konfigurierten Adressen.

Die Standard-`headers` können angepasst und geändert werden.

Sie können mehrere CORS-Regeln konfigurieren.

Obwohl Netuno die manuelle Konfiguration der CORS-Regeln programmatisch unterstützt, ist es vorzuziehen, den automatischen Mechanismus zu verwenden, der in die Anwendungskonfiguration integriert ist.