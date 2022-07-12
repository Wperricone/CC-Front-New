describe('Craft Circle landing page view', () => {
  beforeEach(() => {
    cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000")
  });

  it('Should have a bio section with a picture, name and contact info', () => {
    cy.get('.bio')
    .should(exist)
    cy.get('.profile-picture')
    .should(exist)
    cy.get('h2')
    .contains('Name')
    cy.get('h3')
    .eq(0)
    .contains('Contact info/ Location')
  });

  it('Should have an available items section with a title, button and a place for craft carda', () => {
    cy.get('.available-items')
    .should('exist')
    cy.get('h3')
    .eq(1)
    .contains('Supplies I am Offering')
    cy.get('button')
    .contains('Donate')
    cy.get('.user-cards')
    .should(exist)
  });

}
)