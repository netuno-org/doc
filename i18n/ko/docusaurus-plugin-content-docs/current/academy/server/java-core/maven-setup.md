---
id: maven-setup
title: Apache Maven으로 프로젝트 구성
sidebar_label: Maven 구성
sidebar_position: 3
---

## 사전 요구 사항

이 예제에서는 <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>을 사용하므로, 설치 방법을 알아보려면 위 링크를 클릭하세요.

Java도 설치되어 있어야 합니다.

Netuno 플랫폼을 설치하세요. Java 프로젝트는 미리 설치된 Netuno 플랫폼과 통합됩니다.

## 코드 패키지

Java의 표준처럼 코드에는 항상 `package`가 있어야 합니다.

`package`는 Netuno의 전역 구성 파일에 등록해야 합니다:

- `netuno/config.js`

파일 끝에 다음 코드를 추가하세요:

```javascript
config.packagesScan.add("nae.peurojekteu.jaba")
```

패키지를 이 방식으로 구성에 추가하지 않으면 프로젝트가 절대 로드되지 않습니다. Netuno는 이전에 추가된 패키지에서만 리소스와 서비스를 찾기 때문입니다.

구성에 패키지를 등록하지 않는 대안은 `org.netuno`로 시작하는 Java 패키지를 사용하는 것입니다.

Netuno는 `org.netuno`로 시작하는 패키지에 있는 리소스와 서비스를 자동으로 찾습니다.

> 접두사 `org.netuno.addon`을 사용하는 것이 좋습니다.

예를 들어 `org.netuno.addon.gyesan`을 사용할 수 있습니다.

패키지 접두사 `org.netuno.addon`은 외부에서 추가된 기능이며 Netuno 자체의 일부가 아님을 구분합니다.

따라서 Netuno와 통합되는 모든 Java 코드는 다음 위치에 정의하고 빌드해야 합니다:

- `org.netuno.addon.nae.peurojekteu`

`org.netuno.addon` 뒤에 프로젝트 식별자를 추가하세요.

## POM 구성

Netuno에는 JAR 형식의 종속성이 많으므로 POM 안에 이러한 종속성을 정의해야 합니다. POM은 폴더 전체를 포함하는 것을 지원하지 않고 각 종속성을 작성하는 것은 번거롭고 지루하므로 POM을 생성하는 JavaScript 스크립트를 만들겠습니다.

### 준비

Java 클래스가 작성될 프로젝트 폴더를 만듭니다. 예제에서는 `Gyesan`을 사용하겠습니다:

```bash
mkdir Gyesan
```

`pom-생성.js` 파일을 만드세요. 이 파일 안에서 스크립트 전반에 사용할 몇 가지 변수를 정의하는 것으로 시작하겠습니다. `NETUNO_DIR`은 Netuno가 설치된 루트 폴더여야 합니다. `PROJECT_DIR`은 전역 리소스 및 서비스 클래스를 작성할 디렉터리입니다. 그리고 `PACKAGE`는 이전 단계에서 정의한 패키지 이름과 같아야 합니다. `JAVA_VERSION`으로 Java 버전도 선택하세요. 경로는 절대 경로여야 합니다:

```js
const NETUNO_DIR = '/netuno/루트';
const PROJECT_DIR = '/프로젝트/Netuno/Gyesan';
const PACKAGE = 'org.netuno.addon.gyesan';
const JAVA_VERSION = 25;
```

이제 `pom.xml`의 기본 구조를 초기화하겠습니다:

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

### 종속성

다음으로 디렉터리를 스캔하고 Netuno 종속성 JAR 파일마다 `<dependency>` 태그를 생성하는 함수를 만들겠습니다:

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
        console.error(`디렉터리 ${folder} 읽기 오류:`, error.message);
    }
    return dependenciesXml;
}
```

이 함수를 사용해 두 종속성 디렉터리를 매핑하겠습니다:

```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

그리고 `netuno.jar`와 함께 종속성을 POM에 주입하겠습니다:

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

### JAR 파일

JAR 파일의 대상 디렉터리를 정의해야 합니다. 이 단계는 프로젝트를 JAR 파일로 컴파일할 수 있는 옵션을 갖기 위해 필요합니다:

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

### 정리

이제 `mvn clean` 명령이 호출될 때 올바른 파일을 삭제하도록 Maven을 구성해야 합니다:

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

### 프로필

프로젝트를 컴파일해 `.class` 파일을 생성할지 `.jar` 파일을 생성할지 선택할 수 있도록, 별도의 프로필을 만들고 컴파일러를 올바른 경로로 구성해야 합니다. 이로써 POM 내용을 마무리합니다:

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

### 마무리

마지막으로 결과를 `pom.xml` 파일에 작성하겠습니다:

```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`구성 완료. pom.xml 파일이 다음 위치에 업데이트되었습니다: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("pom.xml 작성 오류:", error);
}
```

POM을 생성하려면 프로젝트 루트 폴더에서 다음 명령을 실행하세요:

```bash
bun pom-생성.js
```

전체 POM 생성 스크립트는 이 [링크](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js)에서 볼 수 있습니다.

## 컴파일

이제 다음으로 프로젝트를 컴파일할 수 있습니다:

```bash
mvn clean compile -Pdev
```

또는 다른 컴퓨터에 있는 다른 Netuno 인스턴스로 코드를 배포하기 쉽게 JAR 파일을 생성하려면 다음을 실행하세요:

```bash
mvn clean package
```

`compile` 및 `package` 명령으로 생성된 파일을 정리하려면:

```bash
mvn clean
```

### JAR 파일 배포

생성된 JAR 파일은 배포되어 다른 Netuno 플랫폼에 배치될 수 있습니다.

Netuno가 설치된 모든 플랫폼에서 이 JAR은 Netuno 루트의 `lib` 폴더에 넣어야 합니다:

- `netuno/lib`

이 폴더는 기본적으로 존재하지 않으므로 만들어야 할 수 있습니다.

이 폴더에 있는 모든 JAR은 Netuno 플랫폼에서 자동으로 로드됩니다.

## 실행

프로젝트를 실행하려면 Netuno를 평소처럼 시작하세요:

```bash
./netuno server app=gyesan
```

앱은 먼저 `./netuno app` 명령으로 생성해야 합니다.

## 결론

Netuno 코어에 새로운 동작을 추가하기 위해 새 Java 프로젝트를 만드는 방법을 살펴보았습니다.

또한 JAR 파일을 생성하고 `netuno/lib` 폴더에 배포하는 모범 사례도 확인했습니다.

모든 Java 프로그래밍 기술과 라이브러리를 사용해 Netuno에서 어떤 종류의 기능이든 만들 수 있습니다.

특히 다음을 포함한 모든 지원 스크립트 언어에서 사용할 수 있는 로우 코드 프로그래밍 리소스를 만들 수 있습니다:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

다음 튜토리얼에서는 첫 번째 로우 코드 프로그래밍 리소스를 만드는 방법을 살펴보세요.

그리고 Netuno에 구성된 모든 애플리케이션에서 사용할 수 있는 첫 번째 다중 애플리케이션 웹 서비스를 만드는 방법도 확인하세요.