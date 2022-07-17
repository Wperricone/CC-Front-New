describe("User Profile Page spec", () => {
  beforeEach(() => {
    // cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000");
    cy.get("button").contains("Profile").click();
  });

  it("Should be able to naviagte there from the landing page", () => {
    cy.url().should("include", "/profile");
  });

  it("Should have the users's info", () => {
    cy.get(".user-banner-img")
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/userBannerImg.00a559cd8e1ddf13f285.jpg"
      );
    cy.get(".profile-picture")
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/CCProfilePic-01.05c2ff063290d5757c55.png"
      );
    cy.get(".profile-user-name").should("have.text", "Phillip");
    cy.get(".profile-user-email").should("have.text", "phillip@email.com");
  });

  it("Should include a section with the user's inventory full of craft items", () => {
    cy.contains("Crafts I'm Offering");
    cy.get(".item-container").children().should("have.length", 2);
    cy.get(".item-container").children().eq(0).should("contain", "Purple Yarn");
  });

  it.skip("Should be able to delete a craft item", () => {
    cy.get(".item-container").children().eq(0).get("button").click();
  });

  it.skip("Should be able to add a craft item", () => {
    cy.get("button").contains("Add Craft").click();
    cy.url().should("eq", "http://localhost:3000/contribution");
  });

  it("Should be able to change the profile's color", () => {
    cy.get(".color-changer").contains("Pick Profile Color:");
    cy.get(".color-box")
      .last()
      .should(
        "have.css",
        "background",
        "rgb(161, 142, 150) none repeat scroll 0% 0% / auto padding-box border-box"
      );
    cy.get(".color-box").first().click();
    cy.get(".profile-user-name").should(
      "have.css",
      "color",
      "rgb(173, 146, 192)"
    );
  });

  it("Should be able to log out", () => {
    cy.get("button").last().contains("Log Out").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });

  it.skip("Should tell the user if they are not logged in", () => {});
});
