![image](https://user-images.githubusercontent.com/68701354/229578694-ff6c86a7-35e5-42c8-8b40-defa383e2498.png)

# Agenda Eletrônica de Contatos
<br/>
Projeto final do módulo de front-end, de uma agenda eletrônica, criado no curso de Automação de Testes da escola ADA. Foi desencolvido em cima do conceito de Single Page Applications.
<br/><br/>

> **_Single Page Applications? Oi?_** Chamamos de Single Page Application as aplicações web ou site que consistem de uma única página web, com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop. 

##
### Como faço para acessar tudo corretamente?

1. Primeiro é necessário clonar o projeto de uma API responsável por persistir os dados para gerenciamento da agenda eletrônica. Este projeto está disponível no git abaixo, criado com o intuito acadêmico de ensino de front-end, e possui todas as informações necessárias para conseguir rodá-lo.

```sh
https://github.com/dkayke-aulas/agenda-contatos-backend
```

2. É necessário também um servidor apache rodando localmente, pode ser utilizado o pacote XAMP, mas para facilitar, existe também uma extensão do próprio VSCode chamada Live Server. 

![image](https://user-images.githubusercontent.com/68701354/229581159-1d6b7572-6763-41f4-8c49-9d3866f4fd8b.png)

##
### O que eu consigo fazer na agenda?
- Criar conta;
- Fazer login;
- Adicionar contato;
- Visualizar detalhes do contato;
- Deletar contatos;
- Sair.

##
### Quais as páginas que existem na aplicação?

```sh
/#login
/#signup
/#contacts
/?id-contact={id}#contact-details
/#404
```
