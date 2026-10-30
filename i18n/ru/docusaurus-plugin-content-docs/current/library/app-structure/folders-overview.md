---
sidebar_position: 1
id: folders-overview
title: Обзор папок
sidebar_label: Обзор
---

Изучите папки и файлы приложений.

## Структура

В корневой папке, где установлен Netuno, можно найти папку `📂 apps`.

В папке `📂 apps` находятся все приложения, доступные на платформе Netuno.

Некоторые приложения можно создавать локально, а другие могут быть внешними, например приложения, являющиеся клонами репозиториев GIT.

Посмотрите полную структуру только что созданного приложения от корня Netuno:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>мое_приложение</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> В папке `apps` содержатся все приложения, доступные в Netuno.

Изначально в этой папке уже есть приложение `demo`, которое, как следует из названия, является **демо**_нстрацией_ функциональных возможностей Netuno.
 
При создании нового приложения добавляется новая папка с той же иерархией подпапок, как показано выше.

## Основные папки

В папке приложения есть основные папки, каждая из которых имеет определенное назначение.

Основные папки:

- [📂 config](config) — Общие настройки;
- [📂 dbs](dbs) — Всё, что связано с базой данных;
- [📂 docs](docs) — Документация и другие документы в целом;
- [📂 public](public) — Публичный контент, доступный напрямую по URL, например изображения, JavaScript и CSS;
- [📂 server](server) — Код бэкенда, например сервисы, задания, шаблоны, отчёты и весь API в целом.
- [📂 storage](storage) — Организация файлов, связанных с данными или используемых в коде.
- [📂 ui](ui) — Пользовательский интерфейс бэк-офиса, фронтенд-код, например дашборды и другие функции.