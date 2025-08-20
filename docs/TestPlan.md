 Test Plan Document  

**Project:** ParaBank Online Banking Application  
**Prepared by:** Tosin A. Williams  
**Date:** August 20, 2025 

---

 1. Introduction  
ParaBank is an online banking demo application that simulates real-world financial services such as account management, fund transfers, bill payments, and transaction history.  
This test plan outlines the scope, objectives, approach, and deliverables for testing ParaBank to ensure its reliability, functionality, and usability.  

---

 2. Objectives  
- Validate core banking features (login, account services, fund transfer, bill payment).  
- Ensure data consistency and accuracy across transactions.  
- Verify user interface and accessibility.  
- Perform regression testing on automated scripts.  
- Test backend services using Postman (API testing).  
- Provide stakeholders with a summary of defects, risks, and recommendations.  

---

 3. Scope  

**In Scope**  
- Functional Testing (UI + workflows).  
- Regression Testing (automated test cases).  
- API Testing (Postman – SOAP/REST services).  
- Usability/Accessibility Testing.  
- Performance Testing (basic load test using JMeter).  

**Out of Scope**  
- Security penetration testing.  
- Integration with third-party payment gateways (not available in demo).  

---

## 4. Test Items  
The following modules will be tested:  
- Authentication (login/logout).  
- Account Services (open account, view accounts).  
- Fund Transfer.  
- Bill Payment.  
- Transaction History.  
- Customer Service requests.  

---

 5. Test Approach  

**Manual Testing**  
- Exploratory + scripted testing.  
- Positive and negative test cases.  

**Automation Testing**  
- Selenium/Cypress for login, fund transfer, and bill payment flows.  
- Scripts stored in GitHub repo.  

**API Testing**  
- Use Postman to validate REST/SOAP services.  
- Create collections, assertions, and run with Newman.  

**Performance Testing**  
- Run JMeter load test with 50–100 virtual users for fund transfer.  

---

 6. Test Deliverables  
- Test Plan (this document).  
- Test Cases (Excel/TestRail).  
- Test Execution Report (manual + automated).  
- Bug Reports (Jira/GitHub Issues).  
- API Test Collections (Postman).  
- Final Test Summary Report.  

---

 7. Test Environment  
- **Application URL:** [https://parabank.parasoft.com/parabank/index.htm](https://parabank.parasoft.com/parabank/index.htm)  
- **Browsers:** Chrome, Edge, Firefox.  
- **Automation Framework:** Selenium WebDriver / Cypress.  
- **API Tools:** Postman, Newman.  
- **Performance Tools:** Apache JMeter.  
- **Test Data:** Dummy customer details, account IDs, transaction amounts.  

---

 8. Entry Criteria  
- Application is accessible and stable.  
- Test environment is ready (browsers, Postman, automation setup).  
- Test cases are reviewed and approved.  

---

 9. Exit Criteria  
- All planned test cases executed.  
- High-priority defects resolved or mitigated.  
- Test summary report prepared and shared.  

---

 10. Risks & Assumptions  

**Risks**  
- Test environment downtime may delay execution.  
- Some features may be partially implemented in demo mode.  

**Assumptions**  
- Application data will reset after test cycles.  

---

 11. Timeline (2 Weeks)  
- **Day 1–2:** Prepare test plan & environment setup.  
- **Day 3–5:** Design manual test cases.  
- **Day 6–9:** Execute manual tests & log defects.  
- **Day 10–12:** Develop & run automation scripts.  
- **Day 13:** API testing with Postman.  
- **Day 14:** Final report preparation & project presentation.  

---

12. Revision History  

| Version | Date       | Author            | Description            |
|---------|-----------|-------------------|------------------------|
| 1.0     | Aug 20, 2025 | Tosin A. Williams | Initial draft created. |



