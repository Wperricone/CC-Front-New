describe('Craft Circle landing page view', () => {
  beforeEach(() => {
    //cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000")
    cy.get('.item-card').eq(1).click()
  });

  it('should have an image and a button', () => {
    cy.get('.item-image-large').should('have.attr', 'src').should('include', '/static/media/myrlene-numa-SnITZTTeJVE-unsplash.d15e0e0e931c00c2e117.jpg')
    cy.get('button').contains('Contact Crafter')
  });

  it('should include five pieces of information: category, name, amount, crafter name and description', () => {
    cy.get(".category").contains("Drawing")
    cy.get('.craft-name').contains("Dixon Ticonderoga")
    cy.get('.amount').contains("Amount: 1")
    cy.get(".crafter-name").contains("Phillip")
    cy.get('.description').contains("The best pencil known to humankind")
  })

  // it('should allow the user to email a crafter using the contact crafter button', () => {
  //   cy.get('button').contains('Contact Crafter').click()
  //   cy.window()
  // })

  // not sure if it is possible to test a popup window for mail on macos. 
}
)
