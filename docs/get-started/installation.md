---
sidebar_position: 1
id: installation
title: Installation
---

## Requirements

### Back-end: Java

Make sure you have **Java** installed by running the following command in the terminal:

`java -version`

The **Java** version should be **11 or above**.

If you don't have it installed, install **Java open source** for **Windows** and **macOS** at:

- <a href="https://adoptium.net/pt-BR" target="_blank">Java OpenJDK Eclipse Temurin</a>

On **Linux** **Ubuntu** or **Debian**, use the command:

- `apt install default-jdk-headless`

### Front-end: Bun & PNPM

It is not mandatory, but it is recommended that **Bun** and **PNPM** be installed to compile the UI (_user 
interface_, _front-end_) of applications.

Instead of using **Node** and **NPM**, **Bun** and **PNPM** are more optimized and faster. Overall, they are 
superior because they demonstrate better practical results in development.

- See how to [install PNPM and Bun](/docs/academy/website/pnpm-bun).

All Netuno example projects and the generation of new applications are adapted to work with **Bun** and **PNPM**.

> Make sure you use the latest versions of these technologies.

If you want to use **Node** and **NPM**, or any other technology, it is always possible; it is up to you.

## Considerations

Running the installation command below will change the path in the terminal from where you were to the new **Netuno** folder that will be created.

If is needed to run the installation command line again you will need to correct the path and probably remove the **Netuno** folder that was created.

## Stable Version

The stable release is a safe and production-ready.

To install the stable version, follow the installation steps below:

### Linux or macOS

It is common to have `wget` and `curl` command, run in terminal to check.

To create the Netuno directory, execute in the **terminal**:

```plaintext
mkdir -p netuno && cd netuno
```

Choose one of the following methods of **download**:

* Download with *WGET*:

```plaintext
wget https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -O netuno-setup.jar
```

* Download with *cURL*:

```plaintext
curl -L https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -o netuno-setup.jar
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

It is common to have `wget` and `curl` command, run in terminal to check.

To create the Netuno directory, execute in the **terminal**:

```plaintext
mkdir -p netuno && cd netuno
```

Choose one of the following methods of **download**:

* Download with *WGET*:

```plaintext
wget https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -O netuno-setup.jar
```

* Download with *cURL*:

```plaintext
curl -L https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -o netuno-setup.jar
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
