---
sidebar_position: 4
id: versions
title: Versões
sidebar_label: Versões
---


# Versões

Se você está começando a utilizar o Netuno, recomendamos realizar a **instalação padrão** para garantir o uso da versão mais recente e estável da plataforma.

O Netuno também permite instalar versões anteriores específicas ou versões experimentais ainda em desenvolvimento, útil para ambientes de teste ou reprodução de bugs.

Antes de instalar ou atualizar para uma versão específica, consulte a lista oficial de releases:

- **Lista de Versões:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Dica
Verifique as notas da release antes de instalar uma versão específica, especialmente em ambientes de produção.
:::

## Instalação de uma Versão Específica

Para instalar ou atualizar o Netuno para uma versão específica, adicione o parâmetro `version` ao comando de instalação com o identificador da versão desejada.

Escolha o método que melhor se adapta ao seu ambiente:

### Método 1: Instalador Java

Use este método para novas instalações:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Método 2: Executor Principal

Use este método se o Netuno já está instalado e você quer atualizar para uma versão específica:

```bash
./netuno install version=20230417.0119
```

### Método 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Substitua `20230417.0119` pelo identificador da versão desejada, disponível na **[lista de releases](https://github.com/netuno-org/platform/releases)**.

Após executar o comando, o Netuno iniciará automaticamente o processo de instalação da versão indicada.
:::