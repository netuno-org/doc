---
sidebar_position: 4
id: service-client
title: Клиент для HTTP-сервисов и REST API
sidebar_label: Клиент для сервисов
---

## Введение

В экосистеме технологий Netuno предоставляются некоторые модули в NPM, например:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Смотрите также [GIT-репозиторий Service Client](https://github.com/netuno-org/service-client).

Этот модуль служит для интеграции с сервисами, разработанными в Netuno, то есть с конечными точками REST API, разработанными в бэкенде Netuno, в папке `server/services` приложений Netuno.

При разработке сервисов часто используют такие программы, как:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

для тестирования HTTP-запросов к сервисам.

В коде фронтенда для интеграции с этими сервисами можно было бы использовать fetch, requests, AXIOS и многие другие.

Однако Netuno предоставляет собственный клиент, который работает как при разработке фронтенда на JavaScript, так и в бэкенде на NodeJS.

Причина, по которой Netuno имеет собственную реализацию HTTP-клиента для сервисов, — обеспечить больше практичности, упростить реализацию кода и гарантировать большую скорость разработки.

## Установка

Установка клиента сервисов аналогична установке любого другого модуля.

В файле `package.json` выполняем команду установки:

```bash
bun add @netuno/service-client
```

## Импорт

Чтобы импортировать клиент сервисов при современной разработке на JavaScript:

```js
import _service from '@netuno/service-client';
```

Чтобы импортировать клиент сервисов при классической разработке на JavaScript:

```js
const _service = require('@netuno/service-client');
```

Обратите внимание, что внутреннее имя в коде — `_service`.

> По умолчанию Netuno использует `_` как префикс, чтобы обозначить что-то внутреннее или специфичное, например ресурс или инструмент из своей экосистемы.

Поэтому, чтобы соблюдать стандарт, всегда следует использовать имя `_service`.

## Настройка

Настройка выполняется глобально: настройка задаётся один раз, желательно выполнить её в начальной точке общего кода.

Это будет минимальная настройка:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

То есть задаётся префикс адресов сервисов; это избавляет от необходимости всегда указывать полный URL, поэтому в вызовах сервисов можно указывать только оставшуюся часть URL.

### Полная настройка

Можно настроить значения по умолчанию для всех вызовов сервисов, при этом в вызове каждого сервиса эти значения можно переопределить.

Смотрите все параметры, которые можно настроить:

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

Это глобальный префикс URL.

#### url

Это часть URL, которая добавляется к префиксу, — конкретный адрес сервиса.

#### method

HTTP-метод, который будет использоваться в HTTP-запросе; по умолчанию — `GET`.

#### credentials

Определяет поведение учётных данных в HTTP-вызовах:

- `omit` — никогда не отправляет и не получает учётные данные.
- `same-origin` — отправляет и включает учётные данные только при запросах в том же домене.
- `include` — всегда включает учётные данные, даже если домен другой.

По умолчанию используется `include`, потому что это больше всего подходит для стандартной разработки: бэкенд может находиться или не находиться в том же домене в зависимости от архитектуры, а локальная разработка иногда отличается от production, поэтому во избежание сюрпризов рекомендуем использовать `include`.

#### headers

В `headers` можно задавать ключи и значения HTTP-заголовка.

По умолчанию определено, что данные будут отправляться и приниматься в формате JSON.

#### start

Функция `callback`, выполняемая при начале HTTP-запроса.

#### success

Функция `callback`, выполняемая, когда HTTP-запрос успешно выполнен на бэкенд-сервере.

Содержимое ответа получается в первом аргументе функции.

#### fail

Функция `callback`, выполняемая, когда HTTP-запрос вызвал ошибку.

Детали ошибки получаются в первом аргументе функции.

#### end

Функция `callback`, выполняемая, когда HTTP-запрос завершён.

Выполняется всегда, независимо от того, был ли успех или ошибка.

## Использование

Чтобы выполнить сервис с HTTP-запросом, задаём значения параметров, которые настраивают требования сервиса.

В ключе `data` отправляем сами данные, то есть все параметры данных, которые отправим в бэкенд-сервис.

Смотрите базовый пример запроса:

```js
import _service from '@netuno/service-client';

_service({
  url: "мой-сервис",
  data: { id: 1, пример: "Привет, бэкенд." },
  start: () => {
    console.log("Запрос будет начат.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Ответ в текстовом виде:", response.text);
    }
    if (response.json) {
      console.info("Ответ в формате JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Не удалось выполнить запрос с ошибкой:", error);
  },
  end: () => {
    console.log("Запрос завершён.");
  }
});
```

Итоговый URL будет учитывать префикс, заданный глобально в общей настройке.

Поскольку HTTP-метод не был задан, запрос будет отправлен методом по умолчанию, определённым в общей настройке, который по умолчанию — `GET`.

### Простой пример

Простой пример выполнения запроса типа `POST`:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "продукт",
  data: { название: "Соломенная шляпа", количество: 20 },
  success: ({json}) => {
    console.info("Продукт успешно создан:", json);
  },
  fail: (error) => {
    console.error("Не удалось создать продукт:", error);
  }
});
```

### Форма

Когда мы используем формы, можно загрузить класс FormData содержимым формы; смотрите пример:

```js
import _service from '@netuno/service-client';

const данныеФормы = new FormData(document.getElementById("форма"));
_service({
  method: "PUT",
  url: "клиент",
  data: данныеФормы,
  success: ({json}) => {
    if (json.result === true) {
      alert("Клиент успешно обновлён.");
    } else {
      alert("Некорректный ответ.");
    }
  },
  fail: (e) => {
    console.log("Ошибка", e);
  }
});
```

### Загрузка

Простой пример загрузки файлов с использованием класса `FormData`:

```js
import _service from '@netuno/service-client';

const данныеФормы = new FormData();
данныеФормы.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
данныеФормы.append('файл', document.getElementById("полеФайла").files[0]);
данныеФормы.append('другоеПоле', 'значение...');
_service({
  method: "PUT",
  url: "/upload",
  data: данныеФормы,
  success: ({json}) => {
    alert('Файл успешно отправлен.');
  },
  fail: (e) => {
    console.log("Ошибка ответа", e);
  }
});
```

### Скачивание

Можно скачивать файлы, динамически сгенерированные сервисами, интегрированно в контексте страницы.

#### BLOB — большой двоичный объект

Чтобы скачать двоичные ответы, нужно задать `blob` со значением `true` в базовой параметризации, и мы получаем сгенерированные байты в `blob` ответа.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Указывает, что ответ двоичный.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Некорректный ответ.");
    }
  },
  fail: (e) => {
    console.log("Ошибка", e);
  }
});
```

#### Пользовательский файл

Имя и тип файла можно настроить на фронтенде; зависимость [DownloadJS](https://www.npmjs.com/package/downloadjs) очень полезна в этом процессе. 

Установите зависимость [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

В коде её можно использовать так:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/отчет/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "отчет.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Ошибка", e);
  }
});

_service({
  url: "/services/отчет/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "отчет.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Ошибка", e);
  }
});
```

### URL для сервисов

Есть ситуации, когда нужно сгенерировать URL сервисов, например, когда есть сервисы, предоставляющие ресурсы, которые должны быть интегрированы в HTML или CSS. 

Яркий пример — аватар: пользователь задаёт своё изображение аватара, и для отображения можно сгенерировать итоговый URL так:

```js
const ссылкаНаАватар = _service.url(`/профиль/аватар?uid=${пользователь.uid}`)
```

Сгенерированный URL можно внедрить в HTML или в свойство CSS, например background.

### React и Ant.Design

Поскольку мы много используем React и Ant.Design, вот несколько полезных советов.

Классические импорты:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Определить состояние обработки:

```js
const [загрузка, установитьЗагрузку] = useState(false);
```

Реализация события для сохранения формы, которая отправит объект с заполненными значениями в формате JSON:

```js
const приЗавершении = (значения) => {
  const приОшибке = () => {
    notification.error({
      title: 'Ошибка',
      description: 'Не удалось сохранить данные.'
    });
  };
  _service({
    url: '/services/клиент',
    method: 'POST',
    data: значения,
    start: () => {
      установитьЗагрузку(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Успех',
          description: 'Данные успешно сохранены.'
        });
        return;
      }
      приОшибке();
    },
    fail: (e) => {
      console.error("Сбой сервиса.", e);
      приОшибке();
    },
    end: () => {
        установитьЗагрузку(false);
    },
  });
};
```

В компоненте формы Ant.Design задаётся свойство действия, которое отправляет данные с ранее реализованным событием, например:

```jsx
  <Form onFinish={приЗавершении}>
    ...
  </Form>
```

#### Загрузка

Вот полный пример загрузки файлов с использованием формы в Ant.Design и FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function ФормаЗагрузки() {
  const [загрузка, установитьЗагрузку] = useState(false);
  const приЗавершении = (значения)=> {
    const данныеФормы = new FormData();
    данныеФормы.append("заголовок", значения.заголовок);
    данныеФормы.append("файл", значения.файл.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "файл/сохранить",
      data: данныеФормы,
      start: () => {
        установитьЗагрузку(true);
      },
      success: () => {
        notification.success({
          title: 'Форма',
          description: 'Ваши данные успешно сохранены.'
        });
      },
      fail: (e) => {
        console.error("Сбой загрузки формы", e);
        notification.error({
          title: 'Форма',
          description: 'Не удалось сохранить ваши данные.'
        });
      },
      end: () => {
        установитьЗагрузку(false);
      }
    });
  };
  return (
    <Form onFinish={приЗавершении} layout="vertical">
      <Form.Item label="Заголовок" name="заголовок"
        rules={[{ required: true, message: 'Пожалуйста, введите заголовок.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Файл" name="файл"
        rules={[{ required: true, message: 'Пожалуйста, выберите файл.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Загрузка</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={загрузка}>
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ФормаЗагрузки;
```

## Заключение

Service Client ускоряет интеграцию с бэкендом для получения и отправки данных и файлов.

Можно использовать любой другой нативный метод или другую зависимость для выполнения этих операций, однако Service Client разработан, чтобы упростить и ускорить интеграции, будучи гибким и очень интуитивным.

Основная цель предоставления Service Client в экосистеме Netuno — гарантировать, что разработка будет понятной и быстрой.

При использовании Service Client, если обнаружите какую-либо проблему, сообщите о ней в [Issues](https://github.com/netuno-org/service-client/issues) проекта.

⭐ Не забудьте поставить звезду GitHub проекта:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).