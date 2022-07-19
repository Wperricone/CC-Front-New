//import { aliasQuery, hasOperationName } from '../utils/craftCircleUtils'

import { aliasQuery, hasOperationName } from "../utils/craftCircleUtils";

describe('Error Page Spec', () => {
   beforeEach(() => {
    cy.intercept("POST", "craft-circle-be.herokuapp.com/graphql", (req) => {
      const { body } = req
      if (hasOperationName(req, "getItems")) {
        req.alias = "gqlgetItemsQuery"
        req.reply((res) => {
          res.error = "TEST"
        })
      }
    });
    cy.visit("http://localhost:3000")
  //   cy.intercept("POST", "craft-circle-be.herokuapp.com/graphql", (req) => {
  //     // const { body } = req
  //     // req.reply((res) => {
  //     //   res.status = 500
  //     aliasQuery(req, "getItems")
     })
    
  //   //(req) => {
  //    // aliasQuery(req, "GET_ERROR")
  //     //  if (hasOperationName(req, "GET_ITEMS")) {
  //     //   req.alias = "gqlGET_ITEMSQuery"
  //     //   req.reply((res) => {
  //     //     res.status = 500
  //     //   })
  //     //  }
  //     //})
  //     cy.visit("http://localhost:3000")
  // })
    
    it('should contain an animation of a person painting and a message communicating that there is an error', () => {
        cy.get(".error-animation").should("be.visible")
        cy.get(".error-message").contains("Oh no, something went wrong! Please try again....")
      
    });
  });