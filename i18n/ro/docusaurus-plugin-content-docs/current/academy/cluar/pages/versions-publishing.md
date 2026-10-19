---
sidebar_position: 2
id: versions-publishing
title: Versiuni și Publicare
sidebar_label: Versiuni și Publicare
---

## Versiuni

Fiecare pagină are una sau mai multe **Versiuni** (`page_version`), fiecare cu propria stare (Ciornă / Publicată). Acest lucru permite editarea unei versiuni noi a conținutului fără a afecta ceea ce este publicat — doar când versiunea este marcată ca Publicată ea devine versiunea activă a paginii.

Componentele de conținut (Banner, Conținut, Listare, Slider, Funcționalitate) aparțin întotdeauna unei versiuni specifice (`page_version_id`), nu paginii direct. Cu alte cuvinte, editarea unui component într-o versiune în ciornă nu afectează ceea ce este publicat.

## Publicare

La publicarea unei pagini, CLUAR:

1. Colectează toate componentele active ale versiunii publicate (bannere, conținuturi, listări, slidere, funcționalități, împreună cu acțiunile aferente).
2. Generează un fișier de structură în JSON cu acel conținut.
3. În producție, generează în prealabil un `index.html` static pentru URL-ul paginii (pe limbă), deja cu metaetichetele SEO și Open Graph completate — important pentru partajarea pe rețelele sociale și pentru motoarele de căutare, deoarece site-ul în sine este o SPA în React.

## Pasul următor

O modalitate comună de a crea o pagină este duplicarea unei alte pagini deja existente — vezi [Clonarea paginii](/docs/academy/cluar/pages/cloning).