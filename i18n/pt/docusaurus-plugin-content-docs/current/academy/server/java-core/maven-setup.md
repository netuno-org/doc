---
id: maven-setup
title: Configuração do Projeto com Apache Maven
sidebar_label: Configuração com Maven
sidebar_position: 3
---

## Pré-requisitos

Neste exemplo iremos utilizar o <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, portanto clique no link anterior para obter informações de como instalá-lo.

Você vai precisar ter o Java instalado também.

Instale a plataforma Netuno. O projeto em Java será integrado com a plataforma do Netuno pré-instalada. 

## Pacote do Código

Como é padrão no Java, o código deve ter sempre um `package`.

O seu `package` deve ser registrado no arquivo de configuração global do Netuno:

- `netuno/config.js`

Adicione no fim o seguinte código:

```javascript
config.packagesScan.add("meu.projeto.java")
```

Caso o seu pacote não seja adicionado na configuração desta forma então o seu projeto nunca será carregado,
já que o Netuno apenas procura por recursos e serviços nos pacotes previamente adicionados.

Uma alternativa para evitar registar o pacote na configuração é utilizar pacotes Java que começam com `org.netuno`.

O Netuno procura automaticamente por recursos e serviços que estejam em pacotes que iniciem com `org.netuno`.

> É recomendado utilizar o prefixo: `org.netuno.addon`

Por exemplo, podemos utilizar: `org.netuno.addon.calc`

O prefixo de pacote `org.netuno.addon` distingue que é uma funcionalidade adicionada externamente e que não faz
parte do Netuno em si.

Portanto, todo o seu código Java que integra com o Netuno deve ser definido e construído em:

- `org.netuno.addon.meu.projeto`

Após o `org.netuno.addon` adicione a identificação do seu projeto.

## Configuração do POM

O Netuno possui muitas dependências no formato JAR, portanto é preciso definir essas dependências dentro do POM. Como o POM não dá suporte a incluir uma pasta inteira e escrever cada dependência seria trabalhoso e tedioso, faremos um script em JavaScript para gerar o POM.

### Preliminares

Cria a pasta do seu projeto, onde serão escritas as classes Java. Para o nosso exemplo vamos utilizar `Calc`.
```bash
mkdir Calc
```

Crie o arquivo `generate-pom.js`. Dentro desse arquivo, vamos começar definindo algumas variáveis que serão usadas ao longo do script. `NETUNO_DIR` precisa ser a pasta raiz onde você tem o Netuno instalado, `PROJECT_DIR` é o diretório onde você vai escrever suas classes de recursos e serviços globais e `PACKAGE` precisa ser igual ao nome do pacote como definido nos passos anteriores. Selecione também a versão do Java com `JAVA_VERSION`. Os caminhos precisam ser caminhos absolutos.

```js
const NETUNO_DIR = '/pasta/raíz/do/netuno';
const PROJECT_DIR = '/Projects/Netuno/Calc';
const PACKAGE = 'org.netuno.addon.calc';
const JAVA_VERSION = 25;
```

Agora vamos inicializar a estrutura base do `pom.xml`.
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

### Dependências

Depois, vamos criar a função que escaneia os diretórios e gera as tags `<dependency>` para cada arquivo JAR de dependência do Netuno,
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

usar essa função para mapear os dois diretório de dependências
```js
const coreDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'lib'), 'core');
const webDependencies = mapDirectory(join(NETUNO_DIR, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

e injetar as dependências no POM, junto com o `netuno.jar`.
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

Agora precisamos configurar o Maven para que o comando `mvn clean` apague os arquivos corretos quando invocado.
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

Para que possamos escolher entre compilar o projeto gerando arquivos `.class` ou gerar arquivos `.jar`,
precisamos criar um profile diferente e configurar o compilador com o caminho correto. E assim finalizamos o conteúdo do POM.
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

Por fim, vamos escrever o resultado no arquivo `pom.xml`.
```js
try {
    writeFileSync(`${PROJECT_DIR}/pom.xml`, pomContent.trim() + '\n', 'utf8');
    console.log(`Configuration completed. The pom.xml file has been updated at: ${PROJECT_DIR}/pom.xml`);
} catch (error) {
    console.error("Error writing pom.xml:", error);
}
```

## Compilação 

Para gerar o POM, execute esse comando na pasta raiz do seu projeto:
```bash
bun generate-pom.js
```

Agora você pode compilar seu projeto com:
```bash
mvn clean compile -Pdev
```

Ou gerar arquivos JAR, o que facilita a distribuição do código para outras instâncias do Netuno que estão em outros computadores, com:
```bash
mvn clean package
```

Para limpar os arquivos gerados por `compile` e `package`:
```bash
mvn clean
```

### Publicar Artefato

O arquivo de JAR criado pode ser distribuído e colocado em qualquer outra plataforma do Netuno.

Em qualquer plataforma do Netuno instalada este JAR deve ser colocado na pasta `lib` na raiz do Netuno:

- `netuno/lib`

Repare que está pasta não existe por padrão, portanto pode ser necessário criá-la.

Todos os JARs que se encontram nessa pasta são carregados automaticamente na plataforma do Netuno.

## Execução

Para executar o projeto, inicie o Netuno normalmente
```bash
./netuno server app=calc
```

A app deve ser criada antes com o comando: `./netuno app`

## Conclusão

Foi visto como criar um novo projeto Java para adicionar novos comportamentos no núcleo do Netuno.

Também vimos as boas práticas para gerar o arquivo JAR e como distribuir na pasta `netuno/lib`.

Todas as técnicas e bibliotecas de programação Java podem ser utilizadas para criar qualquer tipo de funcionalidade
no Netuno.

Especialmente criar recurso de programação low-code que fica disponível para todas as linguagens de script suportas,
tais como:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

Nos tutoriais seguintes, veja como criar o seu primeiro recurso de programação low-code.

E também como criar o seu primeiro serviço web multi-aplicacional, disponível em todas as aplicações que estão
configuradas no Netuno.
