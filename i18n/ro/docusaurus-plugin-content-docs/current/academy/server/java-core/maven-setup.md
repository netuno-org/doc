---
id: maven-setup
title: Configurarea proiectului cu Apache Maven
sidebar_label: Configurare cu Maven
sidebar_position: 3
---

## Cerințe preliminare

În acest exemplu vom folosi <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, așa că faceți clic pe linkul anterior pentru informații despre cum să îl instalați.

De asemenea, va trebui să aveți Java instalat.

Instalați platforma Netuno. Proiectul Java va fi integrat cu platforma Netuno preinstalată.

## Pachetul de cod

După cum este standard în Java, codul trebuie să aibă întotdeauna un `package`.

`package`-ul dvs. trebuie înregistrat în fișierul de configurare globală Netuno:

- `netuno/config.js`

Adăugați la final următorul cod:

```javascript
config.packagesScan.add("proiect.meu.java")
```

Dacă pachetul dvs. nu este adăugat în configurare în acest mod, atunci proiectul dvs. nu va fi niciodată încărcat, deoarece Netuno caută resurse și servicii doar în pachetele adăugate anterior.

O alternativă pentru a evita înregistrarea pachetului în configurare este să utilizați pachete Java care încep cu `org.netuno`.

Netuno caută automat resurse și servicii care se află în pachete ce încep cu `org.netuno`.

> Este recomandat să utilizați prefixul: `org.netuno.addon`

De exemplu, putem utiliza: `org.netuno.addon.calcul`

Prefixul de pachet `org.netuno.addon` distinge faptul că este o funcționalitate adăugată extern și care nu face parte din Netuno în sine.

Prin urmare, tot codul dvs. Java care se integrează cu Netuno trebuie definit și construit în:

- `org.netuno.addon.proiect.meu`

După `org.netuno.addon` adăugați identificarea proiectului dvs.

## Configurarea POM

Netuno are multe dependențe în format JAR, prin urmare este necesar să definiți aceste dependențe în POM. Deoarece POM nu acceptă includerea unei întregi foldere, iar scrierea fiecărei dependențe ar fi laborioasă și obositoare, vom face un script în JavaScript pentru a genera POM-ul.

### Preliminarii

Creați folderul proiectului dvs., unde vor fi scrise clasele Java. Pentru exemplul nostru vom folosi `Calcul`:

```bash
mkdir Calcul
```

Creați fișierul `genereaza-pom.js`. În acest fișier, vom începe prin a defini câteva variabile care vor fi folosite pe parcursul scriptului. `DIR_NETUNO` trebuie să fie folderul rădăcină unde aveți Netuno instalat. `DIR_PROIECT` este directorul unde veți scrie clasele de resurse și servicii globale. Iar `PACHET` trebuie să fie egal cu numele pachetului așa cum a fost definit în pașii anteriori. Selectați de asemenea versiunea Java cu `VERSIUNE_JAVA`. Căile trebuie să fie căi absolute:

```js
const DIR_NETUNO = '/cale/radacina/netuno';
const DIR_PROIECT = '/Proiecte/Netuno/Calcul';
const PACHET = 'org.netuno.addon.calcul';
const VERSIUNE_JAVA = 25;
```

Acum vom inițializa structura de bază a `pom.xml`:

```js
const arrayPachet = PACHET.split(".");
const ID_ARTEFACT = arrayPachet.slice(-1);
const ID_GRUP = arrayPachet.slice(0, arrayPachet.length - 1).join(".");

let continutPom = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${ID_GRUP}</groupId>
    <artifactId>${ID_ARTEFACT}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${VERSIUNE_JAVA}</maven.compiler.source>
        <maven.compiler.target>${VERSIUNE_JAVA}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Dependențe

Apoi, vom crea funcția care scanează directoarele și generează o etichetă `<dependency>` pentru fiecare fișier JAR de dependență Netuno:

```js
function mapeazaDirector(dosar, sufixGrup) {
    let dependinteXml = '';
    try {
        const fisiere = readdirSync(dosar);
        for (const fisier of fisiere) {
            const caleCompleta = join(dosar, fisier);
            if (statSync(caleCompleta).isFile() && extname(fisier) === '.jar') {
                const numeBaza = basename(fisier, '.jar');
                dependinteXml += `
        <dependency>
            <groupId>org.netuno.${sufixGrup}</groupId>
            <artifactId>${numeBaza}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${caleCompleta}</systemPath>
        </dependency>`;
            }
        }
    } catch (eroare) {
        console.error(`Eroare la citirea directorului ${dosar}:`, eroare.message);
    }
    return dependinteXml;
}
```

Vom folosi această funcție pentru a mapa cele două directoare de dependențe:

```js
const dependinteCore = mapeazaDirector(join(DIR_NETUNO, 'core', 'lib'), 'core');
const dependinteWeb = mapeazaDirector(join(DIR_NETUNO, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

Și injectăm dependențele în POM, împreună cu `netuno.jar`:

```js
continutPom += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${DIR_NETUNO}/netuno.jar</systemPath>
        </dependency>
        ${dependinteCore}
        ${dependinteWeb}
    </dependencies>
  `;
```

### Fișierul JAR

Trebuie să definim directorul destinație pentru fișierele JAR. Acest pas este necesar pentru a avea opțiunea de a compila proiectul nostru într-un fișier JAR:

```js
continutPom += `
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

### Curățarea

Acum trebuie să configurăm Maven astfel încât comanda `mvn clean` să șteargă fișierele corecte atunci când este invocată:

```js
const CALE_PACHET = PACHET.replaceAll(".", "/");
continutPom += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${DIR_NETUNO}/lib</directory>
                            <includes>
                                <include>${ID_ARTEFACT}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${DIR_NETUNO}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${CALE_PACHET}/**</include>
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

Pentru a putea alege între a compila proiectul generând fișiere `.class` sau a genera fișiere `.jar`, trebuie să creăm un profil diferit și să configurăm compilatorul cu calea corectă. Și astfel finalizăm conținutul POM-ului:

```js
continutPom += `
    <profiles>
        <profile>
            <id>dezvoltare</id>
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

### Finalizare

În final, vom scrie rezultatul în fișierul `pom.xml`:

```js
try {
    writeFileSync(`${DIR_PROIECT}/pom.xml`, continutPom.trim() + '\n', 'utf8');
    console.log(`Configurare finalizată. Fișierul pom.xml a fost actualizat la: ${DIR_PROIECT}/pom.xml`);
} catch (eroare) {
    console.error("Eroare la scrierea pom.xml:", eroare);
}
```

Pentru a genera POM-ul, executați această comandă în folderul rădăcină al proiectului dvs.:

```bash
bun genereaza-pom.js
```

Puteți vedea scriptul complet de generare a POM-ului la acest [link](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Compilare

Acum puteți compila proiectul dvs. cu:

```bash
mvn clean compile -Pdezvoltare
```

Sau generați fișiere JAR, ceea ce facilitează distribuirea codului către alte instanțe Netuno care se află pe alte calculatoare, cu:

```bash
mvn clean package
```

Pentru a curăța fișierele generate de comenzile `compile` și `package`:

```bash
mvn clean
```

### Publicarea fișierului JAR

Fișierul JAR creat poate fi distribuit și plasat în orice altă platformă Netuno.

În orice platformă Netuno instalată, acest JAR trebuie plasat în folderul `lib` din rădăcina Netuno:

- `netuno/lib`

Rețineți că acest folder nu există implicit, prin urmare poate fi necesar să îl creați.

Toate JAR-urile care se află în acest folder sunt încărcate automat în platforma Netuno.

## Execuție

Pentru a executa proiectul, porniți Netuno în mod normal:

```bash
./netuno server app=calcul
```

Aplicația trebuie creată înainte cu comanda: `./netuno app`.

## Concluzie

A fost prezentat cum să creați un nou proiect Java pentru a adăuga noi comportamente în nucleul Netuno.

De asemenea, am văzut bunele practici pentru a genera fișierul JAR și cum să îl distribuiți în folderul `netuno/lib`.

Toate tehnicile și bibliotecile de programare Java pot fi utilizate pentru a crea orice tip de funcționalitate în Netuno.

În special, creați resurse de programare low-code care devin disponibile pentru toate limbajele de script acceptate, cum ar fi:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

În tutorialele următoare, vedeți cum să creați prima dvs. resursă de programare low-code.

Și, de asemenea, cum să creați primul dvs. serviciu web multi-aplicațional, disponibil în toate aplicațiile care sunt configurate în Netuno.