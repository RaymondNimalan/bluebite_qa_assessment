# bluebite_qa_assessment

## Raymond Nimalan

---

## BUG REPORT

### Preconditions:

- Navigate to the raffle page

### Bug 1

Summary:

- Customer is able to submit the form without providing their email

Steps to Reproduce:

- Type a name into the name input field
- Type a valid age into the age input field
- Click the submit button

Actual Result:

- The form is submitted and the submission confirmation page opens.

Expected Result:

- The form shouldn’t submit without a provided email.
- The email input field should turn red with a failed submission.

### Bug 2

Summary:

- Customer can input an invalid email and submit the form

Steps to Reproduce:

- Type a name into the name input field
- Type an invalid email address into the email input field
- Type a valid age into the age input field
- Click the submit button

Actual Result:

- The form submits and opens the submission confirmation page.
- The email input field should turn red with a failed submission.

Expected Result:

- The form shouldn’t submit with an invalid email address.
- The email input field should turn red to indicate a failed form submission

### Bug 3

Summary:

- Typo in confirmation page. “Registered” is spelled as “registed”

Steps to Reproduce:

- Type name into name input field
- Type valid email into email input field
- Type valid age into age input field
- Click submit button

Actual Result:

- “You have registed 1 submissions.”

Expected Result:

- “You have registered 1 submissions.”

### Bug 4

Summary:

- Customer is able to submit a form with an invalid age of 17

Steps to Reproduce:

- Type a name into the name input field
- Type a valid email address into the email input field
- Type 17 into the age input field
- Click the submit button

Actual Result:

- Form is submitted successfully.

Expected Result:

- Page displays message informing customer that raffle is 18

### Bug 5

Summary:

- Required input fields don’t change border color when field is empty on submission

Steps to Reproduce:

- Click submit

Actual Result:

- Input fields don’t change color and remain grey.

Expected Result:

- Input field turns red when a required field is submitted empty

---

## Test Cases

Precondition:
Navigate to the raffle page

### Test Case 1

The customer enters the raffle with a reason

- Enter a name
- Enter a valid email
- Enters a valid age
- Enters a reason
- Click on submit

Expected Result:

- Raffle is submitted successfully and shows confirmation page

Test Result: PASSED

### Test Case 2

The customer enters the raffle without a reason

- Enter a name
- Enter a valid email
- Enter a valid age
- Click on submit

Expected Result:

- Raffle is submitted successfully and shows confirmation page

Test Result: PASSED

### Test Case 3

The customer enters the raffle multiple times with the same email

- Enter valid data
- Click submit
- Refresh page
- Enter valid data using the previous email
- Click submit

Expected Result:

- Raffle is submitted successfully and shows the confirmation page with 1 submission
- After refreshing, a second submission with the same email shows the confirmation page with 2 submission

Test Result: PASSED

### Test Case 4

The customer enters the raffle multiple times with a different email

- Enter valid data
- Refresh page
- Click submit
- Enter valid data using a different email
- Click submit

Expected Result:

- Raffle is submitted successfully and shows the confirmation page with 1 submission
- After refreshing, a second submission with a different email shows the confirmation page with 2 submission

Test Result: PASSED

### Test Case 5

The customer clicks on each of the input fields

- Click on name field
- Click on email field
- Click on age field
- Click on reason field

Expected Result:

- The border of each field will turn blue when focused

Test Result: PASSED

### Test Case 6

The customer enters the raffle without entering any data

- Leave all fields empty
- Click submit

Expected Result:

- Border changes red for required fields
- Form is not submitted

Test Result: FAILED

### Test Case 7

The customer enters the raffle without a name

- Leave name field empty
- Fill all other fields with valid data
- Click submit

Expected Result:

- Form is not submitted

Test Result: PASSED

### Test Case 8

The customer enters the raffle without an email

- Leave email field empty
- Fill all other fields with valid data
- Click submit

Expected Result:

- Form is not submitted

Test Result: FAILED

### Test Case 9

The customer enters the raffle without an age

- Leave age field empty
- Fill all other fields with valid data
- Click submit

Expected Result:

- Form is not submitted

Test Result: PASSED

### Test Case 10

The customer enters the raffle with an invalid email

- Enter an invalid email into the email field
- Fill all other fields with valid data
- Click submit

Expected Result:

- Form is not submitted

Test Result: FAILED

### Test Case 11

The customer enters the raffle with an age under 18

- Enter age starting at 17 into the age field
- Fill all other fields with valid data
- Click submit
- Refresh page
- Repeat steps 1-4 and decrementing the age until 0 is tested

Expected Result:

- Form is not successfully submitted
- Page notifies customer that age doesn’t meet the requirements.

Test Result: FAILED

## How to run tests

### Cypress Test Runner

- npx cypress open
- run tests in browser using raffle.cy.js spec

### CLI

- navigate to root
- npx cypress run --spec "cypress/e2e/raffle.cy.js"
