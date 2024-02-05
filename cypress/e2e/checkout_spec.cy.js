
describe('Cadastro e Login de Usuário', () => {

  it('Deve permitir login, selecionar produto e checkout', () => {
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(500);

    // Realizar o login diretamente usando os dados gerados
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.wait(500);
    
    cy.get('#email').type('roni_cost@example.com');
    cy.get('#pass').type('roni_cost3@example.com');
    cy.get('#send2').click();

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

    // Proceder ao checkout
    cy.get('.checkout-methods-items > :nth-child(1) > .action > span')
    .should('be.visible')  // Verifica se o elemento está visível
    cy.visit('https://magento2-demo.magebit.com/checkout/');
    cy.get('#shipping > .step-title', { timeout: 10000 }).should('be.visible');
    
    cy.get(':nth-child(2) > :nth-child(1) > .radio').click();
    cy.wait(200);
    cy.get('.button').click();
    cy.wait(200);
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click();

    
  });
});
