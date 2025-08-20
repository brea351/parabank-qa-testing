## Negative Test Cases

### Login Module
| Test Case ID | Description | Steps | Expected Result |
|--------------|-------------|-------|-----------------|
| NEG-LOGIN-01 | Login with invalid username | Enter invalid username <br> Enter valid password <br> Click Login | Error message: "The username and password could not be verified." |
| NEG-LOGIN-02 | Login with invalid password | Enter valid username <br> Enter wrong password <br> Click Login | Error message: "The username and password could not be verified." |
| NEG-LOGIN-03 | Login with empty fields | Leave Username and Password blank <br> Click Login | Error message: "Username is required." |

### Fund Transfer
| Test Case ID | Description | Steps | Expected Result |
|--------------|-------------|-------|-----------------|
| NEG-FT-01 | Transfer with invalid account numbers | Enter invalid source account <br> Enter valid destination <br> Enter amount <br> Click Transfer | Error message: "Invalid account number." |
| NEG-FT-02 | Transfer with negative amount | Enter valid accounts <br> Enter -100 as amount <br> Click Transfer | Error message: "Amount must be positive." |
| NEG-FT-03 | Transfer with blank fields | Leave amount blank <br> Click Transfer | Error message: "Amount is required." |

### Bill Payment
| Test Case ID | Description | Steps | Expected Result |
|--------------|-------------|-------|-----------------|
| NEG-BP-01 | Pay with missing payee details | Leave Payee Name blank <br> Enter other valid fields <br> Click Send Payment | Error message: "Payee name is required." |
| NEG-BP-02 | Pay with invalid zip code | Enter valid details but zip code = "ABCDE" <br> Click Send Payment | Error message: "Invalid zip code." |
| NEG-BP-03 | Pay with invalid account | Enter account number not linked to customer <br> Click Send Payment | Error message: "Invalid account." |

### Transaction History
| Test Case ID | Description | Steps | Expected Result |
|--------------|-------------|-------|-----------------|
| NEG-TH-01 | Search with invalid date format | Enter "32/13/2025" as date <br> Click Search | Error message: "Invalid date format." |
| NEG-TH-02 | Search with end date before start date | Enter Start Date = 2025-12-01 <br> End Date = 2025-01-01 <br> Click Search | Error message: "End date must be after start date." |
| NEG-TH-03 | Search with no transactions | Enter date range where no transactions exist <br> Click Search | Message: "No transactions found." |
