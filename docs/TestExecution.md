# Test Execution Report

**Project: Parabank Web Application  
**Date: 21-08-2025  
**Tester: Tosin A. Williams  

---

## Summary
- **Total Test Cases Executed:** 23  
- **Total Passed:** 21  
- **Total Failed / Issues Found:** 2  
- **Overall Status:** Partial Pass ✅ (Issues Logged in Defects.md)  

---

## Detailed Results

### 1. Login / Authentication
- **Total Test Cases:** 4  
- **Passed:** 4  
- **Failed:** 0  
- **Status:** ✅ Pass  

### 2. Account Services
**Section A: Open Account**  
- **Total Test Cases:** 3  
- **Passed:** 2  
- **Issue:** Cannot leave dropdown blank (field requires selection, negative test not possible).  
- **Status:** ⚠️ Partial  

**Section B: View Accounts / Account Review**  
- **Total Test Cases:** 3  
- **Passed:** 3  
- **Failed:** 0  
- **Status:** ✅ Pass  

### 3. Fund Transfer
- **Total Test Cases:** 5  
- **Passed:** 4  
- **Issue:** Negative amount (-1000) was accepted and processed, system treated it like a loan (Defect logged).  
- **Status:** ⚠️ Partial  

### 4. Request Loan
- **Total Test Cases:** 3  
- **Passed:** 3  
- **Failed:** 0  
- **Status:** ✅ Pass  

### 5. Bill Payment
- **Total Test Cases:** 4  
- **Passed:** 4  
- **Failed:** 0  
- **Status:** ✅ Pass  

### 6. Transaction History
- **Total Test Cases:** 3  
- **Passed:** 3  
- **Failed:** 0  
- **Status:** ✅ Pass  

### 7. Update Contact Info
- **Total Test Cases:** 2  
- **Passed:** 2  
- **Failed:** 0  
- **Status:** ✅ Pass  

---

## Key Defects Observed
1. **Fund Transfer:** Negative amount (-1000) processed as valid transaction (critical).  
2. **Account Services (Open Account):** Dropdown cannot be left blank, so validation testing is limited.  

---

## Conclusion
Most core functionalities (Login, Loan Requests, Bill Payments, Transaction History, and Contact Updates) are stable and working correctly.  
However, **Fund Transfer has a critical defect** allowing negative values, and **Account Services dropdown issue** limits negative testing coverage.  

Further regression testing is recommended after defects are fixed.
