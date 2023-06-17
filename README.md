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

- The form is submitted and the submission \* confirmation page opens.

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
