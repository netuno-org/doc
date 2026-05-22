---
sidebar_position: 2
id: server-commands-tips
title: Servidor, Comandos & Dicas
sidebar_label: Servidor, Comandos & Dicas
---

# Comandos do Servidor

Referência dos principais comandos do Netuno. Execute-os no **terminal**, a partir da pasta onde o Netuno está instalado.

:::tip
Não sabe como chegar na pasta do Netuno? Consulte o guia de [Instalação](/docs/get-started/installation).
:::

---

### Iniciar o servidor

Inicia o servidor com a aplicação de `demonstração`.

```bash
./netuno server
```

---

### Iniciar o servidor na APP

Inicia o servidor com a aplicação específica definida pelo parâmetro `app`. Caso nenhuma seja definida, será iniciada a aplicação de demonstração.

```bash
./netuno server app=APP_NAME
```

---

### Nova Aplicação

Cria uma nova aplicação do zero, solicitando informações e configurações iniciais.

```bash
./netuno app
```

---

### Listar Comandos

Lista todos os comandos e parametrizações disponíveis com as respectivas descrições.

```bash
./netuno help
```

---

### Estatísticas de Performance

Apresenta as informações de performance mais recentes, armazenadas em `logs/stats-*`.

```bash
./netuno stats
```

---

### Atualização para a Versão Estável

Atualiza o Netuno para a versão estável mais recente.

```bash
./install-stable
```

---

### Atualização para a Versão Em Teste

Atualiza o Netuno para a versão mais recente em desenvolvimento.

```bash
./install-testing
```