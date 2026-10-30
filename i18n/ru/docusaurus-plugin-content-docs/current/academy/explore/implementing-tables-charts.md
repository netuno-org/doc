---
id: implementing-tables-charts
title: Реализация таблиц и диаграмм
sidebar_label: Таблицы и диаграммы
---

В этом руководстве мы создадим интерфейс и логику простого приложения с акцентом на визуализацию данных. В ходе разработки проекта будут рассмотрены темы:

- Создание **«Форм»**, **«Полей»** и **«Связей»** для структурирования базы данных.
- Построение **«REST-сервисов»** для предоставления данных и динамического отображения информации в таблицах и диаграммах приложения с использованием библиотеки _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ и зависимости _Chart.js_, а также компонента таблицы из <a href="https://ant.design/" target="_blank">Ant Design</a>.

Вся визуальная структура проекта будет разработана с использованием **HTML, JavaScript и React.js**.
Рекомендуется иметь базовые знания:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Если у вас возникнут вопросы на этих этапах, обратитесь к:**
   - [Руководство по интерфейсу: Формы](/docs/academy/ui/forms)
   - [Руководство по интерфейсу: Поля](/docs/academy/ui/fields)
   - [Руководство по интерфейсу: Связи между формами](/docs/academy/ui/relationships-between-forms)
   - [Руководство по интерфейсу: REST-сервисы](/docs/academy/explore/services)


## Итоговый продукт

Если выполнить все шаги этого руководства, вы создадите функциональную панель в рабочей области Netuno, содержащую:

* **Таблицу данных** со списком записей работников и итоговыми часами.
* **Динамичную цветную столбчатую диаграмму**, визуально отображающую эти же данные.

![итоговый-продукт.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Архитектура решения

Прежде чем писать код, важно понять, как взаимодействуют части решения. Решение разделено на **4 слоя**, которые взаимодействуют сверху вниз:

```
DashboardContainer         (запрашивает данные с сервера)
       │
       ▼
VizualizatsiyaDannykh      (организует макет в две колонки)
       │
  ┌────┴────┐
  ▼         ▼
SpisokTablitsy  GrafikStolbtsov  (отображают полученные данные)
```

:::tip
Преимущество этой архитектуры в том, что каждый компонент имеет **единственную ответственность**.
:::

## Шаг 1: Структура данных

Первый шаг — создать формы, настроить связь между ними и заполнить их данными, чтобы позже построить таблицу и диаграмму.

На этой схеме показана архитектура форм и поля, которые нужно воспроизвести в вашей среде Netuno:

![первый-шаг.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Важно:** хотя поле `id` есть на схеме, **создавать его вручную не нужно**. Netuno автоматически генерирует этот идентификатор сразу после создания таблицы.

### Шаблон панели

Чтобы отобразить таблицу и диаграмму, нам понадобится место в интерфейсе вашего приложения. Netuno уже предоставляет базовый шаблон для главной панели.

Откройте редактор кода и найдите файл:

```text
/apps/moe_prilozhenie/server/templates/dashboard.html
```
*(Не забудьте заменить **moe_prilozhenie** реальным именем папки вашего приложения).*

Вы увидите следующую строку HTML-кода:

```html
<div id="app-dashboard"></div>
```

## Шаг 2: Сервис данных

Теперь, когда база данных готова, а HTML подготовлен, нужно создать «посредника» (REST-сервис). Он будет отвечать за обращение к базе данных, подсчёт общего количества часов каждого работника и передачу этой информации в готовом виде для таблицы и диаграммы.


### Создание файла сервиса

Сервисы в Netuno хранятся в папке `server/services/`. Перейдите в каталог вашего проекта и создайте файл `rabotniki.js`:

```text
/apps/moe_prilozhenie/server/services/rabotniki.js
```
**DashboardContainer** определяет язык панели и вызывает **/services/rabotniki**, когда панель на русском, или **/services/workers**, когда на английском. Для каждого языка используется свой файл сервиса.

### Написание кода

Этот код выполняет три основных действия, используя встроенные возможности Netuno (**_db**, **_val** и **_out**):

- **Запрос `_db.query`:** выбирает из базы данных только **активных** работников и вычисляет сумму отработанных часов для каждого.

- **Обработка `_val.list` и `_val.map`:** формирует результат в виде чистого списка со структурированными объектами.

- **Ответ `_out.json`:** отправляет данные в формате JSON, чтобы интерфейс (React) мог их прочитать.

Откройте файл `rabotniki.js` и вставьте код ниже:

```javascript
// 1. Запрос: _db.query() выполняет SQL и возвращает список найденных записей.
const dbZapisi = _db.query(`
    SELECT DISTINCT
        rabotnik.imya, SUM(DATEDIFF(HOUR, zapis.nachalo, zapis.konec)) AS vsego
    FROM rabotnik INNER JOIN zapis
        ON rabotnik.id = zapis.rabotnik_id
    WHERE rabotnik.aktivnyi = true AND zapis.aktivnyi = true
    GROUP BY rabotnik.imya
    ORDER BY vsego ASC
`);

// 2. Обработка данных: _val.list() создаёт пустой список для хранения обработанных данных.
const spisok = _val.list();

// Перебираем каждую строку, возвращённую базой данных
for (const dbZapis of dbZapisi) {
    spisok.add(
        // _val.map() создаёт объект с полями, которые будет использовать React
        _val.map()
            .set("imya", dbZapis.getString("imya"))  // имя → поле "imya"
            .set("vsego", dbZapis.getInt("vsego"))   // общее количество часов → поле "vsego"
    );
}

// 3. Ответ
// Отправляем итоговый список в формате JSON в интерфейс React.
_out.json(spisok);
```
:::tip
- **Обратите внимание на имена полей:** поля, определённые здесь как **"imya"** и **"vsego"**, должны точно совпадать с теми, которые компоненты React будут искать на следующих шагах (`dataIndex: 'imya'` и `dataIndex: 'vsego'`). Они должны быть идентичны.

- **О фильтре `aktivnyi = true`:** в базе данных есть столбец **aktivnyi** в таблицах **rabotnik** и **zapis**. Фильтруя только активные записи, мы гарантируем, что архивные или отключённые данные не появятся в таблице и на диаграмме.
:::

## Шаг 3: Frontend-окружение (React)

Теперь, когда backend (база данных и сервисы) готов, подготовим визуальный интерфейс.

Откройте терминал и выполните следующие шаги:

#### 1. Установите базовые зависимости
Перейдите в папку `ui` вашего приложения и установите пакеты.

```bash
npm install
```

#### 2. Установите библиотеки для диаграмм

Так как проект будет отображать диаграммы, установите библиотеки, которые отрисуют их на экране:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Настройте поддержку нескольких языков

Установите библиотеку для управления несколькими языками:

```bash
npm install react-intl
```

#### 4. Запустите компилятор (watch)

После установки всего необходимого при каждом сохранении файла экран будет обновляться автоматически:

```bash
npm run watch
```

#### 5. Создайте компоненты
Чтобы поддерживать порядок в проекте, создайте отдельные компоненты для таблицы и диаграммы.

Перейдите в каталог `src/components/` вашего приложения и создайте папки:

* Таблица: SpisokTablitsy
* Диаграмма: GrafikStolbtsov
* Контейнер: VizualizatsiyaDannykh

```text
/apps/imya_vashiego_prilozheniya/ui/src/components/SpisokTablitsy/
/apps/imya_vashiego_prilozheniya/ui/src/components/GrafikStolbtsov/
/apps/imya_vashiego_prilozheniya/ui/src/containers/VizualizatsiyaDannykh/
```

## Шаг 4: Компонент SpisokTablitsy

Компонент **SpisokTablitsy** получает данные из сервиса и автоматически строит столбцы с помощью **Ant Design** — библиотеки готовых визуальных компонентов, которая уже входит в интерфейс Netuno.

Перейдите в папку SpisokTablitsy и создайте файл `index.jsx`:

```text
/apps/imya_vashiego_prilozheniya/ui/src/components/SpisokTablitsy/index.jsx
```

Откройте файл и вставьте код ниже:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Компонент таблицы из Ant Design

import './index.less';

const soobsheniya = 'dashboardcontainer.datavisualization.table';

function SpisokTablitsy({ dannye = [] }) {
  // Определение заголовков и того, какое поле объекта отображать в каждом столбце
  const kolonki = [
    {
      title: <FormattedMessage id={`${soobsheniya}.workers`} />, // Переведённый заголовок
      dataIndex: 'imya',  // Поле "imya" из JSON, возвращённого сервисом
    },
    {
      title: <FormattedMessage id={`${soobsheniya}.total`} />,
      dataIndex: 'vsego', // Поле "vsego" из JSON, возвращённого сервисом
    }
  ];

  return (
    <Table
      columns={kolonki}      // Структура столбцов
      dataSource={dannye}      // Сами данные (список объектов)
      pagination={false}     // Без пагинации: все записи сразу
      bordered={true}        // С видимыми границами ячеек
    />
  );
}

export default SpisokTablitsy;
```

 **Как работает код:**

Этот функциональный компонент получает список `dannye` как параметр (prop) и напрямую передаёт его в `<Table>` из Ant Design.

Конфигурация **kolonki** сообщает Ant Design, какой заголовок показывать в `title` и какое поле JSON-объекта заполнять в ячейке `dataIndex`. Ant Design автоматически отвечает за весь HTML, стили границ и макет — вручную создавать CSS для этого не нужно.

**Файл `index.less`:** создайте файл `index.less` в той же папке. Пока он может оставаться пустым, так как Ant Design уже предоставляет базовое оформление таблицы.


## Шаг 5: Компонент GrafikStolbtsov

Создадим столбчатую диаграмму для визуализации данных с помощью библиотеки **react-chartjs-2**. Этот компонент получит данные, преобразует их в формат, понятный Chart.js, назначит цвета и отрисует диаграмму на экране.

Перейдите в папку `GrafikStolbtsov` и создайте файл `index.jsx`:

```text
/apps/imya_vashiego_prilozheniya/ui/src/components/GrafikStolbtsov/index.jsx
```
Откройте файл и вставьте код ниже:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Компонент столбчатой диаграммы
import { Chart, registerables } from 'chart.js';  // Ядро Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const soobsheniya = 'dashboardcontainer.datavisualization.chart';

// ОБЯЗАТЕЛЬНО: зарегистрировать все элементы Chart.js перед использованием.
// Без этой строки диаграмма не отрисуется и в консоли появится ошибка.
Chart.register(...registerables);

function GrafikStolbtsov({ dannye }) {
  const intl = useIntl();
  const [dannyeGrafika, setDannyeGrafika] = useState(null); // Данные в формате Chart.js

  useEffect(() => {
    // Палитра из 7 цветов для столбцов (циклически, если элементов больше 7)
    const tsveta = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const metki = [];
    const znacheniya = [];

    // Структура данных, требуемая Chart.js
    const novyeDannyeGrafika = {
      labels: [],       // Имена на оси X (горизонтальной)
      datasets: [
        {
          label: intl.formatMessage({ id: `${soobsheniya}.label` }), // Переведённая легенда
          data: [],           // Значения на оси Y (высота столбцов)
          backgroundColor: [] // Цвет каждого столбца
        }
      ]
    };

    // Перебираем полученные данные и формируем списки
    for (const i in dannye) {
      metki.push(dannye[i].imya);   // Имя работника → ось X
      znacheniya.push(dannye[i].vsego);  // Общее количество часов → высота столбца

      // (i + 1) % 7: когда "i" достигает 7, возвращаемся к 0, повторяя цвета по циклу
      novyeDannyeGrafika.datasets[0].backgroundColor.push(tsveta[(i + 1) % 7]);
    }

    novyeDannyeGrafika.labels = metki;
    novyeDannyeGrafika.datasets[0].data = znacheniya;

    setDannyeGrafika(novyeDannyeGrafika); // Сохранить в состоянии, чтобы запустить повторную отрисовку

  }, [dannye]); // Выполнять снова при каждом изменении "dannye"

  // Пока данные не обработаны, ничего не отрисовываем
  if (dannyeGrafika == null) {
    return null;
  }

  return (
    <Bar data={dannyeGrafika} />
  );
}

export default GrafikStolbtsov;
```
**Как работает код:**

У этого компонента три основные обязанности:

**Подготовка `useState`:** инициализирует компонент состоянием `null`, чтобы дождаться обработки данных, пришедших с сервера.

**Обработка данных `useEffect`:** когда данные приходят через prop `dannye`, хук **useEffect** запускается автоматически. Он задаёт палитру цветов и использует цикл **for**, чтобы разделить информацию: имена работников попадают в метки оси X **labels**, общее количество часов определяет высоту столбцов `data`, а каждому столбцу циклически назначается цвет.

**Отрисовка на экране `return`:** использует компонент `<Bar>` из библиотеки, чтобы нарисовать диаграмму на основе обработанных данных, сохранённых в состоянии.

**Файл `index.less`:** также создайте файл `index.less` в папке `GrafikStolbtsov`. Пока он может оставаться пустым.


## Шаг 6: Визуальный макет VizualizatsiyaDannykh

Теперь, когда компоненты таблицы и диаграммы готовы, нужен контейнер, который разместит их рядом на экране.

Перейдите в папку **VizualizatsiyaDannykh** и создайте файл `index.jsx`:

```text
/apps/imya_vashiego_prilozheniya/ui/src/containers/VizualizatsiyaDannykh/index.jsx
```

Откройте файл и вставьте код ниже:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Заголовки, переводимые по языкам

import GrafikStolbtsov from "../../components/GrafikStolbtsov";
import SpisokTablitsy from "../../components/SpisokTablitsy";

import './index.less';

const soobsheniya = 'dashboardcontainer.datavisualization';

function VizualizatsiyaDannykh({ dannye = [] }) {
  return (
    <div>
      <div className="row">              {/* Строка Bootstrap */}

        {/* Левая колонка: таблица */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading vizualizatsiya-dannykh__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${soobsheniya}.table.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <SpisokTablitsy dannye={dannye} />   {/* Передаёт данные в таблицу */}
            </div>
          </div>
        </div>

        {/* Правая колонка: диаграмма */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading vizualizatsiya-dannykh__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${soobsheniya}.chart.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <GrafikStolbtsov dannye={dannye} />    {/* Передаёт те же данные в диаграмму */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VizualizatsiyaDannykh;
```
**Как работает код:**

Этот компонент работает как визуальный организатор. Он получает список `dannye` и передаёт его двум дочерним компонентам без каких-либо преобразований.

Классы `row` и `col-lg-6` относятся к Bootstrap Grid и делят экран пополам: левая колонка получает таблицу, правая — диаграмму. На меньших экранах (смартфонах) они автоматически располагаются друг под другом.

Классы `panel`, `panel-heading` и `panel-body` создают вид «блока с заголовком» для каждого компонента.

**Файл `index.less`:** также создайте файл `index.less` в этой папке для будущего оформления панелей.

## Шаг 7: Контейнер панели

У нас уже есть сервисы на backend и визуальные компоненты на frontend. Нужен контейнер, который обратится к серверу, получит данные и передаст их в **VizualizatsiyaDannykh**.

Netuno уже автоматически генерирует базовую структуру панели. Отредактируйте существующий файл:

```text
/apps/imya_vashiego_prilozheniya/ui/src/containers/DashboardContainer/index.jsx
```

Замените содержимое файла кодом ниже:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Официальный HTTP-клиент Netuno

import { Spin, message } from 'antd';           // Индикатор загрузки и ошибки

import VizualizatsiyaDannykh from "../VizualizatsiyaDannykh"; // Визуальный макет

import { useIntl } from 'react-intl';           // Поддержка нескольких языков

import './index.less';

const soobsheniya = 'dashboardcontainer.datavisualization';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [rabotniki, setRabotniki] = useState([]);   // Состояние: список работников
  const [zagruzka, setZagruzka] = useState(false); // Состояние: идёт загрузка?

  // При открытии страницы автоматически запустить загрузку
  useEffect(() => {
    zagruzitRabotnikov();
  }, []);

  const zagruzitRabotnikov = () => {
    setRabotniki([]);      // Очистить предыдущие данные
    setZagruzka(true);    // Включить индикатор загрузки

    _service({
      // Определяет язык панели и вызывает правильный URL сервиса
      url: intl.locale.indexOf('ru') == 0 ? '/services/rabotniki' : '/services/workers',
      success: (otvet) => {
        setRabotniki(otvet.json); // Сохранить полученные данные в состоянии
        setZagruzka(false);
      },
      fail: (oshibka) => {
        setZagruzka(false);
        console.error('Сервис rabotniki завершился с ошибкой.', oshibka);
        message.error(intl.formatMessage({ id: `${soobsheniya}.loading_error` }));
      }
    });
  };

  // Позволяет родительскому компоненту (панели) вызывать zagruzitRabotnikov() через ref
  useImperativeHandle(ref, () => ({
    zagruzitRabotnikov
  }));

  return (
    <div ref={ref}>
      { zagruzka == false
        ? <VizualizatsiyaDannykh dannye={rabotniki} /> // Данные готовы: показать панель
        : <Spin/>                              // Ещё загружается: показать индикатор
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**Как работает код:**

У этого компонента три основные обязанности:

**Начальное состояние `useState`:** создаёт два внутренних элемента управления — **rabotniki** (список, приходящий с сервера) и **zagruzka** (флаг, показывающий, что данные ещё загружаются).

**Загрузка данных `_service`:** функция **zagruzitRabotnikov** использует **_service** для вызова backend-сервиса. В отличие от нативного **fetch** в JavaScript, **_service** автоматически управляет аутентификацией, сессией и обработкой ошибок. Он также определяет язык панели и выбирает правильный URL: `/services/rabotniki` для русского, `/services/workers` для английского.

**Распределение и отрисовка `return`:** пока данные загружаются, отображается индикатор загрузки **(Spin)**. Когда данные приходят, список **rabotniki** передаётся в **VizualizatsiyaDannykh**, который распределяет его между таблицей и диаграммой.

### Оформление панели

Откройте файл `index.less` в папке `DashboardContainer` и вставьте код ниже, чтобы выделить заголовки панелей:

```text
/apps/imya_vashiego_prilozheniya/ui/src/containers/DashboardContainer/index.less
```

```css
.fonPaneli {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Как работает код:**

Этот класс задаёт синий фон **(#3f54ba)** и область внутреннего отступа **(padding)** для заголовков.

Он используется классами `vizualizatsiya-dannykh__panel` из `VizualizatsiyaDannykh`, чтобы заголовки **Таблица** и **Диаграмма** визуально выделялись.


## Шаг 8: Компиляция проекта

Чтобы весь код React был скомпилирован Netuno:

* **Если ваш терминал остался открыт** и `npm run watch` работает в фоне: изменения компилируются автоматически при каждом сохранении файла.
* **Если вы закрыли терминал** или процесс остановился: ничего страшного. Снова откройте терминал, перейдите в папку `ui` и выполните команду ещё раз:

```bash
npm run watch
```

## Заключение

В этом руководстве вы освоили ключевые навыки работы с платформой Netuno, изучив полный цикл интеграции потока данных между сервером и пользовательским интерфейсом.

В ходе разработки были рассмотрены темы:

- **База данных:** создание и организация таблиц и структур данных визуальным и эффективным способом.

- **Backend REST:** разработка сервисов и бизнес-логики для предоставления данных через API.

- **Frontend на React:** интеграция и динамическое отображение этих данных в современном адаптивном интерфейсе.

Если у вас возникнут трудности или появились предложения по улучшению, свяжитесь с нами.

Наша команда и сообщество готовы помочь.

Удачной разработки!