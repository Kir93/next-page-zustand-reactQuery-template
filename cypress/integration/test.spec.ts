describe('test', () => {
  it('visit', () => {
    cy.visit('/');
    cy.title().should('eq', 'Tirrilee Next');
  });
});
