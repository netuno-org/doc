---
sidebar_position: 3
id: pages
title: Seiten und React Router
sidebar_label: Seiten und React Router
---

## Einführung

Das Erstellen von Seiten ist eine häufige Notwendigkeit, wenn die Webanwendung komplex wird oder unterschiedliche Inhalte präsentiert werden müssen; dies tritt besonders häufig bei einer Website oder einer Plattform auf.

Bei der Entwicklung mit React ist es möglich, den Navigationsmechanismus zwischen Seiten mit dem [React Router](https://reactrouter.com) zu erstellen.

Die folgenden Schritte sollten innerhalb Ihres React-Frontend-Projekts ausgeführt werden.

Wenn es ein Frontend ist, das mit Netuno integriert ist, sollten Sie die folgenden Schritte im Ordner der Netuno-Anwendung ausführen, in dem sich das Frontend-Projekt befindet, zum Beispiel in:

- `📂 website/`

## Installation

Stellen Sie sicher, dass das React-Router-Modul in Ihrem Projekt installiert ist:

```
bun install react-router
```

Und das Ant.Design-Modul, das zum Erstellen der allgemeinen Struktur verwendet wird:

```
bun install antd
```

## Konfiguration

Zunächst müssen wir die Datei `main.jsx` bearbeiten, die im Ordner `📂 src` zu finden ist; der `BrowserRoute` muss wie folgt eingefügt werden:

```javascript title="src/main.jsx"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

**Sehr wichtig:** Bei einem neu erstellten Frontend sollten alle Arten von CSS/Style und unnötige Importe wie von Bildern entfernt werden, um unerwünschtes Verhalten zu vermeiden.

Fügen Sie in `App.js`, das ebenfalls im Ordner `📂 src` zu finden ist, die Importe der Module wie folgt hinzu:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Fügen Sie nach den Importen die Konstanten hinzu:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

In dieser Anfangsphase kann die Rückgabe der App-Komponente wie folgt aussehen:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Startseite</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/informationen">Informationen</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* Die Routen der Seiten werden hier definiert! */ }
        </Routes>
      </Content>
      <Footer>Fußzeile</Footer>
    </Layout>
  );
  ...
```

Auf diese Weise sind die Komponenten des React Router mit den Seitenstruktur-Komponenten von Ant.Design strukturiert.

## Seiten erstellen

Seiten befinden sich in separaten Komponenten; jede Seite wird durch eine eigene React-Komponente dargestellt.

Eine bewährte Vorgehensweise ist, die Seitenkomponenten in einem Ordner namens `📂 seiten` abzulegen.

### Startseite

Erstellen Sie die Einstiegsseite, die die Komponente `Startseite` sein wird und dem Pfad `/` zugeordnet ist.

Die Datei dieser Seitenkomponente ist:

- `seiten/Startseite/index.jsx`

Der Code dieser Datei kann wie folgt aussehen:

```jsx title="src/seiten/Startseite/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Startseite() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Startseite</h1>
      <Button onClick={()=> navigate('/informationen')}>
        Zur Informationsseite wechseln
      </Button>
    </div>
  );
};

export default Startseite;
```

> Die Schaltfläche wechselt die Seite programmatisch mithilfe der Funktion `navigate`; dies ist eine Alternative zur Komponente `Link`.

### Informationen

Erstellen Sie eine Beispiel-Inhaltsseite, die die Komponente `Informationen` sein wird und dem Pfad `/informationen` zugeordnet ist.

Die Datei dieser Seitenkomponente ist:

- `seiten/Informationen/index.jsx`

Der Code dieser Datei kann wie folgt aussehen:

```jsx title="src/seiten/Informationen/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Informationen() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Informationen</h1>
      <Button onClick={()=> navigate('/')}>
        Zurück zur Startseite
      </Button>
    </div>
  );
}

export default Informationen;
```

> Die Schaltfläche wechselt die Seite programmatisch mithilfe der Funktion `navigate`; dies ist eine Alternative zur Komponente `Link`.

## Seiten importieren

Importieren Sie am Anfang von `App.jsx` die erstellten Seitenkomponenten.

```jsx title="src/App.jsx"
import Startseite from './seiten/Startseite';
import Informationen from './seiten/Informationen';
```

Mit den importierten Seiten ist es möglich, jede Seite einer bestimmten Adresse zuzuordnen, zum Beispiel `/`, `/informationen` usw.

Die Adresse der Seite kann auch als Route oder `Route` verstanden werden.

In `App.jsx` definieren Sie dort, wo die Routen bzw. genauer gesagt die `Routes` definiert werden, die Adresse und die Komponente der Seiten wie folgt:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Startseite/>}/>
      <Route path="/informationen" element={<Informationen/>}/>
    </Routes>
    ...
```

> Der `path` ist die Adresse und das `element` ist die Komponente der Seite.

Beachten Sie, dass wir im `Menu` Elemente mit `Link` haben, die auf die Adressen der Seiten verweisen; daher gibt das Attribut `to` im `Link` an, dass die zugehörige `Route` geladen werden soll, der derselbe Wert im `path` zugeordnet ist.

Im Browser können Sie diese Adressen direkt eingeben, und die jeweiligen Komponenten, also die Seiten, sollten angezeigt werden.

## Navigation

Um weitere Optionen für die Seitennavigation zu ermöglichen, sollten im `Menu` Komponenten vom Typ `Link` hinzugefügt werden, die auf die jeweilige Adresse verweisen.

Außerdem sollten die `Route`-Komponenten hinzugefügt werden, die die Adresse der jeweiligen Seitenkomponente zuordnen.

Mit der Funktion `navigate` können Sie Seiten programmatisch wechseln, zum Beispiel in diesen Situationen:

1. Auf der Login-Seite sollte nach erfolgreicher Validierung der Daten automatisch die Seite gewechselt werden.
2. Nach der Registrierung eines Kontos sollte bei erfolgreicher Speicherung der Daten automatisch zur Login-Seite gewechselt werden.

Wenn der Benutzer direkt über einen Klick mit der Navigation interagiert, verwenden wir die Komponente `Link`.

Für die anderen Fälle, in denen der Seitenwechsel zu einem bestimmten Zeitpunkt der Codeausführung erfolgt, verwenden wir die mit `useNavigate` erhaltene Funktion `navigate`.

## Fazit

Mit ReactJS und dem React Router ist es möglich, mehrere Seiten zu definieren und zwischen ihnen zu navigieren.

Ant.Design unterstützt beim Aufbau der Seitenstruktur und bietet verschiedene nützliche Komponenten, um komplexe und responsive Benutzeroberflächen zu erstellen.