describe('Craft Circle landing page view', () => {
  beforeEach(() => {
    cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000")
  });

  it.skip('Should have three inputs', () => {
    cy.get('.add-item')
    cy.get('input')
    .eq(0)
    cy.get('input')
    .eq(1)
    cy.get('input')
    .eq(2)
  });

  it.skip('Should be able to type in any input', () => {
    cy.get('input')
    .eq(0)
    .type('pencil')
    cy.get('input')
    .eq(0)
    .should('have.value', 'pencil')
  });

  it.skip('Should have a thank you message and a button', () => {
    cy.get('p')
    .contains('Thank you for contributing to the crafting community! Please fill out the following form:')
    cy.get('button')
    .contains('Add Item')
  });

  it.skip('Should be able to add an item', () => {
    cy.get('input')
    .eq(0)
    .type('pencil')
    cy.get('input')
    .eq(0)
    .should('have.value', 'pencil')
    cy.get('input')
    .eq(1)
    .type('7')
    cy.get('input')
    .eq(1)
    .should('have.value', '7')
    cy.get('input')
    .eq(2)
    .type('New')
    cy.get('input')
    .eq(2)
    .should('have.value', 'New')
    cy.get('button').click

  })

}
)