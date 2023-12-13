# Cash Out via Pix API
Essa API foi desenvolvida visando a simplicidade de resgates via Pix, com uma abordagem eficiente e segura para os usuários.

## Descrição
A API de Cash Out via Pix oferece a capacidade de realizar resgates de valores através do Pix de forma simplificada. Projetada para sistemas de recompensa ou saques de teste, essa API permite que os usuários solicitem transferências Pix fornecendo apenas a chave Pix e o tipo de chave associada.

## Funcionalidades Principais

- **Criação de Requisição:** Através da rota POST `/create`, é possível requisitar um Pix inserindo a chave Pix e especificando o tipo de chave como phoneNumber ou document. A API verifica e processa o envio do Pix de acordo com o valor estipulado pelo cliente.

- **Debito Direto na Conta:** Todas as transações realizadas são debitadas diretamente na conta do cliente, proporcionando uma experiência simples e direta.

- **Registro de Transações:** Cada transação é registrada no banco de dados PostgreSQL, armazenando informações como chave, tipo de chave, data e hora da transação para fins de registro e histórico.

- **Validação de Solicitações:** A API inclui um middleware que verifica se o usuário já resgatou valores anteriormente usando a mesma chave Pix de celular ou CPF, impedindo múltiplos resgates para a mesma chave.

- **Listagem de Chaves:** A rota GET `/read` foi implementada para listar todas as chaves que solicitaram o resgate do Pix, permitindo uma visão geral das transações realizadas.


## Tecnologias Utilizadas

<div style="display: inline_block"><br>
  <img align="center" alt="Node.js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="TypeScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Express js" height="30" width="40" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">
  <img align="center" alt="PostgreSQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg">
  <img align="center" alt="AWS EC2" height="30" width="40" src="https://static-00.iconduck.com/assets.00/aws-ec2-icon-423x512-iaajemnx.png">
</div>




## Executando o Projeto

### Pré-requisitos
Certifique-se de ter o Node.js instalado.

### Instalação das Dependências
No terminal, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### Rodando o Projeto
Para iniciar o backend, utilize o comando: 

```bash
npm run dev
```
Isso iniciará o servidor Node.js

## Contato
Se tiver dúvidas ou precisar de mais informações, sinta-se à vontade para entrar em contato:
- Email : [contato@daanrox.com](mailto:contato@daanrox.com)
- LinkedIn: [https://www.linkedin.com/in/daanrox/](Daanrox)

--- 

"Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos."
