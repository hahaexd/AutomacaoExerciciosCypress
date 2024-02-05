import faker from 'faker/locale/pt_BR';

describe('Add Product', () => {
  let email, password;

  it('Deve cadastrar um usuário e adicionar produto ao carrinho', () => {
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
    cy.wait(500);

    // Verificar se o usuário está logado após o cadastro
    cy.contains('.greet .logged-in', 'Welcome').should('exist');

    // Navegar até a categoria "Men" no menu
    cy.visit('https://magento2-demo.magebit.com/men.html');

    // Escolher um produto (atualmente fixo)
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    // Escolher o tamanho do produto ex 'S' (atualmente fixo)
    cy.get('#option-label-size-157-item-171').click();
    cy.wait(200);
    cy.get('#option-label-color-93-item-52').click();
    cy.wait(200);
    cy.get('#product-addtocart-button').click();
    cy.get('.message-success > div').should('exist');
    
    // Clicar no botão "Checkout" ou similar
    cy.get('.message-success > div > a').click();

    // Verificar se a página de carrinho foi aberta
    cy.url().should('include', '/checkout/cart');
    cy.wait(200);

  });
});
