---
id: maven-setup
title: 使用 Apache Maven 配置项目
sidebar_label: 使用 Maven 配置
sidebar_position: 3
---

## 前置条件

在本示例中，我们将使用 <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>，因此请点击前面的链接了解如何安装它。

你还需要安装 Java。

安装 Netuno 平台。Java 项目将与预先安装的 Netuno 平台集成。

## 代码包

与 Java 的标准做法一样，代码必须始终有一个 `package`。

你的 `package` 必须注册在 Netuno 的全局配置文件中：

- `netuno/config.js`

在末尾添加以下代码：

```javascript
config.packagesScan.add("my.project.java")
```

如果你的包没有以这种方式添加到配置中，那么你的项目将永远不会被加载，
因为 Netuno 只会在预先添加的包中查找资源和服务。

避免在配置中注册包的另一种方法是使用以 `org.netuno` 开头的 Java 包。

Netuno 会自动查找位于以 `org.netuno` 开头的包中的资源和服务。

> 建议使用前缀：`org.netuno.addon`

例如，我们可以使用：`org.netuno.addon.calc`

包前缀 `org.netuno.addon` 表示这是一个从外部添加的功能，不属于 Netuno 本身。

因此，所有与 Netuno 集成的 Java 代码都应定义并构建在：

- `org.netuno.addon.my.project`

在 `org.netuno.addon` 之后添加你的项目标识。

## POM 配置

Netuno 有许多 JAR 格式的依赖项，因此需要在 POM 中定义这些依赖项。由于 POM 不支持包含整个文件夹，而逐个编写每个依赖项既繁琐又枯燥，我们将用 JavaScript 编写一个脚本来生成 POM。

### 准备工作

创建你的项目文件夹，Java 类将写在其中。对于我们的示例，我们将使用 `Calc`：

```bash
mkdir Calc
```

创建 `generate-pom.js` 文件。在该文件中，我们先定义一些将在整个脚本中使用的变量。`NETUNO_DIR` 必须是安装 Netuno 的根目录。`PROJECT_DIR` 是你编写全局资源和服务类的目录。`PACKAGE` 必须与前面步骤中定义的包名相同。还要用 `JAVA_VERSION` 选择 Java 版本。路径必须是绝对路径：

```js
const NETUNO_DIR = '/pasta/raíz/do/netuno';
const PROJECT_DIR = '/Projects/Netuno/Calc';
const PACKAGE = 'org.netuno.addon.calc';
const JAVA_VERSION = 25;
```

现在我们来初始化 `pom.xml` 的基础结构：

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

### 依赖项

接下来，我们创建一个函数，用于扫描目录并为 Netuno 的每个 JAR 依赖文件生成一个 `<dependency>` 标签：

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
        console.error(`读取目录 ${folder} 时出错:`, error.message);
    }
    return dependenciesXml;
}
```

我们使用这个函数来映射两个依赖目录：

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

并将这些依赖项连同 `netuno.jar` 一起注入到 POM 中：

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

### JAR 文件

我们需要定义 JAR 文件的目标目录。这一步是必要的，这样我们才能选择将项目编译为一个 JAR 文件：

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

### 清理

现在我们需要配置 Maven，以便在调用 `mvn clean` 命令时删除正确的文件：

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

为了让我们可以选择将项目编译为生成 `.class` 文件或生成 `.jar` 文件，
我们需要创建一个不同的 profile 并配置编译器的正确路径。这样我们就完成了 POM 内容的编写：

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

### 完成

最后，我们将结果写入 `pom.xml` 文件：

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`配置完成。pom.xml 文件已更新至：${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("写入 pom.xml 时出错:", error);
}
```

要生成 POM，请在项目的根文件夹中执行以下命令：

```bash
bun generate-pom.js
```

你可以在该[链接](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js)中查看完整的 POM 生成脚本。

## 编译

现在你可以编译项目：

```bash
mvn clean compile -Pdev
```

或者生成 JAR 文件，这样可以更方便地将代码分发到其他计算机上的其他 Netuno 实例：

```bash
mvn clean package
```

要清理由 `compile` 和 `package` 命令生成的文件：

```bash
mvn clean
```

### 发布 JAR 文件

生成的 JAR 文件可以分发并放置到任何其他 Netuno 平台上。

在任何已安装的 Netuno 平台上，此 JAR 都应放置在 Netuno 根目录下的 `lib` 文件夹中：

- `netuno/lib`

请注意，默认情况下该文件夹并不存在，因此可能需要创建它。

该文件夹中的所有 JAR 都会自动加载到 Netuno 平台中。

## 运行

要运行项目，请正常启动 Netuno：

```bash
./netuno server app=calc
```

之前必须使用命令 `./netuno app` 创建应用。

## 结论

我们了解了如何创建一个新的 Java 项目，为 Netuno 内核添加新行为。

我们还了解了生成 JAR 文件并将其分发到 `netuno/lib` 文件夹的良好实践。

可以使用所有 Java 编程技术和库来在 Netuno 中创建任何类型的功能。

特别是创建 low-code 编程资源，这些资源可供所有支持的脚本语言使用，
例如：

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

在接下来的教程中，了解如何创建你的第一个 low-code 编程资源。

以及如何创建你的第一个多应用 Web 服务，它可以供 Netuno 中配置的所有应用使用。