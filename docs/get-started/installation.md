---
sidebar_position: 1
id: installation
title: Installation
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Welcome to the **Netuno** installation guide, the *low-code*, polyglot, and *open-source* platform developed to accelerate the creation of your projects and facilitate the setup of your development environment.

Here you build robust full-stack applications quickly, combining the speed of low-code with the power of traditional coding.

Before you begin, check what you need to have installed on your computer.

### Prerequisites

- **Java** *(Installer only)*

  **Java** must be previously installed on your operating system. It will be used **exclusively** to run the initial Netuno installation script.

- **GraalVM** *(Automatic Installation)*

  During installation, the **GraalVM** engine is downloaded and configured automatically within the Netuno folder itself. From this point on, the isolated GraalVM Java will be used to run the platform, ensuring stability and high performance without interfering with your machine's global settings.

To learn more about the technology, visit: [GraalVM](https://www.graalvm.org/).

:::info FRONTEND REQUIREMENTS ARE OPTIONAL
Installing frontend tools (such as Node.js, NPM, or Yarn) is entirely optional. You will only need to configure them if your goal is to develop advanced full-stack interfaces.
:::

### Backend - Java

This step ensures the environment is prepared to run the platform installer. **Java version 11 or higher** must be installed.

Check if Java is already installed by running the following command in your terminal:

```bash
java -version
```

If it is not installed, we recommend installing the **open-source Java**:

- Windows and macOS: [Java OpenJDK Eclipse Temurin](https://adoptium.net/en-US)
- Linux (Ubuntu / Debian):

```bash
apt install default-jdk-headless
```

### Frontend - Bun

To develop user interfaces (UI / Frontend), we recommend using **Bun** — the official standard tool in the Netuno ecosystem for frontend compilation.

#### Why use Bun?

**Bun** is a modern and highly optimized alternative to Node.js. It stands out in the Netuno environment by offering:

- **High Performance:** Noticeably faster execution and dependency installation.
- **Productivity:** Better performance in the daily workflow of interface development.
- **Native Integration:** All Netuno example projects and templates come pre-configured to work with Bun.

See the guide at: [Bun Installation](/docs/academy/website/bun).

Netuno doesn't restrict your technological choices. If you prefer, **you can use Node.js with NPM, PNPM, Yarn**, or any other package manager. The choice of frontend stack is entirely up to you.

:::tip KEEP YOUR TOOLS UPDATED
Regardless of the technology chosen, always use the latest versions to ensure compatibility, security, and performance.
:::

## Installation

Choose your desired version. The selection made here will apply to all command blocks on this page.

<Tabs groupId="versao">
  <TabItem value="stable" label="Stable Version" default>

The **Stable Version** is the approved edition of Netuno. It has undergone rigorous testing and is fully ready for use in production environments.

  </TabItem>
  <TabItem value="testing" label="Test Version">

:::danger DO NOT USE IN PRODUCTION
The **Test Version** contains the latest features and ongoing implementations. Being experimental, it may present instabilities. We recommend its use only to learn about new features, perform tests, or contribute to the platform's ecosystem.
:::

  </TabItem>
</Tabs>

### Behavior

Before proceeding, understand how the script interacts with your terminal:

1. **Folder creation:** The script automatically creates a folder called `netuno` in the directory where the terminal is open.
2. **Automatic navigation:** After creation, the terminal is redirected into that folder (equivalent to running `cd netuno`).

:::caution Recovering a Failed Installation
If the installation is interrupted, the terminal will already be positioned **inside** the failed folder. Running the command again will create a folder inside another folder.
:::

To clear the environment and start over from scratch:

**1. Go back one level in the terminal:**

```bash
cd ..
```

**2. Remove the failed folder:**

<Tabs groupId="os">
  <TabItem value="linux-mac" label="Linux or macOS" default>

```bash
rm -rf netuno
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```powershell
rmdir /s /q netuno
```

  </TabItem>
</Tabs>

**3. Restart the installation**.

### Linux or macOS

Most Linux distributions and macOS already include **cURL** or **Wget** by default. Check which one is available:

```bash
curl --version
```
```bash
wget --version
```

Follow the steps below:

**1. Create the folder and access it:**

```bash
mkdir -p netuno && cd netuno
```

**2. Download the installer** (choose only one method):

<Tabs groupId="versao">
  <TabItem value="stable" label="Stable Version" default>

**With cURL:**
```bash
curl -L https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -o netuno-setup.jar
```

**With Wget:**
```bash
wget https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -O netuno-setup.jar
```

</TabItem>
  <TabItem value="testing" label="Test Version">

**With cURL:**
```bash
curl -L https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -o netuno-setup.jar
```

**With Wget:**
```bash
wget https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -O netuno-setup.jar
```

  </TabItem>
</Tabs>

**3. Run the installation:**

<Tabs groupId="versao">
  <TabItem value="stable" label="Stable Version" default>

```bash
java -jar netuno-setup.jar install
```

  </TabItem>
  <TabItem value="testing" label="Test Version">

```bash
java -jar netuno-setup.jar install version=testing
```

  </TabItem>
</Tabs>

:::caution ATTENTION 
macOS has a native security mechanism (Gatekeeper) that can block applications downloaded via the terminal. 
:::

On **macOS**, to ensure that Netuno works without permission errors, run the command below immediately after step 3, still inside the `netuno` folder:

```bash
sudo xattr -r -d com.apple.quarantine .
```

The system will ask for your Mac's administrator password to confirm.

### Windows

We will use **PowerShell** to download and install. Open PowerShell from the Start menu by typing `powershell`.

**1. Create the folder, access it, and download the installer**. Copy the entire block and press Enter:

<Tabs groupId="versao">
  <TabItem value="stable" label="Stable Version" default>

```powershell
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar" -OutFile "netuno-setup.jar"
```

</TabItem>
  <TabItem value="testing" label="Test Version">

```powershell
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar" -OutFile "netuno-setup.jar"
```

  </TabItem>
</Tabs>

**2. Run the installation:**

<Tabs groupId="versao">
  <TabItem value="stable" label="Stable Version" default>

```powershell
java -jar netuno-setup.jar install
```

  </TabItem>
  <TabItem value="testing" label="Test Version">

```powershell
java -jar netuno-setup.jar install version=testing
```

  </TabItem>
</Tabs>

:::caution ATTENTION 
The standard installation usually does not require elevated privileges. However, if you receive an "Access Denied" message, close PowerShell, reopen it as **Administrator**, and run the command again.
:::

## Start the App DEMO

Once the installation is complete, run the command below inside the `netuno` folder to start the server with the demonstration application:

```bash
./netuno server
```

### Open the Application in the Browser

After startup, the browser will open automatically with the local server address. If it does not open, manually access one of the addresses below:

- [http://demo.local.netu.no:9000](http://demo.local.netu.no:9000)
- [http://localhost:9000](http://localhost:9000)

## Stop the Server

To shut down the server, press in the terminal:

#### CTRL + C

To start it again, use the same command `./netuno server`.

## Next Steps

Here are some ideas of what you can do now.

#### Beginners

If you are new to Netuno, start by creating your first form:

[Create my first form](/docs/academy/demonstration/config)

#### Tutorials

Explore practical development tutorials with Netuno:

[View development tutorials](/docs/get-started/tutorials)

#### Projects

See how to apply Netuno to real-world business projects:

[Explore projects and use cases](/docs/academy/understand/backoffice)
