---
sidebar_position: 7
id: ui
title: Interfață & Design
---

## Introducere

Dezvoltarea frontend-ului, adică ceea ce este procesat vizual de browser, este realizată în folderul **ui**.

În mod implicit, în acest folder se află mediul de dezvoltare creat în <a href="https://reactjs.org/" target="_blank">ReactJS</a> cu <a href="https://ant.design/" target="_blank">Ant.Design</a> și <a href="http://lesscss.org/" target="_blank">Less</a>, compilat folosind <a href="https://vite.dev/" target="_blank">Vite</a>.

Deși mediul implicit este configurat pentru aceste tehnologii, întrucât sunt foarte utilizate în prezent, nu este limitat la ele.

Dacă doriți să utilizați altă tehnologie precum **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript** etc., este suficient să modificați în folderul `📂 ui` configurațiile din `📂 package.json` și `📂 vite.config.js` pentru tehnologiile pe care le preferați.

> Mai multe despre [terminalul integrat și centralizat](/docs/academy/explore/centralized-terminal).

## Cerințe preliminare

Înainte de a începe, este important să vă asigurați că aveți [Bun](https://bun.sh/) instalat.

> Vedeți cum să [instalați Bun](/docs/academy/website/bun).

Pentru a înțelege mai bine cum funcționează interfața de utilizare, recomandăm:

- [Mai multe despre stratul UI de front-end.](/docs/academy/ui/ui-layer)

## Extinderea serviciului

După ce a fost creat serviciul **lucratori** în `📂 server/services/lucratori.js` prin Visual Studio Code, care pune la dispoziție informația în <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> la adresa:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/lucratori</a>

Următorul pas este să îl extindeți pentru a prezenta datele în interfața browserului.

Cu aceste date le vom prezenta într-un tabel și într-un grafic.

Presupunând că aveți Visual Studio Code sau alt editor de text deschis cu aplicația **Demo**.

Deschideți următorul fișier în editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Vom modifica acest cod deja existent.

### Pregătiți `state`

Chiar la începutul componentei `DashboardContainer`, în interiorul `function`, se află definiția _state_-ului său.

Adăugați o nouă intrare pentru a stoca datele lucrătorilor după cum urmează:

```jsx
            // 👇 Adăugați noile linii de cod mai jos:
            const [lucratori, setLucratori] = useState([]);
            const [incarcare, setIncarcare] = useState(false);
```

Adică, adăugați noua linie `const [lucratori, setLucratori] = useState([]);` de stare.

### Creați funcția `incarcaLucratori`

Mai jos observați că există o funcție numită `incarcaLucratori`; această funcție obține datele lucrătorilor care apar în prezent în dashboard.

> Această funcție este folosită pentru a încărca datele lucrătorilor.

Introduceți codul de mai jos:

```jsx
    /**
    *** 🚀 Încarcă datele lucrătorilor.
    ***    Prin executarea serviciului:
    **     http://localhost:9000/services/lucratori
    */
    const incarcaLucratori = () => {
        setLucratori([]);
        setIncarcare(true);
        _service({
            url: intl.locale.indexOf('ro') == 0 ? '/services/lucratori' : '/services/workers',
            success: (response) => {
                setLucratori(response.json);
                setIncarcare(false);
            },
            fail: (e) => {
                setIncarcare(false);
                console.error('Eroare în serviciul Lucrători.', e);
                message.error(intl.formatMessage({ id: `${messages}.eroare_incarcare` }));
            }
        });
    };
```

Ceea ce face codul de mai sus este să transmită datele **lucrătorilor** către _state_-ul componentei în <a href="https://reactjs.org/" target="_blank">ReactJS</a>, prin executarea serviciului **lucratori** care, la primirea datelor în <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, le stochează în _state_ prin executarea `setLucratori`.

Codul final ar trebui să fie structurat astfel:

```jsx
    useEffect(() => {
        ...
    }, []);

    const incarcaLucratori = () => {
        ...
    }

    return ( 
        ...
    );
```

> Unde `...` sunt diferitele linii de cod omise din blocurile respective.

### Executați hook-ul `useEffect`

Acum mai rămâne să executăm hook-ul nostru `useEffect` când componenta este „montată”; acest hook este executat când componenta este construită în prezentarea vizuală a browserului.

Pentru aceasta, este suficient să adăugați, puțin mai sus, linia de cod `incarcaLucratori();` în interiorul hook-ului `useEffect` astfel:

```jsx
    useEffect(() => {
        incarcaLucratori();
    }, []);
```

Această nouă linie de cod va apela funcția care execută serviciul <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/lucratori</a>, creat anterior, pentru a obține datele în JSON și a le păstra în `state` (_stare_) al componentei pentru a fi prezentate în return (_vizualizare_).

### Compilare

**Salvați** fișierul și imediat după aceea observați că în **terminalul** în care rulează Netuno va apărea rezultatul noii compilări a **ui**, cu linii noi din rezultatul compilării <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

Rezultatul așteptat în **terminal** ar trebui să fie similar cu următorul:

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

Dacă există vreo eroare la compilare, atunci va apărea în **terminal** indicarea problemei.

Până aici am realizat consumul serviciului nostru **lucratori**, în care datele obținute rămân stocate în `state`-ul componentei `DashboardContainer`, care astfel devine disponibil pentru a fi utilizat în `return`.

## Afișarea datelor

Mai rămâne să prezentăm datele vizual în interfața pe care utilizatorul o vede în browser.

Pentru a prezenta datele în browser trebuie să modificăm `return`-ul, care procesează aspectul vizual al componentelor în <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

La sfârșitul codului din `DashboardContainer` veți găsi: `return ( ... );`

Să îl modificăm adăugând doar încă o linie de cod pentru a conține încă o componentă `DataVisualization` care va prezenta datele referitoare la **lucratori**; codul ar trebui să devină astfel:

```jsx
    // 🔍 Căutați în codul existent după:
    return (
    <div ref={ref}>
      { incarcare == false ?
        <DataVisualization data={lucratori} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Observați că doar linia de mai jos trebuie adăugată:

```jsx
<DataVisualization data={lucratori} />
```

Astfel, `DataVisualization` va primi datele obținute prin serviciul **lucratori** prin JSON, care au rămas stocate în `state`.

### Compilare finală

**Salvați** fișierul cu toate modificările realizate până aici.

Asigurați-vă că în output-ul **terminalului** nu există erori.

Acum actualizați pagina în browser și ar trebui să vedeți rezultatul final sau, alternativ, faceți clic pe linkul de mai jos:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Dacă dashboardul apare gol, înseamnă că există erori în cod.
>
> Verificați în consola **browserului** din **instrumentele pentru dezvoltatori** dacă există erori.

## Aflați mai multe 👇

Introducere rapidă în <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Un ghid pentru începători în ReactJS.</a>