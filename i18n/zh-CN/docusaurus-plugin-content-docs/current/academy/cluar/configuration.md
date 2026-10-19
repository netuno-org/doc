---
sidebar_position: 3
id: configuration
title: 配置
sidebar_label: 配置
---

> 以下流程面向 Linux 开发环境。

## 1. 应用名称

将项目文件夹（即应用名称）重命名为仅使用小写字母、数字和下划线。

## 2. 配置文件

在应用根目录下复制示例配置文件：

```
cp config/sample.json config/_development.json
```

对于生产环境，请改用：

```
cp config/sample.json config/_production.json
```

然后，将 JSON 根部的 `name` 属性改为第 1 步中选择的应用名称。

> 项目中已经存在 `config/_development.js` 和 `config/_production.js` 文件，用于动态/编程式配置——通常不需要改动它们；需要编辑的是对应的 `.json` 文件。

## 3. 数据库

CLUAR 需要连接到 PostgreSQL 数据库。[在此了解如何配置](https://doc.netuno.org/pt/docs/academy/server/database/psql/)。

在 `config/_development.json`（或 `_production.json`）中，找到 `db.default` 并替换为你的数据库信息：

```json
"db": {"default": {
    "password": "Your-DB-SeCr3t-Her3",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. JWT 密钥

在 `auth.jwt.secret` 中，定义一个包含 **32 个字符** 的随机密钥，用于保障身份验证安全：

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "ThisSecretMustContains32Chars!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> 建议使用[随机代码生成工具](https://www.random.org/passwords/)生成该密钥。

## 5. Altcha（reCAPTCHA 的替代方案）

CLUAR 支持 [Altcha](https://altcha.org/)——一种基于工作量证明（*proof-of-work*）的 Google reCAPTCHA 替代方案，不依赖外部服务，也不收集访问者数据。它用于登录和用户注册。

在 `.json` 的不同位置有两个开关：

```json
"auth": {
    "altcha": {
        "enabled": false,
        "admin": {
            "enabled": false
        }
    }
}
```

- `auth.altcha.enabled` — 在服务器端（Netuno）启用 Altcha 验证。若未将其设为 `true`，即使网站上显示 Altcha，也不会进行验证。
- `auth.altcha.admin.enabled` — 还会在 **Netuno 后台**（端口 `9000`）的登录中启用 Altcha，该登录与网站登录相互独立。

```json
"settings": {
    "cluar": {
        "website": {
            "auth": {
                "altcha": {
                    "enabled": false,
                    "admin": {
                        "enabled": false
                    }
                }
            }
        }
    }
}
```

- `settings.cluar.website.auth.altcha` — 对应网站端的同一选项：控制是否在网站的登录/注册表单中显示 Altcha 小部件。

> 要让 Altcha 生效，需要在**两端**都启用 `enabled: true`——服务器端需要验证，网站端需要显示小部件。

## 6. CLUAR 设置

在 `settings.cluar` 中，调整网站配置：

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "网站名称",
            "analytics": null,
            "mapbox": {
                "dark": false,
                "accessToken": null
            },
            "services": {
                "api": "http://localhost:9000/services/"
            },
            "auth": {"providers": {
                "discord": false,
                "facebook": false,
                "github": false,
                "google": false
            }}
        },
        "uglifyjs": false
    }
}
```

- `website.url` — 网站运行的 URL。
- `website.name` — 网站名称。
- `website.services.api` — 网站所调用的 Netuno 服务 API 的 URL。
- `website.auth.providers` — 启用/禁用社交登录方式（Discord、Facebook、GitHub、Google）。
- `uglifyjs` — 控制是否压缩网站代码。

## 7. 网站自动启动（可选）

网站可以通过 `commands` 列表随 Netuno 服务器自动启动：

```json
"commands": [
    {
        "path": "website",
        "command": "bun run dev",
        "install": "bun install",
        "enabled": true
    }
]
```

只需将 `"path": "website"` 条目中的 `enabled` 设为 `true`。这样，运行 `./netuno server app=cluar` 时，网站会一并启动，无需在另一个终端手动启动。

## 下一步

应用配置完成后，请前往[执行](/docs/academy/cluar/execution)。