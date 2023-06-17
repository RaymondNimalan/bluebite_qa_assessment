describe('Raffle Entry', () => {
  beforeEach(() => {
    cy.visit(
      'https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca'
    );

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
  });
});
