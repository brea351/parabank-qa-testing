describe('ParaBank Bill Payment Tests', () => {
  const baseUrl = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(baseUrl);

    // Handle app error
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('selectedOption')) {
        return false;
      }
    });

    // Login before each test
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('should make a successful bill payment', () => {
    cy.contains('Bill Pay').click();

    // Fill Payee Info
    cy.get('input[name="payee.name"]').type('John Doe');
    cy.get('input[name="payee.address.street"]').type('123 Cypress Lane');
    cy.get('input[name="payee.address.city"]').type('Lagos');
    cy.get('input[name="payee.address.state"]').type('LA');
    cy.get('input[name="payee.address.zipCode"]').type('100001');
    cy.get('input[name="payee.phoneNumber"]').type('08012345678');

    // Payment Details
    cy.get('input[name="payee.accountNumber"]').type('123456');
    cy.get('input[name="verifyAccount"]').type('123456');
    cy.get('input[name="amount"]').type('200');

    // Select account to pay from
    cy.get('select[name="fromAccountId"]').select(0);

    // Submit
    cy.get('input[value="Send Payment"]').click();

    // Verify confirmation
    cy.contains('Bill Payment Complete').should('be.visible');
    cy.contains('John Doe').should('be.visible');
    cy.contains('$200').should('be.visible');
  });
});
