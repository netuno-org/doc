---
sidebar_position: 3
id: configuration
title: Configuração
sidebar_label: Configuração
---

> O processo abaixo é orientado para ambientes de desenvolvimento Linux.

## 1. Nome da app

Renomeia a pasta do projeto (o nome da app) usando apenas letras minúsculas, números e underscore.

## 2. Ficheiro de configuração

Copia o ficheiro de configuração de amostra, a partir da raiz da app:

```
cp config/sample.json config/_development.json
```

Para um ambiente de produção, usa em vez disso:

```
cp config/sample.json config/_production.json
```

Depois, altera a propriedade `name` na raiz do JSON para o nome da app escolhido no passo 1.

> Os ficheiros `config/_development.js` e `config/_production.js` já existem no projeto e servem para configurações dinâmicas/programáticas — normalmente não precisas de os tocar; quem se edita é o `.json` correspondente.

## 3. Base de dados

O CLUAR precisa de uma ligação a uma base de dados PostgreSQL. [Aprende a configurar aqui](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

No `config/_development.json` (ou `_production.json`), localiza `db.default` e substitui pelos dados da tua base de dados:

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

## 4. Segredo JWT

Em `auth.jwt.secret`, define um segredo aleatório com **32 caracteres**, usado para garantir a segurança da autenticação:

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

> Recomenda-se gerar o segredo com uma [ferramenta de geração de código aleatório](https://www.random.org/passwords/).

## 5. Altcha (alternativa ao reCAPTCHA)

O CLUAR suporta o [Altcha](https://altcha.org/) — uma alternativa ao Google reCAPTCHA baseada em prova de trabalho (*proof-of-work*), sem depender de serviços externos nem recolher dados do visitante. É usado no login e no registo de utilizadores.

Existem dois interruptores, em locais diferentes do `.json`:

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

- `auth.altcha.enabled` — ativa a verificação do Altcha no lado do servidor (Netuno). Sem isto a `true`, o Altcha não é validado, mesmo que apareça no website.
- `auth.altcha.admin.enabled` — ativa o Altcha também no login do **backoffice do Netuno** (porta `9000`), separado do login do website.

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

- `settings.cluar.website.auth.altcha` — espelha a mesma opção do lado do website: controla se o widget do Altcha é mostrado no formulário de login/registo do site.

> Para o Altcha funcionar, ativa `enabled: true` **nos dois lados** — o servidor precisa de validar, e o website precisa de mostrar o widget.

## 6. Definições do CLUAR

Em `settings.cluar`, ajusta a configuração do website:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Website Name",
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

- `website.url` — URL onde o website vai correr.
- `website.name` — nome do website.
- `website.services.api` — URL da API de serviços do Netuno, consumida pelo website.
- `website.auth.providers` — ativa/desativa métodos de login social (Discord, Facebook, GitHub, Google).
- `uglifyjs` — controla se o código do website é minificado.

## 7. Arranque automático do website (opcional)

O website pode arrancar automaticamente junto com o servidor Netuno, através da lista `commands`:

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

Basta colocar `enabled` como `true` na entrada com `"path": "website"`. Assim, ao correr `./netuno server app=cluar`, o website arranca junto sem precisares de o iniciar manualmente noutro terminal.

## Próximo passo

Com a app configurada, segue para [Execução](/docs/academy/cluar/execution).