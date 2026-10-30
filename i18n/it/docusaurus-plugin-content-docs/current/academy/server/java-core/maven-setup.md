---
id: maven-setup
title: Configurazione del Progetto con Apache Maven
sidebar_label: Configurazione con Maven
sidebar_position: 3
---

## Prerequisiti

In questo esempio utilizzeremo <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, quindi clicca sul link precedente per ottenere informazioni su come installarlo.

Dovrai avere installato anche Java.

Installa la piattaforma Netuno. Il progetto in Java sarà integrato con la piattaforma Netuno preinstallata.

## Pacchetto del Codice

Come è standard in Java, il codice deve avere sempre un `package`.

Il tuo `package` deve essere registrato nel file di configurazione globale di Netuno:

- `netuno/config.js`

Aggiungi alla fine il seguente codice:

```javascript
config.packagesScan.add("mio.progetto.java")
```

Se il tuo pacchetto non viene aggiunto alla configurazione in questo modo, il tuo progetto non verrà mai caricato,
poiché Netuno cerca risorse e servizi solo nei pacchetti aggiunti in precedenza.

Un'alternativa per evitare di registrare il pacchetto nella configurazione è utilizzare pacchetti Java che iniziano con `org.netuno`.

Netuno cerca automaticamente risorse e servizi che si trovano in pacchetti che iniziano con `org.netuno`.

> È consigliato utilizzare il prefisso: `org.netuno.addon`

Ad esempio, possiamo utilizzare: `org.netuno.addon.calcolo`

Il prefisso di pacchetto `org.netuno.addon` indica che si tratta di una funzionalità aggiunta esternamente e che non fa
parte di Netuno stesso.

Pertanto, tutto il tuo codice Java che si integra con Netuno deve essere definito e compilato in:

- `org.netuno.addon.mio.progetto`

Dopo `org.netuno.addon` aggiungi l'identificazione del tuo progetto.

## Configurazione del POM

Netuno ha molte dipendenze in formato JAR, quindi è necessario definirle all'interno del POM. Poiché il POM non supporta l'inclusione di un'intera cartella e scrivere ogni dipendenza sarebbe laborioso e noioso, creeremo uno script in JavaScript per generare il POM.

### Preliminari

Crea la cartella del tuo progetto, dove verranno scritte le classi Java. Per il nostro esempio utilizzeremo `Calcolo`:

```bash
mkdir Calcolo
```

Crea il file `genera-pom.js`. All'interno di questo file, inizieremo definendo alcune variabili che saranno utilizzate nel corso dello script. `DIR_NETUNO` deve essere la cartella radice in cui hai installato Netuno. `DIR_PROGETTO` è la directory in cui scriverai le tue classi di risorse e servizi globali. E `PACCHETTO` deve essere uguale al nome del pacchetto come definito nei passaggi precedenti. Seleziona anche la versione di Java con `VERSIONE_JAVA`. I percorsi devono essere percorsi assoluti:

```js
const DIR_NETUNO = '/percorso/radice/di/netuno';
const DIR_PROGETTO = '/Progetti/Netuno/Calcolo';
const PACCHETTO = 'org.netuno.addon.calcolo';
const VERSIONE_JAVA = 25;
```

Ora inizializziamo la struttura di base del `pom.xml`:

```js
const arrayPacchetto = PACCHETTO.split(".");
const ID_ARTEFATTO = arrayPacchetto.slice(-1);
const ID_GRUPPO = arrayPacchetto.slice(0, arrayPacchetto.length - 1).join(".");

let contenutoPom = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${ID_GRUPPO}</groupId>
    <artifactId>${ID_ARTEFATTO}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${VERSIONE_JAVA}</maven.compiler.source>
        <maven.compiler.target>${VERSIONE_JAVA}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Dipendenze

Poi creeremo la funzione che analizza le directory e genera un tag `<dependency>` per ogni file JAR di dipendenza di Netuno:

```js
function mappaDirectory(cartella, suffissoGruppo) {
    let xmlDipendenze = '';
    try {
        const elencoFile = readdirSync(cartella);
        for (const file of elencoFile) {
            const percorsoCompleto = join(cartella, file);
            if (statSync(percorsoCompleto).isFile() && extname(file) === '.jar') {
                const nomeBase = basename(file, '.jar');
                xmlDipendenze += `
        <dependency>
            <groupId>org.netuno.${suffissoGruppo}</groupId>
            <artifactId>${nomeBase}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${percorsoCompleto}</systemPath>
        </dependency>`;
            }
        }
    } catch (errore) {
        console.error(`Errore durante la lettura della directory ${cartella}:`, errore.message);
    }
    return xmlDipendenze;
}
```

Utilizzeremo questa funzione per mappare le due directory di dipendenze:

```js
const dipendenzeCore = mappaDirectory(join(DIR_NETUNO, 'core', 'lib'), 'core');
const dipendenzeWeb = mappaDirectory(join(DIR_NETUNO, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

E inserire le dipendenze nel POM, insieme a `netuno.jar`:

```js
contenutoPom += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${DIR_NETUNO}/netuno.jar</systemPath>
        </dependency>
        ${dipendenzeCore}
        ${dipendenzeWeb}
    </dependencies>
  `;
```

### File JAR

Dobbiamo definire la directory di destinazione per i file JAR. Questo passaggio è necessario per avere l'opzione di compilare il nostro progetto in un file JAR:

```js
contenutoPom += `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.4.2</version>
                <configuration>
                    <outputDirectory>${DIR_NETUNO}/lib</outputDirectory>
                </configuration>
            </plugin>
  `;
```

### Pulizia

Ora dobbiamo configurare Maven affinché il comando `mvn clean` elimini i file corretti quando viene invocato:

```js
const PERCORSO_PACCHETTO = PACCHETTO.replaceAll(".", "/");
contenutoPom += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${DIR_NETUNO}/lib</directory>
                            <includes>
                                <include>${ID_ARTEFATTO}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${DIR_NETUNO}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${PERCORSO_PACCHETTO}/**</include>
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

### Profilo

Per poter scegliere tra compilare il progetto generando file `.class` o generare file `.jar`,
dobbiamo creare un profilo diverso e configurare il compilatore con il percorso corretto. E così terminiamo il contenuto del POM:

```js
contenutoPom += `
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
                            <outputDirectory>${DIR_NETUNO}/core/web/WEB-INF/classes</outputDirectory>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>`;
```

### Finalizzazione

Infine, scriviamo il risultato nel file `pom.xml`:

```js
try {
    writeFileSync(`${DIR_PROGETTO}/pom.xml`, contenutoPom.trim() + '\n', 'utf8');
    console.log(`Configurazione completata. Il file pom.xml è stato aggiornato in: ${DIR_PROGETTO}/pom.xml`);
} catch (errore) {
    console.error("Errore durante la scrittura di pom.xml:", errore);
}
```

Per generare il POM, esegui questo comando nella cartella radice del tuo progetto:

```bash
bun genera-pom.js
```

Puoi vedere lo script completo di generazione del POM in questo [link](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Compilazione

Ora puoi compilare il tuo progetto con:

```bash
mvn clean compile -Pdev
```

Oppure generare file JAR, il che facilita la distribuzione del codice ad altre istanze di Netuno che si trovano su altri computer, con:

```bash
mvn clean package
```

Per pulire i file generati dai comandi `compile` e `package`:

```bash
mvn clean
```

### Pubblicare il File JAR

Il file JAR creato può essere distribuito e inserito in qualsiasi altra piattaforma Netuno.

In qualsiasi piattaforma Netuno installata, questo JAR deve essere inserito nella cartella `lib` nella radice di Netuno:

- `netuno/lib`

Nota che questa cartella non esiste per impostazione predefinita, quindi potrebbe essere necessario crearla.

Tutti i JAR che si trovano in questa cartella vengono caricati automaticamente nella piattaforma Netuno.

## Esecuzione

Per eseguire il progetto, avvia Netuno normalmente:

```bash
./netuno server app=calcolo
```

L'app deve essere creata prima con il comando: `./netuno app`.

## Conclusione

Abbiamo visto come creare un nuovo progetto Java per aggiungere nuovi comportamenti al nucleo di Netuno.

Abbiamo anche visto le buone pratiche per generare il file JAR e come distribuirlo nella cartella `netuno/lib`.

Tutte le tecniche e le librerie di programmazione Java possono essere utilizzate per creare qualsiasi tipo di funzionalità
in Netuno.

In particolare, creare risorse di programmazione low-code che rimangono disponibili per tutti i linguaggi di scripting supportati,
come:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

Nei tutorial successivi, scopri come creare la tua prima risorsa di programmazione low-code.

E anche come creare il tuo primo servizio web multi-applicazione, disponibile in tutte le applicazioni configurate
in Netuno.