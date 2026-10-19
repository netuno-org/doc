---
sidebar_position: 4
id: versions
title: Versions
sidebar_label: Versions
---


# Versions

If you are starting to use Netuno, we recommend performing the **standard installation** to ensure you use the latest and most stable version of the platform.

Netuno also allows installing specific previous versions or experimental versions still in development, useful for testing environments or reproducing bugs.

Before installing or updating to a specific version, check the official list of releases:

- **List of Versions:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Tip
Check the release notes before installing a specific version, especially in production environments.
:::

## Installing a Specific Version

To install or update Netuno to a specific version, add the `version` parameter to the installation command with the identifier of the desired version.

Choose the method that best suits your environment:

### Method 1: Java Installer

Use this method for new installations:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Method 2: Main Executor

Use this method if Netuno is already installed and you want to update to a specific version:

```bash
./netuno install version=20230417.0119
```

### Method 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Replace `20230417.0119` with the identifier of the desired version, available in the **[list of releases](https://github.com/netuno-org/platform/releases)**.

After running the command, Netuno will automatically start the installation process for the indicated version.
:::