---
id: services
title: Servicii
sidebar_label: Servicii
---

Serviciile Web REST din Netuno sunt scripturi JavaScript executate pe server (Back-end) care permit interacțiunea directă cu baza de date a aplicației. Prin intermediul lor, este posibil să:

* Citiți date din baza de date
* Inserați înregistrări noi
* Actualizați date existente
* Eliminați date
* Executați logică complexă care implică calcule sau procesarea datelor.
* Integrați cu sisteme externe.

Fiecare serviciu este accesat printr-un URL (endpoint), ceea ce permite interfețelor web (Front-end), aplicațiilor mobile sau altor sisteme externe să consume datele aplicației într-un mod sigur și standardizat.

#### Precondiții

* Noțiuni de bază de _**JavaScript, React.js**_ și _**HTML**_.
* Familiaritate cu SQL și cu structura de foldere a unei aplicații.
* Este recomandabil să aveți cunoștințe de bază despre **Formulare**, **Câmpuri** și **Relații**.

Dacă aveți întrebări despre acești pași, consultați:

* [Formulare](/docs/academy/ui/forms)
* [Câmpuri](/docs/academy/ui/fields)
* [Relații între formulare](/docs/academy/ui/relationships-between-forms)



## Primii pași

Vom folosi o aplicație de înregistrare a orelor de lucru, al cărei scop este calcularea totalului orelor efectuate de fiecare lucrător.

**Structura aplicației:**

![structura-aplicatiei.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
Câmpul **id** este creat și gestionat automat de Netuno în toate tabelele, nefiind necesar să îl definiți manual.
:::

Serviciile unei aplicații Netuno se află în folderul **server/services/**.

#### Structura folderelor

```text
aplicatia-mea/
└── server/
    └── services/
        ├── lucratori.js   ← fișier de serviciu
        └──... 
```

## Crearea serviciului

În folderul **server/services/**, creați un fișier nou care va defini URL-ul serviciului dumneavoastră. Pentru acest exemplu, numiți fișierul `lucratori.js`.

:::tip
- Folosiți doar litere **mici**.
- Dacă numele este compus, separați cuvintele cu **cratimă (-)**.
- Exemple: **lucratori.js**, **raport-ore.js**, **inregistrare-intrari.js**.
:::


## Interogarea bazei de date

Netuno pune la dispoziție obiectul global **_db** pentru a interacționa nativ cu baza de date.

Pentru a executa o interogare SQL, folosim metoda `_db.query()`.


```javascript
// Execută o interogare SQL care grupează totalul orelor pe lucrător
const dbInregistrari = _db.query(`
    SELECT DISTINCT
        lucrator.nume, SUM(DATEDIFF(HOUR, inregistrare.inceput, inregistrare.sfarsit)) AS total
    FROM lucrator INNER JOIN inregistrare
        ON lucrator.id = inregistrare.lucrator_id
    WHERE lucrator.active = true AND inregistrare.active = true
    GROUP BY lucrator.nume
    ORDER BY total ASC
`);
```

:::note Înțelegerea interogării SQL

* **INNER JOIN**: Unește tabelele lucrator și inregistrare folosind cheia străină lucrator_id.

* **DATEDIFF(HOUR, inceput, sfarsit)**: Calculează diferența în ore între intrare și ieșire.

* **SUM(...) AS total**: Însumează toate orele procesate pentru fiecare lucrător.

* **WHERE ... active = true**: Filtrează căutarea pentru a lua în considerare doar lucrătorii și înregistrările care nu au fost șterse (active).

* **GROUP BY lucrator.nume**: Grupează sumele după numele fiecărui lucrător.

* **ORDER BY total ASC**: Ordonează rezultatul final de la cel mai mic la cel mai mare număr de ore lucrate.
:::

## Procesarea datelor

Metoda `_db.query()` returnează datele într-un format intern Netuno.

Pentru a trimite un răspuns curat în format JSON, este necesar să transformați aceste date folosind obiectele globale **_val.list()** (pentru array-uri) și **_val.map()** (pentru obiecte).

```javascript
// Creează o listă goală pentru stocarea datelor procesate
const lista = _val.list();

// Iterează prin fiecare înregistrare returnată de interogarea SQL
for (const dbInregistrare of dbInregistrari) {
    lista.add(
        _val.map()
            .set("nume", dbInregistrare.getString("nume"))   // Extrage numele ca text
            .set("total", dbInregistrare.getInt("total"))    // Extrage totalul ca număr întreg
    );
}
```
### Metode utilizate

| Resursă | Descriere |
|---------|-----------|
| **_val.list()** | Creează o listă (echivalentă cu un Array în JS). |
| **_val.map()** | Creează un obiect cheie-valoare (echivalent cu un Object sau JSON). |
| **.add(...)** | Adaugă un element nou la finalul listei. |
| **.set("cheie", valoare)** | Definește o proprietate nouă și valoarea ei în mapă. |
| **.getString("coloană")** | Extrage valoarea coloanei specificate formatată ca text (String). |
| **.getInt("coloană")** | Extrage valoarea coloanei specificate formatată ca număr întreg (Integer). |

## Returnarea datelor

Se folosește obiectul **_out** pentru a trimite lista procesată către client în format JSON.

```javascript
// Trimite lista ca răspuns HTTP în format JSON
_out.json(lista);
```

## Exemplu practic

În această etapă finală, consolidăm toate conceptele învățate pentru a crea un serviciu funcțional.

Codul complet de mai jos efectuează o interogare a bazei de date pentru a calcula totalul orelor lucrate și returnează aceste date formatate în JSON.

```javascript
// 1. Interoghează totalul orelor efectuate de fiecare lucrător activ
const dbInregistrari = _db.query(`
    SELECT DISTINCT
        lucrator.nume, SUM(DATEDIFF(HOUR, inregistrare.inceput, inregistrare.sfarsit)) AS total
    FROM lucrator INNER JOIN inregistrare
        ON lucrator.id = inregistrare.lucrator_id
    WHERE lucrator.active = true AND inregistrare.active = true
    GROUP BY lucrator.nume
    ORDER BY total ASC
`);

// 2. Creează structura de date pentru răspuns
const lista = _val.list();

// 3. Procesează și mapează rezultatele
for (const dbInregistrare of dbInregistrari) {
    lista.add(
        _val.map()
            .set("nume", dbInregistrare.getString("nume"))
            .set("total", dbInregistrare.getInt("total"))
    );
}

// 4. Returnează datele în format JSON
_out.json(lista);
```

### Accesarea serviciului

După ce ați creat și configurat serviciul în Netuno, acesta va fi gata de utilizare și testare direct din browser sau de integrare în alte aplicații.

#### Modalități de acces

Serviciul poate fi consumat folosind:

- **Browser:** Pentru teste rapide ale metodelor GET.

- **Clienți HTTP:** Instrumente precum Postman, Insomnia sau Thunder Client.

- **Front-end:** Prin cereri fetch sau biblioteci precum Axios.

#### Structura URL-ului

În mod implicit, Netuno mapează automat fișierele create în folderul de servicii către adrese web.

Dacă rulați local pe portul implicit, adresa va urma acest model:

http://localhost:9000/services/lucratori



:::info Cum funcționează rutarea?
Netuno utilizează un sistem de rutare automată bazat pe sistemul de fișiere:

**Folderul sursă:** Toate fișierele din server/services/ devin rute.

**Maparea:** Fișierul **lucratori.js** este convertit în endpoint-ul **/services/lucratori**.

**Extensiile:** Observați că extensia **.js** este omisă în URL. Opțional, se poate folosi sufixul **.netuno** (ex: /services/lucratori.netuno), dar accesul fără extensie este standardul recomandat, fiind mai curat.
:::

**Exemplu de răspuns HTTP:**
Dacă există date compatibile în baza de date, răspunsul returnat de server va fi similar cu acesta:

```json
[
    {
        "nume": "Elena Popescu",
        "total": 40
    },
    {
        "nume": "Andrei Ionescu",
        "total": 35
    },
    {
        "nume": "Maria Dumitrescu",
        "total": 45
    }
]
```

## Obiecte globale ale sistemului

În timpul dezvoltării serviciilor în Netuno, vom folosi frecvent obiecte native care facilitează comunicarea cu baza de date, controlul cererilor și ieșirea informațiilor.

Aceste obiecte sunt instanțe preconfigurate și gata de utilizare în scripturile de server **(fișiere .js)**. Ele elimină necesitatea importării bibliotecilor externe pentru sarcini fundamentale precum interogările SQL sau citirea parametrilor.

| Obiect | Descriere |
|--------|-----------|
| **_db**| Execută operațiuni de bază de date (query, insert, update, delete). |
| **_val** | Crearea și manipularea structurilor de date (list, map). |
| **_out** | Trimiterea răspunsurilor către utilizator (JSON, HTML...). |
| **_req** | Accesul la parametrii trimiși în cererea utilizatorului (GET, POST). |
| **_log**| Înregistrarea mesajelor de eroare sau depanare în consola serverului. |



Dacă întâmpinați dificultăți sau aveți sugestii de îmbunătățire, contactați-ne.

Echipa și comunitatea noastră sunt gata să ajute.

Dezvoltare plăcută!