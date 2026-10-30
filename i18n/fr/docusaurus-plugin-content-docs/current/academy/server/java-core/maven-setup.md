---
id: maven-setup
title: Configuration du Projet avec Apache Maven
sidebar_label: Configuration avec Maven
sidebar_position: 3
---

## Prérequis

Dans cet exemple, nous utiliserons <a href="https://maven.apache.org/install.html" target="_blank">Apache Maven</a>, donc cliquez sur le lien précédent pour obtenir des informations sur la façon de l'installer.

Vous devrez également avoir Java installé.

Installez la plateforme Netuno. Le projet Java sera intégré à la plateforme Netuno préinstallée.

## Package du Code

Comme il est de coutume en Java, le code doit toujours avoir un `package`.

Votre `package` doit être enregistré dans le fichier de configuration globale de Netuno :

- `netuno/config.js`

Ajoutez à la fin le code suivant :

```javascript
config.packagesScan.add("mon.projet.java")
```

Si votre package n'est pas ajouté à la configuration de cette manière, alors votre projet ne sera jamais chargé,
car Netuno ne recherche que les ressources et services dans les packages préalablement ajoutés.

Une alternative pour éviter d'enregistrer le package dans la configuration est d'utiliser des packages Java qui commencent par `org.netuno`.

Netuno recherche automatiquement les ressources et services qui se trouvent dans des packages commençant par `org.netuno`.

> Il est recommandé d'utiliser le préfixe : `org.netuno.addon`

Par exemple, nous pouvons utiliser : `org.netuno.addon.calcul`

Le préfixe de package `org.netuno.addon` distingue qu'il s'agit d'une fonctionnalité ajoutée de l'extérieur et qui ne fait
pas partie de Netuno lui-même.

Par conséquent, tout votre code Java qui s'intègre à Netuno doit être défini et construit dans :

- `org.netuno.addon.mon.projet`

Après `org.netuno.addon`, ajoutez l'identification de votre projet.

## Configuration du POM

Netuno possède de nombreuses dépendances au format JAR, il est donc nécessaire de définir ces dépendances dans le POM. Comme le POM ne prend pas en charge l'inclusion d'un dossier entier et que écrire chaque dépendance serait laborieux et fastidieux, nous allons faire un script en JavaScript pour générer le POM.

### Préliminaires

Créez le dossier de votre projet, où seront écrites les classes Java. Pour notre exemple, nous allons utiliser `Calcul` :

```bash
mkdir Calcul
```

Créez le fichier `generate-pom.js`. Dans ce fichier, nous allons commencer par définir quelques variables qui seront utilisées tout au long du script. `NETUNO_REPERTOIRE` doit être le dossier racine où vous avez installé Netuno. `PROJET_REPERTOIRE` est le répertoire où vous allez écrire vos classes de ressources et services globaux. Et `PAQUET` doit être identique au nom du package comme défini dans les étapes précédentes. Sélectionnez également la version de Java avec `VERSION_JAVA`. Les chemins doivent être des chemins absolus :

```js
const NETUNO_REPERTOIRE = '/dossier/racine/du/netuno';
const PROJET_REPERTOIRE = '/Projets/Netuno/Calcul';
const PAQUET = 'org.netuno.addon.calcul';
const VERSION_JAVA = 25;
```

Maintenant, nous allons initialiser la structure de base du `pom.xml` :

```js
const partiesPackage = PAQUET.split(".");
const ID_ARTEFACT = partiesPackage.slice(-1);
const ID_GROUPE = partiesPackage.slice(0, partiesPackage.length - 1).join(".");

let contenuPom = `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${ID_GROUPE}</groupId>
    <artifactId>${ID_ARTEFACT}</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>${VERSION_JAVA}</maven.compiler.source>
        <maven.compiler.target>${VERSION_JAVA}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
  `;
```

### Dépendances

Ensuite, nous allons créer la fonction qui parcourt les répertoires et génère une balise `<dependency>` pour chaque fichier JAR de dépendance de Netuno :

```js
function parcourirRepertoire(dossier, suffixeGroupe) {
    let xmlDependances = '';
    try {
        const fichiers = readdirSync(dossier);
        for (const fichier of fichiers) {
            const cheminComplet = join(dossier, fichier);
            if (statSync(cheminComplet).isFile() && extname(fichier) === '.jar') {
                const nomBase = basename(fichier, '.jar');
                xmlDependances += `
        <dependency>
            <groupId>org.netuno.${suffixeGroupe}</groupId>
            <artifactId>${nomBase}</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${cheminComplet}</systemPath>
        </dependency>`;
            }
        }
    } catch (error) {
        console.error(`Erreur lors de la lecture du répertoire ${dossier} :`, error.message);
    }
    return xmlDependances;
}
```

Nous allons utiliser cette fonction pour mapper les deux répertoires de dépendances :

```js
const dependancesCore = parcourirRepertoire(join(NETUNO_REPERTOIRE, 'core', 'lib'), 'core');
const dependancesWeb = parcourirRepertoire(join(NETUNO_REPERTOIRE, 'core', 'web', 'WEB-INF', 'lib'), 'web');
```

Et injecter les dépendances dans le POM, avec le `netuno.jar` :

```js
contenuPom += `
    <dependencies>
        <dependency>
            <groupId>org.netuno</groupId>
            <artifactId>netuno-root</artifactId>
            <version>1.0</version>
            <scope>system</scope>
            <systemPath>${NETUNO_REPERTOIRE}/netuno.jar</systemPath>
        </dependency>
        ${dependancesCore}
        ${dependancesWeb}
    </dependencies>
  `;
```

### Fichier JAR

Nous devons définir le répertoire de destination pour les fichiers JAR. Cette étape est nécessaire pour que nous ayons l'option de compiler notre projet en un fichier JAR :

```js
contenuPom += `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.4.2</version>
                <configuration>
                    <outputDirectory>${NETUNO_REPERTOIRE}/lib</outputDirectory>
                </configuration>
            </plugin>
  `;
```

### Nettoyage

Maintenant, nous devons configurer Maven pour que la commande `mvn clean` supprime les fichiers corrects lorsqu'elle est invoquée :

```js
const CHEMIN_PAQUET = PAQUET.replaceAll(".", "/");
contenuPom += `
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <filesets>
                        <fileset>
                            <directory>${NETUNO_REPERTOIRE}/lib</directory>
                            <includes>
                                <include>${ID_ARTEFACT}-*.jar</include>
                            </includes>
                            <followSymlinks>false</followSymlinks>
                        </fileset>
                        <fileset>
                            <directory>${NETUNO_REPERTOIRE}/core/web/WEB-INF/classes</directory>
                            <includes>
                                <include>${CHEMIN_PAQUET}/**</include>
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

Pour que nous puissions choisir entre compiler le projet en générant des fichiers `.class` ou générer des fichiers `.jar`,
nous devons créer un profil différent et configurer le compilateur avec le chemin correct. Et ainsi nous finalisons le contenu du POM :

```js
contenuPom += `
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
                            <outputDirectory>${NETUNO_REPERTOIRE}/core/web/WEB-INF/classes</outputDirectory>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>`;
```

### Finalisation

Enfin, nous allons écrire le résultat dans le fichier `pom.xml` :

```js
try {
    writeFileSync(`${PROJET_REPERTOIRE}/pom.xml`, contenuPom.trim() + '\n', 'utf8');
    console.log(`Configuration terminée. Le fichier pom.xml a été mis à jour à : ${PROJET_REPERTOIRE}/pom.xml`);
} catch (error) {
    console.error("Erreur lors de l'écriture de pom.xml :", error);
}
```

Pour générer le POM, exécutez cette commande dans le dossier racine de votre projet :

```bash
bun generate-pom.js
```

Vous pouvez voir le script complet de génération du POM sur ce [lien](https://github.com/netuno-org/maven/blob/main/Calc/generate-pom.js).

## Compilation

Maintenant, vous pouvez compiler votre projet avec :

```bash
mvn clean compile -Pdev
```

Ou générer des fichiers JAR, ce qui facilite la distribution du code vers d'autres instances de Netuno qui se trouvent sur d'autres ordinateurs, avec :

```bash
mvn clean package
```

Pour nettoyer les fichiers générés par les commandes `compile` et `package` :

```bash
mvn clean
```

### Publier le fichier JAR

Le fichier JAR créé peut être distribué et placé sur n'importe quelle autre plateforme Netuno.

Sur toute plateforme Netuno installée, ce JAR doit être placé dans le dossier `lib` à la racine de Netuno :

- `netuno/lib`

Notez que ce dossier n'existe pas par défaut, il peut donc être nécessaire de le créer.

Tous les JARs qui se trouvent dans ce dossier sont automatiquement chargés dans la plateforme Netuno.

## Exécution

Pour exécuter le projet, démarrez Netuno normalement :

```bash
./netuno server app=calcul
```

L'application doit être créée au préalable avec la commande : `./netuno app`.

## Conclusion

Nous avons vu comment créer un nouveau projet Java pour ajouter de nouveaux comportements au cœur de Netuno.

Nous avons également vu les bonnes pratiques pour générer le fichier JAR et comment le distribuer dans le dossier `netuno/lib`.

Toutes les techniques et bibliothèques de programmation Java peuvent être utilisées pour créer tout type de fonctionnalité
dans Netuno.

En particulier, créer des ressources de programmation low-code qui sont disponibles pour tous les langages de script pris en charge,
tels que :

- JavaScript
- Python
- Ruby
- Kotlin
- Groovy

Dans les tutoriels suivants, voyez comment créer votre première ressource de programmation low-code.

Et aussi comment créer votre premier service web multi-applicatif, disponible dans toutes les applications configurées dans Netuno.