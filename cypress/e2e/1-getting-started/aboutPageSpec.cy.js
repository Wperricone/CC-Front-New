import { click } from "@testing-library/user-event/dist/click";

describe("About Page spec", () => {
  beforeEach(() => {
    // cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
    cy.visit("http://localhost:3000").wait(2000);
    cy.get("button").contains("About").click();
  });

  it("should have a title and a paragraph describing the application", () => {
    cy.get(".about-heading").contains("we are Crafters");
    cy.get(".about-paragraph").contains(
      "Craft Circle is an online community where crafters can borrow and donate supplies in an effort to make creative outlets more accessible. Currently, this platform is meant for community members who reside in the Denver Metro area."
    );
  });

  it("should have a section with an image, a paragraph inviting the user to the community, and a button to join", () => {
    cy.get(".join-cta-container").scrollIntoView();
    cy.get(".cta-image")
      .should("have.attr", "src")
      .should("include", "/static/media/ctaImage1.1694cf5a7b1c12665f9e.png");
    cy.get(".cta-paragraph").should(
      "contain",
      "Whether you're looking to share supplies or need to source something for your next creative project, Craft Cirle is the virtal marketplace for you. Click below to join our community of Crafters today and get crafting!"
    );
    cy.get("button").contains("Get Started");
  });

  it("should have a footer that includes an image, the logo and a tagline", () => {
    cy.get(".footer").scrollIntoView();
    cy.get(".footer-image")
      .should("have.attr", "src")
      .should("include", "/static/media/bannerImage4.48bf2aa73069ed02ac35.png");
    cy.get(".footer-logo")
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/CraftCircleLogo-06.56481d6d54710efa4e63.png"
      );
    cy.get(".footer-tagline").contains(
      "crafting community one stitch at a time"
    );
  });

  it("should allow the user to click the Get Started button and visit their profile page", () => {
    cy.get(".join-cta-container").scrollIntoView();
    cy.get("button").contains("Get Started").click();
    cy.url().should("eq", "http://localhost:3000/profile");
  });

  it.skip("should propmt the user to create a profile or login if they are not logged in", () => {
    //this test will be added once login functionality is implemented and we can simulate a user flow as such.
  });

  it("should allow the user to return to the homepage", () => {
    cy.get("button").contains("All Crafts").click();
    cy.get(".landing-page-img")
      .should("have.attr", "alt")
      .should("include", "crafts-in-action");
  });

  it.skip("should allow the user to return to visit their profile from the nav bar", () => {
    cy.get("button").contains("Profile").click();
    cy.get(".about-container").contains("we are Crafters");
  });
  //skipped to be updated when profile component is completed.
});
