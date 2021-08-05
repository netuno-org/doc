---
id: request
title: Request
sidebar_label: Request
---

Com o recurso Request pode obter qualquer parâmetro vindo no pedido do browser.

Por exemplo, permite obter qualquer informação que venha no header do HTTP, na URL como query string, ou submissão de um formulário.

Este recurso é do tipo de objecto [Values](library/objects/values.md).

```javascript
// Obtém o parâmetro ID seja por GET ou POST
var id = _req['id']

// Obtém apenas o ID vindo por get:
var idGET = _req.get['id']

// Obtém apenas o ID vindo por post:
var idPOST = _req.post['id']
```
