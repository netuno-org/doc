---
id: maven-setup
title: Project Setup with Apache Maven 
sidebar_label: Setup with Maven 
sidebar_position: 3
---

## Prerequisites

In this example, we are going to use <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>. Please click the previous link to get information on how to install it.

You will also need to have Java installed.

Install the Netuno platform. The Java project will be integrated with the pre-installed Netuno platform. 

## Code Package

As is standard in Java, your code must always define a `package`.

Your `package` must be registered in Netuno's global configuration file:

- `netuno/config.js`

Add the following code to the end of the file:

```javascript
config.packagesScan.add("my.project.java")
```

If your package is not added to the configuration in this manner, your project will never be loaded, as Netuno only scans for resources and services within packages that have been previously added.

An alternative to avoid registering the package in the configuration is to use Java packages that begin with `org.netuno`.

Netuno automatically searches for resources and services residing in packages that start with `org.netuno`.

> It is recommended to use the prefix: `org.netuno.addon`

For example, you can use: `org.netuno.addon.calc`

The `org.netuno.addon` package prefix explicitly distinguishes that it is an externally added feature rather than a built-in part of Netuno itself.

Consequently, all your Java code that integrates with Netuno should be defined and structured under:

- `org.netuno.addon.my.project`

Append your specific project identifier after the `org.netuno.addon` prefix.

## POM Configuration

Netuno relies on many dependencies in JAR format, so it is necessary to define these dependencies inside the POM. Since the POM does not support including an entire directory directly, and writing out each dependency manually would be laborious and tedious, we will create a JavaScript script to generate the `pom.xml` file dynamically.

### Preliminaries

Create your project folder, where the Java classes will be written. For our example, we will use `Calc`:

```bash
mkdir Calc
```

Create a file named `generate-pom.js`. Inside this file, we will start by defining a few variables that will be used throughout the script. `NETUNO_DIR` must point to the root folder where you have Netuno installed. `PROJECT_DIR` is the directory where you will write your global resource and service classes. And `PACKAGE` must match the package name defined in the previous steps. Also, select the Java version using `JAVA_VERSION`. Note that the directory paths must be absolute paths:

```js
const NETUNO_DIR = '/netuno/root/dir';
const PROJECT_DIR = '/Projects/Netuno/Calc';
const PACKAGE = 'org.netuno.addon.calc';
const JAVA_VERSION = 25;
```

Now let's initialize the base structure of the `pom.xml`:

```js
const packageArray = PACKAGE.split(".");
const ARTIFACT_ID = packageArray.slice(-1);
const GROUP_ID = packageArray.slice(0, packageArray.length - 1).join(".");

let pomContent = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="[http://maven.apache.org/POM/4.0.0](http://maven.apache.org/POM/4.0.0)"
         xmlns:xsi="[http://www.w3.org/2001/XMLSchema-instance](http://www.w3.org/2001/XMLSchema-instance)"
         xsi:schemaLocation="[http://maven.apache.org/POM/4.0.0](http://maven.apache.org/POM/4.0.0) [http://maven.apache.org/xsd/maven-4.0.0.xsd](http://maven.apache.org/xsd/maven-4.0.0.xsd)">
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

Next, we will create the function that scans the directories and generates a `<dependency>` tag for each Netuno dependency JAR file:

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

We will use this function to map both dependency directories:

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

And then inject the dependencies into the POM, along with the root `netuno.jar`:

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

We need to set the destination directory for JAR files. This step is required so that we have the option to build our project into a JAR file:

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

### Clean

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

To allow choosing between compiling the project to generate `.class` files or packaging it into `.jar` files, we need to create a dedicated profile and configure the compiler plugin with the correct output directory path. With this, we finalize the POM content:

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

Finally, let's write the result out to the `pom.xml` file:

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`Configuration completed. The pom.xml file has been updated at: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("Error writing pom.xml:", error);
}
```

To generate the `pom.xml` file, run this command in your project's root folder:

```bash
bun generate-pom.js
```

You can see the whole script for generating the POM in this [link](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Compiling

Now you can compile your project using:

```bash
mvn clean compile -Pdev
```

Or package it into JAR files, which facilitates code distribution to other Netuno instances running on different computers, using:

```bash
mvn clean package
```

To clean up the files generated by the `compile` and `package` commands, run:

```bash
mvn clean
```

### Publish the JAR File

The created JAR file can be distributed and deployed to any other Netuno platform instance.

On any installed Netuno platform, this JAR must be placed in the `lib` folder at the Netuno root directory:

- `netuno/lib`

Note that this folder does not exist by default, so it may be necessary to create it.

All JARs located in this folder are automatically loaded by the Netuno platform.

## Execution

To run the project, start Netuno normally:

```bash
./netuno server app=calc
```

The app must be created beforehand using the command: `./netuno app`.

## Conclusion

We have seen how to create a new Java project to add new behaviors to the core of Netuno.

We also covered the best practices for generating the JAR file and distributing it within the `netuno/lib` folder.

All Java programming techniques and libraries can be utilized to create any type of functionality within Netuno.

This is particularly useful for creating low-code programming resources that become available to all supported scripting languages, such as:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

In the following tutorials, learn how to create your first low-code programming resource.

You will also learn how to create your first multi-application web service, available across all applications configured in Netuno.
