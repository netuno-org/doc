---
id: implementing-tables-charts
title: Implementarea tabelelor și graficelor
sidebar_label: Tabele și GraficE
---

În acest tutorial, vom crea interfața și logica unei aplicații simple, cu accent pe vizualizarea datelor. Dezvoltarea proiectului va aborda subiectele:

- Crearea de **"Formulare"**, **"Câmpuri"** și **"Relații"** pentru structurarea bazei de date.
- Construirea de **"Servicii Web REST"** pentru a furniza datele și afișarea dinamică a informațiilor în tabele și grafice în aplicație, folosind bibliotecile _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ și dependența _Chart.js_, precum și componenta de tabel din <a href="https://ant.design/" target="_blank">Ant Design</a>.

Toată structura vizuală a proiectului va fi dezvoltată folosind **HTML, JavaScript și React.js**.
Este recomandabil să aveți cunoștințe de bază despre:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Dacă aveți întrebări la acești pași, consultați:**
   - [Ghidul interfeței: Formulare](/docs/academy/ui/forms)
   - [Ghidul interfeței: Câmpuri](/docs/academy/ui/fields)
   - [Ghidul interfeței: Relații între formulare](/docs/academy/ui/relationships-between-forms)
   - [Ghidul interfeței: Servicii Web REST](/docs/academy/explore/services)


## Produsul Final

Urmând toți pașii acestui tutorial, veți construi un panou funcțional în spațiul de lucru Netuno, care conține:

* Un **tabel de date** care listează înregistrările lucrătorilor și totalurile de ore.
* Un **grafic cu bare** dinamic și colorat care afișează vizual aceleași date.

![produs-final-ro.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Arhitectura Soluției

Înainte de a scrie orice cod, este important să înțelegeți cum se îmbină piesele. Soluția este împărțită în **4 straturi** care comunică de sus în jos:

```
ContainerDashboard         (preia datele de pe server)
       │
       ▼
VizualizareDate            (organizează aspectul în două coloane)
       │
  ┌────┴────┐
  ▼         ▼
ListaTabel  GraficBare     (randează datele primite)
```

:::tip
Avantajul acestei arhitecturi este că fiecare componentă are **o singură responsabilitate**.
:::

## Pasul 1: Structura Datelor

Primul pas este să creați formularele, să configurați relația dintre ele și să le completați cu date pentru a genera tabelul și graficul mai târziu.

Aceasta este diagrama cu arhitectura formularelor și câmpurile pe care ar trebui să le replicați în mediul dvs. Netuno:

![primul-pas-ro.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Important:** Deși câmpul `id` apare în diagramă, **nu este necesar să îl creați manual**. Netuno generează acest identificator automat imediat după crearea tabelului.

### Șablon Dashboard

Pentru a afișa tabelul și graficul, avem nevoie de un loc în interfața aplicației dvs. Netuno oferă deja un șablon de bază pentru panoul principal.

Deschideți editorul de cod și găsiți fișierul:

```text
/apps/aplicatiamea/server/templates/dashboard.html
```
*(Nu uitați să înlocuiți **aplicatiamea** cu numele real al folderului aplicației dvs.).*

Veți observa următoarea linie de cod HTML:

```html
<div id="app-dashboard"></div>
```

## Pasul 2: Serviciul de Date

Acum că avem baza de date pregătită și HTML-ul pregătit, trebuie să creăm "mesagerul" (un Serviciu Web REST). El va fi responsabil pentru a accesa baza de date, a calcula totalul orelor fiecărui lucrător și a livra această informație gata pentru tabel și grafic.


### Crearea fișierului serviciului

Serviciile în Netuno sunt stocate în folderul `server/services/`. Navigați până la directorul proiectului dvs. și creați fișierul `lucratori.js`:

```text
/apps/aplicatiamea/server/services/lucratori.js
```
**ContainerDashboard** detectează limba panoului și apelează **/services/lucratori** când panoul este în Română, sau **/services/workers** când este în Engleză. Fiecare limbă are propriul fișier de serviciu.

### Scrierea codului

Acest cod realizează trei acțiuni principale folosind resursele native ale Netuno (**_db**, **_val** și **_out**):

- **Interogare _db.query:** Caută doar lucrătorii **activi** în baza de date și calculează suma orelor lucrate de fiecare.

- **Procesare _val.list și _val.map:** Organizează rezultatul într-o listă curată cu obiecte structurate.

- **Răspuns _out.json:** Trimite datele în format JSON pentru ca interfața (React) să le poată citi.

Deschideți fișierul `lucratori.js` și lipiți codul de mai jos:

```javascript
// 1. Interogare, _db.query() execută SQL-ul și returnează lista de înregistrări găsite.
const dbInregistrari = _db.query(`
    SELECT DISTINCT
        lucrator.nume, SUM(DATEDIFF(HOUR, inregistrare.inceput, inregistrare.sfarsit)) AS total
    FROM lucrator INNER JOIN inregistrare
        ON lucrator.id = inregistrare.lucrator_id
    WHERE lucrator.activ = true AND inregistrare.activ = true
    GROUP BY lucrator.nume
    ORDER BY total ASC
`);

// 2. Procesarea Datelor, _val.list() creează o listă goală pentru a stoca datele procesate.
const lista = _val.list();

// Parcurge fiecare linie returnată de baza de date
for (const dbInregistrare of dbInregistrari) {
    lista.add(
        // _val.map() creează un obiect cu câmpurile pe care React le va consuma
        _val.map()
            .set("nume", dbInregistrare.getString("nume"))  // nume → câmpul "nume"
            .set("total", dbInregistrare.getInt("total"))   // total ore → câmpul "total"
    );
}

// 3. Răspuns
// Trimite lista finală în format JSON către interfața React.
_out.json(lista);
```
:::tip
-  **Atenție la numele câmpurilor:** Câmpurile definite aici ca **"nume"** și **"total"** sunt exact aceleași pe care componentele React le vor căuta în pașii următori (dataIndex: 'nume' și dataIndex: 'total'). Ele trebuie să fie identice.

- **Despre filtrul activ = true:** Baza de date are o coloană **activ** în tabelele **lucrator** și **inregistrare**. Filtrând doar înregistrările active, garantăm că datele arhivate sau dezactivate nu apar în tabel și grafic.
:::

## Pasul 3: Mediu Frontend (React)

Acum că backend-ul (baza de date și serviciile) este gata, să pregătim interfața vizuală.

Deschideți terminalul și urmați pașii de mai jos:

#### 1. Instalați dependențele de bază
Navigați până la folderul `ui` al aplicației dvs. și instalați pachetele.

```bash
npm install
```

#### 2. Instalați bibliotecile pentru Grafice

Deoarece proiectul va afișa grafice, descărcați bibliotecile care vor realiza acest desen pe ecran:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Gestionați multiple limbi

Instalați biblioteca pentru a gestiona multiple limbi:

```bash
npm install react-intl
```

#### 4. Porniți Compilatorul (Watch)

Cu totul instalat, de fiecare dată când salvăm un fișier, acesta va actualiza ecranul automat:

```bash
npm run watch
```

#### 5. Creați Componente
Pentru a menține proiectul organizat, creați componente separate pentru Tabel și Grafic.

Navigați până la directorul `src/components/` al aplicației dvs. și creați folderele:

* Tabel: ListaTabel
* Grafic: GraficBare
* Container: VizualizareDate

```text
/apps/numele_aplicatiei_tale/ui/src/components/ListaTabel/
/apps/numele_aplicatiei_tale/ui/src/components/GraficBare/
/apps/numele_aplicatiei_tale/ui/src/containers/VizualizareDate/
```

## Pasul 4: Componenta ListaTabel

Componenta **ListaTabel** va primi datele de la serviciu și va construi coloanele automat folosind **Ant Design** — o bibliotecă de componente vizuale gata făcute care însoțește deja interfața Netuno.

Navigați până la folderul ListaTabel și creați un fișier `index.jsx`:

```text
/apps/numele_aplicatiei_tale/ui/src/components/ListaTabel/index.jsx
```

Deschideți fișierul și lipiți codul de mai jos:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Componenta de tabel din Ant Design

import './index.less';

const messages = 'dashboardcontainer.datavisualization.table';

function ListaTabel({ data = [] }) {
  // Definirea antetelor și ce câmp din obiect să afișeze în fiecare coloană
  const columns = [
    {
      title: <FormattedMessage id={`${messages}.workers`} />, // Titlu tradus
      dataIndex: 'nume',  // Câmpul "nume" din JSON-ul returnat de serviciu
    },
    {
      title: <FormattedMessage id={`${messages}.total`} />,
      dataIndex: 'total', // Câmpul "total" din JSON-ul returnat de serviciu
    }
  ];

  return (
    <Table
      columns={columns}      // Structura coloanelor
      dataSource={data}      // Datele în sine (listă de obiecte)
      pagination={false}     // Fără paginare: toate înregistrările deodată
      bordered={true}        // Cu borduri vizibile în celule
    />
  );
}

export default ListaTabel;
```

 **Înțelegerea codului:**

Această componentă funcțională primește lista `data` ca parametru (prop) și o livrează direct către `<Table>` din Ant Design.

Configurația **columns** informează "Ant Design" ce titlu să afișeze în antet **title** și ce câmp din obiectul JSON să completeze în celula `dataIndex`. Ant Design se ocupă de tot HTML-ul, stilurile de borduri și aspectul automat — nu este necesar să creați CSS manual pentru asta.

** Fișierul index.less:** Creați fișierul `index.less` în același folder. Poate rămâne gol deocamdată, deoarece Ant Design oferă deja stilizarea de bază a tabelului.


## Pasul 5: Componenta GraficBare

Vom crea un grafic cu bare pentru vizualizarea datelor folosind biblioteca **react-chartjs-2**. Această componentă va primi datele, le va transforma în formatul pe care Chart.js îl înțelege, va atribui culori și va desena graficul pe ecran.

Navigați până la folderul `GraficBare` și creați un fișier numit `index.jsx`:

```text
/apps/numele_aplicatiei_tale/ui/src/components/GraficBare/index.jsx
```
Deschideți fișierul și lipiți codul de mai jos:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Componenta de grafic cu bare
import { Chart, registerables } from 'chart.js';  // Nucleul Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.datavisualization.chart';

// OBLIGATORIU: înregistrați toate elementele Chart.js înainte de utilizare.
// Fără această linie graficul nu se randează și aruncă o eroare în consolă.
Chart.register(...registerables);

function GraficBare({ data }) {
  const intl = useIntl();
  const [chartData, setChartData] = useState(null); // Date în formatul Chart.js

  useEffect(() => {
    // Paletă de 7 culori pentru bare (ciclică dacă sunt mai mult de 7 elemente)
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const labels = [];
    const values = [];

    // Structura de date cerută de Chart.js
    const chartDataNew = {
      labels: [],       // Nume pe axa X (orizontală)
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.label` }), // Legendă tradusă
          data: [],           // Valori pe axa Y (înălțimea barelor)
          backgroundColor: [] // Culoarea fiecărei bare
        }
      ]
    };

    // Iterați peste datele primite și construiți listele
    for (const i in data) {
      labels.push(data[i].nume);   // Numele lucrătorului → axa X
      values.push(data[i].total);  // Total ore → înălțimea barei

      // (i + 1) % 7: când "i" ajunge la 7, revine la 0, repetând culorile în ciclu
      chartDataNew.datasets[0].backgroundColor.push(colors[(i + 1) % 7]);
    }

    chartDataNew.labels = labels;
    chartDataNew.datasets[0].data = values;

    setChartData(chartDataNew); // Salvează în stare pentru a declanșa re-randarea

  }, [data]); // Execută din nou de fiecare dată când "data" se schimbă

  // Cât timp datele nu au fost procesate, nu randează nimic
  if (chartData == null) {
    return null;
  }

  return (
    <Bar data={chartData} />
  );
}

export default GraficBare;
```
**Înțelegerea codului:**

Această componentă are trei responsabilități principale:

**Pregătirea `useState`:** Inițializează componenta cu starea `null` pentru a aștepta procesarea datelor venite de la server.

**Procesarea Datelor `useEffect`:** Când datele ajung prin prop `data`, Hook-ul **useEffect** este declanșat automat. Acesta definește o paletă de culori și folosește o buclă **for** pentru a separa informațiile: numele lucrătorilor merg în etichetele axei X **labels**, totalurile de ore definesc înălțimea barelor `data`, iar o culoare este atribuită fiecărei bare în mod ciclic.

**Desenarea pe Ecran `return`:** Folosește componenta `<Bar>` din bibliotecă pentru a desena graficul pe baza datelor procesate și salvate în stare.

**Fișierul index.less:** Creați și fișierul `index.less` în folderul `GraficBare`. Poate rămâne gol deocamdată.


## Pasul 6: Aspectul Vizual VizualizareDate

Acum că componentele Tabel și Grafic sunt gata, avem nevoie de un container care să le poziționeze unul lângă altul pe ecran.

Navigați până la folderul **VizualizareDate** și creați un fișier numit `index.jsx`:

```text
/apps/numele_aplicatiei_tale/ui/src/containers/VizualizareDate/index.jsx
```

Deschideți fișierul și lipiți codul de mai jos:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Titluri traductibile pe limbă

import GraficBare from "../../components/GraficBare";
import ListaTabel from "../../components/ListaTabel";

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function VizualizareDate({ data = [] }) {
  return (
    <div>
      <div className="row">              {/* Linie Bootstrap */}

        {/* Coloana din stânga: Tabel */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading vizualizare-date__panou">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.table.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <ListaTabel data={data} />   {/* Transmite datele către Tabel */}
            </div>
          </div>
        </div>

        {/* Coloana din dreapta: Grafic */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading vizualizare-date__panou">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.chart.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <GraficBare data={data} />    {/* Transmite aceleași date către Grafic */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VizualizareDate;
```
**Înțelegerea codului:**

Această componentă acționează ca un organizator vizual. Primește lista `data` și o distribuie către cele două componente copil fără nicio transformare.

Clasele `row` și `col-lg-6` sunt din "Bootstrap Grid" și împart ecranul în jumătate: coloana din stânga primește Tabelul, iar cea din dreapta primește Graficul. Pe ecrane mai mici (telefoane), acestea se stivuiesc automat.

Clasele `panel`, `panel-heading` și `panel-body` creează aspectul unei "căsuțe cu titlu" pentru fiecare componentă.

**Fișierul index.less:** Creați și fișierul `index.less` în acest folder pentru stilizarea viitoare a panourilor.

## Pasul 7: Container Dashboard

Avem deja serviciile în backend și componentele vizuale în frontend. Vom avea nevoie de un container pentru a merge la server, a prelua datele și a le transmite către **VizualizareDate**.

Netuno generează deja automat structura de bază a Dashboard-ului. Editați fișierul existent:

```text
/apps/numele_aplicatiei_tale/ui/src/containers/ContainerDashboard/index.jsx
```

Înlocuiți conținutul fișierului cu codul de mai jos:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Client HTTP oficial Netuno

import { Spin, message } from 'antd';           // Indicator de încărcare și erori

import VizualizareDate from "../VizualizareDate"; // Aspectul vizual

import { useIntl } from 'react-intl';           // Suport pentru multiple limbi

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function ContainerDashboard({}, ref) {
  const intl = useIntl();
  const [lucratori, setLucratori] = useState([]);   // Stare: listă de lucrători
  const [loading, setLoading] = useState(false); // Stare: se încarcă?

  // La deschiderea paginii, declanșează automat căutarea
  useEffect(() => {
    loadLucratori();
  }, []);

  const loadLucratori = () => {
    setLucratori([]);      // Curăță datele anterioare
    setLoading(true);    // Activează indicatorul de încărcare

    _service({
      // Detectează limba panoului și apelează URL-ul corect al serviciului
      url: intl.locale.indexOf('ro') == 0 ? '/services/lucratori' : '/services/workers',
      success: (response) => {
        setLucratori(response.json); // Salvează datele primite în stare
        setLoading(false);
      },
      fail: (e) => {
        setLoading(false);
        console.error('Serviciul lucrătorilor a eșuat.', e);
        message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
      }
    });
  };

  // Permite componentei părinte (Dashboard) să declanșeze loadLucratori() prin ref
  useImperativeHandle(ref, () => ({
    loadLucratori
  }));

  return (
    <div ref={ref}>
      { loading == false
        ? <VizualizareDate data={lucratori} /> // Date pregătite: afișează panoul
        : <Spin/>                              // Încă se încarcă: afișează rotița
      }
    </div>
  );
}

export default React.forwardRef(ContainerDashboard);
```

**Înțelegerea codului:**

Această componentă are trei responsabilități principale:

**Stare inițială `useState`:** Creează două controale interne — **lucratori** (lista venită de la server) și **loading** (un indicator care arată dacă datele sunt încă preluate).

**Preluare date `_service`:** Funcția **loadLucratori** folosește **_service** pentru a apela serviciul backend. Spre deosebire de **fetch**-ul nativ din JavaScript, **_service** gestionează autentificarea, sesiunea și tratarea erorilor automat. De asemenea, detectează limba panoului și alege URL-ul corect `/lucratori` pentru RO, `/workers` pentru EN.

**Distribuire și Desenare `return`:** Cât timp datele sunt preluate, afișează rotița de încărcare **(Spin)**. Când datele ajung, transmite lista **lucratori** către **VizualizareDate**, care distribuie către Tabel și Grafic.

### Stilizarea Dashboard-ului

Deschideți fișierul `index.less` din folderul `ContainerDashboard` și lipiți codul de mai jos pentru a evidenția anteturile panourilor:

```text
/apps/numele_aplicatiei_tale/ui/src/containers/ContainerDashboard/index.less
```

```css
.fundalPanou {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Înțelegerea codului:**

Această clasă definește o culoare de fundal albastră **(#3f54ba)** și o zonă de umplere **(padding)** în anteturi.

Este utilizată de clasele `vizualizare-date__panou` din `VizualizareDate` pentru a garanta că titlurile **Tabel** și **Grafic** sunt evidențiate vizual.


## Pasul 8: Compilarea Proiectului

Pentru a garanta că tot codul React este compilat de Netuno:

* **Dacă terminalul dvs. a rămas deschis** cu `npm run watch` rulând în fundal: modificările dvs. sunt compilate automat de fiecare dată când un fișier este salvat.
* **Dacă ați închis terminalul** sau procesul s-a oprit: nicio problemă. Deschideți terminalul din nou, navigați până la folderul `ui` și executați comanda din nou:

```bash
npm run watch
```

## Concluzie

Pe parcursul acestui tutorial, ați dobândit competențe esențiale pentru a lucra cu platforma Netuno, stăpânind ciclul
de integrare a fluxului de date între server și interfața utilizatorului.

Această dezvoltare a abordat următoarele subiecte:

- **Baza de Date:** Crearea și organizarea tabelelor și structurilor de date într-un mod vizual și eficient.

- **Backend REST:** Dezvoltarea de servicii și logică de business pentru a furniza date prin API.

- **Frontend cu React:** Integrarea și afișarea dinamică a acestor date într-o interfață modernă și responsivă.

Dacă aveți dificultăți sau sugestii de îmbunătățire, contactați-ne.

Echipa și comunitatea noastră sunt pregătite să ajute.

Dezvoltare plăcută!