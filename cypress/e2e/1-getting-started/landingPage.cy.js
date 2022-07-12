describe("Craft Circle landing page view", () => {
  beforeEach(() => {
    //cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000");
  });

  it("Should have a Nav Bar", () => {
    cy.get(".nav-bar").should("exist");
  });

  it("Should have three buttons", () => {
    cy.get(".nav-button").eq(0).contains("All Crafts");
    cy.get(".nav-button").eq(1).contains("About");
    cy.get(".nav-button").eq(2).contains("Profile");
  });
});
