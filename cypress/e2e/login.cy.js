describe('ParaBank Login Tests', () => {

  const baseUrl = "https://parabank.parasoft.com/parabank/index.htm";

  it('should login successfully and navigate through features then logout', () => {
    cy.visit(baseUrl);

    // ✅ Login
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    // ✅ Check Accounts Overview
    cy.contains('Accounts Overview', { timeout: 15000 }).should('be.visible');

    // ✅ Transfer Funds
    cy.contains('Transfer Funds').click();
    cy.contains('Transfer Funds').should('be.visible');

    // ✅ Bill Pay
    cy.contains('Bill Pay').click();
    cy.contains('Bill Payment Service').should('be.visible');

    // ✅ Back to Accounts Overview
    cy.contains('Accounts Overview').click();
    cy.contains('Accounts Overview').should('be.visible');

    // ✅ Logout
    cy.contains('Log Out').click();

    // Verify back to login page
    cy.url().should('include', '/index.htm');
    cy.contains('Customer Login').should('be.visible');
  });
});

