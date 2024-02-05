### Requisitos para instalação ###

* [Node.js](https://nodejs.org/en/)
* Cypress

#### Iniciando o projeto ####

```shell
1. Instale o Vs Code para gerenciar os arquivos do projeto.
2. No terminal, com a tecla (CTRL + aspas simples), abra o terminal do VS Code.
3. Navegue até a pasta onde clonou o repositório e execute o seguinte comando para instalar as dependências:

    npm install    

4. (Opcional) Se a biblioteca `faker` não estiver sido instalada no comando anterior, você pode instalá-lo usando:

    npm install faker --save-dev    

    IMPORTANTE Certifique-se de ter a biblioteca `faker` instalada para executar os testes de maneira adequada.

5. Como executar os testes:

    npx cypress run
    O comando acima irá executar os testes no terminal.

    npx cypress open    
    O comando acima abrirá o Cypress e permitirá que você execute e visualize os testes.


