---
id: debug
title: Depuração (Debug)
sidebar_label: Depurar
---

Permite analisar a execução do código em tempo real.

## Introdução 

Durante a codificação muitas vezes acontece de ser necessário analisar a execução do código.

No caso do Netuno podemos utilizar:

- `_out.print` - Para mostrar alguma informação na saída de dados (_output_).
- `_log.info` - Para mostrar alguma informação no terminal do servidor do Netuno.

Só que acontece também de haver cenários mais complexos onde queremos analisar com maior profundidade, por exemplo
verificar vários valores de objetos e variáveis ao mesmo tempo, testar a execução de algum código específico neste
contexto, tudo para entender melhor o comportamento.

É sempre possível utilizar nestes casos mais complexos os métodos mostrados acima como o `_out.print` e o 
`_log.info`, só que podemos cair em um processo muito trabalhoso e confuso para conseguir chegar a uma boa 
compreensão do que está acontecendo.

A depuração (_debug_) serve justamente para fornecer um bom entendimento do que está acontecendo, especialmente em
situações mais complexas.

> Depuração (em inglês: _debugging_, _debug_) é o processo utilizado no desenvolvimento para encontrar e reduzir 
> defeitos, falhas, comportamentos errados, etc.

A depuração pode ser dividida em 3 mecanismos importantes:

- Ponto de Interrupção (_Break Point_): Faz a execução do código parar, podemos então iniciar a investigação onde
o código está parado.
- Observação (_Watch_): Permite observar os valores das variáveis onde o código está parado.
- Execução de Código (_Code Execution_): Podemos executar qualquer código temporariamente, para realizar algum
teste no ponto em que a execução está parada para depuração.

## Ponto de Interrupção (_Breakpoint_)

O ponto de interrupção (_breakpoint_) é onde no código a execução deve ser pausada para iniciar o processo de
depuração.

Para iniciar a depuração em qualquer código e de qualquer linguagem suportada pelo Netuno, como JavaScript, Python,
Kotlin, Ruby, ou Groovy, no local em que deseja iniciar, coloque:

```javascript
_exec.debug()
```

> Como o Netuno é poliglota, funciona com qualquer linguagem suportada, como: JavaScript, Python, Kotlin, Ruby, 
> ou Groovy.

Agora para iniciar a depuração execute o código e a execução ficará presa, em pausa.

Então vamos na interface de desenvolvimento, no backoffice em `Construir`, e no menu do lado esquerdo temos a opção:

- **Depurar**

Onde podemos encontrar a dupla seta verde que indica que ao clicar nela a execução poderá continuar:

![Debug - Seguir Adiante](/docs/assets/academy/server/debug/step-over-pt.jpg "Debug - Seguir Adiante")

> A dupla seta verde interrompe a pausa da depuração fazendo com que a execução do código continue normalmente do 
> ponto em que parou.

## Observar (_Watch_)

Para ver o valor das variáveis utilizamos a lupa amarela.

Ao clicar na lupa amarela podemos informar o nome da variável que queremos observar o seu valor.

![Debug - Observar](/docs/assets/academy/server/debug/watch-pt.jpg "Debug - Observar")

O nome da variável e o seu valor atual aparecem na lista, podemos observar o valor de várias variáveis, caso alguma
variável não exista então não haverá valor.

## Executar Código (_Execute Code_)

Podemos injetar código para ser executado no contexto do ponto de interrupção, ou seja onde a depuração está
acontecendo.

Clicamos no símbolo de código azul e podemos colocar o código que pretendemos executar.

![Debug - Executar Código](/docs/assets/academy/server/debug/execute-code-pt.jpg "Debug - Executar Código")

O código executado é apresentado na lista abaixo com a indicação de que o código foi executado com sucesso, caso 
haja algum erro então a mensagem de erro é apresentada junto com o código.

## Configuração para Depuração Remota

Ao executar o Netuno localmente não deverá ser necessário nenhuma configuração.

Por que no desenvolvimento local o `host` do endereço do WebSocket é configurado automaticamente.

Nos endereços locais normalmente utilizam estes valores como `host`:

- `localhost`
- `127.0.0.1`
- `192.168.1.*` - Exemplo de qualquer IP de rede local.
- `minha-app.local.netu.no`

> Endereços locais não precisam de qualquer configuração, portanto esta etapa pode ser pulada.

Já em produção ou no desenvolvimento remoto como em container ou VPN, poderá ser necessário definir o endereço
externo (IP ou domínio) que está sendo utilizado para a conexão de WebSocket.

Neste caso, navegue dentro da aplicação que está sendo desenvolvida até no arquivo de configuração de ambiente.
Neste exemplo, iremos utilizar o arquivo de ambiente de desenvolvimento, que fica em:

- 📂 `config/_development.json`

Verifique se por acaso já não existe a configuração, se não existir adicione no fim do arquivo de configuração
(em formato JSON) os parâmetros de configuração do endereço externo para ser utilizado na conexão do WebSocket,
como por exemplo:

```json
{
    ...
    "dev": {
        "ws": {
          "host": "dev.netuno.org"
        }
    },
    ...
}
```

> A informação da porta não deve ser adicionada ao endereço de `host` no WebSocket.

Também pode ser passado vários endereços de `host` em um array:

```json
{
    ...
    "dev": {
        "ws": {
          "host": [ "meu-container.dev.netuno.org", "meu-projeto.com" ]
        }
    },
    ...
}
```

### Proxy em Produção (NGINX)

Em produção é comum ser utilizado algum servidor web que faz proxy reverso, como o NGINX.

Para a depuração funcionar através de proxy é então necessário adicionar uma configuração específica para
encaminhar o tráfego relacionado com o endereço de WebSocket:

```
server {
    listen 443 ssl;
    server_name meu-projeto.com;
    
    ...
    
    location /dev/ws/ {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_http_version 1.1;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
        add_header X-Frame-Options "";
    }
}
```

## Conclusão

Com a interface de depuração e o comando `_exec.debug()` podemos realizar uma investigação profunda do que está 
acontecendo.

Na maioria das linguagens e tecnologias de backend, especialmente as tecnologias de script, o debug costuma ser 
impossível ou complexo.

O Netuno oferece uma forma simples para depurar o código poliglota que funciona nas diversas linguagens suportadas
como JavaScript, Python, Ruby, Kotlin e Groovy.

> Permite a depuração poliglota em ambientes remotos e em produção.

Utilizar a depuração agiliza muito o desenvolvimento oferecendo maior precisão para resolver problemas e torna-se 
uma ferramenta essencial, experimente.