---
sidebar_position: 2
id: apps
title: Apps
---

Netuno ist ein Server für mehrere Anwendungen, der den Zugriff auf die Anwendungen über Domains und Subdomains verteilt.

Mehrere Webanwendungen, die sowohl öffentlich als auch privat sein können, da Netuno die Erstellung von Backoffices ermöglicht. Daher haben Anwendungen normalerweise immer einen privaten Zugriff, aber die öffentliche Schnittstelle ist optional.

Bei der Entwicklung mehrerer Anwendungen in Netuno können diese sowohl entkoppelt als auch auf Datenbankebene gekoppelt sein.

Das bedeutet, dass wir dieselbe Datenbank von mehreren Anwendungen gemeinsam nutzen können oder für jede Anwendung separate Datenbanken haben können.

## Entkoppelte Anwendungen in mehreren Datenbanken

Wenn es sich um Anwendungen mit völlig unterschiedlichen Anwendungsbereichen handelt, ergibt es keinen Sinn, dieselbe Datenbank gemeinsam zu nutzen.

Stellen Sie sich vor, Sie haben eine Anwendung für den Versand von Newslettern, eine weitere für die Verwaltung von Büchern und eine weitere für die Verwaltung von Lieferungen, wobei keine davon Informationen benötigt, die in einer anderen Anwendung gespeichert sind; diese sind vollständig unabhängig.

Daher gibt es keinen Grund, dieselbe Datenbank gemeinsam zu nutzen; stattdessen sollte jede ihre eigene Datenbank haben:

![Entkoppelte Anwendungen.](/docs/assets/business/apps-db-pt-desacopladas.svg "Entkoppelte Anwendungen.")

Auf diese Weise kennt keine Anwendung die in den anderen Anwendungen gespeicherten Informationen, und ihr gesamtes Funktionieren ist unabhängig von den anderen vorhandenen Anwendungen.

## Gekoppelte Anwendungen in derselben Datenbank

Wenn wir mit Anwendungen arbeiten, die Informationen gemeinsam nutzen müssen und bei denen ein großes Datenvolumen entstehen kann, ist die gemeinsame Nutzung der Datenbank die praktikabelste Lösung hinsichtlich der Performance, aber nicht die beste Lösung hinsichtlich der Sicherheit und Integrität der Daten.

Aus Gründen der Sicherheit und Integrität werden daher normalerweise große Webanwendungen erstellt, bei denen alles in einer komplexen Anwendung zentralisiert ist, die ihre ausschließliche Datenbank verwendet; falls die Anwendung externe Daten benötigt, kann sie bei Bedarf mit anderen Datenbanken und Webdiensten integriert werden.

In diesem Fall bietet Netuno bereits alle Mittel für die Entwicklung dieser Art von Anwendungen, aber auch eine gute Lösung für Anwendungen mit gemeinsam genutzter Datenbank.

Da das Hauptproblem die Sicherheit und Integrität der Daten ist, sind bei Netuno, wenn mehrere Anwendungen dieselbe Datenbank verwenden, diese automatisch auf ihre Tabellen beschränkt, die mit ihren Formularen zusammenhängen.

Es ermöglicht, das Formular und folglich seine Tabelle mit den anderen Anwendungen zu teilen, die in der Datenbank gekoppelt sind.

Stellen Sie sich das Szenario vor, in dem Sie eine Anwendung für die Kundenverwaltung, eine weitere für die Lieferantenverwaltung und eine weitere für die Rechnungsstellung haben, denn es wird sowohl zu zahlende Lieferantenrechnungen als auch zu begleichende Kundenrechnungen geben.

Die Kundenanwendung sollte keine Daten mit der Lieferantenanwendung teilen; es sind unterschiedliche Anwendungen.

Die Rechnungsstellungsanwendung muss jedoch mit beiden Anwendungen integriert werden, um die Daten der Kunden- und Lieferantenanwendung zu erhalten, damit sie die Rechnungen verknüpfen und Inkassi und Zahlungen in den verschiedenen Situationen verwalten kann.

![Gekoppelte Anwendungen.](/docs/assets/business/apps-db-pt-acopladas.svg "Gekoppelte Anwendungen.")

Um sicherzustellen, dass die Anwendungen nicht in sensible Daten der jeweils anderen eingreifen, wird außerdem empfohlen, für jede Anwendung unterschiedliche Datenbankzugänge zu verwenden; zudem können die Tabellenzugriffe über die Datenbank gesteuert werden, um unerwünschte Eingriffe zu vermeiden.

Im Übrigen führt Netuno die Kontrolle durch, um zu trennen, was zu der einen oder anderen Anwendung gehört und was zwischen ihnen geteilt wird.

## Adresse jeder Anwendung

Netuno führt automatisch die Verteilung des Zugriffs auf die Anwendungen über die Domain und Subdomain durch.

Wenn eine Anfrage bei Netuno eingeht, wird die Domain wie folgt verarbeitet:

![Beispielbild der Anwendungsadresse mit Subdomain.](/docs/assets/business/apps-subdomain.svg "Anwendungen mit Subdomain.")

Netuno sucht bis zum ersten Punkt, ob eine Anwendung mit diesem Namen existiert.

Wenn eine Anwendung mit diesem Namen existiert, dann ist dies die Anwendung, die die Anfrage erhält.

Falls keine Anwendung mit diesem Namen existiert, wird die Anfrage an die Standardanwendung (_default_) weitergeleitet.

Diese Domainauflösung funktioniert auch bei einer Sub-Subdomain, zum Beispiel:

![Beispielbild der Anwendungsadresse mit Sub-Subdomain.](/docs/assets/business/apps-sub-subdomain.svg "Anwendungen mit Sub-Subdomain.")

Das heißt, bis zum ersten Punkt wird definiert, welche Anwendung die Anfrage zur Verarbeitung erhält.

Und Netuno ermöglicht es auch, eine exakte Adresse mit Domain für die Anwendung zu definieren; es genügt, die exakte Adresse festzulegen, unter der die Anwendung funktionieren wird.

> Die Verwendung der automatischen Form zur Verarbeitung von Domains ermöglicht den Betrieb der Anwendungen in der großen Mehrheit der Fälle; falls es dennoch Situationen gibt, in denen eine völlig andere und spezifische Adresse für den Betrieb der Anwendung erforderlich ist, dann ist es notwendig, diese in ihrer Konfiguration zu definieren.