---
id: auth
title: Auth
sidebar_label: Auth
---

Gathers Netuno's authentication operations.

```javascript
if (_auth.isJWT() && _auth.isAdmin()) {
    _log.info('Administrator logged with JWT Token!');
}
```

---

## check

---

#### _auth.check(senha: string) : _boolean_
##### Description

Verifica se a password é válida para o utilizador autenticado.

##### How To Use

```javascript
if (_auth.check(_req.getString('pass'))) {
    _log.info('Senha válida!');
} else {
    _log.info('Senha inválida!');
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| senha | string | Senha. |

##### Return

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

#### _auth.check(utilizador: string, senha: string) : _boolean_
##### Description

Verifica se os dados de autenticação, utilizador e senha, são válidos.

##### How To Use

```javascript
if (_auth.check(_req.getString('user'), _req.getString('pass'))) {
    _log.info('Login válido!');
} else {
    _log.info('Login inválido!');
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| utilizador | string | Utilizador. |
| senha | string | Senha. |

##### Return

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

## isAdmin

---

#### _auth.isAdmin() : _boolean_
##### Description

Verifica se o utilizador que está autenticado é **admin**_istrator_.

##### How To Use

```javascript
if (_auth.isAdmin()) {
    _log.info('Administrador Logado!');
}
```

##### Return

( _boolean_ )

Se o utilizador que está autenticado é **admin** (administrador) então retorna _true_.

---

## isDev

---

#### _auth.isDev() : _boolean_
##### Description

Verifica se o utilizador que está autenticado é **dev**_eloper_.

##### How To Use

```javascript
if (_auth.isDev()) {
    _log.info('Desenvolvedor Logado!');
}
```

##### Return

( _boolean_ )

Se o utilizador que está autenticado é **dev** (desenvolvedor) então retorna _true_.

---

## isJWT

---

#### _auth.isJWT() : _boolean_
##### Description

Indica se o utilizador está autenticado com JSON Web Token.

##### How To Use

```javascript
if (_auth.isJWT()) {
    _log.info('Logado com JWT!');
}
```

##### Return

( _boolean_ )

Se o utilizador está autenticado com JSON Web Token retorna _true_.

---

## isSession

---

#### _auth.isSession() : _boolean_
##### Description

Indica se o utilizador está autenticado com sessão.

##### How To Use

```javascript
if (_auth.isSession()) {
    _log.info('Logado com sessão!');
}
```

##### Return

( _boolean_ )


---

