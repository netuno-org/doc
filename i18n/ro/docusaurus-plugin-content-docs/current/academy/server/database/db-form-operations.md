---
id: db-form-operations
title: Formularul și Operațiunile de Bază de Date
sidebar_label: DB Form
---

## Înainte de a Începe

Înainte de a proceda, asigurați-vă că aveți noțiuni de SQL și de relaționare între tabele, precum „unul la mulți” și „mulți la unul”.

De asemenea, este necesară cunoașterea prealabilă a `Forms` din Netuno și a modului în care acestea sunt organizate, pentru a extrage maximum din DB Form.

## Introducere

În dezvoltarea de software, de multe ori trebuie să căutăm informații în baza de date, iar folosirea SQL-ului pur face lucrurile masive și stresante. Query transformă construirea interogărilor SQL într-o experiență intuitivă și lipsită de stres. Cu el, puteți crea interogări puternice folosind metode prietenoase care abstractizează complexitatea SQL-ului brut, oferind o abordare de dezvoltare a interogărilor aliniată la fluxul dumneavoastră de gândire.

## Cum Funcționează

În inima DB Form se află capacitatea de a structura comenzi SQL folosind obiecte și metode. În loc să scrieți comenzile SQL direct, DB Form vă permite să utilizați un mecanism orientat pe obiecte pentru a defini interogări și operațiuni în mod programatic.

Fiecare interogare sau operațiune de bază de date este reprezentată ca un obiect.

Creați instanțe ale claselor de interogare care încapsulează diferite părți ale SQL-ului, precum selecție, filtrare, grupare etc. Și, de asemenea, executați operațiunile de ștergere, inserare și actualizare a înregistrărilor.

## Inițializare

Totul începe cu inițializarea DB Form, care trebuie să știe care va fi numele formularului de bază sau principal ce va fi utilizat, adică formularele din Netuno reprezintă întotdeauna tabele în baza de date, prin urmare este același lucru cu a spune care este tabela de bază sau tabela principală.

În acest exemplu inițiem DB Form pornind de la formularul/tabela `persoane`:

```javascript
const dbFormPersoane = _db.form("persoane")
```

Cu DB Form inițializat putem realiza interogări sau operațiuni.

## Interogare Simplă

DB Form oferă două metode foarte comune pentru obținerea datelor, pe lângă paginare și rezultate distincte, și anume:

- `all` - Toate înregistrările ca o listă.
- `first` - Obține doar prima înregistrare.

Vedeți exemplele următoare.

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

Cu ajutorul lui where putem filtra datele care respectă anumite condiții.

Vedeți câteva exemple:

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

`_db.where` oferă obiectul [Where](/docs/library/objects/Where) care suportă următoarele operațiuni de comparație:

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
-  `contains('text')` - Dacă conține termenul, este `LIKE '%...%'`..

Condiții cu liste folosind operatorul `IN`:

-  `in(_val.list()...)` - Dacă este egal cu vreo valoare din listă, este condiția `IN (...)`.
-  `notIn(_val.list()...)` - Dacă nu este egal cu niciuna dintre valorile din listă, este condiția `NOT IN (...)`.

## Exemple Practice de Interogare

`DB Form` este accesibil din resursa `_db.form('formular')`; odată invocat, aveți în mână interogarea de bază care poate fi configurată folosind metodele și obiectele disponibile în ea.

### Mulți la Unu și Rezultate Distincte

```javascript
const interogare = _db.form('persoane')
    .where(
        _db.where('nume').startsWith('jail')
        .and(
             _db.where('email').contains('jai')
             .or('email').endsWith('com')
         )
    )
    .link('functie', _db.where('cod').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'persoane_user_id',  
            _db.where('mail').startsWith('jai')
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

În exemplul de mai sus facem o interogare pentru tabela `persoane`, relaționând-o cu încă două tabele, `functie` și `netuno_user`, unde `functie` este relaționată prin metoda `link`, iar `netuno_user` prin intermediul lui `join`. Se poate observa că `link` este mult mai simplificat decât `join`, deoarece `link` reutilizează relația din `Form`-ul Netuno pentru a mapa legătura, în timp ce `join` folosește doar informațiile furnizate în metodă. De asemenea, se pot observa celelalte metode și obiecte utilizate, precum:

- `where` : Obiect furnizat pentru a construi condiții pentru o tabelă.
- `link` : Metodă care relaționează tabela principală cu o altă tabelă folosind criteriile din `Form`-ul Netuno.
- `join` : Metodă care primește un obiect de relație între tabele.
- `get` : Metodă care definește ce câmpuri vor fi returnate în interogare.
- `manyToOne` : Obiect care definește tipul de relație între tabele, în acest caz o relație de tip `Many To One`.
- `debug` : Metodă care determină dacă interogarea construită va fi afișată în consolă.
- `distinct` : Metodă care determină dacă comanda `DISTINCT` va fi aplicată interogării.
- `all` : Metodă care execută interogarea și returnează rezultatele sub formă de listă.

> Metoda `link` trebuie utilizată doar atunci când tabelele au deja o relație prin intermediul `Form`-ului Netuno.

### Prima Înregistrare cu Relație și Ordonare

```javascript
const interogare = _db.form('persoane')
    .where(
        _db.where('nume').startsWith('jail')
        .and('email').in(
            _val.list().add('primul@mail.com').add('aldoilea@mail.com'))
    )
    .link('functie')
    .get("persoane.nume", "persoane_nume")
    .get("persoane.activ", "persoane_activ")
    .get("functie.cod", "functie_cod")
    .order('persoane.varsta', 'desc')
    .debug(true)

const primulRezultat = interogare.first();
```
La finalul exemplului de mai sus invocăm metoda `first()`, care returnează prima apariție găsită la executarea interogării; în cazul în care nu găsește niciuna, va returna `null`.

### Paginare

```javascript
const interogare = _db.form('persoane')
    .link(
        'functie', 
        _db.link('sarcina')
    )
    .get("persoane.nume", "persoane_nume")
    .get("persoane.activ", "persoane_activ")
    .get("functie.cod", "functie_cod")
    .group("persoane.id")
    .debug(true)

const pagina = interogare.page(_db.pagination(1, 10));
```

> Numărul paginii în obiectul Pagination începe de la 1, așadar exemplul de mai sus este echivalent cu: `offset = 0` și `limit = 10`.  

La finalul exemplului de mai sus invocăm metoda `page()` transmigând ca parametru obiectul `pagination`, care conține preferințele de paginare. Aceasta va returna un obiect pagină cu atributele echivalente, de exemplu:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"functie_cod": "stagiar",
			"persoane_activ": true,
			"persoane_nume": "Ion Ionescu"
		},
		{
			"functie_cod": "manager",
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

Pentru a insera date în baza de date folosim metoda `insert`, de exemplu:

```javascript
const dbPersoanaInserata = _db.form("persoane")
    .set("nume", "Andrei Popescu")
    .set("email", "andrei@mail.com")
    .insert();
```

Cu rezultatul lui `insert` putem obține id-ul înregistrării care a fost inserată în baza de date.

Prin urmare, în `dbPersoanaInserata` se obține `id`-ul înregistrării inserate în felul următor:

```javascript
_log.info("ID Persoană Inserată: "+ dbPersoanaInserata.getInt('id'))
```

## Editarea Înregistrărilor

Prin intermediul obiectului DB Form puteți actualiza înregistrările interogării într-un mod simplu și intuitiv.

```javascript
_db.form('persoane')
    .link(
        'functie',
        _db.where('cod').equal('stagiar')
    )
    .set("nume", "nume nou")
    .set("email", "noulmeuemail@mail.com")
    .update();
```

> `Important`. Metoda `update()` va actualiza toate aparițiile interogării, așadar fiți atenți atunci când o utilizați.

> În plus, puteți folosi alte metode combinate, precum `order()` și `limit()`, pentru a vă îmbunătăți interogările.

## Ștergerea Înregistrărilor

DB Form vă permite, de asemenea, să ștergeți înregistrările returnate în interogare într-un mod simplu.

```javascript
_db.form('persoane')
    .link(
        'functie',
        _db.where('cod').equal('stagiar')
    )
    .delete();
```

> `Important`. Metoda `delete()` va șterge toate aparițiile interogării, așadar fiți atenți atunci când o utilizați.

> La fel ca în celelalte cazuri, este posibil să combinați alte metode, precum `order()` și `limit()`, pentru a îmbunătăți rezultatele.
