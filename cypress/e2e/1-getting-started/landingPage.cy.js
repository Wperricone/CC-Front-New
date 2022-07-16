describe("Craft Circle landing page view", () => {
  beforeEach(() => {
    //cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})

    // possibly how stubbing may look?
    // cy.intercept('POST', 'https://craft-circle-be.herokuapp.com/graphql', (req) => {

    //   if (req.body.operationName === 'CreateChannel') {

    //   }
    
    //   if (req.body.operationName === 'Channels') {

    //   }
    // });

    cy.visit("http://localhost:3000");
  });

  it("Should have a Nav Bar", () => {
    cy.get(".nav-bar").should("exist");

    cy.get(".nav-button").eq(0).contains("All Crafts");
    cy.get(".nav-button").eq(1).contains("About");
    cy.get(".nav-button").eq(2).contains("Profile");

    cy.get(".logo").should('have.attr', 'src').should('include','CraftCircleLogo');
  });

  it("Should have a banner image", () => {
    cy.get(".landing-page-img").should('have.attr', 'src').should('include','bannerImage');
  });

  it("Should have categories and search bar", () => {
    cy.get(".category-section").should("exist");
    cy.get("h1").should("contain", "Categories:");
    cy.get(".category-section").children().should("have.length", 10);

    cy.get(".category-section").children().eq(0).should("contain", "sewing/knitting");
    cy.get(".category-section").children().eq(1).should("contain", "paper");
    cy.get(".category-section").children().eq(2).should("contain", "baking");
    cy.get(".category-section").children().eq(3).should("contain", "jewelry");
    cy.get(".category-section").children().eq(4).should("contain", "scrapbook/floral");
    cy.get(".category-section").children().eq(5).should("contain", "painting");
    cy.get(".category-section").children().eq(6).should("contain", "drawing");
    cy.get(".category-section").children().eq(7).should("contain", "wood working");
    cy.get(".category-section").children().eq(8).should("contain", "pottery");
    cy.get(".category-section").children().eq(9).should("contain", "other");

    cy.get("h1").should("contain", "Crafts:");
    cy.get("h1").should("contain", "Search:");
    cy.get("input").should("exist");
  });

  it("Should have item cards", () => {
    cy.get(".item-card").should("have.length", 6);
    cy.get(".item-card").eq(0).should("contain", "Purple Yarn");
    cy.get(".item-card").eq(0).should("contain", "Amount: 1");
    cy.get(".item-card").eq(0).should("contain", "Phillip");
  });

});
