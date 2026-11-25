---
id: duckdb
title: DuckDB
sidebar_label: DuckDB
---

## Introduction

DuckDB is an open-source analytical SQL (OLAP) database designed to run embedded within your application without
a separate server. It is often described as the "SQLite for analytics" because it combines the simplicity of
SQLite deployment with an extremely fast columnar and vectorized execution engine for complex queries.

The main advantages are:

1. Fast and simple use without the need for installation and configuration.
2. High performance with columnar architecture and vectorized execution engine.
3. Direct querying of Parquet, CSV, and JSON files using SQL, without the need for pre-processing.
4. Portability for direct and fast integration of database files transferred between servers.
5. You can have the entire database in memory for fast processing of temporary data.

## Configuration

Netuno supports the use of DuckDB as the primary database.

To use DuckDB, the database engine must be specified in the application configuration, using the parameter 
`engine`, such as `duckdb` or simply `duck`.

### Files

See the example of how to configure DuckDB in the application:

```json title="config/_ENVIRONMENT.json"
  ...
  "db": {
    "default":  {
      "engine": "duck",
      "name": "mydb"
    }
  },
  ...
```

The database files will be placed inside the `dbs` folder within the application.

You can use a different folder for the database by configuring the `path`:

```json title="config/_ENVIRONMENT.json"
  ...
  "db": {
    "default":  {
      "engine": "duckdb",
      "name": "mydb",
      "path": "/opt/dbs"
    }
  },
  ...
```

The database files are created within the folder specified by `path`.

If `name` is not specified, then the path contains the complete path including the database name, for example:

```json title="config/_ENVIRONMENT.json"
  ...
  "db": {
    "default":  {
      "engine": "duckdb",
      "path": "/opt/dbs/mydb"
    }
  },
  ...
```

Alternatively, you can configure it using the JDBC URL; this way, the exact location where the database files 
will be placed needs to be specified.

```json title="config/_ENVIRONMENT.json"
  ...
  "db": {
    "default":  {
      "engine": "duck",
      "url": "jdbc:duckdb:/opt/mydb",
    }
  },
  ...
```

### Memory

For memory-only databases:

```json title="config/_ENVIRONMENT.json"
  ...
  "db": {
    "default":  {
      "engine": "duck",
      "name": "mydb",
      "memory": true
    }
  },
  ...
```

Therefore, no files on disk will be used.

Alternatively, you can configure it using the JDBC URL:

```json title="config/_ENVIRONMENT.json"
  ...
  "db": {
    "default":  {
      "engine": "duckdb",
      "url": "jdbc:duckdb:memory:mydb",
    }
  },
  ...
```

## Conclusion

In summary, DuckDB is a powerful tool for performing data analysis locally. It doesn't replace a robust database 
server, but it makes local analysis much faster and cheaper.

DuckDB should be avoided:

1. When multiple applications use the same database.
2. For scalability, because it doesn't allow distributed processing across multiple servers.
3. At high continuous write rates, as it's not optimized for massive data injection.

For performing massive queries locally at high speed, DuckDB is an excellent option, and its integration into 
the Netuno platform is very simple and versatile.