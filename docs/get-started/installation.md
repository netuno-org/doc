---
sidebar_position: 1
id: installation
title: Installation
---

Installation of the Netuno low-code, polyglot and open source platform.

> Build robust full-stack applications with low-code.

## Requirements

Netuno uses the installed **Java** only to run the initial installation process.

During the Netuno installation, [GraalVM](https://www.graalvm.org/) is automatically installed in the Netuno folder,
and [GraalVM](https://www.graalvm.org/) **Java** is then used to run Netuno.

> Installing the front-end prerequisites is optional and is only required for full-stack development.

### Back-end: Java

Make sure you have **Java** installed by running the following command in the terminal:

`java -version`

The **Java** version should be **11 or above**.

If you don't have it installed, install **Java open source** for **Windows** and **macOS** at:

- <a href="https://adoptium.net/pt-BR" target="_blank">Java OpenJDK Eclipse Temurin</a>

On **Linux** **Ubuntu** or **Debian**, use the command:

- `apt install default-jdk-headless`

### Front-end: Bun

It's not mandatory, but it's highly recommended that **Bun** be installed to be able to compile the UI 
(_user interface_, _front-end_, _website_) of the applications.

Instead of using **Node** and **NPM**, **Bun** is more modern, optimized, and faster, so overall it's far superior 
because it demonstrates better practical results for development performance.

- See how to [install Bun](/docs/academy/website/bun).

All Netuno example projects and new application generation are adapted to work with Bun.

> Make sure you are using the latest versions of the technologies.

If you want to use **Node** and **NPM**, **PNPM**, **Yarn**, or any other technology, it's possible, it's up to you.

## Considerations

Running the installation command below will change the path in the terminal from where you were to the new `📁 netuno` folder that will be created.

If is needed to run the installation command line again you will need to correct the path and probably remove the `📁 netuno` folder that was created.

## Stable Version

The stable release is a safe and production-ready.

To install the stable version, follow the installation steps below:

### Linux or macOS

It is common to have `cURL` and `Wget` command, run in terminal to check.

To create the Netuno directory, execute in the **terminal**:

```plaintext
mkdir -p netuno && cd netuno
```

Choose one of the following methods of **download**:

* Download with *cURL*:

```plaintext
curl -L https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -o netuno-setup.jar
```

* Download with *Wget*:

```plaintext
wget https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -O netuno-setup.jar
```

After performing one of the previous steps, proceed to the **Netuno's installation**:

* Installation of the **official and stable** version:

```plaintext
java -jar netuno-setup.jar install
```

> On **macOS**, you need to disable the quarantine, thus inside the `netuno` home folder, please run:
> `sudo xattr -r -d com.apple.quarantine .`

### Windows

To install the **current stable** version in Windows, open the terminal of **PowerShell**, then go to the start menu and type: `powershell`

Now copy and paste the command below and follow the **installation** steps:

```plaintext
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar" -OutFile "netuno-setup.jar"
```
After performing the previous download, proceed to the **Netuno's installation**:

* Installation of the **official and stable** version:

```plaintext
java -jar netuno-setup.jar install
```

## Testing Version

The current version being tested is a development version, contains the latest features but may be unstable.

To install the testing version, follow the installation steps below:

### Linux or macOS

It is common to have `cURL` and `Wget` command, run in terminal to check.

To create the Netuno directory, execute in the **terminal**:

```plaintext
mkdir -p netuno && cd netuno
```

Choose one of the following methods of **download**:

* Download with *cURL*:

```plaintext
curl -L https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -o netuno-setup.jar
```

* Download with *Wget*:

```plaintext
wget https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -O netuno-setup.jar
```

After performing one of the previous steps, proceed to the **Netuno's installation**:

* Installation of the **testing** version:

```plaintext
java -jar netuno-setup.jar install version=testing
```

> On **macOS**, you need to disable the quarantine, thus inside the `netuno` home folder, please run:
> `sudo xattr -r -d com.apple.quarantine .`

### Windows

To install the **current testing** version in Windows, open the terminal of **PowerShell**, then go to the start menu and type: `powershell`

Now copy and paste the command below and follow the **installation** steps:

```plaintext
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar" -OutFile "netuno-setup.jar"
```
After performing the previous download, proceed to the **Netuno's installation**:

* Installation of the **testing** version:

```plaintext
java -jar netuno-setup.jar install version=testing
```

## Start App DEMO

At the end of the installation you will receive some instructions on how to run _Netuno_.

And to start to use and manage _Netuno_ server with the **Demo**_nstration_ application, see below:


> ### `./netuno server`
>
> Starts the Netuno server with the default **demo**_nstration_ application:

### Open the Application in the Browser

After starting the server the browser will be launched and open automatically with the address of the local _Netuno_ server.

If your browser is not opened automatically then open the below address in your browser:

* <a href="http://demo.local.netu.no:9000" target="_blank">http://demo.local.netu.no:9000</a>

or:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

## Stop the Server

To stop the server press the keys on the terminal:

### CTRL + C

The terminal will finish the _Netuno_ server. To start again use the previous commands.

## Next Steps

Here is what can be done with _Netuno_ 👇

### Beginners

If you are new on _Netuno_ then start by build your first form:

[[ Begin ]](/docs/academy/demonstration/config)

### Tutorials

Discover how to explore the development on _Netuno_

[[ Know More ]](/docs/get-started/tutorials)

### Projects

_Netuno_ can be applied in any kind of business: 

[[ More Information ]](/docs/academy/understand/backoffice)
