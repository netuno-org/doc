---
sidebar_position: 1
id: overview
title: Prezentare generală
sidebar_label: Prezentare generală
---

CLUAR este un CMS open source, construit pe [Netuno](https://www.netuno.org/), pentru crearea de site-uri web multilingve. Componentele vizuale ale paginilor (bannere, listări, slider-uri etc.) sunt dezvoltate în ReactJS, cu [Ant Design](https://ant.design/) pentru interfață, [React Router](https://reactrouter.com/) pentru navigare și [Less](https://lesscss.org/) pentru stiluri — în timp ce conținutul (pagini, texte, imagini, limbi, meniuri) este gestionat printr-un backoffice, fără a fi nevoie de programare.

Codul este disponibil în [repositorul CLUAR pe GitHub](https://github.com/netuno-org/cluar) — contribuțiile sunt binevenite.

## Model de conținut

Conținutul CLUAR urmează structura **Pagină → Versiune → Componente**:

- Fiecare **Pagină** reprezintă un URL al site-ului (`link`), cu titlu, meniu, SEO etc.
- Fiecare pagină are una sau mai multe **Versiuni**, care permit lucrul într-o schiță fără a afecta ceea ce este deja publicat.
- În fiecare versiune intră **Componentele** de conținut — Banner, Conținut, Listare, Slider și Funcționalitate — care sunt blocurile ce apar efectiv pe pagină, fiecare cu tipul său vizual și, opțional, cu acțiuni (butoane/linkuri) asociate.

## Arhitectura proiectului

Proiectul este împărțit în patru părți:

- **`server`** — aplicația Netuno: entități de date, servicii REST și scripturile de configurare inițială (`setup`).
- **`website`** — site-ul în ReactJS care consumă datele prin REST și randează paginile.
- **`ui`** — extensii la backoffice-ul Netuno specifice CLUAR.
- **`config`** — configurare de mediu (bază de date, autentificare, setări generale).

## Pași următori

- [Instalare](/docs/academy/cluar/install)
- [Configurare](/docs/academy/cluar/configuration)
- [Componente](/docs/academy/cluar/components/overview)
- [Pagini](/docs/academy/cluar/pages/overview)
- [Limbi](/docs/academy/cluar/languages)
- [Permisiuni](/docs/academy/cluar/permissions)