---
id: maven-setup
title: Настройка проекта с Apache Maven
sidebar_label: Настройка с Maven
sidebar_position: 3
---

## Предварительные требования

В этом примере мы будем использовать <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, поэтому перейдите по предыдущей ссылке, чтобы узнать, как его установить.

Вам также понадобится установленный Java.

Установите платформу Netuno. Java-проект будет интегрирован с предварительно установленной платформой Netuno.

## Пакет кода

Как принято в Java, код всегда должен иметь `package`.

Ваш `package` должен быть зарегистрирован в глобальном конфигурационном файле Netuno:

- `netuno/config.js`

Добавьте в конец следующий код:

```javascript
config.packagesScan.add("moy.proekt.java")
```

Если ваш пакет не будет добавлен в конфигурацию таким образом, ваш проект никогда не будет загружен, поскольку Netuno ищет ресурсы и сервисы только в предварительно добавленных пакетах.

Альтернатива, позволяющая не регистрировать пакет в конфигурации, — использовать Java-пакеты, начинающиеся с `org.netuno`.

Netuno автоматически ищет ресурсы и сервисы в пакетах, начинающихся с `org.netuno`.

> Рекомендуется использовать префикс: `org.netuno.addon`

Например, можно использовать: `org.netuno.addon.kalkulyator`

Префикс пакета `org.netuno.addon` показывает, что это функциональность, добавленная извне и не являющаяся частью самого Netuno.

Следовательно, весь ваш Java-код, интегрирующийся с Netuno, должен быть определён и собран в:

- `org.netuno.addon.moy.proekt`

После `org.netuno.addon` добавьте идентификатор вашего проекта.

## Настройка POM

У Netuno много зависимостей в формате JAR, поэтому эти зависимости нужно определить внутри POM. Поскольку POM не поддерживает включение целой папки, а прописывать каждую зависимость вручную было бы трудоёмко и утомительно, мы сделаем скрипт на JavaScript для генерации POM.

### Предварительные шаги

Создайте папку вашего проекта, где будут написаны Java-классы. В нашем примере мы будем использовать `Kalkulyator`:

```bash
mkdir Kalkulyator
```

Создайте файл `sgenerirovat-pom.js`. В этом файле начнём с определения нескольких переменных, которые будут использоваться в скрипте. `NETUNO_DIR` должен быть корневой папкой, где установлен Netuno. `PROJECT_DIR` — каталог, в котором вы будете писать классы глобальных ресурсов и сервисов. А `PACKAGE` должен совпадать с именем пакета, определённым на предыдущих шагах. Также выберите версию Java в `JAVA_VERSION`. Пути должны быть абсолютными:

```js
const NETUNO_DIR = '/papka/ustanovki/netuno';
const PROJECT_DIR = '/Proekty/Netuno/Kalkulyator';
const PACKAGE = 'org.netuno.addon.kalkulyator';
const JAVA_VERSION = 25;
```

Теперь инициализируем базовую структуру `pom.xml`:

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

### Зависимости

Затем создадим функцию, которая сканирует каталоги и генерирует тег `<dependency>` для каждого JAR-файла зависимости Netuno:

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
        console.error(`Ошибка чтения каталога ${folder}:`, error.message);
    }
    return dependenciesXml;
}
```

Используем эту функцию для сопоставления двух каталогов зависимостей:

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

И добавим зависимости в POM вместе с `netuno.jar`:

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

### JAR-файл

Нужно задать каталог назначения для JAR-файлов. Этот шаг необходим, чтобы у нас была возможность скомпилировать проект в JAR-файл:

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

### Очистка

Теперь нужно настроить Maven так, чтобы команда `mvn clean` при вызове удаляла нужные файлы:

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

### Профиль

Чтобы можно было выбирать между компиляцией проекта с созданием файлов `.class` или созданием файлов `.jar`, нужно создать отдельный профиль и настроить компилятор с правильным путём. Так мы завершаем содержимое POM:

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

### Завершение

Наконец, запишем результат в файл `pom.xml`:

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`Настройка завершена. Файл pom.xml обновлён: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("Ошибка записи pom.xml:", error);
}
```

Чтобы сгенерировать POM, выполните эту команду в корневой папке вашего проекта:

```bash
bun sgenerirovat-pom.js
```

Полный скрипт генерации POM можно посмотреть по этой [ссылке](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Компиляция

Теперь вы можете скомпилировать проект командой:

```bash
mvn clean compile -Pdev
```

Или создать JAR-файлы, что упрощает распространение кода на другие экземпляры Netuno, работающие на других компьютерах, командой:

```bash
mvn clean package
```

Чтобы очистить файлы, созданные командами `compile` и `package`:

```bash
mvn clean
```

### Публикация JAR-файла

Созданный JAR-файл можно распространять и размещать на любой другой платформе Netuno.

На любой установленной платформе Netuno этот JAR нужно поместить в папку `lib` в корне Netuno:

- `netuno/lib`

Обратите внимание: по умолчанию этой папки нет, поэтому её может потребоваться создать.

Все JAR-файлы, находящиеся в этой папке, автоматически загружаются платформой Netuno.

## Запуск

Чтобы запустить проект, запустите Netuno обычным образом:

```bash
./netuno server app=kalkulyator
```

Приложение должно быть создано заранее командой: `./netuno app`.

## Заключение

Мы рассмотрели, как создать новый Java-проект для добавления нового поведения в ядро Netuno.

Также мы увидели рекомендуемые практики создания JAR-файла и его распространения в папке `netuno/lib`.

Все техники и библиотеки программирования Java можно использовать для создания любых функций в Netuno.

В частности, для создания low-code ресурсов программирования, доступных для всех поддерживаемых скриптовых языков, таких как:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

В следующих руководствах посмотрите, как создать ваш первый low-code ресурс программирования.

А также как создать ваш первый многоприложенческий веб-сервис, доступный во всех приложениях, настроенных в Netuno.