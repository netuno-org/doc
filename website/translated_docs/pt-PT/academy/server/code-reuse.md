---
id: code-reuse
title: Reaproveitamento de Codigo
sidebar_label: Reaproveitamento de codigo
---

## Introdução

Dentre os diversos recursos para simplificação do desenvolvimento que o Netuno oferece, está o reaproveitamento de código de forma simples e intuitiva.
Imagine que está a desenvolver uma tarefa complexa que, a todo o momento, requer a execução de uma ou mais ações. Normalmente, para isso, criamos métodos/funções para evitar estar a reescrever a lógica repetidas vezes. No entanto, escrever métodos/funções pode gerar um cenário de preocupação, se estamos a seguir boas práticas ou até mesmo a prejudicar a legibilidade do código. Pensando nisso, o Netuno traz a capacidade de escrever a sua lógica de forma separada em outros ficheiros e depois importá-los facilmente no código, sem alterar a organização do mesmo. Ou seja, ele estará lá quando precisar, mas não irá poluir a sua lógica principal.

## Exemplos Práticos

Em uma App Netuno, os ficheiros criados a partir do diretório `/server/core/` estão disponíveis para serem importados em qualquer serviço de backend da seguinte maneira: Supondo que temos o seguinte código num ficheiro `core/utils/user.js` para reutilizar em diversos locais:

```
const mailAlreadyInUse = (email) => {
    const alredyInUse = _db.queryFirst(
        `SELECT 
            CASE WHEN COUNT(1) > 0 THEN TRUE ELSE FALSE END AS inUse
        FROM netuno_user
        WHERE 1 = 1
            AND mail = ?
        `, email
    );

    return alredyInUse.getBoolean("inUse");
}
```
No local de destino fazemos o seguinte:
```
//_core: utils/user

const mail = _req.getString("mail");

if (mailAlreadyInUse(mail)) {
    _out.json(
        _val.map()
            .set("result", false)
            .set("error","mail already exists")
    )
    _exec.stop();
}
```
Não apenas a função demonstrada, mas qualquer outra função ou variável que esteja no ficheiro `user.js` que foi importado estará disponível para ser utilizada.

> Ao utilizar este recurso, é necessário ter atenção para não importar ficheiros que possam coincidir no mesmo local.

