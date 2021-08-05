---
id: auth
title: Auth
sidebar_label: Auth
---

Reune as operações de validação de autenticação do Netuno.

```javascript
if (_auth.isJWT() && _auth.isAdmin()) {
    _log.info('Administrador logado com JWT Token!');
}
```

---

## check

---

#### _auth.check(senha: string) : _boolean_
##### Descrição

Verifica se a password é válida para o utilizador autenticado.

##### Como Usar

```javascript
if (_auth.check(_req.getString('pass'))) {
    _log.info('Senha válida!');
} else {
    _log.info('Senha inválida!');
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| senha | string | Senha. |

##### Retorno

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

#### _auth.check(utilizador: string, senha: string) : _boolean_
##### Descrição

Verifica se os dados de autenticação, utilizador e senha, são válidos.

##### Como Usar

```javascript
if (_auth.check(_req.getString('user'), _req.getString('pass'))) {
    _log.info('Login válido!');
} else {
    _log.info('Login inválido!');
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| utilizador | string | Utilizador. |
| senha | string | Senha. |

##### Retorno

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

## isAdmin

---

#### _auth.isAdmin() : _boolean_
##### Descrição

Verifica se o utilizador que está autenticado é **admin**_istrator_.

##### Como Usar

```javascript
if (_auth.isAdmin()) {
    _log.info('Administrador Logado!');
}
```

##### Retorno

( _boolean_ )

Se o utilizador que está autenticado é **admin** (administrador) então retorna _true_.

---

## isDev

---

#### _auth.isDev() : _boolean_
##### Descrição

Verifica se o utilizador que está autenticado é **dev**_eloper_.

##### Como Usar

```javascript
if (_auth.isDev()) {
    _log.info('Desenvolvedor Logado!');
}
```

##### Retorno

( _boolean_ )

Se o utilizador que está autenticado é **dev** (desenvolvedor) então retorna _true_.

---

## isJWT

---

#### _auth.isJWT() : _boolean_
##### Descrição

Indica se o utilizador está autenticado com JSON Web Token.

##### Como Usar

```javascript
if (_auth.isJWT()) {
    _log.info('Logado com JWT!');
}
```

##### Retorno

( _boolean_ )

Se o utilizador está autenticado com JSON Web Token retorna _true_.

---

## isSession

---

#### _auth.isSession() : _boolean_
##### Descrição

Indica se o utilizador está autenticado com sessão.

##### Como Usar

```javascript
if (_auth.isSession()) {
    _log.info('Logado com sessão!');
}
```

##### Retorno

( _boolean_ )


---

