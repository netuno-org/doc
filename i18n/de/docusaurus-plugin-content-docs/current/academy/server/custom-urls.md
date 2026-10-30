---
id: custom-urls
title: Benutzerdefinierte URLs
sidebar_label: Benutzerdefinierte URLs
---

## Einführung

Netuno ermöglicht es, die Standardadressen zu ändern, zum Beispiel:

- Die Adresse der Verwaltungsoberfläche, `admin`.
- Die Adresse öffentlicher Dateien wie Bilder, CSS und JS, `public`.
- Die Adresse der REST-API-Dienste, `services`.

## Konfiguration

Navigieren Sie innerhalb der Anwendung, die Sie entwickeln, zur Umgebungskonfigurationsdatei. In diesem Beispiel verwenden wir die Entwicklungsumgebungsdatei unter:

- 📂 `config/_development.json`

Prüfen Sie, ob die URL-Konfiguration bereits vorhanden ist; falls nicht, fügen Sie am Ende der Konfigurationsdatei (im JSON-Format) die URL-Konfigurationsparameter hinzu, zum Beispiel:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Definiert das Präfix der URL-Adresse der Verwaltungsoberfläche; der Standard ist nur `/`.

### public

Definiert das Präfix der URL-Adresse der statischen Dateien, die öffentlich sind, wie Bilder, CSS-Stile und JavaScript-Code; der Standard ist `/public`.

### services

Definiert die anfängliche URL-Adresse der Webdienste der REST-API; der Standard ist `/services`.

## Fazit

Die Anpassung der URLs ist wichtig, sowohl um sie intuitiver zu gestalten als auch um sie komplexer machen und die Sicherheit erhöhen zu können.

Zum Beispiel kann bei der Verwaltungsadresse ein Präfix mit einer zufälligen Zeichenfolge verwendet werden; so wird nur derjenige, der sie auswendig kennt, auf die Zugangsadresse zugreifen, was den Zugriff erschwert und Angriffe verhindert.