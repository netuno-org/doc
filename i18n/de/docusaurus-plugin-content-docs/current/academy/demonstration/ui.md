---
sidebar_position: 7
id: ui
title: Oberfläche & Design
---

## Einführung

Die Entwicklung des Frontends, also dessen, was visuell durch den Browser verarbeitet wird, erfolgt im Ordner **ui**.

Standardmäßig befindet sich in diesem Ordner die Entwicklungsumgebung, die in <a href="https://reactjs.org/" target="_blank">ReactJS</a> mit <a href="https://ant.design/" target="_blank">Ant.Design</a> und <a href="http://lesscss.org/" target="_blank">Less</a> entwickelt und mit <a href="https://vite.dev/" target="_blank">Vite</a> kompiliert wird.

Obwohl die Standardumgebung für diese Technologien konfiguriert ist, da sie heutzutage recht verbreitet sind, ist sie nicht auf diese beschränkt.

Wenn Sie eine andere Technologie wie **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript** usw. verwenden möchten, müssen Sie lediglich im Ordner `📂 ui` die Konfigurationen von `📂 package.json` und `📂 vite.config.js` auf die von Ihnen bevorzugten Technologien ändern.

> Mehr über das [integrierte und zentralisierte Terminal](/docs/academy/explore/centralized-terminal).

## Voraussetzungen

Bevor Sie beginnen, ist es wichtig sicherzustellen, dass [Bun](https://bun.sh/) installiert ist.

> Sehen Sie, wie Sie [Bun installieren](/docs/academy/website/bun).

Um besser zu verstehen, wie die Benutzeroberfläche funktioniert, empfehlen wir:

- [Mehr über die UI-Frontend-Schicht.](/docs/academy/ui/ui-layer)

## Den Dienst erweitern

Nachdem der Dienst **mitarbeiter** in `📂 server/services/mitarbeiter.js` über Visual Studio Code erstellt wurde, der die Informationen als <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> unter der Adresse bereitstellt:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/mitarbeiter</a>

Der nächste Schritt ist, ihn zu erweitern, um die Daten in der Browser-Oberfläche anzuzeigen.

Mit diesen Daten werden wir sie in einer Tabelle und einem Diagramm anzeigen.

Angenommen, Sie haben Visual Studio Code oder einen anderen Texteditor mit der Anwendung **Demo** geöffnet.

Öffnen Sie die folgende Datei im Editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Wir werden diesen bereits vorhandenen Code ändern.

### Den `state` vorbereiten

Ganz am Anfang der Komponente `DashboardContainer` innerhalb der `function` steht die Definition ihres _state_.

Fügen Sie einen neuen Eintrag hinzu, um die Daten der Mitarbeiter wie folgt zu speichern:

```jsx
            // 👇 Fügen Sie die neuen Codezeilen unten hinzu:
            const [mitarbeiter, setMitarbeiter] = useState([]);
            const [laden, setLaden] = useState(false);
```

Das heißt, fügen Sie die neue Statuszeile `const [mitarbeiter, setMitarbeiter] = useState([]);` hinzu.

### Funktion `ladeMitarbeiter` erstellen

Weiter unten beachten Sie, dass es eine Funktion namens `ladeMitarbeiter` gibt; diese Funktion ruft die Daten der Mitarbeiter ab, die derzeit im Dashboard angezeigt werden.

> Diese Funktion wird verwendet, um die Daten der Mitarbeiter zu laden.

Fügen Sie den folgenden Code ein:

```jsx
    /**
    *** 🚀 Lädt die Daten der Mitarbeiter.
    ***    Durch die Ausführung des Dienstes:
    **     http://localhost:9000/services/mitarbeiter
    */
    const ladeMitarbeiter = () => {
        setMitarbeiter([]);
        setLaden(true);
        _service({
            url: intl.locale.indexOf('de') == 0 ? '/services/mitarbeiter' : '/services/workers',
            success: (response) => {
                setMitarbeiter(response.json);
                setLaden(false);
            },
            fail: (e) => {
                setLaden(false);
                console.error('Fehler im Mitarbeiterdienst.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

Was der obige Code tut, ist, die Daten der **Mitarbeiter** an den _state_ der Komponente in <a href="https://reactjs.org/" target="_blank">ReactJS</a> zu übergeben, und zwar durch die Ausführung des Dienstes **mitarbeiter**, der beim Empfang der Daten in <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> diese im _state_ durch die Ausführung von `setMitarbeiter` speichert.

Der endgültige Code sollte folgendermaßen strukturiert sein:

```jsx
    useEffect(() => {
        ...
    }, []);

    const ladeMitarbeiter = () => {
        ...
    }

    return ( 
        ...
    );
```

> Dabei stehen die `...` für die verschiedenen weggelassenen Codezeilen innerhalb der jeweiligen Blöcke.

### Den Hook `useEffect` ausführen

Jetzt fehlt noch, unseren Hook `useEffect` auszuführen, wenn die Komponente „gemountet“ wird; dieser Hook wird ausgeführt, wenn die Komponente in der visuellen Darstellung des Browsers aufgebaut wird.

Dazu genügt es, etwas weiter oben die Codezeile `ladeMitarbeiter();` innerhalb des Hooks `useEffect` wie folgt hinzuzufügen:

```jsx
    useEffect(() => {
        ladeMitarbeiter();
    }, []);
```

Diese neue Codezeile ruft die Funktion auf, die den Dienst <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/mitarbeiter</a> ausführt, der zuvor erstellt wurde, um die Daten in JSON abzurufen und sie im `state` (_Zustand_) der Komponente zu speichern, damit sie im return (_Darstellung_) angezeigt werden.

### Kompilierung

**Speichern Sie** die Datei und beachten Sie gleich danach, dass im **Terminal**, in dem Netuno ausgeführt wird, das Ergebnis der neuen Kompilierung der **ui** mit neuen Zeilen des Kompilierungsergebnisses von <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a> erscheint.

Die erwartete Ausgabe im **Terminal** sollte in etwa wie folgt aussehen:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

Falls bei der Kompilierung ein Fehler auftritt, erscheint im **Terminal** ein Hinweis auf das Problem.

Bis hierher haben wir den Dienst **mitarbeiter** konsumiert, wobei die abgerufenen Daten im `state` der Komponente `DashboardContainer` gespeichert werden, die somit für die Verwendung im `return` verfügbar sind.

## Die Daten anzeigen

Es fehlt noch, die Daten visuell in der Oberfläche anzuzeigen, die der Benutzer im Browser sieht.

Um die Daten im Browser anzuzeigen, müssen wir den `return` ändern, der das visuelle Erscheinungsbild der Komponenten in <a href="https://reactjs.org/" target="_blank">ReactJS</a> verarbeitet.

Am Ende des Codes von `DashboardContainer` finden Sie: `return ( ... );`

Wir werden ihn ändern, indem wir nur eine weitere Codezeile hinzufügen, um eine weitere Komponente `DataVisualization` zu enthalten, die die Daten zu den **Mitarbeitern** anzeigt; der Code sollte folgendermaßen aussehen:

```jsx
    // 🔍 Suchen Sie im vorhandenen Code nach:
    return (
    <div ref={ref}>
      { laden == false ?
        <DataVisualization data={mitarbeiter} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Beachten Sie, dass nur die folgende Zeile hinzugefügt werden muss:

```jsx
<DataVisualization data={mitarbeiter} />
```

So erhält `DataVisualization` die über den Dienst **mitarbeiter** per JSON abgerufenen Daten, die im `state` gespeichert wurden.

### Abschließende Kompilierung

**Speichern Sie** die Datei mit allen bis hierher vorgenommenen Änderungen.

Stellen Sie sicher, dass in der Ausgabe des **Terminals** keine Fehler vorhanden sind.

Aktualisieren Sie nun die Seite im Browser, und Sie sollten das Endergebnis sehen, oder klicken Sie alternativ auf den folgenden Link:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Wenn das Dashboard leer erscheint, bedeutet das, dass Fehler im Code vorhanden sind.
>
> Prüfen Sie in der Konsole des **Browsers** in den **Entwicklertools**, ob Fehler vorhanden sind.

## Mehr erfahren 👇

Kurze Einführung in <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Ein Leitfaden für Einsteiger in ReactJS.</a>