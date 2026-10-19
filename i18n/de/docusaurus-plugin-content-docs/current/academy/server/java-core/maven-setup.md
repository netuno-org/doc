---
id: maven-setup
title: Projektkonfiguration mit Apache Maven
sidebar_label: Konfiguration mit Maven
sidebar_position: 3
---

## Voraussetzungen

In diesem Beispiel verwenden wir <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>. Klicken Sie daher auf den vorherigen Link, um Informationen zur Installation zu erhalten.

Außerdem müssen Sie Java installiert haben.

Installieren Sie die Netuno-Plattform. Das Java-Projekt wird in die vorinstallierte Netuno-Plattform integriert.

## Codepaket

Wie in Java üblich, muss der Code immer ein `package` haben.

Ihr `package` muss in der globalen Konfigurationsdatei von Netuno registriert werden:

- `netuno/config.js`

Fügen Sie am Ende den folgenden Code hinzu:

```javascript
config.packagesScan.add("mein.projekt.java")
```

Wenn Ihr Paket nicht auf diese Weise in der Konfiguration hinzugefügt wird, wird Ihr Projekt niemals geladen, da Netuno nur in zuvor hinzugefügten Paketen nach Ressourcen und Diensten sucht.

Eine Alternative, um die Registrierung des Pakets in der Konfiguration zu vermeiden, ist die Verwendung von Java-Paketen, die mit `org.netuno` beginnen.

Netuno sucht automatisch nach Ressourcen und Diensten, die sich in Paketen befinden, die mit `org.netuno` beginnen.

> Es wird empfohlen, das Präfix `org.netuno.addon` zu verwenden.

Zum Beispiel können wir `org.netuno.addon.rechner` verwenden.

Das Paketpräfix `org.netuno.addon` kennzeichnet, dass es sich um eine von außen hinzugefügte Funktionalität handelt, die nicht Teil von Netuno selbst ist.

Daher sollte Ihr gesamter Java-Code, der mit Netuno integriert wird, definiert und aufgebaut werden in:

- `org.netuno.addon.mein.projekt`

Fügen Sie nach `org.netuno.addon` die Kennung Ihres Projekts hinzu.

## POM-Konfiguration

Netuno hat viele Abhängigkeiten im JAR-Format, daher müssen diese Abhängigkeiten innerhalb des POM definiert werden. Da das POM keine Unterstützung dafür bietet, einen ganzen Ordner einzubinden, und das Schreiben jeder einzelnen Abhängigkeit mühsam und langwierig wäre, erstellen wir ein JavaScript-Skript, um das POM zu erzeugen.

### Vorbereitungen

Erstellen Sie den Ordner Ihres Projekts, in dem die Java-Klassen geschrieben werden. Für unser Beispiel verwenden wir `Rechner`:

```bash
mkdir Rechner
```

Erstellen Sie die Datei `pom-generieren.js`. Beginnen Sie in dieser Datei damit, einige Variablen zu definieren, die im gesamten Skript verwendet werden. `NETUNO_VERZEICHNIS` muss der Stammordner sein, in dem Netuno installiert ist. `PROJEKT_VERZEICHNIS` ist das Verzeichnis, in dem Sie Ihre globalen Ressourcen- und Dienstklassen schreiben werden. Und `PAKET` muss dem Paketnamen entsprechen, wie in den vorherigen Schritten definiert. Wählen Sie außerdem die Java-Version mit `JAVA_VERSION` aus. Die Pfade müssen absolute Pfade sein:

```js
const NETUNO_VERZEICHNIS = '/pfad/zum/netuno';
const PROJEKT_VERZEICHNIS = '/Projekte/Netuno/Rechner';
const PAKET = 'org.netuno.addon.rechner';
const JAVA_VERSION = 25;
```

Nun initialisieren wir die Basisstruktur der `pom.xml`:

```js
const paketArray = PAKET.split(".");
const ARTEFAKT_ID = paketArray.slice(-1);
const GRUPPEN_ID = paketArray.slice(0, paketArray.length - 1).join(".");

let pomInhalt = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${GRUPPEN_ID}</groupId>
    <artifactId>${ARTEFAKT_ID}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${JAVA_VERSION}</maven.compiler.source>
        <maven.compiler.target>${JAVA_VERSION}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Abhängigkeiten

Danach erstellen wir die Funktion, die die Verzeichnisse durchsucht und für jede JAR-Abhängigkeitsdatei von Netuno ein `<dependency>`-Tag erzeugt:

```js
function verzeichnisZuordnen(ordner, gruppenSuffix) {
    let abhaengigkeitenXml = '';
    try {
        const dateien = readdirSync(ordner);
        for (const datei of dateien) {
            const vollerPfad = join(ordner, datei);
            if (statSync(vollerPfad).isFile() && extname(datei) === '.jar') {
                const basisName = basename(datei, '.jar');
                abhaengigkeitenXml += `
        <dependency>
            <groupId>org.netuno.${gruppenSuffix}</groupId>
            <artifactId>${basisName}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${vollerPfad}</systemPath>
        </dependency>`;
            }
        }
    } catch (fehler) {
        console.error(`Fehler beim Lesen des Verzeichnisses ${ordner}:`, fehler.message);
    }
    return abhaengigkeitenXml;
}
```

Wir verwenden diese Funktion, um die beiden Abhängigkeitsverzeichnisse zuzuordnen:

```js
const kernAbhaengigkeiten = verzeichnisZuordnen(join(NETUNO_VERZEICHNIS, 'core', 'lib'), 'core');
const webAbhaengigkeiten = verzeichnisZuordnen(join(NETUNO_VERZEICHNIS, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

Und fügen die Abhängigkeiten zusammen mit `netuno.jar` in das POM ein:

```js
pomInhalt += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${NETUNO_VERZEICHNIS}/netuno.jar</systemPath>
        </dependency>
        ${kernAbhaengigkeiten}
        ${webAbhaengigkeiten}
    </dependencies>
  `;
```

### JAR-Datei

Wir müssen das Zielverzeichnis für die JAR-Dateien definieren. Dieser Schritt ist erforderlich, damit wir die Möglichkeit haben, unser Projekt in eine JAR-Datei zu kompilieren:

```js
pomInhalt += `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.4.2</version>
                <configuration>
                    <outputDirectory>${NETUNO_VERZEICHNIS}/lib</outputDirectory>
                </configuration>
            </plugin>
  `;
```

### Bereinigung

Jetzt müssen wir Maven so konfigurieren, dass der Befehl `mvn clean` beim Aufruf die richtigen Dateien löscht:

```js
const PAKET_PFAD = PAKET.replaceAll(".", "/");
pomInhalt += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${NETUNO_VERZEICHNIS}/lib</directory>
                            <includes>
                                <include>${ARTEFAKT_ID}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${NETUNO_VERZEICHNIS}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${PAKET_PFAD}/**</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                    </filesets>
                </configuration>
            </plugin>
        </plugins>
    </build>
  `;
```

### Profil

Damit wir wählen können, ob wir das Projekt durch Erzeugen von `.class`-Dateien kompilieren oder `.jar`-Dateien erzeugen, müssen wir ein separates Profil erstellen und den Compiler mit dem richtigen Pfad konfigurieren. Damit schließen wir den Inhalt des POM ab:

```js
pomInhalt += `
    <profiles>
        <profile>
            <id>dev</id>
            <build>
                <plugins>
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-compiler-plugin</artifactId>
                        <version>3.13.0</version>
                        <configuration>
                            <outputDirectory>${NETUNO_VERZEICHNIS}/core/web/WEB-INF/classes</outputDirectory>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>`;
```

### Abschluss

Abschließend schreiben wir das Ergebnis in die Datei `pom.xml`:

```js
try {
    writeFileSync(`${PROJEKT_VERZEICHNIS}/pom.xml`, pomInhalt.trim() + '\n', 'utf8');
    console.log(`Konfiguration abgeschlossen. Die Datei pom.xml wurde aktualisiert unter: ${PROJEKT_VERZEICHNIS}/pom.xml`);
} catch (fehler) {
    console.error("Fehler beim Schreiben von pom.xml:", fehler);
}
```

Um das POM zu erzeugen, führen Sie diesen Befehl im Stammordner Ihres Projekts aus:

```bash
bun pom-generieren.js
```

Das vollständige Skript zur POM-Erzeugung finden Sie unter diesem [Link](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Kompilierung

Jetzt können Sie Ihr Projekt kompilieren mit:

```bash
mvn clean compile -Pdev
```

Oder JAR-Dateien erzeugen, was die Verteilung des Codes an andere Netuno-Instanzen auf anderen Computern erleichtert, mit:

```bash
mvn clean package
```

Um die von den Befehlen `compile` und `package` erzeugten Dateien zu bereinigen:

```bash
mvn clean
```

### JAR-Datei veröffentlichen

Die erstellte JAR-Datei kann verteilt und auf jeder anderen Netuno-Plattform platziert werden.

Auf jeder installierten Netuno-Plattform muss diese JAR im Ordner `lib` im Netuno-Stammverzeichnis abgelegt werden:

- `netuno/lib`

Beachten Sie, dass dieser Ordner standardmäßig nicht existiert, daher kann es notwendig sein, ihn zu erstellen.

Alle JARs in diesem Ordner werden automatisch in der Netuno-Plattform geladen.

## Ausführung

Um das Projekt auszuführen, starten Sie Netuno normal:

```bash
./netuno server app=rechner
```

Die App muss vorher mit dem Befehl `./netuno app` erstellt werden.

## Fazit

Es wurde gezeigt, wie ein neues Java-Projekt erstellt wird, um neue Verhaltensweisen im Kern von Netuno hinzuzufügen.

Wir haben auch die bewährten Verfahren zum Erzeugen der JAR-Datei und zur Verteilung im Ordner `netuno/lib` kennengelernt.

Alle Java-Programmiertechniken und -Bibliotheken können verwendet werden, um jede Art von Funktionalität in Netuno zu erstellen.

Insbesondere das Erstellen einer Low-Code-Programmierressource, die für alle unterstützten Skriptsprachen verfügbar ist, wie zum Beispiel:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

In den folgenden Tutorials erfahren Sie, wie Sie Ihre erste Low-Code-Programmierressource erstellen.

Und auch, wie Sie Ihren ersten Multi-Anwendungs-Webdienst erstellen, der in allen in Netuno konfigurierten Anwendungen verfügbar ist.