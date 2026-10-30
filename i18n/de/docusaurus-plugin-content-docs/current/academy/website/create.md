---
sidebar_position: 2
id: create
title: Mit React erstellen
sidebar_label: Mit React erstellen
---

Dieser Erstellungsprozess kann in anderen Kontexten angewendet werden, zum Beispiel um jede Art von React-Projekt zu erstellen; in diesem Fall sind die entsprechenden Anpassungen des Namens und des Ordners, in dem die Befehle ausgeführt werden, vorzunehmen.

Die Grundlage ist, dass die Web-Schicht erstellt wird, also das Frontend unserer Netuno-Anwendung.

Daher wird angenommen, dass innerhalb der Netuno-Anwendung `website` erstellt wird, der Standardname für die Frontend-Schicht, aber es kann auch jeder andere gewünschte Name verwendet werden.

## Voraussetzungen

Netuno muss installiert sein:

- [Installation von Netuno.](/docs/get-started/installation)

Aufgrund der besseren Performance und weiterer Vorteile sollte Bun installiert sein:

- [Bun installieren.](/docs/academy/website/bun)

## Erstellung

Um eine React-Anwendung innerhalb einer Netuno-Anwendung zu erstellen, nennen wir sie normalerweise `website`.

Öffnen Sie dann mit dem **Terminal** im **Stammverzeichnis Ihrer Netuno-Anwendung**, das sich normalerweise im Ordner befindet:

- `netuno/apps/MEINE_APP`

> Dabei ist `MEINE_APP` der Name der Netuno-Anwendung.

Führen Sie den Befehl aus:

```shell
bun create vite
```

Als Nächstes erscheint die Frage: `Project name:`

Geben Sie `website` ein und drücken Sie die Taste `ENTER`.

Danach folgt die Frage: `Select a framework:`

Verwenden Sie die Pfeiltasten und drücken Sie die Pfeiltaste nach unten, bis die Option `React` ausgewählt ist, und drücken Sie dann die Taste `ENTER`.

Schließlich folgt die Frage: `Select a variant:`

Verwenden Sie die Pfeiltasten und drücken Sie die Pfeiltaste nach unten, bis die Option `JavaScript` ausgewählt ist, und drücken Sie dann die Taste `ENTER`.

Dieser Befehl erstellt ein neues Verzeichnis namens `📂 website`, das das Frontend mit React enthält.

Nachdem Sie das Frontend mit React erstellt haben, führen Sie Folgendes aus, um die Abhängigkeiten zu installieren:

```shell
cd website
bun install
```

Öffnen Sie den Ordner Ihrer Netuno-Anwendung in Ihrem bevorzugten Editor (wie VSCode, WebStorm und andere) und wechseln Sie in den erstellten Ordner `website`.

## Ausführen

Jetzt können Sie den Frontend-Server mit React mit folgendem Befehl starten:

```shell
bun run dev
```

Dadurch ist das Frontend unter der Adresse [http://localhost:5173/](http://localhost:5173/) verfügbar. Normalerweise – oder auch unter einer anderen Adresse mit einer anderen Portnummer – kann im Terminal eine andere Adresse angezeigt werden; in jedem Fall genügt es, die im Terminal angezeigte Adresse im Browser zu öffnen.

> Um die Ausführung im Terminal zu beenden, drücken Sie gleichzeitig die Tasten `CTRL` und `C`.

## Installation von Abhängigkeiten

Falls Sie den Frontend-Server im Terminal ausführen, also `bun run dev`, wird empfohlen, ihn zu stoppen; drücken Sie gleichzeitig die Tasten `CTRL` und `C`.

Wir empfehlen dringend, die folgenden NPM-Pakete zu installieren, da sie für die Entwicklung von React-Anwendungen mit Netuno sehr nützlich sind (klicken Sie auf jeden Link, um weitere Informationen zu erhalten):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Um die oben aufgeführten Pakete zu installieren, führen Sie einfach die folgende Befehlsgruppe im Terminal aus:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Alternativ können Sie auch alle Pakete auf einmal installieren:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Konfigurationen

Nachdem Sie die oben genannten Befehle ausgeführt haben, können Sie eine Standard-Portadresse erzwingen; gehen Sie zu `📂 website/vite.config.js` und fügen Sie die `server`-Konfiguration wie folgt hinzu:

```javascript title="website/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

Wenn Sie nun mit dem Befehl `bun run dev` starten, wird immer Port `3000` verwendet.

### Less

Ändern Sie alle `.css`-Dateien in `website/src` auf die Erweiterung `.less`.

> Vergessen Sie nicht, diese Änderung im JSX-Code in den Zeilen vorzunehmen, die die `.css`-Dateien importieren, und sie auf `.less` zu ändern.

LESS ermöglicht eine strukturiertere und modernere CSS-Entwicklung.

### Anpassung des Ant.Design-Themes

Um die Farben von Ant.Design anzupassen, verwenden Sie die Komponente `ConfigProvider` in `App.jsx`.

Zum Beispiel:

```jsx title="website/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Mein Button mit benutzerdefinierter Farbe</Button>
            ...
        </ConfigProvider>
    );
}
...
```

So können Sie jede Styling-Konfiguration von Ant.Design anpassen.

### Dunkles Theme

Sie können auch das dunkle Theme von Ant.Design verwenden; dazu importieren Sie einfach `theme`, das den Dark Mode enthält, und wenden es im `ConfigProvider` an:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">Mein Button mit benutzerdefinierter Farbe</Button>
        ...
    </ConfigProvider>
...
```

### Restyle

Beachten Sie, dass Sie in den oben gezeigten Parametrisierungen des `ConfigProvider` den Stil von Ant.Design leicht ändern können. Mehr zur Anpassung von Ant.Design:

- [Theme anpassen](https://ant.design/docs/react/customize-theme)

Jede Komponente von Ant.Design hat mögliche Design-Token-Konfigurationen, zum Beispiel bei Buttons:

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">Mein Button mit benutzerdefinierter Farbe</Button>
    ...
</ConfigProvider>
```

## Automatischer Start des Frontends mit Netuno

Netuno ermöglicht es Ihnen, die React-Anwendung zusammen mit dem Serverprozess der Netuno-Anwendung zu starten.

> Alle Kompilierungsmeldungen der React-Anwendung werden in dasselbe Terminal wie die Netuno-Anwendung integriert.

Dazu fügen Sie einfach der Konfiguration `commands` der Netuno-Anwendung in `📂 config/_development.json` Folgendes hinzu:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Immer wenn Sie Konfigurationsdateien der Netuno-Anwendung bearbeiten, müssen Sie den Server neu starten, damit die neuen Änderungen übernommen werden.

Starten/Neustarten Sie schließlich den Server mit Ihrer Netuno-Anwendung, um die Funktionsweise zu überprüfen.

Und jetzt wird alles in nur einem zentralisierten Terminal integriert, sodass Sie nicht mehrere verstreute Terminals haben. Mehr dazu:

- [Zentralisiertes Terminal](/docs/academy/explore/centralized-terminal)

## CORS-Konfiguration (Cross-Origin Resource Sharing)

Um CORS zu konfigurieren und mögliche Fehler bei der Kommunikation zwischen dem Frontend und den Diensten der Netuno-Anwendung zu vermeiden, bearbeiten Sie die Konfiguration der Anwendung in:

- `📂 config/_development.json`

Prüfen Sie, ob bereits die `cors`-Konfiguration vorhanden ist; wenn `*` in `origins` steht, eignet sich das gut für die Entwicklung und kann so bleiben.

Falls die `cors`-Konfiguration nicht vorhanden ist, fügen Sie sie anhand dieses Beispiels hinzu, wobei die Adresse dieselbe Adresse wie beim Frontend sein muss:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> Wenn `origins` ein `*` enthält, bedeutet das, dass jede Frontend-Adresse unterstützt wird, zum Beispiel:
> - `"origins": [ "*" ]`
> Normalerweise verwenden wir `*` in der Entwicklung.

Wenn die Konfiguration umgesetzt ist, können Sie die gewünschten API-Dienste mit dem Frontend integrieren, ohne Probleme mit der CORS-Sicherheit.

> Mehr über [CORS](/docs/academy/server/services/cors)

## Umgebungsvariablen

Die Konfiguration der Umgebungsvariablen kann durch Erstellen der Datei `website/.env` mit den Variablendefinitionen festgelegt werden, zum Beispiel:

```
NODE_ENV=development
```

Oder über die Konfiguration der Netuno-Anwendung, zum Beispiel in:

- `📂 config/_development.json`

Und indem Sie die Umgebungsvariablen in der Konfiguration des Befehls unter der Parametrisierung `env` definieren, zum Beispiel:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "website",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```