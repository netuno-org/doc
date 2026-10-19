---
sidebar_position: 12
id: permissions
title: Berechtigungen
sidebar_label: Berechtigungen
---

Wie der Zugriff auf das Backoffice durch Rollen und Organisationen gesteuert wird.

## Einführung

CLUAR steuert den Zugriff auf das Backoffice über **Rollen** (Gruppen), die Personen innerhalb einer **Organisation** zugewiesen werden. Jeder REST-Dienst des Servers wird einer Zugriffskategorie zugeordnet, und nur wer die richtige Rolle innerhalb der richtigen Organisation hat, kann ihn verwenden.

## Rollen

Es gibt 5 vordefinierte Rollen (`user_group`):

| Code | Name |
|---|---|
| `administrator` | Administrator |
| `editor` | Redakteur |
| `author` | Autor |
| `contributor` | Mitarbeiter |
| `subscriber` | Abonnent |

:::info Nicht allen Rollen sind bereits Berechtigungen zugewiesen
Derzeit haben nur **Administrator** und **Redakteur** tatsächlich Zugriff auf etwas – sie sind die einzigen Rollen, die in den Zugriffsregeln referenziert werden (siehe unten). Autor, Mitarbeiter und Abonnent existieren bereits als Option im Formular, haben aber noch keinen konfigurierten Zugriff; wenn du jemandem eine dieser Rollen zuweist, erhält diese Person derzeit keinen Zugriff auf irgendetwas im Backoffice.
:::

## Organisation

Eine Person hat nur **im Kontext einer Organisation** eine Rolle – die Verknüpfung erfolgt unter `Organisation > Mitglieder` (`organization_people`) durch Zuordnung von Person + Organisation + Rolle.

Derzeit gibt es nur eine Organisation mit dem Code `admins`, und in ihr werden alle Berechtigungen geprüft. Die Entität `organization` unterstützt eine Hierarchie (`parent_id`, übergeordnete Organisationen), aber diese Hierarchie wird in den aktuellen Berechtigungsregeln noch nicht verwendet – alle Prüfungen verweisen direkt auf die Organisation `admins`.

## Erster Zugang zum Bearbeitungsmodus

CLUAR unterscheidet zwei verschiedene Orte, an denen man sich anmeldet:

- Das **Backoffice von Netuno** (Port `9000` in der Entwicklung) – hier werden die Netuno-Benutzer (`netuno_user`, das Paar Benutzername/Passwort) und alle Entitäten, einschließlich Person und Rollen, direkt verwaltet.
- Der **Geschützte Bereich** der Website selbst (`/login`, Port `3000` in der Entwicklung) – hier meldet sich der Inhaltseditor im Alltag an, um auf den Bearbeitungsmodus der Seiten zuzugreifen.

Um auf den Geschützten Bereich zuzugreifen und den Bearbeitungsmodus verfügbar zu haben, ist ein Netuno-Benutzer mit Login erforderlich, der mit einer **Person** verknüpft ist, die mit der Organisation `admins` und der Rolle **Administrator** oder **Redakteur** verbunden ist (siehe [Organisation](#organisation) oben).

### Standardbenutzer

Die Datei `server/setup/030-people.js` von CLUAR erstellt standardmäßig bereits eine Person „admin“, die mit dem Netuno-Benutzer mit `id: 2` verknüpft ist, und `server/setup/050-organization_people.js` verknüpft diese Person bereits mit der Organisation `admins` und der Rolle **Administrator** – das heißt, dieser Benutzer hat von Anfang an Vollzugriff.

Der Login dieses Standardbenutzers lautet:

```
Benutzer: admin
Passwort: admin
```

Mit diesen Zugangsdaten kannst du direkt in den Geschützten Bereich (`/login`) als Administrator einsteigen – ohne vorher einen zusätzlichen Schritt im Netuno-Backoffice durchführen zu müssen.

:::info Ändere das Standardpasswort in der Produktion
`admin`/`admin` ist eine bekannte und vorhersehbare Zugangsdatenkombination. Bevor eine Website in die Produktion geht, ändere das Passwort dieses Benutzers (oder erstelle einen neuen Administrator und deaktiviere diesen).
:::

### Neue Benutzer erstellen

Es gibt zwei mögliche Wege:

**Über den Geschützten Bereich (empfohlen):** Unter `Benutzer > Benutzer erstellen` fragt ein einziges Formular nach Name, Benutzername, Passwort, E-Mail, Organisation und Rolle – und erstellt alles auf einmal: den Netuno-Benutzer, die Person (bereits mit diesem Benutzer verknüpft) und die Verknüpfung mit der gewählten Organisation/Rolle. Du musst nicht über das Netuno-Backoffice gehen.

**Nur über das Netuno-Backoffice:** Da das Backoffice direkten Zugriff auf alle Entitäten bietet, kannst du dieselben drei Schritte auch manuell ausführen, ohne es zu verlassen:

1. Erstelle den Netuno-Benutzer (`netuno_user`) mit dem gewählten Benutzernamen/Passwort.
2. Erstelle eine **Person** und verknüpfe sie mit diesem Netuno-Benutzer.
3. Verknüpfe unter `Organisation > Mitglieder` diese Person mit der Organisation `admins` und der Rolle Administrator oder Redakteur.

In beiden Fällen kann sich die erstellte Person bereits bei `/login` anmelden und auf den Bearbeitungsmodus zugreifen.

## Wie die Berechtigungen angewendet werden

Jeder Dienst des Servers wird einer der folgenden Kategorien zugeordnet, die in `server/core/_service_config.js` definiert sind:

| Kategorie | Wer Zugriff hat | Beispiele |
|---|---|---|
| **Öffentlich** | Jede Person, ohne Login | Kontakt, Avatar, Login |
| **Inhaltsverwaltung** | Administrator + Redakteur | Seiten, Versionen, Komponenten, Wörterbuch, Aktionen |
| **Website-Administration** | Nur Administrator | Einstellungen, Sprachen, Synchronisierung |
| **Zugriffsverwaltung** | Nur Administrator | Organisationen, Personen, Benutzer |

Jeder Dienst, der in keiner dieser Kategorien aufgeführt ist, wird **standardmäßig verweigert** – das ist eine bewusste Entscheidung des Codes (explizit in der Datei kommentiert), damit das Vergessen der Klassifizierung eines neuen Dienstes zu einer Sperre und nicht versehentlich zu freiem Zugriff führt.

:::info Die Berechtigungen werden in der Entwicklungsumgebung nicht angewendet
In der Umgebung `dev` gibt `_service_config.js` alle Dienste sofort am Anfang frei, noch vor jeder Prüfung – das heißt, **die Berechtigungen werden nur in Produktion/Staging tatsächlich angewendet**. Beim lokalen Testen hat jeder angemeldete Benutzer unabhängig von seiner Rolle Zugriff auf alles.
:::

## Oberfläche: Das Menü filtert ebenfalls nach Berechtigung

Neben der Sperre auf dem Server filtert auch das Seitenmenü des Geschützten Bereichs (`website/src/components/SideMenu`) die sichtbaren Einträge entsprechend der Rolle der angemeldeten Person – damit keine Optionen angezeigt werden, für die sie keine Berechtigung hätte.

:::info Die beiden Listen synchron halten
Die Liste „wer was sehen darf“ im `SideMenu` wird manuell mit `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` und `ACCESS_MANAGEMENT_PATHS` aus `_service_config.js` abgeglichen – es sind zwei getrennte Listen, eine im Frontend und eine im Backend. Wenn du einen neuen geschützten Dienst hinzufügst, musst du beide aktualisieren; nur den Server zu ändern verbirgt den Fehler (das Menü zeigt weiterhin eine Option an, die in der Praxis verweigert wird), und nur das Menü zu ändern schützt tatsächlich nichts.
:::

## So schützt du einen neuen Dienst

1. Erstelle den Dienst wie gewohnt in `server/services/`.
2. Füge den Pfad des Dienstes (`path/method`) der richtigen Liste in `server/core/_service_config.js` hinzu – `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` oder `ACCESS_MANAGEMENT_PATHS` – je nachdem, wer ihn verwenden darf. Wenn er öffentlich ist, füge ihn zu `PUBLIC_PATHS` hinzu.
3. Wenn der Dienst einen entsprechenden Eintrag im Menü des Geschützten Bereichs hat, aktualisiere auch das `SideMenu`, damit der Filter mit der tatsächlichen Berechtigung übereinstimmt.