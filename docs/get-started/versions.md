---
sidebar_position: 4
id: versions
title: Versions
---


# Version

If you are starting to use Netuno, we recommend performing a **standard installation** to ensure you are using the latest and most stable version of the platform.

Netuno also allows you to install specific older versions or experimental versions still under development, useful for testing environments or bug replication.

Before installing or updating to a specific version, consult the official release list and its changelogs:

- **Version List:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Tip
Check the release notes before installing a specific version, especially in production environments.
:::

## Installing a Specific Version

To install or update Netuno to a specific version, add the `version` parameter to the installation command with the identifier of the desired version.

Choose the method that best suits your environment:

### Method 1: Java Installer

Use this method for new installations or when using the setup wizard:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Method 2: Netuno Executor

Use this method if Netuno is already installed and you want to update to a specific version:

```bash
./netuno install version=20230417.0119
```

***

### Method 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Replace `20230417.0119` with the identifier of the desired version, available in the [release list](https://github.com/netuno-org/platform/releases).

After running the command, Netuno will automatically start the installation process for the indicated version.
:::

