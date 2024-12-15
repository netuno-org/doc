---
id: monitor
title: Monitor
sidebar_label: Monitor
---

Permite obter os dados de performance.

---

## performanceData

---

#### <span style={{fontWeight: 'normal'}}>_monitor</span>.<span style={{color: '#008000'}}>performanceData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de performance como utilização do CPU, Memória e Disco do processo do servidor do Netuno como do computador no geral.

##### Como Usar

```javascript
// Verifica o consumo atual, quanto tem livre e o máximo de memória:
_log.info(
    'Estado da Memória',
    _monitor.performanceData()
        .getValues('memory')
        .getValues('process')
)
```

##### Retorno

( _[Values](../objects/Values)_ )

Dados de performance como CPU, Memória e Disco.

---

## stats

---

#### <span style={{fontWeight: 'normal'}}>_monitor</span>.<span style={{color: '#008000'}}>stats</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Apresenta as informações estatísticas de performance, como os dados do CPU, Memória e Disco, no terminal e nos logs.

##### Como Usar

```javascript
// Imprime no terminal e nos logs os dados de performance:
_monitor.stats()
```

##### Retorno

( _void_ )


---

