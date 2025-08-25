# Final Test Report – Parabank QA Practice Project 

**Project Title: Parabank QA Practice – Manual and API Testing  
**Duration:** 1 Week  
**Tester:** Tosin A. Williams  

---

## 1. Objective
To explore Parabank’s online banking demo application by performing **manual, API, and UI automation testing**, while capturing limitations and lessons learned when backend services are unreliable.

---

## 2. Test Data Setup
- Created multiple user accounts for test coverage (e.g., Richard, Mary, John).  
- Recorded **customer IDs** and **account IDs** for reuse across manual and automation tests.  

---

## 3. Manual Testing
**Scope:**  
- Login/Logout  
- Register  
- Open New Account (UI)  
- Account Overview  
- Error handling for invalid inputs  

**Result:**  
- UI workflows functioned as expected (HTML responses, visible pages).  
- API endpoints were **intermittently unavailable**.  

---

## 4. Automation Testing (Cypress)

### Tools & Setup
- **Cypress** for UI automation (headless and interactive).  
- Node.js scripts to run tests locally or in CI.  
- Fixtures for test users and reusable support functions.  

### Automated Test Cases
- `login.spec.js` — Valid/invalid login flows (UI).  
- `openAccount.spec.js` — Open new account via UI form and verify confirmation page.  
- `accountOverview.spec.js` — Verify newly created account appears in account overview.  

### Key Findings
- **UI automation** (Cypress) executed reliably against ParaBank web pages.  
- **API automation** (Postman / automated API tests) was blocked: REST (WADL) and SOAP endpoints were **intermittently down** (404/405).  
- Cypress served as a fallback when APIs failed, but was **slower and more brittle** compared to API-level tests.  

**Example Results (summary):**  
- UI Cypress tests executed: **3 specs, all passed locally** ✅  
- API test suite: **skipped / failed due to unavailable endpoints (404/405)** ❌  

### Recommendations
- Keep **both UI and API test suites** (API-first where possible).  
- Use Cypress for **UI-critical smoke tests**, Postman/HTTP tests for **faster deterministic checks**.  
- For stable automation, host a **local ParaBank instance (Docker/Tomcat)** instead of relying on the demo server.  

---

## 5. API Testing Attempts & Issues
- Configured **Postman environment and collection**.  
- Attempted endpoints: `/login`, `/createAccount`, `/customers/{id}/accounts`.  
- Encountered **404/405 errors** and **WADL unavailability** — confirmed API services were down on the public demo host.  

---

## 6. Key QA Learnings
- Practiced **test case design** for manual and automation.  
- Learned to **adapt when the test environment fails** (fallback to UI tests).  
- Built **reusable Cypress scripts** for future automation when stable backend is available.  

---

## 7. Conclusion & Next Steps
The Parabank exercise provided practical experience in:  
- **Manual testing**  
- **UI automation with Cypress**  
- Understanding the **importance of stable test environments** for API automation  

**Next Steps:**  
- Migrate API automation to a **reliable demo** (or local ParaBank via Docker).  
- Expand CI to run **both API and UI smoke tests** consistently.  
