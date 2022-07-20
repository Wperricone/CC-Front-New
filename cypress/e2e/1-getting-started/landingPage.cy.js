import {aliasQuery, aliasMutation, hasOperationName} from '../utils/graphql-test-utils';

describe('Landing Page', () => {

it('Should display a landing page with a nav bar, carousel, category icons, and item cards', () => {  
    cy.intercept('POST', 'https://craft-circle-be.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'getItems')
      // aliasMutation(req, 'createDailyRecord')
      if (hasOperationName(req, 'getItems')) {
        req.alias = 'gqlgetItemsQuery'
        req.reply((res) => {
          res.body.data.items = [
            {
              amount: 5,
              available: "false",
              category: "Paper",
              description: "Austin fixie letterpress hashtag brunch normcore chambray.",
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
            }

          ]
          // res.body.data.getUser.weeklyAverageWaterUsage = 1000
          // res.body.data.getUser.thirtydayAverageShowerTime = 2000
          // console.log("Running")
        })
      } else {
        console.log("Not Running")
      }
    })
    cy.visit('http://localhost:3000/')
    //cy.wait('@gqlgetItemsQuery')

})
});

// describe("Craft Circle landing page view", () => {
//   beforeEach(() => {
//     // cy.intercept("POST", "craft-circle-be.herokuapp.com/graphql", (req) => {
//     //   aliasQuery(req, "getItems")
//     //   // if (req.body.operationName === "getItems") {
//     //   //   req.alias = "GetItems"
//     //   //   req.continue()
//     //   // }
//     // })
//     // cy.visit("http://localhost:3000");
    
//     // possibly how stubbing may look?
//     // cy.intercept('POST', 'https://craft-circle-be.herokuapp.com/graphql', (req) => {
      
//       //   if (req.body.operationName === 'CreateChannel') {
        
//         //   }
        
//         //   if (req.body.operationName === 'Channels') {
          
//           //   }
//           // });
          
//         });
        
//   it("Should have a Nav Bar", () => {
//     cy.wait("@gqlgetItemsQuery");
//     cy.get(".nav-bar").should("exist");

//     cy.get(".nav-button").eq(0).contains("All Crafts");
//     cy.get(".nav-button").eq(1).contains("About");
//     cy.get(".nav-button").eq(2).contains("Profile");

//     cy.get(".logo")
//       .should("have.attr", "src")
//       .should("include", "CraftCircleLogo");
//   });

//   it("Should have a banner image", () => {
//     cy.get(".landing-page-img")
//       .should("have.attr", "src")
//       .should("include", "bannerImage");
//   });

//   it.only("Should have categories and search bar", () => {
//     cy.intercept("POST", "craft-circle-be.herokuapp.com/graphql", (req) => {
//       aliasQuery(req, "getItems")
//       // if (req.body.operationName === "getItems") {
//       //   req.alias = "GetItems"
//       //   req.continue()
//       // }
//     })
//     cy.visit("http://localhost:3000");
//     cy.wait("@gqlgetItemsQuery");
//     cy.get(".category-section").should("exist");
//     cy.get("h1").should("contain", "Categories:");
//     cy.get(".category-section").children().should("have.length", 10);

//     cy.get(".category-section")
//       .children()
//       .eq(0)
//       .should("contain", "sewing/knitting");
//     cy.get(".category-section").children().eq(1).should("contain", "paper");
//     cy.get(".category-section").children().eq(2).should("contain", "baking");
//     cy.get(".category-section").children().eq(3).should("contain", "jewelry");
//     cy.get(".category-section")
//       .children()
//       .eq(4)
//       .should("contain", "scrapbook/floral");
//     cy.get(".category-section").children().eq(5).should("contain", "painting");
//     cy.get(".category-section").children().eq(6).should("contain", "drawing");
//     cy.get(".category-section")
//       .children()
//       .eq(7)
//       .should("contain", "wood working");
//     cy.get(".category-section").children().eq(8).should("contain", "pottery");
//     cy.get(".category-section").children().eq(9).should("contain", "other");

//     cy.get("h1").should("contain", "Crafts:");
//     cy.get("h1").should("contain", "Search:");
//     cy.get("input").should("exist");
//   });

//   // it("Should have item cards", () => {
//   //   cy.get(".item-card").should("have.length", 6);
//   //   cy.get(".item-card").eq(0).should("contain", "Purple Yarn");
//   //   cy.get(".item-card").eq(0).should("contain", "Amount: 1");
//   //   cy.get(".item-card").eq(0).should("contain", "Phillip");
//   // });

//   // it("Should be able to sort by category", () => {
//   //   cy.get(".category-section").children().eq(1).click();
//   //   cy.get(".item-card").should("have.length", 1);
//   //   cy.get(".item-card")
//   //     .eq(0)
//   //     .should("contain", "Multicolored Construction Paper");

//   //   cy.get(".category-section").children().eq(0).click();
//   //   cy.get(".item-card").should("have.length", 1);
//   //   cy.get(".item-card").eq(0).should("contain", "Purple Yarn");

//   //   cy.get(".category-section").children().eq(0).click();
//   //   cy.get(".item-card").should("have.length", 6);
//   // });

//   // it("Should be able to search by craft name", () => {
//   //   cy.get("input").type("multi");
//   //   cy.get(".item-card").should("have.length", 1);
//   //   cy.get(".item-card")
//   //     .eq(0)
//   //     .should("contain", "Multicolored Construction Paper");

//   //   cy.get("input").type("example");
//   //   cy.get(".item-card").should("have.length", 0);
//   //   cy.get("h2").should("contain", "Nothing Found!");
//   // });

//   // it("Should be able to search by name and category", () => {
//   //   cy.get("input").type("ti");
//   //   cy.get(".item-card").should("have.length", 2);
//   //   cy.get(".item-card").eq(0).should("contain", "Dixon Ticonderoga");
//   //   cy.get(".category-section").children().eq(1).click();
//   //   cy.get(".item-card").should("have.length", 1);
//   //   cy.get(".item-card")
//   //     .eq(0)
//   //     .should("contain", "Multicolored Construction Paper");
//   // });

//   // it("Should be able to click on an item card and go to a details page for that item", () => {
//   //   cy.get(".item-card").eq(0).click();
//   //   cy.url().should("contain", "http://localhost:3000/craft/1");
//   // });

//   // it("Should be ble to navigate through the Nav Bar buttons", () => {
//   //   cy.get(".nav-button").eq(1).click();
//   //   cy.url().should("contain", "http://localhost:3000/about");

//   //   cy.get(".nav-button").eq(0).click();
//   //   cy.url().should("contain", "http://localhost:3000");

//   //   cy.get(".nav-button").eq(2).click();
//   //   cy.url().should("contain", "http://localhost:3000/profile");
//   // });
// });
