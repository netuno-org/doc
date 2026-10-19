---
sidebar_position: 4
id: service-client
title: Klient usług HTTP i API REST
sidebar_label: Klient usług
---

## Wprowadzenie

W ekosystemie technologii Netuno dostarczanych jest kilka modułów w NPM, takich jak:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Zobacz także repozytorium [GIT Service Client](https://github.com/netuno-org/service-client).

Ten moduł służy do realizacji integracji z usługami opracowanymi w Netuno, czyli endpointami API REST
opracowanymi w backendzie Netuno, wewnątrz folderu `server/services` w aplikacjach Netuno.

Często podczas tworzenia usług używa się programów takich jak:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

do wykonywania testów żądań HTTP do usług.

W kodzie frontendu do integracji tych usług moglibyśmy użyć fetch, requests, AXIOS i wielu innych.

Jednak Netuno dostarcza swojego własnego klienta, który działa zarówno podczas tworzenia frontendu JavaScript,
jak i w backendzie NodeJS.

Powodem, dla którego Netuno ma własną implementację klienta HTTP dla usług, jest zapewnienie większej
praktyczności, uproszczenie implementacji kodu oraz zagwarantowanie większej zwinności w rozwoju.

## Instalacja

Instalacja klienta usług jest jak instalacja każdego innego modułu.

Tam, gdzie mamy plik `package.json`, wykonujemy polecenie instalacji:

```bash
bun add @netuno/service-client
```

## Importowanie

Aby zaimportować klienta usług w nowoczesnym rozwoju JavaScript:

```js
import _service from '@netuno/service-client';
```

Aby zaimportować klienta usług w klasycznym rozwoju JavaScript:

```js
const _service = require('@netuno/service-client');
```

Zauważ, że wewnętrzna nazwa w kodzie to `_service`.

> Domyślnie Netuno używa `_` jako prefiksu, aby wskazać, że coś jest wewnętrzne lub specyficzne, jak zasób
> lub narzędzie jego ekosystemu.

Dlatego, aby zachować standard, powinniśmy zawsze używać nazwy `_service`.

## Konfiguracja

Konfiguracja wykonywana jest globalnie — definiuje się ją
tylko raz, warto wykonać ją w początkowym punkcie ogólnego kodu.

To będzie konfiguracja minimalna:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Czyli definiuje prefiks adresów usług, co pozwala uniknąć
konieczności każdorazowego podawania pełnego URL — dzięki temu w
wywołaniach usług możemy podać tylko resztę URL.

### Pełna konfiguracja

Możemy skonfigurować wartości domyślne dla wszystkich wywołań
usług, przy czym w wywołaniu każdej usługi możemy te wartości
nadpisać.

Zobacz wszystkie parametry, które możemy skonfigurować:

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

To globalny prefiks URL.

#### url

To część URL, która jest dodawana do prefiksu — konkretny adres
usługi.

#### method

Metoda HTTP, która będzie użyta w żądaniu HTTP; domyślnie
jest to `GET`.

#### credentials

Określa zachowanie poświadczeń w wywołaniach HTTP:

- `omit` - Nigdy nie wysyła ani nie odbiera poświadczeń.
- `same-origin` - Wysyła i dołącza poświadczenia tylko wtedy, gdy
żądania kierowane są do tej samej domeny.
- `include` - Zawsze powinien dołączać poświadczenia, nawet jeśli domena jest inna.

Domyślnie wartością jest `include`, ponieważ ma to najwięcej sensu w
standardowym rozwoju — backend może, ale nie musi być w tej samej domenie,
zależy to od architektury, a w rozwoju lokalnym często różni się
od produkcji. Dlatego, aby uniknąć niespodzianek, zalecamy użycie
`include`.

#### headers

W `headers` możemy zdefiniować klucze i wartości nagłówka HTTP.

Domyślnie zdefiniowane jest, że dane będą wysyłane i odbierane w formacie
JSON.

#### start

Funkcja `callback` wykonywana, gdy żądanie HTTP ma się rozpocząć.

#### success

Funkcja `callback` wykonywana, gdy żądanie HTTP zostało wykonane
pomyślnie na serwerze backendu.

Treść odpowiedzi jest dostępna w pierwszym argumencie funkcji.

#### fail

Funkcja `callback` wykonywana, gdy żądanie HTTP wygenerowało jakiś
błąd.

Szczegóły błędu są dostępne w pierwszym argumencie funkcji.

#### end

Funkcja `callback` wykonywana, gdy żądanie HTTP zostało zakończone.

Jest wykonywana zawsze, niezależnie od tego, czy wystąpił sukces, czy błąd.

## Użycie

Aby wykonać usługę za pomocą żądania HTTP, definiujemy wartości
parametrów, które konfigurują wymagania usługi.

W kluczu `data` wysyłamy same dane, czyli wszystkie parametry
danych, które wyślemy do usługi backendu.

Zobacz podstawowy przykład żądania:

```js
import _service from '@netuno/service-client';

_service({
  url: "moja-usluga",
  data: { id: 1, przyklad: "Witaj backendzie." },
  start: () => {
    console.log("Żądanie się rozpocznie.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Odpowiedź tekstowa:", response.text);
    }
    if (response.json) {
      console.info("Odpowiedź w JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Nie udało się, błąd:", error);
  },
  end: () => {
    console.log("Żądanie zostało zakończone.");
  }
});
```

Końcowy URL uwzględni prefiks zdefiniowany globalnie w
konfiguracji ogólnej.

Ponieważ nie zdefiniowano metody HTTP, żądanie zostanie wysłane z
metodą domyślną zdefiniowaną w konfiguracji ogólnej, która domyślnie
to `GET`.

### Prosty

Prosty przykład wykonania żądania typu `POST`:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "produkt",
  data: { nazwa: "Kapelusz słomiany", ilosc: 20 },
  success: ({json}) => {
    console.info("Produkt utworzony pomyślnie:", json);
  },
  fail: (error) => {
    console.error("Nie udało się utworzyć produktu:", error);
  }
});
```

### Formularz

Kiedy używamy formularzy, możemy załadować klasę FormData z zawartością formularza, zobacz przykład:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formularz"));
_service({
  method: "PUT",
  url: "klient",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Klient zaktualizowany pomyślnie.");
    } else {
      alert("Nieprawidłowa odpowiedź.");
    }
  },
  fail: (e) => {
    console.log("Błąd", e);
  }
});
```

### Przesyłanie

Prosty przykład przesyłania plików za pomocą klasy `FormData`:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('plik', document.getElementById("polePlik").files[0]);
formData.append('innePole', 'wartosc...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('Plik przesłany pomyślnie.');
  },
  fail: (e) => {
    console.log("Błąd odpowiedzi", e);
  }
});
```

### Pobieranie

Możemy pobierać pliki generowane dynamicznie przez usługi w sposób zintegrowany w kontekście
strony.

#### BLOB - Duży Obiekt Binarny

Aby pobrać odpowiedzi binarne, musimy ustawić `blob` na wartość `true` w podstawowej parametryzacji,
a wygenerowane bajty otrzymujemy w `blob` odpowiedzi.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Określa, że odpowiedź jest binarna.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Nieprawidłowa odpowiedź.");
    }
  },
  fail: (e) => {
    console.log("Błąd", e);
  }
});
```

#### Niestandardowy plik

Nazwa i typ pliku mogą być dostosowane we frontendzie; zależność [DownloadJS](https://www.npmjs.com/package/downloadjs) jest bardzo przydatna w tym procesie.

Zainstaluj zależność [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

W kodzie można to wykorzystać w następujący sposób:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/raport/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "raport.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Błąd", e);
  }
});

_service({
  url: "/services/raport/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "raport.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Błąd", e);
  }
});
```

### URL do usług

Są sytuacje, w których musimy wygenerować URL usług, na przykład gdy istnieją usługi dostarczające zasoby, które
powinny być zintegrowane w HTML lub CSS.

Wyraźnym przykładem jest Awatar — użytkownik definiuje swój obraz awatara, a do zaprezentowania możemy wygenerować
końcowy URL w następujący sposób:

```js
const linkAwatara = _service.url(`/profil/awatar?uid=${uzytkownik.uid}`)
```

Wygenerowany URL można wstrzyknąć do HTML lub do właściwości CSS, takiej jak background.

### React & Ant.Design

Ponieważ często używamy Reacta i Ant.Design, oto kilka przydatnych wskazówek.

Klasyczne importy:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Zdefiniuj stan przetwarzania:

```js
const [ladowanie, ustawLadowanie] = useState(false);
```

Implementacja zdarzenia zapisu formularza, które wyśle obiekt z wypełnionymi wartościami w formacie JSON:

```js
const przyWyslaniu = (values) => {
  const przyBledzie = () => {
    notification.error({
      title: 'Błąd',
      description: 'Nie udało się zapisać danych.'
    });
  };
  _service({
    url: '/services/klient',
    method: 'POST',
    data: values,
    start: () => {
      ustawLadowanie(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Sukces',
          description: 'Dane zostały zapisane pomyślnie.'
        });
        return;
      }
      przyBledzie();
    },
    fail: (e) => {
      console.error("Żądanie usługi nie powiodło się.", e);
      przyBledzie();
    },
    end: () => {
        ustawLadowanie(false);
    },
  });
};
```

W komponencie formularza Ant.Design definiuje się właściwość akcji, która wysyła dane za pomocą wcześniej
zaimplementowanego zdarzenia, na przykład:

```jsx
  <Form onFinish={przyWyslaniu}>
    ...
  </Form>
```

#### Przesyłanie

Oto kompletny przykład przesyłania plików za pomocą formularza w Ant.Design i
FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function FormularzPrzesylania() {
  const [ladowanie, ustawLadowanie] = useState(false);
  const przyWyslaniu = (values)=> {
    const formData = new FormData();
    formData.append("tytul", values.tytul);
    formData.append("plik", values.plik.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "plik/zapisz",
      data: formData,
      start: () => {
        ustawLadowanie(true);
      },
      success: () => {
        notification.success({
          title: 'Formularz',
          description: 'Twoje dane zostały zapisane pomyślnie.'
        });
      },
      fail: (e) => {
        console.error("Przesyłanie formularza nie powiodło się", e);
        notification.error({
          title: 'Formularz',
          description: 'Nie udało się zapisać Twoich danych.'
        });
      },
      end: () => {
        ustawLadowanie(false);
      }
    });
  };
  return (
    <Form onFinish={przyWyslaniu} layout="vertical">
      <Form.Item label="Tytuł" name="tytul"
        rules={[{ required: true, message: 'Proszę podać tytuł.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Plik" name="plik"
        rules={[{ required: true, message: 'Proszę dodać plik.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Prześlij</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={ladowanie}>
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormularzPrzesylania;
```

## Podsumowanie

Service Client przyspiesza integrację z backendem w zakresie pobierania i wysyłania danych oraz plików.

Możliwe jest użycie dowolnej innej natywnej metody lub innej zależności do wykonania tych operacji, jednak
Service Client został opracowany, aby ułatwić i przyspieszyć integracje, będąc elastycznym i bardzo intuicyjnym.

Głównym celem dostarczania przez Netuno Service Client w swoim ekosystemie jest zapewnienie, że rozwój jest
jasny i szybki.

Podczas korzystania z Service Client, jeśli napotkasz jakikolwiek problem, zgłoś go w [Issues](https://github.com/netuno-org/service-client/issues) projektu.

⭐ Pamiętaj, aby dać gwiazdkę na GitHubie projektu:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).