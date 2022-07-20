import {
  aliasQuery,
  aliasMutation,
  hasOperationName,
} from "../utils/graphql-test-utils";

describe("User Login and Profile Page spec", () => {
  it("Should be able to go to the profile page, navigate to the login, sign in as a user, go back to the profile page logged in, display user info and inventory, add an item, delete an item, change profile colors, and log out", () => {
    cy.intercept(
      "POST",
      "https://craft-circle-be.herokuapp.com/graphql",
      (req) => {
        const { body } = req;
        aliasQuery(req, "getItems");
        if (hasOperationName(req, "getItems")) {
          req.alias = "gqlgetItemsQuery";
          req.reply((res) => {
            res.body.data.items = [
              {
                amount: 5,
                available: "false",
                category: "Paper",
                description:
                  "Austin fixie letterpress hashtag brunch normcore chambray.",
                id: "1",
                name: "Refreshed-copper Awesome Rubber Chair",
                status: "Give",
                user: {
                  email: "collins_alvin@example.com",
                  id: "1",
                  name: "Alvin Collins",
                  __typename: "User",
                },
                __typename: "Item",
              },

              {
                amount: 1,
                available: "true",
                category: "Sewing/Knitting",
                description: "Purple yarn.",
                id: "2",
                name: "Purple Yarn",
                status: "Give",
                user: {
                  email: "collins_alvin@example.com",
                  id: "1",
                  name: "Alvin Collins",
                  __typename: "User",
                },
                __typename: "Item",
              },

              {
                amount: 1,
                available: "true",
                category: "Paper",
                description: "New package of color construction paper.",
                id: "3",
                name: "Construction Paper",
                status: "Give",
                user: {
                  email: "joe@example.com",
                  id: "2",
                  name: "Crafty Joe",
                  __typename: "User",
                },
                __typename: "Item",
              },
            ];
          });
        } else {
          console.log("Not Running");
        }
      }
    );

    cy.intercept(
      "POST",
      "https://craft-circle-be.herokuapp.com/graphql",
      (req) => {
        const { body } = req;
        aliasQuery(req, "getAUser");
        if (hasOperationName(req, "getAUser")) {
          req.alias = "gqlgetAUserQuery";
          req.reply((res) => {
            res.body.data.details = {
              email: "tanna.schmeler@example.net",
              id: "9",
              items: [
                {
                  amount: 5,
                  available: "false",
                  category: "Paper",
                  description:
                    "Austin fixie letterpress hashtag brunch normcore chambray.",
                  id: "1",
                  name: "Refreshed-copper Awesome Rubber Chair",
                  status: "Give",
                  __typename: "Item",
                },
                {
                  amount: 1,
                  available: "true",
                  category: "Sewing/Knitting",
                  description: "Purple yarn.",
                  id: "2",
                  name: "Purple Yarn",
                  status: "Give",
                  __typename: "Item",
                },
              ],
              name: "Tanna Test",
              __typename: "User",
            };
          });
        } else {
          console.log("Not Running");
        }
      }
    );
    cy.visit("http://localhost:3000/");
    // cy.wait("@gqlgetAUserQuery");
    cy.wait("@gqlgetItemsQuery");
    cy.get(".nav-bar").should("exist");

    cy.get(".nav-button").eq(2).click();
    cy.get("button").eq(3).click();

    cy.get("input").eq(0).type("tanna.schmeler@example.net");
    cy.get("input").eq(1).type("password");
    cy.get("button").eq(3).click();
  });
});

// beforeEach(() => {
//   // cy.intercept("craft-circle-be.herokuapp.com/graphql", {fixture: "userProfile.json"})
//   cy.visit("http://localhost:3000").wait(2000);
//   cy.get("button").contains("Profile").click();
// });

// it("Should be able to naviagte there from the landing page", () => {
//   cy.url().should("include", "/profile");
// });

// it("Should have the users's info", () => {
//   cy.get(".user-banner-img")
//     .should("have.attr", "src")
//     .should(
//       "include",
//       "/static/media/userBannerImg.00a559cd8e1ddf13f285.jpg"
//     );
//   cy.get(".profile-picture")
//     .should("have.attr", "src")
//     .should(
//       "include",
//       "/static/media/CCProfilePic-01.05c2ff063290d5757c55.png"
//     );
//   cy.get(".profile-user-name").should("have.text", "Phillip");
//   cy.get(".profile-user-email").should("have.text", "phillip@email.com");
// });

// it("Should include a section with the user's inventory full of craft items", () => {
//   cy.contains("Crafts I'm Offering");
//   cy.get(".item-container").children().should("have.length", 2);
//   cy.get(".item-container").children().eq(0).should("contain", "Purple Yarn");
// });

// it.skip("Should be able to delete a craft item", () => {
//   cy.get(".item-container").children().eq(0).get("button").click();
// });

// it.skip("Should be able to add a craft item", () => {
//   cy.get("button").contains("Add Craft").click();
//   cy.url().should("eq", "http://localhost:3000/contribution");
// });

// it("Should be able to change the profile's color", () => {
//   cy.get(".color-changer").contains("Pick Profile Color:");
//   cy.get(".color-box")
//     .last()
//     .should(
//       "have.css",
//       "background",
//       "rgb(161, 142, 150) none repeat scroll 0% 0% / auto padding-box border-box"
//     );
//   cy.get(".color-box").first().click();
//   cy.get(".profile-user-name").should(
//     "have.css",
//     "color",
//     "rgb(173, 146, 192)"
//   );
// });

// it("Should be able to log out", () => {
//   cy.get("button").last().contains("Log Out").click();
//   cy.url().should("eq", "http://localhost:3000/login");
// });

// it.skip("Should tell the user if they are not logged in", () => {});
