---
id: logger
title: Logger
sidebar_label: Logger
---

Ao programar é essencial Apresentar informação em log (registo) para auxiliar o despiste de problemas e também para ter o histórico do que acontece para análise posterior.

Para isto o Netuno contém um recurso que pode ser utilizado em qualquer ficheiro de script, o `_logger`.

O Netuno utiliza o clássico <a href="https://logging.apache.org/log4j" target="_blank">Log4J</a> e a configuração encontra-se em:

`logs/log.xml`

Por padrão apenas apresenta mensagens de log do tipo WARN, ERROR e FATAL.

E para analisar mensagens de log do tipo TRACE, DEBUG ou INFO é necessário alterar o nível dos logs nas configurações para o nível desejado. Por exemplo para passar a apresentar as mensagens do tipo INFO basta alterar na configuração logs/log.xml onde está level=”warn” basta alterar o valor 'warn' para 'info', 'debug' ou 'trace' consoante o nível que preferir.


## info

_logger.**info**(mensagem : _string_, error = _null_ : _error_) : _void_

#### Descrição
Apresenta informação de log na consola do Netuno do tipo INFO.

#### Como usar
```javascript
// Verifique na consola do Netuno e 
// em logs/netuno.log
_logger.info('Minha mensagem!!!')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| mensagem     | string | obrigatório | A mensagem que deve ser registada em log. |
| erro | error |  | 	Regista em log o objeto de erro para obter mais detalhes, útil em try/catch. |

## trace

_logger.**trace**(mensagem : _string_, error = _null_ : _error_) : _void_

#### Descrição
Apresenta informação de log na consola do Netuno do tipo TRACE.

#### Como usar
```javascript
// Verifique na consola do Netuno e 
// em logs/netuno.log
_logger.trace('Minha mensagem!!!')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| mensagem     | string | obrigatório | A mensagem que deve ser registada em log. |
| erro | error |  | 	Regista em log o objeto de erro para obter mais detalhes, útil em try/catch. |


## debug

_logger.**debug**(mensagem : _string_, error = _null_ : _error_) : _void_

#### Descrição
Apresenta informação de log na consola do Netuno do tipo DEBUG.

#### Como usar
```javascript
// Verifique na consola do Netuno e 
// em logs/netuno.log
_logger.debug('Minha mensagem!!!')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| mensagem     | string | obrigatório | A mensagem que deve ser registada em log. |
| erro | error |  | 	Regista em log o objeto de erro para obter mais detalhes, útil em try/catch. |


## warn

_logger.**warn**(mensagem : _string_, error = _null_ : _error_) : _void_

#### Descrição
Apresenta informação de log na consola do Netuno do tipo WARN.

#### Como usar
```javascript
// Verifique na consola do Netuno e 
// em logs/netuno.log
_logger.warn('Minha mensagem!!!')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| mensagem     | string | obrigatório | A mensagem que deve ser registada em log. |
| erro | error |  | 	Regista em log o objeto de erro para obter mais detalhes, útil em try/catch. |


## error

_logger.**error**(mensagem : _string_, error = _null_ : _error_) : _void_

#### Descrição
Apresenta informação de log na consola do Netuno do tipo ERROR.

#### Como usar
```javascript
// Verifique na consola do Netuno e 
// em logs/netuno.log
_logger.error('Minha mensagem!!!')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| mensagem     | string | obrigatório | A mensagem que deve ser registada em log. |
| erro | error |  | 	Regista em log o objeto de erro para obter mais detalhes, útil em try/catch. |

## fatal

_logger.**fatal**(mensagem : _string_, error = _null_ : _error_) : _void_

#### Descrição
Apresenta informação de log na consola do Netuno do tipo FATAL.

#### Como usar
```javascript
// Verifique na consola do Netuno e 
// em logs/netuno.log
_logger.fatal('Minha mensagem!!!')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| mensagem     | string | obrigatório | A mensagem que deve ser registada em log. |
| erro | error |  | 	Regista em log o objeto de erro para obter mais detalhes, útil em try/catch. |