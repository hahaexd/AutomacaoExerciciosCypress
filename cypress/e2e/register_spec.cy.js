import faker from 'faker/locale/pt_BR';

describe('Cadastro e Login de Usuário', () => {
  let email, password;

  it('Deve permitir o cadastro de um novo usuário', () => {
    
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(500);
    
    // Selecionar o campo de cadastro
    cy.get('.panel > .header > :nth-child(3)').click();
    

    // Preencher o formulário
    email = faker.internet.email();
    password = faker.internet.password();
    cy.get('#firstname').type(faker.name.firstName());
    cy.wait(300);
    cy.get('#lastname').type(faker.name.lastName());
    cy.wait(300);
    cy.get('#email_address').type(email);
    cy.wait(300);
    cy.get('#password').type(password);
    cy.wait(300);
    cy.get('#password-confirmation').type(password);

    // Enviar o formulário
    cy.get('button[title="Create an Account"]').click();
    // Verificar se o usuário está logado após o cadastro
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome');

  });
  
});
