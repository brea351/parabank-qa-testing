# Test Cases – ParaBank Online Banking Application

## Module: Authentication (Login)

| TC ID | Test Case Description | Test Steps | Test Data | Expected Result | Status |
|-------|------------------------|------------|-----------|-----------------|--------|
| TC_LOGIN_01 | Verify login with valid credentials | 1. Navigate to login page<br>2. Enter valid username and password<br>3. Click **Login** | Username: `john`<br>Password: `demo` | User is successfully logged in and redirected to **Accounts Overview** page | Pending |
| TC_LOGIN_02 | Verify login with invalid password | 1. Navigate to login page<br>2. Enter valid username and invalid password<br>3. Click **Login** | Username: `john`<br>Password: `wrongpass` | Error message displayed: *"The username and password could not be verified."* | Pending |
| TC_LOGIN_03 | Verify login with blank username and password | 1. Navigate to login page<br>2. Leave fields blank<br>3. Click **Login** | Username: ``<br>Password: `` | Error message displayed asking user to enter credentials | Pending |
| TC_LOGIN_04 | Verify logout functionality | 1. Login with valid credentials<br>2. Click **Logout** link | Username: `john`<br>Password: `demo` | User is logged out and redirected to login page | Pending |



---

## 2. Account Services Test Cases

### 2.1 Open New Account
| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|-----------|-----------------|
| TC_AS_01 | Open new account (savings) | 1. Login with valid user<br>2. Navigate to "Open New Account"<br>3. Select "SAVINGS" as account type<br>4. Submit | Account Type: SAVINGS | New savings account is created successfully and account number is displayed |
| TC_AS_02 | Open new account (checking) | 1. Login with valid user<br>2. Navigate to "Open New Account"<br>3. Select "CHECKING" as account type<br>4. Submit | Account Type: CHECKING | New checking account is created successfully and account number is displayed |
| TC_AS_03 | Open account without selecting type | 1. Login with valid user<br>2. Navigate to "Open New Account"<br>3. Leave account type blank<br>4. Submit | None | System displays error message: "Please select account type" |

### 2.2 View Accounts
| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|-----------|-----------------|
| TC_AS_04 | View all accounts | 1. Login with valid user<br>2. Navigate to "Accounts Overview" | Valid user | All accounts linked to the user are displayed with balances |
| TC_AS_05 | View account details | 1. Login with valid user<br>2. Navigate to "Accounts Overview"<br>3. Click on specific account number | Valid account number | Account details (transactions, balance, type) are displayed |
| TC_AS_06 | View accounts without login | 1. Directly access "Accounts Overview" page without login | None | System redirects user to login page |



## 3. Fund Transfer Test Cases

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|------------|-----------------|
| FT-01 | Verify successful fund transfer between own accounts | Login → Navigate to Transfer Funds → Select "From Account" and "To Account" → Enter amount → Click Transfer | From Account: 12345 <br> To Account: 67890 <br> Amount: 100 | Transfer success message displayed. Balance updated in both accounts. |
| FT-02 | Verify transfer fails when insufficient funds | Login → Navigate to Transfer Funds → Select account with insufficient balance → Enter amount greater than balance → Click Transfer | From Account: 12345 (Balance: 50) <br> Amount: 200 | Error message displayed: "Insufficient funds". Transfer not processed. |
| FT-03 | Verify error message when no amount is entered | Login → Navigate to Transfer Funds → Leave amount field blank → Click Transfer | Amount: [blank] | Error message displayed: "Amount is required". |
| FT-04 | Verify error message when invalid characters are entered in amount field | Login → Navigate to Transfer Funds → Enter "abc" in amount field → Click Transfer | Amount: abc | Error message displayed: "Please enter a valid amount". |
| FT-05 | Verify that user can view confirmation page before finalizing transfer | Login → Navigate to Transfer Funds → Enter valid transfer details → Click Continue | From Account: 12345 <br> To Account: 67890 <br> Amount: 150 | Confirmation page displayed with correct transfer details. |



## 4. Request Loan Test Cases

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|------------|-----------------|
| RL-01 | Verify loan request with valid details | Login → Navigate to Request Loan → Enter Loan Amount and Down Payment → Select account → Click Apply | Loan Amount: 5000 <br> Down Payment: 1000 <br> Account: 123456 | Loan request submitted successfully. Confirmation message displayed. |
| RL-02 | Verify error when mandatory fields are left blank | Login → Navigate to Request Loan → Leave Loan Amount and Down Payment blank → Click Apply | Loan Amount: [blank] <br> Down Payment: [blank] | Error message displayed: "All fields are required". |
| RL-03 | Verify loan request with invalid amount | Login → Navigate to Request Loan → Enter non-numeric value in Loan Amount → Click Apply | Loan Amount: abc <br> Down Payment: 1000 | Error message displayed: "Invalid loan amount". |
| RL-04 | Verify loan request with zero or negative values | Login → Navigate to Request Loan → Enter Loan Amount as 0 → Click Apply | Loan Amount: 0 <br> Down Payment: 100 | Error message displayed: "Amount must be greater than zero". |
| RL-05 | Verify loan approval updates account balance (if business rule applies) | Login → Navigate to Request Loan → Enter valid Loan Amount and Down Payment → Click Apply | Loan Amount: 2000 <br> Down Payment: 500 | If approved, account credited with loan amount minus down payment. Loan details visible in account. |



## 5. Fund Transfer Test Cases

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|------------|-----------------|
| FT-01 | Verify successful fund transfer between accounts | Login → Navigate to Transfer Funds → Enter valid amount → Select From Account and To Account → Click Transfer | From Account: 123456 <br> To Account: 654321 <br> Amount: 500 | Transfer successful. Confirmation message displayed. Balance updated in both accounts. |
| FT-02 | Verify error when mandatory fields are blank | Login → Navigate to Transfer Funds → Leave Amount or Accounts blank → Click Transfer | Amount: [blank] | Error message displayed: "All fields are required". |
| FT-03 | Verify error when transferring amount greater than available balance | Login → Navigate to Transfer Funds → Enter amount larger than balance → Click Transfer | Amount: 100000 | Error message displayed: "Insufficient funds". |
| FT-04 | Verify error when transferring negative or zero amount | Login → Navigate to Transfer Funds → Enter 0 or negative number → Click Transfer | Amount: 0 | Error message displayed: "Enter a valid amount greater than zero". |
| FT-05 | Verify same account transfer validation | Login → Navigate to Transfer Funds → Select the same account for From and To → Click Transfer | From Account: 123456 <br> To Account: 123456 <br> Amount: 100 | Error message displayed: "Source and destination accounts must be different". |
| FT-06 | Verify transaction appears in Transaction History after successful transfer | Perform a successful transfer → Navigate to Transaction History | From Account: 123456 <br> To Account: 654321 <br> Amount: 500 | Transaction recorded correctly with details (amount, date, from, to). |


## 6. Transaction History Test Cases

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|-----------|-----------------|
| TH-01 | Verify transaction history displays recent transactions | Login → Navigate to Transaction History → View list | N/A | Recent transactions are displayed with correct details (date, description, amount, balance). |
| TH-02 | Verify filtering transactions by date range | Login → Navigate to Transaction History → Apply date filter (e.g., last 7 days) | Date Range: 01/08/2025 – 07/08/2025 | Only transactions within the date range are displayed. |
| TH-03 | Verify filtering by transaction type (debit/credit) | Login → Navigate to Transaction History → Select transaction type filter | Filter: Debit | Only debit transactions are displayed. |
| TH-04 | Verify no transactions message when no records match filter | Login → Navigate to Transaction History → Apply filter with no matching transactions | Date Range: Future dates | Message displayed: "No transactions found". |
| TH-05 | Verify pagination of transaction history | Login → Navigate to Transaction History with more than 10 records → Navigate pages | N/A | Transactions are displayed across pages with correct navigation. |
| TH-06 | Verify transaction details on clicking a record | Login → Navigate to Transaction History → Click on a transaction | Transaction ID: 987654 | Transaction details displayed with ID, type, date, amount, and description. |



## 7. Customer Service Requests Test Cases

| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result |
|--------------|--------------|------------|-----------|-----------------|
| CS-01 | Verify customer can submit a service request | Login → Navigate to Contact / Customer Service → Fill in request form → Submit | Subject: "Issue with Login", Message: "Unable to login with valid credentials" | Confirmation message displayed: "Your request has been submitted successfully". |
| CS-02 | Verify mandatory fields validation on service request form | Login → Navigate to Contact / Customer Service → Leave required fields empty → Submit | Empty Subject & Message | Error message displayed: "Subject and Message are required". |
| CS-03 | Verify service request accepts attachments (if supported) | Login → Navigate to Customer Service → Upload file → Submit | File: screenshot.png | Request submitted successfully with attachment. |
| CS-04 | Verify user can view previously submitted requests (if supported) | Login → Navigate to Service Requests → View request history | N/A | List of submitted service requests displayed with status (Open/Closed). |
| CS-05 | Verify request submission with large input data | Login → Navigate to Customer Service → Enter long message (e.g., 500+ chars) → Submit | Subject: "Technical Issue", Message: long text | Request submitted successfully, system handles large input gracefully. |


