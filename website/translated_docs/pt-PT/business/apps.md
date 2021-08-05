---
id: apps
title: Apps
sidebar_label: Apps
---

O Netuno é um servidor de múltiplas aplicações e que distribui o acesso às aplicações através de domínios e subdomínios.

Múltiplas aplicações web que podem ser tanto públicas como privadas, como o Netuno realiza a construção de backoffices. Então por norma as aplicações têm sempre um acesso privado, mas a interface pública é opcional.

Ao desenvolver múltiplas aplicações no Netuno tanto podem ser desacopladas ou mesmo acopladas a nível de base de dados.

Isto quer dizer que podemos partilhar a mesma base de dados por múltiplas aplicações ou ter as bases de dados separadas para cada aplicação.

## Aplicações Desacopladas em múltiplas Bases de Dados

Quando trata-se de aplicações com âmbitos completamente distintos então não fará sentido partilharem a mesma base de dados.

Imagine que tem uma aplicação para o envio de Newsletter, outra para gerir Livros e outra para gerir as Entregas, sendo que nenhuma necessita de informação armazenada em outra aplicação, estas são completamente independentes.

Assim, não há razão para partilharem a mesma base de dados e sim cada uma ter a sua própria base de dados:

<iframe frameborder="0" style="width:100%;height:500px;" src="https://www.draw.io/?lightbox=1&highlight=FFFFFF&layers=1&nav=1&title=apps-db-desacopladas.drawio#R7Znbcps6FIafhst0OInDZey46UWazjTN7L0vBQhQIyMqZBv36SuBMCbIh6R2485OPGOjX%2BK0%2FvWxVgbDmc7rWwbL%2FDNNEDFsM6kN58aw7dD1xLcU1q0AfNAKGcNJK1m98IB%2FIiWaSl3gBFWDhZxSwnE5FGNaFCjmAw0yRlfDZSklw7OWMEMj4SGGZKz%2BgxOet6pngV7%2FhHCWqzMDW133HHZrlVDlMKGrLcmZGc6UUcrbrXk9RUSGrgtLu9%2FHHbOb62Ko4MfskDNwW9cfn77jx9D7mbPHx6%2FsylEXt4RkoW5YXS1fdxFgdFEkSB7FNJzJKsccPZQwlrMrYbnQcj4nYmSJzYoz%2BoSmlFAmlIIWYtkkxYR0kmE7aYq8OBb6%2BBbUXS0R46jektQt3SI6R5ytxZJ6mCYqu5zQacer3isQKq%2FyLZ8sy1c5ovIj2xy6j6HYUGF8SUitUUgnsEISAfl1I7KgGsVY3C1%2FYSCVBAnOCjGMRQyR0Ccydljk77WamOMkkafROjf0llEOOaZyr6tQCikt%2BIO6ys24RdRyT2PgleV96B4JykTXNTfSlo%2BWCT5onOz4OrmR9tjI32PjGQYJREEa77L69GzYHewH2TDPFdIOuq0IokQ8btWQMp7TjBaQzHp1Ei%2FYsgmxjGG%2F5I7SUonfEedrlZdwwamOpO7hbe%2BLbUUXLEb74FYVCLIM8T3r3HadvLm9TjFEBHHLYa05fdiDNwi7iC1b%2FyvJENSq4X8KlGZwUw9GazV6C7vAZdkVvtu11y7vouxyNGXCI7KcVyUsBj56Pxay3Wvq6FXVWHEtFlhuWTeB6%2BbFViZ%2F72ffHu%2B%2FdIcTV9cesZ0cJwkhoiveVepfXIjEjBcHKErFTMZggoWfW3M%2Bgh7SNQXDpuH3y5g41aCOWeMWz%2FJNTRkDZytj1jj2BwEdtgpvXMfcI0kLLoo0dydpUQfFHV4y2V9viIl24vKi3k0DgMj%2FyPM0%2F94EMYq1OEUBcIF5mubO9uxhdwc0WNgaLLyzUTFuj%2F8yKsCRVIQXRQU4TMVMlGyUwT%2FDRegnpu9rygxAQeLquAjsyGlIOgEX7uVxYY5C%2FJdx4R3JhX9RXHg7uUjwss%2F%2BZ6jco1VFRGQR08OilrPnilg1OOyJoUrTJNQWmzS19cUmEdUJnAgqb9iBvT1T%2Fhm9PeBklcNSbsZrgoWl7LCdUev9XbQRYPyUNRnxZcHFUdBu36Pmo%2FEdyI%2B2Z2%2F%2BzuK7q2u9db4H5%2FI9eJXv%2B5rCV%2FL8f8oCGxyRBs6fTIPwVWmwvwt6t%2F15J3VxttvjVve6JDiGxtQxrn35PQHo%2Fe1K72FHSle4%2FfErgFDj4CveqYhh%2Fy6zmdt6H%2BzMfgE%3D"></iframe>

Desta forma nenhuma aplicação conhece a informação armazenada nas outras aplicações e todo o seu funcionamento é independente das outras aplicações existentes.

## Aplicações Acopladas na mesma Base de Dados

Quando trabalhamos com aplicações que precisam partilhar informações e que pode haver grande volume de dados, a partilha da base de dados é a solução mais viável a nível de performance, mas não é a melhor solução a nível de segurança e integridade dos dados.

Assim, por questões de segurança e integridade, normalmente são criadas grandes aplicações web onde tudo está centralizado numa aplicação complexa e que utiliza a sua base de dados exclusiva, caso a aplicação precise de dados externos então pode integrar com outras bases de dados e web services se for necessário.

Neste caso, o Netuno já fornece todos os meios para o desenvolvimento deste tipo de aplicações, mas também oferece uma boa solução para aplicações com base de dados partilhada.

Sendo o principal problema a segurança e integridade dos dados, com o Netuno quando várias aplicações utilizam a mesma base de dados estas automaticamente ficam limitadas às suas tabelas que estão relacionadas com os seus formulários.

Permite partilhar o formulário e consequentemente a sua tabela pelas outras aplicações que estão acopladas na base de dados.

Imagine o cenário em que tem uma aplicação para a gestão de clientes, outra para a gestão de fornecedores e outra para a faturação, isto por que tanto terá faturas de fornecedores para serem pagas como de clientes para receber.

A aplicação de cliente não deve partilhar dados com a aplicação de fornecedores, são aplicações distintas.

Mas a aplicação de faturação precisa integrar com ambas as aplicações para obter os dados da aplicação de clientes e de fornecedores para poder relacionar as faturas e gerir cobranças e pagamentos nas diveras situações.

<iframe frameborder="0" style="width:100%;height:500px;" src="https://www.draw.io/?lightbox=1&highlight=FFFFFF&layers=1&nav=1&title=apps-db-acoplada.drawio#R7VnZcuMoFP0aP6ZL%2B%2FIYO8s89HRXTSY1k0csoaWDhQYhW%2B6vn4uELGFhO%2B52lq7quMrhHhCge%2B7hAp7Zi1Vzz1CZ%2FUljTGaWETcz%2B2ZmWaHjwbcAth3g%2Bm4HpCyPO8gcgIf8O5agIdE6j3GlNOSUEp6XKhjRosARVzDEGN2ozRJK1FFLlOIJ8BAhMkX%2FyWOedahnugP%2BB87TTI7sWnLeK9S3lUCVoZhuRpB9O7MXjFLelVbNAhPhut4t3XN3B2p382K44C95IGPufdPcPX%2FLH0Pve8YeH%2F9iV7ac3BqRWr6wnC3f9h5gtC5iLHoxZvZ8k%2BUcP5QoErUboBywjK8IWCYUK87oM15QQhkgBS2g2TzJCemhmWUnCfaiCPDpK8i3WmPGcTOC5CvdY7rCnG2hSaOGiYwuO7Q7ezNw5YaSq2zEk2n6MkZkfKS7rgcfQkG68RyXmhOXzlGFhQTE1w1EQTXxMbwtP9OREkIkTwswI%2FAhBnwufJdD%2FF7LilUex2IYLXMqt4xyxHMqnroKBZDQgj%2FIWe7sTqKmcxkCr0zvU78kSBIdx9hBIx5Nw%2F2kYbLX18WJtKZE%2Fpw29mQQIxwk0SGqL68Nqxf7SW0Yr%2BXSXnQjD%2BIYlltpUsYzmtICkdsBnUc1W7cuFj4cmnymtJTgN8z5VsYlqjnVKalfvK1jvq1ozSJ8TNwyAyGWYn6kndO1Ey93lCmGCShureaay7s9eAe3g2%2FZ9l%2BhDFCtNJ%2BkUFrjplGsrbTegy73Y9EV%2FqbrKF3eh6LL1qQJj4h0XpWoUHj0%2FqvFdq%2FNo1dVS8U1NDCdsmkd19dDKRX%2Fv9z%2B%2Ffjla98dzK7rsaucBgkhsCs%2BlOrPTkRQ40UBXiZQkzIU58DnqM7HyMO6TYG6afj5NAZDKXnMnG7xTN%2FQpDH31dKYOfX9SYGqW4V3zmPOC5UWfCilOQeVtuxFcUcZHANxTBkcGgfdLA%2BK5qwdnEYGoIKl52kOOUGEI62oloHruMZltniWZ6l7PFcjDksjDu%2B1tGFPN8lvmLx2xpOayV6cvPYXM9zkfJQVwXrqh4Hy0K0w%2Bl5%2FXJbuLylL9wWyRLxmaLawZ9d%2B%2B23TN1Fn6MeG72tSnouD2NGpM7CWdqvnC6jT%2BXDq7I%2BEZ6nzIrlq2F%2BqErVPSFRZGt5Wjd4vqUbvtBoXRMjkjRJkksShNkEmiaVPkDFkVPdCEvTUveP7KzA4SE%2BcrwcS9hi7xxXfrZvGgrKSMhFLSE%2BhfJrtI9BKGWWP6ipDpShGW5ID5%2Bw038suOD4vdwCKntM2ZL7WHHrBhwNj2X40geGKj%2FY40v5d6HIsVNdmR3Os2EXBODKCV7tvnObR65Lk0Shtzl38%2B%2B54dHccquL2pxecoYbBH7gxBnP4paatG%2F3aZd%2F%2BDw%3D%3D"></iframe>

Para garantir que as aplicações não interferem em dados sensíveis uma das outras recomenda-se também a utilização do acessos à base de dados distintos para cada aplicação, e pode-se ainda controlar via base de dados os seus acesso às tabelas para garantir que não haja interferência indesejada.

De resto o Netuno realiza o controlo para separar o que é de uma aplicação ou de outra e ainda o que é partilhado entre elas.

## Endereço de cada Aplicação

O Netuno de forma automática realiza a ditribuição do acesso às aplicações através do domínio e subdomínio.

Quando chega um pedido no Netuno, o domínio é processado da seguinte forma:

![Imagem de exemplo do endereço da aplicação com subdomínio.](/docs/assets/business/apps-subdomain.svg "Aplicações com subdomínio.")

O Netuno procura até ao primeiro ponto se existe uma aplicação com este nome.

Se existir uma aplicação com este nome então será esta a aplicação a receber o pedido.

Caso não exista nenhuma aplicação com este nome então o pedido será entregue para a aplicação padrão (_default_).

Esta resolução de domínios também funciona quando é um sub-subdomínio, por exemplo:


![Imagem de exemplo do endereço da aplicação com sub-subdomínio.](/docs/assets/business/apps-sub-subdomain.svg "Aplicações com sub-subdomínio.")

Ou seja, até ao primeiro ponto é defina qual será a aplicação que receberá o pedido para ser processado. 

E o Netuno também permite definir um endereço exato com domínio para a aplicação, basta definir qual será o endereço exato na qual a aplicação funcionará.

> Utilizando a forma automática para processar domínios permite o funcionamento das aplicações na grande maioria dos casos, caso mesmo assim haja situações que necessite do endereço completamente diferente e específico para o funcionamento da aplicação então é necesário defini-lo na sua configuração.
