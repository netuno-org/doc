---
id: cron-jobs
title: Cron Jobs - Servicii Programate
sidebar_label: Cron Jobs
---

## Înainte de a începe

Înainte de a continua, asigurați-vă că aveți noțiuni de bază de _**JavaScript**_ și că aveți deja noțiunile de bază ale Netuno cu ghidul pas cu pas disponibil în [Academia](/docs/academy/overview).

## Introducere

Este comună nevoia de a executa sarcini periodic, adică din când în când este necesar să trimiteți date către alt sistem, să importați date din alt sistem, să trimiteți un e-mail, să validați înregistrări în baza de date și multe altele...

În Linux/UNIX/Mac există serviciul Cron cu bine-cunoscutul fișier de configurare `crontab`, iar în Windows există Task Manager (_Manager de activități_).

Iar în Netuno, Cron Jobs este deja integrat, ajutând astfel la evitarea configurărilor externe.

Acest tip de operații periodice sunt cunoscute drept Cron Jobs sau, în limba română, servicii programate.

Fiecare aplicație Netuno poate avea numeroase Cron Jobs, iar Cron Jobs din Netuno pot executa atât servicii și URL-uri interne, cât și URL-uri externe.

> Pentru mai multe informații, consultați documentația resursei [cron](/docs/library/resources/cron).

## Cum funcționează

Fiecare aplicație are configurarea propriilor servicii programate (**cron jobs**) cu configurarea aferentă de execuție.

Pentru simplificare, fiecare serviciu programat este un **job** separat, care are propria configurare de execuție și poate fi executat în fiecare minut, la fiecare 5 minute, în fiecare oră, într-o anumită zi și oră a săptămânii etc... De asemenea, are URL-ul care va fi apelat când vine momentul execuției sale.

> Netuno utilizează biblioteca <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> pentru a gestiona execuția serviciilor programate. Configurarea regulilor de temporizare este specifică acestei biblioteci.

Astfel, execuția fiecărui job implică executarea unui URL (_adresă web, link_), care poate fi atât extern, cât și intern aplicației înseși. Când este un link extern, poate aparține altei aplicații sau oricărui URL extern din internet, din rețea sau de pe computer.

![Diagramă Cron](/docs/assets/academy/server/cron.svg)

Graficul de mai sus arată că Netuno conține 2 aplicații, fiecare având configurate 2 joburi (_servicii programate_), care sunt executate în momente diferite, în funcție de o configurare oarecare.

Comportamentul execuției care va avea loc este următorul:

- Aplicația 1 lansează 2 joburi:
  - Job 1: Execută un URL de serviciu intern al aplicației 1 înseși.
  - Job 2: Execută un URL extern, public.
- Aplicația 2 lansează 2 joburi:
  - Job 3: Execută un URL de serviciu intern al aplicației 2 înseși
  - Job 4: Execută un URL de serviciu al aplicației 1.

> Aplicațiile trebuie să aibă serviciile executate de Cron Jobs în dosarul:
> - 📂 `server/services/jobs`

Fiecare URL este executat cu metoda HTTP POST. În configurarea jobului se pot adăuga parametri suplimentari și, de asemenea, o cheie secretă pentru a evita executarea în afara contextului controlat.

## Configurare

Configurarea serviciilor programate se face în fișierul de configurare al aplicației, în funcție de mediu.

> Configurarea nu trebuie să înceapă niciodată cu `*`, deoarece aceasta va provoca executarea în fiecare secundă, generând astfel complicații de performanță cu efect de bulgăre de zăpadă în cazul în care procesarea durează uneori mai mult de 1 secundă.

Pentru a face acest lucru, navigați în aplicația pe care o dezvoltați până la fișierul de configurare al mediului. În acest exemplu, vom folosi fișierul mediului de dezvoltare localizat în:

- 📂 `config/_development.json`

Verificați dacă nu există deja configurări pentru Cron; dacă nu există, adăugați la sfârșitul fișierului de configurare (în format JSON) parametrii de configurare:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "jobul-meu",
                "config": "0 30 12 * * ?",
                "url": "http://aplicatia-mea.local.netu.no:9000/services/jobs/jobul-meu"
            },
            {
                "name": "jobul-meu",
                "config": "0 0/2 * * * ?",
                "url": "http://aplicatia-mea.local.netu.no:9000/services/jobs/alt-job-al-meu",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "tip": "client"
                }
            }
        ]
    },
    ...
}
```

În această configurare, primul job va fi executat în fiecare zi la 12:30.

Iar al doilea job se va executa la fiecare 2 minute.


##### Joburi

Lista serviciilor programate din aplicație; fiind un array, putem avea mai multe servicii configurate.

##### Secret

Este un parametru de cheie de securitate care protejează serviciul, astfel încât să fie executat doar când primește acest parametru cu valoarea exact egală.

Aceasta deoarece `jobs` sunt servicii publice și, pentru a evita executarea lor din exterior, conțin această protecție.

##### Nume

Numele care identifică serviciul la nivel intern, ce poate fi folosit pentru operații de administrare, cum ar fi oprirea și reluarea.

##### Config

Configurarea expresiei de temporizare a serviciului, adică regulile de programare ale acestuia.

> Configurarea nu trebuie să înceapă niciodată cu `*`, deoarece aceasta va provoca executarea în fiecare secundă, generând astfel complicații de performanță cu efect de bulgăre de zăpadă în cazul în care procesarea durează uneori mai mult de 1 secundă.

Consultați mai jos expresiile acceptate.

##### URL

Adresa care va fi executată periodic.

##### Params

Sunt parametrii transmisi către URL la execuția sa; URL-ul este executat cu metoda **HTTP POST**, astfel încât pot fi adăugați parametri suplimentari, cum ar fi _tip_ în exemplul de mai sus, sau chiar specificată o altă cheie secretă.

### Formate acceptate pentru expresiile Cron

|NUMELE CÂMPULUI | OBLIGATORIU | VALORI ACCEPTATE | CARACTERE SPECIALE PERMISE |
| ------- |:------:|:-----------:|--------------|
| Secunde | DA | 0-59 | , - * / |
| Minute | DA | 0-59 | , - * / |
| Ore | DA | 0-23 | , - * / |
| Ziua lunii | DA | 1-31 | , - * ? / L W |
| Luna | DA | 1-12 sau JAN-DEC | , - * / |
| Ziua săptămânii | DA | 1-7 sau SUN-SAT | , - * ? / L # |
| An | NU | gol, 1970-2099 | , - * / |

##### Exemple de expresii Cron

|EXPRESIE | SEMNIFICAȚIE |
| ------- |------|
| 1 * * * * ? | Se execută în secunda numărul 1 a fiecărui minut. |
| 0 0 12 * * ? | Începe la 12:00 în fiecare zi |
| 0 15 10 ? * * | Începe la 10:15 în fiecare zi |
| 0 15 10 * * ? | Începe la 10:15 în fiecare zi |
| 0 15 10 * * ? * | Începe la 10:15 în fiecare zi |
| 0 15 10 * * ? 2005 | Începe la 10:15 în fiecare zi pe parcursul anului 2005 |
| 0 * 14 * * ? | Începe în fiecare minut începând cu 14:00 și se termină la 14:59, în fiecare zi |
| 0 0/5 14 * * ? | Începe la fiecare 5 minute începând cu 14:00 și se termină la 14:55, în fiecare zi |
| 0 0/5 14,18 * * ? | Începe la fiecare 5 minute începând cu 14:00 și se termină la 14:55. Apoi, începe la fiecare 5 minute începând cu 18:00 și se termină la 18:55, în fiecare zi |
| 0 0-5 14 * * ? | Începe în fiecare minut începând cu 14:00 și se termină la 14:05, în fiecare zi |
| 0 10,44 14 ? 3 WED | Începe la 14:10 și la 14:44 în fiecare miercuri din luna martie. |
| 0 15 10 ? * MON-FRI | Începe la 10:15 în fiecare zi lucrătoare a săptămânii (de luni până vineri) |
| 0 15 10 15 * ? | Începe la 10:15 în ziua 15 a fiecărei luni |
| 0 15 10 L * ? | Începe la 10:15 în ultima zi a fiecărei luni |
| 0 15 10 L-2 * ? | Începe la 10:15 în penultima zi a fiecărei luni |
| 0 15 10 ? * 6L | Începe la 10:15 în ultima vineri a fiecărei luni |
| 0 15 10 ? * 6L 2002-2005 | Începe la 10:15 în fiecare ultimă vineri a fiecărei luni pe parcursul anilor 2002, 2003, 2004 și 2005 |
| 0 15 10 ? * 6#3 | Începe la 10:15 în a treia vineri a fiecărei luni |
| 0 0 12 1/5 * ? | Începe la 12:00 la fiecare 5 zile ale fiecărei luni, începând cu prima zi a fiecărei luni. |
| 0 11 11 11 11 ? | Începe în fiecare 11 noiembrie la 11:11. |

> Configurarea nu trebuie să înceapă niciodată cu `*`, deoarece aceasta va provoca executarea în fiecare secundă, generând astfel complicații de performanță cu efect de bulgăre de zăpadă în cazul în care procesarea durează uneori mai mult de 1 secundă.

## Serviciu

Serviciile programate trebuie să fie amplasate în dosarul:

- 📂 `server/services/jobs`

Netuno va executa automat aceste servicii și va valida parametrul `secret` cu valoarea din configurare.

> `secret` permite ca serviciul să fie executat din exterior fără autentificare, dar într-un mod sigur.

Serviciul va fi executat periodic conform parametrizării definite.

Pentru a testa manual execuția serviciului, este suficient să accesați direct URL-ul serviciului și să transmiteți parametrul `secret`.

De exemplu, prin GET:

- http://aplicatia-mea.local.netu.no:9000/services/job/jobul-meu?secret=\*\*\*\*\*

Locul `*****` de la sfârșitul URL-ului trebuie înlocuit cu valoarea reală configurată pentru `secret`.

## Exemplu

Creați fișierul în:

- 📂 `server/services/jobs/test.js`

În acest fișier de serviciu, introduceți următorul cod:
```javascript
_log.info("Job de test!")
_out.print("Ok")
```

În JSON-ul de configurare al aplicației dvs., ajustați parametrizarea după cum urmează:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "test",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/test"
            }
        ]
    },
    ...
}
```

La executarea serverului Netuno în terminal, va începe să apară mesajul `Job de test!` la fiecare 30 de secunde.

Dacă deschideți în browser URL-ul:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

Va returna doar `Ok`, iar în terminal va apărea mesajul `Job de test!`.

> În mediul `development`, validarea `secret` nu are efect, așa că puteți executa fără a transmite niciun `secret` și va funcționa, dar în alt mediu, cum ar fi producția, este deja luată în considerare.

## Multe sarcini

Când este necesar să fie create multe sarcini programate, este indicat să creșteți numărul de thread-uri utilizate pentru execuția paralelă a diverselor sarcini programate.

Această configurare se face în fișierul `config.js` aflat în rădăcina Netuno, adăugând linia de exemplu:

```javascript
config.cronThreadCount = 10
```

> În mod implicit, această configurare permite doar 3 thread-uri.
> 
> Trebuie să aveți în vedere creșterea numărului de thread-uri în funcție de numărul de nuclee ale CPU-ului.

Utilizarea prea puținelor thread-uri pentru a executa multe programări paralele poate duce la oprirea execuției sarcinilor programate.

Prin urmare, dacă există cazuri în care sarcinile rămân blocate după un timp, probabil se execută prea multe sarcini în paralel, așa că este necesar să creșteți numărul de thread-uri.

## Programatic

Netuno permite configurarea și controlarea Cron Jobs în mod programatic.

Aceasta înseamnă că, prin cod, putem gestiona totul.

### Creează o sarcină nouă

Pentru a crea o sarcină nouă, creăm programarea acesteia prin [`_cron.schedule`](/docs/library/resources/cron#schedule).

[`_cron.schedule`](/docs/library/resources/cron#schedule) primește următorii parametri:

1. Cheia de identificare a sarcinii: `key`.
2. Configurarea timpului de programare pentru execuție.
3. Adresa serviciului care trebuie executat, adică: `URL`.
4. Parametri suplimentari trimiși la apelul serviciului.

```javascript
_cron.schedule(
    'sarcina-mea',
    '0 0/60 * * * ?',
    `/services/jobs/actualizeaza-produs`,
    _val.map()
        .set('id', 123)
)
```

Dacă este necesar să creați sarcinile automat la inițializarea aplicației, acest automatism poate fi codificat în fișierul:

- `server/core/_init.js`

Acest fișier este executat de fiecare dată când aplicația este inițializată de serverul Netuno.

### Elimină sarcina

Pentru a elimina o anumită sarcină, folosim [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Unde `key` este cheia de identificare a sarcinii.

Vedeți exemplul:

```javascript
_cron.remove('sarcina-mea')
```

### Listează sarcinile

Prin [`_cron.schedules()`](/docs/library/resources/cron#schedules) putem lista toate sarcinile configurate.

Exemplu de listare a tuturor sarcinilor programate: 

```javascript
const lista = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cheie</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parametri</td>`)
_out.println(`  <td>Descriere</td>`)
_out.println(`  <td>Ultima execuție</td>`)
_out.println(`  <td>Următoarea execuție</td>`)
_out.println(`  <td>Prioritate</td>`)
_out.println('</tr>')
for (const programare of lista) {
        _out.println('<tr>')
        _out.println(`  <td>${programare.getString('key')}</td>`)
        _out.println(`  <td>${programare.getString('url')}</td>`)
        _out.println(`  <td>${programare.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${programare.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${programare.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${programare.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${programare.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Pauzează sarcinile

Prin [`_cron.pause(key)`](/docs/library/resources/cron#pause) putem pune pe pauză execuția unei anumite sarcini.

Exemplu de punere pe pauză a tuturor sarcinilor programate:

```javascript
const lista = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cheie</td>`)
_out.println(`  <td>Oprit</td>`)
_out.println('</tr>')
for (const programare of lista) {
    _out.println('<tr>')
    _out.println(`  <td>${programare.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(programare.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Observați utilizarea `_cron.pause` în exemplul de mai sus.

### Reia sarcinile

Prin [`_cron.resume(key)`](/docs/library/resources/cron#resume) putem relua execuția unei anumite sarcini.

Exemplu de reluare a tuturor sarcinilor programate și de afișare a momentului în care vor fi executate sarcinile:

```javascript
const lista = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cheie</td>`)
_out.println(`  <td>Reactivat</td>`)
_out.println(`  <td>Următoarea execuție</td>`)
_out.println('</tr>')
for (const programare of lista) {
    _out.println('<tr>')
    _out.println(`  <td>${programare.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(programare.getString('key'))}</td>`)
    _out.println(`  <td>${programare.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Observați utilizarea `_cron.resume` în exemplul de mai sus.