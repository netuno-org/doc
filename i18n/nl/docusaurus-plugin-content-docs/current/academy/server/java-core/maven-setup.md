---
id: maven-setup
title: Projectconfiguratie met Apache Maven
sidebar_label: Configuratie met Maven
sidebar_position: 3
---

## Vereisten

In dit voorbeeld gebruiken we <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, klik daarom op de vorige link voor informatie over hoe je het installeert.

Je moet ook Java geïnstalleerd hebben.

Installeer het Netuno-platform. Het Java-project wordt geïntegreerd met het vooraf geïnstalleerde Netuno-platform.

## Codepakket

Zoals standaard is in Java, moet de code altijd een `package` hebben.

Je `package` moet worden geregistreerd in het globale configuratiebestand van Netuno:

- `netuno/config.js`

Voeg aan het einde de volgende code toe:

```javascript
config.packagesScan.add("mijn.project.java")
```

Als je pakket niet op deze manier aan de configuratie wordt toegevoegd, wordt je project nooit geladen, omdat Netuno alleen naar resources en services zoekt in eerder toegevoegde pakketten.

Een alternatief om te voorkomen dat je het pakket in de configuratie registreert, is Java-pakketten gebruiken die met `org.netuno` beginnen.

Netuno zoekt automatisch naar resources en services in pakketten die met `org.netuno` beginnen.

> Het is aanbevolen om het voorvoegsel te gebruiken: `org.netuno.addon`

We kunnen bijvoorbeeld gebruiken: `org.netuno.addon.rekenmachine`

Het pakketvoorvoegsel `org.netuno.addon` geeft aan dat het gaat om functionaliteit die extern is toegevoegd en geen deel uitmaakt van Netuno zelf.

Daarom moet al je Java-code die met Netuno integreert, worden gedefinieerd en gebouwd in:

- `org.netuno.addon.mijn.project`

Voeg na `org.netuno.addon` de identificatie van je project toe.

## POM-configuratie

Netuno heeft veel afhankelijkheden in JAR-formaat, dus het is nodig om deze afhankelijkheden in de POM te definiëren. Omdat de POM het niet ondersteunt om een hele map op te nemen en het schrijven van elke afhankelijkheid omslachtig en vervelend zou zijn, maken we een JavaScript-script om de POM te genereren.

### Voorbereidingen

Maak de map van je project, waar de Java-klassen worden geschreven. Voor ons voorbeeld gebruiken we `Rekenmachine`:

```bash
mkdir Rekenmachine
```

Maak het bestand `genereer-pom.js`. In dit bestand beginnen we met het definiëren van enkele variabelen die in de loop van het script worden gebruikt. `NETUNO_DIR` moet de hoofdmap zijn waar Netuno is geïnstalleerd. `PROJECT_DIR` is de map waar je je globale resource- en serviceklassen schrijft. En `PACKAGE` moet gelijk zijn aan de pakketnaam zoals in de vorige stappen is gedefinieerd. Selecteer ook de Java-versie met `JAVA_VERSION`. De paden moeten absolute paden zijn:

```js
const NETUNO_DIR = '/pad/naar/netuno';
const PROJECT_DIR = '/Projecten/Netuno/Rekenmachine';
const PACKAGE = 'org.netuno.addon.rekenmachine';
const JAVA_VERSION = 25;
```

Nu initialiseren we de basisstructuur van `pom.xml`:

```js
const packageArray = PACKAGE.split(".");
const ARTIFACT_ID = packageArray.slice(-1);
const GROUP_ID = packageArray.slice(0, packageArray.length - 1).join(".");

let pomContent = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${GROUP_ID}</groupId>
    <artifactId>${ARTIFACT_ID}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${JAVA_VERSION}</maven.compiler.source>
        <maven.compiler.target>${JAVA_VERSION}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Afhankelijkheden

Daarna maken we de functie die de mappen doorzoekt en voor elk JAR-afhankelijkheidsbestand van Netuno een `<dependency>`-tag genereert:

```js
function mapDirectory(folder, groupSuffix) {
    let dependenciesXml = '';
    try {
        const files = readdirSync(folder);
        for (const file of files) {
            const fullPath = join(folder, file);
            if (statSync(fullPath).isFile() && extname(file) === '.jar') {
                const baseName = basename(file, '.jar');
                dependenciesXml += `
        <dependency>
            <groupId>org.netuno.${groupSuffix}</groupId>
            <artifactId>${baseName}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${fullPath}</systemPath>
        </dependency>`;
            }
        }
    } catch (error) {
        console.error(`Fout bij het lezen van map ${folder}:`, error.message);
    }
    return dependenciesXml;
}
```

We gebruiken deze functie om de twee afhankelijkheidsmappen in kaart te brengen:

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

En om de afhankelijkheden samen met `netuno.jar` in de POM te injecteren:

```js
pomContent += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${NETUNO_DIR}/netuno.jar</systemPath>
        </dependency>
        ${coreDependencies}
        ${webDependencies}
    </dependencies>
  `;
```

### JAR-bestand

We moeten de doelmap voor de JAR-bestanden definiëren. Deze stap is nodig zodat we de optie hebben om ons project naar een JAR-bestand te compileren:

```js
pomContent += `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.4.2</version>
                <configuration>
                    <outputDirectory>${NETUNO_DIR}/lib</outputDirectory>
                </configuration>
            </plugin>
  `;
```

### Opschonen

Nu moeten we Maven configureren zodat het commando `mvn clean` de juiste bestanden verwijdert wanneer het wordt aangeroepen:

```js
const PACKAGE_PATH = PACKAGE.replaceAll(".", "/");
pomContent += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${NETUNO_DIR}/lib</directory>
                            <includes>
                                <include>${ARTIFACT_ID}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${NETUNO_DIR}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${PACKAGE_PATH}/**</include>
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

### Profiel

Zodat we kunnen kiezen tussen het project compileren en `.class`-bestanden genereren of `.jar`-bestanden genereren, moeten we een afzonderlijk profiel maken en de compiler met het juiste pad configureren. En hiermee ronden we de inhoud van de POM af:

```js
pomContent += `
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
                            <outputDirectory>${NETUNO_DIR}/core/web/WEB-INF/classes</outputDirectory>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>`;
```

### Afronden

Ten slotte schrijven we het resultaat naar het bestand `pom.xml`:

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`Configuratie voltooid. Het pom.xml-bestand is bijgewerkt op: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("Fout bij het schrijven van pom.xml:", error);
}
```

Voer dit commando in de hoofdmap van je project uit om de POM te genereren:

```bash
bun genereer-pom.js
```

Je kunt het volledige POM-generatiescript via deze [link](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js) bekijken.

## Compilatie

Nu kun je je project compileren met:

```bash
mvn clean compile -Pdev
```

Of JAR-bestanden genereren, wat de distributie van de code naar andere Netuno-instanties op andere computers vergemakkelijkt, met:

```bash
mvn clean package
```

Om de bestanden die door de commando's `compile` en `package` zijn gegenereerd op te schonen:

```bash
mvn clean
```

### JAR-bestand publiceren

Het gemaakte JAR-bestand kan worden gedistribueerd en op elk ander Netuno-platform worden geplaatst.

Op elk geïnstalleerd Netuno-platform moet dit JAR-bestand in de map `lib` in de hoofdmap van Netuno worden geplaatst:

- `netuno/lib`

Let op: deze map bestaat standaard niet, dus het kan nodig zijn om deze aan te maken.

Alle JAR-bestanden in deze map worden automatisch geladen op het Netuno-platform.

## Uitvoering

Start Netuno normaal om het project uit te voeren:

```bash
./netuno server app=rekenmachine
```

De app moet eerst worden aangemaakt met het commando: `./netuno app`.

## Conclusie

We hebben gezien hoe je een nieuw Java-project maakt om nieuwe gedragingen aan de kern van Netuno toe te voegen.

We hebben ook de best practices gezien voor het genereren van het JAR-bestand en hoe je dit in de map `netuno/lib` distribueert.

Alle Java-programmeertechnieken en -bibliotheken kunnen worden gebruikt om elk type functionaliteit in Netuno te creëren.

Met name het maken van een low-code programmeerresource die beschikbaar is voor alle ondersteunde scripttalen, zoals:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

Bekijk in de volgende tutorials hoe je je eerste low-code programmeerresource maakt.

En ook hoe je je eerste multi-applicatieve webservice maakt, beschikbaar in alle applicaties die in Netuno zijn geconfigureerd.