describe('Raffle Spec', () => {
  beforeEach(() => {
    cy.visit(
      'https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca'
    );
  });

  it('Customer enters the raffle with all required information and a reason', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Submission Confirmed');
    cy.contains('You have registed 1 submission');
  });

  it('Customer enters the raffle with all required information and without a reason ', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-8').type('40');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Submission Confirmed');
    cy.contains('You have registed 1 submission');
  });

  it('Customer enters the raffle multiple times with the same email', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Submission Confirmed');
    cy.contains('You have registed 1 submission');
    cy.reload();
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Submission Confirmed');
    cy.contains('You have registed 2 submission');
  });

  it('Customer enters the raffle multiple times with a new email', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Submission Confirmed');
    cy.contains('You have registed 1 submission');
    cy.reload();
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john@example.com');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Submission Confirmed');
    cy.contains('You have registed 2 submission');
  });

  it('Customer clicks on an input field and turns blue', () => {
    cy.get('#input-3').click().should('be.focused');
    cy.get('#input-4').click().should('be.focused');
    cy.get('#input-8').click().should('be.focused');
    cy.get('#input-9').click().should('be.focused');
  });

  it('Customer enters the raffle with empty forms', () => {
    cy.get('.button-sc-1ta45yz-0').click();
    cy.get('#input-3').should('have.css', 'border-color', 'rgb(255, 0, 0)');
    cy.get('#input-4').should('have.css', 'border-color', 'rgb(255, 0, 0)');
    cy.get('#input-8').should('have.css', 'border-color', 'rgb(255, 0, 0)');
  });

  it('Customer enters the raffle without a name', () => {
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.get('.button-sc-1ta45yz-0').should('exist');
    cy.contains('Submission Confirmed').should('not.exist');
  });

  it('Customer enters the raffle without an email', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').clickAndWait();
    cy.get('.button-sc-1ta45yz-0').should('exist');
    cy.contains('Submission Confirmed').should('not.exist');
  });

  it('Customer enters the raffle without age', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.doe@example.com');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').click();
    cy.contains('Must be 18 or older to enter.');
  });

  it('Customer enters the raffle with an invalid email', () => {
    cy.get('#input-3').type('John Doe');
    cy.get('#input-4').type('john.do');
    cy.get('#input-8').type('40');
    cy.get('#input-9').type('I should win');
    cy.get('.button-sc-1ta45yz-0').clickAndWait();
    cy.get('.button-sc-1ta45yz-0').should('exist');
    cy.contains('Submission Confirmed').should('not.exist');
  });

  it('Customer enters the raffle with invalid age', () => {
    for (let i = 0; i <= 17; i++) {
      cy.get('#input-3').type('John Doe');
      cy.get('#input-4').type('john.doe@example.com');
      cy.get('#input-8').type(i);
      cy.get('#input-9').type('I should win');
      cy.get('.button-sc-1ta45yz-0').click();
      cy.contains('Must be 18 or older to enter.');
      cy.reload();
    }
  });
});
