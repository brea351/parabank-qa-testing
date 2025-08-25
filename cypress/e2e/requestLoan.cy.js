describe('Request Loan Functionality', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('input[name="username"]').type('john');   // replace with valid test user
    cy.get('input[name="password"]').type('demo');   // replace with valid test password
    cy.get('input[value="Log In"]').click();

    // Navigate to Request Loan page
    cy.contains('Request Loan').click();
  });

  it('should submit a loan request and validate the response', () => {
    const loanAmount = '2000';
    const downPayment = '200';

    // Fill loan request form
    cy.get('input#amount').type(loanAmount);
    cy.get('input#downPayment').type(downPayment);
    cy.get('select#fromAccountId').select(0); // select first account
    cy.get('input[value="Apply Now"]').click();

    // Verify loan request confirmation
    cy.contains('Loan Request Processed').should('be.visible');

    //Validate table data
    cy.get('table')
      .should('contain.text', 'Loan Provider')
      .and('contain.text', 'Status');

    // Check loan status (Approved or Denied)
    cy.get('table').invoke('text').then((text) => {
      expect(text).to.match(/Approved|Denied/);
    });
  });
});
