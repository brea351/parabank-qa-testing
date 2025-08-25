// cypress/e2e/openNewAccount.cy.js

describe('ParaBank - Open New Account Tests', () => {
  const baseUrl = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(baseUrl);

    // Ignore known frontend error (selectedOption)
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('selectedOption')) {
        return false;
      }
    });

    // Login before each test
    cy.get('input[name="username"]').type('William');
    cy.get('input[name="password"]').type('breath');
    cy.get('input[value="Log In"]').click();

    // Verify login success
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('should open a new Savings account', () => {
    cy.contains('Open New Account').click();

    // Select account type = SAVINGS
    cy.get('select#type').select('SAVINGS');

    // Select funding account (first account available)
    cy.get('select#fromAccountId').select(0);

    // Submit form
    cy.get('input[value="Open New Account"]').click();

    // Verify confirmation
    cy.contains('Account Opened!').should('be.visible');

    // Validate new account number is displayed
    cy.get('#newAccountId').should('exist').and('not.be.empty');
  });

  it('should open a new Checking account', () => {
    cy.contains('Open New Account').click();

    // Select account type = CHECKING
    cy.get('select#type').select('CHECKING');

    // Select funding account (first account available)
    cy.get('select#fromAccountId').select(0);

    // Submit form
    cy.get('input[value="Open New Account"]').click();

    // Verify confirmation
    cy.contains('Account Opened!').should('be.visible');

    // Validate new account number is displayed
    cy.get('#newAccountId').should('exist').and('not.be.empty');
  });
});
