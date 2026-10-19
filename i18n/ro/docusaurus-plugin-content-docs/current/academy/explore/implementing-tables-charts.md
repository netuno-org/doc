---
id: implementing-tables-charts
title: Implementarea tabelelor și graficelor
sidebar_label: Tabele și grafice
---

În acest tutorial, vom crea interfața și logica unei aplicații simple, cu accent pe vizualizarea datelor. Dezvoltarea proiectului va aborda următoarele subiecte:

- Crearea de **„Formulare”**, **„Câmpuri”** și **„Relații”** pentru structurarea bazei de date.
- Construirea de **„Servicii Web REST”** pentru furnizarea datelor și afișarea dinamică a informațiilor în tabele și grafice în aplicație, folosind bibliotecile _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ și dependența _Chart.js_, precum și componenta de tabel din <a href="https://ant.design/" target="_blank">Ant Design</a>.

Întreaga structură vizuală a proiectului va fi dezvoltată folosind **HTML, JavaScript și React.js**.
Este recomandat să aveți cunoștințe de bază despre:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Dacă aveți întrebări la aceste etape, consultați:**
   - [Ghidul interfeței: Formulare](/docs/academy/ui/forms)
   - [Ghidul interfeței: Câmpuri](/docs/academy/ui/fields)
   - [Ghidul interfeței: Relații între formulare](/docs/academy/ui/relationships-between-forms)
   - [Ghidul interfeței: Servicii Web REST](/docs/academy/explore/services)


## Produs final

Dacă urmați toți pașii acestui tutorial, veți construi un panou funcțional în spațiul de lucru Netuno, care conține:

* Un **tabel de date** care listează înregistrările lucrătorilor și totalurile de ore.
* Un **grafic cu bare** dinamic și colorat care afișează vizual aceleași date.

![produs-final.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Arhitectura soluției

Înainte de a scrie orice cod, este important să înțelegeți cum se îmbină piesele. Soluția este împărțită în **4 straturi** care comunică de sus în jos:

```
ContainerPanou         (preia datele de la server)
       │
       ▼
VizualizareDate          (organizează aspectul în două coloane)
       │
  ┌────┴────┐
  ▼         ▼
ListaTabel  GraficBare        (randează datele primite)
```

:::tip
Avantajul acestei arhitecturi este că fiecare componentă are **o singură responsabilitate**.
:::

## Pasul 1: Structura datelor

Primul pas este să creați formularele, să configurați relația dintre ele și să le completați cu date pentru a genera tabelul și graficul mai târziu.

Aceasta este diagrama cu arhitectura formularelor și câmpurile pe care trebuie să le replicați în mediul dvs. Netuno:

![primul-pas.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Important:** Deși câmpul `id` apare în diagramă, **nu este necesar să îl creați manual**. Netuno generează automat acest identificator imediat după crearea tabelului.

### Șablonul Dashboard

Pentru a afișa tabelul și graficul, vom avea nevoie de un loc în interfața aplicației dvs. Netuno oferă deja un șablon de bază pentru panoul principal.

Deschideți editorul de cod și găsiți fișierul:

```text
/apps/aplicatia_mea/server/templates/dashboard.html
```
*(Nu uitați să înlocuiți **aplicatia_mea** cu numele real al folderului aplicației dvs.).*

Veți observa următoarea linie de cod HTML:

```html
<div id="app-dashboard"></div>
```

## Pasul 2: Serviciu de date

Acum că avem baza de date pregătită și HTML-ul pregătit, trebuie să creăm „mesagerul” (un serviciu web REST). El va fi responsabil să meargă la baza de date, să calculeze totalul orelor fiecărui lucrător și să livreze această informație gata pentru tabel și grafic.


### Crearea fișierului serviciului

Serviciile din Netuno sunt păstrate în folderul `server/services/`. Navigați până la directorul proiectului dvs. și creați fișierul `lucratori.js`:

```text
/apps/aplicatia_mea/server/services/lucratori.js
```
Componenta **ContainerPanou** detectează limba panoului și apelează **/services/lucratori** când panoul este în română, sau **/services/workers** când este în engleză. Fiecare limbă are propriul fișier de serviciu.

### Scrierea codului

Acest cod realizează trei acțiuni principale folosind resursele native Netuno (**_db**, **_val** și **_out**):

- **Interogarea _db.query:** Caută doar lucrătorii **activi** în baza de date și calculează suma orelor lucrate de fiecare.

- **Procesarea _val.list și _val.map:** Organizează rezultatul într-o listă curată cu obiecte structurate.

- **Răspunsul _out.json:** Trimite datele în format JSON pentru ca interfața (React) să le poată citi.

Deschideți fișierul `lucratori.js` și lipiți codul de mai jos:

```javascript
// 1. Interogare, _db.query() execută SQL-ul și returnează lista înregistrărilor găsite.
const inregistrariDb = _db.query(`
    SELECT DISTINCT
        lucrator.nume, SUM(DATEDIFF(HOUR, inregistrare.inceput, inregistrare.sfarsit)) AS total
    FROM lucrator INNER JOIN inregistrare
        ON lucrator.id = inregistrare.lucrator_id
    WHERE lucrator.active = true AND inregistrare.active = true
    GROUP BY lucrator.nume
    ORDER BY total ASC
`);

// 2. Procesarea datelor, _val.list() creează o listă goală pentru a păstra datele procesate.
const lista = _val.list();

// Parcurge fiecare rând returnat de baza de date
for (const inregistrareDb of inregistrariDb) {
    lista.add(
        // _val.map() creează un obiect cu câmpurile pe care React le va consuma
        _val.map()
            .set("nume", inregistrareDb.getString("nume"))  // nume → câmpul "nume"
            .set("total", inregistrareDb.getInt("total"))   // total ore → câmpul "total"
    );
}

// 3. Răspuns
// Trimite lista finală în format JSON către interfața React.
_out.json(lista);
```
:::tip
- **Atenție la numele câmpurilor:** Câmpurile definite aici ca **„nume”** și **„total”** sunt exact aceleași pe care componentele React le vor căuta în pașii următori (`dataIndex: 'nume'` și `dataIndex: 'total'`). Ele trebuie să fie identice.

- **Despre filtrul `active = true`:** Baza de date are o coloană **active** în tabelele **lucrator** și **inregistrare**. Filtrând doar înregistrările active, ne asigurăm că datele arhivate sau dezactivate nu apar în tabel și în grafic.
:::

## Pasul 3: Mediul frontend (React)

Acum că backend-ul (baza de date și serviciile) este pregătit, să pregătim interfața vizuală.

Deschideți terminalul și urmați pașii de mai jos:

#### 1. Instalați dependențele de bază
Navigați până la folderul `ui` al aplicației dvs. și instalați pachetele.

```bash
npm install
```

#### 2. Instalați bibliotecile pentru grafice

Deoarece proiectul va afișa grafice, descărcați bibliotecile care vor realiza acest desen pe ecran:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Gestionați mai multe limbi

Instalați biblioteca pentru gestionarea mai multor limbi:

```bash
npm install react-intl
```

#### 4. Porniți compilatorul (Watch)

Cu totul instalat, de fiecare dată când salvăm un fișier, acesta va actualiza automat ecranul:

```bash
npm run watch
```

#### 5. Creați componente
Pentru a menține proiectul organizat, creați componente separate pentru Tabel și pentru Grafic.

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

Componenta **ListaTabel** va primi datele de la serviciu și va construi automat coloanele folosind **Ant Design** — o bibliotecă de componente vizuale gata făcute care însoțește deja interfața Netuno.

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

const mesaje = 'containerpanou.vizualizaredate.tabel';

function ListaTabel({ date = [] }) {
  // Definirea antetelor și a câmpului din obiect de afișat în fiecare coloană
  const coloane = [
    {
      title: <FormattedMessage id={`${mesaje}.lucratori`} />, // Titlu tradus
      dataIndex: 'nume',  // Câmpul "nume" din JSON-ul returnat de serviciu
    },
    {
      title: <FormattedMessage id={`${mesaje}.total`} />,
      dataIndex: 'total', // Câmpul "total" din JSON-ul returnat de serviciu
    }
  ];

  return (
    <Table
      columns={coloane}      // Structura coloanelor
      dataSource={date}      // Datele în sine (lista de obiecte)
      pagination={false}     // Fără paginare: toate înregistrările deodată
      bordered={true}        // Cu borduri vizibile în celule
    />
  );
}

export default ListaTabel;
```

 **Înțelegerea codului:**

Această componentă funcțională primește lista `date` ca parametru (prop) și o transmite direct componentei `<Table>` din Ant Design.

Configurația **coloane** informează „Ant Design” ce titlu să afișeze în antet **title** și ce câmp din obiectul JSON să completeze în celula `dataIndex`. Ant Design se ocupă automat de tot HTML-ul, stilurile de bordură și aspectul — nu este necesar să creați manual CSS pentru asta.

**Fișierul index.less:** Creați fișierul `index.less` în același folder. Poate rămâne gol deocamdată, deoarece Ant Design oferă deja stilizarea de bază a tabelului.


## Pasul 5: Componenta GraficBare

Vom crea un grafic cu bare pentru vizualizarea datelor folosind biblioteca **react-chartjs-2**. Această componentă va primi datele, le va transforma în formatul pe care îl înțelege Chart.js, va atribui culori și va desena graficul pe ecran.

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

const mesaje = 'containerpanou.vizualizaredate.grafic';

// OBLIGATORIU: înregistrați toate elementele Chart.js înainte de utilizare.
// Fără această linie graficul nu se randează și aruncă o eroare în consolă.
Chart.register(...registerables);

function GraficBare({ date }) {
  const intl = useIntl();
  const [dateGrafic, setDateGrafic] = useState(null); // Date în formatul Chart.js

  useEffect(() => {
    // Paletă de 7 culori pentru bare (ciclică dacă există mai mult de 7 elemente)
    const culori = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const etichete = [];
    const valori = [];

    // Structura de date cerută de Chart.js
    const dateGraficNou = {
      labels: [],       // Nume pe axa X (orizontală)
      datasets: [
        {
          label: intl.formatMessage({ id: `${mesaje}.eticheta` }), // Legendă tradusă
          data: [],           // Valori pe axa Y (înălțimea barelor)
          backgroundColor: [] // Culoarea fiecărei bare
        }
      ]
    };

    // Parcurge datele primite și construiește listele
    for (const i in date) {
      etichete.push(date[i].nume);   // Numele lucrătorului → axa X
      valori.push(date[i].total);  // Totalul orelor → înălțimea barei

      // (i + 1) % 7: când "i" ajunge la 7, revine la 0, repetând culorile ciclic
      dateGraficNou.datasets[0].backgroundColor.push(culori[(i + 1) % 7]);
    }

    dateGraficNou.labels = etichete;
    dateGraficNou.datasets[0].data = valori;

    setDateGrafic(dateGraficNou); // Salvează în stare pentru a declanșa re-randarea

  }, [date]); // Se execută din nou ori de câte ori "date" se schimbă

  // Cât timp datele nu au fost procesate, nu randează nimic
  if (dateGrafic == null) {
    return null;
  }

  return (
    <Bar data={dateGrafic} />
  );
}

export default GraficBare;
```
**Înțelegerea codului:**

Această componentă are trei responsabilități principale:

**Pregătirea `useState`:** Inițializează componenta cu starea `null` pentru a aștepta procesarea datelor venite de la server.

**Procesarea datelor `useEffect`:** Când datele sosesc prin prop-ul `date`, Hook-ul **useEffect** este declanșat automat. El definește o paletă de culori și folosește o buclă **for** pentru a separa informațiile: numele lucrătorilor merg în etichetele axei X **labels**, totalurile de ore definesc înălțimea barelor `data`, iar fiecărei bare i se atribuie o culoare în mod ciclic.

**Desenarea pe ecran `return`:** Folosește componenta `<Bar>` din bibliotecă pentru a desena graficul pe baza datelor procesate și salvate în stare.

**Fișierul index.less:** Creați și fișierul `index.less` în folderul `GraficBare`. Poate rămâne gol deocamdată.


## Pasul 6: Aspectul vizual VizualizareDate

Acum că componentele Tabel și Grafic sunt gata, avem nevoie de un container care să le poziționeze unul lângă altul pe ecran.

Navigați până la folderul **VizualizareDate** și creați un fișier numit `index.jsx`:

```text
/apps/numele_aplicatiei_tale/ui/src/containers/VizualizareDate/index.jsx
```

Deschideți fișierul și lipiți codul de mai jos:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Titluri traductibile în funcție de limbă

import GraficBare from "../../components/GraficBare";
import ListaTabel from "../../components/ListaTabel";

import './index.less';

const mesaje = 'containerpanou.vizualizaredate';

function VizualizareDate({ date = [] }) {
  return (
    <div>
      <div className="row">              {/* Rândul Bootstrap */}

        {/* Coloana din stânga: Tabel */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading vizualizare-date__panou">
              <h3 className="panel-title">
                <FormattedMessage id={`${mesaje}.tabel.titlu`} />
              </h3>
            </div>
            <div className="panel-body">
              <ListaTabel date={date} />   {/* Transmite datele către Tabel */}
            </div>
          </div>
        </div>

        {/* Coloana din dreapta: Grafic */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading vizualizare-date__panou">
              <h3 className="panel-title">
                <FormattedMessage id={`${mesaje}.grafic.titlu`} />
              </h3>
            </div>
            <div className="panel-body">
              <GraficBare date={date} />    {/* Transmite aceleași date către Grafic */}
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

Această componentă acționează ca un organizator vizual. Primește lista `date` și o distribuie celor două componente copil fără nicio transformare.

Clasele `row` și `col-lg-6` sunt din „Bootstrap Grid” și împart ecranul în două: coloana din stânga primește Tabelul, iar cea din dreapta primește Graficul. Pe ecrane mai mici (telefoane), ele se aranjează automat pe verticală.

Clasele `panel`, `panel-heading` și `panel-body` creează aspectul unei „căsuțe cu titlu” pentru fiecare componentă.

**Fișierul index.less:** Creați și fișierul `index.less` în acest folder pentru stilizarea viitoare a panourilor.

## Pasul 7: Containerul panoului

Avem deja serviciile în backend și componentele vizuale în frontend. Vom avea nevoie de un container care să meargă la server, să preia datele și să le transmită către **VizualizareDate**.

Netuno generează deja automat structura de bază a panoului. Editați fișierul existent:

```text
/apps/numele_aplicatiei_tale/ui/src/containers/ContainerPanou/index.jsx
```

Înlocuiți conținutul fișierului cu codul de mai jos:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Clientul HTTP oficial al Netuno

import { Spin, message } from 'antd';           // Indicator de încărcare și erori

import VizualizareDate from "../VizualizareDate"; // Aspectul vizual

import { useIntl } from 'react-intl';           // Suport pentru mai multe limbi

import './index.less';

const mesaje = 'containerpanou.vizualizaredate';

function ContainerPanou({}, ref) {
  const intl = useIntl();
  const [lucratori, setLucratori] = useState([]);   // Stare: lista de lucrători
  const [seIncarca, setSeIncarca] = useState(false); // Stare: se încarcă?

  // La deschiderea paginii, declanșează automat căutarea
  useEffect(() => {
    incarcaLucratori();
  }, []);

  const incarcaLucratori = () => {
    setLucratori([]);      // Curăță datele anterioare
    setSeIncarca(true);    // Activează indicatorul de încărcare

    _service({
      // Detectează limba panoului și apelează URL-ul corect al serviciului
      url: intl.locale.indexOf('ro') == 0 ? '/services/lucratori' : '/services/workers',
      success: (raspuns) => {
        setLucratori(raspuns.json); // Salvează datele primite în stare
        setSeIncarca(false);
      },
      fail: (e) => {
        setSeIncarca(false);
        console.error('Serviciul pentru lucrători a eșuat.', e);
        message.error(intl.formatMessage({ id: `${mesaje}.eroare_incarcare` }));
      }
    });
  };

  // Permite componentei părinte (panoul) să declanșeze incarcaLucratori() prin ref
  useImperativeHandle(ref, () => ({
    incarcaLucratori
  }));

  return (
    <div ref={ref}>
      { seIncarca == false
        ? <VizualizareDate date={lucratori} /> // Date gata: afișează panoul
        : <Spin/>                              // Încă se încarcă: afișează roata
      }
    </div>
  );
}

export default React.forwardRef(ContainerPanou);
```

**Înțelegerea codului:**

Această componentă are trei responsabilități principale:

**Starea inițială `useState`:** Creează două controale interne — **lucratori** (lista venită de la server) și **seIncarca** (un indicator care arată dacă datele sunt încă preluate).

**Preluarea datelor `_service`:** Funcția **incarcaLucratori** folosește **_service** pentru a apela serviciul backend. Spre deosebire de **fetch**-ul nativ din JavaScript, **_service** gestionează automat autentificarea, sesiunea și tratarea erorilor. De asemenea, detectează limba panoului și alege URL-ul corect `/lucratori` pentru RO, `/workers` pentru EN.

**Distribuirea și desenarea `return`:** Cât timp datele sunt preluate, afișează roata de încărcare **(Spin)**. Când datele sosesc, transmite lista **lucratori** către **VizualizareDate**, care o distribuie către Tabel și Grafic.

### Stilizarea panoului

Deschideți fișierul `index.less` din folderul `ContainerPanou` și lipiți codul de mai jos pentru a evidenția antetele panourilor:

```text
/apps/numele_aplicatiei_tale/ui/src/containers/ContainerPanou/index.less
```

```css
.fundalPanou {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Înțelegerea codului:**

Această clasă definește o culoare de fundal albastră **(#3f54ba)** și o zonă de umplutură **(padding)** în antete.

Ea este utilizată de clasele `vizualizare-date__panou` din `VizualizareDate` pentru a garanta că titlurile **Tabel** și **Grafic** rămân vizual evidențiate.


## Pasul 8: Compilarea proiectului

Pentru a vă asigura că tot codul React este compilat de Netuno:

* **Dacă terminalul dvs. a rămas deschis** cu `npm run watch` rulând în fundal: modificările sunt compilate automat de fiecare dată când un fișier este salvat.
* **Dacă ați închis terminalul** sau procesul s-a oprit: nicio problemă. Deschideți din nou terminalul, navigați până la folderul `ui` și rulați din nou comanda:

```bash
npm run watch
```

## Concluzie

Pe parcursul acestui tutorial, ați dobândit competențe esențiale pentru a lucra cu platforma Netuno, stăpânind ciclul de integrare a fluxului de date dintre server și interfața utilizatorului.

Această dezvoltare a abordat următoarele subiecte:

- **Baza de date:** Crearea și organizarea tabelelor și structurilor de date într-un mod vizual și eficient.

- **Backend REST:** Dezvoltarea serviciilor și a logicii de business pentru a pune datele la dispoziție prin API.

- **Frontend cu React:** Integrarea și afișarea dinamică a acestor date într-o interfață modernă și responsivă.

Dacă întâmpinați dificultăți sau aveți sugestii de îmbunătățire, contactați-ne.

Echipa și comunitatea noastră sunt pregătite să ajute.

Dezvoltare plăcută!