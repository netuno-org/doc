---
sidebar_position: 3
id: pages
title: Strony i React Router
sidebar_label: Strony i React Router
---

## Wprowadzenie

Tworzenie stron jest częstą potrzebą, gdy aplikacja webowa staje się złożona lub zachodzi potrzeba prezentowania różnych treści; zdarza się to szczególnie w przypadku witryny internetowej lub platformy.

Podczas tworzenia w React można utworzyć mechanizm nawigacji między stronami za pomocą [React Router](https://reactrouter.com).

Poniższe kroki należy wykonać w swoim projekcie frontendu w React.

Jeśli jest to frontend zintegrowany z Netuno, poniższe kroki wykonaj w folderze aplikacji Netuno, w którym znajduje się projekt frontendu, na przykład w:

- `📂 website/`

## Instalacja

Upewnij się, że w projekcie masz zainstalowany moduł React Router:

```
bun install react-router
```

Oraz Ant.Design, który posłuży do utworzenia ogólnej struktury:

```
bun install antd
```

## Konfiguracja

Na początek edytuj `main.jsx`, który znajduje się w folderze `📂 src`; należy umieścić `BrowserRouter` w następujący sposób:

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

**Bardzo ważne:** Jeśli frontend został dopiero utworzony, usuń wszelkiego rodzaju CSS/Style i niepotrzebne importy, np. obrazów, aby uniknąć niepożądanych zachowań.

W `App.js`, który również znajduje się w folderze `📂 src`, dodaj importy modułów w następujący sposób:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Po importach dodaj stałe:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

Na tym początkowym etapie wartość zwracana przez komponent App może wyglądać następująco:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Start</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/informacje">Informacje</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* Trasy stron będą tutaj! */ }
        </Routes>
      </Content>
      <Footer>Stopka</Footer>
    </Layout>
  );
  ...
```

W ten sposób komponenty React Router są ułożone razem z komponentami struktury strony Ant.Design.

## Tworzenie stron

Strony są osobnymi komponentami; każda strona jest reprezentowana przez własny komponent React.

Dobrą praktyką jest umieszczanie komponentów stron w folderze o nazwie `📂 strony`.

### Start

Utwórz stronę startową, która będzie komponentem `Start` i będzie powiązana ze ścieżką `/`.

Plikiem komponentu tej strony będzie:

- `strony/Start/index.jsx`

Kod tego pliku może wyglądać następująco:

```jsx title="src/strony/Start/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Start() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Start</h1>
      <Button onClick={()=> navigate('/informacje')}>
        Przejdź do strony Informacje
      </Button>
    </div>
  );
};

export default Start;
```

> Przycisk programowo zmienia stronę za pomocą funkcji `navigate`; jest alternatywą dla komponentu `Link`.

### Informacje

Utwórz przykładową stronę z treścią, która będzie komponentem `Informacje` i będzie powiązana ze ścieżką `/informacje`.

Plikiem komponentu tej strony będzie:

- `strony/Informacje/index.jsx`

Kod tego pliku może wyglądać następująco:

```jsx title="src/strony/Informacje/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Informacje() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Informacje</h1>
      <Button onClick={()=> navigate('/')}>
        Wróć do strony startowej
      </Button>
    </div>
  );
}

export default Informacje;
```

> Przycisk programowo zmienia stronę za pomocą funkcji `navigate`; jest alternatywą dla komponentu `Link`.

## Importowanie stron

Na początku `App.jsx` zaimportuj utworzone komponenty stron.

```jsx title="src/App.jsx"
import Start from './strony/Start';
import Informacje from './strony/Informacje';
```

Po zaimportowaniu stron można powiązać każdą stronę z określonym adresem, np. `/`, `/informacje` itd.

Adres strony można też rozumieć jako trasę, czyli `Route`.

Dlatego w `App.jsx`, gdzie definiuje się trasy, a właściwie `Routes`, adres i komponent stron określa się następująco:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/informacje" element={<Informacje/>}/>
    </Routes>
    ...
```

> `path` to adres, a `element` to komponent strony.

Zauważ, że w `Menu` są elementy z `Link`, które wskazują adresy stron; dlatego atrybut `to` w `Link` oznacza, że należy załadować odpowiedni `Route`, który ma tę samą wartość przypisaną w `path`.

W przeglądarce możesz wpisać te adresy bezpośrednio, a odpowiednie komponenty, czyli strony, powinny się pojawić.

## Nawigacja

Aby uzyskać więcej opcji nawigacji między stronami, należy dodać w `Menu` komponenty typu `Link`, które wskazują odpowiedni adres.

Należy również dodać komponenty `Route`, które wiążą adres z odpowiednim komponentem strony.

Za pomocą funkcji `navigate` można programowo zmieniać strony, na przykład w takich sytuacjach:

1. Na stronie logowania po pomyślnym zweryfikowaniu danych należy automatycznie przejść do innej strony.
2. Po zarejestrowaniu konta, gdy dane zostały pomyślnie zapisane, należy automatycznie przejść do strony logowania.

Gdy użytkownik korzysta bezpośrednio z nawigacji poprzez kliknięcie, używamy komponentu `Link`.

W innych przypadkach, gdy zmiana strony następuje w określonym momencie wykonywania kodu, używamy funkcji `navigate` uzyskanej z `useNavigate`.

## Podsumowanie

Dzięki ReactJS i React Router można zdefiniować wiele stron i nawigować między nimi.

Ant.Design wspomaga budowę struktury strony i oferuje wiele przydatnych komponentów do tworzenia złożonych, responsywnych interfejsów.