---
id: db-form-operations
title: Form și Operațiunile de Bază de Date
sidebar_label: DB Form
---

## Înainte de a Începe

Înainte de a continua, asigură-te că ai noțiuni de SQL, relaționare între tabele precum "unu la mulți" și "mulți la unu".

În plus, este necesară cunoașterea prealabilă a `Forms` din Netuno și modul în care sunt organizate pentru a putea extrage maximul din DB Form.

## Introducere

În dezvoltarea de software, de multe ori trebuie să căutăm informații într-o bază de date, iar să facem asta folosind SQL pur face lucrurile oarecum masive și stresante. Interogarea transformă construirea interogărilor SQL într-o experiență intuitivă și lipsită de stres. Cu ea, poți crea interogări puternice folosind metode prietenoase care abstractizează complexitatea SQL-ului brut, oferind o abordare de dezvoltare a interogărilor care se aliniază cu fluxul tău de gândire.

## Cum Funcționează

În inima DB Form stă capacitatea de a structura comenzi SQL folosind obiecte și metode. În loc să scrii comenzile SQL direct, DB Form îți permite să folosești un mecanism orientat pe obiecte pentru a defini interogări și operații în mod programatic.

Fiecare interogare sau operație de bază de date este reprezentată ca un obiect.

Creezi instanțe de clase de interogare care încapsulează diferite părți ale SQL-ului, cum ar fi selecție, filtrare, grupare etc. Și, de asemenea, execuți operațiile de ștergere, inserare și actualizare a înregistrărilor.

## Inițializare

Totul începe cu inițializarea DB Form, care trebuie să știe care va fi numele formularului de bază sau principal care va fi utilizat, adică formularele din Netuno reprezintă întotdeauna tabele din baza de date, prin urmare este același lucru cu a spune care este tabela de bază sau tabela principală.

În acest exemplu inițiem DB Form pornind de la formularul/tabelul `persoane`:

```javascript
const dbFormPersoane = _db.form("persoane")
```

Cu DB Form inițializat, putem realiza interogări sau operații.

## Interogare Simplă

DB Form oferă două metode foarte comune pentru obținerea datelor, pe lângă paginare și rezultate distincte, și anume:

- `all` - Toate înregistrările ca o listă.
- `first` - Obține doar prima înregistrare.

Vezi exemplele de mai jos.

Pentru a obține toate persoanele:

```javascript
const dbPersoane = _db.form("persoane")
    .all()
```

Pentru a obține doar o persoană:

```javascript
const dbPersoana = _db.form("persoane")
    .first()
```

## Filtre și Condiții

Cu `where` putem filtra datele care respectă anumite condiții.

Vezi câteva exemple:

```js
const dbPersoana = _db.form("persoane")
    .where(_db.where("persoane_user_id").equals(_user.id))
    .first()
```

```js
const dbPersoane = _db.form("persoane")
    .where(
        _db.where("tip").in(_val.list().add("client").add("admin"))
            .and("email").notEqual(null)
    ).all()
```

## Comparații Where

`_db.where` oferă obiectul [Where](/docs/library/objects/Where) care suportă următoarele operații de comparație:

Comparații cu operatorii numerici și textuali:

-  `equal(...)` sau `equals(...)` - Verifică egalitatea, este `=`.
-  `notEqual(...)` sau `notEquals(...)` - Dacă este diferit de valoarea transmisă, este `<>`.
-  `greaterThan(...)` - Dacă este mai mare decât valoarea transmisă, este `>`.
-  `lessThan(...)` - Dacă este mai mic decât valoarea transmisă, este `<`.
-  `greaterOrEqualsThan(...)` - Dacă este mai mare sau egal cu valoarea transmisă, este `>=`.
-  `lessOrEqualsThan(...)` - Dacă este mai mic sau egal cu valoarea transmisă, este `<=`.

Condiții de text cu operatorul `LIKE`:

-  `startsWith('text')` - Dacă începe cu prefixul determinat, este `LIKE '...%'`.
-  `endsWith('text')` - Dacă se termină cu sufixul determinat, este `LIKE '%...'`.
-  `contains('text')` - Dacă conține termenul, este `LIKE '%...%'`.

Condiții cu liste cu operatorul `IN`:

-  `in(_val.list()...)` - Dacă este egal cu vreo valoare din listă, este condiția `IN (...)`.
-  `notIn(_val.list()...)` - Dacă nu este egal cu nicio valoare din listă, este condiția `NOT IN (...)`.

## Exemple Practice de Interogare

`DB Form` este accesibil prin resursa `_db.form('form')`, odată invocat ai în mâini interogarea de bază care poate fi configurată folosind metodele și obiectele disponibile în el.

### Mulți la Unu și Rezultate Distincte

```javascript
const interogare = _db.form('persoane')
    .where(
        _db.where('nume').startsWith('And')
        .and(
             _db.where('email').contains('and')
             .or('email').endsWith('com')
         )
    )
    .link('slujba', _db.where('cod').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'persoane_user_id',  
            _db.where('mail').startsWith('and')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('cod').equal('persoane')
            )
        )
    )
    .get("persoane.nume", "persoane_nume")
    .get("persoane.activ", "persoane_activ")
    .get("persoane.uid", "persoane_uid")
    .debug(true)
    .distinct(true)

const rezultate = interogare.all();
```

În exemplul de mai sus facem o interogare pentru tabelul `persoane` relaționând cu încă alte două tabele, `slujba` și `netuno_user`, unde `slujba` este relaționat prin metoda `link`, iar `netuno_user` prin `join`. Se poate observa că `link` este mult mai simplificat decât `join`, adică `link` reutilizează relația din `Form`-ul Netuno pentru a mapa relația, în timp ce `join` utilizează doar informațiile furnizate în metodă. De asemenea, se pot observa celelalte metode și obiecte utilizate precum:

- `where` : Obiect furnizat pentru a construi condiții pentru un tabel.
- `link` : Metodă care relaționează tabelul principal cu un alt tabel folosind criteriile `Form`-ului Netuno.
- `join` : Metodă care primește un obiect de relație între tabele.
- `get` : Metodă care definește ce câmpuri vor fi returnate în interogare.
- `manyToOne` : Obiect care definește tipul de relație între tabele, în acest caz o relație de tip `Many To One`.
- `debug` : Metodă care determină dacă interogarea construită va fi afișată în consolă.
- `distinct` : Metodă care determină dacă comanda `DISTINCT` va fi aplicată interogării.
- `all` : Metodă care execută interogarea și returnează rezultatele sub formă de listă.

> Metoda `link` trebuie folosită doar când tabelele au deja o relație prin `Form`-ul Netuno.

### Prima Înregistrare cu Relație și Ordonare

```javascript
const interogare = _db.form('persoane')
    .where(
        _db.where('nume').startsWith('And')
        .and('email').in(
            _val.list().add('primul@mail.com').add('aldoilea@mail.com'))
    )
    .link('slujba')
    .get("persoane.nume", "persoane_nume")
    .get("persoane.activ", "persoane_activ")
    .get("slujba.cod", "slujba_cod")
    .order('persoane.varsta', 'desc')
    .debug(true)

const primulRezultat = interogare.first();
```

La finalul exemplului de mai sus invocăm metoda `first()`, aceasta returnează prima apariție găsită la execuția interogării; dacă nu găsește niciuna, va returna `null`.

### Paginare

```javascript
const interogare = _db.form('persoane')
    .link(
        'slujba', 
        _db.link('sarcina')
    )
    .get("persoane.nume", "persoane_nume")
    .get("persoane.activ", "persoane_activ")
    .get("slujba.cod", "slujba_cod")
    .group("persoane.id")
    .debug(true)

const pagina = interogare.page(_db.pagination(1, 10));
```

> Numărul paginii în obiectul Pagination începe de la 1, deci exemplul de mai sus este echivalent cu: `offset = 0` și `limit = 10`.  

La finalul exemplului de mai sus invocăm metoda `page()` transmisă ca parametru obiectul `pagination` care are preferințele de paginare. Aceasta va returna un obiect pagină cu atributele echivalente, de exemplu:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"slujba_cod": "stagiar",
			"persoane_activ": true,
			"persoane_nume": "Ion Popescu"
		},
		{
			"slujba_cod": "manager",
			"persoane_activ": true,
			"persoane_nume": "Andrei Popescu"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Inserarea Înregistrărilor

Pentru a introduce date în baza de date folosim metoda `insert`, de exemplu:

```javascript
const dbPersoanaInserata = _db.form("persoane")
    .set("nume", "Andrei Popescu")
    .set("email", "andrei@mail.com")
    .insert();
```

Cu rezultatul lui `insert` putem obține id-ul înregistrării care a fost inserată în baza de date.

Prin urmare, în `dbPersoanaInserata` se obține `id`-ul înregistrării inserate astfel:

```javascript
_log.info("ID Persoană Inserată: "+ dbPersoanaInserata.getInt('id'))
```

## Editarea Înregistrărilor

Prin intermediul obiectului DB Form poți actualiza înregistrările interogării în mod ușor și intuitiv.

```javascript
_db.form('persoane')
    .link(
        'slujba',
        _db.where('cod').equal('stagiar')
    )
    .set("nume", "nume nou")
    .set("email", "emailnou@mail.com")
    .update();
```

> `Important`. Metoda `update()` va actualiza toate aparițiile interogării, așa că fii atent când o utilizezi.

> De asemenea, poți folosi alte metode combinate precum `order()` și `limit()` pentru a-ți îmbunătăți interogările.

## Ștergerea Înregistrărilor

DB Form îți permite, de asemenea, să ștergi înregistrările returnate în interogare în mod simplu.

```javascript
_db.form('persoane')
    .link(
        'slujba',
        _db.where('cod').equal('stagiar')
    )
    .delete();
```

> `Important`. Metoda `delete()` va șterge toate aparițiile interogării, așa că fii atent când o folosești.

> Ca și celelalte, este posibil să combini alte metode precum `order()` și `limit()` pentru a îmbunătăți rezultatele.