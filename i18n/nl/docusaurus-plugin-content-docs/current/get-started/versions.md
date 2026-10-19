---
sidebar_position: 4
id: versions
title: Versies
sidebar_label: Versies
---


# Versies

Als u Netuno begint te gebruiken, raden we de **standaardinstallatie** aan om te garanderen dat u de meest recente en stabiele versie van het platform gebruikt.

Netuno maakt het ook mogelijk specifieke eerdere versies of nog in ontwikkeling zijnde experimentele versies te installeren, wat nuttig is voor testomgevingen of het reproduceren van bugs.

Raadpleeg voordat u een specifieke versie installeert of bijwerkt de officiële releaselijst:

- **Versielijst:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Tip
Verifieer de releaseopmerkingen voordat u een specifieke versie installeert, vooral in productieomgevingen.
:::

## Installatie van een specifieke versie

Om Netuno naar een specifieke versie te installeren of bij te werken, voegt u de parameter `version` toe aan de installatieopdracht met de identificatie van de gewenste versie.

Kies de methode die het beste bij uw omgeving past:

### Methode 1: Java-installatieprogramma

Gebruik deze methode voor nieuwe installaties:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Methode 2: Hoofduitvoerder

Gebruik deze methode als Netuno al is geïnstalleerd en u naar een specifieke versie wilt bijwerken:

```bash
./netuno install version=20230417.0119
```

### Methode 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Vervang `20230417.0119` door de identificatie van de gewenste versie, beschikbaar in de **[releaselijst](https://github.com/netuno-org/platform/releases)**.

Nadat u de opdracht hebt uitgevoerd, start Netuno automatisch het installatieproces van de opgegeven versie.
:::