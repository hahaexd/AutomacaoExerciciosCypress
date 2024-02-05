import faker from 'faker/locale/pt_BR';

describe('Cadastro e Login de Usuário', () => {
  let email, password;

  it('Deve permitir o cadastro de um novo usuário e realizar login', () => {
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(500);

    // Selecionar o campo de cadastro
    cy.get('.panel > .header > :nth-child(3)').click();

    // Preencher o formulário
    email = faker.internet.email();
    password = faker.internet.password();
    cy.get('#firstname').type(faker.name.firstName());
    cy.get('#lastname').type(faker.name.lastName());
    cy.get('#email_address').type(email);
    cy.wait(200);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);

    // Enviar o formulário
    cy.get('button[title="Create an Account"]').click();

    // Verificar se o usuário está logado após o cadastro
    cy.contains('.greet .logged-in', 'Welcome').should('exist');

    // Realizar o logout
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    cy.contains('Sign Out').click();
    cy.wait(5000);
    cy.get('.home-main > img').should('exist');
    

    // Realizar o login diretamente usando os dados gerados
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.wait(500);
    
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('#send2').click();

  });
});
