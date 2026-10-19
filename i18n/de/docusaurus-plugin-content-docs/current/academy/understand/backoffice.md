---
sidebar_position: 1
id: backoffice
title: Backoffice
---

Bei der Entwicklung von Web- und/oder Mobile-Anwendungen ist das Konzept eines Backoffice, also der Ebene der Datenverwaltung, üblich.

Das heißt, es handelt sich um eine Ebene, normalerweise im Web, in der Benutzer aus der Geschäftsverwaltung eine Oberfläche aufrufen, die Eingriffe in die Daten ermöglicht.

Sehr häufig gibt es die folgenden Anforderungen:

- Benutzerverwaltung;
- Verwaltung von Benutzergruppen;
- Bearbeitung von Datenbankdatensätzen, angepasst an die Geschäftsregeln;
- Logs, um festzuhalten, was die Benutzer getan haben und wann;
- Zugriffsbeschränkung: Je nach Gruppe oder Benutzer dürfen bestimmte Daten nicht geändert oder sogar nicht eingesehen werden;
- Zugriff über Browser und mobile Geräte ermöglichen;
- Managementberichte erstellen;
- Ein auf das Geschäft zugeschnittenes Dashboard mit relevanten Informationen, wobei Diagramme und Tabellen angezeigt werden können;

Aus diesen und anderen Gründen ist die Entwicklung des Backoffice oft genauso aufwendig oder aufwendiger als die Entwicklung der eigentlichen Anwendung.

Außerdem ist es auch üblich, dass das Backoffice die REST-API mit Webservices bereitstellt, die die Kommunikation von Geschäftsdaten mit der eigentlichen Anwendung bzw. dem Frontend ermöglicht.

![Backoffice.](/docs/assets/business/business-backoffice.svg "Backoffice.")

Netuno bietet eine leistungsstarke Backoffice-Engine, mit der ohne Code die Datenstruktur erstellt werden kann, wobei in die Datenbank integrierte Formulare für die gängigsten Operationen wie Erstellen, Suchen, Bearbeiten und Löschen generiert werden.

Außerdem bietet es Benutzer- und Gruppenverwaltung sowie Zugriffskontrollen mit Log-Aufzeichnungen.

Es ermöglicht, mit Low-Code Dashboards, Berichte und die REST-API (Webservices) integriert mit JWT (JSON Web Token) zu erstellen.

> Da Netuno alle gängigen Funktionalitäten bereits bereitstellt, um sie entsprechend dem Geschäftsmodell anzupassen, wird der Aufwand für die Entwicklung eines maßgeschneiderten Backoffice drastisch reduziert.

## Backoffice für neue Projekte

Bei der Entwicklung neuer Projekte, insbesondere bei Anwendungen für externe Kunden, wird das Backoffice-Budget häufig vernachlässigt, das heißt, die Zeit, die in seine Entwicklung und in die Konzeption der Oberflächen investiert wird, wird nicht ausreichend berücksichtigt.

Denn es ist für den Zielkunden nicht sichtbar und kann daher in den Hintergrund treten.

Außerdem liegt das Ziel der Entscheidungsträger eher darin, das Endergebnis zu erreichen, und nicht in den internen Verwaltungsschichten, erst recht, wenn diese erhebliche Kosten verursachen.

Aber während der Entwicklung und vor allem zum Zeitpunkt der Tests ermöglicht eine Backoffice-Oberfläche eine bessere Validierung der Datenkonsistenz.

Da Netuno den Aufbau des **Datenmodells erleichtert und automatisch responsive Formulare zur Datenverwaltung in einer Weboberfläche bereitstellt**, genügt es, Netuno in der Phase der Modellierung der Datenstruktur zu verwenden, und man erhält automatisch die Backoffice-Oberfläche. Ganz einfach!

Danach können Sie sich dafür entscheiden, weiterzugehen und Dashboards, Berichte und die Webservices vollständig in Netuno zu entwickeln.

Oder Sie können aufgrund einer bestimmten Einschränkung oder Verpflichtung die Webservices und die gesamte REST-API mit einer beliebigen anderen Technologie entwickeln; dazu müssen Sie lediglich die von Netuno generierte Datenbank nutzen.

Auf jeden Fall haben Sie Netuno als Option, um den Backoffice-Bedarf zu decken.

## Backoffice für bestehende Anwendungen

Bei bereits bestehenden Anwendungen, für die kein Backoffice entwickelt wurde oder die zwar eines besitzen, dieses aber Einschränkungen aufweist.

Netuno kann sowohl zur Erweiterung des bestehenden Backoffice als auch für das fehlende Backoffice eingesetzt werden.

Da der Aufwand für die Erstellung eines Backoffice mit Netuno recht gering ist, kann sowohl ein vollständiges Backoffice in Netuno als auch nur einzelne Module umgesetzt werden.

Es liegt an der Person, über die Richtung der einzusetzenden technologischen Optionen und ihre Fantasie zu entscheiden; eines ist sicher: Es muss nicht viel komplizierter werden, wenn man an das modulare Backoffice denkt, das nach und nach entwickelt und im Laufe der Zeit nach den eigenen Vorstellungen ausgebaut wird.

Normalerweise ist die Entwicklung in Modulen sehr komplex, aber da Netuno diesen Prozess ebenfalls vereinfacht und die Entwicklung mehrerer Anwendungen auf derselben Datenbank ermöglicht, ist es auch eine ausgezeichnete Lösung, um unabhängige Hilfsmodule zu entwickeln, mit denen ein bereits bestehendes Backoffice erweitert werden kann, ohne das bestehende Backoffice zu beeinträchtigen.

Da Netuno problemlos mehrere Datenbanken in derselben Anwendung integriert und verwalten kann, ist es einfach, Informationen in eine andere Datenbank zu importieren und zu exportieren.

So lässt sich die Komplexität des Backoffice besser von den Netuno-Anwendungen trennen, die wie zusätzliche "Module" zum bestehenden Backoffice fungieren.

## Fazit

Zweifellos ist eines der Hauptziele von Netuno, die Entwicklung von Backoffices so weit wie möglich zu vereinfachen und die Integration sowohl in bestehende Projekte als auch in neue Projekte zu ermöglichen, in denen es sich gut mit anderen Technologien integrieren lässt.

Netuno ist keine geschlossene Plattform, auf der die gesamte Entwicklung künftig in Netuno erfolgen muss; ganz im Gegenteil, Netuno kann einfach eingesetzt werden, um punktuelle Anforderungen zu erfüllen und die folgenden Einschränkungen zu überwinden:

- Kosten
- Zeit

Dadurch kann es mit jeder anderen Technologie integriert werden.

Wenn das Problem also fehlendes Geld oder ein zu knapper Liefertermin ist und obendrein eine hohe Komplexität sowie mehrere integrierte Technologien vorliegen, sollte Netuno als eine weitere Technologie betrachtet werden, die das Kosten- und Zeitproblem löst, um das Leben zu erleichtern.