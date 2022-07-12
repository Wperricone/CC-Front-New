describe('Craft Circle landing page view', () => {
  beforeEach(() => {
    cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000")
  });

  it('Should have an image and three sections', () => {
    cy.get('.item-card')
    .should('exist')
    cy.get('.stock-img')
    .should('exist')
    cy.get('p')
    .eq(0)
    .contains('Craft Name')
    cy.get('p')
    .eq(1)
    .contains('Name')
    cy.get('p')
    .eq(2)
    .contains('Amount')
  });

}
)