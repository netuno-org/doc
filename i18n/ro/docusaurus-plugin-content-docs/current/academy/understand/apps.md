---
sidebar_position: 2
id: apps
title: Aplicații
---

Netuno este un server cu multiple aplicații care distribuie accesul la aplicații prin domenii și subdomenii.

Multiple aplicații web pot fi atât publice, cât și private, deoarece Netuno realizează construirea de backoffice-uri. Prin urmare, de regulă, aplicațiile au întotdeauna un acces privat, dar interfața publică este opțională.

Când dezvoltați multiple aplicații în Netuno, acestea pot fi fie decuplate, fie cuplate la nivel de bază de date.

Asta înseamnă că putem partaja aceeași bază de date între multiple aplicații sau putem avea baze de date separate pentru fiecare aplicație.

## Aplicații decuplate în multiple baze de date

Când este vorba de aplicații cu domenii complet diferite, nu are sens să partajeze aceeași bază de date.

Imaginați-vă că aveți o aplicație pentru trimiterea de buletine informative, alta pentru gestionarea cărților și alta pentru gestionarea livrărilor, iar niciuna nu are nevoie de informații stocate în altă aplicație; acestea sunt complet independente.

Astfel, nu există niciun motiv să partajeze aceeași bază de date, ci fiecare să aibă propria bază de date:

![Aplicații decuplate.](/docs/assets/business/apps-db-pt-desacopladas.svg "Aplicații decuplate.")

În acest fel, nicio aplicație nu cunoaște informațiile stocate în celelalte aplicații, iar întreaga sa funcționare este independentă de celelalte aplicații existente.

## Aplicații cuplate în aceeași bază de date

Când lucrăm cu aplicații care trebuie să partajeze informații și poate exista un volum mare de date, partajarea bazei de date este soluția cea mai viabilă la nivel de performanță, dar nu este cea mai bună soluție la nivel de securitate și integritate a datelor.

Astfel, din motive de securitate și integritate, de obicei sunt create aplicații web mari în care totul este centralizat într-o aplicație complexă ce utilizează propria bază de date exclusivă; dacă aplicația are nevoie de date externe, atunci poate integra cu alte baze de date și servicii web dacă este necesar.

În acest caz, Netuno oferă deja toate mijloacele pentru dezvoltarea acestui tip de aplicații, dar oferă și o soluție bună pentru aplicațiile cu bază de date partajată.

Deoarece principala problemă este securitatea și integritatea datelor, cu Netuno, atunci când mai multe aplicații utilizează aceeași bază de date, acestea sunt automat limitate la tabelele lor care sunt corelate cu formularele lor.

Permite partajarea formularului și, în consecință, a tabelului său către celelalte aplicații care sunt cuplate în baza de date.

Imaginați-vă scenariul în care aveți o aplicație pentru gestionarea clienților, alta pentru gestionarea furnizorilor și alta pentru facturare, deoarece veți avea atât facturi de la furnizori de plătit, cât și de la clienți de încasat.

Aplicația pentru clienți nu trebuie să partajeze date cu aplicația pentru furnizori; sunt aplicații distincte.

Dar aplicația de facturare trebuie să se integreze cu ambele aplicații pentru a obține datele din aplicația pentru clienți și furnizori, pentru a putea corela facturile și a gestiona încasările și plățile în diversele situații.

![Aplicații cuplate.](/docs/assets/business/apps-db-pt-acopladas.svg "Aplicații cuplate.")

Pentru a garanta că aplicațiile nu interferează cu date sensibile ale celorlalte, se recomandă, de asemenea, utilizarea unor accesări distincte la baza de date pentru fiecare aplicație și se poate controla chiar prin baza de date accesul lor la tabele pentru a garanta că nu există interferențe nedorite.

În rest, Netuno realizează controlul pentru a separa ce este al unei aplicații sau al alteia și, de asemenea, ce este partajat între ele.

## Adresa fiecărei aplicații

Netuno realizează automat distribuirea accesului la aplicații prin domeniu și subdomeniu.

Când ajunge o cerere în Netuno, domeniul este procesat după cum urmează:

![Imagine de exemplu a adresei aplicației cu subdomeniu.](/docs/assets/business/apps-subdomain.svg "Aplicații cu subdomeniu.")

Netuno caută până la primul punct dacă există o aplicație cu acest nume.

Dacă există o aplicație cu acest nume, atunci aceasta va fi aplicația care primește cererea.

Dacă nu există nicio aplicație cu acest nume, atunci cererea va fi livrată aplicației implicite (_default_).

Această rezolvare a domeniilor funcționează și atunci când este un sub-subdomeniu, de exemplu:

![Imagine de exemplu a adresei aplicației cu sub-subdomeniu.](/docs/assets/business/apps-sub-subdomain.svg "Aplicații cu sub-subdomeniu.")

Adică, până la primul punct se definește care va fi aplicația ce va primi cererea pentru a fi procesată.

Și Netuno permite, de asemenea, definirea unei adrese exacte cu domeniu pentru aplicație; este suficient să definiți care va fi adresa exactă la care va funcționa aplicația.

> Utilizarea formei automate pentru procesarea domeniilor permite funcționarea aplicațiilor în marea majoritate a cazurilor; dacă totuși există situații care necesită o adresă complet diferită și specifică pentru funcționarea aplicației, atunci este necesar să o definiți în configurația sa.