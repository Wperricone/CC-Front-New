describe('Craft Circle landing page view', () => {
  beforeEach(() => {
    cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000")
  });

  it.skip('Should have an image and a button', () => {
    cy.get('.item-image-large')
    .should('exist')
    cy.get('.contact-button')
    .contains('Contact Crafter')
  });

  it.skip('Should hav four different pieces of information', () => {
    cy.get('h2')
    .should('exist')
    cy.get('h3')
    .should('exist')
    cy.get('p')
    .eq(0)
    .should('exist')
    cy.get('p')
    .eq(1)
    .should('exist')
  })

}
)
