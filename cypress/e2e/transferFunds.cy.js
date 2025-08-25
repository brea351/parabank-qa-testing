describe('ParaBank Transfer Funds Tests', () => {

  const baseUrl = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(baseUrl);

    // Handle app error (selectedOption) only in this spec
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('selectedOption')) {
        return false; // ignore error so test continues
      }
    });

    // Login before each test
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    // Verify login success
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('should transfer funds between two accounts', () => {
    // Navigate to Transfer Funds page
    cy.contains('Transfer Funds').click();

    // Enter amount
    cy.get('input#amount').clear().type('100');

    // Select accounts
    cy.get('select#fromAccountId').select(0); // First account
    cy.get('select#toAccountId').select(1);   // Second account

    // Submit transfer
    cy.get('input[value="Transfer"]').click();

    // Verify success message
    cy.contains('Transfer Complete!').should('be.visible');

    // Optional: confirm amount appears in confirmation
    cy.contains('$100').should('be.visible');
  });
});
