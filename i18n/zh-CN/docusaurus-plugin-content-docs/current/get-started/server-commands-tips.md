---
sidebar_position: 2
id: server-commands-tips
title: 服务器、命令与提示
sidebar_label: 服务器、命令与提示
---

# 服务器命令

Netuno 主要命令参考。请在 Netuno 安装目录下的**终端**中执行这些命令。

:::tip
不知道如何进入 Netuno 目录？请参阅[安装](/docs/get-started/installation)指南。
:::

---

## 启动服务器

使用 `demonstração` 应用启动服务器。

```bash
./netuno server
```

---

## 在 APP 中启动服务器

使用由 `app` 参数指定的特定应用启动服务器。如果未指定任何应用，则启动演示应用。

```bash
./netuno server app=APP_NAME
```

---

## 新建应用

从零创建新应用，并询问初始信息和配置。

```bash
./netuno app
```

---

## 列出命令

列出所有可用命令和参数及其说明。

```bash
./netuno help
```

---

## 性能统计

显示存储在 `logs/stats-*` 中的最新性能信息。

```bash
./netuno stats
```

---

## 更新到稳定版

将 Netuno 更新到最新的稳定版。

```bash
./install-stable
```

---

## 更新到测试版

将 Netuno 更新到最新的开发版。

```bash
./install-testing
```