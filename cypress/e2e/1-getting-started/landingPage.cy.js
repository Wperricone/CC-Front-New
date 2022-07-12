describe('Craft Circle landing page view', () => {
  beforeEach(() => {
    cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000")
  });

  it('Should have a Nav Bar', () => {
    cy.get('.nav-bar')
    .should('exist')
  });

  it('Should have two buttons', () => {
    cy.get('.nav-button')
    .eq(0)
    .contains('All Crafts')
    cy.get('.nav-button')
    .eq(1)
    .contains('Profile')
  });

  it('Should have an About section', () => {
    cy.get('.search-and-about-container')
    cy.get('h2')
    .contains('About')
  });

  it('Should have a search bar', () => {
    cy.get('.search-bar')
    cy.get('.search-button')
  });


}
)