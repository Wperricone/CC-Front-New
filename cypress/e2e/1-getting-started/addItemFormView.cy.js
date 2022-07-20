import {aliasQuery, aliasMutation, hasOperationName} from '../utils/graphql-test-utils';

describe('Add Item Form Page', () => {
beforeEach(() => {

  
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
  
  
  cy.visit('http://localhost:3000');
  // cy.get(".category-section").should("exist");
  //cy.get(".item-card").should("have.length", 3);
  cy.get(".nav-button").eq(2).contains("Profile").click();
  cy.url().should("eq", "http://localhost:3000/profile");
  cy.get("button").eq(3).click();
  cy.url().should("eq", "http://localhost:3000/login");
  cy.get('input').eq(0).click().type('tanna.schmeler@example.net');
  cy.get('input').eq(1).click().type('password');
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
  cy.get('button').eq(3).click().wait(2000);
  //cy.visit('http://localhost:3000');
  // cy.get('button').contains('Add Craft').click();
});

  it('Should have three inputs', () => {
      cy.get('button').contains('Add Craft').click();
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