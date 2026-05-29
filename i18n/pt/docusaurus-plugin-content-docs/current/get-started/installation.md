---
sidebar_position: 1
id: installation
title: Instalação
sidebar_label: Instalação
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução

Bem-vindo ao guia de instalação do **Netuno**, a plataforma *low-code*, poliglota e *open source* desenvolvida para acelerar a criação dos seus projetos e facilitar a configuração do ambiente de desenvolvimento.

Aqui você constrói aplicações full-stack robustas de forma ágil, combinando a velocidade do low-code com o poder da codificação tradicional.

Antes de começar, verifique o que precisa ter instalado no seu computador.

### Pré-requisitos

- **Java** *(Apenas para o instalador)*

É necessário ter o **Java** previamente instalado no seu sistema operacional. Ele será usado **exclusivamente** para rodar o script inicial de instalação do Netuno.

- **GraalVM** *(Instalação Automática)* 

Durante a instalação, o motor **GraalVM** é baixado e configurado automaticamente dentro da própria pasta do Netuno. A partir desse ponto, o Java do GraalVM isolado será utilizado para rodar a plataforma, garantindo estabilidade e alta performance sem interferir nas configurações globais da sua máquina.

Para saber mais sobre a tecnologia, acesse: [GraalVM](https://www.graalvm.org/).

:::info Requisitos de Frontend são Opcionais
A instalação de ferramentas de frontend (como Node.js, NPM ou Yarn) é totalmente opcional. Você só precisará configurá-las se o seu objetivo for desenvolver interfaces avançadas em modo full-stack.
:::

### Backend - Java

Esta etapa garante que o ambiente esteja preparado para executar o instalador da plataforma. É necessário ter o **Java versão 11 ou superior** instalado.

Verifique se o Java já está instalado executando o comando abaixo no terminal:

```bash
java -version
```

Caso não esteja instalado, recomendamos a instalação do **Java open source**:

- Windows e macOS: [Java OpenJDK Eclipse Temurin](https://adoptium.net/pt-BR)

- Linux (Ubuntu / Debian):

```bash
apt install default-jdk-headless
```

### Frontend - Bun

Para desenvolver interfaces de usuário (UI / Frontend), recomendamos o uso do **Bun**, a ferramenta padrão oficial do ecossistema Netuno para compilação de frontend.

#### Por que usar o Bun?

O **Bun** é uma alternativa moderna e altamente otimizada ao Node.js. Ele se destaca no ambiente Netuno por oferecer:

- **Alta Performance:** Execução e instalação de dependências visivelmente mais rápidas.
- **Produtividade:** Melhor desempenho no fluxo diário de desenvolvimento de interfaces.
- **Integração Nativa:** Todos os projetos de exemplo e templates do Netuno já vêm pré-configurados para funcionar com Bun.

Acesse o guia em: [Instalação do Bun](/docs/academy/website/bun)

O Netuno não engessa suas escolhas tecnológicas. Caso prefira, **é possível utilizar Node.js com NPM, PNPM, Yarn** ou qualquer outro gerenciador de pacotes. A escolha da stack de frontend fica inteiramente a seu critério.

:::tip MANTENHA AS FERRAMENTAS ATUALIZADAS
Independentemente da tecnologia escolhida, utilize sempre as versões mais recentes para garantir compatibilidade, segurança e performance.
:::

## Instalação

Escolha a versão desejada. A seleção feita aqui se aplicará a todos os blocos de comando desta página.

<Tabs groupId="versao">
  <TabItem value="stable" label="Versão Estável" default>

A **Versão Estável** é a edição homologada do Netuno. Ela passou por testes rigorosos e está totalmente pronta para uso em ambientes de produção.

</TabItem>
  <TabItem value="testing" label="Versão Em Teste">

:::danger NÃO USAR EM PRODUÇÃO
A **Versão em Teste** contém as funcionalidades mais recentes e as implementações em andamento. Por ser experimental, pode apresentar instabilidades. Recomendamos seu uso apenas para conhecer novas funcionalidades, realizar testes ou contribuir com o ecossistema da plataforma.
:::

  </TabItem>
</Tabs>


### Comportamento 

Antes de prosseguir, entenda como o script interage com o seu terminal:

1. **Criação da pasta:** O script cria automaticamente uma pasta chamada `netuno`
   no diretório onde o terminal está aberto.
2. **Navegação automática:** Após a criação, o terminal é redirecionado para
   dentro dessa pasta (equivalente a executar `cd netuno`).

:::caution Recuperando uma instalação com falha
Se a instalação for interrompida, o terminal já estará posicionado **dentro**
da pasta com falha. Executar o comando novamente criará uma pasta dentro da outra.
:::

Para limpar o ambiente e recomeçar do zero:

**1. Volte um nível no terminal:**

```bash
cd ..
```

**2. Remova a pasta com falha:**

<Tabs groupId="os">
  <TabItem value="linux-mac" label="Linux ou macOS" default>

```bash
rm -rf netuno
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```powershell
rmdir /s /q netuno
```

  </TabItem>
</Tabs>

**3. Reinicie a instalação**.


### Linux ou macOS

A maioria das distribuições Linux e o macOS já incluem o **cURL** ou o **Wget** por padrão. Verifique qual está disponível:

```bash
curl --version
```
```bash
wget --version
```

Siga as etapas abaixo:

**1. Crie a pasta e acesse-a:**

```bash
mkdir -p netuno && cd netuno
```

**2. Baixe o instalador** (escolha apenas um método):

<Tabs groupId="versao">
  <TabItem value="stable" label="Versão Estável" default>

**Com cURL:**
```bash
curl -L https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -o netuno-setup.jar
```

**Com Wget:**
```bash
wget https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -O netuno-setup.jar
```

  </TabItem>
  <TabItem value="testing" label="Versão Em Teste">

**Com cURL:**
```bash
curl -L https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -o netuno-setup.jar
```

**Com Wget:**
```bash
wget https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -O netuno-setup.jar
```

  </TabItem>
</Tabs>

**3. Execute a instalação:**

<Tabs groupId="versao">
  <TabItem value="stable" label="Versão Estável" default>

```bash
java -jar netuno-setup.jar install
```

  </TabItem>
  <TabItem value="testing" label="Versão Em Teste">

```bash
java -jar netuno-setup.jar install version=testing
```

  </TabItem>
</Tabs>

:::caution ATENÇÃO 
O macOS possui um mecanismo de segurança nativo (Gatekeeper) que pode bloquear aplicativos baixados via terminal.
:::

No **macOS** para garantir que o Netuno funcione sem erros de permissão, execute o comando abaixo imediatamente após o passo 3, ainda dentro da pasta `netuno`.

```bash
sudo xattr -r -d com.apple.quarantine .
```

O sistema solicitará a senha de administrador do seu Mac para confirmar.

### Windows

Utilizaremos o **PowerShell** para realizar o download e a instalação. Abra o PowerShell pelo menu Iniciar digitando `powershell`.

**1. Crie a pasta, acesse-a e baixe o instalador**. Copie o bloco completo e pressione Enter:

<Tabs groupId="versao">
  <TabItem value="stable" label="Versão Estável" default>

```powershell
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar" -OutFile "netuno-setup.jar"
```

  </TabItem>
  <TabItem value="testing" label="Versão Em Teste">

```powershell
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar" -OutFile "netuno-setup.jar"
```

  </TabItem>
</Tabs>

**2. Execute a instalação:**

<Tabs groupId="versao">
  <TabItem value="stable" label="Versão Estável" default>

```powershell
java -jar netuno-setup.jar install
```

  </TabItem>
  <TabItem value="testing" label="Versão Em Teste">

```powershell
java -jar netuno-setup.jar install version=testing
```

  </TabItem>
</Tabs>

:::caution ATENÇÃO 
A instalação padrão geralmente não exige privilégios elevados. Porém, se receber uma mensagem de "Acesso Negado", feche o PowerShell, reabra-o como **Administrador** e execute o comando novamente.
:::

## Iniciar a App DEMO

Ao concluir a instalação, execute o comando abaixo dentro da pasta `netuno` para iniciar o servidor com a aplicação de demonstração:

```bash
./netuno server
```

### Abrir a Aplicação no Browser

Após a inicialização, o navegador será aberto automaticamente com o endereço do servidor local. Caso isso não aconteça, acesse manualmente um dos endereços abaixo:

- [http://demo.local.netu.no:9000](http://demo.local.netu.no:9000)
- [http://localhost:9000](http://localhost:9000)

## Parar o Servidor

Para encerrar o servidor pressione no terminal as teclas:

#### CTRL + C

Para iniciá-lo novamente, utilize o mesmo comando `./netuno server`.

## Próximos Passos

Algumas ideias do que pode fazer agora.

#### Iniciante

Se é novo no Netuno, comece criando o seu primeiro formulário:

[Criar meu primeiro formulário](/docs/academy/demonstration/config)

#### Tutoriais

Explore tutoriais práticos de desenvolvimento com o Netuno:

[Ver tutoriais de desenvolvimento](/docs/get-started/tutorials)

#### Projetos

Veja como aplicar o Netuno em projetos reais de negócio:

[Explorar projetos e casos de uso](/docs/academy/understand/backoffice)
