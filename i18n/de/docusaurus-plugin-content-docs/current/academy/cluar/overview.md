---
sidebar_position: 1
id: overview
title: Übersicht
sidebar_label: Übersicht
---

CLUAR ist ein Open-Source-CMS, das auf [Netuno](https://www.netuno.org/) aufbaut und der Erstellung mehrsprachiger Websites dient. Die visuellen Komponenten der Seiten (Banner, Listen, Slider usw.) werden in ReactJS entwickelt, mit [Ant Design](https://ant.design/) für die Oberfläche, [React Router](https://reactrouter.com/) für die Navigation und [Less](https://lesscss.org/) für die Stile – während die Inhalte (Seiten, Texte, Bilder, Sprachen, Menüs) über ein Backoffice verwaltet werden, ohne programmieren zu müssen.

Der Code ist im [CLUAR-Repository auf GitHub](https://github.com/netuno-org/cluar) verfügbar – Beiträge sind willkommen.

## Inhaltsmodell

Die Inhalte von CLUAR folgen der Struktur **Seite → Version → Komponenten**:

- Jede **Seite** steht für eine URL der Website (`link`) mit Titel, Menü, SEO usw.
- Jede Seite hat eine oder mehrere **Versionen**, die es ermöglichen, an einem Entwurf zu arbeiten, ohne das bereits Veröffentlichte zu beeinflussen.
- In jeder Version befinden sich die Inhalts-**Komponenten** – Banner, Inhalt, Auflistung, Slider und Funktionalität –, also die Blöcke, die tatsächlich auf der Seite erscheinen, jeweils mit ihrem visuellen Typ und optional zugeordneten Aktionen (Schaltflächen/Links).

## Projektarchitektur

Das Projekt ist in vier Teile gegliedert:

- **`server`** — die Netuno-Anwendung: Datenentitäten, REST-Dienste und die Skripte zur Erstkonfiguration (`setup`).
- **`website`** — die ReactJS-Website, die die Daten über REST bezieht und die Seiten rendert.
- **`ui`** — CLUAR-spezifische Erweiterungen für das Netuno-Backoffice.
- **`config`** — Umgebungskonfiguration (Datenbank, Authentifizierung, allgemeine Einstellungen).

## Nächste Schritte

- [Installation](/docs/academy/cluar/install)
- [Konfiguration](/docs/academy/cluar/configuration)
- [Komponenten](/docs/academy/cluar/components/overview)
- [Seiten](/docs/academy/cluar/pages/overview)
- [Sprachen](/docs/academy/cluar/languages)
- [Berechtigungen](/docs/academy/cluar/permissions)