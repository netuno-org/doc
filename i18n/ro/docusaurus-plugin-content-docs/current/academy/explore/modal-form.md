---
id: modal-form
title: Formular Modal
---

Crearea și gestionarea formularelor în ferestre modale.
## Introducere

Modalul este o caracteristică de interfață (UI) care permite deschiderea unui formular fără ca utilizatorul să fie nevoit să părăsească pagina curentă.

Utilizarea modalelor îmbunătățește semnificativ Experiența Utilizatorului (UX), permițând executarea operațiilor **CRUD (Creare, Citire, Actualizare, Ștergere)** fără a fi nevoie să reîncărcați pagina sau să pierdeți contextul ecranului curent. 

Netuno gestionează automat comunicarea cu backend-ul și injectarea HTML-ului necesar.


#### Cerințe preliminare

Pentru a implementa exemplele, veți avea nevoie de:

- Acces la mediul de dezvoltare al aplicației dumneavoastră Netuno.
- Un formular configurat corespunzător în panoul administrativ (backoffice) al Netuno.
- Cunoștințe de bază în JavaScript și manipularea evenimentelor în DOM.

În exemplele următoare, vom folosi un formular generic numit **"test"**.

Dacă aveți întrebări despre acești pași, consultați: [Formulare](/docs/academy/ui/forms).

## Structura de bază

Crearea și manipularea modalelor în Netuno este centralizată în obiectul `netuno.modal`.

Metoda **netuno.modal.create()** creează structura de bază a modalului în interfață. Primește un obiect de configurare cu următoarele proprietăți:

- **name (String):** Numele formularului (creat în backoffice) care va servi drept bază pentru modal.
- **callback (Function):** Funcție executată imediat ce structura modalului este injectată în DOM (dar înainte de a fi afișată), primește ca parametru elementul modalului creat.

### Funcția Callback

În interiorul funcției callback, trebuie să definiți care va fi starea (modul) formularului utilizând funcțiile de încărcare native:

- **Modul Listare - `netuno.loadForm()`**: Randează tabelul de căutare și listare a înregistrărilor acelui formular.

- **Modul Editare/Creare - `netuno.loadFormEdit()`**: Randează câmpurile de input ale formularului. Poate fi folosit pentru a insera o înregistrare nouă sau a edita una existentă.

## Implementare
Mai jos, detaliem trei scenarii de utilizare mai comune.

### 1. Modul de listare

`netuno.loadForm()` este utilizat atunci când doriți ca utilizatorul să vizualizeze toate datele unui formular sub formă de tabel (grid) de căutare.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Localizează containerul intern destinat primirii formularului
    let containerFormular = modal.find('[netuno-form]');
    // 2. Injectează lista de date a formularului în container
    netuno.loadForm(containerFormular); 
    // 3. Afișează modalul utilizatorului
    netuno.modal.show(modal);
  }
});
```
### 2. Modul de creare

`netuno.loadFormEdit()` este utilizat pentru butoane de tipul "Adaugă nou". Deschide formularul curat, pregătit pentru introducerea datelor.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let containerFormular = modal.find('[netuno-form]');
    // Încarcă formularul în modul de inserare (înregistrare nouă)
    netuno.loadFormEdit(containerFormular); 
    netuno.modal.show(modal);
  }
});
```

:::info
Când utilizați `netuno.loadFormEdit()` fără a transmite un **ID**, Netuno înțelege că doriți să utilizați "ecranul de editare" de la zero. Acesta încarcă interfața cu inputurile goale, pregătite pentru crearea unei înregistrări noi. În acest scenariu, Netuno declanșează intern evenimentul `netuno:new`.
:::

### 3. Modul de editare

Dacă aveți nevoie ca modalul să încarce o înregistrare specifică pentru modificare, trebuie să transmiteți **UID** sau **ID**-ul înregistrării ca al doilea parametru în funcția de încărcare.

```jsx
// Exemplu: Se editează înregistrarea cu ID-ul 1234
const idInregistrare = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let containerFormular = modal.find('[netuno-form]');
    // Injectează datele înregistrării 1234 în câmpurile formularului
    netuno.loadFormEdit(containerFormular, idInregistrare); 
    netuno.modal.show(modal);
  }
});
```


## Evenimente

Containerul formularului (`[netuno-form]`) emite evenimente personalizate care însoțesc ciclul de viață al interacțiunii utilizatorului. 

Se recomandă utilizarea acestor evenimente pentru a declanșa logici de business specifice frontend-ului dumneavoastră (cum ar fi actualizarea tabelelor în fundal, afișarea alertelor etc.).

| TIP DE EVENIMENT   | DESCRIERE    |
| ------- |--------------|
| ` netuno:new` | Declanșat când este afișat ecranul de creare a unui element nou. |
| `netuno:edit` | Declanșat când este afișat ecranul de editare a unui element existent. |
| `netuno:save` | Declanșat când este adăugat un element nou. |
| `netuno:back` | Declanșat după clic pe butonul de întoarcere. |
| `netuno:delete` | Declanșat după ștergerea unui element. |


### Exemplu: Interceptarea mai multor evenimente

În acest exemplu gata pentru producție, creăm modalul și adăugăm *listeners* pentru a urmări succesul operațiunilor utilizatorului:

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let containerFormular = modal.find('[netuno-form]');
    
    // Monitorizând ecranul de inserare
    containerFormular.on('netuno:new', function(eveniment) {
       console.info("Interfața de creare a fost încărcată.");
    });

    // Monitorizând o salvare reușită
    containerFormular.on('netuno:save', function(eveniment) {
       console.success("Înregistrarea a fost salvată cu succes!");
       // Exemplu: Închide modalul automat după salvare
       netuno.modal.hide(modal); 
    });

    // Randează modalul în modul listă și afișează
    netuno.loadForm(containerFormular);
    netuno.modal.show(modal);
  }
});
```
Dacă aveți dificultăți sau sugestii de îmbunătățire, contactați-ne.
Echipa și comunitatea noastră sunt pregătite să ajute.

Dezvoltare plăcută!