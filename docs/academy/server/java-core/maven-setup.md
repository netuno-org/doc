---
id: maven-setup
title: Project Configuration with Apache Maven
sidebar_label: Configuration with Maven
sidebar_position: 3
---

## Prerequisites

In this example we will use <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, so click the previous link to get information on how to install it.

You will also need to have Java installed.

Install the Netuno platform. The Java project will be integrated with the pre-installed Netuno platform.

## Code Package

As is standard in Java, the code must always have a `package`.

Your `package` must be registered in the Netuno global configuration file:

- `netuno/config.js`

Add the following code at the end:

```javascript
config.packagesScan.add("my.java.project")
```

If your package is not added to the configuration this way, your project will never be loaded,
since Netuno only looks for resources and services in previously added packages.

An alternative to avoid registering the package in the configuration is to use Java packages starting with `org.netuno`.

Netuno automatically looks for resources and services in packages that start with `org.netuno`.

> It is recommended to use the prefix: `org.netuno.addon`

For example, we can use: `org.netuno.addon.calc`

The package prefix `org.netuno.addon` distinguishes that it is an externally added feature and is not
part of Netuno itself.

Therefore, all your Java code that integrates with Netuno must be defined and built in:

- `org.netuno.addon.my.project`

After `org.netuno.addon`, add your project's identifier.

## POM Configuration

Netuno has many dependencies in JAR format, so it is necessary to define these dependencies inside the POM. Since the POM does not support including an entire folder and writing each dependency would be laborious and tedious, we will create a JavaScript script to generate the POM.

### Preliminaries

Create your project folder, where the Java classes will be written. For our example we will use `Calc`:

```bash
mkdir Calc
```

Create the `generate-pom.js` file. Inside this file, we will start by defining some variables that will be used throughout the script. `NETUNO_DIR` must be the root folder where you have Netuno installed. `PROJECT_DIR` is the directory where you will write your global resource and service classes. And `PACKAGE` must be the same as the package name as defined in the previous steps. Also select the Java version with `JAVA_VERSION`. The paths must be absolute paths:

```js
const NETUNO_DIR = '/path/root/of/netuno';
const PROJECT_DIR = '/Projects/Netuno/Calc';
const PACKAGE = 'org.netuno.addon.calc';
const JAVA_VERSION = 25;
```

Now let's initialize the base structure of `pom.xml`:

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

### Dependencies

Next, let's create the function that scans the directories and generates a `<dependency>` tag for each Netuno dependency JAR file:

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
        console.error(`Error reading directory ${folder}:`, error.message);
    }
    return dependenciesXml;
}
```

Let's use this function to map the two dependency directories:

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

And inject the dependencies into the POM, along with `netuno.jar`:

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

### JAR File

We need to define the destination directory for the JAR files. This step is necessary so that we have the option to compile our project into a JAR file:

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

### Cleanup

Now we need to configure Maven so that the `mvn clean` command deletes the correct files when invoked:

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

### Profile

So that we can choose between compiling the project by generating `.class` files or generating `.jar` files,
we need to create a different profile and configure the compiler with the correct path. And thus we finish the POM content:

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

### Finalizing

Finally, let's write the result to the `pom.xml` file:

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`Configuration completed. The pom.xml file has been updated at: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("Error writing pom.xml:", error);
}
```

To generate the POM, run this command in your project's root folder:

```bash
bun generate-pom.js
```

You can see the complete POM generation script at this [link](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Compilation

Now you can compile your project with:

```bash
mvn clean compile -Pdev
```

Or generate JAR files, which makes it easier to distribute the code to other Netuno instances that are on other computers, with:

```bash
mvn clean package
```

To clean the files generated by the `compile` and `package` commands:

```bash
mvn clean
```

### Publishing the JAR File

The created JAR file can be distributed and placed on any other Netuno platform.

On any installed Netuno platform, this JAR must be placed in the `lib` folder at the Netuno root:

- `netuno/lib`

Note that this folder does not exist by default, so it may be necessary to create it.

All JARs found in this folder are automatically loaded into the Netuno platform.

## Execution

To run the project, start Netuno normally:

```bash
./netuno server app=calc
```

The app must first be created with the command: `./netuno app`.

## Conclusion

We have seen how to create a new Java project to add new behaviors to the Netuno core.

We also saw the best practices for generating the JAR file and how to distribute it in the `netuno/lib` folder.

All Java programming techniques and libraries can be used to create any type of functionality
in Netuno.

Especially creating a low-code programming resource that is available to all supported scripting languages,
such as:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

In the following tutorials, see how to create your first low-code programming resource.

And also how to create your first multi-application web service, available in all applications that are
configured in Netuno.