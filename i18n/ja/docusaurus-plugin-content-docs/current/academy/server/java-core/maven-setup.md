---
id: maven-setup
title: Apache Maven によるプロジェクト設定
sidebar_label: Maven による設定
sidebar_position: 3
---

## 前提条件

この例では <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a> を使用するため、インストール方法については前述のリンクをクリックしてください。

Java もインストールされている必要があります。

Netuno プラットフォームをインストールしてください。Java プロジェクトは、事前にインストールされた Netuno プラットフォームと統合されます。

## コードパッケージ

Java の標準として、コードには常に `package` が必要です。

`package` は Netuno のグローバル設定ファイルに登録する必要があります:

- `netuno/config.js`

ファイルの末尾に次のコードを追加します:

```javascript
config.packagesScan.add("my.project.java")
```

この方法でパッケージを設定に追加しない場合、Netuno は事前に追加されたパッケージ内のリソースとサービスのみを検索するため、プロジェクトが読み込まれることはありません。

設定にパッケージを登録する代わりの方法として、`org.netuno` で始まる Java パッケージを使用できます。

Netuno は、`org.netuno` で始まるパッケージ内にあるリソースとサービスを自動的に検索します。

> 推奨されるプレフィックスは `org.netuno.addon` です

たとえば、`org.netuno.addon.keisan` を使用できます

パッケージプレフィックス `org.netuno.addon` は、外部から追加された機能であり、Netuno 自体の一部ではないことを区別します。

したがって、Netuno と統合するすべての Java コードは、次の場所で定義およびビルドする必要があります:

- `org.netuno.addon.my.project`

`org.netuno.addon` の後にプロジェクトの識別子を追加します。

## POM の設定

Netuno には JAR 形式の依存関係が多数あるため、それらの依存関係を POM 内で定義する必要があります。POM はフォルダ全体を含めることをサポートしておらず、各依存関係を手作業で記述するのは面倒で退屈なため、POM を生成する JavaScript スクリプトを作成します。

### 準備

Java クラスを記述するプロジェクトフォルダを作成します。この例では `Keisan` を使用します:

```bash
mkdir Keisan
```

`generate-pom.js` ファイルを作成します。このファイル内で、スクリプト全体で使用するいくつかの変数を定義することから始めます。`NETUNO_DIR` は Netuno をインストールしたルートフォルダである必要があります。`PROJECT_DIR` は、グローバルリソースとサービスのクラスを記述するディレクトリです。また、`PACKAGE` は前の手順で定義したパッケージ名と同じである必要があります。`JAVA_VERSION` で Java のバージョンも選択します。パスは絶対パスである必要があります:

```js
const NETUNO_DIR = '/path/to/netuno';
const PROJECT_DIR = '/Projects/Netuno/Keisan';
const PACKAGE = 'org.netuno.addon.keisan';
const JAVA_VERSION = 25;
```

次に、`pom.xml` の基本構造を初期化します:

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

### 依存関係

次に、ディレクトリをスキャンし、Netuno の依存関係 JAR ファイルごとに `<dependency>` タグを生成する関数を作成します:

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
        console.error(`ディレクトリの読み取りエラー ${folder}:`, error.message);
    }
    return dependenciesXml;
}
```

この関数を使用して、2 つの依存関係ディレクトリをマッピングします:

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

そして、`netuno.jar` とともに依存関係を POM に注入します:

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

### JAR ファイル

JAR ファイルの出力先ディレクトリを定義する必要があります。この手順は、プロジェクトを JAR ファイルにコンパイルするオプションを利用できるようにするために必要です:

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

### クリーンアップ

次に、`mvn clean` コマンドが呼び出されたときに正しいファイルを削除するように Maven を設定する必要があります:

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

### プロファイル

プロジェクトをコンパイルして `.class` ファイルを生成するか、`.jar` ファイルを生成するかを選択できるようにするには、別のプロファイルを作成し、コンパイラを正しいパスで設定する必要があります。これで POM の内容を完成させます:

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

### 仕上げ

最後に、結果を `pom.xml` ファイルに書き込みます:

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`設定が完了しました。pom.xml ファイルは次に更新されました: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("pom.xml の書き込みエラー:", error);
}
```

POM を生成するには、プロジェクトのルートフォルダで次のコマンドを実行します:

```bash
bun generate-pom.js
```

POM 生成スクリプトの完全版は[こちらのリンク](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js)で確認できます。

## コンパイル

これで、次のコマンドでプロジェクトをコンパイルできます:

```bash
mvn clean compile -Pdev
```

または、他のコンピュータ上にある別の Netuno インスタンスへコードを配布しやすくする JAR ファイルを生成するには、次のコマンドを実行します:

```bash
mvn clean package
```

`compile` および `package` コマンドで生成されたファイルをクリーンアップするには:

```bash
mvn clean
```

### JAR ファイルの公開

作成された JAR ファイルは、他の任意の Netuno プラットフォームに配布して配置できます。

Netuno がインストールされた任意のプラットフォームでは、この JAR を Netuno のルートにある `lib` フォルダに配置する必要があります:

- `netuno/lib`

このフォルダはデフォルトでは存在しないため、作成する必要がある場合があります。

このフォルダ内にあるすべての JAR は、Netuno プラットフォームで自動的に読み込まれます。

## 実行

プロジェクトを実行するには、Netuno を通常どおり起動します:

```bash
./netuno server app=keisan
```

アプリは事前に `./netuno app` コマンドで作成しておく必要があります。

## まとめ

Netuno のコアに新しい動作を追加するための、新しい Java プロジェクトの作成方法を見てきました。

また、JAR ファイルを生成するためのベストプラクティスと、`netuno/lib` フォルダへ配布する方法も確認しました。

Netuno で任意の種類の機能を作成するために、あらゆる Java プログラミングの手法とライブラリを使用できます。

特に、サポートされているすべてのスクリプト言語から利用できる low-code プログラミングリソースを作成できます。たとえば:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

次のチュートリアルでは、最初の low-code プログラミングリソースを作成する方法を確認してください。

また、Netuno で設定されているすべてのアプリケーションから利用できる、最初のマルチアプリケーション Web サービスを作成する方法も確認してください。