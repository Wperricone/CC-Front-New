describe('Error Page Spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it('should contain an animation of a person painting and a message communicating that there is an error', () => {
    cy.get(".error-animation").should("be.visible")
    cy.get(".error-message").contains("Oh no, something went wrong! Please try again....")
  });

  // it("should disappear after the user has selected another page", () => {
  //   cy.get(".error-page").should("be.visible")
  //   cy.get(".nav-button").eq(0).contains("All Crafts").click;
  //   cy.get(".error-page").should("not.exist")
  //   cy.get(".nav-bar").should("be.visible")
  // });

})