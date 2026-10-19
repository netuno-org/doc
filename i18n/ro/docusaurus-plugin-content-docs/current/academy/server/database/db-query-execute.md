---
id: db-query-execute
title: Query și Execute - Comenzi directe în baza de date
sidebar_label: Interogare & Executare
---

## Înainte de a începe

Pentru a putea înțelege acest tutorial cât mai eficient posibil, vă recomandăm să vă asigurați că aveți noțiuni de bază de _**JavaScript, SQL**_ și că știți să creați servicii în Netuno.

Dacă nu știți să creați servicii, consultați [Servicii Web REST](/docs/academy/server/services/rest).

## Crearea interogărilor

Netuno oferă funcții dedicate creării interogărilor către baza de date, iar în acest tutorial le vom prezenta și descrie pe scurt efectul fiecăreia, precum și bunele practici pentru a obține cel mai bun rezultat.

### _db.query('SELECT * FROM ...')

Această funcție permite returnarea datelor dintr-o interogare.

```javascript
_out.json(
  _db.query('SELECT * FROM tabel_nume')
)
```

> Rețineți că funcția _out.json() permite vizualizarea datelor serviciului pe ecran atunci când acesta este apelat în browser.

Această funcție acceptă și argumente, iar acestea sunt transmise direct prin apelul către serviciu. De exemplu, să presupunem că avem serviciul _selecteaza-toate.js_; apelul acestuia se va face prin _**http://localhost:9000/services/selecteaza-toate.netuno**_, iar argumentele de transmis se adaugă după apel, după un semn de întrebare:

```
http://localhost:9000/services/selecteaza-toate.netuno?argument1=1&argument2=nume
```

> Rețineți că pentru a trimite mai mulți parametri este suficient să-i separați printr-un ampersand (&).

### Interogare cu parametri

Iar la final este suficient să declarați această variabilă în interogare în felul următor:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM tabel_nume WHERE id = ? AND nume = ?', 
        _req.getInt("argument1"), _req.getString("argument2")
    )
)
```

> În locul semnelor '?' (întrebare) va fi injectat parametrul corespunzător, în funcție de ordinea sa.

## Interogare cu parametri și tipuri PostgreSQL și H2DataBase

Totuși, H2Database și PostgreSQL suportă o sintaxă simplă de conversie, astfel putem atribui tipuri parametrilor în felul următor:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM tabel_nume WHERE id = ?::int AND nume = ?::varchar', 
    _req.getInt("id"), _req.getString("nume")
  )
)
```

## Tipuri de parametri pentru H2Database și PostgreSQL

După cum ați putut observa anterior, atunci când se dorește executarea unei interogări cu argumente trebuie definit tipul acestora. Urmează o listă cu toate tipurile de variabile și tipul cel mai potrivit pentru fiecare:

* Potrivit pentru parametri de numere întregi:
    * **?::int**
* Potrivit pentru parametri de numere zecimale:
    * **?::float**
 * Potrivit pentru parametri de identificator unic global/universal, cunoscuți mai ales ca guid sau uuid:
    * **?::uuid**
 * Potrivit pentru parametri de text generic, string-uri:
    * **?::varchar**
    * **?::text**
 * Potrivit pentru parametri de tip dată:
    * **?::date**
 * Potrivit pentru parametri de tip oră:
    *  **?::time**
 * Potrivit pentru parametri cu dată și oră:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Această funcție permite executarea unei comenzi către baza de date, cum ar fi actualizări, inserări și ștergeri.

Returnează numărul de înregistrări afectate de comanda executată.

```javascript
// Exemplu de inserare:
const nInregistrariInserate = _db.execute(
    "INSERT INTO tabel_nume(id, activ, nume) " + 
    "VALUES(nextval('tabel_nume_id'), ?::int, ?::varchar)", 
    1, nume
)

// Exemplu de actualizare:
const nInregistrariActualizate = _db.execute(
    "UPDATE tabel_nume SET nume = ?::varchar WHERE id = ?::int",
    _req.getString("nume"), _req.getInt("id")
)

// Exemplu de ștergere:
const nInregistrariSterse = _db.execute(
    "DELETE FROM tabel_nume WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Notă:** La inserare, verificați dacă câmpul activ este egal cu 1; altfel nu va apărea în rezultat. 

## Exemplu de interacțiune cu datele

Vom prezenta acum norme recomandate pentru a obține cele mai bune rezultate posibile.

## Prima interogare

Vezi mai jos cum se obține prima linie a interogării, sau va fi nul dacă nu se obține nicio linie.

```javascript
// Selectarea datelor:
const dbRezultat = _db.queryFirst(
    'SELECT nume FROM tabel_nume WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbRezultat) {
    // Codul de stare HTTP:
    _header.status(404)
    // Indicarea erorii:
    _out.json(
        _val.map()
            .set('error', 'id-negasit')
    )
    // Încheie execuția serviciului:
    _exec.stop()
}
```

## Validarea numărului de înregistrări

Când efectuați o selecție în baza de date în care rezultatul este unic, pentru a accesa datele este recomandat să procedați **în felul următor**:

Rețineți că acesta este doar un exemplu simplu care garantează că este returnat cel puțin 1 rezultat și evită eroarea în cazul în care nu există niciun rezultat.

```javascript
// Selectarea datelor:
var dbRezultate = _db.query(
  'SELECT nume FROM tabel_nume WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let nume = null;
// Garantează că există date și se poate folosi
// semnul mai mare (dbRezultate.length > 1) în cazul
// în care există mai mult de o înregistrare:
if (dbRezultate.size() >= 1) {
  // Pentru a accesa direct valoarea numelui, este suficient:
  nume = dbRezultate.get(0).getString('nume');
}
```

## Iterarea în buclă a înregistrărilor

Dacă rezultatul selecției sunt **mai multe rezultate**, puteți interacționa cu bucla 'for' pentru a obține datele după cum urmează:

```javascript
// Execută interogarea
const dbRezultate = _db.query('SELECT id, nume FROM tabel_nume');

// Inițializează variabila pentru ca aceasta să poată primi valori
const elemente = _val.init();

// Iterează prin toate rezultatele pentru a primi fiecare valoare separat
for (const dbRezultat of dbRezultate) {
    elemente.push(
        _val.map()
            .set("uid", dbRezultat.getString("uid"))
            .set("nume", dbRezultat.getString("nume"))
    );
}

// Trimite la ieșirea de date noua listă de date:
_out.json(elemente);
```

Dacă aveți întrebări, nu ezitați să ne contactați; consultați indicațiile din subsolul acestui website.

Dezvoltare plăcută!