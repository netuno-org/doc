---
id: maven-setup
title: Configuración del Proyecto con Apache Maven
sidebar_label: Configuración con Maven
sidebar_position: 3
---

## Prerrequisitos

En este ejemplo vamos a utilizar <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, por lo que haga clic en el enlace anterior para obtener información sobre cómo instalarlo.

También necesitará tener Java instalado.

Instale la plataforma Netuno. El proyecto en Java se integrará con la plataforma de Netuno preinstalada.

## Paquete del Código

Como es estándar en Java, el código siempre debe tener un `package`.

Su `package` debe registrarse en el archivo de configuración global de Netuno:

- `netuno/config.js`

Añada al final el siguiente código:

```javascript
config.packagesScan.add("mi.proyecto.java")
```

Si su paquete no se añade en la configuración de esta forma, entonces su proyecto nunca se cargará,
ya que Netuno solo busca recursos y servicios en los paquetes previamente añadidos.

Una alternativa para evitar registrar el paquete en la configuración es utilizar paquetes Java que comienzan con `org.netuno`.

Netuno busca automáticamente recursos y servicios que estén en paquetes que inicien con `org.netuno`.

> Se recomienda utilizar el prefijo: `org.netuno.addon`

Por ejemplo, podemos utilizar: `org.netuno.addon.calculadora`

El prefijo de paquete `org.netuno.addon` distingue que es una funcionalidad añadida externamente y que no forma
parte de Netuno en sí.

Por lo tanto, todo su código Java que se integra con Netuno debe definirse y construirse en:

- `org.netuno.addon.mi.proyecto`

Después de `org.netuno.addon` añada la identificación de su proyecto.

## Configuración del POM

Netuno posee muchas dependencias en formato JAR, por lo que es preciso definir esas dependencias dentro del POM. Como el POM no da soporte a incluir una carpeta entera y escribir cada dependencia sería laborioso y tedioso, haremos un script en JavaScript para generar el POM.

### Preliminares

Cree la carpeta de su proyecto, donde se escribirán las clases Java. Para nuestro ejemplo vamos a utilizar `Calculadora`:

```bash
mkdir Calculadora
```

Cree el archivo `generar-pom.js`. Dentro de ese archivo, vamos a comenzar definiendo algunas variables que se usarán a lo largo del script. `DIRECTORIO_NETUNO` debe ser la carpeta raíz donde tiene Netuno instalado. `DIRECTORIO_PROYECTO` es el directorio donde escribirá sus clases de recursos y servicios globales. Y `PAQUETE` debe ser igual al nombre del paquete como se definió en los pasos anteriores. Seleccione también la versión de Java con `VERSION_JAVA`. Las rutas deben ser rutas absolutas:

```js
const DIRECTORIO_NETUNO = '/carpeta/raíz/de/netuno';
const DIRECTORIO_PROYECTO = '/Proyectos/Netuno/Calculadora';
const PAQUETE = 'org.netuno.addon.calculadora';
const VERSION_JAVA = 25;
```

Ahora vamos a inicializar la estructura base del `pom.xml`:

```js
const arrayPaquete = PAQUETE.split(".");
const ID_ARTEFACTO = arrayPaquete.slice(-1);
const ID_GRUPO = arrayPaquete.slice(0, arrayPaquete.length - 1).join(".");

let contenidoPom = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${ID_GRUPO}</groupId>
    <artifactId>${ID_ARTEFACTO}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${VERSION_JAVA}</maven.compiler.source>
        <maven.compiler.target>${VERSION_JAVA}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Dependencias

Después, vamos a crear la función que escanea los directorios y genera una etiqueta `<dependency>` para cada archivo JAR de dependencia de Netuno:

```js
function mapearDirectorio(carpeta, sufijoGrupo) {
    let dependenciasXml = '';
    try {
        const archivos = readdirSync(carpeta);
        for (const archivo of archivos) {
            const rutaCompleta = join(carpeta, archivo);
            if (statSync(rutaCompleta).isFile() && extname(archivo) === '.jar') {
                const nombreBase = basename(archivo, '.jar');
                dependenciasXml += `
        <dependency>
            <groupId>org.netuno.${sufijoGrupo}</groupId>
            <artifactId>${nombreBase}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${rutaCompleta}</systemPath>
        </dependency>`;
            }
        }
    } catch (error) {
        console.error(`Error al leer el directorio ${carpeta}:`, error.message);
    }
    return dependenciasXml;
}
```

Vamos a usar esta función para mapear los dos directorios de dependencias:

```js
const dependenciasCore = mapearDirectorio(join(DIRECTORIO_NETUNO, 'core', 'lib'), 'core');
const dependenciasWeb = mapearDirectorio(join(DIRECTORIO_NETUNO, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

E inyectar las dependencias en el POM, junto con `netuno.jar`:

```js
contenidoPom += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${DIRECTORIO_NETUNO}/netuno.jar</systemPath>
        </dependency>
        ${dependenciasCore}
        ${dependenciasWeb}
    </dependencies>
  `;
```

### Archivo JAR

Necesitamos definir el directorio de destino para los archivos JAR. Este paso es necesario para tener la opción de compilar nuestro proyecto en un archivo JAR:

```js
contenidoPom += `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.4.2</version>
                <configuration>
                    <outputDirectory>${DIRECTORIO_NETUNO}/lib</outputDirectory>
                </configuration>
            </plugin>
  `;
```

### Limpieza

Ahora necesitamos configurar Maven para que el comando `mvn clean` elimine los archivos correctos cuando se invoque:

```js
const RUTA_PAQUETE = PAQUETE.replaceAll(".", "/");
contenidoPom += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${DIRECTORIO_NETUNO}/lib</directory>
                            <includes>
                                <include>${ID_ARTEFACTO}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${DIRECTORIO_NETUNO}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${RUTA_PAQUETE}/**</include>
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

### Perfil

Para poder elegir entre compilar el proyecto generando archivos `.class` o generar archivos `.jar`,
necesitamos crear un perfil diferente y configurar el compilador con la ruta correcta. Y así finalizamos el contenido del POM:

```js
contenidoPom += `
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
                            <outputDirectory>${DIRECTORIO_NETUNO}/core/web/WEB-INF/classes</outputDirectory>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>`;
```

### Finalizando

Por último, vamos a escribir el resultado en el archivo `pom.xml`:

```js
try {
    writeFileSync(`${DIRECTORIO_PROYECTO}/pom.xml`, contenidoPom.trim() + '\n', 'utf8');
    console.log(`Configuración completada. El archivo pom.xml se ha actualizado en: ${DIRECTORIO_PROYECTO}/pom.xml`);
} catch (error) {
    console.error("Error al escribir pom.xml:", error);
}
```

Para generar el POM, ejecute este comando en la carpeta raíz de su proyecto:

```bash
bun generar-pom.js
```

Puede ver el script de generación del POM completo en este [enlace](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Compilación

Ahora puede compilar su proyecto con:

```bash
mvn clean compile -Pdev
```

O generar archivos JAR, lo que facilita la distribución del código a otras instancias de Netuno que están en otros equipos, con:

```bash
mvn clean package
```

Para limpiar los archivos generados por los comandos `compile` y `package`:

```bash
mvn clean
```

### Publicar Archivo JAR

El archivo JAR creado se puede distribuir y colocar en cualquier otra plataforma de Netuno.

En cualquier plataforma de Netuno instalada, este JAR debe colocarse en la carpeta `lib` en la raíz de Netuno:

- `netuno/lib`

Tenga en cuenta que esta carpeta no existe por defecto, por lo que puede ser necesario crearla.

Todos los JAR que se encuentran en esa carpeta se cargan automáticamente en la plataforma de Netuno.

## Ejecución

Para ejecutar el proyecto, inicie Netuno normalmente:

```bash
./netuno server app=calculadora
```

La app debe crearse antes con el comando: `./netuno app`.

## Conclusión

Se ha visto cómo crear un nuevo proyecto Java para añadir nuevos comportamientos en el núcleo de Netuno.

También vimos las buenas prácticas para generar el archivo JAR y cómo distribuirlo en la carpeta `netuno/lib`.

Todas las técnicas y bibliotecas de programación Java se pueden utilizar para crear cualquier tipo de funcionalidad
en Netuno.

Especialmente crear recursos de programación low-code que quedan disponibles para todos los lenguajes de script soportados,
tales como:

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

En los siguientes tutoriales, vea cómo crear su primer recurso de programación low-code.

Y también cómo crear su primer servicio web multiaplicación, disponible en todas las aplicaciones que están
configuradas en Netuno.