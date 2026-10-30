---
id: SSHFile
title: SSHFile
sidebar_label: SSHFile
---

Dados de um ficheiro via SSH.

---

## getName

---

#### <span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( _string_ )

O nome do ficheiro.

---

## getParent

---

#### <span style={{color: '#008000'}}>getParent</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome da pasta pai do ficheiro.

##### Retorno

( _string_ )

O nome da pasta pai do ficheiro.

---

## getPath

---

#### <span style={{color: '#008000'}}>getPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o caminho do ficheiro.

##### Retorno

( _string_ )

Caminho do ficheiro.

---

## isDirectory

---

#### <span style={{color: '#008000'}}>isDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se é um diretório.

##### Retorno

( _boolean_ )

Se é um diretório ou não.

---

## isRegularFile

---

#### <span style={{color: '#008000'}}>isRegularFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se é um ficheiro regular, ou seja, não é um diretório, link simbólico ou qualquer outro tipo de arquivo especial.

##### Retorno

( _boolean_ )

Se é um ficheiro regular ou não.

---

## setDirectory

---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Define se é um diretório.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _boolean_ | Se é ou não um diretório. |

##### Retorno

( _void_ )


---

## setName

---

#### <span style={{color: '#008000'}}>setName</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Define o nome do ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome a ser definido. |

##### Retorno

( _void_ )


---

## setParent

---

#### <span style={{color: '#008000'}}>setParent</span>(<span style={{color: '#FF8000'}}>pastaPai</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Define o nome da pasta pai do ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pastaPai** | _string_ | Nome da pasta pai a ser definido. |

##### Retorno

( _void_ )


---

## setPath

---

#### <span style={{color: '#008000'}}>setPath</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Define o caminho do ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho a ser definido. |

##### Retorno

( _void_ )


---

## setRegularFile

---

#### <span style={{color: '#008000'}}>setRegularFile</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Retorna se é um ficheiro regular, ou seja, não é um diretório, link simbólico ou qualquer outro tipo de arquivo especial.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _boolean_ | Se é ou não um ficheiro regular. |

##### Retorno

( _void_ )


---

