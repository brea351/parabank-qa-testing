describe('ParaBank Negative Test Scenarios', () => {
  const baseUrl = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(baseUrl);

    // Prevent app errors from failing test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  // --- LOGIN NEGATIVE TESTS ---
  it('should fail login with wrong credentials', () => {
    cy.get('input[name="username"]').type('wrongUser');
    cy.get('input[name="password"]').type('wrongPass');
    cy.get('input[value="Log In"]').click();

    cy.contains('The username and password could not be verified.').should('be.visible');
  });

  it('should fail login with blank credentials', () => {
    cy.get('input[value="Log In"]').click();
    cy.contains('The username and password could not be verified.').should('be.visible');
  });

  // --- TRANSFER FUNDS NEGATIVE TESTS ---
  it('should not transfer funds with empty amount', () => {
    // login first
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    cy.contains('Transfer Funds').click();
    cy.get('input[name="amount"]').clear(); // leave empty
    cy.get('input[value="Transfer"]').click();

    cy.contains('Please enter a valid amount').should('be.visible');
  });

  it('should not transfer funds if from and to accounts are the same', () => {
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    cy.contains('Transfer Funds').click();
    cy.get('input[name="amount"]').type('50');
    cy.get('select[name="fromAccountId"]').select(0);
    cy.get('select[name="toAccountId"]').select(0); // same account
    cy.get('input[value="Transfer"]').click();

    cy.contains('Cannot transfer to the same account').should('be.visible');
  });

  // --- BILL PAYMENT NEGATIVE TESTS ---
  it('should not allow bill payment with mismatched account numbers', () => {
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    cy.contains('Bill Pay').click();
    cy.get('input[name="payee.name"]').type('Fake Payee');
    cy.get('input[name="payee.address.street"]').type('123 Fake St');
    cy.get('input[name="payee.address.city"]').type('Nowhere');
    cy.get('input[name="payee.address.state"]').type('NA');
    cy.get('input[name="payee.address.zipCode"]').type('00000');
    cy.get('input[name="payee.phoneNumber"]').type('0000000000');
    cy.get('input[name="payee.accountNumber"]').type('123456');
    cy.get('input[name="verifyAccount"]').type('654321'); // mismatch
    cy.get('input[name="amount"]').type('100');
    cy.get('select[name="fromAccountId"]').select(0);
    cy.get('input[value="Send Payment"]').click();

    cy.contains('Account numbers do not match').should('be.visible');
  });

  it('should not allow bill payment with empty fields', () => {
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    cy.contains('Bill Pay').click();
    cy.get('input[value="Send Payment"]').click(); // leave all blank

    cy.contains('is required').should('exist'); // some field error
  });
});
