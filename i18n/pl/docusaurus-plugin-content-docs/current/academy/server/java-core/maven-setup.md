---
id: maven-setup
title: Konfiguracja projektu z Apache Maven
sidebar_label: Konfiguracja z Maven
sidebar_position: 3
---

## Wymagania wstępne

W tym przykładzie użyjemy <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, więc kliknij powyższy link, aby uzyskać informacje o tym, jak go zainstalować.

Będziesz także potrzebować zainstalowanej Javy.

Zainstaluj platformę Netuno. Projekt w Javie zostanie zintegrowany z wcześniej zainstalowaną platformą Netuno.

## Pakiet kodu

Zgodnie ze standardem w Javie kod zawsze musi mieć `package`.

Twój `package` musi być zarejestrowany w globalnym pliku konfiguracyjnym Netuno:

- `netuno/config.js`

Dodaj na końcu następujący kod:

```javascript
config.packagesScan.add("moj.projekt.java")
```

Jeśli twój pakiet nie zostanie dodany do konfiguracji w ten sposób, twój projekt nigdy nie zostanie załadowany,
ponieważ Netuno wyszukuje zasoby i usługi tylko w pakietach wcześniej dodanych.

Alternatywą pozwalającą uniknąć rejestrowania pakietu w konfiguracji jest używanie pakietów Java zaczynających się od `org.netuno`.

Netuno automatycznie wyszukuje zasoby i usługi, które znajdują się w pakietach zaczynających się od `org.netuno`.

> Zaleca się używanie prefiksu: `org.netuno.addon`

Na przykład możemy użyć: `org.netuno.addon.kalkulator`

Prefiks pakietu `org.netuno.addon` odróżnia funkcjonalność dodaną z zewnątrz, która nie jest
częścią samego Netuno.

Dlatego cały twój kod Java integrujący się z Netuno powinien być zdefiniowany i zbudowany w:

- `org.netuno.addon.moj.projekt`

Po `org.netuno.addon` dodaj identyfikację swojego projektu.

## Konfiguracja POM

Netuno ma wiele zależności w formacie JAR, dlatego trzeba zdefiniować te zależności w POM. Ponieważ POM nie obsługuje dołączania całego katalogu, a ręczne wpisywanie każdej zależności byłoby pracochłonne i nużące, utworzymy skrypt w JavaScript do wygenerowania POM.

### Wstępne kroki

Utwórz katalog swojego projektu, w którym będą zapisywane klasy Java. W naszym przykładzie użyjemy `Kalkulator`:

```bash
mkdir Kalkulator
```

Utwórz plik `generuj-pom.js`. W tym pliku zacznijmy od zdefiniowania kilku zmiennych, które będą używane w całym skrypcie. `KATALOG_NETUNO` musi wskazywać katalog główny, w którym masz zainstalowane Netuno. `KATALOG_PROJEKTU` to katalog, w którym będziesz pisać swoje klasy globalnych zasobów i usług. A `PAKIET` musi być równy nazwie pakietu zgodnie z definicją z poprzednich kroków. Wybierz także wersję Javy za pomocą `WERSJA_JAVA`. Ścieżki muszą być ścieżkami absolutnymi:

```js
const KATALOG_NETUNO = '/katalog/główny/netuno';
const KATALOG_PROJEKTU = '/Projekty/Netuno/Kalkulator';
const PAKIET = 'org.netuno.addon.kalkulator';
const WERSJA_JAVA = 25;
```

Teraz zainicjalizujmy podstawową strukturę `pom.xml`:

```js
const tablicaPakietu = PAKIET.split(".");
const ID_ARTEFAKTU = tablicaPakietu.slice(-1);
const ID_GRUPY = tablicaPakietu.slice(0, tablicaPakietu.length - 1).join(".");

let trescPom = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${ID_GRUPY}</groupId>
    <artifactId>${ID_ARTEFAKTU}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${WERSJA_JAVA}</maven.compiler.source>
        <maven.compiler.target>${WERSJA_JAVA}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Zależności

Następnie utwórzmy funkcję, która skanuje katalogi i generuje tag `<dependency>` dla każdego pliku JAR zależności Netuno:

```js
function mapujKatalog(katalog, sufiksGrupy) {
    let zaleznosciXml = '';
    try {
        const pliki = readdirSync(katalog);
        for (const plik of pliki) {
            const pelnaSciezka = join(katalog, plik);
            if (statSync(pelnaSciezka).isFile() && extname(plik) === '.jar') {
                const nazwaBazowa = basename(plik, '.jar');
                zaleznosciXml += `
        <dependency>
            <groupId>org.netuno.${sufiksGrupy}</groupId>
            <artifactId>${nazwaBazowa}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${pelnaSciezka}</systemPath>
        </dependency>`;
            }
        }
    } catch (error) {
        console.error(`Błąd odczytu katalogu ${katalog}:`, error.message);
    }
    return zaleznosciXml;
}
```

Użyjmy tej funkcji do zmapowania dwóch katalogów zależności:

```js
const zaleznosciCore = mapujKatalog(join(KATALOG_NETUNO, 'core', 'lib'), 'core');
const zaleznosciWeb = mapujKatalog(join(KATALOG_NETUNO, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

I wstrzyknijmy zależności do POM razem z `netuno.jar`:

```js
trescPom += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${KATALOG_NETUNO}/netuno.jar</systemPath>
        </dependency>
        ${zaleznosciCore}
        ${zaleznosciWeb}
    </dependencies>
  `;
```

### Plik JAR

Musimy zdefiniować katalog docelowy dla plików JAR. Ten krok jest potrzebny, aby mieć możliwość skompilowania naszego projektu do pliku JAR:

```js
trescPom += `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.4.2</version>
                <configuration>
                    <outputDirectory>${KATALOG_NETUNO}/lib</outputDirectory>
                </configuration>
            </plugin>
  `;
```

### Czyszczenie

Teraz musimy skonfigurować Maven tak, aby polecenie `mvn clean` usuwało właściwe pliki po wywołaniu:

```js
const SCIEZKA_PAKIETU = PAKIET.replaceAll(".", "/");
trescPom += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${KATALOG_NETUNO}/lib</directory>
                            <includes>
                                <include>${ID_ARTEFAKTU}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${KATALOG_NETUNO}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${SCIEZKA_PAKIETU}/**</include>
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

Aby móc wybierać między kompilacją projektu generującą pliki `.class` a generowaniem plików `.jar`,
musimy utworzyć osobny profil i skonfigurować kompilator ze właściwą ścieżką. I tak kończymy zawartość POM:

```js
trescPom += `
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
                            <outputDirectory>${KATALOG_NETUNO}/core/web/WEB-INF/classes</outputDirectory>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>`;
```

### Zakończenie

Na koniec zapiszmy wynik do pliku `pom.xml`:

```js
try {
    writeFileSync(`${KATALOG_PROJEKTU}/pom.xml`, trescPom.trim() + '\n', 'utf8');
    console.log(`Konfiguracja zakończona. Plik pom.xml został zaktualizowany w: ${KATALOG_PROJEKTU}/pom.xml`);
} catch (error) {
    console.error("Błąd zapisu pom.xml:", error);
}
```

Aby wygenerować POM, wykonaj to polecenie w katalogu głównym swojego projektu:

```bash
bun generuj-pom.js
```

Kompletny skrypt generowania POM możesz zobaczyć pod tym [linkiem](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Kompilacja

Teraz możesz skompilować swój projekt za pomocą:

```bash
mvn clean compile -Pdev
```

Możesz też wygenerować pliki JAR, co ułatwia dystrybucję kodu do innych instancji Netuno działających na innych komputerach, za pomocą:

```bash
mvn clean package
```

Aby wyczyścić pliki wygenerowane przez polecenia `compile` i `package`:

```bash
mvn clean
```

### Publikowanie pliku JAR

Utworzony plik JAR można dystrybuować i umieszczać na dowolnej innej platformie Netuno.

Na dowolnej zainstalowanej platformie Netuno ten JAR należy umieścić w katalogu `lib` w katalogu głównym Netuno:

- `netuno/lib`

Zwróć uwagę, że ten katalog domyślnie nie istnieje, więc może być konieczne jego utworzenie.

Wszystkie pliki JAR znajdujące się w tym katalogu są automatycznie ładowane na platformie Netuno.

## Uruchamianie

Aby uruchomić projekt, uruchom Netuno w zwykły sposób:

```bash
./netuno server app=kalkulator
```

Aplikację należy najpierw utworzyć poleceniem: `./netuno app`.

## Podsumowanie

Pokazano, jak utworzyć nowy projekt Java, aby dodać nowe zachowania do rdzenia Netuno.

Omówiono także dobre praktyki generowania pliku JAR i sposób dystrybucji w katalogu `netuno/lib`.

Wszystkie techniki i biblioteki programowania w Javie można wykorzystać do tworzenia dowolnego rodzaju funkcjonalności
w Netuno.

W szczególności do tworzenia zasobu programowania low-code, który jest dostępny dla wszystkich obsługiwanych języków skryptowych,
takich jak:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

W kolejnych samouczkach zobacz, jak utworzyć swój pierwszy zasób programowania low-code.

A także jak utworzyć swoją pierwszą usługę webową wieloaplikacyjną, dostępną we wszystkich aplikacjach
skonfigurowanych w Netuno.