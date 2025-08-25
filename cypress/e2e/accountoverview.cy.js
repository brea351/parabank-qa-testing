// cypress/e2e/accountsOverview.cy.js

describe("Accounts Overview", () => {
  const username = "William";
  const password = "breath";

  beforeEach(() => {
    // Login
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[value="Log In"]').click();

    // Go to Accounts Overview
    cy.contains("Accounts Overview").click();
    cy.url().should("include", "overview.htm");
  });

  it("should display accounts and balances", () => {
    // Check table is visible
    cy.get("table#accountTable").should("be.visible");

    // Verify each account row has an account number and a balance
    cy.get("table#accountTable tbody tr").each(($row) => {
      cy.wrap($row).find("td").eq(0).should("not.be.empty"); // Account number
      cy.wrap($row).find("td").eq(1).invoke("text").should("match", /\d/); // Balance has a number
    });
  });
});
