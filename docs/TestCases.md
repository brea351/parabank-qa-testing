# Test Cases – ParaBank Online Banking Application

## Module: Authentication (Login)

| TC ID | Test Case Description | Test Steps | Test Data | Expected Result | Status |
|-------|------------------------|------------|-----------|-----------------|--------|
| TC_LOGIN_01 | Verify login with valid credentials | 1. Navigate to login page<br>2. Enter valid username and password<br>3. Click **Login** | Username: `john`<br>Password: `demo` | User is successfully logged in and redirected to **Accounts Overview** page | Pending |
| TC_LOGIN_02 | Verify login with invalid password | 1. Navigate to login page<br>2. Enter valid username and invalid password<br>3. Click **Login** | Username: `john`<br>Password: `wrongpass` | Error message displayed: *"The username and password could not be verified."* | Pending |
| TC_LOGIN_03 | Verify login with blank username and password | 1. Navigate to login page<br>2. Leave fields blank<br>3. Click **Login** | Username: ``<br>Password: `` | Error message displayed asking user to enter credentials | Pending |
| TC_LOGIN_04 | Verify logout functionality | 1. Login with valid credentials<br>2. Click **Logout** link | Username: `john`<br>Password: `demo` | User is logged out and redirected to login page | Pending |
