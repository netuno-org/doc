---
sidebar_position: 2
id: versions-publishing
title: Versiuni și Publicare
sidebar_label: Versiuni și Publicare
---

## Versiuni

Fiecare pagină are una sau mai multe **Versiuni** (`page_version`), fiecare cu propriul său statut (Ciornă / Publicată). Acest lucru permite editarea unei noi versiuni a conținutului fără a afecta ceea ce este publicat — doar când versiunea este marcată ca Publicată devine aceasta versiunea activă a paginii.

Componentele de conținut (Banner, Conținut, Listare, Slider, Funcționalitate) aparțin întotdeauna unei versiuni specifice (`page_version_id`), nu direct paginii. Adică, editarea unui component într-o versiune ciornă nu afectează ceea ce este publicat.

## Publicare

La publicarea unei pagini, CLUAR:

1. Colectează toate componentele active ale versiunii publicate (bannere, conținuturi, listări, slidere, funcționalități, cu acțiunile respective).
2. Generează un fișier de structură în JSON cu acel conținut.
3. În producție, pre-randează un `index.html` static pentru URL-ul paginii (pe limbă), deja cu meta tag-urile SEO și Open Graph completate — important pentru partajarea pe rețelele sociale și pentru motoarele de căutare, întrucât site-ul în sine este un SPA în React.

## Următorul pas

O modalitate comună de a crea o pagină este duplicarea alteia deja existente — vezi [Clonarea paginii](/docs/academy/cluar/pages/cloning).