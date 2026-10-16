---
id: cron-jobs
title: Cron Jobs - Servicii Programate
sidebar_label: Cron Jobs
---

## Înainte de a începe

Înainte de a continua, asigurați-vă că aveți noțiuni de bază în _**JavaScript**_ și că aveți deja noțiunile de bază despre Netuno cu pasul cu pas disponibil în [Academie](/docs/academy/overview).

## Introducere

Este obișnuită nevoia de a executa sarcini periodic, adică, din când în când este necesar să trimitem date către alt sistem, sau să importăm date din alt sistem, să trimitem un e-mail, să validăm înregistrări în baza de date și multe altele...

În Linux/UNIX/Mac există serviciul Cron cu celebrul fișier de configurare `crontab`, iar în Windows există Task Manager (_Manager de activitate_).

Iar în Netuno, Cron Jobs este deja integrat, ajutând astfel să evitați configurările externe.

Acest tip de operații periodice sunt cunoscute ca Cron Jobs sau, în română, Servicii Programate.

Fiecare aplicație Netuno poate avea nenumărate Cron Jobs, iar Cron Jobs din Netuno pot executa atât servicii și URL-uri interne, cât și URL-uri externe.

> Pentru mai multe informații, verificați documentația resursei [cron](/docs/library/resources/cron).

## Cum funcționează

Fiecare aplicație are configurarea propriilor servicii programate (**cron jobs**) cu configurarea de execuție aferentă.

Pentru a simplifica, fiecare serviciu programat este un **job** separat, care are propria configurare de execuție, putând fi executat în fiecare minut, la 5 minute, în fiecare oră, într-o anumită zi și oră a săptămânii etc... de asemenea, are URL-ul care va fi apelat când este momentul execuției sale.

> Netuno utilizează biblioteca <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> pentru a gestiona execuția serviciilor programate. Configurarea regulilor de temporizare este corespunzătoare acestei biblioteci.

Astfel, execuția fiecărui job implică execuția unui URL (_adresă web, link_), care poate fi atât extern, cât și intern aplicației înseși. Fiind un link extern, poate fi de la o altă aplicație, precum și de la orice URL extern de pe internet, din rețea sau de pe computer.

![Diagramă Cron](/docs/assets/academy/server/cron.svg)

În graficul de mai sus se demonstrează că Netuno conține 2 aplicații, unde fiecare are configurate 2 joburi (_servicii programate_), care sunt executate în momente diferite, corespunzătoare unei configurații oarecare.

Comportamentul execuției care va avea loc este următorul:

- Aplicația 1 lansează 2 joburi:
  - Jobul 1: Execută un URL de serviciu intern al aplicației 1.
  - Jobul 2: Execută un URL extern, public.
- Aplicația 2 lansează 2 joburi:
  - Jobul 3: Execută un URL de serviciu intern al aplicației 2
  - Jobul 4: Execută un URL de serviciu al aplicației 1.

> Aplicațiile trebuie să aibă serviciile care sunt executate de Cron Jobs în folderul:
> - 📂 `server/services/jobs`

Fiecare URL este executat cu metoda HTTP POST. În configurarea jobului se pot adăuga parametri suplimentari și, de asemenea, o cheie secretă pentru a evita executarea în afara contextului controlat.

## Configurare

Configurarea serviciilor programate se realizează în fișierul de configurare al aplicației, în funcție de mediu.

> Configurarea nu trebuie să înceapă niciodată cu `*`; aceasta va provoca execuția în fiecare secundă, generând astfel complicații de performanță cu efect de bulgăre de zăpadă în cazul în care procesarea durează mai mult de 1 secundă.

Pentru a face acest lucru, navigați în aplicația pe care o dezvoltați până la fișierul de configurare a mediului. În acest exemplu, vom folosi fișierul de mediu de dezvoltare localizat în:

- 📂 `config/_development.json`

Verificați dacă nu există deja configurații pentru Cron; dacă nu există, adăugați la sfârșitul fișierului de configurare (în format JSON) parametrii de configurare:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "job-meu",
                "config": "0 30 12 * * ?",
                "url": "http://aplicatia-mea.local.netu.no:9000/services/jobs/job-meu"
            },
            {
                "name": "job-meu",
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

În această configurare, primul job va fi executat în fiecare zi la ora 12:30.

Iar al doilea job va executa la fiecare 2 minute.

##### Joburi

Lista serviciilor programate pe care le avem în aplicație; fiind un array, putem avea multiple servicii configurate.

##### Secret

Este un parametru de cheie de securitate care protejează serviciul, pentru a fi executat doar când primește acest parametru cu valoarea exact egală.

Aceasta deoarece `jobs` sunt servicii publice și, pentru a evita executarea lor externă, conțin această protecție.

##### Nume

Numele care identifică serviciul intern, care poate fi utilizat pentru a realiza manipulări de gestiune, cum ar fi oprirea și reluarea.

##### Config

Configurarea expresiei de temporizare a serviciului, adică regulile programării sale.

> Configurarea nu trebuie să înceapă niciodată cu `*`; aceasta va provoca execuția în fiecare secundă, generând astfel complicații de performanță cu efect de bulgăre de zăpadă în cazul în care procesarea durează mai mult de 1 secundă.

Verificați mai jos expresiile acceptate.

##### URL

Adresa care va fi executată periodic.

##### Parametri

Sunt parametrii care sunt transmisi către URL la execuția sa; URL-ul este executat cu metoda **HTTP POST** și astfel pot fi adăugați parametri suplimentari precum _tip_ în exemplul de mai sus, sau chiar specificată o altă cheie secretă.

### Formate acceptate ale expresiilor Cron

|NUMELE CÂMPULUI | OBLIGATORIU | VALORI ACCEPTATE | CARACTERE SPECIALE PERMISE |
| ------- |:------:|:-----------:|--------------|
| Secunde | DA | 0-59 | , - * / |
| Minute | DA | 0-59 | , - * / |
| Ore | DA | 0-23 | , - * / |
| Ziua din Lună | DA | 1-31 | , - * ? / L W |
| Lună | DA | 1-12 sau JAN-DEC | , - * / |
| Ziua săptămânii | DA | 1-7 sau SUN-SAT | , - * ? / L # |
| An | NU | gol, 1970-2099 | , - * / |

##### Exemple de expresii Cron

|EXPRESIE | SEMNIFICAȚIE |
| ------- |------|
| 1 * * * * ? | Execută în secunda numărul 1 a fiecărui minut. |
| 0 0 12 * * ? | Începe la 12:00 în fiecare zi |
| 0 15 10 ? * * | Începe la 10:15 în fiecare zi |
| 0 15 10 * * ? | Începe la 10:15 în fiecare zi |
| 0 15 10 * * ? * | Începe la 10:15 în fiecare zi |
| 0 15 10 * * ? 2005 | Începe la 10:15 în fiecare zi în timpul anului 2005 |
| 0 * 14 * * ? | Începe la fiecare minut, începând cu 14:00 și se termină la 14:59, în fiecare zi |
| 0 0/5 14 * * ? | Începe la fiecare 5 minute, începând cu 14:00 și se termină la 14:55, în fiecare zi |
| 0 0/5 14,18 * * ? | Începe la fiecare 5 minute, începând cu 14:00 și se termină la 14:55. Ulterior, începe la fiecare 5 minute, începând cu 18:00 și se termină la 18:55, în fiecare zi |
| 0 0-5 14 * * ? | Începe la fiecare minut, începând cu 14:00 și se termină la 14:05, în fiecare zi |
| 0 10,44 14 ? 3 WED | Începe la 14:10 și la 14:44 în fiecare miercuri din luna martie. |
| 0 15 10 ? * MON-FRI | Începe la 10:15 în fiecare zi lucrătoare (de luni până vineri) |
| 0 15 10 15 * ? | Începe la 10:15 în ziua 15 a fiecărei luni |
| 0 15 10 L * ? | Începe la 10:15 în ultima zi a fiecărei luni |
| 0 15 10 L-2 * ? | Începe la 10:15 în penultima zi a fiecărei luni |
| 0 15 10 ? * 6L | Începe la 10:15 în ultima vineri a fiecărei luni |
| 0 15 10 ? * 6L 2002-2005 | Începe la 10:15 în fiecare ultimă vineri a fiecărei luni în timpul anilor 2002, 2003, 2004 și 2005 |
| 0 15 10 ? * 6#3 | Începe la 10:15 în a treia vineri a fiecărei luni |
| 0 0 12 1/5 * ? | Începe la 12:00 la fiecare 5 zile ale fiecărei luni, începând cu prima zi a fiecărei luni. |
| 0 11 11 11 11 ? | Începe în fiecare 11 noiembrie la 11:11. |

> Configurarea nu trebuie să înceapă niciodată cu `*`; aceasta va provoca execuția în fiecare secundă, generând astfel complicații de performanță cu efect de bulgăre de zăpadă în cazul în care procesarea durează mai mult de 1 secundă.

## Serviciu

Serviciile programate trebuie programate în folderul:

- 📂 `server/services/jobs`

Netuno va executa automat aceste servicii și realizează validarea parametrului `secret` cu valoarea care este în configurare.

> `secret` servește pentru ca serviciul să fie executat extern fără autentificare, dar în mod sigur.

Serviciul va fi executat periodic în conformitate cu parametrizarea definită.

Pentru a testa manual execuția serviciului, este suficient să executați URL-ul direct al serviciului și să transmiteți parametrul `secret`.

De exemplu, prin GET:

- http://aplicatia-mea.local.netu.no:9000/services/job/job-meu?secret=\*\*\*\*\*

Locul `*****` de la sfârșitul URL-ului trebuie înlocuit cu valoarea reală configurată a `secret`.

## Exemplu

Creați fișierul în:

- 📂 `server/services/jobs/test.js`

În acest fișier de serviciu puneți următorul cod:
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

La executarea serverului Netuno în terminal, va începe să apară mesajul `Job de test!` din 30 în 30 de secunde.

Dacă deschideți în browser URL-ul:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

Va returna doar `Ok` și în terminal va apărea mesajul `Job de test!`.

> În mediul `development` validarea `secret` nu are efect, deci puteți executa fără a transmite vreun `secret` și va funcționa, dar în alt mediu, cum ar fi producția, este deja luată în considerare.

## Multe Sarcini

Când este nevoie să se creeze multe sarcini programate, este indicat să se mărească numărul de thread-uri utilizate pentru execuția paralelă a diverselor sarcini programate.

Această configurare se face în fișierul `config.js` care se află în rădăcina Netuno, adăugând linia de exemplu:

```javascript
config.cronThreadCount = 10
```

> În mod implicit, această configurare permite doar 3 thread-uri.
> 
> Trebuie să aveți în vedere să măriți numărul de thread-uri în funcție de numărul de nuclee ale CPU.

Utilizarea puținelor thread-uri pentru a executa multe programări paralele poate duce la oprirea execuției sarcinilor programate.

Prin urmare, dacă există cazuri în care sarcinile rămân blocate după un timp, probabil se execută prea multe sarcini în paralel, atunci este necesar să se mărească numărul de thread-uri.

## Programatic

Netuno permite configurarea și controlul Cron Jobs programatic.

Aceasta înseamnă că prin cod putem gestiona totul.

### Crearea unei noi sarcini

Pentru a crea o nouă sarcină, creăm programarea acesteia prin [`_cron.schedule`](/docs/library/resources/cron#schedule).

Metoda [`_cron.schedule`](/docs/library/resources/cron#schedule) primește următorii parametri:

1. Cheia de identificare a sarcinii: `key`.
2. Configurarea timpului de programare pentru execuție.
3. Adresa serviciului care trebuie executat, adică: `URL`.
4. Parametri suplimentari care sunt trimiși în apelul serviciului.

```javascript
_cron.schedule(
    'sarcina-mea',
    '0 0/60 * * * ?',
    `/services/jobs/actualizeaza-produs`,
    _val.map()
        .set('id', 123)
)
```

Dacă este necesar să creați sarcinile automat la inițializarea aplicației, atunci acest automatism poate fi codificat în fișierul:

- `server/core/_init.js`

Unde acest fișier este executat de fiecare dată când aplicația este inițializată de serverul Netuno.

### Eliminarea sarcinii

Pentru a elimina o anumită sarcină folosim [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Unde `key` este cheia de identificare a sarcinii.

Vedeți exemplul:

```javascript
_cron.remove('sarcina-mea')
```

### Listarea sarcinilor

Prin [`_cron.schedules()`](/docs/library/resources/cron#schedules) putem lista toate sarcinile configurate.

Exemplu de listare a tuturor sarcinilor programate: 

```javascript
const list = _cron.schedules()
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
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Suspendarea sarcinilor

Prin [`_cron.pause(key)`](/docs/library/resources/cron#pause) putem suspenda execuția unei anumite sarcini.

Exemplu de suspendare a tuturor sarcinilor programate:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cheie</td>`)
_out.println(`  <td>Oprit</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Observați utilizarea `_cron.pause` în exemplul de mai sus.

### Reluarea sarcinilor

Prin [`_cron.resume(key)`](/docs/library/resources/cron#resume) putem relua execuția unei anumite sarcini.

Exemplu de reluare a tuturor sarcinilor programate și afișarea momentului când sarcinile vor fi executate:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cheie</td>`)
_out.println(`  <td>Reactivat</td>`)
_out.println(`  <td>Următoarea execuție</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Observați utilizarea `_cron.resume` în exemplul de mai sus.